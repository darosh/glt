import {POS} from '../../features/names';

export function getShaderThree(shader, lib, uniforms) {
    return {
        vertexShader: [
            'varying vec2 ' + POS + ';',
            '',
            'void main() {',
            ' ' + POS + ' = uv * 2. - 1.;',
            ' gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
            '}'
        ].join('\n'),
        fragmentShader: [
            uniforms ? uniforms : null,
            uniforms ? '' : null,
            lib,
            '',
            'varying vec2 ' + POS + ';',
            '',
            'void main() {',
            ' vec3 color = ' + shader + ';',
            ' gl_FragColor = vec4(color, 1.0);',
            '}'
        ].filter((l) => l !== null).join('\n')
    }
}
