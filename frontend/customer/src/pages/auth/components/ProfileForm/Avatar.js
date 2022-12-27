/* eslint-disable jsx-a11y/label-has-associated-control */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import classes from './ProfileForm.module.scss';
import convert2base64 from '../../../../utils/convert2base64';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import auth from '../../../../utils/auth';

const Avatar = () => {
  const [avatar, setAvatar] = useState(auth.getAvatar());
  const [success, setSuccess] = useState(false);

  const axiosPrivate = useAxiosPrivate();

  const updateAvatar = async (event) => {
    const img = event.target.files[0] ? await convert2base64(event.target.files[0]) : '';
    setAvatar(img);
  };

  const updateUserAvatar = (event) => {
    event.preventDefault();
    axiosPrivate.patch('/users/avatar', { user: { avatar } })
      .then(() => {
        setSuccess(true);
        auth.updateAvatar(avatar);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setTimeout(() => setSuccess(false), 3000);
      });
  };

  return (
        <form onSubmit={updateUserAvatar} action="PATCH">
          <div className={classes.avatar}>
            { success && <div className={classes.success}>Cập nhật thành công</div> }
            {/* <img src="https://1.bigdata-vn.com/wp-content/uploads/2021/10/1633261044_888_Anh-avatar-dep-cho-con-gai-anh-dai-dien-dep.jpg" alt="" /> */}
              {!avatar ? (
                  <FontAwesomeIcon className={classes.avatarIcon} icon={faCircleUser} />
              ) : (
                  <img src={avatar} alt="avatar" />
              )}
              <div className={classes.avatar__edit}>
                  <ButtonCT type="button" outlineBtn medium onClick={() => setAvatar('')}>
                      Xóa ảnh
                  </ButtonCT>
                  <label className={classes.add__btn}>
                      <input type="file" name="avatar" onChange={updateAvatar} />
                      Thêm ảnh
                  </label>
              </div>
          </div>
          <ButtonCT type="submit" primary medium className={classes.btn}>
              Cập nhật
          </ButtonCT>
        </form>
  );
};

export default Avatar;
