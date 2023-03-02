/* eslint-disable indent */
import { React, useState } from 'react';
import classes from './User.module.scss';
import ListUser from './components/ListUser';
import DetailsUser from './components/DetailsUser';

const User = () => {
    const a = 0;
    const [userInformation, setUserInformation] = useState({ phone: '', name: '', photo: '', gender: '', address: '' });
    return (
        <main className={classes.users__main}>
            <div className={classes.users__left__section}>
                <ListUser setUserInformation={setUserInformation} />
            </div>
            <div className={classes.users__right__section}>
                <DetailsUser userInformation={userInformation} />
                <div className={classes.users}>{/* <ActivityHistory /> */}</div>
            </div>
        </main>
    );
};

export default User;
