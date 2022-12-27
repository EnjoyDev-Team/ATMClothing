import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import classes from './NameAdmin.module.scss';

const NameAdmin = () => (
        <div>
            <div className={classes.container}>
                <p className={classes.container__name}>name</p>
                <FontAwesomeIcon icon={faCircleXmark} className={classes.container__icon} />
            </div>
        </div>
);

NameAdmin.propTypes = {

};

export default NameAdmin;
