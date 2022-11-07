import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './AuthForm.module.scss';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import SocialLogin from '../SocialLogin/SocialLogin';
import { validatePassword, validatePhone } from './handler';

const ForgotForm = () => {
  const [phone, setPhone] = useState('');

  console.log(phone);

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

      <ButtonCT primary borderRadius medium className={classes.btn}>
        Tiếp tục
      </ButtonCT>
    </>
  );

  const StepOTP = (
    <>
      <p className={classes.notice}>Chúng tôi đã gửi mã OTP vào số điện thoại của bạn</p>
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
        {StepPhone}
        {/* {StepOTP} */}
        {/* {StepPassword} */}
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
