float blendLighten(float base, float blend) {
	return max(blend,base);
}

float blendLighten(float base, float blend, float opacity) {
	return mix(base, blendLighten(base, blend), opacity);
}

vec3 blendLighten(vec3 base, vec3 blend) {
	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendLighten(base, blend), opacity);
}

#pragma glslify: export(blendLighten)