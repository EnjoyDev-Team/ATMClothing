import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.module.scss';
import logoFooter from '../../assets/imgs/logo_footer.png';
import imgIllustration from '../../assets/imgs/illustration.png';
import decoration from '../../assets/imgs/decoration.png';
import facebook from '../../assets/imgs/facebook.png';
import instagram from '../../assets/imgs/instagram.png';

const Footer = () => (
    <div className={classes.footer}>
        <div className={classes.footer__logo}>
            <img className={classes['footer__logo-img']} src={logoFooter} alt="" />
        </div>

        <div className={classes.footer__introduction}>
            <h2 className={classes['footer__introduction-heading']}>
                Nền tảng mua và bán, tặng, custom quần áo, phụ kiện cũ.
            </h2>
            <p className={classes['footer__introduction-content']}>
                Dù bạn cần bán hay muốn mua chúng tôi đều cung cấp một nền tảng hỗ trợ thật hiệu quả.
            </p>
            <p className={classes['footer__introduction-content']}>
                Nếu bạn là người bán hãy thoải mái cùng ATM CLOTHING giải phóng không gian, trao cho đồ đạc của mình một
                cuộc đời mới.
            </p>
            <p className={classes['footer__introduction-content']}>
                Nếu bạn là người mua, cứ tự tin với những lựa chọn mới, tối ưu và độc đáo hơn từ ATM Clothing.
            </p>
            <p className={classes['footer__introduction-content']}>
                Hãy để ATM Clothing đồng hành cùng các bạn trên hành trình xây dựng lối sống xanh, sạch, bền vững nhé!
            </p>
        </div>

        <div className={classes.footer__illustration}>
            <img className={classes['footer__illustration-img']} src={imgIllustration} alt="" />
        </div>

        <div className={classes.footer__decoration}>
            <img className={classes['footer__decoration-img']} src={decoration} alt="" />
        </div>

        <div className={classes.footer__category}>
            <div className={classes['footer__category-infor']}>
                <h2 className={classes['footer__category-heading']}>Hỗ trợ</h2>
                <ul className={classes['footer__category-list']}>
                    <li className={classes['footer__category-item']}>
                        <a className={classes['footer__category-item-link']} href="#top" alt="">
                            Hướng dẫn bán quần áo
                        </a>
                    </li>
                    <li className={classes['footer__category-item']}>
                        <a className={classes['footer__category-item-link']} href="#top" alt="">
                            Hướng dẫn mua quần áo
                        </a>
                    </li>
                    <li className={classes['footer__category-item']}>
                        <a className={classes['footer__category-item-link']} href="#top" alt="">
                            Các câu hỏi thường gặp
                        </a>
                    </li>
                    <li className={classes['footer__category-item']}>
                        <a className={classes['footer__category-item-link']} href="#top" alt="">
                            Phản hồi
                        </a>
                    </li>
                </ul>
            </div>

            <div className={classes['footer__category-infor']}>
                <h2 className={classes['footer__category-heading']}>Chính sách</h2>
                <ul className={classes['footer__category-list']}>
                    <li className={classes['footer__category-item']}>
                        <a className={classes['footer__category-item-link']} href="#top" alt="">
                            Hướng dẫn bán quần áo
                        </a>
                    </li>
                    <li className={classes['footer__category-item']}>
                        <a className={classes['footer__category-item-link']} href="#top" alt="">
                            Hướng dẫn mua quần áo
                        </a>
                    </li>
                    <li className={classes['footer__category-item']}>
                        <a className={classes['footer__category-item-link']} href="#top" alt="">
                            Các câu hỏi thường gặp
                        </a>
                    </li>
                </ul>
            </div>

            <div className={classes['footer__category-infor']}>
                <h2 className={classes['footer__category-heading']}>Về ATM Clothing</h2>
                <ul className={classes['footer__category-list']}>
                    <li className={classes['footer__category-item']}>
                        <a className={classes['footer__category-item-link']} href="#top" alt="">
                            Hướng dẫn bán quần áo
                        </a>
                    </li>
                    <li className={classes['footer__category-item']}>
                        <a className={classes['footer__category-item-link']} href="#top" alt="">
                            Hướng dẫn mua quần áo
                        </a>
                    </li>
                </ul>
            </div>

            <div className={classes['footer__category-infor']}>
                <h2 className={classes['footer__category-heading']}>Theo dõi chúng tôi</h2>

                <div className={classes['footer__category-social']}>
                    <a href="#1">
                        <img className={classes['footer__category-social-fb']} src={facebook} alt="" />
                    </a>
                    <a href="#1">
                        <img className={classes['footer__category-social-insta']} src={instagram} alt="" />
                    </a>
                </div>
            </div>
        </div>

        <div className={classes.footer__copyright}>
            <p className={classes['footer__copyright-content']}>
                ATM CLOTHING - NỀN TẢNG MUA VÀ BÁN, TẶNG, CUSTOM QUẦN ÁO CŨ
            </p>
            <p className={classes['footer__copyright-content']}>Địa chỉ: phường Linh Trung, Thành phố Thủ Đức</p>
        </div>
    </div>
);

Footer.propTypes = {};

export default Footer;
