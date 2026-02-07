var E=Object.defineProperty;var D=(r,e,t)=>e in r?E(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var P=(r,e,t)=>D(r,typeof e!="symbol"?e+"":e,t);import{a as I,B as S,S as x}from"./site-wrapper.component-B2N1a6Cs.js";import{F as z,b as F,R as B,ɵ as G,N as R,c as V,d as K,e as L,T as W,a as Y}from"./textarea.component-SWMn5AOo.js";import{a as N,a3 as Z,R as $,b as j,C as A,V as T,f as C,y as w,h as b,F as q,x as H,l as _,k as d,L as k}from"./index-DD_Nxjev.js";import{C as J}from"./config.service-wkdCpaav.js";const Q="Kontakt",U="Neváhajte sa s nami spojiť",X="Naša autoškola je vám k dispozícii počas celého roka. Kontaktujte nás pre viac informácií o našich kurzoch a službách.",tt="Adresa",et="anto NOVA, s. r. o.",nt="Račianska 69/A",ot="831 02, Bratislava",at="E-mail:",rt={title:Q,subtitle:U,description:X,address:tt,companyName:et,streetAddress:nt,postalCode:ot,email:at},st="Contact",it="Don't hesitate to get in touch with us",ct="Our driving school is available to you throughout the year. Contact us for more information about our courses and services.",lt="Address",mt="anto NOVA, s. r. o.",pt="Račianska 69/A",dt="831 02, Bratislava",gt="E-mail:",ut={title:st,subtitle:it,description:ct,address:lt,companyName:mt,streetAddress:pt,postalCode:dt,email:gt},y="logs-enabled";class f{#e=N(J);#n=this.#e.loggingSecret;constructor(){const e=this.#n;window.enableAppLogs=t=>{t===e?(localStorage.setItem(y,"1"),console.info("App logs enabled")):console.warn("Invalid app logs token")},window.disableAppLogs=()=>{localStorage.removeItem(y),console.info("App logs disabled")}}#t(){return localStorage.getItem(y)==="1"}info(e,t,...n){this.#t()&&console.info(`[${e}] ${t}`,...n)}warn(e,t,...n){this.#t()&&console.warn(`[${e}] ${t}`,...n)}error(e,t,n){this.#t()&&console.error(`[${e}] ${t}`,n)}withContext(e){return{info:(t,...n)=>this.info(e,t,...n),warn:(t,...n)=>this.warn(e,t,...n),error:(t,n)=>this.error(e,t,n)}}static ɵfac=function(t){return new(t||f)};static ɵprov=Z({token:f,factory:f.ɵfac,providedIn:"root"})}function ft(r){Object.defineProperty(r.prototype,"logger",{get:function(){return N(f)},enumerable:!0,configurable:!0})}const ht={},_t={};var Ct=function(r,e,t,n,s,l){function a(u){if(u!==void 0&&typeof u!="function")throw new TypeError("Function expected");return u}for(var g=n.kind,i=g==="getter"?"get":g==="setter"?"set":"value",c=e||{},o,O=!1,M=t.length-1;M>=0;M--){var h={};for(var p in n)h[p]=p==="access"?{}:n[p];for(var p in n.access)h.access[p]=n.access[p];h.addInitializer=function(u){if(O)throw new TypeError("Cannot add initializers after decoration has completed");l.push(a(u||null))};var m=(0,t[M])(g==="accessor"?{get:c.get,set:c.set}:c[i],h);if(g==="accessor"){if(m===void 0)continue;if(m===null||typeof m!="object")throw new TypeError("Object expected");(o=a(m.get))&&(c.get=o),(o=a(m.set))&&(c.set=o),(o=a(m.init))&&s.unshift(o)}else(o=a(m))&&(g==="field"?s.unshift(o):c[i]=o)}O=!0},bt=function(r,e,t){for(var n=arguments.length>2,s=0;s<e.length;s++)t=n?e[s].call(r,t):e[s].call(r);return n?t:void 0};(()=>{var a;let r=[ft],e,t=[],n,s=S;var l=(a=class extends s{t=this.registerTranslations({sk:ht,en:_t});form=new z({email:new F(null),message:new F(null)});logger;handleSubmit(){this.logger.info("Contact form submitted:",this.form.value)}},n=a,(()=>{const i=typeof Symbol=="function"&&Symbol.metadata?Object.create(s[Symbol.metadata]??null):void 0;Ct(null,e={value:n},r,{kind:"class",name:n.name,metadata:i},null,t),l=n=e.value,i&&Object.defineProperty(n,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:i})})(),P(a,"ɵfac",(()=>{let i;return function(o){return(i||(i=$(l)))(o||l)}})()),P(a,"ɵcmp",j({type:l,selectors:[["app-contact-form"]],features:[T],decls:9,vars:11,consts:[[1,"ac-content",3,"formGroup"],[1,"ac-content"],["formControlName","email",3,"label","placeholder","inverted"],["formControlName","message",3,"label","placeholder","inverted"],[3,"click","text","inverted"]],template:function(c,o){c&1&&(C(0,"form",0)(1,"div",1)(2,"h1"),w(3),b(),C(4,"h2"),w(5),b()(),q(6,"app-textfield",2)(7,"app-textarea",3),C(8,"app-button",4),H("click",function(){return o.handleSubmit()}),b()()),c&2&&(_("formGroup",o.form),d(3),k(o.t("Kontaktný formulár")),d(2),k(o.t("Napíšte nám už teraz")),d(),_("label",o.t("E-mail"))("placeholder",o.t("Zadajte váš e-mail"))("inverted",!0),d(),_("label",o.t("Správa"))("placeholder",o.t("Miesto na vašu poznámku"))("inverted",!0),d(),_("text",o.t("Odoslať správu"))("inverted",!0))},dependencies:[A,B,G,R,V,K,L,W,Y,I],styles:[`[_nghost-%COMP%]   form[_ngcontent-%COMP%] {
  flex-grow: 0;
  flex-shrink: 0;
  min-width: calc(var(--base-unit) * 5);
  padding: 1.25rem;
  background-color: var(--an-blue);
  display: flex;
  gap: 1.25rem;
  flex-direction: column;
  justify-items: flex-end;
  height: 27.25rem;
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
}`],changeDetection:0})),bt(n,t),a);return l=n})();class v extends S{t=this.registerTranslations({sk:rt,en:ut});static ɵfac=(()=>{let e;return function(n){return(e||(e=$(v)))(n||v)}})();static ɵcmp=j({type:v,selectors:[["app-contact"]],features:[T],decls:4,vars:1,template:function(t,n){t&1&&(C(0,"app-site-wrapper")(1,"section")(2,"h1"),w(3),b()()()),t&2&&(d(3),k(n.t("title")))},dependencies:[A,x],styles:[`[_nghost-%COMP%]   .ac-section[_ngcontent-%COMP%] {
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
}`],changeDetection:0})}export{v as ContactComponent};
