(this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]||[]).push([[24],{1614:function(e,c,n){"use strict";n.r(c);var t=n(580),s=n.n(t),a=n(581),r=n(543),o=n(142),i=n(0),l=n(568),d=n(589),j=n(588),b=n(528),m=n(694),h=n(592),u=n(593),O=n(555),x=n.n(O),p=n(548),f=n.n(p),_=n(145),v=n(21),g=n(18);c.default=function(e){var c,n=e.match.params.school_id,t=Object(i.useState)(!1),O=Object(r.a)(t,2),p=O[0],q=O[1],y=Object(i.useState)(!1),k=Object(r.a)(y,2),N=k[0],w=k[1],T=Object(i.useState)({}),C=Object(r.a)(T,2),S=C[0],F=C[1],A=(Object(v.g)(),function(){setTimeout((function(){return q(!0)}),0)}),M=function(){setTimeout((function(){return q(!1)}),0)},L=[{text:"Yes",value:"Yes"},{text:"No",value:"No"},{text:"Don't know",value:"NA"}],B=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","NA"];c=S?{cons_1:S.cons_1?S.cons_1:"",cons_2:S.cons_2?S.cons_2:"",cons_3:S.cons_3?S.cons_3:"",cons_4:S.cons_4?S.cons_4:"",cons_5:S.cons_5?S.cons_5:"",cons_6:S.cons_6?S.cons_6:"",cons_7:S.cons_7?S.cons_7:"",cons_8:S.cons_8?S.cons_8:"",cons_9:S.cons_9?S.cons_9:"",cons_10:S.cons_10?S.cons_10:"",cons_11:S.cons_11?S.cons_11:"",cons_12:S.cons_12?S.cons_12:"",cons_13:S.cons_13?S.cons_13:"",cons_14:S.cons_14?S.cons_14:"",cons_15:S.cons_15?S.cons_15:"",cons_16:S.cons_16?S.cons_16:"",cons_17:S.cons_17?S.cons_17:""}:{cons_1:"",cons_2:"",cons_3:"",cons_4:"",cons_5:"",cons_6:"",cons_7:"",cons_8:"",cons_9:"",cons_10:"",cons_11:"",cons_12:"",cons_13:"",cons_14:"",cons_15:"",cons_16:"",cons_17:""};var E=m.b().shape({cons_1:m.d().required("required"),cons_2:m.d().required("required"),cons_3:m.d().required("required"),cons_4:m.d().required("required"),cons_5:m.d().required("required"),cons_6:m.d().required("required"),cons_7:m.d().required("required"),cons_8:m.d().required("required"),cons_9:m.d().required("required"),cons_10:m.d().required("required"),cons_11:m.d().required("required"),cons_12:m.d().required("required"),cons_13:m.d().required("required"),cons_14:m.d().required("required"),cons_15:m.d().required("required"),cons_16:m.d().required("required"),cons_17:m.d().required("required")}),P=function(){var e=Object(a.a)(s.a.mark((function e(c,t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.resetForm,e.next=3,x.a.post("http://test.saakshar.co.in/api/v1/ttm/initialize-general-constraints",{school_id:n,cons_1:c.cons_1,cons_2:c.cons_2,cons_3:c.cons_3,cons_4:c.cons_4,cons_5:c.cons_5,cons_6:c.cons_6,cons_7:c.cons_7,cons_8:c.cons_8,cons_9:c.cons_9,cons_10:c.cons_10,cons_11:c.cons_11,cons_12:c.cons_12,cons_13:c.cons_13,cons_14:c.cons_14,cons_15:c.cons_15,cons_16:c.cons_16,cons_17:c.cons_17}).then(function(){var e=Object(a.a)(s.a.mark((function e(c){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r({values:""}),window.location.reload(),f()("success",c.data.message);case 3:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}()).catch((function(e){f()("error",e)}));case 3:case"end":return e.stop()}}),e)})));return function(c,n){return e.apply(this,arguments)}}();Object(i.useEffect)(Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return w(!1),e.next=3,z();case 3:e.sent&&w(!0);case 5:case"end":return e.stop()}}),e)}))),[]);var z=function(){var e=Object(a.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat("http://test.saakshar.co.in/api/v1","/ttm/get-general-constraints/").concat(n)).then((function(e){console.log(e.data.data[0]),F(e.data.data[0])})).catch((function(e){f()("error",e)}));case 3:return e.abrupt("return",!0);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}();return Object(g.jsx)(o.h,{children:Object(g.jsx)(o.e,{className:"p-2",children:Object(g.jsxs)(o.f,{children:[Object(g.jsx)(o.T,{children:Object(g.jsx)(o.j,{children:Object(g.jsx)(l.a,{id:n})})}),Object(g.jsx)(o.T,{children:Object(g.jsx)(o.j,{md:"8",lg:"4",xl:"8",children:Object(g.jsx)("h5",{children:"General Constraints [ Step 2 ]"})})}),Object(g.jsx)("p",{className:"text-muted",children:"Apply constraints"}),N?Object(g.jsx)(b.e,{initialValues:c,validationSchema:E,onSubmit:P,enableReinitialize:!0,children:function(e){return Object(g.jsxs)(b.d,{className:"row g-3",children:[Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"First period of a day should always be assigned to the class teacher"}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_1",id:"cons_1",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"A teacher should have at least 1/2/3 (pick one) periods free in a week"}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"selectwithkey",name:"cons_2",id:"cons_2",placeholder:"Select...",options:[{text:"1",value:"1"},{text:"2",value:"2"},{text:"3",value:"3"},{text:"NA",value:"NA"}]})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"A teacher should have at least 1 period free in a day"}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_3",id:"cons_3",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Every class should have at least one sports/games period in a week"}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_4",id:"cons_4",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Last two period of xxxday will be SUPW/House team meet"}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"select",name:"cons_5",id:"cons_5",placeholder:"Select...",options:B})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Two or more classes can have games period at the same time"}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_6",id:"cons_6",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Library to be assigned to one class at a time"}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_7",id:"cons_7",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Science Lab/practical period should always be assigned as double period i.e. two consecutive periods together"}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_8",id:"cons_8",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Computer Lab period should always be assigned as double period i.e. two consecutive periods together"}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_9",id:"cons_9",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Any double period can not have lunch break between them."}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_10",id:"cons_10",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Any double period can not have lunch break between them"}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_11",id:"cons_11",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Science lab period when assigned as double period can not have lunch break between them."}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_12",id:"cons_12",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Science lab period when assigned as double period can not have day break between them."}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_13",id:"cons_13",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Computer lab period when assigned as double period can not have lunch break between them"}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_14",id:"cons_14",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Computer lab period when assigned as double period can not have day break between them."}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_15",id:"cons_15",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Every class should have at least one sports/games period in a week"}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_16",id:"cons_16",inline:!0,options:L})})]}),Object(g.jsxs)(o.T,{className:"mb-3",children:[Object(g.jsx)(o.x,{htmlFor:"session",className:"col-md-8 col-form-label required-field",children:"Science Lab/practical room should be assigned to one class at a time."}),Object(g.jsx)(o.j,{md:4,children:Object(g.jsx)(u.a,{control:"radio",name:"cons_17",id:"cons_17",inline:!0,options:L})})]}),Object(g.jsxs)(o.g,{children:[Object(g.jsxs)(o.d,{block:!0,color:"light",onClick:A,children:[Object(g.jsx)(j.a,{icon:d.n})," Cancel"]}),Object(g.jsx)(o.d,{block:!0,color:"dark",type:"submit",disabled:e.isSubmitting||!e.dirty||!e.isValid,style:{marginLeft:"15px"},children:e.isSubmitting?Object(g.jsx)(h.a,{}):Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(j.a,{icon:d.k})," Save"]})})]}),Object(g.jsxs)(o.G,{visible:p,onDismiss:M,children:[Object(g.jsx)(o.J,{onDismiss:M,children:Object(g.jsx)(o.K,{children:Object(g.jsx)("h5",{children:"Cancel"})})}),Object(g.jsx)(o.H,{children:"Do You Want To Cancel ?"}),Object(g.jsxs)(o.I,{children:[Object(g.jsxs)(o.d,{color:"light",onClick:M,children:[Object(g.jsx)(j.a,{icon:d.n})," No"]}),Object(g.jsx)(_.b,{to:"/",children:Object(g.jsxs)(o.d,{color:"dark",children:[Object(g.jsx)(j.a,{icon:d.c})," Yes"]})})]})]})]})}}):Object(g.jsx)(h.a,{})]})})})}},548:function(e,c,n){var t=n(146).toast;e.exports=function(e,c){switch(e){case"info":t.info(c);break;case"success":t.success(c);break;case"warning":t.warn(c);break;case"error":t.error(c);break;case"dark":t.dark(c);break;default:t(c)}}},555:function(e,c,n){var t,s=n(548),a=n(590).default,r="";localStorage.getItem("user")&&(r=JSON.parse(localStorage.getItem("user")).token),""==r?(console.log("there isno token"),t=a.create({timeout:6e3,headers:{"Content-Type":"application/json"}})):t=a.create({timeout:6e3,headers:{"Content-Type":"application/json",authorization:"Bearer "+r}}),t.interceptors.response.use((function(e){return e}),(function(e){401===e.response.status?(localStorage.removeItem("user"),window.location="/#/login",console.log(e.response.data.message),s("error",e.response.data.message)):s("error",e.response.data.message)})),e.exports=t},568:function(e,c,n){"use strict";var t=n(543),s=n(0),a=n(142),r=n(18);c.a=function(e){var c=e.id,n=Object(s.useState)(!1),o=Object(t.a)(n,2),i=o[0],l=o[1];return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(a.Q,{expand:"",colorScheme:"light",className:"bg-secondry",style:{float:"right"},children:Object(r.jsxs)(a.l,{fluid:!0,children:[Object(r.jsx)(a.S,{onClick:function(){return l(!i)}}),Object(r.jsx)(a.k,{className:"navbar-collapse",visible:i,children:Object(r.jsxs)(a.R,{children:[Object(r.jsxs)(a.m,{variant:"nav-item",popper:!1,children:[Object(r.jsx)(a.r,{color:"secondary",children:"User Management"}),Object(r.jsx)(a.q,{children:Object(r.jsx)(a.p,{href:"/#/school-management/user-management/".concat(c),children:"Create/Edit Classes"})}),Object(r.jsx)(a.r,{color:"secondary",children:"Class Management"}),Object(r.jsxs)(a.q,{children:[Object(r.jsx)(a.p,{href:"/#/class-management/create-classes/".concat(c),children:"Create/Edit Classes"}),Object(r.jsx)(a.p,{href:"/#/class-management/view-classes/".concat(c),children:"View Classes"}),Object(r.jsx)(a.p,{href:"/#/class-management/create-sections/".concat(c),children:"Create Sections"}),Object(r.jsx)(a.p,{href:"/#/class-management/manage-sections/".concat(c),children:"Manage Sections"}),Object(r.jsx)(a.p,{href:"/#/class-management/class-mapping/".concat(c),children:"Class Mapping"})]})]}),Object(r.jsxs)(a.m,{variant:"nav-item",popper:!1,children:[Object(r.jsx)(a.r,{color:"secondary",children:"Subject Management"}),Object(r.jsxs)(a.q,{children:[Object(r.jsx)(a.p,{href:"/#/school-management/normal-school/all-subjects/".concat(c),children:"Add Subject"}),Object(r.jsx)(a.p,{href:"/#/school-management/normal-school/all-subjects/".concat(c),children:"Assign Subject To Class"}),Object(r.jsx)(a.p,{href:"/#/school-management/normal-school/all-subjects/".concat(c),children:"All Subjects"})]})]}),Object(r.jsxs)(a.m,{variant:"nav-item",popper:!1,children:[Object(r.jsx)(a.r,{color:"secondary",children:"Teacher Management"}),Object(r.jsxs)(a.q,{children:[Object(r.jsx)(a.p,{href:"/#/teacher-management/add-teacher/".concat(c),children:"Add Teacher"}),Object(r.jsx)(a.p,{href:"/#/teacher-management/get-teachers/".concat(c),children:"All Teachers"})]})]}),Object(r.jsxs)(a.m,{variant:"nav-item",popper:!1,children:[Object(r.jsx)(a.r,{color:"secondary",children:"Section Management"}),Object(r.jsxs)(a.q,{children:[Object(r.jsx)(a.p,{href:"/#/teacher-management/add-teacher/".concat(c),children:"Assign class teacher \u2013 Primary & secondary"}),Object(r.jsx)(a.p,{href:"/#/teacher-management/add-teacher/".concat(c),children:"Teacher & class mapping"}),Object(r.jsx)(a.p,{href:"/#/teacher-management/get-teachers/".concat(c),children:"All Teachers"})]})]}),Object(r.jsx)(a.m,{variant:"nav-item",popper:!1,children:Object(r.jsx)(a.r,{color:"secondary",children:"Building Management"})}),Object(r.jsxs)(a.m,{variant:"nav-item",popper:!1,children:[Object(r.jsx)(a.r,{color:"secondary",children:"Academic Calendar Management"}),Object(r.jsxs)(a.q,{children:[Object(r.jsx)(a.p,{href:"/#/teacher-management/add-teacher/".concat(c),children:"Academic Year"}),Object(r.jsx)(a.p,{href:"/#/teacher-management/add-teacher/".concat(c),children:"Holiday calendar & holiday list"}),Object(r.jsx)(a.p,{href:"/#/teacher-management/get-teachers/".concat(c),children:"Exam calendar"})]})]}),Object(r.jsxs)(a.m,{variant:"nav-item",popper:!1,children:[Object(r.jsx)(a.r,{color:"secondary",children:"Lesson Planning"}),Object(r.jsx)(a.q,{children:Object(r.jsx)(a.p,{href:"/#/lesson-management/get-subjects/".concat(c),children:"Annual Lesson Plan"})})]}),Object(r.jsx)(a.m,{variant:"nav-item",popper:!1,children:Object(r.jsx)(a.r,{color:"secondary",children:"Class Structure Creation"})}),Object(r.jsxs)(a.m,{variant:"nav-item",popper:!1,children:[Object(r.jsx)(a.r,{color:"secondary",children:"Constraints management"}),Object(r.jsxs)(a.q,{children:[Object(r.jsx)(a.p,{href:"/#/teacher-management/add-teacher/".concat(c),children:"School level constraints"}),Object(r.jsx)(a.p,{href:"/#/teacher-management/add-teacher/".concat(c),children:"Class wise constraints (inflow from class teacher)"})]})]}),Object(r.jsx)(a.m,{variant:"nav-item",popper:!1,children:Object(r.jsx)(a.r,{color:"secondary",children:"Data fitness \u2013 system checks the fitness of data"})}),Object(r.jsx)(a.m,{variant:"nav-item",popper:!1,children:Object(r.jsx)(a.r,{color:"secondary",children:"Generate Annual Timetable"})}),Object(r.jsx)(a.m,{variant:"nav-item",popper:!1,children:Object(r.jsx)(a.r,{color:"secondary",children:"Update weekly time table."})}),Object(r.jsxs)(a.m,{variant:"nav-item",popper:!1,children:[Object(r.jsx)(a.r,{color:"secondary",children:"Calender Management"}),Object(r.jsxs)(a.q,{children:[Object(r.jsx)(a.p,{href:"/#/calender-management/add-holiday/".concat(c),children:"Add Holiday"}),Object(r.jsx)(a.p,{href:"/#/calender-management/view-calender/".concat(c),children:"View Calender"})]})]}),Object(r.jsxs)(a.m,{variant:"nav-item",popper:!1,children:[Object(r.jsx)(a.r,{color:"secondary",children:"Time Table"}),Object(r.jsxs)(a.q,{children:[Object(r.jsx)(a.p,{href:"/#/time-table-management/step-1/".concat(c),children:"Time Table (Initialization)"}),Object(r.jsx)(a.p,{href:"/#/time-table-management/time-table-list/".concat(c),children:"Time Table List"}),Object(r.jsx)(a.p,{href:"/#/time-table-management/step-2/".concat(c),children:"General Constraints"}),Object(r.jsx)(a.p,{href:"#",children:"Class Constraints"}),Object(r.jsx)(a.p,{href:"/#/time-table-management/create-time-table-admin/".concat(c),children:"Generate Time Table (Admin)"})]})]})]})})]})})})}},580:function(e,c,n){e.exports=n(390)},581:function(e,c,n){"use strict";function t(e,c,n,t,s,a,r){try{var o=e[a](r),i=o.value}catch(l){return void n(l)}o.done?c(i):Promise.resolve(i).then(t,s)}function s(e){return function(){var c=this,n=arguments;return new Promise((function(s,a){var r=e.apply(c,n);function o(e){t(r,s,a,o,i,"next",e)}function i(e){t(r,s,a,o,i,"throw",e)}o(void 0)}))}}n.d(c,"a",(function(){return s}))},592:function(e,c,n){"use strict";n(0);var t=n(18);c.a=function(){return Object(t.jsx)("div",{className:"spinner-border spinner-border-sm",role:"status"})}},593:function(e,c,n){"use strict";var t=n(44),s=n(143),a=n(0),r=n.n(a),o=n(142),i=n(528),l=n(18);var d=function(e){return Object(l.jsx)("div",{className:"invalid-feedback",children:e.children})},j=["formik","name","options","switcher"],b=Object(i.f)((function(e){var c=e.formik,n=e.name,a=e.options,b=(e.switcher,Object(s.a)(e,j)),m=Object(i.g)(c.errors,n),h=Object(i.g)(c.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.b,Object(t.a)(Object(t.a)({name:n},b),{},{children:function(e){var c=e.field;return a.map((function(e){return Object(l.jsx)(r.a.Fragment,{children:Object(l.jsx)(o.u,Object(t.a)(Object(t.a)(Object(t.a)({id:e.value},c),b),{},{value:e.value,checked:c.value?c.value.includes(e.value):"",label:e.text,disabled:!!e.disabled&&e.disabled,className:"".concat(m&&h?"is-invalid":"","\n                  }")}))},e.text)}))}})),Object(l.jsx)(i.a,{name:n,component:d})]})})),m=["formik","name","id"];var h=Object(i.f)((function(e){var c=e.formik,n=e.name,a=e.id,r=Object(s.a)(e,m),j=c.handleChange,b=c.handleBlur,h=Object(i.g)(c.errors,n),u=Object(i.g)(c.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(o.w,Object(t.a)(Object(t.a)({id:a,name:n,onChange:j,onBlur:b},r),{},{className:"form-control ".concat(h&&u?"is-invalid":"")})),Object(l.jsx)(i.a,{name:n,component:d})]})})),u=n(543),O=["formik","name","id","options"],x=Object(i.f)((function(e){var c=e.formik,n=e.name,r=e.id,j=e.options,b=Object(s.a)(e,O),m=c.handleChange,h=c.handleBlur,x=Object(i.g)(c.errors,n),p=Object(i.g)(c.touched,n),f=Object(a.useState)([]),_=Object(u.a)(f,2),v=_[0],g=_[1],q=[];return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.b,{name:n,id:r,onChange:m,onBlur:h,children:function(e){var s=e.field;return v.map((function(e){return q.push(e.value),q})),c.values["".concat(n)]=q,Object(l.jsx)(o.L,Object(t.a)(Object(t.a)(Object(t.a)({},s),b),{},{options:j,onChange:g,className:"form-control  ".concat(x&&p?"is-invalid":"")}))}}),Object(l.jsx)(i.a,{name:n,component:d})]})})),p=["formik","name","options"],f=Object(i.f)((function(e){var c=e.formik,n=e.name,a=e.options,j=Object(s.a)(e,p),b=Object(i.g)(c.errors,n),m=Object(i.g)(c.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.b,Object(t.a)(Object(t.a)({name:n},j),{},{children:function(e){var c=e.field;return a.map((function(e){return Object(l.jsx)(r.a.Fragment,{children:Object(l.jsx)(o.u,Object(t.a)(Object(t.a)(Object(t.a)({type:"radio",id:e.value},c),j),{},{value:e.value,checked:c.value===e.value,label:e.text,className:"".concat(b&&m?"is-invalid":"")}))},e.text)}))}})),Object(l.jsx)(i.a,{name:n,component:d})]})})),_=["formik","name","options","id","placeholder"],v=Object(i.f)((function(e){var c=e.formik,n=e.name,a=e.options,r=e.id,j=e.placeholder,b=Object(s.a)(e,_),m=(c.handleChange,c.handleBlur,Object(i.g)(c.errors,n)),h=Object(i.g)(c.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.b,Object(t.a)(Object(t.a)({name:n},b),{},{children:function(e){var c=e.field;return Object(l.jsxs)(o.y,Object(t.a)(Object(t.a)(Object(t.a)({id:r,name:n},b),c),{},{className:"form-control ".concat(m&&h?"is-invalid":""),children:[Object(l.jsxs)("option",{value:"",children:[" ",j||"Select..."]}),a.map((function(e){return Object(l.jsx)("option",{value:e,children:e},e)}))]}))}})),Object(l.jsx)(i.a,{name:n,component:d})]})})),g=["formik","name","options","id","placeholder"],q=Object(i.f)((function(e){var c=e.formik,n=e.name,a=e.options,r=e.id,j=e.placeholder,b=Object(s.a)(e,g),m=Object(i.g)(c.errors,n),h=Object(i.g)(c.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.b,Object(t.a)(Object(t.a)({name:n},b),{},{children:function(e){var c=e.field;return Object(l.jsxs)(o.y,Object(t.a)(Object(t.a)(Object(t.a)({id:r,name:n},b),c),{},{className:"form-control ".concat(m&&h?"is-invalid":""),children:[Object(l.jsxs)("option",{value:"",children:[" ",j||"Select..."]}),a.map((function(e){return Object(l.jsx)("option",{value:e.value,children:e.text},e.value)}))]}))}})),Object(l.jsx)(i.a,{name:n,component:d})]})})),y=["formik","name","id"],k=Object(i.f)((function(e){var c=e.formik,n=e.name,a=e.id,r=Object(s.a)(e,y),j=(c.handleChange,c.handleBlur,Object(i.g)(c.errors,n)),b=Object(i.g)(c.touched,n);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(i.b,Object(t.a)(Object(t.a)({name:n},r),{},{children:function(e){var c=e.field;return Object(l.jsx)(o.z,Object(t.a)(Object(t.a)(Object(t.a)({id:a,name:n},c),r),{},{className:"form-control ".concat(j&&b?"is-invalid":"")}))}})),Object(l.jsx)(i.a,{name:n,component:d})]})})),N=["control"];c.a=function(e){var c=e.control,n=Object(s.a)(e,N);switch(c){case"input":return Object(l.jsx)(h,Object(t.a)({},n));case"textarea":return Object(l.jsx)(k,Object(t.a)({},n));case"select":return Object(l.jsx)(v,Object(t.a)({},n));case"selectwithkey":return Object(l.jsx)(q,Object(t.a)({},n));case"multiselect":return Object(l.jsx)(x,Object(t.a)({},n));case"radio":return Object(l.jsx)(f,Object(t.a)({},n));case"checkbox":return Object(l.jsx)(b,Object(t.a)({},n));default:return null}}}}]);
//# sourceMappingURL=24.e85ead65.chunk.js.map