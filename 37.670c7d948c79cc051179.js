(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"2vE2":function(t,e,n){"use strict";n.r(e),n.d(e,"ManualDatasourceTriggerExampleModule",function(){return f});var r=n("mrSG"),c=n("ofXK"),o=n("XEBs"),a=n("YT2F"),s=n("WPM6"),i=n("fluT"),u=n("fXoL"),l=n("XkVd");function p(t,e){if(1&t){const t=u.Zb();u.Yb(0,"button",2),u.jc("click",function(){u.Fc(t);const n=e.$implicit;return u.nc().refresh(n)}),u.Sc(1),u.Xb()}if(2&t){const t=e.$implicit;u.Fb(1),u.Uc("",t," Rows")}}const b=function(){return[50,100,500,1e3]};let d=(()=>{let t=class{constructor(t){this.datasource=t,this.columns={table:{cols:[{prop:"id"},{prop:"name"},{prop:"email"}]}},this.dsManualTrigger=Object(o.s)().onTrigger(t=>this.datasource.getPeople(0,t.data.curr||t.data.prev||0)).create()}refresh(t){this.dsManualTrigger.refresh(t)}};return t.\u0275fac=function(e){return new(e||t)(u.Sb(i.a))},t.\u0275cmp=u.Mb({type:t,selectors:[["pbl-manual-datasource-trigger-component"]],decls:2,vars:4,consts:[["mat-stroked-button","",3,"click",4,"ngFor","ngForOf"],[3,"dataSource","columns"],["mat-stroked-button","",3,"click"]],template:function(t,e){1&t&&(u.Qc(0,p,2,1,"button",0),u.Tb(1,"pbl-ngrid",1)),2&t&&(u.uc("ngForOf",u.xc(3,b)),u.Fb(1),u.uc("dataSource",e.dsManualTrigger)("columns",e.columns))},directives:[c.t,l.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(r.a)([Object(a.e)("pbl-manual-datasource-trigger-component",{title:"Manual Trigger"}),Object(r.b)("design:paramtypes",[i.a])],t),t})(),f=(()=>{let t=class{};return t.\u0275mod=u.Qb({type:t}),t.\u0275inj=u.Pb({factory:function(e){return new(e||t)},imports:[[c.c,s.a,o.j]]}),t=Object(r.a)([Object(a.a)(d)],t),t})()},WPM6:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var r=n("XiUz"),c=n("znSr"),o=n("YT2F"),a=n("fXoL");let s=(()=>{class t{}return t.\u0275mod=a.Qb({type:t}),t.\u0275inj=a.Pb({factory:function(e){return new(e||t)},imports:[[r.i,c.e,o.l],r.i,c.e,o.l]}),t})()}}]);