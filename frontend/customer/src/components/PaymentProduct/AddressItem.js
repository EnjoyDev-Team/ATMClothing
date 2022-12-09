/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable arrow-body-style */
/* eslint-disable semi */
/* eslint-disable indent */
import React from 'react';
import classes from './AddressItem.module.scss';

const addressList = [
    {
        name: 'Trần Duy Khương',
        phone: '082 478 4789',
        street: '135 Trần Hưng Đạo',
        detail: 'Phường Cầu Ông Lãnh, Quận 1, Hồ Chí Minh',
    },
    {
        name: 'Trần Duy Khương',
        phone: '082 478 4789',
        street: '135 Trần Hưng Đạo',
        detail: 'Phường Cầu Ông Lãnh, Quận 1, Hồ Chí Minh',
    },
    {
        name: 'Trần Duy Khương',
        phone: '082 478 4789',
        street: '135 Trần Hưng Đạo',
        detail: 'Phường Cầu Ông Lãnh, Quận 1, Hồ Chí Minh',
    },
    {
        name: 'Trần Duy Khương',
        phone: '082 478 4789',
        street: '135 Trần Hưng Đạo',
        detail: 'Phường Cầu Ông Lãnh, Quận 1, Hồ Chí Minh',
    },
];

const AddressItem = () =>
    addressList.map((item) => (
        <main className={classes.address__item__container}>
            <div className={classes.name__phone}>
                <p>{item.name}</p>
                <p>{item.phone}</p>
            </div>
            <p>{item.street}</p>
            <p>{item.detail}</p>
        </main>
    ));

export default AddressItem;
