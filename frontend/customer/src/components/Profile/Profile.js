/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faUser,
  faRightFromBracket,
  faCartPlus,
  faFileInvoiceDollar,
  faGifts,
  faGears,
  faCheckToSlot,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from './styles.module.scss';
import auth from '../../utils/auth';
import { axiosPrivate } from '../../api/axios';
import { clear } from '../../store/reducers/cartSlice';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    axiosPrivate.get('/auth/logout')
      .then(res => {
        dispatch(clear());
        auth.logout();
        navigate('/');
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className={classes.profile}>
        <div className={classes.profile__wrap}>
            <span className={classes.profile__lable}>Tài khoản</span>
            <ul className={classes.profile__list}>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faBell} />
                    <button className={classes['profile__item-link']} href="#1" alt="">
                        Thông báo
                    </button>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faUser} />
                    <button className={classes['profile__item-link']} alt="">
                        Hồ sơ cá nhân
                    </button>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faRightFromBracket} />
                    <button
                      className={classes['profile__item-link']}
                      alt=""
                      onClick={handleLogout}
                    >
                        Đăng xuất
                    </button>
                </li>
            </ul>
        </div>

        <div className={classes.profile__wrap}>
            <span className={classes.profile__lable}>Mua hàng</span>
            <ul className={classes.profile__list}>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faCartPlus} />
                    <button className={classes['profile__item-link']} href="#1" alt="">
                        Giỏ hàng
                    </button>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faFileInvoiceDollar} />
                    <button className={classes['profile__item-link']} href="#1" alt="">
                        Đơn mua
                    </button>
                </li>
            </ul>
        </div>

        <div className={classes.profile__wrap}>
            <span className={classes.profile__lable}>Bạn có quần áo/phụ kiện cũ</span>
            <ul className={classes.profile__list}>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faHandHoldingDollar} />
                    <button className={classes['profile__item-link']} href="#1" alt="">
                        Bán lại
                    </button>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faGifts} />
                    <button className={classes['profile__item-link']} href="#1" alt="">
                        Tặng
                    </button>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faGears} />
                    <button className={classes['profile__item-link']} href="#1" alt="">
                        Custom lại
                    </button>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faCheckToSlot} />
                    <button
                      className={`${classes['profile__item-link']} ${classes['profile__item-link--order']}`}
                      href="#1"
                      alt=""
                    >
                        Đơn đã tạo
                    </button>
                </li>
            </ul>
        </div>
    </div>
  );
};

Profile.propTypes = {
};

Profile.defaultProps = {
};

export default Profile;
