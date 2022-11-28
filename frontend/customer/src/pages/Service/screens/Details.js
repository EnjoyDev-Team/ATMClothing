/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import DetailCard from '../../../components/DetailCard/DetailCard';

const Details = ({ productDetails }) => (
    <>
        {productDetails && productDetails.length
          ? productDetails.map((el, index) => {
            const keys = `${el.name}_${index}`;
            return <DetailCard key={keys} details={el} />;
          })
          : 'loading...'}
        {}
    </>
);

Details.propTypes = {
  productDetails: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      title: PropTypes.arrayOf(PropTypes.string).isRequired,
      content: PropTypes.any.isRequired,
      price: PropTypes.string,
    })
  )
};

Details.defaultProps = {
  productDetails: []
};

export default Details;
