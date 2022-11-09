/* eslint-disable no-constant-condition */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faX } from '@fortawesome/free-solid-svg-icons';
import classes from './BarProgress.module.scss';

const BarProgress = ({ type }) => (
    // const { step1, step2, step3, step4 } = props;

    <div className={classes.bar__progress__container}>
        <div className={classes.bar__progress}>
            <div className={`${classes.dot} ${classes.green}`}>
                {/* {type} */}
                <FontAwesomeIcon
                    // { type } === 'state1' ? { faCheck } : {}
                    icon={
                        type === 'state2' || type === 'state3' || type === 'state4' || type === 'state5' ? faCheck : ''
                    }
                    className={`${classes.bar__progress__icon} ${classes.green}`}
                />
            </div>
            <div
                className={
                    type === 'state2' || type === 'state3' || type === 'state4' || type === 'state5'
                        ? `${classes.rectangle} ${classes.green}`
                        : `${classes.rectangle}`
                }
            />
            <div
                className={
                    type === 'state2' || type === 'state3' || type === 'state4' || type === 'state5'
                        ? `${classes.dot} ${classes.green}`
                        : `${classes.dot}`
                }
            >
                <FontAwesomeIcon
                    // { type } === 'state1' ? { faCheck } : {}
                    icon={type === 'state3' || type === 'state4' || type === 'state5' ? faCheck : ''}
                    className={`${classes.bar__progress__icon} ${classes.green}`}
                />
            </div>
            <div
                className={
                    type === 'state3' || type === 'state4' || type === 'state5'
                        ? `${classes.rectangle} ${classes.green}`
                        : `${classes.rectangle}`
                }
            />
            <div
                className={
                    type === 'state3' || type === 'state4' || type === 'state5'
                        ? `${classes.dot} ${classes.green}`
                        : `${classes.dot}`
                }
            >
                <FontAwesomeIcon
                    // { type } === 'state1' ? { faCheck } : {}
                    icon={type === 'state4' || type === 'state5' ? faCheck : ''}
                    className={`${classes.bar__progress__icon} ${classes.green}`}
                />
            </div>
            <div
                className={
                    type === 'state4' || type === 'state5'
                        ? `${classes.rectangle} ${classes.green}`
                        : `${classes.rectangle}`
                }
            />
            <div
                className={
                    type === 'state4'
                        ? `${classes.dot} ${classes.green}`
                        : type === 'state5'
                        ? `${classes.dot} ${classes.red}`
                        : `${classes.dot}`
                }
            >
                <FontAwesomeIcon
                    // { type } === 'state1' ? { faCheck } : {}
                    icon={type === 'state4' ? faCheck : type === 'state5' ? faX : ''}
                    className={
                        type === 'state4'
                            ? `${classes.bar__progress__icon} ${classes.green}`
                            : type === 'state5'
                            ? `${classes.x__icon} ${classes.red}`
                            : ''
                    }
                />
            </div>
        </div>

        <div className={classes.bar__progress__step__container}>
            <div className={classes.bar__progress__step}>
                Thông tin sản phẩm
                <br />
                (bắt buộc)
            </div>
            <div className={classes.bar__progress__step}>
                Chi tiết sản phẩm
                <br />
                (không bắt buộc)
            </div>
            <div className={classes.bar__progress__step}>Xử lý thêm sản phẩm</div>
            <div className={classes.bar__progress__step}>Hoàn tất</div>
        </div>
    </div>
);
// </main>
export default BarProgress;
