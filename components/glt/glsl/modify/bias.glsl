float Bias(float val, float bias) {
  return (val / ((((1. / bias) - 2.) * (1. - val)) + 1.));
}

vec3 Bias(vec3 val, float bias) {
  return (val / ((((1. / bias) - 2.) * (1. - val)) + 1.));
}

#pragma glslify: export(Bias)
