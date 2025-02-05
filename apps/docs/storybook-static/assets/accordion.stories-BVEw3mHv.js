import{j as o}from"./jsx-runtime-D5HtGlwT.js";import{R as u,r as d}from"./index-D4H_InIO.js";import{c as G,a as Ve}from"./index-CfoW25g2.js";import{u as D,S as oe}from"./index-C5cekbTF.js";import{u as q,a as Ae,c as xe,P as He}from"./index-6BzBmuST.js";import{P as T}from"./index-BbaB1MGB.js";import{c as F}from"./utils-CytzSlOG.js";import"./index-DhXlX8Yg.js";import"./index-CEdsGHp_.js";function Ke(e){const n=e+"CollectionProvider",[t,r]=G(n),[i,c]=t(n,{collectionRef:{current:null},itemMap:new Map}),a=A=>{const{scope:x,children:h}=A,g=u.useRef(null),C=u.useRef(new Map).current;return o.jsx(i,{scope:x,itemMap:C,collectionRef:g,children:h})};a.displayName=n;const l=e+"CollectionSlot",p=u.forwardRef((A,x)=>{const{scope:h,children:g}=A,C=c(l,h),s=D(x,C.collectionRef);return o.jsx(oe,{ref:s,children:g})});p.displayName=l;const m=e+"CollectionItemSlot",f="data-radix-collection-item",v=u.forwardRef((A,x)=>{const{scope:h,children:g,...C}=A,s=u.useRef(null),b=D(x,s),w=c(m,h);return u.useEffect(()=>(w.itemMap.set(s,{ref:s,...C}),()=>void w.itemMap.delete(s))),o.jsx(oe,{[f]:"",ref:b,children:g})});v.displayName=m;function N(A){const x=c(e+"CollectionConsumer",A);return u.useCallback(()=>{const g=x.collectionRef.current;if(!g)return[];const C=Array.from(g.querySelectorAll(`[${f}]`));return Array.from(x.itemMap.values()).sort((w,_)=>C.indexOf(w.ref.current)-C.indexOf(_.ref.current))},[x.collectionRef,x.itemMap])}return[{Provider:a,Slot:p,ItemSlot:v},N,r]}var U="Collapsible",[Be,ve]=G(U),[Ge,z]=Be(U),he=d.forwardRef((e,n)=>{const{__scopeCollapsible:t,open:r,defaultOpen:i,disabled:c,onOpenChange:a,...l}=e,[p=!1,m]=q({prop:r,defaultProp:i,onChange:a});return o.jsx(Ge,{scope:t,disabled:c,contentId:Ae(),open:p,onOpenToggle:d.useCallback(()=>m(f=>!f),[m]),children:o.jsx(T.div,{"data-state":Y(p),"data-disabled":c?"":void 0,...l,ref:n})})});he.displayName=U;var be="CollapsibleTrigger",Ie=d.forwardRef((e,n)=>{const{__scopeCollapsible:t,...r}=e,i=z(be,t);return o.jsx(T.button,{type:"button","aria-controls":i.contentId,"aria-expanded":i.open||!1,"data-state":Y(i.open),"data-disabled":i.disabled?"":void 0,disabled:i.disabled,...r,ref:n,onClick:xe(e.onClick,i.onOpenToggle)})});Ie.displayName=be;var W="CollapsibleContent",ye=d.forwardRef((e,n)=>{const{forceMount:t,...r}=e,i=z(W,e.__scopeCollapsible);return o.jsx(He,{present:t||i.open,children:({present:c})=>o.jsx(qe,{...r,ref:n,present:c})})});ye.displayName=W;var qe=d.forwardRef((e,n)=>{const{__scopeCollapsible:t,present:r,children:i,...c}=e,a=z(W,t),[l,p]=d.useState(r),m=d.useRef(null),f=D(n,m),v=d.useRef(0),N=v.current,A=d.useRef(0),x=A.current,h=a.open||l,g=d.useRef(h),C=d.useRef(void 0);return d.useEffect(()=>{const s=requestAnimationFrame(()=>g.current=!1);return()=>cancelAnimationFrame(s)},[]),Ve(()=>{const s=m.current;if(s){C.current=C.current||{transitionDuration:s.style.transitionDuration,animationName:s.style.animationName},s.style.transitionDuration="0s",s.style.animationName="none";const b=s.getBoundingClientRect();v.current=b.height,A.current=b.width,g.current||(s.style.transitionDuration=C.current.transitionDuration,s.style.animationName=C.current.animationName),p(r)}},[a.open,r]),o.jsx(T.div,{"data-state":Y(a.open),"data-disabled":a.disabled?"":void 0,id:a.contentId,hidden:!h,...c,ref:f,style:{"--radix-collapsible-content-height":N?`${N}px`:void 0,"--radix-collapsible-content-width":x?`${x}px`:void 0,...e.style},children:h&&i})});function Y(e){return e?"open":"closed"}var Fe=he,Ue=Ie,ze=ye,We=d.createContext(void 0);function Ye(e){const n=d.useContext(We);return e||n||"ltr"}var R="Accordion",Ze=["Home","End","ArrowDown","ArrowUp","ArrowLeft","ArrowRight"],[Z,Je,Qe]=Ke(R),[$,yo]=G(R,[Qe,ve]),J=ve(),je=u.forwardRef((e,n)=>{const{type:t,...r}=e,i=r,c=r;return o.jsx(Z.Provider,{scope:e.__scopeAccordion,children:t==="multiple"?o.jsx(to,{...c,ref:n}):o.jsx(oo,{...i,ref:n})})});je.displayName=R;var[Re,Xe]=$(R),[Ne,eo]=$(R,{collapsible:!1}),oo=u.forwardRef((e,n)=>{const{value:t,defaultValue:r,onValueChange:i=()=>{},collapsible:c=!1,...a}=e,[l,p]=q({prop:t,defaultProp:r,onChange:i});return o.jsx(Re,{scope:e.__scopeAccordion,value:l?[l]:[],onItemOpen:p,onItemClose:u.useCallback(()=>c&&p(""),[c,p]),children:o.jsx(Ne,{scope:e.__scopeAccordion,collapsible:c,children:o.jsx(we,{...a,ref:n})})})}),to=u.forwardRef((e,n)=>{const{value:t,defaultValue:r,onValueChange:i=()=>{},...c}=e,[a=[],l]=q({prop:t,defaultProp:r,onChange:i}),p=u.useCallback(f=>l((v=[])=>[...v,f]),[l]),m=u.useCallback(f=>l((v=[])=>v.filter(N=>N!==f)),[l]);return o.jsx(Re,{scope:e.__scopeAccordion,value:a,onItemOpen:p,onItemClose:m,children:o.jsx(Ne,{scope:e.__scopeAccordion,collapsible:!0,children:o.jsx(we,{...c,ref:n})})})}),[no,V]=$(R),we=u.forwardRef((e,n)=>{const{__scopeAccordion:t,disabled:r,dir:i,orientation:c="vertical",...a}=e,l=u.useRef(null),p=D(l,n),m=Je(t),v=Ye(i)==="ltr",N=xe(e.onKeyDown,A=>{var X;if(!Ze.includes(A.key))return;const x=A.target,h=m().filter(K=>{var ee;return!((ee=K.ref.current)!=null&&ee.disabled)}),g=h.findIndex(K=>K.ref.current===x),C=h.length;if(g===-1)return;A.preventDefault();let s=g;const b=0,w=C-1,_=()=>{s=g+1,s>w&&(s=b)},H=()=>{s=g-1,s<b&&(s=w)};switch(A.key){case"Home":s=b;break;case"End":s=w;break;case"ArrowRight":c==="horizontal"&&(v?_():H());break;case"ArrowDown":c==="vertical"&&_();break;case"ArrowLeft":c==="horizontal"&&(v?H():_());break;case"ArrowUp":c==="vertical"&&H();break}const $e=s%C;(X=h[$e].ref.current)==null||X.focus()});return o.jsx(no,{scope:t,disabled:r,direction:i,orientation:c,children:o.jsx(Z.Slot,{scope:t,children:o.jsx(T.div,{...a,"data-orientation":c,ref:p,onKeyDown:r?void 0:N})})})}),L="AccordionItem",[ro,Q]=$(L),Se=u.forwardRef((e,n)=>{const{__scopeAccordion:t,value:r,...i}=e,c=V(L,t),a=Xe(L,t),l=J(t),p=Ae(),m=r&&a.value.includes(r)||!1,f=c.disabled||e.disabled;return o.jsx(ro,{scope:t,open:m,disabled:f,triggerId:p,children:o.jsx(Fe,{"data-orientation":c.orientation,"data-state":Oe(m),...l,...i,ref:n,disabled:f,open:m,onOpenChange:v=>{v?a.onItemOpen(r):a.onItemClose(r)}})})});Se.displayName=L;var _e="AccordionHeader",Te=u.forwardRef((e,n)=>{const{__scopeAccordion:t,...r}=e,i=V(R,t),c=Q(_e,t);return o.jsx(T.h3,{"data-orientation":i.orientation,"data-state":Oe(c.open),"data-disabled":c.disabled?"":void 0,...r,ref:n})});Te.displayName=_e;var B="AccordionTrigger",Pe=u.forwardRef((e,n)=>{const{__scopeAccordion:t,...r}=e,i=V(R,t),c=Q(B,t),a=eo(B,t),l=J(t);return o.jsx(Z.ItemSlot,{scope:t,children:o.jsx(Ue,{"aria-disabled":c.open&&!a.collapsible||void 0,"data-orientation":i.orientation,id:c.triggerId,...l,...r,ref:n})})});Pe.displayName=B;var Ee="AccordionContent",Me=u.forwardRef((e,n)=>{const{__scopeAccordion:t,...r}=e,i=V(R,t),c=Q(Ee,t),a=J(t);return o.jsx(ze,{role:"region","aria-labelledby":c.triggerId,"data-orientation":i.orientation,...a,...r,ref:n,style:{"--radix-accordion-content-height":"var(--radix-collapsible-content-height)","--radix-accordion-content-width":"var(--radix-collapsible-content-width)",...e.style}})});Me.displayName=Ee;function Oe(e){return e?"open":"closed"}var co=je,io=Se,so=Te,ke=Pe,De=Me;/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Le=(...e)=>e.filter((n,t,r)=>!!n&&n.trim()!==""&&r.indexOf(n)===t).join(" ").trim();/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var lo={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=d.forwardRef(({color:e="currentColor",size:n=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:i="",children:c,iconNode:a,...l},p)=>d.createElement("svg",{ref:p,...lo,width:n,height:n,stroke:e,strokeWidth:r?Number(t)*24/Number(n):t,className:Le("lucide",i),...l},[...a.map(([m,f])=>d.createElement(m,f)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=(e,n)=>{const t=d.forwardRef(({className:r,...i},c)=>d.createElement(po,{ref:c,iconNode:n,className:Le(`lucide-${ao(e)}`,r),...i}));return t.displayName=`${e}`,t};/**
 * @license lucide-react v0.469.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=uo("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),S=co,I=d.forwardRef(({className:e,...n},t)=>o.jsx(io,{ref:t,className:F("border-b",e),...n}));I.displayName="AccordionItem";const y=d.forwardRef(({className:e,children:n,...t},r)=>o.jsx(so,{className:"flex",children:o.jsxs(ke,{ref:r,className:F("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",e),...t,children:[n,o.jsx(mo,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})}));y.displayName=ke.displayName;const j=d.forwardRef(({className:e,children:n,...t},r)=>o.jsx(De,{ref:r,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...t,children:o.jsx("div",{className:F("pb-4 pt-0",e),children:n})}));j.displayName=De.displayName;j.__docgenInfo={description:"",methods:[]};I.__docgenInfo={description:"",methods:[],displayName:"AccordionItem"};y.__docgenInfo={description:"",methods:[]};const jo={title:"Molecules/Accordion",component:S,argTypes:{type:{options:["single","multiple"],control:{type:"radio"},description:"Specifies whether the accordion allows multiple or single expanded items."},collapsible:{control:"boolean",description:"Allows all items to be collapsed when true."}},args:{type:"single",collapsible:!0},parameters:{docs:{description:{component:`
### Accordion Component (Molecule)

The \`Accordion\` component is a UI element used to display content in a collapsible manner.
It consists of **AccordionItem**, **AccordionTrigger**, and **AccordionContent**, forming a reusable structure.

#### Atomic Design Classification:

- **Molecule**: Combines smaller atoms (text, icons) to create an interactive expandable/collapsible unit.
        `}}}},P={render:e=>o.jsxs(S,{...e,children:[o.jsxs(I,{value:"item-1",children:[o.jsx(y,{children:"Section 1"}),o.jsx(j,{children:"Content for section 1."})]}),o.jsxs(I,{value:"item-2",children:[o.jsx(y,{children:"Section 2"}),o.jsx(j,{children:"Content for section 2."})]})]})},E={args:{type:"multiple"},render:e=>o.jsxs(S,{...e,children:[o.jsxs(I,{value:"item-1",children:[o.jsx(y,{children:"Section 1"}),o.jsx(j,{children:"Content for section 1."})]}),o.jsxs(I,{value:"item-2",children:[o.jsx(y,{children:"Section 2"}),o.jsx(j,{children:"Content for section 2."})]})]})},M={args:{collapsible:!0},render:e=>o.jsx(S,{...e,children:o.jsxs(I,{value:"item-1",children:[o.jsx(y,{children:"Collapsible Section"}),o.jsx(j,{children:"This section can collapse completely."})]})})},O={render:()=>o.jsx(S,{type:"single",className:"border border-gray-300 rounded-lg",children:o.jsxs(I,{value:"item-1",children:[o.jsx(y,{className:"text-lg font-bold text-blue-600",children:"Custom Styled Section"}),o.jsx(j,{className:"text-gray-700",children:"Custom styling applied to content."})]})})},k={render:()=>o.jsx(S,{type:"single",className:"border border-gray-300 rounded-lg",children:o.jsxs(I,{value:"item-1",children:[o.jsx(y,{children:"Accessible Section"}),o.jsx(j,{children:"Check keyboard navigation and screen reader support."})]})})};var te,ne,re;P.parameters={...P.parameters,docs:{...(te=P.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: args => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(re=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};var ce,ie,se;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    type: 'multiple'
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>Content for section 1.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>Content for section 2.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(se=(ie=E.parameters)==null?void 0:ie.docs)==null?void 0:se.source}}};var ae,le,de;M.parameters={...M.parameters,docs:{...(ae=M.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    collapsible: true
  },
  render: args => <Accordion {...args}>
      <AccordionItem value="item-1">
        <AccordionTrigger>Collapsible Section</AccordionTrigger>
        <AccordionContent>This section can collapse completely.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(de=(le=M.parameters)==null?void 0:le.docs)==null?void 0:de.source}}};var pe,ue,me;O.parameters={...O.parameters,docs:{...(pe=O.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: () => <Accordion type="single" className="border border-gray-300 rounded-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-lg font-bold text-blue-600">Custom Styled Section</AccordionTrigger>
        <AccordionContent className="text-gray-700">Custom styling applied to content.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(me=(ue=O.parameters)==null?void 0:ue.docs)==null?void 0:me.source}}};var fe,ge,Ce;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: () => <Accordion type="single" className="border border-gray-300 rounded-lg">
      <AccordionItem value="item-1">
        <AccordionTrigger>Accessible Section</AccordionTrigger>
        <AccordionContent>Check keyboard navigation and screen reader support.</AccordionContent>
      </AccordionItem>
    </Accordion>
}`,...(Ce=(ge=k.parameters)==null?void 0:ge.docs)==null?void 0:Ce.source}}};const Ro=["Default","Multiple","Collapsible","CustomStyled","AccessibilityTest"];export{k as AccessibilityTest,M as Collapsible,O as CustomStyled,P as Default,E as Multiple,Ro as __namedExportsOrder,jo as default};
