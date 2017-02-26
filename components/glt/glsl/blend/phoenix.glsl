float blendPhoenix(float base, float blend) {
	return min(base,blend)-max(base,blend)+1.0;
}

float blendPhoenix(float base, float blend, float opacity) {
	return mix(base, blendPhoenix(base, blend), opacity);
}

vec3 blendPhoenix(vec3 base, vec3 blend) {
	return min(base,blend)-max(base,blend)+vec3(1.0);
}

vec3 blendPhoenix(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendPhoenix(base, blend), opacity);
}

#pragma glslify: export(blendPhoenix)