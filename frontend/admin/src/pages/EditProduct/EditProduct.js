/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { React, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faCloudArrowUp, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import classes from './styles.module.scss';

const AddProduct = () => {
  const [isButton, setButton] = useState(false);
  const [fileDrop, setFileDrop] = useState([]);
  const [files, setFile] = useState([]);

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
    noClick: true,
  });

  useEffect(() => {
    setFile([...acceptedFiles]);
    // setFileDrop([...acceptedFiles]);
  }, [acceptedFiles]);

  const handleSuccess = () => {
    setButton((prev) => !prev);
  };

  const handleImg = (e) => {
    setFile(Array.from(e.target.files));
  };

  const handleRemoveImg = (name) => {
    setFile((prev) => prev.filter((item) => name !== item.name));
    // setFileDrop(prev => prev.filter(item => name !== item.name));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
        <div className={classes.addproduct}>
            <div className={classes.addproduct__back}>
                <Link to="/products">
                    <FontAwesomeIcon className={classes['addproduct__back-icon']} icon={faReply} />
                </Link>
                <h1>Edit Product</h1>
            </div>

            <div
              {...getRootProps()}
              className={`${classes.addproduct__upload} ${isDragActive && classes['addproduct__upload-height']}`}
            >
                {isDragActive ? (
                    <p className={classes['addproduct__upload--active-notify']}>Release to drop the files here</p>
                ) : (
                    <>
                        <FontAwesomeIcon className={classes['addproduct__upload-icon']} icon={faCloudArrowUp} />
                        <p>Drag & Drop your file here</p>
                        <p>Or</p>
                        {/* <input {...getInputProps()} accept="image/*" /> */}
                        <input
                          title=""
                          className={classes['addproduct__upload-custom-file-input']}
                          onChange={(e) => handleImg(e)}
                          type="file"
                          name="files[]"
                          accept="image/*"
                          multiple
                        />
                        {/* <aside>
                            <ul>{filetest}</ul>
                        </aside> */}
                    </>
                )}
            </div>

            <div className={classes.addproduct__information}>
                <form onSubmit={handleSubmit}>
                    <div className={classes['addproduct__infomation-upload']}>
                        <h3>Uploaded File</h3>

                        <div className={classes['addproduct__infomation-wrap-upload-info']}>
                            <div className={classes['addproduct__infomation-upload-info']}>
                                {files.length !== 0
                                    && files.map((file, index) => (
                                        <div key={+index} className={classes['addproduct__infomation-wrap-info-img']}>
                                            <div>
                                                <img src={URL.createObjectURL(file)} alt="" />
                                                <p>{file.name}</p>
                                            </div>

                                            <div className={classes['addproduct__infomation-upload-wrap-progress']}>
                                                <div className={classes['addproduct__infomation-upload-progress']}>
                                                    {' '}
                                                </div>
                                                <FontAwesomeIcon
                                                  onClick={() => handleRemoveImg(file.name)}
                                                  className={classes['addproduct__infomation-upload-progress-icon']}
                                                  icon={faCircleXmark}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                {/* {fileDrop.length !== 0
                                    && fileDrop.map((file, index) => (
                                        <div className={classes['addproduct__infomation-wrap-info-img']}>
                                            <div>
                                                <img src={URL.createObjectURL(file)} alt="" />
                                                <p>{file.name}</p>
                                            </div>

                                            <div className={classes['addproduct__infomation-upload-wrap-progress']}>
                                                <div className={classes['addproduct__infomation-upload-progress']}>
                                                    {' '}
                                                </div>
                                                <FontAwesomeIcon
                                                  onClick={() => handleRemoveImg(file.name)}
                                                  className={classes['addproduct__infomation-upload-progress-icon']}
                                                  icon={faCircleXmark}
                                                />
                                            </div>
                                        </div>
                                    ))} */}
                            </div>
                        </div>
                    </div>
                    <div className={classes['addproduct__infomation-wrap']}>
                        <div className={classes['addproduct__infomation-name']}>
                            <h3>Product Name</h3>
                            <input type="text" required />
                        </div>

                        <div className={classes['addproduct__infomation-catrgory']}>
                            <h3>Category</h3>
                            <select name="" id="" required>
                                <option value="" selected disabled>Select</option>
                                <option value="">Thời trang nữ - Quần & Chân váy</option>
                            </select>
                        </div>
                    </div>

                    <div className={classes['addproduct__infomation-wrap']}>
                        <div className={classes['addproduct__infomation-price']}>
                            <h3>Original Price</h3>
                            <input type="text" required />
                        </div>
                        <div className={classes['addproduct__infomation-price']}>
                            <h3>Promotional Price</h3>
                            <input type="text" required />
                        </div>
                        <div className={classes['addproduct__infomation-product']}>
                            <h3>Product No</h3>
                            <input type="text" required />
                        </div>
                        <div className={classes['addproduct__infomation-amount']}>
                            <h3>Amount</h3>
                            <input type="number" min={0} placeholder="0" required />
                            {/* <select name="" id="">
                            <option value="">1</option>
                        </select> */}
                        </div>
                    </div>

                    <div className={classes['addproduct__infomation-wrap']}>
                        <div className={classes['addproduct__infomation-size']}>
                            <h3>Size</h3>
                            <select name="" id="" required>
                                <option value="" selected disabled>Select</option>
                                <option value="">S</option>
                            </select>
                        </div>
                        <div className={classes['addproduct__infomation-color']}>
                            <h3>Color</h3>
                            <input type="text" required />
                        </div>
                        <div className={classes['addproduct__infomation-facility']}>
                            <h3>Facility</h3>
                            <select name="" id="" required>
                                <option value="" selected disabled>Select</option>
                                <option value="">Đại học ngân hàng</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes['addproduct__infomation-description']}>
                        <h3>Description</h3>
                        <textarea name="" id="" rows="10" type="text" required>
                            {' '}
                        </textarea>
                    </div>

                    <button
                      onClick={handleSuccess}
                      className={isButton ? classes['addproduct__information-success'] : ''}
                    >
                        {!isButton ? 'Update sản phẩm' : 'Update thành công'}
                    </button>
                </form>
            </div>
        </div>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
