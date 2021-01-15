import React, {useEffect} from 'react';
import draw from './vis';
import './styles.css';


const BarChartEdu = ({data, filter}) => {
    const outerWidth = 250;
    const outerHeight = 250;

    useEffect(() => {
        draw(data, filter, outerWidth, outerHeight);
    });

    return (
        <div id='view3' className='pane'>
            <div className='header'>Education</div>
            <div className='vis-barchart-edu'/>
        </div>
    );
};

export default BarChartEdu;
