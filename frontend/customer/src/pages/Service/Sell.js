import React from 'react';
import classes from './Sell.module.scss';
import Form from '../../components/Services/Form/Form';
import ServiceDetails from '../../components/Services/ServiceDetails/ServiceDetails';
import SellFormStep1 from './screens/Sale/SellFormStep1';
import OptionalDetails from './screens/OptionalDetails';
import FormStep3 from './screens/FormStep3';
// import FormStepSuccess from './Form/FormStepSuccess';
// import FormStepFail from './Form/FormStepFail';

const screens = [<SellFormStep1 />, <OptionalDetails />, <FormStep3 />];

const Sell = () => (
    <div className={classes.body}>
        <div className={classes.title}>
            <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
            <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
        </div>
        <ServiceDetails />

        {/* <div className={classes.backdrop} />
        <div className={classes.container}>
            <Form title="Bán sản phẩm" step={3} screens={screens} />
        </div> */}
        {/* <FormStepSuccess content="BÁN SẢN PHẨM" /> */}
        {/* <FormStepFail content="BÁN SẢN PHẨM" /> */}
    </div>
);

export default Sell;
