import {histogram} from './histogram';
import {default as range} from 'd3-array/src/range';

export function getHistogram(array, ext = [-1, 1], overflow = true, bins = 32, from = 0, _to = 0) {
    const ret = [];
    const r = range(ext[0], ext[1], (ext[1] - ext[0] + (ext[1] === 255 ? 1 : 0)) / bins);
    const thresholds = overflow ? [-Infinity, ...r, ext[1], +Infinity] : [...r, ext[1]];
    const to = _to ? _to : array.length;

    for (let i = 0; i < 3; i++) {
        let h = histogram(array, thresholds, i, 4, from, to);
        ret.push(h);
    }

    ret.areas = getAreas(ret);
    ret.perms = getPerms(ret.length);
    ret.blocks = getBlocks(ret.areas, ret.perms);
    ret.min = Math.min.apply(null, ret.map(d => d.min));
    ret.max = Math.max.apply(null, ret.map(d => d.max));
    ret.samples = 3 * (to - from) / 4;
    ret.thresholds = thresholds;
    ret.bins = bins;
    ret.ext = ext;
    ret.overflow = overflow;
    ret.normalize = Math.max.apply(null, ret.map(d => Math.max.apply(null, d)));

    return ret;
}

function getAreas(hg) {
    const bins = hg[0].length;
    const channels = hg.length;
    const areas = [];

    function sortV(a, b) {
        return a.v - b.v;
    }

    for (let b = 0; b < bins; b++) {
        const bn = [];
        let c;

        for (c = 0; c < channels; c++) {
            bn.push({c: c, v: hg[c][b]});
        }

        bn.sort(sortV);

        const stops = {};

        for (c = 0; c < channels; c++) {
            stops[bn[c].v] = stops[bn[c].v] || 0;
            stops[bn[c].v] += Math.pow(2, bn[c].c);
        }

        const as = [];

        for (let k in stops) {
            as.push({v: parseFloat(k), s: stops[k]});
        }

        as.sort(sortV);
        areas.push(as);
    }

    return areas;
}

function getPerms(channels) {
    const ps = Math.pow(2, channels);
    const ret = [];

    for (let i = 1; i < ps; i++) {
        ret.push(i);
    }

    ret.sort(function (a, b) {
        function ones(num) {
            let o = 0;
            while (num) {
                /*jslint bitwise: true */
                o += num & 1;
                num >>= 1;
                /*jslint bitwise: false */
            }
            return o;
        }

        return ones(b) - ones(a);
    });

    return ret;
}

function getBlocks(areas, perms) {
    const blocks = [];
    let a, p;

    for (p = 0; p < perms.length; p++) {
        const block = [];
        blocks.push(block);

        for (a = 0; a < areas.length; a++) {
            block.push(0);
        }
    }

    for (a = 0; a < areas.length; a++) {
        let prevS = 0;
        let z = [];

        for (let k in areas[a]) {
            z.push(areas[a][k]);
        }

        z.reverse();

        for (let j = 0; j < z.length; j++) {
            let o1 = z[j];
            let o2;

            if ((j + 1) < z.length) {
                o2 = z[j + 1];
            } else {
                o2 = {v: 0, s: 7};
            }

            let v = o1.v - o2.v;
            prevS += o1.s;
            let b = prevS - 1;
            blocks[b][a] = v;
        }
    }

    const ret = [];

    for (p = 0; p < perms.length; p++) {
        ret.push(blocks[perms[p] - 1]);
    }

    return ret;
}
