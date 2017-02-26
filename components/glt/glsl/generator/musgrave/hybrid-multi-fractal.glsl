#pragma glslify: snoise = require(glsl-noise/simplex/2d)

/* Hybrid additive/multiplicative multifractal terrain model.
 *
 * Copyright 1994 F. Kenton Musgrave
 *
 * Some good parameter values to start with:
 *
 *      H:           0.25
 *      offset:      0.7
 */
float hybridMultiFractal(vec2 point, float H, float lacunarity, float frequency, float octaves, float offset)
{
	float value = 1.0;
	float signal = 0.0;
	float rmd = 0.0;
	float pwHL = pow(abs(lacunarity), -H);
	float pwr = pwHL;
	float weight = 0.;

	/* get first octave of function */
	value = pwr*(snoise(point * frequency)+offset);
	weight = value;
	point *= lacunarity;
	pwr *= pwHL;

	/* spectral construction inner loop, where the fractal is built */
	for (int i=1; i<65535; i++)
	{
		weight = weight>1. ? 1. : weight;
		signal = pwr * (snoise(point*frequency) + offset);
		value += weight*signal;
		weight *= signal;
		pwr *= pwHL;
		point *= lacunarity;
		if (i==int(octaves)-1) break;
	}

	/* take care of remainder in ``octaves''  */
	rmd = octaves - floor(octaves);
	if (rmd != 0.0) value += (rmd * snoise(point*frequency) * pwr);

	return value;
}

#pragma glslify:export(hybridMultiFractal)
