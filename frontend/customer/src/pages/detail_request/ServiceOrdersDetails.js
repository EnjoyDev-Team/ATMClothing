/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import classes from './ServiceOrdersDetails.module.scss';
import Order from '../../components/detailOrder/Order';
import DetailOrder from '../../components/detailOrder/DetailOrder';
import DetailProduct from '../../components/detailOrder/DetailProduct';
import FilterTable from '../../components/detailOrder/FilterTable';
import filter from '../../assets/imgs/detailRequest/Filter Edit.png';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const ServiceOrdersDetails = () => {
    const [response, setResponse] = useState('');
    const [responseID, setResponseID] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingID, setIsLoadingID] = useState(false);
    const [error, setError] = useState('');
    const [errorID, setErrorID] = useState('');

    const params = useParams();
    const id = params.id || '';

    const [show, setShow] = useState(false);
    function toggle_filter_table() {
        setShow((prev) => !prev);
    }

    const [orderList, setOrderList] = useState('');
    const [orderDetail, setOrderDetail] = useState('');

    const axiosPrivate = useAxiosPrivate();

    useEffect(() => {
        if (!isLoading) {
            setIsLoading(true);
            axiosPrivate.get('/services')
            .then(res => setResponse(res.data))
            .catch(err => setError(err.response.data))
            .finally(() => setIsLoading(false));
        }
    }, []);

    useEffect(() => {
        if (!isLoadingID) {
            setIsLoadingID(true);
            axiosPrivate.get(`/services/${id}`)
            .then(res => setResponseID(res.data))
            .catch(err => setErrorID(err.response.data))
            .finally(() => setIsLoadingID(false));
        }
    }, [id]);

    useEffect(() => {
        if (!isLoading && !error && response.data) {
            setOrderList(response.data.orders);
        }
    }, [isLoading]);

    useEffect(() => {
        if (!isLoadingID && !errorID && responseID.data) {
            setOrderDetail(responseID.data.order);
        } else setOrderDetail('');
    }, [isLoadingID]);

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
                                <img
                                    src={filter}
                                    onClick={toggle_filter_table}
                                    className={classes.filter__img}
                                    alt=""
                                />
                                {show === true ? <FilterTable className={classes.filter__table} /> : ''}
                            </div>
                            <div className={classes.list}>
                                {!isLoading ? orderList ? (
                                    <Order orderList={orderList} id={id} />
                                ) : <span style={{ margin: '2rem 2rem', display: 'block' }}>There is no orders</span> : (
                                    <span style={{ margin: '2rem 2rem', display: 'block' }}>loading...</span>
                                )}
                            </div>
                        </div>
                        <div className={classes.order__detail}>
                            <DetailOrder orderDetail={orderDetail} id={id} isLoading={isLoadingID} />
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.detail__product__container}>
                <h2>DANH SÁCH SẢN PHẨM</h2>
                {!isLoadingID ? orderDetail && orderDetail.products && orderDetail.products.length ? (
                    orderDetail.products.map((el, index) => (
                        <DetailProduct key={el._id} productDetail={el} index={index} />
                    ))
                ) : <span style={{ margin: '2rem 7rem', display: 'block' }}>There is no information</span> : (
                    <span style={{ margin: '2rem 7rem', display: 'block' }}>loading...</span>
                )}
            </div>
        </div>
    );
};

export default ServiceOrdersDetails;
