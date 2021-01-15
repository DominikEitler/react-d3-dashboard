import React, {useEffect, useState} from 'react';
import './dashboard.css';

import * as d3 from 'd3';
import adult from './data/adult.csv';
import PieChartGender from './charts/PieChartGender';
import PieChartRace from './charts/PieChartRace';
import BarChartEdu from './charts/BarChartEdu';
import BarChartWork from './charts/BarChartWork';
import BarChartIncome from './charts/BarChartIncome';
import DistChartAge from './charts/DistChartAge';
import BarChartMarital from './charts/BarChartMarital';
import BarChartOccupation from './charts/BarChartOccupation';


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

    useEffect(() => {
        d3.csv(adult, (data) => {
            setData(data);
            setFilteredData(data);
            let vals = {};
            Object.keys(data[0]).map((k, i) => {
                vals[k] = [...new Set(data.map(d => d[k]).filter(d => d !== '?'))];
            });
            setValues(vals);
            const ages = new Set(data.map(d => +d.age));
            setAgeRange([Math.min(...ages), Math.max(...ages)]);
        });
    }, []);

    useEffect(() => {
        console.log(JSON.stringify(filters));
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
    );
};


export default Dashboard;
