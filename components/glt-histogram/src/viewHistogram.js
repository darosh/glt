import {scaleLinear, scaleOrdinal} from 'd3-scale';
import {area, curveMonotoneX, curveStepAfter} from 'd3-shape';
import {select} from 'd3-selection';
import {format} from 'd3-format';

export function viewHistogram(svg, h, options = {}) {
    svg = select(svg);

    const opt = {...viewHistogram.m(), ...options};

    const mid = (h.ext[0] + h.ext[1]) / 2;
    const rangeMid = [h.ext[0], mid, h.ext[1]];

    const f = format(/*(h.ext[0] < 0 ? '+' : '') + */'+,.' + opt.precision);
    const ft = d => f(d).replace('-', '&minus;').replace(/^\+0$/, '0');
    const fp = format('.0%');

    const l = h.blocks[0].length - (h.overflow ? 2 : 0) + (!opt.curve ? 1 : 0);

    const extentPosition = d => d < h.ext[0] ? xe(0) : d > h.ext[1] ? xe(1) : xv(Math.max(h.ext[0], Math.min(h.ext[1], d)));

    const tp = Math.max(opt.overflow, opt.fontSize * 2.25);
    const x = scaleLinear().domain([0, l - 1]).range([h.overflow ? opt.overflow : 0, opt.width - (h.overflow ? opt.overflow : 0)]);
    const xo = scaleLinear().domain([0, 1, 2, 3]).range([0, opt.overflow, opt.width - opt.overflow, opt.width]);
    const xv = scaleLinear().domain(h.ext).range([h.overflow ? tp : 0, opt.width - (h.overflow ? tp : 0)]);
    const xe = scaleLinear().domain([0, 1]).range([0, opt.width]);
    const y = scaleLinear().domain([0, h.normalize]).range([opt.height - opt.bottom, opt.top]);
    const z = scaleOrdinal().range(opt.colors);

    const eps = [h.min, h.max].map(extentPosition);

    while ((eps[1] - eps[0]) < (opt.fontSize * 6)) {
        let moved = false;

        if ((eps[0] - 1) >= 0) {
            eps[0]--;
            moved = true;
        }

        if ((eps[1] + 1) <= opt.width) {
            eps[1]++;
            moved = true;
        }

        if (!moved) {
            break;
        }
    }

    let op = [0, 0];

    if (h.overflow) {
        h.blocks.forEach(b => {
            op[0] += b[0];
            op[1] += b[b.length - 1];
        });
    }

    op[0] /= h.samples;
    op[1] /= h.samples;

    console.log(op);

    const areaShape = area()
        .curve(opt.curve ? curveMonotoneX : curveStepAfter)
        .x(function (d, i) {
            return x(i);
        })
        .y0(function (d) {
            return y(d[0]);
        })
        .y1(function (d) {
            return y(d[1]);
        });

    const overflowShape = area()
        .curve(curveStepAfter)
        .x(function (d, i) {
            return xo(i);
        })
        .y0(function (d) {
            return y(d[0]);
        })
        .y1(function (d) {
            return y(d[1]);
        });

    let prev;
    const stacked = h.blocks.map(function (series, seriesIndex) {
        return prev = series.map(function (value, valueIndex) {
            const previous = seriesIndex > 0 ? prev[valueIndex][1] : 0;
            return [previous, value + previous];
        });
    });

    const stacked2 = h.overflow ? stacked.map((a, i) => {
        let z = a.splice(1, a.length - 2);
        stacked[i] = [a[0], [0, 0], a[1]];
        return z;
    }) : stacked;

    if (h.overflow) {
        stacked.forEach(d => d.push(d[d.length - 1]));
    }

    if (!opt.curve) {
        stacked2.forEach(d => d.push(d[d.length - 1]));
    }

    let join = svg.selectAll('.bin').data(stacked2);
    join.exit().remove();
    join.enter()
        .append('path')
        .attr('class', 'bin')
        .merge(join)
        .style('fill', (d, i) => z(i))
        .attr('d', areaShape);

    join = svg.selectAll('.overflow').data(h.overflow ? stacked : []);
    join.exit().remove();
    join.enter()
        .append('path')
        .attr('class', 'overflow')
        .merge(join)
        .style('fill', (d, i) => z(i))
        .attr('d', overflowShape);

    join = svg.selectAll('.line-min').data((h.overflow && opt.lines) ? [0] : []);
    join.exit().remove();
    join.enter()
        .append('line')
        .attr('class', 'line-min')
        .merge(join)
        .attr('x1', Math.floor(x(0)))
        .attr('x2', Math.floor(x(0)))
        .attr('y1', y(0))
        .attr('y2', y(h.normalize))
        .attr('stroke-width', opt.strokeWidth)
        .attr('stroke-dasharray', opt.dash)
        .attr('stroke', opt.stroke);

    join = svg.selectAll('.line-max').data((h.overflow && opt.lines) ? [0] : []);
    join.exit().remove();
    join.enter()
        .append('line')
        .attr('class', 'line-max')
        .merge(join)
        .attr('x1', Math.ceil(x(l - 1)))
        .attr('x2', Math.ceil(x(l - 1)))
        .attr('y1', y(0))
        .attr('y2', y(h.normalize))
        .attr('stroke-width', opt.strokeWidth)
        .attr('stroke-dasharray', opt.dash)
        .attr('stroke', opt.stroke);

    join = svg.selectAll('.line-mid').data(opt.mid ? [0] : []);
    join.exit().remove();
    join.enter()
        .append('line')
        .attr('class', 'line-mid')
        .merge(join)
        .attr('x1', x((l - 1) / 2))
        .attr('x2', x((l - 1) / 2))
        .attr('y1', y(0))
        .attr('y2', y(h.normalize))
        .attr('stroke-width', opt.strokeWidth)
        .attr('stroke-dasharray', opt.dash)
        .attr('stroke', opt.stroke);

    join = svg.selectAll('.labels').data(opt.ticks ? opt.mid ? rangeMid : h.ext : []);
    join.exit().remove();
    join.enter()
        .append('text')
        .attr('class', 'labels')
        .merge(join)
        .attr('text-anchor', (d, i) => ['start', 'middle', 'end'][opt.mid ? i : (i * 2)])
        .attr('dominant-baseline', 'text-before-edge')
        .attr('font-family', opt.font)
        .attr('font-size', opt.fontSize)
        .attr('line-height', opt.line)
        .attr('x', d => xv(d))
        .attr('y', (opt.line - opt.fontSize) / 2)
        .html(d => ft(d));

    join = svg.selectAll('.extent').data(opt.labels ? [h.min, h.max] : []);
    join.exit().remove();
    join.enter()
        .append('text')
        .attr('class', 'extent')
        .merge(join)
        .attr('text-anchor', (d, i) => ['start', 'end'][i])
        .attr('dominant-baseline', 'text-after-edge')
        .attr('font-family', opt.font)
        .attr('font-size', opt.fontSize)
        .attr('line-height', opt.line)
        .attr('x', (d, i) => eps[i] + [1, -1][i])
        .attr('y', opt.height - (opt.line - opt.fontSize) / 2)
        .html(d => ft(d));

    join = svg.selectAll('.percent').data(opt.labels ? op : []);
    join.exit().remove();
    join.enter()
        .append('text')
        .attr('class', 'percent')
        .merge(join)
        .attr('text-anchor', (d, i) => ['start', 'end'][i])
        .attr('dominant-baseline', 'text-after-edge')
        .attr('font-family', opt.font)
        .attr('font-size', opt.fontSize)
        .attr('line-height', opt.line)
        .attr('x', (d, i) => [1, opt.width - 1][i])
        .attr('y', d => y(d * h.samples) + (opt.line - opt.fontSize) / 2)
        .text(d => d ? fp(d) : '');
}

viewHistogram.m = function () {
    return {
        width: 128,
        height: 128,
        overflow: 12,
        top: 16,
        bottom: 16,
        line: 12,
        fontSize: 12,
        font: '"Roboto", monospace',
        curve: true,
        labels: true,
        ticks: true,
        lines: true,
        mid: false,
        precision: 1,
        colors: ['#888', '#ff4', '#f4f', '#4ff', '#f44', '#4f4', '#44f'],
        strokeWidth: 0.75,
        stroke: 'rgba(0,0,0,.66',
        dash: '3 3'
    };
};

viewHistogram.xs = function () {
    return {
        ...viewHistogram.m(), ...{
            width: 64,
            height: 64,
            labels: false,
            ticks: false,
            top: 0,
            bottom: 0,
            lines: false,
            overflow: 4,
            curve: false
        }
    };
};

viewHistogram.s = function () {
    return {
        ...viewHistogram.m(), ...{
            width: 96,
            height: 96,
        }
    };
};

viewHistogram.l = function () {
    return {
        ...viewHistogram.m(), ...{
            width: 256,
            height: 128,
            mid: true,
            overflow: 16,
            precision: 2
        }
    };
};
