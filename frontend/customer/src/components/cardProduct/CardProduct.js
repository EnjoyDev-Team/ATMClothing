/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './CardProduct.module.scss';
import ButtonCT from '../ButtonCT/ButtonCT';
import auth from '../../utils/auth';
import { addToCart } from '../../store/reducers/cartSlice';

const CardProduct = ({ cardproduct2, Details }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddToCart = () => {
    if (auth.getAccessToken()) {
      dispatch(addToCart({ data: {
        idUser: auth.getID(),
        idProduct: Details._id,
        size: Details.size,
        amount: 1
      } }));
    } else {
      console.log('No login');
    }
  };

  return (
    <div className={`${classes.cardproduct} ${cardproduct2 && classes.cardproduct2}`}>
        <div
          className={classes.cardproduct__img}
          onClick={() => navigate(`/products/${Details._id}`)}
        >
            <img src={Details.img} alt="" />
        </div>
       <div className={classes.cardproduct__content}>
            <div
              className={classes.cardproduct__container}
              onClick={() => navigate(`/products/${Details._id}`)}
            >
                    <h1 className={classes.cardproduct__name}>{Details.name}</h1>
                    <h1 className={classes.cardproduct__price}>
                        {Details.price}
                        {' '}
                        <u>đ</u>
                    </h1>
                    { Details.facility && Details.facility.length ? (
                      <div className={classes.cardproduct__address}>
                        <i><FontAwesomeIcon icon={faLocationDot} /></i>
                        <p>{Details.facility[0].name}</p>
                      </div>
                    ) : <span>&nbsp;</span>}
            </div>
            <ButtonCT
              primary
              medium
              disabled={(Details.amount === 0)}
              className={classes.btn}
              onClick={handleAddToCart}
            >
              {Details.amount === 0 ? 'Hết hàng' : 'Thêm vào giỏ hàng'}
            </ButtonCT>
       </div>
    </div>
  );
};
CardProduct.propTypes = {
  cardproduct2: PropTypes.bool,

  Details: PropTypes.shape({
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    facility: PropTypes.array,
    _id: PropTypes.string,
    size: PropTypes.string,
    amount: PropTypes.number
  }),
};
CardProduct.defaultProps = {
  cardproduct2: null,
  Details: {},
};

export default CardProduct;
