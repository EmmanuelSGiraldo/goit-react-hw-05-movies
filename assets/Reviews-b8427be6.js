import{n as c,r as t,c as f,j as e,L as v}from"./index-c6bbf3d8.js";import{d}from"./API-501496fd.js";const h=c.ul`
margin-top: 10px;
    display: flex;
    gap: 15px;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 20px;

> li {
    margin-top: 18px;
    
}
> li > h4 {
    margin-bottom: 5px;
    font-size: 16px;
}

> li > p {
    max-width: 1200px;
    font-size: 16px;
    color: var(--primary-text-color);
}
`,w=c.div`
    margin-top: 18px;
    margin-left: 15px;
    font-size: 16px;
    color: var(--primary-text-color);
`,y=()=>{const[l,p]=t.useState([]),[x,i]=t.useState(null),[m,n]=t.useState(!1),{movieId:a}=f();return t.useEffect(()=>{o();async function o(){n(!0);try{const r=await d(a);if(r.length===0){const s=new Error("Sorry, we do not have any reviews for this movie.");i(s);return}p(r)}catch(r){i(r)}finally{n(!1)}}},[a]),e.jsxs(e.Fragment,{children:[x&&e.jsx(w,{children:"Sorry, we do not have any reviews for this movie."}),m&&e.jsx(v,{}),e.jsx(h,{children:l.map(({id:o,author:r,content:s})=>e.jsxs("li",{children:[e.jsxs("h4",{children:["Author: ",r]}),e.jsx("p",{children:s})]},o))})]})};export{y as default};
