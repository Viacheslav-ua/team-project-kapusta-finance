import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList } from 'recharts'
import useWindowDimensions from '../../../hooks/useWindowDimensions'
import style from './Chart.module.css'

export default function Chart({data}) { 

    const viewPort = useWindowDimensions();

    let containerWidth = '90%'
    if (viewPort.width >= 1279) {
        containerWidth = '70%'
    } 
    const colors = [
         '#FF751D','#FFDAC0'
    ]
    

    return (
        <div className={style.container}>
            <ResponsiveContainer className={style.chart} width={containerWidth} height="100%">
                <BarChart data={data} margin={{ top: 20, right: 0, left: 0, bottom: 20 }}>
                    <CartesianGrid vertical={false} />
                    <YAxis hide tickCount={9} />
                    <Bar dataKey="uv" fill="#FF751D" barSize={38} radius={[10, 10, 0, 0]} >
                         {
                            data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % 3 === 0  ? 0 : 1]} />
                            ))
                            }
                        <LabelList dataKey='uv' position="top" width={100} />
                        <LabelList dataKey="name" position="bottom" width={100} />
                        </Bar>
            </BarChart>
            </ResponsiveContainer>
        </div>

    
    )
} 