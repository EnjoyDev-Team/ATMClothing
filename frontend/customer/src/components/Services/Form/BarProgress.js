/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from './BarProgress.module.scss';

const progressions = [
  ['Thông tin sản phẩm', '(bắt buộc)'],
  ['Chi tiết sản phẩm', '(không bắt buộc)'],
  ['Xử lý thêm sản phẩm', '\u00A0'],
  ['Hoàn tất', '\u00A0'],
];

const BarProgress = ({ step = 0, success = true }) => (
    <div className={classes.progress__bar}>
        <div className={classes.rectangle__bar} />
        {progressions.map((el, index) => (
            <React.Fragment key={el.join('_')}>
                <div className={classes.status}>
                    <div
                      className={`${classes.dot}${
                        index <= step
                          ? step !== progressions.length - 1 && index === step
                            ? ` ${classes.inprogress}`
                            : ` ${step === index
                                && index === progressions.length - 1
                                && !success ? classes.fail : classes.active}`
                          : ''
                      }`}
                    >
                        {index < step || step === progressions.length - 1 ? (
                            <FontAwesomeIcon
                              icon={(step === index
                                && index === progressions.length - 1
                                && !success)
                                ? faXmark : faCheck}
                            />
                        ) : (
                          index + 1
                        )}
                    </div>
                    <div className={classes.status__title}>
                        {el.map((elc) => (
                            <div key={elc}>{elc}</div>
                        ))}
                    </div>
                </div>
                {index < progressions.length - 1 && (
                    <div className={`${classes.rectangle__bar__item}${index < step ? ` ${classes.active}` : ''}`} />
                )}
            </React.Fragment>
        ))}
    </div>
);

export default BarProgress;
