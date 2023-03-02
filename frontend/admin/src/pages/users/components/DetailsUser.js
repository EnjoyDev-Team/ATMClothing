/* eslint-disable react/prop-types */
import React from 'react';
import classes from './DetailsUser.module.scss';
import Form from './Form';

const DetailsUser = ({ userInformation }) => (
        <main className={classes.detail_user__main}>
            <div className={classes.detail__header__container}>
                <div className={classes.info}>
                    <img src={userInformation.photo} alt="" />
                    <p>{userInformation.name}</p>
                    {/* <p>Account Balance: $5,539.00</p> */}
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

export default DetailsUser;
