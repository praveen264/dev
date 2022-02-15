(this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]||[]).push([[16],{109:function(e,t,n){"use strict";t.a=function(e,t){}},1617:function(e,t,n){"use strict";n.r(t);var a=n(697),c=n(580),r=n.n(c),s=n(581),o=n(543),i=n(142),l=n(0),d=n(568),j=n(555),h=n.n(j),m=n(667),u=n.n(m),b=n(548),p=n.n(b),f=n(18);t.default=function(e){var t=e.match.params.school_id,n=Object(l.useState)([]),c=Object(o.a)(n,2),j=c[0],m=c[1],b=Object(l.useState)([]),O=Object(o.a)(b,2),x=O[0],g=O[1],v=Object(l.useState)(""),y=Object(o.a)(v,2),S=y[0],w=y[1];Object(l.useEffect)((function(){var e="http://test.saakshar.co.in/api/v1/cm/get-class/"+t;h.a.get(e).then((function(e){g(e.data.data.classes)})).catch((function(e){console.log(e)}))}),[]),Object(l.useEffect)((function(){var e="".concat("http://test.saakshar.co.in/api/v1","/cm/get-sections-by-class/").concat(t,"/").concat(S);h.a.get(e).then((function(e){var n=[];e.data.data.map((function(e){n.push(S+"-"+e.section_name)}));var a="".concat("http://test.saakshar.co.in/api/v1","/sm/get-subjects-by-class");h.a.post(a,{id:t,cl:n,class:S}).then((function(e){console.log(e.data.data),m(e.data.data)})).catch((function(e){console.log(e)}))})).catch((function(e){console.log(e)}))}),[S]);var C=function(){var e=Object(s.a)(r.a.mark((function e(n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.post("http://test.saakshar.co.in/api/v1/sm/add-update-lesson-plan",{school_id:t,subject_id:n.subject_id,sc_class:n.class_name,min_periods:n.min_periods,max_periods:n.max_periods}).then(function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:p()("success",t.data.message);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){p()("error",e)}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsx)(i.h,{children:Object(f.jsx)(i.e,{className:"p-2",children:Object(f.jsxs)(i.f,{children:[Object(f.jsx)(i.T,{children:Object(f.jsx)(i.j,{children:Object(f.jsx)(d.a,{id:t})})}),Object(f.jsx)(i.T,{children:Object(f.jsx)(i.j,{md:"8",lg:"6",xl:"8",children:Object(f.jsx)("h5",{children:"Lesson Plan"})})}),Object(f.jsx)("p",{className:"text-muted",children:"Lesson Plan for Each Class"}),Object(f.jsxs)(i.T,{className:"mb-3",children:[Object(f.jsx)(i.x,{htmlFor:"classes",className:"col-sm-2 col-form-label",children:"Select Class"}),Object(f.jsx)(i.j,{md:4,children:Object(f.jsxs)(i.y,{name:"classes",id:"classes","aria-label":"Select class",onChange:function(e){!function(e){w(e.target.value)}(e)},children:[Object(f.jsx)("option",{children:"Select class..."}),x.map((function(e){return Object(f.jsx)("option",{value:e,children:e})}))]})})]}),Object(f.jsx)(u.a,{title:"",data:j,columns:[{title:"Class",field:"class_name",editable:"never"},{title:"Subject",field:"subject_name",editable:"never"},{title:"Min Periods",field:"min_periods",type:"numeric"},{title:"Max Periods",field:"max_periods",type:"numeric"}],onSelectionChange:function(e){return setSelectedRows(e)},options:{search:!0,paging:!0,filtering:!1,exportButton:!0,actionsColumnIndex:-1,rowStyle:function(e){if(e.tableData.id%2)return{backgroundColor:"#f9f9f9"}}},editable:{onRowUpdate:function(e,t){return new Promise((function(n,c){console.log(e),setTimeout((function(){var c=Object(a.a)(j);c[t.tableData.id]=e,m(Object(a.a)(c)),C(e),n()}),1e3)}))}}})]})})})}},543:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(586);function c(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,c=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(a=(s=o.next()).done)&&(n.push(s.value),!t||n.length!==t);a=!0);}catch(i){c=!0,r=i}finally{try{a||null==o.return||o.return()}finally{if(c)throw r}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},548:function(e,t,n){var a=n(146).toast;e.exports=function(e,t){switch(e){case"info":a.info(t);break;case"success":a.success(t);break;case"warning":a.warn(t);break;case"error":a.error(t);break;case"dark":a.dark(t);break;default:a(t)}}},555:function(e,t,n){var a,c=n(548),r=n(590).default,s="";localStorage.getItem("user")&&(s=JSON.parse(localStorage.getItem("user")).token),""==s?(console.log("there isno token"),a=r.create({timeout:6e3,headers:{"Content-Type":"application/json"}})):a=r.create({timeout:6e3,headers:{"Content-Type":"application/json",authorization:"Bearer "+s}}),a.interceptors.response.use((function(e){return e}),(function(e){401===e.response.status?(localStorage.removeItem("user"),window.location="/#/login",console.log(e.response.data.message),c("error",e.response.data.message)):c("error",e.response.data.message)})),e.exports=a},568:function(e,t,n){"use strict";var a=n(543),c=n(0),r=n(142),s=n(18);t.a=function(e){var t=e.id,n=Object(c.useState)(!1),o=Object(a.a)(n,2),i=o[0],l=o[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(r.Q,{expand:"",colorScheme:"light",className:"bg-secondry",style:{float:"right"},children:Object(s.jsxs)(r.l,{fluid:!0,children:[Object(s.jsx)(r.S,{onClick:function(){return l(!i)}}),Object(s.jsx)(r.k,{className:"navbar-collapse",visible:i,children:Object(s.jsxs)(r.R,{children:[Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"User Management"}),Object(s.jsx)(r.q,{children:Object(s.jsx)(r.p,{href:"/#/school-management/user-management/".concat(t),children:"Add Users"})}),Object(s.jsx)(r.r,{color:"secondary",children:"Class Management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/class-management/create-classes/".concat(t),children:"Create/Edit Classes"}),Object(s.jsx)(r.p,{href:"/#/class-management/view-classes/".concat(t),children:"View Classes"}),Object(s.jsx)(r.p,{href:"/#/class-management/create-sections/".concat(t),children:"Create Sections"}),Object(s.jsx)(r.p,{href:"/#/class-management/manage-sections/".concat(t),children:"Manage Sections"}),Object(s.jsx)(r.p,{href:"/#/class-management/class-mapping/".concat(t),children:"Class Mapping"})]})]}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Subject Management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/school-management/normal-school/all-subjects/".concat(t),children:"Add Subject"}),Object(s.jsx)(r.p,{href:"/#/school-management/normal-school/all-subjects/".concat(t),children:"Assign Subject To Class"}),Object(s.jsx)(r.p,{href:"/#/school-management/normal-school/all-subjects/".concat(t),children:"All Subjects"})]})]}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Teacher Management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Add Teacher"}),Object(s.jsx)(r.p,{href:"/#/teacher-management/get-teachers/".concat(t),children:"All Teachers"})]})]}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Section Management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Assign class teacher \u2013 Primary & secondary"}),Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Teacher & class mapping"}),Object(s.jsx)(r.p,{href:"/#/teacher-management/get-teachers/".concat(t),children:"All Teachers"})]})]}),Object(s.jsx)(r.m,{variant:"nav-item",popper:!1,children:Object(s.jsx)(r.r,{color:"secondary",children:"Building Management"})}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Academic Calendar Management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Academic Year"}),Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Holiday calendar & holiday list"}),Object(s.jsx)(r.p,{href:"/#/teacher-management/get-teachers/".concat(t),children:"Exam calendar"})]})]}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Lesson Planning"}),Object(s.jsx)(r.q,{children:Object(s.jsx)(r.p,{href:"/#/lesson-management/get-subjects/".concat(t),children:"Annual Lesson Plan"})})]}),Object(s.jsx)(r.m,{variant:"nav-item",popper:!1,children:Object(s.jsx)(r.r,{color:"secondary",children:"Class Structure Creation"})}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Constraints management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"School level constraints"}),Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Class wise constraints (inflow from class teacher)"})]})]}),Object(s.jsx)(r.m,{variant:"nav-item",popper:!1,children:Object(s.jsx)(r.r,{color:"secondary",children:"Data fitness \u2013 system checks the fitness of data"})}),Object(s.jsx)(r.m,{variant:"nav-item",popper:!1,children:Object(s.jsx)(r.r,{color:"secondary",children:"Generate Annual Timetable"})}),Object(s.jsx)(r.m,{variant:"nav-item",popper:!1,children:Object(s.jsx)(r.r,{color:"secondary",children:"Update weekly time table."})}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Calender Management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/calender-management/add-holiday/".concat(t),children:"Add Holiday"}),Object(s.jsx)(r.p,{href:"/#/calender-management/view-calender/".concat(t),children:"View Calender"})]})]}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Time Table"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/time-table-management/step-1/".concat(t),children:"Time Table (Initialization)"}),Object(s.jsx)(r.p,{href:"/#/time-table-management/time-table-list/".concat(t),children:"Time Table List"}),Object(s.jsx)(r.p,{href:"/#/time-table-management/step-2/".concat(t),children:"General Constraints"}),Object(s.jsx)(r.p,{href:"#",children:"Class Constraints"}),Object(s.jsx)(r.p,{href:"/#/time-table-management/create-time-table-admin/".concat(t),children:"Generate Time Table (Admin)"})]})]})]})})]})})})}},580:function(e,t,n){e.exports=n(390)},581:function(e,t,n){"use strict";function a(e,t,n,a,c,r,s){try{var o=e[r](s),i=o.value}catch(l){return void n(l)}o.done?t(i):Promise.resolve(i).then(a,c)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(c,r){var s=e.apply(t,n);function o(e){a(s,c,r,o,i,"next",e)}function i(e){a(s,c,r,o,i,"throw",e)}o(void 0)}))}}n.d(t,"a",(function(){return c}))},586:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(591);function c(e,t){if(e){if("string"===typeof e)return Object(a.a)(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(a.a)(e,t):void 0}}},591:function(e,t,n){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}n.d(t,"a",(function(){return a}))},697:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(591);var c=n(586);function r(e){return function(e){if(Array.isArray(e))return Object(a.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(c.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=16.851e06f4.chunk.js.map