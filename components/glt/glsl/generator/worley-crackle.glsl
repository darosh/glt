#pragma glslify: worley = require(glsl-worley/worley2D)

float WorleyCrackle(vec2 pos, float jitter, float manhattanDistance, float multiply, float reduce, float offset) {
    vec2 w = worley(pos, jitter, bool(manhattanDistance>.5));

    return max(1., (w.y - w.x) * multiply) / reduce - offset;
}

#pragma glslify:export(WorleyCrackle)
