(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{"2MRV":function(e,t,n){"use strict";n.r(t),n.d(t,"HideColumnFeatureExampleModule",function(){return j});var o=n("mrSG"),c=n("ofXK"),i=n("NFeN"),l=n("d3UM"),r=n("XEBs"),a=n("YT2F"),s=n("WPM6"),p=n("fluT"),u=n("fXoL"),d=n("XkVd"),b=n("IO+B"),m=n("Lj3m"),h=n("FKr1");function g(e,t){if(1&e){const e=u.Yb();u.Xb(0,"mat-option",8),u.fc("onSelectionChange",function(t){u.yc(e);const n=u.jc(2);return t.isUserInput&&n.toggleColumn(n.hideColumns,t.source.value)}),u.Lc(1),u.Wb()}if(2&e){const e=t.$implicit;u.qc("value",e.id),u.Fb(1),u.Mc(e.label)}}function f(e,t){if(1&e&&(u.Xb(0,"div",3),u.Sb(1,"div",4),u.Xb(2,"div",5),u.Xb(3,"mat-select",6),u.Xb(4,"mat-select-trigger"),u.Xb(5,"mat-icon"),u.Lc(6,"remove_red_eye"),u.Wb(),u.Lc(7),u.Wb(),u.Jc(8,g,2,2,"mat-option",7),u.Wb(),u.Wb(),u.Wb()),2&e){const e=u.jc(),t=u.vc(1);u.Fb(3),u.qc("value",e.hideColumns),u.Fb(4),u.Nc("",e.hideColumns.length," "),u.Fb(1),u.qc("ngForOf",t.columnApi.columns)}}const v=Object(r.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio"},{prop:"email",minWidth:250,width:"250px"},{prop:"language",headerType:"language"}).build();let C=(()=>{let e=class{constructor(e){this.datasource=e,this.hideColumns=["bio"],this.columns=v,this.ds=Object(r.s)().onTrigger(()=>this.datasource.getPeople(0,15)).create()}toggleColumn(e,t){const n=e.indexOf(t);-1===n?e.push(t):e.splice(n,1)}};return e.\u0275fac=function(t){return new(t||e)(u.Rb(p.a))},e.\u0275cmp=u.Lb({type:e,selectors:[["pbl-hide-columns-example-component"]],decls:3,vars:4,consts:[[3,"hideColumns","dataSource","columns"],["pblTbl1",""],["class","pbl-ngrid-row",4,"pblNgridOuterSection"],[1,"pbl-ngrid-row"],[1,"pbl-ngrid-header-cell"],[1,"pbl-ngrid-header-cell",2,"flex","0 0 70px"],["multiple","",3,"value"],[3,"value","onSelectionChange",4,"ngFor","ngForOf"],[3,"value","onSelectionChange"]],template:function(e,t){1&e&&(u.Xb(0,"pbl-ngrid",0,1),u.Jc(2,f,9,3,"div",2),u.Wb()),2&e&&(u.qc("hideColumns",t.hideColumns)("dataSource",t.ds)("columns",t.columns),u.Fb(2),u.qc("pblNgridOuterSection","top"))},directives:[d.a,b.a,m.a,l.a,l.c,i.a,c.s,h.m],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(a.e)("pbl-hide-columns-example-component",{title:"Hide Columns"}),Object(o.b)("design:paramtypes",[p.a])],e),e})();function O(e,t){if(1&e){const e=u.Yb();u.Xb(0,"mat-option",8),u.fc("onSelectionChange",function(t){u.yc(e);const n=u.jc(2);return t.isUserInput&&n.toggleColumn(n.hideColumns,t.source.value)}),u.Lc(1),u.Wb()}if(2&e){const e=t.$implicit;u.qc("value",e.id),u.Fb(1),u.Mc(e.label)}}function w(e,t){if(1&e&&(u.Xb(0,"div",3),u.Sb(1,"div",4),u.Xb(2,"div",5),u.Xb(3,"mat-select",6),u.Xb(4,"mat-select-trigger"),u.Xb(5,"mat-icon"),u.Lc(6,"remove_red_eye"),u.Wb(),u.Lc(7),u.Wb(),u.Jc(8,O,2,2,"mat-option",7),u.Wb(),u.Wb(),u.Wb()),2&e){const e=u.jc(),t=u.vc(1);u.Fb(3),u.qc("value",e.hideColumns),u.Fb(4),u.Nc("",e.hideColumns.length," "),u.Fb(1),u.qc("ngForOf",t.columnApi.columns)}}const W=Object(r.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date"},{prop:"bio",minWidth:100,maxWidth:150},{prop:"email",minWidth:250,width:"250px"},{prop:"country"},{prop:"language",headerType:"language"}).headerGroup({prop:"name",span:2,label:"Personal Info"},{prop:"email",span:2,label:"Contact Info"}).build();let F=(()=>{let e=class{constructor(e){this.datasource=e,this.hideColumns=[],this.columns=W,this.ds=Object(r.s)().onTrigger(()=>this.datasource.getPeople(0,15)).create()}toggleColumn(e,t){const n=e.indexOf(t);-1===n?e.push(t):e.splice(n,1)}};return e.\u0275fac=function(t){return new(t||e)(u.Rb(p.a))},e.\u0275cmp=u.Lb({type:e,selectors:[["pbl-hide-columns-with-group-headers-example-component"]],decls:3,vars:4,consts:[[3,"hideColumns","dataSource","columns"],["pblTbl2",""],["class","pbl-ngrid-row",4,"pblNgridOuterSection"],[1,"pbl-ngrid-row"],[1,"pbl-ngrid-header-cell"],[1,"pbl-ngrid-header-cell",2,"flex","0 0 70px"],["multiple","",3,"value"],[3,"value","onSelectionChange",4,"ngFor","ngForOf"],[3,"value","onSelectionChange"]],template:function(e,t){1&e&&(u.Xb(0,"pbl-ngrid",0,1),u.Jc(2,w,9,3,"div",2),u.Wb()),2&e&&(u.qc("hideColumns",t.hideColumns)("dataSource",t.ds)("columns",t.columns),u.Fb(2),u.qc("pblNgridOuterSection","top"))},directives:[d.a,b.a,m.a,l.a,l.c,i.a,c.s,h.m],styles:[""],encapsulation:2,changeDetection:0}),e=Object(o.a)([Object(a.e)("pbl-hide-columns-with-group-headers-example-component",{title:"Hide Columns with Group Headers"}),Object(o.b)("design:paramtypes",[p.a])],e),e})(),j=(()=>{let e=class{};return e.\u0275mod=u.Pb({type:e}),e.\u0275inj=u.Ob({factory:function(t){return new(t||e)},imports:[[c.c,s.a,i.b,l.b,r.j]]}),e=Object(o.a)([Object(a.a)(C,F)],e),e})()},WPM6:function(e,t,n){"use strict";n.d(t,"a",function(){return r});var o=n("XiUz"),c=n("znSr"),i=n("YT2F"),l=n("fXoL");let r=(()=>{class e{}return e.\u0275mod=l.Pb({type:e}),e.\u0275inj=l.Ob({factory:function(t){return new(t||e)},imports:[[o.i,c.e,i.l],o.i,c.e,i.l]}),e})()}}]);