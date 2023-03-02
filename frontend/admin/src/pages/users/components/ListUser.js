/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import classes from './ListUser.module.scss';
import addImg from '../../../assets/imgs/users/Add.png';
import UserItem from './UserItem';
import useAxios from '../../../hooks/useAxios';
import { LoadingDonut } from '../../../components/Loading/Loading';

const ListUser = ({ setUserInformation }) => {
  const [role, setRole] = useState('user');
  const [respond, error, isloading] = useAxios('get', `/users?role=${role}`, {}, {}, [role]);

  return (
        <main className={classes.list__main}>
            <div className={classes.stateBar}>
                <p onClick={() => setRole('user')} className={`${role === 'user' ? classes.active : ''}`}>Customer</p>
                <p onClick={() => setRole('admin')} className={`${role === 'admin' ? classes.active : ''}`}>Admin</p>
            </div>
            <div className={classes.list__container}>
                <div className={classes.list__head}>
                    <p>USER</p>
                    <img src={addImg} alt="" />
                </div>
                <div className={classes.search__bar}>
                    <input type="text" placeholder="Search" />
                </div>
                <div className={classes.list}>
                    {isloading ? (
                        <div style={{ display: 'flex', justifyContent: ' center', marginTop: '100px' }}>
                            <LoadingDonut />
                        </div>
                    ) : <UserItem listItem={respond.data} setUserInformation={setUserInformation} />}
                </div>
            </div>
        </main>
  );
};

export default ListUser;
