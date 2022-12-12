/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark, faPencil } from '@fortawesome/free-solid-svg-icons';
import classes from './ordersManage.module.scss';
import StatusLabel from './statusLabel/statusLabel';
import Modal from './modal/modal';
import ProductOrderModal from './modal/productOrderModal';

const listItem = [
  {
    label: 'Đang kiểm tra',
    code: 0,
    style: 'waiting'
  },
  {
    label: 'Đã xác nhận',
    code: 1,
    style: 'confirmed'
  },
  {
    label: 'Đang giao hàng',
    code: 2,
    style: 'delivery'
  },
  {
    label: 'Chờ nhận hàng',
    code: 3,
    style: 'receiving'
  },
  {
    label: 'Đã nhận hàng',
    code: 4,
    style: 'success'
  },
  {
    label: 'Đã hủy',
    code: 5,
    style: 'canceled'
  }
];

const OrdersManage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <Modal setIsOpen={setIsOpen}>
          <ProductOrderModal />
        </Modal>
      )}
      <div className={classes.orders}>
      <div className={classes.orders__header}>
        <div className={classes['orders__header-heading']}>
          <h2>Orders</h2>
          <span>79 Orders found</span>
        </div>
        <div className={classes['orders__header-search']}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={classes['orders__header-search-icon']} />
          <input type="text" placeholder="Search" />
        </div>
      </div>

      <div className={classes.orders__content}>
        <div className={classes.content__filter}>
          <ul className={classes['content__filter-typeOrder']}>
            <li className={classes['orders--active']}>Product Orders</li>
            <li className={classes['orders--notice']}>Service Orders</li>
          </ul>
          <ul className={classes['content__filter-typeStatus']}>
            <li className={classes['orders--active']}>All orders</li>
            <li>Completed</li>
            <li>Pending</li>
            <li>Canceled</li>
          </ul>
        </div>

        <div className={classes.content__table}>
          <ul className={classes['content__table-heading']}>
            <li style={{ flex: 1, textAlign: 'center' }}>#</li>
            <li style={{ flex: 4 }}>Order ID</li>
            <li style={{ flex: 6 }}>Address</li>
            <li style={{ flex: 4 }}>Date</li>
            <li style={{ flex: 4 }}>Total</li>
            <li style={{ flex: 4 }}>Status</li>
            <li style={{ flex: 1 }} />
          </ul>

          <div className={classes['content__table-list']}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 13, 14, 15, 16].map((e, idx) => (
              <ul
                className={classes['content__table-item']}
                key={+idx}
                onClick={() => setIsOpen(true)}
              >
                <li style={{ flex: 1, textAlign: 'center' }}>{idx}</li>
                <li style={{ flex: 4 }}>HB2343</li>
                <li style={{ flex: 6 }}>Tran Hung Dao, Q1, HCM</li>
                <li style={{ flex: 4 }}>20/12/2022</li>
                <li style={{ flex: 4 }}>220.000 vnđ</li>
                <li style={{ flex: 4 }}>
                  <StatusLabel
                    listItem={listItem}
                    idxSelected={idx % 6}
                  />
                </li>
                <li
                  style={{ flex: 1, textAlign: 'center' }}
                >
                  <FontAwesomeIcon className={classes['content__table-item-icon1']} icon={faPencil} />
                  <FontAwesomeIcon className={classes['content__table-item-icon2']} icon={faXmark} />
                </li>
              </ul>
            ))}
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

OrdersManage.propTypes = {

};

export default OrdersManage;
