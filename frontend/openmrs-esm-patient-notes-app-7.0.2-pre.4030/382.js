"use strict";(globalThis.webpackChunk_openmrs_esm_patient_notes_app=globalThis.webpackChunk_openmrs_esm_patient_notes_app||[]).push([[382,635],{6635:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d,infinite:()=>o,unstable_serialize:()=>c});var r=a(268),n=a(3255),i=a(3325),l=a(3100);const s=e=>(0,i.serialize)(e?e(0,null):null)[0],c=e=>i.INFINITE_PREFIX+s(e),u=Promise.resolve(),o=e=>(t,a,n)=>{const c=(0,r.useRef)(!1),{cache:o,initialSize:d=1,revalidateAll:p=!1,persistSize:f=!1,revalidateFirstPage:_=!0,revalidateOnMount:h=!1,parallel:b=!1}=n,[,,,m]=i.SWRGlobalState.get(i.cache);let g;try{g=s(t),g&&(g=i.INFINITE_PREFIX+g)}catch(e){}const[C,k,I]=(0,i.createCacheHelper)(o,g),E=(0,r.useCallback)((()=>(0,i.isUndefined)(C()._l)?d:C()._l),[o,g,d]);(0,l.useSyncExternalStore)((0,r.useCallback)((e=>g?I(g,(()=>{e()})):()=>{}),[o,g]),E,E);const U=(0,r.useCallback)((()=>{const e=C()._l;return(0,i.isUndefined)(e)?d:e}),[g,d]),v=(0,r.useRef)(U());(0,i.useIsomorphicLayoutEffect)((()=>{c.current?g&&k({_l:f?v.current:U()}):c.current=!0}),[g,o]);const w=h&&!c.current,y=e(g,(async e=>{const r=C()._i,l=[],s=U(),[c]=(0,i.createCacheHelper)(o,e),u=c().data,d=[];let f=null;for(let e=0;e<s;++e){const[s,c]=(0,i.serialize)(t(e,b?null:f));if(!s)break;const[h,g]=(0,i.createCacheHelper)(o,s);let C=h().data;const k=p||r||(0,i.isUndefined)(C)||_&&!e&&!(0,i.isUndefined)(u)||w||u&&!(0,i.isUndefined)(u[e])&&!n.compare(u[e],C);if(a&&k){const t=async()=>{if(s in m){const e=m[s];delete m[s],C=await e}else C=await a(c);g({data:C,_k:c}),l[e]=C};b?d.push(t):await t()}else l[e]=C;b||(f=C)}return b&&await Promise.all(d.map((e=>e()))),k({_i:i.UNDEFINED}),l}),n),z=(0,r.useCallback)((function(e,t){const a="boolean"==typeof t?{revalidate:t}:t||{},r=!1!==a.revalidate;return g?(r&&((0,i.isUndefined)(e)?k({_i:!0}):k({_i:!1})),arguments.length?y.mutate(e,{...a,revalidate:r}):y.mutate()):u}),[g,o]),F=(0,r.useCallback)((e=>{if(!g)return u;const[,a]=(0,i.createCacheHelper)(o,g);let r;if((0,i.isFunction)(e)?r=e(U()):"number"==typeof e&&(r=e),"number"!=typeof r)return u;a({_l:r}),v.current=r;const n=[],[l]=(0,i.createCacheHelper)(o,g);let s=null;for(let e=0;e<r;++e){const[a]=(0,i.serialize)(t(e,s)),[r]=(0,i.createCacheHelper)(o,a),c=a?r().data:i.UNDEFINED;if((0,i.isUndefined)(c))return z(l().data);n.push(c),s=c}return z(n)}),[g,o,z,U]);return{size:U(),setSize:F,mutate:z,get data(){return y.data},get error(){return y.error},get isValidating(){return y.isValidating},get isLoading(){return y.isLoading}}},d=(0,i.withMiddleware)(n.ZP,o)}}]);