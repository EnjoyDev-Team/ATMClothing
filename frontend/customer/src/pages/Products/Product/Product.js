/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useState } from 'react';
import { useOutletContext, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import classes from './styles.module.scss';
import CardProduct from '../../../components/cardProduct/CardProduct';
import useAxios from '../../../hooks/useAxios';

const listOutstading = [
  {
    title: 'Phổ biến',
  },
  {
    title: 'Mới nhất',
  },
  {
    title: 'Giá từ thấp tới cao',
  },
  {
    title: 'Giá từ cao tới thấp',
  },
];

const Products = () => {
  const [fixedCategory] = useOutletContext();
  const [isOutstanding, setOutstanding] = useState(`${listOutstading[0].title}`);

  const queryString = '/products?limit=12';
  const queryTotal = '/products/total';

  const [responseData, errorData, isLoadingData] = useAxios('get', queryString, {}, {}, []);
  const [responseTotal, errorTotal, isLoadingTotal] = useAxios('get', queryTotal, {}, {}, []);

  const handleOutstanding = (title) => {
    setOutstanding(title);
  };

  return (
        <div className={classes.products}>
            <div className={`${classes.products__product} ${fixedCategory ? classes.margin : ''}`}>
                <div className={classes['products__product-outstanding']}>
                    <h2 className={classes['products__product-outstanding-heading']}>Sản phẩm nổi bật</h2>

                    <div className={classes['products__product-outstanding-category']}>
                        <ul className={classes['products__product-outstanding-category-list']}>
                            {listOutstading.map((itemOutstanding, index) => (
                                <li
                                  key={index}
                                  onClick={() => handleOutstanding(itemOutstanding.title)}
                                  className={classes['products__product-outstanding-category-item']}
                                >
                                    <Link
                                      to="#1"
                                      className={`${classes['products__product-outstanding-category-link']} ${
                                        isOutstanding === listOutstading[index].title
                                          ? classes['products__product-outstanding-category-link--color']
                                          : ''
                                      }`}
                                    >
                                        {itemOutstanding.title}
                                    </Link>
                                    <div
                                      className={`${classes['products__product-outstanding-category-underline']} 
                                      ${
                                          isOutstanding === listOutstading[index].title
                                            ? ''
                                            : classes['products__product-outstanding-category-underline--display']
                                      }`}
                                    >
                                        {' '}
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className={classes['products__product-outstanding-category-page']}>
                            <Link to="#1" className={classes['products__product-outstanding-category-page-links']}>
                                <FontAwesomeIcon
                                  className={classes['products__product-outstanding-category-page-left']}
                                  icon={faChevronLeft}
                                />
                            </Link>
                            <span className={classes['products__product-outstanding-category-page-number']}>1 / 5</span>
                            <Link to="#1" className={classes['products__product-outstanding-category-page-links']}>
                                <FontAwesomeIcon
                                  className={classes['products__product-outstanding-category-page-right']}
                                  icon={faChevronRight}
                                />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={classes['products__product-wrap-item']}>
                    {responseData
                        && responseData.data.map((item, index) => (
                            <div key={index} className={classes['products__product-item']}>
                                <CardProduct
                                  Details={{
                                    name: item.name,
                                    price: item.sale,
                                    address: item.facility.length !== 0 ? item.facility[0].name : 'Không có',
                                    img: item.img,
                                  }}
                                />
                            </div>
                        ))}
                </div>

                <ul className={classes.products__pagination}>
                    <li className={classes['products__pagination-item']}>
                        <Link to="#1" className={classes['products__pagination-item-link']}>
                            <FontAwesomeIcon className={classes['products__pagination-icon']} icon={faChevronLeft} />
                        </Link>
                    </li>
                    <li className={classes['products__pagination-item']}>
                        <Link
                          to="#1"
                          className={`${classes['products__pagination-item-link']} ${classes['products__pagination-item-link--active']}`}
                        >
                            1
                        </Link>
                    </li>
                    <li className={classes['products__pagination-item']}>
                        <Link to="#1" className={classes['products__pagination-item-link']}>
                            2
                        </Link>
                    </li>
                    <li className={classes['products__pagination-item']}>
                        <Link to="#1" className={classes['products__pagination-item-link']}>
                            3
                        </Link>
                    </li>
                    <li className={classes['products__pagination-item']}>...</li>
                    <li className={classes['products__pagination-item']}>
                        <Link to="#1" className={classes['products__pagination-item-link']}>
                            7
                        </Link>
                    </li>
                    <li className={classes['products__pagination-item']}>
                        <Link to="#1" className={classes['products__pagination-item-link']}>
                            <FontAwesomeIcon className={classes['products__pagination-icon']} icon={faChevronRight} />
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
  );
};

Products.propTypes = {};

export default Products;
