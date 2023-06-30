import{j as e,N as v,r as o,L as u,O as _,n as k,b as L,c as I,a as b,d as w}from"./index-37a330ad.js";import{b as y}from"./API-501496fd.js";import{P as s}from"./index-eb546f6a.js";const A="_Wrap_sf6rt_1",N="_Image_sf6rt_8",S="_Info_sf6rt_13",E="_AddInfo_sf6rt_30",M="_AddLink_sf6rt_45",t={Wrap:A,Image:N,Info:S,AddInfo:E,AddLink:M},D="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",g=({info:f})=>{const{title:a,poster_path:i,vote_average:c,overview:p,genres:l}=f,d=i?`https://image.tmdb.org/t/p/w342/${i}`:D,h=n=>n?n.map(r=>r.name).join(", "):null,m=Math.round(c*10);return e.jsxs("main",{children:[e.jsxs("div",{className:t.Wrap,children:[e.jsx("img",{className:t.Image,src:d,alt:a,width:342}),e.jsxs("div",{className:t.Info,children:[e.jsx("h1",{children:a}),e.jsxs("p",{children:["User Score: ",m,"%"]}),e.jsx("h3",{children:"Overview"}),e.jsx("p",{children:p}),e.jsx("h3",{children:"Genres"}),e.jsx("p",{children:h(l)})]})]}),e.jsxs("div",{className:t.AddInfo,children:[e.jsx("h3",{children:"Additional information"}),e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx(v,{className:t.AddLink,to:"cast",children:"Cast"})}),e.jsx("li",{children:e.jsx(v,{className:t.AddLink,to:"reviews",children:"Reviews"})})]}),e.jsx(o.Suspense,{fallback:e.jsx(u,{}),children:e.jsx(_,{})})]})]})};g.propTypes={info:s.shape({title:s.string,poster_path:s.string,vote_average:s.number,overview:s.string,genres:s.arrayOf(s.shape({name:s.string}))})};const O=k(L)`
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
    `,U=()=>{var n;const[f,a]=o.useState({}),[i,c]=o.useState(null),[p,l]=o.useState(!1),{movieId:d}=I(),h=b(),m=o.useRef(((n=h.state)==null?void 0:n.from)??"/");return o.useEffect(()=>{x();async function x(){l(!0);try{const r=await y(d);if(r.length===0){const j=new Error("Sorry, there is no info about movie you are searching for.");c(j);return}a(r)}catch(r){console.log("error",r),c(r)}finally{l(!1)}}},[d]),e.jsxs(e.Fragment,{children:[i&&e.jsx(w,{to:"/404"}),e.jsx(O,{to:m.current,children:"Back"}),p&&e.jsx(u,{}),e.jsx(g,{info:f})]})};export{U as default};
