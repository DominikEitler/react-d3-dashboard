import * as d3 from 'd3';
import './styles.css';


const draw = (data, filter, outerWidth, outerHeight) => {
    d3.select('.vis-barchart-work > *').remove();
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const width = outerWidth - margin.left - margin.right;
    const height = outerHeight - margin.top - margin.bottom;
    let svg = d3.select('.vis-barchart-work').append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


    const workclass = [...new Set(data.map(d => d.workclass))];
    const counts = workclass.map(g => data.filter(d => d.workclass === g).length);

    const dataset = workclass.map((_, i) => ({
        label: workclass[i],
        count: counts[i],
    }));

    // Scale the range of the data in the domains
    let x = d3.scaleBand()
        .domain(dataset.map((d) => d.label))
        .range([0, width])
        .padding(0.1);
    let y = d3.scaleLinear()
        .domain([0, d3.max(dataset, (d) => d.count)])
        .range([height, 0]);


    // append the rectangles for the bar chart
    svg.selectAll('.bar')
        .data(dataset)
        .enter().append('rect')
        .attr('class', 'bar')
        .attr('x', function (d) {
            return x(d.label);
        })
        .attr('width', x.bandwidth())
        .attr('y', function (d) {
            return y(d.count);
        })
        .attr('height', function (d) {
            return height - y(d.count);
        });

    // add the x Axis
    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    // add the y Axis
    svg.append('g')
        .call(d3.axisLeft(y));
};

export default draw;
