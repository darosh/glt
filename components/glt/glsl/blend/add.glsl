float blendAdd(float base, float blend) {
	return min(base+blend,1.0);
}

float blendAdd(float base, float blend, float opacity) {
	return mix(base, blendAdd(base, blend), opacity);
}

vec3 blendAdd(vec3 base, vec3 blend) {
	return min(base+blend,vec3(1.0));
}

vec3 blendAdd(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendAdd(base, blend), opacity);
}

#pragma glslify: export(blendAdd)