import {each} from '../utils/each';

export function step(uniforms) {
    let K = 0.01;

    each(uniforms, function (k, v) {
        if (!v.value.length) {
            v.value += v.K || K;
            if (v.value > v.proto[3][1]) {
                v.K = -K;
                v.value = v.proto[3][1];
            } else if (v.value < v.proto[3][0]) {
                v.K = K;
                v.value = v.proto[3][0];
            }
        } else {
            v.value.forEach(function (d, i) {
                v.K = v.K || [];
                v.value[i] += v.K[i] || K;
                if (v.value[i] > v.proto[3][1]) {
                    v.K[i] = -K;
                    v.value[i] = v.proto[3][1];
                } else if (v.value[i] < v.proto[3][0]) {
                    v.K[i] = K;
                    v.value[i] = v.proto[3][0];
                }
            });
        }
    });
}
