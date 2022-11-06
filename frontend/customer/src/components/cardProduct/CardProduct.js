import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classes from './CardProduct.module.scss';
import img from '../../assets/imgs/damNu.jpg';

const CardProduct = ({ cardproduct2 }) => (
    <div className={`${classes.cardproduct} ${cardproduct2 && classes.cardproduct2}`}>
        <div className={classes.cardproduct__img}>
            <img src={img} alt="" />
        </div>
        <div className={classes.cardproduct__container}>
            <h1 className={classes.cardproduct__name}>BLAZER CARO MIX JEANS</h1>
            <h1 className={classes.cardproduct__price}>
                180.000
                {' '}
                <u>đ</u>
            </h1>
            <div className={classes.cardproduct__address}>
                <i><FontAwesomeIcon icon={faLocationDot} /></i>
                <p>Cơ sở ĐH Ngân hàng</p>
            </div>
        </div>
        <button className={classes.cardproduct__btn}>Thêm vào giỏ hàng</button>
    </div>

);
CardProduct.propTypes = {
  cardproduct2: PropTypes.bool

};
CardProduct.defaultProps = {
  cardproduct2: null
};

export default CardProduct;
