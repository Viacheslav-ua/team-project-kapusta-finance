import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import './CurrentPeriod.css'
import MONTHS from '../../helpers/months';



export const CurrentPeriod = () => {
const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
    slidesToScroll: 1,

    };
     return (
         <div className="sliderContainer">
        <p className="title"> Текущий период:</p>
        <Slider className="slider" {...settings}>
                 {MONTHS && MONTHS.map(month => (
                     <div key={month}><p className="month">{month} 2022</p></div>
        ))}
        </Slider>
      </div>
    );
}