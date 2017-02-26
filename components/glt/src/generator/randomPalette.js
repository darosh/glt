import {CosPalette} from '../features/colorize'
import {randomParam} from './randomParams';

export function randomPalette() {
    return {
        data: {
            name: CosPalette.name,
            params: [{
                name: 'Normalize',
                params: [{
                    name: 'X',
                    params: [{
                        name: 'Scale',
                        params: ['pos', [1, 1]]
                    }]
                }]
            }, ...(CosPalette.params.map((p) => randomParam(p[0], p)))]
        }
    };
}
