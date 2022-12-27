/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import img1 from '../../assets/imgs/service/ClothesinLaundry.png';
import img2 from '../../assets/imgs/service/GardenerSkinType3.png';
import img3 from '../../assets/imgs/service/EnvironmentCare.png';
import classes from './ReasonUsing.module.scss';

const ReasonUsing = () => (
    <div className={classes.reason__container}>
        <h3 className={classes.title}>3 LÝ DO NÊN SỬ DỤNG HỆ THỐNG ATM CLOTHING</h3>
        <div className={classes.body}>
            <div className={classes.Content}>
                <h4 className={classes.reason}>CÔNG NGHỆ SÁT KHUẨN HIỆN ĐẠI</h4>
                <img src={img1} className={classes.img} alt="" />
                <div className={classes.border}>
                    <p className={classes.content}>
                        Hệ thống sát khuẩn, tẩy quần áo mới nhất được đưa vào sử dụng
                    </p>
                </div>
            </div>
            <div className={classes.Content}>
                <h4 className={classes.reason}>ĐỘI NGŨ THIẾT KẾ ĐẦY KINH NGHIỆM</h4>
                <img src={img2} className={classes.img} alt="" />
                <div className={classes.border}>
                    <p className={classes.content}>
                        Đội ngũ thiết kế đến từ trường Đại học Sư phạm Kỹ thuật TP HCM
                    </p>
                </div>
            </div>
            <div className={classes.Content}>
                <h4 className={classes.reason}>CHUNG TAY BẢO VỆ MÔI TRƯỜNG</h4>
                <img src={img3} className={classes.img} alt="" />
                <div className={classes.border}>
                    <p className={classes.content}>
                        Mỗi 1 bộ quần áo được sử dụng lại giúp mỗi trường trong sạch hơn
                    </p>
                </div>
            </div>
        </div>
    </div>
);

export default ReasonUsing;
