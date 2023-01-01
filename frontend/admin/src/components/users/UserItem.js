/* eslint-disable react/jsx-indent-props */
/* eslint-disable arrow-spacing */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable block-spacing */
/* eslint-disable quotes */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable semi */
/* eslint-disable no-trailing-spaces */
/* eslint-disable react/self-closing-comp */
/* eslint-disable indent */
/* eslint-disable arrow-body-style */
import React from 'react';
import classes from './UserItem.module.scss';
import avatar from '../../assets/imgs/users/Ellipse 59.png';

// const listItem = [
//     {
//         img: avatar,
//         name: 'Trần Duy Khương',
//         salary: '20$/h',
//         position: 'Manager',
//         day: '20',
//     },
//     {
//         img: avatar,
//         name: 'Trần Duy Khương',
//         salary: '20$/h',
//         position: 'Manager',
//         day: '20',
//     },
//     {
//         img: avatar,
//         name: 'Trần Duy Khương',
//         salary: '20$/h',
//         position: 'Manager',
//         day: '20',
//     },
//     {
//         img: avatar,
//         name: 'Trần Duy Khương',
//         salary: '20$/h',
//         position: 'Manager',
//         day: '20',
//     },
//     {
//         img: avatar,
//         name: 'Trần Duy Khương',
//         salary: '20$/h',
//         position: 'Manager',
//         day: '20',
//     },
//     {
//         img: avatar,
//         name: 'Trần Duy Khương',
//         salary: '20$/h',
//         position: 'Manager',
//         day: '20',
//     },
//     {
//         img: avatar,
//         name: 'Trần Duy Khương',
//         salary: '20$/h',
//         position: 'Manager',
//         day: '20',
//     },
// ];

const UserItem = ({ listItem, setUserInformation }) => {
    const click = function (item) {
        setUserInformation(item);
    };
    return listItem
        ? listItem.map((item, index) => (
              <main
                  onClick={() => {
                      click(item);
                  }}
                  className={classes.user__item__main}
              >
                  <div className={classes.top__section}>
                      <img src={item.photo} alt="" />
                      <p>{item.name} </p>
                      <p>{item.salary} </p>
                  </div>
                  <div className={classes.bottom__section}>
                      <p>{item.role} </p>
                      <p>Phone: {item.phone} </p>
                  </div>
              </main>
          ))
        : '';
};

export default UserItem;
