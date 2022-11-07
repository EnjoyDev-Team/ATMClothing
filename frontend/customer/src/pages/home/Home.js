/* eslint-disable jsx-quotes */
import React from 'react';
// import Button from '../../components/Button/Button';
import ATMClothing from '../ATMClothing/ATMClothing';
import Service from '../Service/Service';
import Form from '../Service/Form/Form';

const Home = () => (
    <div>
        <ATMClothing />
        {/* <Service type="sell" /> */}
        <Form />
    </div>
);

Home.propTypes = {};

export default Home;
