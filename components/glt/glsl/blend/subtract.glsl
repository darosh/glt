float blendSubtract(float base, float blend) {
	return max(base+blend-1.0,0.0);
}

float blendSubtract(float base, float blend, float opacity) {
	return mix(base, blendSubtract(base, blend), opacity);
}

vec3 blendSubtract(vec3 base, vec3 blend) {
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendSubtract(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendSubtract(base, blend), opacity);
}

#pragma glslify: export(blendSubtract)