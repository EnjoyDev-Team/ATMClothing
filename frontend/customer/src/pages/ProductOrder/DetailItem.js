/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import classes from './Detail.module.scss';
import ButtonCT from '../../components/ButtonCT/ButtonCT';
import { ReactComponent as EyeIcon } from '../../assets/svg/detailRequest/eye.svg';

const DetailItem = ({ productDetail, index }) => {
  const [show, setShow] = useState(false);

  return (
        <main className={classes.detail__product__main}>
            <h4 className={classes.number__product}>
                Sản phẩm
                {' '}
                {index + 1}
            </h4>
            <div className={classes.detail__container}>
                <div className={`${classes.detail__container__view} ${show ? ` ${classes.show}` : ''}`}>
                    <div className={classes.content__section}>
                        <div className={classes.title}>
                            <p>Tên sản phẩm:</p>
                            <p>Giá:</p>
                            <p>Size:</p>
                            <p>Số lượng:</p>
                        </div>
                        <div className={classes.detail__content}>
                            <p>{productDetail.name}</p>
                            <p>{productDetail.price}</p>
                            <p>{productDetail.size}</p>
                            <p>{productDetail.amount}</p>
                        </div>
                        <div className={classes.img}>
                            <img height={140} src={productDetail.img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </main>
  );
};

export default DetailItem;
