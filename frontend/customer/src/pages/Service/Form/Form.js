import React from 'react';
import classes from './Form.module.scss';
// import State from '../Form/components/State/State'
import State from './components/State';

const Form = () => (
    <main>
        <div className={classes.formContainer}>
            <h3 className={classes.formHeader}>BÁN SẢN PHẨM-THÊM SẢN PHẨM </h3>
            <div>
                SLIDER
                <br />
                <br />
                <br />
            </div>
            <form className={classes.inputSection} action="">
                <div className={classes.leftSection}>
                    <div className={classes.input}>
                        <label htmlFor="productName">
                            Tên sản phẩm:
                            <br />
                            <input className={classes.input} type="text" name="productName" required />
                            <br />
                        </label>

                        <label htmlFor="menu">
                            Danh mục:
                            <br />
                            <select className={classes.input} name="menu" id="menu">
                                <option className={classes.dropdownContent} value="">
                                    Danh mục
                                </option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <br />
                        </label>
                    </div>
                </div>

                <div className={classes.rightSection}>
                    <div className={classes.input}>
                        <label htmlFor="quantity">
                            Số lượng hàng hiện có:
                            <br />
                            <input className={classes.input} type="text" name="quantity" required />
                            <br />
                        </label>

                        <label htmlFor="priceSuggested">
                            Giá bạn đề xuất cho sản phẩm này:
                            <br />
                            <input className={classes.input} type="text" name="priceSuggested" required />
                            <br />
                        </label>
                    </div>
                </div>
            </form>

            <div className={classes.stateSection}>
                <State />
            </div>
        </div>
    </main>
);

export default Form;
