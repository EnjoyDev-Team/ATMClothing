/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classes from './CartProductCard.module.scss';
import img from '../../assets/imgs/aomau.png';

const Cartproductcard = ({ Details }) => {
  const [count, setcount] = useState(0);
  const reduce = () => {
    setcount((item) => {
      if (item < 1) { return 0; }
      return item - 1;
    });
  };
  const increase = () => {
    setcount(count + 1);
  };

  return (
                <div>
                        <div className={classes.cartproductcard}>
                                <div className={classes.cartproductcard__input}>
                                        <input type="checkbox" />
                                </div>
                                <div className={classes.cartproductcard__product}>
                                        <div className={classes.cartproductcard__product__img}>
                                                <img src={Details.img} alt="" />
                                        </div>
                                        <div className={classes.cartproductcard__product__content}>
                                                <h2 className={classes.cartproductcard__product_content__name}>{Details.name}</h2>
                                                <h1 className={classes.cartproductcard__product_content__price}>
                                                        {Details.price}
                                                        {' '}
                                                        <u>đ</u>
                                                </h1>
                                                <p className={classes.cartproductcard__product_content__desribe}>{Details.describe}</p>
                                        </div>
                                </div>
                                <div className={classes.cartproductcard__product__container}>
                                        <button type="submit">
                                                <i>
                                                        {' '}
                                                        <FontAwesomeIcon icon={faTrashCan} />
                                                        {' '}
                                                </i>
                                                {' '}
                                        </button>
                                        <div className={classes.cartproductcard__product__container__amount}>
                                                <p onClick={reduce} className={classes.cartproductcard__product__container__amount__reduce}>-</p>
                                                <p className={classes.cartproductcard__product__container__amount__value}>{count}</p>
                                                <p onClick={increase} className={classes.cartproductcard__product__container__amount__increase}>+</p>
                                        </div>
                                </div>
                        </div>
                </div>
  );
};

Cartproductcard.propTypes = {
  Details: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    describe: PropTypes.string.isRequired,
  }),
};
Cartproductcard.defaultProps = {
  Details: {},
};

export default Cartproductcard;
