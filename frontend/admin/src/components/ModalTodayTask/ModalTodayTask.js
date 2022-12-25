/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-equals-spacing */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from './ModalTodayTask.module.scss';

const ModalTodayTask = ({ isShowing, setHide }) => (isShowing
  ? (
        <>
        <div className={classes.modal} onClick={setHide} />
            <div className={classes.container}>
                <FontAwesomeIcon icon={faXmark} onClick={setHide} className={classes.container__icon} />
                <div className={classes.container__title}>
                    <h1>Add Today Task</h1>
                </div>
                <div className={classes.container__body}>
                    <div className={classes.container__body__content}>
                        <label htmlFor="name">
                            Title task
                            <input type="text" name="name" id="name" />
                        </label>
                    </div>
                    <div className={classes.container__body__time}>
                        <label htmlFor="appt">
                        Choose time for your task
                            <input type="time" id="appt" name="appt" required />
                        </label>
                    </div>
                </div>
                <div className={classes.container__btn} onClick={setHide}>
                    <button>Add</button>
                </div>
            </div>
        </>
  ) : null);

ModalTodayTask.propTypes = {

};

export default ModalTodayTask;
