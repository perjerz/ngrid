(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"4DA5":function(e,t,s){"use strict";s.d(t,"a",function(){return a}),s.d(t,"b",function(){return l});var c=s("7+OI"),i=s("8LU1"),r=s("DcT9"),o=s("XEBs"),n=s("fXoL");const a="blockUi";let l=(()=>{class e{constructor(e,t){this.grid=e,this._blockInProgress=!1,this._removePlugin=t.setPlugin(a,this),e.registry.changes.subscribe(e=>{for(const t of e)switch(t.type){case"blocker":this.setupBlocker()}}),t.onInit().subscribe(e=>{e&&this._blockUi&&"boolean"==typeof this._blockUi&&this.setupBlocker()}),t.events.subscribe(e=>{if("onDataSource"===e.kind){const{prev:t,curr:s}=e;t&&r.r.kill(this,t),s.onSourceChanging.pipe(Object(r.r)(this,s)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!0,this.setupBlocker())}),s.onSourceChanged.pipe(Object(r.r)(this,s)).subscribe(()=>{"auto"===this._blockUi&&(this._blockInProgress=!1,this.setupBlocker())})}})}get blockUi(){return this._blockUi}set blockUi(e){let t=Object(i.c)(e);!t||"auto"!==e&&""!==e||(t="auto"),Object(c.a)(e)&&this._blockUi!==e?(Object(c.a)(this._blockUi)&&r.r.kill(this,this._blockUi),this._blockUi=e,e.pipe(Object(r.r)(this,this._blockUi)).subscribe(e=>{this._blockInProgress=e,this.setupBlocker()})):this._blockUi!==t&&(this._blockUi=t,"auto"!==t&&(this._blockInProgress=t,this.setupBlocker()))}ngOnDestroy(){r.r.kill(this),this._removePlugin(this.grid)}setupBlocker(){if(this.grid.isInit)if(this._blockInProgress){if(!this._blockerEmbeddedVRef){const e=this.grid.registry.getSingle("blocker");e&&(this._blockerEmbeddedVRef=this.grid.createView("afterContent",e.tRef,{$implicit:this.grid}),this._blockerEmbeddedVRef.detectChanges())}}else this._blockerEmbeddedVRef&&(this.grid.removeView(this._blockerEmbeddedVRef,"afterContent"),this._blockerEmbeddedVRef=void 0)}}return e.\u0275fac=function(t){return new(t||e)(n.Sb(o.f),n.Sb(o.m))},e.\u0275dir=n.Nb({type:e,selectors:[["pbl-ngrid","blockUi",""]],inputs:{blockUi:"blockUi"},exportAs:["blockUi"]}),e})()},"6JOf":function(e,t,s){"use strict";s.d(t,"a",function(){return a});var c=s("ofXK"),i=s("f6nW"),r=s("XEBs"),o=s("4DA5"),n=s("fXoL");let a=(()=>{class e{}return e.NGRID_PLUGIN=Object(r.u)({id:o.a},o.b),e.\u0275mod=n.Qb({type:e}),e.\u0275inj=n.Pb({factory:function(t){return new(t||e)},imports:[[c.c,i.r,r.j]]}),e})()},CebM:function(e,t,s){"use strict";s.r(t),s.d(t,"TransposeExampleModule",function(){return U});var c=s("mrSG"),i=s("ofXK"),r=s("bSwM"),o=s("XEBs"),n=s("V+x2"),a=s("6JOf"),l=s("YT2F"),b=s("WPM6"),u=s("fluT"),d=s("fXoL"),p=s("XkVd"),h=s("4DA5"),g=s("X2ne"),f=s("aR4q");function m(e,t){if(1&e&&(d.Yb(0,"div"),d.Sc(1),d.oc(2,"date"),d.Xb()),2&e){const e=t.value,s=t.col;d.Fb(1),d.Tc(d.qc(2,1,e,s.type.data.format))}}function k(e,t){if(1&e&&(d.Yb(0,"div",4),d.Sc(1),d.Xb()),2&e){const e=t.value;d.Fb(1),d.Tc(e)}}let y=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:{name:"date",data:{format:"dd MMM, yyyy"}}}).build(),this.ds=Object(o.s)().onTrigger(()=>this.datasource.getPeople(0,5)).create(),this.transposeToggle=!1}};return e.\u0275fac=function(t){return new(t||e)(d.Sb(u.a))},e.\u0275cmp=d.Mb({type:e,selectors:[["pbl-transpose-example"]],decls:5,vars:6,consts:[["blockUi","",3,"transpose","dataSource","columns"],[4,"pblNgridCellTypeDef"],["style","background: green",4,"pblNgridCellDef"],[3,"checked","change"],[2,"background","green"]],template:function(e,t){1&e&&(d.Yb(0,"pbl-ngrid",0),d.Qc(1,m,3,4,"div",1),d.Qc(2,k,2,1,"div",2),d.Xb(),d.Yb(3,"mat-checkbox",3),d.jc("change",function(e){return t.transposeToggle=e.checked}),d.Sc(4,"Transpose Enabled"),d.Xb()),2&e&&(d.uc("transpose",t.transposeToggle)("dataSource",t.ds)("columns",t.columns),d.Fb(1),d.uc("pblNgridCellTypeDef","date"),d.Fb(1),d.uc("pblNgridCellDef","name"),d.Fb(1),d.uc("checked",t.transposeToggle))},directives:[p.a,h.b,g.b,f.a,r.a],pipes:[i.f],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(l.e)("pbl-transpose-example",{title:"Transpose"}),Object(c.b)("design:paramtypes",[u.a])],e),e})();function j(e,t){if(1&e&&(d.Yb(0,"div",2),d.Sc(1),d.Xb()),2&e){const e=t.value;d.Fb(1),d.Tc(e)}}let O=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:{name:"date",data:{format:"dd MMM, yyyy"}}}).build(),this.ds=Object(o.s)().onTrigger(()=>this.datasource.getPeople(0,15)).create()}};return e.\u0275fac=function(t){return new(t||e)(d.Sb(u.a))},e.\u0275cmp=d.Mb({type:e,selectors:[["pbl-original-templates-example"]],decls:2,vars:3,consts:[["blockUi","","transpose","","matchTemplates","",3,"dataSource","columns"],["style","background: green",4,"pblNgridCellDef"],[2,"background","green"]],template:function(e,t){1&e&&(d.Yb(0,"pbl-ngrid",0),d.Qc(1,j,2,1,"div",1),d.Xb()),2&e&&(d.uc("dataSource",t.ds)("columns",t.columns),d.Fb(1),d.uc("pblNgridCellDef","name"))},directives:[p.a,h.b,g.b,f.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(l.e)("pbl-original-templates-example",{title:"Transpose with Original Templates"}),Object(c.b)("design:paramtypes",[u.a])],e),e})();function v(e,t){if(1&e&&(d.Yb(0,"div",2),d.Sc(1),d.Xb()),2&e){const e=t.value;d.Fb(1),d.Tc(e)}}const _=function(){return{minWidth:100}};let w=(()=>{let e=class{constructor(e){this.datasource=e,this.columns=Object(o.r)().default({minWidth:100}).table({prop:"id",sort:!0,width:"40px"},{prop:"name",sort:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:{name:"date",data:{format:"dd MMM, yyyy"}}}).build(),this.ds=Object(o.s)().onTrigger(()=>this.datasource.getPeople(0,25)).create()}};return e.\u0275fac=function(t){return new(t||e)(d.Sb(u.a))},e.\u0275cmp=d.Mb({type:e,selectors:[["pbl-with-column-styles-example"]],decls:2,vars:5,consts:[["blockUi","","transpose","",3,"transposeDefaultCol","dataSource","columns"],["style","background: green",4,"pblNgridCellDef"],[2,"background","green"]],template:function(e,t){1&e&&(d.Yb(0,"pbl-ngrid",0),d.Qc(1,v,2,1,"div",1),d.Xb()),2&e&&(d.uc("transposeDefaultCol",d.xc(4,_))("dataSource",t.ds)("columns",t.columns),d.Fb(1),d.uc("pblNgridCellDef","name"))},directives:[p.a,h.b,g.b,f.a],styles:[""],encapsulation:2,changeDetection:0}),e=Object(c.a)([Object(l.e)("pbl-with-column-styles-example",{title:"With Column Styles"}),Object(c.b)("design:paramtypes",[u.a])],e),e})(),U=(()=>{let e=class{};return e.\u0275mod=d.Qb({type:e}),e.\u0275inj=d.Pb({factory:function(t){return new(t||e)},imports:[[i.c,r.b,b.a,o.j,n.a,a.a]]}),e=Object(c.a)([Object(l.a)(y,O,w)],e),e})()},WPM6:function(e,t,s){"use strict";s.d(t,"a",function(){return n});var c=s("XiUz"),i=s("znSr"),r=s("YT2F"),o=s("fXoL");let n=(()=>{class e{}return e.\u0275mod=o.Qb({type:e}),e.\u0275inj=o.Pb({factory:function(t){return new(t||e)},imports:[[c.i,i.e,r.l],c.i,i.e,r.l]}),e})()}}]);