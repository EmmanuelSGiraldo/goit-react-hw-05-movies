import{n as r,r as s,c as f,j as t,L as h}from"./index-c6bbf3d8.js";import{c as m}from"./API-501496fd.js";import{n as b}from"./notiflix-aio-3.2.6.min-255e75a6.js";const u=r.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    list-style: none;

    > li {
        flex-basis: calc((100% - 6 * (10px)) / 7);
        border-radius: 5px;
        background-color: #ffffff; 
        box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 3px 3px rgba(0, 0, 0, 0.02), 1px 3px 4px rgba(0, 0, 0, 0.08);
    }
`;r.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
`;const w=r.img`
    width: 100%;
    // height: 100%;
    height: 304px;
    display: block;
    object-fit: contain;
    border-radius: 5px;

    transition: var(--transition);
    &:hover,
    &:focus {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
`,y=r.p`
font-size: 16px;
font-weight: 500;
padding-top: 12px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
    text-align: center;
`,v=r.p`
// padding-top: 12px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
    text-align: center;
`;r.p`
    // height: 36px;
    font-weight: 500;
    font-size: 14px;
    padding-top: 12px;
    padding-left: 8px;
    padding-right: 8px;
    padding-bottom: 12px;
    color: var(--primary-text-color);
    text-transform: uppercase;
    line-height: 1.16;
    text-align: center;
`;const j="https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg",S=()=>{const[x,c]=s.useState([]),[i,n]=s.useState(null),[g,p]=s.useState(!1),{movieId:d}=f();return s.useEffect(()=>{a();async function a(){p(!0);try{const e=await m(d);if(e.length===0){const o=new Error("Sorry, there is no info about movie you are searching for.");n(o);return}c(e)}catch(e){n(e)}finally{p(!1)}}},[d]),t.jsxs(t.Fragment,{children:[i&&b.Notify.failure(`${i.message}`),g&&t.jsx(h,{}),t.jsx(u,{children:x.map(({id:a,profile_path:e,name:o,character:l})=>t.jsxs("li",{children:[t.jsx(w,{src:e?`https://image.tmdb.org/t/p/w154/${e}`:j,alt:o,width:154}),t.jsx(y,{children:o}),t.jsx(v,{children:l})]},a))})]})};export{S as default};
