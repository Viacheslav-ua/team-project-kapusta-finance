import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import { getCategoryItems } from '../../../redux/report/report-selectors';
import { useSelector } from 'react-redux';
import style from './Chart.module.css'

export default function Chart() { 

    const viewPort = useWindowDimensions();
    const list = useSelector(getCategoryItems);

    let containerWidth = '90%'
    if (viewPort.width >= 1279) {
        containerWidth = '70%'
    } 
    const colors = [
         '#FF751D','#FFDAC0'
    ]
    

    return (
        <div className={style.container}>
          {viewPort.width > 768 ? (<ResponsiveContainer className={style.chart} width={containerWidth} height="100%">
                <BarChart data={list} margin={{ top: 20, right: 0, left: 0, bottom: 20 }}>
                    <CartesianGrid vertical={false} />
                    <YAxis hide tickCount={9} />
                    <Bar dataKey="totalAmount" fill="#FF751D" barSize={38} radius={[10, 10, 0, 0]} >
                         {
                            list.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 3 === 0  ? 0 : 1]} />
                            ))
                            }
                        <LabelList dataKey={list.totalAmount } position="top" width={100} />
                        <LabelList dataKey="_id" position="bottom" width={100} />
                        </Bar>
            </BarChart>
            </ResponsiveContainer>) : ( <ResponsiveContainer className={style.chart} width='100%' height="100%">
                <BarChart data={list} layout="vertical" barSize={15} margin={{ top: 50, right: 10, left: 20, bottom: 0 }}>
                    <XAxis type="number" hide />
                    <YAxis type="category" hide />
                    <Bar dataKey="totalAmount" fill="#FFFFFF">
                         <LabelList dataKey='totalAmount' position="insideRight" offset={-40} width={100} />
                        <LabelList dataKey="_id" position= "insideLeft" offset={0} width={200} />
                    </Bar>
                    <Bar dataKey="totalAmount" fill="#FF751D" radius={[0, 10, 10, 0]}>
                         {
                            list.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 3 === 0  ? 0 : 1]} />
                            ))
                            }
                       
                    </Bar>
            </BarChart>
            </ResponsiveContainer>)} 
            
        </div>

    
    )
} 