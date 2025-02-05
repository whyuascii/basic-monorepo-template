import{j as e}from"./jsx-runtime-D5HtGlwT.js";import{B as t}from"./button-CAmFmeCV.js";import"./index-D4H_InIO.js";import"./index-C5cekbTF.js";import"./index-BwobEAja.js";import"./utils-CytzSlOG.js";const A={title:"Atoms/Button",component:t,argTypes:{variant:{options:["default","destructive","outline","secondary","ghost","link"],control:{type:"select"},description:"Defines the visual style of the button."},size:{options:["default","sm","lg","icon"],control:{type:"select"},description:"Determines the size of the button."},asChild:{control:"boolean",description:"Renders the button as a child component using Slot."},disabled:{control:"boolean",description:"Disables the button, preventing interactions."},children:{control:"text",description:"Defines the button label or content."}},args:{variant:"default",size:"default",children:"Click Me"},parameters:{docs:{description:{component:`
### Button Component (Atom)

The \`Button\` component is a fundamental UI element that enables user interaction.

#### Atomic Design Classification:

- **Atom**: The smallest building block of a UI component library.
      `}}}},r={args:{variant:"default",size:"default",children:"Click Me"}},n=()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{variant:"default",children:"Default"}),e.jsx(t,{variant:"destructive",children:"Destructive"}),e.jsx(t,{variant:"outline",children:"Outline"}),e.jsx(t,{variant:"secondary",children:"Secondary"}),e.jsx(t,{variant:"ghost",children:"Ghost"}),e.jsx(t,{variant:"link",children:"Link"})]}),a=()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{size:"sm",children:"Small"}),e.jsx(t,{size:"default",children:"Default"}),e.jsx(t,{size:"lg",children:"Large"}),e.jsx(t,{size:"icon",children:"🔍"})]}),i={args:{children:"Disabled",disabled:!0}},o={args:{asChild:!0,children:e.jsx("a",{href:"#",children:"Button as Link"})}},s=()=>e.jsxs("div",{className:"space-y-2",children:[e.jsx(t,{variant:"default",children:"Hover Me"}),e.jsx(t,{variant:"destructive",disabled:!0,children:"Disabled"}),e.jsx(t,{variant:"outline",size:"lg",children:"Focus Me"})]});n.__docgenInfo={description:"",methods:[],displayName:"Variants"};a.__docgenInfo={description:"",methods:[],displayName:"Sizes"};s.__docgenInfo={description:"",methods:[],displayName:"InteractiveStates"};var c,l,d;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    size: 'default',
    children: 'Click Me'
  }
}`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var u,m,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`() => <div className="space-y-2">
    <Button variant="default">Default</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,v,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`() => <div className="space-y-2">
    <Button size="sm">Small</Button>
    <Button size="default">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="icon">🔍</Button>
  </div>`,...(f=(v=a.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var B,g,b;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Disabled',
    disabled: true
  }
}`,...(b=(g=i.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var x,j,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    asChild: true,
    children: <a href="#">Button as Link</a>
  }
}`,...(y=(j=o.parameters)==null?void 0:j.docs)==null?void 0:y.source}}};var D,z,S;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`() => <div className="space-y-2">
    <Button variant="default">Hover Me</Button>
    <Button variant="destructive" disabled>
      Disabled
    </Button>
    <Button variant="outline" size="lg">
      Focus Me
    </Button>
  </div>`,...(S=(z=s.parameters)==null?void 0:z.docs)==null?void 0:S.source}}};const L=["Default","Variants","Sizes","Disabled","AsChild","InteractiveStates"];export{o as AsChild,r as Default,i as Disabled,s as InteractiveStates,a as Sizes,n as Variants,L as __namedExportsOrder,A as default};
