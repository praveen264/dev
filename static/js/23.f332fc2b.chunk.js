(this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]||[]).push([[23],{1629:function(e,t,n){"use strict";n.r(t);var a=n(583),c=n.n(a),r=n(584),s=n(553),i=n(142),o=n(0),l=n(577),j=n(603),d=n(607),b=n(531),u=n(702),m=n(608),O=n(612),h=n(560),x=n.n(h),f=n(550),p=n.n(f),v=n(145),g=n(18);t.default=function(e){var t=e.match.params.school_id,n=Object(o.useState)(!1),a=Object(s.a)(n,2),h=a[0],f=a[1],y=Object(o.useState)(0),k=Object(s.a)(y,2),C=k[0],S=k[1],q=Object(o.useState)(""),N=Object(s.a)(q,2),w=N[0],T=N[1],F=Object(o.useState)(""),_=Object(s.a)(F,2),D=_[0],H=_[1],M=Object(o.useState)(""),A=Object(s.a)(M,2),B=A[0],L=A[1],z=Object(o.useState)(""),P=Object(s.a)(z,2),I=P[0],E=P[1],J=function(){setTimeout((function(){return f(!0)}),0)},G=function(){setTimeout((function(){return f(!1)}),0)},U=function(){var e=new Date,t=String(e.getDate()).padStart(2,"0"),n=String(e.getMonth()+1).padStart(2,"0"),a=e.getFullYear();return e=a+"-"+n+"-"+t},V=function(e,t){if(""!=e&&""!=t){var n=e.split("-").reverse();n=n[1]+"/"+n[0]+"/"+n[2];var a=t.split("-").reverse();a=a[1]+"/"+a[0]+"/"+a[2];var c=new Date(n),r=new Date(a),s=Math.abs(r-c),i=Math.ceil(s/864e5);S(i+1)}else S(0)},Y={type:"",name:"",start_date:w,end_date:D,days:C},R=u.b().shape({type:u.d().required("Holiday type is required"),name:u.d().required("Holiday name is required"),start_date:u.d().required("Start date is required"),end_date:u.d().required("End date is required"),days:u.d().required("Number of days is required")}),W=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("http://test.saakshar.co.in/api/v1/cm/create-calender",{school_id:t,type:B,name:I,start:w,end:D,duration:C}).then(function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p()("success",t.data.message);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){p()("error",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(i.h,{children:Object(g.jsx)(i.e,{className:"p-2",children:Object(g.jsxs)(i.f,{children:[Object(g.jsx)(i.U,{children:Object(g.jsx)(i.k,{children:Object(g.jsx)(l.a,{id:t})})}),Object(g.jsx)(i.U,{children:Object(g.jsx)(i.k,{md:"8",lg:"6",xl:"8",children:Object(g.jsx)("h5",{children:"Add Holiday"})})}),Object(g.jsx)("p",{className:"text-muted",children:"Create Holiday List"}),Object(g.jsx)(b.e,{initialValues:Y,validationSchema:R,onSubmit:W,enableReinitialize:!0,children:function(e){return Object(g.jsxs)(b.d,{className:"row g-3",children:[Object(g.jsxs)(i.k,{md:6,children:[Object(g.jsx)(i.y,{htmlFor:"type",className:"required-field",children:"Type"}),Object(g.jsxs)(i.z,{name:"type",value:B,id:"type",onChange:function(e){return L(e.target.value)},placeholder:"Please select any one type",children:[Object(g.jsx)("option",{value:"",children:"Please select any one type"}),Object(g.jsx)("option",{value:"Holiday",children:"Holiday"}),Object(g.jsx)("option",{value:"exam_calender",children:"Exam Calendar"}),Object(g.jsx)("option",{value:"summer_holiday",children:"Summer Holiday"}),Object(g.jsx)("option",{value:"winter_holiday",children:"Winter Holiday"})]})]}),Object(g.jsxs)(i.k,{md:6,children:[Object(g.jsx)(i.y,{htmlFor:"name",className:"required-field",children:"Name"}),Object(g.jsx)(i.x,{name:"name",id:"name",placeholder:"Holiday Name",value:I,onChange:function(e){return E(e.target.value)}})]}),Object(g.jsxs)(i.k,{md:6,children:[Object(g.jsx)(i.y,{htmlFor:"start",className:"required-field",children:"Start Date"}),Object(g.jsx)(O.a,{control:"input",type:"date",name:"start_date",id:"start_date",min:U(),onChange:function(e){!function(e){setTimeout((function(){return T(e.target.value)}),0)}(e),V(e.target.value,D)}})]}),Object(g.jsxs)(i.k,{md:6,children:[Object(g.jsx)(i.y,{htmlFor:"end",className:"required-field",children:"End Date"}),Object(g.jsx)(O.a,{control:"input",type:"date",name:"end_date",id:"end_date",min:U(),onChange:function(e){!function(e){setTimeout((function(){return H(e.target.value)}),0)}(e),V(w,e.target.value)}})]}),Object(g.jsxs)(i.k,{md:6,children:[Object(g.jsx)(i.y,{htmlFor:"days",className:"required-field",children:"Number of Days"}),Object(g.jsx)(O.a,{control:"input",type:"number",name:"days",id:"days",value:C,placeholder:"Number of Days"})]}),Object(g.jsxs)(i.g,{children:[Object(g.jsxs)(i.d,{block:!0,color:"light",onClick:J,children:[Object(g.jsx)(d.a,{icon:j.o})," Cancel"]}),""!=D&&""!=w&&""!=B&&""!=I&&""!=C?Object(g.jsx)(i.d,{block:!0,color:"dark",type:"submit",onClick:W,style:{marginLeft:"15px"},children:e.isSubmitting?Object(g.jsx)(m.a,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{icon:j.l})," Save"]})}):Object(g.jsx)(i.d,{block:!0,color:"dark",type:"submit",onClick:W,disabled:!0,style:{marginLeft:"15px"},children:e.isSubmitting?Object(g.jsx)(m.a,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(d.a,{icon:j.l})," Save"]})})]}),Object(g.jsxs)(i.H,{visible:h,onDismiss:G,children:[Object(g.jsx)(i.K,{onDismiss:G,children:Object(g.jsx)(i.L,{children:Object(g.jsx)("h5",{children:"Cancel"})})}),Object(g.jsx)(i.I,{children:"Do You Want To Cancel ?"}),Object(g.jsxs)(i.J,{children:[Object(g.jsxs)(i.d,{color:"light",onClick:G,children:[Object(g.jsx)(d.a,{icon:j.o})," No"]}),Object(g.jsx)(v.b,{to:"/",children:Object(g.jsxs)(i.d,{color:"dark",children:[Object(g.jsx)(d.a,{icon:j.d})," Yes"]})})]})]})]})}})]})})})}},550:function(e,t,n){var a=n(147).toast;e.exports=function(e,t){switch(e){case"info":a.info(t);break;case"success":a.success(t);break;case"warning":a.warn(t);break;case"error":a.error(t);break;case"dark":a.dark(t);break;default:a(t)}}},560:function(e,t,n){var a,c=n(550),r=n(590).default,s="";localStorage.getItem("user")&&(s=JSON.parse(localStorage.getItem("user")).token),""==s?(console.log("there isno token"),a=r.create({timeout:6e3,headers:{"Content-Type":"application/json"}})):a=r.create({timeout:6e3,headers:{"Content-Type":"application/json",authorization:"Bearer "+s}}),a.interceptors.response.use((function(e){return e}),(function(e){401===e.response.status?(localStorage.removeItem("user"),window.location="/#/login",console.log(e.response.data.message),c("error",e.response.data.message)):c("error",e.response.data.message)})),e.exports=a},577:function(e,t,n){"use strict";var a=n(553),c=n(0),r=n(142),s=n(18);t.a=function(e){var t=e.id,n=Object(c.useState)(!1),i=Object(a.a)(n,2),o=i[0],l=i[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(r.R,{expand:"",colorScheme:"light",className:"bg-secondry",style:{float:"right"},children:Object(s.jsxs)(r.m,{fluid:!0,children:[Object(s.jsx)(r.T,{onClick:function(){return l(!o)}}),Object(s.jsx)(r.l,{className:"navbar-collapse",visible:o,children:Object(s.jsxs)(r.S,{children:[Object(s.jsx)("a",{color:"secondary",className:"btn btn-default",href:"/#/school-management/get-users/".concat(t),children:"User Management"}),Object(s.jsxs)(r.n,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.s,{color:"secondary",children:"Class Management"}),Object(s.jsxs)(r.r,{children:[Object(s.jsx)(r.q,{href:"/#/class-management/create-classes/".concat(t),children:"Create/Edit Classes"}),Object(s.jsx)(r.q,{href:"/#/class-management/view-classes/".concat(t),children:"View Classes"}),Object(s.jsx)(r.q,{href:"/#/class-management/create-sections/".concat(t),children:"Create Sections"}),Object(s.jsx)(r.q,{href:"/#/class-management/manage-sections/".concat(t),children:"Manage Sections"}),Object(s.jsx)(r.q,{href:"/#/class-management/class-mapping/".concat(t),children:"Class Mapping"})]})]}),Object(s.jsxs)(r.n,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.s,{color:"secondary",children:"Subject Management"}),Object(s.jsx)(r.r,{children:Object(s.jsx)(r.q,{href:"/#/school-management/normal-school/all-subjects/".concat(t),children:"Assign Subject To Class"})})]}),Object(s.jsxs)(r.n,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.s,{color:"secondary",children:"Teacher Management"}),Object(s.jsxs)(r.r,{children:[Object(s.jsx)(r.q,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Add Teacher"}),Object(s.jsx)(r.q,{href:"/#/teacher-management/get-teachers/".concat(t),children:"All Teachers"})]})]}),Object(s.jsxs)(r.n,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.s,{color:"secondary",children:"Lesson Planning"}),Object(s.jsx)(r.r,{children:Object(s.jsx)(r.q,{href:"/#/lesson-management/get-subjects/".concat(t),children:"Annual Lesson Plan"})})]}),Object(s.jsxs)(r.n,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.s,{color:"secondary",children:"Calender Management"}),Object(s.jsxs)(r.r,{children:[Object(s.jsx)(r.q,{href:"/#/calender-management/add-holiday/".concat(t),children:"Add Holiday"}),Object(s.jsx)(r.q,{href:"/#/calender-management/view-calender/".concat(t),children:"View Calender"})]})]}),Object(s.jsxs)(r.n,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.s,{color:"secondary",children:"Time Table"}),Object(s.jsxs)(r.r,{children:[Object(s.jsx)(r.q,{href:"/#/time-table-management/step-1/".concat(t),children:"Time Table (Initialization)"}),Object(s.jsx)(r.q,{href:"/#/time-table-management/time-table-list/".concat(t),children:"Time Table List"}),Object(s.jsx)(r.q,{href:"/#/time-table-management/step-2/".concat(t),children:"General Constraints"}),Object(s.jsx)(r.q,{href:"/#/time-table-management/step-2/".concat(t),children:"Class Constraints"}),Object(s.jsx)(r.q,{href:"/#/time-table-management/create-time-table-admin/".concat(t),children:"Generate Time Table (Admin)"}),Object(s.jsx)(r.q,{href:"/#/time-table-management/generate-time-table-school/".concat(t),children:"Generate Time Table (School)"})]})]})]})})]})})})}},583:function(e,t,n){e.exports=n(390)},584:function(e,t,n){"use strict";function a(e,t,n,a,c,r,s){try{var i=e[r](s),o=i.value}catch(l){return void n(l)}i.done?t(o):Promise.resolve(o).then(a,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,r){var s=e.apply(t,n);function i(e){a(s,c,r,i,o,"next",e)}function o(e){a(s,c,r,i,o,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return c}))},608:function(e,t,n){"use strict";n(0);var a=n(18);t.a=function(){return Object(a.jsx)("div",{className:"spinner-border spinner-border-sm",role:"status"})}},612:function(e,t,n){"use strict";var a=n(44),c=n(143),r=n(0),s=n.n(r),i=n(142),o=n(531),l=n(18);var j=function(e){return Object(l.jsx)("div",{className:"invalid-feedback",children:e.children})},d=["formik","name","options","switcher"],b=Object(o.f)((function(e){var t=e.formik,n=e.name,r=e.options,b=(e.switcher,Object(c.a)(e,d)),u=Object(o.g)(t.errors,n),m=Object(o.g)(t.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,Object(a.a)(Object(a.a)({name:n},b),{},{children:function(e){var t=e.field;return r.map((function(e){return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsx)(i.v,Object(a.a)(Object(a.a)(Object(a.a)({id:e.value},t),b),{},{value:e.value,checked:t.value?t.value.includes(e.value):"",label:e.text,disabled:!!e.disabled&&e.disabled,className:"".concat(u&&m?"is-invalid":"","\n                  }")}))},e.text)}))}})),Object(l.jsx)(o.a,{name:n,component:j})]})})),u=["formik","name","id"];var m=Object(o.f)((function(e){var t=e.formik,n=e.name,r=e.id,s=Object(c.a)(e,u),d=t.handleChange,b=t.handleBlur,m=Object(o.g)(t.errors,n),O=Object(o.g)(t.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.x,Object(a.a)(Object(a.a)({id:r,name:n,onChange:d,onBlur:b},s),{},{className:"form-control ".concat(m&&O?"is-invalid":"")})),Object(l.jsx)(o.a,{name:n,component:j})]})})),O=n(553),h=["formik","name","id","options"],x=Object(o.f)((function(e){var t=e.formik,n=e.name,s=e.id,d=e.options,b=Object(c.a)(e,h),u=t.handleChange,m=t.handleBlur,x=Object(o.g)(t.errors,n),f=Object(o.g)(t.touched,n),p=Object(r.useState)([]),v=Object(O.a)(p,2),g=v[0],y=v[1],k=[];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,{name:n,id:s,onChange:u,onBlur:m,children:function(e){var c=e.field;return g.map((function(e){return k.push(e.value),k})),t.values["".concat(n)]=k,Object(l.jsx)(i.M,Object(a.a)(Object(a.a)(Object(a.a)({},c),b),{},{options:d,onChange:y,className:"form-control  ".concat(x&&f?"is-invalid":"")}))}}),Object(l.jsx)(o.a,{name:n,component:j})]})})),f=["formik","name","options"],p=Object(o.f)((function(e){var t=e.formik,n=e.name,r=e.options,d=Object(c.a)(e,f),b=Object(o.g)(t.errors,n),u=Object(o.g)(t.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,Object(a.a)(Object(a.a)({name:n},d),{},{children:function(e){var t=e.field;return r.map((function(e){return Object(l.jsx)(s.a.Fragment,{children:Object(l.jsx)(i.v,Object(a.a)(Object(a.a)(Object(a.a)({type:"radio",id:e.value},t),d),{},{value:e.value,checked:t.value===e.value,label:e.text,className:"".concat(b&&u?"is-invalid":"")}))},e.text)}))}})),Object(l.jsx)(o.a,{name:n,component:j})]})})),v=["formik","name","options","id","placeholder"],g=Object(o.f)((function(e){var t=e.formik,n=e.name,r=e.options,s=e.id,d=e.placeholder,b=Object(c.a)(e,v),u=(t.handleChange,t.handleBlur,Object(o.g)(t.errors,n)),m=Object(o.g)(t.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,Object(a.a)(Object(a.a)({name:n},b),{},{children:function(e){var t=e.field;return Object(l.jsxs)(i.z,Object(a.a)(Object(a.a)(Object(a.a)({id:s,name:n},b),t),{},{className:"form-control ".concat(u&&m?"is-invalid":""),children:[Object(l.jsxs)("option",{value:"",children:[" ",d||"Select..."]}),r.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))]}))}})),Object(l.jsx)(o.a,{name:n,component:j})]})})),y=["formik","name","options","id","placeholder"],k=Object(o.f)((function(e){var t=e.formik,n=e.name,r=e.options,s=e.id,d=e.placeholder,b=Object(c.a)(e,y),u=Object(o.g)(t.errors,n),m=Object(o.g)(t.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,Object(a.a)(Object(a.a)({name:n},b),{},{children:function(e){var t=e.field;return Object(l.jsxs)(i.z,Object(a.a)(Object(a.a)(Object(a.a)({id:s,name:n},b),t),{},{className:"form-control ".concat(u&&m?"is-invalid":""),children:[Object(l.jsxs)("option",{value:"",children:[" ",d||"Select..."]}),r.map((function(e){return Object(l.jsx)("option",{value:e.value,children:e.text},e.value)}))]}))}})),Object(l.jsx)(o.a,{name:n,component:j})]})})),C=["formik","name","id"],S=Object(o.f)((function(e){var t=e.formik,n=e.name,r=e.id,s=Object(c.a)(e,C),d=(t.handleChange,t.handleBlur,Object(o.g)(t.errors,n)),b=Object(o.g)(t.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.b,Object(a.a)(Object(a.a)({name:n},s),{},{children:function(e){var t=e.field;return Object(l.jsx)(i.A,Object(a.a)(Object(a.a)(Object(a.a)({id:r,name:n},t),s),{},{className:"form-control ".concat(d&&b?"is-invalid":"")}))}})),Object(l.jsx)(o.a,{name:n,component:j})]})})),q=["control"];t.a=function(e){var t=e.control,n=Object(c.a)(e,q);switch(t){case"input":return Object(l.jsx)(m,Object(a.a)({},n));case"textarea":return Object(l.jsx)(S,Object(a.a)({},n));case"select":return Object(l.jsx)(g,Object(a.a)({},n));case"selectwithkey":return Object(l.jsx)(k,Object(a.a)({},n));case"multiselect":return Object(l.jsx)(x,Object(a.a)({},n));case"radio":return Object(l.jsx)(p,Object(a.a)({},n));case"checkbox":return Object(l.jsx)(b,Object(a.a)({},n));default:return null}}}}]);
//# sourceMappingURL=23.f332fc2b.chunk.js.map