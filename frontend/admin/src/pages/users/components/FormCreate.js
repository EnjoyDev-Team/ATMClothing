/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import classes from './Form.module.scss';

const FormCreate = ({ userInfor, setUserInfor, getData }) => (
        <main>
            <div className={classes.form__table}>
                <div className={classes.container__flex}>
                    <div className={classes.input__container}>
                        <p>Phone</p>
                        <input
                          onChange={getData}
                          name="phone"
                          type="text"
                          style={{ width: '411px' }}
                          value={userInfor.phone}
                        />
                    </div>
                    <div className={classes.input__container}>
                        <p>Role</p>
                        <input onChange={getData} name="role" type="text" value={userInfor.role} />
                    </div>
                </div>
                <div className={classes.container__flex}>
                    <div className={classes.input__container}>
                        <p>Name</p>
                        <input
                          onChange={getData}
                          name="name"
                          type="text"
                          style={{ width: '411px' }}
                          value={userInfor.name}
                        />
                    </div>
                    <div className={classes.input__container}>
                        <p>Gender</p>
                        <input onChange={getData} name="gender" type="text" value={userInfor.gender} />
                    </div>
                </div>
                {/* <div className={classes.input__container}>
                    <p>Address</p>
                    <input onChange={getData} name="address"
                    type="text" style={{ width: '621px' }} value={userInfor.} />
                </div> */}
                <div className={classes.input__container}>
                    <p>Email</p>
                    <input
                      onChange={getData}
                      name="email"
                      type="text"
                      style={{ width: '621px' }}
                      value={userInfor.email}
                    />
                </div>
                <div className={classes.input__container}>
                    <p>Date of birth</p>
                    <input onChange={getData} name="dob" type="date" value={userInfor.dob} />
                </div>
                <div className={classes.status}>
                    <p>Status:</p>
                    <div>
                        <input
                          onChange={getData}
                          type="radio"
                          name="active"
                          id="active"
                          value="true"
                          checked={userInfor.active === true}
                        />
                        <label htmlFor="active">Active</label>
                    </div>
                    <div>
                        <input
                          onChange={getData}
                          type="radio"
                          name="active"
                          id="inactive"
                          value="false"
                          checked={userInfor.active === false}
                        />
                        <label htmlFor="inactive">Inactive</label>
                    </div>
                </div>
            </div>
        </main>
);

export default FormCreate;
