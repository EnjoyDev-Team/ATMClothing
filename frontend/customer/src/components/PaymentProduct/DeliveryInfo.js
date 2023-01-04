/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faChevronDown, faPencil } from '@fortawesome/free-solid-svg-icons';
import { useRecoilValue, useRecoilState } from 'recoil';
import classes from './DeliveryInfo.module.scss';
import AddressItem from './AddressItem';
import { addressRecoil, noteRecoil } from './recoil';

const DeliveryInfo = () => {
  const [show, setShow] = useState(false);
  const [note, setNote] = useRecoilState(noteRecoil);
  const address = useRecoilValue(addressRecoil);

  const toggleAddressTable = () => {
    setShow((prev) => !prev);
  };

  return (
        <main className={classes.delivery__info}>
            <div className={classes.address__delivery} onClick={toggleAddressTable}>
                <FontAwesomeIcon icon={faLocationDot} className={classes.location__delivery__icon} />
                {address.name === '' ? <p>Vui lòng chọn địa chỉ giao hàng</p>
                  : (
                        <div>
                            <strong>{`${address.name} | ${address.phone}`}</strong>
                            <br />
                            <p>{`${address.street}, ${address.ward}, ${address.district}, ${address.city}`}</p>
                        </div>
                  )}
                <FontAwesomeIcon icon={faChevronDown} className={classes.chevrondown__icon} />
            </div>
            {show ? (
              <div className={`${classes.address__table} ${classes['address__table-item--show']}`}>
                <AddressItem setOpen={toggleAddressTable} />
              </div>
            ) : (
              <div className={`${classes.address__table} ${classes['address__table-item--hide']}`}>
                <AddressItem setOpen={toggleAddressTable} />
              </div>
            )}
            <div className={classes.note}>
                <FontAwesomeIcon icon={faPencil} />
                {/* <p>Ghi chú giao hàng</p> */}
                <input
                  type="text"
                  value={note}
                  placeholder="Ghi chú giao hàng"
                  onChange={(e) => setNote(e.target.value)}
                />
            </div>
        </main>
  );
};

export default DeliveryInfo;
