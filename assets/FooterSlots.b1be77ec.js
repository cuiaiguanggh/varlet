import{T as d,u as p,p as u,g as m}from"./index.1f7e0396.js";import{d as h}from"./index.77fe3760.js";import{w as f,a as v}from"./utils.72e4e7bc.js";import{_ as g}from"./elevation.a76a8c70.js";import{e as _,o as l,l as k,j as i,a,t,r as B,i as F,c as x,k as V,F as w}from"./vendor.9810b84e.js";import"./index.28b927e4.js";import{P as C}from"./Pagination.928a937e.js";const E={name:"BasicExample",components:{VarTable:d},setup(){return f(p,"pc"),v(h),{pack:u}}},P=a("td",null,"124",-1),S=a("td",null,"38",-1),T=a("td",null,"100",-1),D=a("td",null,"135",-1);function L(n,s,r,e,b,y){const c=_("var-table");return l(),k(c,{class:"reset"},{default:i(()=>[a("thead",null,[a("tr",null,[a("th",null,t(e.pack.name),1),a("th",null,t(e.pack.math),1),a("th",null,t(e.pack.english),1)])]),a("tbody",null,[a("tr",null,[a("td",null,t(e.pack.jerry),1),P,S]),a("tr",null,[a("td",null,t(e.pack.tom),1),T,D])])]),_:1})}var K=g(E,[["render",L]]);const N={name:"BasicExample",components:{VarTable:d,VarPagination:C},setup(){const n=B(m(1,10)),s=(r,e)=>{n.value=m(r,e)};return f(p,"pc"),v(h),{pack:u,get:s,list:n}}},z={class:"footer"};function I(n,s,r,e,b,y){const c=_("var-pagination"),j=_("var-table");return l(),k(j,{class:"reset"},{footer:i(()=>[a("div",z,[F(c,{simple:!1,current:1,total:100,"size-option":[5,10],onChange:e.get},null,8,["onChange"])])]),default:i(()=>[a("thead",null,[a("tr",null,[a("th",null,t(e.pack.name),1),a("th",null,t(e.pack.math),1),a("th",null,t(e.pack.english),1)])]),a("tbody",null,[(l(!0),x(w,null,V(e.list,o=>(l(),x("tr",{key:o.name},[a("td",null,t(o.name),1),a("td",null,t(o.math),1),a("td",null,t(o.english),1)]))),128))])]),_:1})}var O=g(N,[["render",I],["__scopeId","data-v-decaf4f8"]]);export{K as B,O as F};