float Grayscale(vec3 color) {
	return color.x * .2126 + color.y * .7152 + color.z * .0722;
}

#pragma glslify: export(Grayscale)
