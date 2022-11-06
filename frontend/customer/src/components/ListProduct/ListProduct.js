import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';
// import InputRange from 'react-input-range';
import classes from './styles.module.scss';

const Products = () => {
  const [isScale, setScale] = useState(false);

  const handleScale = () => {};

  return (
        <div className={classes.products}>
            <div className={classes.products__category}>
                <div className={classes['products__category-wrap']}>
                    <h4 className={classes['products__category-heading']}>Danh mục</h4>

                    <ul className={classes['products__category-list']}>
                        <li className={classes['products__category-item']}>Sản phẩm nổi bật</li>
                        <li className={classes['products__category-item']}>Góc 0đ</li>
                        <li className={classes['products__category-item']}>
                            <div>
                                Thời trang nữ
                                <FontAwesomeIcon className={classes['products__category-icon']} icon={faChevronDown} />
                            </div>
                            <ul className={classes['products__category-list-children']}>
                                <li className={classes['products__category-item-children']}>Áo nữ</li>
                                <li className={classes['products__category-item-children']}>Váy & đầm</li>
                                <li className={classes['products__category-item-children']}>Quần & chân váy</li>
                                <li className={classes['products__category-item-children']}>Đồ ngủ & mặc nhà</li>
                                <li className={classes['products__category-item-children']}>Thời trang nữ khác</li>
                            </ul>
                        </li>
                        <li className={classes['products__category-item']}>
                            <div>
                                Thời trang nam
                                <FontAwesomeIcon className={classes['products__category-icon']} icon={faChevronDown} />
                            </div>
                            <ul className={classes['products__category-list-children']}>
                                <li className={classes['products__category-item-children']}>Áo nam</li>
                                <li className={classes['products__category-item-children']}>Quần nam</li>
                                <li className={classes['products__category-item-children']}>Thời trang nam khác</li>
                            </ul>
                        </li>
                        <li className={classes['products__category-item']}>Phụ kiện nữ</li>
                        <li className={classes['products__category-item']}>Phụ kiện nam</li>
                        <li className={classes['products__category-item']}>Đồ cho bé</li>
                        <li className={classes['products__category-item']}>Đồ dùng gia đình</li>
                        <li className={classes['products__category-item']}>Sản phẩm khác</li>
                    </ul>
                </div>
            </div>

            <div className={classes.products__product}>
                <div className={classes['products__product-outstanding']}>
                    <h2 className={classes['products__product-outstanding-heading']}>Sản phẩm nổi bật</h2>

                    <div className={classes['products__product-outstanding-category']}>
                        <ul className={classes['products__product-outstanding-category-list']}>
                            <li className={classes['products__product-outstanding-category-item']}>
                                Phổ biến
                                <div className={classes['products__product-outstanding-category-underline']}> </div>
                            </li>
                            <li className={classes['products__product-outstanding-category-item']}>
                                Mới nhất
                                <div className={classes['products__product-outstanding-category-underline']}> </div>
                            </li>
                            <li className={classes['products__product-outstanding-category-item']}>
                                Giá từ thấp tới cao
                                <div className={classes['products__product-outstanding-category-underline']}> </div>
                            </li>
                            <li className={classes['products__product-outstanding-category-item']}>
                                Giá từ cao đến thấp
                                <div className={classes['products__product-outstanding-category-underline']}> </div>
                            </li>
                        </ul>

                        <div className={classes['products__product-outstanding-category-page']}>
                            <FontAwesomeIcon
                              className={classes['products__product-outstanding-category-page-left']}
                              icon={faChevronLeft}
                            />
                            <span className={classes['products__product-outstanding-category-page-number']}>1 / 5</span>
                            <FontAwesomeIcon
                              className={classes['products__product-outstanding-category-page-right']}
                              icon={faChevronRight}
                            />
                        </div>
                    </div>
                </div>

                <div className={classes['products__product-wrap']}>
                    <div className={classes['products__product-grid']}>
                        <div className={classes['products__product-row']}>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                            <div className={classes['products__product-column']}>
                                <div className={classes['products__product-item']}>
                                    <p>1</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className={classes.products__pagination}>
                    <li className={classes['products__pagination-item']}>
                        <FontAwesomeIcon className={classes['products__pagination-icon']} icon={faChevronLeft} />
                    </li>
                    <li
                      className={`${classes['products__pagination-item']} ${classes['products__pagination-item--active']}`}
                    >
                        1
                    </li>
                    <li className={classes['products__pagination-item']}>2</li>
                    <li className={classes['products__pagination-item']}>3</li>
                    <li className={classes['products__pagination-item']}>...</li>
                    <li className={classes['products__pagination-item']}>7</li>
                    <li className={classes['products__pagination-item']}>
                        <FontAwesomeIcon className={classes['products__pagination-icon']} icon={faChevronRight} />
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

                        <div className={classes['products__filter-slider']}>
                            <div className={classes['products__filter-slider-move']}> </div>
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
