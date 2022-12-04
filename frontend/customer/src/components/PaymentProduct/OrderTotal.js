/* eslint-disable arrow-body-style */
/* eslint-disable react/self-closing-comp */
/* eslint-disable indent */
import React from 'react';
import classes from './OrderTotal.module.scss';

const OrderTotal = () => {
    return (
        <main className={classes.total__container}>
            <div>Tổng số sản phẩm: 3</div>
            <div>
                <p>Tổng</p>
                <p>Phí vận chuyển</p>
                <p>Khuyến mãi</p>
                <p className={classes.totalPrice}>Tổng</p>
            </div>
            <div>
                <p>437.000đ</p>
                <p>0đ</p>
                <p>0đ</p>
                <p className={classes.totalPrice}>437.000đ</p>
            </div>
        </main>
    );
};

export default OrderTotal;
