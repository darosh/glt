float Denormalize(float val) {
    return (val - .5) * 2.;
}

vec3 Denormalize(vec3 val) {
    return (val - .5) * 2.;
}

#pragma glslify: export(Denormalize)