/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark, faPencil } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'react-toastify';
import moment from 'moment';
import { RecoilRoot, useRecoilValue, useSetRecoilState } from 'recoil';
import io from 'socket.io-client';
import classes from './ordersManage.module.scss';
import StatusLabel from './statusLabel/statusLabel';
import Modal from './modal/modal';
import ProductOrderModal from './modal/productOrderModal';
import ServiceOrderModal from './modal/serviceOrderModal';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { ORDER_STATUS_ENUM, SERVICE_STATUS_ENUM,
  IDX_SERVICE_STATUS_ENUM, ORDER_STATUS_ENUM_DELIVIRY } from '../../constants/index';
import { LoadingDonut } from '../../components/Loading/Loading';
import { cancelRecoil, reloadOrderRecoil } from './recoil';

const FILTER_STATUS = {
  ALL: {
    status_product: -1,
    status_service: -1
  },
  PENDING: {
    status_product: 0,
    status_service: 'Đang kiểm tra'
  },
  COMPLETED: {
    status_product: 4,
    status_service: 'Đã hoàn thành'
  },
  CANCELED: {
    status_product: 5,
    status_service: 'Đã hủy'
  }
};

const socket = io.connect(process.env.REACT_APP_ipAddress);

const OrdersManageRecoil = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [typeOrder, setTypeOrder] = useState('PRODUCT');
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [idSelect, setIdSelect] = useState('');
  const [filter, setFilter] = useState('ALL');
  const [newOrder, setNewOrder] = useState(false);
  const [newService, setNewService] = useState(true);
  const reloadOrder = useRecoilValue(reloadOrderRecoil);
  const setCancel = useSetRecoilState(cancelRecoil);

  const axiosPrivate = useAxiosPrivate();

  const handleChangeType = (type) => {
    setLoading(true);
    setTypeOrder(type);
    if (type === 'PRODUCT') {
      setNewOrder(false);
    } else {
      setNewService(false);
    }
  };

  const handleSelectItem = (item) => {
    if (typeOrder === 'PRODUCT') {
      setIdSelect(item._id);
    } else {
      setIdSelect(item.code);
    }
    setIsOpen(true);
  };

  useEffect(() => {
    setLoading(true);
    if (typeOrder === 'PRODUCT') {
      const query = FILTER_STATUS[filter].status_product !== -1
        ? `?status=${FILTER_STATUS[filter].status_product}` : '';
      axiosPrivate.get(`/orders${query}`).then((res) => {
        setData(res.data.data.orders);
        setLoading(false);
      }).catch((err) => {});
    } else {
      const query = FILTER_STATUS[filter].status_service !== -1
        ? `?status=${FILTER_STATUS[filter].status_service}` : '';
      axiosPrivate.get(`/services${query}`).then((res) => {
        setData(res.data.data.orders);
        setLoading(false);
      }).catch((err) => {});
    }
  }, [typeOrder, reloadOrder, filter]);

  useEffect(() => {
    socket.on('order', (data) => {
      setData((prevData) => [data, ...prevData]);
      setNewOrder(true);
    });
    socket.on('service', (data) => {
      setData((prevData) => [data, ...prevData]);
      setNewService(true);
    });
  }, []);

  return (
    <>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          {typeOrder === 'PRODUCT'
            ? <ProductOrderModal id={idSelect} />
            : <ServiceOrderModal id={idSelect} />}
        </Modal>
      )}
      <div className={classes.orders}>
      <div className={classes.orders__header}>
        <div className={classes['orders__header-heading']}>
          <h2>Orders</h2>
          <span>
            {data.length}
            {' '}
            Orders found
          </span>
        </div>
        <div className={classes['orders__header-search']}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={classes['orders__header-search-icon']} />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={classes.orders__content}>
        <div className={classes.content__filter}>
          <ul className={classes['content__filter-typeOrder']}>
            <li
              className={`${newOrder && classes['orders--notice']}
              ${typeOrder === 'PRODUCT' ? classes['orders--active'] : ''}`}
              onClick={() => handleChangeType('PRODUCT')}
            >
              Product Orders
            </li>
            <li
              className={`${newService && classes['orders--notice']} 
                ${typeOrder === 'SERVICE' ? classes['orders--active'] : ''}`}
              onClick={() => handleChangeType('SERVICE')}
            >
              Service Orders
            </li>
          </ul>
          <ul className={classes['content__filter-typeStatus']}>
            <li
              className={`${filter === 'ALL' && classes['orders--active']}`}
              onClick={() => setFilter('ALL')}
            >
              All orders
            </li>
            <li
              className={`${filter === 'COMPLETED' && classes['orders--active']}`}
              onClick={() => setFilter('COMPLETED')}
            >
              Completed
            </li>
            <li
              className={`${filter === 'PENDING' && classes['orders--active']}`}
              onClick={() => setFilter('PENDING')}
            >
              Pending
            </li>
            <li
              className={`${filter === 'CANCELED' && classes['orders--active']}`}
              onClick={() => setFilter('CANCELED')}
            >
              Canceled
            </li>
          </ul>
        </div>

        <div className={classes.content__table}>
          <ul className={classes['content__table-heading']}>
            <li style={{ flex: 1, textAlign: 'center' }}>#</li>
            <li style={{ flex: 4 }}>Order ID</li>
            <li style={{ flex: 6 }}>Address</li>
            <li style={{ flex: 4 }}>Date</li>
            {typeOrder === 'PRODUCT' ? <li style={{ flex: 4 }}>Total</li>
              : <li style={{ flex: 4 }}>Service</li>}
            <li style={{ flex: 4 }}>Status</li>
            <li style={{ flex: 1 }} />
          </ul>

          {loading ? (
            <div className={classes['content__table-loading']}>
              <LoadingDonut />
            </div>
          ) : (
            <div className={classes['content__table-list']}>
              {data.map((item, idx) => (
                <ul
                  className={classes['content__table-item']}
                  key={+idx}
                >
                  <li style={{ flex: 1, textAlign: 'center' }} onClick={() => handleSelectItem(item)}>{idx + 1}</li>
                  <li style={{ flex: 4 }} onClick={() => handleSelectItem(item)}>{item.IdOrder || item.code}</li>
                  <li style={{ flex: 6 }} onClick={() => handleSelectItem(item)}>
                    {`${item?.address?.district ? item?.address?.district : item?.facility?.name} 
                    ${item?.address?.city ? `, ${item?.address?.city}` : ''}`}
                  </li>
                  <li style={{ flex: 4 }} onClick={() => handleSelectItem(item)}>
                    {moment(item.createAt || item.create_at).format('DD/MM/yyyy')}
                  </li>
                  {typeOrder === 'PRODUCT' ? (
                    <li style={{ flex: 4 }} onClick={() => handleSelectItem(item)}>
                    {item.totalPrice}
                    {' '}
                    vnđ
                    </li>
                  )
                    : <li style={{ flex: 4 }} onClick={() => handleSelectItem(item)}>{item.service}</li>}
                  <li style={{ flex: 4 }}>
                    <StatusLabel
                      idOrder={item?.code || item._id}
                      typeOrder={typeOrder}
                      listItem={typeOrder === 'SERVICE' ? SERVICE_STATUS_ENUM
                        : item?.address?.city ? ORDER_STATUS_ENUM_DELIVIRY : ORDER_STATUS_ENUM}
                      idxSelected={typeOrder === 'SERVICE'
                        ? IDX_SERVICE_STATUS_ENUM[item.status]
                        : item.status > 2
                          ? item.status - 1 : item.status}
                    />
                  </li>
                  <li
                    style={{ flex: 1, textAlign: 'center' }}
                  >
                    {typeOrder === 'SERVICE'
                      && <FontAwesomeIcon className={classes['content__table-item-icon1']} icon={faPencil} />}
                    {typeOrder === 'PRODUCT'
                      && (
                      <FontAwesomeIcon
                        className={classes['content__table-item-icon2']}
                        icon={faXmark}
                        onClick={() => setCancel(item?.code || item._id)}
                      />
                      )}
                  </li>
                </ul>
              ))}
            </div>
          )}
        </div>
      </div>
      </div>
    </>
  );
};

OrdersManageRecoil.propTypes = {

};

const OrdersManage = () => (
  <RecoilRoot>
    <OrdersManageRecoil />
  </RecoilRoot>
);
export default OrdersManage;
