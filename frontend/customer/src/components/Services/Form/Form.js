/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-dupe-keys */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from './Form.module.scss';
import ButtonCT from '../../ButtonCT/ButtonCT';
import BarProgress from './BarProgress';

const Form = ({ step, screens, title, success, children }) => (
    <main>
        <div className={classes.formContainer}>
            <ButtonCT
                title="close"
                type="button"
                style={{
                    fontSize: '3rem',
                    position: 'absolute',
                    right: '2.2rem',
                    top: '1.5rem',
                    display: 'inline-block',
                    width: 'auto',
                }}
                iconRight={faXmark}
            />
            <h3 className={classes.formHeader}>
                {title}
                <FontAwesomeIcon icon={faArrowRight} className={classes.icon__arrow} />
                THÊM SẢN PHẨM
            </h3>
            <BarProgress step={step} success={success} />
            {screens[step]}
            {children || ''}
        </div>
    </main>
);

export default Form;
