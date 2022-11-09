import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
<<<<<<< HEAD
<<<<<<< HEAD
import PrivateRoute from './privateRoute';
=======
import PrivateRoute from './PrivateRoute';
>>>>>>> d240247 (create routes for page (app, products, shoppingcart, payment))
=======
import PrivateRoute from './privateRoute';
>>>>>>> a98748c (feat: routes)

import Home from '../pages/home';
import NotFound from '../pages/notFound';
<<<<<<< HEAD
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Profile from '../pages/auth/Profile';

const Navigation = () => {
  const authenticated = true;
  return (
    <Routes>
        <Route path="/" element={<Navigate to="/home" />} />

        <Route path="/home" element={<Home />} />

        {/* AUTH ROUTE */}
        <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/home" />}>
            <Route path="/login" name="login" element={<Login />} />
            <Route path="/register" name="register" element={<Register />} />
        </Route>
        <Route path="/forgot" name="forgot" element={<ForgotPassword />} />

        {/* Sale/Custom/Donate */}
        <Route path="/services">
            <Route path="sale" name="sale" element={<NotFound />} />
            <Route path="custom" name="custom" element={<NotFound />} />
            <Route path="donate" name="donate" element={<NotFound />} />
        </Route>

        {/* PROTECTED ROUTE */}
        <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/login" />}>
          {/* USER ROUTE */}
            <Route path="/profile" name="profile" element={<Profile />} />
        </Route>

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
};
=======
import Test from './Test';

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
>>>>>>> d240247 (create routes for page (app, products, shoppingcart, payment))

export default Navigation;
