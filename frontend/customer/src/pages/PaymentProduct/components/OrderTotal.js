import React from 'react';
import { useRecoilValue } from 'recoil';
import classes from './OrderTotal.module.scss';
import { getTotalPaymentRecoil, paymentRecoil } from './recoil';
import { formatMoney } from '../../../utils/formatMoney';

const OrderTotal = () => {
  const { total } = useRecoilValue(getTotalPaymentRecoil);
  const totalPayment = useRecoilValue(paymentRecoil);

  return (
        <main className={classes.total__container}>
            <div>
                Tổng số sản phẩm:
                {' '}
                {totalPayment.amount}
            </div>
            <div>
                <p>Tổng</p>
                <p>Phí vận chuyển</p>
                <p>Khuyến mãi</p>
                <p className={classes.totalPrice}>Tổng</p>
            </div>
            <div>
                <p>
                    {formatMoney(totalPayment.price.toString())}
                    {' '}
                    đ
                </p>
                <p>
                    {formatMoney(totalPayment.ship.toString())}
                    {' '}
                    đ
                </p>
                <p>
                    {formatMoney(totalPayment.discount.toString())}
                    {' '}
                    đ
                </p>
                <p className={classes.totalPrice}>
                    {formatMoney(total.toString())}
                    {' '}
                    đ
                </p>
            </div>
        </main>
  );
};

export default OrderTotal;
