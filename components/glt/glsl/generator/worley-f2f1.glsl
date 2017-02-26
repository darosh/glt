#pragma glslify: worley = require(glsl-worley/worley2D)

float WorleyF2F1(vec2 pos, float jitter, float manhattanDistance) {
    vec2 w = worley(pos, jitter, bool(manhattanDistance));
    return w.y - w.x;
}

#pragma glslify:export(WorleyF2F1)
