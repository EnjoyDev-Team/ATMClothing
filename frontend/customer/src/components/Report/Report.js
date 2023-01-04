import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import classes from './Report.module.scss';

const Report = ({ cardreport, name, comment, img }) => (
        <div>
            <div className={`${classes.container} ${cardreport && classes.cardreport}`}>
                <div className={classes.container__report}>
                    <p className={classes.container__report__content}>{comment}</p>
                    <i className={classes.container__report__icon}><FontAwesomeIcon icon={faQuoteRight} /></i>
                </div>
                <div className={classes.container__information}>
                    <div className={classes.container__information__img}>
                    <img src={img} alt="" />
                    </div>
                    <p className={classes.container__information__name}>{name}</p>
                </div>
            </div>
        </div>
);

Report.propTypes = {
  cardreport: PropTypes.bool,
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
};
Report.defaultProps = {
  cardreport: null,
};

export default Report;
