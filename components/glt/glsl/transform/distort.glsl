vec2 Distort(vec2 pos, float weight, float val) {
    return pos + weight * val;
}

#pragma glslify:export(Distort)
