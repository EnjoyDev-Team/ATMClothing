/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-dupe-keys */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from './CustomFormStep1.module.scss';
import State from '../../components/Services/Form/State';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import BarProgress from '../../components/Services/Form/BarProgress';

const CustomFormStep1 = () => (
    <main>
        <div className={classes.formContainer}>
            <h3 className={classes.formHeader}>
                CUSTOM SẢN PHẨM
                <FontAwesomeIcon icon={faArrowRight} className={classes.icon__arrow} />
                THÊM SẢN PHẨM
            </h3>
            <div>
                <BarProgress type="state1" />
            </div>
            <form className={classes.inputSection} action="">
                <div className={classes.leftSection}>
                    <div className={classes.input}>
                        <label htmlFor="productName">
                            Tên sản phẩm:
                            <br />
                            <input className={classes.input2} placeholder="Nhập tên sản phẩm..." required />
                            <br />
                        </label>

                        <label htmlFor="menu">
                            Danh mục:
                            <br />
                            <div className={classes.input__dropdown}>
                                <input className={classes.input2} placeholder="Danh mục" required />
                                <FontAwesomeIcon icon={faChevronDown} className={classes.icon} />
                            </div>
                            <br />
                        </label>
                    </div>
                </div>

                <div className={classes.rightSection}>
                    <div className={classes.input}>
                        <label htmlFor="quantity">
                            Số lượng hàng hiện có:
                            <br />
                            <input className={classes.input2} placeholder="Nhập số lượng" required />
                            <br />
                        </label>
                    </div>
                </div>
            </form>

            <div className={classes.stateSection}>
                <State />
            </div>
            <div className={classes.custom__idea}>
                <p>Mô tả ý tưởng bạn muốn custom</p>
                <textarea className={classes.description__input} rows="5" cols="93" />
            </div>

            <div className={classes.custom__idea2}>
                <p>Thêm liên kết hoặc hình ảnh ý tưởng bạn muốn custom </p>
                <div className={classes.upload__img__container}>
                    <div className={classes.img__section}>
                        <p>Hình ảnh ý tưởng</p>

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
                    <div>
                        <textarea className={classes.link__input} rows="20" cols="70" />
                    </div>
                </div>
            </div>

            <ButtonCT
                style={{
                    marginTop: '1rem',
                    width: '140px',
                    height: '40px',
                    borderRadius: '50px',
                    marginLeft: 'auto',
                    marginTop: '5rem',
                    marginRight: '5rem',
                    fontSize: '1.6rem',
                }}
                // className={classes.button__choose}
                greenLinear
                content="Tiếp tục"
            />
        </div>
    </main>
);

export default CustomFormStep1;
