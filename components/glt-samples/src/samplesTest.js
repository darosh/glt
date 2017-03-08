export const samplesTest = [
    {
        title: 'Minimal',
        data: [
            ['PerlinNoise']
        ]
    },
    {
        title: 'Modified',
        data: [
            ['PerlinNoise'],
            ['Abs'],
            ['Scale', [4, 2]]
        ]
    },
    {
        title: 'Normalized',
        data: [
            ['PerlinNoise'],
            ['Normalize'],
            ['Scale', [4, 4]]
        ]
    },
    {
        title: 'Green',
        data: [
            ['PerlinNoise'],
            ['Normalize'],
            ['Scale', [12, 12]],
            ['Tint', [0, 1, 0]]
        ]
    },
    {
        title: 'Blend',
        data: [
            ['PerlinNoise'],
            ['Normalize'],
            ['Scale', [4, 4]],
            ['Tint', [1, 0, 0]],
            ['BlendAdd', 'PerlinNoise'],
            ['Normalize'],
            ['Scale', [12, 12]],
            ['Tint', [0, 1, 0]]
        ]
    },
    {
        title: '1.0 blend',
        data: [
            ['PerlinNoise'],
            ['Normalize'],
            ['Scale', [4, 4]],
            ['Tint', [1, 0, 0]],
            ['BlendAdd', 1, 'PerlinNoise'],
            ['Normalize'],
            ['Scale', [12, 12]],
            ['Tint', [0, 1, 0]]
        ]
    },
    {
        title: '0.75 blend',
        data: [
            ['PerlinNoise'],
            ['Normalize'],
            ['Scale', [4, 4]],
            ['Tint', [1, 0, 0]],
            ['BlendAdd', 0.75, 'PerlinNoise'],
            ['Normalize'],
            ['Scale', [12, 12]],
            ['Tint', [0, 1, 0]]
        ]
    },
    {
        title: '0.5 blend',
        data: [
            ['PerlinNoise'],
            ['Normalize'],
            ['Scale', [4, 4]],
            ['Tint', [1, 0, 0]],
            ['BlendAdd', 0.5, 'PerlinNoise'],
            ['Normalize'],
            ['Scale', [12, 12]],
            ['Tint', [0, 1, 0]]
        ]
    },
    {
        title: '0.25 blend',
        data: [
            ['PerlinNoise'],
            ['Normalize'],
            ['Scale', [4, 4]],
            ['Tint', [1, 0, 0]],
            ['BlendAdd', 0.25, 'PerlinNoise'],
            ['Normalize'],
            ['Scale', [12, 12]],
            ['Tint', [0, 1, 0]]
        ]
    },
    {
        title: 'Red',
        data: [
            ['PerlinNoise'],
            ['Normalize'],
            ['Scale', [4, 4]],
            ['Tint', [1, 0, 0]]
        ]
    },
    {
        title: 'X',
        data: [
            ['X']
        ]
    },
    {
        title: 'X normalized',
        data: [
            ['X'],
            ['Normalize']
        ]
    },
    {
        title: 'Palette',
        data: [
            ['X'],
            ['Normalize'],
            ['CosPalette',
                [0.8, 0.4, 0.0],
                [0.5, 0.9, 0.0],
                [0.9, 0.8, 0.7],
                [0.0, 0.1, 0.3]
            ]
        ]
    },
    {
        title: 'Noise',
        data: [
            ['PerlinNoise'],
            ['Abs'],
            ['Scale', [4, 4]]
        ]
    },
    {
        title: 'Noise + palette',
        data: [
            ['PerlinNoise'],
            ['Abs'],
            ['CosPalette',
                [0.8, 0.4, 0.0],
                [0.5, 0.9, 0.0],
                [0.9, 0.8, 0.7],
                [0.0, 0.1, 0.3]
            ],
            ['Scale', [4, 4]]
        ]
    },
    {
        title: 'Checker',
        data: [
            ['Checker']
        ]
    },
    {
        title: 'Rotate',
        data: [
            ['Checker'],
            ['Rotate', 45]
        ]
    },
    {
        title: 'Translate',
        data: [
            ['Checker'],
            ['Translate', [0.25, 0.25]]
        ]
    },
    {
        title: 'Translate + rotate',
        data: [
            ['Checker'],
            ['Translate', [0.25, 0.25]],
            ['Rotate', 45]
        ]
    },
    {
        title: 'Rotate + translate',
        data: [
            ['Checker'],
            ['Rotate', 45],
            ['Translate', [0.25, 0.25]]
        ]
    },
    {
        title: 'SinX',
        data: [
            ['SinX'],
            ['Scale', [16, 16]]
        ]
    },
    {
        title: 'Distort',
        data: [
            ['SinX'],
            ['Distort', 8, {
                data: [
                    ['SinY'],
                    ['Scale', [16, 16]]
                ]
            }],
            ['Scale', [16, 16]]
        ]
    },
    {
        title: 'SinXY',
        data: [
            ['SinXY'],
            ['Scale', [10, 10]]
        ]
    },
    {
        title: 'SinXY + sin',
        data: [
            ['SinXY'],
            ['Denormalize'],
            ['Multiply', 24],
            ['Sin'],
            ['Normalize'],
            ['Scale', [10, 10]]
        ]
    },
    {
        title: 'SinXY + abs',
        data: [
            ['SinXY'],
            ['Denormalize'],
            ['Abs'],
            ['Denormalize'],
            ['Scale', [10, 10]]
        ]
    },
    {
        title: 'Abs + abs',
        data: [
            ['SinXY'],
            ['Denormalize'],
            ['Abs'],
            ['Denormalize'],
            ['Abs'],
            ['Scale', [10, 10]]
        ]
    },
    {
        title: 'WorleyF1',
        data: [
            ['WorleyF1'],
            ['Scale', [8, 8]]
        ]
    },
    {
        title: 'Invert + bias',
        data: [
            ['WorleyF1'],
            ['Invert'],
            ['Bias'],
            ['Scale', [8, 8]]
        ]
    },
    {
        title: 'Invert + posterize',
        data: [
            ['WorleyF1'],
            ['Invert'],
            ['Posterize'],
            ['Scale', [2, 2]]
        ]
    },
    {
        title: 'Distort by worley',
        data: [
            ['WorleyF1'],
            ['Distort', 8, {
                data: [
                    ['WorleyF1'],
                    ['Scale', [2, 2]]
                ]
            }],
            ['Invert'],
            ['Bias', .6],
            ['Scale', [4, 4]]
        ]
    },
    {
        title: 'Distort',
        data: [
            ['SinX'],
            ['Distort', 8, {
                data: [
                    ['SinY'],
                    ['Scale', [24, 24]],
                    ['Posterize', 2, .9],
                ]
            }],
            ['Scale', [16, 16]]
        ]
    },
    {
        title: 'SinX + twirl',
        data: [
            ['SinX'],
            ['Twirl']
        ]
    },
    {
        title: 'Worley + twirl',
        data: [
            ['WorleyF1'],
            ['Invert'],
            ['Twirl', 8, 24]
        ]
    },
    {
        title: 'Colorized',
        data: [
            ['SinXY'],
            ['CosPalette'],
            ['Scale', [16, 16]]
        ]
    },
    {
        title: 'Desaturated',
        data: [
            ['SinXY'],
            ['CosPalette'],
            ['Grayscale'],
            ['Scale', [16, 16]]
        ]
    },
    {
        title: 'Pixelate',
        data: [
            ['SinXY'],
            ['CosPalette'],
            ['Scale', [16, 16]],
            ['Pixelate', 32]
        ]
    },
    {
        title: 'Pixelate more',
        data: [
            ['SinXY'],
            ['CosPalette'],
            ['Scale', [16, 16]],
            ['Pixelate', 16]
        ]
    },
    {
        title: 'RGB',
        data: [
            ['RGB', {data: [['SimplexNoise'], ['Normalize']]}, {data: [['SimplexNoise'], ['Normalize'], ['Translate', [.2, .2]]]}, {data: [['SimplexNoise'], ['Normalize'], ['Translate', [-.2, .2]]]}],
            ['Gain', 0.4],
            ['Scale', [2, 2]]
        ]
    },
    {
        title: 'RGB',
        data: [
            ['RGB', {data: [['WorleyF1'], ['Invert']]}, {data: [['WorleyF1'], ['Invert'], ['Translate', [.14, .2]]]}, {data: [['WorleyF1'], ['Invert'], ['Translate', [-.14, .2]]]}],
            ['Gain', 0.5],
            ['Scale', [2, 2]]
        ]
    },
    {
        title: 'RGB',
        data: [
            ['RGB', {data: [['WorleyF1'], ['Invert']]}, {data: [['WorleyF1'], ['Invert'], ['Translate', [.28, .4]]]}, {data: [['WorleyF1'], ['Invert'], ['Translate', [-.28, .4]]]}],
            ['Gain', 0.1],
            ['Scale', [2, 2]]
        ]
    },
    {
        title: 'HSV',
        data: [
            [
                'HSV',
                {data: [['SimplexNoise'], ['Normalize'], ['Scale', [0.1, 0.1]]]},
                {data: [['WorleyF1'], ['Invert'], ['Add', -.32], ['Gain', .02]]},
                {data: [['WorleyF1'], ['Invert'], ['Add', -.24], ['Gain', .02]]}
            ],
            ['Scale', [2.5, 2.5]]
        ]
    },
    {
        title: 'Tint',
        data: [
            ['Length'],
            ['Tint', [1, 0, 0]]
        ]
    }
];
