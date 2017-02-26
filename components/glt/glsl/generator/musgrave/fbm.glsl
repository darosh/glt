#pragma glslify: snoise = require(glsl-noise/simplex/2d)

/*
 * Procedural fBm evaluated at â€œpointâ€.
 *
 * Parameters:
 * â€œHâ€ is the fractal increment parameter
 * â€œlacunarityâ€ is the gap between successive frequencies
 * â€œoctavesâ€ is the number of frequencies in the fBm
 *
 * Ebert, D., F. K. Musgrave, D. Peachey, K. Perlin, and S. Worley. 2003. Texturing and modeling: A procedural approach, 437. Third Edition. San Francisco: Morgan Kaufmann.
*/
float fBmA(vec2 point, float H, float lacunarity, float frequency, float octaves) {
  float value = 0.0;
  float remainder = 0.0;
  float pwrHL = pow(abs(lacunarity), -H);
  float pwr = 1.0;

  /* inner loop of fractal construction */
  for (int i=0; i<65535; i++) {
    value += snoise(point * frequency) * pwr;
    pwr *= pwrHL;
    point *= lacunarity;

    if (i==int(octaves)-1) break;
  }

  remainder = octaves - floor(octaves);
  if (remainder != 0.0) {
    value += remainder * snoise(point * frequency) * pwr;
  }

  return value;
}

#pragma glslify:export(fBmA)
