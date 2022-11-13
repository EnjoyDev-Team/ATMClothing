/* eslint-disable jsx-quotes */
import React from 'react';
import ATMClothing from '../ATMClothing/ATMClothing';
import Sell from '../ATMClothing/Service/Sell';
import Custom from '../ATMClothing/Service/Custom';
import Donate from '../ATMClothing/Service/Donate';

const Home = () => (
    <div>
        <ATMClothing />
        <Sell />
        <Custom />
        <Donate />
    </div>
);

export default Home;
