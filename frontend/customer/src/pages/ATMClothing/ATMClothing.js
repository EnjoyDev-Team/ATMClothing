import React from 'react';
import classes from './ATMClothing.module.scss';
import ReasonUsing from './components/ATMClothing/ReasonUsing';
import AbilityOfUsers from './components/ATMClothing/AbilityOfUsers';

const ATMClothing = () => (
    <div>
        <div className={classes.title}>
            <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
            <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
        </div>
        <div className={classes.container}>
            <h2>ATM Clothing</h2>
            <main>
                <ReasonUsing />
                <AbilityOfUsers title="Bán Hàng" />
            </main>
        </div>
    </div>
);

export default ATMClothing;
