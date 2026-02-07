import{i as _,U as D,V as y,W as U,X as $,Y as w,s as b,Z as F,c as E,aa as N,$ as W,d as H,C as Z,ab as q,a2 as Y,g as i,k as g,K as S,z as c,j as s,H as m,l as r,n as l,M as z,O as p,r as a,ac as J,A as X,ad as Q,B as k,m as d,a7 as nn,ae as en}from"./index-BzAZ1y6i.js";import{C as R,B as tn,S as on,a as rn}from"./site-wrapper.component-3DHAx3Ug.js";import{I as sn}from"./icon.component-Dixo_nK7.js";import{a as A,i as u,I as cn}from"./image-path.util-wV9TwGhG.js";const j=A.courses;function T(t){return typeof t!="string"?t:t.replace(/\\u([0-9a-fA-F]{4})/g,(e,n)=>String.fromCodePoint(parseInt(n,16))).replace(/u([0-9a-fA-F]{4})/g,(e,n)=>String.fromCodePoint(parseInt(n,16)))}function I(t){const{priceUpgrade:e,...n}=t;return e&&typeof e=="string"&&(!n.priceUpgrades||!n.priceUpgrades.length)&&(n.priceUpgrades=[{label:"Prechod z nižšej skupiny",price:e}]),n.price&&(n.price=T(n.price)),n.priceUpgrades?.length&&(n.priceUpgrades=n.priceUpgrades.map(o=>({label:T(o.label),price:T(o.price)}))),n}class v{#t=_(D);#n=_(R);#e(){const e=this.#n.wpApiUrl;return e?e.replace(/\/$/,""):""}getCourseGroups(){return this.#n.wpApiUrl?.trim()?this.#t.get(`${this.#e()}/wp-json/autoskola/v1/courses`).pipe(U(e=>({groups:e.map(I),fromMock:!1})),$(()=>y({groups:j.map(I),fromMock:!0}))):y({groups:j,fromMock:!0})}static ɵfac=function(n){return new(n||v)};static ɵprov=w({token:v,factory:v.ɵfac,providedIn:"root"})}class P{#t=_(v);#n=b([{id:"a1",image:u("/images/sites/courses/skupina-a.png"),imagePosition:"left",backgroundGray:!1,enabled:!0,order:1},{id:"a2",image:u("/images/sites/courses/skupina-a.png"),imagePosition:"right",backgroundGray:!1,enabled:!0,order:2},{id:"a",image:u("/images/sites/courses/skupina-a.png"),imagePosition:"left",backgroundGray:!1,enabled:!0,order:3},{id:"b",image:u("/images/sites/courses/skupina-b.png"),imagePosition:"right",backgroundGray:!0,enabled:!0,order:4},{id:"c",image:u("/images/sites/courses/skupina-c.png"),imagePosition:"left",backgroundGray:!0,enabled:!0,order:5},{id:"d",image:u("/images/sites/courses/skupina-d.png"),imagePosition:"right",backgroundGray:!0,enabled:!0,order:6},{id:"t",image:u("/images/sites/courses/skupina-t.png"),imagePosition:"left",backgroundGray:!1,enabled:!0,order:7},{id:"be",image:u("/images/sites/courses/skupina-b.png"),imagePosition:"right",backgroundGray:!0,enabled:!0,order:8},{id:"ce",image:u("/images/sites/courses/skupina-c.png"),imagePosition:"left",backgroundGray:!0,enabled:!0,order:9}]);#e=b(!1);#o=b(0);#r=b(!1);apiCalled=this.#e.asReadonly();apiGroupCount=this.#o.asReadonly();fromMock=this.#r.asReadonly();constructor(){this.#t.getCourseGroups().pipe(F(1)).subscribe(e=>{this.#e.set(!0),this.#o.set(e.groups.length),this.#r.set(e.fromMock),this.#n.set(e.groups)})}courseGroups=E(()=>this.#n().filter(e=>e.enabled).sort((e,n)=>e.order-n.order));getCourseGroup(e){return this.#n().find(n=>n.id===e)}isCourseGroupEnabled(e){return this.getCourseGroup(e)?.enabled??!1}setCourseGroups(e){this.#n.set(e)}updateCourseGroup(e,n){const o=this.#n(),h=o.findIndex(f=>f.id===e);if(h!==-1){const f=[...o];f[h]={...f[h],...n},this.#n.set(f)}}setCourseGroupEnabled(e,n){this.updateCourseGroup(e,{enabled:n})}reorderCourseGroups(e){const n=this.#n(),o=e.map((C,K)=>{const G=n.find(V=>V.id===C);return G?{...G,order:K+1}:null}).filter(C=>C!==null),h=new Set(e),f=n.filter(C=>!h.has(C.id)).map(C=>({...C,order:o.length+1}));this.#n.set([...o,...f])}static ɵfac=function(n){return new(n||P)};static ɵprov=w({token:P,factory:P.ɵfac,providedIn:"root"})}function an(t){return{id:t.id,order:t.order,enabled:t.enabled,title:t.title,description:t.description??"",price:t.price,buttonCourse:t.buttonCourse??""}}const L=A.services.map(an);class M{#t=_(D);#n=_(R);#e(){const e=this.#n.wpApiUrl;return e?e.replace(/\/$/,""):""}getServices(){return this.#n.wpApiUrl?.trim()?this.#t.get(`${this.#e()}/wp-json/autoskola/v1/services`).pipe(U(e=>({services:e,fromMock:!1})),$(()=>y({services:L,fromMock:!0}))):y({services:L,fromMock:!0})}static ɵfac=function(n){return new(n||M)};static ɵprov=w({token:M,factory:M.ɵfac,providedIn:"root"})}class O{#t=_(M);#n=b([]);#e=b(!1);#o=b(!1);apiCalled=this.#e.asReadonly();fromMock=this.#o.asReadonly();constructor(){this.#t.getServices().pipe(F(1)).subscribe(e=>{this.#e.set(!0),this.#o.set(e.fromMock),this.#n.set(e.services)})}services=E(()=>this.#n().filter(e=>e.enabled).sort((e,n)=>e.order-n.order));getService(e){return this.#n().find(n=>n.id===e)}setServices(e){this.#n.set(e)}static ɵfac=function(n){return new(n||O)};static ɵprov=w({token:O,factory:O.ɵfac,providedIn:"root"})}const pn="Ako prebieha prihlásenie do kurzu?",gn="Dajte nám o sebe vedieť",ln="Zavolajte alebo napíšte – radi vám vysvetlíme detaily, overíme najbližší možný termín a rezervujeme vám miesto v kurze.",un="Navštívte svojho lekára",dn="Stiahnite si tlačivo, vytlačte si ho obojstranne na jeden list A4 a nechajte si ho potvrdiť vaším praktickým lekárom.",mn="Stiahnuť tlačivo (PDF)",_n="Dostavte sa do autoškoly",fn="S potvrdeným tlačivom, občianskym preukazom a so zálohou (1/2 ceny kurzu) za kurz sa dostavte osobne na registráciu do autoškoly. Dohodneme si úvodné detaily – začiatok kurzu, teóriu, jazdy aj trenažér.",Cn="Elektronické skúšobné testy",bn="Vyskúšajte si, ako vyzerá reálny test. Naše elektronické skúšobné testy vám umožnia otestovať si znalosti a pripraviť sa na záverečnú skúšku bez stresu. Vyskúšajte si otázky online z pohodlia domova.",hn="SPUSTIŤ TEST",vn="MINISTERSTVO",Pn="VNÚTRA",Mn="SLOVENSKEJ REPUBLIKY",On="Pripravte sa na skúšku – vyskúšajte si elektronické skúšobné testy.",kn="Skúšobné testy",xn={registrationTitle:pn,registrationStep1Title:gn,registrationStep1Desc:ln,registrationStep2Title:un,registrationStep2Desc:dn,registrationStep2Link:mn,registrationStep3Title:_n,registrationStep3Desc:fn,practiceTestsTitle:Cn,practiceTestsDesc:bn,practiceTestsButton:hn,practiceTestsMinisterstvo:vn,practiceTestsVnutra:Pn,practiceTestsSlovenskejRepubliky:Mn,practiceTestsCtaText:On,practiceTestsCtaLink:kn},yn="How does course registration work?",wn="Let us know about you",Tn="Call or write – we will gladly explain the details, verify the nearest possible date, and reserve your spot in the course.",Sn="Visit your doctor",zn="Download the form, print it double-sided on one A4 sheet, and have it confirmed by your general practitioner.",Gn="Download form (PDF)",jn="Come to the driving school",In="With the confirmed form, ID card, and a deposit (1/2 of the course price) for the course, come in person to register at the driving school. We will arrange the initial details – start of the course, theory, lessons, and simulator.",Ln="Electronic practice tests",Dn="Try out what a real test looks like. Our electronic practice tests let you test your knowledge and prepare for the final exam without stress. Try the questions online from the comfort of your home.",Un="START TEST",$n="MINISTRY",Fn="OF INTERIOR",En="OF THE SLOVAK REPUBLIC",Rn="Prepare for the exam – try our electronic practice tests.",An="Practice tests",Bn={registrationTitle:yn,registrationStep1Title:wn,registrationStep1Desc:Tn,registrationStep2Title:Sn,registrationStep2Desc:zn,registrationStep2Link:Gn,registrationStep3Title:jn,registrationStep3Desc:In,practiceTestsTitle:Ln,practiceTestsDesc:Dn,practiceTestsButton:Un,practiceTestsMinisterstvo:$n,practiceTestsVnutra:Fn,practiceTestsSlovenskejRepubliky:En,practiceTestsCtaText:Rn,practiceTestsCtaLink:An},B=(t,e)=>e.id,Kn=(t,e)=>e.label+e.price;function Vn(t,e){t&1&&(i(0,"strong"),c(1,"Zdroj kurzov:"),s(),c(2," Načítavam… "))}function Nn(t,e){if(t&1&&(i(0,"strong"),c(1,"Zdroj kurzov:"),s(),c(2),i(3,"code"),c(4,"wpApiUrl"),s(),c(5,". ")),t&2){const n=a(2);r(2),k(" Lokálny mock (",n.coursesService.apiGroupCount()," skupín) – WordPress API nebolo dostupné alebo nie je nastavené ")}}function Wn(t,e){t&1&&(i(0,"strong"),c(1,"Zdroj kurzov:"),s(),c(2," API bolo volané, ale vrátilo 0 záznamov. Skontrolujte v prehliadači F12 → Network, či request na "),i(3,"code"),c(4,"/wp-json/autoskola/v1/courses"),s(),c(5," prebehol a či máte v WordPresse publikované kurzy s vyplnenými textami. "))}function Hn(t,e){if(t&1&&(i(0,"strong"),c(1,"Zdroj kurzov:"),s(),c(2)),t&2){const n=a(2);r(2),k(" Dáta z WordPressu (",n.coursesService.apiGroupCount()," skupín). Texty zobrazované nižšie sú z CMS. ")}}function Zn(t,e){if(t&1&&(i(0,"div",1),g(1,Vn,3,0)(2,Nn,6,1)(3,Wn,6,0)(4,Hn,3,1),s()),t&2){const n=a();r(),l(n.coursesService.apiCalled()?n.coursesService.fromMock()?2:n.coursesService.apiGroupCount()===0?3:4:1)}}function qn(t,e){if(t&1&&(i(0,"div",16),m(1,"app-image",28),s()),t&2){const n=a().$implicit,o=a();r(),d("source",n)("alt",o.getGroupLabel(n,"title"))}}function Yn(t,e){if(t&1&&(m(0,"br"),c(1)),t&2){const n=a().$implicit,o=a();r(),k("",o.getGroupLabel(n,"practiceMaintenance")," ")}}function Jn(t,e){if(t&1&&(i(0,"span",29),c(1),s()),t&2){const n=e.$implicit;r(),en("",n.label,": ",n.price)}}function Xn(t,e){if(t&1&&S(0,Jn,2,2,"span",29,Kn),t&2){const n=a().$implicit;z(n.priceUpgrades)}}function Qn(t,e){if(t&1&&(i(0,"div",16),m(1,"app-image",28),s()),t&2){const n=a().$implicit,o=a();r(),d("source",n)("alt",o.getGroupLabel(n,"title"))}}function ne(t,e){if(t&1&&(i(0,"div",14)(1,"div",15),g(2,qn,2,2,"div",16),i(3,"div",17)(4,"h2",18)(5,"span",19),c(6,"Skupina "),i(7,"span",20),c(8),J(9,"uppercase"),s()()(),i(10,"p",21),c(11),s(),i(12,"ul",22)(13,"li"),c(14),s(),i(15,"li"),c(16),s(),i(17,"li"),c(18),g(19,Yn,2,1),s()(),i(20,"div",23),c(21),g(22,Xn,2,0),s(),i(23,"div",24)(24,"p"),c(25),s(),i(26,"p"),c(27),s()(),i(28,"div",25),m(29,"app-button",26)(30,"app-button",27),s()(),g(31,Qn,2,2,"div",16),s()()),t&2){const n=e.$implicit,o=a();X("gray-background",n.backgroundGray)("image-left",n.imagePosition==="left")("image-right",n.imagePosition==="right"),r(2),l(n.imagePosition==="left"?2:-1),r(6),p(Q(9,23,n.id)),r(3),p(o.getGroupLabel(n,"subtitle")),r(3),p(o.getGroupLabel(n,"ageRequirement")),r(2),p(o.getGroupLabel(n,"theoryHours")),r(2),k(" ",o.getGroupLabel(n,"practiceHours")," "),r(),l(o.getGroupLabel(n,"practiceMaintenance")?19:-1),r(2),k(" ",o.getGroupLabel(n,"price")," "),r(),l(n.priceUpgrades!=null&&n.priceUpgrades.length?22:-1),r(3),p(o.getGroupLabel(n,"firstAidFee")),r(2),p(o.getGroupLabel(n,"examFee")),r(2),d("text",o.getGroupLabel(n,"buttonCourse"))("rounded",!1),r(),d("text",o.getGroupLabel(n,"buttonConditioning"))("inverted",!0)("rounded",!1),r(),l(n.imagePosition==="right"?31:-1)}}function ee(t,e){if(t&1&&(i(0,"p",37),c(1),s()),t&2){const n=a().$implicit,o=a(2);r(),p(o.getServiceLabel(n,"description"))}}function te(t,e){if(t&1&&m(0,"app-button",26),t&2){const n=a().$implicit,o=a(2);d("text",o.getServiceLabel(n,"buttonCourse"))("rounded",!1)}}function oe(t,e){if(t&1&&(i(0,"article",32)(1,"div",33),m(2,"app-icon",34),s(),i(3,"div",35)(4,"h3",36),c(5),s(),g(6,ee,2,1,"p",37),i(7,"div",38)(8,"span",39),c(9),s(),g(10,te,1,2,"app-button",26),s()()()),t&2){const n=e.$implicit,o=a(2);r(2),d("icon",o.getServiceIcon(n)),r(3),p(o.getServiceLabel(n,"title")),r(),l(o.getServiceLabel(n,"description")?6:-1),r(3),p(o.getServiceLabel(n,"price")),r(),l(o.getServiceLabel(n,"buttonCourse")?10:-1)}}function re(t,e){if(t&1&&(i(0,"div",3)(1,"h2",30),c(2,"Cenník služieb"),s(),i(3,"div",31),S(4,oe,11,5,"article",32,B),s()()),t&2){const n=a();r(4),z(n.services())}}function ie(t,e){if(t&1&&(i(0,"a",12),m(1,"app-button",40),s()),t&2){const n=a();d("href",n.practiceTestUrl,nn),r(),d("text",n.practiceTestsButtonText())("rounded",!0)}}function se(t,e){if(t&1&&m(0,"app-button",13),t&2){const n=a();d("text",n.practiceTestsButtonText())("rounded",!0)("disabled",!0)}}const ce={"kkv-35":"certificate","kkv-140":"certificate","kombinovany-c-d":"certificate","doskolovaci-kurz":"calendar","neucast-skuska":"calendar","opakovana-skuska":"calendar",individualne:"user",kondicne:"car"};class x extends tn{coursesService=_(P);servicesService=_(O);isDev=N();t=this.registerTranslations({sk:xn,en:Bn});courseGroups=this.coursesService.courseGroups;services=this.servicesService.services;registrationSteps=[{icon:"phone",titleKey:"registrationStep1Title",descKey:"registrationStep1Desc"},{icon:"certificate",titleKey:"registrationStep2Title",descKey:"registrationStep2Desc",linkKey:"registrationStep2Link",linkUrl:""},{icon:"location-pin",titleKey:"registrationStep3Title",descKey:"registrationStep3Desc"}];registrationStepIconColor="var(--reg-step-icon-color, var(--an-blue, #264C96))";practiceTestUrl="https://www.minv.sk/?elektronicke-testy";getGroupLabel(e,n){const o=e[n];return o!=null&&o!==""?o:""}getServiceLabel(e,n){if(n==="enabled"||n==="order"||n==="id")return"";const o=e[n];return o!=null&&o!==""?String(o):""}getServiceIcon(e){return ce[e.id]??"certificate"}practiceTestsButtonText(){return String(this.t("practiceTestsButton")??"")}static ɵfac=(()=>{let e;return function(o){return(e||(e=W(x)))(o||x)}})();static ɵcmp=H({type:x,selectors:[["app-courses"]],features:[Y],decls:18,vars:5,consts:[[1,"courses-section"],[1,"courses-api-info",2,"margin-bottom","1rem","padding","0.75rem 1rem","background","#f0f4f8","border-radius","6px","font-size","0.875rem"],[1,"course-group",3,"gray-background","image-left","image-right"],[1,"services-section"],[1,"practice-tests-section"],[1,"practice-tests-title"],[1,"practice-tests-box"],[1,"practice-tests-brand"],["aria-hidden","true",1,"practice-tests-logo"],["src","/images/mvsr.png","alt","Logo Ministerstva vnútra Slovenskej republiky"],[1,"practice-tests-content"],[1,"practice-tests-desc"],["target","_blank","rel","noopener noreferrer",1,"practice-tests-link",3,"href"],["backgroundColor","black",3,"text","rounded","disabled"],[1,"course-group"],[1,"course-content"],[1,"course-image-wrapper"],[1,"course-details"],[1,"course-title"],[1,"course-title-text"],[1,"course-title-text-id"],[1,"course-subtitle"],[1,"course-features"],[1,"course-price"],[1,"course-additional-fees"],[1,"course-buttons"],["backgroundColor","#dc2626",3,"text","rounded"],["backgroundColor","#dc2626",3,"text","inverted","rounded"],[3,"source","alt"],[1,"course-price-upgrade"],[1,"services-title"],[1,"services-grid"],[1,"service-card"],[1,"service-card-icon"],["color","var(--an-blue, #0066cc)","size","2.5rem",3,"icon"],[1,"service-card-body"],[1,"service-card-title"],[1,"service-card-description"],[1,"service-card-footer"],[1,"service-card-price"],["backgroundColor","black",3,"text","rounded"]],template:function(n,o){n&1&&(i(0,"app-site-wrapper")(1,"section",0),g(2,Zn,5,1,"div",1),S(3,ne,32,25,"div",2,B),g(5,re,6,0,"div",3),i(6,"section",4)(7,"h2",5),c(8),s(),i(9,"div",6)(10,"div",7)(11,"div",8),m(12,"img",9),s()(),i(13,"div",10)(14,"p",11),c(15),s(),g(16,ie,2,3,"a",12)(17,se,1,3,"app-button",13),s()()()()()),n&2&&(r(2),l(o.isDev?2:-1),r(),z(o.courseGroups()),r(2),l(o.services().length>0?5:-1),r(3),p(o.t("practiceTestsTitle")),r(7),p(o.t("practiceTestsDesc")),r(),l(o.practiceTestUrl?16:17))},dependencies:[Z,on,rn,sn,cn,q],styles:[`@charset "UTF-8";




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
  .practice-tests-logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
    max-width: 100%;
    width: auto;
    height: auto;
  }
  .practice-tests-content[_ngcontent-%COMP%] {
    min-width: 0;
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
  .course-group[_ngcontent-%COMP%]   .course-details[_ngcontent-%COMP%] {
    min-width: 0;
  }
  .course-group[_ngcontent-%COMP%]   .course-title[_ngcontent-%COMP%], 
   .course-group[_ngcontent-%COMP%]   .course-subtitle[_ngcontent-%COMP%], 
   .course-group[_ngcontent-%COMP%]   .course-price[_ngcontent-%COMP%], 
   .course-group[_ngcontent-%COMP%]   .course-additional-fees[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
    overflow-wrap: break-word;
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
  .services-section[_ngcontent-%COMP%]   .service-card-body[_ngcontent-%COMP%], 
   .services-section[_ngcontent-%COMP%]   .service-card-title[_ngcontent-%COMP%], 
   .services-section[_ngcontent-%COMP%]   .service-card-description[_ngcontent-%COMP%] {
    min-width: 0;
    overflow-wrap: break-word;
  }
}`],changeDetection:0})}export{x as CoursesComponent};
