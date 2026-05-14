var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||(e((t={exports:{}}).exports,t),e=null),t.exports),s=(e,n)=>{let r={};for(var i in e)t(r,i,{get:e[i],enumerable:!0});return n||t(r,Symbol.toStringTag,{value:`Module`}),r},c=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},l=(n,r,a)=>(a=n==null?{}:e(i(n)),c(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var u=o((e=>{var t=Symbol.for(`react.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.provider`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.iterator;function p(e){return typeof e!=`object`||!e?null:(e=f&&e[f]||e[`@@iterator`],typeof e==`function`?e:null)}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,g={};function _(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}_.prototype.isReactComponent={},_.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`setState(...): takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},_.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function v(){}v.prototype=_.prototype;function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||m}var b=y.prototype=new v;b.constructor=y,h(b,_.prototype),b.isPureReactComponent=!0;var x=Array.isArray,S=Object.prototype.hasOwnProperty,C={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function T(e,n,r){var i,a={},o=null,s=null;if(n!=null)for(i in n.ref!==void 0&&(s=n.ref),n.key!==void 0&&(o=``+n.key),n)S.call(n,i)&&!w.hasOwnProperty(i)&&(a[i]=n[i]);var c=arguments.length-2;if(c===1)a.children=r;else if(1<c){for(var l=Array(c),u=0;u<c;u++)l[u]=arguments[u+2];a.children=l}if(e&&e.defaultProps)for(i in c=e.defaultProps,c)a[i]===void 0&&(a[i]=c[i]);return{$$typeof:t,type:e,key:o,ref:s,props:a,_owner:C.current}}function E(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}function ee(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function D(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var te=/\/+/g;function ne(e,t){return typeof e==`object`&&e&&e.key!=null?D(``+e.key):t.toString(36)}function re(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0}}if(c)return c=e,o=o(c),e=a===``?`.`+ne(c,0):a,x(o)?(i=``,e!=null&&(i=e.replace(te,`$&/`)+`/`),re(o,r,i,``,function(e){return e})):o!=null&&(ee(o)&&(o=E(o,i+(!o.key||c&&c.key===o.key?``:(``+o.key).replace(te,`$&/`)+`/`)+e)),r.push(o)),1;if(c=0,a=a===``?`.`:a+`:`,x(e))for(var l=0;l<e.length;l++){s=e[l];var u=a+ne(s,l);c+=re(s,r,i,u,o)}else if(u=p(e),typeof u==`function`)for(e=u.call(e),l=0;!(s=e.next()).done;)s=s.value,u=a+ne(s,l++),c+=re(s,r,i,u,o);else if(s===`object`)throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`);return c}function ie(e,t,n){if(e==null)return e;var r=[],i=0;return re(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ae(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var O={current:null},oe={transition:null},se={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:oe,ReactCurrentOwner:C};function ce(){throw Error(`act(...) is not supported in production builds of React.`)}e.Children={map:ie,forEach:function(e,t,n){ie(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ie(e,function(){t++}),t},toArray:function(e){return ie(e,function(e){return e})||[]},only:function(e){if(!ee(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}},e.Component=_,e.Fragment=r,e.Profiler=a,e.PureComponent=y,e.StrictMode=i,e.Suspense=l,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=se,e.act=ce,e.cloneElement=function(e,n,r){if(e==null)throw Error(`React.cloneElement(...): The argument must be a React element, but you passed `+e+`.`);var i=h({},e.props),a=e.key,o=e.ref,s=e._owner;if(n!=null){if(n.ref!==void 0&&(o=n.ref,s=C.current),n.key!==void 0&&(a=``+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)S.call(n,l)&&!w.hasOwnProperty(l)&&(i[l]=n[l]===void 0&&c!==void 0?c[l]:n[l])}var l=arguments.length-2;if(l===1)i.children=r;else if(1<l){c=Array(l);for(var u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}return{$$typeof:t,type:e.type,key:a,ref:o,props:i,_owner:s}},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:o,_context:e},e.Consumer=e},e.createElement=T,e.createFactory=function(e){var t=T.bind(null,e);return t.type=e,t},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=ee,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ae}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=oe.transition;oe.transition={};try{e()}finally{oe.transition=t}},e.unstable_act=ce,e.useCallback=function(e,t){return O.current.useCallback(e,t)},e.useContext=function(e){return O.current.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e){return O.current.useDeferredValue(e)},e.useEffect=function(e,t){return O.current.useEffect(e,t)},e.useId=function(){return O.current.useId()},e.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},e.useMemo=function(e,t){return O.current.useMemo(e,t)},e.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},e.useRef=function(e){return O.current.useRef(e)},e.useState=function(e){return O.current.useState(e)},e.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},e.useTransition=function(){return O.current.useTransition()},e.version=`18.3.1`})),d=o(((e,t)=>{t.exports=u()})),f=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=typeof setTimeout==`function`?setTimeout:null,_=typeof clearTimeout==`function`?clearTimeout:null,v=typeof setImmediate<`u`?setImmediate:null;typeof navigator<`u`&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function b(e){if(h=!1,y(e),!m)if(n(c)!==null)m=!0,ie(x);else{var t=n(l);t!==null&&ae(b,t.startTime-e)}}function x(t,i){m=!1,h&&(h=!1,_(w),w=-1),p=!0;var a=f;try{for(y(i),d=n(c);d!==null&&(!(d.expirationTime>i)||t&&!ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=i);i=e.unstable_now(),typeof s==`function`?d.callback=s:d===n(c)&&r(c),y(i)}else r(c);d=n(c)}if(d!==null)var u=!0;else{var g=n(l);g!==null&&ae(b,g.startTime-i),u=!1}return u}finally{d=null,f=a,p=!1}}var S=!1,C=null,w=-1,T=5,E=-1;function ee(){return!(e.unstable_now()-E<T)}function D(){if(C!==null){var t=e.unstable_now();E=t;var n=!0;try{n=C(!0,t)}finally{n?te():(S=!1,C=null)}}else S=!1}var te;if(typeof v==`function`)te=function(){v(D)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=D,te=function(){re.postMessage(null)}}else te=function(){g(D,0)};function ie(e){C=e,S||(S=!0,te())}function ae(t,n){w=g(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_continueExecution=function(){m||p||(m=!0,ie(x))},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):T=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(_(w),w=-1):h=!0,ae(b,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,ie(x))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),p=o(((e,t)=>{t.exports=f()})),m=o((e=>{var t=d(),n=p();function r(e){for(var t=`https://reactjs.org/docs/error-decoder.html?invariant=`+e,n=1;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n]);return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}var i=new Set,a={};function o(e,t){s(e,t),s(e+`Capture`,t)}function s(e,t){for(a[e]=t,e=0;e<t.length;e++)i.add(t[e])}var c=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),l=Object.prototype.hasOwnProperty,u=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,f={},m={};function h(e){return l.call(m,e)?!0:l.call(f,e)?!1:u.test(e)?m[e]=!0:(f[e]=!0,!1)}function g(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case`function`:case`symbol`:return!0;case`boolean`:return r?!1:n===null?(e=e.toLowerCase().slice(0,5),e!==`data-`&&e!==`aria-`):!n.acceptsBooleans;default:return!1}}function _(e,t,n,r){if(t==null||g(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function v(e,t,n,r,i,a,o){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=o}var y={};`children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style`.split(` `).forEach(function(e){y[e]=new v(e,0,!1,e,null,!1,!1)}),[[`acceptCharset`,`accept-charset`],[`className`,`class`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`]].forEach(function(e){var t=e[0];y[t]=new v(t,1,!1,e[1],null,!1,!1)}),[`contentEditable`,`draggable`,`spellCheck`,`value`].forEach(function(e){y[e]=new v(e,2,!1,e.toLowerCase(),null,!1,!1)}),[`autoReverse`,`externalResourcesRequired`,`focusable`,`preserveAlpha`].forEach(function(e){y[e]=new v(e,2,!1,e,null,!1,!1)}),`allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope`.split(` `).forEach(function(e){y[e]=new v(e,3,!1,e.toLowerCase(),null,!1,!1)}),[`checked`,`multiple`,`muted`,`selected`].forEach(function(e){y[e]=new v(e,3,!0,e,null,!1,!1)}),[`capture`,`download`].forEach(function(e){y[e]=new v(e,4,!1,e,null,!1,!1)}),[`cols`,`rows`,`size`,`span`].forEach(function(e){y[e]=new v(e,6,!1,e,null,!1,!1)}),[`rowSpan`,`start`].forEach(function(e){y[e]=new v(e,5,!1,e.toLowerCase(),null,!1,!1)});var b=/[\-:]([a-z])/g;function x(e){return e[1].toUpperCase()}`accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,null,!1,!1)}),`xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type`.split(` `).forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/1999/xlink`,!1,!1)}),[`xml:base`,`xml:lang`,`xml:space`].forEach(function(e){var t=e.replace(b,x);y[t]=new v(t,1,!1,e,`http://www.w3.org/XML/1998/namespace`,!1,!1)}),[`tabIndex`,`crossOrigin`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!1,!1)}),y.xlinkHref=new v(`xlinkHref`,1,!1,`xlink:href`,`http://www.w3.org/1999/xlink`,!0,!1),[`src`,`href`,`action`,`formAction`].forEach(function(e){y[e]=new v(e,1,!1,e.toLowerCase(),null,!0,!0)});function S(e,t,n,r){var i=y.hasOwnProperty(t)?y[t]:null;(i===null?r||!(2<t.length)||t[0]!==`o`&&t[0]!==`O`||t[1]!==`n`&&t[1]!==`N`:i.type!==0)&&(_(t,n,i,r)&&(n=null),r||i===null?h(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,``+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:``:n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&!0===n?``:``+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var C=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for(`react.element`),T=Symbol.for(`react.portal`),E=Symbol.for(`react.fragment`),ee=Symbol.for(`react.strict_mode`),D=Symbol.for(`react.profiler`),te=Symbol.for(`react.provider`),ne=Symbol.for(`react.context`),re=Symbol.for(`react.forward_ref`),ie=Symbol.for(`react.suspense`),ae=Symbol.for(`react.suspense_list`),O=Symbol.for(`react.memo`),oe=Symbol.for(`react.lazy`),se=Symbol.for(`react.offscreen`),ce=Symbol.iterator;function le(e){return typeof e!=`object`||!e?null:(e=ce&&e[ce]||e[`@@iterator`],typeof e==`function`?e:null)}var k=Object.assign,ue;function de(e){if(ue===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);ue=t&&t[1]||``}return`
`+ue+e}var fe=!1;function pe(e,t){if(!e||fe)return``;fe=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(t,[])}catch(e){var r=e}Reflect.construct(e,[],t)}else{try{t.call()}catch(e){r=e}e.call(t.prototype)}else{try{throw Error()}catch(e){r=e}e()}}catch(t){if(t&&r&&typeof t.stack==`string`){for(var i=t.stack.split(`
`),a=r.stack.split(`
`),o=i.length-1,s=a.length-1;1<=o&&0<=s&&i[o]!==a[s];)s--;for(;1<=o&&0<=s;o--,s--)if(i[o]!==a[s]){if(o!==1||s!==1)do if(o--,s--,0>s||i[o]!==a[s]){var c=`
`+i[o].replace(` at new `,` at `);return e.displayName&&c.includes(`<anonymous>`)&&(c=c.replace(`<anonymous>`,e.displayName)),c}while(1<=o&&0<=s);break}}}finally{fe=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:``)?de(e):``}function me(e){switch(e.tag){case 5:return de(e.type);case 16:return de(`Lazy`);case 13:return de(`Suspense`);case 19:return de(`SuspenseList`);case 0:case 2:case 15:return e=pe(e.type,!1),e;case 11:return e=pe(e.type.render,!1),e;case 1:return e=pe(e.type,!0),e;default:return``}}function he(e){if(e==null)return null;if(typeof e==`function`)return e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case E:return`Fragment`;case T:return`Portal`;case D:return`Profiler`;case ee:return`StrictMode`;case ie:return`Suspense`;case ae:return`SuspenseList`}if(typeof e==`object`)switch(e.$$typeof){case ne:return(e.displayName||`Context`)+`.Consumer`;case te:return(e._context.displayName||`Context`)+`.Provider`;case re:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case O:return t=e.displayName||null,t===null?he(e.type)||`Memo`:t;case oe:t=e._payload,e=e._init;try{return he(e(t))}catch{}}return null}function ge(e){var t=e.type;switch(e.tag){case 24:return`Cache`;case 9:return(t.displayName||`Context`)+`.Consumer`;case 10:return(t._context.displayName||`Context`)+`.Provider`;case 18:return`DehydratedFragment`;case 11:return e=t.render,e=e.displayName||e.name||``,t.displayName||(e===``?`ForwardRef`:`ForwardRef(`+e+`)`);case 7:return`Fragment`;case 5:return t;case 4:return`Portal`;case 3:return`Root`;case 6:return`Text`;case 16:return he(t);case 8:return t===ee?`StrictMode`:`Mode`;case 22:return`Offscreen`;case 12:return`Profiler`;case 21:return`Scope`;case 13:return`Suspense`;case 19:return`SuspenseList`;case 25:return`TracingMarker`;case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t==`function`)return t.displayName||t.name||null;if(typeof t==`string`)return t}return null}function _e(e){switch(typeof e){case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function ve(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function ye(e){var t=ve(e)?`checked`:`value`,n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=``+e[t];if(!e.hasOwnProperty(t)&&n!==void 0&&typeof n.get==`function`&&typeof n.set==`function`){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function be(e){e._valueTracker||=ye(e)}function xe(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=ve(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Se(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}function Ce(e,t){var n=t.checked;return k({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function we(e,t){var n=t.defaultValue==null?``:t.defaultValue,r=t.checked==null?t.defaultChecked:t.checked;n=_e(t.value==null?n:t.value),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type===`checkbox`||t.type===`radio`?t.checked!=null:t.value!=null}}function Te(e,t){t=t.checked,t!=null&&S(e,`checked`,t,!1)}function Ee(e,t){Te(e,t);var n=_e(t.value),r=t.type;if(n!=null)r===`number`?(n===0&&e.value===``||e.value!=n)&&(e.value=``+n):e.value!==``+n&&(e.value=``+n);else if(r===`submit`||r===`reset`){e.removeAttribute(`value`);return}t.hasOwnProperty(`value`)?Oe(e,t.type,n):t.hasOwnProperty(`defaultValue`)&&Oe(e,t.type,_e(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function De(e,t,n){if(t.hasOwnProperty(`value`)||t.hasOwnProperty(`defaultValue`)){var r=t.type;if(!(r!==`submit`&&r!==`reset`||t.value!==void 0&&t.value!==null))return;t=``+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==``&&(e.name=``),e.defaultChecked=!!e._wrapperState.initialChecked,n!==``&&(e.name=n)}function Oe(e,t,n){(t!==`number`||Se(e.ownerDocument)!==e)&&(n==null?e.defaultValue=``+e._wrapperState.initialValue:e.defaultValue!==``+n&&(e.defaultValue=``+n))}var ke=Array.isArray;function Ae(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+_e(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function je(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(r(91));return k({},t,{value:void 0,defaultValue:void 0,children:``+e._wrapperState.initialValue})}function Me(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(r(92));if(ke(n)){if(1<n.length)throw Error(r(93));n=n[0]}t=n}t??=``,n=t}e._wrapperState={initialValue:_e(n)}}function Ne(e,t){var n=_e(t.value),r=_e(t.defaultValue);n!=null&&(n=``+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=``+r)}function Pe(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==``&&t!==null&&(e.value=t)}function Fe(e){switch(e){case`svg`:return`http://www.w3.org/2000/svg`;case`math`:return`http://www.w3.org/1998/Math/MathML`;default:return`http://www.w3.org/1999/xhtml`}}function Ie(e,t){return e==null||e===`http://www.w3.org/1999/xhtml`?Fe(t):e===`http://www.w3.org/2000/svg`&&t===`foreignObject`?`http://www.w3.org/1999/xhtml`:e}var Le,Re=function(e){return typeof MSApp<`u`&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!==`http://www.w3.org/2000/svg`||`innerHTML`in e)e.innerHTML=t;else{for(Le||=document.createElement(`div`),Le.innerHTML=`<svg>`+t.valueOf().toString()+`</svg>`,t=Le.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function ze(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Be={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ve=[`Webkit`,`ms`,`Moz`,`O`];Object.keys(Be).forEach(function(e){Ve.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Be[t]=Be[e]})});function He(e,t,n){return t==null||typeof t==`boolean`||t===``?``:n||typeof t!=`number`||t===0||Be.hasOwnProperty(e)&&Be[e]?(``+t).trim():t+`px`}function Ue(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=n.indexOf(`--`)===0,i=He(n,t[n],r);n===`float`&&(n=`cssFloat`),r?e.setProperty(n,i):e[n]=i}}var We=k({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ge(e,t){if(t){if(We[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(r(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(r(60));if(typeof t.dangerouslySetInnerHTML!=`object`||!(`__html`in t.dangerouslySetInnerHTML))throw Error(r(61))}if(t.style!=null&&typeof t.style!=`object`)throw Error(r(62))}}function Ke(e,t){if(e.indexOf(`-`)===-1)return typeof t.is==`string`;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var qe=null;function Je(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ye=null,Xe=null,Ze=null;function Qe(e){if(e=Ki(e)){if(typeof Ye!=`function`)throw Error(r(280));var t=e.stateNode;t&&(t=Ji(t),Ye(e.stateNode,e.type,t))}}function $e(e){Xe?Ze?Ze.push(e):Ze=[e]:Xe=e}function et(){if(Xe){var e=Xe,t=Ze;if(Ze=Xe=null,Qe(e),t)for(e=0;e<t.length;e++)Qe(t[e])}}function tt(e,t){return e(t)}function nt(){}var rt=!1;function it(e,t,n){if(rt)return e(t,n);rt=!0;try{return tt(e,t,n)}finally{rt=!1,(Xe!==null||Ze!==null)&&(nt(),et())}}function at(e,t){var n=e.stateNode;if(n===null)return null;var i=Ji(n);if(i===null)return null;n=i[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(i=!i.disabled)||(e=e.type,i=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!i;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(r(231,t,typeof n));return n}var ot=!1;if(c)try{var st={};Object.defineProperty(st,`passive`,{get:function(){ot=!0}}),window.addEventListener(`test`,st,st),window.removeEventListener(`test`,st,st)}catch{ot=!1}function ct(e,t,n,r,i,a,o,s,c){var l=Array.prototype.slice.call(arguments,3);try{t.apply(n,l)}catch(e){this.onError(e)}}var lt=!1,ut=null,dt=!1,ft=null,pt={onError:function(e){lt=!0,ut=e}};function mt(e,t,n,r,i,a,o,s,c){lt=!1,ut=null,ct.apply(pt,arguments)}function ht(e,t,n,i,a,o,s,c,l){if(mt.apply(this,arguments),lt){if(lt){var u=ut;lt=!1,ut=null}else throw Error(r(198));dt||(dt=!0,ft=u)}}function gt(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function _t(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function vt(e){if(gt(e)!==e)throw Error(r(188))}function yt(e){var t=e.alternate;if(!t){if(t=gt(e),t===null)throw Error(r(188));return t===e?e:null}for(var n=e,i=t;;){var a=n.return;if(a===null)break;var o=a.alternate;if(o===null){if(i=a.return,i!==null){n=i;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return vt(a),e;if(o===i)return vt(a),t;o=o.sibling}throw Error(r(188))}if(n.return!==i.return)n=a,i=o;else{for(var s=!1,c=a.child;c;){if(c===n){s=!0,n=a,i=o;break}if(c===i){s=!0,i=a,n=o;break}c=c.sibling}if(!s){for(c=o.child;c;){if(c===n){s=!0,n=o,i=a;break}if(c===i){s=!0,i=o,n=a;break}c=c.sibling}if(!s)throw Error(r(189))}}if(n.alternate!==i)throw Error(r(190))}if(n.tag!==3)throw Error(r(188));return n.stateNode.current===n?e:t}function bt(e){return e=yt(e),e===null?null:xt(e)}function xt(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=xt(e);if(t!==null)return t;e=e.sibling}return null}var St=n.unstable_scheduleCallback,Ct=n.unstable_cancelCallback,wt=n.unstable_shouldYield,Tt=n.unstable_requestPaint,Et=n.unstable_now,Dt=n.unstable_getCurrentPriorityLevel,Ot=n.unstable_ImmediatePriority,kt=n.unstable_UserBlockingPriority,At=n.unstable_NormalPriority,jt=n.unstable_LowPriority,Mt=n.unstable_IdlePriority,Nt=null,Pt=null;function Ft(e){if(Pt&&typeof Pt.onCommitFiberRoot==`function`)try{Pt.onCommitFiberRoot(Nt,e,void 0,(e.current.flags&128)==128)}catch{}}var It=Math.clz32?Math.clz32:Rt,Lt=Math.log,A=Math.LN2;function Rt(e){return e>>>=0,e===0?32:31-(Lt(e)/A|0)|0}var j=64,zt=4194304;function Bt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Vt(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,a=e.pingedLanes,o=n&268435455;if(o!==0){var s=o&~i;s===0?(a&=o,a!==0&&(r=Bt(a))):r=Bt(s)}else o=n&~i,o===0?a!==0&&(r=Bt(a)):r=Bt(o);if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,a=t&-t,i>=a||i===16&&a&4194240))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-It(t),i=1<<n,r|=e[n],t&=~i;return r}function Ht(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ut(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes;0<a;){var o=31-It(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=Ht(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}}function Wt(e){return e=e.pendingLanes&-1073741825,e===0?e&1073741824?1073741824:0:e}function Gt(){var e=j;return j<<=1,!(j&4194240)&&(j=64),e}function Kt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function qt(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-It(t),e[t]=n}function Jt(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-It(n),a=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~a}}function Yt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-It(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var M=0;function Xt(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var N,Zt,Qt,$t,en,tn=!1,nn=[],rn=null,an=null,on=null,sn=new Map,cn=new Map,ln=[],un=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit`.split(` `);function dn(e,t){switch(e){case`focusin`:case`focusout`:rn=null;break;case`dragenter`:case`dragleave`:an=null;break;case`mouseover`:case`mouseout`:on=null;break;case`pointerover`:case`pointerout`:sn.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:cn.delete(t.pointerId)}}function fn(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ki(t),t!==null&&Zt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function pn(e,t,n,r,i){switch(t){case`focusin`:return rn=fn(rn,e,t,n,r,i),!0;case`dragenter`:return an=fn(an,e,t,n,r,i),!0;case`mouseover`:return on=fn(on,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return sn.set(a,fn(sn.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,cn.set(a,fn(cn.get(a)||null,e,t,n,r,i)),!0}return!1}function mn(e){var t=Gi(e.target);if(t!==null){var n=gt(t);if(n!==null){if(t=n.tag,t===13){if(t=_t(n),t!==null){e.blockedOn=t,en(e.priority,function(){Qt(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hn(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=En(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);qe=r,n.target.dispatchEvent(r),qe=null}else return t=Ki(n),t!==null&&Zt(t),e.blockedOn=n,!1;t.shift()}return!0}function gn(e,t,n){hn(e)&&n.delete(t)}function _n(){tn=!1,rn!==null&&hn(rn)&&(rn=null),an!==null&&hn(an)&&(an=null),on!==null&&hn(on)&&(on=null),sn.forEach(gn),cn.forEach(gn)}function vn(e,t){e.blockedOn===t&&(e.blockedOn=null,tn||(tn=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,_n)))}function yn(e){function t(t){return vn(t,e)}if(0<nn.length){vn(nn[0],e);for(var n=1;n<nn.length;n++){var r=nn[n];r.blockedOn===e&&(r.blockedOn=null)}}for(rn!==null&&vn(rn,e),an!==null&&vn(an,e),on!==null&&vn(on,e),sn.forEach(t),cn.forEach(t),n=0;n<ln.length;n++)r=ln[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<ln.length&&(n=ln[0],n.blockedOn===null);)mn(n),n.blockedOn===null&&ln.shift()}var bn=C.ReactCurrentBatchConfig,xn=!0;function Sn(e,t,n,r){var i=M,a=bn.transition;bn.transition=null;try{M=1,wn(e,t,n,r)}finally{M=i,bn.transition=a}}function Cn(e,t,n,r){var i=M,a=bn.transition;bn.transition=null;try{M=4,wn(e,t,n,r)}finally{M=i,bn.transition=a}}function wn(e,t,n,r){if(xn){var i=En(e,t,n,r);if(i===null)yi(e,t,r,Tn,n),dn(e,r);else if(pn(i,e,t,n,r))r.stopPropagation();else if(dn(e,r),t&4&&-1<un.indexOf(e)){for(;i!==null;){var a=Ki(i);if(a!==null&&N(a),a=En(e,t,n,r),a===null&&yi(e,t,r,Tn,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else yi(e,t,r,null,n)}}var Tn=null;function En(e,t,n,r){if(Tn=null,e=Je(r),e=Gi(e),e!==null)if(t=gt(e),t===null)e=null;else if(n=t.tag,n===13){if(e=_t(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Tn=e,null}function Dn(e){switch(e){case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 1;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`toggle`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 4;case`message`:switch(Dt()){case Ot:return 1;case kt:return 4;case At:case jt:return 16;case Mt:return 536870912;default:return 16}default:return 16}}var On=null,kn=null,An=null;function jn(){if(An)return An;var e,t=kn,n=t.length,r,i=`value`in On?On.value:On.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return An=i.slice(e,1<r?1-r:void 0)}function Mn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Nn(){return!0}function Pn(){return!1}function Fn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?Nn:Pn,this.isPropagationStopped=Pn,this}return k(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=Nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=Nn)},persist:function(){},isPersistent:Nn}),t}var In={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ln=Fn(In),Rn=k({},In,{view:0,detail:0}),zn=Fn(Rn),Bn,Vn,Hn,Un=k({},Rn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:er,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==Hn&&(Hn&&e.type===`mousemove`?(Bn=e.screenX-Hn.screenX,Vn=e.screenY-Hn.screenY):Vn=Bn=0,Hn=e),Bn)},movementY:function(e){return`movementY`in e?e.movementY:Vn}}),Wn=Fn(Un),Gn=Fn(k({},Un,{dataTransfer:0})),Kn=Fn(k({},Rn,{relatedTarget:0})),qn=Fn(k({},In,{animationName:0,elapsedTime:0,pseudoElement:0})),Jn=Fn(k({},In,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),Yn=Fn(k({},In,{data:0})),Xn={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Zn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},Qn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function $n(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Qn[e])?!!t[e]:!1}function er(){return $n}var tr=Fn(k({},Rn,{key:function(e){if(e.key){var t=Xn[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=Mn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Zn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:er,charCode:function(e){return e.type===`keypress`?Mn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?Mn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),nr=Fn(k({},Un,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),rr=Fn(k({},Rn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:er})),ir=Fn(k({},In,{propertyName:0,elapsedTime:0,pseudoElement:0})),ar=Fn(k({},Un,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),or=[9,13,27,32],sr=c&&`CompositionEvent`in window,cr=null;c&&`documentMode`in document&&(cr=document.documentMode);var lr=c&&`TextEvent`in window&&!cr,ur=c&&(!sr||cr&&8<cr&&11>=cr),dr=` `,fr=!1;function pr(e,t){switch(e){case`keyup`:return or.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function mr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var hr=!1;function gr(e,t){switch(e){case`compositionend`:return mr(t);case`keypress`:return t.which===32?(fr=!0,dr):null;case`textInput`:return e=t.data,e===dr&&fr?null:e;default:return null}}function _r(e,t){if(hr)return e===`compositionend`||!sr&&pr(e,t)?(e=jn(),An=kn=On=null,hr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return ur&&t.locale!==`ko`?null:t.data;default:return null}}var vr={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function yr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!vr[e.type]:t===`textarea`}function br(e,t,n,r){$e(r),t=xi(t,`onChange`),0<t.length&&(n=new Ln(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var xr=null,Sr=null;function Cr(e){mi(e,0)}function wr(e){if(xe(qi(e)))return e}function Tr(e,t){if(e===`change`)return t}var Er=!1;if(c){var Dr;if(c){var Or=`oninput`in document;if(!Or){var kr=document.createElement(`div`);kr.setAttribute(`oninput`,`return;`),Or=typeof kr.oninput==`function`}Dr=Or}else Dr=!1;Er=Dr&&(!document.documentMode||9<document.documentMode)}function Ar(){xr&&(xr.detachEvent(`onpropertychange`,jr),Sr=xr=null)}function jr(e){if(e.propertyName===`value`&&wr(Sr)){var t=[];br(t,Sr,e,Je(e)),it(Cr,t)}}function Mr(e,t,n){e===`focusin`?(Ar(),xr=t,Sr=n,xr.attachEvent(`onpropertychange`,jr)):e===`focusout`&&Ar()}function Nr(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return wr(Sr)}function Pr(e,t){if(e===`click`)return wr(t)}function Fr(e,t){if(e===`input`||e===`change`)return wr(t)}function Ir(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var Lr=typeof Object.is==`function`?Object.is:Ir;function Rr(e,t){if(Lr(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!l.call(t,i)||!Lr(e[i],t[i]))return!1}return!0}function zr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Br(e,t){var n=zr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=zr(n)}}function Vr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Vr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Hr(){for(var e=window,t=Se();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Se(e.document)}return t}function Ur(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}function Wr(e){var t=Hr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Vr(n.ownerDocument.documentElement,n)){if(r!==null&&Ur(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),`selectionStart`in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,a=Math.min(r.start,i);r=r.end===void 0?a:Math.min(r.end,i),!e.extend&&a>r&&(i=r,r=a,a=i),i=Br(n,a);var o=Br(n,r);i&&o&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus==`function`&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Gr=c&&`documentMode`in document&&11>=document.documentMode,Kr=null,qr=null,Jr=null,Yr=!1;function Xr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Yr||Kr==null||Kr!==Se(r)||(r=Kr,`selectionStart`in r&&Ur(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Jr&&Rr(Jr,r)||(Jr=r,r=xi(qr,`onSelect`),0<r.length&&(t=new Ln(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=Kr)))}function Zr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Qr={animationend:Zr(`Animation`,`AnimationEnd`),animationiteration:Zr(`Animation`,`AnimationIteration`),animationstart:Zr(`Animation`,`AnimationStart`),transitionend:Zr(`Transition`,`TransitionEnd`)},$r={},ei={};c&&(ei=document.createElement(`div`).style,`AnimationEvent`in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),`TransitionEvent`in window||delete Qr.transitionend.transition);function ti(e){if($r[e])return $r[e];if(!Qr[e])return e;var t=Qr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in ei)return $r[e]=t[n];return e}var ni=ti(`animationend`),ri=ti(`animationiteration`),ii=ti(`animationstart`),ai=ti(`transitionend`),oi=new Map,si=`abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);function ci(e,t){oi.set(e,t),o(t,[e])}for(var li=0;li<si.length;li++){var ui=si[li];ci(ui.toLowerCase(),`on`+(ui[0].toUpperCase()+ui.slice(1)))}ci(ni,`onAnimationEnd`),ci(ri,`onAnimationIteration`),ci(ii,`onAnimationStart`),ci(`dblclick`,`onDoubleClick`),ci(`focusin`,`onFocus`),ci(`focusout`,`onBlur`),ci(ai,`onTransitionEnd`),s(`onMouseEnter`,[`mouseout`,`mouseover`]),s(`onMouseLeave`,[`mouseout`,`mouseover`]),s(`onPointerEnter`,[`pointerout`,`pointerover`]),s(`onPointerLeave`,[`pointerout`,`pointerover`]),o(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),o(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),o(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),o(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),o(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var di=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),fi=new Set(`cancel close invalid load scroll toggle`.split(` `).concat(di));function pi(e,t,n){var r=e.type||`unknown-event`;e.currentTarget=n,ht(r,t,void 0,e),e.currentTarget=null}function mi(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;pi(i,s,l),a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;pi(i,s,l),a=c}}}if(dt)throw e=ft,dt=!1,ft=null,e}function P(e,t){var n=t[Ui];n===void 0&&(n=t[Ui]=new Set);var r=e+`__bubble`;n.has(r)||(vi(t,e,2,!1),n.add(r))}function hi(e,t,n){var r=0;t&&(r|=4),vi(n,e,r,t)}var gi=`_reactListening`+Math.random().toString(36).slice(2);function _i(e){if(!e[gi]){e[gi]=!0,i.forEach(function(t){t!==`selectionchange`&&(fi.has(t)||hi(t,!1,e),hi(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[gi]||(t[gi]=!0,hi(`selectionchange`,!1,t))}}function vi(e,t,n,r){switch(Dn(t)){case 1:var i=Sn;break;case 4:i=Cn;break;default:i=wn}n=i.bind(null,t,n,e),i=void 0,!ot||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function yi(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var s=r.stateNode.containerInfo;if(s===i||s.nodeType===8&&s.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var c=o.tag;if((c===3||c===4)&&(c=o.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;o=o.return}for(;s!==null;){if(o=Gi(s),o===null)return;if(c=o.tag,c===5||c===6){r=a=o;continue a}s=s.parentNode}}r=r.return}it(function(){var r=a,i=Je(n),o=[];a:{var s=oi.get(e);if(s!==void 0){var c=Ln,l=e;switch(e){case`keypress`:if(Mn(n)===0)break a;case`keydown`:case`keyup`:c=tr;break;case`focusin`:l=`focus`,c=Kn;break;case`focusout`:l=`blur`,c=Kn;break;case`beforeblur`:case`afterblur`:c=Kn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:c=Wn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:c=Gn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:c=rr;break;case ni:case ri:case ii:c=qn;break;case ai:c=ir;break;case`scroll`:c=zn;break;case`wheel`:c=ar;break;case`copy`:case`cut`:case`paste`:c=Jn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:c=nr}var u=(t&4)!=0,d=!u&&e===`scroll`,f=u?s===null?null:s+`Capture`:s;u=[];for(var p=r,m;p!==null;){m=p;var h=m.stateNode;if(m.tag===5&&h!==null&&(m=h,f!==null&&(h=at(p,f),h!=null&&u.push(bi(p,h,m)))),d)break;p=p.return}0<u.length&&(s=new c(s,l,null,n,i),o.push({event:s,listeners:u}))}}if(!(t&7)){a:{if(s=e===`mouseover`||e===`pointerover`,c=e===`mouseout`||e===`pointerout`,s&&n!==qe&&(l=n.relatedTarget||n.fromElement)&&(Gi(l)||l[Hi]))break a;if((c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(l=n.relatedTarget||n.toElement,c=r,l=l?Gi(l):null,l!==null&&(d=gt(l),l!==d||l.tag!==5&&l.tag!==6)&&(l=null)):(c=null,l=r),c!==l)){if(u=Wn,h=`onMouseLeave`,f=`onMouseEnter`,p=`mouse`,(e===`pointerout`||e===`pointerover`)&&(u=nr,h=`onPointerLeave`,f=`onPointerEnter`,p=`pointer`),d=c==null?s:qi(c),m=l==null?s:qi(l),s=new u(h,p+`leave`,c,n,i),s.target=d,s.relatedTarget=m,h=null,Gi(i)===r&&(u=new u(f,p+`enter`,l,n,i),u.target=m,u.relatedTarget=d,h=u),d=h,c&&l)b:{for(u=c,f=l,p=0,m=u;m;m=Si(m))p++;for(m=0,h=f;h;h=Si(h))m++;for(;0<p-m;)u=Si(u),p--;for(;0<m-p;)f=Si(f),m--;for(;p--;){if(u===f||f!==null&&u===f.alternate)break b;u=Si(u),f=Si(f)}u=null}else u=null;c!==null&&Ci(o,s,c,u,!1),l!==null&&d!==null&&Ci(o,d,l,u,!0)}}a:{if(s=r?qi(r):window,c=s.nodeName&&s.nodeName.toLowerCase(),c===`select`||c===`input`&&s.type===`file`)var g=Tr;else if(yr(s))if(Er)g=Fr;else{g=Nr;var _=Mr}else (c=s.nodeName)&&c.toLowerCase()===`input`&&(s.type===`checkbox`||s.type===`radio`)&&(g=Pr);if(g&&=g(e,r)){br(o,g,n,i);break a}_&&_(e,s,r),e===`focusout`&&(_=s._wrapperState)&&_.controlled&&s.type===`number`&&Oe(s,`number`,s.value)}switch(_=r?qi(r):window,e){case`focusin`:(yr(_)||_.contentEditable===`true`)&&(Kr=_,qr=r,Jr=null);break;case`focusout`:Jr=qr=Kr=null;break;case`mousedown`:Yr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Yr=!1,Xr(o,n,i);break;case`selectionchange`:if(Gr)break;case`keydown`:case`keyup`:Xr(o,n,i)}var v;if(sr)b:{switch(e){case`compositionstart`:var y=`onCompositionStart`;break b;case`compositionend`:y=`onCompositionEnd`;break b;case`compositionupdate`:y=`onCompositionUpdate`;break b}y=void 0}else hr?pr(e,n)&&(y=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(y=`onCompositionStart`);y&&(ur&&n.locale!==`ko`&&(hr||y!==`onCompositionStart`?y===`onCompositionEnd`&&hr&&(v=jn()):(On=i,kn=`value`in On?On.value:On.textContent,hr=!0)),_=xi(r,y),0<_.length&&(y=new Yn(y,e,null,n,i),o.push({event:y,listeners:_}),v?y.data=v:(v=mr(n),v!==null&&(y.data=v)))),(v=lr?gr(e,n):_r(e,n))&&(r=xi(r,`onBeforeInput`),0<r.length&&(i=new Yn(`onBeforeInput`,`beforeinput`,null,n,i),o.push({event:i,listeners:r}),i.data=v))}mi(o,t)})}function bi(e,t,n){return{instance:e,listener:t,currentTarget:n}}function xi(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;i.tag===5&&a!==null&&(i=a,a=at(e,n),a!=null&&r.unshift(bi(e,a,i)),a=at(e,t),a!=null&&r.push(bi(e,a,i))),e=e.return}return r}function Si(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Ci(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(c!==null&&c===r)break;s.tag===5&&l!==null&&(s=l,i?(c=at(n,a),c!=null&&o.unshift(bi(n,c,s))):i||(c=at(n,a),c!=null&&o.push(bi(n,c,s)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var wi=/\r\n?/g,Ti=/\u0000|\uFFFD/g;function Ei(e){return(typeof e==`string`?e:``+e).replace(wi,`
`).replace(Ti,``)}function Di(e,t,n){if(t=Ei(t),Ei(e)!==t&&n)throw Error(r(425))}function Oi(){}var ki=null,Ai=null;function ji(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Mi=typeof setTimeout==`function`?setTimeout:void 0,Ni=typeof clearTimeout==`function`?clearTimeout:void 0,Pi=typeof Promise==`function`?Promise:void 0,Fi=typeof queueMicrotask==`function`?queueMicrotask:Pi===void 0?Mi:function(e){return Pi.resolve(null).then(e).catch(Ii)};function Ii(e){setTimeout(function(){throw e})}function Li(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`){if(r===0){e.removeChild(i),yn(t);return}r--}else n!==`$`&&n!==`$?`&&n!==`$!`||r++;n=i}while(n);yn(t)}function F(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`)break;if(t===`/$`)return null}}return e}function Ri(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`){if(t===0)return e;t--}else n===`/$`&&t++}e=e.previousSibling}return null}var zi=Math.random().toString(36).slice(2),Bi=`__reactFiber$`+zi,Vi=`__reactProps$`+zi,Hi=`__reactContainer$`+zi,Ui=`__reactEvents$`+zi,Wi=`__reactListeners$`+zi,I=`__reactHandles$`+zi;function Gi(e){var t=e[Bi];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Hi]||n[Bi]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Ri(e);e!==null;){if(n=e[Bi])return n;e=Ri(e)}return t}e=n,n=e.parentNode}return null}function Ki(e){return e=e[Bi]||e[Hi],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function qi(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(r(33))}function Ji(e){return e[Vi]||null}var Yi=[],Xi=-1;function Zi(e){return{current:e}}function L(e){0>Xi||(e.current=Yi[Xi],Yi[Xi]=null,Xi--)}function R(e,t){Xi++,Yi[Xi]=e.current,e.current=t}var Qi={},$i=Zi(Qi),ea=Zi(!1),ta=Qi;function na(e,t){var n=e.type.contextTypes;if(!n)return Qi;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},a;for(a in n)i[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function ra(e){return e=e.childContextTypes,e!=null}function ia(){L(ea),L($i)}function aa(e,t,n){if($i.current!==Qi)throw Error(r(168));R($i,t),R(ea,n)}function oa(e,t,n){var i=e.stateNode;if(t=t.childContextTypes,typeof i.getChildContext!=`function`)return n;for(var a in i=i.getChildContext(),i)if(!(a in t))throw Error(r(108,ge(e)||`Unknown`,a));return k({},n,i)}function sa(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Qi,ta=$i.current,R($i,e),R(ea,ea.current),!0}function ca(e,t,n){var i=e.stateNode;if(!i)throw Error(r(169));n?(e=oa(e,t,ta),i.__reactInternalMemoizedMergedChildContext=e,L(ea),L($i),R($i,e)):L(ea),R(ea,n)}var la=null,ua=!1,da=!1;function fa(e){la===null?la=[e]:la.push(e)}function pa(e){ua=!0,fa(e)}function ma(){if(!da&&la!==null){da=!0;var e=0,t=M;try{var n=la;for(M=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}la=null,ua=!1}catch(t){throw la!==null&&(la=la.slice(e+1)),St(Ot,ma),t}finally{M=t,da=!1}}return null}var ha=[],ga=0,_a=null,va=0,ya=[],ba=0,xa=null,Sa=1,Ca=``;function wa(e,t){ha[ga++]=va,ha[ga++]=_a,_a=e,va=t}function Ta(e,t,n){ya[ba++]=Sa,ya[ba++]=Ca,ya[ba++]=xa,xa=e;var r=Sa;e=Ca;var i=32-It(r)-1;r&=~(1<<i),n+=1;var a=32-It(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sa=1<<32-It(t)+i|n<<i|r,Ca=a+e}else Sa=1<<a|n<<i|r,Ca=e}function Ea(e){e.return!==null&&(wa(e,1),Ta(e,1,0))}function Da(e){for(;e===_a;)_a=ha[--ga],ha[ga]=null,va=ha[--ga],ha[ga]=null;for(;e===xa;)xa=ya[--ba],ya[ba]=null,Ca=ya[--ba],ya[ba]=null,Sa=ya[--ba],ya[ba]=null}var Oa=null,ka=null,z=!1,Aa=null;function ja(e,t){var n=Kl(5,null,null,0);n.elementType=`DELETED`,n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Ma(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t===null?!1:(e.stateNode=t,Oa=e,ka=F(t.firstChild),!0);case 6:return t=e.pendingProps===``||t.nodeType!==3?null:t,t===null?!1:(e.stateNode=t,Oa=e,ka=null,!0);case 13:return t=t.nodeType===8?t:null,t===null?!1:(n=xa===null?null:{id:Sa,overflow:Ca},e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=Kl(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Oa=e,ka=null,!0);default:return!1}}function Na(e){return(e.mode&1)!=0&&(e.flags&128)==0}function Pa(e){if(z){var t=ka;if(t){var n=t;if(!Ma(e,t)){if(Na(e))throw Error(r(418));t=F(n.nextSibling);var i=Oa;t&&Ma(e,t)?ja(i,n):(e.flags=e.flags&-4097|2,z=!1,Oa=e)}}else{if(Na(e))throw Error(r(418));e.flags=e.flags&-4097|2,z=!1,Oa=e}}}function Fa(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Oa=e}function Ia(e){if(e!==Oa)return!1;if(!z)return Fa(e),z=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!==`head`&&t!==`body`&&!ji(e.type,e.memoizedProps)),t&&=ka){if(Na(e))throw La(),Error(r(418));for(;t;)ja(e,t),t=F(t.nextSibling)}if(Fa(e),e.tag===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(r(317));a:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`){if(t===0){ka=F(e.nextSibling);break a}t--}else n!==`$`&&n!==`$!`&&n!==`$?`||t++}e=e.nextSibling}ka=null}}else ka=Oa?F(e.stateNode.nextSibling):null;return!0}function La(){for(var e=ka;e;)e=F(e.nextSibling)}function Ra(){ka=Oa=null,z=!1}function za(e){Aa===null?Aa=[e]:Aa.push(e)}var Ba=C.ReactCurrentBatchConfig;function Va(e,t,n){if(e=n.ref,e!==null&&typeof e!=`function`&&typeof e!=`object`){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(r(309));var i=n.stateNode}if(!i)throw Error(r(147,e));var a=i,o=``+e;return t!==null&&t.ref!==null&&typeof t.ref==`function`&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;e===null?delete t[o]:t[o]=e},t._stringRef=o,t)}if(typeof e!=`string`)throw Error(r(284));if(!n._owner)throw Error(r(290,e))}return e}function Ha(e,t){throw e=Object.prototype.toString.call(t),Error(r(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e))}function Ua(e){var t=e._init;return t(e._payload)}function Wa(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function i(e,t){for(e=new Map;t!==null;)t.key===null?e.set(t.index,t):e.set(t.key,t),t=t.sibling;return e}function a(e,t){return e=Yl(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=2,n):(r=r.index,r<n?(t.flags|=2,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=2),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=$l(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===E?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===oe&&Ua(i)===t.type)?(r=a(t,n.props),r.ref=Va(e,t,n),r.return=e,r):(r=Xl(n.type,n.key,n.props,null,e.mode,r),r.ref=Va(e,t,n),r.return=e,r)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=eu(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=Zl(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`)return t=$l(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case w:return n=Xl(t.type,t.key,t.props,null,e.mode,n),n.ref=Va(e,null,t),n.return=e,n;case T:return t=eu(t,e.mode,n),t.return=e,t;case oe:var r=t._init;return f(e,r(t._payload),n)}if(ke(t)||le(t))return t=Zl(t,e.mode,n,null),t.return=e,t;Ha(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case w:return n.key===i?l(e,t,n,r):null;case T:return n.key===i?u(e,t,n,r):null;case oe:return i=n._init,p(e,t,i(n._payload),r)}if(ke(n)||le(n))return i===null?d(e,t,n,r,null):null;Ha(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case w:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case T:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case oe:var a=r._init;return m(e,t,n,a(r._payload),i)}if(ke(r)||le(r))return e=e.get(n)||null,d(t,e,r,i,null);Ha(t,r)}return null}function h(r,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(r,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(r,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(r,d),z&&wa(r,h),l;if(d===null){for(;h<s.length;h++)d=f(r,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return z&&wa(r,h),l}for(d=i(r,d);h<s.length;h++)g=m(d,r,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(r,e)}),z&&wa(r,h),l}function g(a,s,c,l){var u=le(c);if(typeof u!=`function`)throw Error(r(150));if(c=u.call(c),c==null)throw Error(r(151));for(var d=u=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),z&&wa(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return z&&wa(a,g),u}for(h=i(a,h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),z&&wa(a,g),u}function _(e,r,i,o){if(typeof i==`object`&&i&&i.type===E&&i.key===null&&(i=i.props.children),typeof i==`object`&&i){switch(i.$$typeof){case w:a:{for(var c=i.key,l=r;l!==null;){if(l.key===c){if(c=i.type,c===E){if(l.tag===7){n(e,l.sibling),r=a(l,i.props.children),r.return=e,e=r;break a}}else if(l.elementType===c||typeof c==`object`&&c&&c.$$typeof===oe&&Ua(c)===l.type){n(e,l.sibling),r=a(l,i.props),r.ref=Va(e,l,i),r.return=e,e=r;break a}n(e,l);break}else t(e,l);l=l.sibling}i.type===E?(r=Zl(i.props.children,e.mode,o,i.key),r.return=e,e=r):(o=Xl(i.type,i.key,i.props,null,e.mode,o),o.ref=Va(e,r,i),o.return=e,e=o)}return s(e);case T:a:{for(l=i.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===i.containerInfo&&r.stateNode.implementation===i.implementation){n(e,r.sibling),r=a(r,i.children||[]),r.return=e,e=r;break a}else{n(e,r);break}else t(e,r);r=r.sibling}r=eu(i,e.mode,o),r.return=e,e=r}return s(e);case oe:return l=i._init,_(e,r,l(i._payload),o)}if(ke(i))return h(e,r,i,o);if(le(i))return g(e,r,i,o);Ha(e,i)}return typeof i==`string`&&i!==``||typeof i==`number`?(i=``+i,r!==null&&r.tag===6?(n(e,r.sibling),r=a(r,i),r.return=e,e=r):(n(e,r),r=$l(i,e.mode,o),r.return=e,e=r),s(e)):n(e,r)}return _}var Ga=Wa(!0),Ka=Wa(!1),qa=Zi(null),Ja=null,Ya=null,Xa=null;function Za(){Xa=Ya=Ja=null}function Qa(e){var t=qa.current;L(qa),e._currentValue=t}function $a(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function eo(e,t){Ja=e,Xa=Ya=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ls=!0),e.firstContext=null)}function to(e){var t=e._currentValue;if(Xa!==e)if(e={context:e,memoizedValue:t,next:null},Ya===null){if(Ja===null)throw Error(r(308));Ya=e,Ja.dependencies={lanes:0,firstContext:e}}else Ya=Ya.next=e;return t}var no=null;function ro(e){no===null?no=[e]:no.push(e)}function io(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,ro(t)):(n.next=i.next,i.next=n),t.interleaved=n,ao(e,r)}function ao(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var oo=!1;function so(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function co(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function lo(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function uo(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Q&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,ao(e,n)}return i=r.interleaved,i===null?(t.next=t,ro(r)):(t.next=i.next,i.next=t),r.interleaved=t,ao(e,n)}function fo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194240)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yt(e,n)}}function po(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function mo(e,t,n,r){var i=e.updateQueue;oo=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){u!==null&&(u=u.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});a:{var m=e,h=s;switch(f=t,p=n,h.tag){case 1:if(m=h.payload,typeof m==`function`){d=m.call(p,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=h.payload,f=typeof m==`function`?m.call(p,d,f):m,f==null)break a;d=k({},d,f);break a;case 2:oo=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=i.effects,f===null?i.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;f=s,s=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,t=i.shared.interleaved,t!==null){i=t;do o|=i.lane,i=i.next;while(i!==t)}else a===null&&(i.shared.lanes=0);Jc|=o,e.lanes=o,e.memoizedState=d}}function ho(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var i=e[t],a=i.callback;if(a!==null){if(i.callback=null,i=n,typeof a!=`function`)throw Error(r(191,a));a.call(i)}}}var go={},_o=Zi(go),vo=Zi(go),yo=Zi(go);function bo(e){if(e===go)throw Error(r(174));return e}function xo(e,t){switch(R(yo,t),R(vo,e),R(_o,go),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Ie(null,``);break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Ie(t,e)}L(_o),R(_o,t)}function So(){L(_o),L(vo),L(yo)}function Co(e){bo(yo.current);var t=bo(_o.current),n=Ie(t,e.type);t!==n&&(R(vo,e),R(_o,n))}function wo(e){vo.current===e&&(L(_o),L(vo))}var To=Zi(0);function Eo(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data===`$?`||n.data===`$!`))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Do=[];function Oo(){for(var e=0;e<Do.length;e++)Do[e]._workInProgressVersionPrimary=null;Do.length=0}var ko=C.ReactCurrentDispatcher,Ao=C.ReactCurrentBatchConfig,jo=0,B=null,V=null,H=null,Mo=!1,No=!1,U=0,Po=0;function Fo(){throw Error(r(321))}function Io(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Lr(e[n],t[n]))return!1;return!0}function Lo(e,t,n,i,a,o){if(jo=o,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ko.current=e===null||e.memoizedState===null?_s:vs,e=n(i,a),No){o=0;do{if(No=!1,U=0,25<=o)throw Error(r(301));o+=1,H=V=null,t.updateQueue=null,ko.current=ys,e=n(i,a)}while(No)}if(ko.current=gs,t=V!==null&&V.next!==null,jo=0,H=V=B=null,Mo=!1,t)throw Error(r(300));return e}function Ro(){var e=U!==0;return U=0,e}function zo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return H===null?B.memoizedState=H=e:H=H.next=e,H}function Bo(){if(V===null){var e=B.alternate;e=e===null?null:e.memoizedState}else e=V.next;var t=H===null?B.memoizedState:H.next;if(t!==null)H=t,V=e;else{if(e===null)throw Error(r(310));V=e,e={memoizedState:V.memoizedState,baseState:V.baseState,baseQueue:V.baseQueue,queue:V.queue,next:null},H===null?B.memoizedState=H=e:H=H.next=e}return H}function Vo(e,t){return typeof t==`function`?t(e):t}function Ho(e){var t=Bo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=V,a=i.baseQueue,o=n.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}i.baseQueue=a=o,n.pending=null}if(a!==null){o=a.next,i=i.baseState;var c=s=null,l=null,u=o;do{var d=u.lane;if((jo&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:e(i,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(c=l=f,s=i):l=l.next=f,B.lanes|=d,Jc|=d}u=u.next}while(u!==null&&u!==o);l===null?s=i:l.next=c,Lr(i,t.memoizedState)||(Ls=!0),t.memoizedState=i,t.baseState=s,t.baseQueue=l,n.lastRenderedState=i}if(e=n.interleaved,e!==null){a=e;do o=a.lane,B.lanes|=o,Jc|=o,a=a.next;while(a!==e)}else a===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Uo(e){var t=Bo(),n=t.queue;if(n===null)throw Error(r(311));n.lastRenderedReducer=e;var i=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);Lr(o,t.memoizedState)||(Ls=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,i]}function Wo(){}function Go(e,t){var n=B,i=Bo(),a=t(),o=!Lr(i.memoizedState,a);if(o&&(i.memoizedState=a,Ls=!0),i=i.queue,rs(Jo.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||H!==null&&H.memoizedState.tag&1){if(n.flags|=2048,Qo(9,qo.bind(null,n,i,a,t),void 0,null),Hc===null)throw Error(r(349));jo&30||Ko(n,t,a)}return a}function Ko(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function qo(e,t,n,r){t.value=n,t.getSnapshot=r,Yo(t)&&Xo(e)}function Jo(e,t,n){return n(function(){Yo(t)&&Xo(e)})}function Yo(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Lr(e,n)}catch{return!0}}function Xo(e){var t=ao(e,1);t!==null&&ml(t,e,1,-1)}function Zo(e){var t=zo();return typeof e==`function`&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vo,lastRenderedState:e},t.queue=e,e=e.dispatch=fs.bind(null,B,e),[t.memoizedState,e]}function Qo(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=B.updateQueue,t===null?(t={lastEffect:null,stores:null},B.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function $o(){return Bo().memoizedState}function es(e,t,n,r){var i=zo();B.flags|=e,i.memoizedState=Qo(1|t,n,void 0,r===void 0?null:r)}function ts(e,t,n,r){var i=Bo();r=r===void 0?null:r;var a=void 0;if(V!==null){var o=V.memoizedState;if(a=o.destroy,r!==null&&Io(r,o.deps)){i.memoizedState=Qo(t,n,a,r);return}}B.flags|=e,i.memoizedState=Qo(1|t,n,a,r)}function ns(e,t){return es(8390656,8,e,t)}function rs(e,t){return ts(2048,8,e,t)}function W(e,t){return ts(4,2,e,t)}function is(e,t){return ts(4,4,e,t)}function as(e,t){if(typeof t==`function`)return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function G(e,t,n){return n=n==null?null:n.concat([e]),ts(4,4,as.bind(null,t,e),n)}function K(){}function os(e,t){var n=Bo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Io(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function ss(e,t){var n=Bo();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Io(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function cs(e,t,n){return jo&21?(Lr(n,t)||(n=Gt(),B.lanes|=n,Jc|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,Ls=!0),e.memoizedState=n)}function ls(e,t){var n=M;M=n!==0&&4>n?n:4,e(!0);var r=Ao.transition;Ao.transition={};try{e(!1),t()}finally{M=n,Ao.transition=r}}function us(){return Bo().memoizedState}function ds(e,t,n){var r=pl(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},ps(e))ms(t,n);else if(n=io(e,t,n,r),n!==null){var i=fl();ml(n,e,r,i),hs(n,t,r)}}function fs(e,t,n){var r=pl(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(ps(e))ms(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Lr(s,o)){var c=t.interleaved;c===null?(i.next=i,ro(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}n=io(e,t,i,r),n!==null&&(i=fl(),ml(n,e,r,i),hs(n,t,r))}}function ps(e){var t=e.alternate;return e===B||t!==null&&t===B}function ms(e,t){No=Mo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function hs(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Yt(e,n)}}var gs={readContext:to,useCallback:Fo,useContext:Fo,useEffect:Fo,useImperativeHandle:Fo,useInsertionEffect:Fo,useLayoutEffect:Fo,useMemo:Fo,useReducer:Fo,useRef:Fo,useState:Fo,useDebugValue:Fo,useDeferredValue:Fo,useTransition:Fo,useMutableSource:Fo,useSyncExternalStore:Fo,useId:Fo,unstable_isNewReconciler:!1},_s={readContext:to,useCallback:function(e,t){return zo().memoizedState=[e,t===void 0?null:t],e},useContext:to,useEffect:ns,useImperativeHandle:function(e,t,n){return n=n==null?null:n.concat([e]),es(4194308,4,as.bind(null,t,e),n)},useLayoutEffect:function(e,t){return es(4194308,4,e,t)},useInsertionEffect:function(e,t){return es(4,2,e,t)},useMemo:function(e,t){var n=zo();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=zo();return t=n===void 0?t:n(t),r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=ds.bind(null,B,e),[r.memoizedState,e]},useRef:function(e){var t=zo();return e={current:e},t.memoizedState=e},useState:Zo,useDebugValue:K,useDeferredValue:function(e){return zo().memoizedState=e},useTransition:function(){var e=Zo(!1),t=e[0];return e=ls.bind(null,e[1]),zo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var i=B,a=zo();if(z){if(n===void 0)throw Error(r(407));n=n()}else{if(n=t(),Hc===null)throw Error(r(349));jo&30||Ko(i,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,ns(Jo.bind(null,i,o,e),[e]),i.flags|=2048,Qo(9,qo.bind(null,i,o,n,t),void 0,null),n},useId:function(){var e=zo(),t=Hc.identifierPrefix;if(z){var n=Ca,r=Sa;n=(r&~(1<<32-It(r)-1)).toString(32)+n,t=`:`+t+`R`+n,n=U++,0<n&&(t+=`H`+n.toString(32)),t+=`:`}else n=Po++,t=`:`+t+`r`+n.toString(32)+`:`;return e.memoizedState=t},unstable_isNewReconciler:!1},vs={readContext:to,useCallback:os,useContext:to,useEffect:rs,useImperativeHandle:G,useInsertionEffect:W,useLayoutEffect:is,useMemo:ss,useReducer:Ho,useRef:$o,useState:function(){return Ho(Vo)},useDebugValue:K,useDeferredValue:function(e){return cs(Bo(),V.memoizedState,e)},useTransition:function(){return[Ho(Vo)[0],Bo().memoizedState]},useMutableSource:Wo,useSyncExternalStore:Go,useId:us,unstable_isNewReconciler:!1},ys={readContext:to,useCallback:os,useContext:to,useEffect:rs,useImperativeHandle:G,useInsertionEffect:W,useLayoutEffect:is,useMemo:ss,useReducer:Uo,useRef:$o,useState:function(){return Uo(Vo)},useDebugValue:K,useDeferredValue:function(e){var t=Bo();return V===null?t.memoizedState=e:cs(t,V.memoizedState,e)},useTransition:function(){return[Uo(Vo)[0],Bo().memoizedState]},useMutableSource:Wo,useSyncExternalStore:Go,useId:us,unstable_isNewReconciler:!1};function bs(e,t){if(e&&e.defaultProps){for(var n in t=k({},t),e=e.defaultProps,e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function xs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:k({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Ss={isMounted:function(e){return(e=e._reactInternals)?gt(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=fl(),i=pl(e),a=lo(r,i);a.payload=t,n!=null&&(a.callback=n),t=uo(e,a,i),t!==null&&(ml(t,e,i,r),fo(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=fl(),i=pl(e),a=lo(r,i);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=uo(e,a,i),t!==null&&(ml(t,e,i,r),fo(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=fl(),r=pl(e),i=lo(n,r);i.tag=2,t!=null&&(i.callback=t),t=uo(e,i,r),t!==null&&(ml(t,e,r,n),fo(t,e,r))}};function Cs(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!Rr(n,r)||!Rr(i,a):!0}function ws(e,t,n){var r=!1,i=Qi,a=t.contextType;return typeof a==`object`&&a?a=to(a):(i=ra(t)?ta:$i.current,r=t.contextTypes,a=(r=r!=null)?na(e,i):Qi),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Ss,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=a),t}function Ts(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Ss.enqueueReplaceState(t,t.state,null)}function Es(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},so(e);var a=t.contextType;typeof a==`object`&&a?i.context=to(a):(a=ra(t)?ta:$i.current,i.context=na(e,a)),i.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a==`function`&&(xs(e,t,a,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps==`function`||typeof i.getSnapshotBeforeUpdate==`function`||typeof i.UNSAFE_componentWillMount!=`function`&&typeof i.componentWillMount!=`function`||(t=i.state,typeof i.componentWillMount==`function`&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount==`function`&&i.UNSAFE_componentWillMount(),t!==i.state&&Ss.enqueueReplaceState(i,i.state,null),mo(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount==`function`&&(e.flags|=4194308)}function Ds(e,t){try{var n=``,r=t;do n+=me(r),r=r.return;while(r);var i=n}catch(e){i=`
Error generating stack: `+e.message+`
`+e.stack}return{value:e,source:t,stack:i,digest:null}}function Os(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function ks(e,t){try{console.error(t.value)}catch(e){setTimeout(function(){throw e})}}var As=typeof WeakMap==`function`?WeakMap:Map;function js(e,t,n){n=lo(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){nl||(nl=!0,rl=r),ks(e,t)},n}function Ms(e,t,n){n=lo(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r==`function`){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){ks(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch==`function`&&(n.callback=function(){ks(e,t),typeof r!=`function`&&(il===null?il=new Set([this]):il.add(this));var n=t.stack;this.componentDidCatch(t.value,{componentStack:n===null?``:n})}),n}function Ns(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new As;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=zl.bind(null,e,t,n),t.then(e,e))}function Ps(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t===null?!0:t.dehydrated!==null),t)return e;e=e.return}while(e!==null);return null}function Fs(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=lo(-1,1),t.tag=2,uo(n,t,1))),n.lanes|=1),e)}var Is=C.ReactCurrentOwner,Ls=!1;function Rs(e,t,n,r){t.child=e===null?Ka(t,null,n,r):Ga(t,e.child,n,r)}function zs(e,t,n,r,i){n=n.render;var a=t.ref;return eo(t,i),r=Lo(e,t,n,r,a,i),n=Ro(),e!==null&&!Ls?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ac(e,t,i)):(z&&n&&Ea(t),t.flags|=1,Rs(e,t,r,i),t.child)}function Bs(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ql(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,Vs(e,t,a,r,i)):(e=Xl(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&i)===0){var o=a.memoizedProps;if(n=n.compare,n=n===null?Rr:n,n(o,r)&&e.ref===t.ref)return ac(e,t,i)}return t.flags|=1,e=Yl(a,r),e.ref=t.ref,e.return=t,t.child=e}function Vs(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(Rr(a,r)&&e.ref===t.ref)if(Ls=!1,t.pendingProps=r=a,(e.lanes&i)!==0)e.flags&131072&&(Ls=!0);else return t.lanes=e.lanes,ac(e,t,i)}return Ws(e,t,n,r,i)}function Hs(e,t,n){var r=t.pendingProps,i=r.children,a=e===null?null:e.memoizedState;if(r.mode===`hidden`)if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},R(Gc,Wc),Wc|=n;else{if(!(n&1073741824))return e=a===null?n:a.baseLanes|n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,R(Gc,Wc),Wc|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a===null?n:a.baseLanes,R(Gc,Wc),Wc|=r}else a===null?r=n:(r=a.baseLanes|n,t.memoizedState=null),R(Gc,Wc),Wc|=r;return Rs(e,t,i,n),t.child}function Us(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ws(e,t,n,r,i){var a=ra(n)?ta:$i.current;return a=na(t,a),eo(t,i),n=Lo(e,t,n,r,a,i),r=Ro(),e!==null&&!Ls?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,ac(e,t,i)):(z&&r&&Ea(t),t.flags|=1,Rs(e,t,n,i),t.child)}function Gs(e,t,n,r,i){if(ra(n)){var a=!0;sa(t)}else a=!1;if(eo(t,i),t.stateNode===null)ic(e,t),ws(t,n,r),Es(t,n,r,i),r=!0;else if(e===null){var o=t.stateNode,s=t.memoizedProps;o.props=s;var c=o.context,l=n.contextType;typeof l==`object`&&l?l=to(l):(l=ra(n)?ta:$i.current,l=na(t,l));var u=n.getDerivedStateFromProps,d=typeof u==`function`||typeof o.getSnapshotBeforeUpdate==`function`;d||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==r||c!==l)&&Ts(t,o,r,l),oo=!1;var f=t.memoizedState;o.state=f,mo(t,r,o,i),c=t.memoizedState,s!==r||f!==c||ea.current||oo?(typeof u==`function`&&(xs(t,n,u,r),c=t.memoizedState),(s=oo||Cs(t,n,s,r,f,c,l))?(d||typeof o.UNSAFE_componentWillMount!=`function`&&typeof o.componentWillMount!=`function`||(typeof o.componentWillMount==`function`&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount==`function`&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount==`function`&&(t.flags|=4194308)):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),o.props=r,o.state=c,o.context=l,r=s):(typeof o.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,co(e,t),s=t.memoizedProps,l=t.type===t.elementType?s:bs(t.type,s),o.props=l,d=t.pendingProps,f=o.context,c=n.contextType,typeof c==`object`&&c?c=to(c):(c=ra(n)?ta:$i.current,c=na(t,c));var p=n.getDerivedStateFromProps;(u=typeof p==`function`||typeof o.getSnapshotBeforeUpdate==`function`)||typeof o.UNSAFE_componentWillReceiveProps!=`function`&&typeof o.componentWillReceiveProps!=`function`||(s!==d||f!==c)&&Ts(t,o,r,c),oo=!1,f=t.memoizedState,o.state=f,mo(t,r,o,i);var m=t.memoizedState;s!==d||f!==m||ea.current||oo?(typeof p==`function`&&(xs(t,n,p,r),m=t.memoizedState),(l=oo||Cs(t,n,l,r,f,m,c)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!=`function`&&typeof o.componentWillUpdate!=`function`||(typeof o.componentWillUpdate==`function`&&o.componentWillUpdate(r,m,c),typeof o.UNSAFE_componentWillUpdate==`function`&&o.UNSAFE_componentWillUpdate(r,m,c)),typeof o.componentDidUpdate==`function`&&(t.flags|=4),typeof o.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=m),o.props=r,o.state=m,o.context=c,r=l):(typeof o.componentDidUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof o.getSnapshotBeforeUpdate!=`function`||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Ks(e,t,n,r,a,i)}function Ks(e,t,n,r,i,a){Us(e,t);var o=(t.flags&128)!=0;if(!r&&!o)return i&&ca(t,n,!1),ac(e,t,a);r=t.stateNode,Is.current=t;var s=o&&typeof n.getDerivedStateFromError!=`function`?null:r.render();return t.flags|=1,e!==null&&o?(t.child=Ga(t,e.child,null,a),t.child=Ga(t,null,s,a)):Rs(e,t,s,a),t.memoizedState=r.state,i&&ca(t,n,!0),t.child}function qs(e){var t=e.stateNode;t.pendingContext?aa(e,t.pendingContext,t.pendingContext!==t.context):t.context&&aa(e,t.context,!1),xo(e,t.containerInfo)}function Js(e,t,n,r,i){return Ra(),za(i),t.flags|=256,Rs(e,t,n,r),t.child}var Ys={dehydrated:null,treeContext:null,retryLane:0};function Xs(e){return{baseLanes:e,cachePool:null,transitions:null}}function Zs(e,t,n){var r=t.pendingProps,i=To.current,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(i&2)!=0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),R(To,i&1),e===null)return Pa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data===`$!`?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(o=r.children,e=r.fallback,a?(r=t.mode,a=t.child,o={mode:`hidden`,children:o},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=o):a=Ql(o,r,0,null),e=Zl(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=Xs(n),t.memoizedState=Ys,e):Qs(t,o));if(i=e.memoizedState,i!==null&&(s=i.dehydrated,s!==null))return ec(e,t,o,r,s,i,n);if(a){a=r.fallback,o=t.mode,i=e.child,s=i.sibling;var c={mode:`hidden`,children:r.children};return!(o&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Yl(i,c),r.subtreeFlags=i.subtreeFlags&14680064),s===null?(a=Zl(a,o,n,null),a.flags|=2):a=Yl(s,a),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,o=e.child.memoizedState,o=o===null?Xs(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},a.memoizedState=o,a.childLanes=e.childLanes&~n,t.memoizedState=Ys,r}return a=e.child,e=a.sibling,r=Yl(a,{mode:`visible`,children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qs(e,t){return t=Ql({mode:`visible`,children:t},e.mode,0,null),t.return=e,e.child=t}function $s(e,t,n,r){return r!==null&&za(r),Ga(t,e.child,null,n),e=Qs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function ec(e,t,n,i,a,o,s){if(n)return t.flags&256?(t.flags&=-257,i=Os(Error(r(422))),$s(e,t,s,i)):t.memoizedState===null?(o=i.fallback,a=t.mode,i=Ql({mode:`visible`,children:i.children},a,0,null),o=Zl(o,a,s,null),o.flags|=2,i.return=t,o.return=t,i.sibling=o,t.child=i,t.mode&1&&Ga(t,e.child,null,s),t.child.memoizedState=Xs(s),t.memoizedState=Ys,o):(t.child=e.child,t.flags|=128,null);if(!(t.mode&1))return $s(e,t,s,null);if(a.data===`$!`){if(i=a.nextSibling&&a.nextSibling.dataset,i)var c=i.dgst;return i=c,o=Error(r(419)),i=Os(o,i,void 0),$s(e,t,s,i)}if(c=(s&e.childLanes)!==0,Ls||c){if(i=Hc,i!==null){switch(s&-s){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(i.suspendedLanes|s))===0?a:0,a!==0&&a!==o.retryLane&&(o.retryLane=a,ao(e,a),ml(i,e,a,-1))}return Ol(),i=Os(Error(r(421))),$s(e,t,s,i)}return a.data===`$?`?(t.flags|=128,t.child=e.child,t=Vl.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ka=F(a.nextSibling),Oa=t,z=!0,Aa=null,e!==null&&(ya[ba++]=Sa,ya[ba++]=Ca,ya[ba++]=xa,Sa=e.id,Ca=e.overflow,xa=t),t=Qs(t,i.children),t.flags|=4096,t)}function tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),$a(e.return,t,n)}function nc(e,t,n,r,i){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function rc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(Rs(e,t,r.children,n),r=To.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tc(e,n,t);else if(e.tag===19)tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(R(To,r),!(t.mode&1))t.memoizedState=null;else switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Eo(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),nc(t,!1,i,n,a);break;case`backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Eo(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}nc(t,!0,n,null,a);break;case`together`:nc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function ic(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function ac(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Jc|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(r(153));if(t.child!==null){for(e=t.child,n=Yl(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Yl(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function oc(e,t,n){switch(t.tag){case 3:qs(t),Ra();break;case 5:Co(t);break;case 1:ra(t.type)&&sa(t);break;case 4:xo(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;R(qa,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(R(To,To.current&1),e=ac(e,t,n),e===null?null:e.sibling):Zs(e,t,n):(R(To,To.current&1),t.flags|=128,null);R(To,To.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return rc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),R(To,To.current),r)break;return null;case 22:case 23:return t.lanes=0,Hs(e,t,n)}return ac(e,t,n)}var sc=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},cc=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,bo(_o.current);var o=null;switch(n){case`input`:i=Ce(e,i),r=Ce(e,r),o=[];break;case`select`:i=k({},i,{value:void 0}),r=k({},r,{value:void 0}),o=[];break;case`textarea`:i=je(e,i),r=je(e,r),o=[];break;default:typeof i.onClick!=`function`&&typeof r.onClick==`function`&&(e.onclick=Oi)}Ge(n,r);var s;for(u in n=null,i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u===`style`){var c=i[u];for(s in c)c.hasOwnProperty(s)&&(n||={},n[s]=``)}else u!==`dangerouslySetInnerHTML`&&u!==`children`&&u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&u!==`autoFocus`&&(a.hasOwnProperty(u)?o||=[]:(o||=[]).push(u,null));for(u in r){var l=r[u];if(c=i?.[u],r.hasOwnProperty(u)&&l!==c&&(l!=null||c!=null))if(u===`style`)if(c){for(s in c)!c.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||={},n[s]=``);for(s in l)l.hasOwnProperty(s)&&c[s]!==l[s]&&(n||={},n[s]=l[s])}else n||(o||=[],o.push(u,n)),n=l;else u===`dangerouslySetInnerHTML`?(l=l?l.__html:void 0,c=c?c.__html:void 0,l!=null&&c!==l&&(o||=[]).push(u,l)):u===`children`?typeof l!=`string`&&typeof l!=`number`||(o||=[]).push(u,``+l):u!==`suppressContentEditableWarning`&&u!==`suppressHydrationWarning`&&(a.hasOwnProperty(u)?(l!=null&&u===`onScroll`&&P(`scroll`,e),o||c===l||(o=[])):(o||=[]).push(u,l))}n&&(o||=[]).push(`style`,n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}},lc=function(e,t,n,r){n!==r&&(t.flags|=4)};function uc(e,t){if(!z)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function dc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function fc(e,t,n){var i=t.pendingProps;switch(Da(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dc(t),null;case 1:return ra(t.type)&&ia(),dc(t),null;case 3:return i=t.stateNode,So(),L(ea),L($i),Oo(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(e===null||e.child===null)&&(Ia(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Aa!==null&&(vl(Aa),Aa=null))),dc(t),null;case 5:wo(t);var o=bo(yo.current);if(n=t.type,e!==null&&t.stateNode!=null)cc(e,t,n,i,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!i){if(t.stateNode===null)throw Error(r(166));return dc(t),null}if(e=bo(_o.current),Ia(t)){i=t.stateNode,n=t.type;var s=t.memoizedProps;switch(i[Bi]=t,i[Vi]=s,e=(t.mode&1)!=0,n){case`dialog`:P(`cancel`,i),P(`close`,i);break;case`iframe`:case`object`:case`embed`:P(`load`,i);break;case`video`:case`audio`:for(o=0;o<di.length;o++)P(di[o],i);break;case`source`:P(`error`,i);break;case`img`:case`image`:case`link`:P(`error`,i),P(`load`,i);break;case`details`:P(`toggle`,i);break;case`input`:we(i,s),P(`invalid`,i);break;case`select`:i._wrapperState={wasMultiple:!!s.multiple},P(`invalid`,i);break;case`textarea`:Me(i,s),P(`invalid`,i)}for(var c in Ge(n,s),o=null,s)if(s.hasOwnProperty(c)){var l=s[c];c===`children`?typeof l==`string`?i.textContent!==l&&(!0!==s.suppressHydrationWarning&&Di(i.textContent,l,e),o=[`children`,l]):typeof l==`number`&&i.textContent!==``+l&&(!0!==s.suppressHydrationWarning&&Di(i.textContent,l,e),o=[`children`,``+l]):a.hasOwnProperty(c)&&l!=null&&c===`onScroll`&&P(`scroll`,i)}switch(n){case`input`:be(i),De(i,s,!0);break;case`textarea`:be(i),Pe(i);break;case`select`:case`option`:break;default:typeof s.onClick==`function`&&(i.onclick=Oi)}i=o,t.updateQueue=i,i!==null&&(t.flags|=4)}else{c=o.nodeType===9?o:o.ownerDocument,e===`http://www.w3.org/1999/xhtml`&&(e=Fe(n)),e===`http://www.w3.org/1999/xhtml`?n===`script`?(e=c.createElement(`div`),e.innerHTML=`<script><\/script>`,e=e.removeChild(e.firstChild)):typeof i.is==`string`?e=c.createElement(n,{is:i.is}):(e=c.createElement(n),n===`select`&&(c=e,i.multiple?c.multiple=!0:i.size&&(c.size=i.size))):e=c.createElementNS(e,n),e[Bi]=t,e[Vi]=i,sc(e,t,!1,!1),t.stateNode=e;a:{switch(c=Ke(n,i),n){case`dialog`:P(`cancel`,e),P(`close`,e),o=i;break;case`iframe`:case`object`:case`embed`:P(`load`,e),o=i;break;case`video`:case`audio`:for(o=0;o<di.length;o++)P(di[o],e);o=i;break;case`source`:P(`error`,e),o=i;break;case`img`:case`image`:case`link`:P(`error`,e),P(`load`,e),o=i;break;case`details`:P(`toggle`,e),o=i;break;case`input`:we(e,i),o=Ce(e,i),P(`invalid`,e);break;case`option`:o=i;break;case`select`:e._wrapperState={wasMultiple:!!i.multiple},o=k({},i,{value:void 0}),P(`invalid`,e);break;case`textarea`:Me(e,i),o=je(e,i),P(`invalid`,e);break;default:o=i}for(s in Ge(n,o),l=o,l)if(l.hasOwnProperty(s)){var u=l[s];s===`style`?Ue(e,u):s===`dangerouslySetInnerHTML`?(u=u?u.__html:void 0,u!=null&&Re(e,u)):s===`children`?typeof u==`string`?(n!==`textarea`||u!==``)&&ze(e,u):typeof u==`number`&&ze(e,``+u):s!==`suppressContentEditableWarning`&&s!==`suppressHydrationWarning`&&s!==`autoFocus`&&(a.hasOwnProperty(s)?u!=null&&s===`onScroll`&&P(`scroll`,e):u!=null&&S(e,s,u,c))}switch(n){case`input`:be(e),De(e,i,!1);break;case`textarea`:be(e),Pe(e);break;case`option`:i.value!=null&&e.setAttribute(`value`,``+_e(i.value));break;case`select`:e.multiple=!!i.multiple,s=i.value,s==null?i.defaultValue!=null&&Ae(e,!!i.multiple,i.defaultValue,!0):Ae(e,!!i.multiple,s,!1);break;default:typeof o.onClick==`function`&&(e.onclick=Oi)}switch(n){case`button`:case`input`:case`select`:case`textarea`:i=!!i.autoFocus;break a;case`img`:i=!0;break a;default:i=!1}}i&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return dc(t),null;case 6:if(e&&t.stateNode!=null)lc(e,t,e.memoizedProps,i);else{if(typeof i!=`string`&&t.stateNode===null)throw Error(r(166));if(n=bo(yo.current),bo(_o.current),Ia(t)){if(i=t.stateNode,n=t.memoizedProps,i[Bi]=t,(s=i.nodeValue!==n)&&(e=Oa,e!==null))switch(e.tag){case 3:Di(i.nodeValue,n,(e.mode&1)!=0);break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Di(i.nodeValue,n,(e.mode&1)!=0)}s&&(t.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Bi]=t,t.stateNode=i}return dc(t),null;case 13:if(L(To),i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(z&&ka!==null&&t.mode&1&&!(t.flags&128))La(),Ra(),t.flags|=98560,s=!1;else if(s=Ia(t),i!==null&&i.dehydrated!==null){if(e===null){if(!s)throw Error(r(318));if(s=t.memoizedState,s=s===null?null:s.dehydrated,!s)throw Error(r(317));s[Bi]=t}else Ra(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;dc(t),s=!1}else Aa!==null&&(vl(Aa),Aa=null),s=!0;if(!s)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(i=i!==null,i!==(e!==null&&e.memoizedState!==null)&&i&&(t.child.flags|=8192,t.mode&1&&(e===null||To.current&1?Kc===0&&(Kc=3):Ol())),t.updateQueue!==null&&(t.flags|=4),dc(t),null);case 4:return So(),e===null&&_i(t.stateNode.containerInfo),dc(t),null;case 10:return Qa(t.type._context),dc(t),null;case 17:return ra(t.type)&&ia(),dc(t),null;case 19:if(L(To),s=t.memoizedState,s===null)return dc(t),null;if(i=(t.flags&128)!=0,c=s.rendering,c===null)if(i)uc(s,!1);else{if(Kc!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(c=Eo(e),c!==null){for(t.flags|=128,uc(s,!1),i=c.updateQueue,i!==null&&(t.updateQueue=i,t.flags|=4),t.subtreeFlags=0,i=n,n=t.child;n!==null;)s=n,e=i,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return R(To,To.current&1|2),t.child}e=e.sibling}s.tail!==null&&Et()>el&&(t.flags|=128,i=!0,uc(s,!1),t.lanes=4194304)}else{if(!i)if(e=Eo(c),e!==null){if(t.flags|=128,i=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),uc(s,!0),s.tail===null&&s.tailMode===`hidden`&&!c.alternate&&!z)return dc(t),null}else 2*Et()-s.renderingStartTime>el&&n!==1073741824&&(t.flags|=128,i=!0,uc(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(n=s.last,n===null?t.child=c:n.sibling=c,s.last=c)}return s.tail===null?(dc(t),null):(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Et(),t.sibling=null,n=To.current,R(To,i?n&1|2:n&1),t);case 22:case 23:return wl(),i=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==i&&(t.flags|=8192),i&&t.mode&1?Wc&1073741824&&(dc(t),t.subtreeFlags&6&&(t.flags|=8192)):dc(t),null;case 24:return null;case 25:return null}throw Error(r(156,t.tag))}function pc(e,t){switch(Da(t),t.tag){case 1:return ra(t.type)&&ia(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return So(),L(ea),L($i),Oo(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return wo(t),null;case 13:if(L(To),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(r(340));Ra()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return L(To),null;case 4:return So(),null;case 10:return Qa(t.type._context),null;case 22:case 23:return wl(),null;case 24:return null;default:return null}}var mc=!1,hc=!1,gc=typeof WeakSet==`function`?WeakSet:Set,q=null;function _c(e,t){var n=e.ref;if(n!==null)if(typeof n==`function`)try{n(null)}catch(n){Rl(e,t,n)}else n.current=null}function vc(e,t,n){try{n()}catch(n){Rl(e,t,n)}}var yc=!1;function bc(e,t){if(ki=xn,e=Hr(),Ur(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var a=i.anchorOffset,o=i.focusNode;i=i.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||i!==0&&f.nodeType!==3||(l=s+i),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===i&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(Ai={focusedElem:e,selectionRange:n},xn=!1,q=t;q!==null;)if(t=q,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,q=e;else for(;q!==null;){t=q;try{var h=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(h!==null){var g=h.memoizedProps,_=h.memoizedState,v=t.stateNode;v.__reactInternalSnapshotBeforeUpdate=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:bs(t.type,g),_)}break;case 3:var y=t.stateNode.containerInfo;y.nodeType===1?y.textContent=``:y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(r(163))}}catch(e){Rl(t,t.return,e)}if(e=t.sibling,e!==null){e.return=t.return,q=e;break}q=t.return}return h=yc,yc=!1,h}function xc(e,t,n){var r=t.updateQueue;if(r=r===null?null:r.lastEffect,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var a=i.destroy;i.destroy=void 0,a!==void 0&&vc(t,n,a)}i=i.next}while(i!==r)}}function Sc(e,t){if(t=t.updateQueue,t=t===null?null:t.lastEffect,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Cc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t==`function`?t(e):t.current=e}}function wc(e){var t=e.alternate;t!==null&&(e.alternate=null,wc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Bi],delete t[Vi],delete t[Ui],delete t[Wi],delete t[I])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Tc(e){return e.tag===5||e.tag===3||e.tag===4}function Ec(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Tc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Dc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Oi));else if(r!==4&&(e=e.child,e!==null))for(Dc(e,t,n),e=e.sibling;e!==null;)Dc(e,t,n),e=e.sibling}function Oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oc(e,t,n),e=e.sibling;e!==null;)Oc(e,t,n),e=e.sibling}var kc=null,Ac=!1;function jc(e,t,n){for(n=n.child;n!==null;)Mc(e,t,n),n=n.sibling}function Mc(e,t,n){if(Pt&&typeof Pt.onCommitFiberUnmount==`function`)try{Pt.onCommitFiberUnmount(Nt,n)}catch{}switch(n.tag){case 5:hc||_c(n,t);case 6:var r=kc,i=Ac;kc=null,jc(e,t,n),kc=r,Ac=i,kc!==null&&(Ac?(e=kc,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):kc.removeChild(n.stateNode));break;case 18:kc!==null&&(Ac?(e=kc,n=n.stateNode,e.nodeType===8?Li(e.parentNode,n):e.nodeType===1&&Li(e,n),yn(e)):Li(kc,n.stateNode));break;case 4:r=kc,i=Ac,kc=n.stateNode.containerInfo,Ac=!0,jc(e,t,n),kc=r,Ac=i;break;case 0:case 11:case 14:case 15:if(!hc&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var a=i,o=a.destroy;a=a.tag,o!==void 0&&(a&2||a&4)&&vc(n,t,o),i=i.next}while(i!==r)}jc(e,t,n);break;case 1:if(!hc&&(_c(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(e){Rl(n,t,e)}jc(e,t,n);break;case 21:jc(e,t,n);break;case 22:n.mode&1?(hc=(r=hc)||n.memoizedState!==null,jc(e,t,n),hc=r):jc(e,t,n);break;default:jc(e,t,n)}}function Nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new gc),t.forEach(function(t){var r=Hl.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function J(e,t){var n=t.deletions;if(n!==null)for(var i=0;i<n.length;i++){var a=n[i];try{var o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 5:kc=c.stateNode,Ac=!1;break a;case 3:kc=c.stateNode.containerInfo,Ac=!0;break a;case 4:kc=c.stateNode.containerInfo,Ac=!0;break a}c=c.return}if(kc===null)throw Error(r(160));Mc(o,s,a),kc=null,Ac=!1;var l=a.alternate;l!==null&&(l.return=null),a.return=null}catch(e){Rl(a,t,e)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Pc(t,e),t=t.sibling}function Pc(e,t){var n=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(J(t,e),Fc(e),i&4){try{xc(3,e,e.return),Sc(3,e)}catch(t){Rl(e,e.return,t)}try{xc(5,e,e.return)}catch(t){Rl(e,e.return,t)}}break;case 1:J(t,e),Fc(e),i&512&&n!==null&&_c(n,n.return);break;case 5:if(J(t,e),Fc(e),i&512&&n!==null&&_c(n,n.return),e.flags&32){var a=e.stateNode;try{ze(a,``)}catch(t){Rl(e,e.return,t)}}if(i&4&&(a=e.stateNode,a!=null)){var o=e.memoizedProps,s=n===null?o:n.memoizedProps,c=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{c===`input`&&o.type===`radio`&&o.name!=null&&Te(a,o),Ke(c,s);var u=Ke(c,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d===`style`?Ue(a,f):d===`dangerouslySetInnerHTML`?Re(a,f):d===`children`?ze(a,f):S(a,d,f,u)}switch(c){case`input`:Ee(a,o);break;case`textarea`:Ne(a,o);break;case`select`:var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var m=o.value;m==null?p!==!!o.multiple&&(o.defaultValue==null?Ae(a,!!o.multiple,o.multiple?[]:``,!1):Ae(a,!!o.multiple,o.defaultValue,!0)):Ae(a,!!o.multiple,m,!1)}a[Vi]=o}catch(t){Rl(e,e.return,t)}}break;case 6:if(J(t,e),Fc(e),i&4){if(e.stateNode===null)throw Error(r(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(t){Rl(e,e.return,t)}}break;case 3:if(J(t,e),Fc(e),i&4&&n!==null&&n.memoizedState.isDehydrated)try{yn(t.containerInfo)}catch(t){Rl(e,e.return,t)}break;case 4:J(t,e),Fc(e);break;case 13:J(t,e),Fc(e),a=e.child,a.flags&8192&&(o=a.memoizedState!==null,a.stateNode.isHidden=o,!o||a.alternate!==null&&a.alternate.memoizedState!==null||($c=Et())),i&4&&Nc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(hc=(u=hc)||d,J(t,e),hc=u):J(t,e),Fc(e),i&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(q=e,d=e.child;d!==null;){for(f=q=d;q!==null;){switch(p=q,m=p.child,p.tag){case 0:case 11:case 14:case 15:xc(4,p,p.return);break;case 1:_c(p,p.return);var h=p.stateNode;if(typeof h.componentWillUnmount==`function`){i=p,n=p.return;try{t=i,h.props=t.memoizedProps,h.state=t.memoizedState,h.componentWillUnmount()}catch(e){Rl(i,n,e)}}break;case 5:_c(p,p.return);break;case 22:if(p.memoizedState!==null){zc(f);continue}}m===null?zc(f):(m.return=p,q=m)}d=d.sibling}a:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{a=f.stateNode,u?(o=a.style,typeof o.setProperty==`function`?o.setProperty(`display`,`none`,`important`):o.display=`none`):(c=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty(`display`)?l.display:null,c.style.display=He(`display`,s))}catch(t){Rl(e,e.return,t)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?``:f.memoizedProps}catch(t){Rl(e,e.return,t)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break a;for(;f.sibling===null;){if(f.return===null||f.return===e)break a;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:J(t,e),Fc(e),i&4&&Nc(e);break;case 21:break;default:J(t,e),Fc(e)}}function Fc(e){var t=e.flags;if(t&2){try{a:{for(var n=e.return;n!==null;){if(Tc(n)){var i=n;break a}n=n.return}throw Error(r(160))}switch(i.tag){case 5:var a=i.stateNode;i.flags&32&&(ze(a,``),i.flags&=-33),Oc(e,Ec(e),a);break;case 3:case 4:var o=i.stateNode.containerInfo;Dc(e,Ec(e),o);break;default:throw Error(r(161))}}catch(t){Rl(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ic(e,t,n){q=e,Lc(e,t,n)}function Lc(e,t,n){for(var r=(e.mode&1)!=0;q!==null;){var i=q,a=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||mc;if(!o){var s=i.alternate,c=s!==null&&s.memoizedState!==null||hc;s=mc;var l=hc;if(mc=o,(hc=c)&&!l)for(q=i;q!==null;)o=q,c=o.child,o.tag===22&&o.memoizedState!==null||c===null?Y(i):(c.return=o,q=c);for(;a!==null;)q=a,Lc(a,t,n),a=a.sibling;q=i,mc=s,hc=l}Rc(e,t,n)}else i.subtreeFlags&8772&&a!==null?(a.return=i,q=a):Rc(e,t,n)}}function Rc(e){for(;q!==null;){var t=q;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:hc||Sc(5,t);break;case 1:var i=t.stateNode;if(t.flags&4&&!hc)if(n===null)i.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:bs(t.type,n.memoizedProps);i.componentDidUpdate(a,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&ho(t,o,i);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}ho(t,s,n)}break;case 5:var c=t.stateNode;if(n===null&&t.flags&4){n=c;var l=t.memoizedProps;switch(t.type){case`button`:case`input`:case`select`:case`textarea`:l.autoFocus&&n.focus();break;case`img`:l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&yn(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(r(163))}hc||t.flags&512&&Cc(t)}catch(e){Rl(t,t.return,e)}}if(t===e){q=null;break}if(n=t.sibling,n!==null){n.return=t.return,q=n;break}q=t.return}}function zc(e){for(;q!==null;){var t=q;if(t===e){q=null;break}var n=t.sibling;if(n!==null){n.return=t.return,q=n;break}q=t.return}}function Y(e){for(;q!==null;){var t=q;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Sc(4,t)}catch(e){Rl(t,n,e)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount==`function`){var i=t.return;try{r.componentDidMount()}catch(e){Rl(t,i,e)}}var a=t.return;try{Cc(t)}catch(e){Rl(t,a,e)}break;case 5:var o=t.return;try{Cc(t)}catch(e){Rl(t,o,e)}}}catch(e){Rl(t,t.return,e)}if(t===e){q=null;break}var s=t.sibling;if(s!==null){s.return=t.return,q=s;break}q=t.return}}var X=Math.ceil,Z=C.ReactCurrentDispatcher,Bc=C.ReactCurrentOwner,Vc=C.ReactCurrentBatchConfig,Q=0,Hc=null,$=null,Uc=0,Wc=0,Gc=Zi(0),Kc=0,qc=null,Jc=0,Yc=0,Xc=0,Zc=null,Qc=null,$c=0,el=1/0,tl=null,nl=!1,rl=null,il=null,al=!1,ol=null,sl=0,cl=0,ll=null,ul=-1,dl=0;function fl(){return Q&6?Et():ul===-1?ul=Et():ul}function pl(e){return e.mode&1?Q&2&&Uc!==0?Uc&-Uc:Ba.transition===null?(e=M,e===0?(e=window.event,e=e===void 0?16:Dn(e.type),e):e):(dl===0&&(dl=Gt()),dl):1}function ml(e,t,n,i){if(50<cl)throw cl=0,ll=null,Error(r(185));qt(e,n,i),(!(Q&2)||e!==Hc)&&(e===Hc&&(!(Q&2)&&(Yc|=n),Kc===4&&bl(e,Uc)),hl(e,i),n===1&&Q===0&&!(t.mode&1)&&(el=Et()+500,ua&&ma()))}function hl(e,t){var n=e.callbackNode;Ut(e,t);var r=Vt(e,e===Hc?Uc:0);if(r===0)n!==null&&Ct(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Ct(n),t===1)e.tag===0?pa(xl.bind(null,e)):fa(xl.bind(null,e)),Fi(function(){!(Q&6)&&ma()}),n=null;else{switch(Xt(r)){case 1:n=Ot;break;case 4:n=kt;break;case 16:n=At;break;case 536870912:n=Mt;break;default:n=At}n=Wl(n,gl.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function gl(e,t){if(ul=-1,dl=0,Q&6)throw Error(r(327));var n=e.callbackNode;if(Il()&&e.callbackNode!==n)return null;var i=Vt(e,e===Hc?Uc:0);if(i===0)return null;if(i&30||(i&e.expiredLanes)!==0||t)t=kl(e,i);else{t=i;var a=Q;Q|=2;var o=Dl();(Hc!==e||Uc!==t)&&(tl=null,el=Et()+500,Tl(e,t));do try{jl();break}catch(t){El(e,t)}while(1);Za(),Z.current=o,Q=a,$===null?(Hc=null,Uc=0,t=Kc):t=0}if(t!==0){if(t===2&&(a=Wt(e),a!==0&&(i=a,t=_l(e,a))),t===1)throw n=qc,Tl(e,0),bl(e,i),hl(e,Et()),n;if(t===6)bl(e,i);else{if(a=e.current.alternate,!(i&30)&&!yl(a)&&(t=kl(e,i),t===2&&(o=Wt(e),o!==0&&(i=o,t=_l(e,o))),t===1))throw n=qc,Tl(e,0),bl(e,i),hl(e,Et()),n;switch(e.finishedWork=a,e.finishedLanes=i,t){case 0:case 1:throw Error(r(345));case 2:Pl(e,Qc,tl);break;case 3:if(bl(e,i),(i&130023424)===i&&(t=$c+500-Et(),10<t)){if(Vt(e,0)!==0)break;if(a=e.suspendedLanes,(a&i)!==i){fl(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=Mi(Pl.bind(null,e,Qc,tl),t);break}Pl(e,Qc,tl);break;case 4:if(bl(e,i),(i&4194240)===i)break;for(t=e.eventTimes,a=-1;0<i;){var s=31-It(i);o=1<<s,s=t[s],s>a&&(a=s),i&=~o}if(i=a,i=Et()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*X(i/1960))-i,10<i){e.timeoutHandle=Mi(Pl.bind(null,e,Qc,tl),i);break}Pl(e,Qc,tl);break;case 5:Pl(e,Qc,tl);break;default:throw Error(r(329))}}}return hl(e,Et()),e.callbackNode===n?gl.bind(null,e):null}function _l(e,t){var n=Zc;return e.current.memoizedState.isDehydrated&&(Tl(e,t).flags|=256),e=kl(e,t),e!==2&&(t=Qc,Qc=n,t!==null&&vl(t)),e}function vl(e){Qc===null?Qc=e:Qc.push.apply(Qc,e)}function yl(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Lr(a(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function bl(e,t){for(t&=~Xc,t&=~Yc,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-It(t),r=1<<n;e[n]=-1,t&=~r}}function xl(e){if(Q&6)throw Error(r(327));Il();var t=Vt(e,0);if(!(t&1))return hl(e,Et()),null;var n=kl(e,t);if(e.tag!==0&&n===2){var i=Wt(e);i!==0&&(t=i,n=_l(e,i))}if(n===1)throw n=qc,Tl(e,0),bl(e,t),hl(e,Et()),n;if(n===6)throw Error(r(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Pl(e,Qc,tl),hl(e,Et()),null}function Sl(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(el=Et()+500,ua&&ma())}}function Cl(e){ol!==null&&ol.tag===0&&!(Q&6)&&Il();var t=Q;Q|=1;var n=Vc.transition,r=M;try{if(Vc.transition=null,M=1,e)return e()}finally{M=r,Vc.transition=n,Q=t,!(Q&6)&&ma()}}function wl(){Wc=Gc.current,L(Gc)}function Tl(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Ni(n)),$!==null)for(n=$.return;n!==null;){var r=n;switch(Da(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ia();break;case 3:So(),L(ea),L($i),Oo();break;case 5:wo(r);break;case 4:So();break;case 13:L(To);break;case 19:L(To);break;case 10:Qa(r.type._context);break;case 22:case 23:wl()}n=n.return}if(Hc=e,$=e=Yl(e.current,null),Uc=Wc=t,Kc=0,qc=null,Xc=Yc=Jc=0,Qc=Zc=null,no!==null){for(t=0;t<no.length;t++)if(n=no[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,a=n.pending;if(a!==null){var o=a.next;a.next=i,r.next=o}n.pending=r}no=null}return e}function El(e,t){do{var n=$;try{if(Za(),ko.current=gs,Mo){for(var i=B.memoizedState;i!==null;){var a=i.queue;a!==null&&(a.pending=null),i=i.next}Mo=!1}if(jo=0,H=V=B=null,No=!1,U=0,Bc.current=null,n===null||n.return===null){Kc=1,qc=t,$=null;break}a:{var o=e,s=n.return,c=n,l=t;if(t=Uc,c.flags|=32768,typeof l==`object`&&l&&typeof l.then==`function`){var u=l,d=c,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Ps(s);if(m!==null){m.flags&=-257,Fs(m,s,c,o,t),m.mode&1&&Ns(o,u,t),t=m,l=u;var h=t.updateQueue;if(h===null){var g=new Set;g.add(l),t.updateQueue=g}else h.add(l);break a}else{if(!(t&1)){Ns(o,u,t),Ol();break a}l=Error(r(426))}}else if(z&&c.mode&1){var _=Ps(s);if(_!==null){!(_.flags&65536)&&(_.flags|=256),Fs(_,s,c,o,t),za(Ds(l,c));break a}}o=l=Ds(l,c),Kc!==4&&(Kc=2),Zc===null?Zc=[o]:Zc.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var v=js(o,l,t);po(o,v);break a;case 1:c=l;var y=o.type,b=o.stateNode;if(!(o.flags&128)&&(typeof y.getDerivedStateFromError==`function`||b!==null&&typeof b.componentDidCatch==`function`&&(il===null||!il.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t;var x=Ms(o,c,t);po(o,x);break a}}o=o.return}while(o!==null)}Nl(n)}catch(e){t=e,$===n&&n!==null&&($=n=n.return);continue}break}while(1)}function Dl(){var e=Z.current;return Z.current=gs,e===null?gs:e}function Ol(){(Kc===0||Kc===3||Kc===2)&&(Kc=4),Hc===null||!(Jc&268435455)&&!(Yc&268435455)||bl(Hc,Uc)}function kl(e,t){var n=Q;Q|=2;var i=Dl();(Hc!==e||Uc!==t)&&(tl=null,Tl(e,t));do try{Al();break}catch(t){El(e,t)}while(1);if(Za(),Q=n,Z.current=i,$!==null)throw Error(r(261));return Hc=null,Uc=0,Kc}function Al(){for(;$!==null;)Ml($)}function jl(){for(;$!==null&&!wt();)Ml($)}function Ml(e){var t=Ul(e.alternate,e,Wc);e.memoizedProps=e.pendingProps,t===null?Nl(e):$=t,Bc.current=null}function Nl(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=pc(n,t),n!==null){n.flags&=32767,$=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Kc=6,$=null;return}}else if(n=fc(n,t,Wc),n!==null){$=n;return}if(t=t.sibling,t!==null){$=t;return}$=t=e}while(t!==null);Kc===0&&(Kc=5)}function Pl(e,t,n){var r=M,i=Vc.transition;try{Vc.transition=null,M=1,Fl(e,t,n,r)}finally{Vc.transition=i,M=r}return null}function Fl(e,t,n,i){do Il();while(ol!==null);if(Q&6)throw Error(r(327));n=e.finishedWork;var a=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(Jt(e,o),e===Hc&&($=Hc=null,Uc=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||al||(al=!0,Wl(At,function(){return Il(),null})),o=(n.flags&15990)!=0,n.subtreeFlags&15990||o){o=Vc.transition,Vc.transition=null;var s=M;M=1;var c=Q;Q|=4,Bc.current=null,bc(e,n),Pc(n,e),Wr(Ai),xn=!!ki,Ai=ki=null,e.current=n,Ic(n,e,a),Tt(),Q=c,M=s,Vc.transition=o}else e.current=n;if(al&&(al=!1,ol=e,sl=a),o=e.pendingLanes,o===0&&(il=null),Ft(n.stateNode,i),hl(e,Et()),t!==null)for(i=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],i(a.value,{componentStack:a.stack,digest:a.digest});if(nl)throw nl=!1,e=rl,rl=null,e;return sl&1&&e.tag!==0&&Il(),o=e.pendingLanes,o&1?e===ll?cl++:(cl=0,ll=e):cl=0,ma(),null}function Il(){if(ol!==null){var e=Xt(sl),t=Vc.transition,n=M;try{if(Vc.transition=null,M=16>e?16:e,ol===null)var i=!1;else{if(e=ol,ol=null,sl=0,Q&6)throw Error(r(331));var a=Q;for(Q|=4,q=e.current;q!==null;){var o=q,s=o.child;if(q.flags&16){var c=o.deletions;if(c!==null){for(var l=0;l<c.length;l++){var u=c[l];for(q=u;q!==null;){var d=q;switch(d.tag){case 0:case 11:case 15:xc(8,d,o)}var f=d.child;if(f!==null)f.return=d,q=f;else for(;q!==null;){d=q;var p=d.sibling,m=d.return;if(wc(d),d===u){q=null;break}if(p!==null){p.return=m,q=p;break}q=m}}}var h=o.alternate;if(h!==null){var g=h.child;if(g!==null){h.child=null;do{var _=g.sibling;g.sibling=null,g=_}while(g!==null)}}q=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,q=s;else b:for(;q!==null;){if(o=q,o.flags&2048)switch(o.tag){case 0:case 11:case 15:xc(9,o,o.return)}var v=o.sibling;if(v!==null){v.return=o.return,q=v;break b}q=o.return}}var y=e.current;for(q=y;q!==null;){s=q;var b=s.child;if(s.subtreeFlags&2064&&b!==null)b.return=s,q=b;else b:for(s=y;q!==null;){if(c=q,c.flags&2048)try{switch(c.tag){case 0:case 11:case 15:Sc(9,c)}}catch(e){Rl(c,c.return,e)}if(c===s){q=null;break b}var x=c.sibling;if(x!==null){x.return=c.return,q=x;break b}q=c.return}}if(Q=a,ma(),Pt&&typeof Pt.onPostCommitFiberRoot==`function`)try{Pt.onPostCommitFiberRoot(Nt,e)}catch{}i=!0}return i}finally{M=n,Vc.transition=t}}return!1}function Ll(e,t,n){t=Ds(n,t),t=js(e,t,1),e=uo(e,t,1),t=fl(),e!==null&&(qt(e,1,t),hl(e,t))}function Rl(e,t,n){if(e.tag===3)Ll(e,e,n);else for(;t!==null;){if(t.tag===3){Ll(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(il===null||!il.has(r))){e=Ds(n,e),e=Ms(t,e,1),t=uo(t,e,1),e=fl(),t!==null&&(qt(t,1,e),hl(t,e));break}}t=t.return}}function zl(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=fl(),e.pingedLanes|=e.suspendedLanes&n,Hc===e&&(Uc&n)===n&&(Kc===4||Kc===3&&(Uc&130023424)===Uc&&500>Et()-$c?Tl(e,0):Xc|=n),hl(e,t)}function Bl(e,t){t===0&&(e.mode&1?(t=zt,zt<<=1,!(zt&130023424)&&(zt=4194304)):t=1);var n=fl();e=ao(e,t),e!==null&&(qt(e,t,n),hl(e,n))}function Vl(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bl(e,n)}function Hl(e,t){var n=0;switch(e.tag){case 13:var i=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:i=e.stateNode;break;default:throw Error(r(314))}i!==null&&i.delete(t),Bl(e,n)}var Ul=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ea.current)Ls=!0;else{if((e.lanes&n)===0&&!(t.flags&128))return Ls=!1,oc(e,t,n);Ls=!!(e.flags&131072)}else Ls=!1,z&&t.flags&1048576&&Ta(t,va,t.index);switch(t.lanes=0,t.tag){case 2:var i=t.type;ic(e,t),e=t.pendingProps;var a=na(t,$i.current);eo(t,n),a=Lo(null,t,i,e,a,n);var o=Ro();return t.flags|=1,typeof a==`object`&&a&&typeof a.render==`function`&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,ra(i)?(o=!0,sa(t)):o=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,so(t),a.updater=Ss,t.stateNode=a,a._reactInternals=t,Es(t,i,e,n),t=Ks(null,t,i,!0,o,n)):(t.tag=0,z&&o&&Ea(t),Rs(null,t,a,n),t=t.child),t;case 16:i=t.elementType;a:{switch(ic(e,t),e=t.pendingProps,a=i._init,i=a(i._payload),t.type=i,a=t.tag=Jl(i),e=bs(i,e),a){case 0:t=Ws(null,t,i,e,n);break a;case 1:t=Gs(null,t,i,e,n);break a;case 11:t=zs(null,t,i,e,n);break a;case 14:t=Bs(null,t,i,bs(i.type,e),n);break a}throw Error(r(306,i,``))}return t;case 0:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),Ws(e,t,i,a,n);case 1:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),Gs(e,t,i,a,n);case 3:a:{if(qs(t),e===null)throw Error(r(387));i=t.pendingProps,o=t.memoizedState,a=o.element,co(e,t),mo(t,i,null,n);var s=t.memoizedState;if(i=s.element,o.isDehydrated)if(o={element:i,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){a=Ds(Error(r(423)),t),t=Js(e,t,i,n,a);break a}else if(i!==a){a=Ds(Error(r(424)),t),t=Js(e,t,i,n,a);break a}else for(ka=F(t.stateNode.containerInfo.firstChild),Oa=t,z=!0,Aa=null,n=Ka(t,null,i,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ra(),i===a){t=ac(e,t,n);break a}Rs(e,t,i,n)}t=t.child}return t;case 5:return Co(t),e===null&&Pa(t),i=t.type,a=t.pendingProps,o=e===null?null:e.memoizedProps,s=a.children,ji(i,a)?s=null:o!==null&&ji(i,o)&&(t.flags|=32),Us(e,t),Rs(e,t,s,n),t.child;case 6:return e===null&&Pa(t),null;case 13:return Zs(e,t,n);case 4:return xo(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Ga(t,null,i,n):Rs(e,t,i,n),t.child;case 11:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),zs(e,t,i,a,n);case 7:return Rs(e,t,t.pendingProps,n),t.child;case 8:return Rs(e,t,t.pendingProps.children,n),t.child;case 12:return Rs(e,t,t.pendingProps.children,n),t.child;case 10:a:{if(i=t.type._context,a=t.pendingProps,o=t.memoizedProps,s=a.value,R(qa,i._currentValue),i._currentValue=s,o!==null)if(Lr(o.value,s)){if(o.children===a.children&&!ea.current){t=ac(e,t,n);break a}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var c=o.dependencies;if(c!==null){s=o.child;for(var l=c.firstContext;l!==null;){if(l.context===i){if(o.tag===1){l=lo(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),$a(o.return,n,t),c.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(r(341));s.lanes|=n,c=s.alternate,c!==null&&(c.lanes|=n),$a(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}Rs(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,i=t.pendingProps.children,eo(t,n),a=to(a),i=i(a),t.flags|=1,Rs(e,t,i,n),t.child;case 14:return i=t.type,a=bs(i,t.pendingProps),a=bs(i.type,a),Bs(e,t,i,a,n);case 15:return Vs(e,t,t.type,t.pendingProps,n);case 17:return i=t.type,a=t.pendingProps,a=t.elementType===i?a:bs(i,a),ic(e,t),t.tag=1,ra(i)?(e=!0,sa(t)):e=!1,eo(t,n),ws(t,i,a),Es(t,i,a,n),Ks(null,t,i,!0,e,n);case 19:return rc(e,t,n);case 22:return Hs(e,t,n)}throw Error(r(156,t.tag))};function Wl(e,t){return St(e,t)}function Gl(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kl(e,t,n,r){return new Gl(e,t,n,r)}function ql(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Jl(e){if(typeof e==`function`)return+!!ql(e);if(e!=null){if(e=e.$$typeof,e===re)return 11;if(e===O)return 14}return 2}function Yl(e,t){var n=e.alternate;return n===null?(n=Kl(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xl(e,t,n,i,a,o){var s=2;if(i=e,typeof e==`function`)ql(e)&&(s=1);else if(typeof e==`string`)s=5;else a:switch(e){case E:return Zl(n.children,a,o,t);case ee:s=8,a|=8;break;case D:return e=Kl(12,n,t,a|2),e.elementType=D,e.lanes=o,e;case ie:return e=Kl(13,n,t,a),e.elementType=ie,e.lanes=o,e;case ae:return e=Kl(19,n,t,a),e.elementType=ae,e.lanes=o,e;case se:return Ql(n,a,o,t);default:if(typeof e==`object`&&e)switch(e.$$typeof){case te:s=10;break a;case ne:s=9;break a;case re:s=11;break a;case O:s=14;break a;case oe:s=16,i=null;break a}throw Error(r(130,e==null?e:typeof e,``))}return t=Kl(s,n,t,a),t.elementType=e,t.type=i,t.lanes=o,t}function Zl(e,t,n,r){return e=Kl(7,e,r,t),e.lanes=n,e}function Ql(e,t,n,r){return e=Kl(22,e,r,t),e.elementType=se,e.lanes=n,e.stateNode={isHidden:!1},e}function $l(e,t,n){return e=Kl(6,e,null,t),e.lanes=n,e}function eu(e,t,n){return t=Kl(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function tu(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Kt(0),this.expirationTimes=Kt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Kt(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,i,a,o,s,c){return e=new tu(e,t,n,s,c),t===1?(t=1,!0===a&&(t|=8)):t=0,a=Kl(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},so(a),e}function ru(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:T,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}function iu(e){if(!e)return Qi;e=e._reactInternals;a:{if(gt(e)!==e||e.tag!==1)throw Error(r(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break a;case 1:if(ra(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break a}}t=t.return}while(t!==null);throw Error(r(171))}if(e.tag===1){var n=e.type;if(ra(n))return oa(e,n,t)}return t}function au(e,t,n,r,i,a,o,s,c){return e=nu(n,r,!0,e,i,a,o,s,c),e.context=iu(null),n=e.current,r=fl(),i=pl(n),a=lo(r,i),a.callback=t??null,uo(n,a,i),e.current.lanes=i,qt(e,i,r),hl(e,r),e}function ou(e,t,n,r){var i=t.current,a=fl(),o=pl(i);return n=iu(n),t.context===null?t.context=n:t.pendingContext=n,t=lo(a,o),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=uo(i,t,o),e!==null&&(ml(e,i,o,a),fo(e,i,o)),o}function su(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function cu(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function lu(e,t){cu(e,t),(e=e.alternate)&&cu(e,t)}function uu(){return null}var du=typeof reportError==`function`?reportError:function(e){console.error(e)};function fu(e){this._internalRoot=e}pu.prototype.render=fu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(r(409));ou(e,t,null,null)},pu.prototype.unmount=fu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cl(function(){ou(null,e,null,null)}),t[Hi]=null}};function pu(e){this._internalRoot=e}pu.prototype.unstable_scheduleHydration=function(e){if(e){var t=$t();e={blockedOn:null,target:e,priority:t};for(var n=0;n<ln.length&&t!==0&&t<ln[n].priority;n++);ln.splice(n,0,e),n===0&&mn(e)}};function mu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==` react-mount-point-unstable `))}function gu(){}function _u(e,t,n,r,i){if(i){if(typeof r==`function`){var a=r;r=function(){var e=su(o);a.call(e)}}var o=au(t,r,e,0,null,!1,!1,``,gu);return e._reactRootContainer=o,e[Hi]=o.current,_i(e.nodeType===8?e.parentNode:e),Cl(),o}for(;i=e.lastChild;)e.removeChild(i);if(typeof r==`function`){var s=r;r=function(){var e=su(c);s.call(e)}}var c=nu(e,0,!1,null,null,!1,!1,``,gu);return e._reactRootContainer=c,e[Hi]=c.current,_i(e.nodeType===8?e.parentNode:e),Cl(function(){ou(t,c,n,r)}),c}function vu(e,t,n,r,i){var a=n._reactRootContainer;if(a){var o=a;if(typeof i==`function`){var s=i;i=function(){var e=su(o);s.call(e)}}ou(t,o,e,i)}else o=_u(n,t,e,i,r);return su(o)}N=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Bt(t.pendingLanes);n!==0&&(Yt(t,n|1),hl(t,Et()),!(Q&6)&&(el=Et()+500,ma()))}break;case 13:Cl(function(){var t=ao(e,1);t!==null&&ml(t,e,1,fl())}),lu(e,1)}},Zt=function(e){if(e.tag===13){var t=ao(e,134217728);t!==null&&ml(t,e,134217728,fl()),lu(e,134217728)}},Qt=function(e){if(e.tag===13){var t=pl(e),n=ao(e,t);n!==null&&ml(n,e,t,fl()),lu(e,t)}},$t=function(){return M},en=function(e,t){var n=M;try{return M=e,t()}finally{M=n}},Ye=function(e,t,n){switch(t){case`input`:if(Ee(e,n),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name=`+JSON.stringify(``+t)+`][type="radio"]`),t=0;t<n.length;t++){var i=n[t];if(i!==e&&i.form===e.form){var a=Ji(i);if(!a)throw Error(r(90));xe(i),Ee(i,a)}}}break;case`textarea`:Ne(e,n);break;case`select`:t=n.value,t!=null&&Ae(e,!!n.multiple,t,!1)}},tt=Sl,nt=Cl;var yu={usingClientEntryPoint:!1,Events:[Ki,qi,Ji,$e,et,Sl]},bu={findFiberByHostInstance:Gi,bundleType:0,version:`18.3.1`,rendererPackageName:`react-dom`},xu={bundleType:bu.bundleType,version:bu.version,rendererPackageName:bu.rendererPackageName,rendererConfig:bu.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=bt(e),e===null?null:e.stateNode},findFiberByHostInstance:bu.findFiberByHostInstance||uu,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:`18.3.1-next-f1338f8080-20240426`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var Su=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Su.isDisabled&&Su.supportsFiber)try{Nt=Su.inject(xu),Pt=Su}catch{}}e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yu,e.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(t))throw Error(r(200));return ru(e,t,null,n)},e.createRoot=function(e,t){if(!mu(e))throw Error(r(299));var n=!1,i=``,a=du;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,i,a),e[Hi]=t.current,_i(e.nodeType===8?e.parentNode:e),new fu(t)},e.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(r(188)):(e=Object.keys(e).join(`,`),Error(r(268,e)));return e=bt(t),e=e===null?null:e.stateNode,e},e.flushSync=function(e){return Cl(e)},e.hydrate=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!0,n)},e.hydrateRoot=function(e,t,n){if(!mu(e))throw Error(r(405));var i=n!=null&&n.hydratedSources||null,a=!1,o=``,s=du;if(n!=null&&(!0===n.unstable_strictMode&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=au(t,null,e,1,n??null,a,!1,o,s),e[Hi]=t.current,_i(e),i)for(e=0;e<i.length;e++)n=i[e],a=n._getVersion,a=a(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new pu(t)},e.render=function(e,t,n){if(!hu(t))throw Error(r(200));return vu(null,e,t,!1,n)},e.unmountComponentAtNode=function(e){if(!hu(e))throw Error(r(40));return e._reactRootContainer?(Cl(function(){vu(null,null,e,!1,function(){e._reactRootContainer=null,e[Hi]=null})}),!0):!1},e.unstable_batchedUpdates=Sl,e.unstable_renderSubtreeIntoContainer=function(e,t,n,i){if(!hu(n))throw Error(r(200));if(e==null||e._reactInternals===void 0)throw Error(r(38));return vu(e,t,n,!1,i)},e.version=`18.3.1-next-f1338f8080-20240426`})),h=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=m()})),g=o((e=>{var t=h();e.createRoot=t.createRoot,e.hydrateRoot=t.hydrateRoot})),_=l(d());h();var v=l(g());function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}var b;(function(e){e.Pop=`POP`,e.Push=`PUSH`,e.Replace=`REPLACE`})(b||={});var x=`popstate`;function S(e){e===void 0&&(e={});function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=te(e.location.hash.substr(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),ee(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:D(t))}function r(e,t){w(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(`+JSON.stringify(t)+`)`)}return ne(t,n,r,e)}function C(e,t){if(e===!1||e==null)throw Error(t)}function w(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function T(){return Math.random().toString(36).substr(2,8)}function E(e,t){return{usr:e.state,key:e.key,idx:t}}function ee(e,t,n,r){return n===void 0&&(n=null),y({pathname:typeof e==`string`?e:e.pathname,search:``,hash:``},typeof t==`string`?te(t):t,{state:n,key:t&&t.key||r||T()})}function D(e){let{pathname:t=`/`,search:n=``,hash:r=``}=e;return n&&n!==`?`&&(t+=n.charAt(0)===`?`?n:`?`+n),r&&r!==`#`&&(t+=r.charAt(0)===`#`?r:`#`+r),t}function te(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function ne(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=b.Pop,c=null,l=u();l??(l=0,o.replaceState(y({},o.state,{idx:l}),``));function u(){return(o.state||{idx:null}).idx}function d(){s=b.Pop;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=b.Push;let r=ee(h.location,e,t);n&&n(r,e),l=u()+1;let d=E(r,l),f=h.createHref(r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=b.Replace;let r=ee(h.location,e,t);n&&n(r,e),l=u();let i=E(r,l),d=h.createHref(r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){let t=i.location.origin===`null`?i.location.href:i.location.origin,n=typeof e==`string`?e:D(e);return n=n.replace(/ $/,`%20`),C(t,`No window.location.(origin|href) available to create URL for href: `+n),new URL(n,t)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(x,d),c=e,()=>{i.removeEventListener(x,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}var re;(function(e){e.data=`data`,e.deferred=`deferred`,e.redirect=`redirect`,e.error=`error`})(re||={});function ie(e,t,n){return n===void 0&&(n=`/`),ae(e,t,n,!1)}function ae(e,t,n,r){let i=be((typeof t==`string`?te(t):t).pathname||`/`,n);if(i==null)return null;let a=O(e);se(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=ye(i);o=ge(a[e],t,r)}return o}function O(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r=``);let i=(e,i,a)=>{let o={relativePath:a===void 0?e.path||``:a,caseSensitive:e.caseSensitive===!0,childrenIndex:i,route:e};o.relativePath.startsWith(`/`)&&(C(o.relativePath.startsWith(r),`Absolute route path "`+o.relativePath+`" nested under path `+(`"`+r+`" is not valid. An absolute child route path `)+`must start with the combined path of all its parent routes.`),o.relativePath=o.relativePath.slice(r.length));let s=ke([r,o.relativePath]),c=n.concat(o);e.children&&e.children.length>0&&(C(e.index!==!0,`Index routes must not have child routes. Please remove `+(`all child routes from route path "`+s+`".`)),O(e.children,t,c,s)),!(e.path==null&&!e.index)&&t.push({path:s,score:me(s,e.index),routesMeta:c})};return e.forEach((e,t)=>{var n;if(e.path===``||!((n=e.path)!=null&&n.includes(`?`)))i(e,t);else for(let n of oe(e.path))i(e,t,n)}),t}function oe(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=oe(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function se(e){e.sort((e,t)=>e.score===t.score?he(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var ce=/^:[\w-]+$/,le=3,k=2,ue=1,de=10,fe=-2,pe=e=>e===`*`;function me(e,t){let n=e.split(`/`),r=n.length;return n.some(pe)&&(r+=fe),t&&(r+=k),n.filter(e=>!pe(e)).reduce((e,t)=>e+(ce.test(t)?le:t===``?ue:de),r)}function he(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function ge(e,t,n){n===void 0&&(n=!1);let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=_e({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=_e({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:ke([a,u.pathname]),pathnameBase:Ae(ke([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=ke([a,u.pathnameBase]))}return o}function _e(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ve(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,t,n)=>{let{paramName:r,isOptional:i}=t;if(r===`*`){let e=s[n]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let c=s[n];return i&&!c?e[r]=void 0:e[r]=(c||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function ve(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),w(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "`+e+`" will be treated as if it were `+(`"`+e.replace(/\*$/,`/*`)+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+(`please change the route path to "`+e.replace(/\*$/,`/*`)+`".`));let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n)=>(r.push({paramName:t,isOptional:n!=null}),n?`/?([^\\/]+)?`:`/([^\\/]+)`));return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function ye(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return w(!1,`The URL path "`+e+`" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent `+(`encoding (`+t+`).`)),e}}function be(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var xe=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Se=e=>xe.test(e);function Ce(e,t){t===void 0&&(t=`/`);let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?te(e):e,a;if(n)if(Se(n))a=n;else{if(n.includes(`//`)){let e=n;n=n.replace(/\/\/+/g,`/`),w(!1,`Pathnames cannot have embedded double slashes - normalizing `+(e+` -> `+n))}a=n.startsWith(`/`)?we(n.substring(1),`/`):we(n,t)}else a=t;return{pathname:a,search:je(r),hash:Me(i)}}function we(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function Te(e,t,n,r){return`Cannot include a '`+e+`' character in a manually specified `+("`to."+t+"` field ["+JSON.stringify(r)+`].  Please separate it out to the `)+("`to."+n+"` field. Alternatively you may provide the full path as ")+`a string in <Link to="..."> and the router will parse it for you.`}function Ee(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function De(e,t){let n=Ee(e);return t?n.map((e,t)=>t===n.length-1?e.pathname:e.pathnameBase):n.map(e=>e.pathnameBase)}function Oe(e,t,n,r){r===void 0&&(r=!1);let i;typeof e==`string`?i=te(e):(i=y({},e),C(!i.pathname||!i.pathname.includes(`?`),Te(`?`,`pathname`,`search`,i)),C(!i.pathname||!i.pathname.includes(`#`),Te(`#`,`pathname`,`hash`,i)),C(!i.search||!i.search.includes(`#`),Te(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Ce(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ke=e=>e.join(`/`).replace(/\/\/+/g,`/`),Ae=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),je=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,Me=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e;function Ne(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}var Pe=[`post`,`put`,`patch`,`delete`];new Set(Pe);var Fe=[`get`,...Pe];new Set(Fe);function Ie(){return Ie=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ie.apply(this,arguments)}var Le=_.createContext(null),Re=_.createContext(null),ze=_.createContext(null),Be=_.createContext(null),Ve=_.createContext({outlet:null,matches:[],isDataRoute:!1}),He=_.createContext(null);function Ue(e,t){let{relative:n}=t===void 0?{}:t;!We()&&C(!1);let{basename:r,navigator:i}=_.useContext(ze),{hash:a,pathname:o,search:s}=Qe(e,{relative:n}),c=o;return r!==`/`&&(c=o===`/`?r:ke([r,o])),i.createHref({pathname:c,search:s,hash:a})}function We(){return _.useContext(Be)!=null}function Ge(){return!We()&&C(!1),_.useContext(Be).location}function Ke(e){_.useContext(ze).static||_.useLayoutEffect(e)}function qe(){let{isDataRoute:e}=_.useContext(Ve);return e?pt():Je()}function Je(){!We()&&C(!1);let e=_.useContext(Le),{basename:t,future:n,navigator:r}=_.useContext(ze),{matches:i}=_.useContext(Ve),{pathname:a}=Ge(),o=JSON.stringify(De(i,n.v7_relativeSplatPath)),s=_.useRef(!1);return Ke(()=>{s.current=!0}),_.useCallback(function(n,i){if(i===void 0&&(i={}),!s.current)return;if(typeof n==`number`){r.go(n);return}let c=Oe(n,JSON.parse(o),a,i.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:ke([t,c.pathname])),(i.replace?r.replace:r.push)(c,i.state,i)},[t,r,o,a,e])}var Ye=_.createContext(null);function Xe(e){let t=_.useContext(Ve).outlet;return t&&_.createElement(Ye.Provider,{value:e},t)}function Ze(){let{matches:e}=_.useContext(Ve),t=e[e.length-1];return t?t.params:{}}function Qe(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.useContext(ze),{matches:i}=_.useContext(Ve),{pathname:a}=Ge(),o=JSON.stringify(De(i,r.v7_relativeSplatPath));return _.useMemo(()=>Oe(e,JSON.parse(o),a,n===`path`),[e,o,a,n])}function $e(e,t){return et(e,t)}function et(e,t,n,r){!We()&&C(!1);let{navigator:i}=_.useContext(ze),{matches:a}=_.useContext(Ve),o=a[a.length-1],s=o?o.params:{};o&&o.pathname;let c=o?o.pathnameBase:`/`;o&&o.route;let l=Ge(),u;if(t){let e=typeof t==`string`?te(t):t;!(c===`/`||e.pathname?.startsWith(c))&&C(!1),u=e}else u=l;let d=u.pathname||`/`,f=d;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);f=`/`+d.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let p=ie(e,{pathname:f}),m=at(p&&p.map(e=>Object.assign({},e,{params:Object.assign({},s,e.params),pathname:ke([c,i.encodeLocation?i.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:ke([c,i.encodeLocation?i.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),a,n,r);return t&&m?_.createElement(Be.Provider,{value:{location:Ie({pathname:`/`,search:``,hash:``,state:null,key:`default`},u),navigationType:b.Pop}},m):m}function tt(){let e=ft(),t=Ne(e)?e.status+` `+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null;return _.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:{padding:`0.5rem`,backgroundColor:`rgba(200,200,200, 0.5)`}},n):null,null)}var nt=_.createElement(tt,null),rt=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error(`React Router caught the following error during render`,e,t)}render(){return this.state.error===void 0?this.props.children:_.createElement(Ve.Provider,{value:this.props.routeContext},_.createElement(He.Provider,{value:this.state.error,children:this.props.component}))}};function it(e){let{routeContext:t,match:n,children:r}=e,i=_.useContext(Le);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Ve.Provider,{value:t},r)}function at(e,t,n,r){if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if(!n)return null;if(n.errors)e=n.matches;else if((i=r)!=null&&i.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,o=n?.errors;if(o!=null){let e=a.findIndex(e=>e.route.id&&o?.[e.route.id]!==void 0);!(e>=0)&&C(!1),a=a.slice(0,Math.min(a.length,e+1))}let s=!1,c=-1;if(n&&r&&r.v7_partialHydration)for(let e=0;e<a.length;e++){let t=a[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:r}=n,i=t.route.loader&&e[t.route.id]===void 0&&(!r||r[t.route.id]===void 0);if(t.route.lazy||i){s=!0,a=c>=0?a.slice(0,c+1):[a[0]];break}}}return a.reduceRight((e,r,i)=>{let l,u=!1,d=null,f=null;n&&(l=o&&r.route.id?o[r.route.id]:void 0,d=r.route.errorElement||nt,s&&(c<0&&i===0?(ht(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),u=!0,f=null):c===i&&(u=!0,f=r.route.hydrateFallbackElement||null)));let p=t.concat(a.slice(0,i+1)),m=()=>{let t;return t=l?d:u?f:r.route.Component?_.createElement(r.route.Component,null):r.route.element?r.route.element:e,_.createElement(it,{match:r,routeContext:{outlet:e,matches:p,isDataRoute:n!=null},children:t})};return n&&(r.route.ErrorBoundary||r.route.errorElement||i===0)?_.createElement(rt,{location:n.location,revalidation:n.revalidation,component:d,error:l,children:m(),routeContext:{outlet:null,matches:p,isDataRoute:!0}}):m()},null)}var ot=function(e){return e.UseBlocker=`useBlocker`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e}(ot||{}),st=function(e){return e.UseBlocker=`useBlocker`,e.UseLoaderData=`useLoaderData`,e.UseActionData=`useActionData`,e.UseRouteError=`useRouteError`,e.UseNavigation=`useNavigation`,e.UseRouteLoaderData=`useRouteLoaderData`,e.UseMatches=`useMatches`,e.UseRevalidator=`useRevalidator`,e.UseNavigateStable=`useNavigate`,e.UseRouteId=`useRouteId`,e}(st||{});function ct(e){let t=_.useContext(Le);return!t&&C(!1),t}function lt(e){let t=_.useContext(Re);return!t&&C(!1),t}function ut(e){let t=_.useContext(Ve);return!t&&C(!1),t}function dt(e){let t=ut(e),n=t.matches[t.matches.length-1];return!n.route.id&&C(!1),n.route.id}function ft(){let e=_.useContext(He),t=lt(st.UseRouteError),n=dt(st.UseRouteError);return e===void 0?t.errors?.[n]:e}function pt(){let{router:e}=ct(ot.UseNavigateStable),t=dt(st.UseNavigateStable),n=_.useRef(!1);return Ke(()=>{n.current=!0}),_.useCallback(function(r,i){i===void 0&&(i={}),n.current&&(typeof r==`number`?e.navigate(r):e.navigate(r,Ie({fromRouteId:t},i)))},[e,t])}var mt={};function ht(e,t,n){!t&&!mt[e]&&(mt[e]=!0)}var gt=(e,t,n)=>(``+t+("You can use the `"+e+"` future flag to opt-in early. ")+(`For more information, see `+n+`.`),void 0);function _t(e,t){e?.v7_startTransition===void 0&&gt(`v7_startTransition`,"React Router will begin wrapping state updates in `React.startTransition` in v7",`https://reactrouter.com/v6/upgrading/future#v7_starttransition`),e?.v7_relativeSplatPath===void 0&&(!t||t.v7_relativeSplatPath===void 0)&&gt(`v7_relativeSplatPath`,`Relative route resolution within Splat routes is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_relativesplatpath`),t&&(t.v7_fetcherPersist===void 0&&gt(`v7_fetcherPersist`,`The persistence behavior of fetchers is changing in v7`,`https://reactrouter.com/v6/upgrading/future#v7_fetcherpersist`),t.v7_normalizeFormMethod===void 0&&gt(`v7_normalizeFormMethod`,"Casing of `formMethod` fields is being normalized to uppercase in v7",`https://reactrouter.com/v6/upgrading/future#v7_normalizeformmethod`),t.v7_partialHydration===void 0&&gt(`v7_partialHydration`,"`RouterProvider` hydration behavior is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_partialhydration`),t.v7_skipActionErrorRevalidation===void 0&&gt(`v7_skipActionErrorRevalidation`,"The revalidation behavior after 4xx/5xx `action` responses is changing in v7",`https://reactrouter.com/v6/upgrading/future#v7_skipactionerrorrevalidation`))}function vt(e){return Xe(e.context)}function yt(e){C(!1)}function bt(e){let{basename:t=`/`,children:n=null,location:r,navigationType:i=b.Pop,navigator:a,static:o=!1,future:s}=e;We()&&C(!1);let c=t.replace(/^\/*/,`/`),l=_.useMemo(()=>({basename:c,navigator:a,static:o,future:Ie({v7_relativeSplatPath:!1},s)}),[c,s,a,o]);typeof r==`string`&&(r=te(r));let{pathname:u=`/`,search:d=``,hash:f=``,state:p=null,key:m=`default`}=r,h=_.useMemo(()=>{let e=be(u,c);return e==null?null:{location:{pathname:e,search:d,hash:f,state:p,key:m},navigationType:i}},[c,u,d,f,p,m,i]);return h==null?null:_.createElement(ze.Provider,{value:l},_.createElement(Be.Provider,{children:n,value:h}))}function xt(e){let{children:t,location:n}=e;return $e(Ct(t),n)}var St=function(e){return e[e.pending=0]=`pending`,e[e.success=1]=`success`,e[e.error=2]=`error`,e}(St||{});new Promise(()=>{}),_.Component;function Ct(e,t){t===void 0&&(t=[]);let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,Ct(e.props.children,i));return}e.type!==yt&&C(!1),!(!e.props.index||!e.props.children)&&C(!1);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,loader:e.props.loader,action:e.props.action,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=Ct(e.props.children,i)),n.push(a)}),n}function wt(){return wt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},wt.apply(this,arguments)}function Tt(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,a;for(a=0;a<r.length;a++)i=r[a],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Et(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Dt(e,t){return e.button===0&&(!t||t===`_self`)&&!Et(e)}var Ot=[`onClick`,`relative`,`reloadDocument`,`replace`,`state`,`target`,`to`,`preventScrollReset`,`viewTransition`],kt=`6`;try{window.__reactRouterVersion=kt}catch{}var At=_.startTransition;function jt(e){let{basename:t,children:n,future:r,window:i}=e,a=_.useRef();a.current??=S({window:i,v5Compat:!0});let o=a.current,[s,c]=_.useState({action:o.action,location:o.location}),{v7_startTransition:l}=r||{},u=_.useCallback(e=>{l&&At?At(()=>c(e)):c(e)},[c,l]);return _.useLayoutEffect(()=>o.listen(u),[o,u]),_.useEffect(()=>_t(r),[r]),_.createElement(bt,{basename:t,children:n,location:s.location,navigationType:s.action,navigator:o,future:r})}var Mt=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,Nt=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Pt=_.forwardRef(function(e,t){let{onClick:n,relative:r,reloadDocument:i,replace:a,state:o,target:s,to:c,preventScrollReset:l,viewTransition:u}=e,d=Tt(e,Ot),{basename:f}=_.useContext(ze),p,m=!1;if(typeof c==`string`&&Nt.test(c)&&(p=c,Mt))try{let e=new URL(window.location.href),t=c.startsWith(`//`)?new URL(e.protocol+c):new URL(c),n=be(t.pathname,f);t.origin===e.origin&&n!=null?c=n+t.search+t.hash:m=!0}catch{}let h=Ue(c,{relative:r}),g=Lt(c,{replace:a,state:o,target:s,preventScrollReset:l,relative:r,viewTransition:u});function v(e){n&&n(e),e.defaultPrevented||g(e)}return _.createElement(`a`,wt({},d,{href:p||h,onClick:m||i?n:v,ref:t,target:s}))}),Ft;(function(e){e.UseScrollRestoration=`useScrollRestoration`,e.UseSubmit=`useSubmit`,e.UseSubmitFetcher=`useSubmitFetcher`,e.UseFetcher=`useFetcher`,e.useViewTransitionState=`useViewTransitionState`})(Ft||={});var It;(function(e){e.UseFetcher=`useFetcher`,e.UseFetchers=`useFetchers`,e.UseScrollRestoration=`useScrollRestoration`})(It||={});function Lt(e,t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=t===void 0?{}:t,c=qe(),l=Ge(),u=Qe(e,{relative:o});return _.useCallback(t=>{Dt(t,n)&&(t.preventDefault(),c(e,{replace:r===void 0?D(l)===D(u):r,state:i,preventScrollReset:a,relative:o,viewTransition:s}))},[l,c,u,r,i,n,e,a,o,s])}var A=`-ms-`,Rt=`-moz-`,j=`-webkit-`,zt=`comm`,Bt=`rule`,Vt=`decl`,Ht=`@import`,Ut=`@namespace`,Wt=`@keyframes`,Gt=`@layer`,Kt=Math.abs,qt=String.fromCharCode,Jt=Object.assign;function Yt(e,t){return Qt(e,0)^45?(((t<<2^Qt(e,0))<<2^Qt(e,1))<<2^Qt(e,2))<<2^Qt(e,3):0}function M(e){return e.trim()}function Xt(e,t){return(e=t.exec(e))?e[0]:e}function N(e,t,n){return e.replace(t,n)}function Zt(e,t,n){return e.indexOf(t,n)}function Qt(e,t){return e.charCodeAt(t)|0}function $t(e,t,n){return e.slice(t,n)}function en(e){return e.length}function tn(e){return e.length}function nn(e,t){return t.push(e),e}function rn(e,t){return e.map(t).join(``)}function an(e,t){return e.filter(function(e){return!Xt(e,t)})}var on=1,sn=1,cn=0,ln=0,un=0,dn=``;function fn(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:on,column:sn,length:o,return:``,siblings:s}}function pn(e,t){return Jt(fn(``,null,null,``,null,null,0,e.siblings),e,{length:-e.length},t)}function mn(e){for(;e.root;)e=pn(e.root,{children:[e]});nn(e,e.siblings)}function hn(){return un}function gn(){return un=ln>0?Qt(dn,--ln):0,sn--,un===10&&(sn=1,on--),un}function _n(){return un=ln<cn?Qt(dn,ln++):0,sn++,un===10&&(sn=1,on++),un}function vn(){return Qt(dn,ln)}function yn(){return ln}function bn(e,t){return $t(dn,e,t)}function xn(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Sn(e){return on=sn=1,cn=en(dn=e),ln=0,[]}function Cn(e){return dn=``,e}function wn(e){return M(bn(ln-1,Dn(e===91?e+2:e===40?e+1:e)))}function Tn(e){for(;(un=vn())&&un<33;)_n();return xn(e)>2||xn(un)>3?``:` `}function En(e,t){for(;--t&&_n()&&!(un<48||un>102||un>57&&un<65||un>70&&un<97););return bn(e,yn()+(t<6&&vn()==32&&_n()==32))}function Dn(e){for(;_n();)switch(un){case e:return ln;case 34:case 39:e!==34&&e!==39&&Dn(un);break;case 40:e===41&&Dn(e);break;case 92:_n();break}return ln}function On(e,t){for(;_n()&&e+un!==57&&!(e+un===84&&vn()===47););return`/*`+bn(t,ln-1)+`*`+qt(e===47?e:_n())}function kn(e){for(;!xn(vn());)_n();return bn(e,ln)}function An(e){return Cn(jn(``,null,null,null,[``],e=Sn(e),0,[0],e))}function jn(e,t,n,r,i,a,o,s,c){for(var l=0,u=0,d=o,f=0,p=0,m=0,h=1,g=1,_=1,v=0,y=``,b=i,x=a,S=r,C=y;g;)switch(m=v,v=_n()){case 40:if(m!=108&&Qt(C,d-1)==58){Zt(C+=N(wn(v),`&`,`&\f`),`&\f`,Kt(l?s[l-1]:0))!=-1&&(_=-1);break}case 34:case 39:case 91:C+=wn(v);break;case 9:case 10:case 13:case 32:C+=Tn(m);break;case 92:C+=En(yn()-1,7);continue;case 47:switch(vn()){case 42:case 47:nn(Nn(On(_n(),yn()),t,n,c),c),(xn(m||1)==5||xn(vn()||1)==5)&&en(C)&&$t(C,-1,void 0)!==` `&&(C+=` `);break;default:C+=`/`}break;case 123*h:s[l++]=en(C)*_;case 125*h:case 59:case 0:switch(v){case 0:case 125:g=0;case 59+u:_==-1&&(C=N(C,/\f/g,``)),p>0&&(en(C)-d||h===0&&m===47)&&nn(p>32?Pn(C+`;`,r,n,d-1,c):Pn(N(C,` `,``)+`;`,r,n,d-2,c),c);break;case 59:C+=`;`;default:if(nn(S=Mn(C,t,n,l,u,i,s,y,b=[],x=[],d,a),a),v===123)if(u===0)jn(C,t,S,S,b,a,d,s,x);else{switch(f){case 99:if(Qt(C,3)===110)break;case 108:if(Qt(C,2)===97)break;default:u=0;case 100:case 109:case 115:}u?jn(e,S,S,r&&nn(Mn(e,S,S,0,0,i,s,y,i,b=[],d,x),x),i,x,d,s,r?b:x):jn(C,S,S,S,[``],x,0,s,x)}}l=u=p=0,h=_=1,y=C=``,d=o;break;case 58:d=1+en(C),p=m;default:if(h<1){if(v==123)--h;else if(v==125&&h++==0&&gn()==125)continue}switch(C+=qt(v),v*h){case 38:_=u>0?1:(C+=`\f`,-1);break;case 44:s[l++]=(en(C)-1)*_,_=1;break;case 64:vn()===45&&(C+=wn(_n())),f=vn(),u=d=en(y=C+=kn(yn())),v++;break;case 45:m===45&&en(C)==2&&(h=0)}}return a}function Mn(e,t,n,r,i,a,o,s,c,l,u,d){for(var f=i-1,p=i===0?a:[``],m=tn(p),h=0,g=0,_=0;h<r;++h)for(var v=0,y=$t(e,f+1,f=Kt(g=o[h])),b=e;v<m;++v)(b=M(g>0?p[v]+` `+y:N(y,/&\f/g,p[v])))&&(c[_++]=b);return fn(e,t,n,i===0?Bt:s,c,l,u,d)}function Nn(e,t,n,r){return fn(e,t,n,zt,qt(hn()),$t(e,2,-2),0,r)}function Pn(e,t,n,r,i){return fn(e,t,n,Vt,$t(e,0,r),$t(e,r+1,-1),r,i)}function Fn(e,t,n){switch(Yt(e,t)){case 5103:return j+`print-`+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return j+e+e;case 4855:return j+e.replace(`add`,`source-over`).replace(`substract`,`source-out`).replace(`intersect`,`source-in`).replace(`exclude`,`xor`)+e;case 4789:return Rt+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return j+e+Rt+e+A+e+e;case 5936:switch(Qt(e,t+11)){case 114:return j+e+A+N(e,/[svh]\w+-[tblr]{2}/,`tb`)+e;case 108:return j+e+A+N(e,/[svh]\w+-[tblr]{2}/,`tb-rl`)+e;case 45:return j+e+A+N(e,/[svh]\w+-[tblr]{2}/,`lr`)+e}case 6828:case 4268:case 2903:return j+e+A+e+e;case 6165:return j+e+A+`flex-`+e+e;case 5187:return j+e+N(e,/(\w+).+(:[^]+)/,j+`box-$1$2`+A+`flex-$1$2`)+e;case 5443:return j+e+A+`flex-item-`+N(e,/flex-|-self/g,``)+(Xt(e,/flex-|baseline/)?``:A+`grid-row-`+N(e,/flex-|-self/g,``))+e;case 4675:return j+e+A+`flex-line-pack`+N(e,/align-content|flex-|-self/g,``)+e;case 5548:return j+e+A+N(e,`shrink`,`negative`)+e;case 5292:return j+e+A+N(e,`basis`,`preferred-size`)+e;case 6060:return j+`box-`+N(e,`-grow`,``)+j+e+A+N(e,`grow`,`positive`)+e;case 4554:return j+N(e,/([^-])(transform)/g,`$1`+j+`$2`)+e;case 6187:return N(N(N(e,/(zoom-|grab)/,j+`$1`),/(image-set)/,j+`$1`),e,``)+e;case 5495:case 3959:return N(e,/(image-set\([^]*)/,j+"$1$`$1");case 4968:return N(N(e,/(.+:)(flex-)?(.*)/,j+`box-pack:$3`+A+`flex-pack:$3`),/space-between/,`justify`)+j+e+e;case 4200:if(!Xt(e,/flex-|baseline/))return A+`grid-column-align`+$t(e,t)+e;break;case 2592:case 3360:return A+N(e,`template-`,``)+e;case 4384:case 3616:return n&&n.some(function(e,n){return t=n,Xt(e.props,/grid-\w+-end/)})?~Zt(e+(n=n[t].value),`span`,0)?e:A+N(e,`-start`,``)+e+A+`grid-row-span:`+(~Zt(n,`span`,0)?Xt(n,/\d+/):Xt(n,/\d+/)-+Xt(e,/\d+/))+`;`:A+N(e,`-start`,``)+e;case 4896:case 4128:return n&&n.some(function(e){return Xt(e.props,/grid-\w+-start/)})?e:A+N(N(e,`-end`,`-span`),`span `,``)+e;case 4095:case 3583:case 4068:case 2532:return N(e,/(.+)-inline(.+)/,j+`$1$2`)+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(en(e)-1-t>6)switch(Qt(e,t+1)){case 109:if(Qt(e,t+4)!==45)break;case 102:return N(e,/(.+:)(.+)-([^]+)/,`$1`+j+`$2-$3$1`+Rt+(Qt(e,t+3)==108?`$3`:`$2-$3`))+e;case 115:return~Zt(e,`stretch`,0)?Fn(N(e,`stretch`,`fill-available`),t,n)+e:e}break;case 5152:case 5920:return N(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(t,n,r,i,a,o,s){return A+n+`:`+r+s+(i?A+n+`-span:`+(a?o:o-+r)+s:``)+e});case 4949:if(Qt(e,t+6)===121)return N(e,`:`,`:`+j)+e;break;case 6444:switch(Qt(e,Qt(e,14)===45?18:11)){case 120:return N(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,`$1`+j+(Qt(e,14)===45?`inline-`:``)+`box$3$1`+j+`$2$3$1`+A+`$2box$3`)+e;case 100:return N(e,`:`,`:`+A)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return N(e,`scroll-`,`scroll-snap-`)+e}return e}function In(e,t){for(var n=``,r=0;r<e.length;r++)n+=t(e[r],r,e,t)||``;return n}function Ln(e,t,n,r){switch(e.type){case Gt:if(e.children.length)break;case Ht:case Ut:case Vt:return e.return=e.return||e.value;case zt:return``;case Wt:return e.return=e.value+`{`+In(e.children,r)+`}`;case Bt:if(!en(e.value=e.props.join(`,`)))return``}return en(n=In(e.children,r))?e.return=e.value+`{`+n+`}`:``}function Rn(e){var t=tn(e);return function(n,r,i,a){for(var o=``,s=0;s<t;s++)o+=e[s](n,r,i,a)||``;return o}}function zn(e){return function(t){t.root||(t=t.return)&&e(t)}}function Bn(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case Vt:e.return=Fn(e.value,e.length,n);return;case Wt:return In([pn(e,{value:N(e.value,`@`,`@`+j)})],r);case Bt:if(e.length)return rn(n=e.props,function(t){switch(Xt(t,r=/(::plac\w+|:read-\w+)/)){case`:read-only`:case`:read-write`:mn(pn(e,{props:[N(t,/:(read-\w+)/,`:`+Rt+`$1`)]})),mn(pn(e,{props:[t]})),Jt(e,{props:an(n,r)});break;case`::placeholder`:mn(pn(e,{props:[N(t,/:(plac\w+)/,`:`+j+`input-$1`)]})),mn(pn(e,{props:[N(t,/:(plac\w+)/,`:`+Rt+`$1`)]})),mn(pn(e,{props:[N(t,/:(plac\w+)/,A+`input-$1`)]})),mn(pn(e,{props:[t]})),Jt(e,{props:an(n,r)});break}return``})}}var Vn=typeof process<`u`&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||`data-styled`,Hn=`active`,Un=`data-styled-version`,Wn=`6.4.1`,Gn=`/*!sc*/
`,Kn=typeof window<`u`&&typeof document<`u`;function qn(e){if(typeof process<`u`){let t={}[e];if(t!==void 0&&t!==``)return t!==`false`}}var Jn=!!(typeof SC_DISABLE_SPEEDY==`boolean`?SC_DISABLE_SPEEDY:qn(`REACT_APP_SC_DISABLE_SPEEDY`)??qn(`SC_DISABLE_SPEEDY`)??(typeof process>`u`||!1)),Yn=`sc-keyframes-`,Xn={};function Zn(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(`, `)}`:``}`)}var Qn=new Map,$n=new Map,er=1,tr=e=>{if(Qn.has(e))return Qn.get(e);for(;$n.has(er);)er++;let t=er++;return Qn.set(e,t),$n.set(t,e),t},nr=e=>$n.get(e),rr=(e,t)=>{er=t+1,Qn.set(e,t),$n.set(t,e)},ir=Object.freeze([]),ar=Object.freeze({});function or(e,t,n=ar){return e.theme!==n.theme&&e.theme||t||n.theme}var sr=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,cr=/(^-|-$)/g;function lr(e){return e.replace(sr,`-`).replace(cr,``)}var ur=/(a)(d)/gi,dr=e=>String.fromCharCode(e+(e>25?39:97));function fr(e){let t,n=``;for(t=Math.abs(e);t>52;t=t/52|0)n=dr(t%52)+n;return(dr(t%52)+n).replace(ur,`$1-$2`)}var pr=5381,mr=(e,t)=>{let n=t.length;for(;n;)e=33*e^t.charCodeAt(--n);return e},hr=e=>mr(pr,e);function gr(e){return fr(hr(e)>>>0)}function _r(e){return e.displayName||e.name||`Component`}function vr(e){return typeof e==`string`&&!0}function yr(e){return vr(e)?`styled.${e}`:`Styled(${_r(e)})`}var br=Symbol.for(`react.memo`),xr=Symbol.for(`react.forward_ref`),Sr={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},Cr={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},wr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Tr={[xr]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[br]:wr};function Er(e){return(`type`in(t=e)&&t.type.$$typeof)===br?wr:`$$typeof`in e?Tr[e.$$typeof]:Sr;var t}var Dr=Object.defineProperty,Or=Object.getOwnPropertyNames,kr=Object.getOwnPropertySymbols,Ar=Object.getOwnPropertyDescriptor,jr=Object.getPrototypeOf,Mr=Object.prototype;function Nr(e,t,n){if(typeof t!=`string`){let r=jr(t);r&&r!==Mr&&Nr(e,r,n);let i=Or(t).concat(kr(t)),a=Er(e),o=Er(t);for(let r=0;r<i.length;++r){let s=i[r];if(!(s in Cr||n&&n[s]||o&&s in o||a&&s in a)){let n=Ar(t,s);try{Dr(e,s,n)}catch{}}}}return e}function Pr(e){return typeof e==`function`}function Fr(e){return typeof e==`object`&&`styledComponentId`in e}function Ir(e,t){return e&&t?e+` `+t:e||t||``}function Lr(e,t){return e.join(t||``)}function Rr(e){return typeof e==`object`&&!!e&&e.constructor.name===Object.name&&!(`props`in e&&e.$$typeof)}function zr(e,t,n=!1){if(!n&&!Rr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(let n=0;n<t.length;n++)e[n]=zr(e[n],t[n]);else if(Rr(t))for(let n in t)e[n]=zr(e[n],t[n]);return e}function Br(e,t){Object.defineProperty(e,`toString`,{value:t})}var Vr=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let n=this._cGroup;n<e;n++)t+=this.groupSizes[n];else for(let n=this._cGroup-1;n>=e;n--)t-=this.groupSizes[n];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,n=t.length,r=n;for(;e>=r;)if(r<<=1,r<0)throw Zn(16,`${e}`);this.groupSizes=new Uint32Array(r),this.groupSizes.set(t),this.length=r;for(let e=n;e<r;e++)this.groupSizes[e]=0}let n=this.indexOfGroup(e+1),r=0;for(let i=0,a=t.length;i<a;i++)this.tag.insertRule(n,t[i])&&(this.groupSizes[e]++,n++,r++);r>0&&this._cGroup>e&&(this._cIndex+=r)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(let e=n;e<r;e++)this.tag.deleteRule(n);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t=``;if(e>=this.length||this.groupSizes[e]===0)return t;let n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n;for(let e=r;e<i;e++)t+=this.tag.getRule(e)+Gn;return t}},Hr=`style[${Vn}][${Un}="${Wn}"]`,Ur=RegExp(`^${Vn}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),Wr=e=>typeof ShadowRoot<`u`&&e instanceof ShadowRoot||`host`in e&&e.nodeType===11,Gr=e=>{if(!e)return document;if(Wr(e))return e;if(`getRootNode`in e){let t=e.getRootNode();if(Wr(t))return t}return document},Kr=(e,t,n)=>{let r=n.split(`,`),i;for(let n=0,a=r.length;n<a;n++)(i=r[n])&&e.registerName(t,i)},qr=(e,t)=>{let n=(t.textContent??``).split(Gn),r=[];for(let t=0,i=n.length;t<i;t++){let i=n[t].trim();if(!i)continue;let a=i.match(Ur);if(a){let t=0|parseInt(a[1],10),n=a[2];t!==0&&(rr(n,t),Kr(e,n,a[3]),e.getTag().insertRules(t,r)),r.length=0}else r.push(i)}},Jr=e=>{let t=Gr(e.options.target).querySelectorAll(Hr);for(let n=0,r=t.length;n<r;n++){let r=t[n];r&&r.getAttribute(Vn)!==Hn&&(qr(e,r),r.parentNode&&r.parentNode.removeChild(r))}},Yr=!1;function Xr(){if(!1!==Yr)return Yr;if(typeof document<`u`){let e=document.head.querySelector(`meta[property="csp-nonce"]`);if(e)return Yr=e.nonce||e.getAttribute(`content`)||void 0;let t=document.head.querySelector(`meta[name="sc-nonce"]`);if(t)return Yr=t.getAttribute(`content`)||void 0}return Yr=typeof __webpack_nonce__<`u`?__webpack_nonce__:void 0}var Zr=(e,t)=>{let n=document.head,r=e||n,i=document.createElement(`style`),a=(e=>{let t=Array.from(e.querySelectorAll(`style[${Vn}]`));return t[t.length-1]})(r),o=a===void 0?null:a.nextSibling;i.setAttribute(Vn,Hn),i.setAttribute(Un,Wn);let s=t||Xr();return s&&i.setAttribute(`nonce`,s),r.insertBefore(i,o),i},Qr=class{constructor(e,t){this.element=Zr(e,t),this.element.appendChild(document.createTextNode(``)),this.sheet=(e=>{if(e.sheet)return e.sheet;let t=e.getRootNode().styleSheets??document.styleSheets;for(let n=0,r=t.length;n<r;n++){let r=t[n];if(r.ownerNode===e)return r}throw Zn(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch{return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:``}},$r=class{constructor(e,t){this.element=Zr(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:``}},ei=Kn,ti={isServer:!Kn,useCSSOMInjection:!Jn},ni=class e{static registerId(e){return tr(e)}constructor(e=ar,t={},n){this.options=Object.assign(Object.assign({},ti),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(n),this.server=!!e.isServer,!this.server&&Kn&&ei&&(ei=!1,Jr(this)),Br(this,()=>(e=>{let t=e.getTag(),{length:n}=t,r=``;for(let i=0;i<n;i++){let n=nr(i);if(n===void 0)continue;let a=e.names.get(n);if(a===void 0||!a.size)continue;let o=t.getGroup(i);if(o.length===0)continue;let s=Vn+`.g`+i+`[id="`+n+`"]`,c=``;for(let e of a)e.length>0&&(c+=e+`,`);r+=o+s+`{content:"`+c+`"}/*!sc*/
`}return r})(this))}rehydrate(){!this.server&&Kn&&Jr(this)}reconstructWithOptions(t,n=!0){let r=new e(Object.assign(Object.assign({},this.options),t),this.gs,n&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&Kn&&t.target!==this.options.target&&Gr(this.options.target)!==Gr(t.target)&&Jr(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||=(e=(({useCSSOMInjection:e,target:t,nonce:n})=>e?new Qr(t,n):new $r(t,n))(this.options),new Vr(e));var e}hasNameForId(e,t){var n;return(n=this.names.get(e)?.has(t))!=null&&n}registerName(e,t){tr(e),e.startsWith(Yn)&&this.keyframeIds.add(e);let n=this.names.get(e);n?n.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,n){this.registerName(e,t),this.getTag().insertRules(tr(e),n)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(tr(e)),this.clearNames(e)}clearTag(){this.tag=void 0}},ri=new WeakSet,ii={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function ai(e,t){return t==null||typeof t==`boolean`||t===``?``:typeof t!=`number`||t===0||e in ii||e.startsWith(`--`)?String(t).trim():t+`px`}var oi=47;function si(e){if(e.charCodeAt(0)===45&&e.charCodeAt(1)===45)return e;let t=``;for(let n=0;n<e.length;n++){let r=e.charCodeAt(n);t+=r>=65&&r<=90?`-`+String.fromCharCode(r+32):e[n]}return t.startsWith(`ms-`)?`-`+t:t}var ci=Symbol.for(`sc-keyframes`);function li(e){return typeof e==`object`&&!!e&&ci in e}function ui(e){return Pr(e)&&!(e.prototype&&e.prototype.isReactComponent)}var di=e=>e==null||!1===e||e===``,fi=Symbol.for(`react.client.reference`);function pi(e){return e.$$typeof===fi}function mi(e,t){for(let n in e){let r=e[n];e.hasOwnProperty(n)&&!di(r)&&(Array.isArray(r)&&ri.has(r)||Pr(r)?t.push(si(n)+`:`,r,`;`):Rr(r)?(t.push(n+` {`),mi(r,t),t.push(`}`)):t.push(si(n)+`: `+ai(n,r)+`;`))}}function P(e,t,n,r,i=[]){if(di(e))return i;let a=typeof e;if(a===`string`)return i.push(e),i;if(a===`function`)return pi(e)?i:ui(e)&&t?P(e(t),t,n,r,i):(i.push(e),i);if(Array.isArray(e)){for(let a=0;a<e.length;a++)P(e[a],t,n,r,i);return i}return Fr(e)?(i.push(`.${e.styledComponentId}`),i):li(e)?(n?(e.inject(n,r),i.push(e.getName(r))):i.push(e),i):pi(e)?i:Rr(e)?(mi(e,i),i):(i.push(e.toString()),i)}var hi=hr(Wn),gi=class{constructor(e,t,n){this.rules=e,this.componentId=t,this.baseHash=mr(hi,t),this.baseStyle=n,ni.registerId(t)}generateAndInjectStyles(e,t,n){let r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):``;{let i=``;for(let r=0;r<this.rules.length;r++){let a=this.rules[r];if(typeof a==`string`)i+=a;else if(a)if(ui(a)){let r=a(e);typeof r==`string`?i+=r:r!=null&&!1!==r&&(i+=Lr(P(r,e,t,n)))}else i+=Lr(P(a,e,t,n))}if(i){this.dynamicNameCache||=new Map;let e=n.hash?n.hash+i:i,a=this.dynamicNameCache.get(e);if(!a){if(a=fr(mr(mr(this.baseHash,n.hash),i)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;e!==void 0&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,a)}if(!t.hasNameForId(this.componentId,a)){let e=n(i,`.`+a,void 0,this.componentId);t.insertRules(this.componentId,a,e)}r=Ir(r,a)}}return r}},_i=/&/g;function vi(e,t){let n=0;for(;--t>=0&&e.charCodeAt(t)===92;)n++;return!(1&~n)}function yi(e){let t=e.length,n=``,r=0,i=0,a=0,o=!1,s=!1;for(let c=0;c<t;c++){let l=e.charCodeAt(c);if(a!==0||o||l!==oi||e.charCodeAt(c+1)!==42)if(o)l===42&&e.charCodeAt(c+1)===oi&&(o=!1,c++);else if(l!==34&&l!==39||vi(e,c)){if(a===0)if(l===123)i++;else if(l===125){if(i--,i<0){s=!0;let n=c+1;for(;n<t;){let t=e.charCodeAt(n);if(t===59||t===10)break;n++}n<t&&e.charCodeAt(n)===59&&n++,i=0,c=n-1,r=n;continue}i===0&&(n+=e.substring(r,c+1),r=c+1)}else l===59&&i===0&&(n+=e.substring(r,c+1),r=c+1)}else a===0?a=l:a===l&&(a=0);else o=!0,c++}return s||i!==0||a!==0?(r<t&&i===0&&a===0&&(n+=e.substring(r)),n):e}function bi(e,t){let n=t+` `,r=`,`+n;for(let i=0;i<e.length;i++){let a=e[i];if(a.type===`rule`){a.value=(n+a.value).replaceAll(`,`,r);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&a.type!==`@keyframes`&&bi(a.children,t)}return e}function xi({options:e=ar,plugins:t=ir}=ar){let n,r,i,a=(e,t,i)=>i.startsWith(r)&&i.endsWith(r)&&i.replaceAll(r,``).length>0?`.${n}`:e,o=t.slice();o.push(e=>{e.type===`rule`&&e.value.includes(`&`)&&(i||=RegExp(`\\${r}\\b`,`g`),e.props[0]=e.props[0].replace(_i,r).replace(i,a))}),e.prefix&&o.push(Bn),o.push(Ln);let s=[],c=Rn(o.concat(zn(e=>s.push(e)))),l=(t,a=``,o=``,l=`&`)=>{n=l,r=a,i=void 0;let u=function(e){let t=e.indexOf(`//`)!==-1,n=e.indexOf(`}`)!==-1;if(!t&&!n)return e;if(!t)return yi(e);let r=e.length,i=``,a=0,o=0,s=0,c=0,l=0,u=!1;for(;o<r;){let t=e.charCodeAt(o);if(t!==34&&t!==39||vi(e,o))if(s===0)if(t===oi&&o+1<r&&e.charCodeAt(o+1)===42){for(o+=2;o+1<r&&(e.charCodeAt(o)!==42||e.charCodeAt(o+1)!==oi);)o++;o+=2}else if(t!==40)if(t!==41)if(c>0)o++;else if(t===42&&o+1<r&&e.charCodeAt(o+1)===oi)i+=e.substring(a,o),o+=2,a=o,u=!0;else if(t===oi&&o+1<r&&e.charCodeAt(o+1)===oi){for(i+=e.substring(a,o);o<r&&e.charCodeAt(o)!==10;)o++;a=o,u=!0}else t===123?l++:t===125&&l--,o++;else c>0&&c--,o++;else c++,o++;else o++;else s===0?s=t:s===t&&(s=0),o++}return u?(a<r&&(i+=e.substring(a)),l===0?i:yi(i)):l===0?e:yi(e)}(t),d=An(o||a?o+` `+a+` { `+u+` }`:u);return e.namespace&&(d=bi(d,e.namespace)),s=[],In(d,c),s},u=e,d=pr;for(let e=0;e<t.length;e++)t[e].name||Zn(15),d=mr(d,t[e].name);return u!=null&&u.namespace&&(d=mr(d,u.namespace)),u!=null&&u.prefix&&(d=mr(d,`p`)),l.hash=d===pr?``:d.toString(),l}var Si=new ni,Ci=xi(),wi=_.createContext({shouldForwardProp:void 0,styleSheet:Si,stylis:Ci,stylisPlugins:void 0});wi.Consumer;function Ti(){return _.useContext(wi)}var Ei=_.createContext(void 0);Ei.Consumer;function Di(e){let t=_.useContext(Ei),n=_.useMemo(()=>function(e,t){if(!e)throw Zn(14);if(Pr(e))return e(t);if(Array.isArray(e)||typeof e!=`object`)throw Zn(8);return t?Object.assign(Object.assign({},t),e):e}(e.theme,t),[e.theme,t]);return e.children?_.createElement(Ei.Provider,{value:n},e.children):null}var Oi=Object.prototype.hasOwnProperty,ki={};function Ai(e,t){let n=typeof e==`string`?lr(e):`sc`;ki[n]=(ki[n]||0)+1;let r=n+`-`+gr(Wn+n+ki[n]);return t?t+`-`+r:r}function ji(e,t,n){let r=Fr(e),i=e,a=!vr(e),{attrs:o=ir,componentId:s=Ai(t.displayName,t.parentComponentId),displayName:c=yr(e)}=t,l=t.displayName&&t.componentId?lr(t.displayName)+`-`+t.componentId:t.componentId||s,u=r&&i.attrs?i.attrs.concat(o).filter(Boolean):o,{shouldForwardProp:d}=t;if(r&&i.shouldForwardProp){let e=i.shouldForwardProp;if(t.shouldForwardProp){let n=t.shouldForwardProp;d=(t,r)=>e(t,r)&&n(t,r)}else d=e}let f=new gi(n,l,r?i.componentStyle:void 0);function p(e,t){return function(e,t,n){let{attrs:r,componentStyle:i,defaultProps:a,foldedComponentIds:o,styledComponentId:s,target:c}=e,l=_.useContext(Ei),u=Ti(),d=e.shouldForwardProp||u.shouldForwardProp,f=or(t,l,a)||ar,p,m;{let e=_.useRef(null),n=e.current;if(n!==null&&n[1]===f&&n[2]===u.styleSheet&&n[3]===u.stylis&&n[7]===i&&function(e,t,n){let r=e,i=t,a=0;for(let e in i)if(Oi.call(i,e)&&(a++,r[e]!==i[e]))return!1;return a===n}(n[0],t,n[4]))p=n[5],m=n[6];else{p=function(e,t,n){let r=Object.assign(Object.assign({},t),{className:void 0,theme:n}),i=e.length>1;for(let n=0;n<e.length;n++){let a=e[n],o=Pr(a)?a(i?Object.assign({},r):r):a;for(let e in o)e===`className`?r.className=Ir(r.className,o[e]):e===`style`?r.style=Object.assign(Object.assign({},r.style),o[e]):e in t&&t[e]===void 0||(r[e]=o[e])}return`className`in t&&typeof t.className==`string`&&(r.className=Ir(r.className,t.className)),r}(r,t,f),m=function(e,t,n,r){return e.generateAndInjectStyles(t,n,r)}(i,p,u.styleSheet,u.stylis);let n=0;for(let e in t)Oi.call(t,e)&&n++;e.current=[t,f,u.styleSheet,u.stylis,n,p,m,i]}}let h=p.as||c,g=function(e,t,n,r){let i={};for(let a in e)e[a]===void 0||a[0]===`$`||a===`as`||a===`theme`&&e.theme===n||(a===`forwardedAs`?i.as=e.forwardedAs:r&&!r(a,t)||(i[a]=e[a]));return i}(p,h,f,d),v=Ir(o,s);return m&&(v+=` `+m),p.className&&(v+=` `+p.className),g[vr(h)&&h.includes(`-`)?`class`:`className`]=v,n&&(g.ref=n),(0,_.createElement)(h,g)}(m,e,t)}p.displayName=c;let m=_.forwardRef(p);return m.attrs=u,m.componentStyle=f,m.displayName=c,m.shouldForwardProp=d,m.foldedComponentIds=r?Ir(i.foldedComponentIds,i.styledComponentId):``,m.styledComponentId=l,m.target=r?i.target:e,Object.defineProperty(m,`defaultProps`,{get(){return this._foldedDefaultProps},set(e){this._foldedDefaultProps=r?function(e,...t){for(let n of t)zr(e,n,!0);return e}({},i.defaultProps,e):e}}),Br(m,()=>`.${m.styledComponentId}`),a&&Nr(m,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),m}var Mi=new Set(`a.abbr.address.area.article.aside.audio.b.bdi.bdo.blockquote.body.button.br.canvas.caption.cite.code.col.colgroup.data.datalist.dd.del.details.dfn.dialog.div.dl.dt.em.embed.fieldset.figcaption.figure.footer.form.h1.h2.h3.h4.h5.h6.header.hgroup.hr.html.i.iframe.img.input.ins.kbd.label.legend.li.main.map.mark.menu.meter.nav.object.ol.optgroup.option.output.p.picture.pre.progress.q.rp.rt.ruby.s.samp.search.section.select.slot.small.span.strong.sub.summary.sup.table.tbody.td.template.textarea.tfoot.th.thead.time.tr.u.ul.var.video.wbr.circle.clipPath.defs.ellipse.feBlend.feColorMatrix.feComponentTransfer.feComposite.feConvolveMatrix.feDiffuseLighting.feDisplacementMap.feDistantLight.feDropShadow.feFlood.feFuncA.feFuncB.feFuncG.feFuncR.feGaussianBlur.feImage.feMerge.feMergeNode.feMorphology.feOffset.fePointLight.feSpecularLighting.feSpotLight.feTile.feTurbulence.filter.foreignObject.g.image.line.linearGradient.marker.mask.path.pattern.polygon.polyline.radialGradient.rect.stop.svg.switch.symbol.text.textPath.tspan.use`.split(`.`));function Ni(e,t){let n=[e[0]];for(let r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var Pi=e=>(ri.add(e),e);function Fi(e,...t){if(Pr(e)||Rr(e))return Pi(P(Ni(ir,[e,...t])));let n=e;return t.length===0&&n.length===1&&typeof n[0]==`string`?P(n):Pi(P(Ni(n,t)))}function Ii(e,t,n=ar){if(!t)throw Zn(1,t);let r=(r,...i)=>e(t,n,Fi(r,...i));return r.attrs=r=>Ii(e,t,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)})),r.withConfig=r=>Ii(e,t,Object.assign(Object.assign({},n),r)),r}var Li=e=>Ii(ji,e),F=Li;Mi.forEach(e=>{F[e]=Li(e)});var Ri=class{constructor(e,t){this.instanceRules=new Map,this.rules=e,this.componentId=t,this.isStatic=function(e){for(let t=0;t<e.length;t+=1){let n=e[t];if(Pr(n)&&!Fr(n))return!1}return!0}(e),ni.registerId(this.componentId)}removeStyles(e,t){this.instanceRules.delete(e),this.rebuildGroup(t)}renderStyles(e,t,n,r){let i=this.componentId;if(this.isStatic){if(n.hasNameForId(i,i+e))this.instanceRules.has(e)||this.computeRules(e,t,n,r);else{let a=this.computeRules(e,t,n,r);n.insertRules(i,a.name,a.rules)}return}let a=this.instanceRules.get(e);if(this.computeRules(e,t,n,r),!n.server&&a){let t=a.rules,n=this.instanceRules.get(e).rules;if(t.length===n.length){let e=!0;for(let r=0;r<t.length;r++)if(t[r]!==n[r]){e=!1;break}if(e)return}}this.rebuildGroup(n)}computeRules(e,t,n,r){let i=Lr(P(this.rules,t,n,r)),a={name:this.componentId+e,rules:r(i,``)};return this.instanceRules.set(e,a),a}rebuildGroup(e){let t=this.componentId;e.clearRules(t);for(let n of this.instanceRules.values())e.insertRules(t,n.name,n.rules)}};function zi(e,...t){let n=Fi(e,...t),r=`sc-global-${gr(JSON.stringify(n))}`,i=new Ri(n,r),a=e=>{let t=Ti(),n=_.useContext(Ei),a;{let e=_.useRef(null);e.current===null&&(e.current=t.styleSheet.allocateGSInstance(r)),a=e.current}t.styleSheet.server&&o(a,e,t.styleSheet,n,t.stylis);{let s=i.isStatic?[a,t.styleSheet,i]:[a,e,t.styleSheet,n,t.stylis,i],c=_.useRef(i);_.useLayoutEffect(()=>{t.styleSheet.server||(c.current!==i&&(t.styleSheet.clearRules(r),c.current=i),o(a,e,t.styleSheet,n,t.stylis))},s),_.useLayoutEffect(()=>()=>{t.styleSheet.server||i.removeStyles(a,t.styleSheet)},[a,t.styleSheet,i])}return t.styleSheet.server&&i.instanceRules.delete(a),null};function o(e,t,n,r,o){if(i.isStatic)i.renderStyles(e,Xn,n,o);else{let s=Object.assign(Object.assign({},t),{theme:or(t,r,a.defaultProps)});i.renderStyles(e,s,n,o)}}return _.memo(a)}var Bi,Vi=class{constructor(e,t){this[Bi]=!0,this.inject=(e,t=Ci)=>{let n=this.getName(t);if(!e.hasNameForId(this.id,n)){let r=t(this.rules,n,`@keyframes`);e.insertRules(this.id,n,r)}},this.name=e,this.id=Yn+e,this.rules=t,tr(this.id),Br(this,()=>{throw Zn(12,String(this.name))})}getName(e=Ci){return e.hash?this.name+fr(e.hash>>>0):this.name}};function Hi(e,...t){let n=Lr(Fi(e,...t));return new Vi(gr(n),n)}Bi=ci,`${Vn}`,`${Vn}`,`${Vn}`;var Ui=zi`
  :root {
    --primary: ${e=>e.theme.primary};
    --secondary: ${e=>e.theme.secondary};
    --background: ${e=>e.theme.background};
    --text: ${e=>e.theme.text};
    --hover: ${e=>e.theme.hover};
    --nav-background: ${e=>e.theme.navBackground};
    --border-color: ${e=>e.theme.borderColor};
    --card-background: ${e=>e.theme.cardBackground};
    --box-shadow: ${e=>e.theme.boxShadow};
    --hover-shadow: ${e=>e.theme.hoverShadow};
    --text-shadow: ${e=>e.theme.textShadow};
    --input-background: ${e=>e.theme.inputBackground};
    --input-border: ${e=>e.theme.inputBorder};
    --button-hover: ${e=>e.theme.buttonHoverBackground};
    --link-color: ${e=>e.theme.linkColor};
    --link-hover: ${e=>e.theme.linkHover};
    --divider: ${e=>e.theme.dividerColor};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: var(--background);
    color: var(--text);
    font-family: 'Courier New', Courier, monospace;
    line-height: 1.6;
    transition: all 0.3s ease;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--primary);
    margin: 1.5rem 0 1rem;
    line-height: 1.2;
    text-shadow: var(--text-shadow);
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.8;
  }

  a {
    color: var(--link-color);
    text-decoration: none;
    transition: all 0.3s ease;
    position: relative;
    
    &:hover {
      color: var(--link-hover);
    }

    &:after {
      content: '';
      position: absolute;
      width: 0;
      height: 1px;
      bottom: -2px;
      left: 0;
      background-color: var(--link-hover);
      transition: width 0.3s ease;
    }
    
    &:hover:after {
      width: 100%;
    }
  }

  button {
    cursor: pointer;
    font-family: 'Courier New', Courier, monospace;
    transition: all 0.3s ease;
    border: 1px solid var(--border-color);
    background: var(--input-background);
    color: var(--text);
    padding: 0.5rem 1rem;
    border-radius: 4px;

    &:hover {
      background: var(--button-hover);
      border-color: var(--primary);
      transform: translateY(-1px);
      box-shadow: var(--hover-shadow);
    }
  }

  input, textarea {
    font-family: 'Courier New', Courier, monospace;
    padding: 0.5rem;
    border: 1px solid var(--input-border);
    border-radius: 4px;
    background: var(--input-background);
    color: var(--text);
    transition: all 0.3s ease;

    &:focus {
      outline: none;
      border-color: var(--primary);
      box-shadow: 0 0 0 2px var(--button-hover);
    }
  }

  /* Card styles */
  .card {
    background: var(--card-background);
    border-radius: 8px;
    padding: 1.5rem;
    margin: 1rem 0;
    border: 1px solid var(--border-color);
    box-shadow: var(--box-shadow);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: var(--hover-shadow);
      transform: translateY(-2px);
    }
  }

  /* Animation keyframes */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--background);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--primary);
    border-radius: 4px;
    
    &:hover {
      background: var(--hover);
    }
  }

  /* Selection styling */
  ::selection {
    background: var(--primary);
    color: var(--background);
  }
`,Wi=o((e=>{var t=d(),n=Symbol.for(`react.element`),r=Symbol.for(`react.fragment`),i=Object.prototype.hasOwnProperty,a=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function s(e,t,r){var s,c={},l=null,u=null;for(s in r!==void 0&&(l=``+r),t.key!==void 0&&(l=``+t.key),t.ref!==void 0&&(u=t.ref),t)i.call(t,s)&&!o.hasOwnProperty(s)&&(c[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)c[s]===void 0&&(c[s]=t[s]);return{$$typeof:n,type:e,key:l,ref:u,props:c,_owner:a.current}}e.Fragment=r,e.jsx=s,e.jsxs=s})),I=o(((e,t)=>{t.exports=Wi()}))(),Gi={light:{primary:`#1a8917`,secondary:`#4a6f47`,background:`#f8f9fa`,text:`#2c3e50`,hover:`#27ae60`,navBackground:`rgba(255, 255, 255, 0.95)`,borderColor:`#1a8917`,cardBackground:`#ffffff`,cardBoxBackground:`#ffffff`,cardBoxBorder:`rgba(26, 137, 23, 0.2)`,cardBoxShadow:`rgba(26, 137, 23, 0.08)`,researchCardBackground:`#ffffff`,researchCardBorder:`#e0f2e9`,researchCardShadow:`0 4px 6px rgba(26, 137, 23, 0.08)`,researchCardHoverShadow:`0 8px 12px rgba(26, 137, 23, 0.12)`,researchCardTitle:`#0e5c0b`,researchCardText:`#2c3e50`,researchCardSecondary:`#4a6f47`,researchCardHighlight:`#1a8917`,researchCardExpandedBg:`#ffffff`,researchCardDivider:`#e0f2e9`,researchCardTag:{background:`#f0f9f0`,text:`#1a8917`,border:`#cce8cc`},timelineBackground:`rgba(248, 249, 250, 0.8)`,timelineEventBackground:`#ffffff`,timelineEventBorder:`rgba(26, 137, 23, 0.15)`,timelineEventShadow:`rgba(26, 137, 23, 0.06)`,timelineTextColor:`#2c3e50`,footerBackground:`#ffffff`,footerBorder:`#1a8917`,footerText:`#2c3e50`,footerQuoteBackground:`#f8f9fa`,footerQuoteBorder:`rgba(26, 137, 23, 0.2)`,footerCopyrightText:`#6c757d`,inputBackground:`#ffffff`,inputBorder:`rgba(26, 137, 23, 0.3)`,buttonHoverBackground:`rgba(26, 137, 23, 0.1)`,linkColor:`#1a8917`,linkHover:`#27ae60`,dividerColor:`rgba(26, 137, 23, 0.1)`,boxShadow:`0 2px 12px rgba(26, 137, 23, 0.08)`,hoverShadow:`0 4px 20px rgba(26, 137, 23, 0.12)`,textShadow:`none`},dark:{primary:`#00ff00`,secondary:`#a0a0a0`,background:`#000000`,text:`#ffffff`,hover:`#32CD32`,navBackground:`rgba(0, 0, 0, 0.9)`,borderColor:`#00ff00`,cardBackground:`rgba(0, 0, 0, 0.95)`,timelineBackground:`rgba(0, 0, 0, 0.2)`,timelineEventBackground:`rgba(0, 0, 0, 0.3)`,timelineEventBorder:`rgba(0, 255, 0, 0.1)`,timelineEventShadow:`rgba(0, 255, 0, 0.2)`,timelineTextColor:`#ffffff`,footerBackground:`rgba(0, 0, 0, 0.9)`,footerBorder:`#00ff00`,footerText:`#ffffff`,footerQuoteBackground:`rgba(0, 255, 0, 0.05)`,footerQuoteBorder:`rgba(0, 255, 0, 0.2)`,footerCopyrightText:`#666666`,cardBoxBackground:`rgba(0, 0, 0, 0.3)`,cardBoxBorder:`rgba(0, 255, 0, 0.1)`,cardBoxShadow:`rgba(0, 255, 0, 0.2)`,inputBackground:`rgba(0, 0, 0, 0.3)`,inputBorder:`rgba(0, 255, 0, 0.2)`,buttonHoverBackground:`rgba(0, 255, 0, 0.1)`,linkColor:`#00ff00`,linkHover:`#32CD32`,dividerColor:`rgba(0, 255, 0, 0.1)`,boxShadow:`0 2px 12px rgba(0, 255, 0, 0.1)`,hoverShadow:`0 4px 20px rgba(0, 255, 0, 0.15)`,textShadow:`0 0 10px rgba(0, 255, 0, 0.3)`,researchCardBackground:`rgba(0, 0, 0, 0.3)`,researchCardBorder:`rgba(0, 255, 0, 0.1)`,researchCardShadow:`0 4px 6px rgba(0, 255, 0, 0.1)`,researchCardHoverShadow:`0 8px 12px rgba(0, 255, 0, 0.2)`,researchCardTitle:`#00ff00`,researchCardText:`#ffffff`,researchCardSecondary:`#a0a0a0`,researchCardHighlight:`#00ff00`,researchCardExpandedBg:`rgba(0, 0, 0, 0.4)`,researchCardDivider:`rgba(0, 255, 0, 0.1)`,researchCardTag:{background:`rgba(0, 255, 0, 0.1)`,text:`#00ff00`,border:`rgba(0, 255, 0, 0.2)`}}},Ki=(0,_.createContext)(),qi=`themePreference`,Ji=[`system`,`light`,`dark`],Yi=()=>typeof window>`u`||!window.matchMedia?Gi.light:window.matchMedia(`(prefers-color-scheme: dark)`).matches?Gi.dark:Gi.light,Xi=()=>{if(typeof window>`u`)return`system`;try{let e=window.localStorage.getItem(qi);return Ji.includes(e)?e:`system`}catch{return`system`}},Zi=e=>e===`system`?Yi():e===`dark`?Gi.dark:Gi.light,L=({children:e})=>{let[t,n]=(0,_.useState)(Xi),[r,i]=(0,_.useState)(()=>Zi(Xi()));return(0,_.useEffect)(()=>{let e=window.matchMedia(`(prefers-color-scheme: dark)`),n=()=>i(Zi(t));n();try{window.localStorage.setItem(qi,t)}catch{}let r=()=>{t===`system`&&n()};return e.addEventListener(`change`,r),()=>e.removeEventListener(`change`,r)},[t]),(0,I.jsx)(Ki.Provider,{value:{theme:r,themePreference:t,setThemePreference:n},children:(0,I.jsx)(Di,{theme:r,children:e})})},R=()=>{let e=(0,_.useContext)(Ki);if(e===void 0)throw Error(`useTheme must be used within a ThemeProvider`);return e},Qi=F.button`
  background: none;
  border: 1px solid var(--primary);
  color: var(--text);
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: var(--primary);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    z-index: 0;
  }

  &:hover {
    color: var(--background);
    transform: rotate(360deg);
    
    &:before {
      width: 150%;
      height: 150%;
    }
  }

  span {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    font-size: 1.4rem;
    background: var(--primary);
    color: var(--background);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

    &:hover {
      transform: scale(1.1) rotate(360deg);
    }
  }
`,$i=()=>{let{themePreference:e,setThemePreference:t}=R();return(0,I.jsx)(Qi,{onClick:()=>{let n=[`system`,`light`,`dark`];t(n[(n.indexOf(e)+1)%n.length])},"aria-label":`Toggle theme`,title:`Current theme: ${e}`,children:(0,I.jsx)(`span`,{children:(()=>{switch(e){case`light`:return`☀️`;case`dark`:return`🌙`;default:return`🖥️`}})()})})},ea=F.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: var(--nav-background);
  border-bottom: 1px solid var(--border-color);
  font-size: 1.2rem;
  position: relative;
  transition: background-color 0.3s ease, border-color 0.3s ease;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,ta=F.div`
  display: flex;
  align-items: center;
  z-index: 1001;
`,na=F(Pt)`
  font-size: 1.8rem;
  font-weight: bold;
  position: relative;
  color: ${e=>e.theme.background===`#000000`?`#ffffff`:e.theme.researchCardTitle};
  
  &:after {
    content: '';
    position: absolute;
    width: 0;
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: var(--primary);
    &:after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`,ra=F.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${e=>e.$isOpen?`0`:`-100%`};
    height: 100vh;
    width: 75%;
    background: ${e=>e.theme.researchCardBackground};
    flex-direction: column;
    justify-content: flex-start;
    padding: 5rem 2rem;
    gap: 1.5rem;
    transition: right 0.3s ease;
    box-shadow: ${e=>e.$isOpen?`-5px 0 15px rgba(0, 0, 0, 0.1)`:`none`};
    z-index: 1000;
    backdrop-filter: blur(10px);
    overflow-y: auto;
  }
`,ia=F(Pt)`
  position: relative;
  padding: 0.5rem;
  font-size: 1.3rem;
  color: ${e=>e.theme.background===`#000000`?`#ffffff`:e.theme.researchCardTitle};
  transition: all 0.3s ease;
  
  &:before {
    content: '>';
    position: absolute;
    left: -15px;
    opacity: 0;
    transition: opacity 0.3s ease;
    color: var(--primary);
  }
  
  &:hover {
    color: var(--primary);
    &:before {
      opacity: 1;
    }
  }
  
  &.active {
    color: var(--primary);
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    padding: 1rem;
    width: 100%;
    text-align: center;
    
    &:before {
      display: none;
    }
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 50%;
      width: 0;
      height: 2px;
      background-color: var(--primary);
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }
    
    &:hover:after,
    &.active:after {
      width: 50%;
    }
  }
`,aa=F.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    margin: 0.5rem 0;
    width: 100%;
    justify-content: center;
  }
`,oa=F.button`
  display: none;
  background: none;
  border: none;
  color: ${e=>e.theme.background===`#000000`?`#ffffff`:e.theme.researchCardTitle};
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;
  width: 40px;
  height: 40px;
  position: relative;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 6px;
    
    span {
      display: block;
      width: 24px;
      height: 2px;
      background-color: var(--primary);
      transition: all 0.3s ease;
      
      &:first-child {
        transform: ${e=>e.$isOpen?`rotate(45deg) translate(6px, 6px)`:`rotate(0)`};
      }
      
      &:nth-child(2) {
        opacity: ${e=>e.$isOpen?`0`:`1`};
      }
      
      &:last-child {
        transform: ${e=>e.$isOpen?`rotate(-45deg) translate(6px, -6px)`:`rotate(0)`};
      }
    }
  }
`,sa=F.div`
  display: none;
  
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(3px);
    opacity: ${e=>e.$isOpen?`1`:`0`};
    visibility: ${e=>e.$isOpen?`visible`:`hidden`};
    transition: all 0.3s ease;
    z-index: 999;
  }
`,ca=()=>{let e=Ge(),[t,n]=(0,_.useState)(!1),r=()=>{n(!1)};return(0,_.useEffect)(()=>(t?document.body.style.overflow=`hidden`:document.body.style.overflow=`unset`,()=>{document.body.style.overflow=`unset`}),[t]),(0,I.jsxs)(ea,{children:[(0,I.jsx)(ta,{children:(0,I.jsx)(na,{to:`/`,onClick:r,children:`Zijun Zhang`})}),(0,I.jsxs)(oa,{onClick:()=>n(!t),$isOpen:t,children:[(0,I.jsx)(`span`,{}),(0,I.jsx)(`span`,{}),(0,I.jsx)(`span`,{})]}),(0,I.jsx)(sa,{$isOpen:t,onClick:r}),(0,I.jsxs)(ra,{$isOpen:t,children:[(0,I.jsx)(ia,{to:`/`,className:e.pathname===`/`?`active`:``,onClick:r,children:`Home`}),(0,I.jsx)(ia,{to:`/research`,className:e.pathname===`/research`?`active`:``,onClick:r,children:`Research`}),(0,I.jsx)(ia,{to:`/projects`,className:e.pathname===`/projects`?`active`:``,onClick:r,children:`Projects`}),(0,I.jsx)(ia,{to:`/cv`,className:e.pathname===`/cv`?`active`:``,onClick:r,children:`CV`}),(0,I.jsx)(ia,{to:`/blog`,className:e.pathname===`/blog`?`active`:``,onClick:r,children:`Blog`}),(0,I.jsx)(aa,{children:(0,I.jsx)($i,{})})]})]})},la=F.footer`
  padding: 2rem 1rem;
  background: ${e=>e.theme.researchCardBackground};
  border-top: 1px solid ${e=>e.theme.researchCardBorder};
  width: 100%;
  font-size: 0.9rem;
  box-shadow: 0 -4px 6px ${e=>e.theme.researchCardShadow};
`,ua=F.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`,da=F.div`
  h3 {
    color: ${e=>e.theme.researchCardTitle};
    font-size: 1.1rem;
    margin-bottom: 1rem;
    font-family: 'Courier New', monospace;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &:before {
      content: '>';
      color: ${e=>e.theme.researchCardHighlight};
    }
    
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`,fa=F(da)`
  .quote {
    font-style: italic;
    margin-bottom: 0.5rem;
    line-height: 1.6;
    padding: 1rem;
    border: 1px solid ${e=>e.theme.researchCardBorder};
    border-radius: 4px;
    background: ${e=>e.theme.researchCardTag.background};
    position: relative;
    color: ${e=>e.theme.researchCardText};
    
    &:before {
      content: '"';
      color: ${e=>e.theme.researchCardHighlight};
      font-size: 1.5rem;
      position: absolute;
      left: 0.2rem;
      top: 0.5rem;
    }
    
    &:after {
      content: '"';
      color: ${e=>e.theme.researchCardHighlight};
      font-size: 1.5rem;
      position: absolute;
      right: 0.5rem;
      bottom: 0.5rem;
    }
  }
  
  .author {
    color: ${e=>e.theme.researchCardHighlight};
    margin-top: 1rem;
    text-align: right;
    
    &:before {
      content: "- ";
    }
    
    @media (max-width: 768px) {
      text-align: center;
    }
  }
`,pa=F(da)`
  .connect-text {
    margin-bottom: 1rem;
    line-height: 1.6;
    font-family: 'Courier New', monospace;
    color: ${e=>e.theme.researchCardText};
  }
`,ma=F.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  a {
    color: ${e=>e.theme.researchCardText};
    transition: all 0.3s ease;
    padding: 0.5rem;
    border: 1px solid transparent;
    border-radius: 4px;
    
    &:hover {
      color: ${e=>e.theme.researchCardHighlight};
      transform: translateY(-2px);
      border-color: ${e=>e.theme.researchCardHighlight};
      background: ${e=>e.theme.researchCardTag.background};
    }
  }
`,ha=F.div`
  text-align: center;
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid ${e=>e.theme.researchCardBorder};
  color: ${e=>e.theme.researchCardSecondary};
  font-size: 0.8rem;
  
  .heart {
    color: ${e=>e.theme.researchCardHighlight};
    display: inline-block;
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
  }
`,ga=F.div`
  color: ${e=>e.theme.researchCardHighlight};
  font-family: 'Courier New', monospace;
  margin-bottom: 0.5rem;
  opacity: 0.7;
  
  @media (max-width: 768px) {
    text-align: center;
  }
`,_a=()=>(0,I.jsxs)(la,{children:[(0,I.jsxs)(ua,{children:[(0,I.jsxs)(fa,{children:[(0,I.jsx)(`h3`,{children:`Quote of the Day`}),(0,I.jsx)(ga,{children:`$ echo "wisdom.quote"`}),(0,I.jsx)(`div`,{className:`quote`,children:`Success is not final, failure is not fatal: it is the courage to continue that counts.`}),(0,I.jsx)(`div`,{className:`author`,children:`Winston Churchill`})]}),(0,I.jsxs)(pa,{children:[(0,I.jsx)(`h3`,{children:`Connect`}),(0,I.jsx)(ga,{children:`$ ssh user@zijun2002.com`}),(0,I.jsx)(`div`,{className:`connect-text`,children:`Feel free to reach out and connect with me on any platform. I'm always open to interesting conversations and collaborations!`}),(0,I.jsxs)(ma,{children:[(0,I.jsx)(`a`,{href:`mailto:zijuzhang1@student.unimelb.edu.au`,title:`Email`,children:`📧`}),(0,I.jsx)(`a`,{href:`https://twitter.com/Romanticism_02`,target:`_blank`,rel:`noopener noreferrer`,title:`Twitter`,children:`🐦`}),(0,I.jsx)(`a`,{href:`https://github.com/dredre815`,target:`_blank`,rel:`noopener noreferrer`,title:`GitHub`,children:`👨‍💻`}),(0,I.jsx)(`a`,{href:`https://www.linkedin.com/in/zijunzhang2002/`,target:`_blank`,rel:`noopener noreferrer`,title:`LinkedIn`,children:`👤`})]})]})]}),(0,I.jsxs)(ha,{children:[(0,I.jsx)(ga,{children:`$ whoami`}),`© `,new Date().getFullYear(),` Zijun Zhang. All rights reserved. | Built with React `,(0,I.jsx)(`span`,{className:`heart`,children:`💚`})]})]}),va=F.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`,ya=F.main`
  flex: 1;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
`,ba=()=>(0,I.jsxs)(va,{children:[(0,I.jsx)(ca,{}),(0,I.jsx)(ya,{children:(0,I.jsx)(vt,{})}),(0,I.jsx)(_a,{})]}),xa=F.div`
  padding: 2rem;
  text-align: center;
  color: var(--primary);
`,Sa=class extends _.Component{constructor(e){super(e),this.state={hasError:!1}}static getDerivedStateFromError(e){return{hasError:!0}}render(){return this.state.hasError?(0,I.jsxs)(xa,{children:[(0,I.jsx)(`h1`,{children:`Something went wrong.`}),(0,I.jsx)(`button`,{onClick:()=>window.location.reload(),children:`Reload Page`})]}):this.props.children}},Ca={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},wa=_.createContext&&_.createContext(Ca),Ta=[`attr`,`size`,`title`];function Ea(e,t){if(e==null)return{};var n=Da(e,t),r,i;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Da(e,t){if(e==null)return{};var n={};for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}function Oa(){return Oa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Oa.apply(this,arguments)}function ka(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]==null?{}:arguments[t];t%2?ka(Object(n),!0).forEach(function(t){Aa(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ka(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function Aa(e,t,n){return t=ja(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ja(e){var t=Ma(e,`string`);return typeof t==`symbol`?t:t+``}function Ma(e,t){if(typeof e!=`object`||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||`default`);if(typeof r!=`object`)return r;throw TypeError(`@@toPrimitive must return a primitive value.`)}return(t===`string`?String:Number)(e)}function Na(e){return e&&e.map((e,t)=>_.createElement(e.tag,z({key:t},e.attr),Na(e.child)))}function Pa(e){return t=>_.createElement(Fa,Oa({attr:z({},e.attr)},t),Na(e.child))}function Fa(e){var t=t=>{var{attr:n,size:r,title:i}=e,a=Ea(e,Ta),o=r||t.size||`1em`,s;return t.className&&(s=t.className),e.className&&(s=(s?s+` `:``)+e.className),_.createElement(`svg`,Oa({stroke:`currentColor`,fill:`currentColor`,strokeWidth:`0`},t.attr,n,a,{className:s,style:z(z({color:e.color||t.color},t.style),e.style),height:o,width:o,xmlns:`http://www.w3.org/2000/svg`}),i&&_.createElement(`title`,null,i),e.children)};return wa===void 0?t(Ca):_.createElement(wa.Consumer,null,e=>t(e))}function Ia(e){return Pa({tag:`svg`,attr:{viewBox:`0 0 448 512`},child:[{tag:`path`,attr:{d:`M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z`},child:[]}]})(e)}var La=F.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  background: ${e=>e.theme.researchCardBackground};
  border: 1px solid ${e=>e.theme.researchCardHighlight};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${e=>e.theme.researchCardHighlight};
  opacity: ${e=>e.$show?`0.7`:`0`};
  visibility: ${e=>e.$show?`visible`:`hidden`};
  transition: all 0.3s ease;
  z-index: 1000;
  box-shadow: ${e=>e.theme.researchCardShadow};

  &:hover {
    opacity: 1;
    background: ${e=>e.theme.researchCardHighlight};
    color: ${e=>e.theme.researchCardBackground};
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.researchCardHoverShadow};
  }

  @media (max-width: 768px) {
    bottom: 15px;
    right: 15px;
    width: 35px;
    height: 35px;
  }
`,Ra=()=>{let[e,t]=(0,_.useState)(!1),[n,r]=(0,_.useState)(!1),[i,a]=(0,_.useState)(null),o=(0,_.useCallback)(()=>{r(!1)},[]),s=(0,_.useCallback)(()=>{window.pageYOffset>300?(t(!0),r(!0),i&&clearTimeout(i),a(setTimeout(o,3e3))):(t(!1),r(!1))},[i,o]);return(0,_.useEffect)(()=>(window.addEventListener(`scroll`,s),()=>{window.removeEventListener(`scroll`,s),i&&clearTimeout(i)}),[s,i]),(0,I.jsx)(I.Fragment,{children:e&&(0,I.jsx)(La,{onClick:()=>{window.scrollTo({top:0,behavior:`smooth`})},$show:n,onMouseEnter:()=>{i&&clearTimeout(i),r(!0)},onMouseLeave:()=>{a(setTimeout(o,3e3))},children:(0,I.jsx)(Ia,{size:20})})})},za=[{id:`planning`,name:`Planning`,short:`Plan`,icon:`📋`,x:25,y:12,description:`Decomposes complex tasks into manageable sub-tasks and determines execution strategy.`,techniques:`Task Decomposition, Sub-goal Generation, Plan-and-Solve`,research:`Robust planning resilient to prompt injection`},{id:`memory`,name:`Memory`,short:`Mem`,icon:`💾`,x:75,y:12,description:`Stores and retrieves context (short-term) and knowledge (long-term) for informed decisions.`,techniques:`RAG, Vector DB, Context Windows, Episodic Memory`,research:`Privacy-preserving memory preventing data leakage`},{id:`llm`,name:`LLM Core`,short:`LLM`,icon:`🧠`,x:50,y:40,description:`The central reasoning engine — processes inputs, generates thoughts, and orchestrates all modules.`,techniques:`Chain-of-Thought, In-Context Learning, Instruction Tuning`,research:`Trustworthy reasoning under adversarial conditions`},{id:`tools`,name:`Tools`,short:`Tools`,icon:`🔧`,x:25,y:68,description:`Interfaces with external systems — search engines, code interpreters, APIs, and databases.`,techniques:`Function Calling, API Integration, Code Execution`,research:`Secure tool use with sandboxing and access control`},{id:`reflection`,name:`Reflection`,short:`Reflect`,icon:`🔍`,x:75,y:68,description:`Self-evaluates outputs for accuracy, safety, and alignment before delivering results.`,techniques:`Self-Critique, Verification, Constitutional AI, RLHF`,research:`Automated red-teaming and safety verification`},{id:`environment`,name:`Environment`,short:`Env`,icon:`🌐`,x:50,y:92,description:`The interface between agent and world — receives user inputs and delivers final outputs.`,techniques:`User Interface, API Gateway, Output Formatting`,research:`Robustness against adversarial user inputs`}],Ba=[{from:`planning`,to:`memory`},{from:`planning`,to:`llm`},{from:`memory`,to:`llm`},{from:`llm`,to:`tools`},{from:`llm`,to:`reflection`},{from:`tools`,to:`reflection`},{from:`llm`,to:`environment`}],Va=[{id:`trust`,name:`📄 Analyze Paper Trust`,description:`Evaluate a research paper's methodology and trustworthiness`,steps:[{type:`thought`,text:`I need to analyze this paper's claims, methodology, and reproducibility. Let me plan a systematic evaluation.`,modules:[`llm`,`planning`]},{type:`action`,text:`search("trustworthy ML evaluation frameworks, reproducibility checklist 2024")`,modules:[`llm`,`tools`]},{type:`observation`,text:`Found: TrustML-Bench framework, ML Reproducibility Checklist v2.0, and CRAFT evaluation criteria.`,modules:[`tools`,`memory`]},{type:`thought`,text:`Cross-referencing experimental setup against frameworks. No adversarial testing was performed.`,modules:[`llm`,`memory`,`reflection`]},{type:`action`,text:`analyze_methodology(check=["stat_significance", "ablation", "adversarial_tests", "privacy"])`,modules:[`llm`,`tools`]},{type:`observation`,text:`Statistical tests: ✓ | Ablations: ✓ | Adversarial tests: ✗ missing | Privacy: ✗ absent`,modules:[`tools`,`llm`]},{type:`result`,text:`Trust Score: 6.5/10 — Solid methodology but missing adversarial robustness and privacy analysis. Recommend adding DP bounds and adversarial test suites.`,modules:[`llm`,`environment`,`reflection`]}]},{id:`privacy`,name:`🔒 Debug Privacy Leak`,description:`Identify and fix a model that's leaking private training data`,steps:[{type:`thought`,text:`A model is suspected of leaking private data. I need to quantify exposure via membership inference and gradient leakage attacks.`,modules:[`llm`,`planning`]},{type:`action`,text:`run_membership_inference(model, shadow_dataset, target_records=1000)`,modules:[`llm`,`tools`]},{type:`observation`,text:`Membership inference accuracy: 87.3% (baseline: 50%). The model is severely memorizing training data.`,modules:[`tools`,`memory`]},{type:`thought`,text:`Confirmed memorization. The loss landscape has sharp minima around training points. Differential privacy should smooth this.`,modules:[`llm`,`reflection`]},{type:`action`,text:`apply_fix(method="DP-SGD", epsilon=1.0, delta=1e-5, clip_norm=1.0) && rerun_attack()`,modules:[`llm`,`tools`]},{type:`observation`,text:`DP-SGD applied. New membership inference: 52.1% (near random). Utility drop: only -2.1%.`,modules:[`tools`,`llm`]},{type:`result`,text:`Privacy leak fixed. DP-SGD (ε=1.0) reduced membership inference from 87.3% → 52.1%. Acceptable utility trade-off: 2.1%.`,modules:[`llm`,`environment`,`reflection`]}]},{id:`robustness`,name:`🛡 Plan Robustness Test`,description:`Design an experiment to evaluate AI model robustness across modalities`,steps:[{type:`thought`,text:`I need a comprehensive robustness evaluation. Let me recall existing benchmarks and identify testing gaps.`,modules:[`llm`,`planning`,`memory`]},{type:`action`,text:`retrieve_knowledge("robustness benchmarks: AutoAttack, RobustBench, adversarial NLP")`,modules:[`memory`,`tools`]},{type:`observation`,text:`Retrieved 3 benchmark suites. Gap: no unified framework tests both vision and language modalities.`,modules:[`memory`,`llm`]},{type:`thought`,text:`I'll design a cross-modal robustness test — L∞ perturbations for vision, character-level attacks for text.`,modules:[`llm`,`planning`]},{type:`action`,text:`generate_config(modalities=["vision","text"], attacks=["PGD","TextFooler"], metrics=["clean_acc","robust_acc"])`,modules:[`llm`,`tools`]},{type:`observation`,text:`Config: 12 attack scenarios × 3 architectures × 5 seeds = 180 runs. Est: 340 GPU-hours.`,modules:[`tools`,`llm`]},{type:`thought`,text:`Let me verify the design covers edge cases and has proper statistical controls.`,modules:[`llm`,`reflection`]},{type:`result`,text:`Plan ready: cross-modal robustness benchmark — 3 architectures, 12 attacks, certified defenses, significance tests (p<0.05).`,modules:[`llm`,`environment`]}]},{id:`explain`,name:`💡 Explain AI Agents`,description:`Break down how AI agents work for a newcomer`,steps:[{type:`thought`,text:`I need to explain AI agents simply: what they are, how they think, and what sets them apart from chatbots.`,modules:[`llm`,`planning`]},{type:`action`,text:`retrieve_knowledge("AI agent architecture, ReAct pattern, tool-augmented LLMs")`,modules:[`llm`,`memory`]},{type:`observation`,text:`Loaded: ReAct loop (Thought→Action→Observation), tool use, memory systems, planning, reflection.`,modules:[`memory`,`llm`]},{type:`thought`,text:`An AI agent is like giving an LLM hands and eyes — it can think, act, observe, and reflect. Let me build this analogy.`,modules:[`llm`,`reflection`]},{type:`action`,text:`format_explanation(style="analogy", audience="beginner", include_diagram=true)`,modules:[`llm`,`tools`]},{type:`observation`,text:`Formatted: brain analogy, step-by-step ReAct example, chatbot vs agent comparison.`,modules:[`tools`,`llm`]},{type:`result`,text:`AI Agent = LLM brain + tools for hands + memory for experience + reflection for self-improvement. Unlike chatbots, agents plan multi-step tasks, use tools, and self-correct via the ReAct loop — exactly what you're watching now!`,modules:[`llm`,`environment`]}]}],Ha={slow:{charDelay:35,stepPause:1500},normal:{charDelay:18,stepPause:800},fast:{charDelay:6,stepPause:300}},Ua={thought:`💭 Thought`,action:`⚡ Action`,observation:`👁 Observe`,result:`✅ Result`},Wa=Hi`
  0%, 100% { box-shadow: 0 0 8px var(--glow-color); }
  50% { box-shadow: 0 0 20px var(--glow-color), 0 0 35px var(--glow-color); }
`,Ga=Hi`
  to { stroke-dashoffset: -12; }
`,Ka=Hi`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`,qa=Hi`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`,Ja=F.div`
  margin: 2rem 0;
  padding: 2rem;
  background: ${e=>e.theme.timelineBackground};
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid ${e=>e.theme.timelineEventBorder};

  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Ya=F.div`
  position: relative;
  width: 100%;
  height: 380px;

  @media (max-width: 768px) {
    height: 300px;
  }
`,Xa=F.div`
  position: absolute;
  left: ${e=>e.$x}%;
  top: ${e=>e.$y}%;
  transform: translate(-50%, -50%);
  padding: 0.5rem 0.9rem;
  background: ${e=>e.theme.cardBoxBackground};
  border: 1.5px solid
    ${e=>e.$active?e.theme.primary:e.theme.cardBoxBorder};
  border-radius: 10px;
  cursor: pointer;
  transition:
    border-color 0.3s,
    background 0.3s,
    color 0.3s,
    box-shadow 0.3s;
  font-family: "Courier New", monospace;
  color: ${e=>e.$active||e.$selected?e.theme.primary:e.theme.text};
  text-align: center;
  z-index: 2;
  user-select: none;
  white-space: nowrap;
  --glow-color: ${e=>e.theme.primary}60;

  ${e=>e.$active&&Fi`
      animation: ${Wa} 1.5s ease-in-out infinite;
      background: ${e.theme.buttonHoverBackground};
      font-weight: bold;
    `}

  ${e=>e.$selected&&!e.$active&&Fi`
      border-color: ${e.theme.primary};
      background: ${e.theme.buttonHoverBackground};
    `}

  ${e=>e.$isCore&&Fi`
      padding: 0.6rem 1.1rem;
      border-width: 2px;
      .icon {
        font-size: 1.3rem;
      }
      .name-full {
        font-size: 0.85rem;
        font-weight: 600;
      }
      .name-short {
        font-size: 0.7rem;
        font-weight: 600;
      }
      @media (max-width: 768px) {
        padding: 0.4rem 0.7rem;
        .icon {
          font-size: 1.1rem;
        }
      }
    `}

  &:hover {
    transform: translate(-50%, -50%) scale(1.06);
    border-color: ${e=>e.theme.primary};
    box-shadow: 0 0 15px ${e=>e.theme.primary}30;
  }

  .icon {
    font-size: 1.1rem;
    display: block;
    margin-bottom: 2px;
  }

  .name-full {
    font-size: 0.75rem;
    letter-spacing: 0.3px;
    @media (max-width: 768px) {
      display: none;
    }
  }

  .name-short {
    display: none;
    font-size: 0.6rem;
    letter-spacing: 0.3px;
    @media (max-width: 768px) {
      display: block;
    }
  }

  @media (max-width: 768px) {
    padding: 0.35rem 0.55rem;
    .icon {
      font-size: 0.9rem;
    }
  }
`,Za=F.svg`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
`,Qa=F.line`
  vector-effect: non-scaling-stroke;
  stroke: ${e=>e.$active?e.theme.primary:e.theme.cardBoxBorder};
  stroke-width: ${e=>e.$active?2.5:1.2};
  opacity: ${e=>e.$active?.85:.35};
  transition:
    stroke 0.3s,
    opacity 0.3s,
    stroke-width 0.3s;

  ${e=>e.$active&&Fi`
      stroke-dasharray: 8 4;
      animation: ${Ga} 0.6s linear infinite;
    `}
`,$a=F.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    gap: 0.4rem;
  }
`,eo=F.button`
  padding: 0.4rem 0.85rem;
  background: ${e=>e.$active?e.theme.primary:e.theme.timelineEventBackground};
  color: ${e=>e.$active?e.theme.background:e.theme.text};
  border: 1px solid ${e=>e.theme.primary};
  border-radius: 8px;
  font-size: 0.78rem;
  font-family: "Courier New", monospace;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: ${e=>e.$active?`0 0 10px ${e.theme.primary}40`:`none`};

  &:hover:not(:disabled) {
    transform: translateY(-2px);
    box-shadow: 0 0 12px ${e=>e.theme.primary}40;
    background: ${e=>e.$active?e.theme.hover:e.theme.buttonHoverBackground};
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }
  &:disabled {
    opacity: 0.35;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 0.35rem 0.6rem;
    font-size: 0.68rem;
  }
`,to=F.select`
  padding: 0.4rem 0.85rem;
  background: ${e=>e.theme.timelineEventBackground};
  color: ${e=>e.theme.text};
  border: 1px solid ${e=>e.theme.primary};
  border-radius: 8px;
  font-size: 0.78rem;
  font-family: "Courier New", monospace;
  cursor: pointer;
  outline: none;
  max-width: 200px;

  option {
    background: ${e=>e.theme.background};
    color: ${e=>e.theme.text};
  }

  @media (max-width: 768px) {
    font-size: 0.68rem;
    padding: 0.35rem 0.6rem;
    max-width: 150px;
  }
`,no=F.div`
  width: 1px;
  height: 22px;
  background: ${e=>e.theme.cardBoxBorder};
  @media (max-width: 768px) {
    display: none;
  }
`,ro=F.div`
  margin-top: 1rem;
  background: ${e=>e.theme.timelineEventBackground};
  border: 1px solid ${e=>e.theme.timelineEventBorder};
  border-radius: 12px;
  padding: 1rem 1.2rem;
  font-family: "Courier New", monospace;
  font-size: 0.8rem;
  line-height: 1.65;
  height: 240px;
  overflow-y: auto;
  box-shadow: inset 0 0 20px ${e=>e.theme.timelineEventShadow};
  color: ${e=>e.theme.text};
  white-space: pre-wrap;
  word-break: break-word;

  @media (max-width: 768px) {
    height: 200px;
    font-size: 0.7rem;
    padding: 0.8rem;
  }
`,io=F.div`
  margin-bottom: 0.5rem;
  animation: ${qa} 0.25s ease;

  .label {
    font-weight: bold;
    color: ${e=>{let t=e.theme.background===`#000000`;return{thought:t?`#61dafb`:`#0277bd`,action:t?`#e5c07b`:`#bf360c`,observation:e.theme.primary,result:t?`#c678dd`:`#7b1fa2`}[e.$type]||e.theme.text}};
  }

  .text {
    opacity: 0.92;
  }
`,ao=F.span`
  animation: ${Ka} 1s step-end infinite;
  color: ${e=>e.theme.primary};
`,oo=F.span`
  opacity: 0.5;
`,so=F.span`
  color: ${e=>e.theme.primary};
`,co=()=>{let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)(-1),[i,a]=(0,_.useState)(-1),[o,s]=(0,_.useState)(!1),[c,l]=(0,_.useState)(`normal`),[u,d]=(0,_.useState)(``),[f,p]=(0,_.useState)([]),[m,h]=(0,_.useState)([]),[g,v]=(0,_.useState)(!1),y=(0,_.useRef)(null),b=(0,_.useRef)(null),x=(0,_.useRef)(null),S=(0,_.useRef)(!1),C=(0,_.useRef)(`normal`);(0,_.useEffect)(()=>{S.current=o},[o]),(0,_.useEffect)(()=>{C.current=c},[c]);let w=n>=0?Va[n]:null,T=(0,_.useCallback)(()=>{clearTimeout(b.current),clearTimeout(x.current)},[]);(0,_.useEffect)(()=>{let e=y.current;e&&(e.scrollTop=e.scrollHeight)},[u,f,e]),(0,_.useEffect)(()=>{if(i<0||!w)return;let e=w.steps[i];if(!e)return;h(e.modules),t(null),v(!0),d(``);let n=0,r=e.text,o=()=>{if(n++,n<=r.length)d(r.slice(0,n)),b.current=setTimeout(o,Ha[C.current].charDelay);else if(v(!1),p(t=>[...t,{type:e.type,text:e.text}]),d(``),S.current){let e=i+1;e<w.steps.length?x.current=setTimeout(()=>a(e),Ha[C.current].stepPause):(s(!1),x.current=setTimeout(()=>h([]),1500))}else x.current=setTimeout(()=>h([]),2e3)};return b.current=setTimeout(o,Ha[C.current].charDelay),()=>{clearTimeout(b.current),clearTimeout(x.current)}},[i,n]);let E=(0,_.useCallback)(e=>{T(),s(!1),p([]),d(``),a(-1),h([]),t(null),v(!1),r(parseInt(e.target.value,10))},[T]),ee=(0,_.useCallback)(()=>{if(w){if(o){s(!1);return}if(s(!0),t(null),i<0)a(0);else if(!g){let e=i+1;e<w.steps.length?a(e):(p([]),d(``),h([]),a(0))}}},[w,i,o,g]),D=(0,_.useCallback)(()=>{if(w)if(s(!1),t(null),g){T();let e=w.steps[i];v(!1),p(t=>[...t,{type:e.type,text:e.text}]),d(``);let t=i+1;t<w.steps.length?x.current=setTimeout(()=>a(t),80):x.current=setTimeout(()=>h([]),1e3)}else{let e=i<0?0:i+1;e<w.steps.length&&a(e)}},[w,i,g,T]),te=(0,_.useCallback)(()=>{T(),s(!1),p([]),d(``),a(-1),h([]),v(!1)},[T]),ne=(0,_.useCallback)(n=>{w&&i>=0||(e===n?(t(null),h([])):(t(n),h([n])))},[w,i,e]),re=e?za.find(t=>t.id===e):null,ie=w&&!g&&i>=0&&f.length>=w.steps.length,ae=w&&i>=0?w.steps[i]:null,O=!w&&!e,oe=e&&re&&(!w||i<0),se=w&&i<0&&!e,ce=w&&i>=0;return(0,I.jsxs)(Ja,{children:[(0,I.jsxs)(Ya,{children:[(0,I.jsx)(Za,{viewBox:`0 0 100 100`,preserveAspectRatio:`none`,children:Ba.map((t,n)=>{let r=za.find(e=>e.id===t.from),i=za.find(e=>e.id===t.to),a=m.includes(t.from)&&m.includes(t.to),o=e&&!ce&&(t.from===e||t.to===e);return(0,I.jsx)(Qa,{x1:r.x,y1:r.y,x2:i.x,y2:i.y,$active:a||o},n)})}),za.map(t=>(0,I.jsxs)(Xa,{$x:t.x,$y:t.y,$active:m.includes(t.id),$selected:e===t.id,$isCore:t.id===`llm`,onClick:()=>ne(t.id),children:[(0,I.jsx)(`span`,{className:`icon`,children:t.icon}),(0,I.jsx)(`span`,{className:`name-full`,children:t.name}),(0,I.jsx)(`span`,{className:`name-short`,children:t.short})]},t.id))]}),(0,I.jsxs)($a,{children:[(0,I.jsxs)(to,{value:n,onChange:E,children:[(0,I.jsx)(`option`,{value:-1,children:`-- Select Scenario --`}),Va.map((e,t)=>(0,I.jsx)(`option`,{value:t,children:e.name},e.id))]}),(0,I.jsx)(no,{}),(0,I.jsx)(eo,{onClick:ee,disabled:!w,$active:o,children:o?`⏸ Pause`:`▶ Play`}),(0,I.jsx)(eo,{onClick:D,disabled:!w||ie,children:`→ Step`}),(0,I.jsx)(eo,{onClick:te,disabled:!w||i<0,children:`↺ Reset`}),(0,I.jsx)(no,{}),(0,I.jsx)(eo,{$active:c===`slow`,onClick:()=>l(`slow`),children:`Slow`}),(0,I.jsx)(eo,{$active:c===`normal`,onClick:()=>l(`normal`),children:`Normal`}),(0,I.jsx)(eo,{$active:c===`fast`,onClick:()=>l(`fast`),children:`Fast`})]}),(0,I.jsxs)(ro,{ref:y,children:[O&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(oo,{children:`> AI Agent Architecture Explorer v1.0
`}),(0,I.jsx)(oo,{children:`> Type: Interactive Demonstration

`}),`Click any module above to learn about it,
or select a scenario to watch an AI agent
reason step-by-step through a real task.

`,(0,I.jsx)(oo,{children:`Modules: `}),(0,I.jsx)(so,{children:za.map(e=>e.name).join(` · `)}),`
`,(0,I.jsx)(ao,{children:`█`})]}),oe&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(oo,{children:`> module.inspect("${re.id}")\n\n`}),(0,I.jsx)(so,{children:`  ${re.icon} ${re.name}\n`}),(0,I.jsx)(oo,{children:`  ${`─`.repeat(32)}\n`}),`  ${re.description}\n\n`,(0,I.jsx)(oo,{children:`  Techniques: `}),(0,I.jsx)(so,{children:re.techniques}),`

`,(0,I.jsx)(oo,{children:`  Research: `}),(0,I.jsx)(so,{children:re.research}),`

`,(0,I.jsx)(ao,{children:`█`})]}),se&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(oo,{children:`> Scenario: `}),(0,I.jsx)(so,{children:w.name}),`
`,`> ${w.description}\n\n`,(0,I.jsx)(oo,{children:`Press ▶ Play or → Step to begin.
`}),(0,I.jsx)(ao,{children:`█`})]}),ce&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(oo,{children:`> ${w.name}\n${`─`.repeat(40)}\n\n`}),f.map((e,t)=>(0,I.jsxs)(io,{$type:e.type,children:[(0,I.jsxs)(`span`,{className:`label`,children:[Ua[e.type],`: `]}),(0,I.jsx)(`span`,{className:`text`,children:e.text}),`
`]},t)),g&&ae&&(0,I.jsxs)(io,{$type:ae.type,children:[(0,I.jsxs)(`span`,{className:`label`,children:[Ua[ae.type],`: `]}),(0,I.jsx)(`span`,{className:`text`,children:u}),(0,I.jsx)(ao,{children:`█`})]}),ie&&(0,I.jsxs)(I.Fragment,{children:[`
`,(0,I.jsx)(oo,{children:`${`─`.repeat(40)}\n`}),(0,I.jsx)(oo,{children:`> Complete. Select another scenario or ↺ Reset.
`}),(0,I.jsx)(ao,{children:`█`})]})]})]})]})},lo=F.div`
  .typing-text {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: var(--primary);
    white-space: nowrap;

    @media (max-width: 768px) {
      font-size: 1.2rem;
      white-space: normal;
      word-wrap: break-word;
      line-height: 1.4;
    }
  }

  .scroll-hint {
    white-space: nowrap;
    overflow: hidden;
    font-size: 1rem;
    margin-bottom: 2rem;
    color: var(--secondary);
    opacity: 0.8;
  }

  .content {
    opacity: 0;
    transform: translateY(20px);
    animation: fadeIn 0.8s ease forwards;
    animation-delay: 2s;
  }

  .intro {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    line-height: 1.8;

    p {
      margin-bottom: 1.5rem;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  .skills-placeholder {
    height: 600px;
    margin: 2rem 0;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--primary);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Courier New", monospace;
    color: var(--primary);
    font-size: 1.2rem;
  }

  .social-links {
    display: flex;
    gap: 1.5rem;
    margin-top: 1.5rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
      gap: 1rem;
    }
  }

  .social-link {
    padding: 0.5rem 1rem;
    border: 1px solid var(--primary);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    position: relative;
    overflow: hidden;
    color: var(--primary);

    @media (max-width: 768px) {
      justify-content: center;
    }

    /* Glitch effect layers */
    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      pointer-events: none;
    }

    &::before {
      color: #ff00ff;
      z-index: 1;
      clip-path: polygon(0 0, 100% 0, 100% 45%, 0 45%);
    }

    &::after {
      color: #00ffff;
      z-index: 2;
      clip-path: polygon(0 55%, 100% 55%, 100% 100%, 0 100%);
    }

    &:hover {
      background: var(--primary);
      color: var(--background);
      transform: translateY(-3px);
      box-shadow: 0 4px 15px ${e=>e.theme.primary}50;
      animation: glitchShake 0.3s ease;

      &::before {
        opacity: 0.8;
        animation: glitchBefore 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both
          infinite;
      }

      &::after {
        opacity: 0.8;
        animation: glitchAfter 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) reverse
          both infinite;
      }
    }

    @keyframes glitchShake {
      0%,
      100% {
        transform: translateY(-3px);
      }
      25% {
        transform: translate(-2px, -3px);
      }
      50% {
        transform: translate(2px, -5px);
      }
      75% {
        transform: translate(-1px, -2px);
      }
    }

    @keyframes glitchBefore {
      0% {
        transform: translate(0);
      }
      20% {
        transform: translate(-2px, 2px);
      }
      40% {
        transform: translate(-2px, -2px);
      }
      60% {
        transform: translate(2px, 2px);
      }
      80% {
        transform: translate(2px, -2px);
      }
      100% {
        transform: translate(0);
      }
    }

    @keyframes glitchAfter {
      0% {
        transform: translate(0);
      }
      20% {
        transform: translate(2px, -2px);
      }
      40% {
        transform: translate(2px, 2px);
      }
      60% {
        transform: translate(-2px, -2px);
      }
      80% {
        transform: translate(-2px, 2px);
      }
      100% {
        transform: translate(0);
      }
    }
  }

  .section-title {
    color: var(--primary);
    font-size: 2.5rem;
    margin: 2rem 0 1rem;
    font-family: "Courier New", monospace;
    position: relative;
    display: inline-block;

    &:after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(to right, var(--primary), transparent);
    }

    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }

  .section-subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: var(--secondary);
    white-space: pre-line;
  }

  .transition-text {
    font-size: 1.3rem;
    margin-top: 2.5rem;
    margin-bottom: 0;
    padding: 1.2rem 1.5rem;
    background: linear-gradient(
      135deg,
      ${e=>e.theme.timelineEventBackground}40,
      ${e=>e.theme.primary}20
    );
    border-left: 4px solid var(--primary);
    border-radius: 8px;
    color: var(--primary);
    font-weight: 500;
    font-style: italic;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    animation: pulse 2s ease-in-out infinite;

    @keyframes pulse {
      0%,
      100% {
        transform: translateX(0);
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      }
      50% {
        transform: translateX(5px);
        box-shadow: 0 6px 20px ${e=>e.theme.primary}30;
      }
    }
  }

  .supervisor-link {
    color: var(--primary);
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: all 0.3s ease;
    font-weight: 600;
    position: relative;
    display: inline-block;

    &::after {
      content: "🔗";
      position: absolute;
      right: -25px;
      opacity: 0;
      transform: translateX(-10px) rotate(-45deg);
      transition: all 0.4s ease;
      font-size: 0.9em;
    }

    &:hover {
      border-bottom-color: var(--primary);
      text-shadow: 0 0 8px ${e=>e.theme.primary}80;
      padding-right: 25px;

      &::after {
        opacity: 1;
        transform: translateX(0) rotate(0deg);
        animation: linkBounce 0.6s ease;
      }
    }

    @keyframes linkBounce {
      0%,
      100% {
        transform: translateY(0) rotate(0deg);
      }
      25% {
        transform: translateY(-3px) rotate(-10deg);
      }
      50% {
        transform: translateY(0) rotate(5deg);
      }
      75% {
        transform: translateY(-2px) rotate(-5deg);
      }
    }
  }

  .animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;

    &.visible {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,uo=()=>{let e=(0,_.useRef)(null),t=(0,_.useRef)(null),[n,r]=(0,_.useState)(!1),i=[{title:`$ whoami`,subtitle:`System.out.println("PhD student by day, bug whisperer by night");`,content:[`🤖 Greetings, humans and bots! I'm a PhD student at the University of Melbourne, diving deep into the fascinating (and occasionally terrifying) world of Trustworthy ML/AI. My research focuses on making AI systems that won't plot world domination... hopefully.`,`🎓 Under the wise guidance of my supervisor A/Prof Xingliang Yuan, I'm exploring how to make machine learning models more secure, private, and trustworthy. Think of it as teaching AI to be a good citizen of the digital world!`,`🧠 When I'm not debugging neural networks or reading papers at 2 AM, you'll find me experimenting with AI agent architectures, exploring trustworthy reasoning systems (like the demo below), and occasionally questioning my life choices when my model refuses to converge.`,`🚀 Fun fact: I believe the key to solving AI safety lies somewhere between rigorous mathematics, creative engineering, and an unhealthy amount of caffeine. Currently on a quest to make AI systems that even my paranoid security researcher friends would trust!`],transition:`Speaking of AI agents... let me show you how they think! 👇`},{title:`$ ./agent_explorer.sh`,subtitle:`Initializing AI Agent Architecture Explorer...
Click modules to learn | Pick a scenario to watch an agent reason step-by-step 🤖🔍`},{title:`$ ping -c 1 marshall`,subtitle:`64 bytes from marshall: icmp_seq=1 ttl=42 time=0.42ms (Response: "Let's create some digital magic together! 🪄")`}];return(0,_.useEffect)(()=>{r(!1);let n=0,i=0,a=e.current,o=t.current,s=setInterval(()=>{a&&(a.textContent=`Hello, I'm Zijun (Marshall) Zhang`.slice(0,n),n++,n>33&&o&&(o.textContent=`Scroll down to explore 👇`.slice(0,i),i++,i>25&&(clearInterval(s),r(!0))))},30);return()=>{clearInterval(s),a&&(a.textContent=``),o&&(o.textContent=``)}},[]),(0,_.useEffect)(()=>{let e=new IntersectionObserver(t=>{t.forEach(t=>{t.isIntersecting&&(t.target.classList.add(`visible`),e.unobserve(t.target))})},{threshold:window.innerWidth<=768?.1:.2,rootMargin:window.innerWidth<=768?`30px`:`0px`});return document.querySelectorAll(`.animate-on-scroll`).forEach(t=>{e.observe(t)}),()=>e.disconnect()},[n]),(0,I.jsxs)(lo,{children:[(0,I.jsx)(`div`,{className:`typing-text`,ref:e}),(0,I.jsx)(`div`,{className:`scroll-hint`,ref:t}),(0,I.jsxs)(`div`,{className:`content`,children:[(0,I.jsxs)(`div`,{className:`animate-on-scroll`,children:[(0,I.jsx)(`h2`,{className:`section-title`,children:i[0].title}),(0,I.jsx)(`div`,{className:`section-subtitle`,children:i[0].subtitle}),(0,I.jsx)(`div`,{className:`intro`,children:i[0].content.map((e,t)=>e.includes(`A/Prof Xingliang Yuan`)?(0,I.jsx)(`p`,{children:e.split(/(\bA\/Prof Xingliang Yuan\b)/).map((e,t)=>e===`A/Prof Xingliang Yuan`?(0,I.jsx)(`a`,{href:`https://xyuancs.github.io/`,target:`_blank`,rel:`noopener noreferrer`,className:`supervisor-link`,children:e},t):(0,I.jsx)(`span`,{children:e},t))},t):(0,I.jsx)(`p`,{children:e},t))}),i[0].transition&&(0,I.jsx)(`div`,{className:`transition-text`,children:i[0].transition})]}),(0,I.jsxs)(`div`,{className:`animate-on-scroll`,children:[(0,I.jsx)(`h2`,{className:`section-title`,children:i[1].title}),(0,I.jsx)(`div`,{className:`section-subtitle`,children:i[1].subtitle}),(0,I.jsx)(co,{})]}),(0,I.jsxs)(`div`,{className:`animate-on-scroll`,children:[(0,I.jsx)(`h2`,{className:`section-title`,children:i[2].title}),(0,I.jsx)(`div`,{className:`section-subtitle`,children:i[2].subtitle}),(0,I.jsxs)(`div`,{className:`social-links`,children:[(0,I.jsxs)(`a`,{href:`mailto:zijuzhang1@student.unimelb.edu.au`,className:`social-link`,"data-text":`📧 sudo mail -s "Hello!"`,children:[(0,I.jsx)(`span`,{children:`📧`}),` sudo mail -s "Hello!"`]}),(0,I.jsxs)(`a`,{href:`https://twitter.com/Romanticism_02`,className:`social-link`,"data-text":`🐦 Tweet.post("Hi!")`,children:[(0,I.jsx)(`span`,{children:`🐦`}),` Tweet.post("Hi!")`]}),(0,I.jsxs)(`a`,{href:`https://github.com/dredre815`,className:`social-link`,"data-text":`👨‍💻 git pull request`,children:[(0,I.jsx)(`span`,{children:`👨‍💻`}),` git pull request`]}),(0,I.jsxs)(`a`,{href:`https://www.linkedin.com/in/zijunzhang2002/`,className:`social-link`,"data-text":`👤 /connect --professional`,children:[(0,I.jsx)(`span`,{children:`👤`}),` /connect --professional`]})]})]})]})]})},fo=F.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,po=F.div`
  margin-bottom: 3rem;
  
  h1 {
    color: var(--primary);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'Courier New', monospace;
    
    &:before {
      content: '$ ls ~/research/';
      display: block;
      font-size: 1rem;
      opacity: 0.7;
      margin-bottom: 0.5rem;
    }
  }
  
  .subtitle {
    color: ${e=>e.theme.researchCardSecondary};
    font-family: 'Courier New', monospace;
    line-height: 1.6;
  }
`,mo=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`,ho=F.div`
  width: 100%;
  border: 1px solid ${e=>e.theme.researchCardBorder};
  background: ${e=>e.theme.researchCardBackground};
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: ${e=>e.theme.researchCardShadow};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${e=>e.theme.researchCardHoverShadow};
    background: ${e=>e.theme.researchCardExpandedBg};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary), transparent);
  }

  &:after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${e=>e.theme.researchCardHighlight}10,
      transparent
    );
    transform: rotate(45deg);
    animation: scan 10s linear infinite;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:after {
    opacity: 1;
  }

  @keyframes scan {
    from {
      transform: translateY(-50%) rotate(45deg);
    }
    to {
      transform: translateY(50%) rotate(45deg);
    }
  }
`,go=F.h2`
  color: ${e=>e.theme.researchCardTitle};
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${e=>e.theme.researchCardHighlight};
    transition: width 0.3s ease;
  }

  ${ho}:hover &:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
    display: block;
    margin-top: 0.5rem;
  }
`,_o=F.div`
  color: ${e=>e.theme.researchCardSecondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  opacity: 0.8;
`,vo=F.div`
  color: ${e=>e.theme.researchCardText};
  line-height: 1.8;
  margin-bottom: 1.5rem;

  p {
    margin-bottom: 1.5rem;
    color: ${e=>e.theme.researchCardSecondary};
    font-size: 1rem;
  }

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    position: relative;
    padding-left: 1.5rem;
    color: ${e=>e.theme.researchCardText};
    
    &:before {
      content: '>';
      position: absolute;
      left: 0;
      color: ${e=>e.theme.researchCardHighlight};
      opacity: 0.7;
    }

    &:hover {
      &:before {
        opacity: 1;
      }
    }
  }
`,yo=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
`,bo=F.span`
  background: ${e=>e.theme.researchCardTag.background};
  color: ${e=>e.theme.researchCardTag.text};
  padding: 0.3rem 0.6rem;
  border: 1px solid ${e=>e.theme.researchCardTag.border};
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.theme.researchCardHighlight};
    color: #ffffff;
    transform: translateY(-2px);
  }
`,xo=F.div`
  margin-top: ${e=>e.$isOpen?`1rem`:`0`};
  max-height: ${e=>e.$isOpen?`2000px`:`0`};
  opacity: ${e=>e.$isOpen?`1`:`0`};
  overflow: hidden;
  transition: all 0.5s ease;
  visibility: ${e=>e.$isOpen?`visible`:`hidden`};
  position: relative;
  padding-bottom: ${e=>e.$isOpen?`3.5rem`:`0`};
  z-index: 1;
  border-top: ${e=>e.$isOpen?`1px solid ${e.theme.researchCardDivider}`:`none`};
  margin-top: ${e=>e.$isOpen?`1rem`:`0`};
  padding-top: ${e=>e.$isOpen?`1rem`:`0`};
`,So=F.ul`
  list-style: none;
  margin: 1rem 0;
  
  li {
    margin-bottom: 0.5rem;
    color: ${e=>e.theme.researchCardText};
    
    &:before {
      content: '>';
      color: ${e=>e.theme.researchCardHighlight};
      margin-right: 0.5rem;
    }
  }
`,Co=F.button`
  background: none;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
  position: ${e=>e.$isOpen?`absolute`:`relative`};
  bottom: ${e=>e.$isOpen?`1.2rem`:`auto`};
  left: ${e=>e.$isOpen?`1.2rem`:`auto`};
  overflow: hidden;
  margin-top: ${e=>e.$isOpen?`0`:`1rem`};
  z-index: 2;
  -webkit-tap-highlight-color: transparent;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: var(--primary);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: width 0.3s ease, height 0.3s ease;
    z-index: -1;
  }

  @media (hover: hover) {
    &:hover {
      color: var(--background);
      &:before {
        width: 300%;
        height: 300%;
      }
    }
  }

  &:active {
    color: var(--background);
    &:before {
      width: 300%;
      height: 300%;
    }
  }

  &:focus {
    outline: none;
  }

  @media (hover: none) {
    &:focus {
      background: none;
      color: var(--primary);
      &:before {
        width: 0;
        height: 0;
      }
    }
  }
`,wo=F.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--primary);
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  font-weight: bold;
  opacity: 1;
  text-shadow: ${e=>e.theme.background===`#000000`?`0 0 8px var(--primary)`:`none`};
`,To=()=>{let[e,t]=(0,_.useState)({blockchain:!1,adversarial:!1}),n=e=>{t(t=>({...t,[e]:!t[e]}))},r=[{id:`unlearning`,title:`Black-Box Inversion of Unlearning in Large Language Models`,date:`December 2024`,sortDate:`2024-12-01`,description:`This research investigates a critical paradox in AI privacy: while 'machine unlearning' aims to make Large Language Models (LLMs) forget sensitive data, the process itself may create new vulnerabilities. We explore whether the act of unlearning leaves behind detectable artifacts, allowing an attacker to discover what information was removed. The project designs and evaluates a 'black-box unlearning inversion attack' to test this hypothesis.`,tags:[`LLMs`,`Machine Unlearning`,`Privacy`,`Security`,`AI Safety`],details:{focus:[`Systematically evaluating whether current unlearning methods (GA, DPO, NPO, RT) inadvertently leak information about the data they aim to forget. `,`Determining if an attacker with only black-box query access can reliably identify the specific subject targeted for unlearning by analyzing changes in model outputs. `,`Comparing the vulnerability levels across different unlearning techniques and LLM architectures (LLaMA3-8B and Phi-3-Mini). `,`Quantifying the success rate of the inversion attack to establish a clear measure of the privacy risk associated with each unlearning method. `],methodologies:[`Developing a novel black-box attack procedure where an original model and an unlearned model are queried to identify significant differences in their responses. `,`Utilizing the Real-World Knowledge Unlearning (RWKU) benchmark to simulate realistic scenarios of forgetting factual information about public figures. `,`Crafting specific 'probe queries' (both question-answer and fill-in-the-blank) to test for knowledge degradation in a controlled manner. `,`Employing a powerful reasoning LLM (Gemini 2.5 Pro) as an automated 'AI judge' to analyze the nuanced differences in model outputs and infer the unlearning target. `]}}].sort((e,t)=>new Date(t.sortDate)-new Date(e.sortDate));return(0,I.jsxs)(fo,{children:[(0,I.jsxs)(po,{children:[(0,I.jsx)(`h1`,{children:`Research`}),(0,I.jsx)(`div`,{className:`subtitle`,children:`🤖 Teaching machines to think, while they teach me to debug! AI & Security & Blockchain adventures 🔍`})]}),(0,I.jsx)(mo,{children:r.map((t,i)=>(0,I.jsxs)(ho,{children:[(0,I.jsxs)(wo,{children:[`Research `,i+1,`/`,r.length]}),(0,I.jsx)(go,{children:t.title}),(0,I.jsxs)(_o,{children:[t.date,` - Present`]}),(0,I.jsx)(vo,{children:t.description}),(0,I.jsx)(yo,{children:t.tags.map(e=>(0,I.jsx)(bo,{children:e},e))}),(0,I.jsx)(Co,{onClick:()=>n(t.id),$isOpen:e[t.id],children:e[t.id]?`< Less Details />`:`< More Details />`}),(0,I.jsxs)(xo,{$isOpen:e[t.id],children:[t.details.focus&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Research Focus:`}),(0,I.jsx)(So,{children:t.details.focus.map((e,t)=>(0,I.jsx)(`li`,{children:e},t))})]}),t.details.methodologies&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Methodologies:`}),(0,I.jsx)(So,{children:t.details.methodologies.map((e,t)=>(0,I.jsx)(`li`,{children:e},t))})]}),t.details.areas&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Research Areas:`}),(0,I.jsx)(So,{children:t.details.areas.map((e,t)=>(0,I.jsx)(`li`,{children:e},t))})]}),t.details.approach&&(0,I.jsxs)(I.Fragment,{children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Technical Approach:`}),(0,I.jsx)(So,{children:t.details.approach.map((e,t)=>(0,I.jsx)(`li`,{children:e},t))})]})]})]},t.id))})]})},Eo=F.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Do=F.div`
  margin-bottom: 3rem;
  
  h1 {
    color: var(--primary);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'Courier New', monospace;
    
    &:before {
      content: '$ ls ~/projects/';
      display: block;
      font-size: 1rem;
      opacity: 0.7;
      margin-bottom: 0.5rem;
    }
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .subtitle {
    color: ${e=>e.theme.researchCardSecondary};
    font-family: 'Courier New', monospace;
    line-height: 1.6;
  }
`,Oo=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`,ko=F.div`
  width: 100%;
  border: 1px solid ${e=>e.theme.researchCardBorder};
  background: ${e=>e.theme.researchCardBackground};
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: ${e=>e.theme.researchCardShadow};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${e=>e.theme.researchCardHoverShadow};
    background: ${e=>e.theme.researchCardExpandedBg};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary), transparent);
  }

  &:after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${e=>e.theme.researchCardHighlight}10,
      transparent
    );
    transform: rotate(45deg);
    animation: scan 10s linear infinite;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:after {
    opacity: 1;
  }

  @keyframes scan {
    from {
      transform: translateY(-50%) rotate(45deg);
    }
    to {
      transform: translateY(50%) rotate(45deg);
    }
  }
`,Ao=F.h3`
  color: ${e=>e.theme.researchCardTitle};
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${e=>e.theme.researchCardHighlight};
    transition: width 0.3s ease;
  }

  ${ko}:hover &:after {
    width: 100%;
  }
`,jo=F.p`
  color: ${e=>e.theme.researchCardText};
  margin-bottom: 1.5rem;
  line-height: 1.6;
`,B=F.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`,V=F.span`
  background: ${e=>e.theme.researchCardTag.background};
  color: ${e=>e.theme.researchCardTag.text};
  padding: 0.3rem 0.6rem;
  border: 1px solid ${e=>e.theme.researchCardTag.border};
  border-radius: 4px;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${e=>e.theme.researchCardHighlight};
    color: #ffffff;
    transform: translateY(-2px);
  }
`,H=F.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--primary);
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  font-weight: bold;
  opacity: 1;
  text-shadow: ${e=>e.theme.background===`#000000`?`0 0 8px var(--primary)`:`none`};
`,Mo=F.div`
  margin-top: ${e=>e.$isOpen?`1rem`:`0`};
  max-height: ${e=>e.$isOpen?`2000px`:`0`};
  opacity: ${e=>e.$isOpen?`1`:`0`};
  overflow: hidden;
  transition: all 0.5s ease;
  visibility: ${e=>e.$isOpen?`visible`:`hidden`};
  position: relative;
  padding-bottom: ${e=>e.$isOpen?`3.5rem`:`0`};
  z-index: 1;
  border-top: ${e=>e.$isOpen?`1px solid ${e.theme.researchCardDivider}`:`none`};
  margin-top: ${e=>e.$isOpen?`1rem`:`0`};
  padding-top: ${e=>e.$isOpen?`1rem`:`0`};
`,No=F.button`
  background: none;
  border: 1px solid ${e=>e.theme.researchCardHighlight};
  color: ${e=>e.theme.researchCardHighlight};
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
  position: ${e=>e.$isOpen?`absolute`:`relative`};
  bottom: ${e=>e.$isOpen?`1.2rem`:`auto`};
  left: ${e=>e.$isOpen?`1.2rem`:`auto`};
  overflow: hidden;
  margin-top: ${e=>e.$isOpen?`0`:`1rem`};
  z-index: 2;
  -webkit-tap-highlight-color: transparent;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: ${e=>e.theme.researchCardHighlight};
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: width 0.3s ease, height 0.3s ease;
    z-index: -1;
  }

  @media (hover: hover) {
    &:hover {
      color: ${e=>e.theme.researchCardBackground};
      &:before {
        width: 300%;
        height: 300%;
      }
    }
  }

  &:active {
    color: ${e=>e.theme.researchCardBackground};
    &:before {
      width: 300%;
      height: 300%;
    }
  }

  &:focus {
    outline: none;
  }

  @media (hover: none) {
    &:focus {
      background: none;
      color: ${e=>e.theme.researchCardHighlight};
      &:before {
        width: 0;
        height: 0;
      }
    }
  }
`,U=F.ul`
  list-style: none;
  margin: 1rem 0;
  
  li {
    margin-bottom: 0.5rem;
    &:before {
      content: '>';
      color: var(--primary);
      margin-right: 0.5rem;
    }
  }
`,Po=F.a`
  display: inline-flex;
  align-items: center;
  color: var(--primary);
  margin-top: 1rem;
  gap: 0.5rem;
  
  &:hover {
    text-decoration: underline;
  }
`,Fo=()=>{let[e,t]=(0,_.useState)({promptOptimizer:!1,interviewCopilot:!1,shadowDimension:!1,pacmanTorusVerse:!1,processManagement:!1,rpcSystem:!1,dictionaryServer:!1,whiteBoard:!1,splendorAI:!1,lyonville:!1,melbourneDashboard:!1}),n=Object.keys(e).length,r=e=>{t(t=>({...t,[e]:!t[e]}))};return(0,I.jsxs)(Eo,{children:[(0,I.jsxs)(Do,{children:[(0,I.jsx)(`h1`,{children:`Projects`}),(0,I.jsx)(`p`,{className:`subtitle`,children:`🚀 Where bugs become features and coffee becomes code! Check out my digital playground 🎮`})]}),(0,I.jsxs)(Oo,{children:[(0,I.jsxs)(ko,{children:[(0,I.jsxs)(H,{children:[`Project `,1,`/`,n]}),(0,I.jsx)(Ao,{children:`Prompt Optimizer`}),(0,I.jsx)(jo,{children:`A modern web application that helps optimize prompts for Large Language Models (LLMs) like GPT-4o and Claude 3.5 Sonnet. Features real-time prompt optimization, secure API key management, and a beautiful responsive UI with dark mode support.`}),(0,I.jsxs)(B,{children:[(0,I.jsx)(V,{children:`Next.js`}),(0,I.jsx)(V,{children:`Tailwind CSS`}),(0,I.jsx)(V,{children:`AI`}),(0,I.jsx)(V,{children:`OpenAI`}),(0,I.jsx)(V,{children:`Anthropic`})]}),(0,I.jsx)(No,{onClick:()=>r(`promptOptimizer`),$isOpen:e.promptOptimizer,children:e.promptOptimizer?`< Less Details />`:`< More Details />`}),(0,I.jsxs)(Mo,{$isOpen:e.promptOptimizer,children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Key Features:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Transform natural language prompts into optimized instructions`}),(0,I.jsx)(`li`,{children:`Support for multiple LLM models (GPT-4o and Claude 3.5)`}),(0,I.jsx)(`li`,{children:`Beautiful, responsive UI with dark mode support`}),(0,I.jsx)(`li`,{children:`Secure local storage of API keys`}),(0,I.jsx)(`li`,{children:`Real-time prompt optimization`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Technical Implementation:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Next.js 14 with modern React patterns`}),(0,I.jsx)(`li`,{children:`Tailwind CSS for responsive styling`}),(0,I.jsx)(`li`,{children:`OpenAI and Anthropic API integrations`}),(0,I.jsx)(`li`,{children:`Secure API key management system`}),(0,I.jsx)(`li`,{children:`Real-time optimization feedback`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Development Standards:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Modern tech stack with Next.js and Tailwind`}),(0,I.jsx)(`li`,{children:`Secure API key handling practices`}),(0,I.jsx)(`li`,{children:`Responsive design principles`}),(0,I.jsx)(`li`,{children:`User-centric interface design`}),(0,I.jsx)(`li`,{children:`Performance-optimized implementation`})]}),(0,I.jsx)(Po,{href:`https://github.com/dredre815/prompt-optimizer`,target:`_blank`,rel:`noopener noreferrer`,children:`View on GitHub →`})]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsxs)(H,{children:[`Project `,2,`/`,n]}),(0,I.jsx)(Ao,{children:`Interview Copilot`}),(0,I.jsx)(jo,{children:`A browser-based application that enhances interview experiences through real-time transcription and AI assistance. Features speech-to-text conversion and ChatGPT integration for intelligent response formulation.`}),(0,I.jsxs)(B,{children:[(0,I.jsx)(V,{children:`React`}),(0,I.jsx)(V,{children:`AI`}),(0,I.jsx)(V,{children:`WebSocket`}),(0,I.jsx)(V,{children:`Speech-to-Text`}),(0,I.jsx)(V,{children:`ChatGPT`})]}),(0,I.jsx)(No,{onClick:()=>r(`interviewCopilot`),$isOpen:e.interviewCopilot,children:e.interviewCopilot?`< Less Details />`:`< More Details />`}),(0,I.jsxs)(Mo,{$isOpen:e.interviewCopilot,children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Key Features:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Real-time speech-to-text transcription from any audio source`}),(0,I.jsx)(`li`,{children:`AI-powered interview assistance using ChatGPT`}),(0,I.jsx)(`li`,{children:`Cross-platform support with responsive design`}),(0,I.jsx)(`li`,{children:`Serverless architecture with local storage`}),(0,I.jsx)(`li`,{children:`Dark/Light theme support`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Technical Implementation:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`React.js with custom UI components`}),(0,I.jsx)(`li`,{children:`WebSocket integration for real-time communication`}),(0,I.jsx)(`li`,{children:`Deepgram API for speech recognition`}),(0,I.jsx)(`li`,{children:`OpenAI GPT-4 for AI responses`}),(0,I.jsx)(`li`,{children:`Local Storage API for secure key management`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Use Cases:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Online job interviews`}),(0,I.jsx)(`li`,{children:`Academic interviews and business meetings`}),(0,I.jsx)(`li`,{children:`Language assistance during conversations`}),(0,I.jsx)(`li`,{children:`Real-time meeting transcription`}),(0,I.jsx)(`li`,{children:`Interview preparation and practice`})]}),(0,I.jsx)(Po,{href:`https://github.com/dredre815/Interview-Copilot`,target:`_blank`,rel:`noopener noreferrer`,children:`View on GitHub →`})]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsxs)(H,{children:[`Project `,3,`/`,n]}),(0,I.jsx)(Ao,{children:`Melbourne Urban Mobility Dashboard`}),(0,I.jsx)(jo,{children:`An interactive R Shiny dashboard providing comprehensive insights into Melbourne's urban mobility patterns, featuring real-time updates on pedestrian traffic, public transport utilization, and road safety analytics through intuitive visualizations.`}),(0,I.jsxs)(B,{children:[(0,I.jsx)(V,{children:`R`}),(0,I.jsx)(V,{children:`Shiny`}),(0,I.jsx)(V,{children:`Data Visualization`}),(0,I.jsx)(V,{children:`Tableau`}),(0,I.jsx)(V,{children:`Urban Analytics`})]}),(0,I.jsx)(No,{onClick:()=>r(`melbourneDashboard`),$isOpen:e.melbourneDashboard,children:e.melbourneDashboard?`< Less Details />`:`< More Details />`}),(0,I.jsxs)(Mo,{$isOpen:e.melbourneDashboard,children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Key Features:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Real-time urban mobility statistics tracking`}),(0,I.jsx)(`li`,{children:`Interactive pedestrian traffic heat maps`}),(0,I.jsx)(`li`,{children:`Public transport utilization analysis`}),(0,I.jsx)(`li`,{children:`Road safety incident mapping`}),(0,I.jsx)(`li`,{children:`Melbourne facts and insights section`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Technical Implementation:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`R Shiny framework with custom dashboard components`}),(0,I.jsx)(`li`,{children:`Integration with Tableau Public visualizations`}),(0,I.jsx)(`li`,{children:`Responsive design with custom CSS styling`}),(0,I.jsx)(`li`,{children:`Interactive tooltips and modal dialogs`}),(0,I.jsx)(`li`,{children:`Real-time data processing and updates`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Data Analytics:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Pedestrian sensor data analysis`}),(0,I.jsx)(`li`,{children:`Public transport schedule optimization`}),(0,I.jsx)(`li`,{children:`Traffic incident pattern recognition`}),(0,I.jsx)(`li`,{children:`Urban infrastructure utilization metrics`}),(0,I.jsx)(`li`,{children:`Temporal and spatial trend analysis`})]}),(0,I.jsx)(Po,{href:`https://github.com/dredre815/MelUrbanDashboard`,target:`_blank`,rel:`noopener noreferrer`,children:`View on GitHub →`})]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsxs)(H,{children:[`Project `,4,`/`,n]}),(0,I.jsx)(Ao,{children:`Lyonville Community Website`}),(0,I.jsx)(jo,{children:`A modern, responsive community website for the town of Lyonville in Victoria, Australia. Features comprehensive information about local events, history, and community resources with an emphasis on user engagement and cultural preservation.`}),(0,I.jsxs)(B,{children:[(0,I.jsx)(V,{children:`React`}),(0,I.jsx)(V,{children:`JavaScript`}),(0,I.jsx)(V,{children:`Web Development`}),(0,I.jsx)(V,{children:`Community Platform`}),(0,I.jsx)(V,{children:`Responsive Design`})]}),(0,I.jsx)(No,{onClick:()=>r(`lyonville`),$isOpen:e.lyonville,children:e.lyonville?`< Less Details />`:`< More Details />`}),(0,I.jsxs)(Mo,{$isOpen:e.lyonville,children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Core Features:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Interactive community event management system`}),(0,I.jsx)(`li`,{children:`Comprehensive content management for local news and updates`}),(0,I.jsx)(`li`,{children:`Responsive design for multi-device accessibility`}),(0,I.jsx)(`li`,{children:`Cultural acknowledgment and heritage preservation`}),(0,I.jsx)(`li`,{children:`Community engagement tools and volunteer management`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Technical Implementation:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Modern JavaScript with strict coding standards`}),(0,I.jsx)(`li`,{children:`Component-based architecture using React`}),(0,I.jsx)(`li`,{children:`Modular CSS with responsive layouts`}),(0,I.jsx)(`li`,{children:`Git-based version control with standardized commits`}),(0,I.jsx)(`li`,{children:`Clean code practices and documentation`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Development Standards:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Comprehensive Git commit message convention`}),(0,I.jsx)(`li`,{children:`Strict JavaScript and React coding standards`}),(0,I.jsx)(`li`,{children:`HTML5 and CSS3 best practices`}),(0,I.jsx)(`li`,{children:`Modular component architecture`}),(0,I.jsx)(`li`,{children:`Collaborative development workflow`})]}),(0,I.jsx)(Po,{href:`https://github.com/Lyonville`,target:`_blank`,rel:`noopener noreferrer`,children:`View on GitHub →`})]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsxs)(H,{children:[`Project `,5,`/`,n]}),(0,I.jsx)(Ao,{children:`Splendor AI Agent`}),(0,I.jsx)(jo,{children:`An advanced AI agent for the board game Splendor using Monte Carlo Tree Search (MCTS) with heuristic-guided action selection. Features sophisticated decision-making strategies and efficient resource management.`}),(0,I.jsxs)(B,{children:[(0,I.jsx)(V,{children:`Python`}),(0,I.jsx)(V,{children:`AI`}),(0,I.jsx)(V,{children:`MCTS`}),(0,I.jsx)(V,{children:`Game Theory`}),(0,I.jsx)(V,{children:`Heuristics`})]}),(0,I.jsx)(No,{onClick:()=>r(`splendorAI`),$isOpen:e.splendorAI,children:e.splendorAI?`< Less Details />`:`< More Details />`}),(0,I.jsxs)(Mo,{$isOpen:e.splendorAI,children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Core Features:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Advanced MCTS algorithm with UCB1 formula`}),(0,I.jsx)(`li`,{children:`Multi-feature heuristic function for action selection`}),(0,I.jsx)(`li`,{children:`Phase-based strategic decision making`}),(0,I.jsx)(`li`,{children:`Sophisticated gem and card evaluation system`}),(0,I.jsx)(`li`,{children:`Time-aware processing with strict management`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Strategic Components:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Early game resource collection focus`}),(0,I.jsx)(`li`,{children:`Mid game balanced approach strategy`}),(0,I.jsx)(`li`,{children:`Late game point acquisition emphasis`}),(0,I.jsx)(`li`,{children:`Noble distance evaluation system`}),(0,I.jsx)(`li`,{children:`Card and gem diversity management`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Technical Implementation:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Custom MCTS node class implementation`}),(0,I.jsx)(`li`,{children:`Priority queue for efficient action selection`}),(0,I.jsx)(`li`,{children:`Game state and action management system`}),(0,I.jsx)(`li`,{children:`Interactive mode with multiple display options`}),(0,I.jsx)(`li`,{children:`Comprehensive warning and time limit system`})]}),(0,I.jsx)(Po,{href:`https://github.com/dredre815/SplendorAIAgent`,target:`_blank`,rel:`noopener noreferrer`,children:`View on GitHub →`})]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsxs)(H,{children:[`Project `,6,`/`,n]}),(0,I.jsx)(Ao,{children:`Collaborative Whiteboard Application`}),(0,I.jsx)(jo,{children:`A Java-based collaborative whiteboard application enabling real-time multi-user drawing and interaction. Features a comprehensive set of drawing tools, user management system, and file operations within a client-server architecture.`}),(0,I.jsxs)(B,{children:[(0,I.jsx)(V,{children:`Java`}),(0,I.jsx)(V,{children:`Swing GUI`}),(0,I.jsx)(V,{children:`Client-Server`}),(0,I.jsx)(V,{children:`Real-time`}),(0,I.jsx)(V,{children:`Collaboration`})]}),(0,I.jsx)(No,{onClick:()=>r(`whiteBoard`),$isOpen:e.whiteBoard,children:e.whiteBoard?`< Less Details />`:`< More Details />`}),(0,I.jsxs)(Mo,{$isOpen:e.whiteBoard,children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Drawing Tools:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Multiple shape tools (Line, Rectangle, Oval, Circle)`}),(0,I.jsx)(`li`,{children:`Free-hand drawing capability`}),(0,I.jsx)(`li`,{children:`Text insertion functionality`}),(0,I.jsx)(`li`,{children:`Eraser tool for corrections`}),(0,I.jsx)(`li`,{children:`Color and coordinate management`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Collaboration Features:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Real-time multi-user interaction`}),(0,I.jsx)(`li`,{children:`Manager/Client role management system`}),(0,I.jsx)(`li`,{children:`User join request approval mechanism`}),(0,I.jsx)(`li`,{children:`User kick functionality for managers`}),(0,I.jsx)(`li`,{children:`Synchronized canvas state across users`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Technical Implementation:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Client-Server architecture with Java Swing GUI`}),(0,I.jsx)(`li`,{children:`Serializable objects for network transmission`}),(0,I.jsx)(`li`,{children:`Event-driven drawing system`}),(0,I.jsx)(`li`,{children:`File persistence with save/load functionality`}),(0,I.jsx)(`li`,{children:`Abstract shape system with multiple implementations`})]}),(0,I.jsx)(Po,{href:`https://github.com/dredre815/DistributedSharedWhiteBoard`,target:`_blank`,rel:`noopener noreferrer`,children:`View on GitHub →`})]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsxs)(H,{children:[`Project `,7,`/`,n]}),(0,I.jsx)(Ao,{children:`Dictionary Client-Server Application`}),(0,I.jsx)(jo,{children:`A Java-based dictionary application implementing a client-server architecture that allows users to query, add, remove, and update word definitions through a graphical user interface with multi-threaded server capabilities.`}),(0,I.jsxs)(B,{children:[(0,I.jsx)(V,{children:`Java`}),(0,I.jsx)(V,{children:`Multi-threading`}),(0,I.jsx)(V,{children:`Client-Server`}),(0,I.jsx)(V,{children:`GUI`}),(0,I.jsx)(V,{children:`File I/O`})]}),(0,I.jsx)(No,{onClick:()=>r(`dictionaryServer`),$isOpen:e.dictionaryServer,children:e.dictionaryServer?`< Less Details />`:`< More Details />`}),(0,I.jsxs)(Mo,{$isOpen:e.dictionaryServer,children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Core Features:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Multi-threaded server with custom thread pool implementation`}),(0,I.jsx)(`li`,{children:`Graphical user interface for both client and server`}),(0,I.jsx)(`li`,{children:`Persistent storage with file-based dictionary data`}),(0,I.jsx)(`li`,{children:`Real-time updates and synchronization`}),(0,I.jsx)(`li`,{children:`Thread-safe concurrent dictionary operations`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Architecture Components:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Server with GUI control panel and core dictionary operations`}),(0,I.jsx)(`li`,{children:`Client interface with comprehensive dictionary management`}),(0,I.jsx)(`li`,{children:`Custom protocol for client-server communication`}),(0,I.jsx)(`li`,{children:`File handling system for persistent storage`}),(0,I.jsx)(`li`,{children:`Thread pool management for client connections`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Technical Implementation:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`16-thread pool for concurrent client handling`}),(0,I.jsx)(`li`,{children:`Synchronized dictionary operations for thread safety`}),(0,I.jsx)(`li`,{children:`Comprehensive error handling system`}),(0,I.jsx)(`li`,{children:`Custom communication protocol implementation`}),(0,I.jsx)(`li`,{children:`Persistent data storage with file I/O operations`})]}),(0,I.jsx)(Po,{href:`https://github.com/dredre815/Multi-threadedDictionaryServer`,target:`_blank`,rel:`noopener noreferrer`,children:`View on GitHub →`})]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsxs)(H,{children:[`Project `,8,`/`,n]}),(0,I.jsx)(Ao,{children:`Custom RPC System`}),(0,I.jsx)(jo,{children:`A sophisticated Remote Procedure Call (RPC) system implemented in C that enables distributed computing across multiple machines. Features a client-server architecture with support for non-blocking operations and robust error handling.`}),(0,I.jsxs)(B,{children:[(0,I.jsx)(V,{children:`C`}),(0,I.jsx)(V,{children:`Distributed Systems`}),(0,I.jsx)(V,{children:`Network Programming`}),(0,I.jsx)(V,{children:`Multi-threading`}),(0,I.jsx)(V,{children:`IPC`})]}),(0,I.jsx)(No,{onClick:()=>r(`rpcSystem`),$isOpen:e.rpcSystem,children:e.rpcSystem?`< Less Details />`:`< More Details />`}),(0,I.jsxs)(Mo,{$isOpen:e.rpcSystem,children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Core Features:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Client-Server architecture with thread pool management`}),(0,I.jsx)(`li`,{children:`Non-blocking operations for improved performance`}),(0,I.jsx)(`li`,{children:`Robust timeout and error handling mechanisms`}),(0,I.jsx)(`li`,{children:`Cross-platform byte order handling`}),(0,I.jsx)(`li`,{children:`Dynamic memory management system`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Technical Implementation:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Custom packet protocol for message handling`}),(0,I.jsx)(`li`,{children:`Thread pool with 16 concurrent threads`}),(0,I.jsx)(`li`,{children:`Support for 128 simultaneous connections`}),(0,I.jsx)(`li`,{children:`IPv6-compatible socket communication`}),(0,I.jsx)(`li`,{children:`64-second timeout mechanism`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`System Components:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Server-side function registration and handling`}),(0,I.jsx)(`li`,{children:`Client-side remote function discovery`}),(0,I.jsx)(`li`,{children:`Thread synchronization with mutex locks`}),(0,I.jsx)(`li`,{children:`Systematic resource cleanup mechanisms`}),(0,I.jsx)(`li`,{children:`Graceful shutdown handling with SIGINT`})]}),(0,I.jsx)(Po,{href:`https://github.com/dredre815/RemoteProcedureCall`,target:`_blank`,rel:`noopener noreferrer`,children:`View on GitHub →`})]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsxs)(H,{children:[`Project `,9,`/`,n]}),(0,I.jsx)(Ao,{children:`Process Management Simulator`}),(0,I.jsx)(jo,{children:`A sophisticated process management system that simulates CPU scheduling and memory allocation, supporting both simulated and real process management with various scheduling algorithms and memory allocation strategies.`}),(0,I.jsxs)(B,{children:[(0,I.jsx)(V,{children:`C`}),(0,I.jsx)(V,{children:`Systems Programming`}),(0,I.jsx)(V,{children:`CPU Scheduling`}),(0,I.jsx)(V,{children:`Memory Management`}),(0,I.jsx)(V,{children:`IPC`})]}),(0,I.jsx)(No,{onClick:()=>r(`processManagement`),$isOpen:e.processManagement,children:e.processManagement?`< Less Details />`:`< More Details />`}),(0,I.jsxs)(Mo,{$isOpen:e.processManagement,children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Scheduling Algorithms:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Shortest Job First (SJF) with non-preemptive scheduling`}),(0,I.jsx)(`li`,{children:`Round Robin (RR) with preemptive scheduling`}),(0,I.jsx)(`li`,{children:`Time quantum based execution system`}),(0,I.jsx)(`li`,{children:`Fair CPU distribution management`}),(0,I.jsx)(`li`,{children:`Process prioritization based on arrival time`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Memory Management:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Best-Fit allocation strategy implementation`}),(0,I.jsx)(`li`,{children:`Dynamic memory block tracking system`}),(0,I.jsx)(`li`,{children:`Memory block splitting and merging`}),(0,I.jsx)(`li`,{children:`Support for both infinite and best-fit strategies`}),(0,I.jsx)(`li`,{children:`Maximum memory capacity of 2048 units`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Technical Features:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Real process management with IPC mechanisms`}),(0,I.jsx)(`li`,{children:`Comprehensive performance statistics tracking`}),(0,I.jsx)(`li`,{children:`Configurable quantum time settings`}),(0,I.jsx)(`li`,{children:`Process state management system`}),(0,I.jsx)(`li`,{children:`Event-based logging and monitoring`})]}),(0,I.jsx)(Po,{href:`https://github.com/dredre815/ProcessManagement`,target:`_blank`,rel:`noopener noreferrer`,children:`View on GitHub →`})]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsxs)(H,{children:[`Project `,10,`/`,n]}),(0,I.jsx)(Ao,{children:`PacMan TorusVerse`}),(0,I.jsx)(jo,{children:`An innovative adaptation of the classic PacMan game that combines traditional gameplay elements with new features like portals and multi-level progression, featuring both a game engine and a custom map editor.`}),(0,I.jsxs)(B,{children:[(0,I.jsx)(V,{children:`Java`}),(0,I.jsx)(V,{children:`Game Development`}),(0,I.jsx)(V,{children:`GUI`}),(0,I.jsx)(V,{children:`XML`}),(0,I.jsx)(V,{children:`Map Editor`})]}),(0,I.jsx)(No,{onClick:()=>r(`pacmanTorusVerse`),$isOpen:e.pacmanTorusVerse,children:e.pacmanTorusVerse?`< Less Details />`:`< More Details />`}),(0,I.jsxs)(Mo,{$isOpen:e.pacmanTorusVerse,children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Game Features:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Multiple levels with ascending difficulty`}),(0,I.jsx)(`li`,{children:`Portal system for teleportation mechanics`}),(0,I.jsx)(`li`,{children:`Smart AI-powered autoplayer`}),(0,I.jsx)(`li`,{children:`Classic PacMan elements (pills, gold, monsters)`}),(0,I.jsx)(`li`,{children:`Ice cube obstacles and special tiles`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Map Editor Features:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Visual GUI for map creation`}),(0,I.jsx)(`li`,{children:`Multiple tile types (walls, portals, items)`}),(0,I.jsx)(`li`,{children:`Comprehensive map validation system`}),(0,I.jsx)(`li`,{children:`XML-based save/load functionality`}),(0,I.jsx)(`li`,{children:`Flexible viewport management`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Technical Highlights:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Event-driven design architecture`}),(0,I.jsx)(`li`,{children:`Modular structure for game components`}),(0,I.jsx)(`li`,{children:`XML-based map storage system`}),(0,I.jsx)(`li`,{children:`Dual-level validation system`}),(0,I.jsx)(`li`,{children:`Team collaboration project`})]}),(0,I.jsx)(Po,{href:`https://github.com/dredre815/PacManTorusVerse`,target:`_blank`,rel:`noopener noreferrer`,children:`View on GitHub →`})]})]}),(0,I.jsxs)(ko,{children:[(0,I.jsxs)(H,{children:[`Project `,11,`/`,n]}),(0,I.jsx)(Ao,{children:`Shadow Dimension`}),(0,I.jsx)(jo,{children:`A 2D fantasy role-playing game where players control Fae, a character on a mission to save her father and hometown from evil creatures from another dimension.`}),(0,I.jsxs)(B,{children:[(0,I.jsx)(V,{children:`Java`}),(0,I.jsx)(V,{children:`Game Development`}),(0,I.jsx)(V,{children:`Bagel Engine`}),(0,I.jsx)(V,{children:`2D RPG`})]}),(0,I.jsx)(No,{onClick:()=>r(`shadowDimension`),$isOpen:e.shadowDimension,children:e.shadowDimension?`< Less Details />`:`< More Details />`}),(0,I.jsxs)(Mo,{$isOpen:e.shadowDimension,children:[(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Key Features:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Two distinct game levels with unique challenges`}),(0,I.jsx)(`li`,{children:`Dynamic combat system with enemy AI`}),(0,I.jsx)(`li`,{children:`Health management and status effects`}),(0,I.jsx)(`li`,{children:`Adjustable game speed mechanics`}),(0,I.jsx)(`li`,{children:`Object-oriented architecture`})]}),(0,I.jsx)(`h4`,{style:{color:`var(--primary)`,marginTop:`1rem`},children:`Controls:`}),(0,I.jsxs)(U,{children:[(0,I.jsx)(`li`,{children:`Arrow Keys: Movement`}),(0,I.jsx)(`li`,{children:`A: Attack enemies`}),(0,I.jsx)(`li`,{children:`L/K: Speed controls`}),(0,I.jsx)(`li`,{children:`Space: Start/Next level`}),(0,I.jsx)(`li`,{children:`Escape: Exit game`})]}),(0,I.jsx)(Po,{href:`https://github.com/dredre815/ShadowDimension2022`,target:`_blank`,rel:`noopener noreferrer`,children:`View on GitHub →`})]})]})]})]})},Io=F.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,Lo=F.div`
  margin-bottom: 3rem;
  
  h1 {
    color: var(--primary);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'Courier New', monospace;
    
    &:before {
      content: '$ cat ~/cv/';
      display: block;
      font-size: 1rem;
      opacity: 0.7;
      margin-bottom: 0.5rem;
      color: var(--primary);
    }
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .subtitle {
    color: ${e=>e.theme.researchCardSecondary};
    font-family: 'Courier New', monospace;
    line-height: 1.6;
  }
`,Ro=F.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`,zo=F.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  padding: 0.9rem 1.8rem;
  background: ${e=>e.theme.researchCardBackground};
  border: 1px solid ${e=>e.theme.researchCardHighlight};
  color: ${e=>e.theme.researchCardHighlight};
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  cursor: pointer;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  min-width: 200px;
  box-shadow: ${e=>e.theme.researchCardShadow};
  
  display: flex;
  align-items: center;
  justify-content: center;
  
  span {
    font-size: 1.1rem;
    transition: transform 0.2s ease;
    display: flex;
    align-items: center;
  }
  
  &:hover {
    background: ${e=>e.theme.researchCardHighlight};
    color: ${e=>e.theme.researchCardBackground};
    transform: translateY(-2px);
    box-shadow: ${e=>e.theme.researchCardHoverShadow};
    
    span {
      transform: scale(1.1);
    }
  }
  
  &:active {
    transform: translateY(0);
    box-shadow: ${e=>e.theme.researchCardShadow};
  }
  
  @media (max-width: 768px) {
    width: 100%;
    min-width: unset;
    padding: 0.9rem 0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    
    > span {
      width: 24px;
      justify-content: center;
    }
  }
`,Bo=F.div`
  position: relative;
  width: 100%;
  height: 800px;
  background: ${e=>e.theme.researchCardBackground};
  border: 1px solid ${e=>e.theme.researchCardBorder};
  border-radius: 8px;
  overflow: hidden;
  margin-top: 2rem;
  box-shadow: ${e=>e.theme.researchCardShadow};
  
  .title-bar {
    height: 2.5rem;
    background: ${e=>e.theme.researchCardTag.background};
    border-bottom: 1px solid ${e=>e.theme.researchCardBorder};
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${e=>e.theme.researchCardTitle};
    font-family: 'Courier New', monospace;
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    height: 500px;
  }
`,Vo=F.embed`
  width: 100%;
  height: calc(100% - 2.5rem);
  background: white;
`,Ho=F.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: ${e=>e.theme.researchCardHighlight};
  font-family: 'Courier New', monospace;
`,Uo=()=>{let[e,t]=(0,_.useState)(!0),n=`./CV.pdf`;return(0,_.useEffect)(()=>{let e=setTimeout(()=>{t(!1)},1500);return()=>clearTimeout(e)},[]),(0,I.jsxs)(Io,{children:[(0,I.jsxs)(Lo,{children:[(0,I.jsx)(`h1`,{children:`Curriculum Vitae`}),(0,I.jsxs)(`div`,{className:`subtitle`,children:[`📄 The story of how I turned caffeine into software solutions!`,(0,I.jsx)(`br`,{}),(0,I.jsx)(`br`,{}),`Last updated: 24/02/2026`]}),(0,I.jsxs)(Ro,{children:[(0,I.jsxs)(zo,{href:n,download:!0,children:[(0,I.jsx)(`span`,{children:`⬇️`}),(0,I.jsx)(`span`,{style:{width:`auto`},children:`Download CV`})]}),(0,I.jsxs)(zo,{href:n,target:`_blank`,children:[(0,I.jsx)(`span`,{children:`🔍`}),(0,I.jsx)(`span`,{style:{width:`auto`},children:`View Full Screen`})]})]})]}),(0,I.jsxs)(Bo,{children:[(0,I.jsx)(`div`,{className:`title-bar`,children:`CV.pdf - Preview`}),e?(0,I.jsx)(Ho,{children:`Loading CV...`}):(0,I.jsx)(Vo,{src:n,type:`application/pdf`})]})]})};function Wo(e,t){let n=t||{};return(e[e.length-1]===``?[...e,``]:e).join((n.padRight?` `:``)+`,`+(n.padLeft===!1?``:` `)).trim()}var Go=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Ko=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,qo={};function Jo(e,t){return((t||qo).jsx?Ko:Go).test(e)}var Yo=/[ \t\n\f\r]/g;function Xo(e){return typeof e==`object`?e.type===`text`?Zo(e.value):!1:Zo(e)}function Zo(e){return e.replace(Yo,``)===``}var Qo=class{constructor(e,t,n){this.normal=t,this.property=e,n&&(this.space=n)}};Qo.prototype.normal={},Qo.prototype.property={},Qo.prototype.space=void 0;function $o(e,t){let n={},r={};for(let t of e)Object.assign(n,t.property),Object.assign(r,t.normal);return new Qo(n,r,t)}function es(e){return e.toLowerCase()}var ts=class{constructor(e,t){this.attribute=t,this.property=e}};ts.prototype.attribute=``,ts.prototype.booleanish=!1,ts.prototype.boolean=!1,ts.prototype.commaOrSpaceSeparated=!1,ts.prototype.commaSeparated=!1,ts.prototype.defined=!1,ts.prototype.mustUseProperty=!1,ts.prototype.number=!1,ts.prototype.overloadedBoolean=!1,ts.prototype.property=``,ts.prototype.spaceSeparated=!1,ts.prototype.space=void 0;var ns=s({boolean:()=>W,booleanish:()=>is,commaOrSpaceSeparated:()=>ss,commaSeparated:()=>os,number:()=>G,overloadedBoolean:()=>as,spaceSeparated:()=>K}),rs=0,W=cs(),is=cs(),as=cs(),G=cs(),K=cs(),os=cs(),ss=cs();function cs(){return 2**++rs}var ls=Object.keys(ns),us=class extends ts{constructor(e,t,n,r){let i=-1;if(super(e,t),ds(this,`space`,r),typeof n==`number`)for(;++i<ls.length;){let e=ls[i];ds(this,ls[i],(n&ns[e])===ns[e])}}};us.prototype.defined=!0;function ds(e,t,n){n&&(e[t]=n)}function fs(e){let t={},n={};for(let[r,i]of Object.entries(e.properties)){let a=new us(r,e.transform(e.attributes||{},r),i,e.space);e.mustUseProperty&&e.mustUseProperty.includes(r)&&(a.mustUseProperty=!0),t[r]=a,n[es(r)]=r,n[es(a.attribute)]=r}return new Qo(t,n,e.space)}var ps=fs({properties:{ariaActiveDescendant:null,ariaAtomic:is,ariaAutoComplete:null,ariaBusy:is,ariaChecked:is,ariaColCount:G,ariaColIndex:G,ariaColSpan:G,ariaControls:K,ariaCurrent:null,ariaDescribedBy:K,ariaDetails:null,ariaDisabled:is,ariaDropEffect:K,ariaErrorMessage:null,ariaExpanded:is,ariaFlowTo:K,ariaGrabbed:is,ariaHasPopup:null,ariaHidden:is,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:K,ariaLevel:G,ariaLive:null,ariaModal:is,ariaMultiLine:is,ariaMultiSelectable:is,ariaOrientation:null,ariaOwns:K,ariaPlaceholder:null,ariaPosInSet:G,ariaPressed:is,ariaReadOnly:is,ariaRelevant:null,ariaRequired:is,ariaRoleDescription:K,ariaRowCount:G,ariaRowIndex:G,ariaRowSpan:G,ariaSelected:is,ariaSetSize:G,ariaSort:null,ariaValueMax:G,ariaValueMin:G,ariaValueNow:G,ariaValueText:null,role:null},transform(e,t){return t===`role`?t:`aria-`+t.slice(4).toLowerCase()}});function ms(e,t){return t in e?e[t]:t}function hs(e,t){return ms(e,t.toLowerCase())}var gs=fs({attributes:{acceptcharset:`accept-charset`,classname:`class`,htmlfor:`for`,httpequiv:`http-equiv`},mustUseProperty:[`checked`,`multiple`,`muted`,`selected`],properties:{abbr:null,accept:os,acceptCharset:K,accessKey:K,action:null,allow:null,allowFullScreen:W,allowPaymentRequest:W,allowUserMedia:W,alt:null,as:null,async:W,autoCapitalize:null,autoComplete:K,autoFocus:W,autoPlay:W,blocking:K,capture:null,charSet:null,checked:W,cite:null,className:K,cols:G,colSpan:null,content:null,contentEditable:is,controls:W,controlsList:K,coords:G|os,crossOrigin:null,data:null,dateTime:null,decoding:null,default:W,defer:W,dir:null,dirName:null,disabled:W,download:as,draggable:is,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:W,formTarget:null,headers:K,height:G,hidden:as,high:G,href:null,hrefLang:null,htmlFor:K,httpEquiv:K,id:null,imageSizes:null,imageSrcSet:null,inert:W,inputMode:null,integrity:null,is:null,isMap:W,itemId:null,itemProp:K,itemRef:K,itemScope:W,itemType:K,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:W,low:G,manifest:null,max:null,maxLength:G,media:null,method:null,min:null,minLength:G,multiple:W,muted:W,name:null,nonce:null,noModule:W,noValidate:W,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:W,optimum:G,pattern:null,ping:K,placeholder:null,playsInline:W,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:W,referrerPolicy:null,rel:K,required:W,reversed:W,rows:G,rowSpan:G,sandbox:K,scope:null,scoped:W,seamless:W,selected:W,shadowRootClonable:W,shadowRootDelegatesFocus:W,shadowRootMode:null,shape:null,size:G,sizes:null,slot:null,span:G,spellCheck:is,src:null,srcDoc:null,srcLang:null,srcSet:null,start:G,step:null,style:null,tabIndex:G,target:null,title:null,translate:null,type:null,typeMustMatch:W,useMap:null,value:is,width:G,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:K,axis:null,background:null,bgColor:null,border:G,borderColor:null,bottomMargin:G,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:W,declare:W,event:null,face:null,frame:null,frameBorder:null,hSpace:G,leftMargin:G,link:null,longDesc:null,lowSrc:null,marginHeight:G,marginWidth:G,noResize:W,noHref:W,noShade:W,noWrap:W,object:null,profile:null,prompt:null,rev:null,rightMargin:G,rules:null,scheme:null,scrolling:is,standby:null,summary:null,text:null,topMargin:G,valueType:null,version:null,vAlign:null,vLink:null,vSpace:G,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:W,disableRemotePlayback:W,prefix:null,property:null,results:G,security:null,unselectable:null},space:`html`,transform:hs}),_s=fs({attributes:{accentHeight:`accent-height`,alignmentBaseline:`alignment-baseline`,arabicForm:`arabic-form`,baselineShift:`baseline-shift`,capHeight:`cap-height`,className:`class`,clipPath:`clip-path`,clipRule:`clip-rule`,colorInterpolation:`color-interpolation`,colorInterpolationFilters:`color-interpolation-filters`,colorProfile:`color-profile`,colorRendering:`color-rendering`,crossOrigin:`crossorigin`,dataType:`datatype`,dominantBaseline:`dominant-baseline`,enableBackground:`enable-background`,fillOpacity:`fill-opacity`,fillRule:`fill-rule`,floodColor:`flood-color`,floodOpacity:`flood-opacity`,fontFamily:`font-family`,fontSize:`font-size`,fontSizeAdjust:`font-size-adjust`,fontStretch:`font-stretch`,fontStyle:`font-style`,fontVariant:`font-variant`,fontWeight:`font-weight`,glyphName:`glyph-name`,glyphOrientationHorizontal:`glyph-orientation-horizontal`,glyphOrientationVertical:`glyph-orientation-vertical`,hrefLang:`hreflang`,horizAdvX:`horiz-adv-x`,horizOriginX:`horiz-origin-x`,horizOriginY:`horiz-origin-y`,imageRendering:`image-rendering`,letterSpacing:`letter-spacing`,lightingColor:`lighting-color`,markerEnd:`marker-end`,markerMid:`marker-mid`,markerStart:`marker-start`,navDown:`nav-down`,navDownLeft:`nav-down-left`,navDownRight:`nav-down-right`,navLeft:`nav-left`,navNext:`nav-next`,navPrev:`nav-prev`,navRight:`nav-right`,navUp:`nav-up`,navUpLeft:`nav-up-left`,navUpRight:`nav-up-right`,onAbort:`onabort`,onActivate:`onactivate`,onAfterPrint:`onafterprint`,onBeforePrint:`onbeforeprint`,onBegin:`onbegin`,onCancel:`oncancel`,onCanPlay:`oncanplay`,onCanPlayThrough:`oncanplaythrough`,onChange:`onchange`,onClick:`onclick`,onClose:`onclose`,onCopy:`oncopy`,onCueChange:`oncuechange`,onCut:`oncut`,onDblClick:`ondblclick`,onDrag:`ondrag`,onDragEnd:`ondragend`,onDragEnter:`ondragenter`,onDragExit:`ondragexit`,onDragLeave:`ondragleave`,onDragOver:`ondragover`,onDragStart:`ondragstart`,onDrop:`ondrop`,onDurationChange:`ondurationchange`,onEmptied:`onemptied`,onEnd:`onend`,onEnded:`onended`,onError:`onerror`,onFocus:`onfocus`,onFocusIn:`onfocusin`,onFocusOut:`onfocusout`,onHashChange:`onhashchange`,onInput:`oninput`,onInvalid:`oninvalid`,onKeyDown:`onkeydown`,onKeyPress:`onkeypress`,onKeyUp:`onkeyup`,onLoad:`onload`,onLoadedData:`onloadeddata`,onLoadedMetadata:`onloadedmetadata`,onLoadStart:`onloadstart`,onMessage:`onmessage`,onMouseDown:`onmousedown`,onMouseEnter:`onmouseenter`,onMouseLeave:`onmouseleave`,onMouseMove:`onmousemove`,onMouseOut:`onmouseout`,onMouseOver:`onmouseover`,onMouseUp:`onmouseup`,onMouseWheel:`onmousewheel`,onOffline:`onoffline`,onOnline:`ononline`,onPageHide:`onpagehide`,onPageShow:`onpageshow`,onPaste:`onpaste`,onPause:`onpause`,onPlay:`onplay`,onPlaying:`onplaying`,onPopState:`onpopstate`,onProgress:`onprogress`,onRateChange:`onratechange`,onRepeat:`onrepeat`,onReset:`onreset`,onResize:`onresize`,onScroll:`onscroll`,onSeeked:`onseeked`,onSeeking:`onseeking`,onSelect:`onselect`,onShow:`onshow`,onStalled:`onstalled`,onStorage:`onstorage`,onSubmit:`onsubmit`,onSuspend:`onsuspend`,onTimeUpdate:`ontimeupdate`,onToggle:`ontoggle`,onUnload:`onunload`,onVolumeChange:`onvolumechange`,onWaiting:`onwaiting`,onZoom:`onzoom`,overlinePosition:`overline-position`,overlineThickness:`overline-thickness`,paintOrder:`paint-order`,panose1:`panose-1`,pointerEvents:`pointer-events`,referrerPolicy:`referrerpolicy`,renderingIntent:`rendering-intent`,shapeRendering:`shape-rendering`,stopColor:`stop-color`,stopOpacity:`stop-opacity`,strikethroughPosition:`strikethrough-position`,strikethroughThickness:`strikethrough-thickness`,strokeDashArray:`stroke-dasharray`,strokeDashOffset:`stroke-dashoffset`,strokeLineCap:`stroke-linecap`,strokeLineJoin:`stroke-linejoin`,strokeMiterLimit:`stroke-miterlimit`,strokeOpacity:`stroke-opacity`,strokeWidth:`stroke-width`,tabIndex:`tabindex`,textAnchor:`text-anchor`,textDecoration:`text-decoration`,textRendering:`text-rendering`,transformOrigin:`transform-origin`,typeOf:`typeof`,underlinePosition:`underline-position`,underlineThickness:`underline-thickness`,unicodeBidi:`unicode-bidi`,unicodeRange:`unicode-range`,unitsPerEm:`units-per-em`,vAlphabetic:`v-alphabetic`,vHanging:`v-hanging`,vIdeographic:`v-ideographic`,vMathematical:`v-mathematical`,vectorEffect:`vector-effect`,vertAdvY:`vert-adv-y`,vertOriginX:`vert-origin-x`,vertOriginY:`vert-origin-y`,wordSpacing:`word-spacing`,writingMode:`writing-mode`,xHeight:`x-height`,playbackOrder:`playbackorder`,timelineBegin:`timelinebegin`},properties:{about:ss,accentHeight:G,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:G,amplitude:G,arabicForm:null,ascent:G,attributeName:null,attributeType:null,azimuth:G,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:G,by:null,calcMode:null,capHeight:G,className:K,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:G,diffuseConstant:G,direction:null,display:null,dur:null,divisor:G,dominantBaseline:null,download:W,dx:null,dy:null,edgeMode:null,editable:null,elevation:G,enableBackground:null,end:null,event:null,exponent:G,externalResourcesRequired:null,fill:null,fillOpacity:G,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:os,g2:os,glyphName:os,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:G,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:G,horizOriginX:G,horizOriginY:G,id:null,ideographic:G,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:G,k:G,k1:G,k2:G,k3:G,k4:G,kernelMatrix:ss,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:G,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:G,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:G,overlineThickness:G,paintOrder:null,panose1:null,path:null,pathLength:G,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:K,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:G,pointsAtY:G,pointsAtZ:G,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:ss,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:ss,rev:ss,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:ss,requiredFeatures:ss,requiredFonts:ss,requiredFormats:ss,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:G,specularExponent:G,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:G,strikethroughThickness:G,string:null,stroke:null,strokeDashArray:ss,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:G,strokeOpacity:G,strokeWidth:null,style:null,surfaceScale:G,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:ss,tabIndex:G,tableValues:null,target:null,targetX:G,targetY:G,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:ss,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:G,underlineThickness:G,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:G,values:null,vAlphabetic:G,vMathematical:G,vectorEffect:null,vHanging:G,vIdeographic:G,version:null,vertAdvY:G,vertOriginX:G,vertOriginY:G,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:G,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:`svg`,transform:ms}),vs=fs({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:`xlink`,transform(e,t){return`xlink:`+t.slice(5).toLowerCase()}}),ys=fs({attributes:{xmlnsxlink:`xmlns:xlink`},properties:{xmlnsXLink:null,xmlns:null},space:`xmlns`,transform:hs}),bs=fs({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:`xml`,transform(e,t){return`xml:`+t.slice(3).toLowerCase()}}),xs={classId:`classID`,dataType:`datatype`,itemId:`itemID`,strokeDashArray:`strokeDasharray`,strokeDashOffset:`strokeDashoffset`,strokeLineCap:`strokeLinecap`,strokeLineJoin:`strokeLinejoin`,strokeMiterLimit:`strokeMiterlimit`,typeOf:`typeof`,xLinkActuate:`xlinkActuate`,xLinkArcRole:`xlinkArcrole`,xLinkHref:`xlinkHref`,xLinkRole:`xlinkRole`,xLinkShow:`xlinkShow`,xLinkTitle:`xlinkTitle`,xLinkType:`xlinkType`,xmlnsXLink:`xmlnsXlink`},Ss=/[A-Z]/g,Cs=/-[a-z]/g,ws=/^data[-\w.:]+$/i;function Ts(e,t){let n=es(t),r=t,i=ts;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)===`data`&&ws.test(t)){if(t.charAt(4)===`-`){let e=t.slice(5).replace(Cs,Ds);r=`data`+e.charAt(0).toUpperCase()+e.slice(1)}else{let e=t.slice(4);if(!Cs.test(e)){let n=e.replace(Ss,Es);n.charAt(0)!==`-`&&(n=`-`+n),t=`data`+n}}i=us}return new i(r,t)}function Es(e){return`-`+e.toLowerCase()}function Ds(e){return e.charAt(1).toUpperCase()}var Os=$o([ps,gs,vs,ys,bs],`html`),ks=$o([ps,_s,vs,ys,bs],`svg`);function As(e){return e.join(` `).trim()}var js=o(((e,t)=>{var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,i=/^\s*/,a=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,l=/^\s+|\s+$/g,u=`
`,d=`/`,f=`*`,p=``,m=`comment`,h=`declaration`;function g(e,t){if(typeof e!=`string`)throw TypeError(`First argument must be a string`);if(!e)return[];t||={};var l=1,g=1;function v(e){var t=e.match(r);t&&(l+=t.length);var n=e.lastIndexOf(u);g=~n?e.length-n:g+e.length}function y(){var e={line:l,column:g};return function(t){return t.position=new b(e),C(),t}}function b(e){this.start=e,this.end={line:l,column:g},this.source=t.source}b.prototype.content=e;function x(n){var r=Error(t.source+`:`+l+`:`+g+`: `+n);if(r.reason=n,r.filename=t.source,r.line=l,r.column=g,r.source=e,!t.silent)throw r}function S(t){var n=t.exec(e);if(n){var r=n[0];return v(r),e=e.slice(r.length),n}}function C(){S(i)}function w(e){var t;for(e||=[];t=T();)t!==!1&&e.push(t);return e}function T(){var t=y();if(!(d!=e.charAt(0)||f!=e.charAt(1))){for(var n=2;p!=e.charAt(n)&&(f!=e.charAt(n)||d!=e.charAt(n+1));)++n;if(n+=2,p===e.charAt(n-1))return x(`End of comment missing`);var r=e.slice(2,n-2);return g+=2,v(r),e=e.slice(n),g+=2,t({type:m,comment:r})}}function E(){var e=y(),t=S(a);if(t){if(T(),!S(o))return x(`property missing ':'`);var r=S(s),i=e({type:h,property:_(t[0].replace(n,p)),value:r?_(r[0].replace(n,p)):p});return S(c),i}}function ee(){var e=[];w(e);for(var t;t=E();)t!==!1&&(e.push(t),w(e));return e}return C(),ee()}function _(e){return e?e.replace(l,p):p}t.exports=g})),Ms=o((e=>{var t=e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(e,`__esModule`,{value:!0}),e.default=r;var n=t(js());function r(e,t){let r=null;if(!e||typeof e!=`string`)return r;let i=(0,n.default)(e),a=typeof t==`function`;return i.forEach(e=>{if(e.type!==`declaration`)return;let{property:n,value:i}=e;a?t(n,i,e):i&&(r||={},r[n]=i)}),r}})),Ns=o((e=>{Object.defineProperty(e,`__esModule`,{value:!0}),e.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,n=/-([a-z])/g,r=/^[^-]+$/,i=/^-(webkit|moz|ms|o|khtml)-/,a=/^-(ms)-/,o=function(e){return!e||r.test(e)||t.test(e)},s=function(e,t){return t.toUpperCase()},c=function(e,t){return`${t}-`};e.camelCase=function(e,t){return t===void 0&&(t={}),o(e)?e:(e=e.toLowerCase(),e=t.reactCompat?e.replace(a,c):e.replace(i,c),e.replace(n,s))}})),Ps=o(((e,t)=>{var n=(e&&e.__importDefault||function(e){return e&&e.__esModule?e:{default:e}})(Ms()),r=Ns();function i(e,t){var i={};return!e||typeof e!=`string`||(0,n.default)(e,function(e,n){e&&n&&(i[(0,r.camelCase)(e,t)]=n)}),i}i.default=i,t.exports=i})),Fs=Ls(`end`),Is=Ls(`start`);function Ls(e){return t;function t(t){let n=t&&t.position&&t.position[e]||{};if(typeof n.line==`number`&&n.line>0&&typeof n.column==`number`&&n.column>0)return{line:n.line,column:n.column,offset:typeof n.offset==`number`&&n.offset>-1?n.offset:void 0}}}function Rs(e){let t=Is(e),n=Fs(e);if(t&&n)return{start:t,end:n}}function zs(e){return!e||typeof e!=`object`?``:`position`in e||`type`in e?Vs(e.position):`start`in e||`end`in e?Vs(e):`line`in e||`column`in e?Bs(e):``}function Bs(e){return Hs(e&&e.line)+`:`+Hs(e&&e.column)}function Vs(e){return Bs(e&&e.start)+`-`+Bs(e&&e.end)}function Hs(e){return e&&typeof e==`number`?e:1}var Us=class extends Error{constructor(e,t,n){super(),typeof t==`string`&&(n=t,t=void 0);let r=``,i={},a=!1;if(t&&(i=`line`in t&&`column`in t||`start`in t&&`end`in t?{place:t}:`type`in t?{ancestors:[t],place:t.position}:{...t}),typeof e==`string`?r=e:!i.cause&&e&&(a=!0,r=e.message,i.cause=e),!i.ruleId&&!i.source&&typeof n==`string`){let e=n.indexOf(`:`);e===-1?i.ruleId=n:(i.source=n.slice(0,e),i.ruleId=n.slice(e+1))}if(!i.place&&i.ancestors&&i.ancestors){let e=i.ancestors[i.ancestors.length-1];e&&(i.place=e.position)}let o=i.place&&`start`in i.place?i.place.start:i.place;this.ancestors=i.ancestors||void 0,this.cause=i.cause||void 0,this.column=o?o.column:void 0,this.fatal=void 0,this.file=``,this.message=r,this.line=o?o.line:void 0,this.name=zs(i.place)||`1:1`,this.place=i.place||void 0,this.reason=this.message,this.ruleId=i.ruleId||void 0,this.source=i.source||void 0,this.stack=a&&i.cause&&typeof i.cause.stack==`string`?i.cause.stack:``,this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}};Us.prototype.file=``,Us.prototype.name=``,Us.prototype.reason=``,Us.prototype.message=``,Us.prototype.stack=``,Us.prototype.column=void 0,Us.prototype.line=void 0,Us.prototype.ancestors=void 0,Us.prototype.cause=void 0,Us.prototype.fatal=void 0,Us.prototype.place=void 0,Us.prototype.ruleId=void 0,Us.prototype.source=void 0;var Ws=l(Ps(),1),Gs={}.hasOwnProperty,Ks=new Map,qs=/[A-Z]/g,Js=new Set([`table`,`tbody`,`thead`,`tfoot`,`tr`]),Ys=new Set([`td`,`th`]),Xs=`https://github.com/syntax-tree/hast-util-to-jsx-runtime`;function Zs(e,t){if(!t||t.Fragment===void 0)throw TypeError("Expected `Fragment` in options");let n=t.filePath||void 0,r;if(t.development){if(typeof t.jsxDEV!=`function`)throw TypeError("Expected `jsxDEV` in options when `development: true`");r=cc(n,t.jsxDEV)}else{if(typeof t.jsx!=`function`)throw TypeError("Expected `jsx` in production options");if(typeof t.jsxs!=`function`)throw TypeError("Expected `jsxs` in production options");r=sc(n,t.jsx,t.jsxs)}let i={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:r,elementAttributeNameCase:t.elementAttributeNameCase||`react`,evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space===`svg`?ks:Os,stylePropertyNameCase:t.stylePropertyNameCase||`dom`,tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=Qs(i,e,void 0);return a&&typeof a!=`string`?a:i.create(e,i.Fragment,{children:a||void 0},void 0)}function Qs(e,t,n){if(t.type===`element`)return $s(e,t,n);if(t.type===`mdxFlowExpression`||t.type===`mdxTextExpression`)return ec(e,t);if(t.type===`mdxJsxFlowElement`||t.type===`mdxJsxTextElement`)return nc(e,t,n);if(t.type===`mdxjsEsm`)return tc(e,t);if(t.type===`root`)return rc(e,t,n);if(t.type===`text`)return ic(e,t)}function $s(e,t,n){let r=e.schema,i=r;t.tagName.toLowerCase()===`svg`&&r.space===`html`&&(i=ks,e.schema=i),e.ancestors.push(t);let a=mc(e,t.tagName,!1),o=lc(e,t),s=dc(e,t);return Js.has(t.tagName)&&(s=s.filter(function(e){return typeof e==`string`?!Xo(e):!0})),ac(e,o,a,t),oc(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function ec(e,t){if(t.data&&t.data.estree&&e.evaluater){let n=t.data.estree.body[0];return n.type,e.evaluater.evaluateExpression(n.expression)}hc(e,t.position)}function tc(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);hc(e,t.position)}function nc(e,t,n){let r=e.schema,i=r;t.name===`svg`&&r.space===`html`&&(i=ks,e.schema=i),e.ancestors.push(t);let a=t.name===null?e.Fragment:mc(e,t.name,!0),o=uc(e,t),s=dc(e,t);return ac(e,o,a,t),oc(o,s),e.ancestors.pop(),e.schema=r,e.create(t,a,o,n)}function rc(e,t,n){let r={};return oc(r,dc(e,t)),e.create(t,e.Fragment,r,n)}function ic(e,t){return t.value}function ac(e,t,n,r){typeof n!=`string`&&n!==e.Fragment&&e.passNode&&(t.node=r)}function oc(e,t){if(t.length>0){let n=t.length>1?t:t[0];n&&(e.children=n)}}function sc(e,t,n){return r;function r(e,r,i,a){let o=Array.isArray(i.children)?n:t;return a?o(r,i,a):o(r,i)}}function cc(e,t){return n;function n(n,r,i,a){let o=Array.isArray(i.children),s=Is(n);return t(r,i,a,o,{columnNumber:s?s.column-1:void 0,fileName:e,lineNumber:s?s.line:void 0},void 0)}}function lc(e,t){let n={},r,i;for(i in t.properties)if(i!==`children`&&Gs.call(t.properties,i)){let a=fc(e,i,t.properties[i]);if(a){let[i,o]=a;e.tableCellAlignToStyle&&i===`align`&&typeof o==`string`&&Ys.has(t.tagName)?r=o:n[i]=o}}if(r){let t=n.style||={};t[e.stylePropertyNameCase===`css`?`text-align`:`textAlign`]=r}return n}function uc(e,t){let n={};for(let r of t.attributes)if(r.type===`mdxJsxExpressionAttribute`)if(r.data&&r.data.estree&&e.evaluater){let t=r.data.estree.body[0];t.type;let i=t.expression;i.type;let a=i.properties[0];a.type,Object.assign(n,e.evaluater.evaluateExpression(a.argument))}else hc(e,t.position);else{let i=r.name,a;if(r.value&&typeof r.value==`object`)if(r.value.data&&r.value.data.estree&&e.evaluater){let t=r.value.data.estree.body[0];t.type,a=e.evaluater.evaluateExpression(t.expression)}else hc(e,t.position);else a=r.value===null?!0:r.value;n[i]=a}return n}function dc(e,t){let n=[],r=-1,i=e.passKeys?new Map:Ks;for(;++r<t.children.length;){let a=t.children[r],o;if(e.passKeys){let e=a.type===`element`?a.tagName:a.type===`mdxJsxFlowElement`||a.type===`mdxJsxTextElement`?a.name:void 0;if(e){let t=i.get(e)||0;o=e+`-`+t,i.set(e,t+1)}}let s=Qs(e,a,o);s!==void 0&&n.push(s)}return n}function fc(e,t,n){let r=Ts(e.schema,t);if(!(n==null||typeof n==`number`&&Number.isNaN(n))){if(Array.isArray(n)&&(n=r.commaSeparated?Wo(n):As(n)),r.property===`style`){let t=typeof n==`object`?n:pc(e,String(n));return e.stylePropertyNameCase===`css`&&(t=gc(t)),[`style`,t]}return[e.elementAttributeNameCase===`react`&&r.space?xs[r.property]||r.property:r.attribute,n]}}function pc(e,t){try{return(0,Ws.default)(t,{reactCompat:!0})}catch(t){if(e.ignoreInvalidStyle)return{};let n=t,r=new Us("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:n,ruleId:`style`,source:`hast-util-to-jsx-runtime`});throw r.file=e.filePath||void 0,r.url=Xs+`#cannot-parse-style-attribute`,r}}function mc(e,t,n){let r;if(!n)r={type:`Literal`,value:t};else if(t.includes(`.`)){let e=t.split(`.`),n=-1,i;for(;++n<e.length;){let t=Jo(e[n])?{type:`Identifier`,name:e[n]}:{type:`Literal`,value:e[n]};i=i?{type:`MemberExpression`,object:i,property:t,computed:!!(n&&t.type===`Literal`),optional:!1}:t}r=i}else r=Jo(t)&&!/^[a-z]/.test(t)?{type:`Identifier`,name:t}:{type:`Literal`,value:t};if(r.type===`Literal`){let t=r.value;return Gs.call(e.components,t)?e.components[t]:t}if(e.evaluater)return e.evaluater.evaluateExpression(r);hc(e)}function hc(e,t){let n=new Us("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:`mdx-estree`,source:`hast-util-to-jsx-runtime`});throw n.file=e.filePath||void 0,n.url=Xs+`#cannot-handle-mdx-estrees-without-createevaluater`,n}function gc(e){let t={},n;for(n in e)Gs.call(e,n)&&(t[q(n)]=e[n]);return t}function q(e){let t=e.replace(qs,_c);return t.slice(0,3)===`ms-`&&(t=`-`+t),t}function _c(e){return`-`+e.toLowerCase()}var vc={action:[`form`],cite:[`blockquote`,`del`,`ins`,`q`],data:[`object`],formAction:[`button`,`input`],href:[`a`,`area`,`base`,`link`],icon:[`menuitem`],itemId:null,manifest:[`html`],ping:[`a`,`area`],poster:[`video`],src:[`audio`,`embed`,`iframe`,`img`,`input`,`script`,`source`,`track`,`video`]},yc={};function bc(e,t){let n=t||yc;return xc(e,typeof n.includeImageAlt==`boolean`?n.includeImageAlt:!0,typeof n.includeHtml==`boolean`?n.includeHtml:!0)}function xc(e,t,n){if(Cc(e)){if(`value`in e)return e.type===`html`&&!n?``:e.value;if(t&&`alt`in e&&e.alt)return e.alt;if(`children`in e)return Sc(e.children,t,n)}return Array.isArray(e)?Sc(e,t,n):``}function Sc(e,t,n){let r=[],i=-1;for(;++i<e.length;)r[i]=xc(e[i],t,n);return r.join(``)}function Cc(e){return!!(e&&typeof e==`object`)}var wc=document.createElement(`i`);function Tc(e){let t=`&`+e+`;`;wc.innerHTML=t;let n=wc.textContent;return n.charCodeAt(n.length-1)===59&&e!==`semi`||n===t?!1:n}function Ec(e,t,n,r){let i=e.length,a=0,o;if(t=t<0?-t>i?0:i+t:t>i?i:t,n=n>0?n:0,r.length<1e4)o=Array.from(r),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<r.length;)o=r.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function Dc(e,t){return e.length>0?(Ec(e,e.length,0,t),e):t}var Oc={}.hasOwnProperty;function kc(e){let t={},n=-1;for(;++n<e.length;)Ac(t,e[n]);return t}function Ac(e,t){let n;for(n in t){let r=(Oc.call(e,n)?e[n]:void 0)||(e[n]={}),i=t[n],a;if(i)for(a in i){Oc.call(r,a)||(r[a]=[]);let e=i[a];jc(r[a],Array.isArray(e)?e:e?[e]:[])}}}function jc(e,t){let n=-1,r=[];for(;++n<t.length;)(t[n].add===`after`?e:r).push(t[n]);Ec(e,0,0,r)}function Mc(e,t){let n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)==65535||(n&65535)==65534||n>1114111?`�`:String.fromCodePoint(n)}function Nc(e){return e.replace(/[\t\n\r ]+/g,` `).replace(/^ | $/g,``).toLowerCase().toUpperCase()}var J=Q(/[A-Za-z]/),Pc=Q(/[\dA-Za-z]/),Fc=Q(/[#-'*+\--9=?A-Z^-~]/);function Ic(e){return e!==null&&(e<32||e===127)}var Lc=Q(/\d/),Rc=Q(/[\dA-Fa-f]/),zc=Q(/[!-/:-@[-`{-~]/);function Y(e){return e!==null&&e<-2}function X(e){return e!==null&&(e<0||e===32)}function Z(e){return e===-2||e===-1||e===32}var Bc=Q(/\p{P}|\p{S}/u),Vc=Q(/\s/);function Q(e){return t;function t(t){return t!==null&&t>-1&&e.test(String.fromCharCode(t))}}function Hc(e){let t=[],n=-1,r=0,i=0;for(;++n<e.length;){let a=e.charCodeAt(n),o=``;if(a===37&&Pc(e.charCodeAt(n+1))&&Pc(e.charCodeAt(n+2)))i=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){let t=e.charCodeAt(n+1);a<56320&&t>56319&&t<57344?(o=String.fromCharCode(a,t),i=1):o=`�`}else o=String.fromCharCode(a);o&&=(t.push(e.slice(r,n),encodeURIComponent(o)),r=n+i+1,``),i&&=(n+=i,0)}return t.join(``)+e.slice(r)}function $(e,t,n,r){let i=r?r-1:1/0,a=0;return o;function o(r){return Z(r)?(e.enter(n),s(r)):t(r)}function s(r){return Z(r)&&a++<i?(e.consume(r),s):(e.exit(n),t(r))}}var Uc={tokenize:Wc};function Wc(e){let t=e.attempt(this.parser.constructs.contentInitial,r,i),n;return t;function r(n){if(n===null){e.consume(n);return}return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),$(e,t,`linePrefix`)}function i(t){return e.enter(`paragraph`),a(t)}function a(t){let r=e.enter(`chunkText`,{contentType:`text`,previous:n});return n&&(n.next=r),n=r,o(t)}function o(t){if(t===null){e.exit(`chunkText`),e.exit(`paragraph`),e.consume(t);return}return Y(t)?(e.consume(t),e.exit(`chunkText`),a):(e.consume(t),o)}}var Gc={tokenize:qc},Kc={tokenize:Jc};function qc(e){let t=this,n=[],r=0,i,a,o;return s;function s(i){if(r<n.length){let a=n[r];return t.containerState=a[1],e.attempt(a[0].continuation,c,l)(i)}return l(i)}function c(e){if(r++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,i&&v();let n=t.events.length,a=n,o;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){o=t.events[a][1].end;break}_(r);let s=n;for(;s<t.events.length;)t.events[s][1].end={...o},s++;return Ec(t.events,a+1,0,t.events.slice(n)),t.events.length=s,l(e)}return s(e)}function l(a){if(r===n.length){if(!i)return f(a);if(i.currentConstruct&&i.currentConstruct.concrete)return m(a);t.interrupt=!!(i.currentConstruct&&!i._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(Kc,u,d)(a)}function u(e){return i&&v(),_(r),f(e)}function d(e){return t.parser.lazy[t.now().line]=r!==n.length,o=t.now().offset,m(e)}function f(n){return t.containerState={},e.attempt(Kc,p,m)(n)}function p(e){return r++,n.push([t.currentConstruct,t.containerState]),f(e)}function m(n){if(n===null){i&&v(),_(0),e.consume(n);return}return i||=t.parser.flow(t.now()),e.enter(`chunkFlow`,{_tokenizer:i,contentType:`flow`,previous:a}),h(n)}function h(n){if(n===null){g(e.exit(`chunkFlow`),!0),_(0),e.consume(n);return}return Y(n)?(e.consume(n),g(e.exit(`chunkFlow`)),r=0,t.interrupt=void 0,s):(e.consume(n),h)}function g(e,n){let s=t.sliceStream(e);if(n&&s.push(null),e.previous=a,a&&(a.next=e),a=e,i.defineSkip(e.start),i.write(s),t.parser.lazy[e.start.line]){let e=i.events.length;for(;e--;)if(i.events[e][1].start.offset<o&&(!i.events[e][1].end||i.events[e][1].end.offset>o))return;let n=t.events.length,a=n,s,c;for(;a--;)if(t.events[a][0]===`exit`&&t.events[a][1].type===`chunkFlow`){if(s){c=t.events[a][1].end;break}s=!0}for(_(r),e=n;e<t.events.length;)t.events[e][1].end={...c},e++;Ec(t.events,a+1,0,t.events.slice(n)),t.events.length=e}}function _(r){let i=n.length;for(;i-- >r;){let r=n[i];t.containerState=r[1],r[0].exit.call(t,e)}n.length=r}function v(){i.write([null]),a=void 0,i=void 0,t.containerState._closeFlow=void 0}}function Jc(e,t,n){return $(e,e.attempt(this.parser.constructs.document,t,n),`linePrefix`,this.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)}function Yc(e){if(e===null||X(e)||Vc(e))return 1;if(Bc(e))return 2}function Xc(e,t,n){let r=[],i=-1;for(;++i<e.length;){let a=e[i].resolveAll;a&&!r.includes(a)&&(t=a(t,n),r.push(a))}return t}var Zc={name:`attention`,resolveAll:Qc,tokenize:$c};function Qc(e,t){let n=-1,r,i,a,o,s,c,l,u;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`attentionSequence`&&e[n][1]._close){for(r=n;r--;)if(e[r][0]===`exit`&&e[r][1].type===`attentionSequence`&&e[r][1]._open&&t.sliceSerialize(e[r][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[r][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[r][1].end.offset-e[r][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[r][1].end.offset-e[r][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;let d={...e[r][1].end},f={...e[n][1].start};el(d,-c),el(f,c),o={type:c>1?`strongSequence`:`emphasisSequence`,start:d,end:{...e[r][1].end}},s={type:c>1?`strongSequence`:`emphasisSequence`,start:{...e[n][1].start},end:f},a={type:c>1?`strongText`:`emphasisText`,start:{...e[r][1].end},end:{...e[n][1].start}},i={type:c>1?`strong`:`emphasis`,start:{...o.start},end:{...s.end}},e[r][1].end={...o.start},e[n][1].start={...s.end},l=[],e[r][1].end.offset-e[r][1].start.offset&&(l=Dc(l,[[`enter`,e[r][1],t],[`exit`,e[r][1],t]])),l=Dc(l,[[`enter`,i,t],[`enter`,o,t],[`exit`,o,t],[`enter`,a,t]]),l=Dc(l,Xc(t.parser.constructs.insideSpan.null,e.slice(r+1,n),t)),l=Dc(l,[[`exit`,a,t],[`enter`,s,t],[`exit`,s,t],[`exit`,i,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,l=Dc(l,[[`enter`,e[n][1],t],[`exit`,e[n][1],t]])):u=0,Ec(e,r-1,n-r+3,l),n=r+l.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`attentionSequence`&&(e[n][1].type=`data`);return e}function $c(e,t){let n=this.parser.constructs.attentionMarkers.null,r=this.previous,i=Yc(r),a;return o;function o(t){return a=t,e.enter(`attentionSequence`),s(t)}function s(o){if(o===a)return e.consume(o),s;let c=e.exit(`attentionSequence`),l=Yc(o),u=!l||l===2&&i||n.includes(o),d=!i||i===2&&l||n.includes(r);return c._open=!!(a===42?u:u&&(i||!d)),c._close=!!(a===42?d:d&&(l||!u)),t(o)}}function el(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}var tl={name:`autolink`,tokenize:nl};function nl(e,t,n){let r=0;return i;function i(t){return e.enter(`autolink`),e.enter(`autolinkMarker`),e.consume(t),e.exit(`autolinkMarker`),e.enter(`autolinkProtocol`),a}function a(t){return J(t)?(e.consume(t),o):t===64?n(t):l(t)}function o(e){return e===43||e===45||e===46||Pc(e)?(r=1,s(e)):l(e)}function s(t){return t===58?(e.consume(t),r=0,c):(t===43||t===45||t===46||Pc(t))&&r++<32?(e.consume(t),s):(r=0,l(t))}function c(r){return r===62?(e.exit(`autolinkProtocol`),e.enter(`autolinkMarker`),e.consume(r),e.exit(`autolinkMarker`),e.exit(`autolink`),t):r===null||r===32||r===60||Ic(r)?n(r):(e.consume(r),c)}function l(t){return t===64?(e.consume(t),u):Fc(t)?(e.consume(t),l):n(t)}function u(e){return Pc(e)?d(e):n(e)}function d(n){return n===46?(e.consume(n),r=0,u):n===62?(e.exit(`autolinkProtocol`).type=`autolinkEmail`,e.enter(`autolinkMarker`),e.consume(n),e.exit(`autolinkMarker`),e.exit(`autolink`),t):f(n)}function f(t){if((t===45||Pc(t))&&r++<63){let n=t===45?f:d;return e.consume(t),n}return n(t)}}var rl={partial:!0,tokenize:il};function il(e,t,n){return r;function r(t){return Z(t)?$(e,i,`linePrefix`)(t):i(t)}function i(e){return e===null||Y(e)?t(e):n(e)}}var al={continuation:{tokenize:sl},exit:cl,name:`blockQuote`,tokenize:ol};function ol(e,t,n){let r=this;return i;function i(t){if(t===62){let n=r.containerState;return n.open||=(e.enter(`blockQuote`,{_container:!0}),!0),e.enter(`blockQuotePrefix`),e.enter(`blockQuoteMarker`),e.consume(t),e.exit(`blockQuoteMarker`),a}return n(t)}function a(n){return Z(n)?(e.enter(`blockQuotePrefixWhitespace`),e.consume(n),e.exit(`blockQuotePrefixWhitespace`),e.exit(`blockQuotePrefix`),t):(e.exit(`blockQuotePrefix`),t(n))}}function sl(e,t,n){let r=this;return i;function i(t){return Z(t)?$(e,a,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):a(t)}function a(r){return e.attempt(al,t,n)(r)}}function cl(e){e.exit(`blockQuote`)}var ll={name:`characterEscape`,tokenize:ul};function ul(e,t,n){return r;function r(t){return e.enter(`characterEscape`),e.enter(`escapeMarker`),e.consume(t),e.exit(`escapeMarker`),i}function i(r){return zc(r)?(e.enter(`characterEscapeValue`),e.consume(r),e.exit(`characterEscapeValue`),e.exit(`characterEscape`),t):n(r)}}var dl={name:`characterReference`,tokenize:fl};function fl(e,t,n){let r=this,i=0,a,o;return s;function s(t){return e.enter(`characterReference`),e.enter(`characterReferenceMarker`),e.consume(t),e.exit(`characterReferenceMarker`),c}function c(t){return t===35?(e.enter(`characterReferenceMarkerNumeric`),e.consume(t),e.exit(`characterReferenceMarkerNumeric`),l):(e.enter(`characterReferenceValue`),a=31,o=Pc,u(t))}function l(t){return t===88||t===120?(e.enter(`characterReferenceMarkerHexadecimal`),e.consume(t),e.exit(`characterReferenceMarkerHexadecimal`),e.enter(`characterReferenceValue`),a=6,o=Rc,u):(e.enter(`characterReferenceValue`),a=7,o=Lc,u(t))}function u(s){if(s===59&&i){let i=e.exit(`characterReferenceValue`);return o===Pc&&!Tc(r.sliceSerialize(i))?n(s):(e.enter(`characterReferenceMarker`),e.consume(s),e.exit(`characterReferenceMarker`),e.exit(`characterReference`),t)}return o(s)&&i++<a?(e.consume(s),u):n(s)}}var pl={partial:!0,tokenize:gl},ml={concrete:!0,name:`codeFenced`,tokenize:hl};function hl(e,t,n){let r=this,i={partial:!0,tokenize:x},a=0,o=0,s;return c;function c(e){return l(e)}function l(t){let n=r.events[r.events.length-1];return a=n&&n[1].type===`linePrefix`?n[2].sliceSerialize(n[1],!0).length:0,s=t,e.enter(`codeFenced`),e.enter(`codeFencedFence`),e.enter(`codeFencedFenceSequence`),u(t)}function u(t){return t===s?(o++,e.consume(t),u):o<3?n(t):(e.exit(`codeFencedFenceSequence`),Z(t)?$(e,d,`whitespace`)(t):d(t))}function d(n){return n===null||Y(n)?(e.exit(`codeFencedFence`),r.interrupt?t(n):e.check(pl,h,b)(n)):(e.enter(`codeFencedFenceInfo`),e.enter(`chunkString`,{contentType:`string`}),f(n))}function f(t){return t===null||Y(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),d(t)):Z(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceInfo`),$(e,p,`whitespace`)(t)):t===96&&t===s?n(t):(e.consume(t),f)}function p(t){return t===null||Y(t)?d(t):(e.enter(`codeFencedFenceMeta`),e.enter(`chunkString`,{contentType:`string`}),m(t))}function m(t){return t===null||Y(t)?(e.exit(`chunkString`),e.exit(`codeFencedFenceMeta`),d(t)):t===96&&t===s?n(t):(e.consume(t),m)}function h(t){return e.attempt(i,b,g)(t)}function g(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),_}function _(t){return a>0&&Z(t)?$(e,v,`linePrefix`,a+1)(t):v(t)}function v(t){return t===null||Y(t)?e.check(pl,h,b)(t):(e.enter(`codeFlowValue`),y(t))}function y(t){return t===null||Y(t)?(e.exit(`codeFlowValue`),v(t)):(e.consume(t),y)}function b(n){return e.exit(`codeFenced`),t(n)}function x(e,t,n){let i=0;return a;function a(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c}function c(t){return e.enter(`codeFencedFence`),Z(t)?$(e,l,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):l(t)}function l(t){return t===s?(e.enter(`codeFencedFenceSequence`),u(t)):n(t)}function u(t){return t===s?(i++,e.consume(t),u):i>=o?(e.exit(`codeFencedFenceSequence`),Z(t)?$(e,d,`whitespace`)(t):d(t)):n(t)}function d(r){return r===null||Y(r)?(e.exit(`codeFencedFence`),t(r)):n(r)}}}function gl(e,t,n){let r=this;return i;function i(t){return t===null?n(t):(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}var _l={name:`codeIndented`,tokenize:yl},vl={partial:!0,tokenize:bl};function yl(e,t,n){let r=this;return i;function i(t){return e.enter(`codeIndented`),$(e,a,`linePrefix`,5)(t)}function a(e){let t=r.events[r.events.length-1];return t&&t[1].type===`linePrefix`&&t[2].sliceSerialize(t[1],!0).length>=4?o(e):n(e)}function o(t){return t===null?c(t):Y(t)?e.attempt(vl,o,c)(t):(e.enter(`codeFlowValue`),s(t))}function s(t){return t===null||Y(t)?(e.exit(`codeFlowValue`),o(t)):(e.consume(t),s)}function c(n){return e.exit(`codeIndented`),t(n)}}function bl(e,t,n){let r=this;return i;function i(t){return r.parser.lazy[r.now().line]?n(t):Y(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),i):$(e,a,`linePrefix`,5)(t)}function a(e){let a=r.events[r.events.length-1];return a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(e):Y(e)?i(e):n(e)}}var xl={name:`codeText`,previous:Cl,resolve:Sl,tokenize:wl};function Sl(e){let t=e.length-4,n=3,r,i;if((e[n][1].type===`lineEnding`||e[n][1].type===`space`)&&(e[t][1].type===`lineEnding`||e[t][1].type===`space`)){for(r=n;++r<t;)if(e[r][1].type===`codeTextData`){e[n][1].type=`codeTextPadding`,e[t][1].type=`codeTextPadding`,n+=2,t-=2;break}}for(r=n-1,t++;++r<=t;)i===void 0?r!==t&&e[r][1].type!==`lineEnding`&&(i=r):(r===t||e[r][1].type===`lineEnding`)&&(e[i][1].type=`codeTextData`,r!==i+2&&(e[i][1].end=e[r-1][1].end,e.splice(i+2,r-i-2),t-=r-i-2,r=i+2),i=void 0);return e}function Cl(e){return e!==96||this.events[this.events.length-1][1].type===`characterEscape`}function wl(e,t,n){let r=0,i,a;return o;function o(t){return e.enter(`codeText`),e.enter(`codeTextSequence`),s(t)}function s(t){return t===96?(e.consume(t),r++,s):(e.exit(`codeTextSequence`),c(t))}function c(t){return t===null?n(t):t===32?(e.enter(`space`),e.consume(t),e.exit(`space`),c):t===96?(a=e.enter(`codeTextSequence`),i=0,u(t)):Y(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),c):(e.enter(`codeTextData`),l(t))}function l(t){return t===null||t===32||t===96||Y(t)?(e.exit(`codeTextData`),c(t)):(e.consume(t),l)}function u(n){return n===96?(e.consume(n),i++,u):i===r?(e.exit(`codeTextSequence`),e.exit(`codeText`),t(n)):(a.type=`codeTextData`,l(n))}}var Tl=class{constructor(e){this.left=e?[...e]:[],this.right=[]}get(e){if(e<0||e>=this.left.length+this.right.length)throw RangeError("Cannot access index `"+e+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return e<this.left.length?this.left[e]:this.right[this.right.length-e+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(e,t){let n=t??1/0;return n<this.left.length?this.left.slice(e,n):e>this.left.length?this.right.slice(this.right.length-n+this.left.length,this.right.length-e+this.left.length).reverse():this.left.slice(e).concat(this.right.slice(this.right.length-n+this.left.length).reverse())}splice(e,t,n){let r=t||0;this.setCursor(Math.trunc(e));let i=this.right.splice(this.right.length-r,1/0);return n&&El(this.left,n),i.reverse()}pop(){return this.setCursor(1/0),this.left.pop()}push(e){this.setCursor(1/0),this.left.push(e)}pushMany(e){this.setCursor(1/0),El(this.left,e)}unshift(e){this.setCursor(0),this.right.push(e)}unshiftMany(e){this.setCursor(0),El(this.right,e.reverse())}setCursor(e){if(!(e===this.left.length||e>this.left.length&&this.right.length===0||e<0&&this.left.length===0))if(e<this.left.length){let t=this.left.splice(e,1/0);El(this.right,t.reverse())}else{let t=this.right.splice(this.left.length+this.right.length-e,1/0);El(this.left,t.reverse())}}};function El(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function Dl(e){let t={},n=-1,r,i,a,o,s,c,l,u=new Tl(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(r=u.get(n),n&&r[1].type===`chunkFlow`&&u.get(n-1)[1].type===`listItemPrefix`&&(c=r[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type===`lineEndingBlank`&&(a+=2),a<c.length&&c[a][1].type===`content`))for(;++a<c.length&&c[a][1].type!==`content`;)c[a][1].type===`chunkText`&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(r[0]===`enter`)r[1].contentType&&(Object.assign(t,Ol(u,n)),n=t[n],l=!0);else if(r[1]._container){for(a=n,i=void 0;a--;)if(o=u.get(a),o[1].type===`lineEnding`||o[1].type===`lineEndingBlank`)o[0]===`enter`&&(i&&(u.get(i)[1].type=`lineEndingBlank`),o[1].type=`lineEnding`,i=a);else if(!(o[1].type===`linePrefix`||o[1].type===`listItemIndent`))break;i&&(r[1].end={...u.get(i)[1].start},s=u.slice(i,n),s.unshift(r),u.splice(i,n-i+1,s))}}return Ec(e,0,1/0,u.slice(0)),!l}function Ol(e,t){let n=e.get(t)[1],r=e.get(t)[2],i=t-1,a=[],o=n._tokenizer;o||(o=r.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));let s=o.events,c=[],l={},u,d,f=-1,p=n,m=0,h=0,g=[h];for(;p;){for(;e.get(++i)[1]!==p;);a.push(i),p._tokenizer||(u=r.sliceStream(p),p.next||u.push(null),d&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),d=p,p=p.next}for(p=n;++f<s.length;)s[f][0]===`exit`&&s[f-1][0]===`enter`&&s[f][1].type===s[f-1][1].type&&s[f][1].start.line!==s[f][1].end.line&&(h=f+1,g.push(h),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):g.pop(),f=g.length;f--;){let t=s.slice(g[f],g[f+1]),n=a.pop();c.push([n,n+t.length-1]),e.splice(n,2,t)}for(c.reverse(),f=-1;++f<c.length;)l[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return l}var kl={resolve:jl,tokenize:Ml},Al={partial:!0,tokenize:Nl};function jl(e){return Dl(e),e}function Ml(e,t){let n;return r;function r(t){return e.enter(`content`),n=e.enter(`chunkContent`,{contentType:`content`}),i(t)}function i(t){return t===null?a(t):Y(t)?e.check(Al,o,a)(t):(e.consume(t),i)}function a(n){return e.exit(`chunkContent`),e.exit(`content`),t(n)}function o(t){return e.consume(t),e.exit(`chunkContent`),n.next=e.enter(`chunkContent`,{contentType:`content`,previous:n}),n=n.next,i}}function Nl(e,t,n){let r=this;return i;function i(t){return e.exit(`chunkContent`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),$(e,a,`linePrefix`)}function a(i){if(i===null||Y(i))return n(i);let a=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes(`codeIndented`)&&a&&a[1].type===`linePrefix`&&a[2].sliceSerialize(a[1],!0).length>=4?t(i):e.interrupt(r.parser.constructs.flow,n,t)(i)}}function Pl(e,t,n,r,i,a,o,s,c){let l=c||1/0,u=0;return d;function d(t){return t===60?(e.enter(r),e.enter(i),e.enter(a),e.consume(t),e.exit(a),f):t===null||t===32||t===41||Ic(t)?n(t):(e.enter(r),e.enter(o),e.enter(s),e.enter(`chunkString`,{contentType:`string`}),h(t))}function f(n){return n===62?(e.enter(a),e.consume(n),e.exit(a),e.exit(i),e.exit(r),t):(e.enter(s),e.enter(`chunkString`,{contentType:`string`}),p(n))}function p(t){return t===62?(e.exit(`chunkString`),e.exit(s),f(t)):t===null||t===60||Y(t)?n(t):(e.consume(t),t===92?m:p)}function m(t){return t===60||t===62||t===92?(e.consume(t),p):p(t)}function h(i){return!u&&(i===null||i===41||X(i))?(e.exit(`chunkString`),e.exit(s),e.exit(o),e.exit(r),t(i)):u<l&&i===40?(e.consume(i),u++,h):i===41?(e.consume(i),u--,h):i===null||i===32||i===40||Ic(i)?n(i):(e.consume(i),i===92?g:h)}function g(t){return t===40||t===41||t===92?(e.consume(t),h):h(t)}}function Fl(e,t,n,r,i,a){let o=this,s=0,c;return l;function l(t){return e.enter(r),e.enter(i),e.consume(t),e.exit(i),e.enter(a),u}function u(l){return s>999||l===null||l===91||l===93&&!c||l===94&&!s&&`_hiddenFootnoteSupport`in o.parser.constructs?n(l):l===93?(e.exit(a),e.enter(i),e.consume(l),e.exit(i),e.exit(r),t):Y(l)?(e.enter(`lineEnding`),e.consume(l),e.exit(`lineEnding`),u):(e.enter(`chunkString`,{contentType:`string`}),d(l))}function d(t){return t===null||t===91||t===93||Y(t)||s++>999?(e.exit(`chunkString`),u(t)):(e.consume(t),c||=!Z(t),t===92?f:d)}function f(t){return t===91||t===92||t===93?(e.consume(t),s++,d):d(t)}}function Il(e,t,n,r,i,a){let o;return s;function s(t){return t===34||t===39||t===40?(e.enter(r),e.enter(i),e.consume(t),e.exit(i),o=t===40?41:t,c):n(t)}function c(n){return n===o?(e.enter(i),e.consume(n),e.exit(i),e.exit(r),t):(e.enter(a),l(n))}function l(t){return t===o?(e.exit(a),c(o)):t===null?n(t):Y(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),$(e,l,`linePrefix`)):(e.enter(`chunkString`,{contentType:`string`}),u(t))}function u(t){return t===o||t===null||Y(t)?(e.exit(`chunkString`),l(t)):(e.consume(t),t===92?d:u)}function d(t){return t===o||t===92?(e.consume(t),u):u(t)}}function Ll(e,t){let n;return r;function r(i){return Y(i)?(e.enter(`lineEnding`),e.consume(i),e.exit(`lineEnding`),n=!0,r):Z(i)?$(e,r,n?`linePrefix`:`lineSuffix`)(i):t(i)}}var Rl={name:`definition`,tokenize:Bl},zl={partial:!0,tokenize:Vl};function Bl(e,t,n){let r=this,i;return a;function a(t){return e.enter(`definition`),o(t)}function o(t){return Fl.call(r,e,s,n,`definitionLabel`,`definitionLabelMarker`,`definitionLabelString`)(t)}function s(t){return i=Nc(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),c):n(t)}function c(t){return X(t)?Ll(e,l)(t):l(t)}function l(t){return Pl(e,u,n,`definitionDestination`,`definitionDestinationLiteral`,`definitionDestinationLiteralMarker`,`definitionDestinationRaw`,`definitionDestinationString`)(t)}function u(t){return e.attempt(zl,d,d)(t)}function d(t){return Z(t)?$(e,f,`whitespace`)(t):f(t)}function f(a){return a===null||Y(a)?(e.exit(`definition`),r.parser.defined.push(i),t(a)):n(a)}}function Vl(e,t,n){return r;function r(t){return X(t)?Ll(e,i)(t):n(t)}function i(t){return Il(e,a,n,`definitionTitle`,`definitionTitleMarker`,`definitionTitleString`)(t)}function a(t){return Z(t)?$(e,o,`whitespace`)(t):o(t)}function o(e){return e===null||Y(e)?t(e):n(e)}}var Hl={name:`hardBreakEscape`,tokenize:Ul};function Ul(e,t,n){return r;function r(t){return e.enter(`hardBreakEscape`),e.consume(t),i}function i(r){return Y(r)?(e.exit(`hardBreakEscape`),t(r)):n(r)}}var Wl={name:`headingAtx`,resolve:Gl,tokenize:Kl};function Gl(e,t){let n=e.length-2,r=3,i,a;return e[r][1].type===`whitespace`&&(r+=2),n-2>r&&e[n][1].type===`whitespace`&&(n-=2),e[n][1].type===`atxHeadingSequence`&&(r===n-1||n-4>r&&e[n-2][1].type===`whitespace`)&&(n-=r+1===n?2:4),n>r&&(i={type:`atxHeadingText`,start:e[r][1].start,end:e[n][1].end},a={type:`chunkText`,start:e[r][1].start,end:e[n][1].end,contentType:`text`},Ec(e,r,n-r+1,[[`enter`,i,t],[`enter`,a,t],[`exit`,a,t],[`exit`,i,t]])),e}function Kl(e,t,n){let r=0;return i;function i(t){return e.enter(`atxHeading`),a(t)}function a(t){return e.enter(`atxHeadingSequence`),o(t)}function o(t){return t===35&&r++<6?(e.consume(t),o):t===null||X(t)?(e.exit(`atxHeadingSequence`),s(t)):n(t)}function s(n){return n===35?(e.enter(`atxHeadingSequence`),c(n)):n===null||Y(n)?(e.exit(`atxHeading`),t(n)):Z(n)?$(e,s,`whitespace`)(n):(e.enter(`atxHeadingText`),l(n))}function c(t){return t===35?(e.consume(t),c):(e.exit(`atxHeadingSequence`),s(t))}function l(t){return t===null||t===35||X(t)?(e.exit(`atxHeadingText`),s(t)):(e.consume(t),l)}}var ql=`address.article.aside.base.basefont.blockquote.body.caption.center.col.colgroup.dd.details.dialog.dir.div.dl.dt.fieldset.figcaption.figure.footer.form.frame.frameset.h1.h2.h3.h4.h5.h6.head.header.hr.html.iframe.legend.li.link.main.menu.menuitem.nav.noframes.ol.optgroup.option.p.param.search.section.summary.table.tbody.td.tfoot.th.thead.title.tr.track.ul`.split(`.`),Jl=[`pre`,`script`,`style`,`textarea`],Yl={concrete:!0,name:`htmlFlow`,resolveTo:Ql,tokenize:$l},Xl={partial:!0,tokenize:tu},Zl={partial:!0,tokenize:eu};function Ql(e){let t=e.length;for(;t--&&!(e[t][0]===`enter`&&e[t][1].type===`htmlFlow`););return t>1&&e[t-2][1].type===`linePrefix`&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function $l(e,t,n){let r=this,i,a,o,s,c;return l;function l(e){return u(e)}function u(t){return e.enter(`htmlFlow`),e.enter(`htmlFlowData`),e.consume(t),d}function d(s){return s===33?(e.consume(s),f):s===47?(e.consume(s),a=!0,h):s===63?(e.consume(s),i=3,r.interrupt?t:se):J(s)?(e.consume(s),o=String.fromCharCode(s),g):n(s)}function f(a){return a===45?(e.consume(a),i=2,p):a===91?(e.consume(a),i=5,s=0,m):J(a)?(e.consume(a),i=4,r.interrupt?t:se):n(a)}function p(i){return i===45?(e.consume(i),r.interrupt?t:se):n(i)}function m(i){return i===`CDATA[`.charCodeAt(s++)?(e.consume(i),s===6?r.interrupt?t:D:m):n(i)}function h(t){return J(t)?(e.consume(t),o=String.fromCharCode(t),g):n(t)}function g(s){if(s===null||s===47||s===62||X(s)){let c=s===47,l=o.toLowerCase();return!c&&!a&&Jl.includes(l)?(i=1,r.interrupt?t(s):D(s)):ql.includes(o.toLowerCase())?(i=6,c?(e.consume(s),_):r.interrupt?t(s):D(s)):(i=7,r.interrupt&&!r.parser.lazy[r.now().line]?n(s):a?v(s):y(s))}return s===45||Pc(s)?(e.consume(s),o+=String.fromCharCode(s),g):n(s)}function _(i){return i===62?(e.consume(i),r.interrupt?t:D):n(i)}function v(t){return Z(t)?(e.consume(t),v):E(t)}function y(t){return t===47?(e.consume(t),E):t===58||t===95||J(t)?(e.consume(t),b):Z(t)?(e.consume(t),y):E(t)}function b(t){return t===45||t===46||t===58||t===95||Pc(t)?(e.consume(t),b):x(t)}function x(t){return t===61?(e.consume(t),S):Z(t)?(e.consume(t),x):y(t)}function S(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),c=t,C):Z(t)?(e.consume(t),S):w(t)}function C(t){return t===c?(e.consume(t),c=null,T):t===null||Y(t)?n(t):(e.consume(t),C)}function w(t){return t===null||t===34||t===39||t===47||t===60||t===61||t===62||t===96||X(t)?x(t):(e.consume(t),w)}function T(e){return e===47||e===62||Z(e)?y(e):n(e)}function E(t){return t===62?(e.consume(t),ee):n(t)}function ee(t){return t===null||Y(t)?D(t):Z(t)?(e.consume(t),ee):n(t)}function D(t){return t===45&&i===2?(e.consume(t),ie):t===60&&i===1?(e.consume(t),ae):t===62&&i===4?(e.consume(t),ce):t===63&&i===3?(e.consume(t),se):t===93&&i===5?(e.consume(t),oe):Y(t)&&(i===6||i===7)?(e.exit(`htmlFlowData`),e.check(Xl,le,te)(t)):t===null||Y(t)?(e.exit(`htmlFlowData`),te(t)):(e.consume(t),D)}function te(t){return e.check(Zl,ne,le)(t)}function ne(t){return e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),re}function re(t){return t===null||Y(t)?te(t):(e.enter(`htmlFlowData`),D(t))}function ie(t){return t===45?(e.consume(t),se):D(t)}function ae(t){return t===47?(e.consume(t),o=``,O):D(t)}function O(t){if(t===62){let n=o.toLowerCase();return Jl.includes(n)?(e.consume(t),ce):D(t)}return J(t)&&o.length<8?(e.consume(t),o+=String.fromCharCode(t),O):D(t)}function oe(t){return t===93?(e.consume(t),se):D(t)}function se(t){return t===62?(e.consume(t),ce):t===45&&i===2?(e.consume(t),se):D(t)}function ce(t){return t===null||Y(t)?(e.exit(`htmlFlowData`),le(t)):(e.consume(t),ce)}function le(n){return e.exit(`htmlFlow`),t(n)}}function eu(e,t,n){let r=this;return i;function i(t){return Y(t)?(e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),a):n(t)}function a(e){return r.parser.lazy[r.now().line]?n(e):t(e)}}function tu(e,t,n){return r;function r(r){return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),e.attempt(rl,t,n)}}var nu={name:`htmlText`,tokenize:ru};function ru(e,t,n){let r=this,i,a,o;return s;function s(t){return e.enter(`htmlText`),e.enter(`htmlTextData`),e.consume(t),c}function c(t){return t===33?(e.consume(t),l):t===47?(e.consume(t),x):t===63?(e.consume(t),y):J(t)?(e.consume(t),w):n(t)}function l(t){return t===45?(e.consume(t),u):t===91?(e.consume(t),a=0,m):J(t)?(e.consume(t),v):n(t)}function u(t){return t===45?(e.consume(t),p):n(t)}function d(t){return t===null?n(t):t===45?(e.consume(t),f):Y(t)?(o=d,ae(t)):(e.consume(t),d)}function f(t){return t===45?(e.consume(t),p):d(t)}function p(e){return e===62?ie(e):e===45?f(e):d(e)}function m(t){return t===`CDATA[`.charCodeAt(a++)?(e.consume(t),a===6?h:m):n(t)}function h(t){return t===null?n(t):t===93?(e.consume(t),g):Y(t)?(o=h,ae(t)):(e.consume(t),h)}function g(t){return t===93?(e.consume(t),_):h(t)}function _(t){return t===62?ie(t):t===93?(e.consume(t),_):h(t)}function v(t){return t===null||t===62?ie(t):Y(t)?(o=v,ae(t)):(e.consume(t),v)}function y(t){return t===null?n(t):t===63?(e.consume(t),b):Y(t)?(o=y,ae(t)):(e.consume(t),y)}function b(e){return e===62?ie(e):y(e)}function x(t){return J(t)?(e.consume(t),S):n(t)}function S(t){return t===45||Pc(t)?(e.consume(t),S):C(t)}function C(t){return Y(t)?(o=C,ae(t)):Z(t)?(e.consume(t),C):ie(t)}function w(t){return t===45||Pc(t)?(e.consume(t),w):t===47||t===62||X(t)?T(t):n(t)}function T(t){return t===47?(e.consume(t),ie):t===58||t===95||J(t)?(e.consume(t),E):Y(t)?(o=T,ae(t)):Z(t)?(e.consume(t),T):ie(t)}function E(t){return t===45||t===46||t===58||t===95||Pc(t)?(e.consume(t),E):ee(t)}function ee(t){return t===61?(e.consume(t),D):Y(t)?(o=ee,ae(t)):Z(t)?(e.consume(t),ee):T(t)}function D(t){return t===null||t===60||t===61||t===62||t===96?n(t):t===34||t===39?(e.consume(t),i=t,te):Y(t)?(o=D,ae(t)):Z(t)?(e.consume(t),D):(e.consume(t),ne)}function te(t){return t===i?(e.consume(t),i=void 0,re):t===null?n(t):Y(t)?(o=te,ae(t)):(e.consume(t),te)}function ne(t){return t===null||t===34||t===39||t===60||t===61||t===96?n(t):t===47||t===62||X(t)?T(t):(e.consume(t),ne)}function re(e){return e===47||e===62||X(e)?T(e):n(e)}function ie(r){return r===62?(e.consume(r),e.exit(`htmlTextData`),e.exit(`htmlText`),t):n(r)}function ae(t){return e.exit(`htmlTextData`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),O}function O(t){return Z(t)?$(e,oe,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):oe(t)}function oe(t){return e.enter(`htmlTextData`),o(t)}}var iu={name:`labelEnd`,resolveAll:cu,resolveTo:lu,tokenize:uu},au={tokenize:du},ou={tokenize:fu},su={tokenize:pu};function cu(e){let t=-1,n=[];for(;++t<e.length;){let r=e[t][1];if(n.push(e[t]),r.type===`labelImage`||r.type===`labelLink`||r.type===`labelEnd`){let e=r.type===`labelImage`?4:2;r.type=`data`,t+=e}}return e.length!==n.length&&Ec(e,0,e.length,n),e}function lu(e,t){let n=e.length,r=0,i,a,o,s;for(;n--;)if(i=e[n][1],a){if(i.type===`link`||i.type===`labelLink`&&i._inactive)break;e[n][0]===`enter`&&i.type===`labelLink`&&(i._inactive=!0)}else if(o){if(e[n][0]===`enter`&&(i.type===`labelImage`||i.type===`labelLink`)&&!i._balanced&&(a=n,i.type!==`labelLink`)){r=2;break}}else i.type===`labelEnd`&&(o=n);let c={type:e[a][1].type===`labelLink`?`link`:`image`,start:{...e[a][1].start},end:{...e[e.length-1][1].end}},l={type:`label`,start:{...e[a][1].start},end:{...e[o][1].end}},u={type:`labelText`,start:{...e[a+r+2][1].end},end:{...e[o-2][1].start}};return s=[[`enter`,c,t],[`enter`,l,t]],s=Dc(s,e.slice(a+1,a+r+3)),s=Dc(s,[[`enter`,u,t]]),s=Dc(s,Xc(t.parser.constructs.insideSpan.null,e.slice(a+r+4,o-3),t)),s=Dc(s,[[`exit`,u,t],e[o-2],e[o-1],[`exit`,l,t]]),s=Dc(s,e.slice(o+1)),s=Dc(s,[[`exit`,c,t]]),Ec(e,a,e.length,s),e}function uu(e,t,n){let r=this,i=r.events.length,a,o;for(;i--;)if((r.events[i][1].type===`labelImage`||r.events[i][1].type===`labelLink`)&&!r.events[i][1]._balanced){a=r.events[i][1];break}return s;function s(t){return a?a._inactive?d(t):(o=r.parser.defined.includes(Nc(r.sliceSerialize({start:a.end,end:r.now()}))),e.enter(`labelEnd`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelEnd`),c):n(t)}function c(t){return t===40?e.attempt(au,u,o?u:d)(t):t===91?e.attempt(ou,u,o?l:d)(t):o?u(t):d(t)}function l(t){return e.attempt(su,u,d)(t)}function u(e){return t(e)}function d(e){return a._balanced=!0,n(e)}}function du(e,t,n){return r;function r(t){return e.enter(`resource`),e.enter(`resourceMarker`),e.consume(t),e.exit(`resourceMarker`),i}function i(t){return X(t)?Ll(e,a)(t):a(t)}function a(t){return t===41?u(t):Pl(e,o,s,`resourceDestination`,`resourceDestinationLiteral`,`resourceDestinationLiteralMarker`,`resourceDestinationRaw`,`resourceDestinationString`,32)(t)}function o(t){return X(t)?Ll(e,c)(t):u(t)}function s(e){return n(e)}function c(t){return t===34||t===39||t===40?Il(e,l,n,`resourceTitle`,`resourceTitleMarker`,`resourceTitleString`)(t):u(t)}function l(t){return X(t)?Ll(e,u)(t):u(t)}function u(r){return r===41?(e.enter(`resourceMarker`),e.consume(r),e.exit(`resourceMarker`),e.exit(`resource`),t):n(r)}}function fu(e,t,n){let r=this;return i;function i(t){return Fl.call(r,e,a,o,`reference`,`referenceMarker`,`referenceString`)(t)}function a(e){return r.parser.defined.includes(Nc(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?t(e):n(e)}function o(e){return n(e)}}function pu(e,t,n){return r;function r(t){return e.enter(`reference`),e.enter(`referenceMarker`),e.consume(t),e.exit(`referenceMarker`),i}function i(r){return r===93?(e.enter(`referenceMarker`),e.consume(r),e.exit(`referenceMarker`),e.exit(`reference`),t):n(r)}}var mu={name:`labelStartImage`,resolveAll:iu.resolveAll,tokenize:hu};function hu(e,t,n){let r=this;return i;function i(t){return e.enter(`labelImage`),e.enter(`labelImageMarker`),e.consume(t),e.exit(`labelImageMarker`),a}function a(t){return t===91?(e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelImage`),o):n(t)}function o(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var gu={name:`labelStartLink`,resolveAll:iu.resolveAll,tokenize:_u};function _u(e,t,n){let r=this;return i;function i(t){return e.enter(`labelLink`),e.enter(`labelMarker`),e.consume(t),e.exit(`labelMarker`),e.exit(`labelLink`),a}function a(e){return e===94&&`_hiddenFootnoteSupport`in r.parser.constructs?n(e):t(e)}}var vu={name:`lineEnding`,tokenize:yu};function yu(e,t){return n;function n(n){return e.enter(`lineEnding`),e.consume(n),e.exit(`lineEnding`),$(e,t,`linePrefix`)}}var bu={name:`thematicBreak`,tokenize:xu};function xu(e,t,n){let r=0,i;return a;function a(t){return e.enter(`thematicBreak`),o(t)}function o(e){return i=e,s(e)}function s(a){return a===i?(e.enter(`thematicBreakSequence`),c(a)):r>=3&&(a===null||Y(a))?(e.exit(`thematicBreak`),t(a)):n(a)}function c(t){return t===i?(e.consume(t),r++,c):(e.exit(`thematicBreakSequence`),Z(t)?$(e,s,`whitespace`)(t):s(t))}}var Su={continuation:{tokenize:Eu},exit:Ou,name:`list`,tokenize:Tu},Cu={partial:!0,tokenize:ku},wu={partial:!0,tokenize:Du};function Tu(e,t,n){let r=this,i=r.events[r.events.length-1],a=i&&i[1].type===`linePrefix`?i[2].sliceSerialize(i[1],!0).length:0,o=0;return s;function s(t){let i=r.containerState.type||(t===42||t===43||t===45?`listUnordered`:`listOrdered`);if(i===`listUnordered`?!r.containerState.marker||t===r.containerState.marker:Lc(t)){if(r.containerState.type||(r.containerState.type=i,e.enter(i,{_container:!0})),i===`listUnordered`)return e.enter(`listItemPrefix`),t===42||t===45?e.check(bu,n,l)(t):l(t);if(!r.interrupt||t===49)return e.enter(`listItemPrefix`),e.enter(`listItemValue`),c(t)}return n(t)}function c(t){return Lc(t)&&++o<10?(e.consume(t),c):(!r.interrupt||o<2)&&(r.containerState.marker?t===r.containerState.marker:t===41||t===46)?(e.exit(`listItemValue`),l(t)):n(t)}function l(t){return e.enter(`listItemMarker`),e.consume(t),e.exit(`listItemMarker`),r.containerState.marker=r.containerState.marker||t,e.check(rl,r.interrupt?n:u,e.attempt(Cu,f,d))}function u(e){return r.containerState.initialBlankLine=!0,a++,f(e)}function d(t){return Z(t)?(e.enter(`listItemPrefixWhitespace`),e.consume(t),e.exit(`listItemPrefixWhitespace`),f):n(t)}function f(n){return r.containerState.size=a+r.sliceSerialize(e.exit(`listItemPrefix`),!0).length,t(n)}}function Eu(e,t,n){let r=this;return r.containerState._closeFlow=void 0,e.check(rl,i,a);function i(n){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,$(e,t,`listItemIndent`,r.containerState.size+1)(n)}function a(n){return r.containerState.furtherBlankLines||!Z(n)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,o(n)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,e.attempt(wu,t,o)(n))}function o(i){return r.containerState._closeFlow=!0,r.interrupt=void 0,$(e,e.attempt(Su,t,n),`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(i)}}function Du(e,t,n){let r=this;return $(e,i,`listItemIndent`,r.containerState.size+1);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`listItemIndent`&&i[2].sliceSerialize(i[1],!0).length===r.containerState.size?t(e):n(e)}}function Ou(e){e.exit(this.containerState.type)}function ku(e,t,n){let r=this;return $(e,i,`listItemPrefixWhitespace`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:5);function i(e){let i=r.events[r.events.length-1];return!Z(e)&&i&&i[1].type===`listItemPrefixWhitespace`?t(e):n(e)}}var Au={name:`setextUnderline`,resolveTo:ju,tokenize:Mu};function ju(e,t){let n=e.length,r,i,a;for(;n--;)if(e[n][0]===`enter`){if(e[n][1].type===`content`){r=n;break}e[n][1].type===`paragraph`&&(i=n)}else e[n][1].type===`content`&&e.splice(n,1),!a&&e[n][1].type===`definition`&&(a=n);let o={type:`setextHeading`,start:{...e[r][1].start},end:{...e[e.length-1][1].end}};return e[i][1].type=`setextHeadingText`,a?(e.splice(i,0,[`enter`,o,t]),e.splice(a+1,0,[`exit`,e[r][1],t]),e[r][1].end={...e[a][1].end}):e[r][1]=o,e.push([`exit`,o,t]),e}function Mu(e,t,n){let r=this,i;return a;function a(t){let a=r.events.length,s;for(;a--;)if(r.events[a][1].type!==`lineEnding`&&r.events[a][1].type!==`linePrefix`&&r.events[a][1].type!==`content`){s=r.events[a][1].type===`paragraph`;break}return!r.parser.lazy[r.now().line]&&(r.interrupt||s)?(e.enter(`setextHeadingLine`),i=t,o(t)):n(t)}function o(t){return e.enter(`setextHeadingLineSequence`),s(t)}function s(t){return t===i?(e.consume(t),s):(e.exit(`setextHeadingLineSequence`),Z(t)?$(e,c,`lineSuffix`)(t):c(t))}function c(r){return r===null||Y(r)?(e.exit(`setextHeadingLine`),t(r)):n(r)}}var Nu={tokenize:Pu};function Pu(e){let t=this,n=e.attempt(rl,r,e.attempt(this.parser.constructs.flowInitial,i,$(e,e.attempt(this.parser.constructs.flow,i,e.attempt(kl,i)),`linePrefix`)));return n;function r(r){if(r===null){e.consume(r);return}return e.enter(`lineEndingBlank`),e.consume(r),e.exit(`lineEndingBlank`),t.currentConstruct=void 0,n}function i(r){if(r===null){e.consume(r);return}return e.enter(`lineEnding`),e.consume(r),e.exit(`lineEnding`),t.currentConstruct=void 0,n}}var Fu={resolveAll:zu()},Iu=Ru(`string`),Lu=Ru(`text`);function Ru(e){return{resolveAll:zu(e===`text`?Bu:void 0),tokenize:t};function t(t){let n=this,r=this.parser.constructs[e],i=t.attempt(r,a,o);return a;function a(e){return c(e)?i(e):o(e)}function o(e){if(e===null){t.consume(e);return}return t.enter(`data`),t.consume(e),s}function s(e){return c(e)?(t.exit(`data`),i(e)):(t.consume(e),s)}function c(e){if(e===null)return!0;let t=r[e],i=-1;if(t)for(;++i<t.length;){let e=t[i];if(!e.previous||e.previous.call(n,n.previous))return!0}return!1}}}function zu(e){return t;function t(t,n){let r=-1,i;for(;++r<=t.length;)i===void 0?t[r]&&t[r][1].type===`data`&&(i=r,r++):(!t[r]||t[r][1].type!==`data`)&&(r!==i+2&&(t[i][1].end=t[r-1][1].end,t.splice(i+2,r-i-2),r=i+2),i=void 0);return e?e(t,n):t}}function Bu(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type===`lineEnding`)&&e[n-1][1].type===`data`){let r=e[n-1][1],i=t.sliceStream(r),a=i.length,o=-1,s=0,c;for(;a--;){let e=i[a];if(typeof e==`string`){for(o=e.length;e.charCodeAt(o-1)===32;)s++,o--;if(o)break;o=-1}else if(e===-2)c=!0,s++;else if(e!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(s=0),s){let i={type:n===e.length||c||s<2?`lineSuffix`:`hardBreakTrailing`,start:{_bufferIndex:a?o:r.start._bufferIndex+o,_index:r.start._index+a,line:r.end.line,column:r.end.column-s,offset:r.end.offset-s},end:{...r.end}};r.end={...i.start},r.start.offset===r.end.offset?Object.assign(r,i):(e.splice(n,0,[`enter`,i,t],[`exit`,i,t]),n+=2)}n++}return e}var Vu=s({attentionMarkers:()=>Yu,contentInitial:()=>Uu,disable:()=>Xu,document:()=>Hu,flow:()=>Gu,flowInitial:()=>Wu,insideSpan:()=>Ju,string:()=>Ku,text:()=>qu}),Hu={42:Su,43:Su,45:Su,48:Su,49:Su,50:Su,51:Su,52:Su,53:Su,54:Su,55:Su,56:Su,57:Su,62:al},Uu={91:Rl},Wu={[-2]:_l,[-1]:_l,32:_l},Gu={35:Wl,42:bu,45:[Au,bu],60:Yl,61:Au,95:bu,96:ml,126:ml},Ku={38:dl,92:ll},qu={[-5]:vu,[-4]:vu,[-3]:vu,33:mu,38:dl,42:Zc,60:[tl,nu],91:gu,92:[Hl,ll],93:iu,95:Zc,96:xl},Ju={null:[Zc,Fu]},Yu={null:[42,95]},Xu={null:[]};function Zu(e,t,n){let r={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0},i={},a=[],o=[],s=[],c={attempt:C(x),check:C(S),consume:v,enter:y,exit:b,interrupt:C(S,{interrupt:!0})},l={code:null,containerState:{},defineSkip:h,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:d},u=t.tokenize.call(l,c);return t.resolveAll&&a.push(t),l;function d(e){return o=Dc(o,e),g(),o[o.length-1]===null?(w(t,0),l.events=Xc(a,l.events,l),l.events):[]}function f(e,t){return $u(p(e),t)}function p(e){return Qu(o,e)}function m(){let{_bufferIndex:e,_index:t,line:n,column:i,offset:a}=r;return{_bufferIndex:e,_index:t,line:n,column:i,offset:a}}function h(e){i[e.line]=e.column,E()}function g(){let e;for(;r._index<o.length;){let t=o[r._index];if(typeof t==`string`)for(e=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===e&&r._bufferIndex<t.length;)_(t.charCodeAt(r._bufferIndex));else _(t)}}function _(e){u=u(e)}function v(e){Y(e)?(r.line++,r.column=1,r.offset+=e===-3?2:1,E()):e!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===o[r._index].length&&(r._bufferIndex=-1,r._index++)),l.previous=e}function y(e,t){let n=t||{};return n.type=e,n.start=m(),l.events.push([`enter`,n,l]),s.push(n),n}function b(e){let t=s.pop();return t.end=m(),l.events.push([`exit`,t,l]),t}function x(e,t){w(e,t.from)}function S(e,t){t.restore()}function C(e,t){return n;function n(n,r,i){let a,o,s,u;return Array.isArray(n)?f(n):`tokenize`in n?f([n]):d(n);function d(e){return t;function t(t){let n=t!==null&&e[t],r=t!==null&&e.null;return f([...Array.isArray(n)?n:n?[n]:[],...Array.isArray(r)?r:r?[r]:[]])(t)}}function f(e){return a=e,o=0,e.length===0?i:p(e[o])}function p(e){return n;function n(n){return u=T(),s=e,e.partial||(l.currentConstruct=e),e.name&&l.parser.constructs.disable.null.includes(e.name)?h(n):e.tokenize.call(t?Object.assign(Object.create(l),t):l,c,m,h)(n)}}function m(t){return e(s,u),r}function h(e){return u.restore(),++o<a.length?p(a[o]):i}}}function w(e,t){e.resolveAll&&!a.includes(e)&&a.push(e),e.resolve&&Ec(l.events,t,l.events.length-t,e.resolve(l.events.slice(t),l)),e.resolveTo&&(l.events=e.resolveTo(l.events,l))}function T(){let e=m(),t=l.previous,n=l.currentConstruct,i=l.events.length,a=Array.from(s);return{from:i,restore:o};function o(){r=e,l.previous=t,l.currentConstruct=n,l.events.length=i,s=a,E()}}function E(){r.line in i&&r.column<2&&(r.column=i[r.line],r.offset+=i[r.line]-1)}}function Qu(e,t){let n=t.start._index,r=t.start._bufferIndex,i=t.end._index,a=t.end._bufferIndex,o;if(n===i)o=[e[n].slice(r,a)];else{if(o=e.slice(n,i),r>-1){let e=o[0];typeof e==`string`?o[0]=e.slice(r):o.shift()}a>0&&o.push(e[i].slice(0,a))}return o}function $u(e,t){let n=-1,r=[],i;for(;++n<e.length;){let a=e[n],o;if(typeof a==`string`)o=a;else switch(a){case-5:o=`\r`;break;case-4:o=`
`;break;case-3:o=`\r
`;break;case-2:o=t?` `:`	`;break;case-1:if(!t&&i)continue;o=` `;break;default:o=String.fromCharCode(a)}i=a===-2,r.push(o)}return r.join(``)}function ed(e){let t={constructs:kc([Vu,...(e||{}).extensions||[]]),content:n(Uc),defined:[],document:n(Gc),flow:n(Nu),lazy:{},string:n(Iu),text:n(Lu)};return t;function n(e){return n;function n(n){return Zu(t,e,n)}}}function td(e){for(;!Dl(e););return e}var nd=/[\0\t\n\r]/g;function rd(){let e=1,t=``,n=!0,r;return i;function i(i,a,o){let s=[],c,l,u,d,f;for(i=t+(typeof i==`string`?i.toString():new TextDecoder(a||void 0).decode(i)),u=0,t=``,n&&=(i.charCodeAt(0)===65279&&u++,void 0);u<i.length;){if(nd.lastIndex=u,c=nd.exec(i),d=c&&c.index!==void 0?c.index:i.length,f=i.charCodeAt(d),!c){t=i.slice(u);break}if(f===10&&u===d&&r)s.push(-3),r=void 0;else switch(r&&=(s.push(-5),void 0),u<d&&(s.push(i.slice(u,d)),e+=d-u),f){case 0:s.push(65533),e++;break;case 9:for(l=Math.ceil(e/4)*4,s.push(-2);e++<l;)s.push(-1);break;case 10:s.push(-4),e=1;break;default:r=!0,e=1}u=d+1}return o&&(r&&s.push(-5),t&&s.push(t),s.push(null)),s}}var id=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function ad(e){return e.replace(id,od)}function od(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){let e=n.charCodeAt(1),t=e===120||e===88;return Mc(n.slice(t?2:1),t?16:10)}return Tc(n)||e}var sd={}.hasOwnProperty;function cd(e,t,n){return typeof t!=`string`&&(n=t,t=void 0),ld(n)(td(ed(n).document().write(rd()(e,t,!0))))}function ld(e){let t={transforms:[],canContainEols:[`emphasis`,`fragment`,`heading`,`paragraph`,`strong`],enter:{autolink:a(Te),autolinkProtocol:T,autolinkEmail:T,atxHeading:a(xe),blockQuote:a(ge),characterEscape:T,characterReference:T,codeFenced:a(_e),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(_e,o),codeText:a(ve,o),codeTextData:T,data:T,codeFlowValue:T,definition:a(ye),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(be),hardBreakEscape:a(Se),hardBreakTrailing:a(Se),htmlFlow:a(Ce,o),htmlFlowData:T,htmlText:a(Ce,o),htmlTextData:T,image:a(we),label:o,link:a(Te),listItem:a(De),listItemValue:f,listOrdered:a(Ee,d),listUnordered:a(Ee),paragraph:a(Oe),reference:k,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(xe),strong:a(ke),thematicBreak:a(je)},exit:{atxHeading:c(),atxHeadingSequence:x,autolink:c(),autolinkEmail:he,autolinkProtocol:me,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:de,characterReferenceMarkerNumeric:de,characterReferenceValue:fe,characterReference:pe,codeFenced:c(g),codeFencedFence:h,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(_),codeText:c(re),codeTextData:E,data:E,definition:c(),definitionDestinationString:b,definitionLabelString:v,definitionTitleString:y,emphasis:c(),hardBreakEscape:c(D),hardBreakTrailing:c(D),htmlFlow:c(te),htmlFlowData:E,htmlText:c(ne),htmlTextData:E,image:c(ae),label:oe,labelText:O,lineEnding:ee,link:c(ie),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:ue,resourceDestinationString:se,resourceTitleString:ce,resource:le,setextHeading:c(w),setextHeadingLineSequence:C,setextHeadingText:S,strong:c(),thematicBreak:c()}};dd(t,(e||{}).mdastExtensions||[]);let n={};return r;function r(e){let r={type:`root`,children:[]},a={stack:[r],tokenStack:[],config:t,enter:s,exit:l,buffer:o,resume:u,data:n},c=[],d=-1;for(;++d<e.length;)(e[d][1].type===`listOrdered`||e[d][1].type===`listUnordered`)&&(e[d][0]===`enter`?c.push(d):d=i(e,c.pop(),d));for(d=-1;++d<e.length;){let n=t[e[d][0]];sd.call(n,e[d][1].type)&&n[e[d][1].type].call(Object.assign({sliceSerialize:e[d][2].sliceSerialize},a),e[d][1])}if(a.tokenStack.length>0){let e=a.tokenStack[a.tokenStack.length-1];(e[1]||pd).call(a,void 0,e[0])}for(r.position={start:ud(e.length>0?e[0][1].start:{line:1,column:1,offset:0}),end:ud(e.length>0?e[e.length-2][1].end:{line:1,column:1,offset:0})},d=-1;++d<t.transforms.length;)r=t.transforms[d](r)||r;return r}function i(e,t,n){let r=t-1,i=-1,a=!1,o,s,c,l;for(;++r<=n;){let t=e[r];switch(t[1].type){case`listUnordered`:case`listOrdered`:case`blockQuote`:t[0]===`enter`?i++:i--,l=void 0;break;case`lineEndingBlank`:t[0]===`enter`&&(o&&!l&&!i&&!c&&(c=r),l=void 0);break;case`linePrefix`:case`listItemValue`:case`listItemMarker`:case`listItemPrefix`:case`listItemPrefixWhitespace`:break;default:l=void 0}if(!i&&t[0]===`enter`&&t[1].type===`listItemPrefix`||i===-1&&t[0]===`exit`&&(t[1].type===`listUnordered`||t[1].type===`listOrdered`)){if(o){let i=r;for(s=void 0;i--;){let t=e[i];if(t[1].type===`lineEnding`||t[1].type===`lineEndingBlank`){if(t[0]===`exit`)continue;s&&(e[s][1].type=`lineEndingBlank`,a=!0),t[1].type=`lineEnding`,s=i}else if(!(t[1].type===`linePrefix`||t[1].type===`blockQuotePrefix`||t[1].type===`blockQuotePrefixWhitespace`||t[1].type===`blockQuoteMarker`||t[1].type===`listItemIndent`))break}c&&(!s||c<s)&&(o._spread=!0),o.end=Object.assign({},s?e[s][1].start:t[1].end),e.splice(s||r,0,[`exit`,o,t[2]]),r++,n++}if(t[1].type===`listItemPrefix`){let i={type:`listItem`,_spread:!1,start:Object.assign({},t[1].start),end:void 0};o=i,e.splice(r,0,[`enter`,i,t[2]]),r++,n++,c=void 0,l=!0}}}return e[t][1]._spread=a,n}function a(e,t){return n;function n(n){s.call(this,e(n),n),t&&t.call(this,n)}}function o(){this.stack.push({type:`fragment`,children:[]})}function s(e,t,n){this.stack[this.stack.length-1].children.push(e),this.stack.push(e),this.tokenStack.push([t,n||void 0]),e.position={start:ud(t.start),end:void 0}}function c(e){return t;function t(t){e&&e.call(this,t),l.call(this,t)}}function l(e,t){let n=this.stack.pop(),r=this.tokenStack.pop();if(r)r[0].type!==e.type&&(t?t.call(this,e,r[0]):(r[1]||pd).call(this,e,r[0]));else throw Error("Cannot close `"+e.type+"` ("+zs({start:e.start,end:e.end})+`): it’s not open`);n.position.end=ud(e.end)}function u(){return bc(this.stack.pop())}function d(){this.data.expectingFirstListItemValue=!0}function f(e){if(this.data.expectingFirstListItemValue){let t=this.stack[this.stack.length-2];t.start=Number.parseInt(this.sliceSerialize(e),10),this.data.expectingFirstListItemValue=void 0}}function p(){let e=this.resume(),t=this.stack[this.stack.length-1];t.lang=e}function m(){let e=this.resume(),t=this.stack[this.stack.length-1];t.meta=e}function h(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function g(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,``),this.data.flowCodeInside=void 0}function _(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e.replace(/(\r?\n|\r)$/g,``)}function v(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=Nc(this.sliceSerialize(e)).toLowerCase()}function y(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function b(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function x(e){let t=this.stack[this.stack.length-1];t.depth||=this.sliceSerialize(e).length}function S(){this.data.setextHeadingSlurpLineEnding=!0}function C(e){let t=this.stack[this.stack.length-1];t.depth=this.sliceSerialize(e).codePointAt(0)===61?1:2}function w(){this.data.setextHeadingSlurpLineEnding=void 0}function T(e){let t=this.stack[this.stack.length-1].children,n=t[t.length-1];(!n||n.type!==`text`)&&(n=Ae(),n.position={start:ud(e.start),end:void 0},t.push(n)),this.stack.push(n)}function E(e){let t=this.stack.pop();t.value+=this.sliceSerialize(e),t.position.end=ud(e.end)}function ee(e){let n=this.stack[this.stack.length-1];if(this.data.atHardBreak){let t=n.children[n.children.length-1];t.position.end=ud(e.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(n.type)&&(T.call(this,e),E.call(this,e))}function D(){this.data.atHardBreak=!0}function te(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ne(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function re(){let e=this.resume(),t=this.stack[this.stack.length-1];t.value=e}function ie(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function ae(){let e=this.stack[this.stack.length-1];if(this.data.inReference){let t=this.data.referenceType||`shortcut`;e.type+=`Reference`,e.referenceType=t,delete e.url,delete e.title}else delete e.identifier,delete e.label;this.data.referenceType=void 0}function O(e){let t=this.sliceSerialize(e),n=this.stack[this.stack.length-2];n.label=ad(t),n.identifier=Nc(t).toLowerCase()}function oe(){let e=this.stack[this.stack.length-1],t=this.resume(),n=this.stack[this.stack.length-1];this.data.inReference=!0,n.type===`link`?n.children=e.children:n.alt=t}function se(){let e=this.resume(),t=this.stack[this.stack.length-1];t.url=e}function ce(){let e=this.resume(),t=this.stack[this.stack.length-1];t.title=e}function le(){this.data.inReference=void 0}function k(){this.data.referenceType=`collapsed`}function ue(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.label=t,n.identifier=Nc(this.sliceSerialize(e)).toLowerCase(),this.data.referenceType=`full`}function de(e){this.data.characterReferenceType=e.type}function fe(e){let t=this.sliceSerialize(e),n=this.data.characterReferenceType,r;n?(r=Mc(t,n===`characterReferenceMarkerNumeric`?10:16),this.data.characterReferenceType=void 0):r=Tc(t);let i=this.stack[this.stack.length-1];i.value+=r}function pe(e){let t=this.stack.pop();t.position.end=ud(e.end)}function me(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=this.sliceSerialize(e)}function he(e){E.call(this,e);let t=this.stack[this.stack.length-1];t.url=`mailto:`+this.sliceSerialize(e)}function ge(){return{type:`blockquote`,children:[]}}function _e(){return{type:`code`,lang:null,meta:null,value:``}}function ve(){return{type:`inlineCode`,value:``}}function ye(){return{type:`definition`,identifier:``,label:null,title:null,url:``}}function be(){return{type:`emphasis`,children:[]}}function xe(){return{type:`heading`,depth:0,children:[]}}function Se(){return{type:`break`}}function Ce(){return{type:`html`,value:``}}function we(){return{type:`image`,title:null,url:``,alt:null}}function Te(){return{type:`link`,title:null,url:``,children:[]}}function Ee(e){return{type:`list`,ordered:e.type===`listOrdered`,start:null,spread:e._spread,children:[]}}function De(e){return{type:`listItem`,spread:e._spread,checked:null,children:[]}}function Oe(){return{type:`paragraph`,children:[]}}function ke(){return{type:`strong`,children:[]}}function Ae(){return{type:`text`,value:``}}function je(){return{type:`thematicBreak`}}}function ud(e){return{line:e.line,column:e.column,offset:e.offset}}function dd(e,t){let n=-1;for(;++n<t.length;){let r=t[n];Array.isArray(r)?dd(e,r):fd(e,r)}}function fd(e,t){let n;for(n in t)if(sd.call(t,n))switch(n){case`canContainEols`:{let r=t[n];r&&e[n].push(...r);break}case`transforms`:{let r=t[n];r&&e[n].push(...r);break}case`enter`:case`exit`:{let r=t[n];r&&Object.assign(e[n],r);break}}}function pd(e,t){throw Error(e?"Cannot close `"+e.type+"` ("+zs({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+zs({start:t.start,end:t.end})+`) is open`:"Cannot close document, a token (`"+t.type+"`, "+zs({start:t.start,end:t.end})+`) is still open`)}function md(e){let t=this;t.parser=n;function n(n){return cd(n,{...t.data(`settings`),...e,extensions:t.data(`micromarkExtensions`)||[],mdastExtensions:t.data(`fromMarkdownExtensions`)||[]})}}function hd(e,t){let n={type:`element`,tagName:`blockquote`,properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function gd(e,t){let n={type:`element`,tagName:`br`,properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:`text`,value:`
`}]}function _d(e,t){let n=t.value?t.value+`
`:``,r={},i=t.lang?t.lang.split(/\s+/):[];i.length>0&&(r.className=[`language-`+i[0]]);let a={type:`element`,tagName:`code`,properties:r,children:[{type:`text`,value:n}]};return t.meta&&(a.data={meta:t.meta}),e.patch(t,a),a=e.applyData(t,a),a={type:`element`,tagName:`pre`,properties:{},children:[a]},e.patch(t,a),a}function vd(e,t){let n={type:`element`,tagName:`del`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function yd(e,t){let n={type:`element`,tagName:`em`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function bd(e,t){let n=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,r=String(t.identifier).toUpperCase(),i=Hc(r.toLowerCase()),a=e.footnoteOrder.indexOf(r),o,s=e.footnoteCounts.get(r);s===void 0?(s=0,e.footnoteOrder.push(r),o=e.footnoteOrder.length):o=a+1,s+=1,e.footnoteCounts.set(r,s);let c={type:`element`,tagName:`a`,properties:{href:`#`+n+`fn-`+i,id:n+`fnref-`+i+(s>1?`-`+s:``),dataFootnoteRef:!0,ariaDescribedBy:[`footnote-label`]},children:[{type:`text`,value:String(o)}]};e.patch(t,c);let l={type:`element`,tagName:`sup`,properties:{},children:[c]};return e.patch(t,l),e.applyData(t,l)}function xd(e,t){let n={type:`element`,tagName:`h`+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Sd(e,t){if(e.options.allowDangerousHtml){let n={type:`raw`,value:t.value};return e.patch(t,n),e.applyData(t,n)}}function Cd(e,t){let n=t.referenceType,r=`]`;if(n===`collapsed`?r+=`[]`:n===`full`&&(r+=`[`+(t.label||t.identifier)+`]`),t.type===`imageReference`)return[{type:`text`,value:`![`+t.alt+r}];let i=e.all(t),a=i[0];a&&a.type===`text`?a.value=`[`+a.value:i.unshift({type:`text`,value:`[`});let o=i[i.length-1];return o&&o.type===`text`?o.value+=r:i.push({type:`text`,value:r}),i}function wd(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Cd(e,t);let i={src:Hc(r.url||``),alt:t.alt};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`img`,properties:i,children:[]};return e.patch(t,a),e.applyData(t,a)}function Td(e,t){let n={src:Hc(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`img`,properties:n,children:[]};return e.patch(t,r),e.applyData(t,r)}function Ed(e,t){let n={type:`text`,value:t.value.replace(/\r?\n|\r/g,` `)};e.patch(t,n);let r={type:`element`,tagName:`code`,properties:{},children:[n]};return e.patch(t,r),e.applyData(t,r)}function Dd(e,t){let n=String(t.identifier).toUpperCase(),r=e.definitionById.get(n);if(!r)return Cd(e,t);let i={href:Hc(r.url||``)};r.title!==null&&r.title!==void 0&&(i.title=r.title);let a={type:`element`,tagName:`a`,properties:i,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Od(e,t){let n={href:Hc(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);let r={type:`element`,tagName:`a`,properties:n,children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function kd(e,t,n){let r=e.all(t),i=n?Ad(n):jd(t),a={},o=[];if(typeof t.checked==`boolean`){let e=r[0],n;e&&e.type===`element`&&e.tagName===`p`?n=e:(n={type:`element`,tagName:`p`,properties:{},children:[]},r.unshift(n)),n.children.length>0&&n.children.unshift({type:`text`,value:` `}),n.children.unshift({type:`element`,tagName:`input`,properties:{type:`checkbox`,checked:t.checked,disabled:!0},children:[]}),a.className=[`task-list-item`]}let s=-1;for(;++s<r.length;){let e=r[s];(i||s!==0||e.type!==`element`||e.tagName!==`p`)&&o.push({type:`text`,value:`
`}),e.type===`element`&&e.tagName===`p`&&!i?o.push(...e.children):o.push(e)}let c=r[r.length-1];c&&(i||c.type!==`element`||c.tagName!==`p`)&&o.push({type:`text`,value:`
`});let l={type:`element`,tagName:`li`,properties:a,children:o};return e.patch(t,l),e.applyData(t,l)}function Ad(e){let t=!1;if(e.type===`list`){t=e.spread||!1;let n=e.children,r=-1;for(;!t&&++r<n.length;)t=jd(n[r])}return t}function jd(e){return e.spread??e.children.length>1}function Md(e,t){let n={},r=e.all(t),i=-1;for(typeof t.start==`number`&&t.start!==1&&(n.start=t.start);++i<r.length;){let e=r[i];if(e.type===`element`&&e.tagName===`li`&&e.properties&&Array.isArray(e.properties.className)&&e.properties.className.includes(`task-list-item`)){n.className=[`contains-task-list`];break}}let a={type:`element`,tagName:t.ordered?`ol`:`ul`,properties:n,children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function Nd(e,t){let n={type:`element`,tagName:`p`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Pd(e,t){let n={type:`root`,children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function Fd(e,t){let n={type:`element`,tagName:`strong`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Id(e,t){let n=e.all(t),r=n.shift(),i=[];if(r){let n={type:`element`,tagName:`thead`,properties:{},children:e.wrap([r],!0)};e.patch(t.children[0],n),i.push(n)}if(n.length>0){let r={type:`element`,tagName:`tbody`,properties:{},children:e.wrap(n,!0)},a=Is(t.children[1]),o=Fs(t.children[t.children.length-1]);a&&o&&(r.position={start:a,end:o}),i.push(r)}let a={type:`element`,tagName:`table`,properties:{},children:e.wrap(i,!0)};return e.patch(t,a),e.applyData(t,a)}function Ld(e,t,n){let r=n?n.children:void 0,i=(r?r.indexOf(t):1)===0?`th`:`td`,a=n&&n.type===`table`?n.align:void 0,o=a?a.length:t.children.length,s=-1,c=[];for(;++s<o;){let n=t.children[s],r={},o=a?a[s]:void 0;o&&(r.align=o);let l={type:`element`,tagName:i,properties:r,children:[]};n&&(l.children=e.all(n),e.patch(n,l),l=e.applyData(n,l)),c.push(l)}let l={type:`element`,tagName:`tr`,properties:{},children:e.wrap(c,!0)};return e.patch(t,l),e.applyData(t,l)}function Rd(e,t){let n={type:`element`,tagName:`td`,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}var zd=9,Bd=32;function Vd(e){let t=String(e),n=/\r?\n|\r/g,r=n.exec(t),i=0,a=[];for(;r;)a.push(Hd(t.slice(i,r.index),i>0,!0),r[0]),i=r.index+r[0].length,r=n.exec(t);return a.push(Hd(t.slice(i),i>0,!1)),a.join(``)}function Hd(e,t,n){let r=0,i=e.length;if(t){let t=e.codePointAt(r);for(;t===zd||t===Bd;)r++,t=e.codePointAt(r)}if(n){let t=e.codePointAt(i-1);for(;t===zd||t===Bd;)i--,t=e.codePointAt(i-1)}return i>r?e.slice(r,i):``}function Ud(e,t){let n={type:`text`,value:Vd(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function Wd(e,t){let n={type:`element`,tagName:`hr`,properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}var Gd={blockquote:hd,break:gd,code:_d,delete:vd,emphasis:yd,footnoteReference:bd,heading:xd,html:Sd,imageReference:wd,image:Td,inlineCode:Ed,linkReference:Dd,link:Od,listItem:kd,list:Md,paragraph:Nd,root:Pd,strong:Fd,table:Id,tableCell:Rd,tableRow:Ld,text:Ud,thematicBreak:Wd,toml:Kd,yaml:Kd,definition:Kd,footnoteDefinition:Kd};function Kd(){}var qd=typeof self==`object`?self:globalThis,Jd=(e,t)=>{let n=(t,n)=>(e.set(n,t),t),r=i=>{if(e.has(i))return e.get(i);let[a,o]=t[i];switch(a){case 0:case-1:return n(o,i);case 1:{let e=n([],i);for(let t of o)e.push(r(t));return e}case 2:{let e=n({},i);for(let[t,n]of o)e[r(t)]=r(n);return e}case 3:return n(new Date(o),i);case 4:{let{source:e,flags:t}=o;return n(new RegExp(e,t),i)}case 5:{let e=n(new Map,i);for(let[t,n]of o)e.set(r(t),r(n));return e}case 6:{let e=n(new Set,i);for(let t of o)e.add(r(t));return e}case 7:{let{name:e,message:t}=o;return n(new qd[e](t),i)}case 8:return n(BigInt(o),i);case`BigInt`:return n(Object(BigInt(o)),i);case`ArrayBuffer`:return n(new Uint8Array(o).buffer,o);case`DataView`:{let{buffer:e}=new Uint8Array(o);return n(new DataView(e),o)}}return n(new qd[a](o),i)};return r},Yd=e=>Jd(new Map,e)(0),Xd=``,{toString:Zd}={},{keys:Qd}=Object,$d=e=>{let t=typeof e;if(t!==`object`||!e)return[0,t];let n=Zd.call(e).slice(8,-1);switch(n){case`Array`:return[1,Xd];case`Object`:return[2,Xd];case`Date`:return[3,Xd];case`RegExp`:return[4,Xd];case`Map`:return[5,Xd];case`Set`:return[6,Xd];case`DataView`:return[1,n]}return n.includes(`Array`)?[1,n]:n.includes(`Error`)?[7,n]:[2,n]},ef=([e,t])=>e===0&&(t===`function`||t===`symbol`),tf=(e,t,n,r)=>{let i=(e,t)=>{let i=r.push(e)-1;return n.set(t,i),i},a=r=>{if(n.has(r))return n.get(r);let[o,s]=$d(r);switch(o){case 0:{let t=r;switch(s){case`bigint`:o=8,t=r.toString();break;case`function`:case`symbol`:if(e)throw TypeError(`unable to serialize `+s);t=null;break;case`undefined`:return i([-1],r)}return i([o,t],r)}case 1:{if(s){let e=r;return s===`DataView`?e=new Uint8Array(r.buffer):s===`ArrayBuffer`&&(e=new Uint8Array(r)),i([s,[...e]],r)}let e=[],t=i([o,e],r);for(let t of r)e.push(a(t));return t}case 2:{if(s)switch(s){case`BigInt`:return i([s,r.toString()],r);case`Boolean`:case`Number`:case`String`:return i([s,r.valueOf()],r)}if(t&&`toJSON`in r)return a(r.toJSON());let n=[],c=i([o,n],r);for(let t of Qd(r))(e||!ef($d(r[t])))&&n.push([a(t),a(r[t])]);return c}case 3:return i([o,r.toISOString()],r);case 4:{let{source:e,flags:t}=r;return i([o,{source:e,flags:t}],r)}case 5:{let t=[],n=i([o,t],r);for(let[n,i]of r)(e||!(ef($d(n))||ef($d(i))))&&t.push([a(n),a(i)]);return n}case 6:{let t=[],n=i([o,t],r);for(let n of r)(e||!ef($d(n)))&&t.push(a(n));return n}}let{message:c}=r;return i([o,{name:s,message:c}],r)};return a},nf=(e,{json:t,lossy:n}={})=>{let r=[];return tf(!(t||n),!!t,new Map,r)(e),r},rf=typeof structuredClone==`function`?(e,t)=>t&&(`json`in t||`lossy`in t)?Yd(nf(e,t)):structuredClone(e):(e,t)=>Yd(nf(e,t));function af(e,t){let n=[{type:`text`,value:`↩`}];return t>1&&n.push({type:`element`,tagName:`sup`,properties:{},children:[{type:`text`,value:String(t)}]}),n}function of(e,t){return`Back to reference `+(e+1)+(t>1?`-`+t:``)}function sf(e){let t=typeof e.options.clobberPrefix==`string`?e.options.clobberPrefix:`user-content-`,n=e.options.footnoteBackContent||af,r=e.options.footnoteBackLabel||of,i=e.options.footnoteLabel||`Footnotes`,a=e.options.footnoteLabelTagName||`h2`,o=e.options.footnoteLabelProperties||{className:[`sr-only`]},s=[],c=-1;for(;++c<e.footnoteOrder.length;){let i=e.footnoteById.get(e.footnoteOrder[c]);if(!i)continue;let a=e.all(i),o=String(i.identifier).toUpperCase(),l=Hc(o.toLowerCase()),u=0,d=[],f=e.footnoteCounts.get(o);for(;f!==void 0&&++u<=f;){d.length>0&&d.push({type:`text`,value:` `});let e=typeof n==`string`?n:n(c,u);typeof e==`string`&&(e={type:`text`,value:e}),d.push({type:`element`,tagName:`a`,properties:{href:`#`+t+`fnref-`+l+(u>1?`-`+u:``),dataFootnoteBackref:``,ariaLabel:typeof r==`string`?r:r(c,u),className:[`data-footnote-backref`]},children:Array.isArray(e)?e:[e]})}let p=a[a.length-1];if(p&&p.type===`element`&&p.tagName===`p`){let e=p.children[p.children.length-1];e&&e.type===`text`?e.value+=` `:p.children.push({type:`text`,value:` `}),p.children.push(...d)}else a.push(...d);let m={type:`element`,tagName:`li`,properties:{id:t+`fn-`+l},children:e.wrap(a,!0)};e.patch(i,m),s.push(m)}if(s.length!==0)return{type:`element`,tagName:`section`,properties:{dataFootnotes:!0,className:[`footnotes`]},children:[{type:`element`,tagName:a,properties:{...rf(o),id:`footnote-label`},children:[{type:`text`,value:i}]},{type:`text`,value:`
`},{type:`element`,tagName:`ol`,properties:{},children:e.wrap(s,!0)},{type:`text`,value:`
`}]}}var cf=(function(e){if(e==null)return pf;if(typeof e==`function`)return ff(e);if(typeof e==`object`)return Array.isArray(e)?lf(e):uf(e);if(typeof e==`string`)return df(e);throw Error(`Expected function, string, or object as test`)});function lf(e){let t=[],n=-1;for(;++n<e.length;)t[n]=cf(e[n]);return ff(r);function r(...e){let n=-1;for(;++n<t.length;)if(t[n].apply(this,e))return!0;return!1}}function uf(e){let t=e;return ff(n);function n(n){let r=n,i;for(i in e)if(r[i]!==t[i])return!1;return!0}}function df(e){return ff(t);function t(t){return t&&t.type===e}}function ff(e){return t;function t(t,n,r){return!!(mf(t)&&e.call(this,t,typeof n==`number`?n:void 0,r||void 0))}}function pf(){return!0}function mf(e){return typeof e==`object`&&!!e&&`type`in e}function hf(e){return e}var gf=[];function _f(e,t,n,r){let i;typeof t==`function`&&typeof n!=`function`?(r=n,n=t):i=t;let a=cf(i),o=r?-1:1;s(e,void 0,[])();function s(e,i,c){let l=e&&typeof e==`object`?e:{};if(typeof l.type==`string`){let t=typeof l.tagName==`string`?l.tagName:typeof l.name==`string`?l.name:void 0;Object.defineProperty(u,`name`,{value:`node (`+hf(e.type+(t?`<`+t+`>`:``))+`)`})}return u;function u(){let l=gf,u,d,f;if((!t||a(e,i,c[c.length-1]||void 0))&&(l=vf(n(e,c)),l[0]===!1))return l;if(`children`in e&&e.children){let t=e;if(t.children&&l[0]!==`skip`)for(d=(r?t.children.length:-1)+o,f=c.concat(t);d>-1&&d<t.children.length;){let e=t.children[d];if(u=s(e,d,f)(),u[0]===!1)return u;d=typeof u[1]==`number`?u[1]:d+o}}return l}}}function vf(e){return Array.isArray(e)?e:typeof e==`number`?[!0,e]:e==null?gf:[e]}function yf(e,t,n,r){let i,a,o;typeof t==`function`&&typeof n!=`function`?(a=void 0,o=t,i=n):(a=t,o=n,i=r),_f(e,a,s,i);function s(e,t){let n=t[t.length-1],r=n?n.children.indexOf(e):void 0;return o(e,r,n)}}var bf={}.hasOwnProperty,xf={};function Sf(e,t){let n=t||xf,r=new Map,i=new Map,a={all:s,applyData:wf,definitionById:r,footnoteById:i,footnoteCounts:new Map,footnoteOrder:[],handlers:{...Gd,...n.handlers},one:o,options:n,patch:Cf,wrap:Ef};return yf(e,function(e){if(e.type===`definition`||e.type===`footnoteDefinition`){let t=e.type===`definition`?r:i,n=String(e.identifier).toUpperCase();t.has(n)||t.set(n,e)}}),a;function o(e,t){let n=e.type,r=a.handlers[n];if(bf.call(a.handlers,n)&&r)return r(a,e,t);if(a.options.passThrough&&a.options.passThrough.includes(n)){if(`children`in e){let{children:t,...n}=e,r=rf(n);return r.children=a.all(e),r}return rf(e)}return(a.options.unknownHandler||Tf)(a,e,t)}function s(e){let t=[];if(`children`in e){let n=e.children,r=-1;for(;++r<n.length;){let i=a.one(n[r],e);if(i){if(r&&n[r-1].type===`break`&&(!Array.isArray(i)&&i.type===`text`&&(i.value=Df(i.value)),!Array.isArray(i)&&i.type===`element`)){let e=i.children[0];e&&e.type===`text`&&(e.value=Df(e.value))}Array.isArray(i)?t.push(...i):t.push(i)}}}return t}}function Cf(e,t){e.position&&(t.position=Rs(e))}function wf(e,t){let n=t;if(e&&e.data){let t=e.data.hName,r=e.data.hChildren,i=e.data.hProperties;typeof t==`string`&&(n.type===`element`?n.tagName=t:n={type:`element`,tagName:t,properties:{},children:`children`in n?n.children:[n]}),n.type===`element`&&i&&Object.assign(n.properties,rf(i)),`children`in n&&n.children&&r!=null&&(n.children=r)}return n}function Tf(e,t){let n=t.data||{},r=`value`in t&&!(bf.call(n,`hProperties`)||bf.call(n,`hChildren`))?{type:`text`,value:t.value}:{type:`element`,tagName:`div`,properties:{},children:e.all(t)};return e.patch(t,r),e.applyData(t,r)}function Ef(e,t){let n=[],r=-1;for(t&&n.push({type:`text`,value:`
`});++r<e.length;)r&&n.push({type:`text`,value:`
`}),n.push(e[r]);return t&&e.length>0&&n.push({type:`text`,value:`
`}),n}function Df(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Of(e,t){let n=Sf(e,t),r=n.one(e,void 0),i=sf(n),a=Array.isArray(r)?{type:`root`,children:r}:r||{type:`root`,children:[]};return i&&(`children`in a,a.children.push({type:`text`,value:`
`},i)),a}function kf(e,t){return e&&`run`in e?async function(n,r){let i=Of(n,{file:r,...t});await e.run(i,r)}:function(n,r){return Of(n,{file:r,...e||t})}}function Af(e){if(e)throw e}var jf=o(((e,t)=>{var n=Object.prototype.hasOwnProperty,r=Object.prototype.toString,i=Object.defineProperty,a=Object.getOwnPropertyDescriptor,o=function(e){return typeof Array.isArray==`function`?Array.isArray(e):r.call(e)===`[object Array]`},s=function(e){if(!e||r.call(e)!==`[object Object]`)return!1;var t=n.call(e,`constructor`),i=e.constructor&&e.constructor.prototype&&n.call(e.constructor.prototype,`isPrototypeOf`);if(e.constructor&&!t&&!i)return!1;for(var a in e);return a===void 0||n.call(e,a)},c=function(e,t){i&&t.name===`__proto__`?i(e,t.name,{enumerable:!0,configurable:!0,value:t.newValue,writable:!0}):e[t.name]=t.newValue},l=function(e,t){if(t===`__proto__`){if(!n.call(e,t))return;if(a)return a(e,t).value}return e[t]};t.exports=function e(){var t,n,r,i,a,u,d=arguments[0],f=1,p=arguments.length,m=!1;for(typeof d==`boolean`&&(m=d,d=arguments[1]||{},f=2),(d==null||typeof d!=`object`&&typeof d!=`function`)&&(d={});f<p;++f)if(t=arguments[f],t!=null)for(n in t)r=l(d,n),i=l(t,n),d!==i&&(m&&i&&(s(i)||(a=o(i)))?(a?(a=!1,u=r&&o(r)?r:[]):u=r&&s(r)?r:{},c(d,{name:n,newValue:e(m,u,i)})):i!==void 0&&c(d,{name:n,newValue:i}));return d}}));function Mf(e){if(typeof e!=`object`||!e)return!1;let t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Nf(){let e=[],t={run:n,use:r};return t;function n(...t){let n=-1,r=t.pop();if(typeof r!=`function`)throw TypeError(`Expected function as last argument, not `+r);i(null,...t);function i(a,...o){let s=e[++n],c=-1;if(a){r(a);return}for(;++c<t.length;)(o[c]===null||o[c]===void 0)&&(o[c]=t[c]);t=o,s?Pf(s,i)(...o):r(null,...o)}}function r(n){if(typeof n!=`function`)throw TypeError("Expected `middelware` to be a function, not "+n);return e.push(n),t}}function Pf(e,t){let n;return r;function r(...t){let r=e.length>t.length,o;r&&t.push(i);try{o=e.apply(this,t)}catch(e){let t=e;if(r&&n)throw t;return i(t)}r||(o&&o.then&&typeof o.then==`function`?o.then(a,i):o instanceof Error?i(o):a(o))}function i(e,...r){n||(n=!0,t(e,...r))}function a(e){i(null,e)}}var Ff={basename:If,dirname:Lf,extname:Rf,join:zf,sep:`/`};function If(e,t){if(t!==void 0&&typeof t!=`string`)throw TypeError(`"ext" argument must be a string`);Hf(e);let n=0,r=-1,i=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else r<0&&(a=!0,r=i+1);return r<0?``:e.slice(n,r)}if(t===e)return``;let o=-1,s=t.length-1;for(;i--;)if(e.codePointAt(i)===47){if(a){n=i+1;break}}else o<0&&(a=!0,o=i+1),s>-1&&(e.codePointAt(i)===t.codePointAt(s--)?s<0&&(r=i):(s=-1,r=o));return n===r?r=o:r<0&&(r=e.length),e.slice(n,r)}function Lf(e){if(Hf(e),e.length===0)return`.`;let t=-1,n=e.length,r;for(;--n;)if(e.codePointAt(n)===47){if(r){t=n;break}}else r||=!0;return t<0?e.codePointAt(0)===47?`/`:`.`:t===1&&e.codePointAt(0)===47?`//`:e.slice(0,t)}function Rf(e){Hf(e);let t=e.length,n=-1,r=0,i=-1,a=0,o;for(;t--;){let s=e.codePointAt(t);if(s===47){if(o){r=t+1;break}continue}n<0&&(o=!0,n=t+1),s===46?i<0?i=t:a!==1&&(a=1):i>-1&&(a=-1)}return i<0||n<0||a===0||a===1&&i===n-1&&i===r+1?``:e.slice(i,n)}function zf(...e){let t=-1,n;for(;++t<e.length;)Hf(e[t]),e[t]&&(n=n===void 0?e[t]:n+`/`+e[t]);return n===void 0?`.`:Bf(n)}function Bf(e){Hf(e);let t=e.codePointAt(0)===47,n=Vf(e,!t);return n.length===0&&!t&&(n=`.`),n.length>0&&e.codePointAt(e.length-1)===47&&(n+=`/`),t?`/`+n:n}function Vf(e,t){let n=``,r=0,i=-1,a=0,o=-1,s,c;for(;++o<=e.length;){if(o<e.length)s=e.codePointAt(o);else if(s===47)break;else s=47;if(s===47){if(!(i===o-1||a===1))if(i!==o-1&&a===2){if(n.length<2||r!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf(`/`),c!==n.length-1){c<0?(n=``,r=0):(n=n.slice(0,c),r=n.length-1-n.lastIndexOf(`/`)),i=o,a=0;continue}}else if(n.length>0){n=``,r=0,i=o,a=0;continue}}t&&(n=n.length>0?n+`/..`:`..`,r=2)}else n.length>0?n+=`/`+e.slice(i+1,o):n=e.slice(i+1,o),r=o-i-1;i=o,a=0}else s===46&&a>-1?a++:a=-1}return n}function Hf(e){if(typeof e!=`string`)throw TypeError(`Path must be a string. Received `+JSON.stringify(e))}var Uf={cwd:Wf};function Wf(){return`/`}function Gf(e){return!!(typeof e==`object`&&e&&`href`in e&&e.href&&`protocol`in e&&e.protocol&&e.auth===void 0)}function Kf(e){if(typeof e==`string`)e=new URL(e);else if(!Gf(e)){let t=TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code=`ERR_INVALID_ARG_TYPE`,t}if(e.protocol!==`file:`){let e=TypeError(`The URL must be of scheme file`);throw e.code=`ERR_INVALID_URL_SCHEME`,e}return qf(e)}function qf(e){if(e.hostname!==``){let e=TypeError(`File URL host must be "localhost" or empty on darwin`);throw e.code=`ERR_INVALID_FILE_URL_HOST`,e}let t=e.pathname,n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){let e=t.codePointAt(n+2);if(e===70||e===102){let e=TypeError(`File URL path must not include encoded / characters`);throw e.code=`ERR_INVALID_FILE_URL_PATH`,e}}return decodeURIComponent(t)}var Jf=[`history`,`path`,`basename`,`stem`,`extname`,`dirname`],Yf=class{constructor(e){let t;t=e?Gf(e)?{path:e}:typeof e==`string`||$f(e)?{value:e}:e:{},this.cwd=`cwd`in t?``:Uf.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let n=-1;for(;++n<Jf.length;){let e=Jf[n];e in t&&t[e]!==void 0&&t[e]!==null&&(this[e]=e===`history`?[...t[e]]:t[e])}let r;for(r in t)Jf.includes(r)||(this[r]=t[r])}get basename(){return typeof this.path==`string`?Ff.basename(this.path):void 0}set basename(e){Zf(e,`basename`),Xf(e,`basename`),this.path=Ff.join(this.dirname||``,e)}get dirname(){return typeof this.path==`string`?Ff.dirname(this.path):void 0}set dirname(e){Qf(this.basename,`dirname`),this.path=Ff.join(e||``,this.basename)}get extname(){return typeof this.path==`string`?Ff.extname(this.path):void 0}set extname(e){if(Xf(e,`extname`),Qf(this.dirname,`extname`),e){if(e.codePointAt(0)!==46)throw Error("`extname` must start with `.`");if(e.includes(`.`,1))throw Error("`extname` cannot contain multiple dots")}this.path=Ff.join(this.dirname,this.stem+(e||``))}get path(){return this.history[this.history.length-1]}set path(e){Gf(e)&&(e=Kf(e)),Zf(e,`path`),this.path!==e&&this.history.push(e)}get stem(){return typeof this.path==`string`?Ff.basename(this.path,this.extname):void 0}set stem(e){Zf(e,`stem`),Xf(e,`stem`),this.path=Ff.join(this.dirname||``,e+(this.extname||``))}fail(e,t,n){let r=this.message(e,t,n);throw r.fatal=!0,r}info(e,t,n){let r=this.message(e,t,n);return r.fatal=void 0,r}message(e,t,n){let r=new Us(e,t,n);return this.path&&(r.name=this.path+`:`+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(e){return this.value===void 0?``:typeof this.value==`string`?this.value:new TextDecoder(e||void 0).decode(this.value)}};function Xf(e,t){if(e&&e.includes(Ff.sep))throw Error("`"+t+"` cannot be a path: did not expect `"+Ff.sep+"`")}function Zf(e,t){if(!e)throw Error("`"+t+"` cannot be empty")}function Qf(e,t){if(!e)throw Error("Setting `"+t+"` requires `path` to be set too")}function $f(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var ep=(function(e){let t=this.constructor.prototype,n=t[e],r=function(){return n.apply(r,arguments)};return Object.setPrototypeOf(r,t),r}),tp=l(jf(),1),np={}.hasOwnProperty,rp=new class e extends ep{constructor(){super(`copy`),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Nf()}copy(){let t=new e,n=-1;for(;++n<this.attachers.length;){let e=this.attachers[n];t.use(...e)}return t.data((0,tp.default)(!0,{},this.namespace)),t}data(e,t){return typeof e==`string`?arguments.length===2?(op(`data`,this.frozen),this.namespace[e]=t,this):np.call(this.namespace,e)&&this.namespace[e]||void 0:e?(op(`data`,this.frozen),this.namespace=e,this):this.namespace}freeze(){if(this.frozen)return this;let e=this;for(;++this.freezeIndex<this.attachers.length;){let[t,...n]=this.attachers[this.freezeIndex];if(n[0]===!1)continue;n[0]===!0&&(n[0]=void 0);let r=t.call(e,...n);typeof r==`function`&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=1/0,this}parse(e){this.freeze();let t=lp(e),n=this.parser||this.Parser;return ip(`parse`,n),n(String(t),t)}process(e,t){let n=this;return this.freeze(),ip(`process`,this.parser||this.Parser),ap(`process`,this.compiler||this.Compiler),t?r(void 0,t):new Promise(r);function r(r,i){let a=lp(e),o=n.parse(a);n.run(o,a,function(e,t,r){if(e||!t||!r)return s(e);let i=t,a=n.stringify(i,r);dp(a)?r.value=a:r.result=a,s(e,r)});function s(e,n){e||!n?i(e):r?r(n):t(void 0,n)}}}processSync(e){let t=!1,n;return this.freeze(),ip(`processSync`,this.parser||this.Parser),ap(`processSync`,this.compiler||this.Compiler),this.process(e,r),cp(`processSync`,`process`,t),n;function r(e,r){t=!0,Af(e),n=r}}run(e,t,n){sp(e),this.freeze();let r=this.transformers;return!n&&typeof t==`function`&&(n=t,t=void 0),n?i(void 0,n):new Promise(i);function i(i,a){let o=lp(t);r.run(e,o,s);function s(t,r,o){let s=r||e;t?a(t):i?i(s):n(void 0,s,o)}}}runSync(e,t){let n=!1,r;return this.run(e,t,i),cp(`runSync`,`run`,n),r;function i(e,t){Af(e),r=t,n=!0}}stringify(e,t){this.freeze();let n=lp(t),r=this.compiler||this.Compiler;return ap(`stringify`,r),sp(e),r(e,n)}use(e,...t){let n=this.attachers,r=this.namespace;if(op(`use`,this.frozen),e!=null)if(typeof e==`function`)s(e,t);else if(typeof e==`object`)Array.isArray(e)?o(e):a(e);else throw TypeError("Expected usable value, not `"+e+"`");return this;function i(e){if(typeof e==`function`)s(e,[]);else if(typeof e==`object`)if(Array.isArray(e)){let[t,...n]=e;s(t,n)}else a(e);else throw TypeError("Expected usable value, not `"+e+"`")}function a(e){if(!(`plugins`in e)&&!(`settings`in e))throw Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");o(e.plugins),e.settings&&(r.settings=(0,tp.default)(!0,r.settings,e.settings))}function o(e){let t=-1;if(e!=null)if(Array.isArray(e))for(;++t<e.length;){let n=e[t];i(n)}else throw TypeError("Expected a list of plugins, not `"+e+"`")}function s(e,t){let r=-1,i=-1;for(;++r<n.length;)if(n[r][0]===e){i=r;break}if(i===-1)n.push([e,...t]);else if(t.length>0){let[r,...a]=t,o=n[i][1];Mf(o)&&Mf(r)&&(r=(0,tp.default)(!0,o,r)),n[i]=[e,r,...a]}}}}().freeze();function ip(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `parser`")}function ap(e,t){if(typeof t!=`function`)throw TypeError("Cannot `"+e+"` without `compiler`")}function op(e,t){if(t)throw Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function sp(e){if(!Mf(e)||typeof e.type!=`string`)throw TypeError("Expected node, got `"+e+"`")}function cp(e,t,n){if(!n)throw Error("`"+e+"` finished async. Use `"+t+"` instead")}function lp(e){return up(e)?e:new Yf(e)}function up(e){return!!(e&&typeof e==`object`&&`message`in e&&`messages`in e)}function dp(e){return typeof e==`string`||fp(e)}function fp(e){return!!(e&&typeof e==`object`&&`byteLength`in e&&`byteOffset`in e)}var pp=[],mp={allowDangerousHtml:!0},hp=/^(https?|ircs?|mailto|xmpp)$/i,gp=[{from:`astPlugins`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowDangerousHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`allowNode`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowElement`},{from:`allowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`allowedElements`},{from:`disallowedTypes`,id:`replace-allownode-allowedtypes-and-disallowedtypes`,to:`disallowedElements`},{from:`escapeHtml`,id:`remove-buggy-html-in-markdown-parser`},{from:`includeElementIndex`,id:`#remove-includeelementindex`},{from:`includeNodeIndex`,id:`change-includenodeindex-to-includeelementindex`},{from:`linkTarget`,id:`remove-linktarget`},{from:`plugins`,id:`change-plugins-to-remarkplugins`,to:`remarkPlugins`},{from:`rawSourcePos`,id:`#remove-rawsourcepos`},{from:`renderers`,id:`change-renderers-to-components`,to:`components`},{from:`source`,id:`change-source-to-children`,to:`children`},{from:`sourcePos`,id:`#remove-sourcepos`},{from:`transformImageUri`,id:`#add-urltransform`,to:`urlTransform`},{from:`transformLinkUri`,id:`#add-urltransform`,to:`urlTransform`}];function _p(e){let t=vp(e),n=yp(e);return bp(t.runSync(t.parse(n),n),e)}function vp(e){let t=e.rehypePlugins||pp,n=e.remarkPlugins||pp,r=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...mp}:mp;return rp().use(md).use(n).use(kf,r).use(t)}function yp(e){let t=e.children||``,n=new Yf;return typeof t==`string`?n.value=t:``+t,n}function bp(e,t){let n=t.allowedElements,r=t.allowElement,i=t.components,a=t.disallowedElements,o=t.skipHtml,s=t.unwrapDisallowed,c=t.urlTransform||xp;for(let e of gp)Object.hasOwn(t,e.from)&&``+e.from+(e.to?"use `"+e.to+"` instead":`remove it`)+e.id;return t.className&&(e={type:`element`,tagName:`div`,properties:{className:t.className},children:e.type===`root`?e.children:[e]}),yf(e,l),Zs(e,{Fragment:I.Fragment,components:i,ignoreInvalidStyle:!0,jsx:I.jsx,jsxs:I.jsxs,passKeys:!0,passNode:!0});function l(e,t,i){if(e.type===`raw`&&i&&typeof t==`number`)return o?i.children.splice(t,1):i.children[t]={type:`text`,value:e.value},t;if(e.type===`element`){let t;for(t in vc)if(Object.hasOwn(vc,t)&&Object.hasOwn(e.properties,t)){let n=e.properties[t],r=vc[t];(r===null||r.includes(e.tagName))&&(e.properties[t]=c(String(n||``),t,e))}}if(e.type===`element`){let o=n?!n.includes(e.tagName):a?a.includes(e.tagName):!1;if(!o&&r&&typeof t==`number`&&(o=!r(e,t,i)),o&&i&&typeof t==`number`)return s&&e.children?i.children.splice(t,1,...e.children):i.children.splice(t,1),t}}}function xp(e){let t=e.indexOf(`:`),n=e.indexOf(`?`),r=e.indexOf(`#`),i=e.indexOf(`/`);return t===-1||i!==-1&&t>i||n!==-1&&t>n||r!==-1&&t>r||hp.test(e.slice(0,t))?e:``}function Sp(e,t){let n=String(e);if(typeof t!=`string`)throw TypeError(`Expected character`);let r=0,i=n.indexOf(t);for(;i!==-1;)r++,i=n.indexOf(t,i+t.length);return r}function Cp(e){if(typeof e!=`string`)throw TypeError(`Expected a string`);return e.replace(/[|\\{}()[\]^$+*?.]/g,`\\$&`).replace(/-/g,`\\x2d`)}function wp(e,t,n){let r=cf((n||{}).ignore||[]),i=Tp(t),a=-1;for(;++a<i.length;)_f(e,`text`,o);function o(e,t){let n=-1,i;for(;++n<t.length;){let e=t[n],a=i?i.children:void 0;if(r(e,a?a.indexOf(e):void 0,i))return;i=e}if(i)return s(e,t)}function s(e,t){let n=t[t.length-1],r=i[a][0],o=i[a][1],s=0,c=n.children.indexOf(e),l=!1,u=[];r.lastIndex=0;let d=r.exec(e.value);for(;d;){let n=d.index,i={index:d.index,input:d.input,stack:[...t,e]},a=o(...d,i);if(typeof a==`string`&&(a=a.length>0?{type:`text`,value:a}:void 0),a===!1?r.lastIndex=n+1:(s!==n&&u.push({type:`text`,value:e.value.slice(s,n)}),Array.isArray(a)?u.push(...a):a&&u.push(a),s=n+d[0].length,l=!0),!r.global)break;d=r.exec(e.value)}return l?(s<e.value.length&&u.push({type:`text`,value:e.value.slice(s)}),n.children.splice(c,1,...u)):u=[e],c+u.length}}function Tp(e){let t=[];if(!Array.isArray(e))throw TypeError(`Expected find and replace tuple or list of tuples`);let n=!e[0]||Array.isArray(e[0])?e:[e],r=-1;for(;++r<n.length;){let e=n[r];t.push([Ep(e[0]),Dp(e[1])])}return t}function Ep(e){return typeof e==`string`?new RegExp(Cp(e),`g`):e}function Dp(e){return typeof e==`function`?e:function(){return e}}var Op=`phrasing`,kp=[`autolink`,`link`,`image`,`label`];function Ap(){return{transforms:[Rp],enter:{literalAutolink:Mp,literalAutolinkEmail:Np,literalAutolinkHttp:Np,literalAutolinkWww:Np},exit:{literalAutolink:Lp,literalAutolinkEmail:Ip,literalAutolinkHttp:Pp,literalAutolinkWww:Fp}}}function jp(){return{unsafe:[{character:`@`,before:`[+\\-.\\w]`,after:`[\\-.\\w]`,inConstruct:Op,notInConstruct:kp},{character:`.`,before:`[Ww]`,after:`[\\-.\\w]`,inConstruct:Op,notInConstruct:kp},{character:`:`,before:`[ps]`,after:`\\/`,inConstruct:Op,notInConstruct:kp}]}}function Mp(e){this.enter({type:`link`,title:null,url:``,children:[]},e)}function Np(e){this.config.enter.autolinkProtocol.call(this,e)}function Pp(e){this.config.exit.autolinkProtocol.call(this,e)}function Fp(e){this.config.exit.data.call(this,e);let t=this.stack[this.stack.length-1];t.type,t.url=`http://`+this.sliceSerialize(e)}function Ip(e){this.config.exit.autolinkEmail.call(this,e)}function Lp(e){this.exit(e)}function Rp(e){wp(e,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,zp],[/(?<=^|\s|\p{P}|\p{S})([-.\w+]+)@([-\w]+(?:\.[-\w]+)+)/gu,Bp]],{ignore:[`link`,`linkReference`]})}function zp(e,t,n,r,i){let a=``;if(!Up(i)||(/^w/i.test(t)&&(n=t+n,t=``,a=`http://`),!Vp(n)))return!1;let o=Hp(n+r);if(!o[0])return!1;let s={type:`link`,title:null,url:a+t+o[0],children:[{type:`text`,value:t+o[0]}]};return o[1]?[s,{type:`text`,value:o[1]}]:s}function Bp(e,t,n,r){return!Up(r,!0)||/[-\d_]$/.test(n)?!1:{type:`link`,title:null,url:`mailto:`+t+`@`+n,children:[{type:`text`,value:t+`@`+n}]}}function Vp(e){let t=e.split(`.`);return!(t.length<2||t[t.length-1]&&(/_/.test(t[t.length-1])||!/[a-zA-Z\d]/.test(t[t.length-1]))||t[t.length-2]&&(/_/.test(t[t.length-2])||!/[a-zA-Z\d]/.test(t[t.length-2])))}function Hp(e){let t=/[!"&'),.:;<>?\]}]+$/.exec(e);if(!t)return[e,void 0];e=e.slice(0,t.index);let n=t[0],r=n.indexOf(`)`),i=Sp(e,`(`),a=Sp(e,`)`);for(;r!==-1&&i>a;)e+=n.slice(0,r+1),n=n.slice(r+1),r=n.indexOf(`)`),a++;return[e,n]}function Up(e,t){let n=e.input.charCodeAt(e.index-1);return(e.index===0||Vc(n)||Bc(n))&&(!t||n!==47)}$p.peek=Qp;function Wp(){this.buffer()}function Gp(e){this.enter({type:`footnoteReference`,identifier:``,label:``},e)}function Kp(){this.buffer()}function qp(e){this.enter({type:`footnoteDefinition`,identifier:``,label:``,children:[]},e)}function Jp(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Nc(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Yp(e){this.exit(e)}function Xp(e){let t=this.resume(),n=this.stack[this.stack.length-1];n.type,n.identifier=Nc(this.sliceSerialize(e)).toLowerCase(),n.label=t}function Zp(e){this.exit(e)}function Qp(){return`[`}function $p(e,t,n,r){let i=n.createTracker(r),a=i.move(`[^`),o=n.enter(`footnoteReference`),s=n.enter(`reference`);return a+=i.move(n.safe(n.associationId(e),{after:`]`,before:a})),s(),o(),a+=i.move(`]`),a}function em(){return{enter:{gfmFootnoteCallString:Wp,gfmFootnoteCall:Gp,gfmFootnoteDefinitionLabelString:Kp,gfmFootnoteDefinition:qp},exit:{gfmFootnoteCallString:Jp,gfmFootnoteCall:Yp,gfmFootnoteDefinitionLabelString:Xp,gfmFootnoteDefinition:Zp}}}function tm(e){let t=!1;return e&&e.firstLineBlank&&(t=!0),{handlers:{footnoteDefinition:n,footnoteReference:$p},unsafe:[{character:`[`,inConstruct:[`label`,`phrasing`,`reference`]}]};function n(e,n,r,i){let a=r.createTracker(i),o=a.move(`[^`),s=r.enter(`footnoteDefinition`),c=r.enter(`label`);return o+=a.move(r.safe(r.associationId(e),{before:o,after:`]`})),c(),o+=a.move(`]:`),e.children&&e.children.length>0&&(a.shift(4),o+=a.move((t?`
`:` `)+r.indentLines(r.containerFlow(e,a.current()),t?rm:nm))),s(),o}}function nm(e,t,n){return t===0?e:rm(e,t,n)}function rm(e,t,n){return(n?``:`    `)+e}var im=[`autolink`,`destinationLiteral`,`destinationRaw`,`reference`,`titleQuote`,`titleApostrophe`];lm.peek=um;function am(){return{canContainEols:[`delete`],enter:{strikethrough:sm},exit:{strikethrough:cm}}}function om(){return{unsafe:[{character:`~`,inConstruct:`phrasing`,notInConstruct:im}],handlers:{delete:lm}}}function sm(e){this.enter({type:`delete`,children:[]},e)}function cm(e){this.exit(e)}function lm(e,t,n,r){let i=n.createTracker(r),a=n.enter(`strikethrough`),o=i.move(`~~`);return o+=n.containerPhrasing(e,{...i.current(),before:o,after:`~`}),o+=i.move(`~~`),a(),o}function um(){return`~`}function dm(e){return e.length}function fm(e,t){let n=t||{},r=(n.align||[]).concat(),i=n.stringLength||dm,a=[],o=[],s=[],c=[],l=0,u=-1;for(;++u<e.length;){let t=[],r=[],a=-1;for(e[u].length>l&&(l=e[u].length);++a<e[u].length;){let o=pm(e[u][a]);if(n.alignDelimiters!==!1){let e=i(o);r[a]=e,(c[a]===void 0||e>c[a])&&(c[a]=e)}t.push(o)}o[u]=t,s[u]=r}let d=-1;if(typeof r==`object`&&`length`in r)for(;++d<l;)a[d]=mm(r[d]);else{let e=mm(r);for(;++d<l;)a[d]=e}d=-1;let f=[],p=[];for(;++d<l;){let e=a[d],t=``,r=``;e===99?(t=`:`,r=`:`):e===108?t=`:`:e===114&&(r=`:`);let i=n.alignDelimiters===!1?1:Math.max(1,c[d]-t.length-r.length),o=t+`-`.repeat(i)+r;n.alignDelimiters!==!1&&(i=t.length+i+r.length,i>c[d]&&(c[d]=i),p[d]=i),f[d]=o}o.splice(1,0,f),s.splice(1,0,p),u=-1;let m=[];for(;++u<o.length;){let e=o[u],t=s[u];d=-1;let r=[];for(;++d<l;){let i=e[d]||``,o=``,s=``;if(n.alignDelimiters!==!1){let e=c[d]-(t[d]||0),n=a[d];n===114?o=` `.repeat(e):n===99?e%2?(o=` `.repeat(e/2+.5),s=` `.repeat(e/2-.5)):(o=` `.repeat(e/2),s=o):s=` `.repeat(e)}n.delimiterStart!==!1&&!d&&r.push(`|`),n.padding!==!1&&!(n.alignDelimiters===!1&&i===``)&&(n.delimiterStart!==!1||d)&&r.push(` `),n.alignDelimiters!==!1&&r.push(o),r.push(i),n.alignDelimiters!==!1&&r.push(s),n.padding!==!1&&r.push(` `),(n.delimiterEnd!==!1||d!==l-1)&&r.push(`|`)}m.push(n.delimiterEnd===!1?r.join(``).replace(/ +$/,``):r.join(``))}return m.join(`
`)}function pm(e){return e==null?``:String(e)}function mm(e){let t=typeof e==`string`?e.codePointAt(0):0;return t===67||t===99?99:t===76||t===108?108:t===82||t===114?114:0}function hm(e,t,n,r){let i=n.enter(`blockquote`),a=n.createTracker(r);a.move(`> `),a.shift(2);let o=n.indentLines(n.containerFlow(e,a.current()),gm);return i(),o}function gm(e,t,n){return`>`+(n?``:` `)+e}function _m(e,t){return vm(e,t.inConstruct,!0)&&!vm(e,t.notInConstruct,!1)}function vm(e,t,n){if(typeof t==`string`&&(t=[t]),!t||t.length===0)return n;let r=-1;for(;++r<t.length;)if(e.includes(t[r]))return!0;return!1}function ym(e,t,n,r){let i=-1;for(;++i<n.unsafe.length;)if(n.unsafe[i].character===`
`&&_m(n.stack,n.unsafe[i]))return/[ \t]/.test(r.before)?``:` `;return`\\
`}function bm(e,t){let n=String(e),r=n.indexOf(t),i=r,a=0,o=0;if(typeof t!=`string`)throw TypeError(`Expected substring`);for(;r!==-1;)r===i?++a>o&&(o=a):a=1,i=r+t.length,r=n.indexOf(t,i);return o}function xm(e,t){return!!(t.options.fences===!1&&e.value&&!e.lang&&/[^ \r\n]/.test(e.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(e.value))}function Sm(e){let t=e.options.fence||"`";if(t!=="`"&&t!==`~`)throw Error("Cannot serialize code with `"+t+"` for `options.fence`, expected `` ` `` or `~`");return t}function Cm(e,t,n,r){let i=Sm(n),a=e.value||``,o=i==="`"?`GraveAccent`:`Tilde`;if(xm(e,n)){let e=n.enter(`codeIndented`),t=n.indentLines(a,wm);return e(),t}let s=n.createTracker(r),c=i.repeat(Math.max(bm(a,i)+1,3)),l=n.enter(`codeFenced`),u=s.move(c);if(e.lang){let t=n.enter(`codeFencedLang${o}`);u+=s.move(n.safe(e.lang,{before:u,after:` `,encode:["`"],...s.current()})),t()}if(e.lang&&e.meta){let t=n.enter(`codeFencedMeta${o}`);u+=s.move(` `),u+=s.move(n.safe(e.meta,{before:u,after:`
`,encode:["`"],...s.current()})),t()}return u+=s.move(`
`),a&&(u+=s.move(a+`
`)),u+=s.move(c),l(),u}function wm(e,t,n){return(n?``:`    `)+e}function Tm(e){let t=e.options.quote||`"`;if(t!==`"`&&t!==`'`)throw Error("Cannot serialize title with `"+t+"` for `options.quote`, expected `\"`, or `'`");return t}function Em(e,t,n,r){let i=Tm(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`definition`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`[`);return l+=c.move(n.safe(n.associationId(e),{before:l,after:`]`,...c.current()})),l+=c.move(`]: `),s(),!e.url||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`
`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),o(),l}function Dm(e){let t=e.options.emphasis||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize emphasis with `"+t+"` for `options.emphasis`, expected `*`, or `_`");return t}function Om(e){return`&#x`+e.toString(16).toUpperCase()+`;`}function km(e,t,n){let r=Yc(e),i=Yc(t);return r===void 0?i===void 0?n===`_`?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:i===void 0?{inside:!1,outside:!1}:i===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Am.peek=jm;function Am(e,t,n,r){let i=Dm(n),a=n.enter(`emphasis`),o=n.createTracker(r),s=o.move(i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=km(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=Om(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=km(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+Om(d));let p=o.move(i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function jm(e,t,n){return n.options.emphasis||`*`}function Mm(e,t){let n=!1;return yf(e,function(e){if(`value`in e&&/\r?\n|\r/.test(e.value)||e.type===`break`)return n=!0,!1}),!!((!e.depth||e.depth<3)&&bc(e)&&(t.options.setext||n))}function Nm(e,t,n,r){let i=Math.max(Math.min(6,e.depth||1),1),a=n.createTracker(r);if(Mm(e,n)){let t=n.enter(`headingSetext`),r=n.enter(`phrasing`),o=n.containerPhrasing(e,{...a.current(),before:`
`,after:`
`});return r(),t(),o+`
`+(i===1?`=`:`-`).repeat(o.length-(Math.max(o.lastIndexOf(`\r`),o.lastIndexOf(`
`))+1))}let o=`#`.repeat(i),s=n.enter(`headingAtx`),c=n.enter(`phrasing`);a.move(o+` `);let l=n.containerPhrasing(e,{before:`# `,after:`
`,...a.current()});return/^[\t ]/.test(l)&&(l=Om(l.charCodeAt(0))+l.slice(1)),l=l?o+` `+l:o,n.options.closeAtx&&(l+=` `+o),c(),s(),l}Pm.peek=Fm;function Pm(e){return e.value||``}function Fm(){return`<`}Im.peek=Lm;function Im(e,t,n,r){let i=Tm(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.enter(`image`),s=n.enter(`label`),c=n.createTracker(r),l=c.move(`![`);return l+=c.move(n.safe(e.alt,{before:l,after:`]`,...c.current()})),l+=c.move(`](`),s(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(s=n.enter(`destinationLiteral`),l+=c.move(`<`),l+=c.move(n.safe(e.url,{before:l,after:`>`,...c.current()})),l+=c.move(`>`)):(s=n.enter(`destinationRaw`),l+=c.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...c.current()}))),s(),e.title&&(s=n.enter(`title${a}`),l+=c.move(` `+i),l+=c.move(n.safe(e.title,{before:l,after:i,...c.current()})),l+=c.move(i),s()),l+=c.move(`)`),o(),l}function Lm(){return`!`}Rm.peek=zm;function Rm(e,t,n,r){let i=e.referenceType,a=n.enter(`imageReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`![`),l=n.safe(e.alt,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function zm(){return`!`}Bm.peek=Vm;function Bm(e,t,n){let r=e.value||``,i="`",a=-1;for(;RegExp("(^|[^`])"+i+"([^`]|$)").test(r);)i+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=` `+r+` `);++a<n.unsafe.length;){let e=n.unsafe[a],t=n.compilePattern(e),i;if(e.atBreak)for(;i=t.exec(r);){let e=i.index;r.charCodeAt(e)===10&&r.charCodeAt(e-1)===13&&e--,r=r.slice(0,e)+` `+r.slice(i.index+1)}}return i+r+i}function Vm(){return"`"}function Hm(e,t){let n=bc(e);return!!(!t.options.resourceLink&&e.url&&!e.title&&e.children&&e.children.length===1&&e.children[0].type===`text`&&(n===e.url||`mailto:`+n===e.url)&&/^[a-z][a-z+.-]+:/i.test(e.url)&&!/[\0- <>\u007F]/.test(e.url))}Um.peek=Wm;function Um(e,t,n,r){let i=Tm(n),a=i===`"`?`Quote`:`Apostrophe`,o=n.createTracker(r),s,c;if(Hm(e,n)){let t=n.stack;n.stack=[],s=n.enter(`autolink`);let r=o.move(`<`);return r+=o.move(n.containerPhrasing(e,{before:r,after:`>`,...o.current()})),r+=o.move(`>`),s(),n.stack=t,r}s=n.enter(`link`),c=n.enter(`label`);let l=o.move(`[`);return l+=o.move(n.containerPhrasing(e,{before:l,after:`](`,...o.current()})),l+=o.move(`](`),c(),!e.url&&e.title||/[\0- \u007F]/.test(e.url)?(c=n.enter(`destinationLiteral`),l+=o.move(`<`),l+=o.move(n.safe(e.url,{before:l,after:`>`,...o.current()})),l+=o.move(`>`)):(c=n.enter(`destinationRaw`),l+=o.move(n.safe(e.url,{before:l,after:e.title?` `:`)`,...o.current()}))),c(),e.title&&(c=n.enter(`title${a}`),l+=o.move(` `+i),l+=o.move(n.safe(e.title,{before:l,after:i,...o.current()})),l+=o.move(i),c()),l+=o.move(`)`),s(),l}function Wm(e,t,n){return Hm(e,n)?`<`:`[`}Gm.peek=Km;function Gm(e,t,n,r){let i=e.referenceType,a=n.enter(`linkReference`),o=n.enter(`label`),s=n.createTracker(r),c=s.move(`[`),l=n.containerPhrasing(e,{before:c,after:`]`,...s.current()});c+=s.move(l+`][`),o();let u=n.stack;n.stack=[],o=n.enter(`reference`);let d=n.safe(n.associationId(e),{before:c,after:`]`,...s.current()});return o(),n.stack=u,a(),i===`full`||!l||l!==d?c+=s.move(d+`]`):i===`shortcut`?c=c.slice(0,-1):c+=s.move(`]`),c}function Km(){return`[`}function qm(e){let t=e.options.bullet||`*`;if(t!==`*`&&t!==`+`&&t!==`-`)throw Error("Cannot serialize items with `"+t+"` for `options.bullet`, expected `*`, `+`, or `-`");return t}function Jm(e){let t=qm(e),n=e.options.bulletOther;if(!n)return t===`*`?`-`:`*`;if(n!==`*`&&n!==`+`&&n!==`-`)throw Error("Cannot serialize items with `"+n+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(n===t)throw Error("Expected `bullet` (`"+t+"`) and `bulletOther` (`"+n+"`) to be different");return n}function Ym(e){let t=e.options.bulletOrdered||`.`;if(t!==`.`&&t!==`)`)throw Error("Cannot serialize items with `"+t+"` for `options.bulletOrdered`, expected `.` or `)`");return t}function Xm(e){let t=e.options.rule||`*`;if(t!==`*`&&t!==`-`&&t!==`_`)throw Error("Cannot serialize rules with `"+t+"` for `options.rule`, expected `*`, `-`, or `_`");return t}function Zm(e,t,n,r){let i=n.enter(`list`),a=n.bulletCurrent,o=e.ordered?Ym(n):qm(n),s=e.ordered?o===`.`?`)`:`.`:Jm(n),c=t&&n.bulletLastUsed?o===n.bulletLastUsed:!1;if(!e.ordered){let t=e.children?e.children[0]:void 0;if((o===`*`||o===`-`)&&t&&(!t.children||!t.children[0])&&n.stack[n.stack.length-1]===`list`&&n.stack[n.stack.length-2]===`listItem`&&n.stack[n.stack.length-3]===`list`&&n.stack[n.stack.length-4]===`listItem`&&n.indexStack[n.indexStack.length-1]===0&&n.indexStack[n.indexStack.length-2]===0&&n.indexStack[n.indexStack.length-3]===0&&(c=!0),Xm(n)===o&&t){let t=-1;for(;++t<e.children.length;){let n=e.children[t];if(n&&n.type===`listItem`&&n.children&&n.children[0]&&n.children[0].type===`thematicBreak`){c=!0;break}}}}c&&(o=s),n.bulletCurrent=o;let l=n.containerFlow(e,r);return n.bulletLastUsed=o,n.bulletCurrent=a,i(),l}function Qm(e){let t=e.options.listItemIndent||`one`;if(t!==`tab`&&t!==`one`&&t!==`mixed`)throw Error("Cannot serialize items with `"+t+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return t}function $m(e,t,n,r){let i=Qm(n),a=n.bulletCurrent||qm(n);t&&t.type===`list`&&t.ordered&&(a=(typeof t.start==`number`&&t.start>-1?t.start:1)+(n.options.incrementListMarker===!1?0:t.children.indexOf(e))+a);let o=a.length+1;(i===`tab`||i===`mixed`&&(t&&t.type===`list`&&t.spread||e.spread))&&(o=Math.ceil(o/4)*4);let s=n.createTracker(r);s.move(a+` `.repeat(o-a.length)),s.shift(o);let c=n.enter(`listItem`),l=n.indentLines(n.containerFlow(e,s.current()),u);return c(),l;function u(e,t,n){return t?(n?``:` `.repeat(o))+e:(n?a:a+` `.repeat(o-a.length))+e}}function eh(e,t,n,r){let i=n.enter(`paragraph`),a=n.enter(`phrasing`),o=n.containerPhrasing(e,r);return a(),i(),o}var th=cf([`break`,`delete`,`emphasis`,`footnote`,`footnoteReference`,`image`,`imageReference`,`inlineCode`,`inlineMath`,`link`,`linkReference`,`mdxJsxTextElement`,`mdxTextExpression`,`strong`,`text`,`textDirective`]);function nh(e,t,n,r){return(e.children.some(function(e){return th(e)})?n.containerPhrasing:n.containerFlow).call(n,e,r)}function rh(e){let t=e.options.strong||`*`;if(t!==`*`&&t!==`_`)throw Error("Cannot serialize strong with `"+t+"` for `options.strong`, expected `*`, or `_`");return t}ih.peek=ah;function ih(e,t,n,r){let i=rh(n),a=n.enter(`strong`),o=n.createTracker(r),s=o.move(i+i),c=o.move(n.containerPhrasing(e,{after:i,before:s,...o.current()})),l=c.charCodeAt(0),u=km(r.before.charCodeAt(r.before.length-1),l,i);u.inside&&(c=Om(l)+c.slice(1));let d=c.charCodeAt(c.length-1),f=km(r.after.charCodeAt(0),d,i);f.inside&&(c=c.slice(0,-1)+Om(d));let p=o.move(i+i);return a(),n.attentionEncodeSurroundingInfo={after:f.outside,before:u.outside},s+c+p}function ah(e,t,n){return n.options.strong||`*`}function oh(e,t,n,r){return n.safe(e.value,r)}function sh(e){let t=e.options.ruleRepetition||3;if(t<3)throw Error("Cannot serialize rules with repetition `"+t+"` for `options.ruleRepetition`, expected `3` or more");return t}function ch(e,t,n){let r=(Xm(n)+(n.options.ruleSpaces?` `:``)).repeat(sh(n));return n.options.ruleSpaces?r.slice(0,-1):r}var lh={blockquote:hm,break:ym,code:Cm,definition:Em,emphasis:Am,hardBreak:ym,heading:Nm,html:Pm,image:Im,imageReference:Rm,inlineCode:Bm,link:Um,linkReference:Gm,list:Zm,listItem:$m,paragraph:eh,root:nh,strong:ih,text:oh,thematicBreak:ch};function uh(){return{enter:{table:dh,tableData:hh,tableHeader:hh,tableRow:ph},exit:{codeText:gh,table:fh,tableData:mh,tableHeader:mh,tableRow:mh}}}function dh(e){let t=e._align;this.enter({type:`table`,align:t.map(function(e){return e===`none`?null:e}),children:[]},e),this.data.inTable=!0}function fh(e){this.exit(e),this.data.inTable=void 0}function ph(e){this.enter({type:`tableRow`,children:[]},e)}function mh(e){this.exit(e)}function hh(e){this.enter({type:`tableCell`,children:[]},e)}function gh(e){let t=this.resume();this.data.inTable&&(t=t.replace(/\\([\\|])/g,_h));let n=this.stack[this.stack.length-1];n.type,n.value=t,this.exit(e)}function _h(e,t){return t===`|`?t:e}function vh(e){let t=e||{},n=t.tableCellPadding,r=t.tablePipeAlign,i=t.stringLength,a=n?` `:`|`;return{unsafe:[{character:`\r`,inConstruct:`tableCell`},{character:`
`,inConstruct:`tableCell`},{atBreak:!0,character:`|`,after:`[	 :-]`},{character:`|`,inConstruct:`tableCell`},{atBreak:!0,character:`:`,after:`-`},{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{inlineCode:f,table:o,tableCell:c,tableRow:s}};function o(e,t,n,r){return l(u(e,n,r),e.align)}function s(e,t,n,r){let i=l([d(e,n,r)]);return i.slice(0,i.indexOf(`
`))}function c(e,t,n,r){let i=n.enter(`tableCell`),o=n.enter(`phrasing`),s=n.containerPhrasing(e,{...r,before:a,after:a});return o(),i(),s}function l(e,t){return fm(e,{align:t,alignDelimiters:r,padding:n,stringLength:i})}function u(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`table`);for(;++i<r.length;)a[i]=d(r[i],t,n);return o(),a}function d(e,t,n){let r=e.children,i=-1,a=[],o=t.enter(`tableRow`);for(;++i<r.length;)a[i]=c(r[i],e,t,n);return o(),a}function f(e,t,n){let r=lh.inlineCode(e,t,n);return n.stack.includes(`tableCell`)&&(r=r.replace(/\|/g,`\\$&`)),r}}function yh(){return{exit:{taskListCheckValueChecked:xh,taskListCheckValueUnchecked:xh,paragraph:Sh}}}function bh(){return{unsafe:[{atBreak:!0,character:`-`,after:`[:|-]`}],handlers:{listItem:Ch}}}function xh(e){let t=this.stack[this.stack.length-2];t.type,t.checked=e.type===`taskListCheckValueChecked`}function Sh(e){let t=this.stack[this.stack.length-2];if(t&&t.type===`listItem`&&typeof t.checked==`boolean`){let e=this.stack[this.stack.length-1];e.type;let n=e.children[0];if(n&&n.type===`text`){let r=t.children,i=-1,a;for(;++i<r.length;){let e=r[i];if(e.type===`paragraph`){a=e;break}}a===e&&(n.value=n.value.slice(1),n.value.length===0?e.children.shift():e.position&&n.position&&typeof n.position.start.offset==`number`&&(n.position.start.column++,n.position.start.offset++,e.position.start=Object.assign({},n.position.start)))}}this.exit(e)}function Ch(e,t,n,r){let i=e.children[0],a=typeof e.checked==`boolean`&&i&&i.type===`paragraph`,o=`[`+(e.checked?`x`:` `)+`] `,s=n.createTracker(r);a&&s.move(o);let c=lh.listItem(e,t,n,{...r,...s.current()});return a&&(c=c.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,l)),c;function l(e){return e+o}}function wh(){return[Ap(),em(),am(),uh(),yh()]}function Th(e){return{extensions:[jp(),tm(e),om(),vh(e),bh()]}}var Eh={tokenize:Bh,partial:!0},Dh={tokenize:Vh,partial:!0},Oh={tokenize:Hh,partial:!0},kh={tokenize:Uh,partial:!0},Ah={tokenize:Wh,partial:!0},jh={name:`wwwAutolink`,tokenize:Rh,previous:Gh},Mh={name:`protocolAutolink`,tokenize:zh,previous:Kh},Nh={name:`emailAutolink`,tokenize:Lh,previous:qh},Ph={};function Fh(){return{text:Ph}}for(var Ih=48;Ih<123;)Ph[Ih]=Nh,Ih++,Ih===58?Ih=65:Ih===91&&(Ih=97);Ph[43]=Nh,Ph[45]=Nh,Ph[46]=Nh,Ph[95]=Nh,Ph[72]=[Nh,Mh],Ph[104]=[Nh,Mh],Ph[87]=[Nh,jh],Ph[119]=[Nh,jh];function Lh(e,t,n){let r=this,i,a;return o;function o(t){return!Jh(t)||!qh.call(r,r.previous)||Yh(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkEmail`),s(t))}function s(t){return Jh(t)?(e.consume(t),s):t===64?(e.consume(t),c):n(t)}function c(t){return t===46?e.check(Ah,u,l)(t):t===45||t===95||Pc(t)?(a=!0,e.consume(t),c):u(t)}function l(t){return e.consume(t),i=!0,c}function u(o){return a&&i&&J(r.previous)?(e.exit(`literalAutolinkEmail`),e.exit(`literalAutolink`),t(o)):n(o)}}function Rh(e,t,n){let r=this;return i;function i(t){return t!==87&&t!==119||!Gh.call(r,r.previous)||Yh(r.events)?n(t):(e.enter(`literalAutolink`),e.enter(`literalAutolinkWww`),e.check(Eh,e.attempt(Dh,e.attempt(Oh,a),n),n)(t))}function a(n){return e.exit(`literalAutolinkWww`),e.exit(`literalAutolink`),t(n)}}function zh(e,t,n){let r=this,i=``,a=!1;return o;function o(t){return(t===72||t===104)&&Kh.call(r,r.previous)&&!Yh(r.events)?(e.enter(`literalAutolink`),e.enter(`literalAutolinkHttp`),i+=String.fromCodePoint(t),e.consume(t),s):n(t)}function s(t){if(J(t)&&i.length<5)return i+=String.fromCodePoint(t),e.consume(t),s;if(t===58){let n=i.toLowerCase();if(n===`http`||n===`https`)return e.consume(t),c}return n(t)}function c(t){return t===47?(e.consume(t),a?l:(a=!0,c)):n(t)}function l(t){return t===null||Ic(t)||X(t)||Vc(t)||Bc(t)?n(t):e.attempt(Dh,e.attempt(Oh,u),n)(t)}function u(n){return e.exit(`literalAutolinkHttp`),e.exit(`literalAutolink`),t(n)}}function Bh(e,t,n){let r=0;return i;function i(t){return(t===87||t===119)&&r<3?(r++,e.consume(t),i):t===46&&r===3?(e.consume(t),a):n(t)}function a(e){return e===null?n(e):t(e)}}function Vh(e,t,n){let r,i,a;return o;function o(t){return t===46||t===95?e.check(kh,c,s)(t):t===null||X(t)||Vc(t)||t!==45&&Bc(t)?c(t):(a=!0,e.consume(t),o)}function s(t){return t===95?r=!0:(i=r,r=void 0),e.consume(t),o}function c(e){return i||r||!a?n(e):t(e)}}function Hh(e,t){let n=0,r=0;return i;function i(o){return o===40?(n++,e.consume(o),i):o===41&&r<n?a(o):o===33||o===34||o===38||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===60||o===63||o===93||o===95||o===126?e.check(kh,t,a)(o):o===null||X(o)||Vc(o)?t(o):(e.consume(o),i)}function a(t){return t===41&&r++,e.consume(t),i}}function Uh(e,t,n){return r;function r(o){return o===33||o===34||o===39||o===41||o===42||o===44||o===46||o===58||o===59||o===63||o===95||o===126?(e.consume(o),r):o===38?(e.consume(o),a):o===93?(e.consume(o),i):o===60||o===null||X(o)||Vc(o)?t(o):n(o)}function i(e){return e===null||e===40||e===91||X(e)||Vc(e)?t(e):r(e)}function a(e){return J(e)?o(e):n(e)}function o(t){return t===59?(e.consume(t),r):J(t)?(e.consume(t),o):n(t)}}function Wh(e,t,n){return r;function r(t){return e.consume(t),i}function i(e){return Pc(e)?n(e):t(e)}}function Gh(e){return e===null||e===40||e===42||e===95||e===91||e===93||e===126||X(e)}function Kh(e){return!J(e)}function qh(e){return!(e===47||Jh(e))}function Jh(e){return e===43||e===45||e===46||e===95||Pc(e)}function Yh(e){let t=e.length,n=!1;for(;t--;){let r=e[t][1];if((r.type===`labelLink`||r.type===`labelImage`)&&!r._balanced){n=!0;break}if(r._gfmAutolinkLiteralWalkedInto){n=!1;break}}return e.length>0&&!n&&(e[e.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),n}var Xh={tokenize:ig,partial:!0};function Zh(){return{document:{91:{name:`gfmFootnoteDefinition`,tokenize:tg,continuation:{tokenize:ng},exit:rg}},text:{91:{name:`gfmFootnoteCall`,tokenize:eg},93:{name:`gfmPotentialFootnoteCall`,add:`after`,tokenize:Qh,resolveTo:$h}}}}function Qh(e,t,n){let r=this,i=r.events.length,a=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),o;for(;i--;){let e=r.events[i][1];if(e.type===`labelImage`){o=e;break}if(e.type===`gfmFootnoteCall`||e.type===`labelLink`||e.type===`label`||e.type===`image`||e.type===`link`)break}return s;function s(i){if(!o||!o._balanced)return n(i);let s=Nc(r.sliceSerialize({start:o.end,end:r.now()}));return s.codePointAt(0)!==94||!a.includes(s.slice(1))?n(i):(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(i),e.exit(`gfmFootnoteCallLabelMarker`),t(i))}}function $h(e,t){let n=e.length;for(;n--;)if(e[n][1].type===`labelImage`&&e[n][0]===`enter`){e[n][1];break}e[n+1][1].type=`data`,e[n+3][1].type=`gfmFootnoteCallLabelMarker`;let r={type:`gfmFootnoteCall`,start:Object.assign({},e[n+3][1].start),end:Object.assign({},e[e.length-1][1].end)},i={type:`gfmFootnoteCallMarker`,start:Object.assign({},e[n+3][1].end),end:Object.assign({},e[n+3][1].end)};i.end.column++,i.end.offset++,i.end._bufferIndex++;let a={type:`gfmFootnoteCallString`,start:Object.assign({},i.end),end:Object.assign({},e[e.length-1][1].start)},o={type:`chunkString`,contentType:`string`,start:Object.assign({},a.start),end:Object.assign({},a.end)},s=[e[n+1],e[n+2],[`enter`,r,t],e[n+3],e[n+4],[`enter`,i,t],[`exit`,i,t],[`enter`,a,t],[`enter`,o,t],[`exit`,o,t],[`exit`,a,t],e[e.length-2],e[e.length-1],[`exit`,r,t]];return e.splice(n,e.length-n+1,...s),e}function eg(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a=0,o;return s;function s(t){return e.enter(`gfmFootnoteCall`),e.enter(`gfmFootnoteCallLabelMarker`),e.consume(t),e.exit(`gfmFootnoteCallLabelMarker`),c}function c(t){return t===94?(e.enter(`gfmFootnoteCallMarker`),e.consume(t),e.exit(`gfmFootnoteCallMarker`),e.enter(`gfmFootnoteCallString`),e.enter(`chunkString`).contentType=`string`,l):n(t)}function l(s){if(a>999||s===93&&!o||s===null||s===91||X(s))return n(s);if(s===93){e.exit(`chunkString`);let a=e.exit(`gfmFootnoteCallString`);return i.includes(Nc(r.sliceSerialize(a)))?(e.enter(`gfmFootnoteCallLabelMarker`),e.consume(s),e.exit(`gfmFootnoteCallLabelMarker`),e.exit(`gfmFootnoteCall`),t):n(s)}return X(s)||(o=!0),a++,e.consume(s),s===92?u:l}function u(t){return t===91||t===92||t===93?(e.consume(t),a++,l):l(t)}}function tg(e,t,n){let r=this,i=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]),a,o=0,s;return c;function c(t){return e.enter(`gfmFootnoteDefinition`)._container=!0,e.enter(`gfmFootnoteDefinitionLabel`),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),l}function l(t){return t===94?(e.enter(`gfmFootnoteDefinitionMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionMarker`),e.enter(`gfmFootnoteDefinitionLabelString`),e.enter(`chunkString`).contentType=`string`,u):n(t)}function u(t){if(o>999||t===93&&!s||t===null||t===91||X(t))return n(t);if(t===93){e.exit(`chunkString`);let n=e.exit(`gfmFootnoteDefinitionLabelString`);return a=Nc(r.sliceSerialize(n)),e.enter(`gfmFootnoteDefinitionLabelMarker`),e.consume(t),e.exit(`gfmFootnoteDefinitionLabelMarker`),e.exit(`gfmFootnoteDefinitionLabel`),f}return X(t)||(s=!0),o++,e.consume(t),t===92?d:u}function d(t){return t===91||t===92||t===93?(e.consume(t),o++,u):u(t)}function f(t){return t===58?(e.enter(`definitionMarker`),e.consume(t),e.exit(`definitionMarker`),i.includes(a)||i.push(a),$(e,p,`gfmFootnoteDefinitionWhitespace`)):n(t)}function p(e){return t(e)}}function ng(e,t,n){return e.check(rl,t,e.attempt(Xh,t,n))}function rg(e){e.exit(`gfmFootnoteDefinition`)}function ig(e,t,n){let r=this;return $(e,i,`gfmFootnoteDefinitionIndent`,5);function i(e){let i=r.events[r.events.length-1];return i&&i[1].type===`gfmFootnoteDefinitionIndent`&&i[2].sliceSerialize(i[1],!0).length===4?t(e):n(e)}}function ag(e){let t=(e||{}).singleTilde,n={name:`strikethrough`,tokenize:i,resolveAll:r};return t??=!0,{text:{126:n},insideSpan:{null:[n]},attentionMarkers:{null:[126]}};function r(e,t){let n=-1;for(;++n<e.length;)if(e[n][0]===`enter`&&e[n][1].type===`strikethroughSequenceTemporary`&&e[n][1]._close){let r=n;for(;r--;)if(e[r][0]===`exit`&&e[r][1].type===`strikethroughSequenceTemporary`&&e[r][1]._open&&e[n][1].end.offset-e[n][1].start.offset===e[r][1].end.offset-e[r][1].start.offset){e[n][1].type=`strikethroughSequence`,e[r][1].type=`strikethroughSequence`;let i={type:`strikethrough`,start:Object.assign({},e[r][1].start),end:Object.assign({},e[n][1].end)},a={type:`strikethroughText`,start:Object.assign({},e[r][1].end),end:Object.assign({},e[n][1].start)},o=[[`enter`,i,t],[`enter`,e[r][1],t],[`exit`,e[r][1],t],[`enter`,a,t]],s=t.parser.constructs.insideSpan.null;s&&Ec(o,o.length,0,Xc(s,e.slice(r+1,n),t)),Ec(o,o.length,0,[[`exit`,a,t],[`enter`,e[n][1],t],[`exit`,e[n][1],t],[`exit`,i,t]]),Ec(e,r-1,n-r+3,o),n=r+o.length-2;break}}for(n=-1;++n<e.length;)e[n][1].type===`strikethroughSequenceTemporary`&&(e[n][1].type=`data`);return e}function i(e,n,r){let i=this.previous,a=this.events,o=0;return s;function s(t){return i===126&&a[a.length-1][1].type!==`characterEscape`?r(t):(e.enter(`strikethroughSequenceTemporary`),c(t))}function c(a){let s=Yc(i);if(a===126)return o>1?r(a):(e.consume(a),o++,c);if(o<2&&!t)return r(a);let l=e.exit(`strikethroughSequenceTemporary`),u=Yc(a);return l._open=!u||u===2&&!!s,l._close=!s||s===2&&!!u,n(a)}}}var og=class{constructor(){this.map=[]}add(e,t,n){sg(this,e,t,n)}consume(e){if(this.map.sort(function(e,t){return e[0]-t[0]}),this.map.length===0)return;let t=this.map.length,n=[];for(;t>0;)--t,n.push(e.slice(this.map[t][0]+this.map[t][1]),this.map[t][2]),e.length=this.map[t][0];n.push(e.slice()),e.length=0;let r=n.pop();for(;r;){for(let t of r)e.push(t);r=n.pop()}this.map.length=0}};function sg(e,t,n,r){let i=0;if(!(n===0&&r.length===0)){for(;i<e.map.length;){if(e.map[i][0]===t){e.map[i][1]+=n,e.map[i][2].push(...r);return}i+=1}e.map.push([t,n,r])}}function cg(e,t){let n=!1,r=[];for(;t<e.length;){let i=e[t];if(n){if(i[0]===`enter`)i[1].type===`tableContent`&&r.push(e[t+1][1].type===`tableDelimiterMarker`?`left`:`none`);else if(i[1].type===`tableContent`){if(e[t-1][1].type===`tableDelimiterMarker`){let e=r.length-1;r[e]=r[e]===`left`?`center`:`right`}}else if(i[1].type===`tableDelimiterRow`)break}else i[0]===`enter`&&i[1].type===`tableDelimiterRow`&&(n=!0);t+=1}return r}function lg(){return{flow:{null:{name:`table`,tokenize:ug,resolveAll:dg}}}}function ug(e,t,n){let r=this,i=0,a=0,o;return s;function s(e){let t=r.events.length-1;for(;t>-1;){let e=r.events[t][1].type;if(e===`lineEnding`||e===`linePrefix`)t--;else break}let i=t>-1?r.events[t][1].type:null,a=i===`tableHead`||i===`tableRow`?S:c;return a===S&&r.parser.lazy[r.now().line]?n(e):a(e)}function c(t){return e.enter(`tableHead`),e.enter(`tableRow`),l(t)}function l(e){return e===124?u(e):(o=!0,a+=1,u(e))}function u(t){return t===null?n(t):Y(t)?a>1?(a=0,r.interrupt=!0,e.exit(`tableRow`),e.enter(`lineEnding`),e.consume(t),e.exit(`lineEnding`),p):n(t):Z(t)?$(e,u,`whitespace`)(t):(a+=1,o&&(o=!1,i+=1),t===124?(e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),o=!0,u):(e.enter(`data`),d(t)))}function d(t){return t===null||t===124||X(t)?(e.exit(`data`),u(t)):(e.consume(t),t===92?f:d)}function f(t){return t===92||t===124?(e.consume(t),d):d(t)}function p(t){return r.interrupt=!1,r.parser.lazy[r.now().line]?n(t):(e.enter(`tableDelimiterRow`),o=!1,Z(t)?$(e,m,`linePrefix`,r.parser.constructs.disable.null.includes(`codeIndented`)?void 0:4)(t):m(t))}function m(t){return t===45||t===58?g(t):t===124?(o=!0,e.enter(`tableCellDivider`),e.consume(t),e.exit(`tableCellDivider`),h):x(t)}function h(t){return Z(t)?$(e,g,`whitespace`)(t):g(t)}function g(t){return t===58?(a+=1,o=!0,e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),_):t===45?(a+=1,_(t)):t===null||Y(t)?b(t):x(t)}function _(t){return t===45?(e.enter(`tableDelimiterFiller`),v(t)):x(t)}function v(t){return t===45?(e.consume(t),v):t===58?(o=!0,e.exit(`tableDelimiterFiller`),e.enter(`tableDelimiterMarker`),e.consume(t),e.exit(`tableDelimiterMarker`),y):(e.exit(`tableDelimiterFiller`),y(t))}function y(t){return Z(t)?$(e,b,`whitespace`)(t):b(t)}function b(n){return n===124?m(n):n===null||Y(n)?!o||i!==a?x(n):(e.exit(`tableDelimiterRow`),e.exit(`tableHead`),t(n)):x(n)}function x(e){return n(e)}function S(t){return e.enter(`tableRow`),C(t)}function C(n){return n===124?(e.enter(`tableCellDivider`),e.consume(n),e.exit(`tableCellDivider`),C):n===null||Y(n)?(e.exit(`tableRow`),t(n)):Z(n)?$(e,C,`whitespace`)(n):(e.enter(`data`),w(n))}function w(t){return t===null||t===124||X(t)?(e.exit(`data`),C(t)):(e.consume(t),t===92?T:w)}function T(t){return t===92||t===124?(e.consume(t),w):w(t)}}function dg(e,t){let n=-1,r=!0,i=0,a=[0,0,0,0],o=[0,0,0,0],s=!1,c=0,l,u,d,f=new og;for(;++n<e.length;){let p=e[n],m=p[1];p[0]===`enter`?m.type===`tableHead`?(s=!1,c!==0&&(pg(f,t,c,l,u),u=void 0,c=0),l={type:`table`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,l,t]])):m.type===`tableRow`||m.type===`tableDelimiterRow`?(r=!0,d=void 0,a=[0,0,0,0],o=[0,n+1,0,0],s&&(s=!1,u={type:`tableBody`,start:Object.assign({},m.start),end:Object.assign({},m.end)},f.add(n,0,[[`enter`,u,t]])),i=m.type===`tableDelimiterRow`?2:u?3:1):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)?(r=!1,o[2]===0&&(a[1]!==0&&(o[0]=o[1],d=fg(f,t,a,i,void 0,d),a=[0,0,0,0]),o[2]=n)):m.type===`tableCellDivider`&&(r?r=!1:(a[1]!==0&&(o[0]=o[1],d=fg(f,t,a,i,void 0,d)),a=o,o=[a[1],n,0,0])):m.type===`tableHead`?(s=!0,c=n):m.type===`tableRow`||m.type===`tableDelimiterRow`?(c=n,a[1]===0?o[1]!==0&&(d=fg(f,t,o,i,n,d)):(o[0]=o[1],d=fg(f,t,a,i,n,d)),i=0):i&&(m.type===`data`||m.type===`tableDelimiterMarker`||m.type===`tableDelimiterFiller`)&&(o[3]=n)}for(c!==0&&pg(f,t,c,l,u),f.consume(t.events),n=-1;++n<t.events.length;){let e=t.events[n];e[0]===`enter`&&e[1].type===`table`&&(e[1]._align=cg(t.events,n))}return e}function fg(e,t,n,r,i,a){let o=r===1?`tableHeader`:r===2?`tableDelimiter`:`tableData`;n[0]!==0&&(a.end=Object.assign({},mg(t.events,n[0])),e.add(n[0],0,[[`exit`,a,t]]));let s=mg(t.events,n[1]);if(a={type:o,start:Object.assign({},s),end:Object.assign({},s)},e.add(n[1],0,[[`enter`,a,t]]),n[2]!==0){let i=mg(t.events,n[2]),a=mg(t.events,n[3]),o={type:`tableContent`,start:Object.assign({},i),end:Object.assign({},a)};if(e.add(n[2],0,[[`enter`,o,t]]),r!==2){let r=t.events[n[2]],i=t.events[n[3]];if(r[1].end=Object.assign({},i[1].end),r[1].type=`chunkText`,r[1].contentType=`text`,n[3]>n[2]+1){let t=n[2]+1,r=n[3]-n[2]-1;e.add(t,r,[])}}e.add(n[3]+1,0,[[`exit`,o,t]])}return i!==void 0&&(a.end=Object.assign({},mg(t.events,i)),e.add(i,0,[[`exit`,a,t]]),a=void 0),a}function pg(e,t,n,r,i){let a=[],o=mg(t.events,n);i&&(i.end=Object.assign({},o),a.push([`exit`,i,t])),r.end=Object.assign({},o),a.push([`exit`,r,t]),e.add(n+1,0,a)}function mg(e,t){let n=e[t],r=n[0]===`enter`?`start`:`end`;return n[1][r]}var hg={name:`tasklistCheck`,tokenize:_g};function gg(){return{text:{91:hg}}}function _g(e,t,n){let r=this;return i;function i(t){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?n(t):(e.enter(`taskListCheck`),e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),a)}function a(t){return X(t)?(e.enter(`taskListCheckValueUnchecked`),e.consume(t),e.exit(`taskListCheckValueUnchecked`),o):t===88||t===120?(e.enter(`taskListCheckValueChecked`),e.consume(t),e.exit(`taskListCheckValueChecked`),o):n(t)}function o(t){return t===93?(e.enter(`taskListCheckMarker`),e.consume(t),e.exit(`taskListCheckMarker`),e.exit(`taskListCheck`),s):n(t)}function s(r){return Y(r)?t(r):Z(r)?e.check({tokenize:vg},t,n)(r):n(r)}}function vg(e,t,n){return $(e,r,`whitespace`);function r(e){return e===null?n(e):t(e)}}function yg(e){return kc([Fh(),Zh(),ag(e),lg(),gg()])}var bg={};function xg(e){let t=this,n=e||bg,r=t.data(),i=r.micromarkExtensions||=[],a=r.fromMarkdownExtensions||=[],o=r.toMarkdownExtensions||=[];i.push(yg(n)),a.push(wh()),o.push(Th(n))}var Sg=[{id:3,title:`LLMs in Blockchain Security: A Deep Dive`,publishDate:`2024-11-17T11:30:00.000Z`,displayDate:`17/11/2024`,excerpt:`Explore how Large Language Models are revolutionizing blockchain security through automated smart contract analysis. Learn about the technical approaches, challenges, and future possibilities in combining AI with blockchain technology to create more secure decentralized systems.`,readingTime:12,filename:`blog3.md`,slug:`llms-blockchain-security`,changefreq:`yearly`,priority:`0.6`},{id:2,title:`What is Ethereum?`,publishDate:`2024-11-14T13:41:00.000Z`,displayDate:`14/11/2024`,excerpt:`A comprehensive guide to Ethereum, exploring its evolution from Bitcoin's limitations to becoming a revolutionary platform for smart contracts, DeFi, NFTs, and DAOs. Discover how this 'world computer' is shaping the future of decentralized technology.`,readingTime:10,filename:`blog2.md`,slug:`what-is-ethereum`,changefreq:`yearly`,priority:`0.6`},{id:1,title:`What is Bitcoin?`,publishDate:`2024-11-09T08:30:00.000Z`,displayDate:`9/11/2024`,excerpt:`Discover Bitcoin's revolutionary approach to digital payments, exploring how it eliminates intermediaries through blockchain technology and cryptographic proof. Learn about its core concepts, security mechanisms, and potential to transform the future of money.`,readingTime:8,filename:`blog1.md`,slug:`what-is-bitcoin`,changefreq:`yearly`,priority:`0.6`}],Cg=F.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`,wg=F.div`
  width: 100%;
  border: 1px solid ${e=>e.theme.researchCardBorder};
  background: ${e=>e.theme.researchCardBackground};
  padding: 1.5rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(5px);
  box-shadow: ${e=>e.theme.researchCardShadow};
  margin-bottom: 2rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${e=>e.theme.researchCardHoverShadow};
    background: ${e=>e.theme.researchCardExpandedBg};
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(to right, var(--primary), transparent);
  }

  &:after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      to bottom,
      transparent,
      ${e=>e.theme.researchCardHighlight}10,
      transparent
    );
    transform: rotate(45deg);
    animation: scan 10s linear infinite;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover:after {
    opacity: 1;
  }

  @keyframes scan {
    from {
      transform: translateY(-50%) rotate(45deg);
    }
    to {
      transform: translateY(50%) rotate(45deg);
    }
  }
`,Tg=F.article`
  background: ${e=>e.theme.researchCardBackground};
  border: 1px solid ${e=>e.theme.researchCardBorder};
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 2rem;
  backdrop-filter: blur(5px);
  box-shadow: ${e=>e.theme.researchCardShadow};
  
  @media (max-width: 768px) {
    padding: 1rem;
  }

  h3, h4 {
    color: ${e=>e.theme.researchCardTitle};
    margin: 1.5rem 0 1rem;
    font-family: 'Courier New', monospace;
  }

  p {
    margin-bottom: 1rem;
    line-height: 1.8;
    color: ${e=>e.theme.researchCardText};
  }

  ul, ol {
    margin-bottom: 1rem;
    padding-left: 2rem;
    color: ${e=>e.theme.researchCardText};
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: ${e=>e.theme.researchCardHighlight};
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    overflow-x: auto;
    display: block;
  }

  th, td {
    border: 1px solid ${e=>e.theme.researchCardBorder};
    padding: 0.5rem;
    text-align: left;
    white-space: nowrap;
    color: ${e=>e.theme.researchCardText};
  }

  th {
    background: ${e=>e.theme.researchCardTag.background};
    color: ${e=>e.theme.researchCardTag.text};
  }
`,Eg=F.h2`
  color: ${e=>e.theme.researchCardTitle};
  font-size: 1.8rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  position: relative;
  display: inline-block;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: ${e=>e.theme.researchCardHighlight};
    transition: width 0.3s ease;
  }

  ${wg}:hover &:after {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`,Dg=F.div`
  color: ${e=>e.theme.researchCardSecondary};
  font-size: 0.9rem;
  margin-bottom: 1rem;
  font-family: 'Courier New', monospace;
  opacity: 0.8;
`,Og=F.p`
  margin: 1rem 0;
  line-height: 1.6;
  color: ${e=>e.theme.researchCardText};
`,kg=F.button`
  background: none;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: 'Courier New', monospace;
  position: relative;
  overflow: hidden;
  margin-top: 1rem;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: var(--primary);
    transform: translate(-50%, -50%);
    border-radius: 50%;
    transition: width 0.3s ease, height 0.3s ease;
    z-index: -1;
  }

  @media (hover: hover) {
    &:hover {
      color: var(--background);
      &:before {
        width: 300%;
        height: 300%;
      }
    }
  }

  &:active {
    color: var(--background);
    &:before {
      width: 300%;
      height: 300%;
    }
  }

  &:focus {
    outline: none;
  }

  @media (hover: none) {
    &:focus {
      background: none;
      color: var(--primary);
      &:before {
        width: 0;
        height: 0;
      }
    }
  }
`,Ag=F.div`
  margin-bottom: 3rem;
  
  h1 {
    color: var(--primary);
    font-size: 2.5rem;
    margin-bottom: 1rem;
    font-family: 'Courier New', monospace;
    
    &:before {
      content: '$ ls ~/blog/';
      display: block;
      font-size: 1rem;
      opacity: 0.7;
      margin-bottom: 0.5rem;
    }
    
    @media (max-width: 768px) {
      font-size: 2rem;
    }
  }
  
  .subtitle {
    color: ${e=>e.theme.researchCardSecondary};
    font-family: 'Courier New', monospace;
    line-height: 1.6;
  }
`,jg=F.div`
  margin-bottom: 2rem;
  color: ${e=>e.theme.researchCardSecondary};
  font-family: 'Courier New', monospace;
  cursor: pointer;
  
  &:hover {
    color: var(--primary);
  }
`,Mg=F(jg)`
  margin-top: 3rem;
  margin-bottom: 0;
  display: block;
`,Ng=F.span`
  color: ${e=>e.theme.researchCardSecondary};
  font-size: 0.9rem;
  font-family: 'Courier New', monospace;
  opacity: 0.8;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`,Pg=F.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
`,Fg=F.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  color: var(--primary);
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  font-weight: bold;
  opacity: 0.7;
`,Ig=()=>{let[e,t]=(0,_.useState)(null),[n,r]=(0,_.useState)([]),[i,a]=(0,_.useState)(``),{slug:o}=Ze(),s=qe(),c=(0,_.useRef)({});(0,_.useEffect)(()=>{let e=[...Sg].sort((e,t)=>new Date(t.publishDate)-new Date(e.publishDate));if(r(e),o){let n=e.find(e=>e.slug===o);n?t(n):s(`/blog`,{replace:!0})}else t(null)},[o,s]),(0,_.useEffect)(()=>{e&&(a(``),fetch(`./${e.filename}`).then(t=>{if(!t.ok)throw Error(`Failed to load ${e.filename}`);return t.text()}).then(e=>{a(e),window.scrollTo({top:0,behavior:`smooth`})}).catch(e=>console.error(`Error loading blog post:`,e)))},[e]);let l=()=>{let t=e.id;s(`/blog`),setTimeout(()=>{c.current[t]&&c.current[t].scrollIntoView({behavior:`smooth`,block:`center`})},100)};return e?(0,I.jsx)(Cg,{children:(0,I.jsxs)(Tg,{children:[(0,I.jsx)(jg,{onClick:l,children:`← Back to Blog List`}),(0,I.jsx)(Eg,{children:e.title}),(0,I.jsx)(Dg,{children:e.displayDate}),(0,I.jsxs)(Ng,{children:[`📚 `,e.readingTime,` min read`]}),(0,I.jsx)(_p,{remarkPlugins:[xg],children:i}),(0,I.jsx)(Mg,{onClick:l,children:`← Back to Blog List`})]})}):(0,I.jsxs)(Cg,{children:[(0,I.jsxs)(Ag,{children:[(0,I.jsx)(`h1`,{children:`Blog`}),(0,I.jsx)(`div`,{className:`subtitle`,children:`✨ Random thoughts from a programmer who talks to computers more than humans 💻`})]}),(0,I.jsx)(Pg,{children:n.map((e,t)=>(0,I.jsxs)(wg,{ref:t=>c.current[e.id]=t,children:[(0,I.jsxs)(Fg,{children:[`Blog `,t+1,`/`,n.length]}),(0,I.jsx)(Eg,{children:e.title}),(0,I.jsx)(Dg,{children:e.displayDate}),(0,I.jsx)(Og,{children:e.excerpt}),(0,I.jsxs)(Ng,{children:[`📚 `,e.readingTime,` min read`]}),(0,I.jsx)(Pt,{to:`/blog/${e.slug}`,style:{textDecoration:`none`},children:(0,I.jsx)(kg,{children:`< Read More />`})})]},e.id))})]})},Lg=F.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  text-align: center;
  padding: 2rem;
  position: relative;
`,Rg=F.h1`
  color: var(--primary);
  font-size: 8rem;
  margin: 0;
  font-family: "Courier New", monospace;
  text-shadow: 0 0 20px ${e=>e.theme.primary}80;
  animation: glitch 2s infinite;

  @keyframes glitch {
    0%,
    90%,
    100% {
      transform: translate(0);
    }
    92% {
      transform: translate(-2px, 2px);
    }
    94% {
      transform: translate(2px, -2px);
    }
    96% {
      transform: translate(-2px, -2px);
    }
    98% {
      transform: translate(2px, 2px);
    }
  }

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`,zg=F.div`
  background: ${e=>e.theme.codeBackground||`rgba(0, 0, 0, 0.3)`};
  border: 2px solid var(--primary);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  font-family: "Courier New", monospace;
  color: var(--primary);
  text-align: left;
  max-width: 600px;
  width: 100%;
  box-shadow: 0 4px 20px ${e=>e.theme.primary}30;

  @media (max-width: 768px) {
    padding: 1rem;
    font-size: 0.85rem;
  }
`,Bg=F.div`
  margin: 0.5rem 0;
  opacity: 0;
  animation: fadeInLine 0.5s ease forwards;
  animation-delay: ${e=>e.$delay}s;

  @keyframes fadeInLine {
    from {
      opacity: 0;
      transform: translateX(-10px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  .success {
    color: #00ff00;
  }

  .error {
    color: #ff4444;
  }

  .warning {
    color: #ffaa00;
  }

  .prompt {
    color: var(--primary);
  }
`,Vg=F.div`
  background: linear-gradient(
    135deg,
    ${e=>e.theme.primary}10,
    ${e=>e.theme.secondary}10
  );
  border: 1px dashed var(--primary);
  border-radius: 8px;
  padding: 1.5rem;
  margin: 2rem 0;
  max-width: 600px;
  width: 100%;

  .title {
    color: var(--primary);
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .hint {
    font-size: 0.95rem;
    line-height: 1.6;
    color: var(--text);
    opacity: 0.9;
  }

  .code {
    font-family: "Courier New", monospace;
    background: ${e=>e.theme.codeBackground||`rgba(0, 0, 0, 0.2)`};
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    color: var(--primary);
    font-size: 0.9rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;

    .title {
      font-size: 1rem;
    }

    .hint {
      font-size: 0.85rem;
    }
  }
`,Hg=F(Pt)`
  padding: 0.8rem 1.5rem;
  border: 1px solid var(--primary);
  color: var(--primary);
  transition: all 0.3s ease;
  font-family: "Courier New", monospace;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--primary);
    transition: left 0.3s ease;
    z-index: -1;
  }

  &:hover {
    color: var(--background);
    transform: translateY(-2px);
    box-shadow: 0 4px 15px ${e=>e.theme.primary}50;

    &::before {
      left: 0;
    }
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
`,Ug=()=>{let[e,t]=(0,_.useState)(!1);return(0,_.useEffect)(()=>{let e=setTimeout(()=>{t(!0)},3e3);return console.clear(),console.log(`%c🔐 SECURITY ALERT: Unauthorized Access Detected!`,`color: #ff4444; font-size: 20px; font-weight: bold; text-shadow: 0 0 10px #ff4444;`),console.log(`%c...Just kidding! Welcome, curious explorer! 😄`,`color: #00ff00; font-size: 16px; font-weight: bold;`),console.log(``),console.log(`%c╔════════════════════════════════════════╗`,`color: #00ffff; font-family: monospace;`),console.log(`%c║  🎯 Marshall's Console Playground     ║`,`color: #00ffff; font-family: monospace;`),console.log(`%c╚════════════════════════════════════════╝`,`color: #00ffff; font-family: monospace;`),console.log(``),console.log(`%cAvailable Commands:`,`color: #ffaa00; font-size: 14px; font-weight: bold;`),console.log(`%c  • marshall.whoami()`,`color: #00ffff; font-family: monospace;`),console.log(`%c    → Learn more about me`,`color: #888; font-size: 12px;`),console.log(`%c  • marshall.decrypt("SGVsbG8hIFRoaXMgaXMgYSBoaWRkZW4gbWVzc2FnZSE=")`,`color: #00ffff; font-family: monospace;`),console.log(`%c    → Decode secret messages`,`color: #888; font-size: 12px;`),console.log(`%c  • marshall.skills()`,`color: #00ffff; font-family: monospace;`),console.log(`%c    → View my technical skills`,`color: #888; font-size: 12px;`),console.log(`%c  • marshall.hack()`,`color: #00ffff; font-family: monospace;`),console.log(`%c    → ??? Try it and see!`,`color: #888; font-size: 12px;`),console.log(`%c  • marshall.contact()`,`color: #00ffff; font-family: monospace;`),console.log(`%c    → Get my contact information`,`color: #888; font-size: 12px;`),console.log(``),console.log(`%c💡 Pro Tip: Type any command above to interact!`,`color: #ffaa00; font-style: italic;`),console.log(``),window.marshall={whoami:()=>(console.log(`%c┌─[marshall@security]─[~]`,`color: #00ffff; font-family: monospace;`),console.log(`%c└──╼ $ whoami`,`color: #00ffff; font-family: monospace;`),console.log(``),console.log(`%c👨‍💻 Zijun (Marshall) Zhang`,`color: #00ff00; font-weight: bold; font-size: 14px;`),console.log(`%c🎓 PhD Student @ University of Melbourne`,`color: #fff;`),console.log(`%c🔐 Research: Trustworthy ML/AI`,`color: #fff;`),console.log(`%c🌏 Location: Melbourne, Australia`,`color: #fff;`),console.log(``),console.log(`%c"Security is not a product, but a process." - Bruce Schneier`,`color: #ffaa00; font-style: italic;`),`✅ Command executed successfully`),decrypt:e=>{console.log(`%c┌─[marshall@security]─[~]`,`color: #00ffff; font-family: monospace;`),console.log(`%c└──╼ $ decrypt "${e}"`,`color: #00ffff; font-family: monospace;`),console.log(``);try{let t=atob(e);return console.log(`%c🔓 Decryption successful!`,`color: #00ff00; font-weight: bold;`),console.log(`%cDecoded message:`,`color: #ffaa00;`),console.log(`%c"${t}"`,`color: #fff; font-size: 14px;`),t}catch{return console.log(`%c❌ Decryption failed: Invalid Base64 encoding`,`color: #ff4444;`),console.log(`%c💡 Hint: Message must be Base64 encoded`,`color: #888;`),`Error: Invalid encoding`}},skills:()=>{console.log(`%c┌─[marshall@security]─[~]`,`color: #00ffff; font-family: monospace;`),console.log(`%c└──╼ $ cat skills.json`,`color: #00ffff; font-family: monospace;`),console.log(``);let e={"Security & Cryptography":[`Applied Cryptography`,`Blockchain Security`,`Trustworthy Machine Learning`],Programming:[`Python`,`C/C++`,`JavaScript/TypeScript`],"ML & AI":[`PyTorch`,`TensorFlow`,`Transformers`,`Large Language Models`,`Machine Unlearning`],Tools:[`Git`,`Docker`,`Linux`,`LaTeX`,`Burp Suite`],Languages:[`English`,`Chinese`]};return console.table(e),console.log(`%c✅ Skills loaded successfully`,`color: #00ff00;`),e},hack:()=>{console.log(`%c┌─[marshall@security]─[~]`,`color: #00ffff; font-family: monospace;`),console.log(`%c└──╼ $ sudo ./hack_the_planet.sh`,`color: #00ffff; font-family: monospace;`),console.log(``),console.log(`%c[*] Initializing hacking sequence...`,`color: #ffaa00;`);let e=[`Scanning network... 192.168.1.0/24`,`Found 42 devices online`,`Exploiting vulnerabilities...`,`Buffer overflow detected at 0x7fff5fbff8c0`,`Privilege escalation in progress...`,`Access granted: root@mainframe`,`Downloading secret files...`,`FBI ALERT: Trace detected!`,`Deploying anti-forensics...`,`Clearing logs...`,`Connection terminated safely`],t=0;return e.forEach((n,r)=>{setTimeout(()=>{r===e.length-3?console.log(`%c[!] ${n}`,`color: #ff4444; font-weight: bold;`):r===e.length-1?(console.log(`%c[✓] ${n}`,`color: #00ff00;`),console.log(``),console.log(`%c😂 Just kidding! This is just a fun simulation.`,`color: #fff; font-size: 14px;`),console.log(`%cRemember: Real hacking is illegal. Stay ethical! 🛡️`,`color: #ffaa00; font-weight: bold;`)):console.log(`%c[*] ${n}`,`color: #00ffff;`)},t),t+=300}),`Hacking sequence initiated... (watch the console!)`},contact:()=>(console.log(`%c┌─[marshall@security]─[~]`,`color: #00ffff; font-family: monospace;`),console.log(`%c└──╼ $ cat contact.txt`,`color: #00ffff; font-family: monospace;`),console.log(``),console.log(`%c📬 Contact Information:`,`color: #00ff00; font-weight: bold; font-size: 14px;`),console.log(``),console.log(`%c📧 Email:`,`color: #ffaa00; font-weight: bold;`),console.log(`   zijuzhang1@student.unimelb.edu.au`),console.log(``),console.log(`%c🐦 Twitter:`,`color: #ffaa00; font-weight: bold;`),console.log(`   @Romanticism_02`),console.log(``),console.log(`%c👨‍💻 GitHub:`,`color: #ffaa00; font-weight: bold;`),console.log(`   github.com/dredre815`),console.log(``),console.log(`%c💼 LinkedIn:`,`color: #ffaa00; font-weight: bold;`),console.log(`   linkedin.com/in/zijunzhang2002`),console.log(``),console.log(`%c✨ Feel free to reach out!`,`color: #00ffff; font-style: italic;`),`✅ Contact information displayed`)},()=>clearTimeout(e)},[]),(0,I.jsxs)(Lg,{children:[(0,I.jsx)(Rg,{children:`HTTP 404`}),(0,I.jsxs)(zg,{children:[(0,I.jsx)(Bg,{$delay:0,children:(0,I.jsx)(`span`,{className:`prompt`,children:`┌─[marshall@security]─[~]`})}),(0,I.jsxs)(Bg,{$delay:.3,children:[(0,I.jsx)(`span`,{className:`prompt`,children:`└──╼ $ `}),`ls -la /requested_page`]}),(0,I.jsx)(Bg,{$delay:.6,children:(0,I.jsx)(`span`,{className:`error`,children:`ls: cannot access '/requested_page': No such file or directory`})}),(0,I.jsx)(Bg,{$delay:.9,children:(0,I.jsx)(`span`,{className:`prompt`,children:`┌─[marshall@security]─[~]`})}),(0,I.jsxs)(Bg,{$delay:1.2,children:[(0,I.jsx)(`span`,{className:`prompt`,children:`└──╼ $ `}),`grep -r "vulnerability" /requested_page`]}),(0,I.jsx)(Bg,{$delay:1.5,children:(0,I.jsx)(`span`,{className:`success`,children:`[✓] No vulnerabilities found`})}),(0,I.jsx)(Bg,{$delay:1.8,children:(0,I.jsx)(`span`,{className:`warning`,children:`[!] Looks like you found a path traversal... just kidding! 😏`})}),(0,I.jsx)(Bg,{$delay:2.1,children:(0,I.jsx)(`span`,{className:`prompt`,children:`┌─[marshall@security]─[~]`})}),(0,I.jsxs)(Bg,{$delay:2.4,children:[(0,I.jsx)(`span`,{className:`prompt`,children:`└──╼ $ `}),`echo "Redirecting to home..."`]})]}),e&&(0,I.jsxs)(Vg,{children:[(0,I.jsx)(`div`,{className:`title`,children:`🎯 Security Researcher Easter Egg Detected!`}),(0,I.jsxs)(`div`,{className:`hint`,children:[`Since you're here exploring the dark corners of my website, you might enjoy checking out the browser console. I've left a few surprises for curious minds like yours. Try typing`,` `,(0,I.jsx)(`span`,{className:`code`,children:`marshall.whoami()`}),` or explore the source code for more hidden gems! 🔍✨`]})]}),(0,I.jsx)(Hg,{to:`/`,children:`$ cd /home && ./explore.sh`})]})};function Wg(){return(0,I.jsx)(L,{children:(0,I.jsx)(jt,{future:{v7_startTransition:!0,v7_relativeSplatPath:!0},children:(0,I.jsxs)(Sa,{children:[(0,I.jsx)(Ui,{}),(0,I.jsx)(Ra,{}),(0,I.jsx)(xt,{children:(0,I.jsxs)(yt,{element:(0,I.jsx)(ba,{}),children:[(0,I.jsx)(yt,{path:`/`,element:(0,I.jsx)(uo,{})}),(0,I.jsx)(yt,{path:`/research`,element:(0,I.jsx)(To,{})}),(0,I.jsx)(yt,{path:`/projects`,element:(0,I.jsx)(Fo,{})}),(0,I.jsx)(yt,{path:`/cv`,element:(0,I.jsx)(Uo,{})}),(0,I.jsx)(yt,{path:`/blog`,element:(0,I.jsx)(Ig,{})}),(0,I.jsx)(yt,{path:`/blog/:slug`,element:(0,I.jsx)(Ig,{})}),(0,I.jsx)(yt,{path:`*`,element:(0,I.jsx)(Ug,{})})]})})]})})})}v.createRoot(document.getElementById(`root`)).render((0,I.jsx)(_.StrictMode,{children:(0,I.jsx)(Wg,{})}));