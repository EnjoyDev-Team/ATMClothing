/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber, getIdToken, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../../../configs/firebase-config';
import classes from './AuthForm.module.scss';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import SocialLogin from '../SocialLogin/SocialLogin';
import { validatePassword, validatePhone, validateOTP } from './handler';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import useMergeState from '../../../../hooks/useMergeState';

const ForgotForm = () => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const [step, setStep] = useState(1);
  const [timer, setTimer] = useState(0);
  const [state, setState] = useMergeState({
    error: '',
    loading: false,
    resend: true
  });

  const [verifyToken, setVerifyToken] = useState('');
  const [tokenFirebase, setTokenFirebase] = useState('');

  const [phone, setPhone] = useState('');
  const [otp, setOTP] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');

  const generateRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier('verify-container', {
        size: 'invisible',
        callback: (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        }
      }, auth);
    }
  };

  const resendOTP = () => {
    if (!state.resend) { return; }

    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+84${phone}`, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        setStep(2);
        setState({
          loading: false,
          error: ''
        });
      }).catch((error) => {
        console.log(error);
        setState({ loading: false });
      });
    setState({ resend: false });
    setTimer(90);
  };

  const requestOTP = (e) => {
    e.preventDefault();

    if (phone !== '' && phone.length >= 10) {
      setState({ loading: true });
      const obj = {
        phone
      };
      axiosPrivate.post('/auth/forgot', obj).then(res => {
        setVerifyToken(res.data.verify_token);

        generateRecaptcha();
        const appVerifier = window.recaptchaVerifier;
        signInWithPhoneNumber(auth, `+84${phone}`, appVerifier)
          .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            setStep(2);
            setState({
              loading: false,
              error: ''
            });
          }).catch((error) => {
            console.log(error);
            setState({ loading: false });
          });
        setState({ resend: false });
        setTimer(90);
      }).catch(err => {
        console.log(err);
        setState({
          loading: false,
          error: 'Số điện thoại chưa có tài khoản! Vui lòng đăng ký!'
        });
      });
    }
  };

  const confirmOTP = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      setState({ loading: true });
      const { confirmationResult } = window;
      confirmationResult.confirm(otp).then((result) => {
        setStep(3);
        onAuthStateChanged(auth, async (user) => {
          if (user) {
            setTokenFirebase(await getIdToken(user));
          }
        });
        setState({
          loading: false,
          error: ''
        });
      }).catch((error) => {
        console.log(error);
        setState({
          loading: false,
          error: 'OTP không hợp lệ. Vui lòng thử lại!'
        });
      });
    }
  };

  const handleConfirmPassword = (e) => {
    e.preventDefault();

    if (password === confirmPassword) {
      setState({ loading: true });
      const objPass = {
        phone,
        password,
        tokenVerify: verifyToken,
        tokenFirebase,
      };
      axiosPrivate.post('/auth/forgot/password', objPass).then(res => {
        navigate('/login');
      }).catch(err => {
        console.log(err);
        setState({ loading: false });
      });
    } else {
      setState({ error: 'Confirm password không hợp lệ!' });
    }
  };

  useEffect(() => {
    let timeInterval;
    if (step === 2 && !state.resend && timer > 0) {
      timeInterval = setInterval(() => {
        if (timer > 0) {
          setTimer(prev => prev - 1);
        }
      }, 1000);
    }
    if (timer <= 0) {
      setState({ resend: true });
    }
    return () => {
      clearInterval(timeInterval);
    };
  }, [step, state.resend, timer]);

  const StepPhone = (
    <form onSubmit={requestOTP}>
      <InputCT
        placeholder="Nhập số điện thoại"
        type="tel"
        validation={validatePhone}
        setValue={setPhone}
        maxLength="10"
        message={state.error}
        required
      />

      <ButtonCT
        primary
        borderRadius
        medium
        type="submit"
        loading={state.loading}
        className={classes.btn}
        onClick={requestOTP}
      >
        Tiếp tục
      </ButtonCT>
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
        message={state.error}
        setValue={setOTP}
        validation={validateOTP}
      />
      <p className={classes.messageOTP}>
        Bạn không nhận được mã OTP?
        {' '}
        <span
          className={`${state.resend ? classes.messageOTP__resend : ''}`}
          onClick={resendOTP}
        >
          Gửi lại
        </span>
        {' '}
        <span>
          sau
          {' '}
          <span className={classes.messageOTP__time}>
            {timer}
            s
          </span>
        </span>
      </p>

      <ButtonCT
        primary
        borderRadius
        medium
        loading={state.loading}
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
        message={state.error}
        setValue={setConfirmPassword}
        validation={validatePassword}
        required
      />

      <ButtonCT
        primary
        borderRadius
        medium
        loading={state.loading}
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

      <div id="verify-container" />

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
