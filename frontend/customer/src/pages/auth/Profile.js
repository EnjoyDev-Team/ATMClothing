/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faKey, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import classes from './styles.module.scss';
import General from './components/ProfileForm/General';
import ChangePassword from './components/ProfileForm/ChangePassword';
import Avatar from './components/ProfileForm/Avatar';

const initial = [
  {
    type: 'GENERAL',
    name: 'Thông tin chung',
    icon: faUser
  },
  {
    type: 'CHANGEPW',
    name: 'Đổi mật khẩu',
    icon: faKey
  },
  {
    type: 'AVATAR',
    name: 'Ảnh đại diện',
    icon: faCircleUser
  }
];

const Profile = () => {
  const [type, setType] = useState('GENERAL');

  return (
    <div className={classes.profile}>
      <div className={classes.profile__nav}>
        <ul>
          {initial.map((item, idx) => (
            <li
              key={+idx}
              onClick={() => setType(item.type)}
              className={`${type === item.type && classes.active}`}
            >
            <FontAwesomeIcon icon={item.icon} />
            <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className={classes.profile__content}>
        <div className={classes['profile__content-heading']}>
          {initial.map((item, idx) => type === item.type
            && <span key={+idx}>{item.name}</span>)}
        </div>

        <div className={classes['profile__content-form']}>
          {type === 'GENERAL' && <General />}
          {type === 'CHANGEPW' && <ChangePassword />}
          {type === 'AVATAR' && <Avatar />}
        </div>
      </div>
    </div>
  );
};

export default Profile;
