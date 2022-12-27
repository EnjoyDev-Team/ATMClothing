/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable indent */
/* eslint-disable arrow-body-style */
import React from 'react';
import classes from './UserItem.module.scss';
import avatar from '../../assets/imgs/users/Ellipse 59.png';

const listItem = [
    {
        img: avatar,
        name: 'Trần Duy Khương',
        salary: '20$/h',
        position: 'Manager',
        day: '20',
    },
    {
        img: avatar,
        name: 'Trần Duy Khương',
        salary: '20$/h',
        position: 'Manager',
        day: '20',
    },
    {
        img: avatar,
        name: 'Trần Duy Khương',
        salary: '20$/h',
        position: 'Manager',
        day: '20',
    },
    {
        img: avatar,
        name: 'Trần Duy Khương',
        salary: '20$/h',
        position: 'Manager',
        day: '20',
    },
    {
        img: avatar,
        name: 'Trần Duy Khương',
        salary: '20$/h',
        position: 'Manager',
        day: '20',
    },
    {
        img: avatar,
        name: 'Trần Duy Khương',
        salary: '20$/h',
        position: 'Manager',
        day: '20',
    },
    {
        img: avatar,
        name: 'Trần Duy Khương',
        salary: '20$/h',
        position: 'Manager',
        day: '20',
    },
];

const UserItem = () => {
    return listItem.map((item, index) => (
        <main className={classes.user__item__main}>
            <div className={classes.top__section}>
                <img src={item.img} alt="" />
                <p>{item.name} </p>
                <p>{item.salary} </p>
            </div>
            <div className={classes.bottom__section}>
                <p>{item.position} </p>
                <p>Số ngày làm việc: {item.day} </p>
            </div>
        </main>
    ));
};

export default UserItem;
