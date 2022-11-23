/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import classes from './Detail.module.scss';
import Order from '../../components/detailOrder/Order';
import DetailProduct from '../../components/detailOrder/DetailProduct';

const Detail = () => (
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
                            {/* list component */}
                        </div>
                        <div className={classes.list}>
                            <Order />
                        </div>
                    </div>
                    <div className={classes.detail}>
                        <DetailProduct />
                    </div>
                </div>
            </div>
            <div className={classes.item__detail}>{/* component */}</div>
        </div>
    </div>
);

export default Detail;
