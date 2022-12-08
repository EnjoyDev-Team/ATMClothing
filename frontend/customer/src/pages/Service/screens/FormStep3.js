/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
import React, { useEffect, useState } from 'react';
import Spinner from '../../../components/Services/Spinner';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';
import auth from '../../../utils/auth';
import classes from './FormStep3.module.scss';

const FormStep3 = ({ onSubmit, data, setProduct, onError, service }) => {
  const axiosPrivate = useAxiosPrivate();
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading === false) {
      setIsLoading(true);
      axiosPrivate.post(`/services/${service}`, {
        product: { ...data, uid: auth.getID() }
      })
        .then((res) => setResponse(res.data))
        .catch(err => setError(err.response.data))
        .finally(() => setIsLoading(false));
    }
  }, []);

  const successHandle = () => {
    const { product } = response.data;

    const titleArr = {
      sell: ['Danh mục', 'Tình trạng', 'Số lượng'],
      custom: ['Danh mục', 'Tình trạng', 'Số lượng', 'Ý tưởng'],
      donate: ['Danh mục', 'Tình trạng', 'Số lượng'],
    };

    const contentArr = {
      sell: [product.category, product.status, product.amount],
      custom: [product.category, product.status, product.amount, product.idea_description],
      donate: [product.category, product.status, product.amount]
    };

    const newproducts = {
      ...product,
      title: titleArr[service],
      content: contentArr[service],
    };

    setProduct((prev) => [newproducts, ...prev]);
    onSubmit();
  };

  useEffect(() => {
    const timer = error && !isLoading && !response.data
      ? setTimeout(() => onError(error), 2000)
      : !error && !isLoading && response.data
        ? setTimeout(successHandle, 3000)
        : null;
    return () => clearTimeout(timer);
  }, [isLoading]);

  return (
        <div className={classes.loading}>
            <Spinner />
            <p className={classes.loading__message}>Đang thêm sản phẩm</p>
        </div>
  );
};

export default FormStep3;
