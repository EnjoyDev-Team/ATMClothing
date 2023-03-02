/* eslint-disable react/prop-types */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

import classes from './DetailCard.module.scss';
// import viewIco from '../../assets/imgs/detailsCard/view.png';
import { ReactComponent as ListIcon } from '../../../assets/svg/detailCard/list.svg';
import { ReactComponent as EditIcon } from '../../../assets/svg/detailCard/edit.svg';
import { ReactComponent as DeleteIcon } from '../../../assets/svg/detailCard/delete.svg';
import useAxiosPrivate from '../../../hooks/useAxiosPrivate';

const DetailCard = ({ details, setProduct, service }) => {
  const axiosPrivate = useAxiosPrivate();

  const handleRemove = () => {
    axiosPrivate.delete(`/services/${service}/${details._id}`)
      .then((res) => {
        if (res.status === 204) { setProduct((prev) => [...prev, details]); }
      })
      .catch((err) => {
        console.log(err);
        setProduct((prev) => [...prev, details]);
      });
    setProduct((prev) => prev.filter(el => el._id !== details._id));
  };

  return (
    <div className={classes.card}>
        <div className={classes.card__heading}>
            {/* <img src={viewIco} alt="view-icon" /> */}
            <ListIcon />
            <span className={classes.card__heading__title}>{details.name}</span>
            <span className={classes.card__heading__control}>
                <button type="button">
                    <EditIcon />
                </button>
                <button type="button">
                    <DeleteIcon onClick={handleRemove} />
                </button>
            </span>
        </div>
        <div className={classes.card__content}>
            <div>
                {details
                    && details.title
                    && details.title.map((el) => (
                        <div
                          className={`${classes.card__content__item} ${classes['card__content__item-title']}`}
                          key={`${details._id}_${el}`}
                        >
                            {el}
                        </div>
                    ))}
            </div>
            <div>
                {details
                    && details.content
                    && details.content.map((el) => (
                        <div className={classes.card__content__item} key={`${details._id}_${el}`}>
                            {el}
                        </div>
                    ))}
            </div>
            {details && details.price && (
                <div className={classes['card__content__item-last']}>
                    <span>Giá đề xuất</span>
                    <span>{details.price}</span>
                </div>
            )}
        </div>
    </div>
  );
};

DetailCard.propTypes = {
  details: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.arrayOf(PropTypes.string).isRequired,
    content: PropTypes.any.isRequired,
    price: PropTypes.string,
  }),
};

DetailCard.defaultProps = {
  details: {},
};

export default DetailCard;
