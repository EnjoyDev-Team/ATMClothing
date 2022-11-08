/* eslint-disable react/jsx-indent-props */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLoader } from '@fortawesome/free-solid-svg-icons';
import classes from './FormStep3.module.scss';
import BarProgress from '../../components/Services/Form/BarProgress';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';

const FormStep3 = () => (
    <main>
        <div className={classes.formContainer}>
            <h3 className={classes.formHeader}>BÁN SẢN PHẨM-THÊM SẢN PHẨM </h3>
            <div>
                <BarProgress type="state3" />
            </div>
            <div className={classes.loading}>
                <svg
                    width="160"
                    height="160"
                    viewBox="0 0 160 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    // xmlns="http://www.w3.org/1999/xlink"
                >
                    <rect width="160" height="160" fill="url(#pattern0)" />
                    <defs>
                        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlinkHref="#image0_871_688" transform="scale(0.01)" />
                        </pattern>
                        <image
                            // className={classes.loading}
                            id="image0_871_688"
                            width="100"
                            height="100"
                            xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAAE/0lEQVR4nO3dz08cZRzH8c93ZrY0EZrUIq0mTZtQpciC2vaC9bBdYNlq6q+L0UT9E9rAUu1JvAjaSVvizXhWE+sRlx9S2ku9SGrYxUpSGvWgsqhE44+luzOPhzINhd1hl5ln9hnyfSW97E7necg7+7C7s/sAMMYYY4wx/1GtJ1CN3r62J0gjs9R9Y2a2J+j5yGDUegLVII12A+iu9Txk0mo9AXY/DqIYDqIYDqKYUP1S1y36qajb79d6Hoyx7SRULzYrFNjP5OtAJwfajgtBl0TRen780s1f/Dx3rfQOdBwhIT6Gob88NvztD7LH8y3Iaow0gAYA86JonQh7lER/+1GNxASABwH8CMOIyY7iS5B1MRyhjrIaYxLA7jU3S4/i+XVImRgA0EKGPt17pvVhr2MErUwMADiAQmE6+faTB2WN7TUICZsuYGMMRwvpxmTX6ehej+MESiP7IjbGuIvoIFnFM9LG9vj/hU3aKQKyZY8g0RaJ4FqYHim6ob1AwEyp+wj4Ivdn3YCssT0vWRPmbM6C1uUaJWTL1+hwZlkzqAfAN/ffQ5dzf9W9OvPRTEHW2L68l1VFlCthiqIblMC9KHQ5X79HagzA59chXaejeyMGTYFEW9mDBM3ZRPEJczbn59iydJ07vGfHHaPvv4bGd64OXi3KHs/3V6CJVEeTDntKAFGXw74XRSse1qfEMvn+9ruzfIGQcTnscJiWryBJuR4yYc7myIhwlC2Q+qbZyXNPPSSKhSkItLscxsvXGlKvGKaHbizZQuuGoDmXww7B0I/InEeYSL+EO2HO5miHcaLM8mUJ0JvjZnZU9jzCIrD3+UssX5YAvTFuZj4Jag5hEOjFpDVRHucYikikOpp6U9Hnaj0PxhhjjDHGGGNMSWXfOkn0tx8lKvNRmCqNm5mv/DiPSp7tbz1gkfGo2zGGhdujFzO3qzlv2e+HaCRMALFqTuZi230A29K0V0gI1++qWDreBTBYzXn5G1SK4SCK4SCK4SCK4SCMMcYYY4wxxhhj6kim2juTqeh72IbXSPygBzlYMtXeCYgxAN2Hnm7ad+t6jr+GsE5gQdbE2LV60zGOslEgQUrEcHCUdaQHcYnhONbc2bSw8HVuVvZcKpHoi+5vPr5v58L1xX9qMb7U6yEVxACAz1caGj+VOY9KJfqi+zUN0xrsmu3NIu2ZTqUx8vWNrwWxQ8JmnBgAmldvqsl+X1KCbIMYjsCj+L5kbaMYwOouRj1nWx4Jaj6+BglbDADQ6yJ5EP51OaRFtyNXgori25IVxhiOCnecmLe0Qnzyg/mfZc7FlyAVxvgsX9/4upcYscGY8UD+95LbCY4OZ5a3el6gsl2MBHBTJxH/8vzcr17GcuN5yarikeEpBgDs/Pu3Z6yi+KPUPy/nBe7uOIFIJO62YQ4BrbbANZnLl+dNMAExgs0fGcotU6Wkh24sbb6LET2m25G3ZM3B8yaYhQJOAfiuzP2+PDKCdC8KUPKdAwGRppX8WVnje16ypkayi4UC4tgYRclf4JVID91Y0g2Krd+ZVECktZWVl9If3lqRNbYvT3tLRAltDIezM6kTJYgYgI+vQ6ZGsouiaHUDOB/2GI7R4cyyIe4kAXFhVz1elB0DCNlVu2QqGgMwXeq+MTMbqp+lHP70u2I4iGI4iGI4iGI4iGI4iGI4iGI4iGL4T68yxhhjjDHGGGOMMca25H/bMhjLQG5JcwAAAABJRU5ErkJggg=="
                        />
                    </defs>
                </svg>
                <p className={classes.loading__message}>Đang thêm sản phẩm</p>
            </div>
        </div>
    </main>
);

export default FormStep3;
