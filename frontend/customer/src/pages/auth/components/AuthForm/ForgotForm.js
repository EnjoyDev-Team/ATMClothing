/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber, getIdToken, onAuthStateChanged } from 'firebase/auth';
import axios from 'axios';
import { auth } from '../../../../configs/firebase-config';
import classes from './AuthForm.module.scss';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import SocialLogin from '../SocialLogin/SocialLogin';
import { validatePassword, validatePhone } from './handler';
import { axiosPrivate } from '../../../../api/axios';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';

const ForgotForm = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOTP] = useState('');
  const [step, setStep] = useState(1);
  const [token, setToken] = useState('');
  const axiosPrivate = useAxiosPrivate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [verifyToken, setVerifyToken] = useState('');
  const [tokenFirebase, setTokenFirebase] = useState('');

  const navigate = useNavigate();
  console.log(phone);

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('verify-container', {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);
  };

  const requestOTP = (e) => {
    e.preventDefault();
    if (phone !== '') {
      const obj = {
        phone
      };
      axiosPrivate.post('/auth/forgot', obj).then(res => {
        console.log(res.data);
        // auth.setAccessToken(res.data.access_token);
        setVerifyToken(res.data.verify_token);
      }).catch(err => {
        console.log(err);
      });
      generateRecaptcha();
      const appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, `+84${phone}`, appVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          console.log(confirmationResult);
          setStep(2);
        }).catch((error) => {
          console.log(error);
        });
    }
  };

  const confirmOTP = (e) => {
    e.preventDefault();
    const { confirmationResult } = window;
    console.log(otp);
    if (otp.length === 6) {
      confirmationResult.confirm(otp).then((result) => {
        // User signed in successfully.
        console.log(result);
        setStep(3);
        setToken(confirmationResult.user);
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            setTokenFirebase(await getIdToken(user));
            // const token = await getIdToken(user); 0862573811
            console.log(await getIdToken(user));
          }
        });
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.log(error);
        // ...
      });
    }
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();
    const obj = {
      phone,
      password,
      tokenVerify: verifyToken,
      tokenFirebase,
    };

    console.log(password);
    console.log(confirmPassword);
    console.log(verifyToken);
    console.log(tokenFirebase);

    if (password === confirmPassword) {
      axiosPrivate.post('/auth/forgot/password', obj).then(res => {
        console.log(res.data);
        navigate('/login');
      }).catch(err => {
        console.log(err);
      });
    }
  };

  const StepPhone = (
    <form onSubmit={requestOTP}>
      <InputCT
        placeholder="Nhập số điện thoại"
        type="tel"
        validation={validatePhone}
        setValue={setPhone}
        maxLength="10"
        required
      />

      <ButtonCT
        primary
        borderRadius
        medium
        type="submit"
        className={classes.btn}
        onClick={requestOTP}
      >
        Tiếp tục
      </ButtonCT>

      <div id="verify-container" />
    </form>
  );

  const StepOTP = (
    <form onSubmit={confirmOTP}>
      <p className={classes.notice}>Chúng tôi đã gửi mã OTP vào số điện thoại của bạn</p>
      <InputCT
        placeholder="Nhập OTP"
        type="tel"
        maxLength="6"
        required
        setValue={setOTP}
      />
      <p className={classes.messageOTP}>
        Bạn không nhận được mã OTP?
        {' '}
        <span>Gửi lại</span>
        {' '}
        <span>
          sau
          {' '}
          <span className={classes.messageOTP__time}>1:59s</span>
        </span>
      </p>

      <ButtonCT
        primary
        borderRadius
        medium
        className={classes.btn}
        onClick={confirmOTP}
      >
        Xác nhận
      </ButtonCT>
    </form>
  );

  const StepPassword = (
    <form onSubmit={handleConfirmPassword}>
      <InputCT
        placeholder="Nhập mật khẩu"
        type="password"
        setValue={setPassword}
        validation={validatePassword}
        required
      />
      <InputCT
        placeholder="Nhập lại mật khẩu"
        type="password"
        setValue={setConfirmPassword}
        validation={validatePassword}
        required
      />

      <ButtonCT
        primary
        borderRadius
        medium
        className={classes.btn}
        onClick={handleConfirmPassword}
      >
        Cập nhật
      </ButtonCT>
    </form>
  );

  return (
    <div className={classes['auth-form']}>
      <div className={classes['auth-form__form']}>
        <h3>Quên mật khẩu</h3>
          {step === 1 && StepPhone}
          {step === 2 && StepOTP}
          {step === 3 && StepPassword}
      </div>

      <div className={classes['auth-form__footer']}>
        <SocialLogin />
        <p>
          Bạn đã có tài khoản?
          {' '}
          <Link to="/login">Đăng nhập</Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotForm;
