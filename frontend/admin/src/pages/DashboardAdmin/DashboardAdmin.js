/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus, faCircleUp, faCircleDown, faCalendarXmark } from '@fortawesome/free-solid-svg-icons';
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin';
import classes from './DashboardAdmin.module.scss';
import NavigationAdmin from '../../components/NavigationAdmin/NavigationAdmin';
import Revenue from '../../components/Revenue/Revenue';
import Schedule from '../../components/Schedule/Schedule';
import ModalTodayTask from '../../components/ModalTodayTask/ModalTodayTask';
import ModalSchedule from '../../components/ModalSchedule/ModalSchedule';
import useModal from '../../hooks/useModal';

const DashboardAdmin = () => {
  const [addTitle, setAddTitle] = useState(false);
  const { isShowing, toggle } = useModal();
  const { isShowing: isShowingSchedule, toggle: toggleSchedule } = useModal();

  return (
        <div>
        <div className={classes.header}>
                <HeaderAdmin />
        </div>
        <div className={classes.navigation}>
            <NavigationAdmin />
        </div>
        <div className={classes.listrevenue}>
            <div className={classes.listrevenue__revenue}>
                <Revenue title="NEW CUSTOMERS" redbackgroud status="Decrease" icon={faCircleDown} />
            </div>
            <div className={classes.listrevenue__revenue}>
                <Revenue title="TOTAL BUDGET" orangebackgroud status="Decrease" icon={faCircleDown} />
            </div>
            <div className={classes.listrevenue__revenue}>
                <Revenue title="TOTAL IMPORT COST" greenbackgroud status="increase" icon={faCircleUp} />
            </div>
            <div className={classes.listrevenue__revenue}>
                <Revenue title="alL PRODUCTS" status="increase" icon={faCircleUp} />
            </div>
        </div>
        <div className={classes.futureplan}>
            <h1 className={classes.futureplan__title}>future plan</h1>
            <div className={classes.futureplan__container}>
                <div className={classes.futureplan__container__todaytask}>
                    <div className={classes.content}>
                        <h3 className={classes.content__titletodaytask}>today task</h3>
                        <i onClick={toggle}><FontAwesomeIcon icon={faCirclePlus} /></i>
                        <ModalTodayTask isShowing={isShowing} setHide={toggle} />
                    </div>
                    <div className={classes.listtask}>
                        <div className={classes.listtask__component}>
                            <div className={classes.listtask__component__checkbox}>
                                <input type="checkbox" />
                                <p>9:30 AM - Tạo cuộc họp nội bộ</p>
                            </div>
                            <FontAwesomeIcon icon={faCalendarXmark} className={classes.listtask__component__icon} />
                        </div>
                        <div className={classes.listtask__component}>
                            <div className={classes.listtask__component__checkbox}>
                                <input type="checkbox" />
                                <p>9:30 AM - Tạo cuộc họp nội bộ asdasd asd asd a da sda sd asd asd asd as das d asd asd asd asd asd asd a</p>
                            </div>
                            <FontAwesomeIcon icon={faCalendarXmark} className={classes.listtask__component__icon} />
                        </div>
                        <div className={classes.listtask__component}>
                            <div className={classes.listtask__component__checkbox}>
                                <input type="checkbox" />
                                <p>9:30 AM - Tạo cuộc họp nội bộ</p>
                            </div>
                            <FontAwesomeIcon icon={faCalendarXmark} className={classes.listtask__component__icon} />
                        </div>
                        <div className={classes.listtask__component}>
                            <div className={classes.listtask__component__checkbox}>
                                <input type="checkbox" />
                                <p>9:30 AM - Tạo cuộc họp nội bộ</p>
                            </div>
                            <FontAwesomeIcon icon={faCalendarXmark} className={classes.listtask__component__icon} />
                        </div>
                        <div className={classes.listtask__component}>
                            <div className={classes.listtask__component__checkbox}>
                                <input type="checkbox" />
                                <p>9:30 AM - Tạo cuộc họp nội bộ</p>
                            </div>
                            <FontAwesomeIcon icon={faCalendarXmark} className={classes.listtask__component__icon} />
                        </div>
                        <div className={classes.listtask__component}>
                            <div className={classes.listtask__component__checkbox}>
                                <input type="checkbox" />
                                <p>9:30 AM - Tạo cuộc họp nội bộ</p>
                            </div>
                            <FontAwesomeIcon icon={faCalendarXmark} className={classes.listtask__component__icon} />
                        </div>
                        <div className={classes.listtask__component}>
                            <div className={classes.listtask__component__checkbox}>
                                <input type="checkbox" />
                                <p>9:30 AM - Tạo cuộc họp nội bộ</p>
                            </div>
                            <FontAwesomeIcon icon={faCalendarXmark} className={classes.listtask__component__icon} />
                        </div>
                    </div>

                </div>
                <div className={classes.futureplan__container__schedule}>
                    <div className={classes.futureplan__container__schedule__content}>
                        <h3 className={classes.titleschedule}>SCHEDULE</h3>
                        <i onClick={toggleSchedule}><FontAwesomeIcon icon={faCirclePlus} /></i>
                        <ModalSchedule isShowing={isShowingSchedule} setHide={toggleSchedule} />
                    </div>
                    <div className={classes.futureplan__container__schedule__listschedule}>
                        <div className={classes.futureplan__container__schedule__listschedule__schedule}>
                            <Schedule />
                        </div>
                        <div className={classes.futureplan__container__schedule__listschedule__schedule}>
                            <Schedule />
                        </div>
                        <div className={classes.futureplan__container__schedule__listschedule__schedule}>
                            <Schedule />
                        </div>
                        <div className={classes.futureplan__container__schedule__listschedule__schedule}>
                            <Schedule />
                        </div>
                        <div className={classes.futureplan__container__schedule__listschedule__schedule}>
                            <Schedule />
                        </div>
                        <div className={classes.futureplan__container__schedule__listschedule__schedule}>
                            <Schedule />
                        </div>
                        <div className={classes.futureplan__container__schedule__listschedule__schedule}>
                            <Schedule />
                        </div>
                        <div className={classes.futureplan__container__schedule__listschedule__schedule}>
                            <Schedule />
                        </div>
                        <div className={classes.futureplan__container__schedule__listschedule__schedule}>
                            <Schedule />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  );
};

DashboardAdmin.propTypes = {

};

export default DashboardAdmin;
