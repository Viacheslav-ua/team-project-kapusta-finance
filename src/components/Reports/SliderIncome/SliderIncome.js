import SliderIncomeList from "./SliderIncomeList";
import SliderNotification from "../SliderNotification/SliderNotification";
import { data } from "../SliderIncome/data";

export default function SliderIncome() {
    return (
        data.length > 0 ? (<SliderIncomeList data={data}/>) : (<SliderNotification operation={'доходов ):'}/>)
    )
}