/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [password, settPassword] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();
    if (phone === '' || password === '') {
      console.log('Sai');
      console.log(phone);
      console.log(password);
    } else {
      const object = {
        phone,
        password,
      };
      console.log(phone);
      console.log(password);
      axiosPrivate.post(
        '/auth/login',
        object
      ).then(res => {
        console.log(res.data);
        auth.setAccessToken(res.data.access_token);
        navigate('/');
      }).catch(err => {
        console.log(err);
      });
    }
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
    <form onSubmit={handleLogin} className={classes['auth-form']}>
      <div
        className={classes['auth-form__form']}
        onClick={() => { }}
      >
        <h3>Đăng nhập</h3>

        <InputCT placeholder="Nhập số điện thoại" type="tel" setValue={setPhone} validation={validatePhone} maxLength="10" required />
        <InputCT placeholder="Nhập mật khẩu" type="password" setValue={settPassword} validation={validatePassword} required />
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
        // onClick={getOrder}
          onClick={handleLogin}
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
    </form>
  );
};

export default LoginForm;
