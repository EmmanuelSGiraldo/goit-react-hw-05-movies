import{R as u,n as p,r as f,j as i,u as E,L as O}from"./index-c6bbf3d8.js";import{n as g}from"./notiflix-aio-3.2.6.min-255e75a6.js";import{a as C}from"./API-501496fd.js";import{M as _}from"./MoviesList-e45170b9.js";import{P as y}from"./index-a5709a24.js";var x={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},v=u.createContext&&u.createContext(x),s=globalThis&&globalThis.__assign||function(){return s=Object.assign||function(e){for(var r,t=1,n=arguments.length;t<n;t++){r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},s.apply(this,arguments)},z=globalThis&&globalThis.__rest||function(e,r){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)r.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(t[n[o]]=e[n[o]]);return t};function b(e){return e&&e.map(function(r,t){return u.createElement(r.tag,s({key:t},r.attr),b(r.child))})}function N(e){return function(r){return u.createElement(P,s({attr:s({},e.attr)},r),b(e.child))}}function P(e){var r=function(t){var n=e.attr,o=e.size,l=e.title,c=z(e,["attr","size","title"]),h=o||t.size||"1em",a;return t.className&&(a=t.className),e.className&&(a=(a?a+" ":"")+e.className),u.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,n,c,{className:a,style:s(s({color:e.color||t.color},t.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),l&&u.createElement("title",null,l),e.children)};return v!==void 0?u.createElement(v.Consumer,null,function(t){return r(t)}):r(x)}function T(e){return N({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"}}]})(e)}const M=p.form`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    background-color: #fff;
    border-radius: 3px;
    overflow: hidden;
    margin-top: 24px;
    margin-bottom: 24px;
    outline: transparent;
    transition: outline var(--transition);

    &:hover,
    & focus {
        outline: 1px solid black;
    }
`,I=p.input`
    outline: transparent;
    height: 35px;
    flex-grow: 1;
    font-size: 16px;
    padding-left: 15px;
    border: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
`,k=p.button`
    display: inline-block;
    width: 36px;
    height: 37px;
    border: 0;
    // opacity: 0.5;
    transition: var(--transition);
    cursor: pointer;
    outline: none;
    background-color: var(--accent-color);

    &:hover,
    & focus {
        // opacity: 1;
    }
`,q=p(T)`
    // width: 20px;
    // height: 20px;
    transition: transform var(--transition);
    &:hover {
        color: #ffffff;
        transform: scale(1.2);
    }
`,S=({value:e,onSubmit:r})=>{const[t,n]=f.useState(e),o=c=>n(c.currentTarget.value),l=c=>{if(c.preventDefault(),t.trim()===""){g.Notify.failure("Sorry, enter something in search line.");return}r(t)};return i.jsxs(M,{onSubmit:l,children:[i.jsx(I,{autoComplete:"off",type:"text",value:t,onChange:o,autoFocus:!0,placeholder:"Search movie"}),i.jsx(k,{type:"submit","aria-label":"Search",children:i.jsx(q,{size:20})})]})};S.propTypes={onSubmit:y.func.isRequired,value:y.string};const F=()=>{const[e,r]=f.useState([]),[t,n]=f.useState(null),[o,l]=f.useState(!1),[c,h]=E(),a=c.get("query")??"";f.useEffect(()=>{a&&m();async function m(){l(!0);try{const d=await C(a);if(d.length===0){const j=new Error("Sorry, there are no movies matching your search query.");n(j);return}r(d)}catch(d){n(d)}finally{l(!1)}}},[a]);const w=m=>{if(m===a){g.Notify.failure("This word has already been searched for. Try another one.");return}h({query:m})};return i.jsxs("main",{children:[t&&g.Notify.failure(`${t.message}`),i.jsx(S,{value:a,onSubmit:w}),o&&i.jsx(O,{}),i.jsx(_,{movies:e})]})};export{F as default};
