/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from './modal.module.scss';

const Modal = (props) => {
  const a = 0;

  return (
    <>
    <div
      className={classes.modal}
      onClick={() => (props.setIsOpen ? props.setIsOpen(false) : null)}
    />
      <div className={classes.modal__container}>
        <div className={classes.modal__heading}>
          <h3>Order Information</h3>
          <FontAwesomeIcon
            className={classes['modal__heading-iconRemove']}
            icon={faXmark}
            onClick={() => (props.setIsOpen ? props.setIsOpen(false) : null)}
          />
        </div>
        <div className={classes.modal__content}>
          {props.children}
        </div>
      </div>
    </>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  setIsOpen: PropTypes.func
};

Modal.defaultProps = {
  setIsOpen: null
};

export default Modal;
