(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{"2MRV":function(e,t,n){"use strict";n.r(t),n.d(t,"HideColumnFeatureExampleModule",function(){return X});var o=n("mrSG"),c=n("ofXK"),i=n("NFeN"),l=n("d3UM"),r=n("XEBs"),a=n("YT2F"),s=n("WPM6"),u=n("fluT"),p=n("fXoL"),d=n("XkVd"),b=n("IO+B"),m=n("Lj3m"),h=n("FKr1");function g(e,t){if(1&e){const e=p.Zb();p.Yb(0,"mat-option",8),p.jc("onSelectionChange",function(t){p.Fc(e);const n=p.nc(2);return t.isUserInput&&n.toggleColumn(n.hideColumns,t.source.value)}),p.Sc(1),p.Xb()}if(2&e){const e=t.$implicit;p.uc("value",e.id),p.Fb(1),p.Tc(e.label)}}function f(e,t){if(1&e&&(p.Yb(0,"div",3),p.Tb(1,"div",4),p.Yb(2,"div",5),p.Yb(3,"mat-select",6),p.Yb(4,"mat-select-trigger"),p.Yb(5,"mat-icon"),p.Sc(6,"remove_red_eye"),p.Xb(),p.Sc(7),p.Xb(),p.Qc(8,g,2,2,"mat-option",7),p.Xb(),p.Xb(),p.Xb()),2&e){const e=p.nc(),t=p.Cc(1);p.Fb(3),p.uc("value",e.hideColumns),p.Fb(4),p.Uc("",e.hideColumns.length," "),p.Fb(1),p.uc("ngForOf",t.columnApi.columns)}}const C=Object(r.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build();let v=(()=>{let e=class{constructor(e){this.datasource=e,this.hideColumns=["bio"],this.columns=C,this.ds=Object(r.s)().onTrigger(()=>this.datasource.getPeople(0,15)).create()}toggleColumn(e,t){const n=e.indexOf(t);-1===n?e.push(t):e.splice(n,1)}};return e.\u0275fac=function(t){return new(t||e)(p.Sb(u.a))},e.\u0275cmp=p.Mb({type:e,selectors:[["pbl-hide-columns-example-component"]],decls:3,vars:4,consts:[[3,"hideColumns","dataSource","columns"],["pblTbl1",""],["class","pbl-ngrid-row",4,"pblNgridOuterSection"],[1,"pbl-ngrid-row"],[1,"pbl-ngrid-header-cell"],[1,"pbl-ngrid-header-cell",2,"flex","0 0 70px"],["multiple","",3,"value"],[3,"value","onSelectionChange",4,"ngFor","ngForOf"],[3,"value","onSelectionChange"]],template:function(e,t){1&e&&(p.Yb(0,"pbl-ngrid",0,1),p.Qc(2,f,9,3,"div",2),p.Xb()),2&e&&(p.uc("hideColumns",t.hideColumns)("dataSource",t.ds)("columns",t.columns),p.Fb(2),p.uc("pblNgridOuterSection","top"))},directives:[d.a,b.a,m.a,l.a,l.c,i.a,c.t,h.m],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(a.e)("pbl-hide-columns-example-component",{title:"Hide Columns"}),Object(o.b)("design:paramtypes",[u.a])],e),e})();function S(e,t){if(1&e){const e=p.Zb();p.Yb(0,"mat-option",8),p.jc("onSelectionChange",function(t){p.Fc(e);const n=p.nc(2);return t.isUserInput&&n.toggleColumn(n.hideColumns,t.source.value)}),p.Sc(1),p.Xb()}if(2&e){const e=t.$implicit;p.uc("value",e.id),p.Fb(1),p.Tc(e.label)}}function w(e,t){if(1&e&&(p.Yb(0,"div",3),p.Tb(1,"div",4),p.Yb(2,"div",5),p.Yb(3,"mat-select",6),p.Yb(4,"mat-select-trigger"),p.Yb(5,"mat-icon"),p.Sc(6,"remove_red_eye"),p.Xb(),p.Sc(7),p.Xb(),p.Qc(8,S,2,2,"mat-option",7),p.Xb(),p.Xb(),p.Xb()),2&e){const e=p.nc(),t=p.Cc(1);p.Fb(3),p.uc("value",e.hideColumns),p.Fb(4),p.Uc("",e.hideColumns.length," "),p.Fb(1),p.uc("ngForOf",t.columnApi.columns)}}const F=Object(r.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio",minWidth:100,maxWidth:150},{prop:"email",minWidth:250,width:"250px"},{prop:"country"},{prop:"language",headerType:"language"}).headerGroup({label:"Personal Info",columnIds:["name","gender","birthdate"]},{label:"Contact Info",columnIds:["email","country","language"]}).build();let O=(()=>{let e=class{constructor(e){this.datasource=e,this.hideColumns=[],this.columns=F,this.ds=Object(r.s)().onTrigger(()=>this.datasource.getPeople(0,15)).create()}toggleColumn(e,t){const n=e.indexOf(t);-1===n?e.push(t):e.splice(n,1)}};return e.\u0275fac=function(t){return new(t||e)(p.Sb(u.a))},e.\u0275cmp=p.Mb({type:e,selectors:[["pbl-hide-columns-with-group-headers-example-component"]],decls:3,vars:4,consts:[[3,"hideColumns","dataSource","columns"],["pblTbl2",""],["class","pbl-ngrid-row",4,"pblNgridOuterSection"],[1,"pbl-ngrid-row"],[1,"pbl-ngrid-header-cell"],[1,"pbl-ngrid-header-cell",2,"flex","0 0 70px"],["multiple","",3,"value"],[3,"value","onSelectionChange",4,"ngFor","ngForOf"],[3,"value","onSelectionChange"]],template:function(e,t){1&e&&(p.Yb(0,"pbl-ngrid",0,1),p.Qc(2,w,9,3,"div",2),p.Xb()),2&e&&(p.uc("hideColumns",t.hideColumns)("dataSource",t.ds)("columns",t.columns),p.Fb(2),p.uc("pblNgridOuterSection","top"))},directives:[d.a,b.a,m.a,l.a,l.c,i.a,c.t,h.m],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(a.e)("pbl-hide-columns-with-group-headers-example-component",{title:"Hide Columns with Group Headers"}),Object(o.b)("design:paramtypes",[u.a])],e),e})(),X=(()=>{let e=class{};return e.\u0275mod=p.Qb({type:e}),e.\u0275inj=p.Pb({factory:function(t){return new(t||e)},imports:[[c.c,s.a,i.b,l.b,r.j]]}),e=Object(o.a)([Object(a.a)(v,O)],e),e})()},WPM6:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n("XiUz"),c=n("znSr"),i=n("YT2F"),l=n("fXoL");let r=(()=>{class e{}return e.\u0275mod=l.Qb({type:e}),e.\u0275inj=l.Pb({factory:function(t){return new(t||e)},imports:[[o.i,c.e,i.l],o.i,c.e,i.l]}),e})()}}]);