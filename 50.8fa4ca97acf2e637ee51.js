(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{WPM6:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var c=i("XiUz"),n=i("znSr"),o=i("YT2F"),b=i("fXoL");let r=(()=>{class t{}return t.\u0275mod=b.Pb({type:t}),t.\u0275inj=b.Ob({factory:function(e){return new(e||t)},imports:[[c.i,n.e,o.l],c.i,n.e,o.l]}),t})()},jH5g:function(t,e,i){"use strict";i.r(e),i.d(e,"SwitchingColumnDefinitionsExampleModule",function(){return X});var c=i("mrSG"),n=i("ofXK"),o=i("XEBs"),b=i("bTqV"),r=i("YT2F"),l=i("WPM6"),s=i("fluT"),a=i("fXoL"),u=i("XkVd"),d=i("aR4q"),p=i("XiUz");function f(t,e){if(1&t&&(a.Xb(0,"div"),a.Xb(1,"div"),a.Lc(2),a.kc(3,"date"),a.Wb(),a.Wb()),2&t){const t=e.row;a.Fb(2),a.Mc(a.lc(3,1,t.birthdate))}}function m(t,e){if(1&t&&(a.Xb(0,"div"),a.Xb(1,"div",4),a.Xb(2,"h3"),a.Lc(3),a.Wb(),a.Sb(4,"div",5),a.Xb(5,"h3"),a.Lc(6),a.Wb(),a.Wb(),a.Xb(7,"p"),a.Lc(8),a.kc(9,"date"),a.Wb(),a.Wb()),2&t){const t=e.row;a.Fb(3),a.Mc(t.id),a.Fb(3),a.Mc(t.name),a.Fb(2),a.Mc(a.lc(9,3,t.birthdate))}}const w=Object(o.q)().table({prop:"id",width:"40px"},{prop:"name"},{prop:"gender",width:"50px"},{prop:"birthdate"}).build(),g=Object(o.q)().table({prop:"__list_item_view__"}).build();let h=(()=>{let t=class{constructor(t){this.datasource=t,this.columns=w,this.ds=Object(o.r)().onTrigger(()=>this.datasource.getPeople(0,500)).create()}toggleView(){this.columns=this.columns===w?g:w}};return t.\u0275fac=function(e){return new(e||t)(a.Rb(s.a))},t.\u0275cmp=a.Lb({type:t,selectors:[["pbl-switching-column-definitions-example"]],decls:6,vars:4,consts:[[3,"dataSource","columns"],["grid1",""],[4,"pblNgridCellDef"],["mat-flat-button","",3,"click"],["fxLayout","row"],["fxFlex","*"]],template:function(t,e){1&t&&(a.Xb(0,"pbl-ngrid",0,1),a.Jc(2,f,4,3,"div",2),a.Jc(3,m,10,5,"div",2),a.Wb(),a.Xb(4,"button",3),a.fc("click",function(){return e.toggleView()}),a.Lc(5,"Toggle Columns View"),a.Wb()),2&t&&(a.qc("dataSource",e.ds)("columns",e.columns),a.Fb(2),a.qc("pblNgridCellDef","birthdate"),a.Fb(1),a.qc("pblNgridCellDef","__list_item_view__"))},directives:[u.a,d.a,b.b,p.f,p.b],pipes:[n.f],styles:[""],encapsulation:2,changeDetection:0}),t=Object(c.a)([Object(r.e)("pbl-switching-column-definitions-example",{title:"Switching Column Definitions"}),Object(c.b)("design:paramtypes",[s.a])],t),t})(),X=(()=>{let t=class{};return t.\u0275mod=a.Pb({type:t}),t.\u0275inj=a.Ob({factory:function(e){return new(e||t)},imports:[[n.c,l.a,b.c,o.j]]}),t=Object(c.a)([Object(r.a)(h)],t),t})()}}]);