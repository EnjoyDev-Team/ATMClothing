/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';

const Category = ({ fixedCategory, setFixedCategory }) => {
  const [isCategory, setCategory] = useState(false);
  const [isCategory1, setCategory1] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 68) {
        setFixedCategory(true);
      } else setFixedCategory(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCategory = () => {
    setCategory((prev) => !prev);
  };
  const handleCategory1 = () => {
    setCategory1((prev) => !prev);
  };

  return (
        <div className={`${classes.products__category} ${fixedCategory ? classes.sticky : ''}`}>
            <div className={classes['products__category-wrap']}>
                <h4 className={classes['products__category-heading']}>Danh mục</h4>

                <ul className={classes['products__category-list']}>
                    <li className={classes['products__category-item']}>
                        <Link to="#1" className={classes['products__category-item-link']}>
                            Sản phẩm nổi bật
                        </Link>
                    </li>
                    <li className={classes['products__category-item']}>
                        <Link to="#1" className={`${classes['products__category-item-link']}`}>
                            Góc 0đ
                        </Link>
                    </li>
                    <li
                      className={`${classes['products__category-item']} ${
                        isCategory
                          ? classes['products__category-item--show']
                          : classes['products__category-item--hide']
                      }`}
                    >
                        <div onClick={handleCategory} className={classes['products__category-item-drop-down']}>
                            Thời trang nữ
                            <div className={classes['products__category-icon']}>
                                <FontAwesomeIcon
                                  className={`${classes['products__category-icon-down']} 
                          ${
                              !isCategory
                                ? classes['products__category-icon-down--invalid']
                                : classes['products__category-icon-down--active']
                          }`}
                                  icon={faChevronDown}
                                />
                            </div>
                        </div>
                        <ul className={classes['products__category-list-children']}>
                            <li className={classes['products__category-item-children']}>
                                <Link to="#1" className={classes['products__category-item-children-link']}>
                                    Áo nữ
                                </Link>
                            </li>
                            <li className={classes['products__category-item-children']}>
                                <Link to="#1" className={classes['products__category-item-children-link']}>
                                    Váy & đầm
                                </Link>
                            </li>
                            <li className={classes['products__category-item-children']}>
                                <Link to="#1" className={classes['products__category-item-children-link']}>
                                    Quần & chân váy
                                </Link>
                            </li>
                            <li className={classes['products__category-item-children']}>
                                <Link to="#1" className={classes['products__category-item-children-link']}>
                                    Đồ ngủ & mặc nhà
                                </Link>
                            </li>
                            <li className={classes['products__category-item-children']}>
                                <Link to="#1" className={classes['products__category-item-children-link']}>
                                    Thời trang nữ khác
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li
                      className={`${classes['products__category-item']} ${
                        isCategory1
                          ? classes['products__category-item--show']
                          : classes['products__category-item--hide']
                      }`}
                    >
                        <div onClick={handleCategory1} className={classes['products__category-item-drop-down']}>
                            Thời trang nam
                            <div className={classes['products__category-icon']}>
                                <FontAwesomeIcon
                                  className={`${classes['products__category-icon-down']} ${
                                    !isCategory1
                                      ? classes['products__category-icon-down--invalid']
                                      : classes['products__category-icon-down--active']
                                  }`}
                                  icon={faChevronDown}
                                />
                            </div>
                        </div>
                        <ul className={classes['products__category-list-children']}>
                            <li className={classes['products__category-item-children']}>
                                <Link to="#1" className={classes['products__category-item-children-link']}>
                                    Áo nam
                                </Link>
                            </li>
                            <li className={classes['products__category-item-children']}>
                                <Link to="#1" className={classes['products__category-item-children-link']}>
                                    Quần nam
                                </Link>
                            </li>
                            <li className={classes['products__category-item-children']}>
                                <Link to="#1" className={classes['products__category-item-children-link']}>
                                    Thời trang nam khác
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li className={classes['products__category-item']}>
                        <Link to="#1" className={classes['products__category-item-link']}>
                            Phụ kiện nữ
                        </Link>
                    </li>
                    <li className={classes['products__category-item']}>
                        <Link to="#1" className={classes['products__category-item-link']}>
                            Phụ kiện nam
                        </Link>
                    </li>
                    <li className={classes['products__category-item']}>
                        <Link to="#1" className={classes['products__category-item-link']}>
                            Đồ cho bé a
                        </Link>
                    </li>
                    <li className={classes['products__category-item']}>
                        <Link to="#1" className={classes['products__category-item-link']}>
                            Đồ dùng gia đình
                        </Link>
                    </li>
                    <li className={classes['products__category-item']}>
                        <Link to="#1" className={classes['products__category-item-link']}>
                            Sản phẩm khác
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
  );
};

Category.propTypes = {
  fixedCategory: PropTypes.bool.isRequired,
  setFixedCategory: PropTypes.func.isRequired
};

export default Category;
