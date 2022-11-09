import React from 'react';
import { useSelector } from 'react-redux';
import Sell from '../sell/Sell';

import classes from './styles.module.scss';

const Home = () => {
  const photo = useSelector((state) => state.photos);
  console.log(photo);

  return (
    <div>
      <Sell />
    </div>
  );
};

export default Home;
