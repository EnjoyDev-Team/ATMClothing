/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { useLocation } from 'react-router';
import classes from './Order.module.scss';
import { STATUS_ORDER_PRODUCT } from '../../constants';

const statusClass = {
    'Đang kiểm tra': classes.processing,
    'Chờ nhận hàng': classes.waiting,
    'Đã hoàn thành': classes.success,
    'Đã hủy': classes.canceled,
};
const statusOrder = STATUS_ORDER_PRODUCT;

const Order = ({ orderList, id }) => {
    const location = useLocation();
    const navigate = useNavigate();

    return orderList && orderList.length
        ? orderList.map((item, index) => (
              <div
                onClick={() => navigate(`/${location.pathname.split('/')[1]}/orders/${item.code || item._id}`)}
                key={+index}
                className={`${classes.body}${id === item.code || id === item._id ? ` ${classes.active}` : ''}`}
              >
                  <div className={classes.date__container}>
                      <FontAwesomeIcon icon={faClock} className={classes.icon} />
                      <span className={classes.date}>
                          {new Date(item.create_at || item.createAt).toLocaleDateString('vi', {
                              timeZone: 'Asia/Ho_Chi_Minh',
                          })}
                      </span>
                  </div>
                  <div className={classes.content__container}>
                      <div className={classes.left__section}>
                          <p>Đơn hàng</p>
                          {item.service && <p>Yêu cầu</p>}
                          <p>Trạng thái</p>
                      </div>
                      <div className={classes.right__section}>
                          <p>{item.code || item.IdOrder}</p>
                          <p>{item.service}</p>
                          <p className={`${Number.isInteger(item.status)
                            ? classes[statusOrder[item.status].style]
                            : statusClass[item.status]}`}
                          >
                            {Number.isInteger(item.status) ? statusOrder[item.status].label : item.status}
                          </p>
                      </div>
                  </div>
              </div>
          ))
        : '';
};

export default Order;
