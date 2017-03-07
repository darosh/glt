import bisect from 'd3-array/src/bisect';

export function histogram(data, tz, channel, channels, from, to) {
    let m = tz.length - 1;
    let bins = [];
    let x0 = Infinity;
    let x1 = -Infinity;

    for (let i = 0; i < m; i++) {
        bins.push(0);
    }

    let inf = tz[0] === -Infinity;
    let o = inf ? m - 1 : m;
    let a = tz[1];
    let b = tz[tz.length - 2];

    for (let i = from + channel; i < to; i += channels) {
        let x = data[i];

        if (isNaN(x)) {
            continue;
        }

        x0 = Math.min(x0, x);
        x1 = Math.max(x1, x);
        let ind = inf
            ? x < a
                ? 0
                : x > b ? o : -1
            : -1;
        ind = ind === -1 ? (bisect(tz, x, 1, o) - 1) : ind;
        ind = ind < 0 ? 0 : ind;
        bins[ind]++;
    }
    bins.min = x0;
    bins.max = x1;
    return bins;
}
