import React from 'react';
import classes from './Service.module.scss';
import ReasonUsing from '../../components/Services/ReasonUsing';
import AbilityOfUsers from '../../components/Services/AbilityOfUsers';

const Services = () => (
    <div>
        <div className={classes.container}>
            <div className={classes.title}>
                <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
                <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
            </div>
            <main>
                <h2>ATM Clothing</h2>
                <ReasonUsing />
                <AbilityOfUsers />
            </main>
        </div>
    </div>
);

export default Services;
