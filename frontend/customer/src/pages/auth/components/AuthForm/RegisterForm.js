/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RecaptchaVerifier, signInWithPhoneNumber, getIdToken, onAuthStateChanged } from 'firebase/auth';
import classes from './AuthForm.module.scss';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import SocialLogin from '../SocialLogin/SocialLogin';
import { auth } from '../../../../configs/firebase-config';
import { validatePassword, validatePhone, validateOTP } from './handler';
import { axiosPrivate } from '../../../../api/axios';
import useMergeState from '../../../../hooks/useMergeState';

const RegisterForm = () => {
  const navigate = useNavigate();
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

  const requestOTP = async (e) => {
    e.preventDefault();

    if (phone !== '' && phone.length >= 10) {
      setState({ loading: true });
      const obj = {
        phone
      };
      axiosPrivate.post('/auth/register', obj).then(res => {
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
      }).catch((err) => {
        console.log(err);
        setState({
          loading: false,
          error: 'Số điện thoại đã có tài khoản! Vui lòng đăng nhập!'
        });
      });
    }
  };

  const handleConfirmOTP = (e) => {
    e.preventDefault();
    if (OTPConfirm.length === 6) {
      setState({ loading: true });
      const { confirmationResult } = window;
      confirmationResult.confirm(OTPConfirm).then((result) => {
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
        tokenFirebase
      };
      axiosPrivate.post('/auth/register/password', objPass).then(res => {
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
        setValue={setPhone}
        validation={validatePhone}
        maxLength="10"
        message={state.error}
        required
      />

      <ButtonCT
        primary
        borderRadius
        medium
        loading={state.loading}
        className={classes.btn}
        onClick={requestOTP}
      >
        Tiếp tục
      </ButtonCT>
    </form>
  );

  const StepOTP = (
    <form onSubmit={handleConfirmOTP}>
      <InputCT
        placeholder="Nhập OTP"
        setValue={setOTPConfirm}
        validation={validateOTP}
        type="tel"
        maxLength="6"
        message={state.error}
        required
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
        message={state.error}
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

RegisterForm.propTypes = {

};

export default RegisterForm;
