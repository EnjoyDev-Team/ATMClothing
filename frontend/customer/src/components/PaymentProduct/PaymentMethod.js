/* eslint-disable no-restricted-syntax */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useRecoilValue } from 'recoil';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import classes from './PaymentMethod.module.scss';
import ButtonCT from '../ButtonCT/ButtonCT';
import { addressRecoil, paymentRecoil, paymentMethodRecoil,
  getTotalPaymentRecoil, productsPaymentRecoil, noteRecoil } from './recoil';
import auth from '../../utils/auth';
import { formatMoney } from '../../utils/formatMoney';
import { OrderIDGenerator } from '../../utils/IDGenerator';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { removeFromPayment, removeFromCart } from '../../store/reducers/cartSlice';

const PaymentMethod = () => {
  const navigate = useNavigate();
  const axiosPrivate = useAxiosPrivate();
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cart);
  const payments = useSelector(state => state.cart.payments);

  const address = useRecoilValue(addressRecoil);
  const paymentMethod = useRecoilValue(paymentMethodRecoil);
  const { price, ship, discount } = useRecoilValue(paymentRecoil);
  const { total } = useRecoilValue(getTotalPaymentRecoil);
  const productList = useRecoilValue(productsPaymentRecoil);
  const note = useRecoilValue(noteRecoil);

  const handleSelectMethod = () => {

  };

  const handleSubmit = () => {
    if (address.name === '') {
      toast.error('Vui lòng chọn địa chỉ giao hàng', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return;
    }
    const data = {
      IdOrder: OrderIDGenerator(),
      remindName: '',
      receiveMethod: 0,
      address,
      totalPriceProduct: formatMoney(price.toString()),
      shipFee: formatMoney(ship.toString()),
      discount,
      totalPrice: formatMoney(total.toString()),
      paymentMethod,
      note,
      idUser: auth.getID(),
      products: productList
    };

    axiosPrivate.post('/orders', data)
      .then((res) => {
        for (const el of cart) {
          if (el._id in payments) {
            dispatch(removeFromCart({ _id: el._id }));
            dispatch(removeFromPayment({ _id: el._id }));
          }
        }

        toast.success('Đặt hàng thành công!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });

        // Redirect to order detail page
        navigate('/shopping/orders');
      }).catch((err) => {
        toast.error(err.response.data.message, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      });
  };

  return (
        <main className={classes.payment__method__container}>
            <div>
                <input
                  className={classes.radio__custom}
                  type="radio"
                  id="cod"
                  name="payment_method"
                  checked
                  onChange={() => handleSelectMethod()}
                />
                <label htmlFor="cod">Thanh toán khi nhận hàng</label>
                <br />
            </div>
            <div>
                <input className={classes.radio__custom} type="radio" id="momo" name="payment_method" disabled />
                <label htmlFor="momo" style={{ color: '#999' }}>Thanh toán bằng ví Momo</label>
            </div>
            <div>
                <ButtonCT
                  className={classes.btn__booking}
                  large
                  content="Đặt hàng"
                  borderRadius
                  onClick={handleSubmit}
                  disabled={!productList.length > 0}
                />
            </div>
        </main>
  );
};

export default PaymentMethod;
