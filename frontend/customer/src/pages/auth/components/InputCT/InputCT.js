import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './InputCT.module.scss';

const InputCT = ({ type, placeholder, message }) => {
  const [isFocus, setFocus] = useState(false);

  return (
    <>
    <div className={classes.inputCT}>
      <input
        className={`${isFocus && classes.hiddenPlaceholder}`}
        onFocusCapture={() => setFocus(true)}
        type={type}
        placeholder={placeholder}
      />
      <span
        className={`${classes.label} 
        ${isFocus && classes.focusAnimate}`}
      >
        {placeholder}
      </span>
    </div>
    <div className={classes.message}>
      {message && <span>{message}</span>}
    </div>
    </>
  );
};

InputCT.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  message: PropTypes.string
};

InputCT.defaultProps = {
  type: 'text',
  placeholder: '',
  message: undefined
};

export default InputCT;
