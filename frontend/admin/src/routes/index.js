import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import NotFound from '../pages/notFound';
import Products from '../pages/Products/Products';
import EditProduct from '../pages/Products/EditProduct';
import AddProduct from '../pages/Products/AddProduct';
import OrdersManage from '../pages/OrdersManage/ordersManage';
import DashboardAdmin from '../pages/DashboardAdmin/DashboardAdmin';
import User from '../pages/Users/User';
import EditUser from '../pages/Users/EditUser';
import AddUser from '../pages/Users/AddUser';
import Layout from '../layouts';

const Navigation = () => {
  const authenticated = true;
  return (
        <main>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard" />} />
                <Route element={<Layout />}>
                    <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/login" />}>
                        <Route path="/dashboard" element={<DashboardAdmin />} />
                        <Route path="/admin-orders" name="admin-orders" element={<OrdersManage />} />
                        <Route path="/admin-users">
                            <Route index element={<User />} />
                            <Route path="add" name="add_user" element={<AddUser />} />
                            <Route path=":id" name="edit_user" element={<EditUser />} />
                        </Route>
                        <Route path="/admin-products">
                            <Route index element={<Products />} />
                            <Route path="add" name="add_product" element={<AddProduct />} />
                            <Route path=":id" name="edit_product" element={<EditProduct />} />
                        </Route>
                        <Route path="*" name="notFound" element={<NotFound />} />
                    </Route>
                </Route>
            </Routes>
        </main>
  );
};

export default Navigation;
