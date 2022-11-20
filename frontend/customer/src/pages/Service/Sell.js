import React, { useState } from 'react';
import classes from './Sell.module.scss';
import Form from '../../components/Services/Form/Form';
import ServiceDetails from '../../components/Services/ServiceDetails/ServiceDetails';
import SellFormStep1 from './screens/Sale/SellFormStep1';
import OptionalDetails from './screens/OptionalDetails';
import FormStep3 from './screens/FormStep3';
import FormStepFinal from './screens/FormStepFinal';

const Sell = () => {
  const [step, setStep] = useState(0);
  const screens = [
    <SellFormStep1 setStep={setStep} />,
    <OptionalDetails setStep={setStep} />,
    <FormStep3 setStep={setStep} />,
    <FormStepFinal success />,
  ];

  return (
        <div className={classes.body}>
            <div className={classes.title}>
                <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
                <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
            </div>
            <ServiceDetails />

            <div className={classes.backdrop} />
            <div className={classes.container}>
                <Form title="Bán sản phẩm" step={step} screens={screens} />
            </div>
        </div>
  );
};

export default Sell;
