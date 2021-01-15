import React, {useEffect, useState} from 'react';
import './dashboard.css';

import * as d3 from 'd3';
import adult from './data/adult.csv';
import PieChartGender from './charts/PieChartGender';
import PieChartRace from './charts/PieChartRace';
import BarChartEdu from './charts/BarChartEdu';
import BarChartWork from './charts/BarChartWork';


const Dashboard = () => {

    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const initialFilters = {
        gender: null,
        race: null,
    };
    const [filters, setFilters] = useState(initialFilters);

    useEffect(() => {
        d3.csv(adult, (data) => {
            setData(data);
            setFilteredData(data);
        });
    }, []);

    useEffect(() => {
        setFilteredData(data
            .filter(d => filters.gender ? d.gender === filters.gender : true)
            .filter(d => filters.race ? d.race === filters.race : true),
        );
    }, [data, filters]);


    const filterGender = (gender) => {
        setFilters({
            ...filters,
            gender: filters.gender === gender ? null : gender,
        });
    };

    const filterRace = (race) => {
        setFilters({
            ...filters,
            race: filters.race === race ? null : race,
        });
    };

    const filterEducation = (education) => {
        console.log('filter: ', education);
    };


    const filterWorkclass = (workclass) => {
        console.log('filter: ', workclass);
    };

    return (
        <div className="grid">
            <PieChartGender data={filteredData} filter={filterGender}/>
            <PieChartRace data={filteredData} filter={filterRace}/>
            <BarChartEdu data={filteredData} filter={filterEducation}/>

            <BarChartWork data={filteredData} filter={filterWorkclass}/>
            {/*<View1 data={data}/>*/}
            {/*<View1 data={data}/>*/}

            {/*<View1 data={data}/>*/}
            {/*<View1 data={data}/>*/}
            {/*<View1 data={data}/>*/}
        </div>
    );
};

export default Dashboard;
