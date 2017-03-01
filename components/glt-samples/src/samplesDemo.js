export const samplesDemo = [
    {
        title: 'Marble',
        data: [
            ['SinXY'],
            ['Gain', .19],
            ['Warp', 8, 2.2, {
                data: [
                    ['MultiFractal', 1.6, 2, 3, 5.28, 0.8],
                    ['Scale', [-2.4, 1.7]]
                ]
            }, {
                data: [
                    ['MultiFractal', 1.8, 2, 2.7, 60.8],
                    ['Translate', [10, -.4]],
                    ['Scale', [-2.4, 1.7]]
                ]
            }],
            ['Translate', [1, 1]],
            ['Scale', [66, .57]],
            ['CosPalette', [0.5, 0.5, 0.5], [0.38, 0.52, 0.59], [0.36, 0.33, 0.27], [0.56, 0.57, 0.69]]
        ]
    },
    {
        title: 'Tiles #1',
        data: [
            ['SinXY'],
            ['Gain'],
            ['Warp', 1, 1, {
                data: [
                    ['MultiFractal'],
                    ['Scale', [6, 4]]
                ]
            }, {
                data: [
                    ['MultiFractal'],
                    ['Scale', [6, 4]],
                    ['Translate', [24, 24]],
                ]
            }],
            ['Translate', [1, 1]],
            ['Scale', [16, 16]],
            ['CosPalette', [0.5, 0.5, 0.5], [0.7, 0.8, 0.2], [0.23, 0.17, 0.28], [0.71, 0.69, 0.33]]
        ]
    },
    {
        title: 'Tiles #2',
        data: [
            ['SinXY'],
            ['Gain'],
            ['Warp', 1, 1, {
                data: [
                    ['MultiFractal'],
                    ['Scale', [6, 4]]
                ]
            }, {
                data: [
                    ['MultiFractal'],
                    ['Scale', [6, 4]],
                    ['Translate', [24, 24]],
                ]
            }],
            ['Translate', [1.5, 1.5]],
            ['Scale', [24, 24]],
        ]
    },
    {
        title: 'Abstract #1',
        data: [
            ['SinXY'],
            ['Warp', 2.2, 1, {
                data: [
                    ['MultiFractal'],
                    ['Scale', [10, -4.2]]
                ]
            }, {
                data: [
                    ['MultiFractal'],
                    ['Translate', [24, 24]],
                    ['Scale', [-2.4, 1.7]]
                ]
            }],
            ['Translate', [1, 1]],
            ['Scale', [66, .57]],
            ['Gain', .19],
            ['CosPalette', [0.5, 0.5, 0.5], [0.38, 0.52, 0.59], [0.36, 0.33, 0.27], [0.56, 0.57, 0.69]]
        ]
    },
    {
        title: 'Abstract #2',
        data: [
            ['FBm', 0.48, 5.37, 3.12, 6.51],
            ['CosPalette', [0.97, 0.03, 0.58], [0.70, 0.85, 0.28], [0.40, 0.90, 0.65], [0.15, 0.84, 0.56]]
        ]
    },
    {
        title: 'Abstract #3',
        data: [
            ['BlendSubtract', {
                data: [
                    ['WorleyF1', 0.52, 1],
                    ['Scale', [-2.09, -37.81]],
                    ['Rotate', 36.21]
                ]
            }, {
                data: [
                    ['SinY'],
                    ['Scale', [-126.41, 37.04]]
                ]
            }, 0.72],
            ['Tint', [0.77, 0.33, 0.05]],
            ['BlendOverlay', .9, 'RidgedMultiFractal', 3.58, 0.70, 1.24, 4.96, -1.97, 2.25],
            ['Tint', [0.79, 0.92, 0.76]],
            ['Bias', 0.90],
            ['Rotate', 24.62],
            ['Tile', [125.95, 49.88], 0, 0]
        ]
    },
    {
        title: 'Waves',
        data: [
            ['SimplexNoise'],
            ['Scale', [1, 8]],
            ['Normalize'],
            ['Distort', 0.04, {
                data: [
                    ['SimplexNoise']
                ]
            }],
            ['Scale', [0.5, 0.8]],
            ['CosPalette', [0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [2.0, 1.0, 0.0], [0.5, 0.20, 0.25]]
        ]
    },
    {
        title: 'Electricity',
        data: [
            ['RidgedMultiFractal', 0.73, 2.37, 1.76, 5.84, 1.20, 1.73],
            ['Tint', [0.08, 0.64, 0.92]]
        ]
    },
    {
        title: 'Ink',
        data: [
            ['RidgedMultiFractal',
                {
                    data: [
                        ['Y'],
                        ['Abs']
                    ]
                },
                1.84,
                0.6,
                5.98,
                1.05,
                2.55
            ],
            ['Rotate', 235],
            ['Scale', [1.1, 1.1]]
        ]
    },
    {
        title: 'Worley + twirl',
        data: [
            ['WorleyF1', 1, 0.59],
            ['Invert'],
            ['Twirl', 3, 2.29, [0, 0]],
            [
                'CosPalette',
                [0.13, 0.69, 0.74],
                [0.08, 0.49, 0.71],
                [0.13, 0.73, 0.62],
                [0.76, 0.12, 0.21]
            ]
        ]
    },
    {
        title: 'Palette #1',
        data: [
            ['X'],
            ['Normalize'],
            [
                'CosPalette',
                [0.84, 0.8, 0.66],
                [0.13, 0.24, 0.25],
                [0.44, 0.5, 0.59],
                [0.8, 0.13, 0.23]
            ]
        ]
    },
    {
        title: 'Palette #2',
        'data': [
            ['X'],
            ['Normalize'],
            [
                'CosPalette',
                [0.7, 0.5, 0.25],
                [0.72, 0.4, 0.24],
                [0.28, 0.76, 0.44],
                [0.68, 0.45, 0.92]
            ]
        ]
    },
    {
        title: 'Palette #3',
        data: [
            ['X'],
            ['Normalize'],
            [
                'CosPalette',
                [0.44, 0.21, 0.74],
                [0.17, 0.34, 0.71],
                [0.53, 0.72, 0.22],
                [0.7, 0.58, 0.71]
            ]
        ]
    },
    {
        title: 'Palette #4',
        data: [
            ['X'],
            ['Normalize'],
            [
                'CosPalette',
                [0.73, 0.62, 0.13],
                [0.42, 0.2, 0.34],
                [0.59, 0.85, 0.56],
                [0.58, 0.63, 0.73]
            ]
        ]
    },
    {
        title: 'Palette #5',
        data: [
            ['X'],
            ['Normalize'],
            [
                'CosPalette',
                [0.27, 0.16, 0.08],
                [0.7, 0.73, 0.64],
                [0.37, 0.83, 0.89],
                [0.91, 0.73, 0.74]
            ]
        ]
    }
];
