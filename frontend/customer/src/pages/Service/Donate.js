import React, { useEffect, useState } from 'react';
import ButtonCT from '../../components/ButtonCT/ButtonCT';
import Form from '../../components/Services/Form/Form';
import ServiceDetails from '../../components/Services/ServiceDetails/ServiceDetails';
import useAxios from '../../hooks/useAxios';
import classes from './Donate.module.scss';
import addBtn from '../../assets/imgs/service/add-btn.png';
import Details from './screens/Details';
import DonateFormStep1 from './screens/Donate/DonateFormStep1';
import DonateFormStep2 from './screens/Donate/DonateFormStep2';
import FormStep3 from './screens/FormStep3';
import FormStepFinal from './screens/FormStepFinal';
import PaymentDelivery from './screens/PaymentDelivery';
import PaymentMethod from './screens/PaymentMethod';
<<<<<<< HEAD
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const Donate = () => {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const screens = [DonateFormStep1, DonateFormStep2, FormStep3, FormStepFinal];

=======

const Donate = () => {
  const screens = [DonateFormStep1, DonateFormStep2, FormStep3, FormStepFinal];

>>>>>>> b16604d (update after pull)
  const [addNewProduct, setAddNewProduct] = useState(false);

  const [product, setProduct] = useState([]);

<<<<<<< HEAD
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
      axiosPrivate.get('/services/donate')
        .then(res => setResponse(res.data))
        .catch(err => setError(err.response.data))
        .finally(() => setIsLoading(false));
    }
  }, []);
=======
  const [response, error, isLoading] = useAxios('get', '/services/donate', {}, {}, []);
>>>>>>> b16604d (update after pull)

  useEffect(() => {
    if (!isLoading && !error && response.data) {
      const newproductList = response.data.products.map((el) => ({
        ...el,
        content: [el.category, el.status, el.amount],
        title: ['Danh mục', 'Tình trạng', 'Số lượng'],
      }));
      setProduct((prev) => [...prev, ...newproductList]);
    }
  }, [isLoading]);

  const DetailScreen = [Details, PaymentDelivery, PaymentMethod];
  return (
        <div className={classes.body}>
            <div className={classes.title}>
                <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
                <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
            </div>
            <ServiceDetails
              screens={DetailScreen}
              productDetails={product}
<<<<<<< HEAD
<<<<<<< HEAD
              setProduct={setProduct}
              service="donate"
              button={(
                <ButtonCT type="button" className={classes.addbtn} onClick={() => setAddNewProduct(true)}>
                    <div className={classes.addbtn__content}>
                        <span>Thêm sản phẩm</span>
                        <img width={27} src={addBtn} alt="add" />
                    </div>
                </ButtonCT>
              )}
=======
              service="donate"
              button={(
                    <ButtonCT type="button" className={classes.addbtn} onClick={() => setAddNewProduct(true)}>
                        <div className={classes.addbtn__content}>
                            <span>Thêm sản phẩm</span>
                            <img width={27} src={addBtn} alt="add" />
                        </div>
                    </ButtonCT>
                  )}
>>>>>>> b16604d (update after pull)
=======
              setProduct={setProduct}
              service="donate"
              button={(
                <ButtonCT type="button" className={classes.addbtn} onClick={() => setAddNewProduct(true)}>
                    <div className={classes.addbtn__content}>
                        <span>Thêm sản phẩm</span>
                        <img width={27} src={addBtn} alt="add" />
                    </div>
                </ButtonCT>
              )}
>>>>>>> 7934844 (fixed: service)
            />
            {addNewProduct && (
                <>
                    <div className={classes.backdrop} />
                    <div className={classes.container}>
                        <Form
                          close={() => setAddNewProduct(false)}
                          title="Donate sản phẩm"
                          screens={screens}
                          setProduct={setProduct}
                          service="donate"
                        />
                    </div>
                </>
            )}
        </div>
  );
};

export default Donate;
