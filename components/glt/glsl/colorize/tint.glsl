vec3 Tint(float val, vec3 color) {
	return val * color;
}

vec3 Tint(vec3 val, vec3 color) {
	return val * color;
}

#pragma glslify: export(Tint)
