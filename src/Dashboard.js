import React, {useEffect, useState} from 'react';
import * as d3 from 'd3';
import './styles.css';

import PieChartGender from './views/Gender';
import PieChartRace from './views/Race';
import BarChartEdu from './views/Education';
import BarChartWork from './views/Work';
import BarChartIncome from './views/Income';
import DistChartAge from './views/Age';
import BarChartMarital from './views/Marital';
import BarChartOccupation from './views/Occupation';

import adult from './data/adult.csv';


const Dashboard = () => {

    const [data, setData] = useState([]);
    const [values, setValues] = useState({});
    const [ageRange, setAgeRange] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    const initialFilters = {
        gender: null,
        race: null,
        education: null,
        workclass: null,
        income: null,
        age: [null, null],
        marital: null,
        occupation: null,
    };
    const [filters, setFilters] = useState(initialFilters);

    const createTooltip = () => {
        d3.select('body')
            .append('div')
            .attr('id', 'mytooltip')
            .style('position', 'absolute')
            .style('z-index', '10')
            .style('visibility', 'hidden')
            .style('background-color', 'whitesmoke')
            .style('color', 'black')
            .style('padding', '2px 5px')
            .style('border-radius', '5px')
            .style('border', '1px solid lightgray')
            .style('opacity', '80%');
    };

    useEffect(() => {

        createTooltip();

        d3.csv(adult, (data) => {
            setData(data);
            setFilteredData(data);
            let vals = {};
            Object.keys(data[0]).map((k, i) => {
                vals[k] = [...new Set(data.map(d => d[k]).filter(d => d !== '?'))];
            });
            setValues(vals);
            const ages = data.map(d => +d.age);
            setAgeRange([Math.min(...ages), Math.max(...ages)]);
        });
    }, []);

    useEffect(() => {
        setFilteredData(data.filter(d => {
                return (filters.gender ? d.gender === filters.gender : true) &&
                    (filters.gender ? d.gender === filters.gender : true) &&
                    (filters.race ? d.race === filters.race : true) &&
                    (filters.education ? d.education === filters.education : true) &&
                    (filters.workclass ? d.workclass === filters.workclass : true) &&
                    (filters.income ? d.income === filters.income : true) &&
                    (!!filters.age[0] ? (d.age >= filters.age[0] && d.age <= filters.age[1]) : true) &&
                    (filters.marital ? d['marital-status'] === filters.marital : true) &&
                    (filters.occupation ? d.occupation === filters.occupation : true);
            }),
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
        setFilters({
            ...filters,
            education: filters.education === education ? null : education,
        });
    };


    const filterWorkclass = (workclass) => {
        setFilters({
            ...filters,
            workclass: filters.workclass === workclass ? null : workclass,
        });
    };

    const filterIncome = (income) => {
        setFilters({
            ...filters,
            income: filters.income === income ? null : income,
        });
    };

    const filterAge = (age) => {
        setFilters({
            ...filters,
            age: age,
        });
    };

    const filterMarital = (marital) => {
        setFilters({
            ...filters,
            marital: filters.marital === marital ? null : marital,
        });
    };

    const filterOccupation = (occupation) => {
        setFilters({
            ...filters,
            occupation: filters.occupation === occupation ? null : occupation,
        });
    };

    return (
        <div className='content'>

            <div className="grid">
                <PieChartGender data={filteredData} values={values['gender']} filter={filterGender}/>

                <PieChartRace data={filteredData} values={values['race']} filter={filterRace}/>

                <BarChartEdu data={filteredData} values={values['education']} filter={filterEducation}/>

                <BarChartWork data={filteredData} values={values['workclass']} filter={filterWorkclass}/>

                <BarChartIncome data={filteredData} values={values['income']} filter={filterIncome}/>

                <DistChartAge data={filteredData} range={ageRange} filter={filterAge}/>

                <BarChartMarital data={filteredData} values={values['marital-status']} filter={filterMarital}/>

                <BarChartOccupation data={filteredData} values={values['occupation']} filter={filterOccupation}/>
            </div>
        </div>
    );
};


export default Dashboard;
