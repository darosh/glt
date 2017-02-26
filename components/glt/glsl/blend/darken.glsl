float blendDarken(float base, float blend) {
	return min(blend,base);
}

float blendDarken(float base, float blend, float opacity) {
	return mix(base, blendDarken(base, blend), opacity);
}

vec3 blendDarken(vec3 base, vec3 blend) {
	return vec3(blendDarken(base.r,blend.r),blendDarken(base.g,blend.g),blendDarken(base.b,blend.b));
}

vec3 blendDarken(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendDarken(base, blend), opacity);
}

#pragma glslify: export(blendDarken)