float Posterize(float val, float steps, float gamma) {
  return pow(abs(floor(pow(abs(val), gamma) * steps) / steps), 1.0/gamma);
}

vec3 Posterize(vec3 val, float steps, float gamma) {
  return pow(abs(floor(pow(abs(val), vec3(gamma)) * steps) / steps), vec3(1.0/gamma));
}

#pragma glslify: export(Posterize)
