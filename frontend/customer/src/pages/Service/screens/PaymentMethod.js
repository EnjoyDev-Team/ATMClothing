/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import classes from './PaymentMethod.module.scss';

const PaymentMethod = ({ onChange, setPayment }) => {
  useEffect(() => {
    onChange({ paymentMethod: 0 });
    setPayment(true);
  }, []);

  return (
        <div className={classes.payment__method}>
            <b>Phương thức thanh toán</b>
            <p>Dịch vụ này chúng tôi chỉ chấp nhận phương thức thanh toán khi nhận hàng.</p>
        </div>
  );
};

export default PaymentMethod;
