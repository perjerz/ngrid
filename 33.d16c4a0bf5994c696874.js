(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{"3JFK":function(t,e,r){"use strict";r.d(e,"a",(function(){return i}));var c=r("qFEQ"),n=r("GAih"),o=r("cc5W"),a=r("EM62");let i=(()=>{class t{}return t.\u0275mod=a.Qb({type:t}),t.\u0275inj=a.Pb({factory:function(e){return new(e||t)},imports:[[c.i,n.e,o.l],c.i,n.e,o.l]}),t})()},D57K:function(t,e,r){"use strict";function c(t,e,r,c){var n,o=arguments.length,a=o<3?e:null===c?c=Object.getOwnPropertyDescriptor(e,r):c;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,r,c);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(a=(o<3?n(a):o>3?n(e,r,a):n(e,r))||a);return o>3&&a&&Object.defineProperty(e,r,a),a}r.d(e,"a",(function(){return c}))},o0SB:function(t,e,r){"use strict";r.r(e),r.d(e,"ManualDatasourceTriggerExampleModule",(function(){return d}));var c=r("D57K"),n=r("2kYt"),o=r("XApm"),a=r("cc5W"),i=r("3JFK"),s=r("JRn2"),u=r("EM62"),l=r("Ht9o");function p(t,e){if(1&t){const t=u.Zb();u.Yb(0,"button",2),u.gc("click",(function(){u.zc(t);const r=e.$implicit;return u.kc().refresh(r)})),u.Lc(1),u.Xb()}if(2&t){const t=e.$implicit;u.Gb(1),u.Nc("",t," Rows")}}const f=function(){return[50,100,500,1e3]};let b=(()=>{let t=class{constructor(t){this.datasource=t,this.columns={table:{cols:[{prop:"id"},{prop:"name"},{prop:"email"}]}},this.dsManualTrigger=Object(o.t)().onTrigger((t=>this.datasource.getPeople(0,t.data.curr||t.data.prev||0))).create()}refresh(t){this.dsManualTrigger.refresh(t)}};return t.\u0275fac=function(e){return new(e||t)(u.Sb(s.a))},t.\u0275cmp=u.Mb({type:t,selectors:[["pbl-manual-datasource-trigger-component"]],decls:2,vars:4,consts:[["mat-stroked-button","",3,"click",4,"ngFor","ngForOf"],[3,"dataSource","columns"],["mat-stroked-button","",3,"click"]],template:function(t,e){1&t&&(u.Jc(0,p,2,1,"button",0),u.Tb(1,"pbl-ngrid",1)),2&t&&(u.rc("ngForOf",u.sc(3,f)),u.Gb(1),u.rc("dataSource",e.dsManualTrigger)("columns",e.columns))},directives:[n.s,l.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(c.a)([Object(a.e)("pbl-manual-datasource-trigger-component",{title:"Manual Trigger"})],t),t})(),d=(()=>{let t=class{};return t.\u0275mod=u.Qb({type:t}),t.\u0275inj=u.Pb({factory:function(e){return new(e||t)},imports:[[n.c,i.a,o.l]]}),t=Object(c.a)([Object(a.a)(b)],t),t})()}}]);