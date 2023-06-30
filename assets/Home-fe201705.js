import{n as m,r as t,j as e,L as l}from"./index-c6bbf3d8.js";import{f as p}from"./API-501496fd.js";import{n as x}from"./notiflix-aio-3.2.6.min-255e75a6.js";import{M as u}from"./MoviesList-e45170b9.js";import"./index-a5709a24.js";const d=m.h1`
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-size: 20px;
`,M=()=>{const[i,n]=t.useState([]),[o,a]=t.useState(null),[f,r]=t.useState(!1);return t.useEffect(()=>{c();async function c(){r(!0);try{const s=await p();n(s)}catch(s){a(s)}finally{r(!1)}}},[]),e.jsxs("main",{children:[o&&x.Notify.failure(`${o.message}`),e.jsx(d,{children:"Trending today"}),f&&e.jsx(l,{}),e.jsx(u,{movies:i})]})};export{M as default};
