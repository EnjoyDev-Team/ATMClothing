/* eslint-disable react/prop-types */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable no-dupe-keys */
import React from 'react';
import classes from './FormStepFinal.module.scss';
import ButtonCT from '../../../components/ButtonCT/ButtonCT';
import { ReactComponent as SuccessImg } from '../../../assets/svg/Service/Group 555.svg';
import { ReactComponent as FailImg } from '../../../assets/svg/Service/Group 556.svg';

const FormStepFinal = ({ success = true }) => (!success ? (
        <main>
            <div className={classes.field}>
                <FailImg className={classes.img} />
                <p className={classes.fail__message}>Thêm thất bại!</p>
            </div>
            <div className={classes.btn__field}>
                <ButtonCT
                    style={{
                        width: '140px',
                        padding: '1rem',
                        borderRadius: '5rem',
                        fontSize: '1.6rem',
                        marginBottom: '3rem'
                    }}
                    // className={classes.button__choose}
                    redLinear
                    content="Hủy"
                />
            </div>
        </main>
    ) : (
        <main>
            <div className={classes.field}>
                <SuccessImg className={classes.img} />
                <p className={classes.success__message}>Thêm thành công!</p>
            </div>
            <div className={classes.btn__field}>
                <ButtonCT
                    style={{
                        width: '140px',
                        padding: '1rem',
                        borderRadius: '5rem',
                        fontSize: '1.6rem',
                        marginBottom: '3rem'
                    }}
                    // className={classes.button__choose}
                    greenLinear
                    content="Tiếp tục"
                />
            </div>
        </main>
    ));

export default FormStepFinal;
