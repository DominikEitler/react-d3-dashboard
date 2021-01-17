import React, {useEffect, useState} from 'react';
import drawDistChart from '../charts/distChart';
import Slider from '@material-ui/core/Slider';


const DistChartAge = ({data, range, filter}) => {
    const outerWidth = 1000 / 8 * 4;
    const outerHeight = 250;
    const selector = 'dist-chart-age';

    const [sliderValue, setSliderValue] = useState(range);

    useEffect(() => {
        drawDistChart(selector, data, 'age', range, filter, outerWidth, outerHeight, 35);
    });

    useEffect(() => {
        setSliderValue(range);
    }, [range]);

    return (
        <div id={selector} className='pane'>
            <div className='header'>Age</div>
            <div className={selector}/>
            <div className='slider-container'>
                <Slider
                    min={range[0]}
                    max={range[1]}
                    value={sliderValue}
                    onChange={(_, newValue) => setSliderValue(newValue)}
                    onChangeCommitted={(_, newValue) => filter(newValue)}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    // marks={marks} TODO
                />
            </div>
        </div>
    );
};

export default DistChartAge;
