/* eslint-disable object-curly-spacing */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-relative-packages */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
import React from 'react';
import classes from './EditUser.module.scss';
import avatar from '../../assets/imgs/users/avatar.jpg';
import camera from '../../assets/imgs/users/Camera.png';
import FormCreate from './components/FormCreate';

// eslint-disable-next-line react/prop-types
const EditUser = () => {
    return (
        <main className={classes.edit__body}>
            <div className={classes.edit__header}>
                <p>Edit User</p>
                <div>
                    <img src={avatar} alt="" className={classes.avatar} />
                    <img src={camera} alt="" className={classes.camera__icon} />
                </div>
                <p className={classes.username}>Trần Duy Khương</p>
            </div>
            <div>
                <FormCreate className={classes.edit__form} />
            </div>
            <div className={classes.btn__container}>
                <button className={classes.saveBtn}>Thêm người dùng</button>
                <button className={classes.saveBtnSuccess}>Lưu thành công</button>
            </div>
        </main>
    );
};

export default EditUser;
