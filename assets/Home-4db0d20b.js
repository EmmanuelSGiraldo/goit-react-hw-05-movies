import{r as s,j as t,L as f}from"./index-d6bce351.js";import{f as m}from"./API-501496fd.js";import{n as u}from"./notiflix-aio-3.2.6.min-ea3e28f0.js";import{M as x}from"./MoviesList-3e41e3ba.js";const p="_title_mxwel_1",d={title:p},M=()=>{const[i,a]=s.useState([]),[o,n]=s.useState(null),[l,r]=s.useState(!1);return s.useEffect(()=>{c();async function c(){r(!0);try{const e=await m();a(e)}catch(e){n(e)}finally{r(!1)}}},[]),t.jsxs("main",{children:[o&&u.Notify.failure(`${o.message}`),t.jsx("h1",{className:d.title,children:"Trending today"}),l&&t.jsx(f,{}),t.jsx(x,{movies:i})]})};export{M as default};