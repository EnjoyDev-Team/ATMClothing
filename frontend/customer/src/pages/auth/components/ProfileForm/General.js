import React, { useState } from 'react';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import classes from './ProfileForm.module.scss';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import auth from '../../../../utils/auth';

const General = () => {
  const [success, setSuccess] = useState(false);

  const [userInfo, setUserInfo] = useState(auth.getInfo());

  const updateInfo = (event) => {
    setUserInfo({
      ...userInfo,
      [event.target.name]: event.target.value,
    });
  };

  const axiosPrivate = useAxiosPrivate();

  const updateUserProfile = (event) => {
    event.preventDefault();
    axiosPrivate
      .patch('/users/update', { user: { ...userInfo, _id: auth.getID() } })
      .then(() => {
        setSuccess(true);
        auth.updateInfo(userInfo);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        console.log(userInfo);
        setTimeout(() => setSuccess(false), 3000);
      });
  };

  return (
        <form onSubmit={updateUserProfile} action="PATCH">
            { success && <div className={classes.success}>Cập nhật thành công</div> }
            <ul className={classes.profileForm}>
                <li className={classes.profileForm__item}>
                    <p className={classes['profileForm__item-title']}>Tên của bạn</p>
                    <input type="text" name="name" onChange={updateInfo} value={userInfo.name} />
                </li>
                <li className={classes.profileForm__item}>
                    <p className={classes['profileForm__item-title']}>Giới tính</p>
                    <div className={classes.profileForm__gender}>
                        <label htmlFor="male">
                            <input
                              type="radio"
                              id="male"
                              name="gender"
                              value="male"
                              onChange={updateInfo}
                              checked={userInfo.gender === 'male'}
                            />
                            Nam
                        </label>
                        <label htmlFor="female">
                            <input
                              type="radio"
                              id="female"
                              name="gender"
                              value="female"
                              onChange={updateInfo}
                              checked={userInfo.gender === 'female'}
                            />
                            Nữ
                        </label>
                        <label htmlFor="other">
                            <input
                              type="radio"
                              id="other"
                              name="gender"
                              value="other"
                              onChange={updateInfo}
                              checked={userInfo.gender === 'other'}
                            />
                            Khác
                        </label>
                    </div>
                </li>
                <li className={classes.profileForm__item}>
                    <p className={classes['profileForm__item-title']}>Ngày sinh</p>
                    <input type="date" name="dob" onChange={updateInfo} value={userInfo.dob} />
                </li>
                <li className={classes.profileForm__item}>
                    <p className={classes['profileForm__item-title']}>Email</p>
                    <input type="text" name="email" onChange={updateInfo} value={userInfo.email} />
                </li>
                <li className={classes.profileForm__item}>
                    <p className={classes['profileForm__item-title']}>Số điện thoại</p>
                    <p className={classes.phone}>{ userInfo.phone }</p>
                </li>
            </ul>
            <ButtonCT type="submit" primary medium className={classes.btn}>
                Lưu thay đổi
            </ButtonCT>
        </form>
  );
};

export default General;
