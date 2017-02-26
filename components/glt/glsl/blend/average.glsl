float blendAverage(float base, float blend) {
	return (base+blend)/2.0;
}

float blendAverage(float base, float blend, float opacity) {
	return mix(base, blendAverage(base, blend), opacity);
}

vec3 blendAverage(vec3 base, vec3 blend) {
	return (base+blend)/2.0;
}

vec3 blendAverage(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendAverage(base, blend), opacity);
}

#pragma glslify: export(blendAverage)