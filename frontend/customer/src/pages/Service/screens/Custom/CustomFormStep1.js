/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-dupe-keys */
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classes from './CustomFormStep1.module.scss';
import State from '../../../../components/Services/Form/State';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import convert2base64 from '../../../../utils/convert2base64';

const CustomFormStep1 = ({ onSubmit, filterItems }) => {
    const dropdown = useRef();
    const form = useRef();
    const [ideaImg, setPreImage] = useState('');
    const [category, setCategory] = useState('');
    const categories = filterItems && filterItems.categories ? filterItems.categories : [];

    const onSubmitForm = (event) => {
        event.preventDefault();
        const { productName, productCategory, productAmount, productStatus, productIdeaDescription, productIdeaLink } = form.current;

        const newproducts = {
            name: productName.value,
            category: productCategory.value,
            amount: productAmount.value,
            status: productStatus.value,
            idea_description: productIdeaDescription.value,
            idea_link: productIdeaLink.value,
            idea_img: ideaImg,
        };

        onSubmit(newproducts);
    };

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
                </div>
            </div>
            <State />
            <div className={classes.main__section}>
                <span className={classes.detail__product}>
                    <span>Mô tả ý tưởng bạn muốn custom</span>
                    <font color="red"> *</font>
                </span>
                <textarea
                    name="productIdeaDescription"
                    className={classes.description__input}
                    rows="6"
                    cols="93"
                    placeholder="Mô tả..."
                    required
                />
                <p className={classes.detail__product}>Thêm liên kết hoặc hình ảnh ý tưởng bạn muốn custom</p>
                <div className={classes.upload__img__container}>
                    <div className={classes.img__section}>
                        <p>Hình ảnh ý tưởng</p>
                        {/* <ButtonCT type="button" className={classes.btn__choose} borderRadius content="Chọn" /> */}
                        {!ideaImg ? (
                            <label className={classes.btn__choose}>
                                <input
                                    className={classes.input__file}
                                    name="productIdeaImage"
                                    type="file"
                                    accept="image/*"
                                    onChange={async (e) => {
                                        const file = await convert2base64(e.target.files[0]);
                                        setPreImage(file);
                                    }}
                                />
                                Chọn
                            </label>
                        ) : (
                            <>
                                <img width={200} src={ideaImg} alt="idea_image" />
                                <ButtonCT
                                    type="button"
                                    onClick={() => setPreImage('')}
                                    className={`${classes.btn__choose}`}
                                    content="Hủy"
                                />
                            </>
                        )}
                    </div>
                    <textarea
                        name="productIdeaLink"
                        className={classes.link__input}
                        rows="6"
                        cols="93"
                        placeholder="Liên kết..."
                    />
                </div>
            </div>
            <ButtonCT
                type="submit"
                style={{
                    width: '140px',
                    padding: '1rem 0rem',
                    borderRadius: '50px',
                    marginLeft: 'auto',
                    marginTop: '2rem',
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

export default CustomFormStep1;
