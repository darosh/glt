#pragma glslify: worley = require(glsl-worley/worley2D)

float WorleyF2(vec2 pos, float jitter, float manhattanDistance) {
    return worley(pos, jitter, bool(manhattanDistance>.5)).y;
}

#pragma glslify:export(WorleyF2)
