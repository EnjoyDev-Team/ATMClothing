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
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import classes from './styles.module.scss';
import auth from '../../utils/auth';
import { axiosPrivate } from '../../api/axios';
import { clear } from '../../store/reducers/cartSlice';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = (e) => {
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
                    <a className={classes['profile__item-link']} alt="">
                        Thông báo
                    </a>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faUser} />
                    <a onClick={() => navigate('/profile')} className={classes['profile__item-link']} alt="">
                        Hồ sơ cá nhân
                    </a>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faRightFromBracket} />
                    <a
                      className={classes['profile__item-link']}
                      alt=""
                      onClick={handleLogout}
                    >
                        Đăng xuất
                    </a>
                </li>
            </ul>
        </div>

        <div className={classes.profile__wrap}>
            <span className={classes.profile__lable}>Mua hàng</span>
            <ul className={classes.profile__list}>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faCartPlus} />
                    <a onClick={() => navigate('/shopping')} className={classes['profile__item-link']} alt="">
                        Giỏ hàng
                    </a>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faFileInvoiceDollar} />
                    <a onClick={() => navigate('/shopping/orders')} className={classes['profile__item-link']} alt="">
                        Đơn mua
                    </a>
                </li>
            </ul>
        </div>

        <div className={classes.profile__wrap}>
            <span className={classes.profile__lable}>Bạn có quần áo/phụ kiện cũ</span>
            <ul className={classes.profile__list}>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faHandHoldingDollar} />
                    <a onClick={() => navigate('/services/sale')} className={classes['profile__item-link']} alt="">
                        Bán lại
                    </a>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faGifts} />
                    <a onClick={() => navigate('/services/donate')} className={classes['profile__item-link']} alt="">
                        Tặng
                    </a>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faGears} />
                    <a onClick={() => navigate('/services/custom')} className={classes['profile__item-link']} alt="">
                        Custom lại
                    </a>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faCheckToSlot} />
                    <a
                      onClick={() => navigate('/services/orders')}
                      className={`${classes['profile__item-link']} ${classes['profile__item-link--order']}`}
                    >
                        Đơn đã tạo
                    </a>
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
