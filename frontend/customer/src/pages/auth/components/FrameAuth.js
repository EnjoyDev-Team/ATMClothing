import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import classes from './FrameAuth.module.scss';
import logo from '../../../assets/imgs/PNG-logo.png';

const FrameAuth = (props) => {
  const location = useLocation();
  return (
    <div className={classes.frame}>
      <Link to={location.state}>
        <FontAwesomeIcon className={classes.frame__iconBack} icon={faArrowLeft} />
      </Link>
      <div className={classes.frame__content}>
        <Link
          className={classes['frame__content-logo']}
          to="/"
        >
          <img src={logo} alt="logo" />
        </Link>
        <span className={classes.frame__line} />
        <div className={classes['frame__content-form']}>
          {props.children}
        </div>
      </div>
    </div>
  );
};

FrameAuth.propTypes = {
  children: PropTypes.element
};

FrameAuth.defaultProps = {
  children: null
};

export default FrameAuth;
