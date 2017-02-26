#pragma glslify: blendColorDodge = require(./color-dodge)
#pragma glslify: blendColorBurn = require(./color-burn)

float blendVividLight(float base, float blend) {
	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

float blendVividLight(float base, float blend, float opacity) {
	return mix(base, blendVividLight(base, blend), opacity);
}

vec3 blendVividLight(vec3 base, vec3 blend) {
	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendVividLight(base, blend), opacity);
}

#pragma glslify: export(blendVividLight)