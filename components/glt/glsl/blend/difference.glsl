float blendDifference(float base, float blend) {
	return abs(base-blend);
}

float blendDifference(float base, float blend, float opacity) {
	return mix(base, blendDifference(base, blend), opacity);
}

vec3 blendDifference(vec3 base, vec3 blend) {
	return abs(base-blend);
}

vec3 blendDifference(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendDifference(base, blend), opacity);
}

#pragma glslify: export(blendDifference)