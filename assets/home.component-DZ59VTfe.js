import{D as tn,i as h,s as v,R as en,c as u,a as w,T as un,ɵ as hn,v as _n,b as fn,d as K,C as G,N as Cn,e as vn,f as Mn,g as r,h as F,j as a,k as O,l as i,m as d,n as b,o as Pn,p as on,q as On,r as m,t as bn,u as kn,w as wn,x as Y,y,z as s,A as pn,B as U,E as yn,F as E,G as B,H as p,I as Tn,J as M,K as z,L as P,M as $,O as c,P as xn,Q as dn,S as zn,U as Z,V as T,W,X as J,Y as L,Z as Q,_ as $n,$ as Sn,a0 as qn,a1 as An,a2 as jn,a3 as Fn,a4 as Dn,a5 as En,a6 as rn,a7 as N}from"./index-CwuSekyX.js";import{C as X,B as Bn,S as In,a as Hn}from"./site-wrapper.component-Okom-Ljk.js";import{I as mn}from"./icon.component-DhA8oITY.js";import{a as nn,i as f,I as Un}from"./image-path.util-w0iefrEt.js";import{T as Wn,a as Ln}from"./textarea.component-BxEZA4Hu.js";function R(o,n){const e=!n?.manualCleanup?n?.injector?.get(tn)??h(tn):null,l=Nn(n?.equal);let g;n?.requireSync?g=v({kind:0},{equal:l}):g=v({kind:1,value:n?.initialValue},{equal:l});let C;const k=o.subscribe({next:_=>g.set({kind:1,value:_}),error:_=>{g.set({kind:2,error:_}),C?.()},complete:()=>{C?.()}});if(n?.requireSync&&g().kind===0)throw new en(601,!1);return C=e?.onDestroy(k.unsubscribe.bind(k)),u(()=>{const _=g();switch(_.kind){case 1:return _.value;case 2:throw _.error;case 0:throw new en(601,!1)}},{equal:n?.equal})}function Nn(o=Object.is){return(n,t)=>n.kind===1&&t.kind===1&&o(n.value,t.value)}const Rn="Úvod",Vn="Začni jazdiť s autoškolou, na ktorú sa môžeš spoľahnúť",Qn="Naša autoškola pôsobí od roku <strong>1990</strong> a vodičské preukazy u nás získalo už viac ako <strong>12 000</strong> ľudí. Staň sa aj ty jedným z nich.",Kn="Chcem začať",Gn="Profesionálni a trpezliví personál",Yn="Naši <strong>skúsení inštruktori</strong> sa venujú každému žiakovi individuálne. Získaj vodičský preukaz s najlepšou prípravou.",Zn="Zistiť viac",Jn="Ponúkame vodičské oprávnenia pre všetky skupiny",Xn="Naša autoškola ponúka vodičské preukazy pre všetky skupiny. Získaj vodičský preukaz s najlepšou prípravou.",nt="Kontaktovať nás",tt="Posledné voľné miesta v kurze za akciovú cenu",et="Ponúkame <strong>posledné voľné miesta</strong> v kurze za výhodnú akciovú cenu. Neváhajte a prihláste sa ešte dnes.",ot="Prihlásiť sa",it="Najbližšie kurzy",rt="B kategória: 21.10.2025",at="Pozrieť viac termínov",st="Prihláška",ct="Prihlašku si vytlačte obojstranne. Je potrebné ju potvrdiť všeobecným lekárom pred začatím kurzu.",lt="Pôsobime viac ako 25 rokov",gt="Naša autoškola pôsobí od roku 1990",pt="vodičské preukazy u nás získalo už viac ako 12 000 ľudí",dt="Kompletne vybavené priestory",mt="Postarali sme sa aby ste sa u nás cítili pohodlne a preto sme zriadili kompletne vybavené klimatizované priestory",ut="Vodičské kurzy",ht="Ako jedna z mála autoškôl v Bratislave ponúkame vodičské preukazy pre všetky kategórie.",_t="Skupiny <strong>A</strong>",ft="Skupiny <strong>B</strong>",Ct="Skupiny <strong>C</strong>",vt="Skupiny <strong>D</strong>",Mt="Skupiny <strong>T</strong>",Pt="Skupiny <strong>E</strong>",Ot="pozrieť cenník",bt="Výcvik vodičov a kondičné jazdy",kt="Mám záujem",wt="Čo o nás hovoria naši klienti",yt="Absolvoval som výcvik skupiny A a som veľmi spokojný. Inštruktor bol trpezlivý a profesionálny, vždy som sa cítil bezpečne. Odporúčam každému, kto chce kvalitnú prípravu na vodičský preukaz.",Tt="Benedikt - Výcvik skupiny A",xt="Perfektná autoškola s výbornými inštruktormi. Výučba bola jasná a zrozumiteľná, a hlavne som sa naučil všetko, čo som potreboval. Vodičský preukaz som získal na prvý pokus.",zt="Martina - Výcvik skupiny B",$t="Kondičné jazdy som absolvoval po dlhšej prestávke a bolo to presne to, čo som potreboval. Inštruktor mi pomohol získať späť sebavedomie za volantom. Veľmi ďakujem za profesionálny prístup.",St="Peter - Kondičné jazdy",qt="Výcvik skupiny C bol náročný, ale inštruktori mi pomohli zvládnuť všetko. Moderné vozidlá a skvelá príprava ma pripravili na skúšku. Určite odporúčam túto autoškolou.",At="Ján - Výcvik skupiny C",jt="Prečo práve my",Ft="Moderné vozidlá",Dt="Naša autoškola disponuje moderným vozovým parkom, ktorý pravidelne obnovujeme. Všetky naše vozidlá sú vybavené najnovšími bezpečnostnými systémami a technológiami, ktoré zabezpečujú maximálnu bezpečnosť počas výcviku. Cvičíme na vozidlách rôznych kategórií, aby sme zabezpečili komplexnú prípravu našich žiakov.",Et="Skúsení inštruktori",Bt="Náš tím tvoria skúsení a certifikovaní inštruktori, ktorí majú roky praxe v oblasti výcviku vodičov. Každý inštruktor sa venuje žiakom individuálne a prispôsobuje výučbu ich potrebám a tempu. Naši inštruktori sú známi svojou trpezlivosťou, profesionalitou a schopnosťou vytvoriť priateľskú a podporujúcu atmosféru počas výcviku.",It="Bohaté skúsenosti",Ht="S viac ako 30 rokmi pôsobenia na trhu sme získali neoceniteľné skúsenosti v oblasti výcviku vodičov. Za túto dobu sme pripravili tisíce úspešných vodičov, ktorí sa s dôverou pohybujú v premávke. Naša bohatá história a dlhodobé pôsobenie sú zárukou kvality a spoľahlivosti našich služieb.",Ut="Potrebujete pomôcť?",Wt="Zodpovieme vám najčastejšie otázky",Lt="Ako dlho trvá výcvik na vodičský preukaz skupiny B?",Nt="Výcvik na vodičský preukaz skupiny B trvá približne 2-3 mesiace, v závislosti od vašej dostupnosti a tempa učenia. Teoretická časť zahŕňa 28 hodín teórie, ktoré sa konajú pravidelne počas týždňa. Praktická časť pozostáva z 28 hodín jazdného výcviku, ktoré si môžete rozvrhnúť podľa vašich možností. Po absolvovaní teórie a praxe nasleduje skúška na dopravnom inšpektoráte.",Rt="Koľko stojí výcvik na vodičský preukaz?",Vt="Cena výcviku sa líši podľa kategórie vodičského preukazu. Pre presné ceny a aktuálne akcie nás prosím kontaktujte telefonicky alebo e-mailom. Ponúkame aj možnosť splátkového platenia výcviku.",Qt="Aké dokumenty sú potrebné na prihlásenie do kurzu?",Kt="Na prihlásenie do kurzu potrebujete vyplnenú prihlášku, ktorú si môžete stiahnuť z našej stránky, občiansky preukaz, lekárske potvrdenie o zdravotnej spôsobilosti a fotografiu. Lekárske potvrdenie musí byť potvrdené všeobecným lekárom pred začatím kurzu.",Gt="Kedy sa konajú teoretické hodiny?",Yt="Teoretické hodiny sa konajú pravidelne počas týždňa, väčšinou večer, aby sa prispôsobili pracovnému rozvrhu našich žiakov. Presné termíny a rozvrh hodín vám poskytneme po prihlásení do kurzu. Teoretická výučba prebieha v našich klimatizovaných priestoroch.",Zt="Ako sa prihlásiť na skúšku na dopravnom inšpektoráte?",Jt="Po absolvovaní teoretickej a praktickej časti výcviku vás prihlásime na skúšku na dopravný inšpektorát. Všetky potrebné dokumenty a formalities za vás vybavíme. Skúška pozostáva z teoretickej časti (test) a praktickej časti (jazda). Naši inštruktori vás na obe časti dôkladne pripravia.",Xt="Stiahnite si prihlášku",ne="Prihlášku si môžete stiahnuť vo formáte PDF a vytlačiť obojstranne. Pred začatím kurzu je potrebné, aby ste prihlášku potvrdili u vášho všeobecného lekára. Po vyplnení a potvrdení prihlášky nás kontaktujte a dohodneme termín začiatku kurzu.",te="Stiahnuť ako pdf",ee="Alebo nás kontaktujte",oe="Kontaktný formulár",ie="Váš e-mail",re="Zadajte váš e-mail",ae="Vaša správa",se="Sem zadajte znenie vašej správy",ce="Odoslať formulár",le="Nájdete nás",ge="Račianska 69/A, 831 02, Bratislava",pe="Otváracie hodiny:",de="Pondelok-Štvrtok: 09:00 - 17:00",me="Piatok: 09:00 - 16:00",ue="Napíšte nám na",he="info@autoskola-antonova.sk",_e="Alebo zavolajte na",fe="02 44 45 97 02",Ce="0903 790 865",ve="Sledujte nás na:",Me={title:Rn,heroTitle:Vn,heroSubtitle:Qn,heroButton:Kn,heroTitle2:Gn,heroSubtitle2:Yn,heroButton2:Zn,heroTitle3:Jn,heroSubtitle3:Xn,heroButton3:nt,heroTitle4:tt,heroSubtitle4:et,heroButton4:ot,upcomingCourses:it,bCategoryDate:rt,viewMoreDates:at,application:st,applicationDescription:ct,experience:lt,experienceDescription:gt,graduatesCount:pt,facilities:dt,facilitiesDescription:mt,categories:ut,categoriesDescription:ht,groupA:_t,groupB:ft,groupC:Ct,groupD:vt,groupT:Mt,groupE:Pt,viewPricing:Ot,driverTrainingTitle:bt,interested:kt,testimonialsTitle:wt,testimonial1:yt,testimonial1Author:Tt,testimonial2:xt,testimonial2Author:zt,testimonial3:$t,testimonial3Author:St,testimonial4:qt,testimonial4Author:At,aboutTitle:jt,aboutCarsTitle:Ft,aboutCarsDescription:Dt,aboutTutorsTitle:Et,aboutTutorsDescription:Bt,aboutExperiencesTitle:It,aboutExperiencesDescription:Ht,helpTitle:Ut,faqTitle:Wt,faqQuestion1:Lt,faqAnswer1:Nt,faqQuestion2:Rt,faqAnswer2:Vt,faqQuestion3:Qt,faqAnswer3:Kt,faqQuestion4:Gt,faqAnswer4:Yt,faqQuestion5:Zt,faqAnswer5:Jt,downloadTitle:Xt,downloadDescription:ne,downloadButton:te,contactTitle:ee,contactFormTitle:oe,contactEmailLabel:ie,contactEmailPlaceholder:re,contactMessageLabel:ae,contactMessagePlaceholder:se,contactSubmitButton:ce,findUsTitle:le,address:ge,openingHours:pe,openingHoursWeekdays:de,openingHoursFriday:me,writeToUs:ue,email:he,orCallUs:_e,phone1:fe,phone2:Ce,followUs:ve},Pe="Home",Oe="Start driving with a driving school you can rely on",be="Our driving school has been operating since <strong>1990</strong>, and over <strong>12,000</strong> people have obtained driving licenses with us. Become one of them too.",ke="I want to start",we="Professional and patient staff",ye="Our <strong>experienced instructors</strong> provide individual attention to each student. Get your driver's license with the best preparation.",Te="Learn more",xe="We offer driver's licenses for all groups",ze="Our driving school offers driver's licenses for all groups. Get your license with the best preparation.",$e="Contact us",Se="Last free places in the course at promotional price",qe="We offer <strong>last free places</strong> in the course at a special promotional price. Don't hesitate and sign up today.",Ae="Sign up",je="Upcoming courses",Fe="Category B: 21.10.2025",De="View more dates",Ee="Application",Be="Print the application double-sided. It needs to be confirmed by a general practitioner before starting the course.",Ie="Operating for more than 25 years",He="Our driving school has been operating since 1990",Ue="more than 12,000 people have obtained their driver's licenses with us",We="Fully equipped facilities",Le="We have taken care to make you feel comfortable with us and therefore we have set up fully equipped air-conditioned facilities",Ne="Driving courses",Re="As one of the few driving schools in Bratislava, we offer driver's licenses for all categories.",Ve="Group <strong>A</strong>",Qe="Group <strong>B</strong>",Ke="Group <strong>C</strong>",Ge="Group <strong>D</strong>",Ye="Group <strong>T</strong>",Ze="Group <strong>E</strong>",Je="view pricing",Xe="Driver training and refresher courses",no="I am interested",to="What our clients say about us",eo="I completed category A training and I am very satisfied. The instructor was patient and professional, I always felt safe. I recommend it to anyone who wants quality preparation for a driver's license.",oo="Benedikt - Category A training",io="Perfect driving school with excellent instructors. The teaching was clear and understandable, and most importantly, I learned everything I needed. I got my driver's license on the first try.",ro="Martina - Category B training",ao="I took refresher courses after a longer break and it was exactly what I needed. The instructor helped me regain confidence behind the wheel. Thank you very much for the professional approach.",so="Peter - Refresher courses",co="Category C training was demanding, but the instructors helped me handle everything. Modern vehicles and great preparation prepared me for the exam. I definitely recommend this driving school.",lo="Ján - Category C training",go="Why us",po="Modern vehicles",mo="Our driving school has a modern fleet of vehicles that we regularly update. All our vehicles are equipped with the latest safety systems and technologies that ensure maximum safety during training. We train on vehicles of various categories to ensure comprehensive preparation of our students.",uo="Experienced instructors",ho="Our team consists of experienced and certified instructors who have years of practice in driver training. Each instructor provides individual attention to students and adapts the teaching to their needs and pace. Our instructors are known for their patience, professionalism, and ability to create a friendly and supportive atmosphere during training.",_o="Rich experience",fo="With more than 30 years of operation in the market, we have gained invaluable experience in driver training. During this time, we have prepared thousands of successful drivers who confidently navigate traffic. Our rich history and long-term operation are a guarantee of quality and reliability of our services.",Co="Do you need help?",vo="We will answer your most frequent questions",Mo="How long does the training for category B driver's license take?",Po="Training for a category B driver's license takes approximately 2-3 months, depending on your availability and learning pace. The theoretical part includes 28 hours of theory, which are held regularly during the week. The practical part consists of 28 hours of driving training, which you can schedule according to your possibilities. After completing theory and practice, an exam at the traffic inspectorate follows.",Oo="How much does the driver's license training cost?",bo="The price of training varies depending on the category of driver's license. For exact prices and current offers, please contact us by phone or email. We also offer the possibility of installment payment for training.",ko="What documents are needed to enroll in the course?",wo="To enroll in the course, you need a completed application form, which you can download from our website, an ID card, a medical certificate of fitness, and a photo. The medical certificate must be confirmed by a general practitioner before starting the course.",yo="When are the theoretical classes held?",To="Theoretical classes are held regularly during the week, usually in the evening, to accommodate the work schedule of our students. Exact dates and class schedules will be provided to you after enrolling in the course. Theoretical instruction takes place in our air-conditioned facilities.",xo="How to register for the exam at the traffic inspectorate?",zo="After completing the theoretical and practical parts of the training, we will register you for the exam at the traffic inspectorate. We will handle all necessary documents and formalities for you. The exam consists of a theoretical part (test) and a practical part (driving). Our instructors will thoroughly prepare you for both parts.",$o="Download the application",So="You can download the application form in PDF format and print it double-sided. Before starting the course, you need to have the application confirmed by your general practitioner. After filling out and confirming the application, contact us and we will arrange the course start date.",qo="Download as pdf",Ao="Or contact us",jo="Contact form",Fo="Your e-mail",Do="Enter your e-mail",Eo="Your message",Bo="Enter the content of your message here",Io="Send form",Ho="Find us",Uo="Račianska 69/A, 831 02, Bratislava",Wo="Opening hours:",Lo="Monday-Thursday: 09:00 - 17:00",No="Friday: 09:00 - 16:00",Ro="Write to us at",Vo="info@autoskola-antonova.sk",Qo="Or call us at",Ko="02 44 45 97 02",Go="0903 790 865",Yo="Follow us on:",Zo={title:Pe,heroTitle:Oe,heroSubtitle:be,heroButton:ke,heroTitle2:we,heroSubtitle2:ye,heroButton2:Te,heroTitle3:xe,heroSubtitle3:ze,heroButton3:$e,heroTitle4:Se,heroSubtitle4:qe,heroButton4:Ae,upcomingCourses:je,bCategoryDate:Fe,viewMoreDates:De,application:Ee,applicationDescription:Be,experience:Ie,experienceDescription:He,graduatesCount:Ue,facilities:We,facilitiesDescription:Le,categories:Ne,categoriesDescription:Re,groupA:Ve,groupB:Qe,groupC:Ke,groupD:Ge,groupT:Ye,groupE:Ze,viewPricing:Je,driverTrainingTitle:Xe,interested:no,testimonialsTitle:to,testimonial1:eo,testimonial1Author:oo,testimonial2:io,testimonial2Author:ro,testimonial3:ao,testimonial3Author:so,testimonial4:co,testimonial4Author:lo,aboutTitle:go,aboutCarsTitle:po,aboutCarsDescription:mo,aboutTutorsTitle:uo,aboutTutorsDescription:ho,aboutExperiencesTitle:_o,aboutExperiencesDescription:fo,helpTitle:Co,faqTitle:vo,faqQuestion1:Mo,faqAnswer1:Po,faqQuestion2:Oo,faqAnswer2:bo,faqQuestion3:ko,faqAnswer3:wo,faqQuestion4:yo,faqAnswer4:To,faqQuestion5:xo,faqAnswer5:zo,downloadTitle:$o,downloadDescription:So,downloadButton:qo,contactTitle:Ao,contactFormTitle:jo,contactEmailLabel:Fo,contactEmailPlaceholder:Do,contactMessageLabel:Eo,contactMessagePlaceholder:Bo,contactSubmitButton:Io,findUsTitle:Ho,address:Uo,openingHours:Wo,openingHoursWeekdays:Lo,openingHoursFriday:No,writeToUs:Ro,email:Vo,orCallUs:Qo,phone1:Ko,phone2:Go,followUs:Yo};class x{appSlideTemplate=w("unknown");template=h(un);static ɵfac=function(t){return new(t||x)};static ɵdir=hn({type:x,selectors:[["","appSlideTemplate",""]],inputs:{appSlideTemplate:[1,"appSlideTemplate"]}})}const Jo=["swiper"],Xo=()=>({});function ni(o,n){o&1&&yn(0)}function ti(o,n){if(o&1&&(bn(0),F(1,ni,1,0,"ng-container",6),kn()),o&2){const t=n.ngIf,e=m().$implicit;i(),d("ngTemplateOutlet",t)("ngTemplateOutletContext",e.context||wn(2,Xo))}}function ei(o,n){if(o&1&&(r(0,"swiper-slide"),F(1,ti,2,3,"ng-container",5),a()),o&2){const t=n.$implicit,e=m();i(),d("ngIf",e.getTemplate(t.template))}}function oi(o,n){if(o&1){const t=Y();r(0,"button",7),y("click",function(){E(t);const l=m();return B(l.prev())}),p(1,"app-icon",8),a(),r(2,"button",9),y("click",function(){E(t);const l=m();return B(l.next())}),p(3,"app-icon",10),a()}}function ii(o,n){if(o&1){const t=Y();r(0,"button",12),y("click",function(){const l=E(t).index,g=m(2);return B(g.goTo(l))}),r(1,"span",13),s(2),a()()}if(o&2){const t=n.index,e=m(2);pn("active",t===e.activeIndex()),i(2),U("Go to slide ",t+1)}}function ri(o,n){if(o&1&&(r(0,"div",4),F(1,ii,3,3,"button",11),a()),o&2){const t=m();i(),d("ngForOf",t.slides())}}class I{slides=w([]);showNavigation=w(!0);activeIndex=v(0);swiper=_n("swiper");templates=fn(x);#t=new Map;ngAfterContentInit(){this.#t.clear(),this.templates().forEach(t=>this.#t.set(t.appSlideTemplate(),t.template));const n=this.swiper().nativeElement;n.initialize(),n.swiper&&(n.swiper.params.effect="fade",n.swiper.params.fadeEffect={crossFade:!0},n.swiper.update()),n.swiper.on("slideChange",()=>{this.activeIndex.set(n.swiper.activeIndex)})}getTemplate(n){return this.#t.get(n)??null}prev(){this.swiper().nativeElement.swiper.slidePrev()}next(){this.swiper().nativeElement.swiper.slideNext()}goTo(n){this.swiper().nativeElement.swiper.slideTo(n)}static ɵfac=function(t){return new(t||I)};static ɵcmp=K({type:I,selectors:[["app-slider"]],contentQueries:function(t,e,l){t&1&&On(l,e.templates,x,4),t&2&&on()},viewQuery:function(t,e){t&1&&Pn(e.swiper,Jo,5),t&2&&on()},inputs:{slides:[1,"slides"],showNavigation:[1,"showNavigation"]},decls:6,vars:3,consts:[["swiper",""],[1,"main-slider"],["effect","fade","speed","200"],[4,"ngFor","ngForOf"],[1,"pagination"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["type","button",1,"nav","prev",3,"click"],["icon","previous","size","2.25rem","color","#275800"],["type","button",1,"nav","next",3,"click"],["icon","next","size","2.25rem","color","#275800"],["type","button",3,"active","click",4,"ngFor","ngForOf"],["type","button",3,"click"],[1,"sr-only"]],template:function(t,e){t&1&&(r(0,"div",1)(1,"swiper-container",2,0),F(3,ei,2,1,"swiper-slide",3),a(),O(4,oi,4,0),O(5,ri,2,1,"div",4),a()),t&2&&(i(3),d("ngForOf",e.slides()),i(),b(e.showNavigation()?4:-1),i(),b(e.slides().length>1?5:-1))},dependencies:[G,Cn,vn,Mn,mn],styles:[`[_nghost-%COMP%] {
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
}`]})}const ai=(o,n)=>n.id;function si(o,n){if(o&1&&(M(0,"h2",1),s(1),P()),o&2){const t=m();i(),c(t.title())}}function ci(o,n){o&1&&(M(0,"span",8),s(1,"+"),P())}function li(o,n){if(o&1&&(M(0,"div",9),s(1),P()),o&2){const t=m().$implicit,e=m();zn("id","accordion-content-"+t.id),dn("aria-hidden",!e.isOpen(t.id)),i(),U(" ",t.answer," ")}}function gi(o,n){if(o&1){const t=Y();M(0,"div",4)(1,"button",5),xn("click",function(){const l=E(t).$implicit,g=m();return B(g.toggleItem(l.id))}),M(2,"span",6),s(3),P(),M(4,"span",7),O(5,ci,2,0,"span",8),P()(),O(6,li,2,3,"div",9),P()}if(o&2){const t=n.$implicit,e=m();pn("open",e.isOpen(t.id)),i(),dn("aria-expanded",e.isOpen(t.id))("aria-controls","accordion-content-"+t.id),i(2),c(t.question),i(2),b(e.isOpen(t.id)?-1:5),i(),b(e.isOpen(t.id)?6:-1)}}class H{title=w(void 0);items=w.required();allowMultiple=w(!1);openItems=v(new Set);constructor(){Tn(()=>{const n=this.items(),t=this.openItems();n.length>0&&t.size===0&&this.openItems.set(new Set([n[0].id]))})}toggleItem(n){const t=this.openItems(),e=new Set(t);e.has(n)?e.delete(n):(this.allowMultiple()||e.clear(),e.add(n)),this.openItems.set(e)}isOpen(n){return this.openItems().has(n)}static ɵfac=function(t){return new(t||H)};static ɵcmp=K({type:H,selectors:[["app-accordion"]],inputs:{title:[1,"title"],items:[1,"items"],allowMultiple:[1,"allowMultiple"]},decls:5,vars:1,consts:[[1,"accordion"],[1,"accordion-title"],[1,"accordion-items"],[1,"accordion-item",3,"open"],[1,"accordion-item"],["type","button",1,"accordion-question",3,"click"],[1,"question-text"],[1,"accordion-indicator"],[1,"indicator-plus"],[1,"accordion-answer",3,"id"]],template:function(t,e){t&1&&(M(0,"div",0),O(1,si,2,1,"h2",1),M(2,"div",2),z(3,gi,7,7,"div",3,ai),P()()),t&2&&(i(),b(e.title()?1:-1),i(2),$(e.items()))},dependencies:[G],styles:[`[_nghost-%COMP%]   .accordion[_ngcontent-%COMP%] {
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
}`],changeDetection:0})}function pi(o){return{id:o.id,order:o.order,enabled:o.enabled,question:o.question,answer:o.answer}}const an=nn.faq.map(pi);class S{#t=h(Z);#n=h(X);#e(){const n=this.#n.wpApiUrl;return n?n.replace(/\/$/,""):""}getFaq(){return this.#n.wpApiUrl?.trim()?this.#t.get(`${this.#e()}/wp-json/autoskola/v1/faq`).pipe(W(n=>({faq:n,fromMock:!1})),J(()=>T({faq:an,fromMock:!0}))):T({faq:an,fromMock:!0})}static ɵfac=function(t){return new(t||S)};static ɵprov=L({token:S,factory:S.ɵfac,providedIn:"root"})}class q{#t=h(S);#n=v([]);#e=v(!1);#o=v(!1);apiCalled=this.#e.asReadonly();fromMock=this.#o.asReadonly();constructor(){this.#t.getFaq().pipe(Q(1)).subscribe(n=>{this.#e.set(!0),this.#o.set(n.fromMock),this.#n.set(n.faq)})}faq=u(()=>this.#n().filter(n=>n.enabled).sort((n,t)=>n.order-t.order));faqAccordionItems=u(()=>this.faq().map(n=>({id:n.id,question:n.question,answer:n.answer})));getFaqItem(n){return this.#n().find(t=>t.id===n)}setFaq(n){this.#n.set(n)}static ɵfac=function(t){return new(t||q)};static ɵprov=L({token:q,factory:q.ɵfac,providedIn:"root"})}const sn=nn,cn=Array.isArray(sn.slides)?sn.slides:[];class A{#t=h(Z);#n=h(X);#e(){const n=this.#n.wpApiUrl;return n?n.replace(/\/$/,""):""}getSlides(){return this.#n.wpApiUrl?.trim()?this.#t.get(`${this.#e()}/wp-json/autoskola/v1/slides`).pipe(W(n=>({slides:n,fromMock:!1})),J(()=>T({slides:cn,fromMock:!0}))):T({slides:cn,fromMock:!0})}static ɵfac=function(t){return new(t||A)};static ɵprov=L({token:A,factory:A.ɵfac,providedIn:"root"})}const ln=nn,gn=Array.isArray(ln.reviews)?ln.reviews:[];class j{#t=h(Z);#n=h(X);#e(){const n=this.#n.wpApiUrl;return n?n.replace(/\/$/,""):""}getReviews(){return this.#n.wpApiUrl?.trim()?this.#t.get(`${this.#e()}/wp-json/autoskola/v1/reviews`).pipe(W(n=>({reviews:(n??[]).filter(t=>t.enabled),fromMock:!1})),J(()=>T({reviews:gn,fromMock:!0}))):T({reviews:gn,fromMock:!0})}static ɵfac=function(t){return new(t||j)};static ɵprov=L({token:j,factory:j.ɵfac,providedIn:"root"})}const di=(o,n)=>["/",o,n],V=(o,n)=>n.id;function mi(o,n){if(o&1&&(r(0,"div",60),p(1,"app-image",61),r(2,"div",62),p(3,"h1",63)(4,"p",64),r(5,"div",65),p(6,"app-button",66),a()()()),o&2){const t=n.image,e=n.imageAvif,l=n.imageWebp,g=n.isFirst,C=n.title,k=n.subtitle,_=n.buttonText;i(),d("src",t)("avif",e??"")("webp",l??"")("alt",C)("fetchpriority",g?"high":null),i(2),d("innerHTML",C,rn),i(),d("innerHTML",k,rn),i(2),d("text",_)("rounded",!0)}}function ui(o,n){if(o&1&&s(0),o&2){const t=m().$implicit;U(" ",t.label," ")}}function hi(o,n){if(o&1&&s(0),o&2){const t=m().$implicit;U(" ",t.content," ")}}function _i(o,n){if(o&1&&(r(0,"span"),s(1),a()),o&2){const t=m().$implicit;En(t.className),i(),c(t.content)}}function fi(o,n){if(o&1&&O(0,hi,1,1)(1,_i,2,3,"span",71),o&2){const t=n.$implicit;b(t.type==="text"?0:t.type==="tag"?1:-1)}}function Ci(o,n){if(o&1&&z(0,fi,2,1,null,null,Dn),o&2){const t=m().$implicit;$(t.label.parts)}}function vi(o,n){if(o&1&&(r(0,"div",5)(1,"div",67),p(2,"app-image",68),a(),r(3,"div",69),O(4,ui,1,1)(5,Ci,2,0),a(),r(6,"a",70),s(7),a()()),o&2){const t=n.$implicit,e=m();i(2),d("source",t)("alt",typeof t.label=="string"?t.label:t.label.raw),i(2),b(typeof t.label=="string"?4:5),i(3),c(e.t("interested"))}}function Mi(o,n){if(o&1&&(r(0,"div",9)(1,"p",72),s(2),a(),r(3,"div",73),s(4),a()()),o&2){const t=n.$implicit;i(2),c(t.text),i(2),c(t.author)}}function Pi(o,n){if(o&1&&(r(0,"div",13)(1,"div",74),p(2,"app-image",68),a(),r(3,"h3",75),s(4),a(),r(5,"p",76),s(6),a()()),o&2){const t=n.$implicit,e=m();i(2),d("source",t)("alt",e.toStr(t.title)),i(2),c(t.title),i(2),c(t.description)}}const Oi=["heroTitle","heroTitle2","heroTitle3","heroTitle4"],bi=["heroSubtitle","heroSubtitle2","heroSubtitle3","heroSubtitle4"],ki=["heroButton","heroButton2","heroButton3","heroButton4"];class D extends Bn{route=h($n);faqService=h(q);slidesResource=h(A);reviewsResource=h(j);t=this.registerTranslations({sk:Me,en:Zo});applicationPath=u(()=>this.languageService.getRoutePath("ziadost",this.languageService.lang()));lang=this.languageService.lang;showPromoSlide=R(this.route.data.pipe(W(n=>!!n.showPromoSlide)),{initialValue:!1});slidesResponse=R(this.slidesResource.getSlides().pipe(Q(1)),{initialValue:null});reviewsResponse=R(this.reviewsResource.getReviews().pipe(Q(1)),{initialValue:null});slides=u(()=>{const l=(this.slidesResponse()?.slides??[]).filter(g=>g.enabled).map((g,C)=>this.wpSlideToDefinition(g,C));return this.showPromoSlide()&&l.length<4&&l.push({template:"hero-slide",context:{image:f("/images/sites/home/slide1.png"),isFirst:!1,title:this.t("heroTitle4"),subtitle:this.t("heroSubtitle4"),buttonText:this.t("heroButton4")}}),l});toAbsoluteUrl(n){return n.startsWith("http")||n.startsWith("//")?n:f(n.startsWith("/")?n:"/"+n)}wpSlideToDefinition(n,t){const e=this.toAbsoluteUrl(n.image),l=n.imageAvif?this.toAbsoluteUrl(n.imageAvif):"",g=n.imageWebp?this.toAbsoluteUrl(n.imageWebp):"",C=Oi[Math.min(t,3)],k=bi[Math.min(t,3)],_=ki[Math.min(t,3)];return{template:n.template,context:{image:e,imageAvif:l,imageWebp:g,isFirst:n.isFirst,title:n.title?.trim()?n.title:this.t(C),subtitle:n.subtitle?.trim()?n.subtitle:this.t(k),buttonText:n.buttonText?.trim()?n.buttonText:this.t(_)}}}groups=u(()=>[{id:"a",label:this.t("groupA",{strong:"group-letter"}),image:f("/images/sites/home/groups/skupina-a.png")},{id:"b",label:this.t("groupB",{strong:"group-letter"}),image:f("/images/sites/home/groups/skupina-b.png")},{id:"c",label:this.t("groupC",{strong:"group-letter"}),image:f("/images/sites/home/groups/skupina-c.png")},{id:"d",label:this.t("groupD",{strong:"group-letter"}),image:f("/images/sites/home/groups/skupina-d.png")},{id:"t",label:this.t("groupT",{strong:"group-letter"}),image:f("/images/sites/home/groups/skupina-t.png")},{id:"e",label:this.t("groupE",{strong:"group-letter"}),image:f("/images/sites/home/groups/skupina-e.png")}]);testimonials=u(()=>this.reviewsResponse()?.reviews??[]);aboutItems=u(()=>[{id:"experiences",image:f("/images/sites/home/about/experiences.png"),title:this.t("aboutExperiencesTitle"),description:this.t("aboutExperiencesDescription")},{id:"tutors",image:f("/images/sites/home/about/tutors.png"),title:this.t("aboutTutorsTitle"),description:this.t("aboutTutorsDescription")},{id:"cars",image:f("/images/sites/home/about/cars.png"),title:this.t("aboutCarsTitle"),description:this.t("aboutCarsDescription")}]);faqItems=this.faqService.faqAccordionItems;contactEmail=v("");contactMessage=v("");faqTitleText=u(()=>String(this.t("faqTitle")));downloadButtonText=u(()=>String(this.t("downloadButton")));contactEmailLabelText=u(()=>String(this.t("contactEmailLabel")));contactEmailPlaceholderText=u(()=>String(this.t("contactEmailPlaceholder")));contactMessageLabelText=u(()=>String(this.t("contactMessageLabel")));contactMessagePlaceholderText=u(()=>String(this.t("contactMessagePlaceholder")));contactSubmitButtonText=u(()=>String(this.t("contactSubmitButton")));toStr(n){return String(n??"")}onEmailChange(n){this.contactEmail.set(n)}onMessageChange(n){this.contactMessage.set(n)}onSubmitForm(){console.log("Form submitted",{email:this.contactEmail(),message:this.contactMessage()})}static ɵfac=(()=>{let n;return function(e){return(n||(n=Sn(D)))(e||D)}})();static ɵcmp=K({type:D,selectors:[["app-home"]],features:[jn],decls:94,vars:39,consts:[[3,"slides","showNavigation"],["appSlideTemplate","hero-slide"],[1,"driver-training-section"],[1,"driver-training-title"],[1,"groups-grid"],[1,"group-item"],["id","aboutUs",1,"testimonials-section"],[1,"testimonials-title"],[1,"testimonials-grid"],[1,"testimonial-card"],[1,"about-section"],[1,"about-title"],[1,"about-grid"],[1,"about-item"],["id","contact",1,"help-section"],[1,"help-title"],[1,"help-content"],[1,"help-left"],[1,"faq-section"],[3,"title","items"],[1,"download-section"],[1,"download-title"],[1,"download-description"],[1,"application-link",3,"routerLink"],["backgroundColor","#000",3,"text","rounded"],[1,"help-right"],[1,"contact-title"],[1,"contact-divider"],[1,"contact-form-section"],[1,"contact-form-title"],[3,"valueChanged","label","placeholder","type"],[3,"valueChanged","label","placeholder"],["backgroundColor","#000",3,"click","text","rounded"],[1,"find-us-section"],[1,"find-us-title"],[1,"find-us-divider"],[1,"address-info"],[1,"address-item"],["icon","location-pin","color","#0066cc","size","1.5rem"],[1,"address-text"],[1,"opening-hours"],[1,"opening-hours-label"],[1,"opening-hours-time"],[1,"contact-info-section"],[1,"contact-info-row"],[1,"contact-info-item"],[1,"contact-info-label"],[1,"contact-info-divider"],[1,"contact-info-value"],["icon","envelope","color","#0066cc","size","1.5rem"],[1,"contact-link",3,"href"],["icon","phone","color","#0066cc","size","1.5rem"],[1,"social-section"],[1,"social-title"],[1,"social-divider"],[1,"social-icons"],["href","#",1,"social-icon"],["icon","facebook","color","#000","size","1.5rem"],["icon","instagram","color","#000","size","1.5rem"],["icon","play","color","#000","size","1.5rem"],[1,"hero-slide"],["loading","eager",3,"src","avif","webp","alt","fetchpriority"],[1,"hero-content"],[1,"hero-title",3,"innerHTML"],[1,"hero-subtitle",3,"innerHTML"],[1,"hero-button"],["backgroundColor","#dc2626",3,"text","rounded"],[1,"group-image-wrapper"],[3,"source","alt"],[1,"group-label"],["href","#",1,"group-link"],[3,"class"],[1,"testimonial-text"],[1,"testimonial-author"],[1,"about-image-wrapper"],[1,"about-item-title"],[1,"about-item-description"]],template:function(t,e){t&1&&(r(0,"app-site-wrapper")(1,"app-slider",0),F(2,mi,7,9,"ng-template",1),a(),r(3,"section",2)(4,"h2",3),s(5),a(),r(6,"div",4),z(7,vi,8,4,"div",5,V),a()(),r(9,"section",6)(10,"h2",7),s(11),a(),r(12,"div",8),z(13,Mi,5,2,"div",9,V),a()(),r(15,"div",10)(16,"h2",11),s(17),a(),r(18,"div",12),z(19,Pi,7,4,"div",13,V),a()(),r(21,"section",14)(22,"h2",15),s(23),a(),r(24,"div",16)(25,"div",17)(26,"div",18),p(27,"app-accordion",19),a(),r(28,"div",20)(29,"h3",21),s(30),a(),r(31,"p",22),s(32),a(),r(33,"a",23),p(34,"app-button",24),a()()(),r(35,"div",25)(36,"h3",26),s(37),a(),p(38,"div",27),r(39,"div",28)(40,"h4",29),s(41),a(),r(42,"app-textfield",30),y("valueChanged",function(g){return e.onEmailChange(g)}),a(),r(43,"app-textarea",31),y("valueChanged",function(g){return e.onMessageChange(g)}),a(),r(44,"app-button",32),y("click",function(){return e.onSubmitForm()}),a()(),r(45,"div",33)(46,"h4",34),s(47),a(),p(48,"div",35),r(49,"div",36)(50,"div",37),p(51,"app-icon",38),r(52,"span",39),s(53),a()(),r(54,"div",40)(55,"p",41),s(56),a(),r(57,"p",42),s(58),a(),r(59,"p",42),s(60),a()()()(),r(61,"div",43)(62,"div",44)(63,"div",45)(64,"h5",46),s(65),a(),p(66,"div",47),r(67,"div",48),p(68,"app-icon",49),r(69,"a",50),s(70),a()()(),r(71,"div",45)(72,"h5",46),s(73),a(),p(74,"div",47),r(75,"div",48),p(76,"app-icon",51),r(77,"a",50),s(78),a()(),r(79,"div",48),p(80,"app-icon",51),r(81,"a",50),s(82),a()()()()(),r(83,"div",52)(84,"h4",53),s(85),a(),p(86,"div",54),r(87,"div",55)(88,"a",56),p(89,"app-icon",57),a(),r(90,"a",56),p(91,"app-icon",58),a(),r(92,"a",56),p(93,"app-icon",59),a()()()()()()()),t&2&&(i(),d("slides",e.slides())("showNavigation",!1),i(4),c(e.t("driverTrainingTitle")),i(2),$(e.groups()),i(4),c(e.t("testimonialsTitle")),i(2),$(e.testimonials()),i(4),c(e.t("aboutTitle")),i(2),$(e.aboutItems()),i(4),c(e.t("helpTitle")),i(4),d("title",e.faqTitleText())("items",e.faqItems()),i(3),c(e.t("downloadTitle")),i(2),c(e.t("downloadDescription")),i(),d("routerLink",Fn(36,di,e.lang(),e.applicationPath())),i(),d("text",e.downloadButtonText())("rounded",!0),i(3),c(e.t("contactTitle")),i(4),c(e.t("contactFormTitle")),i(),d("label",e.contactEmailLabelText())("placeholder",e.contactEmailPlaceholderText())("type","email"),i(),d("label",e.contactMessageLabelText())("placeholder",e.contactMessagePlaceholderText()),i(),d("text",e.contactSubmitButtonText())("rounded",!0),i(3),c(e.t("findUsTitle")),i(6),c(e.t("address")),i(3),c(e.t("openingHours")),i(2),c(e.t("openingHoursWeekdays")),i(2),c(e.t("openingHoursFriday")),i(5),c(e.t("writeToUs")),i(4),d("href","mailto:"+e.t("email"),N),i(),c(e.t("email")),i(3),c(e.t("orCallUs")),i(4),d("href","tel:"+e.t("phone1"),N),i(),c(e.t("phone1")),i(3),d("href","tel:"+e.t("phone2"),N),i(),c(e.t("phone2")),i(3),c(e.t("followUs")))},dependencies:[G,qn,An,In,I,x,Hn,H,Wn,Ln,mn,Un],styles:[`[_nghost-%COMP%]     app-slider {
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
}`],changeDetection:0})}export{D as HomeComponent};
