/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable indent */
/* eslint-disable import/no-unresolved */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import classes from './DetailProduct.module.scss';
import ButtonCT from '../ButtonCT/ButtonCT';
import { ReactComponent as EyeIcon } from '../../assets/svg/detailRequest/eye.svg';
import matTruoc1 from '../../assets/imgs/detailRequest/matTruoc 1.png';
import matSau1 from '../../assets/imgs/detailRequest/matSau 1.png';

// eslint-disable-next-line react/prop-types
const DetailProduct = ({ state, index }) => {
    const [show, setShow] = useState(false);

    function toggleDetail() {
        setShow((prev) => !prev);
    }
    return (
        <main className={classes.detail__product__main}>
            <h4 className={classes.number__product}>Sản phẩm {index}</h4>
            <div className={classes.detail__container}>
                <div className={classes.content__section}>
                    <div className={classes.title}>
                        <p>Tên sản phẩm:</p>
                        <p>Danh mục:</p>
                        <p>Tình trạng:</p>
                        <p>Số lượng hàng hiện có:</p>
                        <p>Hình ảnh sản phẩm:</p>
                    </div>
                    <div className={classes.detail__content}>
                        <p>Áo khoác len</p>
                        <p>Thời trang nam</p>
                        <p>Như mới (Hàng mới kèm mác, đã mở bao bì/hộp, chưa qua sử dụng)</p>
                        <p>1</p>
                    </div>
                    {show === true ? (
                        <ButtonCT onClick={toggleDetail} className={classes.button__see} borderRadius large>
                            <span>Thu gọn</span>
                            <EyeIcon />
                        </ButtonCT>
                    ) : (
                        <ButtonCT onClick={toggleDetail} className={classes.button__see} borderRadius large>
                            <span>Chi tiết</span>
                            <FontAwesomeIcon icon={faEye} />
                        </ButtonCT>
                    )}
                </div>
                {show === true ? (
                    <div>
                        <div className={classes.img__container}>
                            <div className={classes.img__left__section}>
                                <img src={matTruoc1} alt="" />
                                <p>Ảnh mặt trước</p>
                            </div>
                            <div className={classes.img__right__section}>
                                <img src={matSau1} alt="" />
                                <p>Ảnh mặt sau</p>
                            </div>
                        </div>
                        <div className={classes.description__product}>
                            <p>Mô tả sản phẩm: </p>
                            <p>Sản phẩm chỉ có những vết bông nhẹ</p>
                        </div>
                        <p className={classes.other__info__header}>Thông tin khác</p>
                        <div className={classes.other__info__container}>
                            <div className={classes.other__info__title}>
                                <p>Chất liệu:</p>
                                <p>Kích cỡ: </p>
                            </div>
                            <div className={classes.other__info__content}>
                                <p>Len sợi</p>
                                <p>XL</p>
                            </div>
                        </div>
                        <div className={classes.idea__custom__container}>
                            <p>Ý tưởng bạn muốn custom:</p>
                            <p>Thêu thêm một số hoa văn Ronaldo trên góc mặt trước ngực phải</p>
                        </div>
                    </div>
                ) : (
                    ''
                )}
            </div>
        </main>
    );
};

export default DetailProduct;
