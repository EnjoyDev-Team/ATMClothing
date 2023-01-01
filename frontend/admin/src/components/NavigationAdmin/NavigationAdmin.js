import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './NavigationAdmin.module.scss';
import logo from '../../assets/imgs/navigation/logo.png';
import dashboard from '../../assets/imgs/navigation/dashboard.png';
import products from '../../assets/imgs/navigation/products.png';
import users from '../../assets/imgs/navigation/users.png';
import ordersControl from '../../assets/imgs/navigation/ordersControl.png';

const NavigationAdmin = () => (
        <div>
            <div className={classes.navigation}>
                <div className={classes.navigation__logo}>
                    <a href="#1">
                        <img src={logo} alt="" />
                    </a>
                </div>
                <div className={classes.navigation__container}>
                    <div className={classes.navigation__container__listcontent}>
                        <div className={classes.components}>
                                <Link className={classes.components__component} to="/dashBoardAdmin">
                                    <img src={dashboard} alt="" />
                                    <div className={classes.components__component__title}>
                                        <img src={dashboard} alt="" />
                                        <p>Dashboard</p>
                                    </div>
                                </Link>
                        </div>
                        <div className={classes.components}>
                                <Link className={classes.components__component} to="/products">
                                    <img src={products} alt="" />
                                    <div className={classes.components__component__title}>
                                        <img src={products} alt="" />
                                        <p>Products</p>
                                    </div>
                                </Link>
                        </div>
                        <div className={classes.components}>
                                <Link className={classes.components__component} to="#1">
                                    <img src={users} alt="" />
                                    <div className={classes.components__component__title}>
                                        <img src={users} alt="" />
                                        <p>Users</p>
                                    </div>
                                </Link>
                        </div>
                        <div className={classes.components}>
                                <Link className={classes.components__component} to="/admin-orders">
                                    <img src={ordersControl} alt="" />
                                    <div className={classes.components__component__title}>
                                        <img src={ordersControl} alt="" />
                                        <p>Orders Control</p>
                                    </div>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

NavigationAdmin.propTypes = {

};

export default NavigationAdmin;
