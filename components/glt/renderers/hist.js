import {slice} from "d3-array/src/array";
import bisect from "d3-array/src/bisect";
import constant from "d3-array/src/constant";
import extent from "d3-array/src/extent";
import identity from "d3-array/src/identity";
import ticks from "d3-array/src/ticks";
import sturges from "d3-array/src/threshold/sturges";

export default function() {
    var value = identity,
        domain = extent,
        threshold = sturges;

    function histogram(data) {
        var i,
            n = data.length,
            x,
            values = data;// new Array(n);

        // for (i = 0; i < n; ++i) {
        //   values[i] = value(data[i], i, data);
        // }

        var xz = domain(values),
            x0 = xz[0],
            x1 = xz[1],
            tz = threshold(values, x0, x1);

        // Convert number of thresholds into uniform thresholds.
        if (!Array.isArray(tz)) tz = ticks(x0, x1, tz);

        // Remove any thresholds outside the domain.
        var m = tz.length;
        while (tz[0] <= x0) tz.shift(), --m;
        while (tz[m - 1] >= x1) tz.pop(), --m;

        var bins = new Array(m + 1),
            bin;

        // Initialize bins.
        for (i = 0; i <= m; ++i) {
            bin = bins[i] = [];
            bin.x0 = i > 0 ? tz[i - 1] : x0;
            bin.x1 = i < m ? tz[i] : x1;
        }

        // Assign data to bins by value, ignoring any outside the domain.
        for (i = 0; i < n; ++i) {
            x = values[i];
            if (x0 <= x && x <= x1) {
                // bins[bisect(tz, x, 0, m)].push(data[i]);
                bins[bisect(tz, x, 0, m)].length++;
            }
        }

        return bins;
    }

    histogram.value = function(_) {
        return arguments.length ? (value = typeof _ === "function" ? _ : constant(_), histogram) : value;
    };

    histogram.domain = function(_) {
        return arguments.length ? (domain = typeof _ === "function" ? _ : constant([_[0], _[1]]), histogram) : domain;
    };

    histogram.thresholds = function(_) {
        return arguments.length ? (threshold = typeof _ === "function" ? _ : Array.isArray(_) ? constant(slice.call(_)) : constant(_), histogram) : threshold;
    };

    return histogram;
}
