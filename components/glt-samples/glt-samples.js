!function(a,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(a.glt=a.glt||{})}(this,function(a){"use strict";var e=[{title:"Marble",data:{name:"CosPalette",params:[{name:"Gain",params:[{name:"SinXY",params:[{name:"Warp",params:[{name:"Translate",params:[{name:"Scale",params:["pos",[66,.57]]},[1,1]]},8,2.2,{name:"MultiFractal",params:[{name:"Scale",params:["pos",[-2.4,1.7]]},1.6,2,3,5.28,.8]},{name:"MultiFractal",params:[{name:"Translate",params:[{name:"Scale",params:["pos",[-2.4,1.7]]},[10,-.4]]},1.8,2,2.7,60.8]}]}]},.19]},[.5,.5,.5],[.38,.52,.59],[.36,.33,.27],[.56,.57,.69]]}},{title:"Tiles #1",data:{name:"CosPalette",params:[{name:"Gain",params:[{name:"SinXY",params:[{name:"Warp",params:[{name:"Translate",params:[{name:"Scale",params:["pos",[16,16]]},[1,1]]},1,1,{name:"MultiFractal",params:[{name:"Scale",params:["pos",[6,4]]}]},{name:"MultiFractal",params:[{name:"Translate",params:[{name:"Scale",params:["pos",[6,4]]},[24,24]]}]}]}]}]},[.5,.5,.5],[.7,.8,.2],[.23,.17,.28],[.71,.69,.33]]}},{title:"Tiles #2",data:{name:"Gain",params:[{name:"SinXY",params:[{name:"Warp",params:[{name:"Scale",params:["pos",[24,24]]},1,1,{name:"MultiFractal",params:[{name:"Scale",params:["pos",[6,4]]}]},{name:"MultiFractal",params:[{name:"Translate",params:[{name:"Scale",params:["pos",[6,4]]},[24,24]]}]}]}]}]}},{title:"Abstract #1",data:{name:"CosPalette",params:[{name:"Gain",params:[{name:"SinXY",params:[{name:"Warp",params:[{name:"Translate",params:[{name:"Scale",params:["pos",[66,.57]]},[1,1]]},2.2,1,{name:"MultiFractal",params:[{name:"Scale",params:["pos",[10,-4.2]]}]},{name:"MultiFractal",params:[{name:"Translate",params:[{name:"Scale",params:["pos",[-2.4,1.7]]},[24,24]]}]}]}]},.19]},[.5,.5,.5],[.38,.52,.59],[.36,.33,.27],[.56,.57,.69]]}},{title:"Abstract #2",data:{name:"CosPalette",params:[{name:"FBm",params:["pos",.48600604642369305,5.378574041961265,3.1269661957819395,6.518627238239195]},[.9708596626586921,.03334491694885022,.5885716062711506],[.7073760294866831,.8557790255512261,.2868133909906514],[.4081457319422255,.9060967987543298,.6505730905759937],[.15582518680320834,.8478600043606876,.5627905253788141]]}},{title:"Abstract #3",data:{name:"Overlay",params:[{name:"Tint",params:[{name:"Subtract",params:[{name:"WorleyF1",params:[{name:"Scale",params:[{name:"Rotate",params:["pos",36.21095008053565]},[-2.0948265109922772,-37.81201327085154]]},.523579765845013,1]},{name:"SinY",params:[{name:"Scale",params:["pos",[-126.41516747630999,37.045122693223504]]}]},.7259483539538334]},[.7772899488998284,.3313794463427009,.05962747238473631]]},{name:"Bias",params:[{name:"Tint",params:[{name:"RidgedMultiFractal",params:[{name:"Rotate",params:[{name:"Tile",params:["pos",[125.95145471767661,49.88036409361371],0,0]},24.620838320447042]},3.5868140453316357,.708152967244926,1.2457652380054594,4.965205966511647,-1.9723239220651898,2.25234222895115]},[.7909236130408301,.9263595649864891,.7673078018569728]]},.9012769984546865]},.9038849182677489]}},{title:"Waves",data:{name:"CosPalette",params:[{name:"Normalize",params:[{name:"SimplexNoise",params:[{name:"Scale",params:[{name:"Distort",params:[{name:"Scale",params:["pos",[.5,.8]]},.04,{name:"SimplexNoise",params:["pos"]}]},[1,8]]}]}]},[.5,.5,.5],[.5,.5,.5],[2,1,0],[.5,.2,.25]]}},{title:"Electricity",data:{name:"Tint",params:[{name:"RidgedMultiFractal",params:[{name:"Rotate",params:["pos",0]},.7363809680298814,2.3727714892967127,1.765322395475151,5.844998781061181,1.2007420437991387,1.7389540087979503]},[.08236448888339454,.6477355328943357,.9209416191295376]]}},{title:"Ink",data:{name:"RidgedMultiFractal",params:[{name:"Rotate",params:[{name:"Scale",params:["pos",[1.1,1.1]]},235]},{name:"Abs",params:[{name:"Y",params:["pos"]}]},1.846811252091765,.6,5.984108037597394,1.0590850598962325,2.5599191115014035]}},{title:"Pattern",data:{name:"Average",params:[{name:"CosPalette",params:[{name:"PeriodicNoise",params:[{name:"Tile",params:[{name:"Rotate",params:["pos",154]},[4,6.5],1,1]},[124.87273484200355,95.90879848826582]]},[.36,.19,.41],[.93,.92,.5],[.46,.53,.18],[.07,.12,.45]]},{name:"Posterize",params:[{name:"ColorBurn",params:[{name:"AddValue",params:[[.38,.54,.54],-1]},{name:"Max",params:[[.09,.12,.51],.41]},.13]},4.41,1.56]},.28]}}],t=[{title:"Minimal",data:[["PerlinNoise"]]},{title:"Modified",data:[["PerlinNoise"],["Abs"],["Scale",[4,2]]]},{title:"Normalized",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]]]},{title:"Green",data:[["PerlinNoise"],["Normalize"],["Scale",[12,12]],["Tint",[0,1,0]]]},{title:"Blend",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]],["Tint",[1,0,0]],["Add","PerlinNoise"],["Normalize"],["Scale",[12,12]],["Tint",[0,1,0]]]},{title:"1.0 blend",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]],["Tint",[1,0,0]],["Add",1,"PerlinNoise"],["Normalize"],["Scale",[12,12]],["Tint",[0,1,0]]]},{title:"0.75 blend",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]],["Tint",[1,0,0]],["Add",.75,"PerlinNoise"],["Normalize"],["Scale",[12,12]],["Tint",[0,1,0]]]},{title:"0.5 blend",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]],["Tint",[1,0,0]],["Add",.5,"PerlinNoise"],["Normalize"],["Scale",[12,12]],["Tint",[0,1,0]]]},{title:"0.25 blend",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]],["Tint",[1,0,0]],["Add",.25,"PerlinNoise"],["Normalize"],["Scale",[12,12]],["Tint",[0,1,0]]]},{title:"Red",data:[["PerlinNoise"],["Normalize"],["Scale",[4,4]],["Tint",[1,0,0]]]},{title:"X",data:[["X"]]},{title:"X normalized",data:[["X"],["Normalize"]]},{title:"Palette",data:[["X"],["Normalize"],["CosPalette",[.8,.4,0],[.5,.9,0],[.9,.8,.7],[0,.1,.3]]]},{title:"Noise",data:[["PerlinNoise"],["Abs"],["Scale",[4,4]]]},{title:"Noise + palette",data:[["PerlinNoise"],["Abs"],["CosPalette",[.8,.4,0],[.5,.9,0],[.9,.8,.7],[0,.1,.3]],["Scale",[4,4]]]},{title:"Checker",data:[["Checker"]]},{title:"Rotate",data:[["Checker"],["Rotate",45]]},{title:"Translate",data:[["Checker"],["Translate",[.25,.25]]]},{title:"Translate + rotate",data:[["Checker"],["Translate",[.25,.25]],["Rotate",45]]},{title:"Rotate + translate",data:[["Checker"],["Rotate",45],["Translate",[.25,.25]]]},{title:"SinX",data:[["SinX"],["Scale",[16,16]]]},{title:"Distort",data:[["SinX"],["Distort",8,{data:[["SinY"],["Scale",[16,16]]]}],["Scale",[16,16]]]},{title:"SinXY",data:[["SinXY"],["Scale",[10,10]]]},{title:"SinXY + sin",data:[["SinXY"],["Denormalize"],["MultiplyValue",24],["Sin"],["Normalize"],["Scale",[10,10]]]},{title:"SinXY + abs",data:[["SinXY"],["Denormalize"],["Abs"],["Denormalize"],["Scale",[10,10]]]},{title:"Abs + abs",data:[["SinXY"],["Denormalize"],["Abs"],["Denormalize"],["Abs"],["Scale",[10,10]]]},{title:"WorleyF1",data:[["WorleyF1"],["Scale",[8,8]]]},{title:"Invert + bias",data:[["WorleyF1"],["Invert"],["Bias"],["Scale",[8,8]]]},{title:"Invert + posterize",data:[["WorleyF1"],["Invert"],["Posterize"],["Scale",[2,2]]]},{title:"Distort by worley",data:[["WorleyF1"],["Distort",8,{data:[["WorleyF1"],["Scale",[2,2]]]}],["Invert"],["Bias",.6],["Scale",[4,4]]]},{title:"Distort X by posterized Y",data:[["SinX"],["Distort",8,{data:[["SinY"],["Scale",[24,24]],["Posterize",2,.9]]}],["Scale",[16,16]]]},{title:"SinX + twirl",data:[["SinX"],["Twirl"]]},{title:"Worley + twirl",data:[["WorleyF1"],["Invert"],["Twirl",8,24]]},{title:"Colorized",data:[["SinXY"],["CosPalette"],["Scale",[16,16]]]},{title:"Desaturated",data:[["SinXY"],["CosPalette"],["Grayscale"],["Scale",[16,16]]]},{title:"RGB",data:[["RGB",{data:[["SimplexNoise"],["Normalize"]]},{data:[["SimplexNoise"],["Normalize"],["Translate",[.2,.2]]]},{data:[["SimplexNoise"],["Normalize"],["Translate",[-.2,.2]]]}],["Gain",.4],["Scale",[2,2]]]},{title:"RGB",data:[["RGB",{data:[["WorleyF1"],["Invert"]]},{data:[["WorleyF1"],["Invert"],["Translate",[.14,.2]]]},{data:[["WorleyF1"],["Invert"],["Translate",[-.14,.2]]]}],["Gain",.5],["Scale",[2,2]]]},{title:"RGB",data:[["RGB",{data:[["WorleyF1"],["Invert"]]},{data:[["WorleyF1"],["Invert"],["Translate",[.28,.4]]]},{data:[["WorleyF1"],["Invert"],["Translate",[-.28,.4]]]}],["Gain",.1],["Scale",[2,2]]]}];a.samplesDemo=e,a.samplesTest=t,Object.defineProperty(a,"__esModule",{value:!0})});
//# sourceMappingURL=glt-samples.js.map
