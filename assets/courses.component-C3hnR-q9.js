import{i as f,U,V as y,W as D,X as F,Y as S,s as b,Z as R,c as E,a8 as W,$ as H,d as Z,C as q,a9 as Y,a2 as J,g as s,z as c,j as i,K as w,k as l,H as _,l as o,O as p,M as T,n as g,r as a,m,aa as X,A as Q,ab as ee,B as v,a6 as z,ac as ne}from"./index-fznfSLLT.js";import{B as te,S as re,a as oe}from"./site-wrapper.component-Tih-vRcf.js";import{I as ie}from"./icon.component-CtWxOuEU.js";import{a as A,i as d}from"./image-path.util-2S4nL0h9.js";import{C as K}from"./config.service-DfSiXlad.js";const $=A.courses;function G(t){return typeof t!="string"?t:t.replace(/\\u([0-9a-fA-F]{4})/g,(n,e)=>String.fromCodePoint(parseInt(e,16))).replace(/u([0-9a-fA-F]{4})/g,(n,e)=>String.fromCodePoint(parseInt(e,16)))}function I(t){const{priceUpgrade:n,...e}=t;return n&&typeof n=="string"&&(!e.priceUpgrades||!e.priceUpgrades.length)&&(e.priceUpgrades=[{label:"Prechod z nižšej skupiny",price:n}]),e.price&&(e.price=G(e.price)),e.priceUpgrades?.length&&(e.priceUpgrades=e.priceUpgrades.map(r=>({label:G(r.label),price:G(r.price)}))),e}class P{#t=f(U);#e=f(K);#n(){const n=this.#e.wpApiUrl;return n?n.replace(/\/$/,""):""}getCourseGroups(){return this.#e.wpApiUrl?.trim()?this.#t.get(`${this.#n()}/wp-json/autoskola/v1/courses`).pipe(D(n=>({groups:n.map(I),fromMock:!1})),F(()=>y({groups:$.map(I),fromMock:!0}))):y({groups:$,fromMock:!0})}static ɵfac=function(e){return new(e||P)};static ɵprov=S({token:P,factory:P.ɵfac,providedIn:"root"})}class M{#t=f(P);#e=b([{id:"a1",image:d("/images/sites/courses/skupina-a.png"),imagePosition:"left",backgroundGray:!1,enabled:!0,order:1},{id:"a2",image:d("/images/sites/courses/skupina-a.png"),imagePosition:"right",backgroundGray:!1,enabled:!0,order:2},{id:"a",image:d("/images/sites/courses/skupina-a.png"),imagePosition:"left",backgroundGray:!1,enabled:!0,order:3},{id:"b",image:d("/images/sites/courses/skupina-b.png"),imagePosition:"right",backgroundGray:!0,enabled:!0,order:4},{id:"c",image:d("/images/sites/courses/skupina-c.png"),imagePosition:"left",backgroundGray:!0,enabled:!0,order:5},{id:"d",image:d("/images/sites/courses/skupina-d.png"),imagePosition:"right",backgroundGray:!0,enabled:!0,order:6},{id:"t",image:d("/images/sites/courses/skupina-t.png"),imagePosition:"left",backgroundGray:!1,enabled:!0,order:7},{id:"be",image:d("/images/sites/courses/skupina-b.png"),imagePosition:"right",backgroundGray:!0,enabled:!0,order:8},{id:"ce",image:d("/images/sites/courses/skupina-c.png"),imagePosition:"left",backgroundGray:!0,enabled:!0,order:9}]);#n=b(!1);#r=b(0);#o=b(!1);apiCalled=this.#n.asReadonly();apiGroupCount=this.#r.asReadonly();fromMock=this.#o.asReadonly();constructor(){this.#t.getCourseGroups().pipe(R(1)).subscribe(n=>{this.#n.set(!0),this.#r.set(n.groups.length),this.#o.set(n.fromMock),this.#e.set(n.groups)})}courseGroups=E(()=>this.#e().filter(n=>n.enabled).sort((n,e)=>n.order-e.order));getCourseGroup(n){return this.#e().find(e=>e.id===n)}isCourseGroupEnabled(n){return this.getCourseGroup(n)?.enabled??!1}setCourseGroups(n){this.#e.set(n)}updateCourseGroup(n,e){const r=this.#e(),u=r.findIndex(C=>C.id===n);if(u!==-1){const C=[...r];C[u]={...C[u],...e},this.#e.set(C)}}setCourseGroupEnabled(n,e){this.updateCourseGroup(n,{enabled:e})}reorderCourseGroups(n){const e=this.#e(),r=n.map((h,B)=>{const j=e.find(N=>N.id===h);return j?{...j,order:B+1}:null}).filter(h=>h!==null),u=new Set(n),C=e.filter(h=>!u.has(h.id)).map(h=>({...h,order:r.length+1}));this.#e.set([...r,...C])}static ɵfac=function(e){return new(e||M)};static ɵprov=S({token:M,factory:M.ɵfac,providedIn:"root"})}function se(t){return{id:t.id,order:t.order,enabled:t.enabled,title:t.title,description:t.description??"",price:t.price,buttonCourse:t.buttonCourse??""}}const L=A.services.map(se);class k{#t=f(U);#e=f(K);#n(){const n=this.#e.wpApiUrl;return n?n.replace(/\/$/,""):""}getServices(){return this.#e.wpApiUrl?.trim()?this.#t.get(`${this.#n()}/wp-json/autoskola/v1/services`).pipe(D(n=>({services:n,fromMock:!1})),F(()=>y({services:L,fromMock:!0}))):y({services:L,fromMock:!0})}static ɵfac=function(e){return new(e||k)};static ɵprov=S({token:k,factory:k.ɵfac,providedIn:"root"})}class x{#t=f(k);#e=b([]);#n=b(!1);#r=b(!1);apiCalled=this.#n.asReadonly();fromMock=this.#r.asReadonly();constructor(){this.#t.getServices().pipe(R(1)).subscribe(n=>{this.#n.set(!0),this.#r.set(n.fromMock),this.#e.set(n.services)})}services=E(()=>this.#e().filter(n=>n.enabled).sort((n,e)=>n.order-e.order));getService(n){return this.#e().find(e=>e.id===n)}setServices(n){this.#e.set(n)}static ɵfac=function(e){return new(e||x)};static ɵprov=S({token:x,factory:x.ɵfac,providedIn:"root"})}const ce="Ako prebieha prihlásenie do kurzu?",ae="Dajte nám o sebe vedieť",pe="Zavolajte alebo napíšte – radi vám vysvetlíme detaily, overíme najbližší možný termín a rezervujeme vám miesto v kurze.",le="Navštívte svojho lekára",ge="Stiahnite si tlačivo, vytlačte si ho obojstranne na jeden list A4 a nechajte si ho potvrdiť vaším praktickým lekárom.",ue="Stiahnuť tlačivo (PDF)",de="Dostavte sa do autoškoly",me="S potvrdeným tlačivom, občianskym preukazom a so zálohou (1/2 ceny kurzu) za kurz sa dostavte osobne na registráciu do autoškoly. Dohodneme si úvodné detaily – začiatok kurzu, teóriu, jazdy aj trenažér.",_e="Elektronické skúšobné testy",fe="Vyskúšajte si, ako vyzerá reálny test. Naše elektronické skúšobné testy vám umožnia otestovať si znalosti a pripraviť sa na záverečnú skúšku bez stresu. Vyskúšajte si otázky online z pohodlia domova.",Ce="SPUSTIŤ TEST",he="MINISTERSTVO",be="VNÚTRA",ve="SLOVENSKEJ REPUBLIKY",Pe="Pripravte sa na skúšku – vyskúšajte si elektronické skúšobné testy.",Me="Skúšobné testy",ke={registrationTitle:ce,registrationStep1Title:ae,registrationStep1Desc:pe,registrationStep2Title:le,registrationStep2Desc:ge,registrationStep2Link:ue,registrationStep3Title:de,registrationStep3Desc:me,practiceTestsTitle:_e,practiceTestsDesc:fe,practiceTestsButton:Ce,practiceTestsMinisterstvo:he,practiceTestsVnutra:be,practiceTestsSlovenskejRepubliky:ve,practiceTestsCtaText:Pe,practiceTestsCtaLink:Me},xe="How does course registration work?",Oe="Let us know about you",ye="Call or write – we will gladly explain the details, verify the nearest possible date, and reserve your spot in the course.",we="Visit your doctor",Te="Download the form, print it double-sided on one A4 sheet, and have it confirmed by your general practitioner.",Se="Download form (PDF)",ze="Come to the driving school",Ge="With the confirmed form, ID card, and a deposit (1/2 of the course price) for the course, come in person to register at the driving school. We will arrange the initial details – start of the course, theory, lessons, and simulator.",je="Electronic practice tests",$e="Try out what a real test looks like. Our electronic practice tests let you test your knowledge and prepare for the final exam without stress. Try the questions online from the comfort of your home.",Ie="START TEST",Le="MINISTRY",Ue="OF INTERIOR",De="OF THE SLOVAK REPUBLIC",Fe="Prepare for the exam – try our electronic practice tests.",Re="Practice tests",Ee={registrationTitle:xe,registrationStep1Title:Oe,registrationStep1Desc:ye,registrationStep2Title:we,registrationStep2Desc:Te,registrationStep2Link:Se,registrationStep3Title:ze,registrationStep3Desc:Ge,practiceTestsTitle:je,practiceTestsDesc:$e,practiceTestsButton:Ie,practiceTestsMinisterstvo:Le,practiceTestsVnutra:Ue,practiceTestsSlovenskejRepubliky:De,practiceTestsCtaText:Fe,practiceTestsCtaLink:Re},Ae=(t,n)=>n.titleKey,V=(t,n)=>n.id,Ke=(t,n)=>n.label+n.price;function Ve(t,n){t&1&&(s(0,"div",20),_(1,"span",30)(2,"span",30),i())}function Be(t,n){if(t&1&&(s(0,"a",29),c(1),i()),t&2){const e=a().$implicit,r=a();m("href",e.linkUrl,z),o(),v(" ",r.t(e.linkKey)," ")}}function Ne(t,n){if(t&1&&(l(0,Ve,3,0,"div",20),s(1,"article",21)(2,"div",22)(3,"span",23),c(4),i(),s(5,"div",24),_(6,"app-icon",25),i()(),s(7,"div",26)(8,"h3",27),c(9),i(),s(10,"p",28),c(11),i(),l(12,Be,2,2,"a",29),i()()),t&2){const e=n.$implicit,r=n.$index,u=a();g(r>0?0:-1),o(4),p(r+1),o(2),m("icon",e.icon)("color",u.registrationStepIconColor),o(3),p(u.t(e.titleKey)),o(2),p(u.t(e.descKey)),o(),g(e.linkKey&&e.linkUrl&&e.linkUrl.length>0?12:-1)}}function We(t,n){t&1&&(s(0,"strong"),c(1,"Zdroj kurzov:"),i(),c(2," Načítavam… "))}function He(t,n){if(t&1&&(s(0,"strong"),c(1,"Zdroj kurzov:"),i(),c(2),s(3,"code"),c(4,"wpApiUrl"),i(),c(5,". ")),t&2){const e=a(2);o(2),v(" Lokálny mock (",e.coursesService.apiGroupCount()," skupín) – WordPress API nebolo dostupné alebo nie je nastavené ")}}function Ze(t,n){t&1&&(s(0,"strong"),c(1,"Zdroj kurzov:"),i(),c(2," API bolo volané, ale vrátilo 0 záznamov. Skontrolujte v prehliadači F12 → Network, či request na "),s(3,"code"),c(4,"/wp-json/autoskola/v1/courses"),i(),c(5," prebehol a či máte v WordPresse publikované kurzy s vyplnenými textami. "))}function qe(t,n){if(t&1&&(s(0,"strong"),c(1,"Zdroj kurzov:"),i(),c(2)),t&2){const e=a(2);o(2),v(" Dáta z WordPressu (",e.coursesService.apiGroupCount()," skupín). Texty zobrazované nižšie sú z CMS. ")}}function Ye(t,n){if(t&1&&(s(0,"div",4),l(1,We,3,0)(2,He,6,1)(3,Ze,6,0)(4,qe,3,1),i()),t&2){const e=a();o(),g(e.coursesService.apiCalled()?e.coursesService.fromMock()?2:e.coursesService.apiGroupCount()===0?3:4:1)}}function Je(t,n){if(t&1&&(s(0,"div",33),_(1,"img",45),i()),t&2){const e=a().$implicit,r=a();o(),m("src",e.image,z)("alt",r.getGroupLabel(e,"title"))}}function Xe(t,n){if(t&1&&(_(0,"br"),c(1)),t&2){const e=a().$implicit,r=a();o(),v("",r.getGroupLabel(e,"practiceMaintenance")," ")}}function Qe(t,n){if(t&1&&(s(0,"span",46),c(1),i()),t&2){const e=n.$implicit;o(),ne("",e.label,": ",e.price)}}function en(t,n){if(t&1&&w(0,Qe,2,2,"span",46,Ke),t&2){const e=a().$implicit;T(e.priceUpgrades)}}function nn(t,n){if(t&1&&(s(0,"div",33),_(1,"img",45),i()),t&2){const e=a().$implicit,r=a();o(),m("src",e.image,z)("alt",r.getGroupLabel(e,"title"))}}function tn(t,n){if(t&1&&(s(0,"div",31)(1,"div",32),l(2,Je,2,2,"div",33),s(3,"div",34)(4,"h2",35)(5,"span",36),c(6,"Skupina "),s(7,"span",37),c(8),X(9,"uppercase"),i()()(),s(10,"p",38),c(11),i(),s(12,"ul",39)(13,"li"),c(14),i(),s(15,"li"),c(16),i(),s(17,"li"),c(18),l(19,Xe,2,1),i()(),s(20,"div",40),c(21),l(22,en,2,0),i(),s(23,"div",41)(24,"p"),c(25),i(),s(26,"p"),c(27),i()(),s(28,"div",42),_(29,"app-button",43)(30,"app-button",44),i()(),l(31,nn,2,2,"div",33),i()()),t&2){const e=n.$implicit,r=a();Q("gray-background",e.backgroundGray)("image-left",e.imagePosition==="left")("image-right",e.imagePosition==="right"),o(2),g(e.imagePosition==="left"?2:-1),o(6),p(ee(9,23,e.id)),o(3),p(r.getGroupLabel(e,"subtitle")),o(3),p(r.getGroupLabel(e,"ageRequirement")),o(2),p(r.getGroupLabel(e,"theoryHours")),o(2),v(" ",r.getGroupLabel(e,"practiceHours")," "),o(),g(r.getGroupLabel(e,"practiceMaintenance")?19:-1),o(2),v(" ",r.getGroupLabel(e,"price")," "),o(),g(e.priceUpgrades!=null&&e.priceUpgrades.length?22:-1),o(3),p(r.getGroupLabel(e,"firstAidFee")),o(2),p(r.getGroupLabel(e,"examFee")),o(2),m("text",r.getGroupLabel(e,"buttonCourse"))("rounded",!1),o(),m("text",r.getGroupLabel(e,"buttonConditioning"))("inverted",!0)("rounded",!1),o(),g(e.imagePosition==="right"?31:-1)}}function rn(t,n){if(t&1&&(s(0,"p",54),c(1),i()),t&2){const e=a().$implicit,r=a(2);o(),p(r.getServiceLabel(e,"description"))}}function on(t,n){if(t&1&&_(0,"app-button",43),t&2){const e=a().$implicit,r=a(2);m("text",r.getServiceLabel(e,"buttonCourse"))("rounded",!1)}}function sn(t,n){if(t&1&&(s(0,"article",49)(1,"div",50),_(2,"app-icon",51),i(),s(3,"div",52)(4,"h3",53),c(5),i(),l(6,rn,2,1,"p",54),s(7,"div",55)(8,"span",56),c(9),i(),l(10,on,1,2,"app-button",43),i()()()),t&2){const e=n.$implicit,r=a(2);o(2),m("icon",r.getServiceIcon(e)),o(3),p(r.getServiceLabel(e,"title")),o(),g(r.getServiceLabel(e,"description")?6:-1),o(3),p(r.getServiceLabel(e,"price")),o(),g(r.getServiceLabel(e,"buttonCourse")?10:-1)}}function cn(t,n){if(t&1&&(s(0,"div",6)(1,"h2",47),c(2,"Cenník služieb"),i(),s(3,"div",48),w(4,sn,11,5,"article",49,V),i()()),t&2){const e=a();o(4),T(e.services())}}function an(t,n){if(t&1&&(s(0,"a",18),c(1),i()),t&2){const e=a();m("href",e.practiceTestUrl,z),o(),p(e.t("practiceTestsButton"))}}function pn(t,n){if(t&1&&(s(0,"button",19),c(1),i()),t&2){const e=a();o(),p(e.t("practiceTestsButton"))}}const ln={"kkv-35":"certificate","kkv-140":"certificate","kombinovany-c-d":"certificate","doskolovaci-kurz":"calendar","neucast-skuska":"calendar","opakovana-skuska":"calendar",individualne:"user",kondicne:"car"};class O extends te{coursesService=f(M);servicesService=f(x);isDev=W();t=this.registerTranslations({sk:ke,en:Ee});courseGroups=this.coursesService.courseGroups;services=this.servicesService.services;registrationSteps=[{icon:"phone",titleKey:"registrationStep1Title",descKey:"registrationStep1Desc"},{icon:"certificate",titleKey:"registrationStep2Title",descKey:"registrationStep2Desc",linkKey:"registrationStep2Link",linkUrl:""},{icon:"location-pin",titleKey:"registrationStep3Title",descKey:"registrationStep3Desc"}];registrationStepIconColor="var(--reg-step-icon-color, var(--an-blue, #264C96))";practiceTestUrl="";getGroupLabel(n,e){const r=n[e];return r!=null&&r!==""?r:""}getServiceLabel(n,e){if(e==="enabled"||e==="order"||e==="id")return"";const r=n[e];return r!=null&&r!==""?String(r):""}getServiceIcon(n){return ln[n.id]??"certificate"}static ɵfac=(()=>{let n;return function(r){return(n||(n=H(O)))(r||O)}})();static ɵcmp=Z({type:O,selectors:[["app-courses"]],features:[J],decls:30,vars:9,consts:[[1,"courses-section"],[1,"registration-process"],[1,"registration-process__title"],[1,"registration-process__steps"],[1,"courses-api-info",2,"margin-bottom","1rem","padding","0.75rem 1rem","background","#f0f4f8","border-radius","6px","font-size","0.875rem"],[1,"course-group",3,"gray-background","image-left","image-right"],[1,"services-section"],[1,"practice-tests"],[1,"practice-tests__brand"],["aria-hidden","true",1,"practice-tests__logo"],["src","/images/sites/courses/ministerstvo-vnutra.svg","alt","","width","80","height","96"],[1,"practice-tests__ministry"],[1,"practice-tests__ministry-line","practice-tests__ministry-line--red"],[1,"practice-tests__ministry-line","practice-tests__ministry-line--blue"],[1,"practice-tests__ministry-line"],[1,"practice-tests__content"],[1,"practice-tests__title"],[1,"practice-tests__desc"],["target","_blank","rel","noopener noreferrer",1,"practice-tests__btn",3,"href"],["type","button","disabled","",1,"practice-tests__btn"],["aria-hidden","true",1,"registration-process__connector"],[1,"registration-process__step"],[1,"registration-process__step-header"],[1,"registration-process__step-number"],[1,"registration-process__step-icon"],["size","2.25rem",3,"icon","color"],[1,"registration-process__step-content"],[1,"registration-process__step-title"],[1,"registration-process__step-desc"],["target","_blank","rel","noopener noreferrer",1,"registration-process__step-link",3,"href"],[1,"registration-process__chevron"],[1,"course-group"],[1,"course-content"],[1,"course-image-wrapper"],[1,"course-details"],[1,"course-title"],[1,"course-title-text"],[1,"course-title-text-id"],[1,"course-subtitle"],[1,"course-features"],[1,"course-price"],[1,"course-additional-fees"],[1,"course-buttons"],["backgroundColor","#dc2626",3,"text","rounded"],["backgroundColor","#dc2626",3,"text","inverted","rounded"],[3,"src","alt"],[1,"course-price-upgrade"],[1,"services-title"],[1,"services-grid"],[1,"service-card"],[1,"service-card-icon"],["color","var(--an-blue, #0066cc)","size","2.5rem",3,"icon"],[1,"service-card-body"],[1,"service-card-title"],[1,"service-card-description"],[1,"service-card-footer"],[1,"service-card-price"]],template:function(e,r){e&1&&(s(0,"app-site-wrapper")(1,"section",0)(2,"div",1)(3,"h2",2),c(4),i(),s(5,"div",3),w(6,Ne,13,7,null,null,Ae),i()(),l(8,Ye,5,1,"div",4),w(9,tn,32,25,"div",5,V),l(11,cn,6,0,"div",6),s(12,"div",7)(13,"div",8)(14,"div",9),_(15,"img",10),i(),s(16,"div",11)(17,"span",12),c(18),i(),s(19,"span",13),c(20),i(),s(21,"span",14),c(22),i()()(),s(23,"div",15)(24,"h2",16),c(25),i(),s(26,"p",17),c(27),i(),l(28,an,2,2,"a",18)(29,pn,2,1,"button",19),i()()()()),e&2&&(o(4),p(r.t("registrationTitle")),o(2),T(r.registrationSteps),o(2),g(r.isDev?8:-1),o(),T(r.courseGroups()),o(2),g(r.services().length>0?11:-1),o(7),p(r.t("practiceTestsMinisterstvo")),o(2),p(r.t("practiceTestsVnutra")),o(2),p(r.t("practiceTestsSlovenskejRepubliky")),o(3),p(r.t("practiceTestsTitle")),o(2),p(r.t("practiceTestsDesc")),o(),g(r.practiceTestUrl?28:29))},dependencies:[q,re,oe,ie,Y],styles:[`@charset "UTF-8";




.registration-process[_ngcontent-%COMP%] {
  --reg-bg: var(--an-blue, #264C96);
  --reg-text: #fff;
  --reg-title-size: 1.75rem;
  --reg-title-weight: 800;
  --reg-step-number-color: #9ca3af;
  --reg-step-number-size: 3.75rem;
  --reg-step-icon-color: #fff;
  --reg-connector-color: rgba(255, 255, 255, 0.5);
  --reg-step-bg: rgba(255, 255, 255, 0.12);
  --reg-step-radius: 14px;
  --reg-link-color: #fff;
  --reg-link-underline: underline;
  --reg-max-width: 75rem;
  --reg-gap: 2rem;
  --reg-padding-block: 3rem;
  --reg-padding-inline: 2rem;
  --reg-step-padding: 1.75rem;
  width: 100%;
  background-color: var(--reg-bg);
  color: var(--reg-text);
  padding: var(--reg-padding-block) var(--reg-padding-inline);
  margin-bottom: 2rem;
}

.registration-process__title[_ngcontent-%COMP%] {
  font-size: var(--reg-title-size);
  font-weight: var(--reg-title-weight);
  margin: 0 0 var(--reg-gap) 0;
  text-align: center;
  color: var(--reg-text);
  letter-spacing: -0.02em;
}

.registration-process__steps[_ngcontent-%COMP%] {
  max-width: var(--reg-max-width);
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: center;
  gap: 0;
}

.registration-process__step[_ngcontent-%COMP%] {
  flex: 1 1 0;
  min-width: min(100%, 18rem);
  max-width: 24rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  background: var(--reg-step-bg);
  border-radius: var(--reg-step-radius);
  padding: var(--reg-step-padding);
  position: relative;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.registration-process__step-header[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  flex-shrink: 0;
}

.registration-process__step-number[_ngcontent-%COMP%] {
  font-size: var(--reg-step-number-size);
  font-weight: 900;
  line-height: 1;
  color: var(--reg-step-number-color);
  font-family: var(--ac-font-family, system-ui, sans-serif);
  letter-spacing: -0.03em;
}

.registration-process__step-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.registration-process__step-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
}

.registration-process__step-title[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  font-weight: 700;
  margin: 0;
  color: var(--reg-text);
  line-height: 1.35;
}

.registration-process__step-desc[_ngcontent-%COMP%] {
  font-size: 0.9375rem;
  line-height: 1.55;
  margin: 0;
  color: var(--reg-text);
  opacity: 0.95;
}

.registration-process__step-link[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--reg-link-color);
  text-underline-offset: 0.2em;
  text-decoration: var(--reg-link-underline);
  transition: opacity 0.2s ease;
}
.registration-process__step-link[_ngcontent-%COMP%]:hover {
  opacity: 0.85;
}

.registration-process__connector[_ngcontent-%COMP%] {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  padding: 0 0.75rem;
  align-self: center;
}

.registration-process__chevron[_ngcontent-%COMP%] {
  width: 0;
  height: 0;
  border-top: 0.45rem solid transparent;
  border-bottom: 0.45rem solid transparent;
  border-left: 0.5rem solid var(--reg-connector-color);
}

@media (max-width: 64rem) {
  .registration-process__steps[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;
  }
  .registration-process__connector[_ngcontent-%COMP%] {
    transform: rotate(90deg);
    padding: 0.35rem 0;
  }
}
@media (max-width: 48rem) {
  .registration-process[_ngcontent-%COMP%] {
    --reg-padding-inline: 1rem;
    --reg-padding-block: 2rem;
    --reg-title-size: 1.5rem;
    --reg-step-number-size: 3rem;
    --reg-step-padding: 1.25rem;
  }
  .registration-process__step[_ngcontent-%COMP%] {
    min-width: 100%;
    max-width: 100%;
  }
}


.practice-tests[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: minmax(0, 0.4fr) 1fr;
  max-width: 75rem;
  margin: 3rem auto 0;
  padding: 0 2rem;
  min-height: 14rem;
  background: #fff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}

.practice-tests__brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;
  background: #f5f5f5;
}

.practice-tests__logo[_ngcontent-%COMP%] {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.practice-tests__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  display: block;
  width: 80px;
  height: auto;
  max-height: 96px;
  object-fit: contain;
}

.practice-tests__ministry[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  text-align: left;
}

.practice-tests__ministry-line[_ngcontent-%COMP%] {
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: #0d4a9c;
}
.practice-tests__ministry-line--red[_ngcontent-%COMP%] {
  text-decoration: underline;
  text-decoration-color: #c41e3a;
  text-underline-offset: 2px;
}
.practice-tests__ministry-line--blue[_ngcontent-%COMP%] {
  text-decoration: underline;
  text-decoration-color: #0d4a9c;
  text-underline-offset: 2px;
}

.practice-tests__content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  padding: 2rem 2.5rem;
  text-align: left;
}

.practice-tests__title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 800;
  color: #1f2937;
  margin: 0;
  line-height: 1.3;
}

.practice-tests__desc[_ngcontent-%COMP%] {
  font-size: 0.9375rem;
  line-height: 1.55;
  color: #374151;
  margin: 0;
  max-width: 42rem;
}

.practice-tests__btn[_ngcontent-%COMP%] {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  min-width: 10rem;
  padding: 0.75rem 1.5rem;
  font-size: 0.875rem;
  font-weight: 700;
  letter-spacing: 0.04em;
  color: #1f2937;
  background: #fff;
  border: 2px solid #f59e0b;
  border-radius: 9999px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;
  text-decoration: none;
}
.practice-tests__btn[_ngcontent-%COMP%]:hover:not(:disabled) {
  background: #f59e0b;
  color: #fff;
  border-color: #f59e0b;
}
.practice-tests__btn[_ngcontent-%COMP%]:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

@media (max-width: 64rem) {
  .practice-tests[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    padding: 0;
  }
  .practice-tests__brand[_ngcontent-%COMP%] {
    flex-direction: column;
    padding: 1.5rem;
  }
  .practice-tests__content[_ngcontent-%COMP%] {
    padding: 1.5rem 2rem;
  }
}
@media (max-width: 48rem) {
  .practice-tests[_ngcontent-%COMP%] {
    margin-left: 1rem;
    margin-right: 1rem;
    padding: 0;
  }
  .practice-tests__title[_ngcontent-%COMP%] {
    font-size: 1.25rem;
  }
  .practice-tests__btn[_ngcontent-%COMP%] {
    align-self: stretch;
  }
}
.courses-section[_ngcontent-%COMP%] {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}

.course-group[_ngcontent-%COMP%] {
  width: 100%;
  padding: 3rem 0;
  background-color: white;
}
.course-group.gray-background[_ngcontent-%COMP%] {
  background-color: #f5f5f5;
}
.course-group[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%] {
  max-width: 75rem;
  margin: 0 auto;
  padding: 0 2rem;
  display: grid;
  gap: 3rem;
  align-items: center;
}
.course-group.image-left[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%] {
  grid-template-columns: auto 1fr;
}
.course-group.image-right[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%] {
  grid-template-columns: 1fr auto;
}
.course-group[_ngcontent-%COMP%]   .course-image-wrapper[_ngcontent-%COMP%] {
  width: 20rem;
  height: 20rem;
  position: relative;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
.course-group[_ngcontent-%COMP%]   .course-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  height: 100%;
  object-fit: cover;
  display: block;
}
.course-group[_ngcontent-%COMP%]   .course-details[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.course-group[_ngcontent-%COMP%]   .course-title[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  font-weight: 900;
  color: #000;
  margin: 0;
  line-height: 1.2;
}
.course-group[_ngcontent-%COMP%]   .course-title-text[_ngcontent-%COMP%] {
  display: inline-block;
}
.course-group[_ngcontent-%COMP%]   .course-title-text-id[_ngcontent-%COMP%] {
  color: var(--an-blue);
}
.course-group[_ngcontent-%COMP%]   .course-subtitle[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  margin: 0;
  line-height: 1.5;
}
.course-group[_ngcontent-%COMP%]   .course-features[_ngcontent-%COMP%] {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.course-group[_ngcontent-%COMP%]   .course-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  line-height: 1.5;
  position: relative;
  padding-left: 1.5rem;
}
.course-group[_ngcontent-%COMP%]   .course-features[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {
  content: "•";
  position: absolute;
  left: 0;
  color: #dc2626;
  font-size: 1.5rem;
  line-height: 1;
}
.course-group[_ngcontent-%COMP%]   .course-price[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: #dc2626;
  margin: 0.5rem 0;
}
.course-group[_ngcontent-%COMP%]   .course-price[_ngcontent-%COMP%]   .course-price-upgrade[_ngcontent-%COMP%] {
  display: block;
  font-size: 0.95rem;
  font-weight: 500;
  color: #374151;
  margin-top: 0.35rem;
}
.course-group[_ngcontent-%COMP%]   .course-additional-fees[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
}
.course-group[_ngcontent-%COMP%]   .course-additional-fees[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 400;
  color: #000;
  margin: 0;
  line-height: 1.5;
}
.course-group[_ngcontent-%COMP%]   .course-buttons[_ngcontent-%COMP%] {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
}
.course-group[_ngcontent-%COMP%]   .course-buttons[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {
  flex: 0 0 auto;
}
.course-group[_ngcontent-%COMP%]   .course-buttons[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]:first-child {
  min-width: 10rem;
}
.course-group[_ngcontent-%COMP%]   .course-buttons[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]:last-child {
  min-width: 10rem;
}
@media (max-width: 64rem) {
  .course-group[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%] {
    grid-template-columns: 1fr !important;
    gap: 2rem;
    text-align: center;
  }
  .course-group[_ngcontent-%COMP%]   .course-image-wrapper[_ngcontent-%COMP%] {
    margin: 0 auto;
    width: 15rem;
    height: 15rem;
  }
  .course-group[_ngcontent-%COMP%]   .course-buttons[_ngcontent-%COMP%] {
    justify-content: center;
  }
}
@media (max-width: 48rem) {
  .course-group[_ngcontent-%COMP%] {
    padding: 2rem 0;
  }
  .course-group[_ngcontent-%COMP%]   .course-content[_ngcontent-%COMP%] {
    padding: 0 1rem;
  }
  .course-group[_ngcontent-%COMP%]   .course-title[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  .course-group[_ngcontent-%COMP%]   .course-image-wrapper[_ngcontent-%COMP%] {
    width: 12rem;
    height: 12rem;
  }
  .course-group[_ngcontent-%COMP%]   .course-buttons[_ngcontent-%COMP%] {
    flex-direction: column;
    width: 100%;
  }
  .course-group[_ngcontent-%COMP%]   .course-buttons[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {
    width: 100%;
  }
}

.course-buttons[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]:first-child     button {
  background-color: #dc2626 !important;
  color: white !important;
  border: none !important;
}
.course-buttons[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]:last-child     button {
  background-color: white !important;
  color: #dc2626 !important;
  border: 2px solid #dc2626 !important;
  font-weight: 700;
  transition: all 0.2s ease;
}
.course-buttons[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]:last-child     button:hover {
  background-color: #dc2626 !important;
  color: white !important;
  opacity: 1;
}



.services-section[_ngcontent-%COMP%] {
  margin-top: 3rem;
  padding: 2rem 0;
  border-top: 1px solid #e5e7eb;
}
.services-section[_ngcontent-%COMP%]   .services-title[_ngcontent-%COMP%] {
  font-size: 1.75rem;
  font-weight: 800;
  margin: 0 0 1.5rem 0;
  color: #1f2937;
}
.services-section[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 20rem), 1fr));
  gap: 1.5rem;
}
.services-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  overflow: hidden;
  transition: box-shadow 0.2s ease, border-color 0.2s ease;
}
.services-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border-color: #d1d5db;
}
.services-section[_ngcontent-%COMP%]   .service-card-icon[_ngcontent-%COMP%] {
  flex-shrink: 0;
  padding: 1.25rem 1.25rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.services-section[_ngcontent-%COMP%]   .service-card-body[_ngcontent-%COMP%] {
  flex: 1;
  padding: 0 1.25rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  min-width: 0;
}
.services-section[_ngcontent-%COMP%]   .service-card-title[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0;
  line-height: 1.35;
}
.services-section[_ngcontent-%COMP%]   .service-card-description[_ngcontent-%COMP%] {
  font-size: 0.9375rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0;
  flex: 1;
}
.services-section[_ngcontent-%COMP%]   .service-card-footer[_ngcontent-%COMP%] {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.5rem;
  padding-top: 0.75rem;
  border-top: 1px solid #f3f4f6;
}
.services-section[_ngcontent-%COMP%]   .service-card-price[_ngcontent-%COMP%] {
  font-size: 1.125rem;
  font-weight: 700;
  color: #dc2626;
  white-space: nowrap;
}
.services-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {
  margin-left: auto;
}
@media (max-width: 48rem) {
  .services-section[_ngcontent-%COMP%]   .services-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  .services-section[_ngcontent-%COMP%]   .service-card-footer[_ngcontent-%COMP%] {
    flex-direction: column;
    align-items: stretch;
  }
  .services-section[_ngcontent-%COMP%]   .service-card[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {
    margin-left: 0;
    width: 100%;
  }
}`],changeDetection:0})}export{O as CoursesComponent};
