import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

import Login from '../pages/auth';
import Home from '../pages/home';
import NotFound from '../pages/notFound';

const Navigation = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/home" />} />

    <Route path="/home" element={<Home />} />

    {/* AUTH ROUTE */}
    {/* USER ROUTE */}

    {/* PRODUCT ROUTE */}
    <Route path="/products">
      <Route index element={<>Products Page</>} />
      <Route path=":id" element={<>Sub-Products Page</>} />
      <Route path="list/:page" element={<>Products Page X</>} />
      <Route path="list/:category/:page" element={<>Products Page with category & page X</>} />
    </Route>

    {/* ShoppingCart + Payment ROUTE */}
    <Route path="/shopping">
      <Route index element={<>Shopping Cart Page</>} />
      <Route path="payment" element={<>Payment Page</>} />
    </Route>

    <Route path="*" name="notFound" element={<NotFound />} />
  </Routes>
);

export default Navigation;
