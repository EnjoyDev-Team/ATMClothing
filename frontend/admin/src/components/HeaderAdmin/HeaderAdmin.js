import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import classes from './HeaderAdmin.module.scss';
import avatar from '../../assets/imgs/headerAdmin/avatar.jpg';

const HeaderAdmin = () => (
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
                <i className={classes.header__components__iconOut}><FontAwesomeIcon icon={faRightFromBracket} /></i>
            </div>
        </div>
    </div>
);

HeaderAdmin.propTypes = {

};

export default HeaderAdmin;
