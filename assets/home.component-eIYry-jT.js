import{D as Q,i as P,s as _,R as V,c as u,a as b,T as tn,ɵ as en,v as on,b as an,d as H,C as N,N as rn,e as sn,f as cn,g as a,h as S,j as r,k as M,l as i,m as g,n as O,o as ln,p as W,q as gn,r as d,t as pn,u as dn,w as mn,x as U,y as k,z as s,A as Z,B as F,E as un,F as j,G as A,H as l,I as hn,J as f,K as T,L as v,M as x,O as c,P as _n,Q as Y,S as fn,U as Cn,V as R,W as J,X as vn,Y as X,Z as Pn,_ as Mn,$ as On,a0 as bn,a1 as kn,a2 as wn,a3 as yn,a4 as Tn,a5 as xn,a6 as w,a7 as G}from"./index-DWcdAism.js";import{B as zn,S as $n,a as Sn}from"./site-wrapper.component-CGsK4-gJ.js";import{I as nn}from"./icon.component-BbBf8Dla.js";import{a as qn,C as jn,i as h}from"./image-path.util-d8HZKuku.js";import{T as An,a as Bn}from"./textarea.component-Rb-Rn6Ej.js";function Dn(o,n){const e=!n?.manualCleanup?n?.injector?.get(Q)??P(Q):null,p=Fn(n?.equal);let m;n?.requireSync?m=_({kind:0},{equal:p}):m=_({kind:1,value:n?.initialValue},{equal:p});let E;const L=o.subscribe({next:C=>m.set({kind:1,value:C}),error:C=>{m.set({kind:2,error:C}),E?.()},complete:()=>{E?.()}});if(n?.requireSync&&m().kind===0)throw new V(601,!1);return E=e?.onDestroy(L.unsubscribe.bind(L)),u(()=>{const C=m();switch(C.kind){case 1:return C.value;case 2:throw C.error;case 0:throw new V(601,!1)}},{equal:n?.equal})}function Fn(o=Object.is){return(n,t)=>n.kind===1&&t.kind===1&&o(n.value,t.value)}const En="Úvod",In="Začni jazdiť s autoškolou, na ktorú sa môžeš spoľahnúť",Hn="Naša autoškola pôsobí od roku <strong>1990</strong> a vodičské preukazy u nás získalo už viac ako <strong>12 000</strong> ľudí. Staň sa aj ty jedným z nich.",Nn="Chcem začať",Un="Profesionálni a trpezliví personál",Ln="Naši <strong>skúsení inštruktori</strong> sa venujú každému žiakovi individuálne. Získaj vodičský preukaz s najlepšou prípravou.",Qn="Zistiť viac",Vn="Ponúkame vodičské oprávnenia pre všetky skupiny",Wn="Naša autoškola ponúka vodičské preukazy pre všetky skupiny. Získaj vodičský preukaz s najlepšou prípravou.",Rn="Kontaktovať nás",Gn="Posledné voľné miesta v kurze za akciovú cenu",Kn="Ponúkame <strong>posledné voľné miesta</strong> v kurze za výhodnú akciovú cenu. Neváhajte a prihláste sa ešte dnes.",Zn="Prihlásiť sa",Yn="Najbližšie kurzy",Jn="B kategória: 21.10.2025",Xn="Pozrieť viac termínov",nt="Prihláška",tt="Prihlašku si vytlačte obojstranne. Je potrebné ju potvrdiť všeobecným lekárom pred začatím kurzu.",et="Pôsobime viac ako 25 rokov",ot="Naša autoškola pôsobí od roku 1990",it="vodičské preukazy u nás získalo už viac ako 12 000 ľudí",at="Kompletne vybavené priestory",rt="Postarali sme sa aby ste sa u nás cítili pohodlne a preto sme zriadili kompletne vybavené klimatizované priestory",st="Vodičské kurzy",ct="Ako jedna z mála autoškôl v Bratislave ponúkame vodičské preukazy pre všetky kategórie.",lt="Skupiny <strong>A</strong>",gt="Skupiny <strong>B</strong>",pt="Skupiny <strong>C</strong>",dt="Skupiny <strong>D</strong>",mt="Skupiny <strong>T</strong>",ut="Skupiny <strong>E</strong>",ht="pozrieť cenník",_t="Výcvik vodičov a kondičné jazdy",ft="Mám záujem",Ct="Čo o nás hovoria naši klienti",vt="Absolvoval som výcvik skupiny A a som veľmi spokojný. Inštruktor bol trpezlivý a profesionálny, vždy som sa cítil bezpečne. Odporúčam každému, kto chce kvalitnú prípravu na vodičský preukaz.",Pt="Benedikt - Výcvik skupiny A",Mt="Perfektná autoškola s výbornými inštruktormi. Výučba bola jasná a zrozumiteľná, a hlavne som sa naučil všetko, čo som potreboval. Vodičský preukaz som získal na prvý pokus.",Ot="Martina - Výcvik skupiny B",bt="Kondičné jazdy som absolvoval po dlhšej prestávke a bolo to presne to, čo som potreboval. Inštruktor mi pomohol získať späť sebavedomie za volantom. Veľmi ďakujem za profesionálny prístup.",kt="Peter - Kondičné jazdy",wt="Výcvik skupiny C bol náročný, ale inštruktori mi pomohli zvládnuť všetko. Moderné vozidlá a skvelá príprava ma pripravili na skúšku. Určite odporúčam túto autoškolou.",yt="Ján - Výcvik skupiny C",Tt="Prečo práve my",xt="Moderné vozidlá",zt="Naša autoškola disponuje moderným vozovým parkom, ktorý pravidelne obnovujeme. Všetky naše vozidlá sú vybavené najnovšími bezpečnostnými systémami a technológiami, ktoré zabezpečujú maximálnu bezpečnosť počas výcviku. Cvičíme na vozidlách rôznych kategórií, aby sme zabezpečili komplexnú prípravu našich žiakov.",$t="Skúsení inštruktori",St="Náš tím tvoria skúsení a certifikovaní inštruktori, ktorí majú roky praxe v oblasti výcviku vodičov. Každý inštruktor sa venuje žiakom individuálne a prispôsobuje výučbu ich potrebám a tempu. Naši inštruktori sú známi svojou trpezlivosťou, profesionalitou a schopnosťou vytvoriť priateľskú a podporujúcu atmosféru počas výcviku.",qt="Bohaté skúsenosti",jt="S viac ako 30 rokmi pôsobenia na trhu sme získali neoceniteľné skúsenosti v oblasti výcviku vodičov. Za túto dobu sme pripravili tisíce úspešných vodičov, ktorí sa s dôverou pohybujú v premávke. Naša bohatá história a dlhodobé pôsobenie sú zárukou kvality a spoľahlivosti našich služieb.",At="Potrebujete pomôcť?",Bt="Zodpovieme vám najčastejšie otázky",Dt="Ako dlho trvá výcvik na vodičský preukaz skupiny B?",Ft="Výcvik na vodičský preukaz skupiny B trvá približne 2-3 mesiace, v závislosti od vašej dostupnosti a tempa učenia. Teoretická časť zahŕňa 28 hodín teórie, ktoré sa konajú pravidelne počas týždňa. Praktická časť pozostáva z 28 hodín jazdného výcviku, ktoré si môžete rozvrhnúť podľa vašich možností. Po absolvovaní teórie a praxe nasleduje skúška na dopravnom inšpektoráte.",Et="Koľko stojí výcvik na vodičský preukaz?",It="Cena výcviku sa líši podľa kategórie vodičského preukazu. Pre presné ceny a aktuálne akcie nás prosím kontaktujte telefonicky alebo e-mailom. Ponúkame aj možnosť splátkového platenia výcviku.",Ht="Aké dokumenty sú potrebné na prihlásenie do kurzu?",Nt="Na prihlásenie do kurzu potrebujete vyplnenú prihlášku, ktorú si môžete stiahnuť z našej stránky, občiansky preukaz, lekárske potvrdenie o zdravotnej spôsobilosti a fotografiu. Lekárske potvrdenie musí byť potvrdené všeobecným lekárom pred začatím kurzu.",Ut="Kedy sa konajú teoretické hodiny?",Lt="Teoretické hodiny sa konajú pravidelne počas týždňa, väčšinou večer, aby sa prispôsobili pracovnému rozvrhu našich žiakov. Presné termíny a rozvrh hodín vám poskytneme po prihlásení do kurzu. Teoretická výučba prebieha v našich klimatizovaných priestoroch.",Qt="Ako sa prihlásiť na skúšku na dopravnom inšpektoráte?",Vt="Po absolvovaní teoretickej a praktickej časti výcviku vás prihlásime na skúšku na dopravný inšpektorát. Všetky potrebné dokumenty a formalities za vás vybavíme. Skúška pozostáva z teoretickej časti (test) a praktickej časti (jazda). Naši inštruktori vás na obe časti dôkladne pripravia.",Wt="Stiahnite si prihlášku",Rt="Prihlášku si môžete stiahnuť vo formáte PDF a vytlačiť obojstranne. Pred začatím kurzu je potrebné, aby ste prihlášku potvrdili u vášho všeobecného lekára. Po vyplnení a potvrdení prihlášky nás kontaktujte a dohodneme termín začiatku kurzu.",Gt="Stiahnuť ako pdf",Kt="Alebo nás kontaktujte",Zt="Kontaktný formulár",Yt="Váš e-mail",Jt="Zadajte váš e-mail",Xt="Vaša správa",ne="Sem zadajte znenie vašej správy",te="Odoslať formulár",ee="Nájdete nás",oe="Račianska 69/A, 831 02, Bratislava",ie="Otváracie hodiny:",ae="Pondelok-Štvrtok: 09:00 - 17:00",re="Piatok: 09:00 - 16:00",se="Napíšte nám na",ce="info@autoskola-antonova.sk",le="Alebo zavolajte na",ge="02 44 45 97 02",pe="0903 790 865",de="Sledujte nás na:",me={title:En,heroTitle:In,heroSubtitle:Hn,heroButton:Nn,heroTitle2:Un,heroSubtitle2:Ln,heroButton2:Qn,heroTitle3:Vn,heroSubtitle3:Wn,heroButton3:Rn,heroTitle4:Gn,heroSubtitle4:Kn,heroButton4:Zn,upcomingCourses:Yn,bCategoryDate:Jn,viewMoreDates:Xn,application:nt,applicationDescription:tt,experience:et,experienceDescription:ot,graduatesCount:it,facilities:at,facilitiesDescription:rt,categories:st,categoriesDescription:ct,groupA:lt,groupB:gt,groupC:pt,groupD:dt,groupT:mt,groupE:ut,viewPricing:ht,driverTrainingTitle:_t,interested:ft,testimonialsTitle:Ct,testimonial1:vt,testimonial1Author:Pt,testimonial2:Mt,testimonial2Author:Ot,testimonial3:bt,testimonial3Author:kt,testimonial4:wt,testimonial4Author:yt,aboutTitle:Tt,aboutCarsTitle:xt,aboutCarsDescription:zt,aboutTutorsTitle:$t,aboutTutorsDescription:St,aboutExperiencesTitle:qt,aboutExperiencesDescription:jt,helpTitle:At,faqTitle:Bt,faqQuestion1:Dt,faqAnswer1:Ft,faqQuestion2:Et,faqAnswer2:It,faqQuestion3:Ht,faqAnswer3:Nt,faqQuestion4:Ut,faqAnswer4:Lt,faqQuestion5:Qt,faqAnswer5:Vt,downloadTitle:Wt,downloadDescription:Rt,downloadButton:Gt,contactTitle:Kt,contactFormTitle:Zt,contactEmailLabel:Yt,contactEmailPlaceholder:Jt,contactMessageLabel:Xt,contactMessagePlaceholder:ne,contactSubmitButton:te,findUsTitle:ee,address:oe,openingHours:ie,openingHoursWeekdays:ae,openingHoursFriday:re,writeToUs:se,email:ce,orCallUs:le,phone1:ge,phone2:pe,followUs:de},ue="Home",he="Start driving with a driving school you can rely on",_e="Our driving school has been operating since <strong>1990</strong>, and over <strong>12,000</strong> people have obtained driving licenses with us. Become one of them too.",fe="I want to start",Ce="Professional and patient staff",ve="Our <strong>experienced instructors</strong> provide individual attention to each student. Get your driver's license with the best preparation.",Pe="Learn more",Me="We offer driver's licenses for all groups",Oe="Our driving school offers driver's licenses for all groups. Get your license with the best preparation.",be="Contact us",ke="Last free places in the course at promotional price",we="We offer <strong>last free places</strong> in the course at a special promotional price. Don't hesitate and sign up today.",ye="Sign up",Te="Upcoming courses",xe="Category B: 21.10.2025",ze="View more dates",$e="Application",Se="Print the application double-sided. It needs to be confirmed by a general practitioner before starting the course.",qe="Operating for more than 25 years",je="Our driving school has been operating since 1990",Ae="more than 12,000 people have obtained their driver's licenses with us",Be="Fully equipped facilities",De="We have taken care to make you feel comfortable with us and therefore we have set up fully equipped air-conditioned facilities",Fe="Driving courses",Ee="As one of the few driving schools in Bratislava, we offer driver's licenses for all categories.",Ie="Group <strong>A</strong>",He="Group <strong>B</strong>",Ne="Group <strong>C</strong>",Ue="Group <strong>D</strong>",Le="Group <strong>T</strong>",Qe="Group <strong>E</strong>",Ve="view pricing",We="Driver training and refresher courses",Re="I am interested",Ge="What our clients say about us",Ke="I completed category A training and I am very satisfied. The instructor was patient and professional, I always felt safe. I recommend it to anyone who wants quality preparation for a driver's license.",Ze="Benedikt - Category A training",Ye="Perfect driving school with excellent instructors. The teaching was clear and understandable, and most importantly, I learned everything I needed. I got my driver's license on the first try.",Je="Martina - Category B training",Xe="I took refresher courses after a longer break and it was exactly what I needed. The instructor helped me regain confidence behind the wheel. Thank you very much for the professional approach.",no="Peter - Refresher courses",to="Category C training was demanding, but the instructors helped me handle everything. Modern vehicles and great preparation prepared me for the exam. I definitely recommend this driving school.",eo="Ján - Category C training",oo="Why us",io="Modern vehicles",ao="Our driving school has a modern fleet of vehicles that we regularly update. All our vehicles are equipped with the latest safety systems and technologies that ensure maximum safety during training. We train on vehicles of various categories to ensure comprehensive preparation of our students.",ro="Experienced instructors",so="Our team consists of experienced and certified instructors who have years of practice in driver training. Each instructor provides individual attention to students and adapts the teaching to their needs and pace. Our instructors are known for their patience, professionalism, and ability to create a friendly and supportive atmosphere during training.",co="Rich experience",lo="With more than 30 years of operation in the market, we have gained invaluable experience in driver training. During this time, we have prepared thousands of successful drivers who confidently navigate traffic. Our rich history and long-term operation are a guarantee of quality and reliability of our services.",go="Do you need help?",po="We will answer your most frequent questions",mo="How long does the training for category B driver's license take?",uo="Training for a category B driver's license takes approximately 2-3 months, depending on your availability and learning pace. The theoretical part includes 28 hours of theory, which are held regularly during the week. The practical part consists of 28 hours of driving training, which you can schedule according to your possibilities. After completing theory and practice, an exam at the traffic inspectorate follows.",ho="How much does the driver's license training cost?",_o="The price of training varies depending on the category of driver's license. For exact prices and current offers, please contact us by phone or email. We also offer the possibility of installment payment for training.",fo="What documents are needed to enroll in the course?",Co="To enroll in the course, you need a completed application form, which you can download from our website, an ID card, a medical certificate of fitness, and a photo. The medical certificate must be confirmed by a general practitioner before starting the course.",vo="When are the theoretical classes held?",Po="Theoretical classes are held regularly during the week, usually in the evening, to accommodate the work schedule of our students. Exact dates and class schedules will be provided to you after enrolling in the course. Theoretical instruction takes place in our air-conditioned facilities.",Mo="How to register for the exam at the traffic inspectorate?",Oo="After completing the theoretical and practical parts of the training, we will register you for the exam at the traffic inspectorate. We will handle all necessary documents and formalities for you. The exam consists of a theoretical part (test) and a practical part (driving). Our instructors will thoroughly prepare you for both parts.",bo="Download the application",ko="You can download the application form in PDF format and print it double-sided. Before starting the course, you need to have the application confirmed by your general practitioner. After filling out and confirming the application, contact us and we will arrange the course start date.",wo="Download as pdf",yo="Or contact us",To="Contact form",xo="Your e-mail",zo="Enter your e-mail",$o="Your message",So="Enter the content of your message here",qo="Send form",jo="Find us",Ao="Račianska 69/A, 831 02, Bratislava",Bo="Opening hours:",Do="Monday-Thursday: 09:00 - 17:00",Fo="Friday: 09:00 - 16:00",Eo="Write to us at",Io="info@autoskola-antonova.sk",Ho="Or call us at",No="02 44 45 97 02",Uo="0903 790 865",Lo="Follow us on:",Qo={title:ue,heroTitle:he,heroSubtitle:_e,heroButton:fe,heroTitle2:Ce,heroSubtitle2:ve,heroButton2:Pe,heroTitle3:Me,heroSubtitle3:Oe,heroButton3:be,heroTitle4:ke,heroSubtitle4:we,heroButton4:ye,upcomingCourses:Te,bCategoryDate:xe,viewMoreDates:ze,application:$e,applicationDescription:Se,experience:qe,experienceDescription:je,graduatesCount:Ae,facilities:Be,facilitiesDescription:De,categories:Fe,categoriesDescription:Ee,groupA:Ie,groupB:He,groupC:Ne,groupD:Ue,groupT:Le,groupE:Qe,viewPricing:Ve,driverTrainingTitle:We,interested:Re,testimonialsTitle:Ge,testimonial1:Ke,testimonial1Author:Ze,testimonial2:Ye,testimonial2Author:Je,testimonial3:Xe,testimonial3Author:no,testimonial4:to,testimonial4Author:eo,aboutTitle:oo,aboutCarsTitle:io,aboutCarsDescription:ao,aboutTutorsTitle:ro,aboutTutorsDescription:so,aboutExperiencesTitle:co,aboutExperiencesDescription:lo,helpTitle:go,faqTitle:po,faqQuestion1:mo,faqAnswer1:uo,faqQuestion2:ho,faqAnswer2:_o,faqQuestion3:fo,faqAnswer3:Co,faqQuestion4:vo,faqAnswer4:Po,faqQuestion5:Mo,faqAnswer5:Oo,downloadTitle:bo,downloadDescription:ko,downloadButton:wo,contactTitle:yo,contactFormTitle:To,contactEmailLabel:xo,contactEmailPlaceholder:zo,contactMessageLabel:$o,contactMessagePlaceholder:So,contactSubmitButton:qo,findUsTitle:jo,address:Ao,openingHours:Bo,openingHoursWeekdays:Do,openingHoursFriday:Fo,writeToUs:Eo,email:Io,orCallUs:Ho,phone1:No,phone2:Uo,followUs:Lo};class y{appSlideTemplate=b("unknown");template=P(tn);static ɵfac=function(t){return new(t||y)};static ɵdir=en({type:y,selectors:[["","appSlideTemplate",""]],inputs:{appSlideTemplate:[1,"appSlideTemplate"]}})}const Vo=["swiper"],Wo=()=>({});function Ro(o,n){o&1&&un(0)}function Go(o,n){if(o&1&&(pn(0),S(1,Ro,1,0,"ng-container",6),dn()),o&2){const t=n.ngIf,e=d().$implicit;i(),g("ngTemplateOutlet",t)("ngTemplateOutletContext",e.context||mn(2,Wo))}}function Ko(o,n){if(o&1&&(a(0,"swiper-slide"),S(1,Go,2,3,"ng-container",5),r()),o&2){const t=n.$implicit,e=d();i(),g("ngIf",e.getTemplate(t.template))}}function Zo(o,n){if(o&1){const t=U();a(0,"button",7),k("click",function(){j(t);const p=d();return A(p.prev())}),l(1,"app-icon",8),r(),a(2,"button",9),k("click",function(){j(t);const p=d();return A(p.next())}),l(3,"app-icon",10),r()}}function Yo(o,n){if(o&1){const t=U();a(0,"button",12),k("click",function(){const p=j(t).index,m=d(2);return A(m.goTo(p))}),a(1,"span",13),s(2),r()()}if(o&2){const t=n.index,e=d(2);Z("active",t===e.activeIndex()),i(2),F("Go to slide ",t+1)}}function Jo(o,n){if(o&1&&(a(0,"div",4),S(1,Yo,3,3,"button",11),r()),o&2){const t=d();i(),g("ngForOf",t.slides())}}class B{slides=b([]);showNavigation=b(!0);activeIndex=_(0);swiper=on("swiper");templates=an(y);#n=new Map;ngAfterContentInit(){this.#n.clear(),this.templates().forEach(t=>this.#n.set(t.appSlideTemplate(),t.template));const n=this.swiper().nativeElement;n.initialize(),n.swiper&&(n.swiper.params.effect="fade",n.swiper.params.fadeEffect={crossFade:!0},n.swiper.update()),n.swiper.on("slideChange",()=>{this.activeIndex.set(n.swiper.activeIndex)})}getTemplate(n){return this.#n.get(n)??null}prev(){this.swiper().nativeElement.swiper.slidePrev()}next(){this.swiper().nativeElement.swiper.slideNext()}goTo(n){this.swiper().nativeElement.swiper.slideTo(n)}static ɵfac=function(t){return new(t||B)};static ɵcmp=H({type:B,selectors:[["app-slider"]],contentQueries:function(t,e,p){t&1&&gn(p,e.templates,y,4),t&2&&W()},viewQuery:function(t,e){t&1&&ln(e.swiper,Vo,5),t&2&&W()},inputs:{slides:[1,"slides"],showNavigation:[1,"showNavigation"]},decls:6,vars:3,consts:[["swiper",""],[1,"main-slider"],["effect","fade"],[4,"ngFor","ngForOf"],[1,"pagination"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button",1,"nav","prev",3,"click"],["icon","previous","size","2.25rem","color","#275800"],["type","button",1,"nav","next",3,"click"],["icon","next","size","2.25rem","color","#275800"],["type","button",3,"active","click",4,"ngFor","ngForOf"],["type","button",3,"click"],[1,"sr-only"]],template:function(t,e){t&1&&(a(0,"div",1)(1,"swiper-container",2,0),S(3,Ko,2,1,"swiper-slide",3),r(),M(4,Zo,4,0),M(5,Jo,2,1,"div",4),r()),t&2&&(i(3),g("ngForOf",e.slides()),i(),O(e.showNavigation()?4:-1),i(),O(e.slides().length>1?5:-1))},dependencies:[N,rn,sn,cn,nn],styles:[`[_nghost-%COMP%] {
  display: block;
  width: 100%;
}
[_nghost-%COMP%]   .main-slider[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
  height: 100%;
}
[_nghost-%COMP%]   .main-slider[_ngcontent-%COMP%]   swiper-container[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  --swiper-pagination-bottom: 0;
}
[_nghost-%COMP%]   .main-slider[_ngcontent-%COMP%]   swiper-slide[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
}
[_nghost-%COMP%]   .main-slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  display: block;
}
[_nghost-%COMP%]   .main-slider[_ngcontent-%COMP%]   .nav[_ngcontent-%COMP%] {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  background: none;
  padding: 0;
  cursor: pointer;
  z-index: 10;
}
[_nghost-%COMP%]   .main-slider[_ngcontent-%COMP%]   .nav.prev[_ngcontent-%COMP%] {
  left: -1.125rem;
}
[_nghost-%COMP%]   .main-slider[_ngcontent-%COMP%]   .nav.next[_ngcontent-%COMP%] {
  right: -1.125rem;
}
[_nghost-%COMP%]   .main-slider[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%] {
  position: absolute;
  bottom: -1.25rem;
  left: 50%;
  transform: translateX(-50%);
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  z-index: 10;
}
[_nghost-%COMP%]   .main-slider[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: none;
  background-color: rgba(0, 0, 0, 0.1607843137);
  opacity: 0.5;
  cursor: pointer;
}
[_nghost-%COMP%]   .main-slider[_ngcontent-%COMP%]   .pagination[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {
  background-color: rgba(0, 0, 0, 0.5607843137);
  opacity: 1;
}`]})}const Xo=(o,n)=>n.id;function ni(o,n){if(o&1&&(f(0,"h2",1),s(1),v()),o&2){const t=d();i(),c(t.title())}}function ti(o,n){o&1&&(f(0,"span",8),s(1,"+"),v())}function ei(o,n){if(o&1&&(f(0,"div",9),s(1),v()),o&2){const t=d().$implicit,e=d();fn("id","accordion-content-"+t.id),Y("aria-hidden",!e.isOpen(t.id)),i(),F(" ",t.answer," ")}}function oi(o,n){if(o&1){const t=U();f(0,"div",4)(1,"button",5),_n("click",function(){const p=j(t).$implicit,m=d();return A(m.toggleItem(p.id))}),f(2,"span",6),s(3),v(),f(4,"span",7),M(5,ti,2,0,"span",8),v()(),M(6,ei,2,3,"div",9),v()}if(o&2){const t=n.$implicit,e=d();Z("open",e.isOpen(t.id)),i(),Y("aria-expanded",e.isOpen(t.id))("aria-controls","accordion-content-"+t.id),i(2),c(t.question),i(2),O(e.isOpen(t.id)?-1:5),i(),O(e.isOpen(t.id)?6:-1)}}class D{title=b(void 0);items=b.required();allowMultiple=b(!1);openItems=_(new Set);constructor(){hn(()=>{const n=this.items(),t=this.openItems();n.length>0&&t.size===0&&this.openItems.set(new Set([n[0].id]))})}toggleItem(n){const t=this.openItems(),e=new Set(t);e.has(n)?e.delete(n):(this.allowMultiple()||e.clear(),e.add(n)),this.openItems.set(e)}isOpen(n){return this.openItems().has(n)}static ɵfac=function(t){return new(t||D)};static ɵcmp=H({type:D,selectors:[["app-accordion"]],inputs:{title:[1,"title"],items:[1,"items"],allowMultiple:[1,"allowMultiple"]},decls:5,vars:1,consts:[[1,"accordion"],[1,"accordion-title"],[1,"accordion-items"],[1,"accordion-item",3,"open"],[1,"accordion-item"],["type","button",1,"accordion-question",3,"click"],[1,"question-text"],[1,"accordion-indicator"],[1,"indicator-plus"],[1,"accordion-answer",3,"id"]],template:function(t,e){t&1&&(f(0,"div",0),M(1,ni,2,1,"h2",1),f(2,"div",2),T(3,oi,7,7,"div",3,Xo),v()()),t&2&&(i(),O(e.title()?1:-1),i(2),x(e.items()))},dependencies:[N],styles:[`[_nghost-%COMP%]   .accordion[_ngcontent-%COMP%] {
  background-color: var(--an-light-gray);
  border-radius: 0.5rem;
  padding: 2rem;
  width: 100%;
}
[_nghost-%COMP%]   .accordion-title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  margin: 0 0 1.5rem 0;
  font-family: var(--ac-font-family);
}
[_nghost-%COMP%]   .accordion-items[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0;
}
[_nghost-%COMP%]   .accordion-item[_ngcontent-%COMP%] {
  border-bottom: 0.0625rem solid var(--an-light-gray);
}
[_nghost-%COMP%]   .accordion-item[_ngcontent-%COMP%]:last-child {
  border-bottom: none;
}
[_nghost-%COMP%]   .accordion-item.open[_ngcontent-%COMP%]   .accordion-question[_ngcontent-%COMP%] {
  color: var(--an-blue);
}
[_nghost-%COMP%]   .accordion-question[_ngcontent-%COMP%] {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  background: none;
  border: none;
  cursor: pointer;
  text-align: left;
  font-weight: 700;
  font-size: 1rem;
  color: #000;
  font-family: var(--ac-font-family);
  transition: color 0.2s ease;
}
[_nghost-%COMP%]   .accordion-question[_ngcontent-%COMP%]:hover {
  opacity: 0.8;
}
[_nghost-%COMP%]   .accordion-question[_ngcontent-%COMP%]   .question-text[_ngcontent-%COMP%] {
  flex: 1;
}
[_nghost-%COMP%]   .accordion-indicator[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  flex-shrink: 0;
}
[_nghost-%COMP%]   .indicator-plus[_ngcontent-%COMP%] {
  color: #dc2626;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 1;
}
[_nghost-%COMP%]   .indicator-line[_ngcontent-%COMP%] {
  width: 1.25rem;
  height: 0.125rem;
  background-color: #dc2626;
  display: block;
}
[_nghost-%COMP%]   .accordion-answer[_ngcontent-%COMP%] {
  padding: 0 0 1rem 0;
  color: #000;
  font-size: 1rem;
  line-height: 1.6;
  font-family: var(--ac-font-family);
  white-space: pre-wrap;
  font-weight: 400;
}`],changeDetection:0})}function ii(o){return{id:o.id,order:o.order,enabled:o.enabled,question:o.question,answer:o.answer}}const K=qn.faq.map(ii);class z{#n=P(Cn);#t=P(jn);#e(){const n=this.#t.wpApiUrl;return n?n.replace(/\/$/,""):""}getFaq(){return this.#t.wpApiUrl?.trim()?this.#n.get(`${this.#e()}/wp-json/autoskola/v1/faq`).pipe(J(n=>({faq:n,fromMock:!1})),vn(()=>R({faq:K,fromMock:!0}))):R({faq:K,fromMock:!0})}static ɵfac=function(t){return new(t||z)};static ɵprov=X({token:z,factory:z.ɵfac,providedIn:"root"})}class ${#n=P(z);#t=_([]);#e=_(!1);#o=_(!1);apiCalled=this.#e.asReadonly();fromMock=this.#o.asReadonly();constructor(){this.#n.getFaq().pipe(Pn(1)).subscribe(n=>{this.#e.set(!0),this.#o.set(n.fromMock),this.#t.set(n.faq)})}faq=u(()=>this.#t().filter(n=>n.enabled).sort((n,t)=>n.order-t.order));faqAccordionItems=u(()=>this.faq().map(n=>({id:n.id,question:n.question,answer:n.answer})));getFaqItem(n){return this.#t().find(t=>t.id===n)}setFaq(n){this.#t.set(n)}static ɵfac=function(t){return new(t||$)};static ɵprov=X({token:$,factory:$.ɵfac,providedIn:"root"})}const ai=(o,n)=>["/",o,n],I=(o,n)=>n.id;function ri(o,n){if(o&1&&(a(0,"div",60),l(1,"img",61),a(2,"div",62),l(3,"h1",63)(4,"p",64),a(5,"div",65),l(6,"app-button",66),r()()()),o&2){const t=n.image,e=n.title,p=n.subtitle,m=n.buttonText;i(),g("src",t,w)("alt",e),i(2),g("innerHTML",e,G),i(),g("innerHTML",p,G),i(2),g("text",m)("rounded",!0)}}function si(o,n){if(o&1&&s(0),o&2){const t=d().$implicit;F(" ",t.label," ")}}function ci(o,n){if(o&1&&s(0),o&2){const t=d().$implicit;F(" ",t.content," ")}}function li(o,n){if(o&1&&(a(0,"span"),s(1),r()),o&2){const t=d().$implicit;xn(t.className),i(),c(t.content)}}function gi(o,n){if(o&1&&M(0,ci,1,1)(1,li,2,3,"span",70),o&2){const t=n.$implicit;O(t.type==="text"?0:t.type==="tag"?1:-1)}}function pi(o,n){if(o&1&&T(0,gi,2,1,null,null,Tn),o&2){const t=d().$implicit;x(t.label.parts)}}function di(o,n){if(o&1&&(a(0,"div",5)(1,"div",67),l(2,"img",61),r(),a(3,"div",68),M(4,si,1,1)(5,pi,2,0),r(),a(6,"a",69),s(7),r()()),o&2){const t=n.$implicit,e=d();i(2),g("src",t.image,w)("alt",typeof t.label=="string"?t.label:t.label.raw),i(2),O(typeof t.label=="string"?4:5),i(3),c(e.t("interested"))}}function mi(o,n){if(o&1&&(a(0,"div",9)(1,"p",71),s(2),r(),a(3,"div",72),s(4),r()()),o&2){const t=n.$implicit;i(2),c(t.text),i(2),c(t.author)}}function ui(o,n){if(o&1&&(a(0,"div",13)(1,"div",73),l(2,"img",61),r(),a(3,"h3",74),s(4),r(),a(5,"p",75),s(6),r()()),o&2){const t=n.$implicit;i(2),g("src",t.image,w)("alt",t.title),i(2),c(t.title),i(2),c(t.description)}}class q extends zn{route=P(Mn);faqService=P($);t=this.registerTranslations({sk:me,en:Qo});applicationPath=u(()=>this.languageService.getRoutePath("ziadost",this.languageService.lang()));lang=this.languageService.lang;showPromoSlide=Dn(this.route.data.pipe(J(n=>!!n.showPromoSlide)),{initialValue:!1});slides=u(()=>{const n=[{template:"hero-slide",context:{image:h("/images/sites/home/slide1.png"),title:this.t("heroTitle"),subtitle:this.t("heroSubtitle"),buttonText:this.t("heroButton")}},{template:"hero-slide",context:{image:h("/images/sites/home/slide1.png"),title:this.t("heroTitle2"),subtitle:this.t("heroSubtitle2"),buttonText:this.t("heroButton2")}},{template:"hero-slide",context:{image:h("/images/sites/home/slide1.png"),title:this.t("heroTitle3"),subtitle:this.t("heroSubtitle3"),buttonText:this.t("heroButton3")}}];return this.showPromoSlide()&&n.push({template:"hero-slide",context:{image:h("/images/sites/home/slide1.png"),title:this.t("heroTitle4"),subtitle:this.t("heroSubtitle4"),buttonText:this.t("heroButton4")}}),n});groups=u(()=>[{id:"a",label:this.t("groupA",{strong:"group-letter"}),image:h("/images/sites/home/groups/skupina-a.png")},{id:"b",label:this.t("groupB",{strong:"group-letter"}),image:h("/images/sites/home/groups/skupina-b.png")},{id:"c",label:this.t("groupC",{strong:"group-letter"}),image:h("/images/sites/home/groups/skupina-c.png")},{id:"d",label:this.t("groupD",{strong:"group-letter"}),image:h("/images/sites/home/groups/skupina-d.png")},{id:"t",label:this.t("groupT",{strong:"group-letter"}),image:h("/images/sites/home/groups/skupina-t.png")},{id:"e",label:this.t("groupE",{strong:"group-letter"}),image:h("/images/sites/home/groups/skupina-e.png")}]);testimonials=u(()=>[{id:"1",text:this.t("testimonial1"),author:this.t("testimonial1Author")},{id:"2",text:this.t("testimonial2"),author:this.t("testimonial2Author")},{id:"3",text:this.t("testimonial3"),author:this.t("testimonial3Author")},{id:"4",text:this.t("testimonial4"),author:this.t("testimonial4Author")}]);aboutItems=u(()=>[{id:"experiences",image:h("/images/sites/home/about/experiences.png"),title:this.t("aboutExperiencesTitle"),description:this.t("aboutExperiencesDescription")},{id:"tutors",image:h("/images/sites/home/about/tutors.png"),title:this.t("aboutTutorsTitle"),description:this.t("aboutTutorsDescription")},{id:"cars",image:h("/images/sites/home/about/cars.png"),title:this.t("aboutCarsTitle"),description:this.t("aboutCarsDescription")}]);faqItems=this.faqService.faqAccordionItems;contactEmail=_("");contactMessage=_("");faqTitleText=u(()=>String(this.t("faqTitle")));downloadButtonText=u(()=>String(this.t("downloadButton")));contactEmailLabelText=u(()=>String(this.t("contactEmailLabel")));contactEmailPlaceholderText=u(()=>String(this.t("contactEmailPlaceholder")));contactMessageLabelText=u(()=>String(this.t("contactMessageLabel")));contactMessagePlaceholderText=u(()=>String(this.t("contactMessagePlaceholder")));contactSubmitButtonText=u(()=>String(this.t("contactSubmitButton")));onEmailChange(n){this.contactEmail.set(n)}onMessageChange(n){this.contactMessage.set(n)}onSubmitForm(){console.log("Form submitted",{email:this.contactEmail(),message:this.contactMessage()})}static ɵfac=(()=>{let n;return function(e){return(n||(n=On(q)))(e||q)}})();static ɵcmp=H({type:q,selectors:[["app-home"]],features:[wn],decls:94,vars:39,consts:[[3,"slides","showNavigation"],["appSlideTemplate","hero-slide"],[1,"driver-training-section"],[1,"driver-training-title"],[1,"groups-grid"],[1,"group-item"],["id","aboutUs",1,"testimonials-section"],[1,"testimonials-title"],[1,"testimonials-grid"],[1,"testimonial-card"],[1,"about-section"],[1,"about-title"],[1,"about-grid"],[1,"about-item"],["id","contact",1,"help-section"],[1,"help-title"],[1,"help-content"],[1,"help-left"],[1,"faq-section"],[3,"title","items"],[1,"download-section"],[1,"download-title"],[1,"download-description"],[1,"application-link",3,"routerLink"],["backgroundColor","#000",3,"text","rounded"],[1,"help-right"],[1,"contact-title"],[1,"contact-divider"],[1,"contact-form-section"],[1,"contact-form-title"],[3,"valueChanged","label","placeholder","type"],[3,"valueChanged","label","placeholder"],["backgroundColor","#000",3,"click","text","rounded"],[1,"find-us-section"],[1,"find-us-title"],[1,"find-us-divider"],[1,"address-info"],[1,"address-item"],["icon","location-pin","color","#0066cc","size","1.5rem"],[1,"address-text"],[1,"opening-hours"],[1,"opening-hours-label"],[1,"opening-hours-time"],[1,"contact-info-section"],[1,"contact-info-row"],[1,"contact-info-item"],[1,"contact-info-label"],[1,"contact-info-divider"],[1,"contact-info-value"],["icon","envelope","color","#0066cc","size","1.5rem"],[1,"contact-link",3,"href"],["icon","phone","color","#0066cc","size","1.5rem"],[1,"social-section"],[1,"social-title"],[1,"social-divider"],[1,"social-icons"],["href","#",1,"social-icon"],["icon","facebook","color","#000","size","1.5rem"],["icon","instagram","color","#000","size","1.5rem"],["icon","play","color","#000","size","1.5rem"],[1,"hero-slide"],[3,"src","alt"],[1,"hero-content"],[1,"hero-title",3,"innerHTML"],[1,"hero-subtitle",3,"innerHTML"],[1,"hero-button"],["backgroundColor","#dc2626",3,"text","rounded"],[1,"group-image-wrapper"],[1,"group-label"],["href","#",1,"group-link"],[3,"class"],[1,"testimonial-text"],[1,"testimonial-author"],[1,"about-image-wrapper"],[1,"about-item-title"],[1,"about-item-description"]],template:function(t,e){t&1&&(a(0,"app-site-wrapper")(1,"app-slider",0),S(2,ri,7,6,"ng-template",1),r(),a(3,"section",2)(4,"h2",3),s(5),r(),a(6,"div",4),T(7,di,8,4,"div",5,I),r()(),a(9,"section",6)(10,"h2",7),s(11),r(),a(12,"div",8),T(13,mi,5,2,"div",9,I),r()(),a(15,"div",10)(16,"h2",11),s(17),r(),a(18,"div",12),T(19,ui,7,4,"div",13,I),r()(),a(21,"section",14)(22,"h2",15),s(23),r(),a(24,"div",16)(25,"div",17)(26,"div",18),l(27,"app-accordion",19),r(),a(28,"div",20)(29,"h3",21),s(30),r(),a(31,"p",22),s(32),r(),a(33,"a",23),l(34,"app-button",24),r()()(),a(35,"div",25)(36,"h3",26),s(37),r(),l(38,"div",27),a(39,"div",28)(40,"h4",29),s(41),r(),a(42,"app-textfield",30),k("valueChanged",function(m){return e.onEmailChange(m)}),r(),a(43,"app-textarea",31),k("valueChanged",function(m){return e.onMessageChange(m)}),r(),a(44,"app-button",32),k("click",function(){return e.onSubmitForm()}),r()(),a(45,"div",33)(46,"h4",34),s(47),r(),l(48,"div",35),a(49,"div",36)(50,"div",37),l(51,"app-icon",38),a(52,"span",39),s(53),r()(),a(54,"div",40)(55,"p",41),s(56),r(),a(57,"p",42),s(58),r(),a(59,"p",42),s(60),r()()()(),a(61,"div",43)(62,"div",44)(63,"div",45)(64,"h5",46),s(65),r(),l(66,"div",47),a(67,"div",48),l(68,"app-icon",49),a(69,"a",50),s(70),r()()(),a(71,"div",45)(72,"h5",46),s(73),r(),l(74,"div",47),a(75,"div",48),l(76,"app-icon",51),a(77,"a",50),s(78),r()(),a(79,"div",48),l(80,"app-icon",51),a(81,"a",50),s(82),r()()()()(),a(83,"div",52)(84,"h4",53),s(85),r(),l(86,"div",54),a(87,"div",55)(88,"a",56),l(89,"app-icon",57),r(),a(90,"a",56),l(91,"app-icon",58),r(),a(92,"a",56),l(93,"app-icon",59),r()()()()()()()),t&2&&(i(),g("slides",e.slides())("showNavigation",!1),i(4),c(e.t("driverTrainingTitle")),i(2),x(e.groups()),i(4),c(e.t("testimonialsTitle")),i(2),x(e.testimonials()),i(4),c(e.t("aboutTitle")),i(2),x(e.aboutItems()),i(4),c(e.t("helpTitle")),i(4),g("title",e.faqTitleText())("items",e.faqItems()),i(3),c(e.t("downloadTitle")),i(2),c(e.t("downloadDescription")),i(),g("routerLink",yn(36,ai,e.lang(),e.applicationPath())),i(),g("text",e.downloadButtonText())("rounded",!0),i(3),c(e.t("contactTitle")),i(4),c(e.t("contactFormTitle")),i(),g("label",e.contactEmailLabelText())("placeholder",e.contactEmailPlaceholderText())("type","email"),i(),g("label",e.contactMessageLabelText())("placeholder",e.contactMessagePlaceholderText()),i(),g("text",e.contactSubmitButtonText())("rounded",!0),i(3),c(e.t("findUsTitle")),i(6),c(e.t("address")),i(3),c(e.t("openingHours")),i(2),c(e.t("openingHoursWeekdays")),i(2),c(e.t("openingHoursFriday")),i(5),c(e.t("writeToUs")),i(4),g("href","mailto:"+e.t("email"),w),i(),c(e.t("email")),i(3),c(e.t("orCallUs")),i(4),g("href","tel:"+e.t("phone1"),w),i(),c(e.t("phone1")),i(3),g("href","tel:"+e.t("phone2"),w),i(),c(e.t("phone2")),i(3),c(e.t("followUs")))},dependencies:[N,bn,kn,$n,B,y,Sn,D,An,Bn,nn],styles:[`[_nghost-%COMP%]     app-slider {
  display: block;
  width: 100%;
  height: auto;
  min-height: 32.5rem;
  border-radius: 1.125rem;
  padding: 0 4.375rem 1.25rem;
  overflow: visible;
  max-width: 100%;
  box-sizing: border-box;
}
@media (max-width: 48rem) {
  [_nghost-%COMP%]     app-slider {
    padding: 0 1rem 1.25rem;
  }
}
[_nghost-%COMP%]     app-slider .main-slider {
  border-radius: 1.125rem;
  overflow: visible;
}
[_nghost-%COMP%]     app-slider .main-slider swiper-container {
  height: 32.5rem;
  border-radius: 1.125rem;
  overflow: hidden;
}
[_nghost-%COMP%]     app-slider .main-slider swiper-slide {
  height: 32.5rem;
  border-radius: 1.125rem;
  overflow: hidden;
}
[_nghost-%COMP%]     app-slider .main-slider .pagination {
  position: relative;
  z-index: 10;
  display: flex !important;
  visibility: visible !important;
  opacity: 1 !important;
}
[_nghost-%COMP%]     .hero-slide {
  position: relative;
  width: 100%;
  height: 32.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.125rem;
  overflow: hidden;
}
[_nghost-%COMP%]     .hero-slide img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 1.125rem;
}
[_nghost-%COMP%]     .hero-slide .hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  color: white;
  padding: 2rem;
  max-width: 90rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
}
[_nghost-%COMP%]     .hero-slide .hero-content .hero-title {
  width: 100%;
  max-width: 50rem;
  font-size: 3.75rem;
  font-weight: 900;
  line-height: 1.2;
  margin: 0;
  text-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
@media (max-width: 48rem) {
  [_nghost-%COMP%]     .hero-slide .hero-content .hero-title {
    font-size: 2.5rem;
  }
}
[_nghost-%COMP%]     .hero-slide .hero-content .hero-subtitle {
  width: 100%;
  max-width: 41.875rem;
  font-size: 1.125rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  text-shadow: 0 0 0.75rem rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}
[_nghost-%COMP%]     .hero-slide .hero-content .hero-subtitle strong {
  font-weight: 700;
}
[_nghost-%COMP%]     .hero-slide .hero-content .hero-button {
  padding-top: 1.875rem;
}

picture[_ngcontent-%COMP%] {
  position: relative;
  z-index: -1;
  display: block;
  width: 100%;
  height: 43.75rem;
}
picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  position: absolute;
  top: -6.875rem;
  width: 100%;
  height: 50.625rem;
  object-fit: cover;
  display: block;
}

app-booking-bar[_ngcontent-%COMP%] {
  position: absolute;
  top: 33.6875rem;
  margin: 0 auto;
}

.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(12.5rem, 1fr));
  grid-template-rows: 16rem 22.625rem 22.625rem;
  row-gap: 1.25rem;
  max-width: 100%;
  overflow-x: hidden;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]    > div.reference[_ngcontent-%COMP%] {
  color: white;
  padding: 1.5rem;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]    > div.reference[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  margin-bottom: 1rem;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .item1[_ngcontent-%COMP%] {
  grid-row: 1/span 2;
  grid-column: 1/span 420;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .item2[_ngcontent-%COMP%] {
  grid-row: 1;
  grid-column: 440/span 420;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .item3[_ngcontent-%COMP%] {
  grid-row: 1;
  grid-column: 880/span 200;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .item4[_ngcontent-%COMP%] {
  grid-row: 1;
  grid-column: 1100/span 200;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .item5[_ngcontent-%COMP%] {
  grid-row: 2;
  grid-column: 440/span 310;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .item6[_ngcontent-%COMP%] {
  grid-row: 2;
  grid-column: 770/span 530;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .item7[_ngcontent-%COMP%] {
  grid-row: 3;
  grid-column: 1/span 530;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .item8[_ngcontent-%COMP%] {
  grid-row: 3;
  grid-column: 550/span 310;
}
.galeria[_ngcontent-%COMP%]   .grid[_ngcontent-%COMP%]   .item9[_ngcontent-%COMP%] {
  grid-row: 3;
  grid-column: 880/span 420;
}

.driver-training-section[_ngcontent-%COMP%] {
  padding: 4rem 0;
  max-width: 75rem;
  margin: 0 auto;
}
.driver-training-section[_ngcontent-%COMP%]   .driver-training-title[_ngcontent-%COMP%] {
  font-size: 2rem;
  font-weight: 900;
  color: #000;
  margin-bottom: 3rem;
  text-align: center;
}
.driver-training-section[_ngcontent-%COMP%]   .groups-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;
  align-items: start;
}
.driver-training-section[_ngcontent-%COMP%]   .groups-grid[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}
.driver-training-section[_ngcontent-%COMP%]   .groups-grid[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%]   .group-image-wrapper[_ngcontent-%COMP%] {
  width: 9.375rem;
  height: 9.375rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
}
.driver-training-section[_ngcontent-%COMP%]   .groups-grid[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%]   .group-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}
.driver-training-section[_ngcontent-%COMP%]   .groups-grid[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%]   .group-label[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  text-align: center;
}
.driver-training-section[_ngcontent-%COMP%]   .groups-grid[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%]   .group-label[_ngcontent-%COMP%]   .group-letter[_ngcontent-%COMP%] {
  color: #dc2626;
}
.driver-training-section[_ngcontent-%COMP%]   .groups-grid[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%]   .group-link[_ngcontent-%COMP%] {
  color: #dc2626;
  text-decoration: underline;
  font-size: 0.875rem;
  cursor: pointer;
  transition: opacity 0.2s;
}
.driver-training-section[_ngcontent-%COMP%]   .groups-grid[_ngcontent-%COMP%]   .group-item[_ngcontent-%COMP%]   .group-link[_ngcontent-%COMP%]:hover {
  opacity: 0.8;
}
@media (max-width: 64rem) {
  .driver-training-section[_ngcontent-%COMP%]   .groups-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
}
@media (max-width: 48rem) {
  .driver-training-section[_ngcontent-%COMP%]   .groups-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}
@media (max-width: 30rem) {
  .driver-training-section[_ngcontent-%COMP%]   .groups-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.testimonials-section[_ngcontent-%COMP%] {
  padding: 4rem 0;
  max-width: 75rem;
  margin: 0 auto;
}
.testimonials-section[_ngcontent-%COMP%]   .testimonials-title[_ngcontent-%COMP%] {
  font-size: 2rem;
  font-weight: 900;
  color: #000;
  margin-bottom: 3rem;
  text-align: center;
}
.testimonials-section[_ngcontent-%COMP%]   .testimonials-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  align-items: start;
}
.testimonials-section[_ngcontent-%COMP%]   .testimonials-grid[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%] {
  background-color: var(--an-blue);
  border-radius: 1.125rem;
  padding: 1.5rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-height: 12.5rem;
}
.testimonials-section[_ngcontent-%COMP%]   .testimonials-grid[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .testimonial-text[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  flex: 1;
}
.testimonials-section[_ngcontent-%COMP%]   .testimonials-grid[_ngcontent-%COMP%]   .testimonial-card[_ngcontent-%COMP%]   .testimonial-author[_ngcontent-%COMP%] {
  font-size: 0.875rem;
  font-weight: 400;
  margin-top: auto;
  color: white;
}
@media (max-width: 64rem) {
  .testimonials-section[_ngcontent-%COMP%]   .testimonials-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}
@media (max-width: 48rem) {
  .testimonials-section[_ngcontent-%COMP%]   .testimonials-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

.about-section[_ngcontent-%COMP%] {
  background-color: #eee;
  padding: 3.125rem 0;
  margin-left: calc(-1 * var(--base-wrapper-padding));
  margin-right: calc(-1 * var(--base-wrapper-padding));
  padding-left: var(--base-wrapper-padding);
  padding-right: var(--base-wrapper-padding);
  box-sizing: border-box;
}
.about-section[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {
  max-width: 75rem;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}
@media (max-width: 90rem) {
  .about-section[_ngcontent-%COMP%] {
    margin-left: 0;
    margin-right: 0;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
.about-section[_ngcontent-%COMP%]   .about-title[_ngcontent-%COMP%] {
  font-size: 2rem;
  font-weight: 900;
  color: #000;
  margin-bottom: 3rem;
  text-align: center;
}
.about-section[_ngcontent-%COMP%]   .about-grid[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  align-items: start;
}
.about-section[_ngcontent-%COMP%]   .about-grid[_ngcontent-%COMP%]   .about-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
}
.about-section[_ngcontent-%COMP%]   .about-grid[_ngcontent-%COMP%]   .about-item[_ngcontent-%COMP%]   .about-image-wrapper[_ngcontent-%COMP%] {
  width: 8.25rem;
  height: 8.25rem;
  border-radius: 0.75rem;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}
.about-section[_ngcontent-%COMP%]   .about-grid[_ngcontent-%COMP%]   .about-item[_ngcontent-%COMP%]   .about-image-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  display: block;
}
.about-section[_ngcontent-%COMP%]   .about-grid[_ngcontent-%COMP%]   .about-item[_ngcontent-%COMP%]   .about-item-title[_ngcontent-%COMP%] {
  font-size: 1.875rem;
  font-weight: 700;
  color: #000;
  margin: 0;
  line-height: 100%;
}
.about-section[_ngcontent-%COMP%]   .about-grid[_ngcontent-%COMP%]   .about-item[_ngcontent-%COMP%]   .about-item-description[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 400;
  color: #000;
  line-height: 100%;
  margin: 0;
}
@media (max-width: 64rem) {
  .about-section[_ngcontent-%COMP%]   .about-grid[_ngcontent-%COMP%] {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
  }
}
@media (max-width: 48rem) {
  .about-section[_ngcontent-%COMP%]   .about-grid[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}

.help-section[_ngcontent-%COMP%] {
  padding: 4rem 0;
  max-width: 75rem;
  margin: 0 auto;
}
.help-section[_ngcontent-%COMP%]   .help-title[_ngcontent-%COMP%] {
  font-size: 2rem;
  font-weight: 900;
  color: #000;
  margin-bottom: 3rem;
  text-align: center;
}
.help-section[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: start;
}
@media (max-width: 75rem) {
  .help-section[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%] {
    gap: 2rem;
  }
}
.help-section[_ngcontent-%COMP%]   .help-left[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.help-section[_ngcontent-%COMP%]   .help-left[_ngcontent-%COMP%]   .faq-section[_ngcontent-%COMP%] {
  background-color: var(--an-light-gray);
  border-radius: 1.125rem;
  padding: 2rem;
}
.help-section[_ngcontent-%COMP%]   .help-left[_ngcontent-%COMP%]   .download-section[_ngcontent-%COMP%]   .application-link[_ngcontent-%COMP%] {
  text-decoration: none;
  display: inline-block;
}
.help-section[_ngcontent-%COMP%]   .help-left[_ngcontent-%COMP%]   .download-section[_ngcontent-%COMP%] {
  background-color: #0066cc;
  border-radius: 1.125rem;
  padding: 2rem;
  color: white;
}
.help-section[_ngcontent-%COMP%]   .help-left[_ngcontent-%COMP%]   .download-section[_ngcontent-%COMP%]   .download-title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0 0 1rem 0;
}
.help-section[_ngcontent-%COMP%]   .help-left[_ngcontent-%COMP%]   .download-section[_ngcontent-%COMP%]   .download-description[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 400;
  color: white;
  line-height: 1.6;
  margin: 0 0 1.5rem 0;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-title[_ngcontent-%COMP%] {
  font-size: 1.5rem;
  font-weight: 700;
  color: #000;
  margin: 0 0 0.5rem 0;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-divider[_ngcontent-%COMP%] {
  height: 0.0625rem;
  background-color: #ddd;
  width: 100%;
  margin-bottom: 0.5rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-form-section[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-form-section[_ngcontent-%COMP%]   .contact-form-title[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  margin: 0 0 1rem 0;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-form-section[_ngcontent-%COMP%]   app-button[_ngcontent-%COMP%] {
  align-self: flex-start;
  margin-top: 0.5rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .find-us-section[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .find-us-section[_ngcontent-%COMP%]   .find-us-title[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  margin: 0 0 0.5rem 0;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .find-us-section[_ngcontent-%COMP%]   .find-us-divider[_ngcontent-%COMP%] {
  height: 0.0625rem;
  background-color: #ddd;
  width: 100%;
  margin-bottom: 1rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .find-us-section[_ngcontent-%COMP%]   .address-info[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .find-us-section[_ngcontent-%COMP%]   .address-info[_ngcontent-%COMP%]   .address-item[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .find-us-section[_ngcontent-%COMP%]   .address-info[_ngcontent-%COMP%]   .address-item[_ngcontent-%COMP%]   .address-text[_ngcontent-%COMP%] {
  color: #dc2626;
  font-size: 1rem;
  text-decoration: underline;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .find-us-section[_ngcontent-%COMP%]   .address-info[_ngcontent-%COMP%]   .opening-hours[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .find-us-section[_ngcontent-%COMP%]   .address-info[_ngcontent-%COMP%]   .opening-hours[_ngcontent-%COMP%]   .opening-hours-label[_ngcontent-%COMP%] {
  font-weight: 700;
  color: #000;
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .find-us-section[_ngcontent-%COMP%]   .address-info[_ngcontent-%COMP%]   .opening-hours[_ngcontent-%COMP%]   .opening-hours-time[_ngcontent-%COMP%] {
  color: #000;
  margin: 0.25rem 0;
  font-size: 1rem;
  line-height: 1.5;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .contact-info-row[_ngcontent-%COMP%] {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .contact-info-row[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%] {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .contact-info-row[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]   .contact-info-label[_ngcontent-%COMP%] {
  font-size: 1rem;
  font-weight: 700;
  color: #000;
  margin: 0;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .contact-info-row[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]   .contact-info-divider[_ngcontent-%COMP%] {
  height: 0.0625rem;
  background-color: #ddd;
  width: 100%;
  margin: 0.25rem 0;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .contact-info-row[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]   .contact-info-value[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.75rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .contact-info-row[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]   .contact-info-value[_ngcontent-%COMP%]:first-of-type {
  margin-top: 0.5rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .contact-info-row[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]   .contact-info-value[_ngcontent-%COMP%]   .contact-link[_ngcontent-%COMP%] {
  color: #dc2626;
  text-decoration: underline;
  font-size: 1rem;
  transition: opacity 0.2s;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .contact-info-row[_ngcontent-%COMP%]   .contact-info-item[_ngcontent-%COMP%]   .contact-info-value[_ngcontent-%COMP%]   .contact-link[_ngcontent-%COMP%]:hover {
  opacity: 0.8;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .social-section[_ngcontent-%COMP%] {
  margin-top: 0.5rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .social-section[_ngcontent-%COMP%]   .social-title[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  font-weight: 700;
  color: #000;
  margin: 0 0 0.5rem 0;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .social-section[_ngcontent-%COMP%]   .social-divider[_ngcontent-%COMP%] {
  height: 0.0625rem;
  background-color: #ddd;
  width: 100%;
  margin-bottom: 1rem;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .social-section[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .social-section[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  transition: opacity 0.2s;
}
.help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .social-section[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:hover {
  opacity: 0.7;
}
@media (max-width: 64rem) {
  .help-section[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .help-section[_ngcontent-%COMP%]   .help-right[_ngcontent-%COMP%]   .contact-info-section[_ngcontent-%COMP%]   .contact-info-row[_ngcontent-%COMP%] {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}`],changeDetection:0})}export{q as HomeComponent};
