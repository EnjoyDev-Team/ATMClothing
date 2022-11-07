/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import img1 from '../../../assets/imgs/ATMClothing/Clothes in Laundry.png';
import img3 from '../../../assets/imgs/ATMClothing/Environment Care.png';
import img2 from '../../../assets/imgs/ATMClothing/Gardener Skin Type 3.png';
import classes from './ReasonUsing.module.scss';

const ReasonUsing = () => (
    <div>
        <h3 className={classes.title}>3 LÝ DO NÊN SỬ DỤNG HỆ THỐNG ATM CLOTHING</h3>
        <div className={classes.body}>
            <div className={classes.Content}>
                <h4 className={classes.reason}>
                    CÔNG NGHỆ SÁT <br />
                    KHUẨN HIỆN ĐẠI
                </h4>
                <img src={img1} className={classes.img} alt="" />
                <div className={classes.border}>
                    <p className={classes.content}>
                        Hệ thống sát khuẩn, tẩy <br /> quần áo mới nhất được đưa
                        <br /> vào sử dụng
                    </p>
                </div>
            </div>
            <div className={classes.Content}>
                <h4 className={classes.reason}>
                    ĐỘI NGŨ THIẾT KẾ <br />
                    ĐẦY KINH NGHIỆM
                </h4>
                <img src={img2} className={classes.img} alt="" />
                <div className={classes.border}>
                    <p className={classes.content}>
                        Đội ngũ thiết kế đến từ <br />
                        trường Đại học Sư phạm
                        <br /> Kỹ thuật TP HCM
                    </p>
                </div>
            </div>
            <div className={classes.Content}>
                <h4 className={classes.reason}>
                    CHUNG TAY BẢO
                    <br />
                    VỆ MÔI TRƯỜNG
                </h4>
                <img src={img3} className={classes.img} alt="" />
                <div className={classes.border}>
                    <p className={classes.content}>
                        Mỗi 1 bộ quần áo được <br />
                        sử dụng lại giúp mỗi
                        <br /> trường trong sạch hơn
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default ReasonUsing;
