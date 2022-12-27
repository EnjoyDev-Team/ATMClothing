/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import classes from './AddressItem.module.scss';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import auth from '../../utils/auth';
import { addressRecoil } from './recoil';

const AddressItem = ({ setOpen }) => {
  const axiosPrivate = useAxiosPrivate();
  const [address, setAddress] = useState([]);
  const setDelivery = useSetRecoilState(addressRecoil);

  axiosPrivate.get(`/address/${auth.getID()}`)
    .then((res) => {
      setAddress(res.data.data);
    }).catch((err) => {

    });

  const handleSelect = (item) => {
    setDelivery({
      name: item.name,
      phone: item.phone,
      street: item.street,
      ward: item.ward,
      district: item.district,
      city: item.city
    });
    setOpen();
  };

  return address.map((item, idx) => (
        <main
          className={classes.address__item__container}
          key={+idx}
          onClick={() => handleSelect(item)}
        >
            <div className={classes.name__phone}>
                <p>{item.name}</p>
                <p>{item.phone}</p>
            </div>
            <p>{item.street}</p>
            <p>{`${item.ward}, ${item.district}, ${item.city}`}</p>
        </main>
  ));
};

export default AddressItem;
