(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{"W/qk":function(t,e,i){"use strict";i.r(e),i.d(e,"InfiniteScrollExampleModule",(function(){return T}));var n=i("D57K"),o=i("2kYt"),s=i("XApm"),a=i("/kex"),r=i("66mq"),l=i("mcY/"),c=i("cc5W"),p=i("3JFK"),d=i("JRn2"),g=i("EM62"),h=i("Ht9o");function m(t,e){1&t&&g.Tb(0,"mat-progress-bar",2)}let u=(()=>{let t=class{constructor(t){this.datasource=t,this.loading=!1,this.columns=Object(s.s)().table({prop:"id",width:"100px"},{prop:"name",width:"100px"},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",width:"25%"}).build(),this.ds=Object(s.t)().onTrigger((t=>this.allPeople?(this.loading=!1,Promise.resolve(this.allPeople.slice(0,Math.min(this.allPeople.length,this.ds.source.length+50)))):this.datasource.getPeople(100,1e3).then((t=>(this.allPeople=t,this.allPeople.slice(0,Math.min(this.allPeople.length,(this.ds.source||[]).length+50))))))).create()}ngAfterViewInit(){this.ds.onRenderedDataChanged.subscribe((()=>{this.ds.length-this.ds.renderStart<20&&(this.loading||(this.loading=!0,setTimeout((()=>this.ds.refresh()),1e3*Math.random())))}))}};return t.\u0275fac=function(e){return new(e||t)(g.Sb(d.a))},t.\u0275cmp=g.Mb({type:t,selectors:[["pbl-infinite-scroll-example"]],decls:2,vars:3,consts:[[3,"dataSource","columns"],["mode","indeterminate",4,"ngIf"],["mode","indeterminate"]],template:function(t,e){1&t&&(g.Yb(0,"pbl-ngrid",0),g.Jc(1,m,1,0,"mat-progress-bar",1),g.Xb()),2&t&&(g.rc("dataSource",e.ds)("columns",e.columns),g.Gb(1),g.rc("ngIf",e.loading))},directives:[h.a,o.t,r.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(n.a)([Object(c.e)("pbl-infinite-scroll-example",{title:"Infinite Scroll"})],t),t})();var b=i("IdLP");function w(t,e){1&t&&g.Tb(0,"mat-progress-bar",2)}let f=(()=>{let t=class{constructor(t){this.client=t,this.columns=Object(s.s)().table({prop:"id",width:"100px",pIndex:!0},{prop:"name",width:"100px",editable:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",width:"25%"}).build(),this.ds=Object(l.b)().withInfiniteScrollOptions({blockSize:100,initialVirtualSize:100}).withCacheOptions("sequenceBlocks").onTrigger((t=>{if(t.isInitial)return this.ds.setCacheSize(800),this.client.getPeople({pagination:{itemsPerPage:100,page:1}}).then((e=>(this.ds.updateVirtualSize(e.pagination.totalItems),t.updateTotalLength(e.pagination.totalItems),e.items)));{console.log(t.fromRow,t.toRow);const e=t.fromRow%100,i=Math.floor(t.fromRow/100)+1,n=[this.client.getPeople({pagination:{itemsPerPage:100,page:i}})];return e>0&&n.push(this.client.getPeople({pagination:{itemsPerPage:100,page:i+1}})),new b.a((i=>(console.log(`NEW CALL WITH ${t.fromRow} - ${t.toRow}`),Promise.all(n).then((([t,n])=>{const o=t.items.slice(e,100);n&&o.push(...n.items.slice(0,e)),i.next(o),i.complete()})).catch((t=>i.error(t))),()=>console.log(`DONE WITH ${t.fromRow} - ${t.toRow}`))))}})).create()}};return t.\u0275fac=function(e){return new(e||t)(g.Sb(d.b))},t.\u0275cmp=g.Mb({type:t,selectors:[["pbl-infinite-scroll-data-source-example"]],decls:3,vars:5,consts:[[3,"dataSource","columns"],["mode","indeterminate",4,"ngIf"],["mode","indeterminate"]],template:function(t,e){1&t&&(g.Yb(0,"pbl-ngrid",0),g.Jc(1,w,1,0,"mat-progress-bar",1),g.lc(2,"async"),g.Xb()),2&t&&(g.rc("dataSource",e.ds)("columns",e.columns),g.Gb(1),g.rc("ngIf",g.mc(2,3,e.ds.adapter.virtualRowsLoading)))},directives:[h.a,o.t,r.a],pipes:[o.b],styles:[""],encapsulation:2,changeDetection:0}),t=Object(n.a)([Object(c.e)("pbl-infinite-scroll-data-source-example",{title:"Infinite Scroll Data Source"})],t),t})();var S=i("yxzw"),x=i("JKxO");function I(t,e){1&t&&g.Tb(0,"mat-progress-bar",3)}function P(t,e){if(1&t&&g.Tb(0,"pbl-ngrid-row",4),2&t){const t=e.$implicit;g.rc("grid",e.gridInstance)("row",t)}}let O=(()=>{let t=class{constructor(t){this.client=t,this.columns=Object(s.s)().table({prop:"id",width:"100px",pIndex:!0},{prop:"name",width:"100px",editable:!0},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",width:"25%"}).build(),this.ds=Object(l.b)().withInfiniteScrollOptions({blockSize:100,initialVirtualSize:100}).withCacheOptions("fragmentedBlocks",{strictPaging:!1}).onTrigger((t=>t.isInitial?(this.ds.setCacheSize(800),this.client.getPeople({pagination:{skip:0,limit:100}}).then((e=>(this.ds.updateVirtualSize(e.pagination.totalItems),t.updateTotalLength(e.pagination.totalItems),e.items)))):(console.log(t.fromRow,t.toRow),this.client.getPeople({pagination:{skip:t.fromRow,limit:t.toRow-t.fromRow+1}}).then((t=>t.items))))).create()}};return t.\u0275fac=function(e){return new(e||t)(g.Sb(d.b))},t.\u0275cmp=g.Mb({type:t,selectors:[["pbl-index-based-paging-example"]],decls:4,vars:5,consts:[[3,"dataSource","columns"],["mode","indeterminate",4,"ngIf"],["in","","class","pbl-ngrid-infinite-virtual-row",3,"grid","row",4,"pblNgridInfiniteVirtualRowDef"],["mode","indeterminate"],["in","",1,"pbl-ngrid-infinite-virtual-row",3,"grid","row"]],template:function(t,e){1&t&&(g.Yb(0,"pbl-ngrid",0),g.Jc(1,I,1,0,"mat-progress-bar",1),g.lc(2,"async"),g.Jc(3,P,1,2,"pbl-ngrid-row",2),g.Xb()),2&t&&(g.rc("dataSource",e.ds)("columns",e.columns),g.Gb(1),g.rc("ngIf",g.mc(2,3,e.ds.adapter.virtualRowsLoading)))},directives:[h.a,o.t,S.a,r.a,x.a],pipes:[o.b],styles:[""],encapsulation:2,changeDetection:0}),t=Object(n.a)([Object(c.e)("pbl-index-based-paging-example",{title:"Index Based Paging"})],t),t})(),R=(()=>{let t=class{constructor(t){this.client=t,this.columns=Object(s.s)().table({prop:"id",width:"100px",pIndex:!0},{prop:"name",width:"100px"},{prop:"gender",width:"50px"},{prop:"birthdate",type:"date",width:"25%"}).build(),this.ds=Object(l.b)().withInfiniteScrollOptions({blockSize:100,initialVirtualSize:100}).withCacheOptions("fragmentedBlocks",{strictPaging:!1}).setCustomTriggers("filter","sort").onTrigger((t=>{if(t.isInitial)return this.ds.setCacheSize(800),this.client.getPeople({pagination:{skip:0,limit:100}}).then((e=>(this.ds.updateVirtualSize(e.pagination.totalItems),t.updateTotalLength(e.pagination.totalItems),e.items)));switch(t.eventSource){case"infiniteScroll":return this.client.getPeople({pagination:{skip:t.fromRow,limit:t.toRow-t.fromRow+1}}).then((t=>t.items));case"customTrigger":break;default:throw new Error("This should NEVER EVENT happen...")}})).create()}};return t.\u0275fac=function(e){return new(e||t)(g.Sb(d.b))},t.\u0275cmp=g.Mb({type:t,selectors:[["pbl-custom-triggers-example"]],decls:1,vars:2,consts:[[3,"dataSource","columns"]],template:function(t,e){1&t&&g.Tb(0,"pbl-ngrid",0),2&t&&g.rc("dataSource",e.ds)("columns",e.columns)},directives:[h.a],styles:[""],encapsulation:2,changeDetection:0}),t=Object(n.a)([Object(c.e)("pbl-custom-triggers-example",{title:"Custom Triggers"})],t),t})(),T=(()=>{let t=class{};return t.\u0275mod=g.Qb({type:t}),t.\u0275inj=g.Pb({factory:function(e){return new(e||t)},imports:[[o.c,p.a,r.b,s.k,a.a,l.a]]}),t=Object(n.a)([Object(c.a)(u,f,O,R)],t),t})()}}]);