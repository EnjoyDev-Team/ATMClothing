import React from 'react';
import classes from './Donate.module.scss';
import DonateFormStep1 from './Form/DonateFormStep1';
import DonateFormStep2 from './Form/DonateFormStep2';
import FormStep3 from './Form/FormStep3';
import FormStepSuccess from './Form/FormStepSuccess';
import FormStepFail from './Form/FormStepFail';

const Donate = () => (
    <div className={classes.body}>
        <div className={classes.title}>
            <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
            <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
        </div>
        <div className={classes.container}>
            <DonateFormStep1 />
            <br />
            <DonateFormStep2 content="TẶNG SẢN PHẨM" />
            <br />
            <FormStep3 content="TẶNG SẢN PHẨM" />
            <br />
            <FormStepSuccess content="TẶNG SẢN PHẨM" />
            <br />
            <FormStepFail content="TẶNG SẢN PHẨM" />
            <br />
        </div>
    </div>
);

export default Donate;
