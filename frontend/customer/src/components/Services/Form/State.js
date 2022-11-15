import React from 'react';
import classes from './State.module.scss';

const State = () => (
    <div className={classes.state}>
        <span className={classes.stateHeader}>
            <span>Tình trạng </span>
            <font color="red">*</font>
        </span>
        <div className={classes.stateContainer}>
            <div className={classes.stateBox}>
                <div className={classes.stateContent}>Mới</div>
                <div className={classes.stateDescription}>Hàng mới kèm mác, chưa mở hộp/bao bì, chưa qua sử dụng.</div>
            </div>
            <div className={classes.stateBox}>
                <div className={classes.stateContent}>Như mới</div>
                <div className={classes.stateDescription}>Hàng mới kèm mác, đã mở bao bì/hộp, chưa qua sử dụng.</div>
            </div>
            <div className={classes.stateBox}>
                <div className={classes.stateContent}>Tốt</div>
                <div className={classes.stateDescription}>Đã qua sử dụng, tính năng đầy đủ, hoạt động tốt.</div>
            </div>
            <div className={classes.stateBox}>
                <div className={classes.stateContent}>Trung bình</div>
                <div className={classes.stateDescription}>
                    Hàng đã qua sử dụng, đầy đủ chức năng. Nhiều sai sót hoặc lỗi nhỏ.
                </div>
            </div>
            <div className={classes.stateBox}>
                <div className={classes.stateContent}>Kém</div>
                <div className={classes.stateDescription}>Đã qua sử dụng. Nhiều sai sót. Có thể bị hư hỏng.</div>
            </div>
        </div>
    </div>
);

export default State;
