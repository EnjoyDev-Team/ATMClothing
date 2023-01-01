/* eslint-disable indent */
/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import Login from '../pages/auth';
import Home from '../pages/home';
import NotFound from '../pages/notFound';
import Products from '../pages/Products/Products';
import EditProduct from '../pages/EditProduct/EditProduct';
import AddProduct from '../pages/AddProduct/AddProduct';
import OrdersManage from '../pages/ordersManage/ordersManage';
import DashboardAdmin from '../pages/DashboardAdmin/DashboardAdmin';
import User from './../pages/users/User';
import EditUser from './../pages/users/EditUser';
import AddUser from './../pages/users/AddUser';

const Navigation = () => {
    const authenticated = true;
    return (
        <main>
            <Routes>
                <Route path="/dashBoardAdmin" element={<DashboardAdmin />} />
                <Route path="/login" name="login" element={<Login />} />
                <Route element={<PrivateRoute isAllowed={authenticated} redirectPath="/login" />}>
                    <Route path="/home" name="home" element={<Home />} />
                    <Route path="/admin-orders" name="admin-orders" element={<OrdersManage />} />
                </Route>
                <Route path="/users">
                    <Route index element={<User />} />
                    <Route path="edit_users" name="edit_user" element={<EditUser />} />
                    <Route path="add_users" name="add_user" element={<AddUser />} />
                </Route>
                <Route path="/products">
                    <Route index element={<Products />} />
                    <Route path="add_product" name="add_product" element={<AddProduct />} />
                    <Route path="edit" name="edit_product" element={<EditProduct />} />
                </Route>
                {/* <Route path="/products" name="products" element={<Products />} /> */}
                <Route path="*" name="notFound" element={<NotFound />} />
            </Routes>
        </main>
    );
};

export default Navigation;
