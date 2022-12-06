import React from 'react';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import classes from './ProfileForm.module.scss';

const General = () => {
  const a = 0;
  return (
        <>
          <ul className={classes.profileForm}>
            <li className={classes.profileForm__item}>
              <p className={classes['profileForm__item-title']}>Tên của bạn</p>
              <input type="text" />
            </li>
            <li className={classes.profileForm__item}>
              <p className={classes['profileForm__item-title']}>Giới tính</p>
              <div className={classes.profileForm__gender}>
                <label htmlFor="male">
                  <input type="radio" id="male" name="gender" value="Nam" />
                  Nam
                </label>
                <label htmlFor="female">
                  <input type="radio" id="female" name="gender" value="Nữ" />
                  Nữ
                </label>
                <label htmlFor="other">
                  <input type="radio" id="other" name="gender" value="Khác" />
                  Khác
                </label>
              </div>
            </li>
            <li className={classes.profileForm__item}>
              <p className={classes['profileForm__item-title']}>Ngày sinh</p>
              <input type="date" />
            </li>
            <li className={classes.profileForm__item}>
              <p className={classes['profileForm__item-title']}>Email</p>
              <input type="text" />
            </li>
            <li className={classes.profileForm__item}>
              <p className={classes['profileForm__item-title']}>Số điện thoại</p>
              <p className={classes.phone}>08*****789</p>
            </li>
          </ul>
          <ButtonCT primary medium className={classes.btn}>
            Lưu thay đổi
          </ButtonCT>
        </>
  );
};

export default General;
