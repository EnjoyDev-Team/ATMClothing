/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { React, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import classes from './styles.module.scss';
import { addDataCategory, addDataTitle } from '../../../store/reducers/dataCategory';
import { addDataOffset } from '../../../store/reducers/dataSort';

const categories = [
  {
    id: 1,
    name: 'Sản phẩm nổi bật',
    listCategoryChild: [],
  },
  {
    id: 2,
    name: 'Thời trang nữ',
    listCategoryChild: [
      {
        idChild: 1,
        nameChild: 'Áo nữ',
      },
      {
        idChild: 2,
        nameChild: 'Váy & Đầm',
      },
      {
        idChild: 3,
        nameChild: 'Quần & Chân váy',
      },
      {
        idChild: 4,
        nameChild: 'Đồ ngủ & Mặc nhà',
      },
      {
        idChild: 5,
        nameChild: 'Thời trang nữ khác',
      },
    ],
  },
  {
    id: 3,
    name: 'Thời trang nam',
    listCategoryChild: [
      {
        idChild: 1,
        nameChild: 'Áo nam',
      },
      {
        idChild: 2,
        nameChild: 'Quần nam',
      },
      {
        idChild: 3,
        nameChild: 'Thời trang nam khác',
      },
    ],
  },
  {
    id: 4,
    name: 'Phụ kiện nữ',
    listCategoryChild: [],
  },
  {
    id: 5,
    name: 'Phụ kiện nam',
    listCategoryChild: [],
  },
  {
    id: 6,
    name: 'Đồ cho bé',
    listCategoryChild: [],
  },
  {
    id: 7,
    name: 'Đồ dùng gia đình',
    listCategoryChild: [],
  },
  {
    id: 8,
    name: 'Sản phẩm khác',
    listCategoryChild: [],
  },
];

const Category = () => {
  const [isCategory, setCategory] = useState(false);
  const [isCategory1, setCategory1] = useState(false);
  const [activeCategory, setActiveCategory] = useState({});
  const [dataCategory, setDataCategory] = useState([]);
  const [fixedCategory, setFixedCategory] = useState(false);

  const data = useSelector((state) => state.datafilter);
  const dispatch = useDispatch();

  let dataSlugCategory;
  useEffect(() => {
    const dataFilter = data.products !== undefined && data.products;
    const responseDataFilter = dataFilter.data !== undefined && dataFilter.data;

    if (responseDataFilter !== false) {
      responseDataFilter.map((item) => {
        if (item.category.includes(activeCategory.name)) {
          if (activeCategory.idChild) {
            categories[activeCategory.id - 1].listCategoryChild[activeCategory.idChild - 1].slug = item.slug;
          } else {
            categories[activeCategory.id - 1].slug = item.slug;
          }
        }
        return '';
      });
    }

    setDataCategory(categories);
    if (activeCategory.idChild) {
      if (Object.hasOwn(dataCategory[activeCategory.id - 1], 'listCategoryChild')) {
        dataSlugCategory = dataCategory[activeCategory.id - 1].listCategoryChild[activeCategory.idChild - 1].slug;
      } else {
        dataSlugCategory = dataCategory[activeCategory.id - 1].slug;
      }
    }
  }, [activeCategory]);

  const dispatchSlug = () => dispatch(addDataCategory(dataSlugCategory));
  const dispatchTitle = () => dispatch(addDataTitle(activeCategory.name));
  // useEffect(() => {
  //   dispatchSlug();
  //   dispatchTitle();
  // }, [activeCategory]);

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

  const handleCategory = (e) => {
    if (e.target.childNodes[0].nodeValue === 'Thời trang nữ') {
      setCategory((prev) => !prev);
    }
    if (e.target.childNodes[0].nodeValue === 'Thời trang nam') {
      setCategory1((prev) => !prev);
    }
  };

  const dispatchOffset = (page) => {
    dispatch(addDataOffset(page));
    console.log(5);
  };

  const handleActiveCategory = (e, id, idChild) => {
    setActiveCategory({ name: e.target.childNodes[0].nodeValue, id, idChild });
    dispatch(addDataCategory(dataSlugCategory));
    dispatch(addDataTitle(e.target.childNodes[0].nodeValue));
    dispatchOffset(1);
  };

  return (
        <div className={`${classes.products__category} ${fixedCategory ? classes.sticky : ''}`}>
            <div className={classes['products__category-wrap']}>
                <h4 className={classes['products__category-heading']}>Danh mục</h4>

                <ul className={classes['products__category-list']}>
                    {categories.map((category) => {
                      if (category.listCategoryChild.length === 0) {
                        return (
                                <li
                                  onClick={(e) => handleActiveCategory(e, category.id, undefined)}
                                  key={category.id}
                                  className={classes['products__category-item']}
                                >
                                    <p
                                      to="#1"
                                      className={`${classes['products__category-item-link']} ${
                                        category.name === activeCategory.name
                                          ? classes['products__category-item-link--active']
                                          : ''
                                      }`}
                                    >
                                        {category.name}
                                    </p>
                                </li>
                        );
                      }
                      return (
                            <li
                              key={category.id}
                              className={`${classes['products__category-item']} ${
                                (category.name === 'Thời trang nữ' ? isCategory : isCategory1)
                                  ? classes['products__category-item--show']
                                  : classes['products__category-item--hide']
                              }`}
                            >
                                <div
                                  onClick={(e) => handleCategory(e)}
                                  className={classes['products__category-item-drop-down']}
                                >
                                    {category.name}
                                    <div className={classes['products__category-icon']}>
                                        <FontAwesomeIcon
                                          className={`${classes['products__category-icon-down']}
                          ${
                              (category.name === 'Thời trang nữ' ? !isCategory : !isCategory1)
                                ? classes['products__category-icon-down--invalid']
                                : classes['products__category-icon-down--active']
                          }`}
                                          icon={faChevronDown}
                                        />
                                    </div>
                                </div>
                                <ul className={classes['products__category-list-children']}>
                                    {category.listCategoryChild.map((item) => (
                                        <li
                                          onClick={(e) => handleActiveCategory(e, category.id, item.idChild)}
                                          key={item.idChild}
                                          className={classes['products__category-item-children']}
                                        >
                                            <p
                                              to="#1"
                                              className={`${classes['products__category-item-children-link']} ${
                                                item.nameChild === activeCategory.name
                                                  ? classes['products__category-item-children-link--active']
                                                  : ''
                                              }`}
                                            >
                                                {item.nameChild}
                                            </p>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                      );
                    })}
                </ul>
            </div>
        </div>
  );
};

Category.propTypes = {};

export default Category;
