"use strict";(globalThis.webpackChunk_ampath_esm_ampath_core_app=globalThis.webpackChunk_ampath_esm_ampath_core_app||[]).push([[833],{3079:(e,t,a)=>{a.d(t,{A:()=>l});var r=a(2001),n=a.n(r),o=a(935),s=a.n(o)()(n());s.push([e.id,".-esm-ampath-core__ampath-dashboard__dashboardContainer___O9Ixj{display:-webkit-flex;height:90vh;position:relative;overflow-y:hidden}.-esm-ampath-core__ampath-dashboard__dashboardContent___yyJiw{margin:0;flex-basis:75%;flex-grow:1;flex-shrink:1;position:relative;overflow-y:auto;margin-left:16rem;padding-left:0;padding-right:0;max-width:100% !important}.-esm-ampath-core__ampath-dashboard__noMarker___eCx79{list-style-type:none}.-esm-ampath-core__ampath-dashboard__noMarker___eCx79 ul li a{padding-left:40px !important;font:lighter}.-esm-ampath-core__ampath-dashboard__currentNavItem___TX4nD>a{background-color:#cecece !important;color:#161616 !important;border-left-color:var(--brand-01) !important;font:bolder}.-esm-ampath-core__ampath-dashboard__hide___p6lnN{display:none}@media(max-width: 1200px){.-esm-ampath-core__ampath-dashboard__dashboardContent___yyJiw{margin-left:0}}","",{version:3,sources:["webpack://./src/ampath-dashboard/ampath-dashboard.scss"],names:[],mappings:"AAEA,gEACE,oBAAA,CACA,WAAA,CACA,iBAAA,CACA,iBAAA,CAGF,8DACE,QAAA,CACA,cAAA,CACA,WAAA,CACA,aAAA,CACA,iBAAA,CACA,eAAA,CACA,iBAAA,CACA,cAAA,CACA,eAAA,CACA,yBAAA,CAGF,sDACE,oBAAA,CAGF,8DACE,4BAAA,CACA,YAAA,CAGF,8DACE,mCAAA,CACA,wBAAA,CACA,4CAAA,CACA,WAAA,CAGF,kDACE,YAAA,CAGF,0BACE,8DACE,aAAA,CAAA",sourceRoot:""}]),s.locals={dashboardContainer:"-esm-ampath-core__ampath-dashboard__dashboardContainer___O9Ixj",dashboardContent:"-esm-ampath-core__ampath-dashboard__dashboardContent___yyJiw",noMarker:"-esm-ampath-core__ampath-dashboard__noMarker___eCx79",currentNavItem:"-esm-ampath-core__ampath-dashboard__currentNavItem___TX4nD",hide:"-esm-ampath-core__ampath-dashboard__hide___p6lnN"};const l=s},7833:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});var r=a(380),n=a.n(r),o=a(8877),s=a(1083),l=a(2591),i=a.n(l),A=a(1740),m=a.n(A),c=a(8128),d=a.n(c),u=a(855),h=a.n(u),_=a(3051),p=a.n(_),b=a(3656),f=a.n(b),C=a(3079),y={};y.styleTagTransform=f(),y.setAttributes=h(),y.insert=d().bind(null,"head"),y.domAPI=m(),y.insertStyleElement=p(),i()(C.A,y);const v=C.A&&C.A.locals?C.A.locals:void 0;function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function g(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var a=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var r,n,o=[],s=!0,l=!1;try{for(a=a.call(e);!(s=(r=a.next()).done)&&(o.push(r.value),!t||o.length!==t);s=!0);}catch(e){l=!0,n=e}finally{try{s||null==a.return||a.return()}finally{if(l)throw n}}return o}}(e,t)||k(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function w(e){return function(e){if(Array.isArray(e))return E(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||k(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function k(e,t){if(e){if("string"==typeof e)return E(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(a):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?E(e,t):void 0}}var x=function(e){var t=e.groupSlot,a=e.dashboards,o=e.setDashboards,l=e.updateDashboardState,i=(0,s.useExtensionSlotMeta)(t);return(0,r.useEffect)((function(){var e;i&&Object.keys(i).length&&((e=a).push.apply(e,w(Object.values(i).filter((function(e){return Object.keys(e).length})))),l&&o(w(a)))}),[i]),n().createElement(n().Fragment,null)};const S=function(){var e=(0,o.useParams)().view,t=g((0,r.useState)([]),2),a=t[0],l=t[1],i=(0,s.useExtensionSlotMeta)("dashboard-links-slot"),A=(0,s.useExtensionSlotMeta)("dashboard-slot"),m=g((0,r.useState)(null),2),c=m[0],d=m[1],u=(0,s.useLayoutType)();(0,r.useEffect)((function(){e?d(a.find((function(t){return t.name==e}))):c||d(a[0])}),[e,a]),(0,r.useEffect)((function(){return(0,s.isDesktop)(u)||(0,s.attach)("nav-menu-slot","ampath-nav-items-ext"),function(){return(0,s.detach)("nav-menu-slot","ampath-nav-items-ext")}}),[u]),(0,r.useEffect)((function(){var e=A?Object.values(A).filter((function(e){return e.isLink})):[],t=w(Object.values(i).filter((function(e){return Object.keys(e).length}))).concat(w(e));t.length&&l(w(a).concat(w(t)))}),[i,A]);var h=(0,r.useMemo)((function(){var e;return c?{programme:null==c||null===(e=c.config)||void 0===e?void 0:e.programme,dashboardTitle:c.title}:null}),[c]);return n().createElement("div",{className:v.dashboardContainer},Object.values(A).map((function(e,t){return n().createElement(x,{groupSlot:e.slot,dashboards:a,setDashboards:l,updateDashboardState:t==Object.keys(A).length-1,key:t})})),(0,s.isDesktop)(u)&&n().createElement(s.ExtensionSlot,{name:"ampath-nav-items-slot",key:u}),n().createElement("div",{className:" ".concat(v.dashboardContent)},c&&n().createElement(s.ExtensionSlot,{name:c.slot,state:h})))};function j(){return n().createElement(o.BrowserRouter,{basename:window.getOpenmrsSpaBase()},n().createElement(o.Routes,null,n().createElement(o.Route,{path:"/dashboard",element:n().createElement(S,null)}),n().createElement(o.Route,{path:"/dashboard/:view",element:n().createElement(S,null)}),n().createElement(o.Route,{path:"/home",element:n().createElement(o.Navigate,{to:"/dashboard/home",replace:!0})})))}}}]);