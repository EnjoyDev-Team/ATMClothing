/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import BoxWrapper from '../../BoxWrapper/BoxWrapper';
import ButtonCT from '../../ButtonCT/ButtonCT';
import classes from './ServiceDetails.module.scss';
import { axiosClient } from '../../../api/axios';
import { OrderIDGenerator } from '../../../utils/IDGenerator';

const ServiceDetails = ({ button, productDetails, screens, service, totalPrice }) => {
  const [step, setStep] = useState(0);
  const paymentData = useRef('');
  const [payment, setPayment] = useState(false);
  const [isPayment, setIsPayment] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    paymentData.current = {
      products: productDetails,
      status: 'Đang kiểm tra',
      service,
      ...totalPrice
    };

    setIsLoading(false);
  }, [productDetails]);

  const CancelPayment = () => {
    paymentData.current = {
      products: productDetails,
      status: 'Đang kiểm tra',
      service,
      ...totalPrice
    };

    setPayment(false);
    setStep(0);
  };

  const handleNext = (event) => {
    event.preventDefault();
    if (!paymentData.current || !paymentData.current.products || !paymentData.current.products.length) return;

    if (payment === true) {
      // send a payment
      console.log(paymentData.current);
      setIsPayment(true);
      axiosClient
        .post('/services', {
          paymentData: { ...paymentData.current, uid: '123acb123ns3', code: OrderIDGenerator() },
        })
        .then((res) => {
          console.log(res.data);
          setIsPayment(false);
          setPayment(false);
          navigate(`/services/orders/${res.data.order.code}`);
        })
        .catch((err) => console.log(err));
      return;
    }

    setStep((prev) => (prev < screens.length - 1 ? prev + 1 : prev));
  };

  const onChange = (data) => {
    if (data) {
      paymentData.current = { ...paymentData.current, ...data };
    }
  };

  const Screen = screens[step];

  const buttons = step === 0 ? (
    button
  ) : (
            // <button
            //   type="button"
            //   onClick={() => setStep((prev) => (prev > 0 ? prev - 1 : prev))}
            //   className={classes.back__btn}
            // >
            //     <span>Go back</span>
            //     <FontAwesomeIcon icon={faArrowLeft} />
            // </button>
            <> </>
  );

  const maxHeight = step === 0 ? '41.3rem' : '';
  const minHeight = step === 2 ? '28.8rem' : '';

  return (
        <form className={classes.main} onSubmit={handleNext}>
            <BoxWrapper
              heading="Bán sản phẩm"
              width="69.5rem"
              maxHeight={maxHeight}
              minHeight={minHeight}
              button={buttons}
            >
                <Screen productDetails={productDetails} onChange={onChange} setPayment={setPayment} />
            </BoxWrapper>
            <BoxWrapper heading="Chi tiết hóa đơn" width="40.7rem">
                <>
                    <div className={classes.order__content}>
                        <div className={classes['order__content-item']}>
                            <div>Tổng số lượng sản phẩm</div>
                            <div>Phương thức vận chuyển</div>
                            <div>Tổng tiền dự kiến</div>
                        </div>
                        <div className={classes['order__content-item']}>
                            <div>2</div>
                            <div>2</div>
                            <div>{ totalPrice.totalPrice ? totalPrice.totalPrice : '' }</div>
                        </div>
                    </div>
                    <div className={classes.order__content__controls}>
                        <ButtonCT
                          onClick={CancelPayment}
                          type="button"
                          redLinear
                          content="Hủy"
                          disabled={isPayment === true}
                        />
                        <ButtonCT
                          type="submit"
                          greenLinear
                          content="Thanh toán"
                          disabled={isLoading === true}
                          loading={isPayment === true}
                        />
                    </div>
                </>
            </BoxWrapper>
        </form>
  );
};

ServiceDetails.propTypes = {
  button: PropTypes.element,
  screens: PropTypes.arrayOf(PropTypes.elementType).isRequired,
  service: PropTypes.string.isRequired,
  totalPrice: PropTypes.shape({
    totalPrice: PropTypes.string
  }),
  productDetails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.arrayOf(PropTypes.string).isRequired,
      content: PropTypes.any.isRequired,
      price: PropTypes.string,
    })
  ),
};

ServiceDetails.defaultProps = {
  button: undefined,
  productDetails: [],
  totalPrice: {},
};

export default ServiceDetails;
