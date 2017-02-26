float SinXY(vec2 pos) {
    return (sin(pos.x) + sin(pos.y) + 2.) / 4.;
}

#pragma glslify:export(SinXY)
