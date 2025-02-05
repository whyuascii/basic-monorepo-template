import{j as e}from"./jsx-runtime-D5HtGlwT.js";import{r as S}from"./index-D4H_InIO.js";import{P}from"./index-BbaB1MGB.js";import"./index-DhXlX8Yg.js";import"./index-CEdsGHp_.js";import"./index-C5cekbTF.js";var _="AspectRatio",j=S.forwardRef((y,A)=>{const{ratio:N=1/1,style:E,...R}=y;return e.jsx("div",{style:{position:"relative",width:"100%",paddingBottom:`${100/N}%`},"data-radix-aspect-ratio-wrapper":"",children:e.jsx(P.div,{...R,ref:A,style:{...E,position:"absolute",top:0,right:0,bottom:0,left:0}})})});j.displayName=_;var k=j;const C=k,I={title:"Atoms/AspectRatio",component:C,argTypes:{ratio:{control:{type:"number"},description:"Specifies the width-to-height ratio of the content.",defaultValue:16/9},className:{control:"text",description:"Custom classes for additional styling."},children:{control:"text",description:"Content to be displayed within the aspect ratio container."}},args:{ratio:16/9},parameters:{docs:{description:{component:`
### AspectRatio Component (Atom)

The \`AspectRatio\` component ensures consistent aspect ratios for responsive content such as images and videos.

#### Atomic Design Classification:

- **Atom**: A fundamental UI component that provides structure to media content.
        `}}}},t={args:{ratio:16/9,children:e.jsx("img",{src:"https://via.placeholder.com/800x450",alt:"16:9 Example",className:"w-full h-full object-cover"})}},r={args:{ratio:1,children:e.jsx("div",{className:"bg-gray-300 flex items-center justify-center text-lg font-bold",children:"1:1"})}},s={args:{ratio:3/4,children:e.jsx("img",{src:"https://via.placeholder.com/600x800",alt:"3:4 Example",className:"w-full h-full object-cover"})}},o={args:{ratio:4/3,className:"border border-gray-400",children:e.jsx("video",{className:"w-full h-full object-cover",src:"https://www.w3schools.com/html/mov_bbb.mp4",controls:!0,children:e.jsx("track",{kind:"captions",src:"https://www.w3schools.com/html/mov_bbb.vtt",srcLang:"en",label:"English",default:!0})})}},a={args:{ratio:16/9,children:e.jsx("div",{role:"img","aria-label":"Placeholder content",children:e.jsx("img",{src:"https://via.placeholder.com/800x450",alt:"Accessible 16:9 Example",className:"w-full h-full object-cover"})})}};var c,i,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9,
    children: <img src="https://via.placeholder.com/800x450" alt="16:9 Example" className="w-full h-full object-cover" />
  }
}`,...(l=(i=t.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var n,m,p;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    ratio: 1,
    children: <div className="bg-gray-300 flex items-center justify-center text-lg font-bold">1:1</div>
  }
}`,...(p=(m=r.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,h,u;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ratio: 3 / 4,
    children: <img src="https://via.placeholder.com/600x800" alt="3:4 Example" className="w-full h-full object-cover" />
  }
}`,...(u=(h=s.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,f,v;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ratio: 4 / 3,
    className: 'border border-gray-400',
    children: <video className="w-full h-full object-cover" src="https://www.w3schools.com/html/mov_bbb.mp4" controls>
        <track kind="captions" src="https://www.w3schools.com/html/mov_bbb.vtt" srcLang="en" label="English" default />
      </video>
  }
}`,...(v=(f=o.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,x,w;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    ratio: 16 / 9,
    children: <div role="img" aria-label="Placeholder content">
        <img src="https://via.placeholder.com/800x450" alt="Accessible 16:9 Example" className="w-full h-full object-cover" />
      </div>
  }
}`,...(w=(x=a.parameters)==null?void 0:x.docs)==null?void 0:w.source}}};const M=["Default","Square","Portrait","Responsive","AccessibilityTest"];export{a as AccessibilityTest,t as Default,s as Portrait,o as Responsive,r as Square,M as __namedExportsOrder,I as default};
