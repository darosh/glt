#pragma glslify: snoise = require(glsl-noise/simplex/2d)

/* Ridged multifractal terrain model.
 *
 * Copyright 1994 F. Kenton Musgrave
 *
 * Some good parameter values to start with:
 *
 *      H:           1.0
 *      offset:      1.0
 *      gain:        2.0
 */
float ridgedMultiFractal(vec2 point, float H, float lacunarity, float frequency, float octaves, float offset, float gain)
{
	float value = 1.0;
	float signal = 0.0;
	float pwHL = pow(abs(lacunarity), -H);
	float pwr = pwHL;
	float weight = 0.;

	/* get first octave of function */
	signal = snoise(point * frequency);
	signal = offset-abs(signal);
	signal *= signal;
	value = signal * pwr;
	weight = 1.0;
	pwr *= pwHL;

	/* spectral construction inner loop, where the fractal is built */
	for (int i=1; i<65535; i++)
	{
		point *= lacunarity;
		weight = clamp(signal*gain, 0.,1.);
		signal = snoise(point * frequency);
		signal = offset-abs(signal);
		signal *= signal;
		signal *= weight;
		value += signal * pwr;
		pwr *= pwHL;
		if (i==int(octaves)-1) break;
	}

	return value;
}

#pragma glslify:export(ridgedMultiFractal)
