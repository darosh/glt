#pragma glslify: blendLinearDodge = require(./linear-dodge)
#pragma glslify: blendLinearBurn = require(./linear-burn)

float blendLinearLight(float base, float blend) {
	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

float blendLinearLight(float base, float blend, float opacity) {
	return mix(base, blendLinearLight(base, blend), opacity);
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendLinearLight(base, blend), opacity);
}

#pragma glslify: export(blendLinearLight)