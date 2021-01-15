import React, {useEffect} from 'react';
import draw from './vis';
import './styles.css';


const PieChartGender = ({data, filter}) => {
    const outerWidth = 250;
    const outerHeight = 250;

    useEffect(() => {
        draw(data, filter, outerWidth, outerHeight);
    });

    return (
        <div id='view1' className='pane'>
            <div className='header'>Sex</div>
            <div className='vis-piechart-gender'/>
        </div>
    );
};

export default PieChartGender;
