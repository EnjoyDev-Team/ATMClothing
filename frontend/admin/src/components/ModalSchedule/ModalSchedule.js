/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import classes from './ModalSchedule.module.scss';
import NameAdmin from '../NameAdmin/NameAdmin';

const ModalSchedule = ({ isShowing, setHide }) => {
  const [isShow, setState] = useState(false);
  function showListMember() {
    setState(pre => !pre);
  }
  return isShowing
    ? (
        <>
            <div className={classes.modal} onClick={setHide} />
            <div className={classes.container}>
                <FontAwesomeIcon icon={faXmark} onClick={setHide} className={classes.container__icon} />
                <div className={classes.container__title}>
                    <h1>Add Schedule</h1>
                </div>
                <div className={classes.container__body}>
                    <div className={classes.container__body__content}>
                        <label htmlFor="name">
                            Title schedule
                            <input type="text" name="name" id="name" />
                        </label>
                    </div>
                    <div className={classes.container__body__date}>
                        <label htmlFor="start">
                            Choose date
                            <input
                              type="date"
                              id="start"
                              name="trip-start"
                            //   value="2018-07-22"
                              min="2020-01-01"
                            />
                        </label>
                    </div>
                    <div className={classes.container__body__time}>
                        <label htmlFor="appt">
                            Choose time
                            <input type="time" id="appt" name="appt" required />
                        </label>
                    </div>
                    <div className={classes.container__body__addmember}>
                        <h3 className={classes.titleaddmember}>Add member attend:</h3>
                        <div className={classes.listname}>
                                <div className={classes.name}><NameAdmin /></div>
                                <div className={classes.name}><NameAdmin /></div>
                                <div className={classes.name}><NameAdmin /></div>
                                <div className={classes.name}><NameAdmin /></div>
                        </div>
                        <div className={classes.listmember}>
                            <button onClick={showListMember}>Danh sách nhân viên</button>
                            {
                                isShow ? (
                                    <div className={classes.listmember__containerlistmember}>
                                        <div className={classes.listmember__containerlistmember__member}>
                                            <h3>Trần Mạnh Khương</h3>
                                            <FontAwesomeIcon icon={faCirclePlus} className={classes.iconplus} />
                                        </div>
                                        <div className={classes.listmember__containerlistmember__member}>
                                            <h3>Trần Hữu Chính</h3>
                                            <FontAwesomeIcon icon={faCirclePlus} className={classes.iconplus} />
                                        </div>
                                        <div className={classes.listmember__containerlistmember__member}>
                                            <h3>Trần Duy Khương</h3>
                                            <FontAwesomeIcon icon={faCirclePlus} className={classes.iconplus} />
                                        </div>
                                        <div className={classes.listmember__containerlistmember__member}>
                                            <h3>Trần Nguyên Phong</h3>
                                            <FontAwesomeIcon icon={faCirclePlus} className={classes.iconplus} />
                                        </div>
                                        <div className={classes.listmember__containerlistmember__member}>
                                            <h3>Nguyễn Đức Minh</h3>
                                            <FontAwesomeIcon icon={faCirclePlus} className={classes.iconplus} />
                                        </div>
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>
                </div>
                <div className={classes.container__btn} onClick={setHide}>
                    <button>Add</button>
                </div>
            </div>
        </>
    ) : null;
};

ModalSchedule.propTypes = {

};

export default ModalSchedule;
