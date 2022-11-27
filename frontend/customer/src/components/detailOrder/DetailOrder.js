/* eslint-disable react/jsx-indent-props */
import React from 'react';
import classes from './DetailOrder.module.scss';
import qr from '../../assets/imgs/detailRequest/QR 1.png';
import ButtonCT from '../ButtonCT/ButtonCT';

const DetailProduct = () => (
    <div className={classes.main}>
        <h3 className={classes.title}>CHI TIẾT ĐƠN HÀNG</h3>
        {/* Content section */}
        <div className={classes.content}>
            <div className={classes.left__section}>
                <p>Mã đơn hàng</p>
                <p>Tên gợi nhớ</p>
                <p>Ngày tạo</p>
                <p>Yêu cầu</p>
                <p>Hình thức nhận hàng</p>
                <p>Trạng thái</p>
            </div>
            <div className={classes.middle__section}>
                <p>DAHTSK12473</p>
                <p>Không có</p>
                <p>22/9/2022</p>
                <p>Custom</p>
                <p style={{ color: '#666666' }}>Khách hàng mang đến cơ sở Đại học Ngân hàng</p>
                <p className={classes.state}>Đang kiểm tra</p>
            </div>
            <div className={classes.qr__section}>
                <img src={qr} alt="" />
            </div>
        </div>
        <p className={classes.required__message} style={{ color: '#ED4C4C' }}>
            Vui lòng cung cấp các thông tin này khi giao hàng
        </p>
        {/* Price section */}
        <div className={classes.price__section__container}>
            <div className={classes.price__left__section}>
                <p>Tiền bạn nhận được</p>
                <p>Phí vận chuyển</p>
                <p className={classes.total}>Tổng thanh toán</p>
            </div>
            <div className={classes.price__middle__section}>
                <p>20 000đ</p>
                <p>40 000đ</p>
                <p className={classes.total} style={{ color: '#FF3434' }}>
                    20 000đ
                </p>
            </div>
            <div className={classes.price__button__section}>
                <ButtonCT
                    type="button"
                    className={classes.cancel__button}
                    large
                    borderRadius
                    outlineBtn
                    content="Hủy đơn hàng"
                />
            </div>
        </div>
    </div>
);

export default DetailProduct;
