import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';
import NavigationAdmin from '../components/NavigationAdmin/NavigationAdmin';

const Layout = () => (
  <div>
    <HeaderAdmin />
    <NavigationAdmin />
    <div style={{ padding: '60px 0 0 80px' }}>
      <Outlet />
    </div>
  </div>
);

Layout.propTypes = {

};

export default Layout;
