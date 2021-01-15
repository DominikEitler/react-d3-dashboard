import * as d3 from 'd3';


const drawPieChart = (selector, data, target, values, filter, outerWidth, outerHeight) => {

    const counts = values.map(g => data.filter(d => d[target] === g).length);
    const dataset = values.map((_, i) => ({
        label: values[i],
        count: counts[i],
    }));

    d3.select(`.${selector} > *`).remove();
    const margin = {top: 10, right: 20, bottom: 30, left: 40};
    const width = outerWidth - margin.left - margin.right;
    const height = outerHeight - margin.top - margin.bottom;

    const svg = d3.select(`.${selector}`)
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + (width / 2 + margin.left) + ',' + (height / 2 + margin.top) + ')');

    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const arc = d3.arc()
        .innerRadius(radius - 50)
        .outerRadius(radius);

    const activeArc = d3.arc()
        .innerRadius(radius - 51)
        .outerRadius(radius + 3);

    const pie = d3.pie()
        .value(d => d.count)
        .sort(null);

    svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', (_, i) => color(i))
        .style('transition', '100ms ease-in-out')
        .on('click', d => filter(d.data.label))
        .on('mouseover', function (d, i) {
            d3.select(this)
                .style('cursor', 'pointer')
                .attr('d', activeArc);

            d3.select('#mytooltip')
                .style('visibility', 'visible')
                .text(`${d.data.label}: ${d.data.count}`);
        })
        .on('mouseout', function (d, i) {
            d3.select(this)
                .style('cursor', 'default')
                .attr('d', arc);
            d3.select('#mytooltip')
                .style('visibility', 'hidden');
        })
        .on('mousemove', () => {
            d3.select('#mytooltip')
                .style('top', (d3.event.pageY - 10) + 'px')
                .style('left', (d3.event.pageX + 10) + 'px');
        });

    const labelHeight = 10;
    const legend = svg
        .append('g')
        .attr('transform', `translate(-100,120)`);

    legend
        .selectAll(null)
        .data(pie(dataset).reverse())
        .enter()
        .append('rect')
        .attr('y', d => -labelHeight * d.index * 1.8)
        .attr('width', labelHeight)
        .attr('height', labelHeight)
        .attr('fill', (_, i) => color(i))
        .attr('stroke', 'grey')
        .style('stroke-width', '1px');

    legend
        .selectAll(null)
        .data(pie(dataset).reverse())
        .enter()
        .append('text')
        .text((_, i) => dataset[i].label)
        .attr('x', labelHeight * 1.2)
        .attr('y', d => -labelHeight * d.index * 1.8 + labelHeight)
        .style('font-family', 'sans-serif')
        .style('font-size', `${labelHeight}px`);


};

export default drawPieChart;
