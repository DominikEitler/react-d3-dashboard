import * as d3 from 'd3';


const draw = (data, filter, outerWidth, outerHeight) => {

    const gender = [...new Set(data.map(d => d.gender))];
    const counts = gender.map(g => data.filter(d => d.gender === g).length);

    const dataset = gender.map((_, i) => ({
        label: gender[i],
        count: counts[i],
    }));

    d3.select('.vis-piechart-gender > *').remove();
    const margin = {top: 10, right: 20, bottom: 30, left: 40};
    const width = outerWidth - margin.left - margin.right;
    const height = outerHeight - margin.top - margin.bottom;

    let svg = d3.select('.vis-piechart-gender')
        .append('svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', 'translate(' + (width / 2 + margin.left) + ',' + (height / 2 + margin.top) + ')');

    let radius = Math.min(width, height) / 2;

    let color = d3.scaleOrdinal()
        .range(['steelblue', 'LightBlue']);

    let arc = d3.arc()
        .innerRadius(0)
        .outerRadius(radius);

    let pie = d3.pie()
        .value(function (d) {
            return d.count;
        })
        .sort(null);

    svg.selectAll('path')
        .data(pie(dataset))
        .enter()
        .append('path')
        .attr('d', arc)
        .attr('fill', function (d, i) {
            return color(d.data.label);
        })
        .on('click', (d, i) => filter(d.data.label))
        .on('mouseover', function (d, i) {
            d3.select(this).style('cursor', 'pointer');
        })
        .on('mouseout', function (d, i) {
            d3.select(this).style('cursor', 'default');
        });

    let legendG = svg.selectAll('.legend')
        .data(pie(dataset))
        .enter().append('g')
        .attr('transform', function (d, i) {
            return 'translate(' + (i * 70 - 100) + ',' + 110 + ')';
        })
        .attr('class', 'legend');

    legendG.append('rect')
        .attr('width', 10)
        .attr('height', 10)
        .attr('fill', function (d, i) {
            return color(i);
        });

    legendG.append('text')
        .text(function (d) {
            return d.data.label;
        })
        .style('font-size', 12)
        .attr('y', 10)
        .attr('x', 11);
};

export default draw;
