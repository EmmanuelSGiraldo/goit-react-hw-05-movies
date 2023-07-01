import{j as e,N as v,r as t,L as u,O as _,b as k,c as L,a as I,d as b}from"./index-c709e6f0.js";import{b as w}from"./API-501496fd.js";import{P as s}from"./index-87c44293.js";import{n as y}from"./emotion-styled.browser.esm-e8d9a655.js";const A="_Wrap_sf6rt_1",N="_Image_sf6rt_8",S="_Info_sf6rt_13",E="_AddInfo_sf6rt_30",M="_AddLink_sf6rt_45",o={Wrap:A,Image:N,Info:S,AddInfo:E,AddLink:M},D="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",g=({info:f})=>{const{title:a,poster_path:i,vote_average:c,overview:p,genres:l}=f,d=i?`https://image.tmdb.org/t/p/w342/${i}`:D,m=n=>n?n.map(r=>r.name).join(", "):null,h=Math.round(c*10);return e.jsxs("main",{children:[e.jsxs("div",{className:o.Wrap,children:[e.jsx("img",{className:o.Image,src:d,alt:a,width:342}),e.jsxs("div",{className:o.Info,children:[e.jsx("h1",{children:a}),e.jsxs("p",{children:["User Score: ",h,"%"]}),e.jsx("h3",{children:"Overview"}),e.jsx("p",{children:p}),e.jsx("h3",{children:"Genres"}),e.jsx("p",{children:m(l)})]})]}),e.jsxs("div",{className:o.AddInfo,children:[e.jsx("h3",{children:"Additional information"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(v,{className:o.AddLink,to:"cast",children:"Cast"})}),e.jsx("li",{children:e.jsx(v,{className:o.AddLink,to:"reviews",children:"Reviews"})})]}),e.jsx(t.Suspense,{fallback:e.jsx(u,{}),children:e.jsx(_,{})})]})]})};g.propTypes={info:s.shape({title:s.string,poster_path:s.string,vote_average:s.number,overview:s.string,genres:s.arrayOf(s.shape({name:s.string}))})};const O=y(k)`
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
    `,W=()=>{var n;const[f,a]=t.useState({}),[i,c]=t.useState(null),[p,l]=t.useState(!1),{movieId:d}=L(),m=I(),h=t.useRef(((n=m.state)==null?void 0:n.from)??"/");return t.useEffect(()=>{x();async function x(){l(!0);try{const r=await w(d);if(r.length===0){const j=new Error("Sorry, there is no info about movie you are searching for.");c(j);return}a(r)}catch(r){console.log("error",r),c(r)}finally{l(!1)}}},[d]),e.jsxs(e.Fragment,{children:[i&&e.jsx(b,{to:"/404"}),e.jsx(O,{to:h.current,children:"Back"}),p&&e.jsx(u,{}),e.jsx(g,{info:f})]})};export{W as default};
