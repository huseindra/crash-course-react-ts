
import React from 'react';
import ChartBar from './ChartBar';
import { ChartCard } from './ChartStyled';

type onDataPoints = {
    dataPoints?:any
}

const Chart:React.FC<onDataPoints> = (props) => {
    const dataPointValues = props.dataPoints.map((data:any) => data.value)
    const totalMaximum = Math.max(...dataPointValues)

    return(
       <ChartCard>
           {
               props.dataPoints.map((data:any) => (
                <ChartBar key={data.label} value={data.value} maxValue={totalMaximum} label={data.label}/>
               ) )
           }
       </ChartCard>
    )
}

export default Chart