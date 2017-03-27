webpackJsonp([1],[,function(t,e,a){"use strict";var i=a(5),n=a.n(i),s=function t(){n()(this,t),this.time=!1,this.code=!1,this.partials=!1,this.size=1,this.editSizes=[[256,256],[384,384],[512,512]],this.editSizeIndex=0,this.editSize=this.editSizes[this.editSizeIndex],this.thumbnailSizes=[[128,32],[128,128],[192,48],[192,192],[256,64],[256,256]],this.thumbnailSizeIndex=1,this.thumbnailSize=this.thumbnailSizes[this.thumbnailSizeIndex],this.histogramDark=!1,this.histogramCurve=!0};e.a=new s},,,,,,,,function(t,e,a){"use strict";var i=a(5),n=a.n(i),s=a(60),r=a.n(s),o=function(){function t(){n()(this,t),this.queue=[],this.pending=0,this.time=0}return r()(t,[{key:"next",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments[1];if(e&&(a>=0?(e.index=a,this.queue[0]&&(this.queue[0].index||0)>a?this.queue.unshift(e):(this.queue.push(e),this.queue.length>1&&a<(this.queue[this.queue.length-2].index||0)&&this.queue.sort(function(t,e){return(t.index||0)-(e.index||0)}))):this.queue.push(e)),this.queue.length&&!this.pending){var i=Date.now();this.pending++,this.queue.shift()(function(){t.time+=Date.now()-i,t.pending--,t.next()})}}}]),t}();e.a=new o},function(t,e,a){"use strict";var i=a(5),n=a.n(i),s=function t(){n()(this,t),this.canvas=window.document.createElement("canvas"),this.renderer=new glt.Renderer(this.canvas).size(128),this.arrayCount=0,this.arrayInt=null,this.arrayFloat=null,this.canvas.setAttribute("id","WEBGL_RENDERER")};e.a=new s},,,,,,,,function(t,e,a){a(93);var i=a(0)(a(48),a(110),"data-v-2f7c6166",null);t.exports=i.exports},,function(t,e,a){"use strict";var i=a(4),n=a(117),s=a(98),r=a.n(s),o=a(102),d=a.n(o),l=a(105),c=a.n(l),m=a(99),u=a.n(m),h=a(100),p=a.n(h);i.a.use(n.a),e.a=new n.a({routes:[{path:"/",name:"Home",component:r.a,meta:{menu:"edit"}},{path:"/edit/:json",name:"Edit",component:r.a,meta:{menu:"edit"}},{path:"/palettes",name:"Palettes",component:d.a,meta:{menu:"thumbnails",generator:"generatorRandomPalette",refresh:!0}},{path:"/features",name:"Features",component:d.a,meta:{menu:"thumbnails",list:"generatorGenerators"}},{path:"/samples",name:"Samples",component:d.a,meta:{menu:"thumbnails",list:"samplesDemo"}},{path:"/tests",name:"Tests",component:d.a,meta:{menu:"thumbnails",list:"samplesTest"}},{path:"/prototypes",name:"Prototypes",component:c.a,meta:{tabs:!0}},{path:"/glsl",name:"GLSL",component:u.a,meta:{tabs:!0}},{path:"/help",name:"Help",component:p.a}]})},,,function(t,e,a){a(92),a(91);var i=a(0)(a(47),a(109),null,null);t.exports=i.exports},function(t,e,a){var i=a(0)(a(57),a(106),null,null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(4),n=a(23),s=a.n(n),r=a(20),o=a(30),d=a.n(o),l=a(26),c=a.n(l),m=a(27),u=a.n(m),h=a(28),p=a.n(h),v=a(32),f=a.n(v),g=a(34),_=a.n(g),b=a(35),y=a.n(b),x=a(36),w=a.n(x),C=a(37),S=a.n(C),z=a(38),k=a.n(z),$=a(39),N=a.n($),O=a(42),T=a.n(O),E=a(44),L=a.n(E),P=a(41),D=a.n(P),I=a(40),V=a.n(I),R=a(25),j=a.n(R),A=a(33),q=a.n(A),F=a(29),M=a.n(F),G=a(43),J=a.n(G),H=a(31),U=a.n(H),B=a(45),W=a.n(B),K=a(21),Q=(a.n(K),a(22)),X=(a.n(Q),a(24)),Y=a.n(X);i.a.use(W.a),i.a.use(d.a),i.a.use(c.a),i.a.use(u.a),i.a.use(p.a),i.a.use(f.a),i.a.use(_.a),i.a.use(y.a),i.a.use(w.a),i.a.use(S.a),i.a.use(k.a),i.a.use(N.a),i.a.use(T.a),i.a.use(L.a),i.a.use(D.a),i.a.use(V.a),i.a.use(j.a),i.a.use(q.a),i.a.use(M.a),i.a.use(J.a),i.a.use(U.a),i.a.material.registerTheme("default",{primary:"blue",accent:"white",warn:"deep-orange",background:"white"}),i.a.material.registerTheme("light",{primary:{color:"grey",hue:"300"},accent:"blue",warn:"deep-orange",background:"white"}),i.a.config.productionTip=!1,i.a.component("MdlSlider",Y.a),new i.a({el:"#app",router:r.a,render:function(t){return t(s.a)}})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(1),n=a(104),s=a.n(n),r=a(103),o=a.n(r);e.default={name:"app",components:{OptionsList:s.a,OptionsEdit:o.a},watch:{$route:function(){this.scrolled=!1,document.title=("Home"===this.$route.name?"":this.$route.name+" | ")+"glt"}},methods:{onRefresh:function(){this.$refs.view.refresh()},onScroll:function(t,e){this.scrolled=e.scrollTop>0},toggleLeftSidenav:function(){this.$refs.leftSidenav.toggle()},open:function(){},close:function(){},go:function(t){this.$router.push(t)},nav:function(t){window.open(t)}},data:function(){return{scrolled:!1,config:i.a}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(9),n=a(10);e.default={name:"draw",props:["recipe","size","partials","quality","mode","full","direct","offScreen","preCompiled","histogram","index"],beforeDestroy:function(){this.destroyed=!0},mounted:function(){this.direct&&(this.$el.parentElement.insertBefore(n.a.canvas,this.$el),this.$el.remove()),this.$el.width=this.size[0],this.$el.height=this.size[1],this.compiled=glt.compile(this.recipe,1),this.$emit("compiled",this.compiled),this.update()},watch:{size:function(){this.$el.width=this.size[0],this.$el.height=this.size[1],this.update()},partials:function(){this.update()},recipe:function(){this.ctx=this.ctx||this.$el.getContext("2d"),this.ctx.clearRect(0,0,this.$el.width,this.$el.height),this.compiled=glt.compile(this.recipe,1),this.$emit("compiled",this.compiled),this.update()}},methods:{getSize:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=void 0;return e=this.full?[window.screen.width,window.screen.height]:this.size?[this.size[0],this.size[1]]:[128,128],this.partials&&this.compiled&&(e[1]=this.compiled.partials.length*e[0]),[e[0]/t,e[1]/t]},paint:function(){var t=this.getSize(this.quality),e=this.getSize();this.offScreen||n.a.renderer.size(t);var a=Date.now();n.a.renderer.render(this.partials?this.compiled.partials.map(function(t){return t.shader}):this.compiled.shader,this.compiled.code,this.compiled.uniforms,null,!0),this.$emit("time",Date.now()-a),this.$el.width=e[0],this.$el.height=e[1],this.direct||n.a.renderer.draw(this.$el),this.histogram&&(this.partials||(n.a.arrayInt=n.a.renderer.pixels(!1,!0),this.$emit("histogram",++n.a.arrayCount)))},update:function(){var t=this;i.a.next(function(e){function a(){if(t.destroyed)return e();t.paint(),e()}if(t.destroyed)return e();(i.a.time>60||Date.now()-i.a.last>60)&&(i.a.time=0),i.a.time?a():window.requestAnimationFrame(a)},this.index)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(11),n=a.n(i),s=a(18),r=a.n(s),o=a(101),d=a.n(o),l=a(1);e.default={name:"edit",components:{draw:r.a,histogram:d.a},data:function(){var t=this.$route.params.json?JSON.parse(this.$route.params.json):glt.samplesDemo[0];return{tab:0,recipe:t,config:l.a,dataView:"Graph",dataViews:["Graph","Tree","Syntax"],shaderView:"All",shaderViews:["All","Color","Functions","Variables"],shaderTarget:"Three.js",shaderTargets:["Three.js","glslsandbox.com","shadertoy.com"],shaderType:"Define",shaderTypes:["Define","Uniforms","Inline"],multiLine:!1,shader:this.getShader(t,"Three.js","Define",!1).all,data:{Graph:t},dataEdit:this.toCJSON(t),updateHistogram:0,compiled:null}},methods:{toCJSON:function(t){return CJSON(t)},updateParam:function(t){this.valueToGraph(this.compiled.ids,t),this.recipe=n()({},this.compiled.graph)},valueToGraph:function(t,e){glt.valueToGraph(t,e)},dataChanged:function(t){if("Graph"===this.dataView)try{var e=JSON.parse(t.target.value);this.recipe=e}catch(t){}},updateData:function(t){this.data={Graph:t.graph,Tree:t.tree,Syntax:t.syntax},this.compiled=t,this.dataEdit=this.toCJSON(this.data[this.dataView])},updateShader:function(){this.shader=this.getShader(this.recipe,this.shaderTarget,this.shaderType,this.multiLine)[this.shaderView.toLowerCase()]},getShader:function(t,e,a,i){var n={"Three.js":glt.getShaderThree,"glslsandbox.com":glt.getShaderGlslSandbox,"shadertoy.com":glt.getShaderShadertoy},s={Define:2,Uniforms:1,Inline:0};return glt.formatShader(t,s[a],i,{},n[e])}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"glsl",data:function(){return{source:"\n"===glt.GLSL[0]?glt.GLSL.slice(1):glt.GLSL,extracted:CJSON(glt.getFragments())}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"help"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(9),n=a(10);e.default={name:"histogram",props:["size","render","curve","dark"],mounted:function(){this.render&&this.update()},watch:{size:function(){this.render&&this.update()},render:function(){this.update()}},methods:{paint:function(){var t=glt.viewHistogram.m(this.dark);t.mid=this.mid,t.curve=this.curve,t.ticks=!this.floats,t.width=this.size[0],t.height=this.size[1];var e=void 0;e=this.floats?glt.getHistogram(this.render.arrayFloat,[-1,1],!0,this.bins,this.offset,this.offset+this.length):glt.getHistogram(n.a.arrayInt,[0,255],!1,this.bins),this.$el.style.backgroundImage="none",glt.viewHistogram(this.$el,e,t)},update:function(){var t=this;i.a.next(function(e){function a(){if(t.destroyed)return e();t.paint(),e()}if(t.destroyed)return e();(i.a.time>60||Date.now()-i.a.last>60)&&(i.a.time=0),i.a.time?a():window.requestAnimationFrame(a)})}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(58),n=a.n(i),s=a(11),r=a.n(s),o=a(18),d=a.n(o),l=a(1),c=a(4),m=1;e.default={name:"list",components:{draw:d.a},watch:{$route:function(){var t=this.getData();this.recipes=t.recipes,this.times=t.times,this.id=t.id}},data:function(){return this.getData()},methods:{onTime:function(t,e){c.a.set(this.times,e,t)},refresh:function(){r()(this,this.getData())},toCJSON:function(t){return CJSON(t,{indent:1,maxLength:32})},toJSON:function(t){return n()(t)},getSpacers:function(t){for(var e=Math.ceil(Math.max(window.screen.width,window.screen.height)/t),a=[],i=0;i<e;i++)a.push(i);return a},getData:function(){var t=[],e=[],a=glt[this.$route.meta.list],i=this.generator=glt[this.$route.meta.generator],n=void 0;for(a&&(n=a.call?a():glt.deep(a));n?n.length:t.length<78;)e.push(-1),n?t.push(n.shift()):t.push(i());return{recipes:t,times:e,id:this.$route.meta.generator?m++:this.$route.meta.list,config:l.a}}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(1);e.default={name:"optionsConfig",data:function(){return{config:i.a}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a(1);e.default={name:"optionsList",data:function(){return{config:i.a}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"prototypes",data:function(){var t=this;return setTimeout(function(){t.prototypesArray=glt.all.map(function(t){return[t.type,t.output,t.name,glt.getSignature(t),t.type+t.name+t.output,t.input.length,t.input.filter(function(t){return"COLOR"===t[1]}).length,t.input.filter(function(t){return"VALUE"===t[1]}).length,t.input.filter(function(t){return"POSITION"===t[1]}).length,t.input.filter(function(t){return"COLOR"!==t[1]&&"VALUE"!==t[1]&&"POSITION"!==t[1]}).length]})}),{scrolled:!1,sortBy:null,prototypes:CJSON(glt.all),prototypesArray:[]}},methods:{onScroll:function(t,e){this.scrolled=e.scrollTop>0},sort:function(t,e){return e&&t.sort(function(t,a){return("asc"===e.type?1:-1)*t[e.name].toString().localeCompare(a[e.name].toString())}),t}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={computed:{valueNumber:function(){return Number(this.value)},stepNumber:function(){return Number(this.step)},minNumber:function(){return Number(this.min)},maxNumber:function(){return Number(this.max)},relativeValue:function(){return Math.round((this.valueNumber-this.minNumber)/this.stepNumber)*this.stepNumber/(this.maxNumber-this.minNumber)}},props:{value:{type:[String,Number],required:!0},step:{type:[String,Number],default:1},min:{type:[String,Number],default:0},max:{type:[String,Number],required:!0},disabled:{required:!1}},methods:{onInput:function(t){var e=t.target.value;this.$emit("input","string"==typeof this.value?e:Number(e))}},mounted:function(){componentHandler.upgradeElement(this.$el,"MaterialSlider")}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){a(96);var i=a(0)(a(49),a(113),"data-v-79083d13",null);t.exports=i.exports},function(t,e,a){a(89);var i=a(0)(a(50),a(107),"data-v-1cd2482a",null);t.exports=i.exports},function(t,e,a){a(90);var i=a(0)(a(51),a(108),"data-v-2b0faa6c",null);t.exports=i.exports},function(t,e,a){a(94);var i=a(0)(a(52),a(111),"data-v-529d21aa",null);t.exports=i.exports},function(t,e,a){a(95);var i=a(0)(a(53),a(112),"data-v-69c015a7",null);t.exports=i.exports},function(t,e,a){var i=a(0)(a(54),a(115),null,null);t.exports=i.exports},function(t,e,a){var i=a(0)(a(55),a(116),null,null);t.exports=i.exports},function(t,e,a){a(97);var i=a(0)(a(56),a(114),"data-v-7f38cb4c",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"model",rawName:"v-model",value:t.valueNumber,expression:"valueNumber"}],ref:"input",staticClass:"mdl-slider mdl-js-slider",attrs:{type:"range",min:t.min,max:t.max,step:t.step,disabled:t.disabled},domProps:{value:t.valueNumber},on:{input:t.onInput,__r:function(e){t.valueNumber=e.target.value}}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("md-tabs",{attrs:{"md-elevation":"1"}},[a("md-tab",{attrs:{id:"tab-1","md-label":"Source"}},[a("div",{staticClass:"mono pre"},[t._v(t._s(t.source))])]),t._v(" "),a("md-tab",{attrs:{id:"tab-2","md-label":"Extracted"}},[a("div",{staticClass:"mono pre"},[t._v(t._s(t.extracted))])])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-layout",{attrs:{"md-row":""}},[a("md-layout",{staticStyle:{"background-color":"#fff"},attrs:{"md-flex":"100"}},[a("div",{staticClass:"md-display-4",staticStyle:{padding:"16px",margin:"4px 16px 16px 16px",color:"#2196f3","letter-spacing":"-5px"}},[a("md-icon",{staticClass:"md-size-4x",attrs:{"md-src":"./static/favicon.svg"}}),t._v(" glt\n    ")],1),t._v(" "),a("md-divider",{staticStyle:{width:"100%"}})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[a("md-toolbar",{staticClass:"md-whiteframe-1dp",style:{"z-index":t.$route.meta.tabs&&!t.scrolled?null:1}},[t.$route.meta.menu?a("md-button",{staticClass:"md-icon-button",nativeOn:{click:function(e){t.toggleLeftSidenav(e)}}},[a("md-icon",[t._v("menu")])],1):t._e(),t._v(" "),a("h2",{staticClass:"md-title",staticStyle:{flex:"1"}},[t._v("glt")]),t._v(" "),a("router-link",{staticClass:"md-link-button",attrs:{to:"/"}},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("edit")]),t._v(" "),a("md-tooltip",[t._v("Edit")])],1)],1),t._v(" "),a("router-link",{staticClass:"md-link-button",attrs:{to:"/palettes"}},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("palette")]),t._v(" "),a("md-tooltip",[t._v("Random palettes")])],1)],1),t._v(" "),a("router-link",{staticClass:"md-link-button",attrs:{to:"/features"}},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("collections")]),t._v(" "),a("md-tooltip",[t._v("Features")])],1)],1),t._v(" "),a("router-link",{staticClass:"md-link-button",attrs:{to:"/samples"}},[a("md-button",{staticClass:"md-icon-button"},[a("md-icon",[t._v("collections_bookmarked")]),t._v(" "),a("md-tooltip",[t._v("Samples")])],1)],1),t._v(" "),a("md-menu",{attrs:{"md-direction":"bottom left"}},[a("md-button",{staticClass:"md-icon-button",attrs:{"md-menu-trigger":""}},[a("md-icon",[t._v("more_vert")])],1),t._v(" "),a("md-menu-content",[a("md-menu-item",{on:{selected:function(e){t.go("/tests")}}},[a("span",[t._v("Tests")]),t._v(" "),a("md-icon",[t._v("library_books")])],1),t._v(" "),a("md-menu-item",{on:{selected:function(e){t.go("/prototypes")}}},[a("span",[t._v("Prototypes")])]),t._v(" "),a("md-menu-item",{on:{selected:function(e){t.go("/glsl")}}},[a("span",[t._v("GLSL")])]),t._v(" "),a("md-menu-item",{on:{selected:function(e){t.go("/help")}}},[a("span",[t._v("Help")]),t._v(" "),a("md-icon",[t._v("help")])],1),t._v(" "),a("md-menu-item",{on:{selected:function(e){t.nav("https://github.com/darosh/glt/")}}},[a("span",[t._v("About")]),t._v(" "),a("md-icon",{staticClass:"github",attrs:{"md-src":"static/icon-github.svg"}})],1)],1)],1)],1),t._v(" "),a("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"main-content",style:{"overflow-y":t.$route.meta.tabs?"scroll":null}},[a("router-view",{ref:"view"})],1),t._v(" "),a("transition",{attrs:{name:"slide-fade"}},[a("md-button",{directives:[{name:"show",rawName:"v-show",value:t.$route.meta.refresh,expression:"$route.meta.refresh"}],staticClass:"md-fab md-fab-bottom-right md-primary",nativeOn:{click:function(e){t.onRefresh()}}},[a("md-icon",[t._v("refresh")])],1)],1),t._v(" "),a("md-sidenav",{ref:"leftSidenav",staticClass:"md-left",attrs:{"md-fixed":"","md-swipeable":""},on:{open:function(e){t.open("Left")},close:function(e){t.close("Left")}}},["thumbnails"===t.$route.meta.menu?a("options-list"):"edit"===t.$route.meta.menu?a("options-edit"):t._e()],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("canvas")},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("svg",{attrs:{width:t.size[0],height:t.size[1]}})},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("md-layout",{staticClass:"md-wrap",attrs:{"md-gutter":""}},[t._l(t.recipes,function(e,i){return a("router-link",{key:i,attrs:{to:{name:"Edit",params:{json:t.toJSON(e)}}}},[a("md-card",[e.title?a("span",{class:[t.config.thumbnailSize[0]>128?"md-title":"md-body-2"]},[t._v(t._s(e.title))]):t._e(),t._v(" "),a("md-layout",{attrs:{"md-align":"center"}},[a("draw",{style:{width:t.config.thumbnailSize[0]+"px"},attrs:{recipe:e,size:t.config.thumbnailSize,partials:t.config.partials,index:i},on:{time:function(e){t.onTime(e,i)}}})],1),t._v(" "),t.config.time?a("span",{staticClass:"mono right"},[t._v(t._s(t.times[i]>-1?t.times[i]:"—")+" ms")]):t._e(),t._v(" "),t.config.code?a("span",{staticClass:"pre mono"},[t._v(t._s(t.toCJSON(e.data)))]):t._e()],1)],1)}),t._v(" "),t._l(t.getSpacers(t.config.thumbnailSize[0]),function(e){return a("div",{staticClass:"spacer",style:{width:t.config.thumbnailSize[0]+"px"}})})],2)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content",staticStyle:{height:"100%"}},[a("md-layout",{staticStyle:{height:"100%"},attrs:{"md-row":""}},[a("md-layout",{staticStyle:{"flex-flow":"column"},attrs:{"md-column":""}},[a("md-tabs",{staticClass:"md-transparent",attrs:{"md-dynamic-height":!1},on:{change:function(e){t.tab=e}}},[a("md-tab",{attrs:{id:"tab-1","md-label":"Components"}}),t._v(" "),a("md-tab",{attrs:{id:"tab-3","md-label":"Data"}}),t._v(" "),a("md-tab",{attrs:{id:"tab-4","md-label":"Shader"}})],1),t._v(" "),0===t.tab&&t.compiled?a("md-layout",{attrs:{"md-column":""}},[a("div",{staticClass:"scroll-y padding"},[a("md-layout",{staticClass:"no-flex",staticStyle:{padding:"8px 8px 0 8px","margin-bottom":"-8px"},attrs:{"md-row":"","md-gutter":"","md-align":"start"}},[a("md-card",{staticClass:"md-whiteframe-1dp"},[a("div",[a("md-checkbox",{staticClass:"md-primary"},[t._v("Params")]),t._v(" "),a("md-checkbox",{staticClass:"md-primary"},[t._v("Previews")]),t._v(" "),a("md-checkbox",{staticClass:"md-primary"},[t._v("Histograms")]),t._v(" "),a("md-checkbox",{staticClass:"md-primary"},[t._v("Chart")])],1)])],1),t._v(" "),a("md-layout",{attrs:{"md-row":"","md-gutter":""}},t._l(t.compiled.ids,function(e,i){return a("div",{staticClass:"margin"},[a("md-card",{staticStyle:{"min-width":"256px","padding-bottom":"11px"}},[a("div",{staticClass:"md-title"},[t._v(t._s(e[0]))]),t._v(" "),t._l(t.compiled.uniforms,function(e,n){return e.id==i?a("div",{staticClass:"margin"},[a("span",{staticClass:"md-subheading"},[t._v(t._s(e.proto[1]))]),t._v(" "),e.value.length?t._l(e.value,function(i,n){return a("md-layout",{key:n,staticClass:"params"},[a("div",{staticClass:"slider-container"},[a("mdl-slider",{attrs:{min:e.proto[3][0],max:e.proto[3][1],step:.01},on:{input:function(a){e.value[n]=a,t.updateParam(e)}},model:{value:e.value[n],callback:function(t){var a=e.value,i=n;Array.isArray(a)?a.splice(i,1,t):e.value[n]=t},expression:"v.value[u]"}})],1),t._v(" "),a("div",[a("md-input-container",[a("md-input",{attrs:{type:"number",step:"0.01"},on:{input:function(a){e.value[n]=a,t.updateParam(e)}},model:{value:e.value[n],callback:function(a){var i=e.value,s=n;Array.isArray(i)?i.splice(s,1,t._n(a)):e.value[n]=t._n(a)},expression:"v.value[u]"}})],1)],1)])}):a("md-layout",{staticClass:"params"},[a("div",{staticClass:"slider-container"},[a("mdl-slider",{attrs:{min:e.proto[3][0],max:e.proto[3][1],step:.01},on:{input:function(a){e.value=a,t.updateParam(e)}},model:{value:e.value,callback:function(t){e.value=t},expression:"v.value"}})],1),t._v(" "),a("div",[a("md-input-container",[a("md-input",{attrs:{type:"number",step:"0.01"},on:{input:function(a){e.value=a,t.updateParam(e)}},model:{value:e.value,callback:function(a){e.value=t._n(a)},expression:"v.value"}})],1)],1)])],2):t._e()})],2)],1)}))],1)]):1===t.tab?a("md-layout",{staticClass:"padding-side",attrs:{"md-column":""}},[a("md-layout",{staticClass:"no-flex padding-top",attrs:{"md-row":"","md-gutter":"","md-align":"start"}},[a("md-card",{staticClass:"md-whiteframe-1dp"},[a("div",t._l(t.dataViews,function(e,i){return a("md-radio",{key:i,staticClass:"md-primary",attrs:{"md-value":e,name:"data-view-"+i,id:"data-view-"+i},on:{change:function(e){t.dataView=e,t.dataEdit=t.toCJSON(t.data[t.dataView])}},model:{value:t.dataView,callback:function(e){t.dataView=e},expression:"dataView"}},[t._v("\n                "+t._s(e)+"\n              ")])}))])],1),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.dataEdit,expression:"dataEdit"}],staticClass:"mono pre padding-bottom scroll-y",staticStyle:{flex:"1",width:"100%"},attrs:{disabled:"Graph"!==t.dataView},domProps:{value:t.dataEdit},on:{change:function(e){t.dataChanged(e)},keyup:function(e){t.dataChanged(e)},input:function(e){e.target.composing||(t.dataEdit=e.target.value)}}})],1):2===t.tab?a("md-layout",{staticClass:"padding-side",attrs:{"md-column":""}},[a("md-layout",{staticClass:"no-flex padding-top",attrs:{"md-row":"","md-gutter":"","md-align":"start"}},[a("md-card",{staticClass:"md-whiteframe-1dp"},[a("div",t._l(t.shaderViews,function(e,i){return a("md-radio",{key:i,staticClass:"md-primary",attrs:{"md-value":e,name:"shader-view-"+i,id:"shader-view-"+i},on:{change:function(e){t.shaderView=e,t.updateShader()}},model:{value:t.shaderView,callback:function(e){t.shaderView=e},expression:"shaderView"}},[t._v("\n                "+t._s(e)+"\n\n\n              ")])}))]),t._v(" "),a("md-card",{staticClass:"md-whiteframe-1dp"},[a("div",t._l(t.shaderTargets,function(e,i){return a("md-radio",{key:i,staticClass:"md-primary",attrs:{"md-value":e,name:"shader-target-"+i,id:"shader-target-"+i},on:{change:function(e){t.shaderTarget=e,t.updateShader()}},model:{value:t.shaderTarget,callback:function(e){t.shaderTarget=e},expression:"shaderTarget"}},[t._v(t._s(e)+"\n\n\n              ")])}))]),t._v(" "),a("md-card",{staticClass:"md-whiteframe-1dp"},[a("div",t._l(t.shaderTypes,function(e,i){return a("md-radio",{key:i,staticClass:"md-primary",attrs:{"md-value":e,name:"shader-type-"+i,id:"shader-type-"+i},on:{change:function(e){t.shaderType=e,t.updateShader()}},model:{value:t.shaderType,callback:function(e){t.shaderType=e},expression:"shaderType"}},[t._v(t._s(e)+"\n              ")])}))]),t._v(" "),a("md-card",{staticClass:"md-whiteframe-1dp"},[a("md-checkbox",{staticClass:"md-primary",attrs:{id:"shader-multi-line",name:"shader-multi-line"},on:{change:function(e){t.multiLine=e,t.updateShader()}},model:{value:t.multiLine,callback:function(e){t.multiLine=e},expression:"multiLine"}},[t._v("Multi line\n            ")])],1)],1),t._v(" "),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.shader,expression:"shader"}],staticClass:"mono pre padding-bottom scroll-y",staticStyle:{flex:"1",width:"100%"},attrs:{disabled:""},domProps:{value:t.shader},on:{input:function(e){e.target.composing||(t.shader=e.target.value)}}})],1):t._e()],1),t._v(" "),a("md-layout",{staticClass:"no-flex",attrs:{"md-column":""}},[a("draw",{staticClass:"md-whiteframe-1dp",style:{width:t.config.editSize[0]+"px",height:t.config.editSize[1]+"px"},attrs:{recipe:t.recipe,size:t.config.editSize,direct:"true",histogram:"true"},on:{compiled:function(e){t.updateData(e)},histogram:function(e){t.updateHistogram=e}}}),t._v(" "),a("histogram",{staticClass:"md-whiteframe-1dp",attrs:{render:t.updateHistogram,dark:t.config.histogramDark,curve:t.config.histogramCurve,size:[t.config.editSize[0],t.config.editSize[0]/2]}})],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-content"},[a("md-tabs",{attrs:{"md-elevation":"1","md-dynamic-height":!1}},[a("md-tab",{attrs:{id:"tab-1","md-label":"Table"}},[a("md-table-card",{directives:[{name:"show",rawName:"v-show",value:t.prototypesArray.length,expression:"prototypesArray.length"}]},[a("md-table",{attrs:{"md-sort":"calories"},on:{sort:function(e){t.prototypesArray=t.sort(t.prototypesArray,e)}}},[a("md-table-header",[a("md-table-row",[a("md-table-head",{attrs:{"md-sort-by":"4"}}),t._v(" "),a("md-table-head",{attrs:{"md-sort-by":"0"}},[t._v("Type")]),t._v(" "),a("md-table-head",{attrs:{"md-sort-by":"1"}},[t._v("Output")]),t._v(" "),a("md-table-head",{attrs:{"md-sort-by":"5","md-numeric":""}},[t._v("Inputs")]),t._v(" "),a("md-table-head",{attrs:{"md-sort-by":"6","md-numeric":""}},[t._v("COLOR")]),t._v(" "),a("md-table-head",{attrs:{"md-sort-by":"7","md-numeric":""}},[t._v("VALUE")]),t._v(" "),a("md-table-head",{attrs:{"md-sort-by":"8","md-numeric":""}},[t._v("POSITION")]),t._v(" "),a("md-table-head",{attrs:{"md-sort-by":"9","md-numeric":""}},[t._v("Params")]),t._v(" "),a("md-table-head",{attrs:{"md-sort-by":"2"}},[t._v("Name")]),t._v(" "),a("md-table-head",{attrs:{"md-sort-by":"3"}},[t._v("Signature")])],1)],1),t._v(" "),a("md-table-body",t._l(t.prototypesArray,function(e,i){return a("md-table-row",{key:i},[a("md-table-cell",[a("md-avatar",{staticClass:"md-avatar-icon",class:{"md-primary":"vec3"===e[1],"md-warn":"vec2"===e[1]}},["blend"===e[0]?a("md-icon",[t._v("call_merge")]):"colorize"===e[0]?a("md-icon",[t._v("group_work")]):"desaturate"===e[0]?a("md-icon",[t._v("fiber_manual_record")]):"generator"===e[0]?a("md-icon",[t._v("photo")]):"modify"===e[0]?a("md-icon",[t._v("tune")]):"transform"===e[0]?a("md-icon",[t._v("open_with")]):t._e()],1)],1),t._v(" "),a("md-table-cell",[t._v(t._s(e[0]))]),t._v(" "),a("md-table-cell",{staticClass:"mono"},[t._v(t._s(e[1]))]),t._v(" "),a("md-table-cell",{staticClass:"md-body-1",attrs:{"md-numeric":""}},[t._v(t._s(e[5]))]),t._v(" "),a("md-table-cell",{staticClass:"md-body-1",class:e[6]?"number":"zero",attrs:{"md-numeric":""}},[t._v(t._s(e[6])+"\n              ")]),t._v(" "),a("md-table-cell",{staticClass:"md-body-1",class:e[7]?"number":"zero",attrs:{"md-numeric":""}},[t._v(t._s(e[7])+"\n              ")]),t._v(" "),a("md-table-cell",{staticClass:"md-body-1",class:e[8]?"number":"zero",attrs:{"md-numeric":""}},[t._v(t._s(e[8])+"\n              ")]),t._v(" "),a("md-table-cell",{staticClass:"md-body-1",class:e[9]?"number":"zero",attrs:{"md-numeric":""}},[t._v(t._s(e[9])+"\n              ")]),t._v(" "),a("md-table-cell",{staticClass:"md-body-2"},[t._v(t._s(e[2]))]),t._v(" "),a("md-table-cell",{staticClass:"mono"},[t._v(t._s(e[3]))])],1)}))],1)],1)],1),t._v(" "),a("md-tab",{attrs:{id:"tab-2","md-label":"Data"}},[a("div",{staticClass:"mono pre"},[t._v(t._s(t.prototypes))])])],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-theme",{attrs:{"md-name":"light"}},[a("md-toolbar",{staticClass:"md-dense"},[a("div",{staticClass:"md-toolbar-container"},[a("h3",{staticClass:"md-subheading"},[t._v("Size")])])]),t._v(" "),a("md-list",t._l(t.config.editSizes,function(e,i){return a("md-list-item",{key:i},[a("md-radio",{attrs:{"md-value":i,name:"edit-size-"+i,id:"edit-size-"+i},on:{change:function(e){t.config.editSize=t.config.editSizes[e]}},model:{value:t.config.editSizeIndex,callback:function(e){t.config.editSizeIndex=e},expression:"config.editSizeIndex"}},[t._v("\n        "+t._s(e[0])+" × "+t._s(e[1])+"\n      ")])],1)})),t._v(" "),a("md-toolbar",{staticClass:"md-dense"},[a("div",{staticClass:"md-toolbar-container"},[a("h3",{staticClass:"md-subheading"},[t._v("Histogram")])])]),t._v(" "),a("md-list",[a("md-list-item",[a("md-switch",{attrs:{id:"histogram-curve",name:"histogram-curve"},model:{value:t.config.histogramCurve,callback:function(e){t.config.histogramCurve=e},expression:"config.histogramCurve"}},[t._v("Curve")])],1),t._v(" "),a("md-list-item",[a("md-switch",{attrs:{id:"histogram-dark",name:"histogram-dark"},model:{value:t.config.histogramDark,callback:function(e){t.config.histogramDark=e},expression:"config.histogramDark"}},[t._v("Dark")])],1)],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-theme",{attrs:{"md-name":"light"}},[a("md-toolbar",{staticClass:"md-dense"},[a("div",{staticClass:"md-toolbar-container"},[a("h3",{staticClass:"md-subheading"},[t._v("Show")])])]),t._v(" "),a("md-list",[a("md-list-item",[a("md-switch",{attrs:{id:"config-time",name:"config-time"},model:{value:t.config.time,callback:function(e){t.config.time=e},expression:"config.time"}},[t._v("Time")])],1),t._v(" "),a("md-list-item",[a("md-switch",{attrs:{id:"config-code",name:"config-code"},model:{value:t.config.code,callback:function(e){t.config.code=e},expression:"config.code"}},[t._v("Code")])],1),t._v(" "),a("md-list-item",[a("md-switch",{attrs:{id:"config-partials",name:"config-partials"},model:{value:t.config.partials,callback:function(e){t.config.partials=e},expression:"config.partials"}},[t._v("\n        Partials\n      ")])],1)],1),t._v(" "),a("md-toolbar",{staticClass:"md-dense"},[a("div",{staticClass:"md-toolbar-container"},[a("h3",{staticClass:"md-subheading"},[t._v("Size")])])]),t._v(" "),a("md-list",t._l(t.config.thumbnailSizes,function(e,i){return a("md-list-item",{key:i},[a("md-radio",{attrs:{"md-value":i,name:"thumb-size-"+i,id:"thumb-size-"+i},on:{change:function(e){t.config.thumbnailSize=t.config.thumbnailSizes[e]}},model:{value:t.config.thumbnailSizeIndex,callback:function(e){t.config.thumbnailSizeIndex=e},expression:"config.thumbnailSizeIndex"}},[t._v("\n        "+t._s(e[0])+" × "+t._s(e[1])+"\n      ")])],1)}))],1)},staticRenderFns:[]}}],[46]);