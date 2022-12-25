/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classes from './statusLabel.module.scss';

const StatusLabel = (props) => {
  const {
    content,
    listItem,
    idxSelected,

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

  const handleSelected = (item) => {
    setSelected(item);
    setOpen(prev => !prev);
  };

  return (
    <button
      className={`${classProps} ${className} 
      ${classes[selected.style]} ${classes.statusLabel}`}
      {...{ passprops }}
      key={selected.code}
      onBlur={() => setOpen(prev => !prev)}
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
