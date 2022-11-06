import React from 'react';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import classes from './ProfileForm.module.scss';

const General = () => {
  const a = 0;
  return (
    <>
      <div className={classes.profileForm}>
        <div className={classes.profileForm__title}>
          <p>Tên của bạn</p>
          <p>Giới tính</p>
          <p>Ngày sinh</p>
          <p>Email</p>
          <p>Số điện thoại</p>
        </div>

        <div className={classes.profileForm__input}>
          <input type="text" />
          <div className={classes['profileForm__input-gender']}>
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
          <input type="date" />
          <input type="text" />
          <p className={classes.phone}>08*****789</p>
        </div>
      </div>
    <div className={classes.btn}><ButtonCT content="Lưu thay đổi" primary medium /></div>
    </>
  );
};

export default General;
