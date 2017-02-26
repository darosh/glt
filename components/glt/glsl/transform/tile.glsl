vec2 Tile(vec2 pos, vec2 size, float mirrorX, float mirrorY) {
    vec2 n = pos * size;
    return vec2(
        bool(mirrorX>.5) ? abs(n.x - floor(n.x) - 0.5) * 4. - 1. : (n.x - floor(n.x) - 0.5) * 2.,
        bool(mirrorY>.5) ? abs(n.y - floor(n.y) - 0.5) * 4. - 1. : (n.y - floor(n.y) - 0.5) * 2.
        );
}

#pragma glslify:export(Tile)
