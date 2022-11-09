import React from 'react';
import classes from './Custom.module.scss';
import CustomFormStep1 from './Form/CustomFormStep1';
import CustomFormStep2 from './Form/SellFormStep2';
import CustomFormStep3 from './Form/FormStep3';
import CustomFormStepSuccess from './Form/FormStepSuccess';
import CustomFormStepFail from './Form/FormStepFail';

const Custom = () => (
    <div className={classes.body}>
        <div className={classes.title}>
            <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
            <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
        </div>
        <div className={classes.container}>
            <CustomFormStep1 />
            <br />
            <CustomFormStep2 content="CUSTOM SẢN PHẨM" />
            <br />
            <CustomFormStep3 content="CUSTOM SẢN PHẨM" />
            <br />
            <CustomFormStepSuccess content="CUSTOM SẢN PHẨM" />
            <br />
            <CustomFormStepFail content="CUSTOM SẢN PHẨM" />
        </div>
    </div>
);

export default Custom;
