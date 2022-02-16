import Slider from "react-slick";
import './CurrentPeriod.css'
import { useEffect,useState,useCallback  } from "react";
import { useSelector,useDispatch} from 'react-redux';
import { getSummary } from '../../../redux/report/report-selectors';
import {useFetchCategoryProfitMutation,useFetchCategoryCostsMutation} from '../../../redux/services/reportAPI'
import { getAccessToken } from "../../../redux/auth/auth-selectors";
import * as actions from "../../../redux/report/report-actions";


export default function CurrentPeriod() {

  const summary = useSelector(getSummary);
  const reversedSummary = [...summary].reverse();
  const currentDate = reversedSummary[0].startDate
  const accessToken = useSelector(getAccessToken);
  const dispatch = useDispatch();
  const [date, setDate] = useState(currentDate)
  const [i , setI] = useState(0)
  const [nav, setNav] = useState(null)
  const [fetchCategoryCosts] = useFetchCategoryCostsMutation();
  const [fetchCategoryProfit] = useFetchCategoryProfitMutation();


   const sendDataInStore = useCallback(
     (response, category) => {
       switch (category) {
         case 'cost':
           dispatch(actions.categoryCosts(response.data))
           break;
         case 'profit':
           dispatch(actions.categoryProfit(response.data))
           break;
         default: return;
       }
    },
    [dispatch]
  )

  const getCosts = useCallback(async () => {
    try {
      const response = await fetchCategoryCosts({ accessToken, date })

      sendDataInStore(response, 'cost')
    } catch (error) {
      console.log(error);
    }
  }, [date])

    const getProfit = useCallback(async () => {
    try {
      const response = await fetchCategoryProfit({ accessToken, date })
      sendDataInStore(response, 'profit')
    } catch (error) {
      console.log(error);
    }
  }, [date])
 

   useEffect(() => {
    getCosts();
     getProfit();
     dispatch(actions.date(date));
  }, [date])

  const next = () => {
    if (reversedSummary.length - 1 > i) {
      nav.slickNext()
       setI(i + 1)
      setDate(reversedSummary[i].startDate)
      console.log("prev",i)
    }   
    return;
  }
  const previous = () => {
    if (i >= 1) {
      nav.slickPrev();
      setI(i - 1)
      setDate(reversedSummary[i].startDate)
      console.log("next",i)
    }   
    return;
  }

const settings = {
      infinite: true,
      speed: 500,
  slidesToShow: 1,
      arrows: false,
  slidesToScroll: 1,

    };
     return (
         <div className="sliderContainer">
         <p className="title"> Текущий период:</p>
         <div className="sliderWrapper">
         <button className="button left-arr" onClick={next}>
          </button>
         <Slider className="slider" ref={c => setNav(c)} {...settings}>
                 {reversedSummary && reversedSummary.map(({id, description}) => (
                     <div key={id}><p className="month" >{description}</p></div>
                 ))}
         </Slider>
         <button className="button right-arr" onClick={previous}>
          </button>
         </div>
      </div>
    );
}