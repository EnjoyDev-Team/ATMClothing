import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Layout = () => (
  <>
    <Header />
      <div style={{ backgroundColor: '#f3f3f3' }}>
        <Outlet />
      </div>
    <Footer />
  </>
);

Layout.propTypes = {

};

export default Layout;
