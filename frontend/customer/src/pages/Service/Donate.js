import React from 'react';
import Form from '../../components/Services/Form/Form';
import ServiceDetails from '../../components/Services/ServiceDetails/ServiceDetails';
import classes from './Donate.module.scss';
import DonateFormStep1 from './screens/Donate/DonateFormStep1';
import DonateFormStep2 from './screens/Donate/DonateFormStep2';
import FormStep3 from './screens/FormStep3';
import FormStepFinal from './screens/FormStepFinal';

const screens = [<DonateFormStep1 />, <DonateFormStep2 />, <FormStep3 />, <FormStepFinal />];

const Donate = () => (
    <div className={classes.body}>
        <div className={classes.title}>
            <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
            <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
        </div>
        <ServiceDetails />

        <div className={classes.backdrop} />
        <div className={classes.container}>
            <Form step={0} screens={screens} />
        </div>
    </div>
);

export default Donate;
