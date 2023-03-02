/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import DetailCard from '../DetailCard/DetailCard';

const Details = ({ productDetails, setProduct, service }) => (
    <>
        {productDetails && productDetails.length
          ? productDetails.map((el) => (
            <DetailCard service={service} setProduct={setProduct} key={el._id} details={el} />
          ))
          : !productDetails
            ? 'loading...'
            : 'Vui lòng thêm sản phẩm để tiếp tục sử dụng dịch vụ'}
        {}
    </>
);

Details.propTypes = {
  setProduct: PropTypes.func.isRequired,
  service: PropTypes.string.isRequired,
  productDetails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.arrayOf(PropTypes.string).isRequired,
      content: PropTypes.any.isRequired,
      price: PropTypes.string,
    })
  ),
};

Details.defaultProps = {
  productDetails: [],
};

export default Details;
