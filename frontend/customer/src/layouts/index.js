import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = () => (
  <div style={{ backgroundColor: '#f3f3f3' }}>
    <Header />
        <Outlet />
    <Footer />
  </div>
);

Layout.propTypes = {

};

export default Layout;
