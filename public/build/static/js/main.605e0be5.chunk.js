(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){e.exports=a(27)},19:function(e,t,a){},27:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(12),l=a.n(s),c=(a(19),a(7)),i=a.n(c),m=a(8),o=a(1),u=a(2),h=a(4),v=a(3),d=a(5),p=a(6),f=a.n(p),E=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).state={list:null,show:!1,error:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=Object(m.a)(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/streamers/all");case 3:return t=e.sent,e.next=6,t.json();case 6:a=e.sent,this.setState({list:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),this.setState({error:e.t0});case 13:case"end":return e.stop()}},e,this,[[0,10]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this,t=this.state,a=t.list,n=t.show,s=t.error;return console.log(s),!a||s?r.a.createElement("span",null,s):r.a.createElement("div",null,r.a.createElement("div",{className:"header"},r.a.createElement("h5",{className:"ml-2 mt-2"},"Catalog ",r.a.createElement("small",null,Object.keys(this.state.list).length)),r.a.createElement("span",{className:"showmore ml-2",onClick:function(){return e.setState({show:!n})}},n?"Show less":"Show more")),r.a.createElement("div",{className:"actuallist"},this.renderStreams()))}},{key:"renderStreams",value:function(){var e=this.state,t=e.list,a=e.show;return t.map(function(e,t){var n="https://s3.us-east-2.amazonaws.com/fetchappbucket/images/".concat(e.Name,".jpg");if(a||!(t>=6))return r.a.createElement("div",{className:"streamer",key:f()(),onClick:function(){var t="https://www.youtube.com/channel/".concat(e.ChannelId);window.open(t,"_blank").focus()}},r.a.createElement("div",{className:"substreamer"},r.a.createElement("img",{src:n,alt:"streamimage",className:"ml-2"}),r.a.createElement("div",{className:"streamname ml-2 "},r.a.createElement("span",null,e.Name))))})}}]),t}(n.Component),b=function(e){var t=e.theme?"darkTheme":"whiteTheme",a=e.live?Object.values(e.live).reduce(function(e,t){if(!isNaN(t).viewers)return e+=t.Viewers},0):"0";return r.a.createElement("nav",{className:"navbar navbar-expand-lg ".concat(t)},r.a.createElement("span",{className:"navbar-brand"},"FetcherApp ",r.a.createElement("i",{className:"fa fa-toggle-on ml-2",onClick:function(){return e.toggle()}})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarText"},r.a.createElement("span",{className:"navbar-text"},"Total Viewers: ".concat(a))))},k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).state={theStream:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props),this.props.live&&this.setState({theStream:Object.values(this.props.live)[0]})}},{key:"componentDidUpdate",value:function(e,t,a){var n=this.props,r=n.live,s=n.onStream,l=this.state.theStream;s&&!r[s]?(console.log("first"),this.setState({theStream:r[Object.keys(r)[0]]})):e.onStream!==this.props.onStream?this.setState({theStream:r[s]}):l&&e.live!==this.props.live?this.setState({theStream:r[l.ChannelID]},function(){}):r[l.ChannelID]||this.setState({theStream:r[Object.keys(r)[0]]})}},{key:"render",value:function(){var e=this.state.theStream;if(!e)return null;var t=e.Likes,a=e.Dislikes,n=e.VideoID,s=e.Viewers,l=e.Title,c=this.props.theme?"darkTheme":"whiteTheme",i="https://www.youtube.com/embed/".concat(n,"?autoplay=1&amp;showinfo=0&amp;modestbranding=1&amp;enablejsapi=1&amp"),m=window.location.hostname,o="https://www.youtube.com/live_chat?v=".concat(n,"&embed_domain=").concat(m);return r.a.createElement("div",{className:"contentmain",style:this.props.theme?{backgroundColor:"black"}:{backgroundColor:"#D6D6D6"}},r.a.createElement("div",{className:"videoparent"},r.a.createElement("div",{className:"videonav ".concat(c)},r.a.createElement("div",{className:"marginnav"},r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-thumbs-up"})," ",t),r.a.createElement("span",null,r.a.createElement("i",{className:"fa fa-thumbs-down ml-4"})," ",a))),r.a.createElement("div",{className:"margincontent ".concat(c)},r.a.createElement("div",{className:"actualvideo"},r.a.createElement("iframe",{src:i,frameBorder:"0"})),r.a.createElement("div",{className:"topcontent"},r.a.createElement("div",{className:"videocontent mt-2"},r.a.createElement("h4",{className:"ml-2"},l),r.a.createElement("span",null,r.a.createElement("i",{style:{color:"red"},className:"fa fa-circle mr-2"}),s," Viewers")),r.a.createElement("div",{className:"body ml-2 mb-2"},r.a.createElement("p",null,e.Description))))),r.a.createElement("div",{className:"chatter"},r.a.createElement("iframe",{src:o,frameBorder:"0"})))}}]),t}(n.Component),w=a(13),g=a.n(w),N=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).state={updater:[]},a.styles={card:{color:"white"}},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(e,t,a){var n=this;if(e.active!==this.props.active){var r=this.props.active,s=Object.values(e.active).map(function(e){return e.name}),l=Object.values(r).map(function(e){return e.name}),c=g.a.difference(l,s);this.setState({updater:c}),setTimeout(function(){n.setState({updater:[]})},8500)}}},{key:"render",value:function(){return!this.state.updater.length>0?r.a.createElement("div",{className:"notify",style:this.styles.card},r.a.createElement("div",{className:"flexme"},r.a.createElement("span",null,"No difference..."))):r.a.createElement("div",{className:"notify act",style:this.styles.card},this.updateStream())}},{key:"updateStream",value:function(){return this.state.updater.map(function(e){return console.log(e),r.a.createElement("div",{key:f()(),className:"flexme"},r.a.createElement("span",null,e," is online!"))})}}]),t}(n.Component),y=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(h.a)(this,Object(v.a)(t).call(this,e))).toggleTheme=function(){localStorage.setItem("dark",JSON.stringify(!a.state.dark)),a.setState({dark:!a.state.dark})},a.getStreams=Object(m.a)(i.a.mark(function e(){var t,n,r;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/streamers/live");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r=n.reduce(function(e,t){return e[t.ChannelID]=t,e},{}),a.setState({live:r}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0),a.setState({error:e.t0});case 15:case"end":return e.stop()}},e,this,[[0,11]])})),a.state={live:null,stream:null,dark:!0,error:null},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("dark"));"boolean"===typeof e&&this.setState({dark:e}),this.getStreams(),this.checker=setInterval(this.getStreams,3e4)}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.dark;if(a!==t.dark){var n=a?"#404040":"#D6D6D6";document.documentElement.style.setProperty("--streamhover",n)}}},{key:"render",value:function(){var e=this.state,t=e.live,a=e.error;if(!t)return r.a.createElement("h4",{style:{color:"white",textAlign:"center",margin:"auto"}},"Loading streams...");if(a)return r.a.createElement("h4",{style:{color:"white",textAlign:"center",margin:"auto"}},"There seems to be an issue with the server... I'll try to fix it ASAP");var n=this.state.dark?"darkTheme":"whiteTheme";return r.a.createElement("div",null,r.a.createElement(b,{toggle:this.toggleTheme,theme:this.state.dark,live:t}),r.a.createElement("div",{className:"maindiv ".concat(n)},r.a.createElement("div",{className:"navigator"},r.a.createElement("div",{className:"streamlist active"},r.a.createElement("h5",{className:"online ml-2"},"Online ",r.a.createElement("small",null,Object.keys(this.state.live).length)),r.a.createElement("div",{className:"actuallist"},this.renderStreams()),r.a.createElement(E,{theme:this.state.dark}))),r.a.createElement(k,{onStream:this.state.stream,live:this.state.live,theme:this.state.dark}),r.a.createElement(N,{active:this.state.live})))}},{key:"renderStreams",value:function(){var e=this,t=this.state.live;return Object.values(t).map(function(t){var a="https://s3.us-east-2.amazonaws.com/fetchappbucket/images/".concat(t.Name,".jpg"),n=t.Viewers;return r.a.createElement("div",{className:"streamer mt-1",key:f()(),onClick:function(){return e.setState({stream:t.ChannelID})}},r.a.createElement("div",{className:"substreamer"},r.a.createElement("img",{src:a,alt:"streamimage",className:"ml-2"}),r.a.createElement("div",{className:"streamname ml-2 "},r.a.createElement("span",null,t.Name),r.a.createElement("span",null,r.a.createElement("small",null,"is Playing IRL"))),r.a.createElement("span",{className:"marginme"},r.a.createElement("small",null,n," viewers"))))})}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement("div",null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[14,2,1]]]);
//# sourceMappingURL=main.605e0be5.chunk.js.map