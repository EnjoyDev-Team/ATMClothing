/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import CardProduct from '../../components/CardProduct/CardProduct';
import classes from './Home.module.scss';
import quanaoNu from '../../assets/imgs/home/quanaoNu.png';
import quanaoNam from '../../assets/imgs/home/quanaoNam.png';
import thoiTrangNu from '../../assets/imgs/home/thoiTrangNu.png';
import thoiTrangNam from '../../assets/imgs/home/thoiTrangNam.png';
import choTreem from '../../assets/imgs/home/choTreem.png';
import doDungGiaDinh from '../../assets/imgs/home/doDungGiaDinh.png';
import khac from '../../assets/imgs/home/khac.png';
import Slider from '../../components/Slider/SliderDynamic/Slider';
import { SliderData } from '../../components/Slider/SliderDynamic/SliderData';
import SliderFooter from '../../components/Slider/SliderStatic/SliderFooter';
import imgHome from '../../assets/imgs/home/imgHome.jpg';
import Report from './Report/Report';
import useAxios from '../../hooks/useAxios';
import avatar from '../../assets/imgs/avatars/avatars';
import { addDataCategory, addDataTitle } from '../../store/reducers/dataCategory';

const Home = () => {
  const [flashSale, setFlashSale] = useState('');
  const [numProduct, setNumProduct] = useState(5);
  const [responseProduct, errorProduct, isLoadingProduct] = useAxios('get', '/products/san-pham-noi-bat', {}, {}, []);
  const dispatch = useDispatch();

  const [donation, setDonation] = useState('');
  const [response0d, error0d, isLoading0d] = useAxios('get', '/products/goc-0d', {}, {}, []);
  useEffect(() => {
    if (isLoading0d === false && !error0d && response0d.data) {
      setDonation(response0d.data);
    }
  }, [isLoading0d]);

  const [TTN, setTTN] = useState('');
  const [responseTTN, errorTTN, isLoadingTTN] = useAxios(
    'get',
    '/products?fields=-other_img,-__v&limit=5&category=thoi-trang-nu-ao-nu',
    {},
    {},
    []
  );

  const handleResize = (w) => {
    // console.log(w);
    if (w >= 1440) {
      setNumProduct(6);
    } else if (w >= 1250) {
      setNumProduct(5);
    } else if (w >= 1020) {
      setNumProduct(4);
    } else if (w >= 780) {
      setNumProduct(3);
    } else if (w >= 570) {
      setNumProduct(2);
    } else {
      setNumProduct(1);
    }
  };

  useEffect(() => {
    // console.log(responseTTN.data);
    if (isLoadingTTN === false && !errorTTN && responseTTN.data) {
      setTTN(responseTTN.data);
      handleResize(window.innerWidth);
    }
  }, [isLoadingTTN]);

  useEffect(() => {
    if (responseProduct.data !== undefined && !errorProduct) {
      setFlashSale(responseProduct.data);
    }
  }, [isLoadingProduct]);

  useEffect(() => {
    window.addEventListener('resize', (e) => handleResize(e.target.innerWidth));

    // cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
    <div className={classes.imghome}>
      <img src={imgHome} alt="" />
    </div>
    <div className={classes.sliderdata}>
      <Slider data={SliderData} />
    </div>
      <div className={classes.header}>
        <h2 className={classes.header__content}>Danh mục yêu thích</h2>
        <div>
          <Link
            to="/products"
            className={classes.header__container}
            onClick={() => {
              dispatch(addDataCategory('thoi-trang-nu-ao-nu'));
              dispatch(addDataTitle('Áo nữ'));
            }}
          >
            <div className={classes.header__container__sample}>
              <img src={quanaoNu} alt="" />
            </div>
            <p>Thời trang nữ</p>
          </Link>
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
        {/* <a href="#1" className={`${classes.title__more} ${classes.hover}`}>
          Xem tất cả
          <i><FontAwesomeIcon icon={faArrowDown} /></i>
        </a> */}

      <div className={classes.listProducts}>
          {
            flashSale && flashSale.slice(0, numProduct).map((el, idx) => (
              <div key={+idx} className={classes.listProducts__product}>
                <CardProduct Details={el} />
              </div>
            ))
          }
      </div>
      </div>
      <div className={classes.title}>
        <h2 className={classes.title__main}>Sản phẩm nổi bật</h2>
        <Link
          to="/products"
          className={`${classes.title__more} ${classes.hover}`}
          onClick={() => {
            dispatch(addDataCategory(undefined));
            dispatch(addDataTitle('Sản phẩm nổi bật'));
          }}
        >
          Xem tất cả
          <i><FontAwesomeIcon icon={faArrowDown} /></i>
        </Link>
        <div className={classes.listProducts}>
          {
            TTN && TTN.slice(0, numProduct).map((el, idx) => (
            <div key={+idx} className={classes.listProducts__product}>
              <CardProduct Details={el} />
            </div>
            ))
          }
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
            {
              donation && donation.slice(0, numProduct % 3 + 1).map((el, idx) => (
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
              <h1 className={classes.sliderfooter__header__content}>Kết nối vùng cao</h1>
        </div>
        <SliderFooter />
      </div>
      <div className={classes.containerreport}>
        <h1 className={classes.containerreport__header}>Phản hồi từ khách hàng</h1>
        <div className={classes.containerreport__listreport}>
          <div className={classes.containerreport__listreport__report}>
            <Report
              cardreport
              name="Chính Trần"
              img={avatar.avatar7}
              comment="Dịch vụ tại ATMC quá chất lượng luôn. Sẽ ủng hộ dài dài..."
            />
          </div>
          <div className={classes.containerreport__listreport__report}>
            <Report
              name="Trần Khương"
              img={avatar.avatar6}
              comment="Rất tiện lợi, tận dụng được những bộ trang phục, ý nghĩ quá"
            />
          </div>
          <div className={classes.containerreport__listreport__report}>
            <Report
              cardreport
              name="Minh Nguyễn"
              img={avatar.avatar8}
              comment="Các mẫu thiết kế ở đây luôn độc đáo và không đụng hàng với ai luôn!"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
