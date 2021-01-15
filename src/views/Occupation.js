import React, {useEffect} from 'react';
import drawBarChart from '../charts/barChart';


const BarChartOccupation = ({data, values, filter}) => {
    const outerWidth = 1000 / 8 * 5;
    const outerHeight = 250;
    const selector = 'vis-barchart-occupation';

    useEffect(() => {
        if (values) {
            drawBarChart(selector, data, 'occupation', values, filter, outerWidth, outerHeight, 100);
        }
    });

    return (
        <div id={selector} className='pane'>
            <div className='header'>Occupation</div>
            <div className={selector}/>
        </div>
    );
};

export default BarChartOccupation;
