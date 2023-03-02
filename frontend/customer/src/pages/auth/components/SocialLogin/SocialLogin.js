import React from 'react';
import classes from './SocialLogin.module.scss';
import google from '../../../../assets/svg/Google.svg';
import facebook from '../../../../assets/svg/Facebook.svg';

const SocialLogin = () => {
  const a = 0;
  return (
    <div className={classes.socialLogin}>
      <div className={classes.socialLogin__heading}>
        <span className={classes.socialLogin__line} />
        <p>Hoặc đăng nhập với</p>
        <span className={classes.socialLogin__line} />
      </div>

      <div className={classes.socialLogin__media}>
        <img src={google} alt="google" />
        <img src={facebook} alt="facebook" />
      </div>
    </div>
  );
};

SocialLogin.propTypes = {

};

export default SocialLogin;
