import {randomInt} from './randomInt';
import {rand} from './rand';
import {randomUniform} from 'd3-random';

export function randomParam(type, proto) {
    if ((type === 'int') && proto[3]) {
        return randomInt(proto[3][0], proto[3][1]);
    } else if ((type === 'float') && proto[3]) {
        // return randomUniform(proto[3][0], proto[3][1])();
        return rand(proto[3][0], proto[2], proto[3][1]);
    } else if ((type === 'vec2')) {
        if (proto[3]) {
            return [randomUniform(proto[3][0], proto[3][1])(), randomUniform(proto[3][0], proto[3][1])()];
        } else {
            return 'pos';
        }
    } else if ((type === 'vec3') && proto[3]) {
        return [randomUniform(proto[3][0], proto[3][1])(), randomUniform(proto[3][0], proto[3][1])(), randomUniform(proto[3][0], proto[3][1])()];
    } else if ((type === 'vec3') && !proto[2]) {
        return [randomUniform(1)(), randomUniform(1)(), randomUniform(1)()];
    } else if (type === 'bool') {
        return Math.random() < 0.5;
    }

    return proto[2];
}
