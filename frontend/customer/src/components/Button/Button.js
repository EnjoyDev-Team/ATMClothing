import React from 'react';
import PropTypes from 'prop-types';
import classes from './Button.module.scss';

const Button = () => (
    <div>
        <button className={classes.Button}>Button</button>
    </div>
);

Button.propTypes = {};

export default Button;
