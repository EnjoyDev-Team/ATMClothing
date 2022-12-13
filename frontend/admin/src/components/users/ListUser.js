/* eslint-disable indent */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './ListUser.module.scss';
import addImg from '../../assets/imgs/users/Add.png';
import UserItem from './UserItem';

const ListUser = () => {
    const a = 0;
    return (
        <main className={classes.list__main}>
            <div className={classes.stateBar}>
                <p>Customer</p>
                <p>Admin</p>
            </div>
            <div className={classes.list__container}>
                <div className={classes.list__head}>
                    <p>USER</p>
                    <img src={addImg} alt="" />
                </div>
                <div className={classes.search__bar}>
                    <input type="text" placeholder="Search" />
                </div>
                <div className={classes.list}>
                    <UserItem />
                </div>
            </div>
        </main>
    );
};

export default ListUser;
