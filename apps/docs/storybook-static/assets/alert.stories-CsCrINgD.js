import{j as e}from"./jsx-runtime-D5HtGlwT.js";import{c as I}from"./index-BwobEAja.js";import{r as p}from"./index-D4H_InIO.js";import{c as u}from"./utils-CytzSlOG.js";const _=I("relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",{variants:{variant:{default:"bg-background text-foreground",destructive:"border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive"}},defaultVariants:{variant:"default"}}),n=p.forwardRef(({className:s,variant:a,...i},C)=>e.jsx("div",{ref:C,role:"alert",className:u(_({variant:a}),s),...i}));n.displayName="Alert";const t=p.forwardRef(({className:s,...a},i)=>e.jsx("h5",{ref:i,className:u("mb-1 font-medium leading-none tracking-tight",s),...a}));t.displayName="AlertTitle";const r=p.forwardRef(({className:s,...a},i)=>e.jsx("div",{ref:i,className:u("text-sm [&_p]:leading-relaxed",s),...a}));r.displayName="AlertDescription";n.__docgenInfo={description:"",methods:[],displayName:"Alert"};r.__docgenInfo={description:"",methods:[],displayName:"AlertDescription"};t.__docgenInfo={description:"",methods:[],displayName:"AlertTitle"};const F={title:"Atoms/Alert",component:n,argTypes:{variant:{options:["default","destructive"],control:{type:"select"},description:"Defines the visual style of the alert."},className:{control:"text",description:"Custom classes for additional styling."},children:{control:"text",description:"Alert content."}},args:{variant:"default",children:"This is an alert message."},parameters:{docs:{description:{component:`
### Alert Component (Atom)

The \`Alert\` component is a fundamental UI element used to display important messages to the user.

#### Atomic Design Classification:

- **Atom**: A simple and self-contained UI component that can be used independently or within molecules and organisms.
        `}}}},l={args:{variant:"default",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Default Alert"}),e.jsx(r,{children:"This is an informational alert."})]})}},o={args:{variant:"destructive",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{className:"text-red-600",children:"Error!"}),e.jsx(r,{children:"Something went wrong. Please try again."})]})}},c={args:{className:"border border-gray-400 bg-gray-100 text-gray-700",children:e.jsxs(e.Fragment,{children:[e.jsx(t,{children:"Custom Alert"}),e.jsx(r,{children:"This alert has custom styles applied."})]})}},d={render:()=>e.jsxs(n,{variant:"default",className:"relative",children:[e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6 absolute left-4 top-4 text-blue-500",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M9 12l2 2 4-4"})}),e.jsxs("div",{children:[e.jsx(t,{children:"With Icon"}),e.jsx(r,{children:"Alert with an icon included."})]})]})},m={render:()=>e.jsxs(n,{variant:"default",role:"alert","aria-live":"assertive",children:[e.jsx(t,{children:"Accessibility Test"}),e.jsx(r,{children:"Ensure alerts are accessible for screen readers."})]})};var g,h,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    children: <>
        <AlertTitle>Default Alert</AlertTitle>
        <AlertDescription>This is an informational alert.</AlertDescription>
      </>
  }
}`,...(v=(h=l.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};var A,f,x;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: 'destructive',
    children: <>
        <AlertTitle className="text-red-600">Error!</AlertTitle>
        <AlertDescription>Something went wrong. Please try again.</AlertDescription>
      </>
  }
}`,...(x=(f=o.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var y,b,j;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    className: 'border border-gray-400 bg-gray-100 text-gray-700',
    children: <>
        <AlertTitle>Custom Alert</AlertTitle>
        <AlertDescription>This alert has custom styles applied.</AlertDescription>
      </>
  }
}`,...(j=(b=c.parameters)==null?void 0:b.docs)==null?void 0:j.source}}};var T,w,D;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <Alert variant="default" className="relative">
      {/* biome-ignore lint/a11y/noSvgWithoutTitle: storybook example */}
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 absolute left-4 top-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
      </svg>
      <div>
        <AlertTitle>With Icon</AlertTitle>
        <AlertDescription>Alert with an icon included.</AlertDescription>
      </div>
    </Alert>
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var N,k,S;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <Alert variant="default" role="alert" aria-live="assertive">
      <AlertTitle>Accessibility Test</AlertTitle>
      <AlertDescription>Ensure alerts are accessible for screen readers.</AlertDescription>
    </Alert>
}`,...(S=(k=m.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};const B=["Default","Destructive","CustomStyled","WithIcon","AccessibilityTest"];export{m as AccessibilityTest,c as CustomStyled,l as Default,o as Destructive,d as WithIcon,B as __namedExportsOrder,F as default};
