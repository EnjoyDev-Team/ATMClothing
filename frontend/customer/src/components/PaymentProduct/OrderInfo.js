/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import classes from './OrderInfo.module.scss';
import khoacNam2 from '../../assets/imgs/khoacNam 2.png';
import muBe1 from '../../assets/imgs/muBe 1.png';

const orderInfo = [
    {
        img: khoacNam2,
        name: 'Áo blazer unisex caro phối jeans cá tính ',
        price: '189.000 đ',
        detail: 'XL, oversize, m70-m75, 50kg-65kg',
    },
    {
        img: muBe1,
        name: 'Set đầm phối',
        price: '129.000đ',
        detail: 'XL, oversize, m70-m75, 50kg-65kg',
    },
];

const OrderInfo = () =>
    orderInfo.map((item) => (
        <main className={classes.order_container}>
            <div className={classes.quantity}>1x</div>
            <div>
                <img src={item.img} alt="" />
            </div>
            <div className={classes.info}>
                <p className={classes.product__name}>{item.name}</p>
                <p className={classes.product__price}>{item.price}</p>
                <p className={classes.product__details}>{item.detail}</p>
            </div>
            <div className={classes.icon__container}>
                <FontAwesomeIcon className={classes.icon__trash} icon={faTrashCan} />
                <p className={classes.location}>
                    <FontAwesomeIcon className={classes.icon__location} icon={faLocationDot} /> Thủ Đức
                </p>
            </div>
        </main>
    ));

export default OrderInfo;
