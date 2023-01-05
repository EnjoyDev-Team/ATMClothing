/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import classes from './HeaderAdmin.module.scss';
import avatar from '../../assets/imgs/headerAdmin/avatar.jpg';
import auth from '../../utils/auth';
import { axiosPrivate } from '../../api/axios';

const HeaderAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = (e) => {
    axiosPrivate.get('/auth/logout')
      .then(res => {
        auth.logout();
        // navigate('/');
        window.location.replace('http://localhost:3000');
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
        <div className={classes.header}>
            <div className={classes.header__components}>
                <i className={classes.header__components__icon}><FontAwesomeIcon icon={faEnvelope} /></i>
                <div className={classes.header__components__profile}>
                    <div className={classes.header__components__profile__avatar}>
                        <img src={avatar} alt="" />
                    </div>
                    <div className={classes.header__components__profile__name}>
                        <p>Admin</p>

                    </div>
                </div>
                <i
                  onClick={handleLogout}
                  className={classes.header__components__iconOut}
                >
                    <FontAwesomeIcon icon={faRightFromBracket} />
                </i>
            </div>
        </div>
    </div>
  );
};

HeaderAdmin.propTypes = {

};

export default HeaderAdmin;
