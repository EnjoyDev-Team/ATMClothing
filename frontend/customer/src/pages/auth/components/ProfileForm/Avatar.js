import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import classes from './ProfileForm.module.scss';

const Avatar = () => {
  const a = 0;
  return (
    <>
      <div className={classes.avatar}>
      {/* <img src="https://1.bigdata-vn.com/wp-content/uploads/2021/10/1633261044_888_Anh-avatar-dep-cho-con-gai-anh-dai-dien-dep.jpg" alt="" /> */}
      <FontAwesomeIcon className={classes.avatarIcon} icon={faCircleUser} />
      <div className={classes.avatar__edit}>
        <ButtonCT outlineBtn medium>
          Xóa ảnh
        </ButtonCT>
        <ButtonCT primary medium>
          Thêm ảnh
        </ButtonCT>
      </div>
      </div>
      <ButtonCT primary medium className={classes.btn}>
        Cập nhật
      </ButtonCT>
    </>
  );
};

export default Avatar;
