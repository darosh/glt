float blendScreen(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

float blendScreen(float base, float blend, float opacity) {
	return mix(base, blendScreen(base, blend), opacity);
}

vec3 blendScreen(vec3 base, vec3 blend) {
	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendScreen(base, blend), opacity);
}

#pragma glslify: export(blendScreen)