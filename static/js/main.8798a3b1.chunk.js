(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{16:function(t,e,n){t.exports={Form:"ContactForm_Form__1F0V5",AddBtn:"ContactForm_AddBtn__1p_Mx",Item:"ContactForm_Item__3bd6s",Label:"ContactForm_Label__-113E",Input:"ContactForm_Input__2deM_"}},24:function(t,e,n){t.exports={Button:"ContactList_Button__21Aqc",Item:"ContactList_Item__3PQXl",Text:"ContactList_Text__bkDmv"}},25:function(t,e,n){t.exports={Label:"Filter_Label__1MI3i",Input:"Filter_Input__3e6d8",Item:"Filter_Item__Kdpzq"}},46:function(t,e,n){},47:function(t,e,n){},73:function(t,e,n){},95:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"addContactAction",(function(){return h})),n.d(r,"filterAction",(function(){return v})),n.d(r,"deleteActions",(function(){return x})),n.d(r,"existContactsAction",(function(){return g}));var c={};n.r(c),n.d(c,"getContacts",(function(){return C})),n.d(c,"getFilter",(function(){return _})),n.d(c,"getContactsWithFilter",(function(){return F})),n.d(c,"isLoading",(function(){return y})),n.d(c,"error",(function(){return w}));var a={};n.r(a),n.d(a,"fetchContacts",(function(){return E})),n.d(a,"addNewContact",(function(){return M})),n.d(a,"deleteContact",(function(){return V}));var o=n(0),i=n.n(o),u=n(14),s=n.n(u),l=(n(46),n(47),n(20)),d=n(16),b=n.n(d),j=n(111),f=n(15),O=(n(27),n(110)),p=n(8),m=n(7),h=Object(m.b)("contacts/addContact"),v=Object(m.b)("contacts/filter"),x=Object(m.b)("contacts/deleteContact"),g=Object(m.b)("contact/existContact");var C=function(t){return t.contacts.items},_=function(t){return t.contacts.filter},F=function(t){return e=C(t),""===(n=_(t))?e:e.filter((function(t){var e=t.data.name;return function(t,e){var n=e.slice(0,t.length);return t.toLowerCase()===n.toLowerCase()}(n,e)}));var e,n},y=function(t){return t.contacts.loading},w=function(t){return t.contacts.error},L=n(17),I=n.n(L),N=n(22),k=n(23),A=n.n(k),B="http://localhost:4040/contacts",T=function(){return A.a.get(B).then((function(t){return t})).catch(console.log)},S=function(t){return A.a.post(B,{data:t})},W=function(t){return A()({method:"delete",url:"".concat(B,"/").concat(t)})},E=Object(m.c)([g],function(){var t=Object(N.a)(I.a.mark((function t(e,n){var r,c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,T();case 4:return c=t.sent,t.abrupt("return",c.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r("".concat(t.t0.message)));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),M=Object(m.c)([h],function(){var t=Object(N.a)(I.a.mark((function t(e,n){var r,c;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,S(e);case 4:return c=t.sent,t.abrupt("return",c.data);case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",r("".concat(t.t0.message,"-- we can not add this contact please reload this page and try again")));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,n){return t.apply(this,arguments)}}()),V=Object(m.c)([x],function(){var t=Object(N.a)(I.a.mark((function t(e,n){var r;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n.rejectWithValue,t.prev=1,t.next=4,W(e);case 4:if(200!==t.sent.status){t.next=7;break}return t.abrupt("return",e);case 7:t.next=12;break;case 9:return t.prev=9,t.t0=t.catch(1),t.abrupt("return",r("".concat(t.t0.message,"-- we can not delete this contact please reload this page and try again")));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e,n){return t.apply(this,arguments)}}()),D=n(2);function P(){var t=Object(o.useRef)(Object(j.a)()),e=Object(o.useRef)(Object(j.a)()),n=Object(o.useState)(""),i=Object(l.a)(n,2),u=i[0],s=i[1],d=Object(o.useState)(""),m=Object(l.a)(d,2),h=m[0],v=m[1],x=Object(p.c)(c.getContacts),g=Object(p.b)();return Object(D.jsx)(D.Fragment,{children:Object(D.jsxs)("form",{id:"form",className:b.a.Form,onSubmit:function(t){t.preventDefault(),""!==u.trim()&&""!==h.trim()?x.some((function(t){return t.data.name.toLowerCase()===u.toLowerCase()}))?f.b.error(u+" is already exist"):(g(r.filterAction("")),g(a.addNewContact({name:u,number:h})),f.b.success("you have new contact"),s(""),v("")):f.b.info("fill in all fields")},children:[Object(D.jsx)("label",{htmlFor:t.current,className:b.a.Label,children:"Name"}),Object(D.jsx)("input",{id:t.current,className:b.a.Input,type:"text",name:"name",value:u,onChange:function(t){return s(t.target.value)}}),Object(D.jsx)("label",{htmlFor:e.current,className:b.a.Label,name:"number",children:"Number"}),Object(D.jsx)("input",{id:e.current,className:b.a.Input,type:"tel",name:"number",value:h,onChange:function(t){return v(t.target.value)}}),Object(D.jsx)("div",{className:b.a.AddBtn,children:Object(D.jsx)(O.a,{type:"submit",variant:"contained",color:"primary",children:"Add contact"})})]})})}var R=n(24),q=n.n(R),z=(n(73),n(74),n(37)),J=n.n(z),H=function(){return Object(D.jsx)(J.a,{type:"TailSpin",color:"#00BFFF",height:100,width:100,className:"Loading"})};function K(){var t=Object(p.c)(c.getContactsWithFilter),e=Object(p.c)(c.isLoading),n=Object(p.b)();return Object(o.useEffect)((function(){n(a.fetchContacts())}),[]),e?Object(D.jsx)(H,{}):Object(D.jsx)("ul",{children:t.map((function(t){var e=t.data,r=e.name,c=e.number,o=t.id;return Object(D.jsx)("li",{children:Object(D.jsxs)("div",{className:q.a.Item,children:[Object(D.jsxs)("p",{className:q.a.Text,children:[r,": ",Object(D.jsx)("span",{children:c})]}),Object(D.jsx)("button",{type:"button",className:q.a.Button,onClick:function(){return function(t){var e=t.id,r=t.name;return f.b.info(r+" is deleted"),n(a.deleteContact(e))}({id:o,name:r})},children:"Delete"})]})},o)}))})}var Q=n(25),X=n.n(Q);function G(){var t=Object(p.c)(c.getFilter),e=Object(p.b)(),n=i.a.useRef(Object(j.a)());return Object(D.jsxs)("div",{className:X.a.Item,children:[Object(D.jsx)("label",{className:X.a.Label,htmlFor:n.current,children:"Find contacts by name"}),Object(D.jsx)("input",{className:X.a.Input,id:n.current,value:t,onChange:function(t){return e(r.filterAction("".concat(t.target.value.trim())))}})]})}function U(){var t=Object(p.c)(c.error);return Object(o.useEffect)((function(){t&&f.b.error(t)}),[t]),Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{id:"title",children:"Phonebook"}),Object(D.jsx)(P,{}),Object(D.jsx)("h2",{children:"Contacts"}),Object(D.jsx)(G,{}),Object(D.jsx)(K,{}),Object(D.jsx)(f.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(D.jsx)(f.a,{})]})}var Y,Z,$,tt=n(38),et=n(13),nt=n(4),rt=n(12),ct=n(6),at={items:[],filter:"",error:null,loading:!1},ot=Object(m.d)(at.items,(Y={},Object(nt.a)(Y,E.fulfilled,(function(t,e){var n=e.payload;return Object(rt.a)(n)})),Object(nt.a)(Y,M.fulfilled,(function(t,e){var n=e.payload;return[].concat(Object(rt.a)(t),[n])})),Object(nt.a)(Y,V.fulfilled,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),Y)),it=Object(m.d)(at.loading,(Z={},Object(nt.a)(Z,E.pending,(function(){return!0})),Object(nt.a)(Z,E.fulfilled,(function(){return!1})),Object(nt.a)(Z,E.rejected,(function(){return!1})),Z)),ut=Object(m.d)(at.error,($={},Object(nt.a)($,E.pending,(function(){return null})),Object(nt.a)($,M.pending,(function(){return null})),Object(nt.a)($,V.pending,(function(){return null})),Object(nt.a)($,E.rejected,(function(t,e){return e.payload})),Object(nt.a)($,V.rejected,(function(t,e){return e.payload})),Object(nt.a)($,M.rejected,(function(t,e){return e.payload})),$)),st=Object(m.d)(at.filter,Object(nt.a)({},v,(function(t,e){return e.payload}))),lt=Object(ct.b)({items:ot,filter:st,error:ut,loading:it}),dt=n(39),bt={key:"List",storage:n.n(dt).a,blacklist:["filter","items"]},jt=Object(et.g)(bt,lt),ft=Object(m.a)({reducer:{contacts:jt},middleware:function(t){return Object(rt.a)(t({serializableCheck:{ignoredActions:[et.a,et.f,et.b,et.c,et.d,et.e]}}))},devTools:!1}),Ot={store:ft,persistor:Object(et.h)(ft)};console.log("aaaaaaaaaaaaaa"),s.a.render(Object(D.jsx)(i.a.StrictMode,{children:Object(D.jsx)(p.a,{store:Ot.store,children:Object(D.jsx)(tt.a,{loading:null,persistor:Ot.persistor,children:Object(D.jsx)(U,{})})})}),document.getElementById("root"))}},[[95,1,2]]]);
//# sourceMappingURL=main.8798a3b1.chunk.js.map