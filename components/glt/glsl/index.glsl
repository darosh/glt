// SECTION: Blend

#pragma glslify: blendHardMix = require(./blend/hard-mix)
#pragma glslify: blendVividLight = require(./blend/vivid-light)
#pragma glslify: blendLinearLight = require(./blend/linear-light)
#pragma glslify: blendPinLight = require(./blend/pin-light)
#pragma glslify: blendGlow = require(./blend/glow)
#pragma glslify: blendHardLight = require(./blend/hard-light)
#pragma glslify: blendPhoenix = require(./blend/phoenix)
#pragma glslify: blendOverlay = require(./blend/overlay)
#pragma glslify: blendNegation = require(./blend/negation)
#pragma glslify: blendMultiply = require(./blend/multiply)
#pragma glslify: blendReflect = require(./blend/reflect)
#pragma glslify: blendAverage = require(./blend/average)
#pragma glslify: blendLinearBurn = require(./blend/linear-burn)
#pragma glslify: blendLighten = require(./blend/lighten)
#pragma glslify: blendScreen = require(./blend/screen)
#pragma glslify: blendSoftLight = require(./blend/soft-light)
#pragma glslify: blendSubtract = require(./blend/subtract)
#pragma glslify: blendExclusion = require(./blend/exclusion)
#pragma glslify: blendDifference = require(./blend/difference)
#pragma glslify: blendDarken = require(./blend/darken)
#pragma glslify: blendColorDodge = require(./blend/color-dodge)
#pragma glslify: blendColorBurn = require(./blend/color-burn)
#pragma glslify: blendAdd = require(./blend/add)
#pragma glslify: blendLinearDodge = require(./blend/linear-dodge)
#pragma glslify: blendNormal = require(./blend/normal)

// SECTION: Transform

#pragma glslify: Distort = require(./transform/distort)
#pragma glslify: Rotate = require(./transform/rotate)
#pragma glslify: Scale = require(./transform/scale)
#pragma glslify: Translate = require(./transform/translate)
#pragma glslify: Pixelate = require(./transform/pixelate)
#pragma glslify: Twirl = require(./transform/twirl)
#pragma glslify: Tile = require(./transform/tile)
#pragma glslify: Warp = require(./transform/warp)

// SECTION: Generator

#pragma glslify: checker = require(glsl-checker)
#pragma glslify: snoise = require(glsl-noise/simplex/2d)
#pragma glslify: pnoise = require(glsl-noise/periodic/2d)
#pragma glslify: cnoise = require(glsl-noise/classic/2d)
#pragma glslify: SinX = require(./generator/sinx)
#pragma glslify: SinY = require(./generator/siny)
#pragma glslify: SinXY = require(./generator/sinxy)
#pragma glslify: WorleyF1 = require(./generator/worley-f1)
#pragma glslify: WorleyF2 = require(./generator/worley-f2)
#pragma glslify: WorleyF1F2 = require(./generator/worley-f1f2)
#pragma glslify: WorleyF2F1 = require(./generator/worley-f2f1)
#pragma glslify: WorleyCrackle = require(./generator/worley-crackle)
#pragma glslify: ridgedMultiFractal = require(./generator/musgrave/ridged-multi-fractal)
#pragma glslify: hybridMultiFractal = require(./generator/musgrave/hybrid-multi-fractal)
#pragma glslify: fBmA = require(./generator/musgrave/fbm)
#pragma glslify: heteroTerrainA = require(./generator/musgrave/hetero-terrain)
#pragma glslify: multifractalA = require(./generator/musgrave/multi-fractal)
#pragma glslify: HSV = require(./generator/hsv)
#pragma glslify: Xor = require(./generator/xor)
#pragma glslify: X = require(./generator/x)
#pragma glslify: Y = require(./generator/y)
#pragma glslify: Length = require(./generator/length)

// SECTION: Modify

#pragma glslify: Abs = require(./modify/abs)
#pragma glslify: Posterize = require(./modify/posterize)
#pragma glslify: Bias = require(./modify/bias)
#pragma glslify: Bias = require(./modify/gain)
#pragma glslify: Normalize = require(./modify/normalize)
#pragma glslify: Denormalize = require(./modify/denormalize)
#pragma glslify: Invert = require(./modify/invert)
#pragma glslify: Clamp = require(./modify/clamp)
#pragma glslify: Sin = require(./modify/sin)
#pragma glslify: Cos = require(./modify/cos)
#pragma glslify: AddValue = require(./modify/add)
#pragma glslify: MultiplyValue = require(./modify/multiply)
#pragma glslify: SmoothStep = require(./modify/smoothstep)

// SECTION: Colorize

#pragma glslify: cosPalette = require(glsl-cos-palette)
#pragma glslify: Tint = require(./colorize/tint)

// SECTION: Desaturate

#pragma glslify: Grayscale = require(./desaturate/grayscale)
