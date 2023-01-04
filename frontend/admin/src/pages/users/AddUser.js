/* eslint-disable space-infix-ops */
/* eslint-disable quotes */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable object-curly-spacing */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable import/no-relative-packages */
/* eslint-disable import/no-unresolved */
/* eslint-disable arrow-body-style */
/* eslint-disable indent */
import { React, useState } from 'react';
import classes from './EditUser.module.scss';
import avatar from '../../assets/imgs/users/avatar.jpg';
import camera from '../../assets/imgs/users/Camera.png';
import FormCreate from '../../components/users/FormCreate';
import { axiosClient } from '../../api/axios';

// eslint-disable-next-line react/prop-types
const AddUser = () => {
    const [userInfor, setUserInfor] = useState({ phone: '', name: '', role: '', dob: '', gender: '', active: true });
    function getData(e) {
        setUserInfor({
            ...userInfor,
            [e.target.name]: e.target.value,
        });
    }
    console.log(userInfor);
    const [isSuccess, setIsSussess] = useState(false);
    function sendForm(e) {
        axiosClient
            .post('/users', userInfor)
            .then((res) => {
                setIsSuccess(true);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <main className={classes.edit__body}>
            <div className={classes.edit__header}>
                <p>Create User</p>
                <div>
                    <img src={avatar} alt="" className={classes.avatar} />
                    <img src={camera} alt="" className={classes.camera__icon} />
                </div>
                <p className={classes.username}>Trần Duy Khương</p>
            </div>
            <div>
                <FormCreate
                    className={classes.edit__form}
                    userInfor={userInfor}
                    setUserInfor={setUserInfor}
                    getData={getData}
                />
            </div>
            <div className={classes.btn__container}>
                <button onClick={sendForm} className={classes.saveBtn}>
                    Thêm người dùng
                </button>
                {isSuccess ? <button className={classes.saveBtnSuccess}>Lưu thành công</button> : ''}
            </div>
        </main>
    );
};

export default AddUser;
