float bias(float val, float bias) {
  return (val / ((((1. / bias) - 2.) * (1. - val)) + 1.));
}

float Gain(float val, float gain) {
    if (val < 0.5) {
        return bias(val * 2., gain) / 2.;
    } else {
        return bias(val * 2. - 1., 1. - gain) / 2. + 0.5;
    }
}

vec3 Gain(vec3 val, float gain) {
    return vec3(Gain(val.x, gain), Gain(val.y, gain), Gain(val.z, gain));
}

#pragma glslify: export(Gain)
