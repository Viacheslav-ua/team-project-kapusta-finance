import Slider from "react-slick";
import { useEffect, useState } from 'react';
import SliderIncomeList from "../../SliderIncome/SliderIncomeList";
import SliderExpencesList from "../SliderExpences/SliderExpencesList";
import Chart from "../Chart/Chart";
import styles from './MultipleSlider.module.css'

export default function MultipleSlider() {

      const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
  const [nav3, setNav3] = useState(null);
  
      const expences = [
  {
    name: 'Свинина',
    uv: 5000,
  },
  {
    name: 'Говядина',
    uv: 4500,
  },
  {
    name: 'Курица',
    uv: 3200,
  },
  {
    name: 'Рыба',
    uv: 2100,
  },
  {
    name: 'Панини',
    uv: 1800,
  },
  {
    name: 'Кофе',
    uv: 1700,
  },
  {
    name: 'Шоколад',
      uv: 1500,
        },
    {
    name: 'Спагетти',
      uv: 800,
        },
      {
    name: 'Маслины',
      uv: 500,
        },
        {
    name: 'Зелень',
      uv: 300 ,
  },
  ];
  
  const income = [
        {
    name: 'ЗП',
      uv: 20000,
        },
        {
    name: 'Доп Доход',
      uv: 5000 ,
  },
  ]
  
    
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
      <>
        <div className={styles.container}>
            <Slider
          {...settingsFirst}
          className={styles.slider__first}
          asNavFor={nav3}
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
       <Slider
          {...settingsSecond }
          className={styles.slider__big}
          asNavFor={nav2}
          ref={slider => setNav3(slider)}
        >
          <div className={styles.slider_big__item}>
          <Chart data={ expences }/>
          </div>
          <div className={styles.slider_big__item}>
            <Chart data={ income}/>
          </div>
      </Slider>
      </>
    )
}