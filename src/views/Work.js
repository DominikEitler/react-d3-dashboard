import React, { useEffect } from 'react';
import drawBarChart from '../charts/barChart';


const BarChartWork = ({ data, values, filter }) => {
    const outerWidth = 1000 / 8 * 3;
    const outerHeight = 250;
    const selector = 'vis-barchart-work';

    useEffect(() => {
        if (values) {
            drawBarChart(selector, data, 'workclass', values, filter, outerWidth, outerHeight, 75);
        }
    });

    return (
        <div id={selector} className='pane'>
            <div className='header'>Work Class</div>
            <div className={selector} />
        </div>
    );
};

export default BarChartWork;
