#pragma glslify: snoise = require(glsl-noise/simplex/2d)

/*
 * Procedural multifractal evaluated at â€œpoint.â€
 *
 * Parameters:
 * â€œHâ€ determines the fractal dimension of the roughest areas
 * â€œlacunarityâ€ is the gap between successive frequencies
 * â€œoctavesâ€ is the number of frequencies in the fBm
 * â€œoffsetâ€ is the zero offset, which determines multifractality
 *
 * Ebert, D., F. K. Musgrave, D. Peachey, K. Perlin, and S. Worley. 2003. Texturing and modeling: A procedural approach, 440. Third Edition. San Francisco: Morgan Kaufmann.
*/
float multifractalA(vec2 point, float H, float lacunarity, float frequency, float octaves, float offset) {
  float value = 1.0;
  float rmd = 0.0;
  float pwHL = pow(abs(lacunarity), -H);
  float pwr = 1.0;

  /* inner loop of fractal construction */
  for (int i=0; i<65535; i++) {
    value *= pwr * snoise(point*frequency) + offset;
    pwr *= pwHL;
    point *= lacunarity;

    if (i==int(octaves)-1) break;
  }

  rmd = octaves - floor(octaves);
  if (rmd != 0.0) value += (rmd * snoise(point*frequency) * pwr);

  return value;
}

#pragma glslify:export(multifractalA)
