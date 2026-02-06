function i(e){if(!e||!e.startsWith("/")||typeof document>"u")return e;const t=document.querySelector("base")?.getAttribute("href")||"/",n=t.endsWith("/")?t:t+"/",r=e.slice(1);return n+r}export{i};
