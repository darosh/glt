//noinspection JSUnresolvedVariable
import gltgs from '../../glsl/glsl.min.json';

export function getLib(functions, additional, singleLine = true) {
    const gltg = additional ? {...gltgs, ...additional} : gltgs;

    if (!functions) {
        return getLibAll(singleLine, gltg, additional);
    }

    let deps = [...functions];

    while (getDeps(deps, gltg)) {
    }

    // getDeps(deps, gltg);
    depsWeights(deps, null, gltg);

    const lines = [];

    deps.forEach((d) => {
        if (gltg[d]) {
            lines.push(singleLine ? gltg[d].lines.join('') : gltg[d].lines.join('\n'));
        }
    });

    return lines.join('\n');
}

export function getLibAll(singleLine, gltg, additional) {
    return getLib(Object.keys(gltg), additional, singleLine);
}

function getDeps(deps, gltg) {
    let l = deps.length;

    for (let i = 0; i < deps.length; i++) {
        let f = deps[deps.length - 1 - i];

        if (gltg[f] && gltg[f].deps) {
            for (let j = 0; j < gltg[f].deps.length; j++) {
                let d = gltg[f].deps[j];
                let ind = deps.indexOf(d);

                if (ind === -1) {
                    deps.unshift(d);
                    i--;
                } else {
                    deps.splice(ind, 1);
                    deps.unshift(d);

                    if (ind > (deps.length - 1 - i)) {
                        i--;
                    }
                }
            }
        }
    }

    return deps.length !== l;
}

function depsWeights(deps, _weights, gltg) {
    const weights = _weights || {};

    deps.forEach((d) => {
        weights[d] = weights[d] || 0;
        weights[d]++;

        if (gltg[d] && gltg[d].deps) {
            depsWeights(gltg[d].deps, weights, gltg);
        }
    });

    deps.sort((a, b) => {
        return weights[b] - weights[a];
    });
}
