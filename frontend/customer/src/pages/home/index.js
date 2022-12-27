import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Sell from '../sell/Sell';
import { axiosClient } from '../../api/axios';

import classes from './styles.module.scss';

const Home = () => {
  const photo = useSelector((state) => state.photos);
  console.log(photo);

  useEffect(() => {
    axiosClient.get('/posts').then((res) => {
      console.log(res);
    }).catch(err => {
      console.log(err);
    });
  }, []);

  return (
    <div>
      <Sell />
    </div>
  );
};

export default Home;
