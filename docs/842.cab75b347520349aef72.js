(self.webpackChunkangular_dynamic_forms=self.webpackChunkangular_dynamic_forms||[]).push([[842],{1842:(o,e,t)=>{"use strict";t.r(e),t.d(e,{DeveloperSandboxModule:()=>ko});var n=t(1226),i=t(5737),r=t(1116),s=t(8619);let l=(()=>{class o{constructor(){this.dropdownList=[{label:"Stavka 1",value:"stv1"}],this.mainFields=[{controlType:"input",colSize:"p-col-12",options:{type:"text",containerClass:"p-mb-0",label:"Ime stranice",placeholder:"About",formControlName:"title",value:"",disabled:!1,validators:{required:!0,maxLength:200}}},{controlType:"input-password",colSize:"p-col-12",options:{containerClass:"p-mb-0",label:"\u0160ifra",formControlName:"password",value:"",disabled:!1,validators:{required:!0,maxLength:200}}},{colSize:"p-col-12",controlType:"dropdown",options:{label:"Lista",placeholder:"Izaberi stavku",formControlName:"role",optionValue:"value",optionLabel:"label",dropdownOptions:this.dropdownList,value:[]}},{colSize:"p-col-12",controlType:"textarea",options:{label:"Napomena",formControlName:"note",value:"",disabled:!1,validators:{required:!0,maxLength:10}}},{controlType:"rich-editor",colSize:"p-col-12",options:{label:"Sadr\u017eaj",formControlName:"content",value:"",disabled:!1}},{controlType:"chips",colSize:"p-col-12",options:{label:"Tagovi",containerClass:"p-mb-0",formControlName:"tags",value:"",disabled:!1}},{controlType:"page-seo",colSize:"p-col-12"}],this.dummyFields=[{dummyFields:[{options:{formControlName:"id",value:""}},{options:{formControlName:"attachments",formControlType:"array",value:[]}}]}],this.gridFields=[{controlType:"input",colSize:"p-col-12 p-sm-4",options:{type:"text",containerClass:"p-mb-0",label:"Ime stranice",placeholder:"About",formControlName:"title",value:"",disabled:!1,validators:{required:!0,maxLength:200}}},{controlType:"input",colSize:"p-col-12 p-sm-4",options:{type:"text",containerClass:"p-mb-0",label:"Ime stranice",placeholder:"About",formControlName:"title",value:"",disabled:!1,validators:{required:!0,maxLength:200}}},{controlType:"input",colSize:"p-col-12 p-sm-4",options:{type:"text",containerClass:"p-mb-0",label:"Ime stranice",placeholder:"About",formControlName:"title",value:"",disabled:!1,validators:{required:!0,maxLength:200}}}],this.groupGridFields=[{colSize:"p-col-12 p-sm-6",group:[{controlType:"input",options:{label:"Korisnik",type:"text",formControlName:"name",value:"",disabled:!1,validators:{required:!0,maxLength:10}}},{controlType:"input",options:{label:"Telefon",type:"text",formControlName:"phone",value:"",disabled:!0,validators:{required:!0,maxLength:10}}}]},{controlType:"textarea",colSize:"p-col-12 p-sm-6",options:{label:"Napomena",formControlName:"note",value:"",rows:5,disabled:!1,validators:{required:!0,maxLength:200}}}]}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var p=t(1462),a=t(1240);let c=(()=>{class o{constructor(o,e){this.fb=o,this.appConfig=e,this.seoFields=[{options:{label:"Tagovi",containerClass:"p-mb-0",formControlName:"slug"}},{options:{label:"Tagovi",containerClass:"p-mb-0",formControlName:"meta_title"}},{options:{label:"Tagovi",containerClass:"p-mb-0",formControlName:"meta_keywords"}},{options:{label:"Tagovi",containerClass:"p-mb-0",formControlName:"meta_description"}}]}createMultiLangForm(o){let e=this.fb.group({});return this.appConfig.languages.forEach(t=>{e.addControl(t.code,this.createForm(o))}),e}createForm(o){let e,t=this.fb.group({});const n=o=>{var n,i,r,s,l,a,c,u,f;let d;e=[],o.options&&(d="array"===o.options.formControlType?new p.Oe([]):new p.NI({value:null!==(i=null===(n=o.options)||void 0===n?void 0:n.value)&&void 0!==i?i:"",disabled:(null===(r=o.options)||void 0===r?void 0:r.disabled)&&!0}),(null===(l=null===(s=o.options)||void 0===s?void 0:s.validators)||void 0===l?void 0:l.required)&&e.push(p.kI.required),(null===(c=null===(a=o.options)||void 0===a?void 0:a.validators)||void 0===c?void 0:c.maxLength)&&e.push(p.kI.maxLength(null===(f=null===(u=o.options)||void 0===u?void 0:u.validators)||void 0===f?void 0:f.maxLength)),d.setValidators(e),t.addControl(o.options.formControlName,d))};return o.forEach(o=>{"page-seo"===o.controlType&&this.seoFields.forEach(o=>{n(o)}),o.dummyFields&&o.dummyFields.forEach(o=>{n(o)}),o.group?o.group.forEach(o=>{n(o)}):n(o)}),t}}return o.\u0275fac=function(e){return new(e||o)(s.LFG(p.qu),s.LFG(a.X))},o.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var u=t(3946);function f(o,e){if(1&o&&(s.TgZ(0,"a",12),s._UZ(1,"i",13),s.qZA()),2&o){const o=s.oxw();s.Q6J("routerLink",o.backPath)}}function d(o,e){if(1&o&&(s.TgZ(0,"h1",14),s._uU(1),s.qZA()),2&o){const o=s.oxw();s.xp6(1),s.hij(" ",o.headerTitle," ")}}function m(o,e){if(1&o&&(s.TgZ(0,"a",15),s._uU(1," Pregledaj "),s._UZ(2,"i",16),s.qZA()),2&o){const o=s.oxw();s.Q6J("href",o.websiteUrl,s.LSH)}}const g=function(){return["./add"]};function Z(o,e){1&o&&(s.TgZ(0,"app-button",17),s._uU(1,"Dodaj"),s.qZA()),2&o&&s.Q6J("routerLink",s.DdM(1,g))}function h(o,e){if(1&o){const o=s.EpF();s.TgZ(0,"app-button",18),s.NdJ("click",function(){return s.CHM(o),s.oxw().onSubmitForm()}),s._uU(1),s.qZA()}if(2&o){const o=s.oxw();s.Q6J("disabled",!o.formGroup.valid),s.xp6(1),s.Oqu(o.saveBtnText)}}const x=function(){return{standalone:!0}};function T(o,e){if(1&o){const o=s.EpF();s.TgZ(0,"div",22),s.TgZ(1,"label"),s._uU(2,"Objavljena"),s.qZA(),s.TgZ(3,"p-inputSwitch",23),s.NdJ("onChange",function(e){s.CHM(o);const t=s.oxw(2);return t.onChangePageStatus(e,t.pageId)}),s.qZA(),s.qZA()}if(2&o){const o=s.oxw(2);s.xp6(3),s.Q6J("ngModelOptions",s.DdM(3,x))("ngModel",1===o.dataForPage.post_status)("name",o.dataForPage.post_name)}}function b(o,e){if(1&o&&(s.TgZ(0,"div",19),s.TgZ(1,"h2",20),s._uU(2),s.qZA(),s.YNc(3,T,4,4,"div",21),s.qZA()),2&o){const o=s.oxw();s.xp6(2),s.Oqu(o.headerTitle),s.xp6(1),s.Q6J("ngIf","inner"===o.headerType&&o.dataForPage)}}function v(o,e){1&o&&(s.ynx(0),s.TgZ(1,"div",24),s._UZ(2,"app-skeleton"),s.qZA(),s.BQk())}function q(o,e){1&o&&(s.TgZ(0,"div",24),s.Hsn(1,1),s.qZA())}const y=[[["","buttons",""]],[["","content",""]]],F=["[buttons]","[content]"];let O=(()=>{class o{constructor(o){this.route=o,this.loading=!1,this.skeletonLoad=!1,this.showPreviewButton=!1,this.showAddButton=!1,this.showOnOff=!0,this.onSubmit=new s.vpe,this.saveBtnText="Snimi",this.subscriptions=[]}ngOnInit(){this.pageId="section"===this.layoutType?+this.route.snapshot.params.sectionId:"post"===this.layoutType?+this.route.snapshot.params.postId:+this.route.snapshot.params.id}onSubmitForm(){this.onSubmit.emit(!0)}}return o.\u0275fac=function(e){return new(e||o)(s.Y36(u.gz))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-content-layout"]],inputs:{loading:"loading",formGroup:"formGroup",skeletonLoad:"skeletonLoad",headerTitle:"headerTitle",headerType:"headerType",backPath:"backPath",showPreviewButton:"showPreviewButton",showAddButton:"showAddButton",showOnOff:"showOnOff",blockUiText:"blockUiText",saveBtnText:"saveBtnText",layoutType:"layoutType"},outputs:{onSubmit:"onSubmit"},ngContentSelectors:F,decls:14,vars:9,consts:[[3,"ngSubmit"],[1,"main-card"],[1,"card-header"],["class","main-btn back-btn",3,"routerLink",4,"ngIf"],["class","card-title p-text-uppercase",4,"ngIf"],[1,"p-d-flex","p-ai-center"],["target","_blank","class","main-btn main-btn-outlined p-mr-2",3,"href",4,"ngIf"],["type","button","btnStyle","main","styleClass","main-btn p-mr-2","icon","plus",3,"routerLink",4,"ngIf"],["type","button","btnStyle","main","icon","save",3,"disabled","click",4,"ngIf"],["class","card-title-section",4,"ngIf"],[4,"ngIf","ngIfElse"],["formTemplate",""],[1,"main-btn","back-btn",3,"routerLink"],[1,"pi","pi-angle-left","p-m-0"],[1,"card-title","p-text-uppercase"],["target","_blank",1,"main-btn","main-btn-outlined","p-mr-2",3,"href"],[1,"pi","pi-reply"],["type","button","btnStyle","main","styleClass","main-btn p-mr-2","icon","plus",3,"routerLink"],["type","button","btnStyle","main","icon","save",3,"disabled","click"],[1,"card-title-section"],[1,"card-title"],["class","p-field p-flex-row p-ai-center p-m-0",4,"ngIf"],[1,"p-field","p-flex-row","p-ai-center","p-m-0"],["styleClass","p-ml-2",3,"ngModelOptions","ngModel","name","onChange"],[1,"card-body"]],template:function(o,e){if(1&o&&(s.F$t(y),s.TgZ(0,"form",0),s.NdJ("ngSubmit",function(){return e.onSubmitForm()}),s.TgZ(1,"div",1),s.TgZ(2,"div",2),s.YNc(3,f,2,1,"a",3),s.YNc(4,d,2,1,"h1",4),s.TgZ(5,"section",5),s.Hsn(6),s.YNc(7,m,3,1,"a",6),s.YNc(8,Z,2,2,"app-button",7),s.YNc(9,h,2,2,"app-button",8),s.qZA(),s.qZA(),s.YNc(10,b,4,2,"div",9),s.YNc(11,v,3,0,"ng-container",10),s.YNc(12,q,2,0,"ng-template",null,11,s.W1O),s.qZA(),s.qZA()),2&o){const o=s.MAs(13);s.uIk("formGroup",e.formGroup?e.formGroup:null),s.xp6(3),s.Q6J("ngIf","inner"===e.headerType),s.xp6(1),s.Q6J("ngIf","main"===e.headerType&&e.headerTitle),s.xp6(3),s.Q6J("ngIf",e.dataForPage&&e.showPreviewButton),s.xp6(1),s.Q6J("ngIf",e.showAddButton),s.xp6(1),s.Q6J("ngIf",e.formGroup),s.xp6(1),s.Q6J("ngIf","inner"===e.headerType),s.xp6(1),s.Q6J("ngIf",e.skeletonLoad)("ngIfElse",o)}},directives:[p._Y,p.JL,p.sg,r.O5,u.yS,u.rH,p.JJ],styles:[".main-card[_ngcontent-%COMP%]{padding-bottom:3rem}"]}),o})();var A=t(1889);class C{constructor(){}}var w=t(1985);function _(o,e){if(1&o&&(s.TgZ(0,"small",2),s._uU(1),s.qZA()),2&o){const o=s.oxw(2);s.xp6(1),s.AsE(" Polje ima ",o.errors.maxlength.actualLength," karaktera a mora biti ispod ",o.errors.maxlength.requiredLength," karaktera. ")}}function N(o,e){if(1&o&&(s.TgZ(0,"small",2),s._uU(1),s.qZA()),2&o){const o=s.oxw(2);s.xp6(1),s.hij(" ",o.fieldOptions.errorMessage," ")}}function J(o,e){1&o&&(s.TgZ(0,"small",2),s._uU(1," Ovo polje je obavezno! "),s.qZA())}function U(o,e){1&o&&(s.TgZ(0,"small",2),s._uU(1," Molimo unesite pravilnu email adresu. "),s.qZA())}function Q(o,e){if(1&o&&(s.ynx(0),s.YNc(1,_,2,2,"small",1),s.YNc(2,N,2,1,"small",1),s.YNc(3,J,2,0,"small",1),s.YNc(4,U,2,0,"small",1),s.BQk()),2&o){const o=s.oxw();s.xp6(1),s.Q6J("ngIf",o.errors.maxlength),s.xp6(1),s.Q6J("ngIf",o.errors.pattern),s.xp6(1),s.Q6J("ngIf",1==o.errors.required),s.xp6(1),s.Q6J("ngIf",1==o.errors.email)}}let I=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-field-errors"]],inputs:{errors:"errors"},decls:1,vars:1,consts:[[4,"ngIf"],["class","p-error",4,"ngIf"],[1,"p-error"]],template:function(o,e){1&o&&s.YNc(0,Q,5,4,"ng-container",0),2&o&&s.Q6J("ngIf",e.errors)},directives:[r.O5],styles:[""]}),o})();var G=t(4313);function k(o,e){if(1&o&&(s.TgZ(0,"label"),s._uU(1),s.qZA()),2&o){const o=s.oxw(2);s.xp6(1),s.Oqu(o.fieldOptions.label)}}function S(o,e){if(1&o){const o=s.EpF();s.ynx(0),s.ynx(1,4),s.YNc(2,k,2,1,"label",5),s.TgZ(3,"input",6),s.NdJ("input",function(e){return s.CHM(o),s.oxw().onChange(e)}),s.qZA(),s.BQk(),s.BQk()}if(2&o){const o=s.oxw();let e;s.xp6(1),s.Q6J("formGroup",o.specificFormGroup),s.xp6(1),s.Q6J("ngIf",o.fieldOptions.label),s.xp6(1),s.Q6J("type",o.fieldOptions.type)("placeholder",null!==(e=o.fieldOptions.placeholder)&&void 0!==e?e:"")("formControlName",o.fieldOptions.formControlName)}}function L(o,e){if(1&o&&(s.TgZ(0,"label"),s._uU(1),s.qZA()),2&o){const o=s.oxw(2);s.xp6(1),s.Oqu(o.fieldOptions.label)}}function Y(o,e){if(1&o){const o=s.EpF();s.YNc(0,L,2,1,"label",5),s.TgZ(1,"input",6),s.NdJ("input",function(e){return s.CHM(o),s.oxw().onChange(e)}),s.qZA()}if(2&o){const o=s.oxw();let e;s.Q6J("ngIf",o.fieldOptions.label),s.xp6(1),s.Q6J("type",o.fieldOptions.type)("placeholder",null!==(e=o.fieldOptions.placeholder)&&void 0!==e?e:"")("formControlName",o.fieldOptions.formControlName)}}let B=(()=>{class o{constructor(o){this.controlContainer=o,this.errors={}}ngOnInit(){this.specificFormGroup=this.fieldOptions.fieldFormGroup||""==this.fieldOptions.fieldFormGroup?this.getSpecificFormGroup(this.fieldOptions.fieldFormGroup):this.customFormGroup,""==this.fieldOptions.fieldFormGroup&&(this.specificFormGroup=this.customFormGroup)}onChange(o){this.errors=this.customFormGroup&&void 0!==this.fieldOptions.fieldFormGroup?this.customFormGroup.controls[this.fieldOptions.formControlName].errors:this.controlContainer.control.controls[this.fieldOptions.formControlName].errors}getSpecificFormGroup(o){return this.customFormGroup.get(o)}}return o.\u0275fac=function(e){return new(e||o)(s.Y36(p.gN))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-input"]],inputs:{fieldOptions:["options","fieldOptions"],customFormGroup:"customFormGroup"},features:[s._Bn([],[{provide:p.gN,useExisting:p.sg}])],decls:5,vars:4,consts:[[1,"p-field","w-100",3,"ngClass"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[3,"errors"],[3,"formGroup"],[4,"ngIf"],["pInputText","",3,"type","placeholder","formControlName","input"]],template:function(o,e){if(1&o&&(s.TgZ(0,"div",0),s.YNc(1,S,4,5,"ng-container",1),s.YNc(2,Y,2,4,"ng-template",null,2,s.W1O),s._UZ(4,"app-field-errors",3),s.qZA()),2&o){const o=s.MAs(3);s.Q6J("ngClass",e.fieldOptions.containerClass),s.xp6(1),s.Q6J("ngIf",e.fieldOptions.fieldFormGroup||""==e.fieldOptions.fieldFormGroup)("ngIfElse",o),s.xp6(3),s.Q6J("errors",e.errors)}},directives:[r.mk,r.O5,I,p.JL,p.sg,p.Fj,G.o,p.JJ,p.u],encapsulation:2}),o})();var M=t(5154);function E(o,e){if(1&o&&(s.TgZ(0,"label"),s._uU(1),s.qZA()),2&o){const o=s.oxw(2);s.xp6(1),s.Oqu(o.fieldOptions.label)}}function P(o,e){if(1&o){const o=s.EpF();s.ynx(0),s.ynx(1,4),s.YNc(2,E,2,1,"label",5),s.TgZ(3,"p-chips",6),s.NdJ("input",function(e){return s.CHM(o),s.oxw().onChange(e)}),s.qZA(),s.BQk(),s.BQk()}if(2&o){const o=s.oxw();s.xp6(1),s.Q6J("formGroup",o.specificFormGroup),s.xp6(1),s.Q6J("ngIf",o.fieldOptions.label),s.xp6(1),s.Q6J("formControlName",o.fieldOptions.formControlName)}}function z(o,e){if(1&o&&(s.TgZ(0,"label"),s._uU(1),s.qZA()),2&o){const o=s.oxw(2);s.xp6(1),s.Oqu(o.fieldOptions.label)}}function j(o,e){if(1&o){const o=s.EpF();s.YNc(0,z,2,1,"label",5),s.TgZ(1,"p-chips",6),s.NdJ("input",function(e){return s.CHM(o),s.oxw().onChange(e)}),s.qZA()}if(2&o){const o=s.oxw();s.Q6J("ngIf",o.fieldOptions.label),s.xp6(1),s.Q6J("formControlName",o.fieldOptions.formControlName)}}let H=(()=>{class o{constructor(o){this.controlContainer=o,this.errors={}}ngOnInit(){this.specificFormGroup=this.fieldOptions.fieldFormGroup||""==this.fieldOptions.fieldFormGroup?this.getSpecificFormGroup(this.fieldOptions.fieldFormGroup):this.customFormGroup,""==this.fieldOptions.fieldFormGroup&&(this.specificFormGroup=this.customFormGroup)}onChange(o){this.errors=this.customFormGroup&&void 0!==this.fieldOptions.fieldFormGroup?this.customFormGroup.controls[this.fieldOptions.formControlName].errors:this.controlContainer.control.controls[this.fieldOptions.formControlName].errors}getSpecificFormGroup(o){return this.customFormGroup.get(o)}}return o.\u0275fac=function(e){return new(e||o)(s.Y36(p.gN))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-chips"]],inputs:{fieldOptions:["options","fieldOptions"],customFormGroup:"customFormGroup"},features:[s._Bn([],[{provide:p.gN,useExisting:p.sg}])],decls:5,vars:4,consts:[[1,"p-field","w-100",3,"ngClass"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[3,"errors"],[3,"formGroup"],[4,"ngIf"],["styleClass","w-100",1,"w-100",3,"formControlName","input"]],template:function(o,e){if(1&o&&(s.TgZ(0,"div",0),s.YNc(1,P,4,3,"ng-container",1),s.YNc(2,j,2,2,"ng-template",null,2,s.W1O),s._UZ(4,"app-field-errors",3),s.qZA()),2&o){const o=s.MAs(3);s.Q6J("ngClass",e.fieldOptions.containerClass),s.xp6(1),s.Q6J("ngIf",e.fieldOptions.fieldFormGroup||""==e.fieldOptions.fieldFormGroup)("ngIfElse",o),s.xp6(3),s.Q6J("errors",e.errors)}},directives:[r.mk,r.O5,I,p.JL,p.sg,M.cL,p.JJ,p.u],encapsulation:2}),o})();var X=t(4217);function $(o,e){if(1&o&&(s.TgZ(0,"label"),s._uU(1),s.qZA()),2&o){const o=s.oxw(2);s.xp6(1),s.Oqu(o.fieldOptions.label)}}function V(o,e){if(1&o){const o=s.EpF();s.ynx(0),s.ynx(1,4),s.YNc(2,$,2,1,"label",5),s.TgZ(3,"div",6),s.TgZ(4,"input",7),s.NdJ("input",function(e){return s.CHM(o),s.oxw().onChange(e)}),s.qZA(),s.TgZ(5,"button",8),s.NdJ("click",function(){return s.CHM(o),s.oxw().togglePassShow()}),s.qZA(),s.qZA(),s.BQk(),s.BQk()}if(2&o){const o=s.oxw();s.xp6(1),s.Q6J("formGroup",o.customFormGroup),s.xp6(1),s.Q6J("ngIf",o.fieldOptions.label),s.xp6(2),s.Q6J("type",o.isPassShown?"text":"password")("formControlName",o.fieldOptions.formControlName),s.xp6(1),s.Q6J("icon",o.isPassShown?"pi pi-eye":"pi pi-eye-slash")}}function D(o,e){if(1&o&&(s.TgZ(0,"label"),s._uU(1),s.qZA()),2&o){const o=s.oxw(2);s.xp6(1),s.Oqu(o.fieldOptions.label)}}function W(o,e){if(1&o){const o=s.EpF();s.YNc(0,D,2,1,"label",5),s.TgZ(1,"div",6),s.TgZ(2,"input",7),s.NdJ("input",function(e){return s.CHM(o),s.oxw().onChange(e)}),s.qZA(),s.TgZ(3,"button",8),s.NdJ("click",function(){return s.CHM(o),s.oxw().togglePassShow()}),s.qZA(),s.qZA()}if(2&o){const o=s.oxw();s.Q6J("ngIf",o.fieldOptions.label),s.xp6(2),s.Q6J("type",o.isPassShown?"text":"password")("formControlName",o.fieldOptions.formControlName),s.xp6(1),s.Q6J("icon",o.isPassShown?"pi pi-eye":"pi pi-eye-slash")}}let R=(()=>{class o{constructor(o){this.controlContainer=o,this.isPassShown=!1}ngOnInit(){}onChange(o){this.errors=this.customFormGroup?this.customFormGroup.controls[this.fieldOptions.formControlName].errors:this.controlContainer.control.controls[this.fieldOptions.formControlName].errors}togglePassShow(){this.isPassShown=!this.isPassShown}}return o.\u0275fac=function(e){return new(e||o)(s.Y36(p.gN))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-input-password"]],inputs:{fieldOptions:["options","fieldOptions"],customFormGroup:"customFormGroup"},features:[s._Bn([],[{provide:p.gN,useExisting:p.sg}])],decls:5,vars:4,consts:[[1,"p-field","w-100",3,"ngClass"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[3,"errors"],[3,"formGroup"],[4,"ngIf"],[1,"p-inputgroup","p-d-flex"],["pInputText","",3,"type","formControlName","input"],["type","button","pButton","","pRipple","","styleClass","p-button-warn",3,"icon","click"]],template:function(o,e){if(1&o&&(s.TgZ(0,"div",0),s.YNc(1,V,6,5,"ng-container",1),s.YNc(2,W,4,4,"ng-template",null,2,s.W1O),s._UZ(4,"app-field-errors",3),s.qZA()),2&o){const o=s.MAs(3);s.Q6J("ngClass",e.fieldOptions.containerClass),s.xp6(1),s.Q6J("ngIf",e.customFormGroup)("ngIfElse",o),s.xp6(3),s.Q6J("errors",e.errors)}},directives:[r.mk,r.O5,I,p.JL,p.sg,p.Fj,G.o,p.JJ,p.u,X.Hq],encapsulation:2}),o})();var K=t(3750);const oo=function(){return{height:"320px"}};let eo=(()=>{class o{constructor(o){this.controlContainer=o}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(s.Y36(p.gN))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-rich-editor"]],inputs:{fieldOptions:["options","fieldOptions"]},features:[s._Bn([],[{provide:p.gN,useExisting:p.sg}])],decls:5,vars:6,consts:[[1,"p-field",3,"ngClass"],[1,"quill-mb",3,"formControlName"]],template:function(o,e){1&o&&(s.ynx(0),s.TgZ(1,"div",0),s.TgZ(2,"label"),s._uU(3),s.qZA(),s._UZ(4,"p-editor",1),s.qZA(),s.BQk()),2&o&&(s.xp6(1),s.Q6J("ngClass",e.fieldOptions.containerClass),s.xp6(2),s.Oqu(e.fieldOptions.label),s.xp6(1),s.Akn(s.DdM(5,oo)),s.Q6J("formControlName",e.fieldOptions.formControlName))},directives:[r.mk,K.ML,p.JJ,p.u],styles:[".quill-mb[_ngcontent-%COMP%]{margin-bottom:60px}"]}),o})();var to=t(5590);let no=(()=>{class o{constructor(o){this.controlContainer=o,this.errors={}}ngOnInit(){}onChange(o){this.errors=this.controlContainer.control.controls[this.fieldOptions.formControlName].errors}}return o.\u0275fac=function(e){return new(e||o)(s.Y36(p.gN))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-textarea"]],inputs:{fieldOptions:["options","fieldOptions"]},features:[s._Bn([],[{provide:p.gN,useExisting:p.sg}])],decls:5,vars:7,consts:[[1,"p-field","w-100",3,"ngClass"],["pInputTextarea","",3,"rows","cols","placeholder","formControlName"],[3,"errors"]],template:function(o,e){if(1&o&&(s.TgZ(0,"div",0),s.TgZ(1,"label"),s._uU(2),s.qZA(),s._UZ(3,"textarea",1),s._UZ(4,"app-field-errors",2),s.qZA()),2&o){let o;s.Q6J("ngClass",e.fieldOptions.containerClass),s.xp6(2),s.Oqu(e.fieldOptions.label),s.xp6(1),s.Q6J("rows",e.fieldOptions.rows)("cols",e.fieldOptions.cols)("placeholder",null!==(o=e.fieldOptions.placeholder)&&void 0!==o?o:"")("formControlName",e.fieldOptions.formControlName),s.xp6(1),s.Q6J("errors",e.errors)}},directives:[r.mk,p.Fj,to.g,p.JJ,p.u,I],encapsulation:2}),o})();var io=t(9366);function ro(o,e){if(1&o&&(s.TgZ(0,"label"),s._uU(1),s.qZA()),2&o){const o=s.oxw(2);s.xp6(1),s.Oqu(o.fieldOptions.label)}}function so(o,e){if(1&o){const o=s.EpF();s.ynx(0),s.ynx(1,4),s.YNc(2,ro,2,1,"label",5),s.TgZ(3,"p-dropdown",6),s.NdJ("onChange",function(){return s.CHM(o),s.oxw().onChangeValue()}),s.qZA(),s.BQk(),s.BQk()}if(2&o){const o=s.oxw();s.xp6(1),s.Q6J("formGroup",o.specificFormGroup),s.xp6(1),s.Q6J("ngIf",o.fieldOptions.label),s.xp6(1),s.Q6J("options",o.fieldOptions.dropdownOptions)("optionLabel",o.fieldOptions.optionLabel)("placeholder",o.fieldOptions.placeholder)("formControlName",o.fieldOptions.formControlName)("optionValue",o.fieldOptions.optionValue)("showClear",!1)}}function lo(o,e){if(1&o&&(s.TgZ(0,"label"),s._uU(1),s.qZA()),2&o){const o=s.oxw(2);s.xp6(1),s.Oqu(o.fieldOptions.label)}}function po(o,e){if(1&o){const o=s.EpF();s.YNc(0,lo,2,1,"label",5),s.TgZ(1,"p-dropdown",6),s.NdJ("onChange",function(){return s.CHM(o),s.oxw().onChangeValue()}),s.qZA()}if(2&o){const o=s.oxw();s.Q6J("ngIf",o.fieldOptions.label),s.xp6(1),s.Q6J("options",o.fieldOptions.dropdownOptions)("optionLabel",o.fieldOptions.optionLabel)("placeholder",o.fieldOptions.placeholder)("formControlName",o.fieldOptions.formControlName)("optionValue",o.fieldOptions.optionValue)("showClear",!1)}}let ao=(()=>{class o{constructor(o){this.controlContainer=o,this.errors={},this.onChange=new s.vpe}ngOnInit(){this.specificFormGroup=""!=this.fieldOptions.fieldFormGroup&&null!=this.fieldOptions.fieldFormGroup&&""!==this.fieldOptions.fieldFormGroup?this.getSpecificFormGroup(this.fieldOptions.fieldFormGroup):this.customFormGroup}onChangeValue(){this.onChange.emit(!0)}getSpecificFormGroup(o){return this.customFormGroup.get(o)}}return o.\u0275fac=function(e){return new(e||o)(s.Y36(p.gN))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-dropdown"]],inputs:{fieldOptions:["options","fieldOptions"],customFormGroup:"customFormGroup"},outputs:{onChange:"onChange"},features:[s._Bn([],[{provide:p.gN,useExisting:p.sg}])],decls:5,vars:4,consts:[[1,"p-field","w-100",3,"ngClass"],[4,"ngIf","ngIfElse"],["elseTemplate",""],[3,"errors"],[3,"formGroup"],[4,"ngIf"],["styleClass","w-100",3,"options","optionLabel","placeholder","formControlName","optionValue","showClear","onChange"]],template:function(o,e){if(1&o&&(s.TgZ(0,"div",0),s.YNc(1,so,4,8,"ng-container",1),s.YNc(2,po,2,7,"ng-template",null,2,s.W1O),s._UZ(4,"app-field-errors",3),s.qZA()),2&o){const o=s.MAs(3);s.Q6J("ngClass",e.fieldOptions.containerClass),s.xp6(1),s.Q6J("ngIf",e.fieldOptions.fieldFormGroup||""==e.fieldOptions.fieldFormGroup)("ngIfElse",o),s.xp6(3),s.Q6J("errors",e.errors)}},directives:[r.mk,r.O5,I,p.JL,p.sg,io.Lt,p.JJ,p.u],encapsulation:2}),o})(),co=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-page-seo"]],inputs:{formGroup:"formGroup"},decls:22,vars:2,consts:[["header","SEO OPTIMIZACIJA"],[1,"p-grid",3,"formGroup"],[1,"p-col-12","p-sm-4"],[1,"p-field","w-100"],["type","text","formControlName","meta_title","pInputText",""],["type","text","formControlName","meta_keywords","pInputText",""],["formControlName","meta_description","pInputTextarea","",3,"rows"],["type","text","formControlName","slug","pInputText",""]],template:function(o,e){1&o&&(s.TgZ(0,"p-accordion"),s.TgZ(1,"p-accordionTab",0),s.TgZ(2,"div",1),s.TgZ(3,"div",2),s.TgZ(4,"div",3),s.TgZ(5,"label"),s._uU(6,"Meta title"),s.qZA(),s._UZ(7,"input",4),s.qZA(),s.TgZ(8,"div",3),s.TgZ(9,"label"),s._uU(10,"Meta keywords"),s.qZA(),s._UZ(11,"input",5),s.qZA(),s.qZA(),s.TgZ(12,"div",2),s.TgZ(13,"div",3),s.TgZ(14,"label"),s._uU(15,"Meta description"),s.qZA(),s._UZ(16,"textarea",6),s.qZA(),s.qZA(),s.TgZ(17,"div",2),s.TgZ(18,"div",3),s.TgZ(19,"label"),s._uU(20,"Slug"),s.qZA(),s._UZ(21,"input",7),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&o&&(s.xp6(2),s.Q6J("formGroup",e.formGroup),s.xp6(14),s.Q6J("rows",5))},directives:[A.UQ,A.US,p.JL,p.sg,p.Fj,p.JJ,p.u,G.o,to.g],encapsulation:2}),o})();function uo(o,e){if(1&o&&(s.ynx(0),s._UZ(1,"app-input",1),s.BQk()),2&o){const o=s.oxw();s.xp6(1),s.Q6J("options",o.field.options)("customFormGroup",o.mainForm)}}function fo(o,e){if(1&o&&(s.ynx(0),s._UZ(1,"app-chips",1),s.BQk()),2&o){const o=s.oxw();s.xp6(1),s.Q6J("options",o.field.options)("customFormGroup",o.mainForm)}}function mo(o,e){if(1&o&&(s.ynx(0),s._UZ(1,"app-input-password",2),s.BQk()),2&o){const o=s.oxw();s.xp6(1),s.Q6J("options",o.field.options)}}function go(o,e){if(1&o&&(s.ynx(0),s._UZ(1,"app-rich-editor",2),s.BQk()),2&o){const o=s.oxw();s.xp6(1),s.Q6J("options",o.field.options)}}function Zo(o,e){if(1&o&&(s.ynx(0),s._UZ(1,"app-textarea",2),s.BQk()),2&o){const o=s.oxw();s.xp6(1),s.Q6J("options",o.field.options)}}function ho(o,e){if(1&o&&(s.ynx(0),s._UZ(1,"app-dropdown",1),s.BQk()),2&o){const o=s.oxw();s.xp6(1),s.Q6J("options",o.field.options)("customFormGroup",o.mainForm)}}function xo(o,e){if(1&o&&(s.ynx(0),s._UZ(1,"app-page-seo",3),s.BQk()),2&o){const o=s.oxw();s.xp6(1),s.Q6J("formGroup",o.form)}}let To=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-form-builder-core"]],inputs:{field:"field",form:"form",mainForm:"mainForm"},decls:7,vars:7,consts:[[4,"ngIf"],[3,"options","customFormGroup"],[3,"options"],[3,"formGroup"]],template:function(o,e){1&o&&(s.YNc(0,uo,2,2,"ng-container",0),s.YNc(1,fo,2,2,"ng-container",0),s.YNc(2,mo,2,1,"ng-container",0),s.YNc(3,go,2,1,"ng-container",0),s.YNc(4,Zo,2,1,"ng-container",0),s.YNc(5,ho,2,2,"ng-container",0),s.YNc(6,xo,2,1,"ng-container",0)),2&o&&(s.Q6J("ngIf","input"==e.field.controlType),s.xp6(1),s.Q6J("ngIf","chips"==e.field.controlType),s.xp6(1),s.Q6J("ngIf","input-password"==e.field.controlType),s.xp6(1),s.Q6J("ngIf","rich-editor"==e.field.controlType),s.xp6(1),s.Q6J("ngIf","textarea"==e.field.controlType),s.xp6(1),s.Q6J("ngIf","dropdown"==e.field.controlType),s.xp6(1),s.Q6J("ngIf","page-seo"==e.field.controlType))},directives:[r.O5,B,H,R,eo,no,ao,co,p.JL,p.sg],encapsulation:2}),o})();function bo(o,e){if(1&o&&(s.ynx(0),s._UZ(1,"app-form-builder-core",7),s.BQk()),2&o){const o=e.$implicit,t=s.oxw(3).$implicit,n=s.oxw(2);s.xp6(1),s.Q6J("field",o)("form",n.CustomUtils.getLangFormGroup(n.form,t.code))("mainForm",n.mainForm)}}function vo(o,e){if(1&o&&(s.ynx(0),s.TgZ(1,"div"),s.YNc(2,bo,2,3,"ng-container",5),s.qZA(),s.BQk()),2&o){const o=s.oxw().$implicit;s.xp6(1),s.Tol(o.colSize),s.xp6(1),s.Q6J("ngForOf",o.group)}}function qo(o,e){if(1&o&&(s.TgZ(0,"div"),s._UZ(1,"app-form-builder-core",7),s.qZA()),2&o){const o=s.oxw().$implicit,e=s.oxw().$implicit,t=s.oxw(2);s.Tol(o.colSize),s.xp6(1),s.Q6J("field",o)("form",t.CustomUtils.getLangFormGroup(t.form,e.code))("mainForm",t.mainForm)}}function yo(o,e){if(1&o&&(s.ynx(0),s.YNc(1,vo,3,3,"ng-container",0),s.YNc(2,qo,2,5,"ng-template",null,6,s.W1O),s.BQk()),2&o){const o=e.$implicit,t=s.MAs(3);s.xp6(1),s.Q6J("ngIf",o.group)("ngIfElse",t)}}function Fo(o,e){if(1&o&&(s.TgZ(0,"p-tabPanel",3),s.TgZ(1,"section",4),s.YNc(2,yo,4,2,"ng-container",5),s.qZA(),s.qZA()),2&o){const o=e.$implicit,t=s.oxw(2);s.Q6J("header",o.name),s.xp6(1),s.Q6J("ngClass",t.styleClass)("formGroup",t.CustomUtils.getLangFormGroup(t.form,o.code)),s.xp6(1),s.Q6J("ngForOf",t.fields)}}function Oo(o,e){if(1&o&&(s.ynx(0),s.TgZ(1,"p-tabView"),s.YNc(2,Fo,3,4,"p-tabPanel",2),s.qZA(),s.BQk()),2&o){const o=s.oxw();s.xp6(2),s.Q6J("ngForOf",o.appConfig.languages)}}function Ao(o,e){if(1&o&&(s.ynx(0),s._UZ(1,"app-form-builder-core",7),s.BQk()),2&o){const o=e.$implicit,t=s.oxw(4);s.xp6(1),s.Q6J("field",o)("form",t.form)("mainForm",t.mainForm)}}function Co(o,e){if(1&o&&(s.ynx(0),s.TgZ(1,"div"),s.YNc(2,Ao,2,3,"ng-container",5),s.qZA(),s.BQk()),2&o){const o=s.oxw().$implicit;s.xp6(1),s.Tol(o.colSize),s.xp6(1),s.Q6J("ngForOf",o.group)}}function wo(o,e){if(1&o&&(s.TgZ(0,"div"),s._UZ(1,"app-form-builder-core",7),s.qZA()),2&o){const o=s.oxw().$implicit,e=s.oxw(2);s.Tol(o.colSize),s.xp6(1),s.Q6J("field",o)("form",e.form)("mainForm",e.mainForm)}}function _o(o,e){if(1&o&&(s.ynx(0),s.YNc(1,Co,3,3,"ng-container",0),s.YNc(2,wo,2,5,"ng-template",null,6,s.W1O),s.BQk()),2&o){const o=e.$implicit,t=s.MAs(3);s.xp6(1),s.Q6J("ngIf",o.group)("ngIfElse",t)}}function No(o,e){if(1&o&&(s.TgZ(0,"section",4),s.YNc(1,_o,4,2,"ng-container",5),s.qZA()),2&o){const o=s.oxw();s.Q6J("ngClass",o.styleClass)("formGroup",o.form),s.xp6(1),s.Q6J("ngForOf",o.fields)}}let Jo=(()=>{class o{constructor(o){this.appConfig=o,this.multiLang=!1,this.CustomUtils=C}ngOnInit(){}}return o.\u0275fac=function(e){return new(e||o)(s.Y36(a.X))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-form-builder"]],inputs:{form:"form",mainForm:"mainForm",fields:"fields",styleClass:"styleClass",multiLang:"multiLang"},decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["notMultiLangTemplate",""],[3,"header",4,"ngFor","ngForOf"],[3,"header"],[1,"p-grid",3,"ngClass","formGroup"],[4,"ngFor","ngForOf"],["elseTemplate",""],[3,"field","form","mainForm"]],template:function(o,e){if(1&o&&(s.YNc(0,Oo,3,1,"ng-container",0),s.YNc(1,No,2,3,"ng-template",null,1,s.W1O)),2&o){const o=s.MAs(2);s.Q6J("ngIf",e.multiLang)("ngIfElse",o)}},directives:[r.O5,w.xf,r.sg,w.x4,r.mk,p.JL,p.sg,To],encapsulation:2}),o})();function Uo(o,e){if(1&o&&(s.TgZ(0,"p-accordionTab",20),s.TgZ(1,"div",2),s.TgZ(2,"div",18),s._UZ(3,"app-form-builder",19),s.qZA(),s.TgZ(4,"div",18),s.TgZ(5,"pre"),s._uU(6),s.ALo(7,"json"),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&o){const o=e.$implicit,t=e.index,n=s.oxw();s.Q6J("header",o.controlType),s.xp6(3),s.Q6J("form",n.pageForm)("fields",n.getOneField(n.fieldsService.mainFields,t)),s.xp6(3),s.Oqu(s.lcZ(7,4,o))}}function Qo(o,e){if(1&o&&(s.TgZ(0,"p-accordionTab",21),s.TgZ(1,"div",2),s.TgZ(2,"div",18),s.TgZ(3,"pre"),s._uU(4),s.ALo(5,"json"),s.qZA(),s.qZA(),s.TgZ(6,"div",18),s.TgZ(7,"p"),s._uU(8," By default dummy field is control but you can set it to be array with: "),s.TgZ(9,"mark"),s._uU(10,"formControlType:'array'"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.qZA()),2&o){const o=e.$implicit;s.xp6(4),s.Oqu(s.lcZ(5,1,o))}}const Io=[{path:"",component:(()=>{class o{constructor(o,e,t){this.fieldsService=o,this.fb=e,this.formBuilder=t,this.formBuilderHTML='\n  <app-form-builder\n  [form]="pageForm"\n  [fields]="fieldsService.mainFields">\n  </app-form-builder>\n  ',this.multiLangFormTS="this.pageForm = this.fb.group({\n    locale: this.formBuilder.createMultiLangForm(\n      this.fieldsService.mainFields\n    ),\n  });"}ngOnInit(){this.pageForm=this.formBuilder.createForm(this.fieldsService.mainFields),this.gridFields=this.formBuilder.createForm(this.fieldsService.gridFields),this.groupGridFields=this.formBuilder.createForm(this.fieldsService.groupGridFields)}getOneField(o,e){let t=[];return t.push(o[e]),t}}return o.\u0275fac=function(e){return new(e||o)(s.Y36(l),s.Y36(p.qu),s.Y36(c))},o.\u0275cmp=s.Xpm({type:o,selectors:[["app-forms"]],decls:127,vars:14,consts:[["headerType","main","headerTitle","Form builder"],["content",""],[1,"p-grid"],[1,"p-col-12","p-mb-3"],[1,"p-mb-2","p-pb-2"],[1,"p-mb-1"],[1,"p-mb-1","p-mt-3"],[1,"p-mt-2"],[1,"p-col-12"],[1,"p-mb-2"],[1,"p-col-6","p-mb-3"],[1,"p-mt-2","p-mb-2"],[1,"p-mb-2","p-mt-2"],[3,"header",4,"ngFor","ngForOf"],[1,"p-mt-4","p-mb-2"],[1,"p-mb-3"],["header","Dummy fields configuration",4,"ngFor","ngForOf"],[1,"p-mt-3","p-mb-2"],[1,"p-col-6"],[3,"form","fields"],[3,"header"],["header","Dummy fields configuration"]],template:function(o,e){1&o&&(s.TgZ(0,"app-content-layout",0),s.ynx(1,1),s.TgZ(2,"div",2),s.TgZ(3,"div",3),s.TgZ(4,"h2",4),s._uU(5,"Required files for functionality"),s.qZA(),s.TgZ(6,"ul"),s.TgZ(7,"li",5),s._uU(8," core > services > "),s.TgZ(9,"mark"),s._uU(10,"form-builder.service.ts"),s.qZA(),s._uU(11," - For creating angular form. "),s.qZA(),s.TgZ(12,"li",5),s._uU(13," shared > models > "),s.TgZ(14,"mark"),s._uU(15,"form-builder.ts"),s.qZA(),s._uU(16," - Form builder model. "),s.qZA(),s.TgZ(17,"li",5),s._uU(18," shared > compoents > "),s.TgZ(19,"mark"),s._uU(20,"form-builder (folder and subfolder)"),s.qZA(),s._uU(21," - Form builder component for generating form template. "),s.qZA(),s.TgZ(22,"li",5),s._uU(23," shared > components > "),s.TgZ(24,"mark"),s._uU(25,"ALL FORM COMPONENT TYPES (input, textarea etc.)"),s.qZA(),s._uU(26," - Form fields compoents. "),s.qZA(),s.TgZ(27,"li",5),s._uU(28," shared > components > "),s.TgZ(29,"mark"),s._uU(30,"field-errors"),s.qZA(),s._uU(31," - To display field validation. "),s.qZA(),s.qZA(),s.TgZ(32,"h3",6),s._uU(33,"NOTE:"),s.qZA(),s.TgZ(34,"p"),s._uU(35," If you want a field that doesn't exist here you can add it in the same style as the components I added. "),s.qZA(),s.qZA(),s.TgZ(36,"div",3),s.TgZ(37,"h2",4),s._uU(38,"Service configuration"),s.qZA(),s.TgZ(39,"p"),s._uU(40," For each component it is necessary to add a service that will contain the configuration of the form. "),s._UZ(41,"br"),s._uU(42," That service should be named: "),s.TgZ(43,"mark"),s.TgZ(44,"b"),s._uU(45,"component-name"),s.qZA(),s._uU(46,"-fields.service.ts"),s.qZA(),s._uU(47,". "),s.qZA(),s.TgZ(48,"p",7),s._uU(49," In this service you need to create a variable that will contain the configuration and that will have the type FormBuilder[] "),s.qZA(),s.TgZ(50,"pre",7),s._uU(51,"mainFields: FormBuilder[] = [ ... ]"),s.qZA(),s.qZA(),s.TgZ(52,"div",8),s.TgZ(53,"h2",9),s._uU(54,"HTML code for form builder"),s.qZA(),s.qZA(),s.TgZ(55,"div",10),s.TgZ(56,"pre"),s._uU(57),s.qZA(),s.qZA(),s.TgZ(58,"div",10),s.TgZ(59,"p"),s._uU(60," If you want multi language from you can add attribute "),s.TgZ(61,"mark"),s._uU(62,'[multiLang]="true"'),s.qZA(),s.qZA(),s.qZA(),s.TgZ(63,"div",8),s.TgZ(64,"h2",9),s._uU(65,"TS code for form builder"),s.qZA(),s.TgZ(66,"p"),s._uU(67," If you want ordinary form you can call service "),s.TgZ(68,"mark"),s._uU(69,"form-builder.service.ts"),s.qZA(),s._uU(70," and execute function "),s.TgZ(71,"mark"),s._uU(72,"createForm()"),s.qZA(),s._uU(73," and pass fields configurations. "),s.qZA(),s.TgZ(74,"pre",11),s._uU(75,"this.pageForm = this.formBuilder.createForm(this.fieldsService.mainFields);"),s.qZA(),s.TgZ(76,"p"),s._uU(77," If you want multi language form just call function createMultiLangForm() "),s.qZA(),s.TgZ(78,"pre",7),s._uU(79),s.qZA(),s.qZA(),s.TgZ(80,"div",8),s.TgZ(81,"h2",12),s._uU(82,"Form controls UI + configuration"),s.qZA(),s.TgZ(83,"p"),s._uU(84," Set this fields in "),s.TgZ(85,"mark"),s._uU(86,"something-fields.service.ts"),s.qZA(),s._uU(87," service. "),s.qZA(),s.qZA(),s.TgZ(88,"div",8),s.TgZ(89,"p-accordion"),s.YNc(90,Uo,8,6,"p-accordionTab",13),s.qZA(),s.TgZ(91,"h3",14),s._uU(92,"Dummy fields"),s.qZA(),s.TgZ(93,"p",15),s._uU(94," This fields doesn`t have UI representation, they just exist in angular form builder. "),s.qZA(),s.TgZ(95,"p-accordion"),s.YNc(96,Qo,11,3,"p-accordionTab",16),s.qZA(),s.qZA(),s.TgZ(97,"div",8),s.TgZ(98,"h2",12),s._uU(99,"Form grid"),s.qZA(),s.TgZ(100,"p"),s._uU(101," In property "),s.TgZ(102,"mark"),s._uU(103,"colSize"),s.qZA(),s._uU(104," for every field you can pass p-col- classes from primeng (primeflex) grid system. "),s.qZA(),s.TgZ(105,"h4",17),s._uU(106,"Example:"),s.qZA(),s.TgZ(107,"div",2),s.TgZ(108,"div",18),s.TgZ(109,"p",9),s._uU(110," Every field in this form will be 12 cols on mobile and 4 cols on every other screen size. "),s.qZA(),s._UZ(111,"app-form-builder",19),s.qZA(),s.TgZ(112,"div",18),s.TgZ(113,"pre"),s._uU(114),s.ALo(115,"json"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(116,"h3",14),s._uU(117,"Field groups"),s.qZA(),s.TgZ(118,"p",9),s._uU(119," If you want to group fields you can do so by putting them in a "),s.TgZ(120,"mark"),s._uU(121,"group"),s.qZA(),s._uU(122," key. In that case you set colSize for whole group not for single field, like in example bellow. "),s.qZA(),s._UZ(123,"app-form-builder",19),s.TgZ(124,"pre"),s._uU(125),s.ALo(126,"json"),s.qZA(),s.qZA(),s.qZA(),s.BQk(),s.qZA()),2&o&&(s.xp6(57),s.Oqu(e.formBuilderHTML),s.xp6(22),s.hij(" ",e.multiLangFormTS," "),s.xp6(11),s.Q6J("ngForOf",e.fieldsService.mainFields),s.xp6(6),s.Q6J("ngForOf",e.fieldsService.dummyFields),s.xp6(15),s.Q6J("form",e.pageForm)("fields",e.fieldsService.gridFields),s.xp6(3),s.hij("              ",s.lcZ(115,10,e.fieldsService.gridFields[0]),"\n            "),s.xp6(9),s.Q6J("form",e.groupGridFields)("fields",e.fieldsService.groupGridFields),s.xp6(2),s.Oqu(s.lcZ(126,12,e.fieldsService.groupGridFields)))},directives:[O,A.UQ,r.sg,Jo,A.US],pipes:[r.Ts],styles:["pre[_ngcontent-%COMP%]{background-color:#1e1e2d0f;padding:.5rem}mark[_ngcontent-%COMP%], pre[_ngcontent-%COMP%]{font-family:monospace}.developer-box[_ngcontent-%COMP%]{width:100%;height:140vh}ul[_ngcontent-%COMP%]{list-style-position:inside}"]}),o})()}];let Go=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[u.Bz.forChild(Io)],u.Bz]}),o})(),ko=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=s.oAB({type:o}),o.\u0275inj=s.cJS({imports:[[r.ez,u.Bz,i.q,Go,n.D]]}),o})()}}]);