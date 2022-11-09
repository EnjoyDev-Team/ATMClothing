/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-dupe-keys */
/* eslint-disable indent */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from './SellFormStep2.module.scss';
import BarProgress from '../../components/Services/Form/BarProgress';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';

const SellFormStep2 = ({ content }) => (
    <main>
        <div className={classes.formContainer}>
            <h3 className={classes.formHeader}>
                {content}
                <FontAwesomeIcon icon={faArrowRight} className={classes.icon__arrow} />
                THÊM SẢN PHẨM
            </h3>
            <div>
                <BarProgress type="state2" />
            </div>
            <p className={classes.detail__product}>Hình ảnh sản phẩm</p>
            <div className={classes.upload__img__container}>
                <div className={classes.img__section}>
                    <p>Ảnh trước mặt sản phẩm</p>

                    <ButtonCT
                        // eslint-disable-next-line react/jsx-indent-props
                        style={{
                            marginTop: '1rem',
                            width: '140px',
                            height: '40px',
                            // borderRadius: '50px',
                            marginTop: '5rem',
                        }}
                        className={classes.btn__choose}
                        borderRadius
                        content="Chọn"
                    />
                </div>
                <div className={classes.img__section}>
                    <p>Ảnh trước sau sản phẩm</p>

                    <ButtonCT
                        // eslint-disable-next-line react/jsx-indent-props
                        style={{
                            marginTop: '1rem',
                            width: '140px',
                            height: '40px',
                            // borderRadius: '50px',
                            marginTop: '5rem',
                        }}
                        className={classes.btn__choose}
                        borderRadius
                        content="Chọn"
                    />
                </div>
            </div>
            <p className={classes.detail__product}>Mô tả sản phẩm</p>
            <textarea className={classes.description__input} rows="5" cols="93" placeholder="Mô tả..." />
            <p className={classes.detail__product}>Thông tin sản phẩm</p>
            <div className={classes.input__container}>
                <div className={classes.input__container}>
                    <input className={classes.input__material} placeholder="Chất liệu" required />
                    <FontAwesomeIcon icon={faChevronDown} className={classes.icon} />
                </div>
                <input className={classes.input__size} placeholder="Kích cỡ (Ví dụ: S, XL, 29, 30...)" required />
            </div>
            <div className={classes.btn__continue}>
                <ButtonCT
                    style={{
                        marginTop: '1rem',
                        width: '140px',
                        height: '40px',
                        borderRadius: '50px',
                        marginLeft: '100rem',
                        marginTop: '5rem',
                        fontSize: '1.6rem',
                    }}
                    // className={classes.button__choose}
                    greenLinear
                    content="Hoàn tất"
                />
            </div>
        </div>
    </main>
);

export default SellFormStep2;
