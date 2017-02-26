vec2 Pixelate(vec2 pos, float steps) {
    return floor(pos*steps+2./steps)/steps;
}

#pragma glslify: export(Pixelate)
