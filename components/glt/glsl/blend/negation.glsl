float blendNegation(float base, float blend) {
	return 1.0-abs(1.0-base-blend);
}

vec3 blendNegation(vec3 base, vec3 blend) {
	return vec3(1.0)-abs(vec3(1.0)-base-blend);
}

float blendNegation(float base, float blend, float opacity) {
	return mix(base, blendNegation(base, blend), opacity);
}

vec3 blendNegation(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendNegation(base, blend), opacity);
}

#pragma glslify: export(blendNegation)