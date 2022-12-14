import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faMapLocationDot, faTruckFast, faUser, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import classes from './modal.module.scss';
import StatusLabel from '../statusLabel/statusLabel';
import ProductInfo from '../productInfo/productInfo';
import ButtonCT from '../../../components/ButtonCT/ButtonCT';
import ItemInfo from '../productInfo/itemInfo';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { LoadingDonut } from '../../../components/Loading/Loading';
import { SERVICE_STATUS_ENUM, IDX_SERVICE_STATUS_ENUM } from '../../../constants';

const ServiceOrderModal = ({ id }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    axiosPrivate.get(`/services/${id}`).then((res) => {
      setData(res.data.data.order);
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
            {data?.code}
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className={classes['information__list-icon']} />
            {data?.address?.name || data?.idUser?.name}
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className={classes['information__list-icon']} />
            {data?.address?.phone || data?.user?.phone}
          </li>
          <li>
            <FontAwesomeIcon icon={faMapLocationDot} className={classes['information__list-icon']} />
            {`${data?.address?.street}, ${data?.address?.ward}, ${data?.address?.district}, ${data?.address?.city}`}
          </li>
        </ul>
        <ul className={classes.information__list}>
          <li>
            <strong>Th??ng tin ????n h??ng</strong>
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckFast} className={classes['information__list-icon']} />
            {data?.paymentDelivery === 0 ? 'Giao h??ng' : 'Nh???n h??ng t???i c?? s??? ??H Ng??n h??ng'}
          </li>
          <li>
            <FontAwesomeIcon icon={faNoteSticky} className={classes['information__list-icon']} />
            {data?.note || 'Kh??ng c??'}
          </li>
          <li>
            <FontAwesomeIcon icon={faFileInvoiceDollar} className={classes['information__list-icon']} />
            {data?.paymentMethod === 0 ? 'Thanh to??n khi nh???n h??ng' : 'Thanh to??n Momo'}
          </li>
        </ul>
        <ul className={classes.information__list}>
          <li>
            <strong>Th??ng tin thanh to??n</strong>
          </li>
          <li>
            Ti???n h??ng/d???ch v???:
            {' '}
            <span>
              {data?.productPrice || 0}
              {' '}
              vn??
            </span>
          </li>
          <li>
            Ph?? ship:
            {' '}
            <span>
              {data?.shipFee || 0}
              {' '}
              vn??
            </span>
          </li>
          <li>
            Khuy???n m??i:
            {' '}
            <span>
              {data?.discount || 0}
              {' '}
              ??
            </span>
          </li>
          <li>
            T???ng ti???n:
            {' '}
            <strong style={{ color: '#FF0000' }}>
              {data?.totalPrice || 0}
              {' '}
              vn??
            </strong>
          </li>
        </ul>
      </div>
      <div className={classes.productOrderModal__detailWrap}>
        <div className={classes.productOrderModal__detail}>
          <div className={classes.detail__status}>
            <div>
              <span>Tr???ng th??i: </span>
              <StatusLabel
                idOrder={id}
                typeOrder="SERVICE"
                listItem={SERVICE_STATUS_ENUM}
                idxSelected={IDX_SERVICE_STATUS_ENUM[data.status]}
                reload={id}
              />
            </div>
            <div>
              <span>Service: </span>
              <strong>{data?.service}</strong>
            </div>
          </div>
          <div className={classes.detail__list}>
            {data.products.map((item, idx) => (
              <div key={+idx}>
                <ItemInfo
                  productDetail={item}
                  index={idx}
                />
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
          <strong>Xu???t ????n</strong>
        </ButtonCT>
      </div>
    </div>
      )
  );
};

ServiceOrderModal.propTypes = {
  id: PropTypes.string.isRequired
};

export default ServiceOrderModal;
