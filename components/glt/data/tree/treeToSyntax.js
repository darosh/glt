import {treeToFlat} from './treeToFlat';
import {getProtos} from '../../features/index';
import {isObject} from '../../utils/isObject';
import {isArray} from '../../utils/isArray';
import {deep} from '../../utils/deep';

export function treeToSyntax(_top) {
    const top = {..._top};
    const flat = treeToFlat(top.data);

    flat.forEach((d) => {
        d.params = d.params || [];
        d.proto = deep(findProto(d));

        if (d.proto) {
            fixInputs(d);
        }
    });

    return top;
}

function fixInputs(d) {
    const inputs = getInputs(d);

    inputs.forEach((input, i) => {
        const target = d.proto.input[i][0];
        if (input && (input !== target)) {
            if (input === 'float' && target === 'vec3') {
                d.params[i] = wrap(d.params[i], target);
            }
        }
    });
}

function wrap(param, target) {
    return {
        params: [param],
        proto: {
            glsl: target,
            input: [['vec3']]
        }
    };
}

function findProto(d) {
    let protos = getProtos(d.name);

    if (!protos.length) {
        throw new Error('Unknown feature: ' + d.name);
    }

    if (protos.length === 1) {
        // console.info('Using single signature: ' + d.name);
        return protos[0]
    }

    let inputs = getInputs(d);
    let exacts = exactSignatures(protos, inputs);

    if (exacts.length === 1) {
        // console.info('Using exact signature: ' + d.name);
        return exacts[0];
    } else if (exacts.length > 1) {
        // console.info('Using first exact signature: ' + d.name);
        return exacts[0];
    }

    let longer = longerSignatures(protos, inputs);

    if (longer.length === 1) {
        // console.info('Using longer signature: ' + d.name);
        return longer[0];
    } else if (longer.length > 1) {
        // console.info('Using first longer signature: ' + d.name);
        return longer[0];
    }

    let exactsConvertible = convertibleExactSignatures(protos, inputs);

    if (exactsConvertible.length === 1) {
        // console.info('Using exact convertible signature: ' + d.name);
        return exactsConvertible[0];
    } else if (exactsConvertible.length > 1) {
        // console.info('Using first exact convertible signature: ' + d.name);
        return exactsConvertible[0];
    }

    throw new Error('Unknown signature: ' + d.name + '(' + inputs.join(', ') + ')');
}

function getInputs(d) {
    return d.params.map((p) => {
        if (isObject(p) && p.proto) {
            return p.proto.output;
        } else if (isArray(p)) {
            return 'vec' + p.length;
        } else if (!isNaN(p) && !Number.isInteger(p)) {
            return 'float';
        } else if (p === true || p === false) {
            return 'bool'
        } else {
            return null;
        }
    });
}

function exactSignatures(protos, inputs) {
    return protos.filter((v) => {
        if (v.input.length === inputs.length) {
            for (let i = 0; i < v.input.length; i++) {
                if (inputs[i] && (inputs[i] !== v.input[i][0])) {
                    return false;
                }
            }

            return true;
        } else {
            return false;
        }
    });
}

function longerSignatures(protos, inputs) {
    return protos.filter((v) => {
        if (v.input.length > inputs.length) {
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i] && (inputs[i] !== v.input[i][0])) {
                    return false;
                }
            }

            return true;
        } else {
            return false;
        }
    });
}

function convertibleExactSignatures(protos, inputs) {
    return protos.filter((v) => {
        if (v.input.length === inputs.length) {
            for (let i = 0; i < v.input.length; i++) {
                if (inputs[i] && (inputs[i] === 'float' && v.input[i][0] === 'vec3')) {

                } else if (inputs[i] && (inputs[i] !== v.input[i][0])) {
                    return false;
                }
            }

            return true;
        } else {
            return false;
        }
    });
}
