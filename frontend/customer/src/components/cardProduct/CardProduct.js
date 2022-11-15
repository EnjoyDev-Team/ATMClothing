import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import classes from './CardProduct.module.scss';
import ButtonCT from '../ButtonCT/ButtonCT';

const CardProduct = ({ cardproduct2, Details }) => (
    <div className={`${classes.cardproduct} ${cardproduct2 && classes.cardproduct2}`}>
        <div className={classes.cardproduct__img}>
            <img src={Details.img} alt="" />
        </div>
       <div className={classes.cardproduct__content}>
            <div className={classes.cardproduct__container}>
                    <h1 className={classes.cardproduct__name}>{Details.name}</h1>
                    <h1 className={classes.cardproduct__price}>
                        {Details.price}
                        {' '}
                        <u>đ</u>
                    </h1>
                    <div className={classes.cardproduct__address}>
                        <i><FontAwesomeIcon icon={faLocationDot} /></i>
                        <p>{Details.address}</p>
                    </div>
            </div>
            <div>
            <ButtonCT primary medium className={classes.btn}>Thêm vào giỏ hàng</ButtonCT>
            </div>
       </div>
    </div>

);
CardProduct.propTypes = {
  cardproduct2: PropTypes.bool,

  Details: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }),
};
CardProduct.defaultProps = {
  cardproduct2: null,
  Details: {},
};

export default CardProduct;
