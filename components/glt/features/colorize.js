// http://iquilezles.org/www/articles/palettes/palettes.htm
export const CosPalette = {
    glsl: 'cosPalette',
    params: [
        ['vec3', 'a', [0.5, 0.5, 0.5], [0, 1]],
        ['vec3', 'b', [0.5, 0.5, 0.5], [0, 1]],
        ['vec3', 'c', [1.0, 1.0, 1.0], [0, 1]],
        ['vec3', 'd', [0.0, 0.33, 0.67], [0, 1]]
    ],
    examples: [
        [[0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [1.0, 1.0, 1.0], [0.0, 0.33, 0.67]],
        [[0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [1.0, 1.0, 1.0], [0.0, 0.10, 0.20]],
        [[0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [1.0, 1.0, 1.0], [0.3, 0.20, 0.20]],
        [[0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [1.0, 1.0, 0.5], [0.8, 0.90, 0.30]],
        [[0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [1.0, 0.7, 0.4], [0.0, 0.15, 0.20]],
        [[0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [2.0, 1.0, 0.0], [0.5, 0.20, 0.25]],
        [[0.8, 0.5, 0.4], [0.2, 0.4, 0.2], [2.0, 1.0, 1.0], [0.0, 0.25, 0.25]]
    ]
};

export const Tint = {
    color: true,
    params: [['vec3', 'color', [0.5, 0.5, 0.5], [0, 1]]]
};