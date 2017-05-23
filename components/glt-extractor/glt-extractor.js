(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.glt = global.glt || {})));
}(this, (function (exports) { 'use strict';

var gltg = "\n#define GLSLIFY 1\n\nfloat blendColorDodge(float base, float blend) {\n return (blend == 1.0) ? blend : min(base / (1.0 - blend), 1.0);\n}\nfloat blendColorDodge(float base, float blend, float opacity) {\n return mix(base, blendColorDodge(base, blend), opacity);\n}\nvec3 blendColorDodge(vec3 base, vec3 blend) {\n return vec3(blendColorDodge(base.r, blend.r), blendColorDodge(base.g, blend.g), blendColorDodge(base.b, blend.b));\n}\nvec3 blendColorDodge(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendColorDodge(base, blend), opacity);\n}\nfloat blendColorBurn(float base, float blend) {\n return (blend == 0.0) ? blend : max((1.0 - ((1.0 - base) / blend)), 0.0);\n}\nfloat blendColorBurn(float base, float blend, float opacity) {\n return mix(base, blendColorBurn(base, blend), opacity);\n}\nvec3 blendColorBurn(vec3 base, vec3 blend) {\n return vec3(blendColorBurn(base.r, blend.r), blendColorBurn(base.g, blend.g), blendColorBurn(base.b, blend.b));\n}\nvec3 blendColorBurn(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendColorBurn(base, blend), opacity);\n}\nfloat blendVividLight(float base, float blend) {\n return (blend < 0.5) ? blendColorBurn(base, (2.0 * blend)) : blendColorDodge(base, (2.0 * (blend - 0.5)));\n}\nfloat blendVividLight(float base, float blend, float opacity) {\n return mix(base, blendVividLight(base, blend), opacity);\n}\nvec3 blendVividLight(vec3 base, vec3 blend) {\n return vec3(blendVividLight(base.r, blend.r), blendVividLight(base.g, blend.g), blendVividLight(base.b, blend.b));\n}\nvec3 blendVividLight(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendVividLight(base, blend), opacity);\n}\nfloat blendHardMix(float base, float blend) {\n return (blendVividLight(base, blend) < 0.5) ? 0.0 : 1.0;\n}\nfloat blendHardMix(float base, float blend, float opacity) {\n return mix(base, blendHardMix(base, blend), opacity);\n}\nvec3 blendHardMix(vec3 base, vec3 blend) {\n return vec3(blendHardMix(base.r, blend.r), blendHardMix(base.g, blend.g), blendHardMix(base.b, blend.b));\n}\nvec3 blendHardMix(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendHardMix(base, blend), opacity);\n}\nfloat blendLinearDodge(float base, float blend) {\n return min(base + blend, 1.0);\n}\nfloat blendLinearDodge(float base, float blend, float opacity) {\n return mix(base, blendLinearDodge(base, blend), opacity);\n}\nvec3 blendLinearDodge(vec3 base, vec3 blend) {\n return min(base + blend, vec3(1.0));\n}\nvec3 blendLinearDodge(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendLinearDodge(base, blend), opacity);\n}\nfloat blendLinearBurn(float base, float blend) {\n return max(base + blend - 1.0, 0.0);\n}\nfloat blendLinearBurn(float base, float blend, float opacity) {\n return mix(base, blendLinearBurn(base, blend), opacity);\n}\nvec3 blendLinearBurn(vec3 base, vec3 blend) {\n return max(base + blend - vec3(1.0), vec3(0.0));\n}\nvec3 blendLinearBurn(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendLinearBurn(base, blend), opacity);\n}\nfloat blendLinearLight(float base, float blend) {\n return blend < 0.5 ? blendLinearBurn(base, (2.0 * blend)) : blendLinearDodge(base, (2.0 * (blend - 0.5)));\n}\nfloat blendLinearLight(float base, float blend, float opacity) {\n return mix(base, blendLinearLight(base, blend), opacity);\n}\nvec3 blendLinearLight(vec3 base, vec3 blend) {\n return vec3(blendLinearLight(base.r, blend.r), blendLinearLight(base.g, blend.g), blendLinearLight(base.b, blend.b));\n}\nvec3 blendLinearLight(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendLinearLight(base, blend), opacity);\n}\nfloat blendLighten(float base, float blend) {\n return max(blend, base);\n}\nfloat blendLighten(float base, float blend, float opacity) {\n return mix(base, blendLighten(base, blend), opacity);\n}\nvec3 blendLighten(vec3 base, vec3 blend) {\n return vec3(blendLighten(base.r, blend.r), blendLighten(base.g, blend.g), blendLighten(base.b, blend.b));\n}\nvec3 blendLighten(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendLighten(base, blend), opacity);\n}\nfloat blendDarken(float base, float blend) {\n return min(blend, base);\n}\nfloat blendDarken(float base, float blend, float opacity) {\n return mix(base, blendDarken(base, blend), opacity);\n}\nvec3 blendDarken(vec3 base, vec3 blend) {\n return vec3(blendDarken(base.r, blend.r), blendDarken(base.g, blend.g), blendDarken(base.b, blend.b));\n}\nvec3 blendDarken(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendDarken(base, blend), opacity);\n}\nfloat blendPinLight(float base, float blend) {\n return (blend < 0.5) ? blendDarken(base, (2.0 * blend)) : blendLighten(base, (2.0 * (blend - 0.5)));\n}\nfloat blendPinLight(float base, float blend, float opacity) {\n return mix(base, blendPinLight(base, blend), opacity);\n}\nvec3 blendPinLight(vec3 base, vec3 blend) {\n return vec3(blendPinLight(base.r, blend.r), blendPinLight(base.g, blend.g), blendPinLight(base.b, blend.b));\n}\nvec3 blendPinLight(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendPinLight(base, blend), opacity);\n}\nfloat blendReflect(float base, float blend) {\n return (blend == 1.0) ? blend : min(base * base / (1.0 - blend), 1.0);\n}\nfloat blendReflect(float base, float blend, float opacity) {\n return mix(base, blendReflect(base, blend), opacity);\n}\nvec3 blendReflect(vec3 base, vec3 blend) {\n return vec3(blendReflect(base.r, blend.r), blendReflect(base.g, blend.g), blendReflect(base.b, blend.b));\n}\nvec3 blendReflect(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendReflect(base, blend), opacity);\n}\nfloat blendGlow(float base, float blend) {\n return blendReflect(blend, base);\n}\nfloat blendGlow(float base, float blend, float opacity) {\n return mix(base, blendReflect(blend, base), opacity);\n}\nvec3 blendGlow(vec3 base, vec3 blend) {\n return blendReflect(blend, base);\n}\nvec3 blendGlow(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendGlow(base, blend), opacity);\n}\nfloat blendOverlay(float base, float blend) {\n return base < 0.5 ? (2.0 * base * blend) : (1.0 - 2.0 * (1.0 - base) * (1.0 - blend));\n}\nfloat blendOverlay(float base, float blend, float opacity) {\n return mix(base, blendOverlay(base, blend), opacity);\n}\nvec3 blendOverlay(vec3 base, vec3 blend) {\n return vec3(blendOverlay(base.r, blend.r), blendOverlay(base.g, blend.g), blendOverlay(base.b, blend.b));\n}\nvec3 blendOverlay(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendOverlay(base, blend), opacity);\n}\nfloat blendHardLight(float base, float blend) {\n return blendOverlay(blend, base);\n}\nfloat blendHardLight(float base, float blend, float opacity) {\n return mix(base, blendHardLight(base, blend), opacity);\n}\nvec3 blendHardLight(vec3 base, vec3 blend) {\n return blendOverlay(blend, base);\n}\nvec3 blendHardLight(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendHardLight(base, blend), opacity);\n}\nfloat blendPhoenix(float base, float blend) {\n return min(base, blend) - max(base, blend) + 1.0;\n}\nfloat blendPhoenix(float base, float blend, float opacity) {\n return mix(base, blendPhoenix(base, blend), opacity);\n}\nvec3 blendPhoenix(vec3 base, vec3 blend) {\n return min(base, blend) - max(base, blend) + vec3(1.0);\n}\nvec3 blendPhoenix(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendPhoenix(base, blend), opacity);\n}\nfloat blendNegation(float base, float blend) {\n return 1.0 - abs(1.0 - base - blend);\n}\nvec3 blendNegation(vec3 base, vec3 blend) {\n return vec3(1.0) - abs(vec3(1.0) - base - blend);\n}\nfloat blendNegation(float base, float blend, float opacity) {\n return mix(base, blendNegation(base, blend), opacity);\n}\nvec3 blendNegation(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendNegation(base, blend), opacity);\n}\nfloat blendMultiply(float base, float blend) {\n return base * blend;\n}\nfloat blendMultiply(float base, float blend, float opacity) {\n return mix(base, blendMultiply(base, blend), opacity);\n}\nvec3 blendMultiply(vec3 base, vec3 blend) {\n return base * blend;\n}\nvec3 blendMultiply(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendMultiply(base, blend), opacity);\n}\nfloat blendAverage(float base, float blend) {\n return (base + blend) / 2.0;\n}\nfloat blendAverage(float base, float blend, float opacity) {\n return mix(base, blendAverage(base, blend), opacity);\n}\nvec3 blendAverage(vec3 base, vec3 blend) {\n return (base + blend) / 2.0;\n}\nvec3 blendAverage(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendAverage(base, blend), opacity);\n}\nfloat blendScreen(float base, float blend) {\n return 1.0 - ((1.0 - base) * (1.0 - blend));\n}\nfloat blendScreen(float base, float blend, float opacity) {\n return mix(base, blendScreen(base, blend), opacity);\n}\nvec3 blendScreen(vec3 base, vec3 blend) {\n return vec3(blendScreen(base.r, blend.r), blendScreen(base.g, blend.g), blendScreen(base.b, blend.b));\n}\nvec3 blendScreen(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendScreen(base, blend), opacity);\n}\nfloat blendSoftLight(float base, float blend) {\n return (blend < 0.5) ? (2.0 * base * blend + base * base * (1.0 - 2.0 * blend)) : (sqrt(abs(base)) * (2.0 * blend - 1.0) + 2.0 * base * (1.0 - blend));\n}\nfloat blendSoftLight(float base, float blend, float opacity) {\n return mix(base, blendSoftLight(base, blend), opacity);\n}\nvec3 blendSoftLight(vec3 base, vec3 blend) {\n return vec3(blendSoftLight(base.r, blend.r), blendSoftLight(base.g, blend.g), blendSoftLight(base.b, blend.b));\n}\nvec3 blendSoftLight(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendSoftLight(base, blend), opacity);\n}\nfloat blendSubtract(float base, float blend) {\n return max(base + blend - 1.0, 0.0);\n}\nfloat blendSubtract(float base, float blend, float opacity) {\n return mix(base, blendSubtract(base, blend), opacity);\n}\nvec3 blendSubtract(vec3 base, vec3 blend) {\n return max(base + blend - vec3(1.0), vec3(0.0));\n}\nvec3 blendSubtract(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendSubtract(base, blend), opacity);\n}\nfloat blendExclusion(float base, float blend) {\n return base + blend - 2.0 * base * blend;\n}\nfloat blendExclusion(float base, float blend, float opacity) {\n return mix(base, blendExclusion(base, blend), opacity);\n}\nvec3 blendExclusion(vec3 base, vec3 blend) {\n return base + blend - 2.0 * base * blend;\n}\nvec3 blendExclusion(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendExclusion(base, blend), opacity);\n}\nfloat blendDifference(float base, float blend) {\n return abs(base - blend);\n}\nfloat blendDifference(float base, float blend, float opacity) {\n return mix(base, blendDifference(base, blend), opacity);\n}\nvec3 blendDifference(vec3 base, vec3 blend) {\n return abs(base - blend);\n}\nvec3 blendDifference(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendDifference(base, blend), opacity);\n}\nfloat blendAdd(float base, float blend) {\n return min(base + blend, 1.0);\n}\nfloat blendAdd(float base, float blend, float opacity) {\n return mix(base, blendAdd(base, blend), opacity);\n}\nvec3 blendAdd(vec3 base, vec3 blend) {\n return min(base + blend, vec3(1.0));\n}\nvec3 blendAdd(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendAdd(base, blend), opacity);\n}\nfloat blendNormal(float base, float blend) {\n return blend;\n}\nfloat blendNormal(float base, float blend, float opacity) {\n return mix(base, blend, opacity);\n}\nvec3 blendNormal(vec3 base, vec3 blend) {\n return blend;\n}\nvec3 blendNormal(vec3 base, vec3 blend, float opacity) {\n return mix(base, blendNormal(base, blend), opacity);\n}\nvec2 Distort(vec2 pos, float weight, float val) {\n return pos + weight * val;\n}\nmat2 rotate(float rad) {\n float c = cos(rad);\n float s = sin(rad);\n return mat2(c, s, -s, c);\n}\nvec2 Rotate(vec2 pos, float deg) {\n return rotate(radians(deg)) * pos;\n}\nvec2 Scale(vec2 pos, vec2 scale) {\n return pos * scale;\n}\nvec2 Translate(vec2 pos, vec2 shift) {\n return pos + shift;\n}\nvec2 Pixelate(vec2 pos, float steps) {\n return floor(pos * steps + 2. / steps) / steps;\n}\nvec2 Twirl(vec2 pos, float weight, float size, vec2 center) {\n float dist = distance(pos, center);\n if(dist < size) {\n  dist = pow(abs(size - dist), 2.) / size;\n  float angle = 6.28318530718 * (dist / (size / weight));\n  return vec2((pos.x - center.x) * cos(angle) - (pos.y - pos.x) * sin(angle) + center.x + 0.5, (pos.y - center.y) * cos(angle) + (pos.x - pos.y) * sin(angle) + center.y + 0.5);\n } else {\n  return pos;\n }\n}\nvec2 Tile(vec2 pos, vec2 size, float mirrorX, float mirrorY) {\n vec2 n = pos * size;\n return vec2(bool(mirrorX > .5) ? abs(n.x - floor(n.x) - 0.5) * 4. - 1. : (n.x - floor(n.x) - 0.5) * 2., bool(mirrorY > .5) ? abs(n.y - floor(n.y) - 0.5) * 4. - 1. : (n.y - floor(n.y) - 0.5) * 2.);\n}\nvec2 Warp(vec2 pos, float wx, float wy, float x, float y) {\n return pos + vec2(wx * x, wy * y);\n}\nfloat checker(vec2 uv, float repeats) {\n float cx = floor(repeats * uv.x);\n float cy = floor(repeats * uv.y);\n float result = mod(cx + cy, 2.0);\n return sign(result);\n}\nvec3 mod289_1(vec3 x) {\n return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec2 mod289_1(vec2 x) {\n return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec3 permute_1(vec3 x) {\n return mod289_1(((x * 34.0) + 1.0) * x);\n}\nfloat snoise(vec2 v) {\n const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);\n vec2 i = floor(v + dot(v, C.yy));\n vec2 x0 = v - i + dot(i, C.xx);\n vec2 i1;\n i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);\n vec4 x12 = x0.xyxy + C.xxzz;\n x12.xy -= i1;\n i = mod289_1(i);\n vec3 p = permute_1(permute_1(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));\n vec3 m = max(0.5 - vec3(dot(x0, x0), dot(x12.xy, x12.xy), dot(x12.zw, x12.zw)), 0.0);\n m = m * m;\n m = m * m;\n vec3 x = 2.0 * fract(p * C.www) - 1.0;\n vec3 h = abs(x) - 0.5;\n vec3 ox = floor(x + 0.5);\n vec3 a0 = x - ox;\n m *= 1.79284291400159 - 0.85373472095314 * (a0 * a0 + h * h);\n vec3 g;\n g.x = a0.x * x0.x + h.x * x0.y;\n g.yz = a0.yz * x12.xz + h.yz * x12.yw;\n return 130.0 * dot(m, g);\n}\nvec4 mod289_0(vec4 x) {\n return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute_0(vec4 x) {\n return mod289_0(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt_0(vec4 r) {\n return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec2 fade_0(vec2 t) {\n return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\nfloat pnoise(vec2 P, vec2 rep) {\n vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n Pi = mod(Pi, rep.xyxy);\n Pi = mod289_0(Pi);\n vec4 ix = Pi.xzxz;\n vec4 iy = Pi.yyww;\n vec4 fx = Pf.xzxz;\n vec4 fy = Pf.yyww;\n vec4 i = permute_0(permute_0(ix) + iy);\n vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0;\n vec4 gy_0 = abs(gx) - 0.5;\n vec4 tx_0 = floor(gx + 0.5);\n gx = gx - tx_0;\n vec2 g00 = vec2(gx.x, gy_0.x);\n vec2 g10 = vec2(gx.y, gy_0.y);\n vec2 g01 = vec2(gx.z, gy_0.z);\n vec2 g11 = vec2(gx.w, gy_0.w);\n vec4 norm = taylorInvSqrt_0(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));\n g00 *= norm.x;\n g01 *= norm.y;\n g10 *= norm.z;\n g11 *= norm.w;\n float n00 = dot(g00, vec2(fx.x, fy.x));\n float n10 = dot(g10, vec2(fx.y, fy.y));\n float n01 = dot(g01, vec2(fx.z, fy.z));\n float n11 = dot(g11, vec2(fx.w, fy.w));\n vec2 fade_xy = fade_0(Pf.xy);\n vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n return 2.3 * n_xy;\n}\nvec4 mod289_2(vec4 x) {\n return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\nvec4 permute_2(vec4 x) {\n return mod289_2(((x * 34.0) + 1.0) * x);\n}\nvec4 taylorInvSqrt_1(vec4 r) {\n return 1.79284291400159 - 0.85373472095314 * r;\n}\nvec2 fade_1(vec2 t) {\n return t * t * t * (t * (t * 6.0 - 15.0) + 10.0);\n}\nfloat cnoise(vec2 P) {\n vec4 Pi = floor(P.xyxy) + vec4(0.0, 0.0, 1.0, 1.0);\n vec4 Pf = fract(P.xyxy) - vec4(0.0, 0.0, 1.0, 1.0);\n Pi = mod289_2(Pi);\n vec4 ix = Pi.xzxz;\n vec4 iy = Pi.yyww;\n vec4 fx = Pf.xzxz;\n vec4 fy = Pf.yyww;\n vec4 i = permute_2(permute_2(ix) + iy);\n vec4 gx = fract(i * (1.0 / 41.0)) * 2.0 - 1.0;\n vec4 gy_1 = abs(gx) - 0.5;\n vec4 tx_1 = floor(gx + 0.5);\n gx = gx - tx_1;\n vec2 g00 = vec2(gx.x, gy_1.x);\n vec2 g10 = vec2(gx.y, gy_1.y);\n vec2 g01 = vec2(gx.z, gy_1.z);\n vec2 g11 = vec2(gx.w, gy_1.w);\n vec4 norm = taylorInvSqrt_1(vec4(dot(g00, g00), dot(g01, g01), dot(g10, g10), dot(g11, g11)));\n g00 *= norm.x;\n g01 *= norm.y;\n g10 *= norm.z;\n g11 *= norm.w;\n float n00 = dot(g00, vec2(fx.x, fy.x));\n float n10 = dot(g10, vec2(fx.y, fy.y));\n float n01 = dot(g01, vec2(fx.z, fy.z));\n float n11 = dot(g11, vec2(fx.w, fy.w));\n vec2 fade_xy = fade_1(Pf.xy);\n vec2 n_x = mix(vec2(n00, n01), vec2(n10, n11), fade_xy.x);\n float n_xy = mix(n_x.x, n_x.y, fade_xy.y);\n return 2.3 * n_xy;\n}\nfloat SinX(vec2 pos) {\n return (sin(pos.x) + 1.) / 2.;\n}\nfloat SinY(vec2 pos) {\n return (sin(pos.y) + 1.) / 2.;\n}\nfloat SinXY(vec2 pos) {\n return (sin(pos.x) + sin(pos.y) + 2.) / 4.;\n}\nvec3 permute_3(vec3 x) {\n return mod((34.0 * x + 1.0) * x, 289.0);\n}\nvec3 dist_0(vec3 x, vec3 y, bool manhattanDistance) {\n return manhattanDistance ? abs(x) + abs(y) : (x * x + y * y);\n}\nvec2 worley(vec2 P, float jitter, bool manhattanDistance) {\n float K = 0.142857142857;\n float Ko = 0.428571428571;\n vec2 Pi_0 = mod(floor(P), 289.0);\n vec2 Pf = fract(P);\n vec3 oi = vec3(-1.0, 0.0, 1.0);\n vec3 of = vec3(-0.5, 0.5, 1.5);\n vec3 px = permute_3(Pi_0.x + oi);\n vec3 p = permute_3(px.x + Pi_0.y + oi);\n vec3 ox = fract(p * K) - Ko;\n vec3 oy = mod(floor(p * K), 7.0) * K - Ko;\n vec3 dx = Pf.x + 0.5 + jitter * ox;\n vec3 dy = Pf.y - of + jitter * oy;\n vec3 d1 = dist_0(dx, dy, manhattanDistance);\n p = permute_3(px.y + Pi_0.y + oi);\n ox = fract(p * K) - Ko;\n oy = mod(floor(p * K), 7.0) * K - Ko;\n dx = Pf.x - 0.5 + jitter * ox;\n dy = Pf.y - of + jitter * oy;\n vec3 d2 = dist_0(dx, dy, manhattanDistance);\n p = permute_3(px.z + Pi_0.y + oi);\n ox = fract(p * K) - Ko;\n oy = mod(floor(p * K), 7.0) * K - Ko;\n dx = Pf.x - 1.5 + jitter * ox;\n dy = Pf.y - of + jitter * oy;\n vec3 d3 = dist_0(dx, dy, manhattanDistance);\n vec3 d1a = min(d1, d2);\n d2 = max(d1, d2);\n d2 = min(d2, d3);\n d1 = min(d1a, d2);\n d2 = max(d1a, d2);\n d1.xy = (d1.x < d1.y) ? d1.xy : d1.yx;\n d1.xz = (d1.x < d1.z) ? d1.xz : d1.zx;\n d1.yz = min(d1.yz, d2.yz);\n d1.y = min(d1.y, d1.z);\n d1.y = min(d1.y, d2.x);\n return sqrt(d1.xy);\n}\nfloat WorleyF1(vec2 pos, float jitter, float manhattanDistance) {\n return worley(pos, jitter, bool(manhattanDistance > .5)).x;\n}\nfloat WorleyF2(vec2 pos, float jitter, float manhattanDistance) {\n return worley(pos, jitter, bool(manhattanDistance > .5)).y;\n}\nfloat WorleyF1F2(vec2 pos, float jitter, float manhattanDistance) {\n vec2 w = worley(pos, jitter, bool(manhattanDistance > .5));\n return (w.x + w.y) / 2.;\n}\nfloat WorleyF2F1(vec2 pos, float jitter, float manhattanDistance) {\n vec2 w = worley(pos, jitter, bool(manhattanDistance));\n return w.y - w.x;\n}\nfloat WorleyCrackle(vec2 pos, float jitter, float manhattanDistance, float multiply, float reduce, float offset) {\n vec2 w = worley(pos, jitter, bool(manhattanDistance > .5));\n return max(1., (w.y - w.x) * multiply) / reduce - offset;\n}\nfloat ridgedMultiFractal(vec2 point, float H, float lacunarity, float frequency, float octaves, float offset, float gain) {\n float value = 1.0;\n float signal = 0.0;\n float pwHL = pow(abs(lacunarity), -H);\n float pwr = pwHL;\n float weight = 0.;\n signal = snoise(point * frequency);\n signal = offset - abs(signal);\n signal *= signal;\n value = signal * pwr;\n weight = 1.0;\n pwr *= pwHL;\n for(int i = 1; i < 65535; i++) {\n  point *= lacunarity;\n  weight = clamp(signal * gain, 0., 1.);\n  signal = snoise(point * frequency);\n  signal = offset - abs(signal);\n  signal *= signal;\n  signal *= weight;\n  value += signal * pwr;\n  pwr *= pwHL;\n  if(i == int(octaves) - 1)\n   break;\n  \n }\n return value;\n}\nfloat hybridMultiFractal(vec2 point, float H, float lacunarity, float frequency, float octaves, float offset) {\n float value = 1.0;\n float signal = 0.0;\n float rmd = 0.0;\n float pwHL = pow(abs(lacunarity), -H);\n float pwr = pwHL;\n float weight = 0.;\n value = pwr * (snoise(point * frequency) + offset);\n weight = value;\n point *= lacunarity;\n pwr *= pwHL;\n for(int i = 1; i < 65535; i++) {\n  weight = weight > 1. ? 1. : weight;\n  signal = pwr * (snoise(point * frequency) + offset);\n  value += weight * signal;\n  weight *= signal;\n  pwr *= pwHL;\n  point *= lacunarity;\n  if(i == int(octaves) - 1)\n   break;\n  \n }\n rmd = octaves - floor(octaves);\n if(rmd != 0.0)\n  value += (rmd * snoise(point * frequency) * pwr);\n return value;\n}\nfloat fBmA(vec2 point, float H, float lacunarity, float frequency, float octaves) {\n float value = 0.0;\n float remainder = 0.0;\n float pwrHL = pow(abs(lacunarity), -H);\n float pwr = 1.0;\n for(int i = 0; i < 65535; i++) {\n  value += snoise(point * frequency) * pwr;\n  pwr *= pwrHL;\n  point *= lacunarity;\n  if(i == int(octaves) - 1)\n   break;\n  \n }\n remainder = octaves - floor(octaves);\n if(remainder != 0.0) {\n  value += remainder * snoise(point * frequency) * pwr;\n }\n return value;\n}\nfloat heteroTerrainA(vec2 point, float H, float lacunarity, float frequency, float octaves, float offset) {\n float value, increment, remainder;\n float pwrHL = pow(abs(lacunarity), -H);\n float pwr = pwrHL;\n value = offset + snoise(point * frequency);\n point *= lacunarity;\n for(int i = 1; i < 65535; i++) {\n  increment = (snoise(point * frequency) + offset) * pwr * value;\n  value += increment;\n  point *= lacunarity;\n  if(i == int(octaves))\n   break;\n  \n }\n remainder = mod(octaves, floor(octaves));\n if(remainder != 0.0) {\n  increment = (snoise(point * frequency) + offset) * pwr * value;\n  value += remainder * increment;\n }\n return value;\n}\nfloat multifractalA(vec2 point, float H, float lacunarity, float frequency, float octaves, float offset) {\n float value = 1.0;\n float rmd = 0.0;\n float pwHL = pow(abs(lacunarity), -H);\n float pwr = 1.0;\n for(int i = 0; i < 65535; i++) {\n  value *= pwr * snoise(point * frequency) + offset;\n  pwr *= pwHL;\n  point *= lacunarity;\n  if(i == int(octaves) - 1)\n   break;\n  \n }\n rmd = octaves - floor(octaves);\n if(rmd != 0.0)\n  value += (rmd * snoise(point * frequency) * pwr);\n return value;\n}\nvec3 HSV(float h, float s, float v) {\n vec3 c = vec3(h, s, v);\n vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\n vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\n return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\n}\nfloat Xor(vec2 pos) {\n vec4 o = vec4(0.);\n for(float i = 0.; i < 8.; ++i) {\n  o.xy = ceil(mod(pos /= 2., 2.));\n  o -= o - o.z - abs(o.y - o.x) * i / 32.;\n }\n return o.x;\n}\nfloat X(vec2 pos) {\n return pos.x;\n}\nfloat Y(vec2 pos) {\n return pos.y;\n}\nfloat Length(vec2 pos) {\n return length(pos);\n}\nfloat Abs(float val) {\n return abs(val);\n}\nvec3 Abs(vec3 val) {\n return abs(val);\n}\nfloat Posterize(float val, float steps, float gamma) {\n return pow(abs(floor(pow(abs(val), gamma) * steps) / steps), 1.0 / gamma);\n}\nvec3 Posterize(vec3 val, float steps, float gamma) {\n return pow(abs(floor(pow(abs(val), vec3(gamma)) * steps) / steps), vec3(1.0 / gamma));\n}\nfloat Bias(float val, float bias) {\n return (val / ((((1. / bias) - 2.) * (1. - val)) + 1.));\n}\nvec3 Bias(vec3 val, float bias) {\n return (val / ((((1. / bias) - 2.) * (1. - val)) + 1.));\n}\nfloat bias_0(float val, float bias) {\n return (val / ((((1. / bias) - 2.) * (1. - val)) + 1.));\n}\nfloat Gain(float val, float gain) {\n if(val < 0.5) {\n  return bias_0(val * 2., gain) / 2.;\n } else {\n  return bias_0(val * 2. - 1., 1. - gain) / 2. + 0.5;\n }\n}\nvec3 Gain(vec3 val, float gain) {\n return vec3(Gain(val.x, gain), Gain(val.y, gain), Gain(val.z, gain));\n}\nfloat Normalize(float val) {\n return (val + 1.) / 2.;\n}\nvec3 Normalize(vec3 val) {\n return (val + 1.) / 2.;\n}\nfloat Denormalize(float val) {\n return (val - .5) * 2.;\n}\nvec3 Denormalize(vec3 val) {\n return (val - .5) * 2.;\n}\nfloat Invert(float val) {\n return 1. - val;\n}\nvec3 Invert(vec3 val) {\n return 1. - val;\n}\nfloat Clamp(float val, float from, float to) {\n return clamp(val, from, to);\n}\nvec3 Clamp(vec3 val, float from, float to) {\n return clamp(val, from, to);\n}\nfloat Sin(float val) {\n return sin(val);\n}\nvec3 Sin(vec3 val) {\n return sin(val);\n}\nfloat Cos(float val) {\n return cos(val);\n}\nvec3 Cos(vec3 val) {\n return cos(val);\n}\nfloat Add(float val, float value) {\n return val + value;\n}\nvec3 Add(vec3 val, float value) {\n return val + value;\n}\nfloat Multiply(float val, float value) {\n return val * value;\n}\nvec3 Multiply(vec3 val, float value) {\n return val * value;\n}\nfloat SmoothStep(float val, float edge0, float edge1) {\n return smoothstep(edge0, edge1, val);\n}\nvec3 SmoothStep(vec3 val, float edge0, float edge1) {\n return smoothstep(edge0, edge1, val);\n}\nvec3 cosPalette(float t, vec3 a, vec3 b, vec3 c, vec3 d) {\n return a + b * cos(6.28318 * (c * t + d));\n}\nvec3 Tint(float val, vec3 color) {\n return val * color;\n}\nvec3 Tint(vec3 val, vec3 color) {\n return val * color;\n}\nfloat Grayscale(vec3 color) {\n return color.x * .2126 + color.y * .7152 + color.z * .0722;\n}";

function isObject(obj) {
    return obj instanceof Object && !(obj instanceof Array);
}

function each(obj, fnc) {
    if (isObject(obj)) {
        Object.keys(obj).forEach(function (key) {
            return fnc(key, obj[key]);
        });
    }
}

var blend = {
    BlendHardMix: 'blendHardMix',
    BlendVividLight: 'blendVividLight',
    BlendLinearLight: 'blendLinearLight',
    BlendPinLight: 'blendPinLight',
    BlendGlow: 'blendGlow',
    BlendHardLight: 'blendHardLight',
    BlendPhoenix: 'blendPhoenix',
    BlendOverlay: 'blendOverlay',
    BlendNormal: 'blendNormal',
    BlendNegation: 'blendNegation',
    BlendMultiply: 'blendMultiply',
    BlendReflect: 'blendReflect',
    BlendAverage: 'blendAverage',
    BlendLinearBurn: 'blendLinearBurn',
    BlendLighten: 'blendLighten',
    BlendScreen: 'blendScreen',
    BlendSoftLight: 'blendSoftLight',
    BlendSubtract: 'blendSubtract',
    BlendExclusion: 'blendExclusion',
    BlendDifference: 'blendDifference',
    BlendDarken: 'blendDarken',
    BlendColorDodge: 'blendColorDodge',
    BlendColorBurn: 'blendColorBurn',
    BlendAdd: 'blendAdd',
    BlendLinearDodge: 'blendLinearDodge'
};

// Object.keys(blend).sort().forEach((k, i) => blend[i] = k);

var POSITION = 'POSITION';
var VALUE = 'VALUE';
var COLOR = 'COLOR';


var POS = 'pos';

var Distort = {
    params: [['float', 'weight', 1, [-8, 8]], ['float', VALUE, 1, [-1, 1]]]
};

var Warp = {
    params: [['float', 'wx', 1, [-8, 8]], ['float', 'wy', 1, [-8, 8]], ['float', VALUE, 1, [-1, 1]], ['float', VALUE, 1, [-1, 1]]]
};

var Rotate = {
    params: [['float', 'angle', 0, [0, 360]]]
};

var Scale = {
    params: [['vec2', 'scale', [1, 1], [-16, 16]]]
};

var Translate = {
    params: [['vec2', 'offset', [0, 0], [-128, 128]]]
};

var Tile = {
    params: [['vec2', 'size', [0, 0], [2, 16]], ['float', 'mirrorX', 0, [0, 1]], ['float', 'mirrorY', 0, [0, 1]]]
};

var Pixelate = {
    params: [['float', 'steps', 8, [2, 128]]]
};

var Twirl = {
    params: [['float', 'weight', 8, [-16, 16]], ['float', 'size', 2, [0, 16]], ['vec2', 'offset', [0, 0], [0, 32]]]
};

var transform = Object.freeze({
	Distort: Distort,
	Warp: Warp,
	Rotate: Rotate,
	Scale: Scale,
	Translate: Translate,
	Tile: Tile,
	Pixelate: Pixelate,
	Twirl: Twirl
});

var Normalize = {};
var Denormalize = {};
var Invert = {};
var Abs = {};
var Cos = {};
var Sin = {};

var Add = {
    params: [['float', 'value', 0.5, [-2, 2]]]
};

var Min = {
    glsl: 'min',
    params: [['float', 'value', 0.5, [-2, 2]]]
};

var Max = {
    glsl: 'max',
    params: [['float', 'value', 0.5, [-2, 2]]]
};

var Multiply = {
    params: [['float', 'value', 0.5, [-2, 2]]]
};

var SmoothStep = {
    params: [['float', 'edge0', 0, [-2, 2]], ['float', 'edge1', 1, [-2, 2]]]
};

var Posterize = {
    params: [['float', 'steps', 8, [2, 32]], ['float', 'gamma', 0.6, [0, 2]]]
};

var Bias = {
    params: [['float', 'bias', 0.25, [0, 1]]]
};

var Gain = {
    params: [['float', 'gain', 0.25, [0, 1]]]
};

var Clamp = {
    params: [['float', 'from', 0, [-1, 1]], ['float', 'to', 1, [-1, 1]]]
};

var modify = Object.freeze({
	Normalize: Normalize,
	Denormalize: Denormalize,
	Invert: Invert,
	Abs: Abs,
	Cos: Cos,
	Sin: Sin,
	Add: Add,
	Min: Min,
	Max: Max,
	Multiply: Multiply,
	SmoothStep: SmoothStep,
	Posterize: Posterize,
	Bias: Bias,
	Gain: Gain,
	Clamp: Clamp
});

var X = {};
var Y = {};
var Length = {};
var SinX = {
    scale: 16
};
var SinY = {
    scale: 16
};
var SinXY = {
    scale: 16
};

var Xor = {
    scale: 256
};

// export const Color = {
//     glsl: 'vec3',
//     color: true,
//     position: false,
//     params: ['vec3', 'color', [1, 1, 1]]
// };

var Value = {
    glsl: 'float',
    position: false,
    params: [['float', 'value', 0.5, [-1, 1]]]
};

var SimplexNoise = {
    glsl: 'snoise',
    normalized: false
};

var Checker = {
    glsl: 'checker',
    params: [['float', 'repeats', 2, [1, 128]]]
};

var PerlinNoise = {
    glsl: 'cnoise',
    normalized: false,
    scale: 4
};

var PeriodicNoise = {
    glsl: 'pnoise',
    params: [['vec2', 'size', [16, 16], [1, 128]]],
    normalized: false,
    scale: 4
};

var WorleyF1 = {
    params: [['float', 'jitter', 1, [0, 1]], ['float', 'manhattanDistance', 0, [0, 1]]],
    scale: 2,
    examples: [[0.5, 0], [0, 0], [1, 1]]
};

var WorleyF2 = {
    params: [['float', 'jitter', 1, [0, 1]], ['float', 'manhattanDistance', 0, [0, 1]]],
    scale: 2,
    examples: [[0.5, 0], [0, 0], [1, 1]]
};

var WorleyF1F2 = {
    params: [['float', 'jitter', 1, [0, 1]], ['float', 'manhattanDistance', 0, [0, 1]]],
    scale: 2,
    examples: [[0.5, 0], [0, 0], [1, 1], [0, 1]]
};

var WorleyF2F1 = {
    params: [['float', 'jitter', 1, [0, 1]], ['float', 'manhattanDistance', 0, [0, 1]]],
    scale: 2,
    examples: [[0.5, 0], [0, 0], [1, 1]]
};

var WorleyCrackle = {
    params: [['float', 'jitter', 1, [0, 1]], ['float', 'manhattanDistance', 0, [0, 1]], ['float', 'multiply', 8, [1, 32]], ['float', 'divide', 2, [1, 32]], ['float', 'offset', 0.5, [0, 8]]],
    scale: 2,
    examples: [[0.5, 0, 8, 2, 0.5], [0, 0, 8, 2, 0.5], [1, 1, 8, 2, 0.5], [1, 0, 32, 2, 0.5], [1, 0, 32, 1, 2], [1, 0, 32, 1, 4], [1, 1, 32, 1, 4], [0.25, 1, 32, 1, 4]]
};

var RidgedMultiFractal = {
    glsl: 'ridgedMultiFractal',
    params: [['float', 'H', 0.25, [0, 8]], ['float', 'lacunarity', 2, [0, 8]], ['float', 'frequency', 2, [0, 8]], ['float', 'octaves', 6, [1, 12]], ['float', 'offset', .9, [-2, 2]], ['float', 'gain', 1.5, [-8, 8]]],
    scale: 1,
    examples: [[0.25, 4, 2, 2, 1, 6], [0.25, 3, 1, 6, 1, 1]]
};

var HybridMultiFractal = {
    glsl: 'hybridMultiFractal',
    params: [['float', 'H', 0.25, [0, 8]], ['float', 'lacunarity', 3, [0, 8]], ['float', 'frequency', 2, [0, 8]], ['float', 'octaves', 6, [1, 12]], ['float', 'offset', .05, [-2, 2]]],
    normalized: false,
    scale: 1,
    examples: [[0.1, 1.5, 3, 6, 0]]
};

var HeteroTerrain = {
    glsl: 'heteroTerrainA',
    params: [['float', 'H', 0.5, [0.01, 3]], ['float', 'lacunarity', 2, [1, 3]], ['float', 'frequency', 2, [1, 8]], ['float', 'octaves', 6, [1, 8]], ['float', 'offset', .05, [-1, 1]]],
    normalized: false,
    scale: 1,
    examples: [[2, 1.5, 3, 2, 0]]
};

var MultiFractal = {
    glsl: 'multifractalA',
    params: [['float', 'H', 0.5, [0.01, 2]], ['float', 'lacunarity', 2, [1, 2]], ['float', 'frequency', 2, [1, 8]], ['float', 'octaves', 6, [1, 8]], ['float', 'offset', .8, [-1, 1]], ['float', 'noise', null, null, 'snoise', [['vec2', POS]]]],
    scale: 1,
    examples: [[1.5, 1.5, 4, 6, 0.85]]
};

var FBm = {
    glsl: 'fBmA',
    params: [['float', 'H', 0.5, [0, 8]], ['float', 'lacunarity', 2, [0, 8]], ['float', 'frequency', 2, [0, 8]], ['float', 'octaves', 6, [1, 12]]],
    normalized: false,
    scale: 1,
    examples: [[0.85, 2.5, 4, 6]]
};

var RGB = {
    glsl: 'vec3',
    color: true,
    position: false,
    params: [['float', VALUE, 1, [0, 1]], ['float', VALUE, 1, [0, 1]], ['float', VALUE, 1, [0, 1]]]
};

var HSV = {
    glsl: 'HSV',
    color: true,
    position: false,
    params: [['float', VALUE, 1, [0, 1]], ['float', VALUE, 1, [0, 1]], ['float', VALUE, 1, [0, 1]]]
};

var generator = Object.freeze({
	X: X,
	Y: Y,
	Length: Length,
	SinX: SinX,
	SinY: SinY,
	SinXY: SinXY,
	Xor: Xor,
	Value: Value,
	SimplexNoise: SimplexNoise,
	Checker: Checker,
	PerlinNoise: PerlinNoise,
	PeriodicNoise: PeriodicNoise,
	WorleyF1: WorleyF1,
	WorleyF2: WorleyF2,
	WorleyF1F2: WorleyF1F2,
	WorleyF2F1: WorleyF2F1,
	WorleyCrackle: WorleyCrackle,
	RidgedMultiFractal: RidgedMultiFractal,
	HybridMultiFractal: HybridMultiFractal,
	HeteroTerrain: HeteroTerrain,
	MultiFractal: MultiFractal,
	FBm: FBm,
	RGB: RGB,
	HSV: HSV
});

// http://iquilezles.org/www/articles/palettes/palettes.htm
var CosPalette = {
    glsl: 'cosPalette',
    params: [['vec3', 'a', [0.5, 0.5, 0.5], [0, 1]], ['vec3', 'b', [0.5, 0.5, 0.5], [0, 1]], ['vec3', 'c', [1.0, 1.0, 1.0], [0, 1]], ['vec3', 'd', [0.0, 0.33, 0.67], [0, 1]]],
    examples: [[[0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [1.0, 1.0, 1.0], [0.0, 0.33, 0.67]], [[0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [1.0, 1.0, 1.0], [0.0, 0.10, 0.20]], [[0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [1.0, 1.0, 1.0], [0.3, 0.20, 0.20]], [[0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [1.0, 1.0, 0.5], [0.8, 0.90, 0.30]], [[0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [1.0, 0.7, 0.4], [0.0, 0.15, 0.20]], [[0.5, 0.5, 0.5], [0.5, 0.5, 0.5], [2.0, 1.0, 0.0], [0.5, 0.20, 0.25]], [[0.8, 0.5, 0.4], [0.2, 0.4, 0.2], [2.0, 1.0, 1.0], [0.0, 0.25, 0.25]]]
};

var Tint = {
    color: true,
    params: [['vec3', 'color', [0.5, 0.5, 0.5], [0, 1]]]
};

var colorize = Object.freeze({
	CosPalette: CosPalette,
	Tint: Tint
});

var Grayscale = {};

var desaturate = Object.freeze({
	Grayscale: Grayscale
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};























































var toConsumableArray = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  } else {
    return Array.from(arr);
  }
};

// import * as _list from './list';
var list = {};

var features = {
    blend: blend,
    transform: transform,
    modify: modify,
    generator: generator,
    colorize: colorize,
    desaturate: desaturate
};



function expand() {
    each(features, function (k) {
        each(features[k], function (m) {
            // console.log(features[k][m]);
            var f = features[k][m];

            if (typeof f === 'string') {
                features[k][m] = f = {
                    glsl: f
                };
            }

            expandFeature(f, k, m);
        });
    });
}

var glsls = [];

function expandFeature(f, k, m) {
    f.type = k;
    f.name = m;
    f.glsl = f.glsl || m;
    f.params = f.params || [];
    f.variants = variants[k](f);

    glsls.push(f.glsl);
}

var variants = {
    blend: function blend$$1() {
        return [{
            output: 'float',
            input: [['float', VALUE, 0.5, [0, 1]], ['float', VALUE, 0.5, [0, 1]]]
        }, {
            output: 'float',
            input: [['float', VALUE, 0.5, [0, 1]], ['float', VALUE, 0.5, [0, 1]], ['float', 'opacity', 0.5, [0, 1]]]
        }, {
            output: 'vec3',
            input: [['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]], ['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]]]
        }, {
            output: 'vec3',
            input: [['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]], ['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]], ['float', 'opacity', 0.5, [0, 1]]]
        }];
    },
    transform: function transform(feature) {
        return [{
            output: 'vec2',
            input: [['vec2', POSITION]].concat(toConsumableArray(feature.params))
        }];
    },
    modify: function modify(feature) {
        return [{
            output: 'float',
            input: [['float', VALUE, 0.5, [-1, 1]]].concat(toConsumableArray(feature.params))
        }, {
            output: 'vec3',
            input: [['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]]].concat(toConsumableArray(feature.params))
        }];
    },
    generator: function generator(feature) {
        return [{
            output: feature.color ? 'vec3' : 'float',
            input: feature.position === false ? feature.params : [['vec2', POSITION]].concat(toConsumableArray(feature.params))
        }];
    },
    colorize: function colorize(feature) {
        return [{
            output: 'vec3',
            input: [['float', VALUE, 0.5, [0, 1]]].concat(toConsumableArray(feature.params))
        }].concat(toConsumableArray(feature.color ? [{
            output: 'vec3',
            input: [['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]]].concat(toConsumableArray(feature.params))
        }] : []));
    },
    desaturate: function desaturate(feature) {
        return [{
            output: 'float',
            input: [['vec3', COLOR, [0.5, 0.5, 0.5], [0, 1]]].concat(toConsumableArray(feature.params))
        }];
    }
};

function getAll() {
    var all = [];
    each(features, function (k) {
        return each(features[k], function (m) {
            list[m] = features[k][m];
            features[k][m].variants.forEach(function (v) {
                var f = features[k][m];
                v.type = f.type;
                v.name = f.name;
                v.glsl = f.glsl;
                v.variable = hasVariableInput(v);
                v.position = hasPositionInput(v);
                all.push(v);
            });
        });
    });
    return all;
}



expand();
var all = getAll();



function hasVariableInput(v) {
    var arr = v.input || [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i][1] === VALUE || arr[i][1] === COLOR) {
            return true;
        }
    }

    return false;
}

function hasPositionInput(v) {
    var arr = v.input || [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i][1] === POSITION) {
            return true;
        }
    }

    return false;
}

var GLSL = gltg;

function getFragments() {
    var lines = gltg.split('\n');

    var ids = [];
    var match = null;

    lines.forEach(function (line, i) {
        if (line[0] === '}') {
            var p = ids[ids.length - 1];
            p.last = i;
            p.lines = lines.slice(p.first, p.last + 1);
        } else if (line[0] === ' ' || line[0] === '#') {} else if (match = /^[^ ]+ ([^(]+)/.exec(line)) {
            ids.push({
                name: match[1],
                first: i,
                main: glsls.indexOf(match[1]) >= 0
            });
        }
    });

    var names = {};
    ids.forEach(function (ids) {
        return names[ids.name] = true;
    });
    ids.forEach(function (id) {
        return id.deps = findCalls(id.lines, id.name, names);
    });

    var dupl = null;

    while (dupl = findDuplicate(ids)) {
        removeDuplicate(dupl, ids);
    }

    var ret = {};

    ids.forEach(function (id) {
        ret[id.name] = ret[id.name] || { lines: [] };
        ret[id.name].lines = [].concat(toConsumableArray(ret[id.name].lines), toConsumableArray(id.lines));

        if (id.deps.length) {
            ret[id.name].deps = ret[id.name].deps || [];
            id.deps.forEach(function (d) {
                if (ret[id.name].deps.indexOf(d) === -1) {
                    ret[id.name].deps.push(d);
                }
            });
        }
    });

    return ret;
}

function removeDuplicate(dupls, ids) {
    if (dupls[0].main) {
        dupls.reverse();
    }

    var keep = dupls[1];
    var remove = dupls[0];

    ids.splice(ids.indexOf(remove), 1);

    ids.forEach(function (id) {
        var ind = void 0;

        if ((ind = id.deps.indexOf(remove.name)) >= 0) {
            id.deps[ind] = keep.name;

            id.lines.forEach(function (line, i) {
                id.lines[i] = line.replace(new RegExp(remove.name + '\\(', 'g'), keep.name + '(');
            });
        }
    });
}

function findCalls(lines, name, names) {
    var rx = /([a-z0-9_]+)\(/gi;
    var matches = void 0;
    var results = {};

    while (matches = rx.exec(lines.join('\n'))) {
        if (matches[1] !== name && names[matches[1]]) {
            results[matches[1]] = true;
        }
    }

    return Object.keys(results);
}

function findDuplicate(ids) {
    ids.forEach(function (id) {
        id.simple = simpleFunction(id.lines);
    });

    var pair = null;

    ids.forEach(function (id1, i) {
        if (pair !== null) {
            return;
        }

        ids.forEach(function (id2, j) {
            if (i === j || pair !== null) {
                return;
            }

            if (id1.simple === id2.simple) {
                if (!(id1.main && id2.main)) {
                    pair = [id1, id2];
                }
            }
        });
    });

    ids.forEach(function (id) {
        delete id.simple;
    });

    return pair;
}

function simpleFunction(lines) {
    var first = lines[0].replace(/([a-z0-9]+) [^(]+/i, '$1 function');
    return [first].concat(toConsumableArray(lines.slice(1))).join('\n');
}

if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined') {
    console.log(JSON.stringify(getFragments(), null, 2));
}

exports.GLSL = GLSL;
exports.getFragments = getFragments;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=glt-extractor.js.map
