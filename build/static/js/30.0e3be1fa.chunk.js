(this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template-starter"]||[]).push([[30],{1607:function(e,t,c){"use strict";c.r(t);var n=c(543),a=c(142),r=c(0),s=c(568),o=c(555),i=c.n(o),l=c(18);t.default=function(e){var t=e.match.params.school_id,c=Object(r.useState)(),o=Object(n.a)(c,2),j=o[0],h=o[1];Object(r.useEffect)((function(){i.a.get("".concat("http://test.saakshar.co.in/api/v1","/cm/get-class/").concat(t)).then((function(e){h(e.data.data)})).catch((function(e){console.log(e)}))}),[]);return Object(l.jsx)(a.h,{children:Object(l.jsx)(a.e,{className:"p-2",children:Object(l.jsxs)(a.f,{children:[Object(l.jsx)(a.T,{children:Object(l.jsx)(a.j,{children:Object(l.jsx)(s.a,{id:t})})}),Object(l.jsx)(a.T,{children:Object(l.jsx)(a.j,{md:"8",lg:"6",xl:"8",children:Object(l.jsx)("h5",{children:"View Classes"})})}),Object(l.jsx)("p",{className:"text-muted",children:"Get all classes"}),Object(l.jsxs)(a.bb,{striped:!0,children:[Object(l.jsx)(a.eb,{children:Object(l.jsx)(a.gb,{children:Object(l.jsx)(a.fb,{scope:"col",children:"Classes"})})}),Object(l.jsx)(a.cb,{children:function(){var e=[];if(j&&j.groups.length>0)for(var t=0;t<j.groups.length;t++){var c=[];c.push(Object(l.jsx)(a.gb,{children:Object(l.jsx)(a.fb,{scope:"row",children:j.groups[t].group_name})},j.groups[t].group_name));for(var n=0;n<j.groups[t].gp_classes.length;n++)c.push(Object(l.jsx)(a.gb,{children:Object(l.jsx)(a.db,{children:j.groups[t].gp_classes[n]})},j.groups[t].gp_classes[n]));e.push(c)}else e.push(Object(l.jsx)(a.gb,{children:Object(l.jsx)(a.db,{scope:"row",style:{textAlign:"center"},children:"No record found..."})}));return e}()})]})]})})})}},543:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(586);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var c=[],n=!0,a=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done)&&(c.push(s.value),!t||c.length!==t);n=!0);}catch(i){a=!0,r=i}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return c}}(e,t)||Object(n.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},548:function(e,t,c){var n=c(146).toast;e.exports=function(e,t){switch(e){case"info":n.info(t);break;case"success":n.success(t);break;case"warning":n.warn(t);break;case"error":n.error(t);break;case"dark":n.dark(t);break;default:n(t)}}},555:function(e,t,c){var n,a=c(548),r=c(590).default,s="";localStorage.getItem("user")&&(s=JSON.parse(localStorage.getItem("user")).token),""==s?(console.log("there isno token"),n=r.create({timeout:6e3,headers:{"Content-Type":"application/json"}})):n=r.create({timeout:6e3,headers:{"Content-Type":"application/json",authorization:"Bearer "+s}}),n.interceptors.response.use((function(e){return e}),(function(e){401===e.response.status?(localStorage.removeItem("user"),window.location="/#/login",console.log(e.response.data.message),a("error",e.response.data.message)):a("error",e.response.data.message)})),e.exports=n},568:function(e,t,c){"use strict";var n=c(543),a=c(0),r=c(142),s=c(18);t.a=function(e){var t=e.id,c=Object(a.useState)(!1),o=Object(n.a)(c,2),i=o[0],l=o[1];return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)(r.Q,{expand:"",colorScheme:"light",className:"bg-secondry",style:{float:"right"},children:Object(s.jsxs)(r.l,{fluid:!0,children:[Object(s.jsx)(r.S,{onClick:function(){return l(!i)}}),Object(s.jsx)(r.k,{className:"navbar-collapse",visible:i,children:Object(s.jsxs)(r.R,{children:[Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"User Management"}),Object(s.jsx)(r.q,{children:Object(s.jsx)(r.p,{href:"/#/school-management/user-management/".concat(t),children:"Create/Edit Classes"})}),Object(s.jsx)(r.r,{color:"secondary",children:"Class Management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/class-management/create-classes/".concat(t),children:"Create/Edit Classes"}),Object(s.jsx)(r.p,{href:"/#/class-management/view-classes/".concat(t),children:"View Classes"}),Object(s.jsx)(r.p,{href:"/#/class-management/create-sections/".concat(t),children:"Create Sections"}),Object(s.jsx)(r.p,{href:"/#/class-management/manage-sections/".concat(t),children:"Manage Sections"}),Object(s.jsx)(r.p,{href:"/#/class-management/class-mapping/".concat(t),children:"Class Mapping"})]})]}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Subject Management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/school-management/normal-school/all-subjects/".concat(t),children:"Add Subject"}),Object(s.jsx)(r.p,{href:"/#/school-management/normal-school/all-subjects/".concat(t),children:"Assign Subject To Class"}),Object(s.jsx)(r.p,{href:"/#/school-management/normal-school/all-subjects/".concat(t),children:"All Subjects"})]})]}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Teacher Management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Add Teacher"}),Object(s.jsx)(r.p,{href:"/#/teacher-management/get-teachers/".concat(t),children:"All Teachers"})]})]}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Section Management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Assign class teacher \u2013 Primary & secondary"}),Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Teacher & class mapping"}),Object(s.jsx)(r.p,{href:"/#/teacher-management/get-teachers/".concat(t),children:"All Teachers"})]})]}),Object(s.jsx)(r.m,{variant:"nav-item",popper:!1,children:Object(s.jsx)(r.r,{color:"secondary",children:"Building Management"})}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Academic Calendar Management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Academic Year"}),Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Holiday calendar & holiday list"}),Object(s.jsx)(r.p,{href:"/#/teacher-management/get-teachers/".concat(t),children:"Exam calendar"})]})]}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Lesson Planning"}),Object(s.jsx)(r.q,{children:Object(s.jsx)(r.p,{href:"/#/lesson-management/get-subjects/".concat(t),children:"Annual Lesson Plan"})})]}),Object(s.jsx)(r.m,{variant:"nav-item",popper:!1,children:Object(s.jsx)(r.r,{color:"secondary",children:"Class Structure Creation"})}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Constraints management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"School level constraints"}),Object(s.jsx)(r.p,{href:"/#/teacher-management/add-teacher/".concat(t),children:"Class wise constraints (inflow from class teacher)"})]})]}),Object(s.jsx)(r.m,{variant:"nav-item",popper:!1,children:Object(s.jsx)(r.r,{color:"secondary",children:"Data fitness \u2013 system checks the fitness of data"})}),Object(s.jsx)(r.m,{variant:"nav-item",popper:!1,children:Object(s.jsx)(r.r,{color:"secondary",children:"Generate Annual Timetable"})}),Object(s.jsx)(r.m,{variant:"nav-item",popper:!1,children:Object(s.jsx)(r.r,{color:"secondary",children:"Update weekly time table."})}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Calender Management"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/calender-management/add-holiday/".concat(t),children:"Add Holiday"}),Object(s.jsx)(r.p,{href:"/#/calender-management/view-calender/".concat(t),children:"View Calender"})]})]}),Object(s.jsxs)(r.m,{variant:"nav-item",popper:!1,children:[Object(s.jsx)(r.r,{color:"secondary",children:"Time Table"}),Object(s.jsxs)(r.q,{children:[Object(s.jsx)(r.p,{href:"/#/time-table-management/step-1/".concat(t),children:"Time Table (Initialization)"}),Object(s.jsx)(r.p,{href:"/#/time-table-management/time-table-list/".concat(t),children:"Time Table List"}),Object(s.jsx)(r.p,{href:"/#/time-table-management/step-2/".concat(t),children:"General Constraints"}),Object(s.jsx)(r.p,{href:"#",children:"Class Constraints"}),Object(s.jsx)(r.p,{href:"/#/time-table-management/create-time-table-admin/".concat(t),children:"Generate Time Table (Admin)"})]})]})]})})]})})})}},586:function(e,t,c){"use strict";c.d(t,"a",(function(){return a}));var n=c(591);function a(e,t){if(e){if("string"===typeof e)return Object(n.a)(e,t);var c=Object.prototype.toString.call(e).slice(8,-1);return"Object"===c&&e.constructor&&(c=e.constructor.name),"Map"===c||"Set"===c?Array.from(e):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(n.a)(e,t):void 0}}},591:function(e,t,c){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var c=0,n=new Array(t);c<t;c++)n[c]=e[c];return n}c.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=30.0e3be1fa.chunk.js.map