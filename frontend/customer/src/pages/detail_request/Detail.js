/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import classes from './Detail.module.scss';
import Order from '../../components/detailOrder/Order';
import DetailOrder from '../../components/detailOrder/DetailOrder';
import DetailProduct from '../../components/detailOrder/DetailProduct';
import FilterTable from '../../components/detailOrder/FilterTable';
import filter from '../../assets/imgs/detailRequest/Filter Edit.png';

const Detail = () => {
    const [show, setShow] = useState(false);
    function toggle_filter_table() {
        setShow((prev) => !prev);
    }
    return (
        <div className={classes.body}>
            <div className={classes.title}>
                <h1>Chi tiết đơn hàng bạn đã tạo</h1>
                <p>Cảm ơn bạn đã sử dụng nền tảng của chúng tôi để góp phần bảo vệ môi trường và cộng đồng</p>
            </div>
            <div className={classes.productList}>
                <div className={classes.items__container}>
                    <div className={classes.list__container}>
                        <div className={classes.left__section}>
                            <div className={classes.items__header}>
                                <p className={classes.header__order}>Danh sách đơn hàng</p>
                                <img src={filter} onClick={toggle_filter_table} class={classes.filter__img} alt="" />
                                {show === true ? <FilterTable className={classes.filter__table} /> : ''}
                            </div>
                            <div className={classes.list}>
                                <Order />
                            </div>
                        </div>
                        <div className={classes.order__detail}>
                            <DetailOrder />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.detail__product__container}>
                <h2>DANH SÁCH SẢN PHẨM</h2>
                <DetailProduct index=" 1" />
                <DetailProduct index=" 2" />
            </div>
        </div>
    );
};

export default Detail;
