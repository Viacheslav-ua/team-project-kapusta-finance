import { useSelector } from "react-redux";
import { getCategoryProfit} from "../../../redux/report/report-selectors";
import SliderIncomeList from "./SliderIncomeList";
import SliderNotification from "../SliderNotification/SliderNotification";

export default function SliderIncome() {
    const profit = useSelector(getCategoryProfit);
    return (
        profit.length > 0 ? (<SliderIncomeList data={profit}/>) : (<SliderNotification operation={'доходов ):'}/>)
    )
}