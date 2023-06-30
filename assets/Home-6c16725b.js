import{n as m,r as t,j as e,L as l}from"./index-37a330ad.js";import{f as p}from"./API-501496fd.js";import{n as x}from"./notiflix-aio-3.2.6.min-af1f91f8.js";import{M as u}from"./MoviesList-e0ae96f1.js";import"./index-eb546f6a.js";const d=m.h1`
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-size: 20px;
`,M=()=>{const[i,n]=t.useState([]),[o,a]=t.useState(null),[f,r]=t.useState(!1);return t.useEffect(()=>{c();async function c(){r(!0);try{const s=await p();n(s)}catch(s){a(s)}finally{r(!1)}}},[]),e.jsxs("main",{children:[o&&x.Notify.failure(`${o.message}`),e.jsx(d,{children:"Trending today"}),f&&e.jsx(l,{}),e.jsx(u,{movies:i})]})};export{M as default};
