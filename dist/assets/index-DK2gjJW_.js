import{p as e,L as t,j as r,r as n,b as s,O as o,c as i,d as a,E as c,R as l}from"./employeesList-OrCHLc1k.js";import{d,r as m,b as p}from"./datepicker-By715N7n.js";import{H as u}from"./homepage-ulEZrmmd.js";import"./select-eJTc__Li.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();var f={},x=d;f.createRoot=x.createRoot,f.hydrateRoot=x.hydrateRoot;const j=e.h1`
  font-size: 2rem;
  color: #007bff;
  margin: 0;
  padding: 0;
  font-weight: bold;
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`,h=e(t)`
  text-decoration: none;
`,g=()=>r.jsx(h,{to:n.HOME,children:r.jsx(j,{children:"HRnet"})}),y=e.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
`;function b(){return r.jsxs(y,{children:[r.jsx(g,{}),r.jsx(s,{path:n.EMPLOYEES,label:"View Current Employees"})]})}const E=e.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;function v(){return r.jsxs("div",{className:"App",children:[r.jsx(b,{}),r.jsx("main",{children:r.jsx(E,{children:r.jsx(o,{})})})]})}e.main`
  background-color: #12002b;
  flex: 1;
`;const L=i([{element:r.jsx(v,{}),errorElement:r.jsx("div",{children:"Failed to load page"}),children:[{path:n.HOME,element:r.jsx(m.Suspense,{fallback:r.jsx("div",{children:"Loading..."}),children:r.jsx(u,{})})},{path:n.EMPLOYEES,element:r.jsx(m.Suspense,{fallback:r.jsx("div",{children:"Loading..."}),children:r.jsx(a,{})})}]}]);function O(){const{data:e}=m.useContext(c),[t,n]=m.useState(e),s=m.useCallback((e=>n(e)),[]),o=m.useMemo((()=>({data:t,update:s})),[t,s]);return r.jsx(c.Provider,{value:o,children:r.jsx(l,{router:L})})}f.createRoot(document.getElementById("root")).render(r.jsx(p.StrictMode,{children:r.jsx(O,{})}));
