(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,a){e.exports=a(68)},31:function(e,t,a){},33:function(e,t,a){},35:function(e,t,a){},60:function(e,t,a){},62:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(23),s=a.n(o),l=(a(31),a(1)),c=a(2),i=a(4),u=a(3),m=a(5),p=(a(33),a(35),a(7)),d=a(9),h=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={creds:{username:"abcd",password:""},validate:!0},a.storeCredentials=function(){console.log("clicked"),"srinath"===a.state.username&&(a.setState(Object(p.a)({},a.state.creds,{validate:!1})),a.props.credsAddtoStore(a.state.username,a.state.password)),console.log(a.state.username)},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.state.validate?r.a.createElement("div",null,r.a.createElement("input",{type:"text",placeholder:"Username",onChange:function(t){return e.setState({username:t.target.value})}}),r.a.createElement("input",{type:"password",placeholder:"password",onChange:function(t){return e.setState({password:t.target.value})}}),r.a.createElement("button",{onClick:this.storeCredentials},"Go")):r.a.createElement("div",null,"Welcome ",this.props.username))}}]),t}(n.Component),E=Object(d.b)(function(e){return{crds:e.creds}},function(e){return{credsAddtoStore:function(t,a){return e({type:"STORECREDS",username:t,password:a})}}})(h),N=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"header"},r.a.createElement("center",null,"Cloud Application"),r.a.createElement("div",{className:"login"},r.a.createElement(E,null)))}}]),t}(n.Component),g=a(25),b=a.n(g),y=(a(60),a(62),function(e){function t(e){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).call(this,e))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{onClick:this.props.clicked},this.props.homeName,r.a.createElement("i",{style:{color:"red"}}," vs "),this.props.awayName))))))}}]),t}(n.Component)),v=(a(64),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={teamA:"",teamB:"",draw:"",loginflag:!1},a.placebetonTeam=function(){console.log("something selected"),console.log(a.state.teamA),""===a.props.user.username?(console.log("something selected without"),a.setState(Object(p.a)({},a.state,{loginflag:!0}))):(console.log("something selected with username"),a.props.AddBetsToStore(a.state.teamA+a.props.home,a.state.teamB+a.props.away,a.state.draw+a.props.home+a.props.away,a.props.user.username),localStorage.setItem(a.props.user.username+a.props.home+a.props.away,a.state.teamA+a.props.home+a.state.teamB+a.props.away+a.state.draw+a.props.home+a.props.away+a.props.user.username),document.getElementById("result").innerHTML=localStorage.getItem(a.props.user.username+a.props.home+a.props.away))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=r.a.createElement("h2",null,r.a.createElement("p",null,"Place bet on below event")),a=!1,n=!1,o=!1,s=!1,l=!1,c=!1,i=!1,u=!1;return"SWEDEN"===this.props.country&&(c=!0),"ENGLAND"===this.props.country&&(i=!0),"FRANCE"===this.props.country&&(u=!0),"FOOTBALL"===this.props.sport&&(a=!0),"SNOOKER"===this.props.sport&&(n=!0),"TENNIS"===this.props.sport&&(o=!0),"ICE_HOCKEY"===this.props.sport&&(s=!0),"HANDBALL"===this.props.sport&&(l=!0),this.props.id&&(t=r.a.createElement("div",null,r.a.createElement("div",{className:"content"},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("th",null,this.props.home),r.a.createElement("th",null),r.a.createElement("th",null,this.props.away)),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("center",null,r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({teamA:t.target.value})}})," vote team-a")),r.a.createElement("td",null,r.a.createElement("center",null,r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({draw:t.target.value})}}),"DRAW")),r.a.createElement("td",null,r.a.createElement("center",null,r.a.createElement("input",{type:"text",onChange:function(t){return e.setState({teamB:t.target.value+{}})}}),"vote team-b")))))),r.a.createElement("button",{onClick:this.placebetonTeam},"Place Bet"),r.a.createElement("div",null,r.a.createElement("center",null,this.props.country,u?r.a.createElement("img",{src:"https://content.screencast.com/users/fg-a/folders/world-flags/media/8cfe9e61-62f1-4068-8e3d-3ce249f692ef/animated-french-flag.gif",width:"68",height:"50",border:"0",alt:"Flags"}):null,c?r.a.createElement("img",{src:"https://content.screencast.com/users/fg-a/folders/world-flags/media/97284e55-e0b8-4987-a89d-ad7612e88c34/animated-sweden-flag.gif",width:"68",height:"50",border:"0",alt:"Flags"}):null,i?r.a.createElement("img",{src:"https://content.screencast.com/users/fg-a/folders/world-flags/media/f72ac381-bb38-4343-b2cb-e6010e23e888/greatbrE.gif",width:"68",height:"50",border:"0",alt:"Flags"}):null)),this.state.loginflag?r.a.createElement("div",null,r.a.createElement("p",null,"Please login to place bet")):null)),r.a.createElement("div",null,r.a.createElement("div",null,"Welcome ",this.props.user.username,r.a.createElement("center",null,a?r.a.createElement("img",{src:"http://pngimg.com/uploads/football/football_PNG52797.png",width:"55px",height:"55px",style:{objectfit:"cover"}}):null,o?r.a.createElement("img",{src:"http://pngimg.com/uploads/tennis/tennis_PNG10421.png",width:"55px",height:"55px",style:{objectfit:"cover"}}):null,n?r.a.createElement("img",{src:"http://www.pngmart.com/files/4/Snooker-PNG-Clipart.png",width:"55px",height:"55px",style:{objectfit:"cover"}}):null,s?r.a.createElement("img",{src:"http://pngimg.com/uploads/hockey/hockey_PNG100.png",width:"55px",height:"55px",style:{objectfit:"cover"}}):null,l?r.a.createElement("img",{src:"http://www.pngmart.com/files/4/Handball-PNG-HD.png",width:"55px",height:"55px",style:{objectfit:"cover"}}):null)),t,r.a.createElement("div",null,r.a.createElement("div",{id:"result"}),this.props.user.betdetails," and ",this.props.user.username),this.props.sport)}}]),t}(n.Component)),A=Object(d.b)(function(e){return{user:e.userCreds}},function(e){return{AddBetsToStore:function(t,a,n,r){return e({type:"BETDETAILS",teamA:t,teamB:a,draw:n,username:r})}}})(v),f=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={events:[{awayName:"Panthrakikos Komotini",createdAt:"2015-12-18T12:30:39.228Z",group:"Greek Cup",homeName:"Chania FC",id:1002916450,name:"Chania FC - Panthrakikos Komotini",objectId:"1UaQjc7lIb",sport:"FOOTBALL",country:"ENGLAND",state:"STARTED"},{awayName:"PAOK Thessaloniki",createdAt:"2015-12-18T12:30:39.234Z",group:"Greek Cup",homeName:"Olympiakos Volos",id:1002916451,name:"Olympiakos Volos - PAOK Thessaloniki",objectId:"UPJ240T2Qj",sport:"FOOTBALL",country:"FRANCE",state:"STARTED"},{awayName:"Ukraine U18",createdAt:"2015-12-18T12:30:39.244Z",group:"Under 18",homeName:"Israel U18",id:1003022920,name:"Israel U18 - Ukraine U18",objectId:"fZZUhitsVt",sport:"FOOTBALL",country:"SWEDEN",state:"STARTED"},{awayName:"Stade Gabesien",createdAt:"2015-12-18T12:30:39.249Z",group:"Ligue 1",homeName:"CA Bizertin",id:1003015194,name:"CA Bizertin - Stade Gabesien",objectId:"Bf52z7GIut",sport:"FOOTBALL",country:"SWEDEN",state:"STARTED"},{awayName:"AS de la Marsa",createdAt:"2015-12-18T12:30:39.255Z",group:"Ligue 1",homeName:"Club Africain",id:1003015197,name:"Club Africain - AS de la Marsa",objectId:"sFjPkmljKv",sport:"FOOTBALL",country:"ENGLAND",state:"STARTED"},{awayName:"Kastamonuspor",createdAt:"2015-12-18T12:30:39.261Z",group:"T\xfcrkyie Kupasi",homeName:"Kar\u015f\u0131yaka",id:1003016331,name:"Kar\u015f\u0131yaka - Kastamonuspor",objectId:"cRqV2RTmsu",sport:"FOOTBALL",country:"FRANCE",state:"FINISHED"},{awayName:"Allen, Gareth",createdAt:"2015-12-18T12:30:39.266Z",group:"German Masters Qualifiers",homeName:"Ding Junhui",id:1003018193,name:"Ding Junhui - Allen, Gareth",objectId:"nPuz011p0W",sport:"SNOOKER",country:"SWEDEN",state:"NOT_STARTED"},{awayName:"Lines, Peter",createdAt:"2015-12-18T12:30:39.272Z",group:"German Masters Qualifiers",homeName:"Trump, Judd",id:1003018186,name:"Trump, Judd - Lines, Peter",objectId:"CSJn3kZhdx",sport:"SNOOKER",country:"ENGLAND",state:"NOT_STARTED"},{awayName:"SKIF-Krasnodar",createdAt:"2015-12-18T12:30:39.278Z",group:"Cup",homeName:"Dinamo Astrakhan",id:1003027200,name:"Dinamo Astrakhan - SKIF-Krasnodar",objectId:"enCbqOuRLr",sport:"HANDBALL",country:"SWEDEN",state:"STARTED"},{awayName:"THK Tver",createdAt:"2015-12-18T12:30:39.283Z",group:"VHL",homeName:"Zauralie Kurgan",id:1002988754,name:"Zauralie Kurgan - THK Tver",objectId:"7HWfuCIMlp",sport:"ICE_HOCKEY",country:"ENGLAND",state:"STARTED"},{awayName:"Doumbia, S/Reboul, F",createdAt:"2015-12-18T12:30:39.289Z",group:"Nigeria",homeName:"Harris, L G M/Maamoun, K M",id:1003026313,name:"Harris, L G M/Maamoun, K M - Doumbia, S/Reboul, F",objectId:"JxrZyQKTrw",sport:"TENNIS",country:"FRANCE",state:"STARTED"},{awayName:"Halebian, Alexios",createdAt:"2015-12-18T12:30:39.294Z",group:"Dominican Republic",homeName:"Bangoura, Sekou",id:1003026667,name:"Bangoura, Sekou - Halebian, Alexios",objectId:"tALMRNqAxD",sport:"TENNIS",country:"SWEDEN",state:"NOT_STARTED"},{awayName:"Roberts, Justin",createdAt:"2015-12-18T12:30:39.300Z",group:"Dominican Republic",homeName:"Pla Malfeito, Jaume",id:1003026666,name:"Pla Malfeito, Jaume - Roberts, Justin",objectId:"KGA9nqYAJl",sport:"TENNIS",country:"ENGLAND",state:"FINISHED"},{awayName:"Mridha, J",createdAt:"2015-12-18T12:30:39.306Z",group:"Qatar",homeName:"Clayton, Scott",id:1003026476,name:"Clayton, Scott - Mridha, J",objectId:"utc63de1Fl",sport:"TENNIS",country:"FRANCE",state:"STARTED"},{awayName:"Kania, P/Kerkhove, L",createdAt:"2015-12-18T12:30:39.311Z",group:"Ankara",homeName:"Buyukakcay, C/Krunic, A",id:1003026234,name:"Buyukakcay, C/Krunic, A - Kania, P/Kerkhove, L",objectId:"mTVUIuYdbF",sport:"TENNIS",country:"SWEDEN",state:"NOT_STARTED"},{awayName:"Chernetsova, D/Perper, A",createdAt:"2015-12-18T12:30:39.317Z",group:"El Kantaoui",homeName:"Baskova, D/Podlinska, M",id:1003026673,name:"Baskova, D/Podlinska, M - Chernetsova, D/Perper, A",objectId:"heL53W56d2",sport:"TENNIS",country:"FRANCE",state:"STARTED"},{awayName:"Njoze, M",createdAt:"2015-12-18T12:30:39.322Z",group:"El Kantaoui",homeName:"Stoilkovska, M",id:1003026214,name:"Stoilkovska, M - Njoze, M",objectId:"gldlV9xhi2",sport:"TENNIS",country:"SWEDEN",state:"STARTED"},{awayName:"Haas, Barbara",createdAt:"2015-12-18T12:30:39.328Z",group:"Navi Mumbai",homeName:"Jia-Jing Lu",id:1003026299,name:"Jia-Jing Lu - Haas, Barbara",objectId:"V6Qsm2Wlms",sport:"TENNIS",country:"ENGLAND",state:"FINISHED"}],eventSelected:null,eventhomeName:null,eventawayName:null},a.selectEventHandler=function(e,t,n,r,o){a.setState({eventSelected:e,eventhomeName:t,eventawayName:n,eventcountry:o,eventsport:r})},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){b.a.get("http://localhost:8080/hello",{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"},proxy:{host:"192.168.0.103",port:8080}}).then(function(e){console.log(e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"col1"},r.a.createElement("p",null,"List of Events"),this.state.events.map(function(t){return r.a.createElement(y,{key:t.id,country:t.country,awayName:t.awayName,group:t.group,homeName:t.homeName,sport:t.sport,status:t.state,clicked:function(){return e.selectEventHandler(t.id,t.homeName,t.awayName,t.sport,t.country)}})})),r.a.createElement("div",{className:"col2"},r.a.createElement("center",null,r.a.createElement(A,{id:this.state.eventSelected,home:this.state.eventhomeName,away:this.state.eventawayName,country:this.state.eventcountry,sport:this.state.eventsport}))))}}]),t}(n.Component),T=(a(66),function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"Header"},r.a.createElement(N,null)),r.a.createElement("div",{className:"container"},r.a.createElement(f,null)))}),w=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,"Event"),r.a.createElement("div",null,"Vote"))}}]),t}(n.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null,r.a.createElement(w,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var O={userCreds:{username:"",password:"",betdetails:"unnn",arr:[]}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;if("STORECREDS"===t.type){var a={username:t.username,password:t.password,betdetails:"logined"};return Object(p.a)({},e,{userCreds:a})}if("BETDETAILS"===t.type){var n={username:t.username,betdetails:e.betdetails+t.teamA+t.teamB+t.draw+t.username};return Object(p.a)({},e,{userCreds:n})}return console.log(e),e},k=a(11),C=Object(k.b)(j);s.a.render(r.a.createElement(d.a,{store:C},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,2,1]]]);
//# sourceMappingURL=main.edf3cf64.chunk.js.map