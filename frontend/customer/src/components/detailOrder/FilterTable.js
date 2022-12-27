/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCalendarDays, faHourglass } from '@fortawesome/free-solid-svg-icons';
import classes from './FilterTable.module.scss';

const FilterTable = ({ className }) => (
    <main className={`${classes.filter__table__main} ${className}`}>
        <div className={classes['triangle-left']}>
            <div className={classes['inner-triangle']} />
        </div>
        <div className={classes.right__section}>
            <p className={classes.filter__header}>Bộ lọc</p>
            <hr />
            <div className={classes.search__container}>
                <div className={classes.name__remember}>
                    <input type="text" placeholder="Tìm theo tên gợi nhớ" />
                    {/* <FontAwesomeIcon icon={faChevronDown} /> */}
                </div>
                <div htmlFor="dateTime" className={classes.time__option}>
                    <FontAwesomeIcon icon={faCalendarDays} />
                    <input type="date" id="dateTime" name="date" className={classes.filter__datetime} />
                    {/* <input type="text" placeholder="Thời gian tạo" /> */}
                    {/* Thời gian tạo */}
                    <FontAwesomeIcon className={classes['time__icon-down']} icon={faChevronDown} />
                </div>
                <div className={classes.state__option}>
                    <FontAwesomeIcon icon={faHourglass} />
                    {/* <input type="text" placeholder="Thời gian tạo" /> */}
                    Trạng thái
                    <FontAwesomeIcon icon={faChevronDown} />
                </div>
            </div>
        </div>
    </main>
);

export default FilterTable;
