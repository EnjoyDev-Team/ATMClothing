import React from 'react';
import BoxWrapper from '../../BoxWrapper/BoxWrapper';
import ButtonCT from '../../ButtonCT/ButtonCT';
import DetailCard from '../../DetailCard/DetailCard';
import classes from './ServiceDetails.module.scss';

const productDetails = [
  {
    name: 'Đầm dạ hội dành cho nữ',
    title: ['Danh mục', 'Tình trạng', 'Số lượng'],
    content: ['Thời trang nữ', 'Tốt', '2'],
    price: '80.000đ',
  },
  {
    name: 'Đầm dạ hội dành cho nữ',
    title: ['Danh mục', 'Tình trạng', 'Số lượng'],
    content: ['Thời trang nữ', 'Tốt', '2'],
    price: '80.000đ',
  },
  {
    name: 'Đầm dạ hội dành cho nữ',
    title: ['Danh mục', 'Tình trạng', 'Số lượng'],
    content: ['Thời trang nữ', 'Tốt', '2'],
    price: '80.000đ',
  },
];

const ServiceDetails = () => (
    <div className={classes.main}>
        <BoxWrapper heading="Bán sản phẩm" width="69.5rem" height="41.3rem">
            <>
                {productDetails.map((el, index) => {
                  const keys = `${el.name}_${index}`;
                  return <DetailCard key={keys} details={el} />;
                })}
            </>
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
                        <div>130.000đ</div>
                    </div>
                </div>
                <div className={classes.order__content__controls}>
                    <ButtonCT type="button" redLinear content="Hủy" />
                    <ButtonCT type="button" greenLinear content="Thanh toán" />
                </div>
            </>
        </BoxWrapper>
    </div>
);

export default ServiceDetails;
