/* eslint-disable prefer-const */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import classes from './styles.module.scss';
import CardProduct from '../../../components/cardProduct/CardProduct';
import { addDataSort, addDataOffset } from '../../../store/reducers/dataSort';

const listOutstading = [
  {
    title: 'Phổ biến',
    sort: '',
  },
  {
    title: 'Mới nhất',
    sort: '-create_at',
  },
  {
    title: 'Giá từ thấp tới cao',
    sort: 'sale',
  },
  {
    title: 'Giá từ cao tới thấp',
    sort: '-sale',
  },
];

const Products = () => {
  const [Outstanding, setOutstanding] = useState({});
  const [pagination, setPagination] = useState(1);
  const [checkPagination, setCheckPagination] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const data = useSelector((state) => state.datafilter);
  const dataFilter = data.products !== undefined && data.products;
  const dataTotal = dataFilter.total;
  const responseDataFilter = dataFilter.data !== undefined && dataFilter.data;

  const dataTitle = useSelector((state) => state.datacategory);

  useEffect(() => {
    console.log(data.isLoading);
  }, [data]);

  const dataPagination = data.pagination;
  const pages = Array.from(new Array(dataPagination), () => 0);

  const dispatch = useDispatch();
  const dispatchSort = () => dispatch(addDataSort(Outstanding.sort));
  useEffect(() => {
    dispatchSort();
  }, [Outstanding]);

  const dispatchOffset = () => dispatch(addDataOffset(pagination));
  useEffect(() => {
    dispatchOffset();
  }, [pagination]);

  const handleOutstanding = (e, sort) => {
    setOutstanding({ title: e.target.childNodes[0].nodeValue, sort });
  };

  useEffect(() => {
    setPagination(dataPagination === 0 ? 0 : 1);
  }, [dataPagination]);

  useEffect(() => {
    setCheckPagination(true);
    setIsLoading(false);
  }, [pagination]);

  useEffect(() => {
    if (checkPagination) {
      setCheckPagination(false);
      return;
    }
    setPagination(1);
    setIsLoading(true);
  }, [data]);

  const handlePaginationIncrease = () => {
    setPagination((prev) => {
      if (prev >= dataPagination) {
        return dataPagination;
      }
      return prev + 1;
    });
  };

  const handlePaginationDecrease = () => {
    setPagination((prev) => {
      if (prev <= 1) {
        return prev;
      }
      return prev - 1;
    });
  };

  const hanllePaginationUnder = (e) => {
    setPagination(+e.target.childNodes[0].nodeValue);
  };

  // console.log(`cũ ${pagination}`);
  // console.log(`mới ${prePagination}`);

  return (
        <div className={classes.products__product}>
            <div className={classes['products__product-outstanding']}>
                <h2 className={classes['products__product-outstanding-heading']}>
                    {dataTitle.title !== undefined ? dataTitle.title : 'Sản phẩm'}
                </h2>

                <div className={classes['products__product-outstanding-category']}>
                    <ul className={classes['products__product-outstanding-category-list']}>
                        {listOutstading.map((itemOutstanding, index) => (
                            <li key={index} className={classes['products__product-outstanding-category-item']}>
                                <p
                                  onClick={(e) => handleOutstanding(e, itemOutstanding.sort)}
                                  className={`${classes['products__product-outstanding-category-link']} ${
                                    Outstanding.title === itemOutstanding.title
                                      ? classes['products__product-outstanding-category-link--color']
                                      : ''
                                  }`}
                                >
                                    {itemOutstanding.title}
                                </p>
                                <div
                                  className={`${classes['products__product-outstanding-category-underline']} 
                                      ${
                                          Outstanding.title === itemOutstanding.title
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
                        <FontAwesomeIcon
                          onClick={handlePaginationDecrease}
                          className={classes['products__product-outstanding-category-page-left']}
                          icon={faChevronLeft}
                        />
                        <span className={classes['products__product-outstanding-category-page-number']}>
                            {pagination}
{' '}
/
{' '}
{dataPagination}
                        </span>
                        <FontAwesomeIcon
                          onClick={handlePaginationIncrease}
                          className={classes['products__product-outstanding-category-page-right']}
                          icon={faChevronRight}
                        />
                    </div>
                </div>
            </div>

            <div
              className={`${classes['products__no-product']} ${
                dataTotal === 0 && classes['product__not-product--active']
              }`}
            >
                Không có sản phẩm
            </div>

            <div className={classes['products__product-wrap-item']}>
                {responseDataFilter && !isLoading
                    && responseDataFilter.map((item, index) => (
                        <>
                            {/* <div
                              key={index}
                              className={`${classes['products__card-loading']} ${
                                data.isLoading === true && classes['products__card-loading--active']
                              }`}
                            >
                                <div className={`${classes.card__image} ${classes.loading}`}> </div>
                                <div className={`${classes.card__title} ${classes.loading}`}> </div>
                                <div className={`${classes.card__description} ${classes.loading}`}> </div>
                            </div> */}
                            <div key={index + 1000} className={classes['products__product-item']}>
                                <CardProduct
                                  Details={{
                                    name: item.name,
                                    price: item.sale,
                                    facility:
                                            item.facility !== undefined
                                            && (item.facility.length !== 0 ? item.facility : [{ name: 'Không có' }]),
                                    img: item.img,
                                  }}
                                />
                            </div>
                        </>
                    ))}
            </div>

            <ul className={`${classes.products__pagination} ${dataTotal === 0 && classes['product__display-none']}`}>
                <li onClick={handlePaginationDecrease} className={classes['products__pagination-item']}>
                    <FontAwesomeIcon className={classes['products__pagination-icon']} icon={faChevronLeft} />
                </li>
                {pages.map((page, index) => (
                    <li
                      onClick={(e) => hanllePaginationUnder(e)}
                      key={+index}
                      className={`${classes['products__pagination-item']} ${
                        index + 1 === pagination && classes['products__pagination-item--active']
                      }`}
                    >
                        {index + 1}
                    </li>
                ))}
                <li onClick={handlePaginationIncrease} className={classes['products__pagination-item']}>
                    <FontAwesomeIcon className={classes['products__pagination-icon']} icon={faChevronRight} />
                </li>

                {/* <li className={classes['products__pagination-item']}>2</li> */}
                {/* <li className={classes['products__pagination-item']}>3</li>
                <li className={classes['products__pagination-item']}>...</li>
                <li className={classes['products__pagination-item']}>7</li> */}
            </ul>
        </div>
  );
};

Products.propTypes = {};

export default Products;
