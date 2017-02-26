import gltg from '../glt/glsl/glsl.min.glsl';
import {glsls} from '../glt/src/features/index';

export const GLSL = gltg;

export function getFragments() {
    const lines = gltg.split('\n');

    const ids = [];
    let match = null;

    lines.forEach((line, i) => {
        if (line[0] === '}') {
            let p = ids[ids.length - 1];
            p.last = i;
            p.lines = lines.slice(p.first, p.last + 1);
        } else if (line[0] === ' ' || line[0] === '#') {
        } else if (match = /^[^ ]+ ([^(]+)/.exec(line)) {
            ids.push({
                name: match[1],
                first: i,
                main: glsls.indexOf(match[1]) >= 0
            });
        }
    });

    const names = {};
    ids.forEach((ids) => names[ids.name] = true);
    ids.forEach((id) => id.deps = findCalls(id.lines, id.name, names));

    let dupl = null;

    while (dupl = findDuplicate(ids)) {
        removeDuplicate(dupl, ids);
    }

    const ret = {};

    ids.forEach((id) => {
        ret[id.name] = ret[id.name] || {lines: []};
        ret[id.name].lines = [...ret[id.name].lines, ...id.lines];

        if (id.deps.length) {
            ret[id.name].deps = ret[id.name].deps || [];
            id.deps.forEach((d) => {
                if (ret[id.name].deps.indexOf(d) === -1) {
                    ret[id.name].deps.push(d);
                }
            });
        }
    });

    return ret;
}

function removeDuplicate(dupls, ids) {
    if (dupls[0].main) {
        dupls.reverse();
    }

    let keep = dupls[1];
    let remove = dupls[0];

    ids.splice(ids.indexOf(remove), 1);

    ids.forEach((id) => {
        let ind;

        if ((ind = id.deps.indexOf(remove.name)) >= 0) {
            id.deps[ind] = keep.name;

            id.lines.forEach((line, i) => {
                id.lines[i] = line.replace(new RegExp(remove.name + '\\(', 'g'), keep.name + '(');
            });
        }
    });
}

function findCalls(lines, name, names) {
    const rx = /([a-z0-9_]+)\(/gi;
    let matches;
    let results = {};

    while (matches = rx.exec(lines.join('\n'))) {
        if ((matches[1] !== name) && names[matches[1]]) {
            results[matches[1]] = true;
        }
    }

    return Object.keys(results);
}

function findDuplicate(ids) {
    ids.forEach((id) => {
        id.simple = simpleFunction(id.lines);
    });

    let pair = null;

    ids.forEach((id1, i) => {
        if (pair !== null) {
            return;
        }

        ids.forEach((id2, j) => {
            if (i === j || pair !== null) {
                return;
            }

            if (id1.simple === id2.simple) {
                if (!(id1.main && id2.main)) {
                    pair = [id1, id2];
                }
            }
        });
    });

    ids.forEach((id) => {
        delete id.simple;
    });

    return pair;
}

function simpleFunction(lines) {
    let first = lines[0].replace(/([a-z0-9]+) [^(]+/i, '$1 function');
    return [first, ...lines.slice(1)].join('\n');
}

if(typeof exports === 'object' && typeof module !== 'undefined') {
    console.log(JSON.stringify(getFragments(), null, 2));
}
