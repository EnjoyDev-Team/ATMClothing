import React from 'react';
import classes from './Sell.module.scss';
import SellFormStep1 from './Form/SellFormStep1';
import SellFormStep2 from './Form/SellFormStep2';
import FormStep3 from './Form/FormStep3';
import FormStepSuccess from './Form/FormStepSuccess';
import FormStepFail from './Form/FormStepFail';

const Sell = () => (
    <div className={classes.body}>
        <div className={classes.title}>
            <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
            <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
        </div>
        <div className={classes.container}>
            <SellFormStep1 />
            <br />
            <SellFormStep2 />
            <br />
            <FormStep3 />
            <br />
            <FormStepSuccess />
            <br />
            <FormStepFail />
        </div>
    </div>
);

export default Sell;
