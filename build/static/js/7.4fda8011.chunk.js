(this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]||[]).push([[7],{1e3:function(e,t,n){e.exports=n(1290)},1037:function(e,t,n){"use strict";var r=n(44),a=n(143),i=(n(0),n(1e3)),o=n.n(i),c=n(528),s=n(18);var l=function(e){return Object(s.jsx)("div",{className:"invalid-feedback",children:e.children})},u=["formik","name"],f=Object(c.f)((function(e){var t=e.formik,n=e.name,i=Object(a.a)(e,u),f=t.handleChange,d=t.handleBlur,h=Object(c.g)(t.errors,n),b=Object(c.g)(t.touched,n);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o.a,Object(r.a)(Object(r.a)({mask:"+\\91 999 999 9999"},i),{},{value:e.value,onChange:f,onBlur:d,className:"form-control ".concat(h&&b?"is-invalid":"")})),Object(s.jsx)(c.a,{name:n,component:l})]})})),d=["formik","name"],h=Object(c.f)((function(e){var t=e.formik,n=e.name,i=Object(a.a)(e,d),u=t.handleChange,f=t.handleBlur,h=Object(c.g)(t.errors,n),b=Object(c.g)(t.touched,n);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o.a,Object(r.a)(Object(r.a)({mask:"999999"},i),{},{value:e.value,onChange:u,onBlur:f,className:"form-control ".concat(h&&b?"is-invalid":"")})),Object(s.jsx)(c.a,{name:n,component:l})]})})),b=["formik","name"],j=Object(c.f)((function(e){var t=e.formik,n=e.name,i=Object(a.a)(e,b),u=t.handleChange,f=t.handleBlur,d=Object(c.g)(t.errors,n),h=Object(c.g)(t.touched,n);return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(o.a,Object(r.a)(Object(r.a)({mask:"9999 9999 9999 9999"},i),{},{value:e.value,onChange:u,onBlur:f,className:"form-control ".concat(d&&h?"is-invalid":"")})),Object(s.jsx)(c.a,{name:n,component:l})]})})),m=["control"];t.a=function(e){var t=e.control,n=Object(a.a)(e,m);switch(t){case"phone":return Object(s.jsx)(f,Object(r.a)({},n));case"pincode":return Object(s.jsx)(h,Object(r.a)({},n));case"credit":return Object(s.jsx)(j,Object(r.a)({},n));default:return null}}},1290:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var a=n(0),i=r(a),o=n(22);n(63);var c=r(n(1291));function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function u(e){return requestAnimationFrame(e)}function f(e){cancelAnimationFrame(e)}function d(e){var t=e.ownerDocument;return t.hasFocus()&&t.activeElement===e}function h(e){return null==e?void 0:e.ownerDocument}function b(e){return a.useCallback((function(){var t=e.current,n="undefined"!=typeof window&&function(e){var t=function(e){var t;return null==(t=h(e))?void 0:t.defaultView}(e);return!!t&&e instanceof t.HTMLElement}(t);if(!t||!n)return null;if("INPUT"!==t.nodeName&&(t=t.querySelector("input")),!t)throw new Error("react-input-mask: inputComponent doesn't contain input node");return t}),[e])}function j(e,t){var n,r,i,o,c=a.useRef({start:null,end:null}),s=b(e),l=a.useCallback((function(){return function(e){var t=e.selectionStart,n=e.selectionEnd;return{start:t,end:n,length:n-t}}(s())}),[s]),h=a.useCallback((function(){return c.current}),[]),j=a.useCallback((function(e){var t=s();t&&d(t)&&(function(e,t,n){void 0===n&&(n=t),e.setSelectionRange(t,n)}(t,e.start,e.end),c.current=l())}),[s,l]),m=a.useCallback((function(){c.current=l()}),[l]),v=(n=m,r=a.useRef(null),i=a.useCallback((function(){null===r.current&&function e(){n(),r.current=u(e)}()}),[n]),o=a.useCallback((function(){f(r.current),r.current=null}),[]),a.useEffect((function(){r.current&&(o(),i())}),[i,o]),a.useEffect(f,[]),[i,o]),g=v[0],O=v[1];return a.useLayoutEffect((function(){if(t){var e=s();return e.addEventListener("focus",g),e.addEventListener("blur",O),d(e)&&g(),function(){e.removeEventListener("focus",g),e.removeEventListener("blur",O),O()}}})),{getSelection:l,getLastSelection:h,setSelection:j}}function m(e,t){var n=a.useRef(),r=j(n,t),i=r.getSelection,o=r.getLastSelection,c=r.setSelection,s=function(e,t){var n=b(e),r=a.useRef(t);return{getValue:a.useCallback((function(){return n().value}),[n]),getLastValue:a.useCallback((function(){return r.current}),[]),setValue:a.useCallback((function(e){r.current=e;var t=n();t&&(t.value=e)}),[n])}}(n,e),l=s.getValue,u=s.getLastValue,f=s.setValue;return{inputRef:n,getInputState:function(){return{value:l(),selection:i()}},getLastInputState:function(){return{value:u(),selection:o()}},setInputState:function(e){var t=e.value,n=e.selection;f(t),c(n)}}}n(1292);var v=["disabled","onBlur","onChange","onFocus","onMouseDown","readOnly","value"],g={9:/[0-9]/,a:/[A-Za-z]/,"*":/[A-Za-z0-9]/},O=function(e){var t=this;this.isCharacterAllowedAtPosition=function(e,n){var r=t.maskOptions.maskPlaceholder;return!!t.isCharacterFillingPosition(e,n)||!!r&&r[n]===e},this.isCharacterFillingPosition=function(e,n){var r=t.maskOptions.mask;if(!e||n>=r.length)return!1;if(!t.isPositionEditable(n))return r[n]===e;var a=r[n];return new RegExp(a).test(e)},this.isPositionEditable=function(e){var n=t.maskOptions,r=n.mask,a=n.permanents;return e<r.length&&-1===a.indexOf(e)},this.isValueEmpty=function(e){return e.split("").every((function(e,n){return!t.isPositionEditable(n)||!t.isCharacterFillingPosition(e,n)}))},this.isValueFilled=function(e){return t.getFilledLength(e)===t.maskOptions.lastEditablePosition+1},this.getDefaultSelectionForValue=function(e){var n=t.getFilledLength(e),r=t.getRightEditablePosition(n);return{start:r,end:r}},this.getFilledLength=function(e){return function(e,t){for(var n=e.length-1;n>=0;n--)if(t(e[n],n))return n;return-1}(e.split(""),(function(e,n){return t.isPositionEditable(n)&&t.isCharacterFillingPosition(e,n)}))+1},this.getStringFillingLengthAtPosition=function(e,n){return e.split("").reduce((function(e,n){return t.insertCharacterAtPosition(e,n,e.length)}),function(e,t){void 0===t&&(t=1);for(var n="",r=0;r<t;r++)n+=" ";return n}(0,n)).length-n},this.getLeftEditablePosition=function(e){for(var n=e;n>=0;n--)if(t.isPositionEditable(n))return n;return null},this.getRightEditablePosition=function(e){for(var n=t.maskOptions.mask,r=e;r<n.length;r++)if(t.isPositionEditable(r))return r;return null},this.formatValue=function(e){var n=t.maskOptions,r=n.maskPlaceholder,a=n.mask;if(!r){for(e=t.insertStringAtPosition("",e,0);e.length<a.length&&!t.isPositionEditable(e.length);)e+=a[e.length];return e}return t.insertStringAtPosition(r,e,0)},this.clearRange=function(e,n,r){if(!r)return e;var a=n+r,i=t.maskOptions,o=i.maskPlaceholder,c=i.mask,s=e.split("").map((function(e,r){var i=t.isPositionEditable(r);return!o&&r>=a&&!i?"":r<n||r>=a?e:i?o?o[r]:"":c[r]})).join("");return t.formatValue(s)},this.insertCharacterAtPosition=function(e,n,r){var a=t.maskOptions,i=a.mask,o=a.maskPlaceholder;if(r>=i.length)return e;var c=t.isCharacterAllowedAtPosition(n,r),s=t.isPositionEditable(r),l=t.getRightEditablePosition(r),u=o&&l?n===o[l]:null,f=e.slice(0,r);return!c&&s||(e=f+(c?n:i[r])),c||s||u||(e=t.insertCharacterAtPosition(e,n,r+1)),e},this.insertStringAtPosition=function(e,n,r){var a=t.maskOptions,i=a.mask,o=a.maskPlaceholder;if(!n||r>=i.length)return e;var c=n.split(""),s=t.isValueFilled(e)||!!o,l=e.slice(r);return e=c.reduce((function(e,n){return t.insertCharacterAtPosition(e,n,e.length)}),e.slice(0,r)),s?e+=l.slice(e.length-r):t.isValueFilled(e)?e+=i.slice(e.length).join(""):e=l.split("").filter((function(e,n){return t.isPositionEditable(r+n)})).reduce((function(e,n){var r=t.getRightEditablePosition(e.length);return null===r?e:(t.isPositionEditable(e.length)||(e+=i.slice(e.length,r).join("")),t.insertCharacterAtPosition(e,n,e.length))}),e),e},this.processChange=function(e,n){var r=t.maskOptions,a=r.mask,i=r.prefix,o=r.lastEditablePosition,c=e.value,s=e.selection,l=n.value,u=n.selection,f=c,d="",h=0,b=0,j=Math.min(u.start,s.start);return s.end>u.start?(d=f.slice(u.start,s.end),b=(h=t.getStringFillingLengthAtPosition(d,j))?u.length:0):f.length<l.length&&(b=l.length-f.length),f=l,b&&(1!==b||u.length||(j=u.start===s.start?t.getRightEditablePosition(s.start):t.getLeftEditablePosition(s.start)),f=t.clearRange(f,j,b)),f=t.insertStringAtPosition(f,d,j),(j+=h)>=a.length?j=a.length:j<i.length&&!h?j=i.length:j>=i.length&&j<o&&h&&(j=t.getRightEditablePosition(j)),{value:f=t.formatValue(f),enteredString:d,selection:{start:j,end:j}}},this.maskOptions=function(e){var t=e.mask,n=e.maskPlaceholder,r=[];if(!t)return{maskPlaceholder:null,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};if("string"==typeof t){var a=!1,i="";t.split("").forEach((function(e){a||"\\"!==e?(!a&&g[e]||r.push(i.length),i+=e,a=!1):a=!0})),t=i.split("").map((function(e,t){return-1===r.indexOf(t)?g[e]:e}))}else t.forEach((function(e,t){"string"==typeof e&&r.push(t)}));n&&(n=1===n.length?t.map((function(e,t){return-1!==r.indexOf(t)?e:n})):n.split(""),r.forEach((function(e){n[e]=t[e]})),n=n.join(""));for(var o=r.filter((function(e,t){return e===t})).map((function(e){return t[e]})).join(""),c=t.length-1;-1!==r.indexOf(c);)c--;return{maskPlaceholder:n,prefix:o,mask:t,lastEditablePosition:c,permanents:r}}(e)},p=function(e){function t(){return e.apply(this,arguments)||this}return function(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,function(e,t){for(var n=Object.getOwnPropertyNames(t),r=0;r<n.length;r++){var a=n[r],i=Object.getOwnPropertyDescriptor(t,a);i&&i.configurable&&void 0===e[a]&&Object.defineProperty(e,a,i)}}(e,t)}(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=l(e,["children"]);return i.cloneElement(t,n)},t}(i.Component),k=a.forwardRef((function(e,t){var n=e.alwaysShowMask,r=e.children,f=e.mask,j=e.maskPlaceholder,g=e.beforeMaskedStateChange,k=l(e,["alwaysShowMask","children","mask","maskPlaceholder","beforeMaskedStateChange"]);!function(e){var t=e.mask,n=e.maskPlaceholder;t&&n&&1!==n.length&&n.length!==t.length&&c(!1)}(e);var x,P,C=new O({mask:f,maskPlaceholder:j}),E=!!f,S=!k.disabled&&!k.readOnly,w=null!==e.value&&void 0!==e.value,y=(x=E,P=a.useRef(),a.useEffect((function(){P.current=x})),P.current),F=m(function(e){return""+e}((w?e.value:e.defaultValue)||""),E),V=F.inputRef,L=F.getInputState,A=F.setInputState,N=F.getLastInputState,M=b(V);if(E&&w){var R=M(),B=R&&d(R)||n||e.value?C.formatValue(e.value):e.value;g&&(B=g({nextState:{value:B,selection:{start:null,end:null}}}).value),A(s({},N(),{value:B}))}var D=N(),I=D.selection,T=D.value;a.useLayoutEffect((function(){if(E){var e=d(M()),t=I,r=L(),a=s({},r);if(!w){var i=r.value,o=C.formatValue(i),c=C.isValueEmpty(o);!c||e||n?a.value=o:c&&!e&&(a.value="")}e&&!y?a.selection=C.getDefaultSelectionForValue(a.value):w&&e&&t&&null!==t.start&&null!==t.end&&(a.selection=t),g&&(a=g({currentState:r,nextState:a})),A(a)}}));var z=s({},k,{onFocus:function(t){V.current=t.target;var n=L().value;if(E&&!C.isValueFilled(n)){var r=C.formatValue(n),a=C.getDefaultSelectionForValue(r),i={value:r,selection:a};g&&(r=(i=g({currentState:L(),nextState:i})).value,a=i.selection),A(i),r!==n&&e.onChange&&e.onChange(t),u((function(){A(N())}))}e.onFocus&&e.onFocus(t)},onBlur:function(t){var r=L().value,a=N().value;if(E&&!n&&C.isValueEmpty(a)){var i="",o={value:i,selection:{start:null,end:null}};g&&(i=(o=g({currentState:L(),nextState:o})).value),A(o),i!==r&&e.onChange&&e.onChange(t)}e.onBlur&&e.onBlur(t)},onChange:E&&S?function(t){var n=L(),r=N(),a=C.processChange(n,r);g&&(a=g({currentState:n,previousState:r,nextState:a})),A(a),e.onChange&&e.onChange(t)}:e.onChange,onMouseDown:E&&S?function(t){var n=M(),r=L().value,a=h(n);if(!d(n)&&!C.isValueFilled(r)){var i=t.clientX,o=t.clientY,c=(new Date).getTime();a.addEventListener("mouseup",(function e(t){if(a.removeEventListener("mouseup",e),d(n)){var r=Math.abs(t.clientX-i),l=Math.abs(t.clientY-o),u=Math.max(r,l),f=(new Date).getTime()-c;if(u<=10&&f<=200||u<=5&&f<=300){var h=N(),b=s({},h,{selection:C.getDefaultSelectionForValue(h.value)});A(b)}}}))}e.onMouseDown&&e.onMouseDown(t)}:e.onMouseDown,ref:function(e){V.current=o.findDOMNode(e),function(e){return"function"==typeof e}(t)?t(e):null!==t&&"object"==typeof t&&(t.current=e)},value:E&&w?T:e.value});return r?(function(e,t){v.filter((function(n){return null!=t.props[n]&&t.props[n]!==e[n]})).length&&c(!1)}(e,r),i.createElement(p,z,r)):i.createElement("input",z)}));k.displayName="InputMask",k.defaultProps={alwaysShowMask:!1,maskPlaceholder:"_"},e.exports=k},1291:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,i,o,c){if(!e){var s;if(void 0===t)s=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,a,i,o,c],u=0;(s=new Error(t.replace(/%s/g,(function(){return l[u++]})))).name="Invariant Violation"}throw s.framesToPop=1,s}}},1292:function(e,t,n){"use strict";var r=function(){};e.exports=r},548:function(e,t,n){var r=n(146).toast;e.exports=function(e,t){switch(e){case"info":r.info(t);break;case"success":r.success(t);break;case"warning":r.warn(t);break;case"error":r.error(t);break;case"dark":r.dark(t);break;default:r(t)}}},555:function(e,t,n){var r,a=n(548),i=n(590).default,o="";localStorage.getItem("user")&&(o=JSON.parse(localStorage.getItem("user")).token),""==o?(console.log("there isno token"),r=i.create({timeout:6e3,headers:{"Content-Type":"application/json"}})):r=i.create({timeout:6e3,headers:{"Content-Type":"application/json",authorization:"Bearer "+o}}),r.interceptors.response.use((function(e){return e}),(function(e){401===e.response.status?(localStorage.removeItem("user"),window.location="/#/login",console.log(e.response.data.message),a("error",e.response.data.message)):a("error",e.response.data.message)})),e.exports=r},592:function(e,t,n){"use strict";n(0);var r=n(18);t.a=function(){return Object(r.jsx)("div",{className:"spinner-border spinner-border-sm",role:"status"})}},593:function(e,t,n){"use strict";var r=n(44),a=n(143),i=n(0),o=n.n(i),c=n(142),s=n(528),l=n(18);var u=function(e){return Object(l.jsx)("div",{className:"invalid-feedback",children:e.children})},f=["formik","name","options","switcher"],d=Object(s.f)((function(e){var t=e.formik,n=e.name,i=e.options,d=(e.switcher,Object(a.a)(e,f)),h=Object(s.g)(t.errors,n),b=Object(s.g)(t.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.b,Object(r.a)(Object(r.a)({name:n},d),{},{children:function(e){var t=e.field;return i.map((function(e){return Object(l.jsx)(o.a.Fragment,{children:Object(l.jsx)(c.u,Object(r.a)(Object(r.a)(Object(r.a)({id:e.value},t),d),{},{value:e.value,checked:t.value?t.value.includes(e.value):"",label:e.text,disabled:!!e.disabled&&e.disabled,className:"".concat(h&&b?"is-invalid":"","\n                  }")}))},e.text)}))}})),Object(l.jsx)(s.a,{name:n,component:u})]})})),h=["formik","name","id"];var b=Object(s.f)((function(e){var t=e.formik,n=e.name,i=e.id,o=Object(a.a)(e,h),f=t.handleChange,d=t.handleBlur,b=Object(s.g)(t.errors,n),j=Object(s.g)(t.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(c.w,Object(r.a)(Object(r.a)({id:i,name:n,onChange:f,onBlur:d},o),{},{className:"form-control ".concat(b&&j?"is-invalid":"")})),Object(l.jsx)(s.a,{name:n,component:u})]})})),j=n(543),m=["formik","name","id","options"],v=Object(s.f)((function(e){var t=e.formik,n=e.name,o=e.id,f=e.options,d=Object(a.a)(e,m),h=t.handleChange,b=t.handleBlur,v=Object(s.g)(t.errors,n),g=Object(s.g)(t.touched,n),O=Object(i.useState)([]),p=Object(j.a)(O,2),k=p[0],x=p[1],P=[];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.b,{name:n,id:o,onChange:h,onBlur:b,children:function(e){var a=e.field;return k.map((function(e){return P.push(e.value),P})),t.values["".concat(n)]=P,Object(l.jsx)(c.L,Object(r.a)(Object(r.a)(Object(r.a)({},a),d),{},{options:f,onChange:x,className:"form-control  ".concat(v&&g?"is-invalid":"")}))}}),Object(l.jsx)(s.a,{name:n,component:u})]})})),g=["formik","name","options"],O=Object(s.f)((function(e){var t=e.formik,n=e.name,i=e.options,f=Object(a.a)(e,g),d=Object(s.g)(t.errors,n),h=Object(s.g)(t.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.b,Object(r.a)(Object(r.a)({name:n},f),{},{children:function(e){var t=e.field;return i.map((function(e){return Object(l.jsx)(o.a.Fragment,{children:Object(l.jsx)(c.u,Object(r.a)(Object(r.a)(Object(r.a)({type:"radio",id:e.value},t),f),{},{value:e.value,checked:t.value===e.value,label:e.text,className:"".concat(d&&h?"is-invalid":"")}))},e.text)}))}})),Object(l.jsx)(s.a,{name:n,component:u})]})})),p=["formik","name","options","id","placeholder"],k=Object(s.f)((function(e){var t=e.formik,n=e.name,i=e.options,o=e.id,f=e.placeholder,d=Object(a.a)(e,p),h=(t.handleChange,t.handleBlur,Object(s.g)(t.errors,n)),b=Object(s.g)(t.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.b,Object(r.a)(Object(r.a)({name:n},d),{},{children:function(e){var t=e.field;return Object(l.jsxs)(c.y,Object(r.a)(Object(r.a)(Object(r.a)({id:o,name:n},d),t),{},{className:"form-control ".concat(h&&b?"is-invalid":""),children:[Object(l.jsxs)("option",{value:"",children:[" ",f||"Select..."]}),i.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))]}))}})),Object(l.jsx)(s.a,{name:n,component:u})]})})),x=["formik","name","options","id","placeholder"],P=Object(s.f)((function(e){var t=e.formik,n=e.name,i=e.options,o=e.id,f=e.placeholder,d=Object(a.a)(e,x),h=Object(s.g)(t.errors,n),b=Object(s.g)(t.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.b,Object(r.a)(Object(r.a)({name:n},d),{},{children:function(e){var t=e.field;return Object(l.jsxs)(c.y,Object(r.a)(Object(r.a)(Object(r.a)({id:o,name:n},d),t),{},{className:"form-control ".concat(h&&b?"is-invalid":""),children:[Object(l.jsxs)("option",{value:"",children:[" ",f||"Select..."]}),i.map((function(e){return Object(l.jsx)("option",{value:e.value,children:e.text},e.value)}))]}))}})),Object(l.jsx)(s.a,{name:n,component:u})]})})),C=["formik","name","id"],E=Object(s.f)((function(e){var t=e.formik,n=e.name,i=e.id,o=Object(a.a)(e,C),f=(t.handleChange,t.handleBlur,Object(s.g)(t.errors,n)),d=Object(s.g)(t.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(s.b,Object(r.a)(Object(r.a)({name:n},o),{},{children:function(e){var t=e.field;return Object(l.jsx)(c.z,Object(r.a)(Object(r.a)(Object(r.a)({id:i,name:n},t),o),{},{className:"form-control ".concat(f&&d?"is-invalid":"")}))}})),Object(l.jsx)(s.a,{name:n,component:u})]})})),S=["control"];t.a=function(e){var t=e.control,n=Object(a.a)(e,S);switch(t){case"input":return Object(l.jsx)(b,Object(r.a)({},n));case"textarea":return Object(l.jsx)(E,Object(r.a)({},n));case"select":return Object(l.jsx)(k,Object(r.a)({},n));case"selectwithkey":return Object(l.jsx)(P,Object(r.a)({},n));case"multiselect":return Object(l.jsx)(v,Object(r.a)({},n));case"radio":return Object(l.jsx)(O,Object(r.a)({},n));case"checkbox":return Object(l.jsx)(d,Object(r.a)({},n));default:return null}}}}]);
//# sourceMappingURL=7.4fda8011.chunk.js.map