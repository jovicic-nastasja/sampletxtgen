(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(45)},22:function(e,t,a){},24:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(14),s=a.n(o),c=(a(22),a(2)),l=a(3),i=a(5),u=a(4),h=a(6),m=(a(24),a(15)),v=a.n(m),p=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={value:e.value},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card border-success mb-3"},this.props.value)}}]),t}(n.Component),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={value:e.value},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState({value:e.target.value},function(){this.props.onChange(this.state.value)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("select",{className:"form-control",onChange:this.onChange.bind(this)},r.a.createElement("option",{value:"html"},"Yes"),r.a.createElement("option",{value:"text"},"No")))}}]),t}(n.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={value:e.value},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"onChange",value:function(e){this.setState({value:e.target.value},function(){this.props.onChange(this.state.value)})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("input",{className:"form-control",type:"number",value:this.state.value,onChange:this.onChange.bind(this)}))}}]),t}(n.Component),g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).state={paras:4,format:"html",text:""},a}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentWillMount",value:function(){this.getSampleText()}},{key:"getSampleText",value:function(){var e=this;v.a.get("https://baconipsum.com/api/?type=meat-and-filler&paras="+this.state.paras+"&format="+this.state.format).then(function(t){e.setState({text:t.data},function(){console.log(this.state)})}).catch(function(e){console.log(e)})}},{key:"showHTML",value:function(e){this.setState({format:e},this.getSampleText)}},{key:"changeParas",value:function(e){this.setState({paras:e},this.getSampleText)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App container"},r.a.createElement("h1",{className:"text-center"},"ReactJS Lorem Ipsum Text Generator"),r.a.createElement("hr",{className:"progress-bar bg-success"}),r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Number of paragraphs:"),r.a.createElement(b,{value:this.state.paras,onChange:this.changeParas.bind(this)})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Include HTML format:"),r.a.createElement(f,{value:this.state.html,onChange:this.showHTML.bind(this)}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(p,{value:this.state.text}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,2,1]]]);
//# sourceMappingURL=main.f63fbbd6.chunk.js.map