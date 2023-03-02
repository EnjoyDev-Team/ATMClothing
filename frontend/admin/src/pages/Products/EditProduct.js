/* eslint-disable react/jsx-props-no-spreading */
import { React, useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReply, faCloudArrowUp, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import { useParams } from 'react-router';
import classes from './EditProduct.module.scss';
import useAxios from '../../hooks/useAxios';
import { axiosPrivate } from '../../api/axios';
import convert2base64 from '../../utils/convert2base64';

const AddProduct = () => {
  const [isButton, setButton] = useState(false);
  const [files, setFile] = useState([]);
  const [imgBase64, setImgBase64] = useState([]);
  const [otherImgBase64, setOtherImgBase64] = useState([]);

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
  const [otherImg, setOtherImg] = useState('');
  const [data, setData] = useState({});
  const [disable, setDisable] = useState(true);

  const params = useParams();
  const navigate = useNavigate();

  const [dataEditProduct, errorEditProduct, isLoadingEditProduct] = useAxios(
    'get',
    `/products/${params.id}`,
    {},
    {},
    []
  );

  const [otherImgApi, errorOtherImgApi, isLoadingOtherImgApi] = useAxios(
    'get',
    `/products/${params.id}?fields=+other_img`,
    {},
    {},
    []
  );
  const editProduct = dataEditProduct?.data !== undefined && dataEditProduct?.data[0];

  const [dataSelect, errorDataSelect, isLoadingDataSelect] = useAxios('get', '/products/filters', {}, {}, []);
  const dataCategory = dataSelect.data !== undefined && dataSelect?.data?.categories;
  const dataFacilities = dataSelect.data !== undefined && dataSelect?.data?.facilities;
  const dataMaterials = dataSelect.data !== undefined && dataSelect?.data?.materials;

  useEffect(() => {
    if (otherImgApi.data !== undefined) {
      setOtherImgBase64(otherImgApi?.data[0].other_img);
    }
  }, [otherImgApi]);

  useEffect(() => {
    setImgBase64((prev) => {
      if (editProduct?.img !== undefined) {
        return [...prev, editProduct.img];
      }

      return '';
    });
  }, [dataEditProduct]);

  useEffect(() => {
    if (otherImgBase64 !== undefined) {
      setImgBase64((prev) => [...prev, ...otherImgBase64]);
    }
  }, [otherImgBase64]);

  useEffect(() => {
    setName(editProduct?.name);
    setCategory(`${editProduct?.category}, ${editProduct?.slug}`);
    setPrice(editProduct?.price);
    setSale(editProduct?.sale);
    setAmount(editProduct?.amount);
    setSize(editProduct?.size);
    setColor(editProduct?.color);
    setFacility(
      editProduct
        ? `${editProduct?.facility[0].code}| ${editProduct?.facility[0].name}| ${editProduct.facility[0].address}`
        : ''
    );
    setMaterial(editProduct.material);
    setHeight(editProduct ? editProduct?.note_size?.split(', ')[0] : '');
    setWeight(editProduct ? editProduct?.note_size?.split(', ')[1] : '');
    setStatus(editProduct?.status);
    setDescription(editProduct?.description);
  }, [editProduct]);

  const { getRootProps, getInputProps, acceptedFiles, isDragActive } = useDropzone({
    noClick: true,
  });

  useEffect(() => {
    setFile([...acceptedFiles]);
  }, [acceptedFiles]);

  const handleImg = (e) => {
    setDisable(false);
    setFile(Array.from(e.target.files));
  };

  const handleRemoveImg = (name) => {
    setFile((prev) => prev.filter((item) => name !== item?.name));
  };

  const handleRemoveImgBase64 = (index) => {
    setDisable(false);
    setImgBase64((prev) => prev.filter((item, idx) => index !== idx));
  };

  const handleGetName = (e) => {
    if (e.target.value !== editProduct?.name) {
      setDisable(false);
      setName(e.target.value);

      return;
    }
    setName(e.target.value);
  };

  const handleGetCategory = (e) => {
    setDisable(false);
    setCategory(e.target.value);
  };

  const handleGetPrice = (e) => {
    if (e.target.value !== editProduct?.price) {
      setDisable(false);
      setPrice(e.target.value);

      return;
    }

    setPrice(e.target.value);
  };

  const handleGetSale = (e) => {
    if (e.target.value !== sale) {
      setDisable(false);
      setSale(e.target.value);

      return;
    }
    setSale(e.target.value);
  };

  const handleGetAmount = (e) => {
    if (e.target.value !== `${editProduct.amount}`) {
      setDisable(false);
      setAmount(e.target.value);

      return;
    }

    setAmount(e.target.value);
  };

  const handleGetSize = (e) => {
    setDisable(false);
    setSize(e.target.value);
  };

  const handleGetColor = (e) => {
    if (e.target.value !== editProduct.color) {
      setColor(e.target.value);
      setDisable(false);

      return;
    }
    setColor(e.target.value);
  };

  const handleGetFacility = (e) => {
    setDisable(false);
    setFacility(e.target.value);
  };

  const handleGetMaterial = (e) => {
    setDisable(false);
    setMaterial(e.target.value);
  };

  const handleGetHeight = (e) => {
    if (e.target.value !== height) {
      setHeight(e.target.value);
      setDisable(false);

      return;
    }
    setHeight(e.target.value);
  };

  const handleGetWeight = (e) => {
    if (e.target.value !== weight) {
      setWeight(e.target.value);
      setDisable(false);

      return;
    }
    setWeight(e.target.value);
  };

  const handleGetStatus = (e) => {
    setDisable(false);
    setStatus(e.target.value);
  };

  const handleGetDescription = (e) => {
    if (e.target.value !== description) {
      setDescription(e.target.value);
      setDisable(false);

      return;
    }
    setDescription(e.target.value);
  };

  useEffect(() => {
    setOtherImg([]);
    if (imgBase64.length !== 0) {
      imgBase64.forEach((file, idx) => {
        if (idx === 0) {
          setMainImg(file);
        } else {
          setOtherImg((prev) => [...prev, file]);
        }
      });
    }
  }, [imgBase64]);

  useEffect(() => {
    if (files.length !== 0) {
      setImgBase64([]);
      setOtherImg([]);

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
    } else if (files.length === 0 && imgBase64.length === 0) {
      setButton(false);
      alert('chưa thêm ảnh');

      e.preventDefault();
    } else {
      setData({
        category: category.split(', ')[0],
        slug: category.split(', ')[1],
        name,
        price,
        sale,
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

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      axiosPrivate.patch(`/products/${params.id}`, data).then((res) => {
        if (res) {
          setButton(true);
          setTimeout(() => {
            setButton(false);
            navigate('/admin-products');
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
                              ? files.map((file, index) => (
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
                              ))
                              : imgBase64
                                  && imgBase64.map((file, index) => (
                                      <div key={+index} className={classes['addproduct__infomation-wrap-info-img']}>
                                          <div>
                                              <img src={file} alt="" />
                                              {/* <p>{file.split('|')[1]}</p> */}
                                          </div>

                                          <div className={classes['addproduct__infomation-upload-wrap-progress']}>
                                              <FontAwesomeIcon
                                                onClick={() => handleRemoveImgBase64(index)}
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
                            <option value="Thời trang nam - Áo, thoi-trang-nam-ao">Thời trang nam - Áo</option>
                        </select>
                    </div>
                </div>

                <div className={classes['addproduct__infomation-wrap']}>
                    <div className={classes['addproduct__infomation-price']}>
                        <h3>Original Price</h3>
                        <input
                          onChange={(e) => handleGetPrice(e)}
                          value={price}
                          type="number"
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

                <button
                  onClick={handleSubmit}
                  className={isButton ? classes['addproduct__information-success'] : ''}
                  disabled={disable}
                >
                    {!isButton ? 'Update sản phẩm' : 'Update thành công'}
                </button>
                {/* </form> */}
            </div>
        </div>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
