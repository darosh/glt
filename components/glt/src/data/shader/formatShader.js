import {compile} from '../compile'
import {getUniforms} from './getUniforms';
import {getDefines} from './getDefines';
import {variableType} from '../variableType';
import {getShaderThree} from './getShaderThree';

export function formatShader(data, t, multi, uniforms, getShader = getShaderThree) {
    const c = compile(data, t, multi);
    let u = '';

    if (t === variableType.DEFINE) {
        u = getDefines(c.uniforms || uniforms);
    } else if (t === variableType.UNIFORM) {
        u = getUniforms(c.uniforms || uniforms);
    }

    const s = getShader(c.shader, c.code, u);

    return {
        color: c.shader,
        functions: c.code,
        variables: u,
        all: (s.vertexShader
            ? ('// Vertex shader\n\n' + s.vertexShader + '\n\n' + '// Fragment shader\n\n')
            : '')
        + s.fragmentShader
    };
}
