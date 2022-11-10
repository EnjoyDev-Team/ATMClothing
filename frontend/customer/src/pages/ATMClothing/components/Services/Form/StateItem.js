/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import React from 'react';
import classes from './StateItem.module.scss';

const StateItem = ({ content, description }) => (
    <div className={classes.radio__item}>
        <div className={classes.radio__tick} />
        <p className={classes.radio__content}>
            <b>{content}</b>({description})
        </p>
    </div>
);

export default StateItem;
