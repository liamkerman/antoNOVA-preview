import{aj as N,ai as dn,ag as un,ah as fn,bh as mn,bi as _n,aI as Cn,s as P,c as g,Y as F,i as c,a8 as nn,aJ as vn,bj as Pn,a9 as x,a as p,aM as tn,I as en,d as u,C as v,bk as on,a0 as U,a1 as I,a2 as W,aS as E,g as r,k as $,j as s,A as C,m as b,bl as rn,l,n as V,z as h,r as O,B as K,aT as Z,b7 as Mn,H as d,J as an,L as sn,S as cn,O as M,aU as bn,Q as R,a3 as On,y as Y,bm as S,$ as yn,K as ln,M as gn,bn as wn,a5 as kn,bo as xn,a7 as Sn,a4 as An,af as Hn,a6 as Tn,U as Ln,V as X,X as zn,av as Dn,ak as Fn,aQ as Un,Z as G,aO as In,b0 as $n}from"./index-BzAZ1y6i.js";var pn={now:function(){return(pn.delegate||Date).now()},delegate:void 0},Vn=function(o){N(t,o);function t(n,e){return o.call(this)||this}return t.prototype.schedule=function(n,e){return this},t}(dn),J={setInterval:function(o,t){for(var n=[],e=2;e<arguments.length;e++)n[e-2]=arguments[e];return setInterval.apply(void 0,un([o,t],fn(n)))},clearInterval:function(o){return clearInterval(o)},delegate:void 0},jn=function(o){N(t,o);function t(n,e){var i=o.call(this,n,e)||this;return i.scheduler=n,i.work=e,i.pending=!1,i}return t.prototype.schedule=function(n,e){var i;if(e===void 0&&(e=0),this.closed)return this;this.state=n;var a=this.id,f=this.scheduler;return a!=null&&(this.id=this.recycleAsyncId(f,a,e)),this.pending=!0,this.delay=e,this.id=(i=this.id)!==null&&i!==void 0?i:this.requestAsyncId(f,this.id,e),this},t.prototype.requestAsyncId=function(n,e,i){return i===void 0&&(i=0),J.setInterval(n.flush.bind(n,this),i)},t.prototype.recycleAsyncId=function(n,e,i){if(i===void 0&&(i=0),i!=null&&this.delay===i&&this.pending===!1)return e;e!=null&&J.clearInterval(e)},t.prototype.execute=function(n,e){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var i=this._execute(n,e);if(i)return i;this.pending===!1&&this.id!=null&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(n,e){var i=!1,a;try{this.work(n)}catch(f){i=!0,a=f||new Error("Scheduled action threw falsy error")}if(i)return this.unsubscribe(),a},t.prototype.unsubscribe=function(){if(!this.closed){var n=this,e=n.id,i=n.scheduler,a=i.actions;this.work=this.state=this.scheduler=null,this.pending=!1,mn(a,this),e!=null&&(this.id=this.recycleAsyncId(i,e,null)),this.delay=null,o.prototype.unsubscribe.call(this)}},t}(Vn),Q=function(){function o(t,n){n===void 0&&(n=o.now),this.schedulerActionCtor=t,this.now=n}return o.prototype.schedule=function(t,n,e){return n===void 0&&(n=0),new this.schedulerActionCtor(this,t).schedule(e,n)},o.now=pn.now,o}(),Rn=function(o){N(t,o);function t(n,e){e===void 0&&(e=Q.now);var i=o.call(this,n,e)||this;return i.actions=[],i._active=!1,i}return t.prototype.flush=function(n){var e=this.actions;if(this._active){e.push(n);return}var i;this._active=!0;do if(i=n.execute(n.state,n.delay))break;while(n=e.shift());if(this._active=!1,i){for(;n=e.shift();)n.unsubscribe();throw i}},t}(Q),hn=new Rn(jn),Bn=hn;function Nn(o){return o instanceof Date&&!isNaN(o)}function Wn(o,t,n){o===void 0&&(o=0),n===void 0&&(n=Bn);var e=-1;return t!=null&&(_n(t)?n=t:e=t),new Cn(function(i){var a=Nn(o)?+o-n.now():o;a<0&&(a=0);var f=0;return n.schedule(function(){i.closed||(i.next(f++),0<=e?this.schedule(void 0,e):i.complete())},a)})}function En(o,t){return t===void 0&&(t=hn),Wn(o,o,t)}class m{#n=P([]);#t=P(!0);visibleAtTop=this.#t.asReadonly();setVisibleAtTop(t){this.#t.set(t)}setAnnouncements(t){this.#n.set(t??[])}activeMessages=g(()=>{const t=this.#n(),n=Date.now();return t.filter(e=>{const i=e.dateFrom?new Date(e.dateFrom).getTime():null,a=e.dateTo?new Date(e.dateTo).getTime():null;return!(i!==null&&n<i||a!==null&&n>a)}).map(e=>e.message)});hasActiveMessage(){return this.activeMessages().length>0}clearAnnouncements(){this.#n.set([])}static ɵfac=function(n){return new(n||m)};static ɵprov=F({token:m,factory:m.ɵfac,providedIn:"root"})}const Kn=["aboutUs","contact"],Zn=["aboutUs","contact"];function j(o){return Kn.includes(o)}class _{router=c(nn);fragment=P(null);currentPath=P("");activeHomeSection=P(null);constructor(){this.updateFromRouter(),this.router.events.pipe(vn(t=>t instanceof Pn)).subscribe(()=>this.updateFromRouter())}updateFromRouter(){const t=this.router.routerState.snapshot.root;this.fragment.set(t.fragment??null);const e=this.router.url.split("#")[0].split("?")[0].split("/").filter(Boolean);this.currentPath.set(e[1]??"")}setActiveHomeSection(t){this.activeHomeSection.set(t)}isHomeAnchorPath(t){return j(t)}getFragmentForPath(t){return j(t)?t:null}isLinkActive(t,n){const e=this.activeHomeSection();return t==="home"?this.currentPath()===n&&e==null:j(t)?e===t:this.currentPath()===n}static ɵfac=function(n){return new(n||_)};static ɵprov=F({token:_,factory:_.ɵfac,providedIn:"root"})}const Yn="O nás",qn="Kurzy a služby",Xn={headerAboutUs:Yn,courses:qn},Gn="About Us",Jn="Courses and Services",Qn={headerAboutUs:Gn,courses:Jn};class q{languageService=c(x);registerTranslations(t){return this.languageService.t(t)}}const nt=["*"],tt=o=>({"custom-label":o});function et(o,t){o&1&&Z(0)}function ot(o,t){if(o&1&&h(0),o&2){const n=O();K(" ",n.label()," ")}}class A extends q{path=p.required();langService=c(x);routerState=c(_);#n=c(tn);lang=this.langService.lang;constructor(){super(),en(()=>{this.routerState.activeHomeSection(),this.#n.markForCheck()})}translatedPath=g(()=>this.langService.getRoutePath(this.path(),this.lang()));customLabel=p(!1);t=this.registerTranslations({sk:Xn,en:Qn});label=g(()=>{const t=this.path(),n=t==="aboutUs"?"headerAboutUs":t;return t==="contact"?this.languageService.t({})(t)||"":this.t(n)||""});homePath=g(()=>this.langService.getRoutePath("home",this.lang()));linkUrl=g(()=>this.routerState.isHomeAnchorPath(this.path())?["/",this.lang(),this.homePath()]:["/",this.lang(),this.translatedPath()]);linkFragment=g(()=>this.routerState.getFragmentForPath(this.path()));isActive=g(()=>this.routerState.isLinkActive(this.path(),this.translatedPath()));static ɵfac=function(n){return new(n||A)};static ɵcmp=u({type:A,selectors:[["app-header-link"]],inputs:{path:[1,"path"],customLabel:[1,"customLabel"]},features:[W],ngContentSelectors:nt,decls:3,vars:8,consts:[[3,"routerLink","fragment","ngClass"]],template:function(n,e){n&1&&(E(),r(0,"a",0),$(1,et,1,0)(2,ot,1,1),s()),n&2&&(C("active",e.isActive()),b("routerLink",e.linkUrl())("fragment",e.linkFragment())("ngClass",rn(6,tt,e.customLabel())),l(),V(e.customLabel()?1:2))},dependencies:[v,on,U,I],styles:[`[_nghost-%COMP%]   a[_ngcontent-%COMP%] {
  text-decoration: none;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 1.125rem;
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
}`],changeDetection:0})}class H{#n=c(x);lang=this.#n.lang;getHomePath(){const t=this.lang();return`/${t}/${t==="sk"?"uvod":"home"}`}static ɵfac=function(n){return new(n||H)};static ɵcmp=u({type:H,selectors:[["app-logo"]],decls:12,vars:1,consts:[[1,"logo",3,"routerLink"],["width","154","height","60","viewBox","0 0 154 60","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M61.7998 20.4C72.735 20.4 81.5995 29.2647 81.5996 40.1998C81.5996 51.135 72.735 59.9996 61.7998 59.9996C50.8647 59.9995 42 51.135 42 40.1998C42.0001 29.2647 50.8647 20.4001 61.7998 20.4ZM61.5 30.6002C56.0325 30.6002 51.5998 35.0322 51.5996 40.4996C51.5996 45.9672 56.0324 50.4 61.5 50.4C66.9676 50.4 71.4004 45.9672 71.4004 40.4996C71.4002 35.0322 66.9675 30.6002 61.5 30.6002Z","fill","#D70000"],["d","M98.9998 59.9996L79.2 20.4H92.0994L98.9998 34.1998L105.9 20.4H118.8L98.9998 59.9996Z","fill","#264C96"],["d","M19.7998 20.4C30.735 20.4 39.5995 29.2647 39.5996 40.1998H29.3926C29.2338 34.8711 24.8672 30.6002 19.5 30.6002C14.1328 30.6002 9.76619 34.8711 9.60742 40.1998H0C0.000105141 29.2647 8.86472 20.4001 19.7998 20.4Z","fill","#264C96"],["d","M133.8 20.4C144.735 20.4 153.6 29.2647 153.6 40.1998H143.393C143.234 34.8711 138.867 30.6002 133.5 30.6002C128.133 30.6002 123.766 34.8711 123.607 40.1998H114C114 29.2647 122.865 20.4001 133.8 20.4Z","fill","#264C96"],["y","40.2","width","9.6","height","19.8","fill","#264C96"],["x","114","y","40.2","width","9.6","height","19.8","fill","#264C96"],["x","114","y","41.4","width","25.8","height","10.2","fill","#264C96"],["x","29.4","y","40.2","width","10.2","height","19.8","fill","#264C96"],["x","143.4","y","40.2","width","10.2","height","19.8","fill","#264C96"],["d","M3.648 19.2304C3.2128 19.2304 2.816 19.1536 2.4576 19C2.112 18.8592 1.8176 18.6608 1.5744 18.4048C1.3312 18.136 1.1392 17.8288 0.9984 17.4832C0.8704 17.1376 0.8064 16.76 0.8064 16.3504C0.8064 15.352 1.2288 14.5712 2.0736 14.008C2.9184 13.4448 4.2816 13.0672 6.1632 12.8752C6.1376 12.4528 6.0096 12.12 5.7792 11.8768C5.5616 11.6208 5.1904 11.4928 4.6656 11.4928C4.256 11.4928 3.8464 11.5696 3.4368 11.7232C3.04 11.8768 2.6112 12.088 2.1504 12.3568L1.1328 10.4944C1.7472 10.1232 2.3872 9.8224 3.0528 9.592C3.7312 9.3616 4.448 9.2464 5.2032 9.2464C6.432 9.2464 7.3664 9.5984 8.0064 10.3024C8.6592 10.9936 8.9856 12.0752 8.9856 13.5472V19H6.6816L6.4896 18.0208H6.4128C6.0032 18.3792 5.5744 18.6736 5.1264 18.904C4.6784 19.1216 4.1856 19.2304 3.648 19.2304ZM4.608 17.0416C4.928 17.0416 5.2032 16.9712 5.4336 16.8304C5.664 16.6896 5.9072 16.4912 6.1632 16.2352V14.5648C5.1648 14.7056 4.4736 14.9104 4.0896 15.1792C3.7056 15.448 3.5136 15.768 3.5136 16.1392C3.5136 16.4464 3.6096 16.6768 3.8016 16.8304C4.0064 16.9712 4.2752 17.0416 4.608 17.0416ZM11.373 19V9.4768H13.677L13.869 10.6864H13.9458C14.3554 10.3024 14.8034 9.9696 15.2898 9.688C15.7762 9.3936 16.3458 9.2464 16.9986 9.2464C18.0354 9.2464 18.7842 9.5856 19.245 10.264C19.7186 10.9424 19.9554 11.8832 19.9554 13.0864V19H17.133V13.4512C17.133 12.76 17.037 12.2864 16.845 12.0304C16.6658 11.7744 16.3714 11.6464 15.9618 11.6464C15.6034 11.6464 15.2962 11.7296 15.0402 11.896C14.7842 12.0496 14.5026 12.2736 14.1954 12.568V19H11.373ZM26.0277 19.2304C25.4389 19.2304 24.9333 19.1408 24.5109 18.9616C24.1013 18.7824 23.7621 18.5328 23.4933 18.2128C23.2373 17.8928 23.0453 17.5088 22.9173 17.0608C22.8021 16.6 22.7445 16.0944 22.7445 15.544V11.6848H21.4389V9.592L22.8981 9.4768L23.2245 6.9424H25.5669V9.4768H27.8517V11.6848H25.5669V15.5056C25.5669 16.0432 25.6757 16.4336 25.8933 16.6768C26.1237 16.9072 26.4245 17.0224 26.7957 17.0224C26.9493 17.0224 27.1029 17.0032 27.2565 16.9648C27.4229 16.9264 27.5701 16.8816 27.6981 16.8304L28.1397 18.8848C27.8837 18.9616 27.5829 19.0384 27.2373 19.1152C26.8917 19.192 26.4885 19.2304 26.0277 19.2304ZM33.4626 19.2304C32.861 19.2304 32.2786 19.1216 31.7154 18.904C31.1522 18.6736 30.653 18.3472 30.2178 17.9248C29.7954 17.5024 29.4562 16.984 29.2002 16.3696C28.9442 15.7424 28.8162 15.032 28.8162 14.2384C28.8162 13.4448 28.9442 12.7408 29.2002 12.1264C29.4562 11.4992 29.7954 10.9744 30.2178 10.552C30.653 10.1296 31.1522 9.8096 31.7154 9.592C32.2786 9.3616 32.861 9.2464 33.4626 9.2464C34.0642 9.2464 34.6402 9.3616 35.1906 9.592C35.7538 9.8096 36.2466 10.1296 36.669 10.552C37.1042 10.9744 37.4498 11.4992 37.7058 12.1264C37.9618 12.7408 38.0898 13.4448 38.0898 14.2384C38.0898 15.032 37.9618 15.7424 37.7058 16.3696C37.4498 16.984 37.1042 17.5024 36.669 17.9248C36.2466 18.3472 35.7538 18.6736 35.1906 18.904C34.6402 19.1216 34.0642 19.2304 33.4626 19.2304ZM33.4626 16.9456C34.0386 16.9456 34.4738 16.7024 34.7682 16.216C35.0626 15.7296 35.2098 15.0704 35.2098 14.2384C35.2098 13.4064 35.0626 12.7472 34.7682 12.2608C34.4738 11.7744 34.0386 11.5312 33.4626 11.5312C32.8738 11.5312 32.4322 11.7744 32.1378 12.2608C31.8562 12.7472 31.7154 13.4064 31.7154 14.2384C31.7154 15.0704 31.8562 15.7296 32.1378 16.216C32.4322 16.7024 32.8738 16.9456 33.4626 16.9456Z","fill","black"]],template:function(n,e){n&1&&(r(0,"a",0),Mn(),r(1,"svg",1),d(2,"path",2)(3,"path",3)(4,"path",4)(5,"path",5)(6,"rect",6)(7,"rect",7)(8,"rect",8)(9,"rect",9)(10,"rect",10)(11,"path",11),s()()),n&2&&b("routerLink",e.getHomePath())},dependencies:[v,U,I],styles:[`[_nghost-%COMP%] {
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
}`],changeDetection:0})}function it(){return typeof window<"u"&&window.crypto&&typeof window.crypto.randomUUID=="function"?window.crypto.randomUUID():"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,o=>{const t=Math.random()*16|0;return(o==="x"?t:t&3|8).toString(16)})}class T{id=it();text=p.required();disabled=p(!1);fullWidth=p(!1);inverted=p(!1);backgroundColor=p(void 0);rounded=p(!1);static ɵfac=function(n){return new(n||T)};static ɵcmp=u({type:T,selectors:[["app-button"]],hostVars:8,hostBindings:function(n,e){n&2&&(bn("--button-bg-color",e.backgroundColor()),C("full-width",e.fullWidth())("inverted",e.inverted())("rounded",e.rounded()))},inputs:{text:[1,"text"],disabled:[1,"disabled"],fullWidth:[1,"fullWidth"],inverted:[1,"inverted"],backgroundColor:[1,"backgroundColor"],rounded:[1,"rounded"]},decls:2,vars:2,consts:[["type","button",3,"disabled"]],template:function(n,e){n&1&&(an(0,"button",0),h(1),sn()),n&2&&(cn("disabled",e.disabled()),l(),M(e.text()))},styles:[`[_nghost-%COMP%]   button[_ngcontent-%COMP%] {
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
  border-radius: 4.5rem;
  font-family: "Source Sans Pro", sans-serif;
  font-weight: 400;
  font-size: 1.125rem;
  height: 3.125rem;
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
}`],changeDetection:0})}const rt=(o,t)=>["/",o,t],at=50;class L{#n=c(nn);#t=c(x);#e=c(m);lang=this.#t.lang;scrolled=P(!1);activeMessages=this.#e.activeMessages;announcementVisibleAtTop=this.#e.visibleAtTop;get announcementVisible(){return this.activeMessages().length>0&&this.announcementVisibleAtTop()}onWindowScroll(){this.scrolled.set(window.scrollY>at)}applicationPath=g(()=>this.#t.getRoutePath("ziadost",this.lang()));switchLang(t){const n=this.#n.url.split("/"),e=n[1]||"en",i=n.slice(2).join("/"),a=this.#t.translateRoute(i,e,t);a?this.#n.navigate(["/",t,a]):this.#n.navigate(["/",t])}static ɵfac=function(n){return new(n||L)};static ɵcmp=u({type:L,selectors:[["app-header"]],hostVars:2,hostBindings:function(n,e){n&1&&Y("scroll",function(){return e.onWindowScroll()},S),n&2&&C("announcement-visible",e.announcementVisible)},decls:10,vars:8,consts:[[1,"left"],[1,"center"],["path","aboutUs"],["path","courses"],["path","contact"],[1,"right"],[1,"application-link",3,"routerLink"],["text","Prihláška na kurz","backgroundColor","black",1,"application-button",3,"rounded"]],template:function(n,e){n&1&&(r(0,"nav")(1,"div",0),d(2,"app-logo"),s(),r(3,"div",1),d(4,"app-header-link",2)(5,"app-header-link",3)(6,"app-header-link",4),s(),r(7,"div",5)(8,"a",6),d(9,"app-button",7),s()()()),n&2&&(C("scrolled",e.scrolled()),R("data-announcement",e.announcementVisible?"visible":"hidden"),l(8),b("routerLink",On(5,rt,e.lang(),e.applicationPath())),l(),b("rounded",!0))},dependencies:[v,U,I,A,H,T],styles:[`[_nghost-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  width: 100%;
  background: #fff;
  transition: box-shadow 0.25s ease, top 0.25s ease;
}
.announcement-visible[_nghost-%COMP%] {
  top: 2.5rem;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%] {
  display: flex;
  align-items: self-start;
  gap: 2rem;
  width: 81.25rem;
  max-width: 100%;
  height: 6.25rem;
  margin: 0 auto;
  padding: 0 1rem;
  transition: height 0.25s ease, gap 0.25s ease;
}
[_nghost-%COMP%]   nav.scrolled[_ngcontent-%COMP%] {
  height: 4rem;
  gap: 1.25rem;
  align-items: center;
}
[_nghost-%COMP%]   nav.scrolled[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], 
[_nghost-%COMP%]   nav.scrolled[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%], 
[_nghost-%COMP%]   nav.scrolled[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {
  top: 0;
}
[_nghost-%COMP%]   nav.scrolled[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {
  gap: 1.25rem;
}
[_nghost-%COMP%]   nav.scrolled[_ngcontent-%COMP%]   .application-button[_ngcontent-%COMP%]     button {
  width: 10rem;
  padding: 0.5rem 1rem;
}
[_nghost-%COMP%]:has(nav.scrolled) {
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {
  position: relative;
  top: 0.9375rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  transition: top 0.25s ease;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]     .logo svg {
  transition: width 0.25s ease, height 0.25s ease;
}
[_nghost-%COMP%]   nav.scrolled[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%]     .logo svg {
  width: 120px;
  height: 47px;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {
  position: relative;
  top: 1.25rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: top 0.25s ease;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .application-link[_ngcontent-%COMP%] {
  text-decoration: none;
  display: inline-block;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .application-button[_ngcontent-%COMP%]     button {
  width: 12.5rem;
  transition: width 0.25s ease, padding 0.25s ease;
}
[_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {
  position: relative;
  top: 2.0625rem;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.875rem;
  flex-wrap: nowrap;
  min-width: 0;
  transition: top 0.25s ease, gap 0.25s ease;
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
  width: 0.125rem;
  background-color: black;
}
@media (max-width: 48rem) {
  [_nghost-%COMP%]   nav[_ngcontent-%COMP%] {
    height: auto;
    min-height: 6.25rem;
    padding: 0.75rem 1rem 1rem;
    flex-wrap: wrap;
    gap: 0.75rem 1.25rem;
    align-items: center;
  }
  [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%], 
   [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {
    position: relative;
    top: 0;
    flex: 0 0 auto;
  }
  [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {
    flex-basis: auto;
  }
  [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .center[_ngcontent-%COMP%] {
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.75rem 1rem;
    flex: 1 1 auto;
    min-width: 0;
  }
  [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {
    flex-basis: auto;
  }
  [_nghost-%COMP%]   nav[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%]   .application-button[_ngcontent-%COMP%]     button {
    width: auto;
    min-width: 9rem;
    padding: 0.5rem 1rem;
  }
}`]})}const st="Copyright",ct="antoNOVA",lt="Ako sa prihlásiť do kurzu",gt="Stačí nám dať o sebe vedieť a postupne vybavíme všetko potrebné.",pt="Dajte nám o sebe vedieť",ht="Zavolajte alebo napíšte – radi vám vysvetlíme detaily, overíme najbližší možný termín a rezervujeme vám miesto v kurze.",dt="Navštívte svojho lekára",ut="Stiahnite si tlačivo, vytlačte si ho obojstranne na jeden list A4 a nechajte si ho potvrdiť vaším praktickým lekárom.",ft="Stiahnuť tlačivo (PDF)",mt="Dostavte sa do autoškoly",_t="S potvrdeným tlačivom, občianskym preukazom a so zálohou (1/2 ceny kurzu) za kurz sa dostavte osobne na registráciu do autoškoly. Dohodneme si úvodné detaily – začiatok kurzu, teóriu, jazdy aj trenažér.",Ct={"Pätička stránky":"Pätička stránky","Hlavná navigácia pätičky":"Hlavná navigácia pätičky",Copyright:st,antoNOVA:ct,registrationTitle:lt,registrationSubtitle:gt,registrationStep1Title:pt,registrationStep1Desc:ht,registrationStep2Title:dt,registrationStep2Desc:ut,registrationStep2Link:ft,registrationStep3Title:mt,registrationStep3Desc:_t},vt="Copyright",Pt="antoNOVA",Mt="How to register for a course",bt="Just let us know about yourself and we will take care of everything step by step.",Ot="Let us know about you",yt="Call or write – we will gladly explain the details, verify the nearest possible date, and reserve your spot in the course.",wt="Visit your doctor",kt="Download the form, print it double-sided on one A4 sheet, and have it confirmed by your general practitioner.",xt="Download form (PDF)",St="Come to the driving school",At="With the confirmed form, ID card, and a deposit (1/2 of the course price) for the course, come in person to register at the driving school. We will arrange the initial details – start of the course, theory, lessons, and simulator.",Ht={"Pätička stránky":"Page footer","Hlavná navigácia pätičky":"Main footer navigation",Copyright:vt,antoNOVA:Pt,registrationTitle:Mt,registrationSubtitle:bt,registrationStep1Title:Ot,registrationStep1Desc:yt,registrationStep2Title:wt,registrationStep2Desc:kt,registrationStep2Link:xt,registrationStep3Title:St,registrationStep3Desc:At},Tt={"nav.home":"Domov","nav.aboutUs":"O nás","nav.courses":"Kurzy a služby","nav.contact":"Kontakt","nav.gdpr":"GDPR"},Lt={"nav.home":"Home","nav.aboutUs":"About Us","nav.courses":"Courses and Services","nav.contact":"Contact","nav.gdpr":"GDPR"},zt=["*"],Dt=o=>({"custom-label":o});function Ft(o,t){o&1&&Z(0)}function Ut(o,t){if(o&1&&h(0),o&2){const n=O();K(" ",n.label()," ")}}class z extends q{path=p.required();langService=c(x);routerState=c(_);#n=c(tn);lang=this.langService.lang;constructor(){super(),en(()=>{this.routerState.activeHomeSection(),this.#n.markForCheck()})}homePath=g(()=>this.langService.getRoutePath("home",this.lang()));translatedPath=g(()=>this.langService.getRoutePath(this.path(),this.lang()));linkUrl=g(()=>this.routerState.isHomeAnchorPath(this.path())?["/",this.lang(),this.homePath()]:["/",this.lang(),this.translatedPath()]);linkFragment=g(()=>this.routerState.getFragmentForPath(this.path()));isActive=g(()=>this.routerState.isLinkActive(this.path(),this.translatedPath()));customLabel=p(!1);t=this.registerTranslations({sk:Tt,en:Lt});label=g(()=>this.t(`nav.${this.path()}`)||"");static ɵfac=function(n){return new(n||z)};static ɵcmp=u({type:z,selectors:[["app-nav-link"]],inputs:{path:[1,"path"],customLabel:[1,"customLabel"]},features:[W],ngContentSelectors:zt,decls:3,vars:8,consts:[[3,"routerLink","fragment","ngClass"]],template:function(n,e){n&1&&(E(),r(0,"a",0),$(1,Ft,1,0)(2,Ut,1,1),s()),n&2&&(C("active",e.isActive()),b("routerLink",e.linkUrl())("fragment",e.linkFragment())("ngClass",rn(6,Dt,e.customLabel())),l(),V(e.customLabel()?1:2))},dependencies:[v,on,U,I],styles:[`[_nghost-%COMP%]   a[_ngcontent-%COMP%] {
  text-decoration: none;
  color: white;
}
[_nghost-%COMP%]   a.custom-label[_ngcontent-%COMP%] {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
[_nghost-%COMP%]   a.active[_ngcontent-%COMP%] {
  text-decoration: underline;
  text-underline-offset: 0.25rem;
}`],changeDetection:0})}const It=(o,t)=>t.titleKey;function $t(o,t){if(o&1&&(r(0,"a",24),h(1),s()),o&2){const n=O().$implicit,e=O();b("href",n.linkUrl,Sn),l(),K(" ",e.t(n.linkKey)," ")}}function Vt(o,t){if(o&1&&(r(0,"article",6),d(1,"span",15),r(2,"div",16)(3,"span",17)(4,"span",18),h(5),s()(),r(6,"h3",19),h(7),s()(),r(8,"div",20),d(9,"i",21),s(),r(10,"div",22)(11,"p",23),h(12),s(),$(13,$t,2,2,"a",24),s()()),o&2){const n=t.$implicit,e=t.$index,i=O();l(5),M(e+1),l(2),M(i.t(n.titleKey)),l(2),kn(xn("bi ",n.iconClass)),l(3),M(i.t(n.descKey)),l(),V(n.linkKey&&n.linkUrl&&n.linkUrl.length>0?13:-1)}}class y extends q{t=this.registerTranslations({sk:Ct,en:Ht});currentYear=g(()=>new Date().getFullYear());registrationSteps=[{iconClass:"bi-telephone-fill",titleKey:"registrationStep1Title",descKey:"registrationStep1Desc"},{iconClass:"bi-clipboard2-check-fill",titleKey:"registrationStep2Title",descKey:"registrationStep2Desc",linkKey:"registrationStep2Link",linkUrl:""},{iconClass:"bi-geo-alt-fill",titleKey:"registrationStep3Title",descKey:"registrationStep3Desc"}];static ɵfac=(()=>{let t;return function(e){return(t||(t=yn(y)))(e||y)}})();static ɵcmp=u({type:y,selectors:[["app-footer"]],features:[W],decls:20,vars:7,consts:[[1,"footer-registration"],[1,"footer-registration__title"],[1,"footer-registration__subtitle"],[1,"footer-registration__steps-wrap"],["aria-hidden","true",1,"footer-registration__timeline"],[1,"footer-registration__steps"],[1,"footer-registration__step"],[1,"main"],[1,"footer-nav"],["path","home"],["path","aboutUs"],["path","courses"],["path","contact"],["path","gdpr",1,"gdpr-link"],[1,"copyright"],["aria-hidden","true",1,"footer-registration__step-node"],[1,"footer-registration__step-header"],[1,"footer-registration__step-number-wrap"],[1,"footer-registration__step-number"],[1,"footer-registration__step-title"],[1,"footer-registration__step-icon"],["aria-hidden","true"],[1,"footer-registration__step-content"],[1,"footer-registration__step-desc"],["target","_blank","rel","noopener noreferrer",1,"footer-registration__step-link",3,"href"]],template:function(n,e){n&1&&(r(0,"footer")(1,"div",0)(2,"h2",1),h(3),s(),r(4,"p",2),h(5),s(),r(6,"div",3),d(7,"div",4),r(8,"div",5),ln(9,Vt,14,7,"article",6,It),s()()(),r(11,"div",7)(12,"nav",8),d(13,"app-nav-link",9)(14,"app-nav-link",10)(15,"app-nav-link",11)(16,"app-nav-link",12)(17,"app-nav-link",13),s(),r(18,"div",14),h(19),s()()()),n&2&&(R("aria-label",e.t("Pätička stránky")),l(3),M(e.t("registrationTitle")),l(2),M(e.t("registrationSubtitle")),l(4),gn(e.registrationSteps),l(3),R("aria-label",e.t("Hlavná navigácia pätičky")),l(7),wn(" ",e.t("Copyright")," © ",e.currentYear()," ",e.t("antoNOVA")," "))},dependencies:[v,z],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
  box-sizing: border-box;
  width: 100%;
  background: var(--an-blue);
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

footer[_ngcontent-%COMP%] {
  width: 100%;
  color: white;
  padding: 0;
  font-size: 1rem;
  letter-spacing: 0.01em;
  border-top: 0.0625rem solid rgba(255, 255, 255, 0.2);
}
footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {
  color: #fff;
  text-decoration: none;
}
footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {
  text-decoration: underline;
}
footer[_ngcontent-%COMP%] {
  

}
footer[_ngcontent-%COMP%]   .footer-registration[_ngcontent-%COMP%] {
  --reg-bg: var(--an-blue, #264C96);
  --reg-text: #fff;
  --reg-title-size: 1.75rem;
  --reg-title-weight: 800;
  --reg-step-number-color: rgba(255, 255, 255, 0.55);
  --reg-step-number-size: 2.5rem;
  --reg-connector-color: rgba(255, 255, 255, 0.5);
  --reg-step-bg: rgba(255, 255, 255, 0.12);
  --reg-step-radius: 14px;
  --reg-link-color: #fff;
  --reg-max-width: 75rem;
  --reg-gap: 1.5rem;
  --reg-padding-block: 2.5rem;
  --reg-padding-inline: var(--base-wrapper-padding);
  --reg-step-padding: 1.5rem;
  width: 100%;
  background-color: var(--reg-bg);
  color: var(--reg-text);
  padding: var(--reg-padding-block) var(--reg-padding-inline);
  border-bottom: 0.0625rem solid rgba(255, 255, 255, 0.2);
  position: relative;
}
footer[_ngcontent-%COMP%]   .footer-registration__title[_ngcontent-%COMP%] {
  font-size: var(--reg-title-size);
  font-weight: var(--reg-title-weight);
  margin: 0 0 0.5rem 0;
  text-align: center;
  color: var(--reg-text);
  letter-spacing: -0.02em;
}
footer[_ngcontent-%COMP%]   .footer-registration__subtitle[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 400;
  margin: 0 0 var(--reg-gap) 0;
  text-align: center;
  color: var(--reg-text);
  opacity: 0.92;
  line-height: 1.5;
  max-width: 36rem;
  margin-left: auto;
  margin-right: auto;
}
footer[_ngcontent-%COMP%] {
  

}
footer[_ngcontent-%COMP%]   .footer-registration__steps-wrap[_ngcontent-%COMP%] {
  --reg-line-offset: 5.25rem; 

  position: relative;
  max-width: var(--reg-max-width);
  margin: 0 auto;
  padding-top: 0.5rem;
  container-type: inline-size;
  container-name: reg-steps;
}
footer[_ngcontent-%COMP%] {
  

}
footer[_ngcontent-%COMP%]   .footer-registration__timeline[_ngcontent-%COMP%] {
  position: absolute;
  left: 1rem;
  right: 1rem;
  top: calc(1rem + var(--reg-line-offset));
  height: 0;
  border-top: 2px dotted var(--reg-connector-color);
  pointer-events: none;
  mask-image: linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%);
  -webkit-mask-image: linear-gradient(to right, transparent 0, black 12%, black 88%, transparent 100%);
}
footer[_ngcontent-%COMP%] {
  

}
@container reg-steps (max-width: 57rem) {
  footer[_ngcontent-%COMP%]   .footer-registration__timeline[_ngcontent-%COMP%] {
    display: none;
  }
  footer[_ngcontent-%COMP%]   .footer-registration__step-node[_ngcontent-%COMP%] {
    display: none;
  }
}
footer[_ngcontent-%COMP%]   .footer-registration__steps[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: 1.5rem;
  position: relative;
}
footer[_ngcontent-%COMP%]   .footer-registration__step[_ngcontent-%COMP%] {
  flex: 1 1 0;
  min-width: min(100%, 18rem);
  max-width: 24rem;
  display: flex;
  flex-direction: column;
  gap: 0;
  background: var(--reg-step-bg);
  border-radius: var(--reg-step-radius);
  padding: var(--reg-step-padding);
  padding-top: 2.25rem;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.08);
  position: relative;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}
footer[_ngcontent-%COMP%]   .footer-registration__step[_ngcontent-%COMP%]:hover {
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  border-color: rgba(255, 255, 255, 0.12);
}
footer[_ngcontent-%COMP%] {
  

}
footer[_ngcontent-%COMP%]   .footer-registration__step-node[_ngcontent-%COMP%] {
  position: absolute;
  top: calc(var(--reg-line-offset) + 0.5rem);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 50%;
  background: var(--reg-connector-color);
  flex-shrink: 0;
}
footer[_ngcontent-%COMP%]   .footer-registration__step-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
  margin-bottom: 1rem;
}
footer[_ngcontent-%COMP%]   .footer-registration__step-number-wrap[_ngcontent-%COMP%] {
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.15);
  display: flex;
  align-items: center;
  justify-content: center;
}
footer[_ngcontent-%COMP%]   .footer-registration__step-number[_ngcontent-%COMP%] {
  font-size: var(--reg-step-number-size);
  font-weight: 900;
  line-height: 1;
  color: var(--reg-step-number-color);
  font-family: var(--ac-font-family, system-ui, sans-serif);
  letter-spacing: -0.03em;
}
footer[_ngcontent-%COMP%]   .footer-registration__step-title[_ngcontent-%COMP%] {
  font-size: 1.0625rem;
  font-weight: 700;
  margin: 0;
  color: var(--reg-text);
  line-height: 1.35;
}
footer[_ngcontent-%COMP%]   .footer-registration__step-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0.5rem 0 1rem;
}
footer[_ngcontent-%COMP%]   .footer-registration__step-icon[_ngcontent-%COMP%]   .bi[_ngcontent-%COMP%] {
  font-size: 3rem;
  color: #fff;
}
footer[_ngcontent-%COMP%]   .footer-registration__step-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
}
footer[_ngcontent-%COMP%]   .footer-registration__step-desc[_ngcontent-%COMP%] {
  font-size: 0.9375rem;
  line-height: 1.55;
  margin: 0;
  color: var(--reg-text);
  opacity: 0.95;
}
footer[_ngcontent-%COMP%]   .footer-registration__step-link[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--reg-link-color);
  text-underline-offset: 0.2em;
  text-decoration: underline;
  transition: opacity 0.2s ease;
}
footer[_ngcontent-%COMP%]   .footer-registration__step-link[_ngcontent-%COMP%]:hover {
  opacity: 0.85;
}
@media (max-width: 64rem) {
  footer[_ngcontent-%COMP%]   .footer-registration__steps-wrap[_ngcontent-%COMP%] {
    padding-top: 0;
  }
  footer[_ngcontent-%COMP%]   .footer-registration__timeline[_ngcontent-%COMP%] {
    display: none;
  }
  footer[_ngcontent-%COMP%]   .footer-registration__step-node[_ngcontent-%COMP%] {
    display: none;
  }
  footer[_ngcontent-%COMP%]   .footer-registration__steps[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: stretch;
    gap: 1.5rem;
  }
}
@media (max-width: 48rem) {
  footer[_ngcontent-%COMP%]   .footer-registration[_ngcontent-%COMP%] {
    --reg-padding-inline: 1rem;
    --reg-padding-block: 2rem;
    --reg-title-size: 1.5rem;
    --reg-step-number-size: 2.25rem;
    --reg-step-padding: 1.25rem;
  }
  footer[_ngcontent-%COMP%]   .footer-registration__subtitle[_ngcontent-%COMP%] {
    font-size: 0.9375rem;
    padding: 0 0.5rem;
  }
  footer[_ngcontent-%COMP%]   .footer-registration__step[_ngcontent-%COMP%] {
    min-width: 100%;
    max-width: 100%;
    padding-top: 1.75rem;
  }
}
footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {
  width: var(--base-width);
  max-width: 100%;
  margin: 0 auto;
  padding: 0 var(--base-wrapper-padding);
  height: 2.5rem;
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
  margin-left: 7.5rem;
}
footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {
  color: white;
  white-space: nowrap;
}
footer[_ngcontent-%COMP%] {
  

}
@media (max-width: 64rem) {
  footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {
    height: auto;
    min-height: 2.5rem;
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    justify-content: center;
  }
  footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .footer-nav[_ngcontent-%COMP%]   app-nav-link.gdpr-link[_ngcontent-%COMP%] {
    margin-left: 0;
  }
}
@media (max-width: 48rem) {
  footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {
    white-space: normal;
    text-align: center;
  }
}`],changeDetection:0})}function jt(o,t){if(o&1&&Hn(0,"span",2),o&2){const n=t.$implicit;cn("innerHTML",n,Tn)}}function Rt(o,t){if(o&1&&(an(0,"div",0)(1,"div",1),ln(2,jt,1,1,"span",2,An),sn()()),o&2){const n=O();l(2),gn(n.activeMessages())}}const Bt=36,Nt=90;class D{#n=c(m);activeMessages=this.#n.activeMessages;get hasMessage(){return this.activeMessages().length>0}get visibleAtTop(){return this.activeMessages().length>0&&this.#n.visibleAtTop()}onWindowScroll(){if(this.activeMessages().length===0)return;const t=window.scrollY,n=this.#n.visibleAtTop();n&&t>Nt?this.#n.setVisibleAtTop(!1):!n&&t<=Bt&&this.#n.setVisibleAtTop(!0)}static ɵfac=function(n){return new(n||D)};static ɵcmp=u({type:D,selectors:[["app-announcement-panel"]],hostVars:4,hostBindings:function(n,e){n&1&&Y("scroll",function(){return e.onWindowScroll()},S),n&2&&C("has-message",e.hasMessage)("visible-at-top",e.visibleAtTop)},decls:1,vars:1,consts:[[1,"announcement-panel"],[1,"announcement-content"],[1,"announcement-text",3,"innerHTML"]],template:function(n,e){n&1&&$(0,Rt,4,0,"div",0),n&2&&V(e.activeMessages().length>0?0:-1)},dependencies:[v],styles:[`[_nghost-%COMP%] {
  display: block;
  box-sizing: border-box;
  width: 100%;
}
.has-message[_nghost-%COMP%] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 101;
  transition: transform 0.25s ease;
}
.has-message[_nghost-%COMP%]:not(.visible-at-top) {
  transform: translateY(-100%);
}

.announcement-panel[_ngcontent-%COMP%] {
  width: 100%;
  background-color: var(--an-blue);
  color: white;
  min-height: 2.5rem;
  padding: 0.5rem 0;
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
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
}`]})}const Wt="stay-loggy",Et="https://antonova.test",Kt={loggingSecret:Wt,wpApiUrl:Et};class w{#n=Kt;get loggingSecret(){return this.#n.loggingSecret}get wpApiUrl(){return this.#n.wpApiUrl}static ɵfac=function(n){return new(n||w)};static ɵprov=F({token:w,factory:w.ɵfac,providedIn:"root"})}class k{#n=c(Ln);#t=c(w);#e(){const t=this.#t.wpApiUrl;return t?t.replace(/\/$/,""):""}getAnnouncements(){return this.#t.wpApiUrl?.trim()?this.#n.get(`${this.#e()}/wp-json/autoskola/v1/announcements`).pipe(zn(()=>X([]))):X([])}static ɵfac=function(n){return new(n||k)};static ɵprov=F({token:k,factory:k.ɵfac,providedIn:"root"})}const Zt=["*"];class B{#n=c(m);#t=c(k);#e=c(_);#r=c(Dn);#o=new Fn;hasAnnouncement=()=>this.#n.hasActiveMessage()&&this.#n.visibleAtTop();constructor(){Un(()=>this.#i())}ngOnInit(){this.#t.getAnnouncements().pipe(G(1)).subscribe(t=>this.#n.setAnnouncements(t)),En(6e4).pipe(In(this.#o),$n(()=>this.#t.getAnnouncements()),G(1)).subscribe(t=>this.#n.setAnnouncements(t))}onScrollOrResize(){this.#i()}#i(){const t=typeof window<"u"?window.innerHeight:0;let n=null;for(const e of Zn){const i=document.getElementById(e);if(!i)continue;const a=i.getBoundingClientRect();if(a.top<t&&a.bottom>0){n=e;break}}this.#e.activeHomeSection()!==n&&(this.#e.setActiveHomeSection(n),this.#a())}#a(){setTimeout(()=>this.#r.tick(),0)}ngOnDestroy(){this.#o.next(),this.#o.complete(),this.#e.setActiveHomeSection(null)}static ɵfac=function(n){return new(n||B)};static ɵcmp=u({type:B,selectors:[["app-site-wrapper"]],hostBindings:function(n,e){n&1&&Y("scroll",function(){return e.onScrollOrResize()},S)("resize",function(){return e.onScrollOrResize()},S)},ngContentSelectors:Zt,decls:6,vars:2,consts:[[1,"wrapper"]],template:function(n,e){n&1&&(E(),r(0,"div",0),d(1,"app-announcement-panel")(2,"app-header"),r(3,"main"),Z(4),s(),d(5,"app-footer"),s()),n&2&&C("has-announcement",e.hasAnnouncement())},dependencies:[v,L,y,D],styles:[`@charset "UTF-8";
[_nghost-%COMP%] {
  display: block;
  width: 100%;
}

.wrapper[_ngcontent-%COMP%] {
  width: 100%;
  

  padding-top: 6.25rem;
}
.wrapper.has-announcement[_ngcontent-%COMP%] {
  

  padding-top: 10.25rem;
}
@media (max-width: 48rem) {
  .wrapper[_ngcontent-%COMP%] {
    

    padding-top: 8rem;
  }
  .wrapper.has-announcement[_ngcontent-%COMP%] {
    padding-top: 12rem;
  }
}

main[_ngcontent-%COMP%] {
  position: relative;
  margin: 0 auto;
  width: var(--base-wrapper-width);
  max-width: 100%;
}`],changeDetection:0})}export{jn as A,q as B,w as C,B as S,T as a,Rn as b,hn as c,pn as d,it as g,Wn as t};
