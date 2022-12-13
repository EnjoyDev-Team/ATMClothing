/* eslint-disable indent */
import React from 'react';
import classes from './User.module.scss';
import ListUser from '../../components/users/ListUser';
import DetailsUser from '../../components/users/DetailsUser';

const User = () => {
    const a = 0;
    return (
        <main className={classes.users__main}>
            <div className={classes.users__left__section}>
                <ListUser />
            </div>
            <div className={classes.users__right__section}>
                <DetailsUser />
            </div>
        </main>
    );
};

export default User;
