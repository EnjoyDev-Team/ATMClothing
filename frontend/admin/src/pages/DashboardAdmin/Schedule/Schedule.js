import React from 'react';
import PropTypes from 'prop-types';
import classes from './Schedule.module.scss';
import avatar from '../../../assets/imgs/headerAdmin/avatar.jpg';

const Schedule = () => (
        <div>
            <div className={classes.container}>
                <div className={classes.container__content}>
                    <div className={classes.container__content__time}>
                        <p>8:00 - 11:00 AM, October 16</p>
                    </div>
                    <div className={classes.container__content__title}>
                        <p>Product review</p>
                    </div>
                </div>
                <div className={classes.container__listimg}>
                    <div className={classes.container__listimg__img}>
                        <img src={avatar} alt="" />
                    </div>
                    <div className={classes.container__listimg__img}>
                        <img src={avatar} alt="" />
                    </div>
                    <div className={classes.container__listimg__img}>
                        <img src={avatar} alt="" />
                    </div>
                    <div className={classes.container__listimg__img}>
                        <img src={avatar} alt="" />
                    </div>
                    <div className={classes.container__listimg__img}>
                        <img src={avatar} alt="" />
                    </div>
                </div>
            </div>
        </div>
);

Schedule.propTypes = {

};

export default Schedule;
