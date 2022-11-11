import React from 'react';
import PropTypes from 'prop-types';
import classes from './Shopping.module.scss';
import Cartproductcard from '../../components/cartproductcard/CartProductCard';

const Shopping = () => (
        <div>
            {/* <div className={classes.header}>
                <h1>Giỏ hàng của bạn</h1>
                <p>Cảm ơn bạn đã sử dụng nền tảng của chúng tôi để góp phần bảo vệ môi trường và cộng đồng</p>
            </div> */}
            <Cartproductcard />
        </div>
);

Shopping.propTypes = {

};

export default Shopping;
