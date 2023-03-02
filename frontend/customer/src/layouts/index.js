import React from 'react';
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

export default Layout;
