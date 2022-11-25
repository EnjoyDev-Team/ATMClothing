import React from 'react';
import { Link } from 'react-router-dom';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import classes from './ProfileForm.module.scss';

const ChangePassword = () => {
  const a = 0;
  return (
    <>
      <ul className={classes.profileForm}>
        <li className={classes.profileForm__item}>
          <p className={classes['profileForm__item-title']}>Mật khẩu cũ</p>
          <input type="password" placeholder="Nhập mật khẩu cũ" />
        </li>
        <Link className={classes.forgotPW} to="/forgot">Quên mật khẩu</Link>
        <li className={classes.profileForm__item}>
          <p className={classes['profileForm__item-title']}>Mật khẩu mới</p>
          <input type="password" placeholder="Nhập mật khẩu mới" />
        </li>
        <li className={classes.profileForm__item}>
          <p className={classes['profileForm__item-title']}>Xác nhận mật khẩu</p>
          <input type="password" placeholder="Nhập lại mật khẩu mới" />
        </li>
      </ul>
      <ButtonCT primary medium className={classes.btn}>
        Lưu thay đổi
      </ButtonCT>
    </>
  );
};

export default ChangePassword;
