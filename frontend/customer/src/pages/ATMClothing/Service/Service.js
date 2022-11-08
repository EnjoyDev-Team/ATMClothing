// /* eslint-disable consistent-return */
// /* eslint-disable indent */
// /* eslint-disable react/prop-types */
// /* eslint-disable quotes */
// import React from 'react';
// import classes from './Service.module.scss';
// import Table from './components/Table';

// const Service = ({ type }) => {
//     const checkType = (type) => {
//         if (type === 'sell') return 'BÁN SẢN PHẨM';
//         if (type === 'custom') return 'CUSTOM SẢN PHẨM';
//         if (type === 'gift') return 'TẶNG SẢN PHẨM';
//     };
//     return (
//         <div className={classes.body}>
//             <div className={classes.title}>
//                 <h1>Bạn có quần áo, phụ kiện cũ không sử dụng</h1>
//                 <p>Hãy tái tạo nó thông qua hệ thống ATM CLOTHING của chúng tôi...</p>
//             </div>
//             <div className={classes.container}>
//                 <Table content={checkType(type)} />
//             </div>
//         </div>
//     );
// };

// export default Service;
