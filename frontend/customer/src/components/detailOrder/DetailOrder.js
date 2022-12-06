/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import classes from './DetailOrder.module.scss';
import qr from '../../assets/imgs/detailRequest/QR 1.png';

const DetailProduct = ({ orderDetail, id, isLoading }) => {
    const paymentDelivery = [
        `Khách hàng mang đến cơ sở ${orderDetail && orderDetail.facility ? orderDetail.facility.name : '\u00A0'}`,
        `Cơ sở vận chuyển đến ${orderDetail && orderDetail.address ? orderDetail.address.name : '\u00A0'}`,
    ];

    const statusClass = {
        'Đang kiểm tra': classes.processing,
        'Chờ nhận hàng': classes.waiting,
        'Đã hoàn thành': classes.success,
    };

    return (
        <div className={classes.main}>
            <h3 className={classes.title}>CHI TIẾT ĐƠN HÀNG</h3>
            {/* Content section */}
            <div className={classes.content}>
                <div className={classes.left__section}>
                    <p>Mã đơn hàng</p>
                    <p>Ngày tạo</p>
                    <p>Yêu cầu</p>
                    <p>Hình thức nhận hàng</p>
                    <p>Trạng thái</p>
                </div>
                <div className={classes.middle__section}>
                    <p>{!isLoading ? (orderDetail && orderDetail.code ? orderDetail.code : '\u00A0') : 'loading...'}</p>
                    <p>
                        {!isLoading
                            ? orderDetail && orderDetail.create_at
                                ? new Date(orderDetail.create_at).toLocaleString('vi', { timeZone: 'Asia/Ho_Chi_Minh' })
                                : '\u00A0'
                            : 'loading...'}
                    </p>
                    <p>
                        {!isLoading
                            ? orderDetail && orderDetail.service
                                ? orderDetail.service
                                : '\u00A0'
                            : 'loading...'}
                    </p>
                    <p style={{ color: '#666666' }}>
                        {!isLoading
                            ? orderDetail && orderDetail.paymentDelivery !== undefined
                                ? paymentDelivery[orderDetail.paymentDelivery]
                                : '\u00A0'
                            : 'loading...'}
                    </p>
                    <p
                        className={`${classes.status}${
                            orderDetail && orderDetail.status ? ` ${statusClass[orderDetail.status]}` : ''
                        }`}
                    >
                        {!isLoading
                            ? orderDetail && orderDetail.status
                                ? orderDetail.status
                                : '\u00A0'
                            : 'loading...'}
                    </p>
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
                    <p>
                        {!isLoading
                            ? orderDetail && orderDetail.totalPrice
                                ? orderDetail.totalPrice
                                : '\u00A0'
                            : 'loading...'}
                    </p>
                    <p>0đ</p>
                    <p className={classes.total} style={{ color: '#FF3434' }}>
                        {!isLoading
                            ? orderDetail && orderDetail.totalPrice
                                ? orderDetail.totalPrice
                                : '\u00A0'
                            : 'loading...'}
                    </p>
                </div>
                {/* <div className={classes.price__button__section}>
                <ButtonCT
                    type="button"
                    className={classes.cancel__button}
                    large
                    borderRadius
                    outlineBtn
                    content="Hủy đơn hàng"
                />
            </div> */}
            </div>
        </div>
    );
};
export default DetailProduct;
