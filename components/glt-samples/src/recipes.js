export const sampleRecipes = [
    {
        title: 'X',
        data: [
            {generator: 'X'}
        ]
    },
    {
        title: 'Y',
        data: [
            {generator: 'Y'},
            {transform: 'Translate', params: [[0, 0.5]]},
            {transform: 'Scale', params: [[0.5, 0.5]]}
        ]
    },
    {
        title: 'Length',
        data: [
            {generator: 'Length'}
        ]
    },
    {
        title: 'SinX',
        data: [
            {blend: 'Normal', generator: 'SinX'},
            {transform: 'Scale', params: [[16, 16]]}
        ]
    },
    {
        title: 'Min',
        data: [
            {generator: 'SinX'},
            {modify: 'Min', params: [0.5]},
            {transform: 'Scale', params: [[16, 16]]}
        ]
    },
    {
        title: 'Max',
        data: [
            {generator: 'SinX'},
            {modify: 'Max', params: [0.5]},
            {transform: 'Scale', params: [[16, 16]]}
        ]
    },
    {
        title: 'SinX',
        data: [
            {blend: 'Normal', generator: 'SinX'},
            {modify: 'Denormalize'},
            {modify: 'Abs'},
            {transform: 'Scale', params: [[16, 16]]}
        ]
    },
    {
        title: 'SinX, SmoothStep',
        data: [
            {blend: 'Normal', generator: 'SinX'},
            {modify: 'SmoothStep', params: [0.5, 1]},
            {transform: 'Scale', params: [[16, 16]]}
        ]
    },
    {
        title: 'SinX, SmoothStep',
        data: [
            {blend: 'Normal', generator: 'SinX'},
            {modify: 'SmoothStep', params: [0.5, 0.5]},
            {transform: 'Scale', params: [[16, 16]]}
        ]
    },
    {
        title: 'SinY',
        data: [
            {blend: 'Normal', generator: 'SinY'},
            {transform: 'Scale', params: [[1, 1]]}
        ]
    },
    {
        title: 'SInXY',
        data: [
            {blend: 'Normal', generator: 'SinXY'},
            {transform: 'Scale', params: [[10, 10]]}
        ]
    },
    {
        title: 'SInXY',
        data: [
            {blend: 'Normal', generator: 'SinXY'},
            {modify: 'Denormalize'},
            {modify: 'Abs'},
            {transform: 'Scale', params: [[10, 10]]}
        ]
    },
    {
        title: 'SinXY, Sin',
        data: [
            {blend: 'Normal', generator: 'SinXY'},
            {modify: 'Denormalize'},
            {modify: 'MultiplyValue', params: [24]},
            {modify: 'Sin'},
            {modify: 'Normalize'},
            {transform: 'Scale', params: [[10, 10]]}
        ]
    },
    {
        title: 'SInXY',
        data: [
            {blend: 'Normal', generator: 'SinXY'},
            {modify: 'Denormalize'},
            {modify: 'Abs'},
            {modify: 'Denormalize'},
            {transform: 'Scale', params: [[10, 10]]}
        ]
    },
    {
        title: 'SInXY',
        data: [
            {blend: 'Normal', generator: 'SinXY'},
            {modify: 'Denormalize'},
            {modify: 'Abs'},
            {modify: 'Denormalize'},
            {modify: 'Abs'},
            {transform: 'Scale', params: [[10, 10]]}
        ]
    },
    {
        title: 'Checker',
        data: [
            {blend: 'Normal', generator: 'Checker'},
            {transform: 'Scale', params: [[4, 4]]}
        ]
    },
    {
        title: 'SimplexNoise',
        data: [
            {blend: 'Normal', generator: 'SimplexNoise'},
            {transform: 'Scale', params: [[4, 4]]}
        ]
    },
    {
        title: 'SimplexNoise',
        data: [
            {blend: 'Normal', generator: 'SimplexNoise'},
            {modify: 'Normalize'},
            {transform: 'Scale', params: [[4, 4]]}
        ]
    },
    {
        title: 'SimplexNoise',
        data: [
            {blend: 'Normal', generator: 'SimplexNoise'},
            {modify: 'Abs'},
            {transform: 'Scale', params: [[4, 4]]}
        ]
    },
    {
        title: 'PerlinNoise',
        data: [
            {blend: 'Normal', generator: 'PerlinNoise'},
            {modify: 'Normalize'},
            {transform: 'Scale', params: [[8, 8]]}
        ]
    },
    {
        title: 'PeriodicNoise',
        data: [
            {blend: 'Normal', generator: 'PeriodicNoise'},
            {modify: 'Normalize'},
            {transform: 'Scale', params: [[32, 32]]}
        ]
    },
    {
        title: 'WorleyF1',
        data: [
            {blend: 'Normal', generator: 'WorleyF1'},
            {transform: 'Scale', params: [[8, 8]]}
        ]
    },
    {
        title: 'WorleyF2',
        data: [
            {blend: 'Normal', generator: 'WorleyF2'},
            {transform: 'Scale', params: [[4, 4]]}
        ]
    },
    {
        title: 'WorleyF1',
        data: [
            {blend: 'Normal', generator: 'WorleyF1'},
            {modify: 'Invert'},
            {transform: 'Scale', params: [[2, 2]]}
        ]
    },
    {
        title: 'WorleyF1',
        data: [
            {blend: 'Normal', generator: 'WorleyF1', params: [0.5, true]},
            {modify: 'Invert'},
            {transform: 'Scale', params: [[8, 8]]}
        ]
    },
    {
        title: 'WorleyF1',
        data: [
            {blend: 'Normal', generator: 'WorleyF1', params: [0.25, true]},
            {modify: 'Invert'},
            {transform: 'Scale', params: [[8, 8]]}
        ]
    },
    {
        title: 'WorleyF1',
        data: [
            {blend: 'Normal', generator: 'WorleyF1'},
            {modify: 'Invert'},
            {modify: 'Bias'},
            {transform: 'Scale', params: [[8, 8]]}
        ]
    },
    {
        title: 'WorleyF1',
        data: [
            {blend: 'Normal', generator: 'WorleyF1'},
            {modify: 'Invert'},
            {modify: 'Gain'},
            {transform: 'Scale', params: [[8, 8]]}
        ]
    },
    {
        title: 'WorleyF1F2',
        data: [
            {blend: 'Normal', generator: 'WorleyF1F2'},
            {transform: 'Scale', params: [[8, 8]]}
        ]
    },
    {
        title: 'WorleyF2F1',
        data: [
            {blend: 'Normal', generator: 'WorleyF2F1'},
            {transform: 'Scale', params: [[8, 8]]}
        ]
    },
    {
        title: 'WorleyF2F1',
        data: [
            {blend: 'Normal', generator: 'WorleyF2F1'},
            {modify: 'Invert'},
            {transform: 'Scale', params: [[8, 8]]}
        ]
    },
    {
        title: 'SinX',
        data: [
            {blend: 'Normal', generator: 'SinX'},
            {transform: 'Scale', params: [[32, 32]]},
            {transform: 'Rotate', params: [45]}
        ]
    },
    {
        title: 'Worley1MF1',
        data: [
            {blend: 'Normal', generator: 'WorleyF1'},
            {modify: 'Invert'},
            {modify: 'Posterize'},
            {transform: 'Scale', params: [[4, 4]]}
        ]
    },
    {
        title: 'Worley1MF1',
        data: [
            {blend: 'Normal', generator: 'WorleyF1'},
            {modify: 'Invert'},
            {transform: 'Pixelate', params: [8]},
            {transform: 'Scale', params: [[4, 4]]},
            {transform: 'Rotate', params: [30]}
        ]
    },
    {
        title: 'WorleyF1',
        data: [
            {blend: 'Normal', generator: 'WorleyF1'},
            {modify: 'Invert'},
            {transform: 'Pixelate', params: [2]},
            {transform: 'Scale', params: [[4, 4]]},
            {transform: 'Rotate', params: [30]}
        ]
    },
    {
        title: 'WorleyF1',
        data: [
            {blend: 'Normal', generator: 'WorleyF1'},
            {modify: 'Invert'},
            {transform: 'Pixelate', params: [2]},
            {
                transform: 'Distort', params: [1, {
                data: [
                    {blend: 'Normal', generator: 'WorleyF1'}
                ]
            }]
            },
            {transform: 'Scale', params: [[4, 4]]},
            {transform: 'Rotate', params: [30]}
        ]
    },
    {
        title: 'WorleyF1',
        data: [
            {blend: 'Normal', generator: 'WorleyF1'},
            {modify: 'Invert'},
            {
                transform: 'Distort', params: [8, {
                data: [
                    {blend: 'Normal', generator: 'WorleyF1'},
                    {transform: 'Scale', params: [[2, 2]]}
                ]
            }]
            },
            {modify: 'Bias', params: [0.6]},
            {transform: 'Scale', params: [[4, 4]]}
        ]
    },
    {
        title: 'Distort',
        data: [
            {blend: 'Normal', generator: 'SinX'},
            {
                transform: 'Distort', params: [16, {
                data: [
                    {blend: 'Normal', generator: 'SinY'},
                    {transform: 'Scale', params: [[12, 12]]}
                ]
            }]
            },
            {transform: 'Scale', params: [[16, 16]]}
        ]
    },
    {
        title: 'Distort',
        data: [
            {blend: 'Normal', generator: 'SinX'},
            {
                transform: 'Distort', params: [1.5, {
                data: [
                    {blend: 'Normal', generator: 'SinXY'},
                    {modify: 'Denormalize'},
                    {modify: 'Abs'},
                    {modify: 'Denormalize'},
                    {transform: 'Scale', params: [[16, 16]]}
                ]
            }]
            },
            {transform: 'Scale', params: [[16, 16]]}
        ]
    },
    {
        title: 'Distort',
        data: [
            {blend: 'Normal', generator: 'SinX'},
            {
                transform: 'Distort', params: [8, {
                data: [
                    {blend: 'Normal', generator: 'SinY'},
                    {modify: 'Posterize', params: [2, 0.9]},
                    {transform: 'Scale', params: [[24, 24]]}
                ]
            }]
            },
            {transform: 'Scale', params: [[16, 16]]}
        ]
    },
    {
        title: 'Mix',
        data: [
            {blend: 'Normal', generator: 'SinX'},
            {blend: 'Screen', generator: 'SinY'},
            {transform: 'Scale', params: [[24, 25]]}
        ]
    },
    {
        title: 'Mix',
        data: [
            {blend: 'Normal', generator: 'SinX'},
            {transform: 'Twirl', params: [8, 2, [0, 0]]},
            {transform: 'Scale', params: [[1, 1]]}
        ]
    },
    {
        title: 'Mix',
        data: [
            {blend: 'Normal', generator: 'WorleyF1'},
            {modify: 'Invert'},
            {transform: 'Twirl', params: [8, 24, [0, 0]]}
        ]
    },
    {
        title: 'Mix',
        data: [
            {blend: 'Normal', generator: 'RidgedMultiFractal'}
        ]
    },
    {
        title: 'Mix',
        data: [
            {blend: 'Normal', generator: 'RidgedMultiFractal'},
            {modify: 'Invert'}
        ]
    },
    {
        title: 'Mix',
        data: [
            {blend: 'Normal', generator: 'HybridMultiFractal'},
            {modify: 'Normalize'},
            {transform: 'Scale', params: [[1, 1]]}
        ]
    },
    {
        title: 'Mix',
        data: [
            {blend: 'Normal', generator: 'FBm'},
            {modify: 'Normalize'},
            {transform: 'Scale', params: [[1, 1]]}
        ]
    },
    {
        title: 'HeteroTerrain',
        data: [
            {blend: 'Normal', generator: 'HeteroTerrain'},
            {modify: 'Normalize'},
            {transform: 'Scale', params: [[1, 1]]}
        ]
    },
    {
        title: 'MultiFractal',
        data: [
            {blend: 'Normal', generator: 'MultiFractal'},
            {transform: 'Scale', params: [[1, 1]]}
        ]
    },
    {
        title: 'WorleyCrackle',
        data: [
            {blend: 'Normal', generator: 'WorleyCrackle'},
            {transform: 'Scale', params: [[4, 4]]}
        ]
    },
    {
        title: 'Tile',
        data: [
            {generator: 'WorleyF1'},
            {modify: 'Invert'},
            {transform: 'Scale', params: [[0.75, 0.75]]},
            {transform: 'Translate', params: [[2, 2]]},
            {transform: 'Tile', params: [[2.5, 2.5], true, true]}
        ]
    },
    {
        title: 'Palette',
        data: [
            {generator: 'SinXY'},
            {transform: 'Scale', params: [[16, 16]]},
            {colorize: 'CosPalette'}
        ]
    },
    {
        title: 'WorleyF1',
        data: [
            {blend: 'Normal', generator: 'WorleyF1'},
            {modify: 'Invert'},
            {
                transform: 'Distort', params: [2, {
                data: [
                    {generator: 'WorleyF1'},
                    {transform: 'Scale', params: [[0.5, 0.5]]}
                ]
            }]
            },
            {modify: 'Bias', params: [0.4]},
            {transform: 'Scale', params: [[4, 4]]},
            {colorize: 'CosPalette', params: [[0.8, 0.5, 0.4], [0.2, 0.4, 0.2], [2.0, 1.0, 1.0], [0.0, 0.25, 0.25]]}
        ]
    },
    {
        title: 'Desaturate',
        data: [
            {generator: 'SinXY'},
            {transform: 'Scale', params: [[16, 16]]},
            {colorize: 'CosPalette'},
            {desaturate: 'Grayscale'}
        ]
    },
    {
        title: 'RGB',
        data: [
            {
                generator: 'RGB', params: [
                {
                    data: [
                        {generator: 'SimplexNoise'},
                        {modify: 'Normalize'},
                        {transform: 'Translate', params: [[4, 4]]}
                    ]
                },
                {
                    data: [
                        {generator: 'SimplexNoise'},
                        {modify: 'Normalize'},
                        {transform: 'Translate', params: [[8, 8]]}
                    ]
                },
                {
                    data: [
                        {generator: 'SimplexNoise'},
                        {modify: 'Normalize'},
                        {transform: 'Translate', params: [[16, 16]]}
                    ]
                }
            ]
            },
            {transform: 'Scale', params: [[2, 2]]}
        ]
    },
    {
        title: 'HSV',
        data: [
            {
                generator: 'HSV', params: [
                {
                    data: [
                        {generator: 'SimplexNoise'},
                        {modify: 'Normalize'},
                        {transform: 'Translate', params: [[4, 4]]}
                    ]
                },
                {
                    data: [
                        {generator: 'SimplexNoise'},
                        {modify: 'Normalize'},
                        {transform: 'Translate', params: [[8, 8]]}
                    ]
                },
                {
                    data: [
                        {generator: 'SimplexNoise'},
                        {modify: 'Normalize'},
                        {transform: 'Translate', params: [[16, 16]]}
                    ]
                }
            ]
            },
            {transform: 'Scale', params: [[2, 2]]}
        ]
    },
    {
        title: 'HSV',
        data: [
            {
                generator: 'HSV', params: [
                {
                    data: [
                        {generator: 'SimplexNoise'},
                        {modify: 'Normalize'},
                        {transform: 'Translate', params: [[4, 4]]}
                    ]
                },
                {
                    data: [
                        {generator: 'Value', params: [0.75]}
                    ]
                },
                {
                    data: [
                        {generator: 'Value', params: [1]}
                    ]
                }
            ]
            },
            {transform: 'Scale', params: [[8, 8]]}
        ]
    },
    {
        title: 'Xor',
        data: [
            {generator: 'Xor'},
            {transform: 'Scale', params: [[128, 128]]}
        ]
    },
    {
        title: 'Mandelbrot',
        data: [
            {generator: 'Mandelbrot', params: [32, 256]},
            {modify: 'Invert'},
            {transform: 'Translate', params: [[-0.5, 0]]},
            {transform: 'Scale', params: [[1.5, 1.5]]}
        ]
    },
    {
        title: 'Mandelbrot',
        data: [
            {generator: 'Mandelbrot', params: [64, 256]},
            {modify: 'Invert'},
            {modify: 'Gain', params: [0.6]},
            {modify: 'Bias', params: [0.8]},
            {transform: 'Translate', params: [[-0.2422, 0.83995]]},
            {transform: 'Scale', params: [[.003, .003]]}
        ]
    },
    {
        "data": [
            {
                "generator": "SinX"
            },
            {
                "generator": "SimplexNoise",
                "blend": "Glow",
                "opacity": 0.6303691226394725
            },
            {
                "generator": "MultiFractal",
                "blend": "Phoenix",
                "opacity": 0.827949424224901
            }
        ]
    },
    {
        "data": [
            {
                "generator": "Value"
            },
            {
                "generator": "PeriodicNoise",
                "blend": "LinearDodge",
                "opacity": 0.8569390892811101
            },
            {
                "generator": "MultiFractal",
                "blend": "Multiply",
                "opacity": 0.75,
                tint: [0.25, 0.5, 0.85]
            },
            {
                "modify": "SmoothStep"
            }
        ]
    },
    {
        "data": [
            {
                "generator": "WorleyF1"
            },
            {
                "generator": "Checker",
                "blend": "PinLight",
                "opacity": 0.5531902830455488
            },
            {
                "generator": "SimplexNoise",
                "blend": "Negation",
                "opacity": 0.11816466331954745
            }
        ]
    },
    {
        "data": [
            {
                "generator": "FBm"
            },
            {
                "generator": "SimplexNoise",
                "blend": "HardLight",
                "opacity": 0.8687067960721775
            },
            {
                "colorize": "CosPalette"
            }
        ]
    },
    {
        "data": [
            {
                "generator": "WorleyF1F2"
            },
            {
                "modify": "Cos"
            },
            {
                "generator": "SinX",
                "blend": "Add",
                "opacity": 0.9106500482063333
            },
            {
                "desaturate": "Grayscale"
            }
        ]
    },
    {
        "data": [
            {
                "generator": "Length"
            },
            {
                "generator": "Y",
                "blend": "ColorBurn",
                "opacity": 0.9063605403521688
            },
            {
                "modify": "AddValue"
            },
            {
                "modify": "Max"
            },
            {
                "desaturate": "Grayscale"
            },
            {
                "generator": "WorleyF2",
                "blend": "Difference",
                "opacity": 0.00857707744023517
            },
            {
                "modify": "MultiplyValue"
            },
            {
                "modify": "Clamp"
            }
        ]
    },
    {
        "data": [
            {
                "generator": "WorleyF2"
            },
            {
                "transform": "Twirl"
            },
            {
                "generator": "Xor",
                "blend": "Reflect",
                "opacity": 0.6568212662831756
            }
        ]
    },
    {
        "data": [
            {
                "generator": "WorleyF2",
                tint: [1, 0, 0]
            },
            {
                "transform": "Twirl"
            },
            {
                "generator": "Xor",
                "blend": "Reflect",
                "opacity": 0.6568212662831756
            }
        ]
    },
    {
        "data": [
            {
                "generator": "SinXY"
            },
            {
                "generator": "HeteroTerrain",
                "blend": "LinearBurn",
                "opacity": 0.4602354570100562
            },
            {
                "desaturate": "Grayscale"
            },
            {
                "transform": "Translate"
            },
            {
                "generator": "SinY",
                "blend": "ColorDodge",
                "opacity": 0.5340754146566564
            },
            {
                "modify": "AddValue"
            },
            {
                "generator": "WorleyF2F1",
                "blend": "Screen",
                "opacity": 0.7843659619729786
            },
            {
                "modify": "Posterize"
            }
        ]
    },
    {
        "data": [
            {
                "generator": "WorleyF2F1"
            },
            {
                "generator": "Xor",
                "blend": "Reflect",
                "opacity": 0.5861658031892438,
                "tint": [
                    0.8327059995547714,
                    0.9734218914417796,
                    0.9561247899827547
                ]
            },
            {
                "generator": "HeteroTerrain",
                "blend": "LinearDodge",
                "opacity": 0.6198947775956474,
                "tint": [
                    0.5599763461182814,
                    0.6700834399727014,
                    0.7110332688071914
                ]
            },
            {
                "generator": "Checker",
                "blend": "Multiply",
                "opacity": 0.4685682675242364,
                "tint": [
                    0.049748565620080676,
                    0.7332937538808226,
                    0.3147978629107735
                ]
            },
            {
                "generator": "HybridMultiFractal",
                "blend": "VividLight",
                "opacity": 0.8140494755710617,
                "tint": [
                    0.2436602665649088,
                    0.9653195779608941,
                    0.04180083418323122
                ]
            },
            {
                "transform": "Rotate"
            },
            {
                "generator": "WorleyF2F1",
                "blend": "HardLight",
                "opacity": 0.15482421938948954,
                "tint": [
                    0.6248454014213556,
                    0.7244468002457358,
                    0.029957539156154622
                ]
            },
            {
                "modify": "Posterize"
            }
        ]
    },
    {
        "data": [
            {
                "generator": "Y",
                "blend": "ColorDodge",
                "opacity": 0.2017246547167535,
                "tint": [
                    0.36131791300891214,
                    0.9263285661093505,
                    0.9883683221354334
                ]
            },
            {
                "generator": "FBm",
                "blend": "Average",
                "opacity": 0.4963365579682695,
                "tint": [
                    0.8960535634778712,
                    0.05244608000560236,
                    0.6977981952656953
                ]
            },
            {
                "generator": "WorleyF1",
                "blend": "ColorDodge",
                "opacity": 0.5518203739855427,
                "tint": [
                    0.9472734109088161,
                    0.7284259432675124,
                    0.5548778430410255
                ]
            }
        ]
    },
    {
        "data": [
            {
                "generator": "SimplexNoise"
            },
            {
                "modify": "Bias"
            },
            {
                "modify": "Gain"
            },
            {
                "modify": "Sin"
            },
            {
                "modify": "Cos"
            },
            {
                "generator": "Y",
                "blend": "LinearBurn",
                "opacity": 0.8772221385117764,
                "tint": [
                    0.7549393649646583,
                    0.8476164369789982,
                    0.7575602132124111
                ]
            },
            {
                "generator": "FBm",
                "blend": "Phoenix",
                "opacity": 0.7354369659418973,
                "tint": [
                    0.40867502153559654,
                    0.551272291270626,
                    0.88215437522535
                ]
            }
        ]
    },
    {
        "data": [
            {
                "generator": "FBm"
            },
            {
                "generator": "HybridMultiFractal",
                "blend": "Reflect",
                "opacity": 0.9495112118579225,
                "tint": [
                    0.5426725339929412,
                    0.6292859381508134,
                    0.27613230923596377
                ]
            },
            {
                "modify": "Invert"
            }
        ]
    },
    {
        "data": [
            {
                "generator": "Y",
                "params": []
            },
            {
                "modify": "Abs"
            },
            {
                "modify": "Clamp"
            },
            {
                "generator": "HeteroTerrain",
                "blend": "Glow",
                "opacity": 0.6081559444126832,
                "tint": [
                    0.8221300768858926,
                    0.6712391932537458,
                    0.9013230868872877
                ],
                "params": [
                    2.8077598897373512,
                    2.865680492273139,
                    3.8602747713666634,
                    10.155714085063703,
                    0.2525954508284922
                ]
            }
        ]
    },
    {
        "data": [
            {
                "generator": "Y",
                "params": []
            },
            {
                "modify": "Abs",
                "params": []
            },
            {
                "transform": "Tile",
                "params": [
                    [
                        18.692302584194806,
                        4.7821621510571095
                    ],
                    false,
                    true
                ]
            },
            {
                "generator": "HeteroTerrain",
                "blend": "Screen",
                "opacity": 0.040569386383446204,
                "tint": [
                    0.8496422401007901,
                    0.8636219401550609,
                    0.02129006602956718
                ],
                "params": [
                    3.9307400567945905,
                    1.6653282160493745,
                    3.2378098175186576,
                    6.129731186526858,
                    -0.7610789564859939
                ]
            },
            {
                "generator": "WorleyF2",
                "blend": "VividLight",
                "opacity": 0.7565171403553881,
                "tint": [
                    0.5992063494451028,
                    0.5236711276981898,
                    0.29656951069929405
                ],
                "params": [
                    0.913173632095454,
                    false
                ]
            },
            {
                "generator": "SinX",
                "blend": "Phoenix",
                "opacity": 0.18111946496949205,
                "tint": [
                    0.8760369382622113,
                    0.5744216272153306,
                    0.1396649820525906
                ],
                "params": []
            },
            {
                "modify": "Min",
                "params": [
                    null
                ]
            }
        ]
    },
    {
        "data": [
            {
                "generator": "MultiFractal",
                "params": [
                    3.5883238825646817,
                    0.26291870959122754,
                    2.739404920242505,
                    7.7808003395812175,
                    1.2305033370614424
                ]
            },
            {
                "generator": "HSV",
                "blend": "Screen",
                "opacity": 0.7729434244148403,
                "tint": [
                    0.004844500201997448,
                    0.0247200938943557,
                    0.6132748512677735
                ],
                "params": [
                    0.6574754638533999,
                    0.15582872902023603,
                    0.2549559161796471
                ]
            },
            {
                "modify": "Sin",
                "params": []
            }
        ]
    },
    {
        "data": [
            {
                "generator": "WorleyF1",
                "params": [
                    0.2387879115841185,
                    false
                ]
            },
            {
                "modify": "SmoothStep",
                "params": [
                    null,
                    null
                ]
            },
            {
                "generator": "RidgedMultiFractal",
                "blend": "Difference",
                "opacity": 0.7068878075635798,
                "tint": [
                    0.20084245745916407,
                    0.6758891141974972,
                    0.24840115435434473
                ],
                "params": [
                    0.4902520370250496,
                    1.1362584106593268,
                    3.8987050943858748,
                    1.0042884938402252,
                    0.8104566581037052,
                    -2.2622877949998106
                ]
            },
            {transform: 'Scale', params: [[15, 15]]}
        ]
    },
    {
        "data": [
            {
                "generator": "HybridMultiFractal",
                "params": [
                    0.009622128478245173,
                    1.8120112937566564,
                    2.45775017199602,
                    4.541886408875395,
                    1.4620560666640143
                ]
            },
            {
                "colorize": "Tint",
                "params": [
                    null
                ]
            },
            {
                "transform": "Translate",
                "params": [
                    [
                        -50.82001102733716,
                        31.20389523895028
                    ]
                ]
            },
            {
                "colorize": "Tint",
                "params": [
                    null
                ]
            },
            {
                "generator": "Y",
                "blend": "SoftLight",
                "opacity": 0.5001659592970278,
                "tint": [
                    0.6489377620957184,
                    0.08628237938056826,
                    0.11634918347906242
                ],
                "params": []
            },
            {
                "transform": "Twirl",
                "params": [
                    15.452477590912807,
                    7.086377361175661,
                    [
                        20.346480808278052,
                        30.105168352327475
                    ]
                ]
            },
            {
                "generator": "Value",
                "blend": "Reflect",
                "opacity": 0.39994772840695325,
                "tint": [
                    0.9625683917478733,
                    0.4540041708908764,
                    0.33887768734077417
                ],
                "params": [
                    -0.11307109823814132
                ]
            }
        ]
    },
    {
        "data": [
            {
                "generator": "Y",
                "params": []
            },
            {
                "modify": "Min",
                "params": [
                    null
                ]
            },
            {
                "modify": "Bias",
                "params": [
                    null
                ]
            },
            {
                "modify": "Min",
                "params": [
                    null
                ]
            },
            {
                "generator": "FBm",
                "blend": "LinearDodge",
                "opacity": 0.8579083750276624,
                "tint": [
                    0.6167447963925605,
                    0.3402603515985865,
                    0.9784373961553392
                ],
                "params": [
                    4.577278220046285,
                    6.280430497058264,
                    1.6761875093074092,
                    7.079791434005076
                ]
            },
            {
                "transform": "Tile",
                "params": [
                    [
                        2.9517263893304007,
                        16.931073541329816
                    ],
                    false,
                    false
                ]
            },
            {
                "generator": "HeteroTerrain",
                "blend": "ColorBurn",
                "opacity": 0.747609243835635,
                "tint": [
                    0.36358854631711846,
                    0.9217083108166793,
                    0.37290749619817376
                ],
                "params": [
                    2.018739867113908,
                    3.3800978245133493,
                    4.683887935194477,
                    5.831458542883199,
                    1.705289401345838
                ]
            },
            {
                "generator": "Length",
                "blend": "Screen",
                "opacity": 0.9924297989093123,
                "tint": [
                    0.5995814817491694,
                    0.41654984141273443,
                    0.5304765534862741
                ],
                "params": []
            }
        ]
    }
];
