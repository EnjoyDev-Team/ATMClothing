/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-dupe-keys */
/* eslint-disable indent */
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classes from './OptionalDetails.module.scss';
import ButtonCT from '../../../components/ButtonCT/ButtonCT';
import convert2base64 from '../../../utils/convert2base64';

const OptionalDetails = ({ onSubmit, filterItems }) => {
    const form = useRef();
    const dropdown = useRef();

    const [preImg, setPreImage] = useState('');
    const [postImg, setPostImage] = useState('');
    const [material, setMaterial] = useState('');

    const onSubmitForm = async (event) => {
        event.preventDefault();

        const { productDescription, productSize, productMaterial } = form.current;

        const newdata = {
            pre_img: preImg,
            post_img: postImg,
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
        <form ref={form} onSubmit={onSubmitForm}>
            <div className={classes.main__section}>
                <p className={classes.detail__product}>Hình ảnh sản phẩm</p>
                <div className={classes.upload__img__container}>
                    <div className={classes.img__section}>
                        <p>Ảnh mặt trước sản phẩm</p>
                        {/* <ButtonCT type="button" className={classes.btn__choose} borderRadius content="Chọn" /> */}
                        {!preImg ? (
                            <label className={classes.btn__choose}>
                                <input
                                    className={classes.input__file}
                                    name="productFrontImage"
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
                                <img width={200} src={preImg} alt="pre_image" />
                                <ButtonCT
                                    type="button"
                                    onClick={() => setPreImage('')}
                                    className={`${classes.btn__choose}`}
                                    content="Hủy"
                                />
                            </>
                        )}
                    </div>
                    <div className={classes.img__section}>
                        <p>Ảnh mặt sau sản phẩm</p>
                        {!postImg ? (
                            <label className={classes.btn__choose}>
                                <input
                                    className={classes.input__file}
                                    name="productBackImage"
                                    type="file"
                                    accept="image/*"
                                    onChange={async (e) => {
                                        const file = await convert2base64(e.target.files[0]);
                                        setPostImage(file);
                                    }}
                                />
                                Chọn
                            </label>
                        ) : (
                            <>
                                <img width={200} src={postImg} alt="post_image" />
                                <ButtonCT
                                    type="button"
                                    onClick={() => setPostImage('')}
                                    className={`${classes.btn__choose}`}
                                    content="Hủy"
                                />
                            </>
                        )}
                    </div>
                </div>
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
                type="submit"
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

export default OptionalDetails;
