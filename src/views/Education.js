import React, { useEffect } from 'react';
import drawBarChart from '../charts/barChart';


const BarChartEdu = ({ data, values, filter }) => {
    const outerWidth = 1000 / 8 * 4;
    const outerHeight = 250;
    const selector = 'vis-barchart-edu';

    useEffect(() => {
        if (values) {
            drawBarChart(selector, data, 'education', values, filter, outerWidth, outerHeight, 80);
        }
    });

    return (
        <div id={selector} className='pane'>
            <div className='header'>Education</div>
            <div className={selector} />
        </div>
    );
};

export default BarChartEdu;
