var x=Object.defineProperty;var D=(r,n,t)=>n in r?x(r,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[n]=t;var y=(r,n,t)=>D(r,typeof n!="symbol"?n+"":n,t);import{a as z,B as $,S as B}from"./site-wrapper.component-BkRqVMXQ.js";import{F as G,b as S,R,ɵ as V,N as K,c as L,d as U,e as W,T as Y,a as Z}from"./textarea.component-BCZEXrg2.js";import{$ as A,a as N,R as j,b as T,C as E,V as I,f as b,y as k,h as v,F as q,x as H,l as C,k as g,L as F}from"./index-CUJSWoNJ.js";const J="Kontakt",Q="Neváhajte sa s nami spojiť",X="Naša autoškola je vám k dispozícii počas celého roka. Kontaktujte nás pre viac informácií o našich kurzoch a službách.",tt="Adresa",nt="anto NOVA, s. r. o.",et="Račianska 69/A",ot="831 02, Bratislava",at="E-mail:",rt={title:J,subtitle:Q,description:X,address:tt,companyName:nt,streetAddress:et,postalCode:ot,email:at},st="Contact",ct="Don't hesitate to get in touch with us",it="Our driving school is available to you throughout the year. Contact us for more information about our courses and services.",lt="Address",mt="anto NOVA, s. r. o.",pt="Račianska 69/A",gt="831 02, Bratislava",dt="E-mail:",ut={title:st,subtitle:ct,description:it,address:lt,companyName:mt,streetAddress:pt,postalCode:gt,email:dt},ft="stay-loggy",ht="",_t={loggingSecret:ft,wpApiUrl:ht};class f{#t=_t;get loggingSecret(){return this.#t.loggingSecret}get wpApiUrl(){return this.#t.wpApiUrl}static ɵfac=function(t){return new(t||f)};static ɵprov=A({token:f,factory:f.ɵfac,providedIn:"root"})}const w="logs-enabled";class h{#t=N(f);#e=this.#t.loggingSecret;constructor(){const n=this.#e;window.enableAppLogs=t=>{t===n?(localStorage.setItem(w,"1"),console.info("App logs enabled")):console.warn("Invalid app logs token")},window.disableAppLogs=()=>{localStorage.removeItem(w),console.info("App logs disabled")}}#n(){return localStorage.getItem(w)==="1"}info(n,t,...e){this.#n()&&console.info(`[${n}] ${t}`,...e)}warn(n,t,...e){this.#n()&&console.warn(`[${n}] ${t}`,...e)}error(n,t,e){this.#n()&&console.error(`[${n}] ${t}`,e)}withContext(n){return{info:(t,...e)=>this.info(n,t,...e),warn:(t,...e)=>this.warn(n,t,...e),error:(t,e)=>this.error(n,t,e)}}static ɵfac=function(t){return new(t||h)};static ɵprov=A({token:h,factory:h.ɵfac,providedIn:"root"})}function Ct(r){Object.defineProperty(r.prototype,"logger",{get:function(){return N(h)},enumerable:!0,configurable:!0})}const bt={},vt={};var Ot=function(r,n,t,e,s,l){function a(u){if(u!==void 0&&typeof u!="function")throw new TypeError("Function expected");return u}for(var d=e.kind,c=d==="getter"?"get":d==="setter"?"set":"value",i=n||{},o,M=!1,P=t.length-1;P>=0;P--){var _={};for(var p in e)_[p]=p==="access"?{}:e[p];for(var p in e.access)_.access[p]=e.access[p];_.addInitializer=function(u){if(M)throw new TypeError("Cannot add initializers after decoration has completed");l.push(a(u||null))};var m=(0,t[P])(d==="accessor"?{get:i.get,set:i.set}:i[c],_);if(d==="accessor"){if(m===void 0)continue;if(m===null||typeof m!="object")throw new TypeError("Object expected");(o=a(m.get))&&(i.get=o),(o=a(m.set))&&(i.set=o),(o=a(m.init))&&s.unshift(o)}else(o=a(m))&&(d==="field"?s.unshift(o):i[c]=o)}M=!0},Mt=function(r,n,t){for(var e=arguments.length>2,s=0;s<n.length;s++)t=e?n[s].call(r,t):n[s].call(r);return e?t:void 0};(()=>{var a;let r=[Ct],n,t=[],e,s=$;var l=(a=class extends s{t=this.registerTranslations({sk:bt,en:vt});form=new G({email:new S(null),message:new S(null)});logger;handleSubmit(){this.logger.info("Contact form submitted:",this.form.value)}},e=a,(()=>{const c=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;Ot(null,n={value:e},r,{kind:"class",name:e.name,metadata:c},null,t),l=e=n.value,c&&Object.defineProperty(e,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:c})})(),y(a,"ɵfac",(()=>{let c;return function(o){return(c||(c=j(l)))(o||l)}})()),y(a,"ɵcmp",T({type:l,selectors:[["app-contact-form"]],features:[I],decls:9,vars:11,consts:[[1,"ac-content",3,"formGroup"],[1,"ac-content"],["formControlName","email",3,"label","placeholder","inverted"],["formControlName","message",3,"label","placeholder","inverted"],[3,"click","text","inverted"]],template:function(i,o){i&1&&(b(0,"form",0)(1,"div",1)(2,"h1"),k(3),v(),b(4,"h2"),k(5),v()(),q(6,"app-textfield",2)(7,"app-textarea",3),b(8,"app-button",4),H("click",function(){return o.handleSubmit()}),v()()),i&2&&(C("formGroup",o.form),g(3),F(o.t("Kontaktný formulár")),g(2),F(o.t("Napíšte nám už teraz")),g(),C("label",o.t("E-mail"))("placeholder",o.t("Zadajte váš e-mail"))("inverted",!0),g(),C("label",o.t("Správa"))("placeholder",o.t("Miesto na vašu poznámku"))("inverted",!0),g(),C("text",o.t("Odoslať správu"))("inverted",!0))},dependencies:[E,R,V,K,L,U,W,Y,Z,z],styles:[`[_nghost-%COMP%]   form[_ngcontent-%COMP%] {
  flex-grow: 0;
  flex-shrink: 0;
  min-width: calc(var(--base-unit) * 5);
  padding: 1.25rem;
  background-color: var(--an-blue);
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  justify-items: flex-end;
  height: 436px;
}
[_nghost-%COMP%]   form[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], 
[_nghost-%COMP%]   form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], 
[_nghost-%COMP%]   form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  color: white;
}
[_nghost-%COMP%]   form[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {
  align-self: flex-start;
  margin-top: auto;
  margin-bottom: 0;
}`],changeDetection:0})),Mt(e,t),a);return l=e})();class O extends ${t=this.registerTranslations({sk:rt,en:ut});static ɵfac=(()=>{let n;return function(e){return(n||(n=j(O)))(e||O)}})();static ɵcmp=T({type:O,selectors:[["app-contact"]],features:[I],decls:4,vars:1,template:function(t,e){t&1&&(b(0,"app-site-wrapper")(1,"section")(2,"h1"),k(3),v()()()),t&2&&(g(3),F(e.t("title")))},dependencies:[E,B],styles:[`[_nghost-%COMP%]   .ac-section[_ngcontent-%COMP%] {
  margin-top: 5rem;
  background-color: white !important;
}
[_nghost-%COMP%]   .ac-section[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], 
[_nghost-%COMP%]   .ac-section[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%], 
[_nghost-%COMP%]   .ac-section[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {
  width: calc(var(--base-unit) * 4);
  margin: 0;
}
[_nghost-%COMP%]   .left[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {
  width: calc(var(--base-unit) * 4);
  padding-bottom: 1.875rem;
}
[_nghost-%COMP%]   .contact-block[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  margin-bottom: 3.125rem;
  align-items: flex-start;
}
[_nghost-%COMP%]   .contact-block[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {
  width: 5rem;
  height: 5rem;
  margin-right: 1.25rem;
  background-color: var(--an-blue);
  font-size: 3.125rem;
}
[_nghost-%COMP%]   .contact-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {
  margin: 0 0 0.1875rem;
  font-weight: bold;
}
[_nghost-%COMP%]   .contact-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  margin: 0;
  font-size: 1rem;
  font-weight: 400;
  width: calc(var(--base-unit) * 5);
}
[_nghost-%COMP%]   .map[_ngcontent-%COMP%] {
  display: block;
  border: 0;
}`],changeDetection:0})}export{O as ContactComponent};
