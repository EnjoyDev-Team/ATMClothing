import React from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import classes from './NavigationAdmin.module.scss';
import logo from '../../assets/imgs/navigation/logo.png';
import dashboard from '../../assets/imgs/navigation/dashboard.png';
import products from '../../assets/imgs/navigation/products.png';
import users from '../../assets/imgs/navigation/users.png';
import ordersControl from '../../assets/imgs/navigation/ordersControl.png';
import dashboardColor from '../../assets/imgs/navigation/dashboardColor.png';
import productsColor from '../../assets/imgs/navigation/productsColor.png';
import usersColor from '../../assets/imgs/navigation/usersColor.png';
import ordersControlColor from '../../assets/imgs/navigation/ordersControlColor.png';

const NavigationAdmin = () => {
  const location = useLocation();
  const path = location.pathname;
  console.log(location.pathname);

  return (
        <div>
            <div className={classes.navigation}>
                <div className={classes.navigation__logo}>
                    <Link to="/dashboard">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className={classes.navigation__container}>
                    <div className={classes.navigation__container__listcontent}>
                        <div className={classes.components}>
                                <Link className={classes.components__component} to="/dashboard">
                                    <img src={path.includes('/dashboard', 0) === true ? dashboardColor : dashboard} alt="" />
                                    <div className={classes.components__component__title}>
                                        <img src={dashboard} alt="" />
                                        <p>Dashboard</p>
                                    </div>
                                </Link>
                        </div>
                        <div className={classes.components}>
                                <Link className={classes.components__component} to="/admin-orders">
                                <img src={path.includes('/admin-orders', 0) === true ? ordersControlColor : ordersControl} alt="" />
                                    <div className={classes.components__component__title}>
                                        <img src={ordersControl} alt="" />
                                        <p>Orders Control</p>
                                    </div>
                                </Link>
                        </div>
                        <div className={classes.components}>
                                <Link className={classes.components__component} to="/admin-products">
                                    <img src={path.includes('/admin-products', 0) === true ? productsColor : products} alt="" />
                                    <div className={classes.components__component__title}>
                                        <img src={products} alt="" />
                                        <p>Products</p>
                                    </div>
                                </Link>
                        </div>
                        <div className={classes.components}>
                                <Link className={classes.components__component} to="/admin-users">
                                    <img src={path.includes('/admin-users', 0) === true ? usersColor : users} alt="" />
                                    <div className={classes.components__component__title}>
                                        <img src={users} alt="" />
                                        <p>Users</p>
                                    </div>
                                </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

NavigationAdmin.propTypes = {

};

export default NavigationAdmin;
