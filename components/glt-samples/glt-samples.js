!function(a,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(a.glt=a.glt||{})}(this,function(a){"use strict";var e=[{title:"Marble",data:[["SinXY"],["Gain",.19],["Warp",8,2.2,{data:[["MultiFractal",1.6,2,3,5.28,.8],["Scale",[-2.4,1.7]]]},{data:[["MultiFractal",1.8,2,2.7,60.8],["Translate",[10,-.4]],["Scale",[-2.4,1.7]]]}],["Translate",[1,1]],["Scale",[66,.57]],["CosPalette",[.5,.5,.5],[.38,.52,.59],[.36,.33,.27],[.56,.57,.69]]]},{title:"Tiles #1",data:[["SinXY"],["Gain"],["Warp",1,1,{data:[["MultiFractal"],["Scale",[6,4]]]},{data:[["MultiFractal"],["Scale",[6,4]],["Translate",[24,24]]]}],["Translate",[1,1]],["Scale",[16,16]],["CosPalette",[.5,.5,.5],[.7,.8,.2],[.23,.17,.28],[.71,.69,.33]]]},{title:"Tiles #2",data:[["SinXY"],["Gain"],["Warp",1,1,{data:[["MultiFractal"],["Scale",[6,4]]]},{data:[["MultiFractal"],["Scale",[6,4]],["Translate",[24,24]]]}],["Translate",[1.5,1.5]],["Scale",[24,24]]]},{title:"Abstract #1",data:[["SinXY"],["Warp",2.2,1,{data:[["MultiFractal"],["Scale",[10,-4.2]]]},{data:[["MultiFractal"],["Translate",[24,24]],["Scale",[-2.4,1.7]]]}],["Translate",[1,1]],["Scale",[66,.57]],["Gain",.19],["CosPalette",[.5,.5,.5],[.38,.52,.59],[.36,.33,.27],[.56,.57,.69]]]},{title:"Abstract #2",data:[["FBm",.48,5.37,3.12,6.51],["CosPalette",[.97,.03,.58],[.7,.85,.28],[.4,.9,.65],[.15,.84,.56]]]},{title:"Abstract #3",data:[["Subtract",{data:[["WorleyF1",.52,1],["Scale",[-2.09,-37.81]],["Rotate",36.21]]},{data:[["SinY"],["Scale",[-126.41,37.04]]]},.72],["Tint",[.77,.33,.05]],["Overlay",.9,"RidgedMultiFractal",3.58,.7,1.24,4.96,-1.97,2.25],["Tint",[.79,.92,.76]],["Bias",.9],["Rotate",24.62],["Tile",[125.95,49.88],0,0]]},{title:"Waves",data:[["SimplexNoise"],["Scale",[1,8]],["Normalize"],["Distort",.04,{data:[["SimplexNoise"]]}],["Scale",[.5,.8]],["CosPalette",[.5,.5,.5],[.5,.5,.5],[2,1,0],[.5,.2,.25]]]},{title:"Electricity",data:[["RidgedMultiFractal",.73,2.37,1.76,5.84,1.2,1.73],["Tint",[.08,.64,.92]]]},{title:"Ink",data:[["RidgedMultiFractal",{data:[["Y"],["Abs"]]},1.84,.6,5.98,1.05,2.55],["Rotate",235],["Scale",[1.1,1.1]]]},{title:"Palette #1",data:[["X"],["Normalize"],["CosPalette",[.84,.8,.66],[.13,.24,.25],[.44,.5,.59],[.8,.13,.23]]]}],t=[{title:"Minimal",data:[["PerlinNoise"]]},{title:"Modified",data:[["PerlinNoise"],["Abs"],["Scale",[4,2]]]},{title:"Normalized",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]]]},{title:"Green",data:[["PerlinNoise"],["Normalize"],["Scale",[12,12]],["Tint",[0,1,0]]]},{title:"Blend",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]],["Tint",[1,0,0]],["Add","PerlinNoise"],["Normalize"],["Scale",[12,12]],["Tint",[0,1,0]]]},{title:"1.0 blend",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]],["Tint",[1,0,0]],["Add",1,"PerlinNoise"],["Normalize"],["Scale",[12,12]],["Tint",[0,1,0]]]},{title:"0.75 blend",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]],["Tint",[1,0,0]],["Add",.75,"PerlinNoise"],["Normalize"],["Scale",[12,12]],["Tint",[0,1,0]]]},{title:"0.5 blend",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]],["Tint",[1,0,0]],["Add",.5,"PerlinNoise"],["Normalize"],["Scale",[12,12]],["Tint",[0,1,0]]]},{title:"0.25 blend",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]],["Tint",[1,0,0]],["Add",.25,"PerlinNoise"],["Normalize"],["Scale",[12,12]],["Tint",[0,1,0]]]},{title:"Red",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]],["Tint",[1,0,0]]]},{title:"X",data:[["X"]]},{title:"X normalized",data:[["X"],["Normalize"]]},{title:"Palette",data:[["X"],["Normalize"],["CosPalette",[.8,.4,0],[.5,.9,0],[.9,.8,.7],[0,.1,.3]]]},{title:"Noise",data:[["PerlinNoise"],["Abs"],["Scale",[4,4]]]},{title:"Noise + palette",data:[["PerlinNoise"],["Abs"],["CosPalette",[.8,.4,0],[.5,.9,0],[.9,.8,.7],[0,.1,.3]],["Scale",[4,4]]]},{title:"Checker",data:[["Checker"]]},{title:"Rotate",data:[["Checker"],["Rotate",45]]},{title:"Translate",data:[["Checker"],["Translate",[.25,.25]]]},{title:"Translate + rotate",data:[["Checker"],["Translate",[.25,.25]],["Rotate",45]]},{title:"Rotate + translate",data:[["Checker"],["Rotate",45],["Translate",[.25,.25]]]},{title:"SinX",data:[["SinX"],["Scale",[16,16]]]},{title:"Distort",data:[["SinX"],["Distort",8,{data:[["SinY"],["Scale",[16,16]]]}],["Scale",[16,16]]]},{title:"SinXY",data:[["SinXY"],["Scale",[10,10]]]},{title:"SinXY + sin",data:[["SinXY"],["Denormalize"],["MultiplyValue",24],["Sin"],["Normalize"],["Scale",[10,10]]]},{title:"SinXY + abs",data:[["SinXY"],["Denormalize"],["Abs"],["Denormalize"],["Scale",[10,10]]]},{title:"Abs + abs",data:[["SinXY"],["Denormalize"],["Abs"],["Denormalize"],["Abs"],["Scale",[10,10]]]},{title:"WorleyF1",data:[["WorleyF1"],["Scale",[8,8]]]},{title:"Invert + bias",data:[["WorleyF1"],["Invert"],["Bias"],["Scale",[8,8]]]},{title:"Invert + posterize",data:[["WorleyF1"],["Invert"],["Posterize"],["Scale",[2,2]]]},{title:"Distort by worley",data:[["WorleyF1"],["Distort",8,{data:[["WorleyF1"],["Scale",[2,2]]]}],["Invert"],["Bias",.6],["Scale",[4,4]]]},{title:"Distort X by posterized Y",data:[["SinX"],["Distort",8,{data:[["SinY"],["Scale",[24,24]],["Posterize",2,.9]]}],["Scale",[16,16]]]},{title:"SinX + twirl",data:[["SinX"],["Twirl"]]},{title:"Worley + twirl",data:[["WorleyF1"],["Invert"],["Twirl",8,24]]},{title:"Colorized",data:[["SinXY"],["CosPalette"],["Scale",[16,16]]]},{title:"Desaturated",data:[["SinXY"],["CosPalette"],["Grayscale"],["Scale",[16,16]]]},{title:"RGB",data:[["RGB",{data:[["SimplexNoise"],["Normalize"]]},{data:[["SimplexNoise"],["Normalize"],["Translate",[.2,.2]]]},{data:[["SimplexNoise"],["Normalize"],["Translate",[-.2,.2]]]}],["Gain",.4],["Scale",[2,2]]]},{title:"RGB",data:[["RGB",{data:[["WorleyF1"],["Invert"]]},{data:[["WorleyF1"],["Invert"],["Translate",[.14,.2]]]},{data:[["WorleyF1"],["Invert"],["Translate",[-.14,.2]]]}],["Gain",.5],["Scale",[2,2]]]},{title:"RGB",data:[["RGB",{data:[["WorleyF1"],["Invert"]]},{data:[["WorleyF1"],["Invert"],["Translate",[.28,.4]]]},{data:[["WorleyF1"],["Invert"],["Translate",[-.28,.4]]]}],["Gain",.1],["Scale",[2,2]]]},{title:"HSV",data:[["HSV",{data:[["SimplexNoise"],["Normalize"],["Scale",[.1,.1]]]},{data:[["WorleyF1"],["Invert"],["AddValue",-.32],["Gain",.02]]},{data:[["WorleyF1"],["Invert"],["AddValue",-.24],["Gain",.02]]}],["Scale",[2.5,2.5]]]}];a.samplesDemo=e,a.samplesTest=t,Object.defineProperty(a,"__esModule",{value:!0})});
//# sourceMappingURL=glt-samples.js.map
