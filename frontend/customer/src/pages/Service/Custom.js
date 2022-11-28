import React, { useEffect, useState } from 'react';
import classes from './Custom.module.scss';
import CustomFormStep1 from './screens/Custom/CustomFormStep1';
import OptionalDetails from './screens/OptionalDetails';
import FormStep3 from './screens/FormStep3';
import Form from '../../components/Services/Form/Form';
import FormStepFinal from './screens/FormStepFinal';
import ServiceDetails from '../../components/Services/ServiceDetails/ServiceDetails';
import useAxios from '../../hooks/useAxios';
import ButtonCT from '../../components/ButtonCT/ButtonCT';
import addBtn from '../../assets/imgs/service/add-btn.png';
import Details from './screens/Details';

const Custom = () => {
  const screens = [CustomFormStep1, OptionalDetails, FormStep3, FormStepFinal];

  const [addNewProduct, setAddNewProduct] = useState(false);

  const [product, setProduct] = useState([]);

  const [response, error, isLoading] = useAxios('get', '/services/custom', {}, {}, []);

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

  const DetailScreen = [Details];

  return (
        <div className={classes.body}>
            <div className={classes.title}>
                <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
                <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
            </div>
            <ServiceDetails
              screens={DetailScreen}
              productDetails={product}
              button={(
                    <ButtonCT className={classes.addbtn} onClick={() => setAddNewProduct(true)}>
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
