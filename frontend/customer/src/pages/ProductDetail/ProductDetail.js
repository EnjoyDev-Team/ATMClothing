import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocationDot, faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link, useParams } from 'react-router-dom';
import classes from './styles.module.scss';
import Coin from '../../assets/imgs/coin.png';
import Button from '../../components/ButtonCT/ButtonCT';
import facebook from '../../assets/imgs/facebook.png';
import instagram from '../../assets/imgs/instagram.png';
import useAxios from '../../hooks/useAxios';
import CardProduct from '../../components/cardProduct/CardProduct';

const productDetail = {
  coin: 22,
  describe:
        'Ngoài sản phẩm này ra, chúng mình có nhận pre - order sản phẩm tương tự hoặc custom theo yêu cầu của các bạn. Với sự tâm huyết và tỉ mỉ trong từng sản phẩm, chúng mình luôn sẵn sàng gửi đến bạn những trải nghiệm tuyệt vời nhất khi mua sắm. Chính vì vậy bạn hãy đến với chúng mình nhé, chúng ta sẽ cùng nhau tạo ra những giá trị tuyệt vời! CHÚNG MÌNH Ở ĐÂY CHỜ CẬU!',
  storageInstructions: 'Hướng dẫn bảo quản: ',
  preserves: [
    'Hạn chế không nên để giày tiếp xúc nhiều với chất bẩn, đặc biệt là các chất bẩn cứng đầu như máu, cà phê, nhựa trái cây...',
    'Bảo quản giày ở nơi khô ráo, thoáng mát… để tránh các loại nấm mốc.',
  ],
};

const ProductDetail = () => {
  const params = useParams();
  const [response, error, isLoading] = useAxios('get', `/products/${params.id}?fields=-__v`, {}, {}, []);
  const responseData = response.data !== undefined && response.data[0];
  const percentSale = Math.floor(((+responseData.price - +responseData.sale) / +responseData.price) * 100);
  const coin = responseData && responseData.sale.split('.')[0];

  const [dataFilterCategory, errorDataFilter, isLoadingDataFilter] = useAxios(
    'get',
    `/products?limit=5${responseData.slug !== '' ? `&category=${responseData.slug}` : ''}`,
    {},
    {},
    [response]
  );
  const dataFilters = dataFilterCategory.data !== undefined && dataFilterCategory.data;

  return (
        <div className={classes.product__detail}>
            <div className={classes['product__detail-infomation']}>
                <div className={classes['product__detail-infomation-imgs']}>
                    <div className={classes['product__wrap-img-detail']}>
                        <img src={responseData.img} alt="" className={classes['product__img-detail']} />
                    </div>
                    <ul
                      className={`${classes['product__imgs-other-style']} ${
                        responseData.other_img !== undefined && responseData.other_img.length > 3
                          ? classes['product__imgs-other-style--jtc']
                          : classes['product__imgs-other-style--njtc']
                      }`}
                    >
                        {responseData.other_img !== undefined && responseData.other_img.length > 5
                          ? responseData.other_img.slice(0, 5).map((item, idx) => (
                                  <li key={+idx} className={classes['product__img-wrap-other-style']}>
                                      <p className={classes['product__img-wrap-other-style-bg']}>
                                          Xem thêm
{' '}
{responseData.other_img.length - 5}
{' '}
ảnh
                                      </p>
                                      <img src={item} alt="" className={classes['product__img-other-style']} />
                                  </li>
                          ))
                          : responseData.other_img !== undefined
                              && responseData.other_img.map((item, idx) => (
                                  <li
                                    key={+idx}
                                    className={`${classes['product__img-wrap-other-style']} ${
                                      responseData.other_img !== undefined && responseData.other_img.length < 5
                                        ? classes['product__img-wrap-other-style--mr12px']
                                        : ''
                                    }`}
                                  >
                                      <img src={item} alt="" className={classes['product__img-other-style']} />
                                  </li>
                              ))}
                    </ul>
                </div>
                <div className={classes['product__detail-infomation-content']}>
                    <span className={classes['product__detail-infomation-content-heading']}>{responseData.name}</span>

                    <div className={classes['product__detail-wrap-price']}>
                        <div className={classes['product__detail-price-information']}>
                            <div className={classes['product__detail-price']}>
                                <span className={classes['product__detail-price-current']}>
{responseData.sale}
đ
                                </span>
                                <span className={classes['product__detail-price-initial']}>
{responseData.price}
đ
                                </span>
                                <span className={classes['product__detail-price-discount']}>
-
{percentSale}
%
                                </span>
                            </div>

                            <div className={classes['product__detail-price-place']}>
                                <FontAwesomeIcon
                                  className={classes['product__detail-price-place-icon']}
                                  icon={faMapLocationDot}
                                />
                                <span className={classes['product__detail-price-place-content']}>
                                    {responseData.facility && responseData.facility[0].name}
                                </span>
                            </div>
                        </div>

                        <div className={classes['product__detail-bonus']}>
                            <span className={classes['product__detail-bunus-content']}>
                                Thưởng
{' '}
{coin}
                            </span>
                            <img src={Coin} alt="" className={classes['product__detail-bonus-img']} />
                        </div>
                    </div>

                    <div className={classes['product__wrap-infomation']}>
                        <div className={classes['product__wrap-infomation-element']}>
                            <span className={classes['product__wrap-infomation-label']}>Size</span>
                            <span className={classes['product__wrap-infomation-detail']}>{responseData.size}</span>
                        </div>

                        <div className={classes['product__wrap-infomation-element']}>
                            <span className={classes['product__wrap-infomation-label']}>Màu sắc</span>
                            <span className={classes['product__wrap-infomation-detail']}>{responseData.color}</span>
                        </div>

                        <div className={classes['product__wrap-infomation-element']}>
                            <span className={classes['product__wrap-infomation-label']}>Số Lượng</span>
                            <span className={classes['product__wrap-infomation-amount-detail']}>
                                {responseData.amount}
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
                                {responseData.material}
                            </span>
                        </div>

                        <div className={classes['product__detail-infomation-footer-element']}>
                            <span className={classes['product_wrap-infomation-footer-label']}>Danh mục</span>
                            <span className={classes['product_wrap-infomation-footer-detail']}>
                                {responseData.category}
                            </span>
                        </div>

                        <div className={classes['product__detail-infomation-footer-element']}>
                            <span className={classes['product_wrap-infomation-footer-label']}>Tình trạng</span>
                            <span className={classes['product_wrap-infomation-footer-detail']}>
                                {responseData.status}
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
                        {responseData.description}
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
                    {dataFilters
                        && dataFilters.map((item, index) => (
                            <div key={+index} className={classes['product__detail-similar-item']}>
                                <CardProduct
                                  Details={{
                                    _id: item._id,
                                    size: item.size,
                                    amount: item.amount,
                                    name: item.name,
                                    sale: item.sale,
                                    facility:
                                            item.facility !== undefined
                                            && (item.facility.length !== 0 ? item.facility : [{ name: 'Không có' }]),
                                    img: item.img,
                                  }}
                                />
                            </div>
                        ))}
                </div>
            </div>

            {/* <div className={classes['product__detail-watched']}>
                <span className={classes['product__detail-watched-heading']}>Sản phẩm đã xem</span>

                <div className={classes['product__detail-watched-list']}>
                    <div className={classes['product__detail-watched-item']}> </div>
                    <div className={classes['product__detail-watched-item']}>
                        <p>1</p>
                    </div>
                </div>
            </div> */}
        </div>
  );
};

ProductDetail.propTypes = {};

export default ProductDetail;
