import React, {useEffect} from 'react';
import './styles.css';
import drawPieChart from '../pieChart';


const PieChartRace = ({data, values, filter}) => {
    const outerWidth = 1000 / 8 * 2;
    const outerHeight = 260;
    const selector = 'vis-piechart-race';

    useEffect(() => {
        if (values) {
            drawPieChart(selector, data, 'race', values, filter, outerWidth, outerHeight);
        }
    });

    return (
        <div id={selector} className='pane'>
            <div className='header'>Ethnicity</div>
            <div className={selector}/>
        </div>
    );
};

export default PieChartRace;
