import React from 'react';
import PropTypes from 'prop-types';
import classes from './CartProductCard.module.scss';
import img from '../../assets/imgs/aomau.png';

const Cartproductcard = () => (
        <div>
                <div className={classes.cartproductcard}>
                        <div className={classes.cartproductcard__input}>
                                <input type="checkbox" />
                        </div>
                        <div className={classes.cartproductcard__product}>
                                <div className={classes.cartproductcard__product__img}>
                                        <img src={img} alt="" />
                                </div>
                                <div className={classes.cartproductcard__product__content}>
                                        <h2 className={classes.cartproductcard__product_content__name}>Ten San Pham</h2>
                                        <h1 className={classes.cartproductcard__product_content__price}>
                                                100.000
                                                {' '}
                                                <u>đ</u>
                                        </h1>
                                        <p className={classes.cartproductcard__product_content__desribe}>mô tả</p>
                                </div>
                        </div>
                </div>
        </div>
);

Cartproductcard.propTypes = {

};

export default Cartproductcard;
