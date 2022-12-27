/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useState } from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import classes from './styles.module.scss';
import Category from '../pages/Products/Category/Category';
import Filter from '../pages/Products/Filter/Filter';
import Product from '../pages/Products/Product/Product';

const ProductLayout = () => (
    <div className={classes.products}>
      <Category />
        <Outlet />
      <Filter />
    </div>
);

ProductLayout.propTypes = {};

export default ProductLayout;
