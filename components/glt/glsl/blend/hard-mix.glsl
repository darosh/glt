#pragma glslify: blendVividLight = require(./vivid-light)

float blendHardMix(float base, float blend) {
	return (blendVividLight(base,blend)<0.5)?0.0:1.0;
}

float blendHardMix(float base, float blend, float opacity) {
	return mix(base, blendHardMix(base, blend), opacity);
}

vec3 blendHardMix(vec3 base, vec3 blend) {
	return vec3(blendHardMix(base.r,blend.r),blendHardMix(base.g,blend.g),blendHardMix(base.b,blend.b));
}

vec3 blendHardMix(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendHardMix(base, blend), opacity);
}

#pragma glslify: export(blendHardMix)