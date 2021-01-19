import React, { useEffect } from 'react';
import drawPieChart from '../charts/pieChart';


const PieChartGender = ({ data, values, filter }) => {
    const outerWidth = 1000 / 8 * 2;
    const outerHeight = 250;
    const selector = 'vis-piechart-gender';

    useEffect(() => {
        if (values) {
            drawPieChart(selector, data, 'gender', values, filter, outerWidth, outerHeight);
        }
    });

    return (
        <div id={selector} className='pane'>
            <div className='header'>Sex</div>
            <div className={selector} />
        </div>
    );
};

export default PieChartGender;
