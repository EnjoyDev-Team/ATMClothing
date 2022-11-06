import React from 'react';
import BoxWrapper from '../../components/BoxWrapper/BoxWrapper';
import DetailCard from '../../components/DetailCard/DetailCard';
import classes from './Sell.module.scss';

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

const Sell = () => (
    <main>
        <div className={classes.header}>
            <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
            <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
        </div>
        <div className={classes.main}>
            <BoxWrapper heading="Bán sản phẩm" width="69.5rem" height="42rem">
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
                    <button type="button">Hủy</button>
                    <button type="button">Thanh toán</button>
                </div>
            </>
            </BoxWrapper>
        </div>
    </main>
);

export default Sell;
