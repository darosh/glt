float Clamp(float val, float from, float to) {
    return clamp(val, from, to);
}

vec3 Clamp(vec3 val, float from, float to) {
    return clamp(val, from, to);
}

#pragma glslify: export(Clamp)