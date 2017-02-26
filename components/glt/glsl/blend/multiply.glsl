float blendMultiply(float base, float blend) {
	return base*blend;
}

float blendMultiply(float base, float blend, float opacity) {
	return mix(base, blendMultiply(base, blend), opacity);
}

vec3 blendMultiply(vec3 base, vec3 blend) {
	return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendMultiply(base, blend), opacity);
}

#pragma glslify: export(blendMultiply)