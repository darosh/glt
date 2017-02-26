import {CosPalette} from '../features/colorize'
import {randomParam} from './randomParams';

export function generatorRandomPalette() {
    return {
        data: [
            ['X'],
            ['Normalize'],
            ['CosPalette', ...CosPalette.params.map((p) => randomParam(p[0], p, 2))],
        ]
    };
}
