import * as d3 from 'd3';


const drawBarChart = (selector, data, target, values, filter, outerWidth, outerHeight, mBottom = 50) => {

    const counts = values.map(g => data.filter(d => d[target] === g).length);

    const dataset = values.map((_, i) => ({
        label: values[i],
        count: counts[i],
    }));

    d3.select(`.${selector} > *`).remove();
    const margin = {top: 20, right: 20, bottom: mBottom, left: 40};
    const width = outerWidth - margin.left - margin.right;
    const height = outerHeight - margin.top - margin.bottom;
    let svg = d3.select(`.${selector}`).append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    let color = d3.scaleOrdinal(d3.schemeCategory10);

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
        .attr('x', d => x(d.label))
        .attr('width', x.bandwidth())
        .attr('y', d => y(d.count))
        .attr('height', d => height - y(d.count))
        .attr('fill', (_, i) => color(i))
        .on('click', d => filter(d.label))
        .on('mouseover', function (d, i) {
            d3.select(this).style('cursor', 'pointer');
        })
        .on('mouseout', function (d, i) {
            d3.select(this).style('cursor', 'default');
        });

    // add the x Axis
    svg.append('g')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x))
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('transform', 'rotate(-65)');

    // add the y Axis
    svg.append('g')
        .call(d3.axisLeft(y));
};

export default drawBarChart;
