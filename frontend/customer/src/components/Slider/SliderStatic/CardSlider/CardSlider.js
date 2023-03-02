import React from 'react';
import PropTypes from 'prop-types';
import classes from './CardSlider.module.scss';

const CardSlider = ({ Details }) => (
    <div className={classes.cardslider}>
        <div className={classes.cardslider__img}>
            <img src={Details.img} alt="" />
        </div>
        <div className={classes.cardslider__container}>
            <p className={classes.cardslider__container__content}>{Details.content}</p>
            <p className={classes.cardslider__container__date}>{Details.date}</p>
        </div>
    </div>
);

CardSlider.propTypes = {
  Details: PropTypes.shape({
    img: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }),
};
CardSlider.defaultProps = {
  Details: {},
};

export default CardSlider;
