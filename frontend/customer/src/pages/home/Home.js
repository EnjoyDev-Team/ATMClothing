import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import CardProduct from '../../components/cardProduct/CardProduct';
import classes from './Home.module.scss';
import quanaoNu from '../../assets/imgs/quanaoNu.png';
import quanaoNam from '../../assets/imgs/quanaoNam.png';
import thoiTrangNu from '../../assets/imgs/thoiTrangNu.png';
import thoiTrangNam from '../../assets/imgs/thoiTrangNam.png';
import choTreem from '../../assets/imgs/choTreem.png';
import doDungGiaDinh from '../../assets/imgs/doDungGiaDinh.png';
import khac from '../../assets/imgs/khac.png';

const Home = () => {
  const photo = useSelector((state) => state.photos);
  console.log(photo);

  return (
    <>
      <div className={classes.header}>
        <h2 className={classes.header__content}>Danh mục yêu thích</h2>
        <div>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={quanaoNu} alt="" />
            </div>
            <p>Thời trang nữ</p>
          </a>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={quanaoNam} alt="" />
            </div>
            <p>Thời trang nam</p>
          </a>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={thoiTrangNu} alt="" />
            </div>
            <p>Phụ kiện nữ</p>
          </a>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={thoiTrangNam} alt="" />
            </div>
            <p>Phụ kiện  nam</p>
          </a>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={choTreem} alt="" />
            </div>
            <p>Đồ cho bé</p>
          </a>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={doDungGiaDinh} alt="" />
            </div>
            <p>Đồ dùng gia đình</p>
          </a>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={khac} alt="" />
            </div>
            <p>Khác</p>
          </a>
        </div>
      </div>
      <div className={classes.title}>
        <h2 className={classes.title__main}>FLASH sale</h2>
        <a href="#1" className={`${classes.title__more} ${classes.hover}`}>
          Xem tất cả
          <i><FontAwesomeIcon icon={faArrowDown} /></i>
        </a>
      </div>
      <div className={classes.listProducts}>
        <div className={classes.listProducts__product}>
          <CardProduct />
        </div>
        <div className={classes.listProducts__product}>
          <CardProduct />
        </div>
        <div className={classes.listProducts__product}>
          <CardProduct />
        </div>
        <div className={classes.listProducts__product}>
          <CardProduct />
        </div>
        <div className={classes.listProducts__product}>
          <CardProduct />
        </div>
        <div className={classes.listProducts__product}>
          <CardProduct />
        </div>
      </div>
      <div className={classes.title}>
        <h2 className={classes.title__main}>Thời trang nữ</h2>
        <a href="#1" className={`${classes.title__more} ${classes.hover}`}>
          Xem tất cả
          <i><FontAwesomeIcon icon={faArrowDown} /></i>
        </a>
      </div>
      <div className={classes.listProducts}>
        <div className={classes.listProducts__product}>
          <CardProduct />
        </div>
        <div className={classes.listProducts__product}>
          <CardProduct />
        </div>
        <div className={classes.listProducts__product}>
          <CardProduct />
        </div>
        <div className={classes.listProducts__product}>
          <CardProduct />
        </div>
        <div className={classes.listProducts__product}>
          <CardProduct />
        </div>
        <div className={classes.listProducts__product}>
          <CardProduct />
        </div>
      </div>
      <div className={classes.donations}>
        <div className={classes.donations__describe}>
          <div className={classes.donations__describe__header}>
            <div href="#1" className={classes.donations__describe__header__content}>
              <h1 className={classes.donations__describe__header__content__1}>Góc</h1>
              <h1 className={classes.donations__describe__header__content__2}>0</h1>
              <h1 className={classes.donations__describe__header__content__3}>đ</h1>
            </div>
            <a href="#1" className={classes.hover}>
              Xem tất cả
              <i><FontAwesomeIcon icon={faArrowDown} /></i>
            </a>
          </div>
          <div className={classes.donations__describe__listProducts}>
            <div className={classes.donations__describe__listProducts__product}>
              <CardProduct />
            </div>
            <div className={classes.donations__describe__listProducts__product}>
              <CardProduct />
            </div>
            <div className={classes.donations__describe__listProducts__product}>
              <CardProduct />
            </div>
            <div className={classes.donations__describe__listProducts__product}>
              <CardProduct />
            </div>
          </div>
        </div>
        <div className={classes.donations__carproduct}>
          <CardProduct cardproduct2 />
        </div>
      </div>
    </>
  );
};

export default Home;
