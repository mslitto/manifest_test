(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const h="modulepreload",g=function(i,r){return new URL(i,r).href},d={},p=function(r,s,n){let e=Promise.resolve();if(s&&s.length>0){const o=document.getElementsByTagName("link");e=Promise.all(s.map(t=>{if(t=g(t,n),t in d)return;d[t]=!0;const l=t.endsWith(".css"),y=l?'[rel="stylesheet"]':"";if(!!n)for(let a=o.length-1;a>=0;a--){const u=o[a];if(u.href===t&&(!l||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${y}`))return;const c=document.createElement("link");if(c.rel=l?"stylesheet":h,l||(c.as="script",c.crossOrigin=""),c.href=t,document.head.appendChild(c),l)return new Promise((a,u)=>{c.addEventListener("load",a),c.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${t}`)))})}))}return e.then(()=>r()).catch(o=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=o,window.dispatchEvent(t),!t.defaultPrevented)throw o})};history&&history.hasOwnProperty("scrollRestoration")&&(history.scrollRestoration="manual");window.location.hash="";const m=Array.from(document.querySelectorAll("section")),v=Array.from(document.querySelectorAll(".menu li a")),f=()=>{const{scrollTop:i}=document.documentElement;let r=m[0];m.map(n=>{n.offsetTop-500<i&&(r=n)});const s=document.getElementById(`menu-${r.id}`);v.forEach(n=>{n!==s&&(n.className="")}),s.className="active",setTimeout(f,500)},w=async()=>{const i=document.querySelector(".LoadingDots"),r=document.querySelector(".LoadingIndicator"),s=document.querySelector(".LoadingButton"),n=document.querySelector(".Loading"),e=setInterval(()=>{i.innerText==="..."?i.innerText=".":i.innerText=i.innerText+"."},500),{ManifestEngine:o}=await p(()=>import("./ManifestEngine-XmJQdmfB.js"),__vite__mapDeps([]),import.meta.url),t=new o;await t.load(),f(),window.scrollTo(0,0),clearInterval(e),r.parentNode.removeChild(r),s.style.display="block",s.addEventListener("click",()=>{document.body.classList.remove("blocking"),n.parentNode.removeChild(n),t.onResize()})};w();
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}