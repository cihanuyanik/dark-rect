(this["webpackJsonpdark-rect"]=this["webpackJsonpdark-rect"]||[]).push([[0],{26:function(t,e,n){t.exports={appBarTitle:"ApplicationBar_appBarTitle__9chKn",appBarBtn:"ApplicationBar_appBarBtn__1l6cl",restart:"ApplicationBar_restart__nJ1Yx",finish:"ApplicationBar_finish__2htYj"}},32:function(t,e,n){t.exports={container:"ActionButtons_container__23KbH",red:"ActionButtons_red__388w5",green:"ActionButtons_green__23NJ3"}},37:function(t,e,n){t.exports={tableLayout:"TableLayout_tableLayout__1DzfF",tableLayoutRow:"TableLayout_tableLayoutRow__jiSwO",tableLayoutColumn:"TableLayout_tableLayoutColumn__TB2Ya"}},42:function(t,e,n){t.exports={appRoot:"App_appRoot__7ECTj"}},63:function(t,e,n){"use strict";n.r(e);var a=n(4),c=n(1),i=n(7),r=n.n(i),o=n(42),s=n.n(o),l=n(28),u=n(37),j=n.n(u),b=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{flex:1};Object(l.a)(this,t),this.style={},this.style=e};function d(t){return Object(a.jsx)("div",{className:j.a.tableLayoutRow,style:t.style,children:t.children})}var h=function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{flex:1};Object(l.a)(this,t),this.style={},this.style=e};function p(t){return Object(a.jsx)("div",{className:j.a.tableLayoutColumn,style:t.style,children:t.children})}var m=function(t){var e=t.style,n=t.rows,c=t.columns,i=t.cells,r=function(t,e){if(i&&i[t]&&i[t][e])return i[t][e]};return Object(a.jsx)("div",{className:j.a.tableLayout,style:e,children:n.map((function(t,e){return Object(a.jsx)(d,{style:t.style,children:c.map((function(t,n){return Object(a.jsx)(p,{style:t.style,children:r(e,n)},n)}))},e)}))})},f=n(26),O=n.n(f),w=n(89),x=n(87),_=n(47),y=n(22),v=n.n(y),B=n(48),g=n(17),L=function(){Object(g.b)();return Object(a.jsx)(m,{rows:[new b],columns:[new h({width:110}),new h,new h({width:110})],cells:[[Object(a.jsx)(w.a,{variant:"contained",startIcon:Object(a.jsx)(_.a,{}),className:v()(O.a.appBarBtn,O.a.restart),onClick:function(){},children:Object(a.jsx)(x.a,{children:"Ba\u015fla"})}),Object(a.jsx)(x.a,{className:O.a.appBarTitle,children:"\u015eekil E\u015fle\u015ftirme"}),Object(a.jsx)(w.a,{variant:"contained",startIcon:Object(a.jsx)(B.a,{}),className:v()(O.a.appBarBtn,O.a.finish),onClick:function(){},children:Object(a.jsx)(x.a,{children:"Bitir"})})]]})},k=n(21),A=n(32),C=n.n(A),N=n.p+"static/media/green.307be109.png",T=n.p+"static/media/red.f326c9ba.png",R=function(t){var e=Object(c.useState)(0),n=Object(k.a)(e,2),i=n[0],r=n[1];Object(g.b)();return Object(a.jsx)(m,{rows:[new b],columns:[new h,new h],cells:[[Object(a.jsxs)("div",{className:v()(C.a.container,C.a.red),ref:function(t){if(t){var e=t.getBoundingClientRect(),n=e.height,a=e.width;r(n<=a?n:a)}},children:[Object(a.jsx)("img",{src:T,height:i,width:i,onClick:function(){}}),","]}),Object(a.jsxs)("div",{className:v()(C.a.container,C.a.green),children:[Object(a.jsx)("img",{src:N,height:i,width:i,onClick:function(){}}),","]})]]})},J=n(88),E=n(36),I=Object(E.b)({name:"counter",initialState:{value:0},reducers:{increment:function(t){t.value+=1},decrement:function(t){t.value-=1},incrementByAmount:function(t,e){t.value+=e.payload}}}),S=I.actions,Y=(S.increment,S.decrement,S.incrementByAmount,I.reducer),K=Object(E.a)({reducer:{counter:Y}});function W(){Object(g.b)();return Object(a.jsx)(J.a,{open:!1,onClose:function(){}})}var z=function(){return Object(a.jsxs)("div",{className:s.a.appRoot,children:[Object(a.jsx)(m,{rows:[new b({height:50}),new b,new b,new b({height:75})],columns:[new h],cells:[[Object(a.jsx)(L,{})],[""],[""],[Object(a.jsx)(R,{})]]}),Object(a.jsx)(W,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(Object(a.jsx)(g.a,{store:K,children:Object(a.jsx)(z,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[63,1,2]]]);
//# sourceMappingURL=main.4871f747.chunk.js.map