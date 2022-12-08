import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin';
import classes from './DashboardAdmin.module.scss';
import NavigationAdmin from '../../components/NavigationAdmin/NavigationAdmin';
import Revenue from '../../components/Revenue/Revenue';

const DashboardAdmin = () => (
        <div>
            {/* <div className={classes.header}>
                <HeaderAdmin />
            </div>
            <div className={classes.navigation}>
                <NavigationAdmin />
            </div>
            <div className={classes.listrevenue}>
                <div className={classes.listrevenue__revenue}>
                    <Revenue />
                </div>
                <div className={classes.listrevenue__revenue}>
                    <Revenue />
                </div>
                <div className={classes.listrevenue__revenue}>
                    <Revenue />
                </div>
                <div className={classes.listrevenue__revenue}>
                    <Revenue />
                </div>
            </div> */}
            <div className={classes.futureplan}>
                <h1 className={classes.futureplan__title}>future plan</h1>
                <div className={classes.futureplan__container}>
                    <div className={classes.futureplan__container__todaytask}>
                        <div className={classes.futureplan__container__todaytask__content}>
                            <h3>today task</h3>
                            <div>
                                <i><FontAwesomeIcon icon={faCirclePlus} /></i>
                            </div>
                        </div>
                        <div className={classes.futureplan__container__todaytask__component}>
                            <input type="checkbox" />
                            <p>9:30 AM - Tạo cuộc họp nội bộ</p>
                        </div>
                        <div className={classes.futureplan__container__todaytask__component}>
                            <input type="checkbox" />
                            <p>9:30 AM - Tạo cuộc họp nội bộ</p>
                        </div>
                        <div className={classes.futureplan__container__todaytask__component}>
                            <input type="checkbox" />
                            <p>9:30 AM - Tạo cuộc họp nội bộ</p>
                        </div>
                        <div className={classes.futureplan__container__todaytask__component}>
                            <input type="checkbox" />
                            <p>9:30 AM - Tạo cuộc họp nội bộ</p>
                        </div>
                    </div>
                    <div className={classes.futureplan__container__schedule}>
                        <div className={classes.futureplan__container__todaytask__content}>
                                <h3>today task</h3>
                                <i><FontAwesomeIcon icon={faCirclePlus} /></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
);

DashboardAdmin.propTypes = {

};

export default DashboardAdmin;
