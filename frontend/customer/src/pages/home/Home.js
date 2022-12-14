/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CardProduct from '../../components/cardProduct/CardProduct';
import classes from './Home.module.scss';
import quanaoNu from '../../assets/imgs/quanaoNu.png';
import quanaoNam from '../../assets/imgs/quanaoNam.png';
import thoiTrangNu from '../../assets/imgs/thoiTrangNu.png';
import thoiTrangNam from '../../assets/imgs/thoiTrangNam.png';
import choTreem from '../../assets/imgs/choTreem.png';
import doDungGiaDinh from '../../assets/imgs/doDungGiaDinh.png';
import khac from '../../assets/imgs/khac.png';
import Slider from '../../components/Slider/Slider';
import { SliderData } from '../../components/Slider/SliderData';
import SliderFooter from '../../components/SliderFooter/SliderFooter';
import imgHome from '../../assets/imgs/imgHome.jpg';
import Report from '../../components/Report/Report';
import useAxios from '../../hooks/useAxios';
import avatar from '../../assets/imgs/avatars/avatars';
import { addDataCategory, addDataTitle } from '../../store/reducers/dataCategory';

const Home = () => {
  const [flashSale, setFlashSale] = useState('');
  const [responseProduct, errorProduct, isLoadingProduct] = useAxios('get', '/products/san-pham-noi-bat', {}, {}, []);
  const dispatch = useDispatch();

  useEffect(() => {
    if (responseProduct.data !== undefined) {
      setFlashSale(responseProduct.data);
    }
  }, [isLoadingProduct]);

  const [donation, setDonation] = useState('');
  const [response0d, error0d, isLoading0d] = useAxios('get', '/products/goc-0d', {}, {}, []);
  useEffect(() => {
    if (isLoading0d === false && !error0d && response0d.data) {
      setDonation(response0d.data);
    }
  }, [isLoading0d]);

  const [TTN, setTTN] = useState('');
  const [responseTTN, errorTTN, isLoadingTTN] = useAxios('get', '/products?fields=-other_img,-__v&limit=6&category=thoi-trang-nu-ao-nu', {}, {}, []);
  useEffect(() => {
    console.log(responseTTN.data);
    if (isLoadingTTN === false && !errorTTN && responseTTN.data) {
      setTTN(responseTTN.data);
    }
  }, [isLoadingTTN]);

  return (
    <>
    <div className={classes.imghome}>
      <img src={imgHome} alt="" />
    </div>
    <div className={classes.sliderdata}>
      <Slider data={SliderData} />
    </div>
      <div className={classes.header}>
        <h2 className={classes.header__content}>Danh m???c y??u th??ch</h2>
        <div>
          <Link
            to="/products"
            className={classes.header__container}
            onClick={() => {
              dispatch(addDataCategory('thoi-trang-nu-ao-nu'));
              dispatch(addDataTitle('??o n???'));
            }}
          >
            <div className={classes.header__container__sample}>
              <img src={quanaoNu} alt="" />
            </div>
            <p>Th???i trang n???</p>
          </Link>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={quanaoNam} alt="" />
            </div>
            <p>Th???i trang nam</p>
          </a>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={thoiTrangNu} alt="" />
            </div>
            <p>Ph??? ki???n n???</p>
          </a>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={thoiTrangNam} alt="" />
            </div>
            <p>Ph??? ki???n  nam</p>
          </a>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={choTreem} alt="" />
            </div>
            <p>????? cho b??</p>
          </a>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={doDungGiaDinh} alt="" />
            </div>
            <p>????? d??ng gia ????nh</p>
          </a>
          <a href="#1" className={classes.header__container}>
            <div className={classes.header__container__sample}>
              <img src={khac} alt="" />
            </div>
            <p>Kh??c</p>
          </a>
        </div>
      </div>
      <div className={classes.title}>
        <h2 className={classes.title__main}>FLASH sale</h2>
        {/* <a href="#1" className={`${classes.title__more} ${classes.hover}`}>
          Xem t???t c???
          <i><FontAwesomeIcon icon={faArrowDown} /></i>
        </a> */}
      </div>
      <div className={classes.listProducts}>
          {
            flashSale && flashSale.map((el, idx) => (
              <div key={+idx} className={classes.listProducts__product}>
                <CardProduct Details={el} />
              </div>
            ))
          }
      </div>
      <div className={classes.title}>
        <h2 className={classes.title__main}>S???n ph???m n???i b???t</h2>
        <Link
          to="/products"
          className={`${classes.title__more} ${classes.hover}`}
          onClick={() => {
            dispatch(addDataCategory(undefined));
            dispatch(addDataTitle('S???n ph???m n???i b???t'));
          }}
        >
          Xem t???t c???
          <i><FontAwesomeIcon icon={faArrowDown} /></i>
        </Link>
      </div>
      <div className={classes.listProducts}>
        {
          TTN && TTN.slice(0, 6).map((el, idx) => (
          <div key={+idx} className={classes.listProducts__product}>
            <CardProduct Details={el} />
          </div>
          ))
        }
      </div>
      <div className={classes.donations}>
        <div className={classes.donations__describe}>
          <div className={classes.donations__describe__header}>
            <div href="#1" className={classes.donations__describe__header__content}>
              <h1 className={classes.donations__describe__header__content__1}>G??c</h1>
              <h1 className={classes.donations__describe__header__content__2}>0</h1>
              <h1 className={classes.donations__describe__header__content__3}>??</h1>
            </div>
            <a href="#1" className={classes.hover}>
              Xem t???t c???
              <i><FontAwesomeIcon icon={faArrowDown} /></i>
            </a>
          </div>
          <div className={classes.donations__describe__listProducts}>
            {
              donation && donation.slice(0, 4).map((el, idx) => (
                <div key={+idx} className={classes.donations__describe__listProducts__product}>
                  <CardProduct Details={el} />
                </div>
              ))
            }
          </div>
        </div>
        {
          donation.length >= 4
            ? (
                <div className={classes.donations__carproduct}>
                            <CardProduct cardproduct2 Details={donation[4]} />
                </div>
            ) : ''
        }
      </div>
      <div className={classes.sliderfooter}>
        <div className={classes.sliderfooter__header}>
              <h1 className={classes.sliderfooter__header__content}>K???t n???i v??ng cao</h1>
        </div>
        <SliderFooter />
      </div>
      <div className={classes.containerreport}>
        <h1 className={classes.containerreport__header}>Ph???n h???i t??? kh??ch h??ng</h1>
        <div className={classes.containerreport__listreport}>
          <div className={classes.containerreport__listreport__report}>
            <Report cardreport name="Ch??nh Tr???n" img={avatar.avatar7} comment="D???ch v??? t???i ATMC qu?? ch???t l?????ng lu??n. S??? ???ng h??? d??i d??i..." />
          </div>
          <div className={classes.containerreport__listreport__report}>
            <Report name="Tr???n Kh????ng" img={avatar.avatar6} comment="R???t ti???n l???i, t???n d???ng ???????c nh???ng b??? trang ph???c, ?? ngh?? qu??" />
          </div>
          <div className={classes.containerreport__listreport__report}>
            <Report cardreport name="Minh Nguy???n" img={avatar.avatar8} comment="C??c m???u thi???t k??? ??? ????y lu??n ?????c ????o v?? kh??ng ?????ng h??ng v???i ai lu??n!" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
