float SinY(vec2 pos) {
    return (sin(pos.y) + 1.) / 2.;
}

#pragma glslify:export(SinY)
