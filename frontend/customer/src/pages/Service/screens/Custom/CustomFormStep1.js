/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-dupe-keys */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from './CustomFormStep1.module.scss';
import State from '../../../../components/Services/Form/State';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import BarProgress from '../../../../components/Services/Form/BarProgress';

const CustomFormStep1 = () => (
    <form>
        <div className={classes.inputSection}>
            <div className={classes.leftSection}>
                <label>
                    <span>
                        <span>Tên sản phẩm </span>
                        <font color="red">*</font>
                    </span>
                    <input className={classes.input2} placeholder="Nhập tên sản phẩm..." required />
                </label>
                <label>
                    <span>
                        <span>Danh mục </span>
                        <font color="red">*</font>
                    </span>
                    <div className={classes.input__dropdown}>
                        <input
                            type="text"
                            readOnly
                            className={classes.input2}
                            placeholder="Danh mục"
                            required
                        />
                        <FontAwesomeIcon icon={faChevronDown} className={classes.icon} />
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
            </div>
        </div>
        <State />
        <div className={classes.main__section}>
            <span className={classes.detail__product}>
                <span>Mô tả ý tưởng bạn muốn custom</span>
                <font color="red"> *</font>
            </span>
            <textarea className={classes.description__input} rows="6" cols="93" placeholder="Mô tả..." />
            <p className={classes.detail__product}>Thêm liên kết hoặc hình ảnh ý tưởng bạn muốn custom</p>
            <div className={classes.upload__img__container}>
                <div className={classes.img__section}>
                    <p>Hình ảnh ý tưởng</p>
                    <ButtonCT
                        type="button"
                        // eslint-disable-next-line react/jsx-indent-props
                        className={classes.btn__choose}
                        borderRadius
                        content="Chọn"
                    />
                </div>
                <textarea className={classes.link__input} rows="6" cols="93" placeholder="Liên kết..." />
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

export default CustomFormStep1;
