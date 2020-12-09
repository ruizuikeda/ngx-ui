!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var c=e[t];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(n,c.key,c)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"6YZw":function(t,c,i){"use strict";i.r(c),i.d(c,"PlusMenuPageModule",(function(){return f}));var o,l,u,p=i("ofXK"),s=i("8lIJ"),a=i("alW4"),m=i("tyNb"),r=i("fXoL"),b=i("LMvA"),g=function(n,e){return[n,e]},E=function(n,e,t){return[n,e,t]},d=[{path:"",component:(o=function(){function t(){n(this,t),this.upload={description:"Upload a plugin",hotkey:"ctrl+alt+u",icon:"upload-outline"},this.create={description:"Create",hotkey:"ctrl+alt+n",icon:"add-circle-thin"},this.search={description:"Search",icon:"search"}}var c,i,o;return c=t,(i=[{key:"onClick",value:function(n){console.log(n)}}])&&e(c.prototype,i),o&&e(c,o),t}(),o.\u0275fac=function(n){return new(n||o)},o.\u0275cmp=r.Fb({type:o,selectors:[["app-plus-menu-page"]],decls:81,vars:27,consts:[[1,"style-header"],["sectionTitle","Plus Menu - Right - Two Items",1,"shadow"],[1,"container-right"],["menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Right - Three Items",1,"shadow"],["menuColor","#CDD2DD","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Bottom - Two Items",1,"shadow"],[1,"container-bottom"],["position","bottom","menuColor","#01E1B9","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Bottom - Three Items",1,"shadow"],["position","bottom","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Top - Two Items",1,"shadow"],[1,"container-top"],["position","top","menuTitle","Install a Plugin",3,"items","clickItem"],["sectionTitle","Plus Menu - Top - Three Items",1,"shadow",2,"margin-bottom","300px"]],template:function(n,e){1&n&&(r.Rb(0,"h3",0),r.Ec(1,"Plus Menu"),r.Qb(),r.Ec(2,"\n"),r.Rb(3,"ngx-section",1),r.Ec(4,"\n  "),r.Rb(5,"div",2),r.Ec(6,"\n    "),r.Rb(7,"ngx-plus-menu",3),r.Yb("clickItem",(function(n){return e.onClick(n)})),r.Qb(),r.Ec(8,"\n  "),r.Qb(),r.Ec(9,"\n  "),r.Rb(10,"app-prism"),r.Ec(11,"\n    "),r.Ec(12,'\n    <ngx-plus-menu\n      [items]="[upload, create]"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Ec(13,"\n  "),r.Qb(),r.Ec(14,"\n"),r.Qb(),r.Ec(15,"\n\n"),r.Rb(16,"ngx-section",4),r.Ec(17,"\n  "),r.Rb(18,"div",2),r.Ec(19,"\n    "),r.Rb(20,"ngx-plus-menu",5),r.Yb("clickItem",(function(n){return e.onClick(n)})),r.Qb(),r.Ec(21,"\n  "),r.Qb(),r.Ec(22,"\n  "),r.Rb(23,"app-prism"),r.Ec(24,"\n    "),r.Ec(25,'\n    <ngx-plus-menu\n      [items]="[upload, create, search]"\n      menuColor="#CDD2DD"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Ec(26,"\n  "),r.Qb(),r.Ec(27,"\n"),r.Qb(),r.Ec(28,"\n\n"),r.Rb(29,"ngx-section",6),r.Ec(30,"\n  "),r.Rb(31,"div",7),r.Ec(32,"\n    "),r.Rb(33,"ngx-plus-menu",8),r.Yb("clickItem",(function(n){return e.onClick(n)})),r.Qb(),r.Ec(34,"\n  "),r.Qb(),r.Ec(35,"\n  "),r.Rb(36,"app-prism"),r.Ec(37,"\n    "),r.Ec(38,'\n    <ngx-plus-menu\n      [items]="[upload, create]"\n      position="bottom"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Ec(39,"\n  "),r.Qb(),r.Ec(40,"\n"),r.Qb(),r.Ec(41,"\n\n"),r.Rb(42,"ngx-section",9),r.Ec(43,"\n  "),r.Rb(44,"div",7),r.Ec(45,"\n    "),r.Rb(46,"ngx-plus-menu",10),r.Yb("clickItem",(function(n){return e.onClick(n)})),r.Qb(),r.Ec(47,"\n  "),r.Qb(),r.Ec(48,"\n  "),r.Rb(49,"app-prism"),r.Ec(50,"\n    "),r.Ec(51,'\n    <ngx-plus-menu\n      [items]="[upload, create, search]"\n      position="bottom"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Ec(52,"\n  "),r.Qb(),r.Ec(53,"\n"),r.Qb(),r.Ec(54,"\n\n"),r.Rb(55,"ngx-section",11),r.Ec(56,"\n  "),r.Rb(57,"div",12),r.Ec(58,"\n    "),r.Rb(59,"ngx-plus-menu",13),r.Yb("clickItem",(function(n){return e.onClick(n)})),r.Qb(),r.Ec(60,"\n  "),r.Qb(),r.Ec(61,"\n  "),r.Rb(62,"app-prism"),r.Ec(63,"\n    "),r.Ec(64,'\n    <ngx-plus-menu\n      [items]="[upload, create]"\n      position="top"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Ec(65,"\n  "),r.Qb(),r.Ec(66,"\n"),r.Qb(),r.Ec(67,"\n\n"),r.Rb(68,"ngx-section",14),r.Ec(69,"\n  "),r.Rb(70,"div",12),r.Ec(71,"\n    "),r.Rb(72,"ngx-plus-menu",13),r.Yb("clickItem",(function(n){return e.onClick(n)})),r.Qb(),r.Ec(73,"\n  "),r.Qb(),r.Ec(74,"\n  "),r.Rb(75,"app-prism"),r.Ec(76,"\n    "),r.Ec(77,'\n    <ngx-plus-menu\n      [items]="[upload, create, search]"\n      position="top"\n      menuTitle="Install a Plugin"\n      (clickItem)="onClick($event)">\n    </ngx-plus-menu> '),r.Ec(78,"\n  "),r.Qb(),r.Ec(79,"\n"),r.Qb(),r.Ec(80,"\n\n")),2&n&&(r.yb(7),r.ic("items",r.mc(6,g,e.upload,e.create)),r.yb(13),r.ic("items",r.nc(9,E,e.upload,e.create,e.search)),r.yb(13),r.ic("items",r.mc(13,g,e.upload,e.create)),r.yb(13),r.ic("items",r.nc(16,E,e.upload,e.create,e.search)),r.yb(13),r.ic("items",r.mc(20,g,e.upload,e.create)),r.yb(13),r.ic("items",r.nc(23,E,e.upload,e.create,e.search)))},directives:[s.wb,s.lb,b.a],styles:["app-plus-menu-page .container-bottom,app-plus-menu-page .container-right,app-plus-menu-page .container-top{position:relative}app-plus-menu-page .container-bottom ngx-plus-menu,app-plus-menu-page .container-right ngx-plus-menu,app-plus-menu-page .container-top ngx-plus-menu{position:absolute}app-plus-menu-page app-prism{margin-top:30px;display:block}app-plus-menu-page .container-right ngx-plus-menu{top:-20px;right:0}app-plus-menu-page .container-bottom{display:flex;justify-content:center}app-plus-menu-page .container-bottom ngx-plus-menu{bottom:-10px}app-plus-menu-page .container-top{display:flex;justify-content:center}app-plus-menu-page .container-top ngx-plus-menu{top:-20px}"],encapsulation:2,changeDetection:0}),o)}],h=((u=function e(){n(this,e)}).\u0275mod=r.Jb({type:u}),u.\u0275inj=r.Ib({factory:function(n){return new(n||u)},imports:[[m.g.forChild(d)],m.g]}),u),f=((l=function e(){n(this,e)}).\u0275mod=r.Jb({type:l}),l.\u0275inj=r.Ib({factory:function(n){return new(n||l)},imports:[[p.c,a.a,s.yb,s.mb,h]]}),l)}}])}();