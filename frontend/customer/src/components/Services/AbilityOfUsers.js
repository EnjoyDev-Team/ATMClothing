/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCashRegister, faGift } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as CustomIcon } from '../../assets/svg/Service/CustomIcon.svg';
import classes from './AbilityOfUsers.module.scss';

const AbilityOfUsers = () => (
    <div>
        <h3>BẠN CÓ THỂ LÀM GÌ VỚI HỆ THỐNG CỦA CHÚNG TÔI?</h3>
        <div className={classes.container}>
            <Link className={classes.ele} to="sale">
                <FontAwesomeIcon icon={faCashRegister} className={classes.icon} />
                <h4>Bán hàng</h4>
                <p>
                    Hãy để lại thông tin các quần áo/phụ kiện bạn cần bán, chúng tôi sẽ liên hệ để hỗ trợ bạn sớm nhất!
                </p>
            </Link>
            <Link className={classes.ele} to="custom">
                <CustomIcon className={classes.icon2} />
                <h4>CUSTOM</h4>
                <p>
                    Sản phẩm bạn muốn chỉnh sửa lại, hãy sử dụng ATM Clothing. Tự hào với đội ngũ thiết kế giàu kinh
                    nghiệm sẽ không làm bạn thất vọng
                </p>
            </Link>
            <Link className={classes.ele} to="donate">
                <FontAwesomeIcon icon={faGift} className={`${classes.icon} ${classes.iconGift}`} />
                <h4>TRAO TẶNG</h4>
                <p>
                    Sản phẩm sau khi tặng cho ATM CLOTHING sẽ được khử khuẩn, tái tạo lại thông qua đội ngũ thiết kế đầy
                    kinh nghiệm trước khi mang đi giúp đỡ các đồng bào vùng cao đang gặp nhiều khó khăn.
                </p>
            </Link>
        </div>
    </div>
);

export default AbilityOfUsers;
