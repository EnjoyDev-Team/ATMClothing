import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addPhoto } from '../../store/reducers/photoSlice';
import useMergeState from '../../hooks/useMergeState';
import classes from './styles.module.scss';

const Login = () => {
  // Example to use Redux
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    console.log('click');
    const action = addPhoto('19892');
    dispatch(action);

    navigate('/home');
  };

  return (
    <div className={classes.login}>
      Login
      <h1
        className={classes.login__test}
        onClick={handleClick}
        onMouseDown={() => {}}
        role="presentation"
      >
        Test
      </h1>
      <i className="fa-solid fa-users" />
    </div>
  );
};

Login.propTypes = {

};

export default Login;
