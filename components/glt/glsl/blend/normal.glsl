float blendNormal(float base, float blend) {
	return blend;
}

float blendNormal(float base, float blend, float opacity) {
	return mix(base, blend, opacity);
}

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendNormal(base, blend), opacity);
}

#pragma glslify:export(blendNormal)
