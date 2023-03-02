/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classes from './UserItem.module.scss';

const UserItem = ({ listItem, setUserInformation }) => {
  const click = (item) => {
    setUserInformation(item);
  };
  return listItem
    ? listItem.map((item) => (
              <main
                onClick={() => {
                  click(item);
                }}
                className={classes.user__item__main}
              >
                  <div className={classes.top__section}>
                      <img src={item.photo} alt="" />
                      <p>
{item.name}
{' '}
                      </p>
                      <p>
{item.salary}
{' '}
                      </p>
                  </div>
                  <div className={classes.bottom__section}>
                      <p>
{item.role}
{' '}
                      </p>
                      <p>
Phone:
{' '}
{item.phone}
{' '}
                      </p>
                  </div>
              </main>
    ))
    : '';
};

export default UserItem;
