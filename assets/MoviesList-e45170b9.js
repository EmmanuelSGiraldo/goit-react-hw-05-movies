import{n as r,a as p,b as x,j as t}from"./index-c6bbf3d8.js";import{P as a}from"./index-a5709a24.js";const d=r.li`
    flex-basis: calc((100% - 3 * (30px)) / 4); 
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.08), 0px 3px 3px rgba(0, 0, 0, 0.02), 1px 3px 4px rgba(0, 0, 0, 0.08);

    transition: box-shadow var(--transition), transform var(--transition);
    &:hover,
    &:focus {
        box-shadow: var(--card-shadow);
        transform: scale(1.02);
    }
`,c=r(p)`
    text-decoration: none;
`,l=r.img`
    width: 100%;
    display: block;
    object-fit: cover;
    border-radius: 5px;

    transition: var(--transition);
    &:hover,
    &:focus {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
`,m=r.p`
    height: 36px;
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
`,g="https://motivatevalmorgan.com/wp-content/uploads/2016/06/default-movie.jpg",n=({id:i,url:o,title:s})=>{const e=x();return t.jsx(d,{children:t.jsxs(c,{to:`/movies/${i}`,state:{from:e},children:[t.jsx(l,{src:o?`https://image.tmdb.org/t/p/w342/${o}`:g,alt:s,loading:"lazy"}),t.jsx(m,{children:s})]})})};n.propTypes={id:a.number.isRequired,title:a.string.isRequired,url:a.string};const f=r.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    margin-bottom: 30px;
`,b=({movies:i})=>t.jsx(f,{children:i.map(({id:o,title:s,poster_path:e})=>t.jsx(n,{id:o,title:s,url:e},o))});b.propTypes={movies:a.array};export{b as M};
