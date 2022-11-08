import { React, ReactDOM, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faChevronDown, faChevronUp, faXmark } from '@fortawesome/free-solid-svg-icons';
// import InputRange from 'react-input-range';
import { Link } from 'react-router-dom';
import Slider from '@mui/material/Slider';
import { green } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import classes from './styles.module.scss';

const Products = () => {
  const theme = createTheme({
    palette: {
      secondary: {
        main: green[900],
      },
    },
  });

  const [isFocusLink, setFocusLink] = useState('');

  const handleFocusLink = () => {};

  const valuetext = (value) => value;
  const [value, setValue] = useState([0, 10]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
        <div className={classes.products}>
            <div className={classes.products__category}>
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
                        <li className={classes['products__category-item']}>
                            <div className={classes['products__category-item-drop-down']}>
                                Thời trang nữ
                                <div className={classes['products__category-icon']}>
                                    <FontAwesomeIcon
                                      className={classes['products__category-icon-down']}
                                      icon={faChevronDown}
                                    />
                                    <FontAwesomeIcon
                                      className={classes['products__category-icon-up']}
                                      icon={faChevronUp}
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
                        <li className={classes['products__category-item']}>
                            <div className={classes['products__category-item-drop-down']}>
                                Thời trang nam
                                <div className={classes['products__category-icon']}>
                                    <FontAwesomeIcon
                                      className={classes['products__category-icon-down']}
                                      icon={faChevronDown}
                                    />
                                    <FontAwesomeIcon
                                      className={classes['products__category-icon-up']}
                                      icon={faChevronUp}
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

            <div className={classes.products__product}>
                <div className={classes['products__product-outstanding']}>
                    <h2 className={classes['products__product-outstanding-heading']}>Sản phẩm nổi bật</h2>

                    <div className={classes['products__product-outstanding-category']}>
                        <ul className={classes['products__product-outstanding-category-list']}>
                            <li className={classes['products__product-outstanding-category-item']}>
                                <Link to="#1" className={classes['products__product-outstanding-category-link']}>
                                    Phổ biến
                                </Link>
                                <div className={classes['products__product-outstanding-category-underline']}> </div>
                            </li>
                            <li className={classes['products__product-outstanding-category-item']}>
                                <Link to="#1" className={classes['products__product-outstanding-category-link']}>
                                    Mới nhất
                                </Link>
                                <div className={classes['products__product-outstanding-category-underline']}> </div>
                            </li>
                            <li className={classes['products__product-outstanding-category-item']}>
                                <Link to="#1" className={classes['products__product-outstanding-category-link']}>
                                    Giá từ thấp tới cao
                                </Link>
                                <div className={classes['products__product-outstanding-category-underline']}> </div>
                            </li>
                            <li className={classes['products__product-outstanding-category-item']}>
                                <Link to="#1" className={classes['products__product-outstanding-category-link']}>
                                    Giá từ cao đến thấp
                                </Link>
                                <div className={classes['products__product-outstanding-category-underline']}> </div>
                            </li>
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
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['products__product-item']}>
                        <p>1</p>
                    </div>
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

            <div className={classes.products__filter}>
                <div className={classes['products__filter-wrap']}>
                    <div className={classes['products__filter-price-wrap']}>
                        <div className={classes['products__filter-header-price']}>
                            <span className={classes['products__filter-header-price-content']}>Giá</span>
                            <FontAwesomeIcon className={classes['products__filter-icon']} icon={faChevronDown} />
                        </div>

                        <div className={classes['products__filter-product-zero']}>
                            <input className={classes['products__filter-product-zero-radio']} type="radio" />
                            <span className={classes['products__filter-product-zero-content']}>Sản phẩm 0đ</span>
                        </div>

                        <div className={classes['products__filter-slider-wrap']}>
                            <Slider
                              className={classes['products__filter-slider']}
                              getAriaLabel={() => 'Temperature range'}
                              value={value}
                              onChange={handleChange}
                              valueLabelDisplay="auto"
                              disableSwap="auto"
                              getAriaValueText={valuetext}
                            />
                        </div>

                        <div className={classes['products__filter-details']}>
                            <span className={classes['products__filter-details-content-min']}>Tối thiểu: </span>
                            <span className={classes['products__filter-details-number-min']}>200.000</span>
                            <span className={classes['products__filter-details-content-max']}> - Tối đa: </span>
                            <span className={classes['products__filter-details-number-max']}>500.000</span>
                        </div>

                        <div className={classes['products__filter-wrap-button']}>
                            <button className={classes['products__filter-button']}>Lọc</button>
                        </div>
                    </div>

                    <div className={classes['products__filter-form-wrap']}>
                        <div className={classes['products__filter-header']}>
                            <span className={classes['products__filter-header-content']}>Cơ sở</span>
                            <FontAwesomeIcon className={classes['products__filter-icon']} icon={faChevronDown} />
                        </div>

                        <div className={classes['products__filter-option-wrap']}>
                            <select className={classes['products__filter-choose-option']}>
                                <option className={classes['products__filter-option']} selected disabled>
                                    Chọn cơ sở
                                </option>
                                <option className={classes['products__filter-option']} name="" id="1">
                                    Thủ Đức
                                </option>
                                <option className={classes['products__filter-option']} name="" id="2">
                                    Quận 5
                                </option>
                            </select>
                        </div>

                        <div className={classes['products__filter-wrap-tag']}>
                            <div className={classes['products__filter-tag']}>
                                <span className={classes['products__filter-tag-content']}>Thủ Đức</span>
                                <FontAwesomeIcon className={classes['products__filter-tag-icon']} icon={faXmark} />
                            </div>
                            <div className={classes['products__filter-tag']}>
                                <span className={classes['products__filter-tag-content']}>Quận 5</span>
                                <FontAwesomeIcon className={classes['products__filter-tag-icon']} icon={faXmark} />
                            </div>
                        </div>
                    </div>

                    <div className={classes['products__filter-form-wrap']}>
                        <div className={classes['products__filter-header']}>
                            <span className={classes['products__filter-header-content']}>Chất liệu</span>
                            <FontAwesomeIcon className={classes['products__filter-icon']} icon={faChevronDown} />
                        </div>

                        <div className={classes['products__filter-option-wrap']}>
                            <select className={classes['products__filter-choose-option']}>
                                <option className={classes['products__filter-option']} selected disabled>
                                    Chọn chất liệu
                                </option>
                                <option className={classes['products__filter-option']} name="" id="1">
                                    Cotton
                                </option>
                            </select>
                        </div>

                        <div className={classes['products__filter-wrap-tag']}>
                            <div className={classes['products__filter-tag']}>
                                <span className={classes['products__filter-tag-content']}>Cotton</span>
                                <FontAwesomeIcon className={classes['products__filter-tag-icon']} icon={faXmark} />
                            </div>
                        </div>
                    </div>

                    <div className={classes['products__filter-size-wrap']}>
                        <div className={classes['products__filter-size']}>
                            <span className={classes['products__filter-size-content']}>Chất liệu</span>
                            <FontAwesomeIcon className={classes['products__filter-icon']} icon={faChevronDown} />
                        </div>

                        <div className={classes['products__filter-size-input']}>
                            <div className={classes['products__filter-size-input-choose']}>
                                <input
                                  className={classes['products__filter-size-input-checkbox']}
                                  type="checkbox"
                                  name=""
                                  id=""
                                />
                                <span className={classes['products__filter-size-detail']}>M</span>
                            </div>
                            <div className={classes['products__filter-size-input-choose']}>
                                <input
                                  className={classes['products__filter-size-input-checkbox']}
                                  type="checkbox"
                                  name=""
                                  id=""
                                />
                                <span className={classes['products__filter-size-detail']}>S</span>
                            </div>
                            <div className={classes['products__filter-size-input-choose']}>
                                <input
                                  className={classes['products__filter-size-input-checkbox']}
                                  type="checkbox"
                                  name=""
                                  id=""
                                />
                                <span className={classes['products__filter-size-detail']}>L</span>
                            </div>
                            <div className={classes['products__filter-size-input-choose']}>
                                <input
                                  className={classes['products__filter-size-input-checkbox']}
                                  type="checkbox"
                                  name=""
                                  id=""
                                />
                                <span className={classes['products__filter-size-detail']}>XL</span>
                            </div>
                            <div className={classes['products__filter-size-input-choose']}>
                                <input
                                  className={classes['products__filter-size-input-checkbox']}
                                  type="checkbox"
                                  name=""
                                  id=""
                                />
                                <span className={classes['products__filter-size-detail']}>XXL</span>
                            </div>
                            <div className={classes['products__filter-size-input-choose']}>
                                <input
                                  className={classes['products__filter-size-input-checkbox']}
                                  type="checkbox"
                                  name=""
                                  id=""
                                />
                                <span className={classes['products__filter-size-detail']}>XXXL</span>
                            </div>
                            <div className={classes['products__filter-size-input-choose']}>
                                <input
                                  className={classes['products__filter-size-input-checkbox']}
                                  type="checkbox"
                                  name=""
                                  id=""
                                />
                                <span className={classes['products__filter-size-detail']}>Khác</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

Products.propTypes = {};

export default Products;
