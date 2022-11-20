/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-dupe-keys */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classes from './SellFormStep1.module.scss';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import State from '../../../../components/Services/Form/State';

const SellFormStep1 = ({ setStep }) => {
    const onSubmit = (event) => {
        event.preventDefault();
        setStep(prev => prev + 1);
    };

    return (
        <form onSubmit={onSubmit}>
            <div className={classes.inputSection}>
                <div className={classes.leftSection}>
                    <label>
                        <span>
                            <span>Tên sản phẩm </span>
                            <font color="red">*</font>
                        </span>
                        <input className={classes.input2} placeholder="Nhập tên sản phẩm..." required />
                    </label>
                    <label className={classes.dropdown}>
                        <span>
                            <span>Danh mục </span>
                            <font color="red">*</font>
                        </span>
                        <div className={classes.input__dropdown}>
                            <input
                                type="text"
                                className={classes.input2}
                                placeholder="Danh mục"
                                required
                            />
                            <FontAwesomeIcon icon={faChevronDown} className={classes.icon} />
                        </div>
                        <div className={classes.dropdown__list}>
                            <div className={classes.dropdown__list__item}>
                                Thời trang nữ - Quần & váy
                            </div>
                            <div className={classes.dropdown__list__item}>
                                Thời trang nữ - Quần & váy
                            </div>
                            <div className={classes.dropdown__list__item}>
                                Thời trang nữ - Quần & váy
                            </div>
                            <div className={classes.dropdown__list__item}>
                                Thời trang nữ - Quần & váy
                            </div>
                            <div className={classes.dropdown__list__item}>
                                Thời trang nữ - Quần & váy
                            </div>
                        </div>
                    </label>
                </div>
                <div className={classes.rightSection}>
                    <label>
                        <span>
                            <span>Số lượng hàng hiện có </span>
                            <font color="red">*</font>
                        </span>
                        <input type="number" className={classes.input2} placeholder="Nhập số lượng" required />
                    </label>
                    <label>
                        <span>
                            <span>Giá bạn đề xuất cho sản phẩm này </span>
                            <font color="red">*</font>
                        </span>
                        <input type="text" className={classes.input2} placeholder="Nhập giá đề xuất" required />
                    </label>
                </div>
            </div>
            <State />
            <ButtonCT
                type="submit"
                style={{
                    width: '140px',
                    padding: '1rem 0rem',
                    borderRadius: '50px',
                    marginLeft: 'auto',
                    marginTop: '4rem',
                    marginRight: '4rem',
                    fontSize: '1.6rem',
                    marginBottom: '3rem',
                }}
                greenLinear
                content="Tiếp tục"
            />
        </form>
    );
};

export default SellFormStep1;
