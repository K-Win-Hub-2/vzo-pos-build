import{r as io,b as B,j as a,B as P,Q as co,l as A,f as E,a as G,S as lo,U as uo,c as W,g as F,d as H,e as po,v as Q,V as J,E as N,W as M,i as mo,o as fo}from"./index-HH_UOIZx.js";import{I as $,u as vo,c as X}from"./Stack-CJLiOtGk.js";import{B as ho}from"./Button-BxVRjdO9.js";import{a as yo}from"./IconTrash-dlyoLBAc.js";function Y(o,r){return typeof o=="boolean"?o:r.autoContrast}var bo={root:"m_5f75b09e",body:"m_5f6e695e",labelWrapper:"m_d3ea56bb",label:"m_8ee546b8",description:"m_328f68c0",error:"m_8e8a99cc"};const Z=io.forwardRef(({__staticSelector:o,__stylesApiProps:r,className:e,classNames:n,styles:i,unstyled:d,children:t,label:s,description:u,id:y,disabled:R,error:_,size:p,labelPosition:g="left",bodyElement:h="div",labelElement:f="label",variant:S,style:I,vars:C,mod:c,...j},w)=>{const b=B({name:o,props:r,className:e,style:I,classes:bo,classNames:n,styles:i,unstyled:d});return a.jsx(P,{...b("root"),ref:w,__vars:{"--label-fz":co(p),"--label-lh":A(p,"label-lh")},mod:[{"label-position":g},c],variant:S,size:p,...j,children:a.jsxs(P,{component:h,htmlFor:h==="label"?y:void 0,...b("body"),children:[t,a.jsxs("div",{...b("labelWrapper"),"data-disabled":R||void 0,children:[s&&a.jsx(P,{component:f,htmlFor:f==="label"?y:void 0,...b("label"),"data-disabled":R||void 0,children:s}),u&&a.jsx($.Description,{size:p,__inheritStyles:!1,...b("description"),children:u}),_&&typeof _!="boolean"&&a.jsx($.Error,{size:p,__inheritStyles:!1,...b("error"),children:_})]})]})})});Z.displayName="@mantine/core/InlineInput";function xo({children:o,role:r}){const e=vo();return e?a.jsx("div",{role:r,"aria-labelledby":e.labelId,"aria-describedby":e.describedBy,children:o}):a.jsx(a.Fragment,{children:o})}const[Ro,oo]=X(),[_o,go]=X();var eo={card:"m_9dc8ae12"};const Co={withBorder:!0},jo=W((o,{radius:r})=>({card:{"--card-radius":F(r)}})),T=E((o,r)=>{const e=G("RadioCard",Co,o),{classNames:n,className:i,style:d,styles:t,unstyled:s,vars:u,checked:y,mod:R,withBorder:_,value:p,onClick:g,name:h,onKeyDown:f,...S}=e,I=B({name:"RadioCard",classes:eo,props:e,className:i,style:d,classNames:n,styles:t,unstyled:s,vars:u,varsResolver:jo,rootSelector:"card"}),{dir:C}=lo(),c=oo(),j=typeof y=="boolean"?y:(c==null?void 0:c.value)===p||!1,w=h||(c==null?void 0:c.name),b=l=>{if(f==null||f(l),["ArrowDown","ArrowUp","ArrowLeft","ArrowRight"].includes(l.nativeEvent.code)){l.preventDefault();const v=Array.from(document.querySelectorAll(`[role="radio"][name="${w||"__mantine"}"]`)),k=v.findIndex(D=>D===l.target),x=k+1>=v.length?0:k+1,m=k-1<0?v.length-1:k-1;l.nativeEvent.code==="ArrowDown"&&(v[x].focus(),v[x].click()),l.nativeEvent.code==="ArrowUp"&&(v[m].focus(),v[m].click()),l.nativeEvent.code==="ArrowLeft"&&(v[C==="ltr"?m:x].focus(),v[C==="ltr"?m:x].click()),l.nativeEvent.code==="ArrowRight"&&(v[C==="ltr"?x:m].focus(),v[C==="ltr"?x:m].click())}};return a.jsx(_o,{value:{checked:j},children:a.jsx(uo,{ref:r,mod:[{"with-border":_,checked:j},R],...I("card"),...S,role:"radio","aria-checked":j,name:w,onClick:l=>{g==null||g(l),c==null||c.onChange(p||"")},onKeyDown:b})})});T.displayName="@mantine/core/RadioCard";T.classes=eo;const wo={},U=E((o,r)=>{const{value:e,defaultValue:n,onChange:i,size:d,wrapperProps:t,children:s,name:u,readOnly:y,...R}=G("RadioGroup",wo,o),_=H(u),[p,g]=po({value:e,defaultValue:n,finalValue:"",onChange:i}),h=f=>!y&&g(typeof f=="string"?f:f.currentTarget.value);return a.jsx(Ro,{value:{value:p,onChange:h,size:d,name:_},children:a.jsx($.Wrapper,{size:d,ref:r,...t,...R,labelElement:"div",__staticSelector:"RadioGroup",children:a.jsx(xo,{role:"radiogroup",children:s})})})});U.classes=$.Wrapper.classes;U.displayName="@mantine/core/RadioGroup";function ro({size:o,style:r,...e}){return a.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 5 5",style:{width:Q(o),height:Q(o),...r},"aria-hidden":!0,...e,children:a.jsx("circle",{cx:"2.5",cy:"2.5",r:"2.5",fill:"currentColor"})})}var ao={indicator:"m_717d7ff6",icon:"m_3e4da632","indicator--outline":"m_2980836c"};const Io={icon:ro},So=W((o,{radius:r,color:e,size:n,iconColor:i,variant:d,autoContrast:t})=>{const s=J({color:e||o.primaryColor,theme:o}),u=s.isThemeColor&&s.shade===void 0?`var(--mantine-color-${s.color}-outline)`:s.color;return{indicator:{"--radio-size":A(n,"radio-size"),"--radio-radius":r===void 0?void 0:F(r),"--radio-color":d==="outline"?u:N(e,o),"--radio-icon-size":A(n,"radio-icon-size"),"--radio-icon-color":i?N(i,o):Y(t,o)?M({color:e,theme:o,autoContrast:t}):void 0}}}),L=E((o,r)=>{const e=G("RadioIndicator",Io,o),{classNames:n,className:i,style:d,styles:t,unstyled:s,vars:u,icon:y,radius:R,color:_,iconColor:p,autoContrast:g,checked:h,mod:f,variant:S,disabled:I,...C}=e,c=y,j=B({name:"RadioIndicator",classes:ao,props:e,className:i,style:d,classNames:n,styles:t,unstyled:s,vars:u,varsResolver:So,rootSelector:"indicator"}),w=go(),b=typeof h=="boolean"?h:(w==null?void 0:w.checked)||!1;return a.jsx(P,{ref:r,...j("indicator",{variant:S}),variant:S,mod:[{checked:b,disabled:I},f],...C,children:a.jsx(c,{...j("icon")})})});L.displayName="@mantine/core/RadioIndicator";L.classes=ao;var so={root:"m_f3f1af94",inner:"m_89c4f5e4",icon:"m_f3ed6b2b",radio:"m_8a3dbb89","radio--outline":"m_1bfe9d39"};const ko={labelPosition:"right"},Po=W((o,{size:r,radius:e,color:n,iconColor:i,variant:d,autoContrast:t})=>{const s=J({color:n||o.primaryColor,theme:o}),u=s.isThemeColor&&s.shade===void 0?`var(--mantine-color-${s.color}-outline)`:s.color;return{root:{"--radio-size":A(r,"radio-size"),"--radio-radius":e===void 0?void 0:F(e),"--radio-color":d==="outline"?u:N(n,o),"--radio-icon-color":i?N(i,o):Y(t,o)?M({color:n,theme:o,autoContrast:t}):void 0,"--radio-icon-size":A(r,"radio-icon-size")}}}),z=E((o,r)=>{const e=G("Radio",ko,o),{classNames:n,className:i,style:d,styles:t,unstyled:s,vars:u,id:y,size:R,label:_,labelPosition:p,description:g,error:h,radius:f,color:S,variant:I,disabled:C,wrapperProps:c,icon:j=ro,rootRef:w,iconColor:b,onChange:l,mod:v,...k}=e,x=B({name:"Radio",classes:so,props:e,className:i,style:d,classNames:n,styles:t,unstyled:s,vars:u,varsResolver:Po}),m=oo(),D=(m==null?void 0:m.size)??R,no=e.size?R:D,{styleProps:to,rest:V}=mo(k),O=H(y),q=m?{checked:m.value===V.value,name:V.name??m.name,onChange:K=>{m.onChange(K),l==null||l(K)}}:{};return a.jsx(Z,{...x("root"),__staticSelector:"Radio",__stylesApiProps:e,id:O,size:no,labelPosition:p,label:_,description:g,error:h,disabled:C,classNames:n,styles:t,unstyled:s,"data-checked":q.checked||void 0,variant:I,ref:w,mod:v,...to,...c,children:a.jsxs(P,{...x("inner"),mod:{"label-position":p},children:[a.jsx(P,{...x("radio",{focusable:!0,variant:I}),onChange:l,...V,...q,component:"input",mod:{error:!!h},ref:r,id:O,disabled:C,type:"radio"}),a.jsx(j,{...x("icon"),"aria-hidden":!0})]})})});z.classes=so;z.displayName="@mantine/core/Radio";z.Group=U;z.Card=T;z.Indicator=L;const Bo=({children:o,onClick:r})=>a.jsx(ho,{onClick:r,leftSection:a.jsx(yo,{size:16}),bg:fo,children:o});export{Bo as A,z as R};
