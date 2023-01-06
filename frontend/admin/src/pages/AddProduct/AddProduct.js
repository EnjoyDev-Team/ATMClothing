/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-props-no-spreading */
import { React, useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faCloudArrowUp, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import classes from './styles.module.scss';
import convert2base64 from '../../utils/convert2base64';
import { axiosPrivate } from '../../api/axios';
import useAxios from '../../hooks/useAxios';
import { formatDotMoney } from '../../utils/formatMoney';

const AddProduct = () => {
  const [isButton, setButton] = useState(false);
  const [files, setFile] = useState([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [sale, setSale] = useState('');
  const [amount, setAmount] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [facility, setFacility] = useState('');
  const [material, setMaterial] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [status, setStatus] = useState('');
  const [description, setDescription] = useState('');
  const [mainImg, setMainImg] = useState('');
  const [otherImg, setOtherImg] = useState([]);
  const [data, setData] = useState({});

  const usenavigate = useNavigate();

  const [dataSelect, errorDataSelect, isLoadingDataSelect] = useAxios('get', '/products/filters', {}, {}, []);
  const dataCategory = dataSelect.data !== undefined && dataSelect.data.categories;
  const dataFacilities = dataSelect.data !== undefined && dataSelect.data.facilities;
  const dataMaterials = dataSelect.data !== undefined && dataSelect.data.materials;

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
    noClick: true,
  });

  useEffect(() => {
    setFile([...acceptedFiles]);
  }, [acceptedFiles]);

  const handleImg = (e) => {
    setFile(Array.from(e.target.files));
  };

  const handleRemoveImg = (name) => {
    setFile((prev) => prev.filter((item) => name !== item.name));
  };

  const handleGetName = (e) => {
    setName(e.target.value);
  };

  const handleGetCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleGetPrice = (e) => {
    setPrice(e.target.value);
  };

  const handleGetSale = (e) => {
    setSale(e.target.value);
  };

  const handleGetAmount = (e) => {
    setAmount(e.target.value);
  };

  const handleGetSize = (e) => {
    setSize(e.target.value);
  };

  const handleGetColor = (e) => {
    setColor(e.target.value);
  };

  const handleGetFacility = (e) => {
    setFacility(e.target.value);
  };

  const handleGetMaterial = (e) => {
    setMaterial(e.target.value);
  };

  const handleGetHeight = (e) => {
    setHeight(e.target.value);
  };

  const handleGetWeight = (e) => {
    setWeight(e.target.value);
  };

  const handleGetStatus = (e) => {
    setStatus(e.target.value);
  };

  const handleGetDescription = (e) => {
    setDescription(e.target.value);
  };

  useEffect(() => {
    if (files.length !== 0) {
      files.forEach((file, idx) => {
        if (idx === 0) {
          convert2base64(file)
            .then((data) => {
              setMainImg(data);
            })
            .catch((err) => console.log(err));
        } else {
          convert2base64(file)
            .then((data) => {
              setOtherImg((prev) => [...prev, data]);
            })
            .catch((err) => console.log(err));
        }
      });

      setOtherImg([]);
    }
  }, [files]);

  const handleSubmit = (e) => {
    if (
      name === ''
            || category === ''
            || price === ''
            || sale === ''
            || size === ''
            || height === ''
            || weight === ''
            || color === ''
            || amount === ''
            || material === ''
            || facility === ''
    ) {
      setButton(false);
      alert('Phải nhập tất cả các trường dữ liệu!!!');

      e.preventDefault();
    } else if (+price < 0 || +sale < 0 || +amount < 0 || +height < 0 || +weight < 0) {
      setButton(false);
      alert('Các trường giá trị không được để giá trị âm');

      e.preventDefault();
    } else if (+price < +sale) {
      setButton(false);
      alert('Số tiền giảm giá cao hơn tiền gốc');

      e.preventDefault();
    } else if (files.length === 0) {
      setButton(false);
      alert('Chưa thêm ảnh');

      e.preventDefault();
    } else {
      setData({
        category: category.split(', ')[0],
        slug: category.split(', ')[1],
        name,
        price: formatDotMoney(price),
        sale: formatDotMoney(sale),
        size,
        note_size: `${height}, ${weight}`,
        color,
        amount: +amount,
        material,
        facility: [
          {
            code: facility.split('| ')[0],
            name: facility.split('| ')[1],
            address: facility.split('| ')[2],
          },
        ],
        img: mainImg,
        other_img: otherImg,
        description,
        status,
      });
    }

    return false;
  };

  console.log(+price);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      axiosPrivate.post('/products', { product: data }).then((res) => {
        if (res) {
          setButton(true);
          setTimeout(() => {
            setButton(false);
            setFile([]);
            setName('');
            setCategory('');
            setPrice('');
            setSale('');
            setSize('');
            setHeight('');
            setWeight('');
            setColor('');
            setAmount('');
            setMaterial('');
            setFacility('');
            setDescription('');
            setStatus('');
            setMainImg('');
            setOtherImg([]);
            setData({});
          }, 2000);
        }
      });
    }
  }, [data]);

  return (
        <div className={classes.addproduct}>
            <div className={classes.addproduct__back}>
                <Link to="/admin-products">
                    <FontAwesomeIcon className={classes['addproduct__back-icon']} icon={faReply} />
                </Link>
                <h1>Add Product</h1>
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
                        <input
                          title=""
                          className={classes['addproduct__upload-custom-file-input']}
                          onChange={(e) => handleImg(e)}
                          type="file"
                          name="files[]"
                          accept="image/*"
                          multiple
                        />
                    </>
                )}
            </div>

            <div className={classes.addproduct__information}>
                {/* <form onSubmit={handleSubmit}> */}
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
                                            <div className={classes['addproduct__infomation-upload-progress']}> </div>
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
                        <input onChange={(e) => handleGetName(e)} value={name} type="text" required />
                    </div>

                    <div className={classes['addproduct__infomation-catrgory']}>
                        <h3>Category</h3>
                        <select onChange={(e) => handleGetCategory(e)} value={category} name="category" id="" required>
                            <option value="" selected disabled>
                                Select
                            </option>
                            {dataCategory
                                && dataCategory.map((item, index) => (
                                    <option key={+index} value={`${item.name}, ${item.slug}`}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>

                <div className={classes['addproduct__infomation-wrap']}>
                    <div className={classes['addproduct__infomation-price']}>
                        <h3>Original Price</h3>
                        <input
                          onChange={(e) => handleGetPrice(e)}
                          type="number"
                          value={price}
                          min={0}
                          placeholder="đ"
                          required
                        />
                    </div>
                    <div className={classes['addproduct__infomation-price']}>
                        <h3>Promotional Price</h3>
                        <input
                          onChange={(e) => handleGetSale(e)}
                          value={sale}
                          type="number"
                          min={0}
                          placeholder="đ"
                          required
                        />
                    </div>
                    <div className={classes['addproduct__infomation-amount']}>
                        <h3>Amount</h3>
                        <input
                          onChange={(e) => handleGetAmount(e)}
                          value={amount}
                          type="number"
                          min={0}
                          placeholder="0"
                          required
                        />
                    </div>
                </div>

                <div className={classes['addproduct__infomation-wrap']}>
                    <div className={classes['addproduct__infomation-size']}>
                        <h3>Size</h3>
                        <select onChange={(e) => handleGetSize(e)} value={size} name="" id="" required>
                            <option value="" selected disabled>
                                Select
                            </option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                            <option value="XXXL">XXXL</option>
                            <option value="Khác">Khác</option>
                        </select>
                    </div>
                    <div className={classes['addproduct__infomation-color']}>
                        <h3>Color</h3>
                        <input onChange={(e) => handleGetColor(e)} value={color} type="text" required />
                    </div>
                    <div className={classes['addproduct__infomation-facility']}>
                        <h3>Facility</h3>
                        <select onChange={(e) => handleGetFacility(e)} value={facility} name="" id="" required>
                            <option value="" selected disabled>
                                Select
                            </option>
                            {dataFacilities
                                && dataFacilities.map((item, index) => (
                                    <option key={+index} value={`${item.code}| ${item.name}| ${item.address}`}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>

                <div className={classes['addproduct__infomation-wrap']}>
                    <div className={classes['addproduct__infomation-material']}>
                        <h3>Material</h3>
                        <select onChange={(e) => handleGetMaterial(e)} value={material} name="" id="" required>
                            <option value="" selected disabled>
                                Select
                            </option>
                            {dataMaterials
                                && dataMaterials.map((item, index) => (
                                    <option key={+index} value={item.name}>
                                        {item.name}
                                    </option>
                                ))}
                        </select>
                    </div>
                    <div className={classes['addproduct__infomation-height']}>
                        <h3>Height</h3>
                        <input
                          onChange={(e) => handleGetHeight(e)}
                          value={height}
                          type="number"
                          min={0}
                          placeholder="cm"
                          required
                        />
                    </div>
                    <div className={classes['addproduct__infomation-weight']}>
                        <h3>Weight</h3>
                        <input
                          onChange={(e) => handleGetWeight(e)}
                          value={weight}
                          type="number"
                          min={0}
                          placeholder="kg"
                          required
                        />
                    </div>
                    <div className={classes['addproduct__infomation-status']}>
                        <h3>Status</h3>
                        <select onChange={(e) => handleGetStatus(e)} value={status} name="" id="" required>
                            <option value="" selected disabled>
                                Select
                            </option>
                            <option value="Mới">Mới</option>
                            <option value="Như mới">Như mới</option>
                        </select>
                    </div>
                </div>

                <div className={classes['addproduct__infomation-description']}>
                    <h3>Description</h3>
                    <textarea
                      onChange={(e) => handleGetDescription(e)}
                      value={description}
                      name=""
                      id=""
                      rows="10"
                      type="text"
                    >
                        {' '}
                    </textarea>
                </div>

                <button onClick={handleSubmit} className={isButton ? classes['addproduct__information-success'] : ''}>
                    {!isButton ? 'Thêm sản phẩm' : 'Lưu thành công'}
                </button>
                {/* </form> */}
            </div>
        </div>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
