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
        data: {
            name: 'CosPalette',
            params: [
                {
                    name: 'Gain',
                    params: [{
                        name: 'SinXY',
                        params: [
                            {
                                name: 'Warp',
                                params: [
                                    {
                                        name: 'Translate',
                                        params: [{
                                            name: 'Scale',
                                            params: ['pos', [16, 16]]
                                        }, [1, 1]]
                                    },
                                    1,
                                    1,
                                    {
                                        name: 'MultiFractal',
                                        params: [{
                                            name: 'Scale',
                                            params: ['pos', [6, 4]]
                                        }]
                                    },
                                    {
                                        name: 'MultiFractal',
                                        params: [{
                                            name: 'Translate',
                                            params: [{
                                                name: 'Scale',
                                                params: ['pos', [6, 4]]
                                            }, [24, 24]]
                                        }]
                                    }
                                ]
                            }
                        ]
                    }]
                },
                [
                    0.5,
                    0.5,
                    0.5
                ],
                [
                    0.7,
                    0.8,
                    0.2
                ],
                [
                    0.23,
                    0.17,
                    0.28
                ],
                [
                    0.71,
                    0.69,
                    0.33
                ]
            ]
        }
    },
    {
        title: 'Tiles #2',
        data: {
            name: 'Gain',
            params: [{
                name: 'SinXY',
                params: [
                    {
                        name: 'Warp',
                        params: [
                            {
                                name: 'Scale',
                                params: ['pos', [24, 24]]
                            },
                            1,
                            1,
                            {
                                name: 'MultiFractal',
                                params: [{
                                    name: 'Scale',
                                    params: ['pos', [6, 4]]
                                }]
                            },
                            {
                                name: 'MultiFractal',
                                params: [{
                                    name: 'Translate',
                                    params: [{
                                        name: 'Scale',
                                        params: ['pos', [6, 4]]
                                    }, [24, 24]]
                                }]
                            }
                        ]
                    }
                ]
            }]
        }
    },
    {
        title: 'Abstract #1',
        data: {
            name: 'CosPalette',
            params: [
                {
                    name: 'Gain',
                    params: [{
                        name: 'SinXY',
                        params: [
                            {
                                name: 'Warp',
                                params: [
                                    {
                                        name: 'Translate',
                                        params: [{
                                            name: 'Scale',
                                            params: ['pos', [66, .57]]
                                        }, [1, 1]]
                                    },
                                    2.2,
                                    1,
                                    {
                                        name: 'MultiFractal',
                                        params: [{
                                            name: 'Scale',
                                            params: ['pos', [10, -4.2]]
                                        }]
                                    },
                                    {
                                        name: 'MultiFractal',
                                        params: [{
                                            name: 'Translate',
                                            params: [{
                                                name: 'Scale',
                                                params: ['pos', [-2.4, 1.7]]
                                            }, [24, 24]]
                                        }]
                                    }
                                ]
                            }
                        ]
                    }, .19]
                },
                [
                    0.5,
                    0.5,
                    0.5
                ],
                [
                    0.38,
                    0.52,
                    0.59
                ],
                [
                    0.36,
                    0.33,
                    0.27
                ],
                [
                    0.56,
                    0.57,
                    0.69
                ]
            ]
        }
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
        data: {
            name: 'Overlay',
            params: [
                {
                    name: 'Tint',
                    params: [
                        {
                            name: 'Subtract',
                            params: [
                                {
                                    name: 'WorleyF1',
                                    params: [
                                        {
                                            name: 'Scale',
                                            params: [
                                                {
                                                    name: 'Rotate',
                                                    params: [
                                                        'pos',
                                                        36.21
                                                    ]
                                                },
                                                [
                                                    -2.09,
                                                    -37.81
                                                ]
                                            ]
                                        },
                                        0.52,
                                        1
                                    ]
                                },
                                {
                                    name: 'SinY',
                                    params: [
                                        {
                                            name: 'Scale',
                                            params: [
                                                'pos',
                                                [
                                                    -126.41,
                                                    37.04
                                                ]
                                            ]
                                        }
                                    ]
                                },
                                0.72
                            ]
                        },
                        [
                            0.77,
                            0.33,
                            0.05
                        ]
                    ]
                },
                {
                    name: 'Bias',
                    params: [
                        {
                            name: 'Tint',
                            params: [
                                {
                                    name: 'RidgedMultiFractal',
                                    params: [
                                        {
                                            name: 'Rotate',
                                            params: [
                                                {
                                                    name: 'Tile',
                                                    params: [
                                                        'pos',
                                                        [
                                                            125.95,
                                                            49.88
                                                        ],
                                                        0,
                                                        0
                                                    ]
                                                },
                                                24.62
                                            ]
                                        },
                                        3.58,
                                        0.70,
                                        1.24,
                                        4.96,
                                        -1.97,
                                        2.25
                                    ]
                                },
                                [
                                    0.79,
                                    0.92,
                                    0.76
                                ]
                            ]
                        },
                        0.90
                    ]
                },
                0.90
            ]
        }
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
    }
];
