(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{VwpH:function(n,t,c){"use strict";c.r(t),c.d(t,"ToolbarPageModule",function(){return u});var e=c("ofXK"),o=c("8lIJ"),l=c("alW4"),i=c("tyNb"),b=c("fXoL"),a=c("LMvA");const r=[{path:"",component:(()=>{class n{constructor(){this.toolbarMenu=[{label:"File",click:()=>{console.log("File clicked")}},{label:"Run",disabled:!0},{label:"Edit",dropdown:!0,click:()=>{console.log("Edit clicked")}}]}menuClicked(n){console.log("Menu clicked",n)}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=b.Fb({type:n,selectors:[["app-toolbar-page"]],decls:40,vars:5,consts:[[1,"style-header"],[1,"shadow",3,"sectionTitle"],[3,"mainTitle","subtitle","menu","menuClick"],[1,"tag"]],template:function(n,t){1&n&&(b.Rb(0,"h3",0),b.Fc(1,"Toolbar"),b.Qb(),b.Fc(2,"\n\n"),b.Rb(3,"ngx-section",1),b.Fc(4,"\n  "),b.Rb(5,"ngx-toolbar",2),b.Yb("menuClick",function(n){return t.menuClicked(n)}),b.Fc(6,"\n  "),b.Qb(),b.Fc(7,"\n  "),b.Mb(8,"br"),b.Fc(9,"\n  "),b.Rb(10,"app-prism"),b.Fc(11,"\n"),b.Fc(12,'<ngx-toolbar\n  [mainTitle]="\'Record\'"\n  [subtitle]="\'IR-344\'"\n  [menu]="toolbarMenu"\n  (menuClick)="menuClicked($event)">\n</ngx-toolbar>'),b.Fc(13,"\n  "),b.Qb(),b.Fc(14,"\n"),b.Qb(),b.Fc(15,"\n\n"),b.Rb(16,"ngx-section",1),b.Fc(17,"\n  "),b.Rb(18,"ngx-toolbar"),b.Fc(19,"\n    "),b.Rb(20,"ngx-toolbar-title"),b.Fc(21,"\n      "),b.Rb(22,"span",3),b.Fc(23,"dynamic title"),b.Qb(),b.Fc(24,"\n    "),b.Qb(),b.Fc(25,"\n    "),b.Rb(26,"ngx-toolbar-content"),b.Fc(27,"\n      "),b.Rb(28,"i"),b.Fc(29,"dynamic content"),b.Qb(),b.Fc(30,"\n    "),b.Qb(),b.Fc(31,"\n  "),b.Qb(),b.Fc(32,"\n  "),b.Mb(33,"br"),b.Fc(34,"\n  "),b.Rb(35,"app-prism"),b.Fc(36,"\n"),b.Fc(37,'<ngx-toolbar>\n  <ngx-toolbar-title>\n    <span class="tag">dynamic title</span>\n  </ngx-toolbar-title>\n  <ngx-toolbar-content>\n    <i>dynamic content</i>\n  </ngx-toolbar-content>\n</ngx-toolbar>'),b.Fc(38,"\n  "),b.Qb(),b.Fc(39,"\n"),b.Qb()),2&n&&(b.yb(3),b.ic("sectionTitle","Title/Menu"),b.yb(2),b.ic("mainTitle","Record")("subtitle","IR-344")("menu",t.toolbarMenu),b.yb(11),b.ic("sectionTitle","Dynamic Content"))},directives:[o.wb,o.Yb,a.a,o.bc,o.Zb],encapsulation:2,changeDetection:0}),n})()}];let s=(()=>{class n{}return n.\u0275mod=b.Jb({type:n}),n.\u0275inj=b.Ib({factory:function(t){return new(t||n)},imports:[[i.g.forChild(r)],i.g]}),n})(),u=(()=>{class n{}return n.\u0275mod=b.Jb({type:n}),n.\u0275inj=b.Ib({factory:function(t){return new(t||n)},imports:[[e.c,l.a,o.yb,o.ac,s]]}),n})()}}]);