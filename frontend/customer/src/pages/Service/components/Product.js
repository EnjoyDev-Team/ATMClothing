/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';
import classes from './Product.module.scss';

const Product = ({ name }, { type }) => (
    <div className={classes.product}>
        <div className={classes.productName}>
            <FontAwesomeIcon icon={faList} className={classes.icon} />
            <p>{name}</p>
            <div className={classes.buttonContainer}>
                <button>Add_button</button>
                <button>Cancel_button</button>
            </div>
        </div>
        <div className={classes.productDetail}>
            <div className={classes.menu}>
                <p>
                    Danh mục
                    <br />
                </p>
                <p>
                    Tình trạng
                    <br />
                </p>
                <p>
                    Số lượng
                    <br />
                </p>
                {/* <p>
                    {type === 'custom' ? 'Ý tưởng' : 'oh dear :D'}
                    <br />
                </p> */}
            </div>
            <div>
                <p>
                    Thời trang nữ
                    <br />
                </p>
                <p>
                    Tốt
                    <br />
                </p>
                <p>
                    2
                    <br />
                </p>
                {/* <p>
                    {type === 'custom' ? { idea } : ''}
                    <br />
                </p> */}
            </div>
            <div className={classes.finalDetail}>
                <p>
                    <br />
                    <br />
                </p>
                <div className={classes.suggestedPrice}>
                    <p className={classes.redBold}>Giá đề xuất</p>
                    <p className={classes.redBold}>80.000đ</p>
                </div>
            </div>
        </div>
    </div>
);

export default Product;
