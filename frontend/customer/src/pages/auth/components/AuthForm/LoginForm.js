/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import classes from './AuthForm.module.scss';
import { validatePassword, validatePhone } from './handler';

const LoginForm = () => {
  const a = 0;

  return (
    <div className={classes['auth-form']}>
      <div
        className={classes['auth-form__form']}
        onClick={() => {}}
      >
        <h3>Đăng nhập</h3>

        <InputCT placeholder="Nhập số điện thoại" type="tel" validation={validatePhone} maxLength="10" required />
        <InputCT placeholder="Nhập mật khẩu" type="password" validation={validatePassword} required />

        <Link
          to="/forgot"
          className={classes.forgot}
        >
          Quên mật khẩu
        </Link>

        <ButtonCT primary borderRadius medium className={classes.btn}>
          Đăng nhập
        </ButtonCT>

      </div>

      <div className={classes['auth-form__footer']}>
        <SocialLogin />
        <p>
          Bạn chưa có tài khoản?
          {' '}
          <Link to="/register">Đăng ký</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
