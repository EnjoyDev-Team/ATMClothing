import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';
import test from '../../assets/imgs/test.jpg';

const products = [
  {
    id: 1,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    id: 2,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Out of stock',
  },
  {
    id: 3,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    id: 4,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    id: 5,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Out of stock',
  },
  {
    id: 6,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    id: 7,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Out of stock',
  },
  {
    id: 8,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Out of stock',
  },
  {
    id: 9,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    id: 10,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Out of stock',
  },
  {
    id: 11,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    id: 12,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    id: 13,
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
];

const Products = (props) => {
  const [removeProduct, setRemoveProduct] = useState(products[0].id);

  const HandleRemoveProduct = (id) => {
    setRemoveProduct(prev => {
      if (prev === id) {
        products.filter(item => item.id !== id);
      }
    });
  };

  return (
        <div className={classes.products}>
            <div className={classes.products__header}>
                <div>
                    <h2 className={classes['products__header-heading']}>Products</h2>
                    <p className={classes['products__header-found']}>79 products found</p>
                </div>
                <div>
                    <div className={classes['products__header-search']}>
                        <FontAwesomeIcon className={classes['products__header-search-icon']} icon={faMagnifyingGlass} />
                        <form className={classes['products__header-search-form']} type="text">
                          <input className={classes['products__header-search-input']} type="text" placeholder="Search" />
                        </form>
                    </div>

                    <div className={classes['products__header-add']}>
                        <Link to="/add_product">
                            <FontAwesomeIcon className={classes['products__header-add-icon']} icon={faPlus} />
                        </Link>
                        <p className={classes['products__header-add-content']}>New product</p>
                    </div>
                </div>
            </div>

            <div className={classes['products__table-item']}>
                <table>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Product No</th>
                        <th>Sales</th>
                        <th>Instock</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th> </th>
                    </tr>
                    {products.map((product, index) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>
                                <div>
                                    <img src={product.image} alt="" />
                                    <p>{product.title}</p>
                                </div>
                            </td>
                            <td>{product.noproduct}</td>
                            <td>{product.sales}</td>
                            <td>{product.instock}</td>
                            <td>{product.price}</td>
                            <td>
                                <p
                                  className={`${classes.status} ${
                                    product.status === 'Instock'
                                      ? classes['status--purpel-color']
                                      : classes['status--pink-color']
                                  }`}
                                >
                                    {product.status}
                                </p>
                            </td>
                            <td>
                                <Link to="/edit">
                                    <FontAwesomeIcon className={classes.icon} icon={faPen} />
                                </Link>
                                <FontAwesomeIcon
                                  onClick={() => HandleRemoveProduct(product.id)}
                                  className={classes.icon}
                                  icon={faTrashCan}
                                />
                            </td>
                        </tr>
                    ))}
                </table>
            </div>
        </div>
  );
};

Products.propTypes = {};

export default Products;
