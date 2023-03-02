/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './Revenue.module.scss';

const Revenue = (props) => {
  const {
    title,
    greenbackgroud,
    redbackgroud,
    orangebackgroud,
    icon,
    status,
    value,
    percent,
    dollar,
  } = props;

  const classProps = Object.keys(props)
    .map((el) => (classes[el] && props[el] === true ? classes[el] : ''))
    .join(' ');
  return (
        <div>
            <div className={`${classes.container} ${classProps}`}>
                <div className={classes.container__message}>
                    <div className={classes.container__message__content}>
                        <p>{title}</p>
                        <h2>
                          {dollar}
{value}
                        </h2>
                    </div>
                    <div className={classes.container__message__icon}>
                        <i><FontAwesomeIcon icon={icon} /></i>
                    </div>
                </div>
                <div className={classes.container__status}>
                    <p>
                    {percent}
{' '}
{status}
                    </p>
                </div>
            </div>
        </div>
  );
};

Revenue.propTypes = {

};

export default Revenue;
