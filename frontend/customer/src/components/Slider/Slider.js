/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { SliderData } from './SliderData';
import classes from './styles.module.scss';
import ChevronLeft from '../../assets/imgs/sliderImage/ChevronLeft.png';
import ChevronRight from '../../assets/imgs/sliderImage/ChevronRight.png';

const Slider = () => {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx(preIndx => (preIndx + 1) % SliderData.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [idx]);

  const movewLeftHandle = () => {
    // eslint-disable-next-line no-unused-expressions
    idx === 0 ? setIdx(3) : setIdx(preIndx => (preIndx - 1));
  };
  const movewRightHandle = () => {
    setIdx(preIndx => (preIndx + 1) % SliderData.length);
  };

  return (
    <div className={classes.containSlider}>
      <div className={classes.sliders}>
        {/* // eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div className={classes.chevronL} onClick={movewLeftHandle}>
          <img src={ChevronLeft} alt="ChevronLeft" />
        </div>
        <div className={classes.content}>
          {SliderData.map((item, index) => (
            <div key={+index} className={idx === index ? classes.show : classes.hidden}>
              <div className={classes.content__titles}>
                <h1>{item.title}</h1>
                <p>{item.describe}</p>
              </div>
            </div>
          ))}

          <div className={classes.content__suggestBtn}>
            <p className={classes['content__suggestBtn--suggest']}>{SliderData[idx].suggestBtn}</p>
            <img className={classes['content__suggestBtn--iconArrow']} src={SliderData[idx].iconArow} alt="icon arrow right" />
            {/* <FontAwesomeIcon className={classes['content__suggestBtn--iconArrow']} icon={item.iconArow} /> */}
          </div>
          {SliderData.map((item, index) => (
            <div key={+index} className={idx === index ? classes.show : classes.hidden}>
              <div className={classes.content__feedback}>
                <div className={classes['content__feedback--avatar']}>
                  <img src={item.avatarIcon} alt="avatar-icon" />
                </div>
                <div className={classes['content__feedback--feedback']}>
                  <p>{item.feedback}</p>
                </div>
              </div>
            </div>
          ))}
          <div className={classes.content__buttons}>
            <div className={idx === 0 ? classes['content__buttons--current'] : classes['content__buttons--move']} onClick={() => setIdx(0)} />
            <div className={idx === 1 ? classes['content__buttons--current'] : classes['content__buttons--move']} onClick={() => setIdx(1)} />
            <div className={idx === 2 ? classes['content__buttons--current'] : classes['content__buttons--move']} onClick={() => setIdx(2)} />
            <div className={idx === 3 ? classes['content__buttons--current'] : classes['content__buttons--move']} onClick={() => setIdx(3)} />
          </div>
        </div>

        <div className={classes.imageSlider}>
          {SliderData.map((item, index) => (
            <img key={+index} className={idx === index ? classes.show : classes.hidden} src={item.image} alt="slider" />
          ))}
        </div>

        <div className={classes.chevronR} onClick={movewRightHandle}>
          <img src={ChevronRight} alt="ChevronRight" />
        </div>
      </div>
    </div>
  );
};
export default Slider;
