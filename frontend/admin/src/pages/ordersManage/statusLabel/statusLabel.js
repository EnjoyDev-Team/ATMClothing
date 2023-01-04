/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import classes from './statusLabel.module.scss';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import { cancelRecoil, reloadOrderRecoil } from '../recoil';

const StatusLabel = (props) => {
  const {
    content,
    listItem,
    idxSelected,
    idOrder,
    typeOrder,
    reload,

    waiting,
    confirmed,
    delivery,
    receiving,
    success,
    canceled,

    className,

    ...passprops
  } = props;

  const classProps = Object.keys(props)
    .map((el) => (classes[el] && props[el] === true ? classes[el] : ''))
    .join(' ');

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(listItem ? listItem[idxSelected] : {
    label: content || props.children,
    code: 0,
    style: 'waiting'
  });
  const setReloadOrder = useSetRecoilState(reloadOrderRecoil);
  const cancelId = useRecoilValue(cancelRecoil);

  const axiosPrivate = useAxiosPrivate();

  const handleSelected = (item) => {
    setSelected(item);
    setOpen(prev => !prev);

    if (typeOrder === 'PRODUCT') {
      axiosPrivate.patch(`/orders/status/${idOrder}`, {
        status: item.code
      }).then((res) => {
        if (reload) {
          setReloadOrder(prev => !prev);
        }
      }).catch((err) => {
        console.log(err);
      });
    } else {
      axiosPrivate.patch(`/services/status/${idOrder}`, {
        status: item.label
      }).then((res) => {
        if (reload) {
          setReloadOrder(prev => !prev);
        }
      }).catch((err) => {
        console.log(err);
      });
    }
  };

  useEffect(() => {
    if (cancelId === idOrder) {
      setOpen(prev => !prev);
      handleSelected(listItem[listItem.length - 1]);
    }
  }, [cancelId]);

  return (
    <button
      className={`${classProps} ${className} 
      ${classes[selected.style]} ${classes.statusLabel}`}
      {...{ passprops }}
      key={selected.code}
      onBlur={() => setOpen(false)}
    >
      <span
        onClick={() => {
          if (selected.code !== 5) {
            setOpen(prev => !prev);
          }
        }}
      >
        {selected.label}
      </span>

      {listItem && open && (
        <ul className={classes.statusLabel__list}>
          {listItem.map((item) => (
            <li
              className={`${classes['statusLabel__list-item']}
                ${item.code === selected.code ? classes['statusLabel--active'] : ''}`}
              key={item.code}
              onClick={() => handleSelected(item)}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </button>
  );
};

StatusLabel.propTypes = {

};

export default StatusLabel;
