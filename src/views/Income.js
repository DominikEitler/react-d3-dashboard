import React, { useEffect } from 'react';
import drawBarChart from '../charts/barChart';


const BarChartIncome = ({ data, values, filter }) => {
    const outerWidth = 1000 / 8 * 2;
    const outerHeight = 250;
    const selector = 'vis-barchart-income';

    useEffect(() => {
        if (values) {
            drawBarChart(selector, data, 'income', values, filter, outerWidth, outerHeight, 50, false);
        }
    });

    return (
        <div id={selector} className='pane'>
            <div className='header'>Income</div>
            <div className={selector} />
        </div>
    );
};

export default BarChartIncome;
