import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classes from './Shopping.module.scss';
import Cartproductcard from '../../components/cartproductcard/CartProductCard';
import ButtonCT from '../../components/ButtonCT/ButtonCT';
import quanaoNu from '../../assets/imgs/quanaoNu.png';
import quanaoNam from '../../assets/imgs/quanaoNam.png';
import thoiTrangNu from '../../assets/imgs/thoiTrangNu.png';
import thoiTrangNam from '../../assets/imgs/thoiTrangNam.png';
import choTreem from '../../assets/imgs/choTreem.png';
import doDungGiaDinh from '../../assets/imgs/doDungGiaDinh.png';
import khac from '../../assets/imgs/khac.png';

const listProducts = [
  {
    img: quanaoNu,
    name: 'Quần Áo Nữ',
    price: '100.000',
    describe: 'Cơ sở ĐH Ngân Hàng',
  },
  {
    img: quanaoNam,
    name: 'Quần Áo Nam',
    describe: 'Cơ sở ĐH Khoa Học Tư Nhiên',
    price: '200.000',
  },
  {
    img: thoiTrangNu,
    name: 'Thời Trang Nữ',
    describe: 'Cơ sở ĐH Khoa Học Tư Nhiên',
    price: '300.000',
  },
  {
    img: thoiTrangNam,
    name: 'Thời Trang Nam',
    describe: 'Cơ sở ĐH Ngân Hàng',
    price: '400.000',
  },
  {
    img: choTreem,
    name: 'Thời Trang Cho Trẻ Em',
    describe: 'Cơ sở ĐH Ngân Hàng',
    price: '40.000',
  },
  {
    img: doDungGiaDinh,
    name: 'Đồ Dùng Gia đình',
    describe: 'Cơ sở ĐH Khoa Học Tự Nhiên',
    price: '1.000.000',
  },
  {
    img: choTreem,
    name: 'Thời Trang Cho Trẻ Em',
    describe: 'Cơ sở ĐH Khoa Học Tự Nhiên',
    price: '80.000',
  },
  {
    img: thoiTrangNam,
    name: 'Thời Trang Nam',
    describe: 'Cơ sở ĐH Ngân Hàng',
    price: '400.000',
  },
];

const Shopping = () => {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  const [state, setState] = useState(false);
  const handleState = () => {
    setState((prev) => !prev);
  };
  return (
    <div>
        <div className={classes.header}>
            <h1>Giỏ hàng của bạn</h1>
            <p>Cảm ơn bạn đã sử dụng nền tảng của chúng tôi để góp phần bảo vệ môi trường và cộng đồng</p>
        </div>
        <div className={classes.container}>
            <div className={classes.container__content}>
                <div className={classes.container__content__header}>
                    <h2>3 sản phẩm trong giỏ hàng</h2>
                    <div className={classes.container__content__header__all}>
                        <input type="checkbox" />
                        <p>Chọn tất cả</p>
                    </div>
                </div>
                <div className={classes.container__content__cart}>
                    <div className={classes.container__content__cart__address}>
                        <div className={classes.container__content__cart__address__all}>
                            <input type="checkbox" />
                            <p>Cơ sở Đại Học Ngân Hàng</p>
                        </div>
                    </div>
                    <div className={classes.container__content__cart__listproduct}>
                        {
                            listProducts.map((el, idx) => (
                                <div key={+idx}>
                                    <div className={classes.container__content__cart__listproduct__product}>
                                        <Cartproductcard Details={el} />
                                    </div>
                                    <div className={classes.container__content__cart__listproduct__line} />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={classes.container__content__cart}>
                    <div className={classes.container__content__cart__address}>
                        <div className={classes.container__content__cart__address__all}>
                            <input type="checkbox" />
                            <p>Cơ sở Đại Học SPKT</p>
                        </div>
                    </div>
                    <div className={classes.container__content__cart__listproduct}>
                        {
                            listProducts.map((el, idx) => (
                                <div key={+idx}>
                                    <div className={classes.container__content__cart__listproduct__product}>
                                        <Cartproductcard Details={el} />
                                    </div>
                                    <div className={classes.container__content__cart__listproduct__line} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className={classes.container__status}>
                    <div className={classes.container__status__payment}>
                        <h3>Thanh Toán</h3>
                    </div>
                    <div className={classes.container__status__valueproduct}>
                        <p>Số lượng sản phẩm</p>
                        <h3>2</h3>
                    </div>
                    <div className={classes.container__status__total}>
                        <p>Tổng cộng</p>
                        <h3>
                            437.000
                            {' '}
                            <p>đ</p>
                            {' '}
                        </h3>
                    </div>
                    <ButtonCT greenLinear medium className={classes.container__status__btn}>Thanh toán ngay</ButtonCT>
                </div>
            </div>
        </div>
    </div>
  );
};

Shopping.propTypes = {

};

export default Shopping;
