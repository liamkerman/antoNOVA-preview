import{a as m,bb as g,b as h,C as p,U as f,f as o,y as a,h as s,F as _,k as i,L as r,l as d,W as C}from"./index-CTLD4hIZ.js";import{S as b,a as P}from"./site-wrapper.component-CHtbTwgH.js";const M="Stránka sa nenašla",O="Ľutujeme, ale stránka, ktorú hľadáte, neexistuje.",k="Stránka mohla byť presunutá, zmazaná alebo ste zadali nesprávnu adresu.",x="Späť na domovskú stránku",u={title:M,subtitle:O,description:k,backHome:x},y="Page Not Found",v="Sorry, the page you are looking for does not exist.",z="The page may have been moved, deleted, or you entered an incorrect address.",w="Back to Home",S={title:y,subtitle:v,description:z,backHome:w},j=(l,n)=>["/",l,n];class c{#n=m(g);lang=this.#n.lang;#t={sk:u,en:S};t(n){const t=this.#n.lang();return this.#t[t]?.[n]||u[n]||""}homePath(){return this.#n.getRoutePath("home")}static ɵfac=function(t){return new(t||c)};static ɵcmp=h({type:c,selectors:[["app-not-found"]],decls:14,vars:9,consts:[[1,"not-found-section"],[1,"not-found-content"],[1,"not-found-number"],[1,"not-found-title"],[1,"not-found-subtitle"],[1,"not-found-description"],[1,"not-found-actions"],[1,"home-link",3,"routerLink"],["backgroundColor","#dc2626",3,"text","rounded"]],template:function(t,e){t&1&&(o(0,"app-site-wrapper")(1,"section",0)(2,"div",1)(3,"div",2),a(4,"404"),s(),o(5,"h1",3),a(6),s(),o(7,"p",4),a(8),s(),o(9,"p",5),a(10),s(),o(11,"div",6)(12,"a",7),_(13,"app-button",8),s()()()()()),t&2&&(i(6),r(e.t("title")),i(2),r(e.t("subtitle")),i(2),r(e.t("description")),i(2),d("routerLink",C(6,j,e.lang(),e.homePath())),i(),d("text",e.t("backHome"))("rounded",!0))},dependencies:[p,b,f,P],styles:[`[_nghost-%COMP%]   .not-found-section[_ngcontent-%COMP%] {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  background-color: #f9fafb;
}
[_nghost-%COMP%]   .not-found-content[_ngcontent-%COMP%] {
  text-align: center;
  max-width: 600px;
  width: 100%;
}
[_nghost-%COMP%]   .not-found-number[_ngcontent-%COMP%] {
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
  color: #dc2626;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}
[_nghost-%COMP%]   .not-found-title[_ngcontent-%COMP%] {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin: 0 0 1rem 0;
}
[_nghost-%COMP%]   .not-found-subtitle[_ngcontent-%COMP%] {
  font-size: 1.25rem;
  color: #4b5563;
  margin: 0 0 0.75rem 0;
  font-weight: 500;
}
[_nghost-%COMP%]   .not-found-description[_ngcontent-%COMP%] {
  font-size: 1rem;
  color: #6b7280;
  margin: 0 0 2.5rem 0;
  line-height: 1.6;
}
[_nghost-%COMP%]   .not-found-actions[_ngcontent-%COMP%] {
  display: flex;
  justify-content: center;
  align-items: center;
}
[_nghost-%COMP%]   .home-link[_ngcontent-%COMP%] {
  text-decoration: none;
  display: inline-block;
}
@media (max-width: 768px) {
  [_nghost-%COMP%]   .not-found-number[_ngcontent-%COMP%] {
    font-size: 6rem;
  }
  [_nghost-%COMP%]   .not-found-title[_ngcontent-%COMP%] {
    font-size: 2rem;
  }
  [_nghost-%COMP%]   .not-found-subtitle[_ngcontent-%COMP%] {
    font-size: 1.125rem;
  }
  [_nghost-%COMP%]   .not-found-section[_ngcontent-%COMP%] {
    padding: 3rem 1.5rem;
    min-height: 50vh;
  }
}`],changeDetection:0})}export{c as NotFoundComponent};
