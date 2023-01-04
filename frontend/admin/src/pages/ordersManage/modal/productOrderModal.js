import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faMapLocationDot, faTruckFast, faUser, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import classes from './modal.module.scss';
import StatusLabel from '../statusLabel/statusLabel';
import ProductInfo from '../productInfo/productInfo';
import ButtonCT from '../../../components/ButtonCT/ButtonCT';
import { LoadingDonut } from '../../../components/Loading/Loading';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { ORDER_STATUS_ENUM, ORDER_STATUS_ENUM_DELIVIRY } from '../../../constants/index';

const ProductOrderModal = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate.get(`/orders/${id}`).then((res) => {
      setData(res.data.data);
      setLoading(false);
    }).catch((err) => {});
  }, []);

  return (
    loading ? (
      <div className={classes.modalLoading}>
            <LoadingDonut />
      </div>
    )
      : (
      <div className={classes.productOrderModal}>
        <div className={classes.productOrderModal__information}>
          <ul className={classes.information__list}>
            <li>
              <strong>ID Order:</strong>
              {' '}
              {data.IdOrder}
            </li>
            <li>
              <FontAwesomeIcon icon={faUser} className={classes['information__list-icon']} />
              {data.address.name || data.idUser.name}
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} className={classes['information__list-icon']} />
              {data.address.phone || data.idUser.phone}
            </li>
            <li>
              <FontAwesomeIcon icon={faMapLocationDot} className={classes['information__list-icon']} />
              {`${data.address.street}, ${data.address.ward}, ${data.address.district}, ${data.address.city}`}
            </li>
          </ul>
          <ul className={classes.information__list}>
            <li>
              <strong>Thông tin đơn hàng</strong>
            </li>
            <li>
              <FontAwesomeIcon icon={faTruckFast} className={classes['information__list-icon']} />
              {data.receiveMethod === 0 ? 'Giao hàng' : 'Nhận hàng tại cơ sở ĐH Ngân hàng'}
            </li>
            <li>
              <FontAwesomeIcon icon={faNoteSticky} className={classes['information__list-icon']} />
              {data.note || 'Không có'}
            </li>
            <li>
              <FontAwesomeIcon icon={faFileInvoiceDollar} className={classes['information__list-icon']} />
              {data.paymentMethod === 0 ? 'Thanh toán khi nhận hàng' : 'Thanh toán Momo'}
            </li>
          </ul>
          <ul className={classes.information__list}>
            <li>
              <strong>Thông tin thanh toán</strong>
            </li>
            <li>
              Tiền hàng:
              {' '}
              <span>
                {data.totalPriceProduct || 0}
                {' '}
                vnđ
              </span>
            </li>
            <li>
              Phí ship:
              {' '}
              <span>
                {data.shipFee || 0}
                {' '}
                vnđ
              </span>
            </li>
            <li>
              Khuyến mãi:
              {' '}
              <span>
                {data.discount || 0}
                {' '}
                đ
              </span>
            </li>
            <li>
              Tổng tiền:
              {' '}
              <strong style={{ color: '#FF0000' }}>
                {data.totalPrice || 0}
                {' '}
                vnđ
              </strong>
            </li>
          </ul>
        </div>
        <div className={classes.productOrderModal__detailWrap}>
          <div className={classes.productOrderModal__detail}>
            <div className={classes.detail__status}>
              <div>
              <span>Trạng thái: </span>
              <StatusLabel
                idOrder={id}
                typeOrder="PRODUCT"
                listItem={data?.address?.city ? ORDER_STATUS_ENUM_DELIVIRY : ORDER_STATUS_ENUM}
                idxSelected={data.status > 2
                  ? data.status - 1 : data.status}
                reload={id}
              />
              </div>
            </div>
            <div className={classes.detail__list}>
              {data.products.map((item, idx) => (
                <div key={+idx}>
                  <ProductInfo detail={item} />
                </div>
              ))}
            </div>
          </div>
          <ButtonCT
            outlineBtn
            small
            className={classes.productOrderModal__btn}
            disabled
          >
            <strong>Xuất đơn</strong>
          </ButtonCT>
        </div>
      </div>
      )
  );
};

ProductOrderModal.propTypes = {
  id: PropTypes.string.isRequired
};

export default ProductOrderModal;
