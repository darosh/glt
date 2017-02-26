#pragma glslify: worley = require(glsl-worley/worley2D)

float WorleyF1F2(vec2 pos, float jitter, float manhattanDistance) {
    vec2 w = worley(pos, jitter, bool(manhattanDistance>.5));
    return (w.x + w.y) / 2.;
}

#pragma glslify:export(WorleyF1F2)
