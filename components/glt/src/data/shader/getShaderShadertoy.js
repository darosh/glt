import {POS} from '../../features/names';

export function getShaderShadertoy(shader, lib, uniforms) {
    return {
        fragmentShader: [
            uniforms ? uniforms : null,
            uniforms ? '' : null,
            lib,
            '',
            'void mainImage(out vec4 fragColor, in vec2 fragCoord) {',
            ' vec2 ' + POS + ' = fragCoord.xy / iResolution.x * 2. - vec2(1., iResolution.y / iResolution.x);',
            ' vec3 color = ' + shader + ';',
            ' fragColor = vec4(color, 1.0);',
            '}'
        ].filter((l) => l !== null).join('\n')
    }
}
