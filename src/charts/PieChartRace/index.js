import React, {useEffect} from 'react';
import draw from './vis';
import './styles.css';


const PieChartRace = ({data, filter}) => {
    const outerWidth = 260;
    const outerHeight = 260;

    useEffect(() => {
        draw(data, filter, outerWidth, outerHeight);
    });

    return (
        <div id='view2' className='pane'>
            <div className='header'>Ethnicity</div>
            <div className='vis-piechart-race'/>
        </div>
    );
};

export default PieChartRace;
