import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './AuthForm.module.scss';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import SocialLogin from '../SocialLogin/SocialLogin';
import { validatePassword, validatePhone } from './handler';

const RegisterForm = () => {
  const [step, setStep] = useState(1);

  const StepPhone = (
    <>
      <InputCT placeholder="Nhập số điện thoại" type="tel" validation={validatePhone} maxLength="10" required />

      <ButtonCT primary borderRadius medium className={classes.btn}>
        Tiếp tục
      </ButtonCT>
    </>
  );

  const StepOTP = (
    <>
      <InputCT placeholder="Nhập OTP" type="tel" maxLength="6" required />
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

      <ButtonCT primary borderRadius medium className={classes.btn}>
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
    </>
  );

  const StepPassword = (
    <>
      <InputCT placeholder="Nhập mật khẩu" type="password" validation={validatePassword} required />
      <InputCT placeholder="Nhập lại mật khẩu" type="password" validation={validatePassword} required />

      <ButtonCT primary borderRadius medium className={classes.btn}>
        Đăng ký
      </ButtonCT>
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
