/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable arrow-body-style */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
import React from 'react';
import classes from './Form.module.scss';

const Form = ({ userInformation }) => {
    return (
        <main>
            <div className={classes.form__table}>
                <div className={classes.container__flex}>
                    <div className={classes.input__container}>
                        <p>Phone</p>
                        <input type="text" style={{ width: '411px' }} value={userInformation.phone} readOnly />
                    </div>
                    <div className={classes.input__container}>
                        <p>Role</p>
                        <input type="text" value={userInformation.role} />
                    </div>
                </div>
                <div className={classes.container__flex}>
                    <div className={classes.input__container}>
                        <p>Name</p>
                        <input type="text" style={{ width: '411px' }} value={userInformation.name} readOnly />
                    </div>
                    <div className={classes.input__container}>
                        <p>Gender</p>
                        <input type="text" value={userInformation.gender} readOnly />
                    </div>
                </div>
                <div className={classes.input__container}>
                    <p>Address</p>
                    <input type="text" style={{ width: '621px' }} value={userInformation.address} readOnly />
                </div>
                <div className={classes.input__container}>
                    <p>Email</p>
                    <input type="text" style={{ width: '621px' }} value={userInformation.email} readOnly />
                </div>
                <div className={classes.input__container}>
                    <p>Date of birth</p>
                    <input type="text" value={userInformation.phone} readOnly />
                </div>
                <div className={classes.status}>
                    <p>Status:</p>
                    <div>
                        <input type="radio" name="user_status" id="active" />
                        <label for="active">Active</label>
                    </div>
                    <div>
                        <input type="radio" name="user_status" id="inactive" />
                        <label for="inactive">Inactive</label>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Form;
