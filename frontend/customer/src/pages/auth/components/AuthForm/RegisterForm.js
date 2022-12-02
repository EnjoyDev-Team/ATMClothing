/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useNavigate } from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber, getIdToken, onAuthStateChanged } from 'firebase/auth';
import { result } from 'lodash';
import classes from './AuthForm.module.scss';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import SocialLogin from '../SocialLogin/SocialLogin';
import { auth } from '../../../../configs/firebase-config';
import { validatePassword, validatePhone } from './handler';
import { axiosPrivate } from '../../../../api/axios';

const RegisterForm = () => {
  const [step, setStep] = useState(1);
  const [token, setToken] = useState('');

  const [verifyToken, setVerifyToken] = useState('');
  const [tokenFirebase, setTokenFirebase] = useState('');
  const navigate = useNavigate();

  const [accountWrong, setAccountWrong] = useState(false);
  const [accountExist, setAccountExist] = useState(false);
  const [passwordWrong, setPasswordWrong] = useState(false);
  const [confirmPasswordWrong, setConfirmPasswordWrong] = useState(false);

  const [phone, setPhone] = useState('');
  const [OTPConfirm, setOTPConfirm] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
      axiosPrivate.post('/auth/register', obj).then(res => {
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

  const handleConfirmOTP = (e) => {
    e.preventDefault();
    const { confirmationResult } = window;
    console.log(OTPConfirm);
    if (OTPConfirm.length === 6) {
      confirmationResult.confirm(OTPConfirm).then((result) => {
        console.log(result);
        setStep(3);
        setToken(confirmationResult.user);
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            // const token = await getIdToken(user);
            setTokenFirebase(await getIdToken(user));
            // const token = await getIdToken(user);
            console.log(`Vinh: ${await getIdToken(user)}`);
            // console.log(tokenFirebase);
            console.log(user);
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
    const objPass = {
      phone,
      password,
      tokenVerify: verifyToken,
      tokenFirebase,
    };

    console.log(phone);
    console.log(password);
    console.log(verifyToken);
    console.log(tokenFirebase);

    if (password === confirmPassword) {
      axiosPrivate.post('/auth/register/password', objPass).then(res => {
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
        setValue={setPhone}
        validation={validatePhone}
        maxLength="10"
        required
      />

      <ButtonCT primary borderRadius medium className={classes.btn}>
        Tiếp tục
      </ButtonCT>
      <div id="verify-container" />
    </form>
  );

  const StepOTP = (
    <form onSubmit={handleConfirmOTP}>
      <InputCT
        placeholder="Nhập OTP"
        setValue={setOTPConfirm}
        type="tel"
        maxLength="6"
        required
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
        onClick={handleConfirmOTP}
      >
        Xác nhận
      </ButtonCT>

      <p className={classes.policy}>
        Bằng việc đăng kí, bạn đã đồng ý với
        {' '}
        <strong>ATM Clothing</strong>
        {' '}
        về
        <br />
        <span>Điều khoản dịch vụ</span>
        {' '}
        &
        {' '}
        <span>Chính sách bảo mật</span>
      </p>
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
        Đăng ký
      </ButtonCT>
    </form>
  );

  return (
    <div className={classes['auth-form']}>
      <div className={classes['auth-form__form']}>
        <h3>Đăng ký</h3>
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

RegisterForm.propTypes = {

};

export default RegisterForm;
