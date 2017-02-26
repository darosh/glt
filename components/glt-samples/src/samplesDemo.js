export const samplesDemo = [
    {
        title: 'Marble',
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
                                    8,
                                    2.2,
                                    {
                                        name: 'MultiFractal',
                                        params: [{
                                            name: 'Scale',
                                            params: ['pos', [-2.4, 1.7]]
                                        }, 1.6, 2, 3, 5.28, 0.8]
                                    },
                                    {
                                        name: 'MultiFractal',
                                        params: [{
                                            name: 'Translate',
                                            params: [{
                                                name: 'Scale',
                                                params: ['pos', [-2.4, 1.7]]
                                            }, [10, -.4]]
                                        }, 1.8, 2, 2.7, 60.8]
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
        data: {
            name: 'CosPalette',
            params: [
                {
                    name: 'FBm',
                    params: [
                        'pos',
                        0.48600604642369305,
                        5.378574041961265,
                        3.1269661957819395,
                        6.518627238239195
                    ]
                },
                [
                    0.9708596626586921,
                    0.03334491694885022,
                    0.5885716062711506
                ],
                [
                    0.7073760294866831,
                    0.8557790255512261,
                    0.2868133909906514
                ],
                [
                    0.4081457319422255,
                    0.9060967987543298,
                    0.6505730905759937
                ],
                [
                    0.15582518680320834,
                    0.8478600043606876,
                    0.5627905253788141
                ]
            ]
        }
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
                                                        36.21095008053565
                                                    ]
                                                },
                                                [
                                                    -2.0948265109922772,
                                                    -37.81201327085154
                                                ]
                                            ]
                                        },
                                        0.523579765845013,
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
                                                    -126.41516747630999,
                                                    37.045122693223504
                                                ]
                                            ]
                                        }
                                    ]
                                },
                                0.7259483539538334
                            ]
                        },
                        [
                            0.7772899488998284,
                            0.3313794463427009,
                            0.05962747238473631
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
                                                            125.95145471767661,
                                                            49.88036409361371
                                                        ],
                                                        0,
                                                        0
                                                    ]
                                                },
                                                24.620838320447042
                                            ]
                                        },
                                        3.5868140453316357,
                                        0.708152967244926,
                                        1.2457652380054594,
                                        4.965205966511647,
                                        -1.9723239220651898,
                                        2.25234222895115
                                    ]
                                },
                                [
                                    0.7909236130408301,
                                    0.9263595649864891,
                                    0.7673078018569728
                                ]
                            ]
                        },
                        0.9012769984546865
                    ]
                },
                0.9038849182677489
            ]
        }
    },
    {
        title: 'Waves',
        data: {
            name: 'CosPalette',
            params: [{
                name: 'Normalize',
                params: [{
                    name: 'SimplexNoise',
                    params: [{
                        name: 'Scale',
                        params: [{
                            name: 'Distort',
                            params: [{
                                name: 'Scale',
                                params: ['pos', [0.5, 0.8]]
                            }, 0.04, {
                                name: 'SimplexNoise',
                                params: ['pos']
                            }]
                        }, [1, 8]]
                    }]
                }]
            },
                [0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [2.0, 1.0, 0.0], [0.5, 0.20, 0.25]
            ]
        }
    },
    {
        title: 'Electricity',
        data: {
            name: 'Tint',
            params: [
                {
                    name: 'RidgedMultiFractal',
                    params: [
                        {
                            name: 'Rotate',
                            params: [
                                'pos',
                                0
                            ]
                        },
                        0.7363809680298814,
                        2.3727714892967127,
                        1.765322395475151,
                        5.844998781061181,
                        1.2007420437991387,
                        1.7389540087979503
                    ]
                },
                [
                    0.08236448888339454,
                    0.6477355328943357,
                    0.9209416191295376
                ]
            ]
        }
    },
    {
        title: 'Ink',
        data: {
            name: 'RidgedMultiFractal',
            params: [
                {
                    name: 'Rotate',
                    params: [
                        {
                            name: 'Scale',
                            params: [
                                'pos',
                                [1.1, 1.1]
                            ]
                        },
                        235
                    ]
                },
                {
                    name: 'Abs',
                    params: [{
                        name: 'Y',
                        params: [
                            'pos'
                        ]
                    }]
                },
                1.846811252091765,
                0.6,
                5.984108037597394,
                1.0590850598962325,
                2.5599191115014035
            ]
        }
    },
    {
        title: 'Pattern',
        'data': {
            'name': 'Average',
            'params': [
                {
                    'name': 'CosPalette',
                    'params': [
                        {
                            'name': 'PeriodicNoise',
                            'params': [
                                {
                                    'name': 'Tile',
                                    'params': [
                                        {
                                            'name': 'Rotate',
                                            'params': [
                                                'pos',
                                                154
                                            ]
                                        },
                                        [
                                            4,
                                            6.5
                                        ],
                                        1,
                                        1
                                    ]
                                },
                                [
                                    124.87273484200355,
                                    95.90879848826582
                                ]
                            ]
                        },
                        [
                            0.36,
                            0.19,
                            0.41
                        ],
                        [
                            0.93,
                            0.92,
                            0.5
                        ],
                        [
                            0.46,
                            0.53,
                            0.18
                        ],
                        [
                            0.07,
                            0.12,
                            0.45
                        ]
                    ]
                },
                {
                    'name': 'Posterize',
                    'params': [
                        {
                            'name': 'ColorBurn',
                            'params': [
                                {
                                    'name': 'AddValue',
                                    'params': [
                                        [
                                            0.38,
                                            0.54,
                                            0.54
                                        ],
                                        -1
                                    ]
                                },
                                {
                                    'name': 'Max',
                                    'params': [
                                        [
                                            0.09,
                                            0.12,
                                            0.51
                                        ],
                                        0.41
                                    ]
                                },
                                0.13
                            ]
                        },
                        4.41,
                        1.56
                    ]
                },
                0.28
            ]
        }
    }
];
