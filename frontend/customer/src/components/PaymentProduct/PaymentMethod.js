/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-unknown-property */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
import React from 'react';
import classes from './PaymentMethod.module.scss';
import ButtonCT from '../ButtonCT/ButtonCT';

const PaymentMethod = () => {
    return (
        <main className={classes.payment__method__container}>
            <div>
                <input className={classes.radio__custom} type="radio" id="cod" name="payment_method" />
                <label for="cod">Thanh toán khi nhận hàng</label>
                <br />
            </div>
            <div>
                <input className={classes.radio__custom} type="radio" id="momo" name="payment_method" />
                <label for="momo">Thanh toán bằng ví Momo</label>
            </div>
            <div>
                <ButtonCT className={classes.btn__booking} large content="Đặt hàng" borderRadius />
            </div>
        </main>
    );
};

export default PaymentMethod;
