/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import classes from './CartProductCard.module.scss';
import { updateCart, removeFromCart, addToPayment, removeFromPayment } from '../../store/reducers/cartSlice';

const Cartproductcard = ({ Details }) => {
  const dispatch = useDispatch();
  const [count, setcount] = useState(Details.quality);
  const [check, setCheck] = useState(Details.checked);

  const decrease = () => {
    const cnt = count - 1 < 1 ? 1 : count - 1;
    if (cnt !== count) {
      setcount(cnt);
      dispatch(updateCart({ data: {
        _id: Details._id,
        quality: cnt
      } }));
      dispatch(addToPayment({
        _id: Details._id,
        quality: cnt
      }));
    }
  };
  const increase = () => {
    const cnt = count + 1;
    setcount(cnt);
    dispatch(updateCart({ data: {
      _id: Details._id,
      quality: cnt
    } }));
    dispatch(addToPayment({
      _id: Details._id,
      quality: cnt
    }));
  };

  const handleRemove = () => {
    dispatch(removeFromCart({ _id: Details._id }));
    dispatch(removeFromPayment({ _id: Details._id }));
  };

  const handleChecked = () => {
    if (!check) {
      dispatch(addToPayment({ _id: Details._id, quality: count }));
    } else {
      dispatch(removeFromPayment({ _id: Details._id }));
      if (Details.detail.facility.length) {
        dispatch(removeFromPayment({ _id: Details.detail.facility[0].code }));
      }
    }
    setCheck(prev => !prev);
  };

  useEffect(() => {
    setCheck(Details.checked);
  }, [Details.checked]);

  return (
        <div>
            <div className={classes.cartproductcard}>
                <div className={classes.cartproductcard__input}>
                    <input
                      type="checkbox"
                      checked={check}
                      onChange={handleChecked}
                    />
                </div>
                <div className={classes.cartproductcard__product}>
                    <div className={classes.cartproductcard__product__img}>
                        <img src={Details.img} alt="" />
                    </div>
                    <div className={classes.cartproductcard__product__content}>
                        <h2 className={classes.cartproductcard__product_content__name}>{Details.detail.name}</h2>
                        <h1 className={classes.cartproductcard__product_content__price}>
                            {Details.detail.price}
                                {' '}
                                <u>đ</u>
                        </h1>
                        <p className={classes.cartproductcard__product_content__desribe}>
                                Size:
                                {' '}
                                {Details.size}
                        </p>
                    </div>
                </div>
                <div className={classes.cartproductcard__product__container}>
                    <div
                      className={classes['cartproductcard__remove-icon']}
                      onClick={handleRemove}
                    >
                        <FontAwesomeIcon icon={faTrashCan} />
                    </div>
                    <div className={classes.cartproductcard__product__container__amount}>
                        <p onClick={decrease} className={classes.cartproductcard__product__container__amount__reduce}>
                            -
                        </p>
                        <p className={classes.cartproductcard__product__container__amount__value}>{count}</p>
                        <p onClick={increase} className={classes.cartproductcard__product__container__amount__increase}>
                            +
                        </p>
                    </div>
                </div>
            </div>
        </div>
  );
};

Cartproductcard.propTypes = {
  Details: PropTypes.shape({
    quality: PropTypes.number.isRequired,
    size: PropTypes.string.isRequired,
    _id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    img: PropTypes.string,
    detail: PropTypes.shape({
      facility: PropTypes.array,
      price: PropTypes.string,
      name: PropTypes.string
    }),
  }),
};
Cartproductcard.defaultProps = {
  Details: {
    detail: {
      facility: [],
      price: '',
      name: ''
    }
  },
};

export default Cartproductcard;
