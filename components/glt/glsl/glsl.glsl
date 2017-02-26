#define GLSLIFY 1
// SECTION: Blend

float blendColorDodge(float base, float blend) {
	return (blend==1.0)?blend:min(base/(1.0-blend),1.0);
}

float blendColorDodge(float base, float blend, float opacity) {
	return mix(base, blendColorDodge(base, blend), opacity);
}

vec3 blendColorDodge(vec3 base, vec3 blend) {
	return vec3(blendColorDodge(base.r,blend.r),blendColorDodge(base.g,blend.g),blendColorDodge(base.b,blend.b));
}

vec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendColorDodge(base, blend), opacity);
}

float blendColorBurn(float base, float blend) {
	return (blend==0.0)?blend:max((1.0-((1.0-base)/blend)),0.0);
}

float blendColorBurn(float base, float blend, float opacity) {
	return mix(base, blendColorBurn(base, blend), opacity);
}

vec3 blendColorBurn(vec3 base, vec3 blend) {
	return vec3(blendColorBurn(base.r,blend.r),blendColorBurn(base.g,blend.g),blendColorBurn(base.b,blend.b));
}

vec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendColorBurn(base, blend), opacity);
}

float blendVividLight(float base, float blend) {
	return (blend<0.5)?blendColorBurn(base,(2.0*blend)):blendColorDodge(base,(2.0*(blend-0.5)));
}

float blendVividLight(float base, float blend, float opacity) {
	return mix(base, blendVividLight(base, blend), opacity);
}

vec3 blendVividLight(vec3 base, vec3 blend) {
	return vec3(blendVividLight(base.r,blend.r),blendVividLight(base.g,blend.g),blendVividLight(base.b,blend.b));
}

vec3 blendVividLight(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendVividLight(base, blend), opacity);
}

float blendHardMix(float base, float blend) {
	return (blendVividLight(base,blend)<0.5)?0.0:1.0;
}

float blendHardMix(float base, float blend, float opacity) {
	return mix(base, blendHardMix(base, blend), opacity);
}

vec3 blendHardMix(vec3 base, vec3 blend) {
	return vec3(blendHardMix(base.r,blend.r),blendHardMix(base.g,blend.g),blendHardMix(base.b,blend.b));
}

vec3 blendHardMix(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendHardMix(base, blend), opacity);
}

float blendLinearDodge(float base, float blend) {
	// Note : Same implementation as BlendAddf
	return min(base+blend,1.0);
}

float blendLinearDodge(float base, float blend, float opacity) {
	return mix(base, blendLinearDodge(base, blend), opacity);
}

vec3 blendLinearDodge(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendAdd
	return min(base+blend,vec3(1.0));
}

vec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendLinearDodge(base, blend), opacity);
}

float blendLinearBurn(float base, float blend) {
	// Note : Same implementation as BlendSubtractf
	return max(base+blend-1.0,0.0);
}

float blendLinearBurn(float base, float blend, float opacity) {
	return mix(base, blendLinearBurn(base, blend), opacity);
}

vec3 blendLinearBurn(vec3 base, vec3 blend) {
	// Note : Same implementation as BlendSubtract
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendLinearBurn(base, blend), opacity);
}

float blendLinearLight(float base, float blend) {
	return blend<0.5?blendLinearBurn(base,(2.0*blend)):blendLinearDodge(base,(2.0*(blend-0.5)));
}

float blendLinearLight(float base, float blend, float opacity) {
	return mix(base, blendLinearLight(base, blend), opacity);
}

vec3 blendLinearLight(vec3 base, vec3 blend) {
	return vec3(blendLinearLight(base.r,blend.r),blendLinearLight(base.g,blend.g),blendLinearLight(base.b,blend.b));
}

vec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendLinearLight(base, blend), opacity);
}

float blendLighten(float base, float blend) {
	return max(blend,base);
}

float blendLighten(float base, float blend, float opacity) {
	return mix(base, blendLighten(base, blend), opacity);
}

vec3 blendLighten(vec3 base, vec3 blend) {
	return vec3(blendLighten(base.r,blend.r),blendLighten(base.g,blend.g),blendLighten(base.b,blend.b));
}

vec3 blendLighten(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendLighten(base, blend), opacity);
}

float blendDarken(float base, float blend) {
	return min(blend,base);
}

float blendDarken(float base, float blend, float opacity) {
	return mix(base, blendDarken(base, blend), opacity);
}

vec3 blendDarken(vec3 base, vec3 blend) {
	return vec3(blendDarken(base.r,blend.r),blendDarken(base.g,blend.g),blendDarken(base.b,blend.b));
}

vec3 blendDarken(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendDarken(base, blend), opacity);
}

float blendPinLight(float base, float blend) {
	return (blend<0.5)?blendDarken(base,(2.0*blend)):blendLighten(base,(2.0*(blend-0.5)));
}

float blendPinLight(float base, float blend, float opacity) {
	return mix(base, blendPinLight(base, blend), opacity);
}

vec3 blendPinLight(vec3 base, vec3 blend) {
	return vec3(blendPinLight(base.r,blend.r),blendPinLight(base.g,blend.g),blendPinLight(base.b,blend.b));
}

vec3 blendPinLight(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendPinLight(base, blend), opacity);
}

float blendReflect(float base, float blend) {
	return (blend==1.0)?blend:min(base*base/(1.0-blend),1.0);
}

float blendReflect(float base, float blend, float opacity) {
	return mix(base, blendReflect(base, blend), opacity);
}

vec3 blendReflect(vec3 base, vec3 blend) {
	return vec3(blendReflect(base.r,blend.r),blendReflect(base.g,blend.g),blendReflect(base.b,blend.b));
}

vec3 blendReflect(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendReflect(base, blend), opacity);
}

float blendGlow(float base, float blend) {
	return blendReflect(blend,base);
}

float blendGlow(float base, float blend, float opacity) {
	return mix(base, blendReflect(blend,base), opacity);
}

vec3 blendGlow(vec3 base, vec3 blend) {
	return blendReflect(blend,base);
}

vec3 blendGlow(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendGlow(base, blend), opacity);
}

float blendOverlay(float base, float blend) {
	return base<0.5?(2.0*base*blend):(1.0-2.0*(1.0-base)*(1.0-blend));
}

float blendOverlay(float base, float blend, float opacity) {
	return mix(base, blendOverlay(base, blend), opacity);
}

vec3 blendOverlay(vec3 base, vec3 blend) {
	return vec3(blendOverlay(base.r,blend.r),blendOverlay(base.g,blend.g),blendOverlay(base.b,blend.b));
}

vec3 blendOverlay(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendOverlay(base, blend), opacity);
}

float blendHardLight(float base, float blend) {
	return blendOverlay(blend,base);
}

float blendHardLight(float base, float blend, float opacity) {
	return mix(base, blendHardLight(base, blend), opacity);
}

vec3 blendHardLight(vec3 base, vec3 blend) {
	return blendOverlay(blend,base);
}

vec3 blendHardLight(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendHardLight(base, blend), opacity);
}

float blendPhoenix(float base, float blend) {
	return min(base,blend)-max(base,blend)+1.0;
}

float blendPhoenix(float base, float blend, float opacity) {
	return mix(base, blendPhoenix(base, blend), opacity);
}

vec3 blendPhoenix(vec3 base, vec3 blend) {
	return min(base,blend)-max(base,blend)+vec3(1.0);
}

vec3 blendPhoenix(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendPhoenix(base, blend), opacity);
}

float blendNegation(float base, float blend) {
	return 1.0-abs(1.0-base-blend);
}

vec3 blendNegation(vec3 base, vec3 blend) {
	return vec3(1.0)-abs(vec3(1.0)-base-blend);
}

float blendNegation(float base, float blend, float opacity) {
	return mix(base, blendNegation(base, blend), opacity);
}

vec3 blendNegation(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendNegation(base, blend), opacity);
}

float blendMultiply(float base, float blend) {
	return base*blend;
}

float blendMultiply(float base, float blend, float opacity) {
	return mix(base, blendMultiply(base, blend), opacity);
}

vec3 blendMultiply(vec3 base, vec3 blend) {
	return base*blend;
}

vec3 blendMultiply(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendMultiply(base, blend), opacity);
}

float blendAverage(float base, float blend) {
	return (base+blend)/2.0;
}

float blendAverage(float base, float blend, float opacity) {
	return mix(base, blendAverage(base, blend), opacity);
}

vec3 blendAverage(vec3 base, vec3 blend) {
	return (base+blend)/2.0;
}

vec3 blendAverage(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendAverage(base, blend), opacity);
}

float blendScreen(float base, float blend) {
	return 1.0-((1.0-base)*(1.0-blend));
}

float blendScreen(float base, float blend, float opacity) {
	return mix(base, blendScreen(base, blend), opacity);
}

vec3 blendScreen(vec3 base, vec3 blend) {
	return vec3(blendScreen(base.r,blend.r),blendScreen(base.g,blend.g),blendScreen(base.b,blend.b));
}

vec3 blendScreen(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendScreen(base, blend), opacity);
}

float blendSoftLight(float base, float blend) {
	return (blend<0.5)?(2.0*base*blend+base*base*(1.0-2.0*blend)):(sqrt(abs(base))*(2.0*blend-1.0)+2.0*base*(1.0-blend));
}

float blendSoftLight(float base, float blend, float opacity) {
	return mix(base, blendSoftLight(base, blend), opacity);
}

vec3 blendSoftLight(vec3 base, vec3 blend) {
	return vec3(blendSoftLight(base.r,blend.r),blendSoftLight(base.g,blend.g),blendSoftLight(base.b,blend.b));
}

vec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendSoftLight(base, blend), opacity);
}

float blendSubtract(float base, float blend) {
	return max(base+blend-1.0,0.0);
}

float blendSubtract(float base, float blend, float opacity) {
	return mix(base, blendSubtract(base, blend), opacity);
}

vec3 blendSubtract(vec3 base, vec3 blend) {
	return max(base+blend-vec3(1.0),vec3(0.0));
}

vec3 blendSubtract(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendSubtract(base, blend), opacity);
}

float blendExclusion(float base, float blend) {
	return base+blend-2.0*base*blend;
}

float blendExclusion(float base, float blend, float opacity) {
	return mix(base, blendExclusion(base, blend), opacity);
}

vec3 blendExclusion(vec3 base, vec3 blend) {
	return base+blend-2.0*base*blend;
}

vec3 blendExclusion(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendExclusion(base, blend), opacity);
}

float blendDifference(float base, float blend) {
	return abs(base-blend);
}

float blendDifference(float base, float blend, float opacity) {
	return mix(base, blendDifference(base, blend), opacity);
}

vec3 blendDifference(vec3 base, vec3 blend) {
	return abs(base-blend);
}

vec3 blendDifference(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendDifference(base, blend), opacity);
}

float blendAdd(float base, float blend) {
	return min(base+blend,1.0);
}

float blendAdd(float base, float blend, float opacity) {
	return mix(base, blendAdd(base, blend), opacity);
}

vec3 blendAdd(vec3 base, vec3 blend) {
	return min(base+blend,vec3(1.0));
}

vec3 blendAdd(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendAdd(base, blend), opacity);
}

float blendNormal(float base, float blend) {
	return blend;
}

float blendNormal(float base, float blend, float opacity) {
	return mix(base, blend, opacity);
}

vec3 blendNormal(vec3 base, vec3 blend) {
	return blend;
}

vec3 blendNormal(vec3 base, vec3 blend, float opacity) {
	return mix(base, blendNormal(base, blend), opacity);
}

// SECTION: Transform

vec2 Distort(vec2 pos, float weight, float val) {
    return pos + weight * val;
}

mat2 rotate(float rad) {
    float c = cos(rad);
    float s = sin(rad);
    return mat2(
        c, s,
        -s, c
    );
}

vec2 Rotate(vec2 pos, float deg) {
    return rotate(radians(deg)) * pos;
}

vec2 Scale(vec2 pos, vec2 scale) {
    return pos * scale;
}

vec2 Translate(vec2 pos, vec2 shift) {
    return pos + shift;
}

vec2 Pixelate(vec2 pos, float steps) {
    return floor(pos*steps+2./steps)/steps;
}

vec2 Twirl(vec2 pos, float weight, float size, vec2 center) {
    float dist = distance(pos, center);

    if(dist < size) {
        dist = pow(abs(size - dist), 2.) / size;
        float angle = 6.28318530718 * (dist / (size / weight));
        return vec2(
            (pos.x - center.x) * cos(angle) - (pos.y - pos.x) * sin(angle) + center.x + 0.5,
            (pos.y - center.y) * cos(angle) + (pos.x - pos.y) * sin(angle) + center.y + 0.5
        );
    } else {
        return pos;
    }
}

vec2 Tile(vec2 pos, vec2 size, float mirrorX, float mirrorY) {
    vec2 n = pos * size;
    return vec2(
        bool(mirrorX>.5) ? abs(n.x - floor(n.x) - 0.5) * 4. - 1. : (n.x - floor(n.x) - 0.5) * 2.,
        bool(mirrorY>.5) ? abs(n.y - floor(n.y) - 0.5) * 4. - 1. : (n.y - floor(n.y) - 0.5) * 2.
        );
}

vec2 Warp(vec2 pos, float wx, float wy, float x, float y) {
    return pos + vec2(wx * x, wy * y);
}

// SECTION: Generator

float checker(vec2 uv, float repeats) {
  float cx = floor(repeats * uv.x);
  float cy = floor(repeats * uv.y); 
  float result = mod(cx + cy, 2.0);
  return sign(result);
}

//
// Description : Array and textureless GLSL 2D simplex noise function.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : ijm
//     Lastmod : 20110822 (ijm)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//

vec3 mod289_1(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec2 mod289_1(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute_1(vec3 x) {
  return mod289_1(((x*34.0)+1.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289_1(i); // Avoid truncation effects in permutation
  vec3 p = permute_1( permute_1( i.y + vec3(0.0, i1.y, 1.0 ))
    + i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

//
// GLSL textureless classic 2D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-08-22
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec4 mod289_2(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute_2(vec4 x)
{
  return mod289_2(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt_1(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec2 fade_1(vec2 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise, periodic variant
float pnoise(vec2 P, vec2 rep)
{
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod(Pi, rep.xyxy); // To create noise with explicit period
  Pi = mod289_2(Pi);        // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;

  vec4 i = permute_2(permute_2(ix) + iy);

  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
  vec4 gy_1 = abs(gx) - 0.5 ;
  vec4 tx_1 = floor(gx + 0.5);
  gx = gx - tx_1;

  vec2 g00 = vec2(gx.x,gy_1.x);
  vec2 g10 = vec2(gx.y,gy_1.y);
  vec2 g01 = vec2(gx.z,gy_1.z);
  vec2 g11 = vec2(gx.w,gy_1.w);

  vec4 norm = taylorInvSqrt_1(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;

  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));

  vec2 fade_xy = fade_1(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

//
// GLSL textureless classic 2D noise "cnoise",
// with an RSL-style periodic variant "pnoise".
// Author:  Stefan Gustavson (stefan.gustavson@liu.se)
// Version: 2011-08-22
//
// Many thanks to Ian McEwan of Ashima Arts for the
// ideas for permutation and gradient selection.
//
// Copyright (c) 2011 Stefan Gustavson. All rights reserved.
// Distributed under the MIT license. See LICENSE file.
// https://github.com/ashima/webgl-noise
//

vec4 mod289_0(vec4 x)
{
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute_0(vec4 x)
{
  return mod289_0(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt_0(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

vec2 fade_0(vec2 t) {
  return t*t*t*(t*(t*6.0-15.0)+10.0);
}

// Classic Perlin noise
float cnoise(vec2 P)
{
  vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);
  vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);
  Pi = mod289_0(Pi); // To avoid truncation effects in permutation
  vec4 ix = Pi.xzxz;
  vec4 iy = Pi.yyww;
  vec4 fx = Pf.xzxz;
  vec4 fy = Pf.yyww;

  vec4 i = permute_0(permute_0(ix) + iy);

  vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0 ;
  vec4 gy_0 = abs(gx) - 0.5 ;
  vec4 tx_0 = floor(gx + 0.5);
  gx = gx - tx_0;

  vec2 g00 = vec2(gx.x,gy_0.x);
  vec2 g10 = vec2(gx.y,gy_0.y);
  vec2 g01 = vec2(gx.z,gy_0.z);
  vec2 g11 = vec2(gx.w,gy_0.w);

  vec4 norm = taylorInvSqrt_0(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));
  g00 *= norm.x;
  g01 *= norm.y;
  g10 *= norm.z;
  g11 *= norm.w;

  float n00 = dot(g00, vec2(fx.x, fy.x));
  float n10 = dot(g10, vec2(fx.y, fy.y));
  float n01 = dot(g01, vec2(fx.z, fy.z));
  float n11 = dot(g11, vec2(fx.w, fy.w));

  vec2 fade_xy = fade_0(Pf.xy);
  vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);
  float n_xy = mix(n_x.x, n_x.y, fade_xy.y);
  return 2.3 * n_xy;
}

float SinX(vec2 pos) {
    return (sin(pos.x) + 1.) / 2.;
}

float SinY(vec2 pos) {
    return (sin(pos.y) + 1.) / 2.;
}

float SinXY(vec2 pos) {
    return (sin(pos.x) + sin(pos.y) + 2.) / 4.;
}

  // Permutation polynomial: (34x^2 + x) mod 289
  vec3 permute_3(vec3 x) {
    return mod((34.0 * x + 1.0) * x, 289.0);
  }

vec3 dist_0(vec3 x, vec3 y,  bool manhattanDistance) {
  return manhattanDistance ?  abs(x) + abs(y) :  (x * x + y * y);
}

  vec2 worley(vec2 P, float jitter, bool manhattanDistance) {
  float K= 0.142857142857; // 1/7
  float Ko= 0.428571428571 ;// 3/7
  	vec2 Pi_0 = mod(floor(P), 289.0);
   	vec2 Pf = fract(P);
  	vec3 oi = vec3(-1.0, 0.0, 1.0);
  	vec3 of = vec3(-0.5, 0.5, 1.5);
  	vec3 px = permute_3(Pi_0.x + oi);
  	vec3 p = permute_3(px.x + Pi_0.y + oi); // p11, p12, p13
  	vec3 ox = fract(p*K) - Ko;
  	vec3 oy = mod(floor(p*K),7.0)*K - Ko;
  	vec3 dx = Pf.x + 0.5 + jitter*ox;
  	vec3 dy = Pf.y - of + jitter*oy;
  	vec3 d1 = dist_0(dx,dy, manhattanDistance); // d11, d12 and d13, squared
  	p = permute_3(px.y + Pi_0.y + oi); // p21, p22, p23
  	ox = fract(p*K) - Ko;
  	oy = mod(floor(p*K),7.0)*K - Ko;
  	dx = Pf.x - 0.5 + jitter*ox;
  	dy = Pf.y - of + jitter*oy;
  	vec3 d2 = dist_0(dx,dy, manhattanDistance); // d21, d22 and d23, squared
  	p = permute_3(px.z + Pi_0.y + oi); // p31, p32, p33
  	ox = fract(p*K) - Ko;
  	oy = mod(floor(p*K),7.0)*K - Ko;
  	dx = Pf.x - 1.5 + jitter*ox;
  	dy = Pf.y - of + jitter*oy;
  	vec3 d3 = dist_0(dx,dy, manhattanDistance); // d31, d32 and d33, squared
  	// Sort out the two smallest distances (F1, F2)
  	vec3 d1a = min(d1, d2);
  	d2 = max(d1, d2); // Swap to keep candidates for F2
  	d2 = min(d2, d3); // neither F1 nor F2 are now in d3
  	d1 = min(d1a, d2); // F1 is now in d1
  	d2 = max(d1a, d2); // Swap to keep candidates for F2
  	d1.xy = (d1.x < d1.y) ? d1.xy : d1.yx; // Swap if smaller
  	d1.xz = (d1.x < d1.z) ? d1.xz : d1.zx; // F1 is in d1.x
  	d1.yz = min(d1.yz, d2.yz); // F2 is now not in d2.yz
  	d1.y = min(d1.y, d1.z); // nor in  d1.z
  	d1.y = min(d1.y, d2.x); // F2 is in d1.y, we're done.
  	return sqrt(d1.xy);
  }

float WorleyF1(vec2 pos, float jitter, float manhattanDistance) {
    return worley(pos, jitter, bool(manhattanDistance>.5)).x;
}

float WorleyF2(vec2 pos, float jitter, float manhattanDistance) {
    return worley(pos, jitter, bool(manhattanDistance>.5)).y;
}

float WorleyF1F2(vec2 pos, float jitter, float manhattanDistance) {
    vec2 w = worley(pos, jitter, bool(manhattanDistance>.5));
    return (w.x + w.y) / 2.;
}

float WorleyF2F1(vec2 pos, float jitter, float manhattanDistance) {
    vec2 w = worley(pos, jitter, bool(manhattanDistance));
    return w.y - w.x;
}

float WorleyCrackle(vec2 pos, float jitter, float manhattanDistance, float multiply, float reduce, float offset) {
    vec2 w = worley(pos, jitter, bool(manhattanDistance>.5));

    return max(1., (w.y - w.x) * multiply) / reduce - offset;
}

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

vec3 HSV(float h, float s, float v) {
    vec3 c = vec3(h, s, v);
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}

float Xor(vec2 pos) {
    vec4 o = vec4(0.);

    for(float i = 0.; i < 8.; ++i) {
        o.xy = ceil(mod(pos /= 2., 2.));
        o -= o - o.z - abs(o.y - o.x) * i / 32.;
    }

    return o.x;
}

float X(vec2 pos) {
    return pos.x;
}

float Y(vec2 pos) {
    return pos.y;
}

float Length(vec2 pos) {
    return length(pos);
}

// SECTION: Modify

float Abs(float val) {
    return abs(val);
}

vec3 Abs(vec3 val) {
    return abs(val);
}

float Posterize(float val, float steps, float gamma) {
  return pow(abs(floor(pow(abs(val), gamma) * steps) / steps), 1.0/gamma);
}

vec3 Posterize(vec3 val, float steps, float gamma) {
  return pow(abs(floor(pow(abs(val), vec3(gamma)) * steps) / steps), vec3(1.0/gamma));
}

float Bias(float val, float bias) {
  return (val / ((((1. / bias) - 2.) * (1. - val)) + 1.));
}

vec3 Bias(vec3 val, float bias) {
  return (val / ((((1. / bias) - 2.) * (1. - val)) + 1.));
}

float bias_0(float val, float bias) {
  return (val / ((((1. / bias) - 2.) * (1. - val)) + 1.));
}

float Gain(float val, float gain) {
    if (val < 0.5) {
        return bias_0(val * 2., gain) / 2.;
    } else {
        return bias_0(val * 2. - 1., 1. - gain) / 2. + 0.5;
    }
}

vec3 Gain(vec3 val, float gain) {
    return vec3(Gain(val.x, gain), Gain(val.y, gain), Gain(val.z, gain));
}

float Normalize(float val) {
    return (val + 1.) / 2.;
}

vec3 Normalize(vec3 val) {
    return (val + 1.) / 2.;
}

float Denormalize(float val) {
    return (val - .5) * 2.;
}

vec3 Denormalize(vec3 val) {
    return (val - .5) * 2.;
}

float Invert(float val) {
    return 1. - val;
}

vec3 Invert(vec3 val) {
    return 1. - val;
}

float Clamp(float val, float from, float to) {
    return clamp(val, from, to);
}

vec3 Clamp(vec3 val, float from, float to) {
    return clamp(val, from, to);
}

float Sin(float val) {
    return sin(val);
}

vec3 Sin(vec3 val) {
    return sin(val);
}

float Cos(float val) {
    return cos(val);
}

vec3 Cos(vec3 val) {
    return cos(val);
}

float AddValue(float val, float value) {
    return val + value;
}

vec3 AddValue(vec3 val, float value) {
    return val + value;
}

float MultiplyValue(float val, float value) {
    return val * value;
}

vec3 MultiplyValue(vec3 val, float value) {
    return val * value;
}

float SmoothStep(float val, float edge0, float edge1) {
    return smoothstep(edge0, edge1, val);
}

vec3 SmoothStep(vec3 val, float edge0, float edge1) {
    return smoothstep(edge0, edge1, val);
}

// SECTION: Colorize

vec3 cosPalette(  float t,  vec3 a,  vec3 b,  vec3 c, vec3 d ){
    return a + b*cos( 6.28318*(c*t+d) );
}

vec3 Tint(float val, vec3 color) {
	return val * color;
}

vec3 Tint(vec3 val, vec3 color) {
	return val * color;
}

// SECTION: Desaturate

float Grayscale(vec3 color) {
	return color.x * .2126 + color.y * .7152 + color.z * .0722;
}

