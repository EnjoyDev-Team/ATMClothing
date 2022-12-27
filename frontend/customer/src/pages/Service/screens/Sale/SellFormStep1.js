/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-dupe-keys */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classes from './SellFormStep1.module.scss';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import State from '../../../../components/Services/Form/State';

const SellFormStep1 = ({ onSubmit, filterItems }) => {
    const dropdown = useRef();
    const form = useRef();

    const onSubmitForm = (event) => {
        event.preventDefault();
        const { productName, productCategory, productAmount, productStatus, productPrice } = form.current;

        const newproducts = {
            name: productName.value,
            price: productPrice.value,
            category: productCategory.value,
            amount: productAmount.value,
            status: productStatus.value
        };

        onSubmit(newproducts);
    };

    const [category, setCategory] = useState('');
    const categories = filterItems && filterItems.categories ? filterItems.categories : [];

    useEffect(() => {
        dropdown.current.checked = false;
    }, [category]);

    return (
        <form onSubmit={onSubmitForm} ref={form} autoComplete="off">
            <div className={classes.inputSection}>
                <div className={classes.leftSection}>
                    <label>
                        <span>
                            <span>Tên sản phẩm </span>
                            <font color="red">*</font>
                        </span>
                        <input
                            name="productName"
                            className={classes.input2}
                            placeholder="Nhập tên sản phẩm..."
                            spellCheck={false}
                            required
                        />
                    </label>
                    <span className={classes.dropdown}>
                        <input
                            ref={dropdown}
                            id="dropdown_toggle"
                            type="checkbox"
                            className={classes.dropdown__toggle}
                        />
                        <label htmlFor="category_input">
                            <span>
                                <span>Danh mục </span>
                                <font color="red">*</font>
                            </span>
                            <label htmlFor="dropdown_toggle">
                                <div className={classes.input__dropdown}>
                                    <input
                                        name="productCategory"
                                        id="category_input"
                                        type="text"
                                        className={classes.input2}
                                        placeholder="Danh mục"
                                        onChange={(e) => setCategory(e.target.value)}
                                        value={category}
                                        spellCheck={false}
                                        required
                                    />
                                    <FontAwesomeIcon icon={faChevronDown} className={classes.icon} />
                                </div>
                            </label>
                        </label>
                        <div className={classes.dropdown__list}>
                            {categories.map((el) => (
                                <div
                                    key={el.slug}
                                    onClick={() => setCategory(el.name)}
                                    className={classes.dropdown__list__item}
                                >
                                    {el.name}
                                </div>
                            ))}
                        </div>
                    </span>
                </div>
                <div className={classes.rightSection}>
                    <label>
                        <span>
                            <span>Số lượng hàng hiện có </span>
                            <font color="red">*</font>
                        </span>
                        <input
                            name="productAmount"
                            type="number"
                            min={1}
                            max={20}
                            className={classes.input2}
                            placeholder="Nhập số lượng"
                            required
                        />
                    </label>
                    <label>
                        <span>
                            <span>Giá bạn đề xuất cho sản phẩm này </span>
                            <font color="red">*</font>
                        </span>
                        <input
                            name="productPrice"
                            type="text"
                            className={classes.input2}
                            placeholder="Nhập giá đề xuất"
                            spellCheck={false}
                            required
                        />
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
