import {scaleLinear} from 'd3-scale'
import {randomNormal} from 'd3-random'

export function rand(min = Number.MIN_VALUE, mid, max = Number.MAX_VALUE) {
    let m = !isNaN(mid) ? mid : ((min + max) / 2);
    let r = 8;

    return scaleLinear().domain([-r, 0, +r]).range([min, m, max]).clamp(true)(randomNormal()());
}
