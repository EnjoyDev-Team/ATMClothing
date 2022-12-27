import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNoteSticky } from '@fortawesome/free-regular-svg-icons';
import { faPhone, faMapLocationDot, faTruckFast, faUser, faFileInvoiceDollar } from '@fortawesome/free-solid-svg-icons';
import classes from './modal.module.scss';
import StatusLabel from '../statusLabel/statusLabel';
import ProductInfo from '../productInfo/productInfo';
import ButtonCT from '../../../components/ButtonCT/ButtonCT';
import ItemInfo from '../productInfo/itemInfo';

const productInfo = [
  {
    img: 'https://product.hstatic.net/1000360022/product/dsc04660_8a79337277514f5598c02897b5066252_master.jpg',
    name: 'Áo blazer unisex caro phối jeans cá tính',
    price: '189.000 đ',
    detail: 'XL, oversize',
    facility: 'ĐH Ngân hàng'
  },
  {
    img: 'https://product.hstatic.net/1000360022/product/dsc04660_8a79337277514f5598c02897b5066252_master.jpg',
    name: 'Set đầm phối',
    price: '129.000đ',
    detail: 'XL, oversize',
    facility: 'ĐH SPKT'
  },
  {
    img: 'https://product.hstatic.net/1000360022/product/dsc04660_8a79337277514f5598c02897b5066252_master.jpg',
    name: 'Áo blazer unisex caro phối jeans cá tính',
    price: '189.000 đ',
    detail: 'XL, oversize',
    facility: 'ĐH Ngân hàng'
  },
  {
    img: 'https://product.hstatic.net/1000360022/product/dsc04660_8a79337277514f5598c02897b5066252_master.jpg',
    name: 'Áo blazer unisex caro phối jeans cá tính',
    price: '189.000 đ',
    detail: 'XL, oversize',
    facility: 'ĐH Ngân hàng'
  },
  {
    img: 'https://product.hstatic.net/1000360022/product/dsc04660_8a79337277514f5598c02897b5066252_master.jpg',
    name: 'Set đầm phối',
    price: '129.000đ',
    detail: 'XL, oversize',
    facility: 'ĐH SPKT'
  },
  {
    img: 'https://product.hstatic.net/1000360022/product/dsc04660_8a79337277514f5598c02897b5066252_master.jpg',
    name: 'Áo blazer unisex caro phối jeans cá tính',
    price: '189.000 đ',
    detail: 'XL, oversize',
    facility: 'ĐH Ngân hàng'
  },
];

const ServiceOrderModal = () => {
  const a = 0;

  return (
    <div className={classes.productOrderModal}>
      <div className={classes.productOrderModal__information}>
        <ul className={classes.information__list}>
          <li>
            <strong>ID Order:</strong>
            {' '}
            HUHDJK
          </li>
          <li>
            <FontAwesomeIcon icon={faUser} className={classes['information__list-icon']} />
            Huỳnh Tấn Vinh
          </li>
          <li>
            <FontAwesomeIcon icon={faPhone} className={classes['information__list-icon']} />
            0123456789
          </li>
          <li>
            <FontAwesomeIcon icon={faMapLocationDot} className={classes['information__list-icon']} />
            135 Trần Hưng Đạo, Quận 1, TPHCM
          </li>
        </ul>
        <ul className={classes.information__list}>
          <li>
            <strong>Thông tin đơn hàng</strong>
          </li>
          <li>
            <FontAwesomeIcon icon={faTruckFast} className={classes['information__list-icon']} />
            Giao hàng || Nhận hàng tại cơ sở ĐH Ngân hàng
          </li>
          <li>
            <FontAwesomeIcon icon={faNoteSticky} className={classes['information__list-icon']} />
            Giao hàng giờ hành chính nha shop
          </li>
          <li>
            <FontAwesomeIcon icon={faFileInvoiceDollar} className={classes['information__list-icon']} />
            Thanh toán khi nhận hàng
          </li>
        </ul>
        <ul className={classes.information__list}>
          <li>
            <strong>Thông tin thanh toán</strong>
          </li>
          <li>
            Tiền hàng:
            {' '}
            <span>406.000 vnđ</span>
          </li>
          <li>
            Phí ship:
            {' '}
            <span>18 000 vnđ</span>
          </li>
          <li>
            Khuyến mãi:
            {' '}
            <span>0 đ</span>
          </li>
          <li>
            Tổng tiền:
            {' '}
            <strong style={{ color: '#FF0000' }}>424 000 vnđ</strong>
          </li>
        </ul>
      </div>
      <div className={classes.productOrderModal__detailWrap}>
        <div className={classes.productOrderModal__detail}>
          <div className={classes.detail__status}>
            <span>Trạng thái: </span>
            <StatusLabel confirmed>Đã xác nhận</StatusLabel>
          </div>
          <div className={classes.detail__list}>
            {productInfo.map((item, idx) => (
              <div key={+idx}>
                <ItemInfo productDetail={{
                  pre_img: 'https://i.pinimg.com/originals/bd/7e/80/bd7e80c87c2a0deaf158f486ab515eb3.jpg',
                  post_img: 'https://i.pinimg.com/originals/bd/7e/80/bd7e80c87c2a0deaf158f486ab515eb3.jpg'
                }}
                />
              </div>
            ))}
          </div>
        </div>
        <ButtonCT
          outlineBtn
          small
          className={classes.productOrderModal__btn}
        >
          <strong>Xuất đơn</strong>
        </ButtonCT>
      </div>
    </div>
  );
};

ServiceOrderModal.propTypes = {

};

export default ServiceOrderModal;
