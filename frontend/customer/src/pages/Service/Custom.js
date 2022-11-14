import React from 'react';
import classes from './Custom.module.scss';
import CustomFormStep1 from './screens/Custom/CustomFormStep1';
import OptionalDetails from './screens/OptionalDetails';
import FormStep3 from './screens/FormStep3';
import Form from '../../components/Services/Form/Form';
import FormStepFinal from './screens/FormStepFinal';
import ServiceDetails from '../../components/Services/ServiceDetails/ServiceDetails';

const screens = [<CustomFormStep1 />, <OptionalDetails />, <FormStep3 />, <FormStepFinal />];

const Custom = () => (
    <div className={classes.body}>
        <div className={classes.title}>
            <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
            <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
        </div>
        <ServiceDetails />
        {/* <div className={classes.backdrop} />
        <div className={classes.container}>
            <Form title="Custom sản phẩm" step={0} screens={screens} />
        </div> */}
    </div>
);

export default Custom;
