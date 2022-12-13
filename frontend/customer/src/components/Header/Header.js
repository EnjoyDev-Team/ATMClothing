/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faHandHoldingHeart,
  faCartShopping,
  faMountainSun,
} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from '../Profile/Profile';
import classes from './styles.module.scss';
import logo from '../../assets/imgs/PNG-logo.png';
import ButtonCT from '../ButtonCT/ButtonCT';
import auth from '../../utils/auth';

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [fixedNavbar, setFixedNavbar] = useState(false);
  const [isSearch, setSearch] = useState('');
  const navigate = useNavigate();
  const cart = useSelector(state => state.cart);

  const handleProfile = () => {
    setOpen((prev) => !prev);
  };

  const handleBlur = (e) => {
    if (e.nativeEvent.explicitOriginalTarget
        && e.nativeEvent.explicitOriginalTarget === e.nativeEvent.originalTarget) {
      return;
    }
    setOpen(false);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = () => {
    if (isSearch !== '') {
      navigate(`/products/search/${isSearch}`);
    }
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
                    <Link className={classes['header__mission-link']} to="/services">
                        Sứ mệnh ATM Clothing
                    </Link>
                </div>
            </div>

            <div className={`${classes.header__nav} ${fixedNavbar ? classes.sticky : ''}`}>
                <div className={classes.header__left}>
                    <div className={classes.header__logo}>
                        <Link to="/home" className={classes['header__logo-link']}>
                            <img src={logo} alt="" className={classes['header__logo-link-img']} />
                        </Link>
                    </div>

                    <div className={classes.header__search}>
                        <input
                          onChange={(e) => handleSearch(e)}
                          type="text"
                          className={classes['header__search-input']}
                          placeholder=" "
                        />
                        <span htmlFor="name" className={classes['header__search-label']}>
                            Search
                        </span>

                        <button onClick={handleSubmit} className={classes['header__search-wrap-icon']}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>

                <div className={classes.header__right}>
                    <div className={classes['header__right-account']}>
                        {!!auth.getAccessToken() === false && (
                            <div className={classes.header__account}>
                                <div className={classes['header__right-account-signup']}>
                                    <Link
                                      className={classes['header__right-account-signup-link']}
                                      to="/register"
                                    >
                                        Đăng ký
                                    </Link>
                                </div>

                                <div className={classes['header__right-account-signin']}>
                                    <Link
                                      className={classes['header__right-account-signin-link']}
                                      to="/login"
                                    >
                                        Đăng nhập
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className={classes['header__right-button']}>
                        <div className={classes.header__angle}>
                            <ButtonCT greenLinear borderRadius medium iconLeft={faHandHoldingHeart}>
                                Góc 0đ
                            </ButtonCT>
                        </div>

                        <div className={classes['header__old-product']}>
                            <ButtonCT
                              medium
                              borderRadius
                              outlineBtn
                              onClick={() => navigate('/')}
                            >
                                Tôi có sản phẩm cũ
                            </ButtonCT>
                        </div>
                    </div>

                    <div
                      className={classes['header__right-wrap-avt-cart']}
                    >
                        <div
                          className={classes.header__cart}
                          onClick={() => navigate('/shopping')}
                        >
                            <div className={classes['header__cart-wrap-icon']}>
                                <FontAwesomeIcon className={classes['header__cart-icon']} icon={faCartShopping} />

                                <div className={classes['header__cart-count']}>{cart.cart.length}</div>
                            </div>
                        </div>

                        {!!auth.getAccessToken() && (
                            <div className={classes.header__avatar}>
                                <button
                                  onClick={handleProfile}
                                  onBlur={handleBlur}
                                  className={classes['header__avatar-button']}
                                >
                                    <img className={classes['header__avatar-img']} src={auth.getAvatar()} alt="" />
                                    {isOpen && (
                                        <Profile />
                                    )}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

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
                    </li>
                </ul>
            </div>
        </div>
  );
};

Header.propTypes = {};

export default Header;
