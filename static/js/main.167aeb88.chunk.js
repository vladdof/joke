(this.webpackJsonpcontest=this.webpackJsonpcontest||[]).push([[0],{22:function(t,n,e){},23:function(t,n,e){},28:function(t,n,e){"use strict";e.r(n);var r,c,a,i,o,s,u,b=e(0),j=e.n(b),p=e(14),l=e.n(p),h=(e(22),e.p+"static/media/logo.6ce24c58.svg"),f=(e(23),e(2)),x=e(3),m=e(6),O=e(5),d=e(7),g=e(4),v=e(1),y=g.a.h1(r||(r=Object(d.a)(["\n    margin-bottom: calc("," / 2);\n    font-weight: bold;\n    font-size: 36px;\n    line-height: 120%;\n    color: #fff;\n\n    span {\n        color: var(--orange-color, #f66c41);\n    }\n\n    @media (min-width: 768px) {\n        margin-bottom: ",";\n        font-size: 70px;\n        line-height: 85px;\n    }\n"])),(function(t){return t.mb}),(function(t){return t.mb})),w=function(t){Object(m.a)(e,t);var n=Object(O.a)(e);function e(){return Object(f.a)(this,e),n.apply(this,arguments)}return Object(x.a)(e,[{key:"render",value:function(){return Object(v.jsx)(y,{mb:this.props.mb,children:this.props.text})}}]),e}(j.a.Component),k=e.p+"static/media/staff.c8c3ee95.jpg",C=g.a.div(c||(c=Object(d.a)(["\n    min-height: 55vw;\n    background-image: url(",");\n    background-size: cover;\n"])),k),T=function(t){Object(m.a)(e,t);var n=Object(O.a)(e);function e(){return Object(f.a)(this,e),n.apply(this,arguments)}return Object(x.a)(e,[{key:"render",value:function(){return Object(v.jsx)(C,{children:Object(v.jsx)(w,{text:this.props.text})})}}]),e}(j.a.Component),z=g.a.a(a||(a=Object(d.a)(["\n    font-weight: 500;\n    text-decoration-line: underline;\n    color: var(--orange-color, #f66c41);\n    cursor: pointer;\n    transition: filter 0.3s;\n\n    &:hover {\n        filter: grayscale(0.7);\n    }\n"]))),A=function(t){Object(m.a)(e,t);var n=Object(O.a)(e);function e(){return Object(f.a)(this,e),n.apply(this,arguments)}return Object(x.a)(e,[{key:"render",value:function(){return Object(v.jsx)(z,{children:"\u043e\u0441\u0442\u0430\u043b\u044c\u043d\u044b\u0435 \u0448\u0443\u0442\u043a\u0438 \u0437\u0434\u0435\u0441\u044c"})}}]),e}(j.a.Component),D=g.a.p(i||(i=Object(d.a)(["\n    margin-bottom: calc("," / 1.6) };\n    font-style: ",";\n    font-weight: ",";\n    ","\n\n    @media (min-width: 658px) {\n       margin-bottom: calc("," / 1.2) };\n    }\n"])),(function(t){return t.mb}),(function(t){return t.italic?"italic":""}),(function(t){return t.bold?"bold":""}),(function(t){return t.color?"color: #bcbbbb;":""}),(function(t){return t.mb})),F=function(t){Object(m.a)(e,t);var n=Object(O.a)(e);function e(){return Object(f.a)(this,e),n.apply(this,arguments)}return Object(x.a)(e,[{key:"render",value:function(){return Object(v.jsx)(D,{bold:this.props.bold,italic:this.props.italic,color:this.props.color,mb:this.props.mb,children:this.props.text})}}]),e}(j.a.Component),J=e(8),I=e.n(J),N=e(12),S=function t(){var n=this;Object(f.a)(this,t),this.startUrl="https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&jsonp=parseQuote",this.getResource=function(){var t=Object(N.a)(I.a.mark((function t(n){var e;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(n);case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430 ".concat(e.status));case 5:return t.next=7,e.json();case 7:return t.abrupt("return",t.sent);case 8:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),this.getJoke=Object(N.a)(I.a.mark((function t(){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.getResource(n.startUrl);case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})))},B=g.a.div(o||(o=Object(d.a)(["\n    margin-bottom: calc(var(--mb));\n\n    h2 {\n        margin-bottom: 20px;\n        font-size: 36px;\n        line-height: 120%;\n        font-weight: 500;\n        text-transform: uppercase;\n    }\n\n    @media (min-width: 658px) {\n        margin-bottom: calc(var(--mb) / 2);\n\n        h2 {\n            font-size: 70px;\n            line-height: 85px;\n        }\n    }\n"]))),E="\u041a\u0430\u043a \u043f\u043e\u044f\u0441\u043d\u0438\u0442\u044c \u0440\u0430\u0437\u043d\u0438\u0446\u0443 \u043c\u0435\u0436\u0434\u0443 \u0440\u0430\u0437\u043d\u044b\u043c\u0438 IT-\u0441\u043f\u0435\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044f\u043c\u0438 \u043d\u0435 \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0441\u0442\u0443? \u0418\u043d\u0436\u0435\u043d\u0435\u0440 (\xab\u0436\u0435\u043b\u0435\u0437\u044f\u0447\u043d\u0438\u043a\xbb) \u2013 \u043e\u043d \u043a\u0430\u043a \u0445\u0438\u0440\u0443\u0440\u0433, \u043f\u043e\u0441\u043c\u043e\u0442\u0440\u0438\u0442 \u0432\u043d\u0443\u0442\u0440\u044c \u043e\u0440\u0433\u0430\u043d\u0438\u0437\u043c\u0430, \u0438\u0441\u043f\u0440\u0430\u0432\u0438\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u044b, \u043c\u043e\u0436\u0435\u0442 \u0434\u0430\u0436\u0435 \u0443\u043b\u0443\u0447\u0448\u0438\u0442\u044c \u0447\u0442\u043e-\u0442\u043e. \u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442 \u043f\u043e\u0445\u043e\u0436 \u043d\u0430 \u0441\u0432\u044f\u0449\u0435\u043d\u043d\u0438\u043a\u0430 \u0438 \u0443\u0447\u0438\u0442\u0435\u043b\u044f \u2013 \u043e\u043d \u0437\u0430\u0431\u043e\u0442\u0438\u0442\u0441\u044f \u043e \u0434\u0443\u0448\u0435 \u0438 \u0437\u043d\u0430\u043d\u0438\u044f\u0445. \u0410 \u0441\u0442\u043e\u043b\u044c \u043f\u0440\u0438\u0432\u044b\u0447\u043d\u044b\u0439 \u0432\u0441\u0435\u043c \u0432 \u043e\u0444\u0438\u0441\u0430\u0445 \u0441\u0438\u0441\u0430\u0434\u043c\u0438\u043d \u2013 \u044d\u0442\u043e \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0441\u0438\u0434\u0435\u043b\u043a\u0438: \xab\u043f\u043e\u0441\u0442\u0430\u0432\u0438\u0442 \u0443\u043a\u043e\u043b\xbb, \u0434\u0430\u0441\u0442 \xab\u0442\u0430\u0431\u043b\u0435\u0442\u043a\u0443\xbb, \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0435 \u0441\u043e\u0441\u0442\u043e\u044f\u043d\u0438\u0435.",L=function(t){Object(m.a)(e,t);var n=Object(O.a)(e);function e(){var t;Object(f.a)(this,e);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(t=n.call.apply(n,[this].concat(c))).fetchData=new S,t.state={text:E},t}return Object(x.a)(e,[{key:"componentDidMount",value:function(){this.updateText()}},{key:"updateText",value:function(){var t=this;this.fetchData.getJoke().then((function(n){t.setState({text:n.map((function(t){return t.quoteText}))})}))}},{key:"render",value:function(){return Object(v.jsxs)(B,{children:[Object(v.jsx)("h2",{children:"\u0428\u0443\u0442\u043a\u0430:"}),Object(v.jsx)(F,{text:this.state.text,mb:"var(--mb)"})]})}}]),e}(j.a.Component),M=function(t){Object(m.a)(e,t);var n=Object(O.a)(e);function e(){return Object(f.a)(this,e),n.apply(this,arguments)}return Object(x.a)(e,[{key:"render",value:function(){return Object(v.jsxs)("li",{children:[" ",this.props.text," "]})}}]),e}(j.a.Component),P=g.a.div(s||(s=Object(d.a)(["\n    h2 {\n        font-style: italic;\n        font-weight: bold;\n    }\n"]))),Q=g.a.ul(u||(u=Object(d.a)(["\n    margin-top: 5px;\n    margin-bottom: calc(var(--mb));\n    font-weight: 500;\n\n    @media (min-width: 658px) {\n       margin-bottom: calc(var(--mb) / 2);\n    }\n"]))),R=function(t){Object(m.a)(e,t);var n=Object(O.a)(e);function e(){return Object(f.a)(this,e),n.apply(this,arguments)}return Object(x.a)(e,[{key:"render",value:function(){return Object(v.jsxs)(P,{children:[Object(v.jsx)(F,{text:"\u043d\u043e \u0441\u043d\u0430\u0447\u0430\u043b\u0430, \u043f\u043e\u0434\u0433\u043e\u0442\u043e\u0432\u044c\u0442\u0435\u0441\u044c:",bold:!0,italic:!0,mb:"20px"}),Object(v.jsxs)(Q,{children:[Object(v.jsx)(M,{text:"\u0441\u044f\u0434\u044c\u0442\u0435 \u043d\u0430 \u0441\u0442\u0443\u043b,"}),Object(v.jsx)(M,{text:"\u0432\u0434\u043e\u0445\u043d\u0438\u0442\u0435,"}),Object(v.jsx)(M,{text:"\u0432\u044b\u0434\u043e\u0445\u043d\u0438\u0442\u0435,"}),Object(v.jsx)(M,{text:"\u0440\u0430\u0441\u0441\u043b\u0430\u0431\u044c\u0442\u0435\u0441\u044c."})]})]})}}]),e}(j.a.Component);var U=function(){return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)("header",{className:"App-header",children:Object(v.jsx)("img",{src:h,className:"App-logo",alt:"logo"})}),Object(v.jsx)(T,{text:["10 ",Object(v.jsx)("span",{children:"\u0441\u043c\u0435\u0448\u043d\u044b\u0445"}),"? \u0448\u0443\u0442\u043e\u043a \u0434\u043b\u044f \u0440\u0430\u0437\u0440\u0431\u043e\u0442\u0447\u0438\u043a\u0430"]}),Object(v.jsx)(F,{text:["\u043d\u0430 \u0444\u043e\u0442\u043e ",Object(v.jsx)("del",{children:"\u0441\u0435\u0440\u044c\u0435\u0437\u043d\u044b\u0439"})," \u0447\u0435\u043b\u043e\u0432\u0435\u043a"],color:!0,mb:"var(--mb)"}),Object(v.jsx)(w,{text:["\u043f\u0435\u0440\u0432\u0430\u044f ",Object(v.jsx)("span",{children:"\u0448\u0443\u0442\u043a\u0430"}),Object(v.jsx)("br",{})," \u0441\u043a\u043e\u0440\u043e \u0431\u0443\u0434\u0435\u0442..."],mb:"90px"}),Object(v.jsx)(R,{}),Object(v.jsx)(L,{}),Object(v.jsx)(A,{})]})},q=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,29)).then((function(n){var e=n.getCLS,r=n.getFID,c=n.getFCP,a=n.getLCP,i=n.getTTFB;e(t),r(t),c(t),a(t),i(t)}))};l.a.render(Object(v.jsx)(j.a.StrictMode,{children:Object(v.jsx)(U,{})}),document.getElementById("root")),q()}},[[28,1,2]]]);
//# sourceMappingURL=main.167aeb88.chunk.js.map