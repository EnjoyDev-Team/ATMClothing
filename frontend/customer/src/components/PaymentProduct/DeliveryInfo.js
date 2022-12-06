/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
/* eslint-disable indent */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faChevronDown, faPencil } from '@fortawesome/free-solid-svg-icons';
import classes from './DeliveryInfo.module.scss';
import AddressItem from './AddressItem';

const DeliveryInfo = () => {
    const [show, setShow] = useState(false);
    function toggle__address__table() {
        setShow((prev) => !prev);
    }
    return (
        <main className={classes.delivery__info}>
            <div className={classes.address__delivery} onClick={toggle__address__table}>
                <FontAwesomeIcon icon={faLocationDot} className={classes.location__delivery__icon} />
                <p>Vui lòng chọn địa chỉ giao hàng</p>
                <FontAwesomeIcon icon={faChevronDown} className={classes.chevrondown__icon} />
            </div>
            {show === true ? (
                <div className={classes.address__table}>
                    <AddressItem />
                </div>
            ) : (
                ''
            )}
            <div className={classes.note}>
                <FontAwesomeIcon icon={faPencil} />
                {/* <p>Ghi chú giao hàng</p> */}
                <input type="text" placeholder="Ghi chú giao hàng"></input>
            </div>
        </main>
    );
};

export default DeliveryInfo;
