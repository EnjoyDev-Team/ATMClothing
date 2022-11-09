/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-dupe-keys */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import classes from './FormStepFail.module.scss';
import BarProgress from '../../components/Services/Form/BarProgress';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import { ReactComponent as FailImg } from '../../../../assets/svg/Service/Group 556.svg';

const FormStepFail = ({ content }) => (
    <main>
        <div className={classes.formContainer}>
            <h3 className={classes.formHeader}>
                {content}
                <FontAwesomeIcon icon={faArrowRight} className={classes.icon__arrow} />
                THÊM SẢN PHẨM
            </h3>
            <div>
                <BarProgress type="state5" />
            </div>
            <div className={classes.fail__field}>
                <FailImg className={classes.fail__img} />
                <p className={classes.fail__message}>Thêm thất bại!</p>
            </div>
            <div className={classes.btn__field}>
                <ButtonCT
                    style={{
                        marginTop: '1rem',
                        width: '140px',
                        height: '40px',
                        borderRadius: '50px',
                        // marginLeft: '100rem',
                        marginTop: '5rem',
                        fontSize: '1.6rem',
                    }}
                    // className={classes.button__choose}
                    redLinear
                    content="Hủy"
                />
                <ButtonCT
                    style={{
                        marginTop: '1rem',
                        width: '140px',
                        height: '40px',
                        borderRadius: '50px',
                        // marginLeft: '100rem',
                        marginTop: '5rem',
                        fontSize: '1.6rem',
                    }}
                    // className={classes.button__choose}
                    greenLinear
                    content="Tiếp tục"
                />
            </div>
        </div>
    </main>
);

export default FormStepFail;
