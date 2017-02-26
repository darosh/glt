#pragma glslify: blendOverlay = require(./overlay)

float blendHardLight(float base, float blend) {
	return blendOverlay(blend,base);
}

float blendHardLight(float base, float blend, float opacity) {
	return mix(base, blendHardLight(base, blend), opacity);
}

vec3 blendHardLight(vec3 base, vec3 blend) {
	return blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendHardLight(base, blend), opacity);
}

#pragma glslify: export(blendHardLight)