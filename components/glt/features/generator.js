import {POS, VALUE} from './names';

export const X = {};
export const Y = {};
export const Length = {};
export const SinX = {
    scale: 16
};
export const SinY = {
    scale: 16
};
export const SinXY = {
    scale: 16
};

export const Xor = {
    scale: 256
};

// export const Color = {
//     glsl: 'vec3',
//     color: true,
//     position: false,
//     params: ['vec3', 'color', [1, 1, 1]]
// };

export const Value = {
    glsl: 'float',
    position: false,
    params: [['float', 'value', 0.5, [-1, 1]]]
};

export const SimplexNoise = {
    glsl: 'snoise',
    normalized: false
};

export const Checker = {
    glsl: 'checker',
    params: [['float', 'repeats', 2, [1, 128]]]
};

export const PerlinNoise = {
    glsl: 'cnoise',
    normalized: false,
    scale: 4
};

export const PeriodicNoise = {
    glsl: 'pnoise',
    params: [['vec2', 'size', [16, 16], [1, 128]]],
    normalized: false,
    scale: 4
};

export const WorleyF1 = {
    params: [['float', 'jitter', 1, [0, 1]], ['float', 'manhattanDistance', 0, [0, 1]]],
    scale: 2,
    examples: [
        [0.5, 0],
        [0, 0],
        [1, 1]
    ]
};

export const WorleyF2 = {
    params: [['float', 'jitter', 1, [0, 1]], ['float', 'manhattanDistance', 0, [0, 1]]],
    scale: 2,
    examples: [
        [0.5, 0],
        [0, 0],
        [1, 1]
    ]
};

export const WorleyF1F2 = {
    params: [['float', 'jitter', 1, [0, 1]], ['float', 'manhattanDistance', 0, [0, 1]]],
    scale: 2,
    examples: [
        [0.5, 0],
        [0, 0],
        [1, 1],
        [0, 1]
    ]
};

export const WorleyF2F1 = {
    params: [['float', 'jitter', 1, [0, 1]], ['float', 'manhattanDistance', 0, [0, 1]]],
    scale: 2,
    examples: [
        [0.5, 0],
        [0, 0],
        [1, 1]
    ]
};

export const WorleyCrackle = {
    params: [['float', 'jitter', 1, [0, 1]], ['float', 'manhattanDistance', 0, [0, 1]], ['float', 'multiply', 8, [1, 32]], ['float', 'divide', 2, [1, 32]], ['float', 'offset', 0.5, [0, 8]]],
    scale: 2,
    examples: [
        [0.5, 0, 8, 2, 0.5],
        [0, 0, 8, 2, 0.5],
        [1, 1, 8, 2, 0.5],
        [1, 0, 32, 2, 0.5],
        [1, 0, 32, 1, 2],
        [1, 0, 32, 1, 4],
        [1, 1, 32, 1, 4],
        [0.25, 1, 32, 1, 4]
    ]
};

export const RidgedMultiFractal = {
    glsl: 'ridgedMultiFractal',
    params: [['float', 'H', 0.25, [0, 8]], ['float', 'lacunarity', 2, [0, 8]], ['float', 'frequency', 2, [0, 8]], ['float', 'octaves', 6, [1, 12]], ['float', 'offset', .9, [-2, 2]], ['float', 'gain', 1.5, [-8, 8]]],
    scale: 1,
    examples: [
        [0.25, 4, 2, 2, 1, 6],
        [0.25, 3, 1, 6, 1, 1]
    ]
};

export const HybridMultiFractal = {
    glsl: 'hybridMultiFractal',
    params: [['float', 'H', 0.25, [0, 8]], ['float', 'lacunarity', 3, [0, 8]], ['float', 'frequency', 2, [0, 8]], ['float', 'octaves', 6, [1, 12]], ['float', 'offset', .05, [-2, 2]]],
    normalized: false,
    scale: 1,
    examples: [
        [0.1, 1.5, 3, 6, 0]
    ]
};

export const HeteroTerrain = {
    glsl: 'heteroTerrainA',
    params: [['float', 'H', 0.5, [0.01, 3]], ['float', 'lacunarity', 2, [1, 3]], ['float', 'frequency', 2, [1, 8]], ['float', 'octaves', 6, [1, 8]], ['float', 'offset', .05, [-1, 1]]],
    normalized: false,
    scale: 1,
    examples: [
        [2, 1.5, 3, 2, 0]
    ]
};

export const MultiFractal = {
    glsl: 'multifractalA',
    params: [
        ['float', 'H', 0.5, [0.01, 2]],
        ['float', 'lacunarity', 2, [1, 2]],
        ['float', 'frequency', 2, [1, 8]],
        ['float', 'octaves', 6, [1, 8]],
        ['float', 'offset', .8, [-1, 1]],
        ['float', 'noise', null, null, 'snoise', [['vec2', POS]]]
    ],
    scale: 1,
    examples: [
        [1.5, 1.5, 4, 6, 0.85]
    ]
};

export const FBm = {
    glsl: 'fBmA',
    params: [['float', 'H', 0.5, [0, 8]], ['float', 'lacunarity', 2, [0, 8]], ['float', 'frequency', 2, [0, 8]], ['float', 'octaves', 6, [1, 12]]],
    normalized: false,
    scale: 1,
    examples: [
        [0.85, 2.5, 4, 6]
    ]
};

export let RGB = {
    glsl: 'vec3',
    color: true,
    position: false,
    params: [['float', VALUE, 1, [0, 1]], ['float', VALUE, 1, [0, 1]], ['float', VALUE, 1, [0, 1]]]
};

export let HSV = {
    glsl: 'HSV',
    color: true,
    position: false,
    params: [['float', VALUE, 1, [0, 1]], ['float', VALUE, 1, [0, 1]], ['float', VALUE, 1, [0, 1]]],
};
