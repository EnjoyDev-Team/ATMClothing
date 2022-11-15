/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classes from './DonateFormStep1.module.scss';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import StateItem from '../../../../components/Services/Form/StateItem';

const DonateFormStep1 = () => (
    <main>
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
        <div className={classes.main__section}>
            <span className={classes.stateHeader}>
                <span>Tình trạng </span>
                <font color="red">*</font>
            </span>
            <div className={classes.radio__check}>
                {/* <div className={classes.radio__item}>
                        <div className={classes.radio__tick} />
                        <p className={classes.radio__content}>
                            <b>Mới</b>
                            (Hàng mới kèm mác, chưa mở hộp/bao bì, chưa qua sử dụng.)
                        </p>
                    </div> */}
                <StateItem content="Mới" description="Hàng mới kèm mác, chưa mở hộp/bao bì, chưa qua sử dụng." />
                <StateItem content="Như mới" description="Hàng mới kèm mác, đã mở bao bì/hộp, chưa qua sử dụng." />
                <StateItem content="Tốt" description="Đã qua sử dụng, tính năng đầy đủ, hoạt động tốt." />
                <StateItem
                    content="Trung bình"
                    description="Hàng đã qua sử dụng, đầy đủ chức năng. Nhiều sai sót hoặc lỗi nhỏ."
                />
                <StateItem content="Kém" description="Đã qua sử dụng. Nhiều sai sót. Có thể bị hư hỏng" />
            </div>
        </div>
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
    </main>
);

export default DonateFormStep1;
