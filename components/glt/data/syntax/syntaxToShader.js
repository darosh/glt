import {is} from '../../utils/is';
import {isObject} from '../../utils/isObject';
import {PARAM, POS} from '../../features/names';

export function syntaxToShader(tree, vec3 = true, top = true) {
    if (top === true) {
        top = tree;
    }

    if (vec3 && (tree.proto.output !== 'vec3')) {
        return 'vec3(' + syntaxToShader(tree, false, top) + ')';
    }

    return tree.proto.glsl + '(' + rawParams(tree, top).join(', ') + ')'
}

function rawParams(tree, top) {
    return tree.proto.input.filter((input) => !input[PARAM.placeholder]).map((input, i) => {
        const param = tree.params[i];

        if (isObject(param)) {
            return syntaxToShader(param, false, top);
        } else {
            return formatParam(param, input, top, tree);
        }
    });
}

function formatParam(param, type, top, tree) {
    if (type[0] === 'vec2' && param === POS) {
        return param;
    }

    let p = is(param) ? param : (is(type[2]) ? type[2] : defaultType(type[0]));

    if (isObject(p)) {
        return syntaxToShader(param, false, top);
    }

    if (type[0] === 'int') {
        return p.toString();
    } else if (type[0] === 'bool') {
        return p.toString();
    } else if (type[0] === 'float') {
        if (top.uniforms) {
            return uniform(top, p, type, tree)
        }

        let s = p.toString();

        if (s.indexOf('.') >= 0) {
            return s;
        } else {
            return s + '.';
        }
    } else if (type[0].indexOf('vec') === 0) {
        if (top.uniforms) {
            return uniform(top, p, type, tree)
        }

        return type[0] + '(' + p.map((p) => formatParam(p, ['float'], top, tree)).join(', ') + ')';
    }

    return param;
}

function defaultType(type) {
    if (type.indexOf('vec') === 0) {
        const n = parseInt(type.replace('vec', ''));
        const a = [];

        for (let i = 0; i < n; i++) {
            a.push(1);
        }

        return a;
    } else if (type === 'bool') {
        return true;
    } else {
        return 1;
    }
}

function uniform(top, p, type, tree) {
    let name = tree.name + capitalize(type[1]);
    top.names = top.names || {};
    top.names[name] = top.names[name] || 0;
    top.names[name]++;
    const index = top.names[name];
    name = name + ((index > 1) ? +index : '');
    top.uniforms[name] = {value: p, proto: type};
    return name;
}

function capitalize(s) {
    return s[0].toUpperCase() + s.substring(1);
}
