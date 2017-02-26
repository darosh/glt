import gltg from '../../../glsl/glsl.min.json';
import {PARAM} from '../../features/names';
import {syntaxToShader} from './syntaxToShader';
import {detectRequired} from './detectRequired';

export function getFunction(fn, top) {
    if (fn.proto.use) {
        const lib = gltg[fn.proto.use];
        const rxUse = new RegExp(fn.proto.use, 'g');
        const rxPl = new RegExp(fn.proto.placeholder, 'g');
        return {
            lines: lib.lines.map((l) => l.replace(rxUse, fn.proto.glsl).replace(rxPl, fn.proto.target)),
            deps: lib.deps.map((l) => l.replace(fn.proto.placeholder, fn.proto.target))
        }
    } else {
        const i = fn.proto.input[0][PARAM.input][0];

        const t = {};
        detectRequired(fn.params[0], t);

        return {
            lines: [
                fn.proto.output + ' ' + fn.proto.glsl + '(' + i[0] + ' ' + i[1] + ') {',
                ' return' + ' ' + syntaxToShader(fn.params[0], false, top) + ';',
                '}'
            ],
            deps: t.required
        }
    }
}
