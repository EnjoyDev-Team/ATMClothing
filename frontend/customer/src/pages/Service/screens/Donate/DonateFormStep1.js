/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-dupe-keys */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import classes from './DonateFormStep1.module.scss';
import ButtonCT from '../../../../components/ButtonCT/ButtonCT';
import StateItem from '../../../../components/Services/Form/StateItem';

const DonateFormStep1 = ({ onSubmit, filterItems }) => {
    const dropdown = useRef();
    const form = useRef();
    const [category, setCategory] = useState('');
    const categories = filterItems && filterItems.categories ? filterItems.categories : [];

    const onSubmitForm = (event) => {
        event.preventDefault();
        const { productName,
            productCategory, productAmount, productStatus,
            // productIdeaDescription,
            // productIdeaLink
        } = form.current;

        const newproducts = {
            name: productName.value,
            category: productCategory.value,
            amount: productAmount.value,
            status: productStatus.value,
            // idea_description: productIdeaDescription.value,
            // idea_link: productIdeaLink.value,
            // idea_img: ideaImg,
        };

        onSubmit(newproducts);
    };

    useEffect(() => {
        dropdown.current.checked = false;
    }, [category]);

    return (
        <main>
            <form onSubmit={onSubmitForm} ref={form} autoComplete="off">
                <div className={classes.inputSection}>
                    <div className={classes.leftSection}>
                        <label>
                            <span>
                                <span>Tên sản phẩm </span>
                                <font color="red">*</font>
                            </span>
                            <input
                                name="productName"
                                className={classes.input2}
                                placeholder="Nhập tên sản phẩm..."
                                required
                            />
                        </label>
                        <span className={classes.dropdown}>
                            <input
                                ref={dropdown}
                                id="dropdown_toggle"
                                type="checkbox"
                                className={classes.dropdown__toggle}
                            />
                            <label htmlFor="category_input">
                                <span>
                                    <span>Danh mục </span>
                                    <font color="red">*</font>
                                </span>
                                <label htmlFor="dropdown_toggle">
                                    <div className={classes.input__dropdown}>
                                        <input
                                            name="productCategory"
                                            id="category_input"
                                            type="text"
                                            className={classes.input2}
                                            placeholder="Danh mục"
                                            onChange={(e) => setCategory(e.target.value)}
                                            value={category}
                                            spellCheck={false}
                                            required
                                        />
                                        <FontAwesomeIcon icon={faChevronDown} className={classes.icon} />
                                    </div>
                                </label>
                            </label>
                            <div className={classes.dropdown__list}>
                                {categories.map((el) => (
                                    <div
                                        key={el.slug}
                                        onClick={() => setCategory(el.name)}
                                        className={classes.dropdown__list__item}
                                    >
                                        {el.name}
                                    </div>
                                ))}
                            </div>
                        </span>
                    </div>
                    <div className={classes.rightSection}>
                        <label>
                            <span>
                                <span>Số lượng hàng hiện có </span>
                                <font color="red">*</font>
                            </span>
                            <input
                                name="productAmount"
                                type="number"
                                min={1}
                                max={20}
                                className={classes.input2}
                                placeholder="Nhập số lượng"
                                required
                            />
                        </label>
                    </div>
                </div>
                <div className={classes.main__section}>
                    <span className={classes.stateHeader}>
                        <span>Tình trạng </span>
                        <font color="red">*</font>
                    </span>
                    <div className={classes.radio__check}>
                        {/* <div className={classes.radio__item}>
                        <div className={classes.radio__tick} />
                        <p className={classes.radio__content}>
                            <b>Mới</b>
                            (Hàng mới kèm mác, chưa mở hộp/bao bì, chưa qua sử dụng.)
                        </p>
                    </div> */}
                        <StateItem
                            checked
                            content="Mới"
                            description="Hàng mới kèm mác, chưa mở hộp/bao bì, chưa qua sử dụng."
                        />
                        <StateItem
                            content="Như mới"
                            description="Hàng mới kèm mác, đã mở bao bì/hộp, chưa qua sử dụng."
                        />
                        <StateItem content="Tốt" description="Đã qua sử dụng, tính năng đầy đủ, hoạt động tốt." />
                        <StateItem
                            content="Trung bình"
                            description="Hàng đã qua sử dụng, đầy đủ chức năng. Nhiều sai sót hoặc lỗi nhỏ."
                        />
                        <StateItem content="Kém" description="Đã qua sử dụng. Nhiều sai sót. Có thể bị hư hỏng" />
                    </div>
                </div>
                <ButtonCT
                    type="submit"
                    style={{
                        width: '140px',
                        padding: '1rem 0rem',
                        borderRadius: '50px',
                        marginLeft: 'auto',
                        marginTop: '4rem',
                        marginRight: '4rem',
                        fontSize: '1.6rem',
                        marginBottom: '3rem',
                    }}
                    greenLinear
                    content="Tiếp tục"
                />
            </form>
        </main>
    );
};

export default DonateFormStep1;
