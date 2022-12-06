/* eslint-disable react/jsx-indent-props */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
import React from 'react';
import classes from './PaymentProduct.module.scss';
import ButtonCT from '../../components/ButtonCT/ButtonCT';
import OrderInfo from '../../components/PaymentProduct/OrderInfo';
import OrderTotal from '../../components/PaymentProduct/OrderTotal';
import DeliveryInfo from '../../components/PaymentProduct/DeliveryInfo';
import PaymentMethod from '../../components/PaymentProduct/PaymentMethod';

const PaymentProduct = () => {
    return (
        <main>
            <div className={classes.title}>
                <h1 className={classes.align_center}>THANH TOÁN</h1>
                <p className={classes.align_center}>
                    Cảm ơn bạn đã sử dụng nền tảng của chúng tôi để góp phần bảo vệ môi trường và cộng đồng
                </p>
            </div>
            <div className={classes.btn__container}>
                <ButtonCT className={classes.btn__online__delivery} large borderRadius content="Giao hàng trực tuyến" />
                <ButtonCT
                    className={classes.btn__system__atm}
                    large
                    borderRadius
                    outlineBtn
                    content="Nhận hàng tại hệ thống ATM Clothing"
                />
            </div>
            <div className={classes.talbe__container}>
                <div className={classes.table__left__section}>
                    <div className={classes.table__header}>
                        <h3>THÔNG TIN ĐƠN HÀNG</h3>
                        <div className={classes.order__info__list}>
                            <OrderInfo />
                        </div>
                    </div>
                    <div className={classes.table__header}>
                        <h3>TỔNG ĐƠN HÀNG</h3>
                        <div className={classes.order__info__list}>
                            <OrderTotal />
                        </div>
                    </div>
                </div>

                <div className={`${classes.table__right__section} + ${classes.isWidth45rem}`}>
                    <div className={classes.table__header}>
                        <h3>THÔNG TIN GIAO HÀNG</h3>
                        <div className={classes.order__info__list}>
                            <DeliveryInfo />
                        </div>
                    </div>
                    <div className={classes.table__header}>
                        <h3>PHƯƠNG THỨC THANH TOÁN</h3>
                        <div className={classes.order__info__list}>
                            <PaymentMethod />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default PaymentProduct;
