/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable arrow-body-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable semi */
/* eslint-disable indent */
import React from 'react';
import classes from './HistoryItem.module.scss';

const historyList = [
    {
        no: '1',
        name: 'Edit profile',
        time_frame: '7:30 AM 15/12/2021',
        description: 'Edit address of account Adc@gmail.com',
    },
    {
        no: '2',
        name: 'Add new product',
        time_frame: '9:30 AM 15/12/2021',
        description: 'Add product name: Áo sơ mi',
    },
    {
        no: '3',
        name: 'Add new product',
        time_frame: '9:30 AM 15/12/2021',
        description: 'Add product name: Áo sơ mi',
    },
    {
        no: '4',
        name: 'Add new product',
        time_frame: '9:30 AM 15/12/2021',
        description: 'Add product name: Áo sơ mi',
    },
];

const HistoryItem = () => {
    return historyList.map((item, index) => (
        <main className={classes.body__item}>
            <p>No. {item.no}</p>
            <p>{item.name}</p>
            <p>{item.time_frame}</p>
            <p>{item.description}</p>
        </main>
    ));
};

export default HistoryItem;
