float Xor(vec2 pos) {
    vec4 o = vec4(0.);

    for(float i = 0.; i < 8.; ++i) {
        o.xy = ceil(mod(pos /= 2., 2.));
        o -= o - o.z - abs(o.y - o.x) * i / 32.;
    }

    return o.x;
}

#pragma glslify:export(Xor)
