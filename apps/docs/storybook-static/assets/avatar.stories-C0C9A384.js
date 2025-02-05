import{j as e}from"./jsx-runtime-D5HtGlwT.js";import{r as c}from"./index-D4H_InIO.js";import{c as Y,u as Z,a as J}from"./index-CfoW25g2.js";import{P as S}from"./index-BbaB1MGB.js";import{c as y}from"./utils-CytzSlOG.js";import"./index-DhXlX8Yg.js";import"./index-CEdsGHp_.js";import"./index-C5cekbTF.js";var I="Avatar",[aa,ma]=Y(I),[ea,W]=aa(I),q=c.forwardRef((a,r)=>{const{__scopeAvatar:t,...s}=a,[n,o]=c.useState("idle");return e.jsx(ea,{scope:t,imageLoadingStatus:n,onImageLoadingStatusChange:o,children:e.jsx(S.span,{...s,ref:r})})});q.displayName=I;var G="AvatarImage",K=c.forwardRef((a,r)=>{const{__scopeAvatar:t,src:s,onLoadingStatusChange:n=()=>{},...o}=a,d=W(G,t),l=ra(s,o.referrerPolicy),m=Z(b=>{n(b),d.onImageLoadingStatusChange(b)});return J(()=>{l!=="idle"&&m(l)},[l,m]),l==="loaded"?e.jsx(S.img,{...o,ref:r,src:s}):null});K.displayName=G;var O="AvatarFallback",V=c.forwardRef((a,r)=>{const{__scopeAvatar:t,delayMs:s,...n}=a,o=W(O,t),[d,l]=c.useState(s===void 0);return c.useEffect(()=>{if(s!==void 0){const m=window.setTimeout(()=>l(!0),s);return()=>window.clearTimeout(m)}},[s]),d&&o.imageLoadingStatus!=="loaded"?e.jsx(S.span,{...n,ref:r}):null});V.displayName=O;function ra(a,r){const[t,s]=c.useState("idle");return J(()=>{if(!a){s("error");return}let n=!0;const o=new window.Image,d=l=>()=>{n&&s(l)};return s("loading"),o.onload=d("loaded"),o.onerror=d("error"),o.src=a,r&&(o.referrerPolicy=r),()=>{n=!1}},[a,r]),t}var H=q,Q=K,X=V;const f=c.forwardRef(({className:a,...r},t)=>e.jsx(H,{ref:t,className:y("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",a),...r}));f.displayName=H.displayName;const i=c.forwardRef(({className:a,...r},t)=>e.jsx(Q,{ref:t,className:y("aspect-square h-full w-full",a),...r}));i.displayName=Q.displayName;const x=c.forwardRef(({className:a,...r},t)=>e.jsx(X,{ref:t,className:y("flex h-full w-full items-center justify-center rounded-full bg-muted",a),...r}));x.displayName=X.displayName;f.__docgenInfo={description:"",methods:[]};x.__docgenInfo={description:"",methods:[]};i.__docgenInfo={description:"",methods:[]};const pa={title:"Atoms/Avatar",component:f,argTypes:{className:{control:"text",description:"Custom classes for additional styling."},children:{control:"text",description:"Avatar content or fallback text."}},args:{children:e.jsx(i,{src:"https://via.placeholder.com/150",alt:"User Avatar"})},parameters:{docs:{description:{component:`
### Avatar Component (Atom)

The \`Avatar\` component is used to represent users via images, initials, or fallback content.

#### Atomic Design Classification:

- **Atom**: A fundamental UI component representing a user entity visually.
        `}}}},p={args:{children:e.jsx(i,{src:"https://via.placeholder.com/150",alt:"User Avatar"})}},u={args:{children:e.jsx(x,{children:"JD"})}},g={args:{className:"h-20 w-20",children:e.jsx(i,{src:"https://via.placeholder.com/150",alt:"Large Avatar"})}},v={args:{children:e.jsx(i,{src:"https://invalid-url.com/image.jpg",alt:"Broken Image"})},render:a=>e.jsx(f,{...a,children:e.jsx(x,{children:"AB"})})},A={args:{className:"border border-gray-400 shadow-md",children:e.jsx(i,{src:"https://via.placeholder.com/150",alt:"Styled Avatar"})}},h={args:{children:e.jsx(i,{src:"https://via.placeholder.com/150",alt:"Accessible Avatar"})}};var j,w,N;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: <AvatarImage src="https://via.placeholder.com/150" alt="User Avatar" />
  }
}`,...(N=(w=p.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var k,C,_;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    children: <AvatarFallback>JD</AvatarFallback>
  }
}`,...(_=(C=u.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var L,R,F;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    className: 'h-20 w-20',
    children: <AvatarImage src="https://via.placeholder.com/150" alt="Large Avatar" />
  }
}`,...(F=(R=g.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var E,B,T;v.parameters={...v.parameters,docs:{...(E=v.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    children: <AvatarImage src="https://invalid-url.com/image.jpg" alt="Broken Image" />
  },
  render: args => <Avatar {...args}>
      <AvatarFallback>AB</AvatarFallback>
    </Avatar>
}`,...(T=(B=v.parameters)==null?void 0:B.docs)==null?void 0:T.source}}};var M,P,D;A.parameters={...A.parameters,docs:{...(M=A.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    className: 'border border-gray-400 shadow-md',
    children: <AvatarImage src="https://via.placeholder.com/150" alt="Styled Avatar" />
  }
}`,...(D=(P=A.parameters)==null?void 0:P.docs)==null?void 0:D.source}}};var U,$,z;h.parameters={...h.parameters,docs:{...(U=h.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    children: <AvatarImage src="https://via.placeholder.com/150" alt="Accessible Avatar" />
  }
}`,...(z=($=h.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};const ua=["Default","WithFallback","CustomSize","BrokenImage","CustomStyled","AccessibilityTest"];export{h as AccessibilityTest,v as BrokenImage,g as CustomSize,A as CustomStyled,p as Default,u as WithFallback,ua as __namedExportsOrder,pa as default};
