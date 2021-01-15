import * as d3 from 'd3';


// Function to compute density
const kernelDensityEstimator = (kernel, X) => {
    return (V) => X.map((x) => [x, d3.mean(V, (v) => kernel(x - v))]);
};

const kernelEpanechnikov = (k) => {
    return (v) => Math.abs(v /= k) <= 1 ? 0.75 * (1 - v * v) / k : 0;
};

const drawDistChart = (selector, data, target, range, filter, outerWidth, outerHeight) => {
    d3.select(`.${selector} > *`).remove();
    const margin = {top: 20, right: 20, bottom: 30, left: 40};
    const width = outerWidth - margin.left - margin.right;
    const height = outerHeight - margin.top - margin.bottom;
    let svg = d3.select(`.${selector}`).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    // add the x Axis
    let x = d3.scaleLinear()
        .domain([range[0] - 10, range[1] + 10])
        .range([0, width]);
    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x));

    // Compute kernel density estimation
    const kde = kernelDensityEstimator(kernelEpanechnikov(7), x.ticks(40));
    const density = kde(data.map(d => d[target]));

    // add the y Axis
    let y = d3.scaleLinear()
        .domain([0, d3.max(density, d => d[1])])
        .range([height, 0]);
    let yAx = d3.scaleLinear()
        .domain([0, d3.max(data, d => d[target])])
        .range([height, 0]);

    svg.append('g')
        .call(d3.axisLeft(yAx));


    // Plot the area
    svg.append('path')
        .attr('class', 'mypath')
        .datum(density)
        .attr('fill', '#69b3a2')
        .attr('opacity', '.8')
        .attr('stroke', '#000')
        .attr('stroke-width', 1)
        .attr('stroke-linejoin', 'round')
        .attr('d', d3.line()
            .curve(d3.curveBasis)
            .x(d => x(d[0]))
            .y(d => y(d[1])),
        );

};

export default drawDistChart;
