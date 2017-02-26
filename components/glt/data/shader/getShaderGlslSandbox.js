import {POS} from '../../features/names';

export function getShaderGlslSandbox(shader, lib, uniforms) {
    return {
        fragmentShader: [
            '#ifdef GL_ES',
            ' precision mediump float;',
            '#endif',
            '',
            uniforms ? uniforms : null,
            uniforms ? '' : null,
            lib,
            '',
            'uniform vec2 resolution;',
            '',
            'void main() {',
            ' vec2 ' + POS + ' = gl_FragCoord.xy / resolution.x * 2. - vec2(1., resolution.y / resolution.x);',
            ' vec3 color = ' + shader + ';',
            ' gl_FragColor = vec4(color, 1.0);',
            '}'
        ].filter((l) => l !== null).join('\n')
    }
}
