vec2 Warp(vec2 pos, float wx, float wy, float x, float y) {
    return pos + vec2(wx * x, wy * y);
}

#pragma glslify:export(Warp)
