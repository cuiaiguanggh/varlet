import{A as _}from"./AppType.4c4506cb.js";import{L as y}from"./index.343b597d.js";import{u as m,a as i,_ as u,b as f,c as v}from"./en-US.948dca5c.js";import{w as h}from"./utils.38ecee47.js";import{_ as g}from"./elevation.37915be7.js";import{d as r,o as z,c as x,a as s,h as e,i as p,l,t as d}from"./vendor.17911535.js";import"./shared.def6a7f6.js";var C={type:"\u7C7B\u578B",size:"\u5927\u5C0F",color:"\u989C\u8272"},b={type:"Type",size:"Size",color:"Color"};const{add:n,use:k,pack:N,packs:P,merge:Q}=m(),j=a=>{v(a),k(a)};i("zh-CN",u);i("en-US",f);n("zh-CN",C);n("en-US",b);const w={name:"LoadingExample",components:{VarLoading:y,AppType:_},setup(){return h(j),{pack:N}}},L={class:"loading-demo"},S={class:"loading-demo__type"},B={class:"loading-demo__type-block"},U={class:"loading-demo__type"},T={class:"loading-demo__type-block"},V={class:"loading-demo__size"},A={class:"loading-demo__size-block"};function $(a,E,D,t,F,I){const c=r("app-type"),o=r("var-loading");return z(),x("div",L,[s("div",S,[e(c,null,{default:p(()=>[l(d(t.pack.type),1)]),_:1}),s("div",B,[e(o,{type:"circle"}),e(o,{type:"cube"}),e(o,{type:"wave"}),e(o,{type:"rect"}),e(o,{type:"disappear"})])]),s("div",U,[e(c,null,{default:p(()=>[l(d(t.pack.color),1)]),_:1}),s("div",T,[e(o,{type:"circle",style:{color:"#2979ff"}}),e(o,{type:"cube",style:{color:"#2979ff"}}),e(o,{type:"wave",style:{color:"#2979ff"}}),e(o,{type:"rect",style:{color:"#2979ff"}}),e(o,{type:"disappear",style:{color:"#2979ff"}})])]),s("div",V,[e(c,null,{default:p(()=>[l(d(t.pack.size),1)]),_:1}),s("div",A,[e(o,{type:"circle",radius:"12"}),e(o,{type:"cube",size:"small"}),e(o,{type:"wave",size:"small"}),e(o,{type:"rect",size:"small"}),e(o,{type:"disappear",size:"small"})])])])}var R=g(w,[["render",$],["__scopeId","data-v-017fd4e6"]]);export{R as default};