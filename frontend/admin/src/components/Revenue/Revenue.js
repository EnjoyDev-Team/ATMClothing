import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUp } from '@fortawesome/free-solid-svg-icons';
import classes from './Revenue.module.scss';

const Revenue = () => (
        <div>
            <div className={classes.container}>
                <div className={classes.container__message}>
                    <div className={classes.container__message__content}>
                        <p>all products</p>
                        <h2>20000</h2>
                    </div>
                    <div className={classes.container__message__icon}>
                        <i><FontAwesomeIcon icon={faCircleUp} /></i>
                    </div>
                </div>
                <div className={classes.container__status}>
                    <p>12% increase</p>
                </div>
            </div>
        </div>
);

Revenue.propTypes = {

};

export default Revenue;
