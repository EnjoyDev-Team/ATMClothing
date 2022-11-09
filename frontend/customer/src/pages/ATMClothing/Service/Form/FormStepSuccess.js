/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from './FormStepSuccess.module.scss';
import BarProgress from '../../components/Services/Form/BarProgress';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import { ReactComponent as SuccessImg } from '../../../../assets/svg/Service/Group 555.svg';

const FormStepSuccess = ({ content }) => (
    <main>
        <div className={classes.formContainer}>
            <h3 className={classes.formHeader}>
                {content}
                <FontAwesomeIcon icon={faArrowRight} className={classes.icon__arrow} />
                THÊM SẢN PHẨM
            </h3>
            <div>
                <BarProgress type="state4" />
            </div>
            <div className={classes.success__field}>
                <SuccessImg className={classes.success__img} />
                <p className={classes.success__message}>Thêm thành công!</p>
            </div>
            <ButtonCT
                style={{
                    marginTop: '1rem',
                    width: '140px',
                    height: '40px',
                    borderRadius: '50px',
                    marginLeft: 'auto',
                    marginTop: '5rem',
                    marginRight: '5rem',
                    fontSize: '1.6rem',
                }}
                // className={classes.button__choose}
                greenLinear
                content="Tiếp tục"
            />
        </div>
    </main>
);

export default FormStepSuccess;
