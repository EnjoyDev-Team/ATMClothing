/* eslint-disable indent */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import QRCode from 'qrcode';
import classes from './DetailOrder.module.scss';
import { STATUS_ORDER_PRODUCT } from '../../constants';

const statusOrder = STATUS_ORDER_PRODUCT;

const DetailProduct = ({ orderDetail, id, isLoading }) => {
    const paymentDelivery = [
        `Khách hàng mang đến cơ sở ${orderDetail && orderDetail.facility ? orderDetail.facility.name : '\u00A0'}`,
        `Cơ sở vận chuyển đến ${orderDetail && orderDetail.address ? orderDetail.address.name : '\u00A0'}`,
    ];

    const statusClass = {
        'Đang kiểm tra': classes.processing,
        'Chờ nhận hàng': classes.waiting,
        'Đã hoàn thành': classes.success,
        'Đã hủy': classes.canceled,
    };

    const location = useLocation();
    const path = location.pathname.split('/');
    const [qr, setQR] = useState('');

    const generateQR = async text => {
        try {
          const res = await QRCode.toDataURL(text);
          setQR(res);
        } catch (err) {
          console.error(err);
        }
      };

    useEffect(() => {
        if (orderDetail.IdOrder || orderDetail.code) {
            generateQR(orderDetail.IdOrder || orderDetail.code);
        }
    }, [orderDetail]);

    return (
        <div className={classes.main}>
            <h3 className={classes.title}>CHI TIẾT ĐƠN HÀNG</h3>
            {path.length > 3 && orderDetail
            ? (
            <div>
                {/* Content section */}
            <div className={classes.content}>
                <div className={classes.left__section}>
                    <p>Mã đơn hàng</p>
                    <p>Ngày tạo</p>
                    {orderDetail && orderDetail.service && <p>Yêu cầu</p>}
                    <p>Hình thức nhận hàng</p>
                    {orderDetail.address && orderDetail.address.name
                    && <p style={{ paddingBottom: '68px' }}>Địa chỉ</p>}
                    <p>Trạng thái</p>
                </div>
                <div className={classes.middle__section}>
                    <p>
                        {!isLoading
                            ? orderDetail && orderDetail.IdOrder
                                ? orderDetail.IdOrder
                                : orderDetail && orderDetail.code
                                ? orderDetail.code
                                : '\u00A0'
                            : 'loading...'}
                    </p>
                    <p>
                        {!isLoading
                            ? orderDetail && orderDetail.createAt
                                ? new Date(orderDetail.createAt).toLocaleString('vi', { timeZone: 'Asia/Ho_Chi_Minh' })
                                : orderDetail && orderDetail.create_at
                                ? new Date(orderDetail.create_at).toLocaleString('vi', { timeZone: 'Asia/Ho_Chi_Minh' })
                                : '\u00A0'
                            : 'loading...'}
                    </p>
                    <p>
                        {!isLoading
                            ? orderDetail && orderDetail.service
                                ? orderDetail.service
                                : ''
                            : 'loading...'}
                    </p>
                    <p style={{ color: '#666666' }}>
                        {!isLoading
                            ? orderDetail && orderDetail.paymentDelivery !== undefined
                                ? paymentDelivery[orderDetail.paymentDelivery]
                                : 'Giao hàng'
                            : 'loading...'}
                    </p>
                    {orderDetail.address && orderDetail.address.name && (
                        <p className={classes.detailOrder__address} style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '10px' }}>
                        <span style={{ color: '#13488C' }}>
                            {orderDetail.address.name}
                            {' '}
                            |
                            {' '}
                            {orderDetail.address.phone}
                        </span>
                        <span style={{ color: '#808080', display: 'block', fontWeight: '300', padding: '2px 0' }}>{orderDetail.address.street}</span>
                        <span style={{ color: '#808080', fontWeight: '300' }}>
                            {orderDetail.address.ward}
                            ,
                            {' '}
                            {orderDetail.address.district}
                            ,
                            {' '}
                            {orderDetail.address.city}
                        </span>
                        </p>
                        )}
                    <p
                        className={`${classes.status}
                        ${orderDetail && Number.isInteger(orderDetail.status)
                            ? ` ${classes[statusOrder[orderDetail.status].style]}`
                            : ` ${statusClass[orderDetail.status]}`}
                        `}
                    >
                        {!isLoading
                            ? orderDetail && Number.isInteger(orderDetail.status)
                                ? statusOrder[orderDetail.status].label
                                : orderDetail.status
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
                    {path[1] === 'shopping' ? <p>Tổng tiền hàng</p> : <p>Tổng chi phí</p>}
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
            ) : <p />}
        </div>
    );
};
export default DetailProduct;
