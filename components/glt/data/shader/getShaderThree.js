import {POS, COORD} from '../../features/names';
import {isArray} from '../../utils/isArray';

export function getShaderThree(shader, lib, uniforms) {
    let shaderLines;

    if (isArray(shader)) {
        const L = shader.length;
        shaderLines = [
            'int part = int(floor(((' + POS + '.x+1.)/2.)*' + L + '.)/' + L + '.);',
            POS + '.x = ((' + POS + '.x+1.)*' + L + '.)%2.-1.',
            'vec3 color;'
        ];
        shader.forEach((s, i) => {
            shaderLines.push((i ? 'else ' : '') + 'if(part == ' + i + ') { color = ' + s + '; }');
        });
    }

    return {
        vertexShader: [
            'varying vec2 ' + COORD + ';',
            '',
            'void main() {',
            ' ' + COORD + ' = uv * 2. - 1.;',
            ' gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);',
            '}'
        ].join('\n'),
        fragmentShader: [
            'uniform vec3 resolution;',
            uniforms ? uniforms : null,
            uniforms ? '' : null,
            lib,
            '',
            'varying vec2 ' + COORD + ';',
            '',
            'void main() {',
            ' vec2 ' + POS + ' = vec2(' + COORD + '.x, ' + COORD + '.y * resolution.y /resolution.x);',
            ...(shaderLines ? shaderLines : [' vec3 color = ' + shader + ';']),
            ' gl_FragColor = vec4(color, 1.0);',
            '}'
        ].filter((l) => l !== null).join('\n')
    }
}
