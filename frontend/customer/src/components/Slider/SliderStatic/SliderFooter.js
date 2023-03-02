/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';
import classes from './SliderFooter.module.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './style.scss';
import CardSlider from './CardSlider/CardSlider';
import img1 from '../../../assets/imgs/ImgSliderFooter/img1.png';
import img2 from '../../../assets/imgs/ImgSliderFooter/img2.png';
import img3 from '../../../assets/imgs/ImgSliderFooter/img3.png';
import img4 from '../../../assets/imgs/ImgSliderFooter/img4.png';
import img5 from '../../../assets/imgs/ImgSliderFooter/img5.png';

const listCardSlider = [
  {
    img: img1,
    content: 'Hoạt động tình nguyện ở Hà Giang',
    date: '27/05/2022',
  },
  {
    img: img2,
    content: 'Các em bé vùng cao',
    date: '16/09/2022',
  },
  {
    img: img3,
    content: 'Các em bé vùng cao',
    date: '16/09/2022',
  },
  {
    img: img4,
    content: 'Trẻ em vùng cao',
    date: '16/09/2022',
  },
  {
    img: img5,
    content: 'Các em bé vùng cao',
    date: '27/05/2022',
  },
];

const SliderFooter = () => (
  <Swiper
    slidesPerView={3}
    spaceBetween={-100}
    slidesPerGroup={1}
    loop
    loopFillGroupWithBlank
    pagination={{
      clickable: true,
    }}
    navigation
    modules={[Pagination, Navigation]}
    className="mySwiper"
  >
    <div className={classes.container}>
      {
        listCardSlider.slice(0, listCardSlider.length).map((el, idx) => (
          <SwiperSlide key={+idx}>
            <CardSlider Details={el} />
          </SwiperSlide>
        ))
      }
    </div>
  </Swiper>

);

SliderFooter.propTypes = {

};

export default SliderFooter;
