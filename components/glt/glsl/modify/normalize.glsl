float Normalize(float val) {
    return (val + 1.) / 2.;
}

vec3 Normalize(vec3 val) {
    return (val + 1.) / 2.;
}

#pragma glslify: export(Normalize)