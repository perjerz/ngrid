(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{"3JFK":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var o=n("qFEQ"),c=n("GAih"),i=n("cc5W"),l=n("EM62");let r=(()=>{class e{}return e.\u0275mod=l.Qb({type:e}),e.\u0275inj=l.Pb({factory:function(t){return new(t||e)},imports:[[o.i,c.e,i.l],o.i,c.e,i.l]}),e})()},CELH:function(e,t,n){"use strict";n.r(t),n.d(t,"HideColumnFeatureExampleModule",(function(){return x}));var o=n("D57K"),c=n("2kYt"),i=n("bFHC"),l=n("R7+U"),r=n("XApm"),a=n("cc5W"),s=n("3JFK"),u=n("JRn2"),p=n("EM62"),d=n("Ht9o"),b=n("IqQp"),m=n("mFH5");function h(e,t){if(1&e){const e=p.Zb();p.Yb(0,"mat-option",8),p.gc("onSelectionChange",(function(t){p.zc(e);const n=p.kc(2);return t.isUserInput&&n.toggleColumn(n.hideColumns,t.source.value)})),p.Lc(1),p.Xb()}if(2&e){const e=t.$implicit;p.rc("value",e.id),p.Gb(1),p.Mc(e.label)}}function g(e,t){if(1&e&&(p.Yb(0,"div",3),p.Tb(1,"div",4),p.Yb(2,"div",5),p.Yb(3,"mat-select",6),p.Yb(4,"mat-select-trigger"),p.Yb(5,"mat-icon"),p.Lc(6,"remove_red_eye"),p.Xb(),p.Lc(7),p.Xb(),p.Jc(8,h,2,2,"mat-option",7),p.Xb(),p.Xb(),p.Xb()),2&e){const e=p.kc(),t=p.wc(1);p.Gb(3),p.rc("value",e.hideColumns),p.Gb(4),p.Nc("",e.hideColumns.length," "),p.Gb(1),p.rc("ngForOf",t.columnApi.columns)}}const f=Object(r.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build();let v=(()=>{let e=class{constructor(e){this.datasource=e,this.hideColumns=["bio"],this.columns=f,this.ds=Object(r.t)().onTrigger((()=>this.datasource.getPeople(0,15))).create()}toggleColumn(e,t){const n=e.indexOf(t);-1===n?e.push(t):e.splice(n,1)}};return e.\u0275fac=function(t){return new(t||e)(p.Sb(u.a))},e.\u0275cmp=p.Mb({type:e,selectors:[["pbl-hide-columns-example-component"]],decls:3,vars:4,consts:[[3,"hideColumns","dataSource","columns"],["pblTbl1",""],["class","pbl-ngrid-row",4,"pblNgridOuterSection"],[1,"pbl-ngrid-row"],[1,"pbl-ngrid-header-cell"],[1,"pbl-ngrid-header-cell",2,"flex","0 0 70px"],["multiple","",3,"value"],[3,"value","onSelectionChange",4,"ngFor","ngForOf"],[3,"value","onSelectionChange"]],template:function(e,t){1&e&&(p.Yb(0,"pbl-ngrid",0,1),p.Jc(2,g,9,3,"div",2),p.Xb()),2&e&&(p.rc("hideColumns",t.hideColumns)("dataSource",t.ds)("columns",t.columns),p.Gb(2),p.rc("pblNgridOuterSection","top"))},directives:[d.a,b.a,l.a,l.c,i.a,c.s,m.n],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(a.e)("pbl-hide-columns-example-component",{title:"Hide Columns"})],e),e})();function C(e,t){if(1&e){const e=p.Zb();p.Yb(0,"mat-option",8),p.gc("onSelectionChange",(function(t){p.zc(e);const n=p.kc(2);return t.isUserInput&&n.toggleColumn(n.hideColumns,t.source.value)})),p.Lc(1),p.Xb()}if(2&e){const e=t.$implicit;p.rc("value",e.id),p.Gb(1),p.Mc(e.label)}}function w(e,t){if(1&e&&(p.Yb(0,"div",3),p.Tb(1,"div",4),p.Yb(2,"div",5),p.Yb(3,"mat-select",6),p.Yb(4,"mat-select-trigger"),p.Yb(5,"mat-icon"),p.Lc(6,"remove_red_eye"),p.Xb(),p.Lc(7),p.Xb(),p.Jc(8,C,2,2,"mat-option",7),p.Xb(),p.Xb(),p.Xb()),2&e){const e=p.kc(),t=p.wc(1);p.Gb(3),p.rc("value",e.hideColumns),p.Gb(4),p.Nc("",e.hideColumns.length," "),p.Gb(1),p.rc("ngForOf",t.columnApi.columns)}}const O=Object(r.s)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio",minWidth:100,maxWidth:150},{prop:"email",minWidth:250,width:"250px"},{prop:"country"},{prop:"language",headerType:"language"}).headerGroup({prop:"name",span:2,label:"Personal Info"},{prop:"email",span:2,label:"Contact Info"}).build();let y=(()=>{let e=class{constructor(e){this.datasource=e,this.hideColumns=[],this.columns=O,this.ds=Object(r.t)().onTrigger((()=>this.datasource.getPeople(0,15))).create()}toggleColumn(e,t){const n=e.indexOf(t);-1===n?e.push(t):e.splice(n,1)}};return e.\u0275fac=function(t){return new(t||e)(p.Sb(u.a))},e.\u0275cmp=p.Mb({type:e,selectors:[["pbl-hide-columns-with-group-headers-example-component"]],decls:3,vars:4,consts:[[3,"hideColumns","dataSource","columns"],["pblTbl2",""],["class","pbl-ngrid-row",4,"pblNgridOuterSection"],[1,"pbl-ngrid-row"],[1,"pbl-ngrid-header-cell"],[1,"pbl-ngrid-header-cell",2,"flex","0 0 70px"],["multiple","",3,"value"],[3,"value","onSelectionChange",4,"ngFor","ngForOf"],[3,"value","onSelectionChange"]],template:function(e,t){1&e&&(p.Yb(0,"pbl-ngrid",0,1),p.Jc(2,w,9,3,"div",2),p.Xb()),2&e&&(p.rc("hideColumns",t.hideColumns)("dataSource",t.ds)("columns",t.columns),p.Gb(2),p.rc("pblNgridOuterSection","top"))},directives:[d.a,b.a,l.a,l.c,i.a,c.s,m.n],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(a.e)("pbl-hide-columns-with-group-headers-example-component",{title:"Hide Columns with Group Headers"})],e),e})(),x=(()=>{let e=class{};return e.\u0275mod=p.Qb({type:e}),e.\u0275inj=p.Pb({factory:function(t){return new(t||e)},imports:[[c.c,s.a,i.b,l.b,r.l]]}),e=Object(o.a)([Object(a.a)(v,y)],e),e})()},D57K:function(e,t,n){"use strict";function o(e,t,n,o){var c,i=arguments.length,l=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)l=Reflect.decorate(e,t,n,o);else for(var r=e.length-1;r>=0;r--)(c=e[r])&&(l=(i<3?c(l):i>3?c(t,n,l):c(t,n))||l);return i>3&&l&&Object.defineProperty(t,n,l),l}n.d(t,"a",(function(){return o}))}}]);