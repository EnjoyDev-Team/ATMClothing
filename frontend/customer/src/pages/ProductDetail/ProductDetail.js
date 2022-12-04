import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';
import jacket from '../../assets/imgs/jacket.png';
import other from '../../assets/imgs/other.png';
import coin from '../../assets/imgs/coin.png';
import Button from '../../components/ButtonCT/ButtonCT';
import facebook from '../../assets/imgs/facebook.png';
import instagram from '../../assets/imgs/instagram.png';
import useAxios from '../../hooks/useAxios';

const productDetail = {
  imgJacket: jacket,
  imgsOther: [other, other, other, other, other],
  title: 'Áo blazer unisex caro phối jeans cá tính',
  currentPrice: '189.000đ',
  initialPrice: '438.000đ',
  discountPrice: '-49%',
  location: 'Thủ Đức',
  coin: 22,
  size: 'XL, oversize, m70-m75, 50kg-65kg',
  color: 'Xám đen',
  amount: 1,
  material: 'Len',
  category: 'Thời trang nam',
  condition: 'Như mới',
  describe:
        'Ngoài sản phẩm này ra, chúng mình có nhận pre - order sản phẩm tương tự hoặc custom theo yêu cầu của các bạn. Với sự tâm huyết và tỉ mỉ trong từng sản phẩm, chúng mình luôn sẵn sàng gửi đến bạn những trải nghiệm tuyệt vời nhất khi mua sắm. Chính vì vậy bạn hãy đến với chúng mình nhé, chúng ta sẽ cùng nhau tạo ra những giá trị tuyệt vời! CHÚNG MÌNH Ở ĐÂY CHỜ CẬU!',
  storageInstructions: 'Hướng dẫn bảo quản: ',
  preserves: [
    'Hạn chế không nên để giày tiếp xúc nhiều với chất bẩn, đặc biệt là các chất bẩn cứng đầu như máu, cà phê, nhựa trái cây...',
    'Bảo quản giày ở nơi khô ráo, thoáng mát… để tránh các loại nấm mốc.',
  ],
};

const ProductDetail = () => {
  const [response, error, isLoading] = useAxios('get', '/products?limit=2', {}, {}, []);
  console.log(response);

  return (
        <div className={classes.product__detail}>
            <div className={classes['product__detail-infomation']}>
                <div className={classes['product__detail-infomation-imgs']}>
                    <div className={classes['product__wrap-img-detail']}>
                        <img src={productDetail.imgJacket} alt="" className={['product__img-detail']} />
                    </div>
                    <ul className={classes['product__imgs-other-style']}>
                        {productDetail.imgsOther.map((img, index) => (
                            <li key={+index} className={classes['product__img-wrap-other-style']}>
                                <div className={classes['product__img-wrap-other-style-bg']}>
                                    <img src={img} alt="" className={classes['product__img-other-style']} />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={classes['product__detail-infomation-content']}>
                    <span className={classes['product__detail-infomation-content-heading']}>{productDetail.title}</span>

                    <div className={classes['product__detail-wrap-price']}>
                        <div className={classes['product__detail-price-information']}>
                            <div className={classes['product__detail-price']}>
                                <span className={classes['product__detail-price-current']}>
                                    {productDetail.currentPrice}
                                </span>
                                <span className={classes['product__detail-price-initial']}>
                                    {productDetail.initialPrice}
                                </span>
                                <span className={classes['product__detail-price-discount']}>
                                    {productDetail.discountPrice}
                                </span>
                            </div>

                            <div className={classes['product__detail-price-place']}>
                                <FontAwesomeIcon
                                  className={classes['product__detail-price-place-icon']}
                                  icon={faMapLocationDot}
                                />
                                <span className={classes['product__detail-price-place-content']}>
                                    {productDetail.location}
                                </span>
                            </div>
                        </div>

                        <div className={classes['product__detail-bonus']}>
                            <span className={classes['product__detail-bunus-content']}>
                                Thưởng
{' '}
{productDetail.coin}
                            </span>
                            <img src={coin} alt="" className={classes['product__detail-bonus-img']} />
                        </div>
                    </div>

                    <div className={classes['product__wrap-infomation']}>
                        <div className={classes['product__wrap-infomation-element']}>
                            <span className={classes['product__wrap-infomation-label']}>Size</span>
                            <span className={classes['product__wrap-infomation-detail']}>{productDetail.size}</span>
                        </div>

                        <div className={classes['product__wrap-infomation-element']}>
                            <span className={classes['product__wrap-infomation-label']}>Màu sắc</span>
                            <span className={classes['product__wrap-infomation-detail']}>{productDetail.color}</span>
                        </div>

                        <div className={classes['product__wrap-infomation-element']}>
                            <span className={classes['product__wrap-infomation-label']}>Số Lượng</span>
                            <span className={classes['product__wrap-infomation-amount-detail']}>
                                {productDetail.amount}
{' '}
sản phẩm
                            </span>
                        </div>
                    </div>

                    <div className={classes['product__detail-infomation-button']}>
                        <Button outlineBtn borderRadius className={classes['product__detail-infomation-button-left']}>
                            Thêm vào giỏ hàng
                        </Button>
                        <Button
                          outlineBtn
                          borderRadius
                          greenLinear
                          className={classes['product__detail-infomation-button-right']}
                        >
                            Mua ngay
                        </Button>
                    </div>

                    <div className={classes['product__detail-infomation-wrap-footer']}>
                        <div className={classes['product__detail-infomation-footer-element']}>
                            <span className={classes['product_wrap-infomation-footer-label']}>Chất liệu</span>
                            <span className={classes['product_wrap-infomation-footer-detail']}>
                                {productDetail.material}
                            </span>
                        </div>

                        <div className={classes['product__detail-infomation-footer-element']}>
                            <span className={classes['product_wrap-infomation-footer-label']}>Danh mục</span>
                            <span className={classes['product_wrap-infomation-footer-detail']}>
                                {productDetail.category}
                            </span>
                        </div>

                        <div className={classes['product__detail-infomation-footer-element']}>
                            <span className={classes['product_wrap-infomation-footer-label']}>Tình trạng</span>
                            <span className={classes['product_wrap-infomation-footer-detail']}>
                                {productDetail.condition}
                            </span>
                        </div>

                        <div className={classes['product__detail-infomation-footer-social']}>
                            <span className={classes['product_wrap-infomation-footer-social-label']}>Chia sẻ</span>
                            <Link to="#1" className={classes['product_wrap-infomation-footer-social-link']}>
                                <img
                                  src={facebook}
                                  alt=""
                                  className={classes['product_wrap-infomation-footer-social-img']}
                                />
                            </Link>
                            <Link to="#1" className={classes['product_wrap-infomation-footer-social-link']}>
                                <img
                                  src={instagram}
                                  alt=""
                                  className={classes['product_wrap-infomation-footer-social-img']}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className={classes['product__detail-describe']}>
                <div className={classes['product__detail-describe-wrap-heading']}>
                    <span className={classes['product__detail-describe-heading']}>Mô tả sản phẩm</span>
                </div>

                <div className={classes['product__detail-describe-heading-wrap-content']}>
                    <span className={classes['product__detail-describe-heading-content']}>
                        {productDetail.describe}
                    </span>
                    <FontAwesomeIcon className={classes['product__detail-describe-heading-icon']} icon={faHeart} />
                </div>

                <div className={classes['product__detail-describe-wrap-storage-instructions']}>
                    <span className={classes['product__detail-describe-storage-instructions']}>
                        {productDetail.storageInstructions}
                    </span>
                    <ul className={classes['product__detail-describe-storage-instructions-list']}>
                        {productDetail.preserves.map((preserve, index) => (
                            <li
                              key={+index}
                              className={classes['product__detail-describe-storage-instructions-content']}
                            >
                                {preserve}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className={classes['product__detail-benefit-wrap-heading']}>
                    <span className={classes['product__detail-benefit-heading']}>
                        Lợi ích khi mua hàng trên ATM Clothing
                    </span>
                </div>
                <span className={classes['product__detail-benefit-heading-content']}>
                    Lợi ích khi mua hàng chính hãng Supersports trên sàn Thương mại điện tử:
{' '}
                </span>
                <span className={classes['product__detail-benefit-heading-content']}>
                    100% sản phẩm bạn nhận được là hàng thật, hàng chính hãng với chất lượng tương đương khi mua tại các
                    cửa hàng chính hãng.
                </span>
                <span className={classes['product__detail-benefit-heading-content']}>
                    Bạn sẽ được trải nghiệm phương thức mua sắm đơn giản, chi phí hợp lý, hỗ trợ giao hàng tận nơi, tỷ
                    lệ phản hồi chat nhanh, chính sách hoàn trả sản phẩm và rất nhiều chính sách ưu việt khác từ sàn.
                </span>
            </div>

            <div className={classes['product__detail-similar']}>
                <span className={classes['product__detail-similar-heading']}>Sản phẩm tương tự</span>

                <div className={classes['product__detail-similar-list']}>
                    <div className={classes['product__detail-similar-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['product__detail-similar-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['product__detail-similar-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['product__detail-similar-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['product__detail-similar-item']}>
                        <p>1</p>
                    </div>
                </div>
            </div>

            <div className={classes['product__detail-watched']}>
                <span className={classes['product__detail-watched-heading']}>Sản phẩm tương tự</span>

                <div className={classes['product__detail-watched-list']}>
                    <div className={classes['product__detail-watched-item']}>
                        <p>1</p>
                    </div>
                    <div className={classes['product__detail-watched-item']}>
                        <p>1</p>
                    </div>
                </div>
            </div>
        </div>
  );
};

ProductDetail.propTypes = {};

export default ProductDetail;
