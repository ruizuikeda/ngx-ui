(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{zHuj:function(n,e,t){"use strict";t.r(e),t.d(e,"CodeEditorPageModule",(function(){return b}));var o=t("ofXK"),c=t("3Pt+"),r=t("8lIJ"),i=t("alW4"),s=t("tyNb"),a=t("fXoL"),l=t("LMvA");const d=function(){return{name:"javascript",json:!0}},u=function(n){return{lineNumbers:!0,theme:"dracula",mode:n}},m=function(){return{lineNumbers:!1,theme:"dracula",mode:"mustache"}},p=[{path:"",component:(()=>{class n{constructor(){this.code="var foo = true;\nvar bar = false;\n\nfunction moo() {\n  console.log(foo);\n}\n",this.code2='<h1>{{header}}</h1>\n{{#bug}}\n{{/bug}}\n\n{{#items}}\n  {{#first}}\n    <li><strong>{{name}}</strong></li>\n  {{/first}}\n  {{#link}}\n    <li><a href="{{url}}">{{name}}</a></li>\n  {{/link}}\n{{/items}}\n\n{{#empty}}\n  <p>The list is empty.</p>\n{{/empty}}\n',this.autocompleteTokens=[{text:"{{header}}",displayText:"Header"},{text:"{{help}}",displayText:"Help"},{text:"{{name}}",displayText:"Name"},{text:"{{url}}",displayText:"Url"},{text:"{{#link}} {{/link}}",displayText:"Link"},{text:"{{#items}} {{/items}}",displayText:"Items"},{text:"{{#first}} {{/first}}",displayText:"First"},{text:"{{#bug}} {{/bug}}",displayText:"Bug"}]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=a.Fb({type:n,selectors:[["app-code-editor-page"]],decls:27,vars:13,consts:[[1,"style-header"],[1,"shadow",3,"sectionTitle"],[3,"ngModel","config","ngModelChange","change"],[3,"ngModel","config","autocompleteTokens","ngModelChange"]],template:function(n,e){1&n&&(a.Rb(0,"h3",0),a.Ec(1,"Code Editor"),a.Qb(),a.Ec(2,"\n\n"),a.Rb(3,"ngx-section",1),a.Ec(4,"\n  "),a.Rb(5,"ngx-codemirror",2),a.Yb("ngModelChange",(function(n){return e.code=n}))("change",(function(n){return e.editorResult=n})),a.Ec(6,"\n  "),a.Qb(),a.Ec(7,"\n\n  "),a.Mb(8,"br"),a.Ec(9,"\n  "),a.Rb(10,"app-prism"),a.Ec(11,"\n"),a.Ec(12,"<ngx-codemirror\n  [(ngModel)]=\"code\"\n  [config]=\"{\n    lineNumbers: true,\n    theme: 'dracula',\n    mode: {\n      name: 'javascript',\n      json: true\n    }\n  }\"\n>\n</ngx-codemirror>"),a.Ec(13,"\n  "),a.Qb(),a.Ec(14,"\n"),a.Qb(),a.Ec(15,"\n\n"),a.Rb(16,"ngx-section",1),a.Ec(17,"\n  "),a.Rb(18,"ngx-codemirror",3),a.Yb("ngModelChange",(function(n){return e.code2=n})),a.Ec(19,"\n  "),a.Qb(),a.Ec(20,"\n  "),a.Rb(21,"app-prism"),a.Ec(22,"\n"),a.Ec(23,'<ngx-codemirror\n  [(ngModel)]="code2"\n  [config]="{\n    lineNumbers: false,\n    theme: \'dracula\',\n    mode: \'mustache\'\n  }"\n  [autocompleteTokens]="autocompleteTokens"\n>\n</ngx-codemirror>'),a.Ec(24,"\n  "),a.Qb(),a.Ec(25,"\n"),a.Qb(),a.Ec(26,"\n\n")),2&n&&(a.yb(3),a.ic("sectionTitle","Demo"),a.yb(2),a.ic("ngModel",e.code)("config",a.lc(10,u,a.kc(9,d))),a.yb(11),a.ic("sectionTitle","Autocomplete"),a.yb(2),a.Ab("tokens"),a.ic("ngModel",e.code2)("config",a.kc(12,m))("autocompleteTokens",e.autocompleteTokens))},directives:[r.qb,r.i,c.i,c.l,l.a],encapsulation:2,changeDetection:0}),n})()}];let g=(()=>{class n{}return n.\u0275mod=a.Jb({type:n}),n.\u0275inj=a.Ib({factory:function(e){return new(e||n)},imports:[[s.g.forChild(p)],s.g]}),n})(),b=(()=>{class n{}return n.\u0275mod=a.Jb({type:n}),n.\u0275inj=a.Ib({factory:function(e){return new(e||n)},imports:[[o.c,c.d,i.a,r.sb,r.j,g]]}),n})()}}]);