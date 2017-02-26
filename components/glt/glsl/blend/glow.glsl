#pragma glslify: blendReflect = require(./reflect)

float blendGlow(float base, float blend) {
	return blendReflect(blend,base);
}

float blendGlow(float base, float blend, float opacity) {
	return mix(base, blendReflect(blend,base), opacity);
}

vec3 blendGlow(vec3 base, vec3 blend) {
	return blendReflect(blend,base);
}

vec3 blendGlow(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendGlow(base, blend), opacity);
}

#pragma glslify: export(blendGlow)