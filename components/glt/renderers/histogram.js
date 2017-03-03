import {default as hist} from './hist';
import {default as range} from 'd3-array/src/range';

export function histogram(renderer, bins = 32, float = false, from = 0, _to = 0) {
    const ret = [];
    const array = renderer.pixels(float);
    const r = float ? [-Infinity, ...range(-1, 1, 2 / bins), 1, +Infinity] : range(0, 255, 256 / bins);

    const to = _to ? _to : array.length;

    for (let i = 0; i < 3; i++) {
        let channel = array.filter((v, j) => (j % 4 === i) && (j >= from) && (j < to));
        let h = hist().thresholds(r)(channel);
        ret.push({
            min: h[0].x0,
            max: h[h.length - 1].x1,
            bins: h
        });
    }

    ret.min = Math.min.apply(null, ret.map(d => d.min));
    ret.max = Math.max.apply(null, ret.map(d => d.max));
    ret.samples = (to - from) / 4;

    return ret;
}
