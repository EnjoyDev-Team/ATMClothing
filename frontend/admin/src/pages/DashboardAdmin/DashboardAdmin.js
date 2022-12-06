import React from 'react';
import PropTypes from 'prop-types';
import HeaderAdmin from '../../components/HeaderAdmin/HeaderAdmin';
import classes from './DashboardAdmin.module.scss';
import NavigationAdmin from '../../components/NavigationAdmin/NavigationAdmin';
import Revenue from '../../components/Revenue/Revenue';

const DashboardAdmin = () => (
        <div>
            <div className={classes.header}>
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
            </div>
        </div>
);

DashboardAdmin.propTypes = {

};

export default DashboardAdmin;
