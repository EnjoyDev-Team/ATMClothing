import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import Home from '../pages/home';
import NotFound from '../pages/notFound';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Profile from '../pages/auth/Profile';
import Products from '../components/ListProduct/ListProduct';
import Layout from '../layouts';
import ProductDetail from '../components/ProductDetail/ProductDetail';
import Services from '../pages/Service/Service';
import Sell from '../pages/Service/Sell';
import Custom from '../pages/Service/Custom';
import Donate from '../pages/Service/Donate';

const Navigation = () => {
  const authenticated = true;
  return (
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />

          {/* AUTH ROUTE */}
          <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/home" />}>
              <Route path="/login" name="login" element={<Login />} />
              <Route path="/register" name="register" element={<Register />} />
          </Route>
          <Route path="/forgot" name="forgot" element={<ForgotPassword />} />

          <Route element={<Layout />}>
              <Route path="/home" element={<Home />} />

            {/* Sale/Custom/Donate */}
            <Route path="/services">
                <Route index element={<Services />} />
                <Route path="sale" name="sale" element={<Sell />} />
                <Route path="custom" name="custom" element={<Custom />} />
                <Route path="donate" name="donate" element={<Donate />} />
            </Route>

              {/* PROTECTED ROUTE */}
              <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/login" />}>
                  {/* USER ROUTE */}
                  <Route path="/profile" name="profile" element={<Profile />} />
              </Route>

              {/* PRODUCT ROUTE */}
              <Route path="/products">
                  <Route index element={<Products />} />
                  <Route path=":id" element={<ProductDetail />} />
                  <Route path="list/:page" element={<>Products Page X</>} />
                  <Route path="list/:category/:page" element={<>Products Page with category & page X</>} />
              </Route>

              {/* ShoppingCart + Payment ROUTE */}
              <Route path="/shopping">
                  <Route index element={<>Shopping Cart Page</>} />
                  <Route path="payment" element={<>Payment Page</>} />
              </Route>

              <Route path="*" name="notFound" element={<NotFound />} />
          </Route>
        </Routes>
  );
};

export default Navigation;
