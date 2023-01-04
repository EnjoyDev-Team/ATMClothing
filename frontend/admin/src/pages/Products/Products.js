import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus, faPen, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import classes from './styles.module.scss';
import useAxios from '../../hooks/useAxios';
import { axiosPrivate } from '../../api/axios';
import { LoadingDonut } from '../../components/Loading/Loading';

const Products = () => {
  const [removeProduct, setRemoveProduct] = useState([]);
  const [dataSearch, setDataSearch] = useState('');
  const [dataRemove, setDataRemove] = useState({});

  const [dataProduct, errorProduct, isLoadingProduct] = useAxios(
    'get',
    `/products/${dataSearch !== '' ? `?name=${dataSearch}` : ''}`,
    {},
    {},
    [dataSearch]
  );

  const navigate = useNavigate();

  useEffect(() => {
    if (dataProduct.data) {
      setRemoveProduct([...dataProduct.data]);
    }
  }, [dataProduct]);

  const handleRemoveProduct = (product) => {
    setRemoveProduct((prev) => prev.filter((item) => item._id !== product._id));
    setDataRemove(product);
  };

  useEffect(() => {
    if (Object.keys(dataRemove).length !== 0) {
      axiosPrivate.delete(`/products/${dataRemove._id}`, {}).then((res) => {
        if (res) {
          console.log(res);
        }
      });
    }
  }, [dataRemove]);

  const handleDataSearch = (e) => {
    setDataSearch(e.target.value);
  };

  const handleLink = (id) => {
    navigate(`/admin-products/${id}`);
  };

  return (
        <div className={classes.products}>
            <div className={classes.products__header}>
                <div>
                    <h2 className={classes['products__header-heading']}>Products</h2>
                    <p className={classes['products__header-found']}>
                      {removeProduct.length}
                      {' '}
                      products found
                    </p>
                </div>
                <div>
                    <div className={classes['products__header-search']}>
                        <FontAwesomeIcon className={classes['products__header-search-icon']} icon={faMagnifyingGlass} />
                        {/* <form className={classes['products__header-search-form']} type="text"> */}
                        <input
                          onChange={(e) => handleDataSearch(e)}
                          className={classes['products__header-search-input']}
                          type="text"
                          placeholder="Search"
                        />
                        {/* </form> */}
                    </div>

                    <div>
                        <Link to="add" className={classes['products__header-add']}>
                            <FontAwesomeIcon className={classes['products__header-add-icon']} icon={faPlus} />
                        <p className={classes['products__header-add-content']}>New product</p>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={classes['products__table-item']}>
                <div className={classes['products__table-scroll']}>
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <p>#</p>
                                </th>
                                <th>
                                    <p>Product</p>
                                </th>
                                <th>
                                    <p>Product No</p>
                                </th>
                                <th>
                                    <p>Price</p>
                                </th>
                                <th>
                                    <p>Sales</p>
                                </th>
                                <th>
                                    <p>Instock</p>
                                </th>
                                <th>
                                    <p>Status</p>
                                </th>
                                <th>
                                    <p> </p>
                                </th>
                            </tr>
                        </thead>

                        {isLoadingProduct ? (
                          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16rem' }}>
                            <LoadingDonut />
                          </div>
                        )
                          : (
                        <tbody>
                        {removeProduct
                            && removeProduct.map((product, index) => (
                                <tr key={+index}>
                                    <td>{index + 1}</td>
                                    <td>
                                        <div>
                                            <img src={product.img} alt="" />
                                            <p>{product.name}</p>
                                        </div>
                                    </td>
                                    <td>
                                        <p>{product._id}</p>
                                    </td>
                                    <td>{product.price}</td>
                                    <td>{product.sale}</td>
                                    <td>{product.amount}</td>
                                    <td>
                                        <p
                                          className={`${classes.status} ${
                                            product.amount !== 0
                                              ? classes['status--purpel-color']
                                              : classes['status--pink-color']
                                          }`}
                                        >
                                            {product.amount !== 0 ? 'Instock' : 'Sold out'}
                                        </p>
                                    </td>
                                    <td>
                                        <FontAwesomeIcon
                                          onClick={() => handleLink(product._id)}
                                          className={classes.icon}
                                          icon={faPen}
                                        />
                                        <FontAwesomeIcon
                                          onClick={() => handleRemoveProduct(product)}
                                          className={classes.icon}
                                          icon={faTrashCan}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                          )}
                    </table>
                </div>
            </div>
        </div>
  );
};

Products.propTypes = {};

export default Products;
