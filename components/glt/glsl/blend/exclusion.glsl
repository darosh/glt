float blendExclusion(float base, float blend) {
	return base+blend-2.0*base*blend;
}

float blendExclusion(float base, float blend, float opacity) {
	return mix(base, blendExclusion(base, blend), opacity);
}

vec3 blendExclusion(vec3 base, vec3 blend) {
	return base+blend-2.0*base*blend;
}

vec3 blendExclusion(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendExclusion(base, blend), opacity);
}

#pragma glslify: export(blendExclusion)