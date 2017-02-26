float Invert(float val) {
    return 1. - val;
}

vec3 Invert(vec3 val) {
    return 1. - val;
}

#pragma glslify: export(Invert)