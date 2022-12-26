import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';
import test from '../../assets/imgs/test.jpg';

const products = [
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE100',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE101',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Out of stock',
  },
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE102',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE103',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE104',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Out of stock',
  },
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE105',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE106',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Out of stock',
  },
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE107',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Out of stock',
  },
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE108',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE109',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Out of stock',
  },
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE110',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE111',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
  {
    image: test,
    title: 'Áo',
    noproduct: 'NBE112',
    sales: 10,
    instock: 2,
    price: '150.000',
    status: 'Instock',
  },
];

const Products = () => {
  const [removeProduct, setRemoveProduct] = useState([]);
  const [dataSearch, setDataSearch] = useState('');

  useEffect(() => {
    setRemoveProduct([...products]);
  }, []);

  const handleRemoveProduct = (id) => {
    setRemoveProduct((prev) => prev.filter((item) => item.noproduct !== id));
  };

  const handleDataSearch = (e) => {
    setDataSearch(e.target.value);
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
                            <input
                              onChange={(e) => handleDataSearch(e)}
                              className={classes['products__header-search-input']}
                              type="text"
                              placeholder="Search"
                            />
                        </form>
                    </div>

                    <div className={classes['products__header-add']}>
                        <Link to="add_product">
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
                    {removeProduct
                        && removeProduct.map((product, index) => (
                            <tr key={+index}>
                                <td>{index + 1}</td>
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
                                    <Link to="edit">
                                        <FontAwesomeIcon className={classes.icon} icon={faPen} />
                                    </Link>
                                    <FontAwesomeIcon
                                      onClick={() => handleRemoveProduct(product.noproduct)}
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
