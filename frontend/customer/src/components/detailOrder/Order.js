/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import classes from './Order.module.scss';

const orderList = [
    {
        order: 'Áo blazer',
        name: 'Áo blazer',
        request: 'Custom',
        state: 'Chờ nhận hàng',
    },
    {
        order: 'Set đầm phối',
        name: 'Set đầm phối',
        request: 'Custom',
        state: 'Đang kiểm tra',
    },
    {
        order: 'Set đầm phối',
        name: 'Đầm phối',
        request: 'Bán',
        state: 'Chờ nhận hàng',
    },
];

const Order = () =>
    orderList.map((item, index) => (
        <div key={+index} className={classes.body}>
            <div className={classes.date__container}>
                <FontAwesomeIcon icon={faClock} className={classes.icon} />
                <span className={classes.date}>22/9/2022</span>
            </div>
            <div className={classes.content__container}>
                <div className={classes.left__section}>
                    <p>Đơn hàng</p>
                    <p>Tên gợi nhớ</p>
                    <p>Yêu cầu</p>
                    <p>Trạng thái</p>
                </div>
                <div className={classes.right__section}>
                    <p>{item.order}</p>
                    <p>{item.name}</p>
                    <p>{item.request}</p>
                    <p className={classes.state}>{item.state}</p>
                </div>
            </div>
        </div>
    ));

export default Order;
