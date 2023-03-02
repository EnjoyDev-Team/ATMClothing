import React from 'react';
import { RecoilRoot } from 'recoil';
import classes from './PaymentProduct.module.scss';
import ButtonCT from '../../components/ButtonCT/ButtonCT';
import OrderInfo from './components/OrderInfo';
import OrderTotal from './components/OrderTotal';
import DeliveryInfo from './components/DeliveryInfo';
import PaymentMethod from './components/PaymentMethod';

const PaymentProductRecoil = () => (
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
                  disabled
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

const PaymentProduct = () => (
    <RecoilRoot>
      <PaymentProductRecoil />
    </RecoilRoot>
);

export default PaymentProduct;
