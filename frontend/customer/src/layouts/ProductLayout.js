import { React, useState } from 'react';
import { Outlet } from 'react-router-dom';
import classes from './styles.module.scss';
import Category from '../pages/Products/Category/Category';
import Filter from '../pages/Products/Filter/Filter';

const ProductLayout = () => {
  const [fixedCategory, setFixedCategory] = useState(false);

  return (
    <div className={classes.products}>
      <Category fixedCategory={fixedCategory} setFixedCategory={setFixedCategory} />
        <Outlet context={[fixedCategory]} />
      <Filter />
    </div>
  );
};

ProductLayout.propTypes = {};

export default ProductLayout;
