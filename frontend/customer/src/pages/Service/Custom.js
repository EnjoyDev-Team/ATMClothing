import React, { useEffect, useState } from 'react';
import classes from './Custom.module.scss';
import CustomFormStep1 from './screens/Custom/CustomFormStep1';
import OptionalDetails from './screens/OptionalDetails';
import FormStep3 from './screens/FormStep3';
import Form from '../../components/Services/Form/Form';
import FormStepFinal from './screens/FormStepFinal';
import ServiceDetails from '../../components/Services/ServiceDetails/ServiceDetails';
<<<<<<< HEAD
=======
import useAxios from '../../hooks/useAxios';
>>>>>>> b16604d (update after pull)
import ButtonCT from '../../components/ButtonCT/ButtonCT';
import addBtn from '../../assets/imgs/service/add-btn.png';
import Details from './screens/Details';
import PaymentDelivery from './screens/PaymentDelivery';
import PaymentMethod from './screens/PaymentMethod';
<<<<<<< HEAD
import useAxiosPrivate from '../../hooks/useAxiosPrivate';

const Custom = () => {
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const screens = [CustomFormStep1, OptionalDetails, FormStep3, FormStepFinal];

=======

const Custom = () => {
  const screens = [CustomFormStep1, OptionalDetails, FormStep3, FormStepFinal];

>>>>>>> b16604d (update after pull)
  const [addNewProduct, setAddNewProduct] = useState(false);

  const [product, setProduct] = useState([]);

<<<<<<< HEAD
  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    if (!isLoading) {
      setIsLoading(true);
      axiosPrivate.get('/services/custom')
        .then(res => setResponse(res.data))
        .catch(err => setError(err.response.data))
        .finally(() => setIsLoading(false));
    }
  }, []);
=======
  const [response, error, isLoading] = useAxios('get', '/services/custom', {}, {}, []);
>>>>>>> b16604d (update after pull)

  useEffect(() => {
    if (!isLoading && !error && response.data) {
      const newproductList = response.data.products.map((el) => ({
        ...el,
        content: [el.category, el.status, el.amount, el.idea_description],
        title: ['Danh mục', 'Tình trạng', 'Số lượng', 'Ý tưởng'],
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
              setProduct={setProduct}
=======
>>>>>>> b16604d (update after pull)
              service="custom"
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
                          title="Custom sản phẩm"
                          screens={screens}
                          setProduct={setProduct}
                          service="custom"
                        />
                    </div>
                </>
            )}
        </div>
  );
};
export default Custom;
