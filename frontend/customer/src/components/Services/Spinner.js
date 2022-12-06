import React from 'react';
import classes from './Spinner.module.scss';

const Spinner = () => (
    <div className={classes['lds-spinner']}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
    </div>
);

export default Spinner;
