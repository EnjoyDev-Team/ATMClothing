import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import classes from './ProfileForm.module.scss';
import auth from '../../../../utils/auth';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';

const ChangePassword = () => {
  const [userPassword, setUserPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const axiosPrivate = useAxiosPrivate();

  const UpdateUserPassword = (event) => {
    event.preventDefault();

    if (!userPassword.password && userPassword.password !== userPassword.passwordConfirm) {
      setError({
        loading: false,
        error: 'Số điện thoại hoặc mật khẩu không đúng. Vui lòng thử lại!',
      });
    }

    axiosPrivate
      .patch('/users/password', {
        user: {
          ...userPassword,
        },
      })
      .then((res) => {
        auth.login(res.data);
        setSuccess(true);
      })
      .catch((err) => {
        console.log(err);
        setError('Số điện thoại hoặc mật khẩu không đúng. Vui lòng thử lại!');
      })
      .finally(() => {
        setTimeout(() => {
          setError(false);
          setSuccess(false);
        }, 3000);
      });
  };

  const updatePassword = (event) => {
    setUserPassword((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
        <form onSubmit={UpdateUserPassword} action="PATCH">
            { success && <div className={classes.success}>Cập nhật thành công</div> }
            { error && <div className={classes.error}>{error}</div> }

            <ul className={classes.profileForm}>
                <li className={classes.profileForm__item}>
                    <p className={classes['profileForm__item-title']}>Mật khẩu cũ</p>
                    <input
                      type="password"
                      name="passwordCurrent"
                      placeholder="Nhập mật khẩu cũ"
                      onChange={updatePassword}
                    />
                </li>
                <Link className={classes.forgotPW} to="/forgot">
                    Quên mật khẩu
                </Link>
                <li className={classes.profileForm__item}>
                    <p className={classes['profileForm__item-title']}>Mật khẩu mới</p>
                    <input type="password" name="password" placeholder="Nhập mật khẩu mới" onChange={updatePassword} />
                </li>
                <li className={classes.profileForm__item}>
                    <p className={classes['profileForm__item-title']}>Xác nhận mật khẩu</p>
                    <input
                      type="password"
                      name="passwordConfirm"
                      placeholder="Nhập lại mật khẩu mới"
                      onChange={updatePassword}
                    />
                </li>
            </ul>
            <ButtonCT primary medium className={classes.btn}>
                Lưu thay đổi
            </ButtonCT>
        </form>
  );
};

export default ChangePassword;
