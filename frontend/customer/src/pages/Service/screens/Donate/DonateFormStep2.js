/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-dupe-keys */
/* eslint-disable indent */
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classes from './DonateFormStep2.module.scss';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';

const DonateFormStep2 = ({ onSubmit, filterItems }) => {
    const form = useRef();
    const dropdown = useRef();

    const [material, setMaterial] = useState('');

    const onSubmitForm = async (event) => {
        event.preventDefault();

        const { productDescription, productSize, productMaterial } = form.current;

        const newdata = {
            description: productDescription.value,
            material: productMaterial.value,
            size: productSize.value,
        };

        onSubmit(newdata);
    };

    useEffect(() => {
        dropdown.current.checked = false;
    }, [material]);

    const materials = filterItems && filterItems.materials ? filterItems.materials : [];

    return (
        <form onSubmit={onSubmitForm} ref={form}>
            <div className={classes.main__section}>
                <p className={classes.detail__product}>Mô tả sản phẩm</p>
                <textarea
                    name="productDescription"
                    className={classes.description__input}
                    rows="6"
                    cols="93"
                    placeholder="Mô tả..."
                />
                <p className={classes.detail__product}>Thông tin khác</p>
                <div className={classes.input__container}>
                    <div className={classes.input__container}>
                        <span className={classes.dropdown}>
                            <input
                                ref={dropdown}
                                id="dropdown_toggle"
                                type="checkbox"
                                className={classes.dropdown__toggle}
                            />
                            <label htmlFor="dropdown_toggle">
                                <input
                                    name="productMaterial"
                                    className={classes.input__material}
                                    placeholder="Chất liệu"
                                    onChange={(e) => setMaterial(e.target.value)}
                                    value={material}
                                />
                                <FontAwesomeIcon icon={faChevronDown} className={classes.icon} />
                            </label>
                            <div className={classes.dropdown__list}>
                                {materials.map((el) => (
                                    <div
                                        key={el.name}
                                        onClick={() => setMaterial(el.name)}
                                        className={classes.dropdown__list__item}
                                    >
                                        {el.name}
                                    </div>
                                ))}
                            </div>
                        </span>
                    </div>
                    <input
                        name="productSize"
                        className={classes.input__size}
                        placeholder="Kích cỡ (Ví dụ: S, XL, 29, 30...)"
                    />
                </div>
            </div>
            <ButtonCT
                greenLinear
                content="Hoàn tất"
                style={{
                    width: '140px',
                    padding: '1rem 0rem',
                    borderRadius: '50px',
                    marginLeft: 'auto',
                    marginRight: '4rem',
                    fontSize: '1.6rem',
                    marginBottom: '3rem',
                }}
            />
        </form>
    );
};

export default DonateFormStep2;
