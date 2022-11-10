/* eslint-disable no-dupe-keys */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import BarProgress from '../../components/Services/Form/BarProgress';
import classes from './DonateFormStep1.module.scss';
import State from '../../components/Services/Form/State';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import StateItem from '../../components/Services/Form/StateItem';

const DonateFormStep1 = () => (
    <main>
        <div className={classes.formContainer}>
            <h3 className={classes.formHeader}>
                TẶNG SẢN PHẨM
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
            <div className={classes.product}>
                <p className={classes.stateHeader}>Tình trạng</p>
                <div className={classes.radio__check}>
                    {/* <div className={classes.radio__item}>
                        <div className={classes.radio__tick} />
                        <p className={classes.radio__content}>
                            <b>Mới</b>
                            (Hàng mới kèm mác, chưa mở hộp/bao bì, chưa qua sử dụng.)
                        </p>
                    </div> */}
                    <StateItem content="Mới " description="Hàng mới kèm mác, chưa mở hộp/bao bì, chưa qua sử dụng." />
                    <StateItem content="Như mới " description="Hàng mới kèm mác, đã mở bao bì/hộp, chưa qua sử dụng." />
                    <StateItem content="Tốt " description="Đã qua sử dụng, tính năng đầy đủ, hoạt động tốt." />
                    <StateItem
                        content="Trung bình "
                        description="Hàng đã qua sử dụng, đầy đủ chức năng. Nhiều sai sót hoặc lỗi nhỏ."
                    />
                    <StateItem content="Kém " description="Đã qua sử dụng. Nhiều sai sót. Có thể bị hư hỏng" />
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

export default DonateFormStep1;
