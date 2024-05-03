import{r as c,b as q,az as ue,aA as ce,an as Z,H as fe,j as B,aB as pe,_ as I,a as de,g as me,s as J,f as ye,ae as he,aC as be,u as ge,v as Se,aD as ee,c as Me,d as Pe}from"./index-86e29fa0.js";var r={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Q=Symbol.for("react.element"),X=Symbol.for("react.portal"),T=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),j=Symbol.for("react.provider"),K=Symbol.for("react.context"),ve=Symbol.for("react.server_context"),N=Symbol.for("react.forward_ref"),z=Symbol.for("react.suspense"),A=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),H=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),re;re=Symbol.for("react.module.reference");function f(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Q:switch(e=e.type,e){case T:case _:case k:case z:case A:return e;default:switch(e=e&&e.$$typeof,e){case ve:case K:case N:case H:case O:case j:return e;default:return t}}case X:return t}}}r.ContextConsumer=K;r.ContextProvider=j;r.Element=Q;r.ForwardRef=N;r.Fragment=T;r.Lazy=H;r.Memo=O;r.Portal=X;r.Profiler=_;r.StrictMode=k;r.Suspense=z;r.SuspenseList=A;r.isAsyncMode=function(){return!1};r.isConcurrentMode=function(){return!1};r.isContextConsumer=function(e){return f(e)===K};r.isContextProvider=function(e){return f(e)===j};r.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Q};r.isForwardRef=function(e){return f(e)===N};r.isFragment=function(e){return f(e)===T};r.isLazy=function(e){return f(e)===H};r.isMemo=function(e){return f(e)===O};r.isPortal=function(e){return f(e)===X};r.isProfiler=function(e){return f(e)===_};r.isStrictMode=function(e){return f(e)===k};r.isSuspense=function(e){return f(e)===z};r.isSuspenseList=function(e){return f(e)===A};r.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===T||e===_||e===k||e===z||e===A||e===xe||typeof e=="object"&&e!==null&&(e.$$typeof===H||e.$$typeof===O||e.$$typeof===j||e.$$typeof===K||e.$$typeof===N||e.$$typeof===re||e.getModuleId!==void 0)};r.typeOf=f;const we=["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"];function G(e,t,s){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:s?null:e.firstChild}function te(e,t,s){return e===t?s?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:s?null:e.lastChild}function oe(e,t){if(t===void 0)return!0;let s=e.innerText;return s===void 0&&(s=e.textContent),s=s.trim().toLowerCase(),s.length===0?!1:t.repeating?s[0]===t.keys[0]:s.indexOf(t.keys.join(""))===0}function $(e,t,s,P,h,g){let p=!1,a=h(e,t,t?s:!1);for(;a;){if(a===e.firstChild){if(p)return!1;p=!0}const b=P?!1:a.disabled||a.getAttribute("aria-disabled")==="true";if(!a.hasAttribute("tabindex")||!oe(a,g)||b)a=h(e,a,s);else return a.focus(),!0}return!1}const Ce=c.forwardRef(function(t,s){const{actions:P,autoFocus:h=!1,autoFocusItem:g=!1,children:p,className:a,disabledItemsFocusable:b=!1,disableListWrap:S=!1,onKeyDown:v,variant:x="selectedMenu"}=t,R=q(t,we),d=c.useRef(null),U=c.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});ue(()=>{h&&d.current.focus()},[h]),c.useImperativeHandle(P,()=>({adjustStyleForScrollbar:(o,n)=>{const u=!d.current.style.width;if(o.clientHeight<d.current.clientHeight&&u){const m=`${ce(Z(o))}px`;d.current.style[n.direction==="rtl"?"paddingLeft":"paddingRight"]=m,d.current.style.width=`calc(100% + ${m})`}return d.current}}),[]);const E=o=>{const n=d.current,u=o.key,m=Z(n).activeElement;if(u==="ArrowDown")o.preventDefault(),$(n,m,S,b,G);else if(u==="ArrowUp")o.preventDefault(),$(n,m,S,b,te);else if(u==="Home")o.preventDefault(),$(n,null,S,b,G);else if(u==="End")o.preventDefault(),$(n,null,S,b,te);else if(u.length===1){const i=U.current,M=u.toLowerCase(),w=performance.now();i.keys.length>0&&(w-i.lastTime>500?(i.keys=[],i.repeating=!0,i.previousKeyMatched=!0):i.repeating&&M!==i.keys[0]&&(i.repeating=!1)),i.lastTime=w,i.keys.push(M);const V=m&&!i.repeating&&oe(m,i);i.previousKeyMatched&&(V||$(n,m,!1,b,G,i))?o.preventDefault():i.previousKeyMatched=!1}v&&v(o)},C=fe(d,s);let l=-1;c.Children.forEach(p,(o,n)=>{if(!c.isValidElement(o)){l===n&&(l+=1,l>=p.length&&(l=-1));return}o.props.disabled||(x==="selectedMenu"&&o.props.selected||l===-1)&&(l=n),l===n&&(o.props.disabled||o.props.muiSkipListHighlight||o.type.muiSkipListHighlight)&&(l+=1,l>=p.length&&(l=-1))});const F=c.Children.map(p,(o,n)=>{if(n===l){const u={};return g&&(u.autoFocus=!0),o.props.tabIndex===void 0&&x==="selectedMenu"&&(u.tabIndex=0),c.cloneElement(o,u)}return o});return B.jsx(pe,I({role:"menu",ref:C,className:a,onKeyDown:E,tabIndex:h?0:-1},R,{children:F}))}),Fe=Ce;function $e(e){return de("MuiMenu",e)}me("MuiMenu",["root","paper","list"]);const Ie=["onEntering"],Re=["autoFocus","children","className","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","TransitionProps","variant","slots","slotProps"],Ee={vertical:"top",horizontal:"right"},Le={vertical:"top",horizontal:"left"},De=e=>{const{classes:t}=e;return Pe({root:["root"],paper:["paper"],list:["list"]},$e,t)},Te=J(ye,{shouldForwardProp:e=>he(e)||e==="classes",name:"MuiMenu",slot:"Root",overridesResolver:(e,t)=>t.root})({}),ke=J(be,{name:"MuiMenu",slot:"Paper",overridesResolver:(e,t)=>t.paper})({maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"}),_e=J(Fe,{name:"MuiMenu",slot:"List",overridesResolver:(e,t)=>t.list})({outline:0}),je=c.forwardRef(function(t,s){var P,h;const g=ge({props:t,name:"MuiMenu"}),{autoFocus:p=!0,children:a,className:b,disableAutoFocusItem:S=!1,MenuListProps:v={},onClose:x,open:R,PaperProps:d={},PopoverClasses:U,transitionDuration:E="auto",TransitionProps:{onEntering:C}={},variant:l="selectedMenu",slots:F={},slotProps:o={}}=g,n=q(g.TransitionProps,Ie),u=q(g,Re),m=Se(),i=m.direction==="rtl",M=I({},g,{autoFocus:p,disableAutoFocusItem:S,MenuListProps:v,onEntering:C,PaperProps:d,transitionDuration:E,TransitionProps:n,variant:l}),w=De(M),V=p&&!S&&R,W=c.useRef(null),se=(y,D)=>{W.current&&W.current.adjustStyleForScrollbar(y,m),C&&C(y,D)},ne=y=>{y.key==="Tab"&&(y.preventDefault(),x&&x(y,"tabKeyDown"))};let L=-1;c.Children.map(a,(y,D)=>{c.isValidElement(y)&&(y.props.disabled||(l==="selectedMenu"&&y.props.selected||L===-1)&&(L=D))});const Y=(P=F.paper)!=null?P:ke,ie=(h=o.paper)!=null?h:d,le=ee({elementType:F.root,externalSlotProps:o.root,ownerState:M,className:[w.root,b]}),ae=ee({elementType:Y,externalSlotProps:ie,ownerState:M,className:w.paper});return B.jsx(Te,I({onClose:x,anchorOrigin:{vertical:"bottom",horizontal:i?"right":"left"},transformOrigin:i?Ee:Le,slots:{paper:Y,root:F.root},slotProps:{root:le,paper:ae},open:R,ref:s,transitionDuration:E,TransitionProps:I({onEntering:se},n),ownerState:M},u,{classes:U,children:B.jsx(_e,I({onKeyDown:ne,actions:W,autoFocus:p&&(L===-1||S),autoFocusItem:V,variant:l},v,{className:Me(w.list,v.className),children:a}))}))}),Ne=je;export{Ne as M};
