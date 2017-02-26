import {each} from '../utils/each';
import {blend} from './blend';
import * as transform from './transform';
import * as modify from './modify';
import * as generator from './generator';
import * as colorize from './colorize';
import * as desaturate from './desaturate';
// import * as _list from './list';
import {COLOR, VALUE, POSITION} from './names';

export const list = {};

export const features = {
    blend: blend,
    transform: transform,
    modify: modify,
    generator: generator,
    colorize: colorize,
    desaturate: desaturate
};

export const types = {
    blend: 'blend',
    transform: 'transform',
    modify: 'modify',
    generator: 'generator',
    colorize: 'colorize',
    desaturate: 'desaturate'
};

function expand() {
    each(features, (k) => {
        each(features[k], (m) => {
            // console.log(features[k][m]);
            let f = features[k][m];

            if (typeof f === 'string') {
                features[k][m] = f = {
                    glsl: f
                };
            }

            expandFeature(f, k, m);
        });
    });
}

export const glsls = [];

function expandFeature(f, k, m) {
    f.type = k;
    f.name = m;
    f.glsl = f.glsl || m;
    f.params = f.params || [];
    f.variants = variants[k](f);

    glsls.push(f.glsl);
}

const variants = {
    blend: () => [
        {
            output: 'float',
            input: [['float', VALUE, 0.5, [0, 1]], ['float', VALUE, 0.5, [0, 1]]]
        },
        {
            output: 'float',
            input: [['float', VALUE, 0.5, [0, 1]], ['float', VALUE, 0.5, [0, 1]], ['float', 'opacity', 0.5, [0, 1]]]
        },
        {
            output: 'vec3',
            input: [['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]], ['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]]]
        },
        {
            output: 'vec3',
            input: [['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]], ['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]], ['float', 'opacity', 0.5, [0, 1]]]
        }
    ],
    transform: (feature) => [{
        output: 'vec2',
        input: [['vec2', POSITION], ...feature.params]
    }],
    modify: (feature) => [{
        output: 'float',
        input: [['float', VALUE, 0.5, [-1, 1]], ...feature.params]
    }, {
        output: 'vec3',
        input: [['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]], ...feature.params]
    }],
    generator: (feature) => [{
        output: feature.color ? 'vec3' : 'float',
        input: feature.position === false ? feature.params : [['vec2', POSITION], ...feature.params]
    }],
    colorize: (feature) => [
        {
            output: 'vec3',
            input: [['float', VALUE, 0.5, [0, 1]], ...feature.params]
        },
        ...(feature.color
            ? [{
                output: 'vec3',
                input: [['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]], ...feature.params]
            }]
            : [])
    ],
    desaturate: (feature) => [{
        output: 'float',
        input: [['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]], ...feature.params]
    }]
};

function getAll() {
    const all = [];
    each(features,
        (k) => each(features[k],
            (m) => {
                list[m] = features[k][m];
                features[k][m].variants.forEach((v) => {
                    const f = features[k][m];
                    v.type = f.type;
                    v.name = f.name;
                    v.glsl = f.glsl;
                    v.variable = hasVariableInput(v);
                    v.position = hasPositionInput(v);
                    all.push(v);
                })
            }
        )
    );
    return all;
}

export function getSignature(v, named = true) {
    return v.output + ' ' + v.glsl + '(' + v.input.map((p) => p[0] + (named ? ' ' + p[1] : '')).join(', ') + ')';
}

expand();
export const all = getAll();

export function getProtos(name) {
    return all.filter((d) => d.name === name);
}

export function hasVariableInput(v) {
    const arr = (v.input || []);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === VALUE || arr[i][1] === COLOR) {
            return true;
        }
    }

    return false;
}

export function hasPositionInput(v) {
    const arr = (v.input || []);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i][1] === POSITION) {
            return true;
        }
    }

    return false;
}
