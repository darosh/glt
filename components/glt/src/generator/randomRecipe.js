import {features, types} from '../features/index';
import {default as randomUniform} from 'd3-random/src/uniform';

export const options = {
    minItems: 3,
    maxItems: 9,
    simple: true,
};

const all = [];
let generators = [];
let simpleAll = [];
let simpleGenerators = [];
let blends = [];

export function randomRecipe(opt) {
    const o = {...options, ...opt};
    getTypes();

    const ret = {
        components: []
    };

    var items = randomInt(o.minItems, o.maxItems);

    for (let i = 0; i < items; i++) {
        ret.components.push(randomComponent(o, i));
    }

    return ret;
}

function randomComponent(o, i) {
    if (!i) {
        return generator(o, i);
    }

    let a = o.simple ? simpleAll : all;
    a = a[randomInt(a.length)];

    if (a.features === types.generator) {
        return generator(o, i);
    }

    return component(a, o, i);
}

function component(a, o, i) {
    let c = {};
    c[a.features] = a.component;

    c.params = randomParams(a.proto.params);

    return c;
}

function generator(o, i) {
    let g;

    if (o.simple) {
        g = simpleGenerators[randomInt(simpleGenerators.length)];
    } else {
        g = generators[randomInt(simpleGenerators.length)];
    }

    let c = {
        generator: g.component
    };

    if (i) {
        c.blend = blends[randomInt(blends.length)];
        c.opacity = Math.random();
        c.tint = [Math.random(), Math.random(), Math.random()];
    }

    if (g.proto.params) {
        c.params = randomParams(g.proto.params)
    }

    return c;
}

function randomParams(params) {
    return params.map((p) => {
        if (p[0] === 'float' && p[3]) {
            return randomUniform(p[3][0], p[3][1])();
        } else if (p[0] === 'int' && p[3]) {
            return randomInt(p[3][0], p[3][1]);
        } else if (p[0] === 'bool') {
            return Math.random() > 0.5;
        } else if (p[3] && (p[0].indexOf('vec') >= 0)) {
            let n = parseInt(p[0].replace('vec', ''));
            let m = [];
            for (let i = 0; i < n; i++) {
                m.push(randomUniform(p[3][0], p[3][1])())
            }
            return m;
        }
    });
}

function randomInt(min, max) {
    return Math.floor(randomUniform(min, max)());
}

function getTypes() {
    if (all.length) {
        return;
    }

    Object.keys(features).filter((k) => k !== types.blend).forEach((k) => Object.keys(features[k]).forEach((d) => all.push({
        features: k,
        component: d,
        proto: features[k][d]
    })));

    generators = all.filter((d) => d.features === types.generator);
    simpleAll = all.filter((d) => isSimple(d.proto));
    simpleGenerators = generators.filter((d) => isSimple(d.proto));
    blends = Object.keys(features.blend);
}

function isSimple(proto) {
    for (let i = 0; i < (proto.params ? proto.params.length : 0); i++) {
        if (proto.params[i][0] === 'value') {
            return false;
        }
    }

    return true;
}
