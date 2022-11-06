import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import Home from '../pages/home';
import NotFound from '../pages/notFound';
import Login from '../pages/auth/Login';
import Register from '../pages/auth/Register';
import ForgotPassword from '../pages/auth/ForgotPassword';
import Profile from '../pages/auth/Profile';

const Navigation = () => {
  const authenticated = true;

  return (
    <main>
      <Routes>
        {/* Auth */}
        <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/home" />}>
          <Route path="/login" name="login" element={<Login />} />
          <Route path="/register" name="register" element={<Register />} />
        </Route>
        <Route path="/forgot" name="forgot" element={<ForgotPassword />} />

        {/* Sale/Custom/Donate */}
        <Route path="/sale" name="sale" element={<NotFound />} />
        <Route path="/custom" name="custom" element={<NotFound />} />
        <Route path="/donate" name="donate" element={<NotFound />} />

        {/* Protected Routes */}
        <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/login" />}>
          <Route path="/profile" name="profile" element={<Profile />} />
        </Route>

        <Route path="*" name="notFound" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Navigation;
