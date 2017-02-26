#pragma glslify: blendLighten = require(./lighten)
#pragma glslify: blendDarken = require(./darken)

float blendPinLight(float base, float blend) {
	return (blend<0.5)?blendDarken(base,(2.0*blend)):blendLighten(base,(2.0*(blend-0.5)));
}

float blendPinLight(float base, float blend, float opacity) {
	return mix(base, blendPinLight(base, blend), opacity);
}

vec3 blendPinLight(vec3 base, vec3 blend) {
	return vec3(blendPinLight(base.r,blend.r),blendPinLight(base.g,blend.g),blendPinLight(base.b,blend.b));
}

vec3 blendPinLight(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendPinLight(base, blend), opacity);
}

#pragma glslify: export(blendPinLight)