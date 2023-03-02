import React from 'react';
import classes from './ActivityHistory.module.scss';
import HistoryItem from './HistoryItem';

const ActivityHistory = () => (
        <main className={classes.activity__history__main}>
            <p className={classes.title}>Activity History</p>
            <div className={classes.title__bar}>
                <p>No.</p>
                <p>Name active</p>
                <p>Time frame</p>
                <p>Description</p>
            </div>
            <div className={classes.history__item}>
                <HistoryItem />
            </div>
        </main>
);

export default ActivityHistory;
