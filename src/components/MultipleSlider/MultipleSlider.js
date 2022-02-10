import Slider from "react-slick";
import { useEffect, useState } from 'react';
import SliderIncomeList from "../SliderIncome/SliderIncomeList";
import SliderExpencesList from "../SliderExpences/SliderExpencesList";
import styles from './MultipleSlider.module.css'

export default function MultipleSlider() {

      const [nav1, setNav1] = useState(null);
      const [nav2, setNav2] = useState(null);
  
    
  const settingsFirst = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider__big',
  };

  const settingsSecond = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider__first',
    centerPadding: '3px',
    adaptiveHeight: true,
  };
    return (
        <div className={styles.container}>
            <Slider
          {...settingsFirst}
          className={styles.slider__first}
          asNavFor={nav2}
          ref={slider => setNav1(slider)}
        >
          <div className={styles.slider__item}>
            <h2 className={styles.slider__text}>Расходы</h2>
          </div>
          <div className={styles.slider__item}>
            <h2 className={styles.slider__text}>Доходы</h2>
          </div>
            </Slider>

            <Slider
          {...settingsSecond }
          className={styles.slider__big}
          asNavFor={nav1}
          ref={slider => setNav2(slider)}
        >
          <div className={styles.slider_big__item}>
            <SliderExpencesList/>
          </div>
          <div className={styles.slider_big__item}>
            <SliderIncomeList />
          </div>
        </Slider>
        </div>
    )
}