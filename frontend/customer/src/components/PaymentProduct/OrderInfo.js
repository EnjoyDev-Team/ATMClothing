import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useSetRecoilState, useRecoilState } from 'recoil';
import classes from './OrderInfo.module.scss';
import { removeFromPayment } from '../../store/reducers/cartSlice';
import { paymentRecoil, productsPaymentRecoil } from './recoil';

const OrderInfo = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const payments = useSelector(state => state.cart.payments);

  const [data, setData] = useRecoilState(productsPaymentRecoil);
  const setTotalPayment = useSetRecoilState(paymentRecoil);

  useEffect(() => {
    let amount = 0;
    let price = 0;

    const newData = cart.filter((item) => {
      if (item._id in payments) {
        amount += payments[item._id];
        price += +item.detail.price.replaceAll('.', '') * payments[item._id];

        return item;
      }
      return null;
    });

    setData(newData);
    setTotalPayment({ amount, price, ship: 20000, discount: 0 });
  }, [payments]);

  const handleRemoveFromPayment = (id) => {
    dispatch(removeFromPayment({ _id: id }));
  };

  return data.map((item) => (
        <main className={classes.order_container} key={item._id}>
            <div className={classes.amount}>
                {item.amount}
                x
            </div>
            <div className={classes.orderInfo__img}>
                <img width={80} src={item.img} alt="" />
            </div>
            <div className={classes.info}>
                <p className={classes.product__name}>{item.detail.name}</p>
                <p className={classes.product__price}>{item.detail.price}</p>
                <p className={classes.product__details}>{item.size}</p>
            </div>
            <div className={classes.icon__container}>
                <FontAwesomeIcon
                  className={classes.icon__trash}
                  icon={faTrashCan}
                  onClick={() => handleRemoveFromPayment(item._id)}
                />
                <p className={classes.location}>
                    <FontAwesomeIcon className={classes.icon__location} icon={faLocationDot} />
                    {item.detail.facility.length ? item.detail.facility[0].name : ''}
                </p>
            </div>
        </main>
  ));
};

export default OrderInfo;
