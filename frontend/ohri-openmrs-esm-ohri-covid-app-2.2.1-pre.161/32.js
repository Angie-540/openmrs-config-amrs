/*! For license information please see 32.js.LICENSE.txt */
"use strict";(globalThis.webpackChunk_ohri_openmrs_esm_ohri_covid_app=globalThis.webpackChunk_ohri_openmrs_esm_ohri_covid_app||[]).push([[32],{4666:(e,n,t)=>{var r=t(268),i="function"==typeof Object.is?Object.is:function(e,n){return e===n&&(0!==e||1/e==1/n)||e!=e&&n!=n},a=r.useState,u=r.useEffect,o=r.useLayoutEffect,s=r.useDebugValue;function c(e){var n=e.getSnapshot;e=e.value;try{var t=n();return!i(e,t)}catch(e){return!0}}var l="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,n){return n()}:function(e,n){var t=n(),r=a({inst:{value:t,getSnapshot:n}}),i=r[0].inst,l=r[1];return o((function(){i.value=t,i.getSnapshot=n,c(i)&&l({inst:i})}),[e,t,n]),u((function(){return c(i)&&l({inst:i}),e((function(){c(i)&&l({inst:i})}))}),[e]),s(t),t};n.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:l},5495:(e,n,t)=>{e.exports=t(4666)},1032:(e,n,t)=>{t.d(n,{JG:()=>a.mutate,ZP:()=>v,kY:()=>a.useSWRConfig});var r=t(268),i=t(5495),a=t(3325);function u(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}function o(e,n,t,r,i,a,u){try{var o=e[a](u),s=o.value}catch(e){return void t(e)}o.done?n(s):Promise.resolve(s).then(r,i)}function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,i,a=[],u=!0,o=!1;try{for(t=t.call(e);!(u=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);u=!0);}catch(e){o=!0,i=e}finally{try{u||null==t.return||t.return()}finally{if(o)throw i}}return a}}(e,n)||l(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,n){if(e){if("string"==typeof e)return u(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(t):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?u(e,n):void 0}}var f=r.use||function(e){if("pending"===e.status)throw e;if("fulfilled"===e.status)return e.value;throw"rejected"===e.status?e.reason:(e.status="pending",e.then((function(n){e.status="fulfilled",e.value=n}),(function(n){e.status="rejected",e.reason=n})),e)},d={dedupe:!0},v=(a.OBJECT.defineProperty(a.SWRConfig,"defaultValue",{value:a.defaultConfig}),(0,a.withArgs)((function(e,n,t){var v,p,h=t.cache,y=t.compare,b=t.suspense,g=t.fallbackData,E=t.revalidateOnMount,m=t.revalidateIfStale,S=t.refreshInterval,w=t.refreshWhenHidden,R=t.refreshWhenOffline,_=t.keepPreviousData,T=c(a.SWRGlobalState.get(h),4),U=T[0],O=T[1],V=T[2],A=T[3],C=c((0,a.serialize)(e),2),k=C[0],I=C[1],L=(0,r.useRef)(!1),j=(0,r.useRef)(!1),D=(0,r.useRef)(k),P=(0,r.useRef)(n),N=(0,r.useRef)(t),x=function(){return N.current},F=function(){return x().isVisible()&&x().isOnline()},G=c((0,a.createCacheHelper)(h,k),4),M=G[0],W=G[1],Y=G[2],H=G[3],J=(0,r.useRef)({}).current,q=(0,a.isUndefined)(g)?t.fallback[k]:g,z=function(e,n){for(var t in J){var r=t;if("data"===r){if(!y(e[r],n[r])){if(!(0,a.isUndefined)(e[r]))return!1;if(!y(te,n[r]))return!1}}else if(n[r]!==e[r])return!1}return!0},B=(0,r.useMemo)((function(){var e=!!k&&!!n&&((0,a.isUndefined)(E)?!x().isPaused()&&!b&&(!!(0,a.isUndefined)(m)||m):E),t=function(n){var t=(0,a.mergeObjects)(n);return delete t._k,e?function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){s(e,n,t[n])}))}return e}({isValidating:!0,isLoading:!0},t):t},r=M(),i=H(),u=t(r),o=r===i?u:t(i),c=u;return[function(){var e=t(M());return z(e,c)?(c.data=e.data,c.isLoading=e.isLoading,c.isValidating=e.isValidating,c.error=e.error,c):(c=e,e)},function(){return o}]}),[h,k]),Z=(0,i.useSyncExternalStore)((0,r.useCallback)((function(e){return Y(k,(function(n,t){z(t,n)||e()}))}),[h,k]),B[0],B[1]),$=!L.current,K=U[k]&&U[k].length>0,Q=Z.data,X=(0,a.isUndefined)(Q)?q:Q,ee=Z.error,ne=(0,r.useRef)(X),te=_?(0,a.isUndefined)(Q)?ne.current:Q:X,re=!(K&&!(0,a.isUndefined)(ee))&&($&&!(0,a.isUndefined)(E)?E:!x().isPaused()&&(b?!(0,a.isUndefined)(X)&&m:(0,a.isUndefined)(X)||m)),ie=!!(k&&n&&$&&re),ae=(0,a.isUndefined)(Z.isValidating)?ie:Z.isValidating,ue=(0,a.isUndefined)(Z.isLoading)?ie:Z.isLoading,oe=(0,r.useCallback)((v=function(e){var n,r,i,u,o,s,l,f,d,v,p,h,b,g,E,m,S;return function(e,n){var t,r,i,a,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return a={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function o(a){return function(o){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;u;)try{if(t=1,r&&(i=2&a[0]?r.return:a[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,a[1])).done)return i;switch(r=0,i&&(a=[2&a[0],i.value]),a[0]){case 0:case 1:i=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!((i=(i=u.trys).length>0&&i[i.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!i||a[1]>i[0]&&a[1]<i[3])){u.label=a[1];break}if(6===a[0]&&u.label<i[1]){u.label=i[1],i=a;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(a);break}i[2]&&u.ops.pop(),u.trys.pop();continue}a=n.call(e,u)}catch(e){a=[6,e],r=0}finally{t=i=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,o])}}}(this,(function(w){switch(w.label){case 0:if(n=P.current,!k||!n||j.current||x().isPaused())return[2,!1];u=!0,o=e||{},s=!V[k]||!o.dedupe,l=function(){return a.IS_REACT_LEGACY?!j.current&&k===D.current&&L.current:k===D.current},f={isValidating:!1,isLoading:!1},d=function(){W(f)},v=function(){var e=V[k];e&&e[1]===i&&delete V[k]},p={isValidating:!0},(0,a.isUndefined)(M().data)&&(p.isLoading=!0),w.label=1;case 1:return w.trys.push([1,3,,4]),s&&(W(p),t.loadingTimeout&&(0,a.isUndefined)(M().data)&&setTimeout((function(){u&&l()&&x().onLoadingSlow(k,t)}),t.loadingTimeout),V[k]=[n(I),(0,a.getTimestamp)()]),h=c(V[k],2),r=h[0],i=h[1],[4,r];case 2:return r=w.sent(),s&&setTimeout(v,t.dedupingInterval),V[k]&&V[k][1]===i?(f.error=a.UNDEFINED,b=O[k],!(0,a.isUndefined)(b)&&(i<=b[0]||i<=b[1]||0===b[1])?(d(),s&&l()&&x().onDiscarded(k),[2,!1]):(g=M().data,f.data=y(g,r)?g:r,s&&l()&&x().onSuccess(r,k,t),[3,4])):(s&&l()&&x().onDiscarded(k),[2,!1]);case 3:return E=w.sent(),v(),m=x(),S=m.shouldRetryOnError,m.isPaused()||(f.error=E,s&&l()&&(m.onError(E,k,m),(!0===S||(0,a.isFunction)(S)&&S(E))&&F()&&m.onErrorRetry(E,k,m,(function(e){var n=U[k];n&&n[0]&&n[0](a.revalidateEvents.ERROR_REVALIDATE_EVENT,e)}),{retryCount:(o.retryCount||0)+1,dedupe:!0}))),[3,4];case 4:return u=!1,d(),[2,!0]}}))},p=function(){var e=this,n=arguments;return new Promise((function(t,r){var i=v.apply(e,n);function a(e){o(i,t,r,a,u,"next",e)}function u(e){o(i,t,r,a,u,"throw",e)}a(void 0)}))},function(e){return p.apply(this,arguments)}),[k,h]),se=(0,r.useCallback)((function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return a.internalMutate.apply(void 0,[h,D.current].concat(function(e){if(Array.isArray(e))return u(e)}(r=n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||l(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()));var r}),[]);if((0,a.useIsomorphicLayoutEffect)((function(){P.current=n,N.current=t,(0,a.isUndefined)(Q)||(ne.current=Q)})),(0,a.useIsomorphicLayoutEffect)((function(){if(k){var e=oe.bind(a.UNDEFINED,d),n=0,t=(0,a.subscribeCallback)(k,U,(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(t==a.revalidateEvents.FOCUS_EVENT){var i=Date.now();x().revalidateOnFocus&&i>n&&F()&&(n=i+x().focusThrottleInterval,e())}else if(t==a.revalidateEvents.RECONNECT_EVENT)x().revalidateOnReconnect&&F()&&e();else{if(t==a.revalidateEvents.MUTATE_EVENT)return oe();if(t==a.revalidateEvents.ERROR_REVALIDATE_EVENT)return oe(r)}}));return j.current=!1,D.current=k,L.current=!0,W({_k:I}),re&&((0,a.isUndefined)(X)||a.IS_SERVER?e():(0,a.rAF)(e)),function(){j.current=!0,t()}}}),[k]),(0,a.useIsomorphicLayoutEffect)((function(){var e,n=function(){var n=(0,a.isFunction)(S)?S(M().data):S;n&&-1!==e&&(e=setTimeout(t,n))},t=function(){M().error||!w&&!x().isVisible()||!R&&!x().isOnline()?n():oe(d).then(n)};return n(),function(){e&&(clearTimeout(e),e=-1)}}),[S,w,R,k]),(0,r.useDebugValue)(te),b&&(0,a.isUndefined)(X)&&k){if(!a.IS_REACT_LEGACY&&a.IS_SERVER)throw new Error("Fallback data is required when using suspense in SSR.");P.current=n,N.current=t,j.current=!1;var ce=A[k];if(!(0,a.isUndefined)(ce)){var le=se(ce);f(le)}if(!(0,a.isUndefined)(ee))throw ee;var fe=oe(d);(0,a.isUndefined)(te)||(fe.status="fulfilled",fe.value=!0),f(fe)}return{mutate:se,get data(){return J.data=!0,te},get error(){return J.error=!0,ee},get isValidating(){return J.isValidating=!0,ae},get isLoading(){return J.isLoading=!0,ue}}})))}}]);