#pragma glslify: worley = require(glsl-worley/worley2D)

float WorleyF1(vec2 pos, float jitter, float manhattanDistance) {
    return worley(pos, jitter, bool(manhattanDistance>.5)).x;
}

#pragma glslify:export(WorleyF1)
