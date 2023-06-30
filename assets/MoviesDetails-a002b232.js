import{n,a as u,j as o,r,L as v,O as k,c as y,b as w,N as L}from"./index-c6bbf3d8.js";import{b as S}from"./API-501496fd.js";import{P as e}from"./index-a5709a24.js";const E=n.div`
    display: flex;
    gap: 20px;
    // justify-content: space-between;
    // align-items: center;
    padding-bottom: 26px;
    border-bottom: 1px solid black;
`,M=n.img`
    display: block;
    border-radius: 5px;
`,I=n.div`
    display: flex;
    flex-direction: column;
    gap: 15px;

    > h1 {
        font-size: 30px;
    }

    > p {
        max-width: 800px;
        font-size: 16px;
        color: var(--primary-text-color);
    }

    > h3 {
        font-size: 20px;
    }
`,_=n.div`
margin-top: 15px;
text-align: center;

> h3 {
    margin-bottom: 15px;
}
> ul {
    margin-top: 10px;
    display: flex;
    gap: 15px;
    
    justify-content: center;
    align-items: center;
}
`,m=n(u)`
text-decoration: none;
    display: block;
    margin-bottom: 15px;
    outline: 1px solid var(--accent-color);
    // background-color: var(--accent-color);
    border-radius: 5px;
    width: 60px;
    padding: 4px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    color: black;

    transition: transform var(--transition), background-color var(--transition);
    
    &:hover,
    &:focus {
        transform: scale(1.05);
        background-color: var(--accent-color);
        // color: #ffffff;
    }
`,z="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",j=({info:p})=>{const{title:a,poster_path:i,vote_average:c,overview:x,genres:l}=p,d=i?`https://image.tmdb.org/t/p/w342/${i}`:z,f=s=>{if(s)return s.map(t=>t.name).join(", ")},h=Math.round(c*10);return o.jsxs("main",{children:[o.jsxs(E,{children:[o.jsx(M,{src:d,alt:a,width:342}),o.jsxs(I,{children:[o.jsx("h1",{children:a}),o.jsxs("p",{children:["User Score: ",h,"%"]}),o.jsx("h3",{children:"Overview"}),o.jsx("p",{children:x}),o.jsx("h3",{children:"Genres"}),o.jsx("p",{children:f(l)})]})]}),o.jsxs(_,{children:[o.jsx("h3",{children:"Additional information"}),o.jsxs("ul",{children:[o.jsx("li",{children:o.jsx(m,{to:"cast",children:"Cast"})}),o.jsx("li",{children:o.jsx(m,{to:"reviews",children:"Reviews"})})]}),o.jsx(r.Suspense,{fallback:o.jsx(v,{}),children:o.jsx(k,{})})]})]})};j.propTypes={info:e.shape({title:e.string,poster_path:e.string,vote_average:e.number,overview:e.string,genres:e.arrayOf(e.shape({name:e.string}))})};const D=n(u)`
    text-decoration: none;
    display: block;
    margin-bottom: 20px;
    outline: 1px solid var(--accent-color);
    // background-color: var(--accent-color);
    border-radius: 5px;
    width: 60px;
    padding: 4px;
    text-align: center;
    font-weight: 500;
    font-size: 14px;
    color: black;

    transition: transform var(--transition), background-color var(--transition);
    
    &:hover,
    &:focus {
        transform: scale(1.05);
        // color: #ffffff;
        background-color: var(--accent-color);
    }
    `,P=()=>{var s;const[p,a]=r.useState({}),[i,c]=r.useState(null),[x,l]=r.useState(!1),{movieId:d}=y(),f=w(),h=r.useRef(((s=f.state)==null?void 0:s.from)??"/");return r.useEffect(()=>{g();async function g(){l(!0);try{const t=await S(d);if(t.length===0){const b=new Error("Sorry, there is no info about movie you are searching for.");c(b);return}a(t)}catch(t){console.log("error",t),c(t)}finally{l(!1)}}},[d]),o.jsxs(o.Fragment,{children:[i&&o.jsx(L,{to:"/404"}),o.jsx(D,{to:h.current,children:"Back"}),x&&o.jsx(v,{}),o.jsx(j,{info:p})]})};export{P as default};
