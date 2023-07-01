import{r as t,j as e,L as c}from"./index-c709e6f0.js";import{f as p}from"./API-501496fd.js";import{n as l}from"./notiflix-aio-3.2.6.min-beb793e2.js";import{M as x}from"./MoviesList-5b04d536.js";import{n as u}from"./emotion-styled.browser.esm-e8d9a655.js";import"./index-87c44293.js";const d=u.h1`
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 15px;
    font-size: 20px;
`,E=()=>{const[i,n]=t.useState([]),[o,a]=t.useState(null),[f,r]=t.useState(!1);return t.useEffect(()=>{m();async function m(){r(!0);try{const s=await p();n(s)}catch(s){a(s)}finally{r(!1)}}},[]),e.jsxs("main",{children:[o&&l.Notify.failure(`${o.message}`),e.jsx(d,{children:"Trending today"}),f&&e.jsx(c,{}),e.jsx(x,{movies:i})]})};export{E as default};
