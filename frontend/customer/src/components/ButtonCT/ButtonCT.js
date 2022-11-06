/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { LoadingDonut } from '../Loading/Loading';
import classes from './ButtonCT.module.scss';

const ButtonCT = (props) => {
  const {
    content,
    iconLeft,
    iconRight,
    loading,

    disabled,
    block,
    large,
    medium,
    small,

    borderRadius,
    outlineBtn,

    primary,
    redLinear,
    greenLinear,

    ...passProps
  } = props;

  const classProps = Object.keys(props).map((el) => (
    classes[el] && props[el] === true ? classes[el] : '')).join(' ');

  return (
    <button
      className={`
      ${classes['my-btn']}
      ${classProps}
    `}
      {...passProps}
    >
      {loading ? <div className={classes['my-btn__loading']}><LoadingDonut small /></div>
        : (
        <>
          {iconLeft && <FontAwesomeIcon className={classes['icon-left']} icon={iconLeft} />}
          <span className={classes['my-btn__content']}>{content}</span>
          {iconRight && <FontAwesomeIcon className={classes['icon-right']} icon={iconRight} />}
        </>
        )}
    </button>
  );
};

export default ButtonCT;
