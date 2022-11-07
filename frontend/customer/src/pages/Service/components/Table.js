/* eslint-disable indent */
/* eslint-disable react/prop-types */
import React from 'react';
import classes from './Table.module.scss';
import Product from './Product';

const Table = ({ content }) => (
    <main>
        <div className={classes.container}>
            {/* order section */}
            <div className={classes.order}>
                <div className={classes.header}>
                    <h2 className={classes.hItem}>{content}</h2>
                    <button>THÊM SẢN PHẨM</button>
                </div>
                <div className={classes.addSection}>
                    <Product name="Đầm dạ hội dành cho nữ" type="custom" />
                    <Product name="Đầm dạ hội dành cho nữ" />
                </div>
            </div>
            {/* receipt section */}
            <div className={classes.receipt}>
                <h2 className={classes.receiptHead}>CHI TIẾT HÓA ĐƠN</h2>
                <div className={classes.receiptDetail}>
                    <div className={classes.menu}>
                        <p>Tổng số lượng sản phẩm</p>
                        <p>Phương thức vận chuyển</p>
                        <p className={classes.total}>{content === 'BÁN SẢN PHẨM' ? 'Tổng tiền dự kiến' : ''}</p>
                    </div>
                    <div className={classes.data}>
                        <p>2</p>
                        <p>2</p>
                        <p className={classes.total}>{content === 'BÁN SẢN PHẨM' ? '130.000' : ''}</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
);

export default Table;
