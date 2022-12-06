import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import classes from './Report.module.scss';
import img from '../../assets/imgs/sliderImage/avatar.jpg';

const Report = ({ cardreport }) => (
        <div>
            <div className={`${classes.container} ${cardreport && classes.cardreport}`}>
                <div className={classes.container__report}>
                    <p className={classes.container__report__content}>Rất tiện lợi, tận dụng được những bộ trang phục, ý nghĩ quá</p>
                    <i className={classes.container__report__icon}><FontAwesomeIcon icon={faQuoteRight} /></i>
                </div>
                <div className={classes.container__information}>
                    <div className={classes.container__information__img}>
                    <img src={img} alt="" />
                    </div>
                    <p className={classes.container__information__name}>Áo Nam</p>
                </div>
            </div>
        </div>
);

Report.propTypes = {
  cardreport: PropTypes.bool,

};
Report.defaultProps = {
  cardreport: null,
};

export default Report;
