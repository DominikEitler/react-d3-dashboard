import React, {useEffect} from 'react';
import './styles.css';
import drawBarChart from '../barChart';


const BarChartMarital = ({data, values, filter}) => {
    const outerWidth = 1000 / 8 * 3;
    const outerHeight = 250;
    const selector = 'vis-barchart-marital';

    useEffect(() => {
        if (values) {
            drawBarChart(selector, data, 'marital-status', values, filter, outerWidth, outerHeight, 100);
        }
    });

    return (
        <div id={selector} className='pane'>
            <div className='header'>Marital Status</div>
            <div className={selector}/>
        </div>
    );
};

export default BarChartMarital;
