import{i as _,U,V as y,W as $,X as F,Y as w,s as b,Z as E,c as R,aa as W,$ as H,d as Z,C as q,ab as Y,a2 as J,g as i,k as g,K as S,z as c,j as s,H as m,l as r,n as l,M as z,O as p,r as a,m as d,ac as X,A as Q,ad as ee,B as O,a6 as G,ae as ne}from"./index-Dej6NHIl.js";import{B as te,S as oe,a as re}from"./site-wrapper.component-D6m8_1eQ.js";import{I as ie}from"./icon.component-BkHG8BRT.js";import{a as A,C as B,i as u}from"./image-path.util-Dz0GhSf6.js";const L=A.courses;function T(t){return typeof t!="string"?t:t.replace(/\\u([0-9a-fA-F]{4})/g,(n,e)=>String.fromCodePoint(parseInt(e,16))).replace(/u([0-9a-fA-F]{4})/g,(n,e)=>String.fromCodePoint(parseInt(e,16)))}function I(t){const{priceUpgrade:n,...e}=t;return n&&typeof n=="string"&&(!e.priceUpgrades||!e.priceUpgrades.length)&&(e.priceUpgrades=[{label:"Prechod z nižšej skupiny",price:n}]),e.price&&(e.price=T(e.price)),e.priceUpgrades?.length&&(e.priceUpgrades=e.priceUpgrades.map(o=>({label:T(o.label),price:T(o.price)}))),e}class v{#t=_(U);#e=_(B);#n(){const n=this.#e.wpApiUrl;return n?n.replace(/\/$/,""):""}getCourseGroups(){return this.#e.wpApiUrl?.trim()?this.#t.get(`${this.#n()}/wp-json/autoskola/v1/courses`).pipe($(n=>({groups:n.map(I),fromMock:!1})),F(()=>y({groups:L.map(I),fromMock:!0}))):y({groups:L,fromMock:!0})}static ɵfac=function(e){return new(e||v)};static ɵprov=w({token:v,factory:v.ɵfac,providedIn:"root"})}class P{#t=_(v);#e=b([{id:"a1",image:u("/images/sites/courses/skupina-a.png"),imagePosition:"left",backgroundGray:!1,enabled:!0,order:1},{id:"a2",image:u("/images/sites/courses/skupina-a.png"),imagePosition:"right",backgroundGray:!1,enabled:!0,order:2},{id:"a",image:u("/images/sites/courses/skupina-a.png"),imagePosition:"left",backgroundGray:!1,enabled:!0,order:3},{id:"b",image:u("/images/sites/courses/skupina-b.png"),imagePosition:"right",backgroundGray:!0,enabled:!0,order:4},{id:"c",image:u("/images/sites/courses/skupina-c.png"),imagePosition:"left",backgroundGray:!0,enabled:!0,order:5},{id:"d",image:u("/images/sites/courses/skupina-d.png"),imagePosition:"right",backgroundGray:!0,enabled:!0,order:6},{id:"t",image:u("/images/sites/courses/skupina-t.png"),imagePosition:"left",backgroundGray:!1,enabled:!0,order:7},{id:"be",image:u("/images/sites/courses/skupina-b.png"),imagePosition:"right",backgroundGray:!0,enabled:!0,order:8},{id:"ce",image:u("/images/sites/courses/skupina-c.png"),imagePosition:"left",backgroundGray:!0,enabled:!0,order:9}]);#n=b(!1);#o=b(0);#r=b(!1);apiCalled=this.#n.asReadonly();apiGroupCount=this.#o.asReadonly();fromMock=this.#r.asReadonly();constructor(){this.#t.getCourseGroups().pipe(E(1)).subscribe(n=>{this.#n.set(!0),this.#o.set(n.groups.length),this.#r.set(n.fromMock),this.#e.set(n.groups)})}courseGroups=R(()=>this.#e().filter(n=>n.enabled).sort((n,e)=>n.order-e.order));getCourseGroup(n){return this.#e().find(e=>e.id===n)}isCourseGroupEnabled(n){return this.getCourseGroup(n)?.enabled??!1}setCourseGroups(n){this.#e.set(n)}updateCourseGroup(n,e){const o=this.#e(),h=o.findIndex(f=>f.id===n);if(h!==-1){const f=[...o];f[h]={...f[h],...e},this.#e.set(f)}}setCourseGroupEnabled(n,e){this.updateCourseGroup(n,{enabled:e})}reorderCourseGroups(n){const e=this.#e(),o=n.map((C,V)=>{const j=e.find(N=>N.id===C);return j?{...j,order:V+1}:null}).filter(C=>C!==null),h=new Set(n),f=e.filter(C=>!h.has(C.id)).map(C=>({...C,order:o.length+1}));this.#e.set([...o,...f])}static ɵfac=function(e){return new(e||P)};static ɵprov=w({token:P,factory:P.ɵfac,providedIn:"root"})}function se(t){return{id:t.id,order:t.order,enabled:t.enabled,title:t.title,description:t.description??"",price:t.price,buttonCourse:t.buttonCourse??""}}const D=A.services.map(se);class M{#t=_(U);#e=_(B);#n(){const n=this.#e.wpApiUrl;return n?n.replace(/\/$/,""):""}getServices(){return this.#e.wpApiUrl?.trim()?this.#t.get(`${this.#n()}/wp-json/autoskola/v1/services`).pipe($(n=>({services:n,fromMock:!1})),F(()=>y({services:D,fromMock:!0}))):y({services:D,fromMock:!0})}static ɵfac=function(e){return new(e||M)};static ɵprov=w({token:M,factory:M.ɵfac,providedIn:"root"})}class k{#t=_(M);#e=b([]);#n=b(!1);#o=b(!1);apiCalled=this.#n.asReadonly();fromMock=this.#o.asReadonly();constructor(){this.#t.getServices().pipe(E(1)).subscribe(n=>{this.#n.set(!0),this.#o.set(n.fromMock),this.#e.set(n.services)})}services=R(()=>this.#e().filter(n=>n.enabled).sort((n,e)=>n.order-e.order));getService(n){return this.#e().find(e=>e.id===n)}setServices(n){this.#e.set(n)}static ɵfac=function(e){return new(e||k)};static ɵprov=w({token:k,factory:k.ɵfac,providedIn:"root"})}const ce="Ako prebieha prihlásenie do kurzu?",ae="Dajte nám o sebe vedieť",pe="Zavolajte alebo napíšte – radi vám vysvetlíme detaily, overíme najbližší možný termín a rezervujeme vám miesto v kurze.",ge="Navštívte svojho lekára",le="Stiahnite si tlačivo, vytlačte si ho obojstranne na jeden list A4 a nechajte si ho potvrdiť vaším praktickým lekárom.",ue="Stiahnuť tlačivo (PDF)",de="Dostavte sa do autoškoly",me="S potvrdeným tlačivom, občianskym preukazom a so zálohou (1/2 ceny kurzu) za kurz sa dostavte osobne na registráciu do autoškoly. Dohodneme si úvodné detaily – začiatok kurzu, teóriu, jazdy aj trenažér.",_e="Elektronické skúšobné testy",fe="Vyskúšajte si, ako vyzerá reálny test. Naše elektronické skúšobné testy vám umožnia otestovať si znalosti a pripraviť sa na záverečnú skúšku bez stresu. Vyskúšajte si otázky online z pohodlia domova.",Ce="SPUSTIŤ TEST",be="MINISTERSTVO",he="VNÚTRA",ve="SLOVENSKEJ REPUBLIKY",Pe="Pripravte sa na skúšku – vyskúšajte si elektronické skúšobné testy.",Me="Skúšobné testy",ke={registrationTitle:ce,registrationStep1Title:ae,registrationStep1Desc:pe,registrationStep2Title:ge,registrationStep2Desc:le,registrationStep2Link:ue,registrationStep3Title:de,registrationStep3Desc:me,practiceTestsTitle:_e,practiceTestsDesc:fe,practiceTestsButton:Ce,practiceTestsMinisterstvo:be,practiceTestsVnutra:he,practiceTestsSlovenskejRepubliky:ve,practiceTestsCtaText:Pe,practiceTestsCtaLink:Me},Oe="How does course registration work?",xe="Let us know about you",ye="Call or write – we will gladly explain the details, verify the nearest possible date, and reserve your spot in the course.",we="Visit your doctor",Te="Download the form, print it double-sided on one A4 sheet, and have it confirmed by your general practitioner.",Se="Download form (PDF)",ze="Come to the driving school",Ge="With the confirmed form, ID card, and a deposit (1/2 of the course price) for the course, come in person to register at the driving school. We will arrange the initial details – start of the course, theory, lessons, and simulator.",je="Electronic practice tests",Le="Try out what a real test looks like. Our electronic practice tests let you test your knowledge and prepare for the final exam without stress. Try the questions online from the comfort of your home.",Ie="START TEST",De="MINISTRY",Ue="OF INTERIOR",$e="OF THE SLOVAK REPUBLIC",Fe="Prepare for the exam – try our electronic practice tests.",Ee="Practice tests",Re={registrationTitle:Oe,registrationStep1Title:xe,registrationStep1Desc:ye,registrationStep2Title:we,registrationStep2Desc:Te,registrationStep2Link:Se,registrationStep3Title:ze,registrationStep3Desc:Ge,practiceTestsTitle:je,practiceTestsDesc:Le,practiceTestsButton:Ie,practiceTestsMinisterstvo:De,practiceTestsVnutra:Ue,practiceTestsSlovenskejRepubliky:$e,practiceTestsCtaText:Fe,practiceTestsCtaLink:Ee},K=(t,n)=>n.id,Ae=(t,n)=>n.label+n.price;function Be(t,n){t&1&&(i(0,"strong"),c(1,"Zdroj kurzov:"),s(),c(2," Načítavam… "))}function Ke(t,n){if(t&1&&(i(0,"strong"),c(1,"Zdroj kurzov:"),s(),c(2),i(3,"code"),c(4,"wpApiUrl"),s(),c(5,". ")),t&2){const e=a(2);r(2),O(" Lokálny mock (",e.coursesService.apiGroupCount()," skupín) – WordPress API nebolo dostupné alebo nie je nastavené ")}}function Ve(t,n){t&1&&(i(0,"strong"),c(1,"Zdroj kurzov:"),s(),c(2," API bolo volané, ale vrátilo 0 záznamov. Skontrolujte v prehliadači F12 → Network, či request na "),i(3,"code"),c(4,"/wp-json/autoskola/v1/courses"),s(),c(5," prebehol a či máte v WordPresse publikované kurzy s vyplnenými textami. "))}function Ne(t,n){if(t&1&&(i(0,"strong"),c(1,"Zdroj kurzov:"),s(),c(2)),t&2){const e=a(2);r(2),O(" Dáta z WordPressu (",e.coursesService.apiGroupCount()," skupín). Texty zobrazované nižšie sú z CMS. ")}}function We(t,n){if(t&1&&(i(0,"div",1),g(1,Be,3,0)(2,Ke,6,1)(3,Ve,6,0)(4,Ne,3,1),s()),t&2){const e=a();r(),l(e.coursesService.apiCalled()?e.coursesService.fromMock()?2:e.coursesService.apiGroupCount()===0?3:4:1)}}function He(t,n){if(t&1&&(i(0,"div",16),m(1,"img",28),s()),t&2){const e=a().$implicit,o=a();r(),d("src",e.image,G)("alt",o.getGroupLabel(e,"title"))}}function Ze(t,n){if(t&1&&(m(0,"br"),c(1)),t&2){const e=a().$implicit,o=a();r(),O("",o.getGroupLabel(e,"practiceMaintenance")," ")}}function qe(t,n){if(t&1&&(i(0,"span",29),c(1),s()),t&2){const e=n.$implicit;r(),ne("",e.label,": ",e.price)}}function Ye(t,n){if(t&1&&S(0,qe,2,2,"span",29,Ae),t&2){const e=a().$implicit;z(e.priceUpgrades)}}function Je(t,n){if(t&1&&(i(0,"div",16),m(1,"img",28),s()),t&2){const e=a().$implicit,o=a();r(),d("src",e.image,G)("alt",o.getGroupLabel(e,"title"))}}function Xe(t,n){if(t&1&&(i(0,"div",14)(1,"div",15),g(2,He,2,2,"div",16),i(3,"div",17)(4,"h2",18)(5,"span",19),c(6,"Skupina "),i(7,"span",20),c(8),X(9,"uppercase"),s()()(),i(10,"p",21),c(11),s(),i(12,"ul",22)(13,"li"),c(14),s(),i(15,"li"),c(16),s(),i(17,"li"),c(18),g(19,Ze,2,1),s()(),i(20,"div",23),c(21),g(22,Ye,2,0),s(),i(23,"div",24)(24,"p"),c(25),s(),i(26,"p"),c(27),s()(),i(28,"div",25),m(29,"app-button",26)(30,"app-button",27),s()(),g(31,Je,2,2,"div",16),s()()),t&2){const e=n.$implicit,o=a();Q("gray-background",e.backgroundGray)("image-left",e.imagePosition==="left")("image-right",e.imagePosition==="right"),r(2),l(e.imagePosition==="left"?2:-1),r(6),p(ee(9,23,e.id)),r(3),p(o.getGroupLabel(e,"subtitle")),r(3),p(o.getGroupLabel(e,"ageRequirement")),r(2),p(o.getGroupLabel(e,"theoryHours")),r(2),O(" ",o.getGroupLabel(e,"practiceHours")," "),r(),l(o.getGroupLabel(e,"practiceMaintenance")?19:-1),r(2),O(" ",o.getGroupLabel(e,"price")," "),r(),l(e.priceUpgrades!=null&&e.priceUpgrades.length?22:-1),r(3),p(o.getGroupLabel(e,"firstAidFee")),r(2),p(o.getGroupLabel(e,"examFee")),r(2),d("text",o.getGroupLabel(e,"buttonCourse"))("rounded",!1),r(),d("text",o.getGroupLabel(e,"buttonConditioning"))("inverted",!0)("rounded",!1),r(),l(e.imagePosition==="right"?31:-1)}}function Qe(t,n){if(t&1&&(i(0,"p",37),c(1),s()),t&2){const e=a().$implicit,o=a(2);r(),p(o.getServiceLabel(e,"description"))}}function en(t,n){if(t&1&&m(0,"app-button",26),t&2){const e=a().$implicit,o=a(2);d("text",o.getServiceLabel(e,"buttonCourse"))("rounded",!1)}}function nn(t,n){if(t&1&&(i(0,"article",32)(1,"div",33),m(2,"app-icon",34),s(),i(3,"div",35)(4,"h3",36),c(5),s(),g(6,Qe,2,1,"p",37),i(7,"div",38)(8,"span",39),c(9),s(),g(10,en,1,2,"app-button",26),s()()()),t&2){const e=n.$implicit,o=a(2);r(2),d("icon",o.getServiceIcon(e)),r(3),p(o.getServiceLabel(e,"title")),r(),l(o.getServiceLabel(e,"description")?6:-1),r(3),p(o.getServiceLabel(e,"price")),r(),l(o.getServiceLabel(e,"buttonCourse")?10:-1)}}function tn(t,n){if(t&1&&(i(0,"div",3)(1,"h2",30),c(2,"Cenník služieb"),s(),i(3,"div",31),S(4,nn,11,5,"article",32,K),s()()),t&2){const e=a();r(4),z(e.services())}}function on(t,n){if(t&1&&(i(0,"a",12),m(1,"app-button",40),s()),t&2){const e=a();d("href",e.practiceTestUrl,G),r(),d("text",e.practiceTestsButtonText())("rounded",!0)}}function rn(t,n){if(t&1&&m(0,"app-button",13),t&2){const e=a();d("text",e.practiceTestsButtonText())("rounded",!0)("disabled",!0)}}const sn={"kkv-35":"certificate","kkv-140":"certificate","kombinovany-c-d":"certificate","doskolovaci-kurz":"calendar","neucast-skuska":"calendar","opakovana-skuska":"calendar",individualne:"user",kondicne:"car"};class x extends te{coursesService=_(P);servicesService=_(k);isDev=W();t=this.registerTranslations({sk:ke,en:Re});courseGroups=this.coursesService.courseGroups;services=this.servicesService.services;registrationSteps=[{icon:"phone",titleKey:"registrationStep1Title",descKey:"registrationStep1Desc"},{icon:"certificate",titleKey:"registrationStep2Title",descKey:"registrationStep2Desc",linkKey:"registrationStep2Link",linkUrl:""},{icon:"location-pin",titleKey:"registrationStep3Title",descKey:"registrationStep3Desc"}];registrationStepIconColor="var(--reg-step-icon-color, var(--an-blue, #264C96))";practiceTestUrl="https://www.minv.sk/?elektronicke-testy";getGroupLabel(n,e){const o=n[e];return o!=null&&o!==""?o:""}getServiceLabel(n,e){if(e==="enabled"||e==="order"||e==="id")return"";const o=n[e];return o!=null&&o!==""?String(o):""}getServiceIcon(n){return sn[n.id]??"certificate"}practiceTestsButtonText(){return String(this.t("practiceTestsButton")??"")}static ɵfac=(()=>{let n;return function(o){return(n||(n=H(x)))(o||x)}})();static ɵcmp=Z({type:x,selectors:[["app-courses"]],features:[J],decls:18,vars:5,consts:[[1,"courses-section"],[1,"courses-api-info",2,"margin-bottom","1rem","padding","0.75rem 1rem","background","#f0f4f8","border-radius","6px","font-size","0.875rem"],[1,"course-group",3,"gray-background","image-left","image-right"],[1,"services-section"],[1,"practice-tests-section"],[1,"practice-tests-title"],[1,"practice-tests-box"],[1,"practice-tests-brand"],["aria-hidden","true",1,"practice-tests-logo"],["src","/images/mvsr.png","alt","Logo Ministerstva vnútra Slovenskej republiky"],[1,"practice-tests-content"],[1,"practice-tests-desc"],["target","_blank","rel","noopener noreferrer",1,"practice-tests-link",3,"href"],["backgroundColor","black",3,"text","rounded","disabled"],[1,"course-group"],[1,"course-content"],[1,"course-image-wrapper"],[1,"course-details"],[1,"course-title"],[1,"course-title-text"],[1,"course-title-text-id"],[1,"course-subtitle"],[1,"course-features"],[1,"course-price"],[1,"course-additional-fees"],[1,"course-buttons"],["backgroundColor","#dc2626",3,"text","rounded"],["backgroundColor","#dc2626",3,"text","inverted","rounded"],[3,"src","alt"],[1,"course-price-upgrade"],[1,"services-title"],[1,"services-grid"],[1,"service-card"],[1,"service-card-icon"],["color","var(--an-blue, #0066cc)","size","2.5rem",3,"icon"],[1,"service-card-body"],[1,"service-card-title"],[1,"service-card-description"],[1,"service-card-footer"],[1,"service-card-price"],["backgroundColor","black",3,"text","rounded"]],template:function(e,o){e&1&&(i(0,"app-site-wrapper")(1,"section",0),g(2,We,5,1,"div",1),S(3,Xe,32,25,"div",2,K),g(5,tn,6,0,"div",3),i(6,"section",4)(7,"h2",5),c(8),s(),i(9,"div",6)(10,"div",7)(11,"div",8),m(12,"img",9),s()(),i(13,"div",10)(14,"p",11),c(15),s(),g(16,on,2,3,"a",12)(17,rn,1,3,"app-button",13),s()()()()()),e&2&&(r(2),l(o.isDev?2:-1),r(),z(o.courseGroups()),r(2),l(o.services().length>0?5:-1),r(3),p(o.t("practiceTestsTitle")),r(7),p(o.t("practiceTestsDesc")),r(),l(o.practiceTestUrl?16:17))},dependencies:[q,oe,re,ie,Y],styles:[`@charset "UTF-8";




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


.practice-tests-section[_ngcontent-%COMP%] {
  padding: 4rem 0;
  max-width: 75rem;
  margin: 0 auto;
}
@media (max-width: 75rem) {
  .practice-tests-section[_ngcontent-%COMP%] {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
@media (max-width: 48rem) {
  .practice-tests-section[_ngcontent-%COMP%] {
    padding: 3rem 1rem;
  }
}

.practice-tests-title[_ngcontent-%COMP%] {
  font-size: 2rem;
  font-weight: 900;
  color: #000;
  margin: 0 0 3rem 0;
  text-align: center;
}

.practice-tests-box[_ngcontent-%COMP%] {
  background-color: var(--an-light-gray);
  border-radius: 1.125rem;
  padding: 2rem 2.5rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 2.5rem;
  align-items: center;
}

.practice-tests-brand[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.practice-tests-logo[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
}
.practice-tests-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  display: block;
  width: 200px;
  height: auto;
}

.practice-tests-ministry[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
  text-align: left;
}

.practice-tests-ministry-line[_ngcontent-%COMP%] {
  font-size: 0.7rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.02em;
  color: #0d4a9c;
}
.practice-tests-ministry-line--red[_ngcontent-%COMP%] {
  text-decoration: underline;
  text-decoration-color: #c41e3a;
  text-underline-offset: 2px;
}
.practice-tests-ministry-line--blue[_ngcontent-%COMP%] {
  text-decoration: underline;
  text-decoration-color: #0d4a9c;
  text-underline-offset: 2px;
}

.practice-tests-content[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 0;
}

.practice-tests-desc[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  line-height: 1.6;
  margin: 0;
}

.practice-tests-link[_ngcontent-%COMP%] {
  text-decoration: none;
  display: inline-block;
  align-self: flex-start;
}



.practice-tests-box[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]     button {
  background-color: #dc2626 !important;
  color: #fff !important;
  border: none !important;
  font-weight: 700;
}
.practice-tests-box[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]     button:hover:not(:disabled) {
  background-color: #b91c1c !important;
  color: #fff !important;
  opacity: 0.95;
}
.practice-tests-box[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]     button:disabled {
  background-color: #9ca3af !important;
  color: #fff !important;
  cursor: not-allowed;
}

@media (max-width: 64rem) {
  .practice-tests-box[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  .practice-tests-brand[_ngcontent-%COMP%] {
    justify-content: center;
  }
}
@media (max-width: 48rem) {
  .practice-tests-title[_ngcontent-%COMP%] {
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  .practice-tests-box[_ngcontent-%COMP%] {
    padding: 1.5rem;
  }
  .practice-tests-link[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%], 
   .practice-tests-content[_ngcontent-%COMP%]    > app-button[_ngcontent-%COMP%] {
    width: 100%;
  }
  .practice-tests-link[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%]     button, 
   .practice-tests-content[_ngcontent-%COMP%]    > app-button[_ngcontent-%COMP%]     button {
    width: 100%;
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
}`],changeDetection:0})}export{x as CoursesComponent};
