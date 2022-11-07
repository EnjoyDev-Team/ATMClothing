import React from 'react';
import classes from './State.module.scss';

const State = () => (
    <main>
        <p className={classes.stateHeader}>Tình trạng</p>
        <div className={classes.stateContainer}>
            <div className={classes.stateBox}>
                <p className={classes.stateContent}>Mới</p>
                <p className={classes.stateDescription}>Hàng mới kèm mác, chưa mở hộp/bao bì, chưa qua sử dụng.</p>
            </div>
            <div className={classes.stateBox}>
                <p className={classes.stateContent}>Như mới</p>
                <p className={classes.stateDescription}>Hàng mới kèm mác, đã mở bao bì/hộp, chưa qua sử dụng.</p>
            </div>
            <div className={classes.stateBox}>
                <p className={classes.stateContent}>Tốt</p>
                <p className={classes.stateDescription}>Đã qua sử dụng, tính năng đầy đủ, hoạt động tốt.</p>
            </div>
            <div className={classes.stateBox}>
                <p className={classes.stateContent}>Trung bình</p>
                <p className={classes.stateDescription}>
                    Hàng đã qua sử dụng, đầy đủ chức năng. Nhiều sai sót hoặc lỗi nhỏ.
                </p>
            </div>
            <div className={classes.stateBox}>
                <p className={classes.stateContent}>Kém</p>
                <p className={classes.stateDescription}>Đã qua sử dụng. Nhiều sai sót. Có thể bị hư hỏng.</p>
            </div>
        </div>
    </main>
);

export default State;
