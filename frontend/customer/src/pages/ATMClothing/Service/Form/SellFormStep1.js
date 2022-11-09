/* eslint-disable no-dupe-keys */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from './SellFormStep1.module.scss';
import State from '../../components/Services/Form/State';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import BarProgress from '../../components/Services/Form/BarProgress';

const SellFormStep1 = () => (
    <main>
        <div className={classes.formContainer}>
            <h3 className={classes.formHeader}>
                BÁN SẢN PHẨM
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

                        <label htmlFor="priceSuggested">
                            Giá bạn đề xuất cho sản phẩm này:
                            <br />
                            <input className={classes.input2} placeholder="Nhập giá đề xuất" required />
                            <br />
                        </label>
                    </div>
                </div>
            </form>

            <div className={classes.stateSection}>
                <State />
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
        </div>
    </main>
);

export default SellFormStep1;
