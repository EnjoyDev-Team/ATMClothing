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
        <div>
          <ButtonCT content="Xóa hình ảnh" outlineBtn medium />
        </div>
        <div>
          <ButtonCT content="Thêm hình ảnh" primary medium />
        </div>
      </div>
      </div>
    <div className={classes.btn}><ButtonCT content="Cập nhật" primary medium /></div>
    </>
  );
};

export default Avatar;
