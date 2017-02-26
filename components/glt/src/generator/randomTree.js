import {all, types} from '../features/index'
import {randomInt} from './randomInt'
import {VALUE, POSITION, COLOR, POS} from '../features/names';
import {randomParam} from './randomParams';

export function randomTree(type = 'vec3', proto = null, level = 0, stop = 4, stopPos = 5, noblend = false) {
    if (type === 'bool' || type === 'int') {
        return randomParam(type, proto);
    }

    if (proto && (proto[1] !== VALUE && proto[1] !== COLOR && proto[1] !== POSITION)) {
        return randomParam(type, proto);
    }

    let filtered = all.filter((a) => a.output === type);

    if (noblend) {
        filtered = filtered.filter((a) => a.type !== types.blend);
    }

    if ((level >= stop) && (proto[1] === COLOR || proto[1] === VALUE)) {
        filtered = filtered.filter((a) => {
            return !a.variable;
        });
    } else if ((level >= stopPos) && (proto[1] === POSITION)) {
        filtered = filtered.filter((a) => {
            return !a.position;
        });
    }

    if (!filtered.length) {
        return randomParam(type, proto || []);
    }

    const pick = filtered[randomInt(filtered.length)];

    const ret = {
        name: pick.name,
        params: pick.input.map((input) => {
            return randomTree(input[0], input, level + 1, stop, stopPos, pick.type === types.blend);
        })
    };

    if (!proto && (JSON.stringify(ret).indexOf(POS) < 0)) {
        return randomTree();
    } else {
        return !proto ? {data: ret} : ret;
    }
}
