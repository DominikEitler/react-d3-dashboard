import React, {useEffect} from 'react';
import draw from './vis';
import './styles.css';


const BarChartWork = ({data, filter}) => {
    const outerWidth = 250;
    const outerHeight = 250;

    useEffect(() => {
        draw(data, filter, outerWidth, outerHeight);
    });

    return (
        <div id='view4' className='pane'>
            <div className='header'>WorkClass</div>
            <div className='vis-barchart-work'/>
        </div>
    );
};

export default BarChartWork;
