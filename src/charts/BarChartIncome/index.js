import React, {useEffect} from 'react';
import draw from './vis';
import './styles.css';


const BarChartIncome = ({data, filter}) => {
    const outerWidth = 250;
    const outerHeight = 250;

    useEffect(() => {
        draw(data, filter, outerWidth, outerHeight);
    });

    return (
        <div id='view5' className='pane'>
            <div className='header'>Income</div>
            <div className='vis-barchart-income'/>
        </div>
    );
};

export default BarChartIncome;
