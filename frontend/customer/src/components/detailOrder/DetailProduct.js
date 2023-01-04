/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import classes from './DetailProduct.module.scss';
import ButtonCT from '../ButtonCT/ButtonCT';
import { ReactComponent as EyeIcon } from '../../assets/svg/detailRequest/eye.svg';

const DetailProduct = ({ productDetail, index }) => {
  const [show, setShow] = useState(false);

  function toggleDetail() {
    setShow((prev) => !prev);
  }

  const havePreImage = productDetail.pre_img && true;
  const havePostImage = productDetail.post_img && true;

  const haveDescription = productDetail.description && true;
  const haveImage = havePreImage || havePostImage;

  const haveMaterial = productDetail.material && true;
  const haveSize = productDetail.size && true;

  const haveOthers = haveMaterial || haveSize;

  return (
        <main className={classes.detail__product__main}>
            <h4 className={classes.number__product}>
                Sản phẩm
                {' '}
                {index + 1}
            </h4>
            <div className={classes.detail__container}>
                <div className={`${classes.detail__container__view}${show ? ` ${classes.show}` : ''}`}>
                    <div className={classes.content__section}>
                        <div className={classes.title}>
                            <p>Tên sản phẩm:</p>
                            <p>Danh mục:</p>
                            <p>Tình trạng:</p>
                            <p>Số lượng hàng hiện có:</p>
                            {haveImage ? <p>Hình ảnh sản phẩm:</p> : ''}
                        </div>
                        <div className={classes.detail__content}>
                            <p>{productDetail.name}</p>
                            <p>{productDetail.category}</p>
                            <p>{productDetail.status}</p>
                            <p>1</p>
                        </div>
                        {show === true ? (
                            <ButtonCT onClick={() => toggleDetail()} className={classes.button__see} borderRadius large>
                                <span>Thu gọn</span>
                                <EyeIcon />
                            </ButtonCT>
                        ) : (
                            <ButtonCT onClick={() => toggleDetail()} className={classes.button__see} borderRadius large>
                                <span>Chi tiết</span>
                                <FontAwesomeIcon icon={faEye} />
                            </ButtonCT>
                        )}
                    </div>
                    <div>
                        <div className={classes.img__container}>
                            {havePreImage ? (
                                <div className={classes.img__left__section}>
                                    <img width={300} src={productDetail.pre_img} alt="mat_truoc" />
                                    <p>Ảnh mặt trước</p>
                                </div>
                            ) : (
                              ''
                            )}
                            {havePostImage ? (
                                <div className={classes.img__right__section}>
                                    <img width={300} src={productDetail.post_img} alt="mat_sau" />
                                    <p>Ảnh mặt sau</p>
                                </div>
                            ) : (
                              ''
                            )}
                        </div>
                        {haveDescription ? (
                            <div className={classes.description__product}>
                                <p>Mô tả sản phẩm: </p>
                                <p>{productDetail.description}</p>
                            </div>
                        ) : (
                          ''
                        )}
                        {haveOthers ? <p className={classes.other__info__header}>Thông tin khác</p> : ''}
                        <div className={classes.other__info__container}>
                            <div className={classes.other__info__title}>
                                {haveMaterial ? <p>Chất liệu:</p> : ''}
                                {haveSize ? <p>Kích cỡ: </p> : ''}
                            </div>
                            <div className={classes.other__info__content}>
                                {haveMaterial ? <p>{productDetail.material || '\u00A0'}</p> : ''}
                                {haveSize ? <p>{productDetail.size || '\u00A0'}</p> : ''}
                            </div>
                        </div>
                        {productDetail.idea_description ? (
                            <div className={classes.idea__custom__container}>
                                <p>Ý tưởng bạn muốn custom:</p>
                                <p>{productDetail.idea_description}</p>
                            </div>
                        ) : (
                          ''
                        )}
                    </div>
                </div>
            </div>
        </main>
  );
};

export default DetailProduct;
