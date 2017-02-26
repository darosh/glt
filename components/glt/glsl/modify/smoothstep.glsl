float SmoothStep(float val, float edge0, float edge1) {
    return smoothstep(edge0, edge1, val);
}

vec3 SmoothStep(vec3 val, float edge0, float edge1) {
    return smoothstep(edge0, edge1, val);
}

#pragma glslify: export(SmoothStep)