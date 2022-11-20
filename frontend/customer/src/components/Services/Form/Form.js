/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-dupe-keys */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent-props */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faXmark } from '@fortawesome/free-solid-svg-icons';
import classes from './Form.module.scss';
import ButtonCT from '../../ButtonCT/ButtonCT';
import BarProgress from './BarProgress';
import useAxios from '../../../hooks/useAxios';

const Form = ({ screens, title, children, close, setProduct, service }) => {
    const [step, setStep] = useState(0);
    const [data, setData] = useState('');
    const [success, setSuccess] = useState(false);

    const onSubmit = (data) => {
        if (data) setData((prev) => ({ ...prev, ...data }));
        setSuccess(true);
        setStep((prev) => (prev + 1) % screens.length);
    };

    const onError = (err) => {
        console.log('error', err);
        setSuccess(false);
        setStep((prev) => ((prev < screens.length - 1) ? prev + 1 : prev));
    };

    const [response, error, isLoading] = useAxios('get', '/products/filters', {}, {}, []);

    const Screen = screens[step];
    return (
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
                    onClick={close}
                />
                <h3 className={classes.formHeader}>
                    {title}
                    <FontAwesomeIcon icon={faArrowRight} className={classes.icon__arrow} />
                    THÊM SẢN PHẨM
                </h3>
                <BarProgress step={step} success={success} />
                <Screen
                    onSubmit={onSubmit}
                    data={data}
                    setProduct={setProduct}
                    onError={onError}
                    success={success}
                    filterItems={response.data}
                    close={close}
                    service={service}
                />
                {children || ''}
            </div>
        </main>
    );
};

export default Form;
