/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/style-prop-object */
/* eslint-disable quotes */
/* eslint-disable react/jsx-curly-brace-presence */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
/* eslint-disable import/no-unresolved */
import React from 'react';
import classes from './DetailsUser.module.scss';
import avatar from '../../assets/imgs/users/Ellipse 59.png';
import Form from './Form';

const DetailsUser = ({ userInformation }) => {
    return (
        <main className={classes.detail_user__main}>
            <div className={classes.detail__header__container}>
                <div className={classes.info}>
                    <img src={avatar} alt="" />
                    <p>Trần Duy Khương </p>
                    <p>Account Balance: $5,539.00</p>
                </div>
                <div className={classes.function__bar}>
                    <p>Activies</p>
                    <p>Edit</p>
                    <p>Delete</p>
                </div>
            </div>
            <Form userInformation={userInformation} />
        </main>
    );
};

export default DetailsUser;
