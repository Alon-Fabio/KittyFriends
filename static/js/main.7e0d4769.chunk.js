(this.webpackJsonprobots=this.webpackJsonprobots||[]).push([[0],{11:function(e,t,n){e.exports=n(20)},16:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(4),o=n.n(c);n(16),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(17);var i=n(1),s=n.n(i),l=n(5),u=n(2),h=function(e){var t=e.SearchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"bg-light-blue dib br3 tc",type:"search",placeholder:"Search Kittens",onChange:t}))},m=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"70vh",margin:"10px",padding:"10px",borderRadius:"10px"}},e.children)},p=(n(19),r.a.memo((function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc"},r.a.createElement("img",{alt:"profile",src:"https://robohash.org/".concat(t,"?size=200x200&set=set4")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))})),function(e){e.robots;return Error("shiiit")}),d=n(6),f=n(7),b=n(9),g=n(8),E=n(10),v=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(b.a)(this,Object(g.a)(t).call(this,e))).state={hasError:!1},n}return Object(E.a)(t,e),Object(f.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Opssy, something went wrong..."):this.props.children}}]),t}(a.Component),w=function(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),d=i[0],f=i[1];function b(){return(b=Object(l.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.error(e)}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}Object(a.useEffect)((function(){!function(){b.apply(this,arguments)}()}),[d]);var g=n.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"KittyFriends"),r.a.createElement(h,{SearchChange:function(e){f(e.target.value)}}),r.a.createElement(m,null,r.a.createElement(v,null,r.a.createElement(p,{robots:g})))):r.a.createElement("h1",{className:"tc"},"loading, please wait")};o.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[11,1,2]]]);
//# sourceMappingURL=main.7e0d4769.chunk.js.map