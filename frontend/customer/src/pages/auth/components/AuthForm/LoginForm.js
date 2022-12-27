/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SocialLogin from '../SocialLogin/SocialLogin';
import InputCT from '../InputCT/InputCT';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import classes from './AuthForm.module.scss';
import { validatePassword, validatePhone } from './handler';
import auth from '../../../../utils/auth';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import useMergeState from '../../../../hooks/useMergeState';
import { init } from '../../../../store/reducers/cartSlice';

const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();

  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [state, setState] = useMergeState({
    error: '',
    loading: false
  });

  const handleLogin = (event) => {
    event.preventDefault();
    if (phone !== '' && password !== '' && phone.length >= 10) {
      setState({
        loading: true,
        error: ''
      });
      const object = {
        phone,
        password,
      };
      axiosPrivate.post(
        '/auth/login',
        object
      ).then(res => {
        auth.login(res.data);
        axiosPrivate.get(`/carts?idUser=${res.data.data.user._id}`)
          .then(res => {
            dispatch(init(res.data.data));
            navigate('/');
          })
          .catch(e => {
            navigate('/');
          });
      }).catch(err => {
        console.log(err);
        setState({
          loading: false,
          error: 'Số điện thoại hoặc mật khẩu không đúng. Vui lòng thử lại!'
        });
      });
    }
  };

  return (
    <form onSubmit={handleLogin} className={classes['auth-form']}>
      <div
        className={classes['auth-form__form']}
        onClick={() => { }}
      >
        <h3>Đăng nhập</h3>

        <InputCT
          placeholder="Nhập số điện thoại"
          type="tel"
          setValue={setPhone}
          validation={validatePhone}
          maxLength="10"
          required
        />
        <InputCT
          placeholder="Nhập mật khẩu"
          type="password"
          message={state.error}
          setValue={setPassword}
          validation={validatePassword}
          required
        />
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
          loading={state.loading}
          className={classes.btn}
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
