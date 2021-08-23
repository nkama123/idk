(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{30:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},54:function(e,t,n){"use strict";n.r(t);var c=n(4),a=n.n(c),s=n(32),o=n.n(s),r=(n(42),n.p,n(43),n(3));var i=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,55)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),s(e),o(e)}))},l=n(33),u=n(34),d=n(37),j=n(36),b=n(19),h=n(9),m=n(28),p=n(16),O=(n(23),n(27));O.a.initializeApp({apiKey:"AIzaSyC6pEaSE6D4gT_rSW2Cb3fvLjxFRZmDFp4",authDomain:"codetribe-5f621.firebaseapp.com",projectId:"codetribe-5f621",storageBucket:"codetribe-5f621.appspot.com",messagingSenderId:"54718521111",appId:"1:54718521111:web:b4219bb23c6b36f3d76152",measurementId:"G-SZHT90M7MW"});var f=O.a,x=(n(30),function(){var e=Object(c.useState)(),t=Object(p.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(),o=Object(p.a)(s,2),i=o[0],l=o[1],u=Object(c.useState)(),d=Object(p.a)(u,2),j=d[0],b=d[1],h=Object(c.useState)(),O=Object(p.a)(h,2),x=O[0],g=O[1],v=Object(c.useState)([]),N=Object(p.a)(v,2),y=N[0],S=N[1],C=f.firestore();Object(c.useEffect)((function(){var e=[];C.collection("users").get().then((function(t){t.forEach((function(t){e.push(Object(m.a)(Object(m.a)({},t.data()),{},{id:t.id})),console.log(t.data())})),S(e)}))}),[]);var F=function(e){var t=e.target.id;C.collection("users").doc(t).delete().then((function(){console.log("user deleted")})).catch((function(e){console.log(e)}))},E=function(e){var t=e.target.id;C.collection("users").doc(t).update({name:n,surname:i,location:j,age:x}).then((function(){console.log("user updated")})).catch((function(e){console.log(e)}))};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container mt-5",children:[Object(r.jsx)("form",{onSubmit:function(e){e.preventDefault(),C.collection("users").add({name:n,surname:i,location:j,age:x}).then((function(e){console.log("user created")})).catch((function(e){console.log(e)}))},children:Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("span",{className:"input-group-text",children:"Name and Surname"}),Object(r.jsx)("input",{name:"name",onChange:function(e){a(e.target.value)},type:"text","aria-label":"First name",class:"form-control",placeholder:"Enter your name"}),Object(r.jsx)("input",{name:"surname",onChange:function(e){l(e.target.value)},type:"text","aria-label":"Last name",class:"form-control",placeholder:" Enter your Surname"}),Object(r.jsxs)("div",{className:"input-group",children:[Object(r.jsx)("span",{className:"input-group-text",children:"Location and Age"}),Object(r.jsx)("input",{name:"location",onChange:function(e){b(e.target.value)},type:"text","aria-label":"Location",class:"form-control",placeholder:"Enter Location"}),Object(r.jsx)("input",{name:"age",onChange:function(e){g(e.target.value)},type:"text","aria-label":"Age",class:"form-control",placeholder:"Enter Age"})]}),Object(r.jsx)("button",{type:"submit",className:"btn btn-secondary",children:"Add"})]})}),y.map((function(e){return Object(r.jsxs)("div",{className:"card mt-4",children:[Object(r.jsx)("div",{className:"card-header",children:"Custom user"}),Object(r.jsxs)("div",{className:"card-body",children:[Object(r.jsx)("h5",{className:"card-title",children:"User Details"}),Object(r.jsxs)("p",{className:"card-text",children:[e.name,"  ",e.surname,"  ",e.location,"  ",e.age]}),Object(r.jsx)("button",{id:e.id,onClick:F,className:"btn btn-danger me-2",children:"Delete user"}),Object(r.jsx)("button",{id:e.id,onClick:E,className:"btn btn-secondary",children:"Update user"})]})]},e.id)}))]})})}),g=function(){var e=Object(c.useState)([]),t=Object(p.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){a(e)})).catch((function(e){console.log(e)})).finally((function(){console.log("done!")}))}),[]),Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container-fluid mt-4",children:Object(r.jsx)("div",{className:"card",children:Object(r.jsx)("div",{className:"list-group",children:n.map((function(e){return Object(r.jsxs)("a",{href:"#",className:"list-group-item list-group-item-dark",children:[e.name," "]})}))})})})})},v=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(b.a,{children:Object(r.jsxs)("div",{children:[Object(r.jsx)("nav",{className:"hope",children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(b.b,{to:"/",children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(b.b,{to:"/details",children:"Details"})})]})}),Object(r.jsxs)(h.c,{children:[Object(r.jsx)(h.a,{path:"/details",children:Object(r.jsx)(g,{})}),Object(r.jsx)(h.a,{path:"/",children:Object(r.jsx)(x,{})})]})]})})})},N=function(e){Object(d.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(v,{})})}}]),n}(c.Component);o.a.render(Object(r.jsx)(a.a.StrictMode,{children:Object(r.jsx)(N,{})}),document.getElementById("root")),i()}},[[54,1,2]]]);
//# sourceMappingURL=main.b5b0a0ba.chunk.js.map