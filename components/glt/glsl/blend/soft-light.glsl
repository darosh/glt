float blendSoftLight(float base, float blend) {
	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(abs(base))*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

float blendSoftLight(float base, float blend, float opacity) {
	return mix(base, blendSoftLight(base, blend), opacity);
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendSoftLight(base, blend), opacity);
}

#pragma glslify: export(blendSoftLight)