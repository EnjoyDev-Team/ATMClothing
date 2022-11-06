import React, { useState } from 'react';
import classes from './styles.module.scss';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import ListProduct from '../../components/ListProduct/ListProduct';

const Login = () => (
    <div>
        <Header />
        <ListProduct />
        <Footer />
    </div>
);

Login.propTypes = {};

export default Login;
