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
import classes from './styles.module.scss';

const Profile = () => (
    <div className={classes.profile}>
        <div className={classes.profile__wrap}>
            <span className={classes.profile__lable}>Tài khoản</span>
            <ul className={classes.profile__list}>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faBell} />
                    <a className={classes['profile__item-link']} href="#1" alt="">
                        Thông báo
                    </a>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faUser} />
                    <a className={classes['profile__item-link']} href="#1" alt="">
                        Hồ sơ cá nhân
                    </a>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faRightFromBracket} />
                    <a className={classes['profile__item-link']} href="#1" alt="">
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
                    <a className={classes['profile__item-link']} href="#1" alt="">
                        Giỏ hàng
                    </a>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faFileInvoiceDollar} />
                    <a className={classes['profile__item-link']} href="#1" alt="">
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
                    <a className={classes['profile__item-link']} href="#1" alt="">
                        Bán lại
                    </a>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faGifts} />
                    <a className={classes['profile__item-link']} href="#1" alt="">
                        Tặng
                    </a>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faGears} />
                    <a className={classes['profile__item-link']} href="#1" alt="">
                        Custom lại
                    </a>
                </li>
                <li className={classes.profile__item}>
                    <FontAwesomeIcon className={classes['profile__item-icon']} icon={faCheckToSlot} />
                    <a className={classes['profile__item-link']} href="#1" alt="">
                        Đơn đã tạo
                    </a>
                </li>
            </ul>
        </div>
    </div>
);

Profile.propTypes = {};

export default Profile;
// export default HandleProfile;
