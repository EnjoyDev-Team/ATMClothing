/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { PropTypes } from 'prop-types';
import classes from './productInfo.module.scss';
import StatusLabel from '../statusLabel/statusLabel';

const ProductInfo = ({ detail }) => (
  <main className={classes.productInfo}>
      <div className={classes.productInfo__quantity}>
        {detail.amount}
        x
      </div>
      <img src={detail.img} alt="" />
      <div className={classes.productInfo__info}>
          <p className={classes['productInfo__info-name']}>{detail.name}</p>
          <p className={classes['productInfo__info-price']}>{detail.price}</p>
          <p className={classes['productInfo__info-detail']}>{detail.size}</p>
      </div>
      <div className={classes.productInfo__handle}>
        {detail.amount <= detail.instock
          ? <StatusLabel success>Còn hàng</StatusLabel>
          : <StatusLabel canceled>Hết hàng</StatusLabel>}
          <p className={classes['productInfo__handle-location']}>
              <FontAwesomeIcon className={classes['productInfo__handle-icon']} icon={faLocationDot} />
              {detail.facility[0].name}
          </p>
      </div>
  </main>
);

export default ProductInfo;
