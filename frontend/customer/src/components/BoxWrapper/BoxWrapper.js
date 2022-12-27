import React from 'react';
import PropTypes from 'prop-types';

import classes from './BoxWrapper.module.scss';

const BoxWrapper = ({ heading, button, width, maxHeight, minHeight, children }) => (
    <div
      className={`${classes.box}`}
      style={{
        width
      }}
    >
        <div className={classes.box__heading}>
            <h1>{heading}</h1>
            {button}
        </div>
        <div className={classes.box__scrollview} style={{ maxHeight, minHeight }}>
            <div className={classes.box__content}>
                {children}
            </div>
        </div>
    </div>
);

BoxWrapper.propTypes = {
  heading: PropTypes.string,
  button: PropTypes.element,
  width: PropTypes.string,
  maxHeight: PropTypes.string,
  minHeight: PropTypes.string,
  children: PropTypes.element,
};

BoxWrapper.defaultProps = {
  heading: '',
  button: undefined,
  width: 'auto',
  maxHeight: 'auto',
  minHeight: 'auto',
  children: undefined
};

export default BoxWrapper;
