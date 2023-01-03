/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useEffect } from 'react';
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
import useAxios from '../../hooks/useAxios';

const DashboardAdmin = () => {
  const { isShowing, toggle } = useModal();
  const { isShowing: isShowingSchedule, toggle: toggleSchedule } = useModal();
  const [valueProduct, setValueProduct] = useState(0);
  const [percentProduct, setPercentProduct] = useState('');
  const [statusProduct, setStatusProduct] = useState('');
  const [valueImportCost, setValueImportCost] = useState(0);
  const [percentImportCost, setPercentImportCost] = useState('');
  const [statusImportCost, setStatusImportCost] = useState('');
  const [valueBudget, setValueBudget] = useState(0);
  const [percentBudget, setPercentBudget] = useState('');
  const [statusBudget, setStatusBudget] = useState('');
  const [valueCustomer, setValueCustomer] = useState(0);
  const [percentCustomer, setPercentCustomer] = useState('');
  const [statusCustomer, setStatusCustomer] = useState('');
  const [responseProduct] = useAxios('get', '/income', {}, {}, []);
  const [responseImportCost] = useAxios('get', '/income', {}, {}, []);
  const [responseBudget] = useAxios('get', '/income', {}, {}, []);
  const [responseCustomer] = useAxios('get', '/income', {}, {}, []);
  useEffect(() => {
    setValueProduct(responseProduct.income !== undefined && responseProduct.income.productTotal);
    setPercentProduct(responseProduct.income !== undefined && responseProduct.income.product_total_message.split(' ')[0]);
    setStatusProduct(responseProduct.income !== undefined && responseProduct.income.product_total_message.split(' ')[1]);
    console.log(statusProduct);
  }, [responseProduct]);
  useEffect(() => {
    setValueImportCost(responseImportCost.income !== undefined && responseImportCost.income.importTotal);
    setPercentImportCost(responseImportCost.income !== undefined && responseImportCost.income.import_total_message.split(' ')[0]);
    setStatusImportCost(responseImportCost.income !== undefined && responseImportCost.income.import_total_message.split(' ')[1]);
  }, [responseImportCost]);
  useEffect(() => {
    setValueBudget(responseBudget.income !== undefined && responseBudget.income.priceTotal);
    setPercentBudget(responseBudget.income !== undefined && responseBudget.income.price_total_message.split(' ')[0]);
    setStatusBudget(responseBudget.income !== undefined && responseBudget.income.price_total_message.split(' ')[1]);
  }, [responseBudget]);
  useEffect(() => {
    setValueCustomer(responseCustomer.income !== undefined && responseCustomer.income.userTotal);
    setPercentCustomer(responseCustomer.income !== undefined && responseCustomer.income.user_total_message.split(' ')[0]);
    setStatusCustomer(responseCustomer.income !== undefined && responseCustomer.income.user_total_message.split(' ')[1]);
  }, [responseCustomer]);
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
                    <Revenue title="NEW CUSTOMERS" redbackgroud value={valueCustomer} percent={percentCustomer} status={statusCustomer} icon={statusCustomer === 'INCREASE' ? faCircleUp : faCircleDown} />
            </div>
            <div className={classes.listrevenue__revenue}>
                <Revenue title="TOTAL BUDGET" orangebackgroud dollar="$" value={valueBudget} percent={percentBudget} status={statusBudget} icon={statusBudget === 'INCREASE' ? faCircleUp : faCircleDown} />
            </div>
            <div className={classes.listrevenue__revenue}>
                <Revenue title="TOTAL IMPORT COST" greenbackgroud dollar="$" value={valueImportCost} percent={percentImportCost} status={statusImportCost} icon={statusImportCost === 'INCREASE' ? faCircleUp : faCircleDown} />
            </div>
            <div className={classes.listrevenue__revenue}>
                <Revenue title="alL PRODUCTS" value={valueProduct} percent={percentProduct} status={statusProduct} icon={statusProduct === 'INCREASE' ? faCircleUp : faCircleDown} />
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
