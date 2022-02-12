import SliderExpencesList from "./SliderExpencesList";
import SliderNotification from "../SliderNotification/SliderNotification";
import { data } from './data'

export default function SliderIncome() {
    return (
        data.length > 0 ? (<SliderExpencesList data={data} />) : (<SliderNotification operation={'расходов:)'} />)
    )
}