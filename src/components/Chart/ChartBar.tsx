import React from 'react';
import { ChartBarCard, CharBarInner, ChartBarFill, ChartBarLabel } from './ChartStyled';

type onChartBar = {
    label?:string,
    value?:any,
    maxValue?:any,
}

const ChartBar:React.FC<onChartBar> = (props) => {
    let barFillHeight = "0%"

    if(props.maxValue > 0){
        barFillHeight = Math.round((props.value / props.maxValue) *100) + "%"
    }
    return(
        <ChartBarCard>
            <CharBarInner>
                <ChartBarFill style={{height:barFillHeight}}></ChartBarFill>
            </CharBarInner>
            <ChartBarLabel>{props.label}</ChartBarLabel>
        </ChartBarCard>
    )
}

export default ChartBar