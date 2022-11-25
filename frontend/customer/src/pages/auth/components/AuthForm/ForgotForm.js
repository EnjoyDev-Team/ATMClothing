import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber, getIdToken, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../../configs/firebase-config';
import classes from './AuthForm.module.scss';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import SocialLogin from '../SocialLogin/SocialLogin';
import { validatePassword, validatePhone } from './handler';

const ForgotForm = () => {
  const [phone, setPhone] = useState('');
  const [otp, setOTP] = useState('');
  const [step, setStep] = useState(1);
  const [token, setToken] = useState('');

  console.log(phone);

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('verify-container', {
      size: 'invisible',
      callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
      }
    }, auth);
  };

  const requestOTP = () => {
    if (phone !== '') {
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

  const confirmOTP = () => {
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
            const token = await getIdToken(user);
            console.log(token);
          }
        });
      }).catch((error) => {
        // User couldn't sign in (bad verification code?)
        console.log(error);
        // ...
      });
    }
  };

  // const handleSubmitPassword = () => {

  // };

  const StepPhone = (
    <>
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
        className={classes.btn}
        onClick={requestOTP}
      >
        Tiếp tục
      </ButtonCT>

      <div id="verify-container" />
    </>
  );

  const StepOTP = (
    <>
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
    </>
  );

  const StepPassword = (
    <>
      <InputCT placeholder="Nhập mật khẩu" type="password" validation={validatePassword} required />
      <InputCT placeholder="Nhập lại mật khẩu" type="password" validation={validatePassword} required />

      <ButtonCT primary borderRadius medium className={classes.btn}>
        Cập nhật
      </ButtonCT>
    </>
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
