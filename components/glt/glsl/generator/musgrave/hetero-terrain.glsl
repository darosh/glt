#pragma glslify: snoise = require(glsl-noise/simplex/2d)

/*
 * Heterogeneous procedural terrain function: stats by altitude method.
 * Evaluated at â€œpointâ€; returns value stored in â€œvalueâ€.
 *
 * Parameters:
 * â€œHâ€ determines the fractal dimension of the roughest areas
 * â€œlacunarityâ€ is the gap between successive frequencies
 * â€œoctavesâ€ is the number of frequencies in the fBm
 * â€œoffsetâ€ raises the terrain from â€œsea levelâ€
 *
 * Ebert, D., F. K. Musgrave, D. Peachey, K. Perlin, and S. Worley. 2003. Texturing and modeling: A procedural approach, 500. Third Edition. San Francisco: Morgan Kaufmann.
*/
float heteroTerrainA(vec2 point, float H, float lacunarity, float frequency, float octaves, float offset) {
 float value, increment, remainder;
  float pwrHL = pow(abs(lacunarity), -H);
  float pwr = pwrHL; /* starts with i=1 instead of 0 */

  value = offset + snoise(point * frequency);
  point *= lacunarity;

  for (int i=1; i<65535; i++) {
    increment = (snoise(point * frequency) + offset) * pwr * value;
    // frequency *= lacunarity;
    value += increment;
    point *= lacunarity;

    if (i==int(octaves)) break;
  }

  /* take care of remainder in 'octaves'  */
  remainder = mod(octaves, floor(octaves));

  if (remainder != 0.0) {
    increment = (snoise(point * frequency) + offset) * pwr * value;
    value += remainder * increment;
  }

  return value;
}

#pragma glslify:export(heteroTerrainA)
