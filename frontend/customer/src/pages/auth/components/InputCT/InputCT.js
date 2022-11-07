/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './InputCT.module.scss';
import useMergeState from '../../../../hooks/useMergeState';

const InputCT = ({ type, placeholder, message }) => {
  const [state, setState] = useMergeState({
    isFocus: -1,
    type,
    error: message
  });
  const [data, setData] = useState('');
  const inputRef = useRef();

  const handleClickEye = () => {
    if (state.type === 'password') setState({ type: 'text' });
    else setState({ type: 'password' });
  };

  const handleBlur = (e) => {
    setData(e.target.value);
    if (e.target.value === '') {
      setState({ isFocus: 0 });
    }
  };

  useEffect(() => {
    if (state.isFocus === 1) {
      inputRef.current.focus();
    }
  }, [state.isFocus]);

  return (
    <>
    <div className={classes.inputCT}>
      <input
        onFocusCapture={() => setState({ isFocus: 1 })}
        onBlur={handleBlur}
        type={state.type}
        ref={inputRef}
      />
      {type === 'password' && (
          <div
            className={classes['input-eye']}
            onClick={handleClickEye}
          >
            {state.type === 'password' ? (
              <FontAwesomeIcon className={classes['input-eye__icon']} icon={faEyeSlash} />
            ) : (
              <FontAwesomeIcon className={classes['input-eye__icon']} icon={faEye} />
            )}
          </div>
      )}
      <span
        className={`${classes.label} 
        ${state.isFocus === 1 && classes.focusAnimate}
        ${state.isFocus === 0 && classes.unFocusAnimate}`}
        onClick={() => setState({ isFocus: 1 })}
      >
        {placeholder}
      </span>
    </div>
    <div className={classes.message}>
      {state.error && <span>{state.error}</span>}
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
