/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import classes from './StateItem.module.scss';

const StateItem = ({ content, description, checked = false }) => (
    <div className={classes.radio__item}>
        <label>
            <input type="radio" name="productStatus" value={content} defaultChecked={checked} />
            <div className={classes.radio__tick}>
                <FontAwesomeIcon icon={faCheck} />
            </div>
            <p className={classes.radio__content}>
                <b>{content}</b>&nbsp;({description})
            </p>
        </label>
    </div>
);

export default StateItem;
