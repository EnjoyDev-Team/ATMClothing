import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faCloudArrowUp, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import classes from './styles.module.scss';
import test from '../../assets/imgs/test.jpg';

const AddProduct = () => {
  const [isButton, setButton] = useState(false);

  const handleSuccess = () => {
    setButton((prev) => !prev);
  };

  return (
        <div className={classes.addproduct}>
            <div className={classes.addproduct__back}>
                <Link to="/products">
                    <FontAwesomeIcon className={classes['addproduct__back-icon']} icon={faReply} />
                </Link>
                <h1>Add Product</h1>
            </div>

            <div className={classes.addproduct__upload}>
                <FontAwesomeIcon className={classes['addproduct__upload-icon']} icon={faCloudArrowUp} />
                <p>Drag & Drop your file here</p>
                <p>Or</p>
                <button>Browse Files</button>
            </div>

            <div className={classes.addproduct__information}>
                <div className={classes['addproduct__infomation-upload']}>
                    <h3>Uploaded File</h3>

                    <div className={classes['addproduct__infomation-upload-info']}>
                        <div>
                            <img src={test} alt="" />
                            <p>Chân váy đen.png</p>
                        </div>

                        <div className={classes['addproduct__infomation-upload-wrap-progress']}>
                            <div className={classes['addproduct__infomation-upload-progress']}> </div>
                            <FontAwesomeIcon
                              className={classes['addproduct__infomation-upload-progress-icon']}
                              icon={faCircleXmark}
                            />
                        </div>
                    </div>
                </div>
                <div className={classes['addproduct__infomation-wrap']}>
                    <div className={classes['addproduct__infomation-name']}>
                        <h3>Product Name</h3>
                        <input type="text" />
                    </div>

                    <div className={classes['addproduct__infomation-catrgory']}>
                        <h3>Category</h3>
                        <select name="" id="">
                            <option value="">Thời trang nữ - Quần & Chân váy</option>
                        </select>
                    </div>
                </div>

                <div className={classes['addproduct__infomation-wrap']}>
                    <div className={classes['addproduct__infomation-price']}>
                        <h3>Original Price</h3>
                        <input type="text" />
                    </div>
                    <div className={classes['addproduct__infomation-price']}>
                        <h3>Promotional Price</h3>
                        <input type="text" />
                    </div>
                    <div className={classes['addproduct__infomation-product']}>
                        <h3>Product No</h3>
                        <input type="text" />
                    </div>
                    <div className={classes['addproduct__infomation-amount']}>
                        <h3>Amount</h3>
                        <select name="" id="">
                            <option value="">1</option>
                        </select>
                    </div>
                </div>

                <div className={classes['addproduct__infomation-wrap']}>
                    <div className={classes['addproduct__infomation-size']}>
                        <h3>Size</h3>
                        <select name="" id="">
                            <option value="">S</option>
                        </select>
                    </div>
                    <div className={classes['addproduct__infomation-color']}>
                        <h3>Color</h3>
                        <input type="text" />
                    </div>
                    <div className={classes['addproduct__infomation-subsidiary']}>
                        <h3>Subsidiary</h3>
                        <select name="" id="">
                            <option value="">Đại học ngân hàng</option>
                        </select>
                    </div>
                </div>
                <div className={classes['addproduct__infomation-description']}>
                    <h3>Description</h3>
                    <textarea name="" id="" rows="10">
                        {' '}
                    </textarea>
                </div>

                <button onClick={handleSuccess} className={isButton && classes['addproduct__information-success']}>
                    {!isButton ? 'Thêm sản phẩm' : 'Lưu thành công'}
                </button>
            </div>
        </div>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
