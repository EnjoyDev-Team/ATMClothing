/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classes from './PaymentDelivery.module.scss';
import store from '../../../assets/imgs/service/store.png';
import location from '../../../assets/imgs/service/location.png';
import useAxios from '../../../hooks/useAxios';

const PaymentDelivery = ({ onChange }) => {
  const paymentDelivery1 = useRef();
  const paymentDelivery2 = useRef();

  const [paymentDelivery, setPaymentDelivery] = useState(0);
  const [paymentFacility, setPaymentFacility] = useState('');
  const [paymentAddress, setpaymentAddress] = useState('');

  const facilityInput = useRef();
  const addressInput = useRef();

  const [response, error, isLoading] = useAxios('get', '/products/filters', {}, {}, []);
  const facilities = !error && !isLoading && response.data ? response.data.facilities : [];
  const addresses = [];

  const choosePaymentDelivery = (event) => {
    setPaymentDelivery(+event.target.value);
    paymentDelivery1.current.checked = false;
    paymentDelivery2.current.checked = false;

    if (facilityInput.current) facilityInput.current.checked = false;
    if (addressInput.current) addressInput.current.checked = false;

    setPaymentFacility('');
    setpaymentAddress('');

    onChange({
      paymentDelivery: +event.target.value,
      facility: { code: '', name: '', address: '' },
      address: { code: '', name: '', address: '' },
    });
  };

  const chooseFacilities = (event) => {
    if (event.target.checked === true) {
      const facility = facilities.find((el) => el.code === event.target.value) || '';
      setPaymentFacility(facility);
      onChange(
        paymentDelivery === 0
          ? { facility, paymentDelivery }
          : { facility: { code: '', name: '', address: '', paymentDelivery: '' } }
      );
    }
  };

  const chooseAddress = (event) => {
    if (event.target.checked === true) {
      const address = addresses.find((el) => el.code === event.target.value) || '';
      setpaymentAddress(address);
      onChange(
        paymentDelivery === 1
          ? { address, paymentDelivery }
          : { address: { code: '', name: '', address: '' }, paymentDelivery }
      );
    }
  };

  return (
        <div className={classes.payment__method}>
            <b>Phương thức vận chuyển</b>
            <div className={classes.payment__method__content}>
                <div className={classes.payment__method__item}>
                    <label className={classes.radio__item}>
                        <input
                          name="paymentDelivery"
                          defaultChecked
                          type="radio"
                          value="0"
                          onChange={choosePaymentDelivery}
                        />
                        <span>Tôi tự mang đến các cơ sở của ATM CLOTHING</span>
                    </label>
                    <div className={`${classes.dropdown}${paymentDelivery !== 0 ? ` ${classes.disabled}` : ''}`}>
                        <input
                          id="dropdown_service_paymentmethod_cb0"
                          className={classes.dropdown_cb}
                          type="checkbox"
                          disabled={paymentDelivery !== 0}
                          ref={paymentDelivery1}
                        />
                        <div className={classes.dropdown__bar}>
                            <img width={22} src={store} alt="store_icon" />
                            <input
                              type="text"
                              placeholder="Chọn cơ sở"
                              readOnly={paymentDelivery !== 0}
                              value={paymentFacility.name ? `Cơ sở ${paymentFacility.name}` : ''}
                              onChange={(event) => event.preventDefault()}
                              required
                            />
                            <label htmlFor="dropdown_service_paymentmethod_cb0" title="toggle">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </label>
                        </div>
                        <div className={classes.dropdown__list}>
                            {facilities.map((el) => (
                                <div key={el.code} className={classes.dropdown__item}>
                                    <label className={classes.radio__item}>
                                        <input
                                          className={classes.bdn}
                                          name="paymentAddress"
                                          type="radio"
                                          value={el.code}
                                          onChange={chooseFacilities}
                                          ref={facilityInput}
                                        />
                                        <div className={classes.address__item}>
                                            <span className={classes.title}>
Cơ sở
{' '}
{el.name}
                                            </span>
                                            <span>{el.address}</span>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className={classes.payment__method__item}>
                    <label className={classes.radio__item}>
                        <input name="paymentDelivery" type="radio" value="1" onChange={choosePaymentDelivery} />
                        <span>Nhờ bên vận chuyển của ATM CLOTHING</span>
                    </label>
                    <div className={`${classes.dropdown}${paymentDelivery !== 1 ? ` ${classes.disabled}` : ''}`}>
                        <input
                          id="dropdown_service_paymentmethod_cb1"
                          className={classes.dropdown_cb}
                          type="checkbox"
                          disabled={paymentDelivery !== 1}
                          ref={paymentDelivery2}
                        />
                        <div className={classes.dropdown__bar}>
                            <img width={22} src={location} alt="location_icon" />
                            <input
                              type="text"
                              readOnly={paymentDelivery !== 1}
                              placeholder="Vui lòng chọn địa chỉ"
                              value={paymentAddress.address ? `Cơ sở ${paymentAddress.address}` : ''}
                              onChange={(event) => event.preventDefault()}
                              required
                            />
                            <label htmlFor="dropdown_service_paymentmethod_cb1" title="toggle">
                                <FontAwesomeIcon icon={faChevronDown} />
                            </label>
                        </div>
                        <div className={classes.dropdown__list}>
                            {addresses.map((el) => (
                                <div key={el.code} className={classes.dropdown__item}>
                                    <label className={classes.radio__item}>
                                        <input
                                          className={classes.bdn}
                                          name="paymentAddress"
                                          type="radio"
                                          value={el.code}
                                          onChange={chooseAddress}
                                          ref={addressInput}
                                        />
                                        <div className={classes.address__item}>
                                            <span className={classes.title}>
{' '}
{el.name}
                                            </span>
                                            <span>{el.address}</span>
                                        </div>
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
};

export default PaymentDelivery;
