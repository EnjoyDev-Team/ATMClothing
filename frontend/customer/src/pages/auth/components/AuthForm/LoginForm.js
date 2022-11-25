/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from '../SocialLogin/SocialLogin';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import classes from './AuthForm.module.scss';
import { validatePassword, validatePhone } from './handler';
import { axiosClient } from '../../../../api/axios';
import auth from '../../../../utils/auth';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';

const LoginForm = () => {
  const axiosPrivate = useAxiosPrivate();

  const handleLogin = () => {
    axiosPrivate.post('/auth/login', {
      phone: '0824704786',
      password: 'khuong1209'
    }).then(res => {
      console.log(res.data);
      auth.setAccessToken(res.data.access_token);
    }).catch(err => {
      console.log(err);
    });
  };

  const getOrder = () => {
    axiosPrivate.get('/orders')
      .then(res => {
        console.log(res.data);
      }).catch(err => {
        console.log(err);
      });
  };

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

        <ButtonCT
          primary
          borderRadius
          medium
          className={classes.btn}
          // onClick={() => refreshToken()}
          // onClick={() => setIsLLogin(pre => !pre)}
          onClick={getOrder}
          // onClick={handleLogin}
        >
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
