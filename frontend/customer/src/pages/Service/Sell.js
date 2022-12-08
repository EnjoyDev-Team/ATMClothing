import React, { useEffect, useState } from 'react';
import classes from './Sell.module.scss';
import Form from '../../components/Services/Form/Form';
import ServiceDetails from '../../components/Services/ServiceDetails/ServiceDetails';
import SellFormStep1 from './screens/Sale/SellFormStep1';
import OptionalDetails from './screens/OptionalDetails';
import FormStep3 from './screens/FormStep3';
import FormStepFinal from './screens/FormStepFinal';
import ButtonCT from '../../components/ButtonCT/ButtonCT';
import addBtn from '../../assets/imgs/service/add-btn.png';
import Details from './screens/Details';
import PaymentDelivery from './screens/PaymentDelivery';
import PaymentMethod from './screens/PaymentMethod';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const Sell = () => {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const screens = [SellFormStep1, OptionalDetails, FormStep3, FormStepFinal];

  const [addNewProduct, setAddNewProduct] = useState(false);

  const [product, setProduct] = useState([]);
  const [totalPrice, setTotalPrice] = useState({ totalPrice: '0đ' });

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
      axiosPrivate.get('/services/sell')
        .then(res => setResponse(res.data))
        .catch(err => setError(err.response.data))
        .finally(() => setIsLoading(false));
    }
  }, []);

  useEffect(() => {
    if (!isLoading && !error && response.data) {
      const newproductList = response.data.products.map((el) => ({
        ...el,
        content: [el.category, el.status, el.amount],
        title: ['Danh mục', 'Tình trạng', 'Số lượng'],
      }));
      setProduct((prev) => [...prev, ...newproductList]);
      setTotalPrice({
        totalPrice: `${`${newproductList.reduce(
          (prev, cur) => prev + +cur.price.replace(/[^0-9]+/g, ''),
          0
        )}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ`,
      });
    }
  }, [isLoading]);

  const detailsScreen = [Details, PaymentDelivery, PaymentMethod];

  return (
        <div className={classes.body}>
            <div className={classes.title}>
                <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
                <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
            </div>
            <ServiceDetails
              screens={detailsScreen}
              productDetails={product}
              totalPrice={totalPrice}
              service="sell"
              button={(
                    <ButtonCT type="button" className={classes.addbtn} onClick={() => setAddNewProduct(true)}>
                        <div className={classes.addbtn__content}>
                            <span>Thêm sản phẩm</span>
                            <img width={27} src={addBtn} alt="add" />
                        </div>
                    </ButtonCT>
                  )}
            />
            {addNewProduct && (
                <>
                    <div className={classes.backdrop} />
                    <div className={classes.container}>
                        <Form
                          close={() => setAddNewProduct(false)}
                          title="Bán sản phẩm"
                          screens={screens}
                          setProduct={setProduct}
                          service="sell"
                        />
                    </div>
                </>
            )}
        </div>
  );
};

export default Sell;
