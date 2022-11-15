import React, { useState, useEffect } from 'react';
import { ReactDOM } from 'react-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faHandHoldingHeart,
  faCartShopping,
  faMountainSun,
} from '@fortawesome/free-solid-svg-icons';
<<<<<<< HEAD
=======
import { Link } from 'react-router-dom';
>>>>>>> 9ccacff0d07e1f893ca91b2331b59f09f99ab91d
import Profile from '../Profile/Profile';
import classes from './styles.module.scss';
import logo from '../../assets/imgs/logo.png';
import avatar from '../../assets/imgs/Screenshot 2022-09-28 184909.png';
<<<<<<< HEAD

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [isAccount, setAccount] = useState(false);
=======
import ButtonCT from '../ButtonCT/ButtonCT';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isBlur, setBlur] = useState(!isOpen);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [isAccount, setAccount] = useState(true);
  const [isAvt, setAvt] = useState(false);
>>>>>>> 9ccacff0d07e1f893ca91b2331b59f09f99ab91d

  const handleProfile = () => {
    setOpen((prev) => !prev);
  };

<<<<<<< HEAD
  const handleAccount = () => {
    setAccount((prev) => !prev);
  };

=======
  const handleBlur = () => {
    setBlur(() => {
      if (isOpen) {
        return false;
      }
      return true;
    });
  };

  const handleAccount = () => {};

>>>>>>> 9ccacff0d07e1f893ca91b2331b59f09f99ab91d
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 1) {
        setFixedNavbar(true);
      }

      if (window.scrollY >= 29) {
        setFixedNavbar(true);
      } else setFixedNavbar(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
        <div className={classes.header}>
            <div className={classes.header__mission}>
                <div className={classes['header__mission-wrap']}>
                    <FontAwesomeIcon className={classes['header__mission-icon']} icon={faMountainSun} />
<<<<<<< HEAD
                    <a className={classes['header__mission-link']} href="#1" alt="">
                        Sứ mệnh ATM Clothing
                    </a>
=======
                    <Link className={classes['header__mission-link']} to="/services">
                        Sứ mệnh ATM Clothing
                    </Link>
>>>>>>> 9ccacff0d07e1f893ca91b2331b59f09f99ab91d
                </div>
            </div>

            <div className={`${classes.header__nav} ${fixedNavbar ? classes.sticky : ''}`}>
                <div className={classes.header__left}>
                    <div className={classes.header__logo}>
<<<<<<< HEAD
                        <a href="#top" className={classes['header__logo-link']}>
                            <img src={logo} alt="" className={classes['header__logo-link-img']} />
                        </a>
                    </div>

                    <div className={classes.header__search}>
                        <input type="text" className={classes['header__search-input']} />
                        <span htmlFor="name" className={classes['header__search-lable']}>
=======
                        <Link to="/home" className={classes['header__logo-link']}>
                            <img src={logo} alt="" className={classes['header__logo-link-img']} />
                        </Link>
                    </div>

                    <div className={classes.header__search}>
                        <input type="text" className={classes['header__search-input']} placeholder=" " />
                        <span htmlFor="name" className={classes['header__search-label']}>
>>>>>>> 9ccacff0d07e1f893ca91b2331b59f09f99ab91d
                            Search
                        </span>

                        <div className={classes['header__search-wrap-icon']}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>

                <div className={classes.header__right}>
                    <div className={classes['header__right-account']}>
<<<<<<< HEAD
                        <div className={classes.header__account}>
                            <div className={classes['header__right-account-signup']}>
                                <a onClick={handleAccount} href="#1">Đăng ký</a>
                            </div>

                            <div className={classes['header__right-account-signin']}>
                                <a onClick={handleAccount} href="#1">Đăng nhập</a>
                            </div>
                        </div>
=======
                        {isAccount && (
                            <div className={classes.header__account}>
                                <div className={classes['header__right-account-signup']}>
                                    <Link onClick={handleAccount} to="/register">
                                        Đăng ký
                                    </Link>
                                </div>

                                <div className={classes['header__right-account-signin']}>
                                    <Link onClick={handleAccount} to="/login">
                                        Đăng nhập
                                    </Link>
                                </div>
                            </div>
                        )}
>>>>>>> 9ccacff0d07e1f893ca91b2331b59f09f99ab91d
                    </div>

                    <div className={classes['header__right-button']}>
                        <div className={classes.header__angle}>
<<<<<<< HEAD
                            <div className={classes['header__angle-icon']}>
                                <FontAwesomeIcon icon={faHandHoldingHeart} />
                            </div>
                            <p className={classes['header__angle-content']}>Góc 0đ</p>
                        </div>

                        <div className={classes['header__old-product']}>Tôi có sản phẩm cũ</div>
=======
                            <ButtonCT greenLinear borderRadius medium iconLeft={faHandHoldingHeart}>
                                Góc 0đ
                            </ButtonCT>
                        </div>

                        <div className={classes['header__old-product']}>
                            <ButtonCT medium borderRadius outlineBtn>
                                Tôi có sản phẩm cũ
                            </ButtonCT>
                        </div>
>>>>>>> 9ccacff0d07e1f893ca91b2331b59f09f99ab91d
                    </div>

                    <div className={classes['header__right-wrap-avt-cart']}>
                        <div className={classes.header__cart}>
                            <div className={classes['header__cart-wrap-icon']}>
                                <FontAwesomeIcon className={classes['header__cart-icon']} icon={faCartShopping} />

                                <div className={classes['header__cart-count']}>3</div>
                            </div>
                        </div>

<<<<<<< HEAD
                        <div className={classes.header__avatar}>
                            <button
                              onClick={handleProfile}
                              onBlur={handleProfile}
                              className={classes['header__avatar-button']}
                            >
                                <img className={classes['header__avatar-img']} src={avatar} alt="" />
                            </button>
                            {isOpen && <Profile />}
                        </div>
=======
                        {isAvt && (
                            <div className={classes.header__avatar}>
                                <button
                                  onClick={handleProfile}
                                  onBlur={handleBlur}
                                  className={classes['header__avatar-button']}
                                >
                                    <img className={classes['header__avatar-img']} src={avatar} alt="" />
                                </button>
                                {isOpen && <Profile />}
                            </div>
                        )}
>>>>>>> 9ccacff0d07e1f893ca91b2331b59f09f99ab91d
                    </div>
                </div>
            </div>

<<<<<<< HEAD
            <div
              className={`${classes['header__links-bar']} ${fixedNavbar ? classes['is-margin'] : ''}`}
                //   style={{ opacity: `${1.0 - window.scrollY / 29}` }}
            >
                <ul className={classes['header__links-bar-list']}>
                    <li className={classes['header__links-bar-item']}>
                        <a className={classes['header__links-bar-item-link']} href="#top">
                            Thời trang nam
                        </a>
                    </li>
                    <li className={classes['header__links-bar-item']}>
                        <a className={classes['header__links-bar-item-link']} href="#top">
                            Thời trang nữ
                        </a>
                    </li>
                    <li className={classes['header__links-bar-item']}>
                        <a className={classes['header__links-bar-item-link']} href="#top">
                            Phụ kiện nam
                        </a>
                    </li>
                    <li className={classes['header__links-bar-item']}>
                        <a className={classes['header__links-bar-item-link']} href="#top">
                            Phụ kiện nữ
                        </a>
                    </li>
                    <li className={classes['header__links-bar-item']}>
                        <a className={classes['header__links-bar-item-link']} href="#top">
                            Đồ cho bé
                        </a>
                    </li>
                    <li className={classes['header__links-bar-item']}>
                        <a className={classes['header__links-bar-item-link']} href="#top">
                            Đồ dùng gia đình
                        </a>
=======
            <div className={`${classes['header__links-bar']} ${fixedNavbar ? classes['is-margin'] : ''}`}>
                <ul className={classes['header__links-bar-list']}>
                    <li className={classes['header__links-bar-item']}>
                        <Link className={classes['header__links-bar-item-link']} to="#top">
                            Thời trang nam
                        </Link>
                    </li>
                    <li className={classes['header__links-bar-item']}>
                        <Link className={classes['header__links-bar-item-link']} to="#top">
                            Thời trang nữ
                        </Link>
                    </li>
                    <li className={classes['header__links-bar-item']}>
                        <Link className={classes['header__links-bar-item-link']} to="#top">
                            Phụ kiện nam
                        </Link>
                    </li>
                    <li className={classes['header__links-bar-item']}>
                        <Link className={classes['header__links-bar-item-link']} to="#top">
                            Phụ kiện nữ
                        </Link>
                    </li>
                    <li className={classes['header__links-bar-item']}>
                        <Link className={classes['header__links-bar-item-link']} to="#top">
                            Đồ cho bé
                        </Link>
                    </li>
                    <li className={classes['header__links-bar-item']}>
                        <Link className={classes['header__links-bar-item-link']} to="#top">
                            Đồ dùng gia đình
                        </Link>
>>>>>>> 9ccacff0d07e1f893ca91b2331b59f09f99ab91d
                    </li>
                </ul>
            </div>
        </div>
  );
};

Header.propTypes = {};

export default Header;
