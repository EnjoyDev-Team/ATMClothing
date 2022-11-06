import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './AuthForm.module.scss';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import SocialLogin from '../SocialLogin/SocialLogin';

const RegisterForm = () => {
  const [step, setStep] = useState(1);

  const StepPhone = (
    <>
      <InputCT placeholder="Nhập số điện thoại" />

      <div className={classes.btn}>
        <ButtonCT primary borderRadius content="Tiếp tục" medium />
      </div>
    </>
  );

  const StepOTP = (
    <>
      <InputCT placeholder="Nhập OTP" />
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

      <div className={classes.btn}>
        <ButtonCT primary borderRadius content="Xác nhận" medium />
      </div>

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
    </>
  );

  const StepPassword = (
    <>
      <InputCT placeholder="Nhập mật khẩu" type="password" />
      <InputCT placeholder="Nhập lại mật khẩu" type="password" />

      <div className={classes.btn}>
        <ButtonCT primary borderRadius content="Đăng ký" medium />
      </div>
    </>
  );

  return (
    <div className={classes['auth-form']}>
      <div className={classes['auth-form__form']}>
        <h3>Đăng ký</h3>
        {StepPhone}
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
