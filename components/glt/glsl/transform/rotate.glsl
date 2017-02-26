mat2 rotate(float rad) {
    float c = cos(rad);
    float s = sin(rad);
    return mat2(
        c, s,
        -s, c
    );
}

vec2 Rotate(vec2 pos, float deg) {
    return rotate(radians(deg)) * pos;
}

#pragma glslify:export(Rotate)
