/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import classes from './Order.module.scss';

const Order = ({ orderList, id }) => {
    const statusClass = {
        'Đang kiểm tra': classes.processing,
        'Chờ nhận hàng': classes.waiting,
        'Đã hoàn thành': classes.success,
    };

    const navigate = useNavigate();

    return orderList && orderList.length
        ? orderList.map((item, index) => (
              <div
                onClick={() => navigate(`/services/orders/${item.code}`)}
                key={+index}
                className={`${classes.body}${id === item.code ? ` ${classes.active}` : ''}`}
              >
                  <div className={classes.date__container}>
                      <FontAwesomeIcon icon={faClock} className={classes.icon} />
                      <span className={classes.date}>
                          {new Date(item.create_at).toLocaleDateString('vi', {
                              timeZone: 'Asia/Ho_Chi_Minh',
                          })}
                      </span>
                  </div>
                  <div className={classes.content__container}>
                      <div className={classes.left__section}>
                          <p>Đơn hàng</p>
                          <p>Yêu cầu</p>
                          <p>Trạng thái</p>
                      </div>
                      <div className={classes.right__section}>
                          <p>{item.code}</p>
                          <p>{item.service}</p>
                          <p className={`${statusClass[item.status]}`}>{item.status}</p>
                      </div>
                  </div>
              </div>
          ))
        : '';
};

export default Order;
