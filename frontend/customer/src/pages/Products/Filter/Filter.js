/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faXmark } from '@fortawesome/free-solid-svg-icons';
import Slider from '@mui/material/Slider';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../../components/ButtonCT/ButtonCT';
import classes from './styles.module.scss';
import useAxios from '../../../hooks/useAxios';
import { addDataFilter, addDataPagination, addDataIsLoading } from '../../../store/reducers/dataFilter';
import { addDataOffset, clearDataPagination } from '../../../store/reducers/dataSort';

const dimensions = [
  {
    id: 1,
    name: 'S',
  },
  {
    id: 2,
    name: 'M',
  },
  {
    id: 3,
    name: 'L',
  },
  {
    id: 4,
    name: 'XL',
  },
  {
    id: 5,
    name: 'XXL',
  },
  {
    id: 6,
    name: 'XXXL',
  },
  {
    id: 7,
    name: 'Khác',
  },
];

const Filter = () => {
  const [isCheckedRaido, setCheckedRadio] = useState(false);
  const [filterFacility, setFilterFacility] = useState([]);
  const [filterMaterial, setFilterMatirial] = useState([]);
  const [filter0d, setFilter0d] = useState('');
  const [filterSize, setFilterSize] = useState([]);
  const [value, setValue] = useState([0, 800]);
  const [filterPriceRange, setFilterPriceRange] = useState(value);
  const [changeContentFacility, setChangeContentFacility] = useState('Chọn cơ sở');
  const [changeContentMaterial, setChangeContentMaterial] = useState('Chọn chất liệu');
  const [renderRenderFacilities, setRenderFacilities] = useState([]);
  const [renderRenderMaterials, setRenderMaterials] = useState([]);

  const dispatch = useDispatch();

  const dataSearch = useSelector((state) => state.datasearch);
  const dataCategory = useSelector((state) => state.datacategory);
  const category = dataCategory.slug !== undefined ? dataCategory.slug : '';
  const dataSort = useSelector((state) => state.datasort);
  const sort = dataSort.sort !== undefined ? dataSort.sort : '';
  const pages = dataSort.offset !== undefined ? dataSort.offset : '';
  const limit = 12;

  const dispatchOffset = (page) => {
    dispatch(addDataOffset(page));
  };

  const queryFilter = `${
    filter0d !== '0'
      ? `min=${filterPriceRange[0]}
  &max=${filterPriceRange[1]}`
      : ''
  }

  ${filterFacility.length !== 0 ? `&facility=${filterFacility.join(',')}` : ''}
  ${filterMaterial.length !== 0 ? `&material=${filterMaterial.join(',')}` : ''}
  ${filterSize.length !== 0 ? `&size=${filterSize.join(',')}` : ''}
  ${pages !== '' ? `&offset=${pages}` : ''}
  ${sort !== '' ? `&sort=${sort}` : ''}
  ${filter0d !== '' ? `&sale=${filter0d}` : ''}
  ${category !== '' ? `&category=${category}` : ''}
  ${dataSearch.name ? `&name=${dataSearch.name}` : ''}`;

  const queryString = `/products?limit=${limit}&${queryFilter}`;
  const queryTotal = `/products/total?${queryFilter}`;

  const [responseFilter, errorFilter, isLoadingFilter] = useAxios('get', queryString, {}, {}, [
    filterPriceRange,
    filterFacility,
    filterMaterial,
    filterSize,
    filter0d,
    dataSearch,
    category,
    sort,
    pages,
  ]);

  const [responseTotal, errorTotal, isLoadingTotal] = useAxios('get', queryTotal, {}, {}, [
    filterPriceRange,
    filterFacility,
    filterMaterial,
    filterSize,
    filter0d,
    dataSearch,
    category,
    sort,
    // pages
  ]);

  const dispatchDataIsLoading = () => dispatch(addDataIsLoading(isLoadingFilter));
  useEffect(() => {
    dispatchDataIsLoading();
  }, [filterPriceRange, filterFacility, filterMaterial, filterSize, filter0d, dataSearch, category, sort, pages]);

  const total = responseTotal && responseTotal.data.total;
  const totalPage = Math.ceil(total / limit);
  const dispatchDataPagination = () => dispatch(addDataPagination(totalPage));
  useEffect(() => {
    dispatchDataPagination();
  }, [totalPage]);

  const [responseData, errorData, isLoadingData] = useAxios('get', '/products/filters', {}, {}, []);
  useEffect(() => {
    setRenderFacilities(
      responseData.data
                && responseData.data.facilities.length
                && responseData.data.facilities.map((facility) => ({ ...facility, selected: false }))
    );
    setRenderMaterials(
      responseData.data
                && responseData.data.materials.length
                && responseData.data.materials.map((facility) => ({ ...facility, selected: false }))
    );
  }, [responseData]);

  const dispatchDataFilter = () => dispatch(addDataFilter(responseFilter && responseFilter));
  useEffect(() => {
    dispatchDataFilter();
  }, [responseFilter]);

  const valuetext = (value) => value;

  const handleChange = (event, newValue) => {
    dispatchOffset(1);
    setValue(newValue);
  };

  const handleCheckedRadio = () => {
    dispatchOffset(1);

    setCheckedRadio((prev) => {
      if (!prev) {
        setFilter0d('0');
        return !prev;
      }
      setFilter0d('');
      return !prev;
    });
  };

  const handleCloseTag = (data) => {
    dispatchOffset(1);

    setFilterFacility((prev) => prev.filter((item) => item !== data));
    setFilterMatirial((prev) => prev.filter((item) => item !== data));
  };

  const handleFilterSize = (size) => {
    dispatchOffset(1);

    setFilterSize((prev) => {
      const isChecked = filterSize.includes(size);

      if (isChecked) {
        return prev.filter((item) => item !== size);
      }

      return [...prev, size];
    });
  };

  const handlePriceRange = () => {
    setFilterPriceRange(value);
    dispatchOffset(1);
  };
  return (
        <div className={classes.products__filter}>
            <div className={classes['products__filter-wrap']}>
                <div className={classes['products__filter-price-wrap']}>
                    <div className={classes['products__filter-header-price']}>
                        <span className={classes['products__filter-header-price-content']}>Giá</span>
                        {/* <FontAwesomeIcon className={classes['products__filter-icon']} icon={faChevronDown} /> */}
                    </div>

                    <div className={classes['products__filter-product-zero']}>
                        <input
                          readOnly
                          onClick={handleCheckedRadio}
                          checked={isCheckedRaido}
                          className={classes['products__filter-product-zero-radio']}
                          type="radio"
                        />
                        <span className={classes['products__filter-product-zero-content']}>Sản phẩm 0đ</span>
                    </div>

                    <div className={classes['products__filter-slider-wrap']}>
                        <Slider
                          className={`${classes['products__filter-slider']} ${
                            isCheckedRaido && classes['products__filter-slider--opacity']
                          }`}
                          value={value}
                          onChange={handleChange}
                          valueLabelDisplay="auto"
                          disableSwap
                          disabled={isCheckedRaido}
                          getAriaValueText={valuetext}
                          min={0}
                          max={1000}
                        />
                    </div>

                    <div className={classes['products__filter-details']}>
                        <span className={classes['products__filter-details-content-min']}>Tối thiểu: </span>
                        <span className={classes['products__filter-details-number-min']}>
                            {(value[0] * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        </span>
                        <br />
                        <span className={classes['products__filter-details-content-max']}>Tối đa: </span>
                        <span className={classes['products__filter-details-number-max']}>
                            {(value[1] * 1000).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
                        </span>
                    </div>

                    <div className={classes['products__filter-wrap-button']}>
                        <Button medium borderRadius outlineBtn onClick={handlePriceRange} disabled={isCheckedRaido}>
                            Lọc
                        </Button>
                    </div>
                </div>

                <div className={classes['products__filter-form-wrap']}>
                    <div className={classes['products__filter-header']}>
                        <span className={classes['products__filter-header-content']}>Cơ sở</span>
                        {/* <FontAwesomeIcon className={classes['products__filter-icon']} icon={faChevronDown} /> */}
                    </div>

                    <div className={classes['products__filter-option-wrap']}>
                        <div className={classes['products__filter-choose-option']}>
                            <div className={classes['products__filter-option']}>{changeContentFacility}</div>
                            <FontAwesomeIcon icon={faChevronDown} />
                            <ul className={classes['products__filter-option-list']}>
                                {renderRenderFacilities
                                    && renderRenderFacilities.length
                                    && renderRenderFacilities.map((facility, index) => {
                                      if (facility.selected === false) {
                                        return (
                                                <li
                                                  onClick={() => {
                                                    facility.selected = true;
                                                    dispatchOffset(1);
                                                    setFilterFacility((prev) => [facility.code, ...prev]);
                                                    setChangeContentFacility(facility.name);
                                                  }}
                                                  key={+index}
                                                  className={classes['products__filter-option-item']}
                                                >
                                                    {facility.name}
                                                </li>
                                        );
                                      }
                                      return '';
                                    })}
                            </ul>
                        </div>
                    </div>

                    <div className={classes['products__filter-wrap-tag']}>
                        {renderRenderFacilities
                            && renderRenderFacilities.length
                            && renderRenderFacilities.map((facility, index) => {
                              if (facility.selected) {
                                return (
                                        <div key={+index} className={classes['products__filter-tag']}>
                                            <span className={classes['products__filter-tag-content']}>
                                                {facility.name}
                                            </span>
                                            <FontAwesomeIcon
                                              onClick={() => {
                                                facility.selected = false;
                                                handleCloseTag(facility.code);
                                                setChangeContentFacility('Chọn cơ sở');
                                              }}
                                              className={classes['products__filter-tag-icon']}
                                              icon={faXmark}
                                            />
                                        </div>
                                );
                              }
                              return '';
                            })}
                    </div>
                </div>

                <div className={classes['products__filter-form-wrap']}>
                    <div className={classes['products__filter-header']}>
                        <span className={classes['products__filter-header-content']}>Chất liệu</span>
                        {/* <FontAwesomeIcon className={classes['products__filter-icon']} icon={faChevronDown} /> */}
                    </div>

                    <div className={classes['products__filter-option-wrap']}>
                        <div className={classes['products__filter-choose-option']}>
                            <div className={classes['products__filter-option']}>{changeContentMaterial}</div>
                            <FontAwesomeIcon icon={faChevronDown} />
                            <ul className={classes['products__filter-option-list']}>
                                {renderRenderMaterials
                                    && renderRenderMaterials.length
                                    && renderRenderMaterials.map((material, index) => {
                                      if (material.selected === false) {
                                        return (
                                                <li
                                                  onClick={() => {
                                                    material.selected = true;
                                                    dispatchOffset(1);
                                                    setFilterMatirial((prev) => [material.name, ...prev]);
                                                    setChangeContentMaterial(material.name);
                                                  }}
                                                  key={+index}
                                                  className={classes['products__filter-option-item']}
                                                >
                                                    {material.name}
                                                </li>
                                        );
                                      }
                                      return '';
                                    })}
                            </ul>
                        </div>
                    </div>

                    <div className={classes['products__filter-wrap-tag']}>
                        {renderRenderMaterials
                            && renderRenderMaterials.length
                            && renderRenderMaterials.map((material, index) => {
                              if (material.selected) {
                                return (
                                        <div key={+index} className={classes['products__filter-tag']}>
                                            <span className={classes['products__filter-tag-content']}>
                                                {material.name}
                                            </span>
                                            <FontAwesomeIcon
                                              onClick={() => {
                                                material.selected = false;
                                                handleCloseTag(material.name);
                                                setChangeContentMaterial('Chọn chất liệu');
                                              }}
                                              className={classes['products__filter-tag-icon']}
                                              icon={faXmark}
                                            />
                                        </div>
                                );
                              }
                              return '';
                            })}
                    </div>
                </div>

                <div className={classes['products__filter-size-wrap']}>
                    <div className={classes['products__filter-size']}>
                        <span className={classes['products__filter-size-content']}>Kích thước</span>
                        {/* <FontAwesomeIcon className={classes['products__filter-icon']} icon={faChevronDown} /> */}
                    </div>

                    <div className={classes['products__filter-size-input']}>
                        {dimensions.map((size) => (
                            <div key={size.id} className={classes['products__filter-size-input-choose']}>
                                <input
                                  className={classes['products__filter-size-input-checkbox']}
                                  type="checkbox"
                                  onChange={() => handleFilterSize(size.name)}
                                />
                                {size.name}
                                {/* <span className={classes['products__filter-size-detail']}>{size.name}</span> */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
  );
};

Filter.propTypes = {};

export default Filter;
