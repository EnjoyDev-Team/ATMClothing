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
import Profile from '../Profile/Profile';
import classes from './styles.module.scss';
import logo from '../../assets/imgs/logo.png';
import avatar from '../../assets/imgs/Screenshot 2022-09-28 184909.png';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [isAccount, setAccount] = useState(false);

  const handleProfile = () => {
    setOpen((prev) => !prev);
  };

  const handleAccount = () => {
    setAccount((prev) => !prev);
  };

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
                    <a className={classes['header__mission-link']} href="#1" alt="">
                        Sứ mệnh ATM Clothing
                    </a>
                </div>
            </div>

            <div className={`${classes.header__nav} ${fixedNavbar ? classes.sticky : ''}`}>
                <div className={classes.header__left}>
                    <div className={classes.header__logo}>
                        <a href="#top" className={classes['header__logo-link']}>
                            <img src={logo} alt="" className={classes['header__logo-link-img']} />
                        </a>
                    </div>

                    <div className={classes.header__search}>
                        <input type="text" className={classes['header__search-input']} />
                        <span htmlFor="name" className={classes['header__search-lable']}>
                            Search
                        </span>

                        <div className={classes['header__search-wrap-icon']}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </div>
                    </div>
                </div>

                <div className={classes.header__right}>
                    <div className={classes['header__right-account']}>
                        <div className={classes.header__account}>
                            <div className={classes['header__right-account-signup']}>
                                <a onClick={handleAccount} href="#1">Đăng ký</a>
                            </div>

                            <div className={classes['header__right-account-signin']}>
                                <a onClick={handleAccount} href="#1">Đăng nhập</a>
                            </div>
                        </div>
                    </div>

                    <div className={classes['header__right-button']}>
                        <div className={classes.header__angle}>
                            <div className={classes['header__angle-icon']}>
                                <FontAwesomeIcon icon={faHandHoldingHeart} />
                            </div>
                            <p className={classes['header__angle-content']}>Góc 0đ</p>
                        </div>

                        <div className={classes['header__old-product']}>Tôi có sản phẩm cũ</div>
                    </div>

                    <div className={classes['header__right-wrap-avt-cart']}>
                        <div className={classes.header__cart}>
                            <div className={classes['header__cart-wrap-icon']}>
                                <FontAwesomeIcon className={classes['header__cart-icon']} icon={faCartShopping} />

                                <div className={classes['header__cart-count']}>3</div>
                            </div>
                        </div>

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
                    </div>
                </div>
            </div>

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
                    </li>
                </ul>
            </div>
        </div>
  );
};

Header.propTypes = {};

export default Header;
