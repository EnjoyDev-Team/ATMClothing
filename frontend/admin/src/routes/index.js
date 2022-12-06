import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import Login from '../pages/auth';
import Home from '../pages/home';
import NotFound from '../pages/notFound';
import DashboardAdmin from '../pages/DashboardAdmin/DashboardAdmin';

const Navigation = () => {
  const authenticated = true;
  return (
    <main>
      <Routes>
        {/* Router Admin  */}
        <Route path="/admin" index element={<DashboardAdmin />} />
        <Route path="/login" name="login" element={<Login />} />
        <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/login" />}>
          <Route
            path="/home"
            name="home"
            element={<Home />}
          />
        </Route>
        <Route path="*" name="notFound" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default Navigation;
