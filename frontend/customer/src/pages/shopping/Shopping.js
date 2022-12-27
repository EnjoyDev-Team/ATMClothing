/* eslint-disable no-restricted-syntax */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './Shopping.module.scss';
import Cartproductcard from '../../components/cartproductcard/CartProductCard';
import ButtonCT from '../../components/ButtonCT/ButtonCT';
import { addToPayment, removeFromPayment } from '../../store/reducers/cartSlice';
import { formatMoney } from '../../utils/formatMoney';

const Shopping = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const payments = useSelector(state => state.cart.payments);
  const [data, setData] = useState({});
  const [totalPayment, setTotalPayment] = useState({
    amount: 0,
    price: 0
  });

  const handleCheckedFacility = (e, key) => {
    for (let i = 0; i < cart.length; i += 1) {
      const { facility } = cart[i].detail;
      if (facility.length && facility[0].code === key) {
        if (e.target.checked) {
          dispatch(addToPayment({ _id: cart[i]._id, amount: cart[i].amount }));
          dispatch(addToPayment({ _id: key }));
        } else {
          dispatch(removeFromPayment({ _id: cart[i]._id }));
          dispatch(removeFromPayment({ _id: key }));
        }
      }
    }
  };

  useEffect(() => {
    const divide = {};
    const count = {};
    let amount = 0;
    let price = 0;

    for (let i = 0; i < cart.length; i += 1) {
      const { facility } = cart[i].detail;
      const newItem = {
        check: (cart[i]._id in payments),
        item: cart[i]
      };

      if (facility.length) {
        // Divide products into facility
        if (facility[0].code in divide) {
          divide[facility[0].code].push(newItem);
        } else {
          divide[facility[0].code] = [newItem];
        }

        // Checked and calc payment
        if (cart[i]._id in payments) {
          amount += payments[cart[i]._id];
          price += +cart[i].detail.price.replaceAll('.', '') * payments[cart[i]._id];

          if (facility[0].code in count) {
            count[facility[0].code].push(cart[i]._id);
          } else {
            count[facility[0].code] = [cart[i]._id];
          }
        }
      }
    }

    // Checked facility
    const keys = Object.keys(count);
    for (let i = 0; i < keys.length; i += 1) {
      if (count[keys[i]].length === divide[keys[i]].length) {
        dispatch(addToPayment({ _id: keys[i] }));
      } else {
        dispatch(removeFromPayment({ _id: keys[i] }));
      }
    }
    setTotalPayment({
      amount, price
    });
    setData(divide);
  }, [cart, payments]);

  return (
    <div>
        <div className={classes.header}>
            <h1>Giỏ hàng của bạn</h1>
            <p>Cảm ơn bạn đã sử dụng nền tảng của chúng tôi để góp phần bảo vệ môi trường và cộng đồng</p>
        </div>
        <div className={classes.container}>
            <div className={classes.container__content}>
                <div className={classes.container__content__header}>
                    <h2>
                        {cart && cart.length}
                        {' '}
                        sản phẩm trong giỏ hàng
                    </h2>
                    {/* <div className={classes.container__content__header__all}>
                        <input type="checkbox" />
                        <p>Chọn tất cả</p>
                    </div> */}
                </div>
                {
                    Object.keys(data).map((key, idx) => (
                        <div className={classes.container__content__cart} key={+idx}>
                            <div className={classes.container__content__cart__address}>
                                <div className={classes.container__content__cart__address__all}>
                                    <input
                                      type="checkbox"
                                      checked={(key in payments)}
                                      onChange={(e) => handleCheckedFacility(e, key)}
                                    />
                                    <p>
                                        Cơ sở
                                        {' '}
                                        {data[key][0].item.detail.facility[0].name}
                                    </p>
                                </div>
                            </div>
                            <div className={classes.container__content__cart__listproduct}>
                                {
                                    data[key].map((el, idx) => (
                                        <div key={+idx}>
                                            <div className={classes.container__content__cart__listproduct__product}>
                                                <Cartproductcard Details={
                                                    {
                                                      size: el.item.size,
                                                      amount: el.item.amount,
                                                      detail: el.item.detail,
                                                      _id: el.item._id,
                                                      img: el.item.img,
                                                      checked: el.check
                                                    }
                                                }
                                                />
                                            </div>
                                            <div className={classes.container__content__cart__listproduct__line} />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
            <div>
                <div className={classes.container__status}>
                    <div className={classes.container__status__payment}>
                        <h3>Thanh Toán</h3>
                    </div>
                    <div className={classes.container__status__valueproduct}>
                        <p>Số lượng sản phẩm</p>
                        <h3>{totalPayment.amount}</h3>
                    </div>
                    <div className={classes.container__status__total}>
                        <p>Tổng cộng</p>
                        <h3>
                            {formatMoney(totalPayment.price.toString())}
                            {' '}
                            <p>đ</p>
                            {' '}
                        </h3>
                    </div>
                    <ButtonCT
                      greenLinear
                      medium
                      disabled={!(totalPayment.amount !== 0)}
                      className={classes.container__status__btn}
                      onClick={() => navigate('/shopping/payment')}
                    >
                      Thanh toán ngay
                    </ButtonCT>
                </div>
            </div>
        </div>
    </div>
  );
};

Shopping.propTypes = {

};

export default Shopping;
