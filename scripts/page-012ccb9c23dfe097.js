(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4712],{46352:function(e,t,n){Promise.resolve().then(n.bind(n,50989))},73336:function(e,t,n){"use strict";n.d(t,{q:function(){return m}});var r=n(2265),u=n(7213),o=Object.defineProperty,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&l(e,n,t[n]);if(c)for(var n of c(t))a.call(t,n)&&l(e,n,t[n]);return e},d=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))0>t.indexOf(r)&&a.call(e,r)&&(n[r]=e[r]);return n};let f={timeout:1e3};function m(e){let t=(0,u.N4)("CopyButton",f,e),{children:n,timeout:o,value:c}=t,i=d(t,["children","timeout","value"]),a=function({timeout:e=2e3}={}){let[t,n]=(0,r.useState)(null),[u,o]=(0,r.useState)(!1),[c,i]=(0,r.useState)(null),a=t=>{clearTimeout(c),i(setTimeout(()=>o(!1),e)),o(t)};return{copy:e=>{"clipboard"in navigator?navigator.clipboard.writeText(e).then(()=>a(!0)).catch(e=>n(e)):n(Error("useClipboard: navigator.clipboard is not supported"))},reset:()=>{o(!1),n(null),clearTimeout(c)},error:t,copied:u}}({timeout:o});return r.createElement(r.Fragment,null,n(s({copy:()=>a.copy(c),copied:a.copied},i)))}m.displayName="@mantine/core/CopyButton"},8298:function(e,t,n){"use strict";n.d(t,{E:function(){return o},r:function(){return c}});var r=n(2265),u=n(6269);let o=e=>({x:(0,u.u)(e.x,0,1),y:(0,u.u)(e.y,0,1)});function c(e,t,n="ltr"){let o=(0,r.useRef)(),c=(0,r.useRef)(!1),i=(0,r.useRef)(!1),a=(0,r.useRef)(0),[l,s]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{c.current=!0},[]),(0,r.useEffect)(()=>{let r=({x:t,y:r})=>{cancelAnimationFrame(a.current),a.current=requestAnimationFrame(()=>{if(c.current&&o.current){o.current.style.userSelect="none";let c=o.current.getBoundingClientRect();if(c.width&&c.height){let o=(0,u.u)((t-c.left)/c.width,0,1);e({x:"ltr"===n?o:1-o,y:(0,u.u)((r-c.top)/c.height,0,1)})}}})},l=()=>{document.addEventListener("mousemove",p),document.addEventListener("mouseup",m),document.addEventListener("touchmove",E),document.addEventListener("touchend",m)},d=()=>{document.removeEventListener("mousemove",p),document.removeEventListener("mouseup",m),document.removeEventListener("touchmove",E),document.removeEventListener("touchend",m)},f=()=>{!i.current&&c.current&&(i.current=!0,"function"==typeof(null==t?void 0:t.onScrubStart)&&t.onScrubStart(),s(!0),l())},m=()=>{i.current&&c.current&&(i.current=!1,s(!1),d(),setTimeout(()=>{"function"==typeof(null==t?void 0:t.onScrubEnd)&&t.onScrubEnd()},0))},v=e=>{f(),e.preventDefault(),p(e)},p=e=>r({x:e.clientX,y:e.clientY}),h=e=>{e.cancelable&&e.preventDefault(),f(),E(e)},E=e=>{e.cancelable&&e.preventDefault(),r({x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY})};return o.current.addEventListener("mousedown",v),o.current.addEventListener("touchstart",h,{passive:!1}),()=>{o.current&&(o.current.removeEventListener("mousedown",v),o.current.removeEventListener("touchstart",h))}},[n,e]),{ref:o,active:l}}},6269:function(e,t,n){"use strict";function r(e,t,n){return Math.min(Math.max(e,t),n)}n.d(t,{u:function(){return r}})}},function(e){e.O(0,[2291,2972,7213,4942,3719,816,3766,5905,8003,1898,2420,7217,47,989,2971,2117,1744],function(){return e(e.s=46352)}),_N_E=e.O()}]);