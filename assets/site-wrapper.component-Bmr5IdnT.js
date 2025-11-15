import{a as l,au as _,i,Q as m,R as w,b as r,C as g,av as j,aw as y,ax as L,ay as U,S as H,az as S,f as a,j as D,h as s,l as O,aA as $,u as N,aB as B,k as p,m as A,y as x,q as R,A as Z,aC as z,a4 as q,F as c,H as I,J as E,P as W,L as K,aD as Y,z as G,aE as J,O as V,aF as Q,s as X,Y as nn,a5 as tn,X as en}from"./index-hehcb5av.js";const on="O nás",an="Kurzy a služby",sn="Dokumenty na stiahnutie",rn={headerAboutUs:on,courses:an,materials:sn},cn="About Us",ln="Courses and Services",pn="Documents for Download",gn={headerAboutUs:cn,courses:ln,materials:pn};class F{languageService=l(_);registerTranslations(n){return this.languageService.t(n)}}const dn=["*"],un=(o,n)=>["/",o,n],hn=()=>({exact:!0}),Cn=o=>({"custom-label":o});function mn(o,n){o&1&&z(0)}function _n(o,n){if(o&1&&x(0),o&2){const t=R();Z(" ",t.label()," ")}}class d extends F{path=i.required();translatedPath=m(()=>this.langService.getRoutePath(this.path(),this.lang()));customLabel=i(!1);langService=l(_);lang=this.langService.lang;t=this.registerTranslations({sk:rn,en:gn});label=m(()=>{const n=this.path(),t=n==="aboutUs"?"headerAboutUs":n;return n==="contact"?this.languageService.t({})(n)||"":this.t(t)||""});static ɵfac=(()=>{let n;return function(e){return(n||(n=w(d)))(e||d)}})();static ɵcmp=r({type:d,selectors:[["app-header-link"]],inputs:{path:[1,"path"],customLabel:[1,"customLabel"]},features:[H],ngContentSelectors:dn,decls:3,vars:10,consts:[["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions","ngClass"]],template:function(t,e){t&1&&(S(),a(0,"a",0),D(1,mn,1,0)(2,_n,1,1),s()),t&2&&(O("routerLink",$(4,un,e.lang(),e.translatedPath()))("routerLinkActiveOptions",N(7,hn))("ngClass",B(8,Cn,e.customLabel())),p(),A(e.customLabel()?1:2))},dependencies:[g,j,y,L,U],styles:[`[_nghost-%COMP%]   a[_ngcontent-%COMP%] {
  text-decoration: none;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  line-height: 100%;
  letter-spacing: 0%;
  font-weight: 400;
  vertical-align: middle;
  color: black;
  position: relative;
  white-space: nowrap;
  display: inline-block;
}
[_nghost-%COMP%]   a.custom-label[_ngcontent-%COMP%] {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
[_nghost-%COMP%]   a.active[_ngcontent-%COMP%] {
  color: var(--an-blue) !important;
  text-decoration: underline;
  text-underline-offset: 0.5rem;
  text-decoration-thickness: 0.25rem;
}
[_nghost-%COMP%]   a[_ngcontent-%COMP%]:visited {
  color: black;
}`],changeDetection:0})}class v{#n=l(_);lang=this.#n.lang;getHomePath(){const n=this.lang();return`/${n}/${n==="sk"?"uvod":"home"}`}static ɵfac=function(t){return new(t||v)};static ɵcmp=r({type:v,selectors:[["app-logo"]],decls:12,vars:1,consts:[[1,"logo",3,"routerLink"],["width","154","height","60","viewBox","0 0 154 60","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M61.7998 20.4C72.735 20.4 81.5995 29.2647 81.5996 40.1998C81.5996 51.135 72.735 59.9996 61.7998 59.9996C50.8647 59.9995 42 51.135 42 40.1998C42.0001 29.2647 50.8647 20.4001 61.7998 20.4ZM61.5 30.6002C56.0325 30.6002 51.5998 35.0322 51.5996 40.4996C51.5996 45.9672 56.0324 50.4 61.5 50.4C66.9676 50.4 71.4004 45.9672 71.4004 40.4996C71.4002 35.0322 66.9675 30.6002 61.5 30.6002Z","fill","#D70000"],["d","M98.9998 59.9996L79.2 20.4H92.0994L98.9998 34.1998L105.9 20.4H118.8L98.9998 59.9996Z","fill","#264C96"],["d","M19.7998 20.4C30.735 20.4 39.5995 29.2647 39.5996 40.1998H29.3926C29.2338 34.8711 24.8672 30.6002 19.5 30.6002C14.1328 30.6002 9.76619 34.8711 9.60742 40.1998H0C0.000105141 29.2647 8.86472 20.4001 19.7998 20.4Z","fill","#264C96"],["d","M133.8 20.4C144.735 20.4 153.6 29.2647 153.6 40.1998H143.393C143.234 34.8711 138.867 30.6002 133.5 30.6002C128.133 30.6002 123.766 34.8711 123.607 40.1998H114C114 29.2647 122.865 20.4001 133.8 20.4Z","fill","#264C96"],["y","40.2","width","9.6","height","19.8","fill","#264C96"],["x","114","y","40.2","width","9.6","height","19.8","fill","#264C96"],["x","114","y","41.4","width","25.8","height","10.2","fill","#264C96"],["x","29.4","y","40.2","width","10.2","height","19.8","fill","#264C96"],["x","143.4","y","40.2","width","10.2","height","19.8","fill","#264C96"],["d","M3.648 19.2304C3.2128 19.2304 2.816 19.1536 2.4576 19C2.112 18.8592 1.8176 18.6608 1.5744 18.4048C1.3312 18.136 1.1392 17.8288 0.9984 17.4832C0.8704 17.1376 0.8064 16.76 0.8064 16.3504C0.8064 15.352 1.2288 14.5712 2.0736 14.008C2.9184 13.4448 4.2816 13.0672 6.1632 12.8752C6.1376 12.4528 6.0096 12.12 5.7792 11.8768C5.5616 11.6208 5.1904 11.4928 4.6656 11.4928C4.256 11.4928 3.8464 11.5696 3.4368 11.7232C3.04 11.8768 2.6112 12.088 2.1504 12.3568L1.1328 10.4944C1.7472 10.1232 2.3872 9.8224 3.0528 9.592C3.7312 9.3616 4.448 9.2464 5.2032 9.2464C6.432 9.2464 7.3664 9.5984 8.0064 10.3024C8.6592 10.9936 8.9856 12.0752 8.9856 13.5472V19H6.6816L6.4896 18.0208H6.4128C6.0032 18.3792 5.5744 18.6736 5.1264 18.904C4.6784 19.1216 4.1856 19.2304 3.648 19.2304ZM4.608 17.0416C4.928 17.0416 5.2032 16.9712 5.4336 16.8304C5.664 16.6896 5.9072 16.4912 6.1632 16.2352V14.5648C5.1648 14.7056 4.4736 14.9104 4.0896 15.1792C3.7056 15.448 3.5136 15.768 3.5136 16.1392C3.5136 16.4464 3.6096 16.6768 3.8016 16.8304C4.0064 16.9712 4.2752 17.0416 4.608 17.0416ZM11.373 19V9.4768H13.677L13.869 10.6864H13.9458C14.3554 10.3024 14.8034 9.9696 15.2898 9.688C15.7762 9.3936 16.3458 9.2464 16.9986 9.2464C18.0354 9.2464 18.7842 9.5856 19.245 10.264C19.7186 10.9424 19.9554 11.8832 19.9554 13.0864V19H17.133V13.4512C17.133 12.76 17.037 12.2864 16.845 12.0304C16.6658 11.7744 16.3714 11.6464 15.9618 11.6464C15.6034 11.6464 15.2962 11.7296 15.0402 11.896C14.7842 12.0496 14.5026 12.2736 14.1954 12.568V19H11.373ZM26.0277 19.2304C25.4389 19.2304 24.9333 19.1408 24.5109 18.9616C24.1013 18.7824 23.7621 18.5328 23.4933 18.2128C23.2373 17.8928 23.0453 17.5088 22.9173 17.0608C22.8021 16.6 22.7445 16.0944 22.7445 15.544V11.6848H21.4389V9.592L22.8981 9.4768L23.2245 6.9424H25.5669V9.4768H27.8517V11.6848H25.5669V15.5056C25.5669 16.0432 25.6757 16.4336 25.8933 16.6768C26.1237 16.9072 26.4245 17.0224 26.7957 17.0224C26.9493 17.0224 27.1029 17.0032 27.2565 16.9648C27.4229 16.9264 27.5701 16.8816 27.6981 16.8304L28.1397 18.8848C27.8837 18.9616 27.5829 19.0384 27.2373 19.1152C26.8917 19.192 26.4885 19.2304 26.0277 19.2304ZM33.4626 19.2304C32.861 19.2304 32.2786 19.1216 31.7154 18.904C31.1522 18.6736 30.653 18.3472 30.2178 17.9248C29.7954 17.5024 29.4562 16.984 29.2002 16.3696C28.9442 15.7424 28.8162 15.032 28.8162 14.2384C28.8162 13.4448 28.9442 12.7408 29.2002 12.1264C29.4562 11.4992 29.7954 10.9744 30.2178 10.552C30.653 10.1296 31.1522 9.8096 31.7154 9.592C32.2786 9.3616 32.861 9.2464 33.4626 9.2464C34.0642 9.2464 34.6402 9.3616 35.1906 9.592C35.7538 9.8096 36.2466 10.1296 36.669 10.552C37.1042 10.9744 37.4498 11.4992 37.7058 12.1264C37.9618 12.7408 38.0898 13.4448 38.0898 14.2384C38.0898 15.032 37.9618 15.7424 37.7058 16.3696C37.4498 16.984 37.1042 17.5024 36.669 17.9248C36.2466 18.3472 35.7538 18.6736 35.1906 18.904C34.6402 19.1216 34.0642 19.2304 33.4626 19.2304ZM33.4626 16.9456C34.0386 16.9456 34.4738 16.7024 34.7682 16.216C35.0626 15.7296 35.2098 15.0704 35.2098 14.2384C35.2098 13.4064 35.0626 12.7472 34.7682 12.2608C34.4738 11.7744 34.0386 11.5312 33.4626 11.5312C32.8738 11.5312 32.4322 11.7744 32.1378 12.2608C31.8562 12.7472 31.7154 13.4064 31.7154 14.2384C31.7154 15.0704 31.8562 15.7296 32.1378 16.216C32.4322 16.7024 32.8738 16.9456 33.4626 16.9456Z","fill","black"]],template:function(t,e){t&1&&(a(0,"a",0),q(),a(1,"svg",1),c(2,"path",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"rect",6)(7,"rect",7)(8,"rect",8)(9,"rect",9)(10,"rect",10)(11,"path",11),s()()),t&2&&O("routerLink",e.getHomePath())},dependencies:[g,y,L],styles:[`[_nghost-%COMP%] {
  display: inline-block;
}

.logo[_ngcontent-%COMP%] {
  display: inline-block;
  text-decoration: none;
  color: inherit;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
}
.logo[_ngcontent-%COMP%]:hover {
  opacity: 0.8;
}`],changeDetection:0})}function fn(){return typeof window<"u"&&window.crypto&&typeof window.crypto.randomUUID=="function"?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,o=>{const n=Math.random()*16|0;return(o==="x"?n:n&3|8).toString(16)})}class b{id=fn();text=i.required();disabled=i(!1);fullWidth=i(!1);inverted=i(!1);backgroundColor=i(void 0);rounded=i(!1);static ɵfac=function(t){return new(t||b)};static ɵcmp=r({type:b,selectors:[["app-button"]],hostVars:8,hostBindings:function(t,e){t&2&&(Y("--button-bg-color",e.backgroundColor()),G("full-width",e.fullWidth())("inverted",e.inverted())("rounded",e.rounded()))},inputs:{text:[1,"text"],disabled:[1,"disabled"],fullWidth:[1,"fullWidth"],inverted:[1,"inverted"],backgroundColor:[1,"backgroundColor"],rounded:[1,"rounded"]},decls:2,vars:2,consts:[["type","button",3,"disabled"]],template:function(t,e){t&1&&(I(0,"button",0),x(1),E()),t&2&&(W("disabled",e.disabled()),p(),K(e.text()))},styles:[`[_nghost-%COMP%]   button[_ngcontent-%COMP%] {
  height: 2.5rem;
  background-color: var(--button-bg-color, var(--an-blue));
  color: white;
  border: none;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
  cursor: pointer;
  padding: 0 1.6875rem;
  transition: opacity 0.2s ease;
}
[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
[_nghost-%COMP%]   button[_ngcontent-%COMP%]:disabled {
  background-color: var(--an-light-gray);
  cursor: not-allowed;
  opacity: 1;
}
.rounded[_nghost-%COMP%]   button[_ngcontent-%COMP%] {
  border-radius: 72px;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-size: 18px;
  height: 50px;
  padding: 0 2rem;
}
.rounded[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {
  opacity: 0.9;
}
.full-width[_nghost-%COMP%]   button[_ngcontent-%COMP%] {
  width: 100%;
}
.inverted[_nghost-%COMP%]   button[_ngcontent-%COMP%] {
  background-color: white;
  color: black;
}
.submit-button[_nghost-%COMP%]   button[_ngcontent-%COMP%] {
  background-color: var(--an-blue);
  font-size: 1.1rem;
  padding: 0.75rem 2rem;
  height: auto;
}
.submit-button[_nghost-%COMP%]   button[_ngcontent-%COMP%]:hover {
  background-color: var(--an-blue);
  opacity: 0.9;
}`],changeDetection:0})}class P{#n=l(J);#t=l(_);lang=this.#t.lang;switchLang(n){const t=this.#n.url.split("/"),e=t[1]||"en",f=t.slice(2).join("/"),T=this.#t.translateRoute(f,e,n);T?this.#n.navigate(["/",n,T]):this.#n.navigate(["/",n])}static ɵfac=function(t){return new(t||P)};static ɵcmp=r({type:P,selectors:[["app-header"]],decls:10,vars:1,consts:[[1,"left"],[1,"center"],["path","aboutUs"],["path","courses"],["path","materials"],["path","contact"],[1,"right"],["text","Prihláška na kurz","backgroundColor","black",1,"application-button",3,"rounded"]],template:function(t,e){t&1&&(a(0,"nav")(1,"div",0),c(2,"app-logo"),s(),a(3,"div",1),c(4,"app-header-link",2)(5,"app-header-link",3)(6,"app-header-link",4)(7,"app-header-link",5),s(),a(8,"div",6),c(9,"app-button",7),s()()),t&2&&(p(9),O("rounded",!0))},dependencies:[g,y,d,v,b],styles:[`[_nghost-%COMP%] {
  position: relative;
  z-index: 10;
  width: 100%;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%] {
  display: flex;
  align-items: self-start;
  gap: 2rem;
  width: 81.25rem;
  height: 100px;
  margin: 0 auto;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {
  position: relative;
  top: 15px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {
  position: relative;
  top: 20px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .application-button[_ngcontent-%COMP%]     button {
  width: 200px;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {
  position: relative;
  top: 33px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  flex-wrap: nowrap;
  min-width: 0;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .langs[_ngcontent-%COMP%] {
  position: relative;
  height: 1.5rem;
  align-items: center;
  display: flex;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .langs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  background: none;
  border: none;
  color: black;
  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 700;
  cursor: pointer;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .langs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {
  color: var(--an-blue);
  cursor: not-allowed;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .langs[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%] {
  display: inline-block;
  position: relative;
  margin: 0 0.5rem;
  height: 1.5rem;
  width: 2px;
  background-color: black;
}`]})}const vn="Copyright",bn="antoNOVA",Pn={"Pätička stránky":"Pätička stránky","Hlavná navigácia pätičky":"Hlavná navigácia pätičky",Copyright:vn,antoNOVA:bn},Mn="Copyright",yn="antoNOVA",On={"Pätička stránky":"Page footer","Hlavná navigácia pätičky":"Main footer navigation",Copyright:Mn,antoNOVA:yn},xn={"nav.home":"Domov","nav.aboutUs":"O nás","nav.courses":"Kurzy a služby","nav.materials":"Dokumenty na stiahnutie","nav.contact":"Kontakt","nav.gdpr":"GDPR"},kn={"nav.home":"Home","nav.aboutUs":"About Us","nav.courses":"Courses and Services","nav.materials":"Documents for Download","nav.contact":"Contact","nav.gdpr":"GDPR"},wn=["*"],Ln=(o,n)=>["/",o,n],Hn=()=>({exact:!0}),Sn=o=>({"custom-label":o});function Dn(o,n){o&1&&z(0)}function An(o,n){if(o&1&&x(0),o&2){const t=R();Z(" ",t.label()," ")}}class u extends F{path=i.required();translatedPath=m(()=>this.langService.getRoutePath(this.path(),this.lang()));customLabel=i(!1);langService=l(_);lang=this.langService.lang;t=this.registerTranslations({sk:xn,en:kn});label=m(()=>this.t(`nav.${this.path()}`)||"");static ɵfac=(()=>{let n;return function(e){return(n||(n=w(u)))(e||u)}})();static ɵcmp=r({type:u,selectors:[["app-nav-link"]],inputs:{path:[1,"path"],customLabel:[1,"customLabel"]},features:[H],ngContentSelectors:wn,decls:3,vars:10,consts:[["routerLinkActive","active",3,"routerLink","routerLinkActiveOptions","ngClass"]],template:function(t,e){t&1&&(S(),a(0,"a",0),D(1,Dn,1,0)(2,An,1,1),s()),t&2&&(O("routerLink",$(4,Ln,e.lang(),e.translatedPath()))("routerLinkActiveOptions",N(7,Hn))("ngClass",B(8,Sn,e.customLabel())),p(),A(e.customLabel()?1:2))},dependencies:[g,j,y,L,U],styles:[`[_nghost-%COMP%]   a[_ngcontent-%COMP%] {
  text-decoration: none;
  color: white;
}
[_nghost-%COMP%]   a.custom-label[_ngcontent-%COMP%] {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}`],changeDetection:0})}class h extends F{t=this.registerTranslations({sk:Pn,en:On});currentYear=m(()=>new Date().getFullYear());static ɵfac=(()=>{let n;return function(e){return(n||(n=w(h)))(e||h)}})();static ɵcmp=r({type:h,selectors:[["app-footer"]],features:[H],decls:11,vars:5,consts:[[1,"main"],[1,"footer-nav"],["path","home"],["path","aboutUs"],["path","courses"],["path","materials"],["path","contact"],["path","gdpr",1,"gdpr-link"],[1,"copyright"]],template:function(t,e){t&1&&(a(0,"footer")(1,"div",0)(2,"nav",1),c(3,"app-nav-link",2)(4,"app-nav-link",3)(5,"app-nav-link",4)(6,"app-nav-link",5)(7,"app-nav-link",6)(8,"app-nav-link",7),s(),a(9,"div",8),x(10),s()()()),t&2&&(V("aria-label",e.t("Pätička stránky")),p(2),V("aria-label",e.t("Hlavná navigácia pätičky")),p(8),Q(" ",e.t("Copyright")," © ",e.currentYear()," ",e.t("antoNOVA")," "))},dependencies:[g,u],styles:[`[_nghost-%COMP%] {
  display: block;
  box-sizing: border-box;
  width: 100%;
  background: var(--an-blue);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

footer[_ngcontent-%COMP%] {
  width: 100%;
  color: white;
  padding: 0;
  font-size: 1rem;
  letter-spacing: 0.01em;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}
footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #fff;
  text-decoration: none;
}
footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {
  width: var(--base-width);
  max-width: 100%;
  margin: 0 auto;
  padding: 0 var(--base-wrapper-padding);
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.875rem;
  box-sizing: border-box;
}
footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%] {
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;
  flex-wrap: wrap;
}
footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   app-nav-link.gdpr-link[_ngcontent-%COMP%] {
  margin-left: 120px;
}
footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {
  color: white;
  white-space: nowrap;
}`],changeDetection:0})}class C{#n=X("Nezmeškaj začiatok najbližších termínov autoškoly - pridaj sa ešte DNES!");message=this.#n.asReadonly();setMessage(n){this.#n.set(n)}clearMessage(){this.#n.set(null)}hasMessage(){return this.#n()!==null}static ɵfac=function(t){return new(t||C)};static ɵprov=nn({token:C,factory:C.ɵfac,providedIn:"root"})}function zn(o,n){o&1&&(I(0,"div",0)(1,"div",1),tn(2,"span",2),E()()),o&2&&(p(2),W("innerHTML",n,en))}class M{#n=l(C);message=this.#n.message;static ɵfac=function(t){return new(t||M)};static ɵcmp=r({type:M,selectors:[["app-announcement-panel"]],decls:1,vars:1,consts:[[1,"announcement-panel"],[1,"announcement-content"],[1,"announcement-text",3,"innerHTML"]],template:function(t,e){if(t&1&&D(0,zn,3,1,"div",0),t&2){let f;A((f=e.message())?0:-1,f)}},dependencies:[g],styles:[`[_nghost-%COMP%] {
  display: block;
  box-sizing: border-box;
  width: 100%;
}

.announcement-panel[_ngcontent-%COMP%] {
  width: 100%;
  background-color: var(--an-blue);
  color: white;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.announcement-panel[_ngcontent-%COMP%]   .announcement-content[_ngcontent-%COMP%] {
  width: var(--base-width);
  margin: 0 auto;
  text-align: center;
  font-family: var(--ac-font-family);
  font-size: 1rem;
  line-height: 1.5;
}
.announcement-panel[_ngcontent-%COMP%]   .announcement-content[_ngcontent-%COMP%]   .announcement-text[_ngcontent-%COMP%] {
  display: inline-block;
}
.announcement-panel[_ngcontent-%COMP%]   .announcement-content[_ngcontent-%COMP%]   .announcement-text[_ngcontent-%COMP%]     a {
  color: white;
  text-decoration: underline;
  cursor: pointer;
  transition: opacity 0.2s ease;
}
.announcement-panel[_ngcontent-%COMP%]   .announcement-content[_ngcontent-%COMP%]   .announcement-text[_ngcontent-%COMP%]     a:hover {
  opacity: 0.9;
}`]})}const Fn=["*"];class k{static ɵfac=function(t){return new(t||k)};static ɵcmp=r({type:k,selectors:[["app-site-wrapper"]],ngContentSelectors:Fn,decls:6,vars:0,consts:[[1,"wrapper"]],template:function(t,e){t&1&&(S(),a(0,"div",0),c(1,"app-announcement-panel")(2,"app-header"),a(3,"main"),z(4),s(),c(5,"app-footer"),s())},dependencies:[g,P,h,M],styles:[`[_nghost-%COMP%] {
  display: block;
  width: 100%;
}

.wrapper[_ngcontent-%COMP%] {
  width: 100%;
}

main[_ngcontent-%COMP%] {
  position: relative;
  margin: 0 auto;
  width: var(--base-wrapper-width);
  max-width: 100%;
}`],changeDetection:0})}export{F as B,k as S,b as a,fn as g};
