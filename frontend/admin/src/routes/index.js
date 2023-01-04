/* eslint-disable indent */
/* eslint-disable import/no-useless-path-segments */
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './privateRoute';

import NotFound from '../pages/notFound';
import Products from '../pages/Products/Products';
import EditProduct from '../pages/EditProduct/EditProduct';
import AddProduct from '../pages/AddProduct/AddProduct';
import OrdersManage from '../pages/ordersManage/ordersManage';
import DashboardAdmin from '../pages/DashboardAdmin/DashboardAdmin';
import User from './../pages/users/User';
import EditUser from './../pages/users/EditUser';
import AddUser from './../pages/users/AddUser';
import Layout from '../layouts';

const Navigation = () => {
    const authenticated = true;
    return (
        <main>
            <Routes>
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
