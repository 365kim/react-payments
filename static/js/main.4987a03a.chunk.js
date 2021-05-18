(this["webpackJsonp1st-react-payments"]=this["webpackJsonp1st-react-payments"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},41:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(24),s=n.n(c),o=n(13),i=n(3),u=n(0),l=function(e){var t=e.size,n=e.color,a=e.strokeWidth;return Object(u.jsx)("svg",{viewBox:"0 0 ".concat(t," ").concat(t),height:t,width:t,fill:"none",children:Object(u.jsx)("path",{d:"\n              M ".concat(t/2," 1 \n              L 1 ").concat(t/2," \n              L ").concat(t/2," ").concat(t),stroke:n,strokeWidth:a})})};l.defaultProps={size:16,strokeWidth:1.5,color:"#525252"};var d=n(2),j=n(4),m=n(6),b=n.n(m),O=n(25),f=n.n(O),p=b.a.bind(f.a),h=function(e){var t=e.className,n=e.type,a=e.children,r=Object(j.a)(e,["className","type","children"]);return Object(u.jsx)("button",Object(d.a)(Object(d.a)({className:p(["Button",t]),type:n},r),{},{children:a}))};h.defaultProps={type:"submit"};var x=n(26),N=n.n(x),C=b.a.bind(N.a),v=function(e){var t=e.className,n=e.hasShadow,a=e.children,r=Object(j.a)(e,["className","hasShadow","children"]);return Object(u.jsx)("div",Object(d.a)(Object(d.a)({className:C("Card",{"Card--shadow":n},t)},r),{},{children:a}))},_=n(27),w=n.n(_),I=b.a.bind(w.a),y=function(e){var t=e.className,n=e.companyColor,a=e.companyName,r=e.cardNumber,c=e.ownerName,s=e.expirationDate;return Object(u.jsx)("div",{className:I("CreditCardPreview",t),children:Object(u.jsx)(v,{style:{backgroundColor:n},hasShadow:!0,children:Object(u.jsxs)("div",{className:"CreditCardPreview__Wrapper",children:[Object(u.jsxs)("span",{className:"CreditCardPreview__CardCompany",children:[" ",a]}),Object(u.jsx)(v,{className:"CreditCardPreview__IC_Chip"}),Object(u.jsxs)("span",{className:"CreditCardPreview__CardNumber",children:[" ",r]}),Object(u.jsxs)("div",{className:"CreditCardPreview__Line",children:[Object(u.jsxs)("span",{className:"CreditCardPreview__OwnerName",children:[" ",c]}),Object(u.jsxs)("span",{className:"CreditCardPreview__ExpirationDate",children:[" ",s]})]})]})})})},g=n(28),F=n.n(g),k=b.a.bind(F.a),M=function(e){var t=e.className,n=e.children,a=Object(j.a)(e,["className","children"]),r=k("Container",t);return Object(u.jsx)("div",Object(d.a)(Object(d.a)({className:r},a),{},{children:n}))},D=function(e){var t=e.className,n=e.children,a=Object(j.a)(e,["className","children"]);return Object(u.jsx)("form",Object(d.a)(Object(d.a)({className:t},a),{},{children:n}))},P=n(29),S=n.n(P),B=b.a.bind(S.a),R=function(e){var t=e.as,n=e.className,a=(e.style,e.children),r=Object(j.a)(e,["as","className","style","children"]);switch(t){case"h1":return Object(u.jsx)("h1",Object(d.a)(Object(d.a)({className:B("Heading",n)},r),{},{children:a}));case"h2":return Object(u.jsx)("h2",Object(d.a)(Object(d.a)({className:B("Heading",n)},r),{},{children:a}));case"h3":return Object(u.jsx)("h3",Object(d.a)(Object(d.a)({className:B("Heading",n)},r),{},{children:a}));case"h4":return Object(u.jsx)("h4",Object(d.a)(Object(d.a)({className:B("Heading",n)},r),{},{children:a}));case"h5":return Object(u.jsx)("h5",Object(d.a)(Object(d.a)({className:B("Heading",n)},r),{},{children:a}));case"h6":return Object(u.jsx)("h6",Object(d.a)(Object(d.a)({className:B("Heading",n)},r),{},{children:a}));default:return Object(u.jsx)("h2",Object(d.a)(Object(d.a)({className:B("Heading",n)},r),{},{children:a}))}};R.defaultProps={as:"h2"};var E=n(30),L=n.n(E),H=b.a.bind(L.a),A=Object(a.forwardRef)((function(e,t){var n=e.container,a=e.className,r=Object(j.a)(e,["container","className"]);return n?Object(u.jsx)(M,{className:n,children:Object(u.jsx)("input",Object(d.a)(Object(d.a)({className:H("Input",a)},r),{},{ref:t}))}):Object(u.jsx)("input",Object(d.a)(Object(d.a)({className:H("Input",a)},r),{},{ref:t}))}));A.defaultProps={type:"text"},A.displayName="Input";var T=n(31),V=n.n(T),W=b.a.bind(V.a),J=function(e){var t=e.className,n=e.children,a=Object(j.a)(e,["className","children"]);return Object(u.jsx)("label",Object(d.a)(Object(d.a)({className:W("Label",t)},a),{},{children:n}))},K=n(32),Y=n.n(K),z=b.a.bind(Y.a),G=function(e){var t=e.isOpen,n=e.className,a=e.style,r=e.children,c=Object(j.a)(e,["isOpen","className","style","children"]);return Object(u.jsx)("div",Object(d.a)(Object(d.a)({className:z("Modal",{"Modal--open":t})},c),{},{children:Object(u.jsx)("div",{className:"Modal__ViewPort",children:Object(u.jsx)("div",{className:z("Modal__Content",n),style:a,children:r})})}))},U=n(33),Z=n.n(U),q=b.a.bind(Z.a),Q=function(e){var t=e.className,n=e.children,a=Object(j.a)(e,["className","children"]);return Object(u.jsx)("span",Object(d.a)(Object(d.a)({className:q("Text",t)},a),{},{children:n}))},X=function(e){var t=e.width,n=e.color,a=Object(j.a)(e,["width","color"]);return Object(u.jsx)("svg",Object(d.a)(Object(d.a)({xmlns:"http://www.w3.org/2000/svg",width:t,viewBox:"0 0 22 22",fill:"none"},a),{},{children:Object(u.jsx)("path",{d:"M8.4 10L8.4 17M13.4 10V17M4.88636 4V2.68775C4.88636 2.24685 5.0589 1.82345 5.36706 1.50813C5.68461 1.18318 6.11977 1 6.57412 1H14.9259C15.3802 1 15.8154 1.18318 16.1329 1.50813C16.4411 1.82345 16.6136 2.24685 16.6136 2.68775V4M21.5 4.9H0M2.5 7V18.5451C2.5 19.1593 2.73024 19.7512 3.14527 20.2039C3.61025 20.7112 4.26679 21 4.95493 21H16.5451C17.2332 21 17.8897 20.7112 18.3547 20.2039C18.7698 19.7512 19 19.1593 19 18.5451V7",stroke:n,strokeWidth:"1.8"})}))};X.defaultProps={width:22,color:"#BBBBBB"};var $="https://react-payments-project.herokuapp.com",ee={POSTS:"".concat($,"/posts"),CARDS:"".concat($,"/cards")},te="get",ne="post",ae="delete",re="/",ce="/list",se="/add",oe="/add/complete",ie="\uce74\ub4dc \uc870\ud68c\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ubb38\uc81c\uac00 \uc9c0\uc18d\ub418\uba74 \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",ue="\uce74\ub4dc \ucd94\uac00\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ubb38\uc81c\uac00 \uc9c0\uc18d\ub418\uba74 \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",le="\uce74\ub4dc \uc0ad\uc81c\uc5d0 \uc2e4\ud328\ud558\uc600\uc2b5\ub2c8\ub2e4. \ubb38\uc81c\uac00 \uc9c0\uc18d\ub418\uba74 \uad00\ub9ac\uc790\uc5d0\uac8c \ubb38\uc758\ud574\uc8fc\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4.",de="\uc815\ub9d0\ub85c \uce74\ub4dc\ub97c \uc0ad\uc81c\ud558\uc2dc\uaca0\uc2b5\ub2c8\uae4c?",je="first",me="second",be="\xb7\xb7\xb7\xb7",Oe={month:2,year:2},fe=[{name:"KB\uad6d\ubbfc\uce74\ub4dc",color:"rgb(84, 124, 228)",patterns:["356415","356912","376364","376365","425863","433290","455306","457973","467309","502123","516453","520504","522971","523612","527289","536326","536510","537706","540926","540947","554959","557042","589808","623374","625006","625804","943646","944541","944542","949098","949094","949099","949103"]},{name:"NH\ub18d\ud611\uce74\ub4dc",color:"rgb(148, 218, 205)",patterns:["356516","407916","407917","409216","409217","470616","470617","485479","485480","490611","490612","538811","538812","542416","542454","542586","546111","546112","552111","552112","559434","559438","621011","621012","624363","625111","625112","636093","657311","657312","941116","941117","942011","942012","943016","943017","943116","943117","944011","944012","944111","944112","944116","944117","944711","944712","946316"]},{name:"\uc0bc\uc131\uce74\ub4dc",color:"rgb(222, 89, 185)",patterns:["377989","379183","400913","451245","458532","463732","4689","4705","474289","512365","518831","536125","536148","536648","536181","552014","624411","625817","941029","941088","942101"]},{name:"\uc2e0\ud55c\uce74\ub4dc",color:"rgb(226, 65, 65)",patterns:["356297","356907","356878","377178","377983","377988","400772","403965","404678","422155","429612","430972","434976","436420","438676","449914","445090","451842","451845","454478","460561","461954","465887","472175","472246","478292","486678","510737","511187","515594","517134","521189","528638","535180","537943","538413","542879","549840","559410","589807","605609","606045","621078","624331","624348","625178","941061","941080","941082","941083","941161","942062","942073","942078","944078"]},{name:"\ud558\ub098\uce74\ub4dc",color:"rgb(231, 110, 154)",patterns:["356543","356545","357104","371001","377969","379192","402367","408966","411904","414025","416206","416207","416262","420189","420707","4289","4336","448125","450596","455437","459900","459930","461771","465306","465583","490625","493455","502928","511845","518185","523830","524242","524335","531838","532092","538661","541707","546252","552125","552323","553177","621025","621079","624435","624436","626261","941051","941052","941053","941181","941581","942025","944025","944081"]},{name:"\uc6b0\ub9ac\uce74\ub4dc",color:"rgb(115, 188, 109)",patterns:["404720","408320","412020","406107","421420","4326","447820","490220","514043","515954","536320","537102","538720","538920","548020","552220","553820","5589","605615","636094","621020","623393","625320","621020","655620","657020","942520","943520","944420","944520","947124"]},{name:"\ud604\ub300\uce74\ub4dc",color:"rgb(243, 125, 59)",patterns:["361653","402857","403302","404947","413526","4172","418143","433028","435661","438265","489016","512114","523930","532793","543333","550347","552290","552376","624368","943133","943135","949019","949013","949015","949018","949085","949097"]},{name:"BC\uce74\ub4dc",color:"rgb(251, 205, 88)",patterns:["356003","404803","405203","419803","427203","447703","490603","496603","538803","538903","531194","552103","558903","621003","624303","625103","655603","942003","944003","944603","970003","416339","552139","655639","657339","970039","517548","538832","552132","621032","625132","657332","655632","944032","551431","621031","657331","944031","946031","970031","411171","538159","626275","624414","935071","944071","409085","448123","521176","523527","536323","552123","559123","604823","621023","655623","935023","459951","463916","657316","9035","459912","465613","453261","485462","941696","944096","944696","941648","944648","944948","944949","949048","949049","536886","621640","625243","427352","944045","970045","941691","944691","944063","944009","944079","944061","944080","941643","944030","944095","455320","625120","943020","546465","941642","944192","930144","946044","946144","946544","946644","621249"]}],pe=function(e){var t=e.cardInfo,n=t.number,a=t.expirationDate,r=t.ownerName,c=t.isOwnerNameFilled;return{formattedNumber:he({number:n}),formattedExpirationDate:xe({expirationDate:a}),formattedOwnerName:Ne({ownerName:r,isOwnerNameFilled:c})}},he=function(e){var t=e.number;return Object.values(t).some((function(e){return 4!==e.length}))?"":[t.first,t.second,be,be].join(" ")},xe=function(e){var t=e.expirationDate,n=Object.values(t).join("/");return n.length<5||""===t.month||""===t.year?"".concat("MM").concat("/").concat("YY"):n},Ne=function(e){var t=e.ownerName;return e.isOwnerNameFilled?t:"NAME"},Ce=n(16),ve=n(10),_e=n.n(ve),we=n(15),Ie=n(14),ye=function(e){try{var t=JSON.stringify(e);return JSON.parse(t)}catch(n){console.error(n)}},ge=function(){var e=Object(we.a)(_e.a.mark((function e(t){var n,a,r,c,s,o,i;return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.url,a=t.method,r=void 0===a?te:a,c=t.body,s=Fe(r,c),e.prev=2,e.next=5,fetch(n,s);case 5:if((o=e.sent).ok){e.next=8;break}throw new Error("HTTP \uc694\uccad \uc2e4\ud328");case 8:return e.next=10,o.json();case 10:return i=e.sent,e.abrupt("return",i);case 14:throw e.prev=14,e.t0=e.catch(2),new Error(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}();function Fe(e,t){var n={method:e,headers:{"Content-Type":"application/json"}};switch(e){case te:case ae:return n;default:return Object(d.a)(Object(d.a)({},n),{},{body:t})}}var ke=ee.CARDS,Me=Object(a.createContext)(),De=function(e){var t=e.children,n=Object(a.useState)([]),r=Object(Ie.a)(n,2),c=r[0],s=r[1],o=function(){var e=Object(we.a)(_e.a.mark((function e(){var t;return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ge({url:ke,method:te});case 3:t=e.sent,s((function(){return t})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),window.alert(ie),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){o()}),[]);var i=function(){var e=Object(we.a)(_e.a.mark((function e(t){var n,a;return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=ye(t),e.prev=1,e.next=4,ge({url:ke,method:ne,body:JSON.stringify(n)});case 4:a=e.sent,s((function(e){return[].concat(Object(Ce.a)(e),[a])})),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),window.alert(ue),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=Object(we.a)(_e.a.mark((function e(t){var n;return _e.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(Ce.a)(c).filter((function(e){return e.id!==t})),e.prev=1,e.next=4,ge({url:"".concat(ke,"/").concat(t),method:ae});case 4:s((function(){return n})),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),window.alert(le),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(u.jsx)(Me.Provider,{value:{cardList:c,setCardList:s,addCard:i,deleteCard:l},children:t})},Pe={number:{first:"",second:"",third:"",fourth:""},company:{name:"",color:""},expirationDate:{month:"",year:""},ownerName:"",isOwnerNameFilled:!1,securityCode:"",password:{first:"",second:""},nickname:""},Se=Object(a.createContext)(),Be=function(e){var t=e.children,n=Object(a.useState)(Pe),r=Object(Ie.a)(n,2),c=r[0],s=r[1];return Object(u.jsx)(Se.Provider,{value:Object(d.a)(Object(d.a)({cardInfo:c},c),{},{initialCardInfo:Pe,initialOwnerName:Pe.ownerName,setCardInfo:s,setNumber:function(e){return s((function(t){return Object(d.a)(Object(d.a)({},t),{},{number:e})}))},setCompany:function(e){return s((function(t){return Object(d.a)(Object(d.a)({},t),{},{company:e})}))},setExpirationDate:function(e){return s((function(t){return Object(d.a)(Object(d.a)({},t),{},{expirationDate:e})}))},setOwnerName:function(e){return s((function(t){return Object(d.a)(Object(d.a)({},t),{},{ownerName:e})}))},setIsOwnerNameFilled:function(e){return s((function(t){return Object(d.a)(Object(d.a)({},t),{},{isOwnerNameFilled:e})}))},setSecurityCode:function(e){return s((function(t){return Object(d.a)(Object(d.a)({},t),{},{securityCode:e})}))},setPassword:function(e){return s((function(t){return Object(d.a)(Object(d.a)({},t),{},{password:e})}))},setNickname:function(e){return s((function(t){return Object(d.a)(Object(d.a)({},t),{},{nickname:e})}))}}),children:t})},Re=(n(41),function(){var e=Object(a.useContext)(Me),t=e.cardList,n=e.deleteCard,r=Object(i.f)();return Object(u.jsxs)("div",{className:"ListPage",children:[Object(u.jsx)(R,{className:"ListPage__Heading",children:"\ubcf4\uc720\uce74\ub4dc"}),Object(u.jsxs)("ul",{className:"List",children:[null===t||void 0===t?void 0:t.map((function(e){var t=e.company,a=e.nickname,r=e.id,c=pe({cardInfo:e}),s=c.formattedNumber,o=c.formattedExpirationDate,i=c.formattedOwnerName;return Object(u.jsxs)("li",{className:"ListItem__Card",children:[Object(u.jsx)(y,{companyColor:t.color,companyName:t.name,cardNumber:s,ownerName:i,expirationDate:o}),Object(u.jsx)("span",{className:"ListItem__Card__Nickname",children:a}),Object(u.jsx)(h,{className:"ListItem__Card__DeleteButton",children:Object(u.jsx)(X,{width:"1.1rem",color:"#888",onClick:function(){return function(e){window.confirm(de)&&n(e)}(r)}})})]},r)})),Object(u.jsx)("li",{className:"ListItem__Add",children:Object(u.jsx)(h,{className:"ListItem__Add__Button",onClick:function(){return r.push(se)},children:Object(u.jsx)(v,{children:Object(u.jsx)(Q,{className:"ListItem__Add__Sign",children:"+"})})})})]})]})}),Ee=function(){var e=Object(a.useContext)(Se),t=e.cardInfo,n=e.nickname,r=e.setNickname,c=e.initialNickname,s=Object(a.useContext)(Me).addCard,o=Object(a.useRef)(),l=Object(i.f)();return Object(a.useEffect)((function(){var e;null===(e=o.current)||void 0===e||e.focus()}),[]),Object(u.jsxs)(D,{className:"CardNicknameForm",children:[Object(u.jsx)(A,{className:"CardNicknameInput__Field",placeholder:"\uce74\ub4dc \ubcc4\uce6d",container:"CardNicknameInput__Filler--transparent",value:n,ref:o,onChange:function(e){return function(e){var t=e.e,n=e.setNickname,a=t.target.value.slice(0,10);n(a)}({e:e,setNickname:r})}}),Object(u.jsx)(h,{className:"CardNicknameForm__Submit_Button",disabled:n===c,onClick:function(e){return function(e){var t=e.e,n=e.cardInfo,a=e.addCard,r=e.history;t.preventDefault(),a(n),r.push(re)}({e:e,cardInfo:t,addCard:s,history:l})},children:"\ud655\uc778"})]})};n(50);var Le=function(){var e=Object(a.useContext)(Se),t=e.cardInfo,n=e.company,r=pe({cardInfo:t}),c=r.formattedNumber,s=r.formattedExpirationDate,o=r.formattedOwnerName;return Object(u.jsxs)("div",{children:[Object(u.jsx)(Q,{className:"AddCompletePage__Text",children:"\uce74\ub4dc\ub4f1\ub85d\uc774 \uc644\ub8cc\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),Object(u.jsx)(y,{className:"AddCompletePage__CreditCardPreview",companyColor:n.color,companyName:n.name,cardNumber:c,ownerName:o,expirationDate:s}),Object(u.jsx)(Ee,{})]})},He=n(12),Ae=function(e){var t=e.setIsModalOpen,n=e.refToBeFocusedNext,r=Object(a.useContext)(Se),c=r.number,s=r.setNumber,o=r.setCompany,i=Object(a.useRef)(),l=Object(a.useRef)(),d=Object(a.useRef)(),j=Object(a.useRef)(),m={first:l,second:d,third:j,fourth:n};return Object(a.useEffect)((function(){var e;null===(e=i.current)||void 0===e||e.focus()}),[]),Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(J,{children:"\uce74\ub4dc \ubc88\ud638"}),Object(u.jsxs)(M,{className:"CardNumberInput__Filler CardInfoForm__Input__Filler--filled",children:[Object(u.jsx)(A,{className:"CardNumberInput__Field",type:"number",ref:i,name:"first",value:c.first,onChange:function(e){return We({e:e,nextRef:m,number:c,setNumber:s,setCompany:o,setIsModalOpen:t})},onKeyDown:Ve}),Object(u.jsx)(Te,{length:c.first.length}),Object(u.jsx)(A,{className:"CardNumberInput__Field",type:"number",ref:l,name:"second",value:c.second,onChange:function(e){return We({e:e,nextRef:m,number:c,setNumber:s,setCompany:o,setIsModalOpen:t})},onKeyDown:Ve}),Object(u.jsx)(Te,{length:c.second.length}),Object(u.jsx)(A,{className:"CardNumberInput__Field",type:"password",ref:d,name:"third",value:c.third,onChange:function(e){return We({e:e,nextRef:m,number:c,setNumber:s,setCompany:o,setIsModalOpen:t})},onKeyDown:Ve}),Object(u.jsx)(Te,{length:c.third.length}),Object(u.jsx)(A,{className:"CardNumberInput__Field",type:"password",ref:j,name:"fourth",value:c.fourth,onChange:function(e){return We({e:e,nextRef:m,number:c,setNumber:s,setCompany:o,setIsModalOpen:t})},onKeyDown:Ve})]})]})};function Te(e){var t=4===e.length?"CardNumberInput__Separator":"CardNumberInput__Separator CardNumberInput__Separator--hidden";return Object(u.jsx)(Q,{className:t,children:"-"})}function Ve(e){["e","E","+","-"].includes(e.key)&&e.preventDefault()}function We(e){var t,n=e.e,a=e.number,r=e.setNumber,c=e.setCompany,s=e.nextRef,o=e.setIsModalOpen,i=n.target.name,u=n.target.value.slice(0,4);4===u.length&&(null===(t=s[i])||void 0===t||t.current.focus());r(Object(d.a)(Object(d.a)({},a),{},Object(He.a)({},i,u))),function(e){var t=e.inputName,n=e.slicedInputValue,a=e.number,r=e.setCompany,c=e.setIsModalOpen;if(t!==me||n.length<4||a.first<4)return;var s=a.first+n.slice(0,2),o=fe.find((function(e){return e.patterns.includes(s)}));if(!o)return void c(!0);r({name:o.name,color:o.color})}({number:a,setCompany:c,slicedInputValue:u,inputName:i,setIsModalOpen:o})}var Je=Object(a.forwardRef)((function(e,t){var n=e.refToBeFocusedNext,r=Object(a.useContext)(Se),c=r.expirationDate,s=r.setExpirationDate,o=Object(a.useRef)(),i={month:o,year:n};return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(J,{children:"\ub9cc\ub8cc\uc77c"}),Object(u.jsxs)(M,{className:"CardInfoForm__Input__Filler--filled ExpirationDateInput__Filler",children:[Object(u.jsx)(A,{className:"ExpirationDateInput__Field",placeholder:"MM",type:"number",name:"month",ref:t,value:c.month,onChange:function(e){return Ke({e:e,expirationDate:c,setExpirationDate:s,nextRef:i})}}),Object(u.jsx)(Q,{className:"ExpirationDateInput__Separator",children:"/"}),Object(u.jsx)(A,{className:"ExpirationDateInput__Field",placeholder:"YY",type:"number",name:"year",ref:o,value:c.year,onChange:function(e){return Ke({e:e,expirationDate:c,setExpirationDate:s,nextRef:i})}})]})]})}));function Ke(e){var t,n=e.e,a=e.expirationDate,r=e.setExpirationDate,c=e.nextRef,s=n.target.name,o=n.target.value.slice(0,Oe[s]);o.length===Oe[s]&&(null===(t=c[s])||void 0===t||t.current.focus());r(Object(d.a)(Object(d.a)({},a),{},Object(He.a)({},s,o)))}Je.displayName="ExpirationDateInput";var Ye=Object(a.forwardRef)((function(e,t){var n=Object(a.useContext)(Se),r=n.initialOwnerName,c=n.ownerName,s=n.setOwnerName,o=n.setIsOwnerNameFilled;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"OwnerNameInput__Header",children:[Object(u.jsx)(J,{children:"\uce74\ub4dc \uc18c\uc720\uc790 \uc774\ub984(\uc120\ud0dd)"}),Object(u.jsx)(Q,{className:"OwnerNameInput__Header__Text",children:"".concat(c.length,"/").concat(30)})]}),Object(u.jsx)(A,{className:"OwnerNameInput__Field",container:"OwnerNameInput__Filler CardInfoForm__Input__Filler--filled",placeholder:"\uce74\ub4dc\uc5d0 \ud45c\uc2dc\ub41c \uc774\ub984\uacfc \ub3d9\uc77c\ud558\uac8c \uc785\ub825\ud558\uc138\uc694.",name:"ownerNameInput",maxLength:30,ref:t,value:c===r?"":c,onChange:function(e){return function(e){var t=e.e,n=e.setOwnerName,a=t.target.value.replace(ze,"");n(a.toUpperCase())}({e:e,setOwnerName:s})},onBlur:function(e){return Ge({e:e,setIsOwnerNameFilled:o})}})]})})),ze=/[^a-zA-Z ]+/g;var Ge=function(e){(0,e.setIsOwnerNameFilled)(!0)};Ye.displayName="OwnerNameInput";var Ue=n.p+"static/media/cvc.c772b326.png",Ze=function(e){var t=e.refToBeFocusedNext,n=Object(a.useContext)(Se),r=n.securityCode,c=n.setSecurityCode;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(J,{children:"\ubcf4\uc548 \ucf54\ub4dc(CVC/CVV)"}),Object(u.jsxs)("div",{className:"SecurityCodeInput__Wrapper",children:[Object(u.jsx)(A,{className:"SecurityCodeInput__Field",container:"CardInfoForm__Input__Filler--filled SecurityCodeInput__Filler",type:"password",onChange:function(e){return function(e){var t=e.e,n=e.setSecurityCode,a=e.passwordInputRef,r=t.target.value.slice(0,3);3===r.length&&a.current.focus();n(r)}({e:e,setSecurityCode:c,passwordInputRef:t})},maxLength:3,value:r}),Object(u.jsx)(h,{className:"SecurityCodeInput__Guide__Button",type:"button",children:"?"}),Object(u.jsx)("img",{className:"SecurityCodeInput__Guide__Image",width:"80",src:Ue,alt:"cvc"})]})]})};var qe=Object(a.forwardRef)((function(e,t){var n=Object(a.useContext)(Se),r=n.password,c=n.setPassword,s=Object(a.useRef)();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(J,{children:"\uce74\ub4dc \ube44\ubc00\ubc88\ud638"}),Object(u.jsxs)("div",{className:"CardPasswordInput",children:[Object(Ce.a)(Array(2)).map((function(e,n){return Object(u.jsx)(A,{container:"CardInfoForm__Input__Filler--filled CardPasswordInput__Filler",className:"CardPasswordInput__Field",type:"password",name:0===n?je:me,value:r[0===n?je:me],onChange:function(e){return function(e){var t=e.e,n=e.password,a=e.setPassword,r=e.secondRef,c=t.target.name,s=t.target.value.slice(0,1);c===je&&1===s.length&&(null===r||void 0===r||r.current.focus());a(Object(d.a)(Object(d.a)({},n),{},Object(He.a)({},c,s)))}({e:e,password:r,setPassword:c,secondRef:s})},ref:0===n?t:s},"filled-".concat(n))})),Object(Ce.a)(Array(2)).map((function(e,t){return Object(u.jsx)(A,{container:"CardInfoForm__Input__Filler--transparent CardPasswordInput__Filler",className:"CardPasswordInput__Field",type:"password",value:"1",disabled:!0},"transparent-".concat(t))}))]})]})}));qe.displayName="PasswordInput";var Qe=function(e){var t=e.cardInfo,n=e.initialCardInfo,a=t.securityCode,r=t.password,c=pe({cardInfo:t}),s=c.formattedNumber,o=c.formattedExpirationDate,i=c.formattedOwnerName;return Xe(s)&&$e(o)&&et(i,n.ownerName)&&tt(a)&&nt(r)},Xe=function(e){return 19===e.length},$e=function(e){return 5===e.length},et=function(e,t){return e&&e!==t},tt=function(e){return 3===e.length},nt=function(e){return 2===Object.values(e).join("").length},at=function(e){var t=Object(a.useContext)(Se),n=t.cardInfo,r=t.initialCardInfo,c=e.setIsModalOpen,s=Object(a.useRef)(),o=Object(a.useRef)(),l=Object(a.useRef)(),d=Object(i.f)();return Object(u.jsxs)(D,{className:"CardInfoForm",children:[Object(u.jsx)(Ae,{setIsModalOpen:c,refToBeFocusedNext:s}),Object(u.jsx)(Je,{ref:s,refToBeFocusedNext:o}),Object(u.jsx)(Ye,{ref:o}),Object(u.jsx)(Ze,{refToBeFocusedNext:l}),Object(u.jsx)(qe,{ref:l}),Object(u.jsx)(h,{className:"CardInfoForm__Submit_Button",disabled:!Qe({cardInfo:n,initialCardInfo:r}),onClick:function(e){return function(e){var t=e.e,n=e.initialCardInfo,a=e.cardInfo,r=e.setIsModalOpen,c=e.history;if(t.preventDefault(),!function(e,t){return e.name!==t.name&&e.color!==t.color}(a.company,n.company))return void r(!0);c.push(oe)}({e:e,cardInfo:n,setIsModalOpen:c,initialCardInfo:r,history:d})},children:"\ub2e4\uc74c"})]})};var rt=function(e){var t=e.isOpen,n=e.setIsModalOpen,r=Object(a.useContext)(Se).setCompany;return Object(u.jsx)(G,{className:"CardCompanySelectModal--bottom",isOpen:t,onClick:function(e){return function(e){var t=e.e,n=e.setIsModalOpen,a=t.currentTarget,r=a.firstChild;t.target!==a&&t.target!==r||n(!1)}({e:e,setIsModalOpen:n})},children:Object(u.jsx)(ct,{setCompany:r,setIsModalOpen:n})})};function ct(e){var t=e.setCompany,n=e.setIsModalOpen;return Object(u.jsx)("ul",{className:"CardCompanyList",children:fe.map((function(e,a){return Object(u.jsx)(st,{company:e,setCompany:t,setIsModalOpen:n},a)}))})}function st(e){var t=e.company,n=e.setCompany,a=e.setIsModalOpen;return Object(u.jsxs)("li",{className:"CardCompanyList__Item",children:[Object(u.jsx)(h,{className:"CardCompanyList__Item__Button",name:t.name,style:{backgroundColor:t.color},onClick:function(e){return function(e){var t=e.e,n=e.setCompany,a=e.setIsModalOpen,r=t.target.name,c=t.target.style.backgroundColor;n({name:r,color:c}),a(!1)}({e:e,setCompany:n,setIsModalOpen:a})}}),Object(u.jsx)(J,{children:t.name})]})}n(51);var ot=function(){var e=Object(i.f)(),t=Object(a.useContext)(Se),n=t.cardInfo,r=t.company,c=pe({cardInfo:n}),s=c.formattedNumber,o=c.formattedExpirationDate,d=c.formattedOwnerName,j=Object(a.useState)(!1),m=Object(Ie.a)(j,2),b=m[0],O=m[1];return Object(u.jsxs)("div",{className:"AddFormPage",children:[Object(u.jsxs)("div",{className:"AddFormPage__Heading",children:[Object(u.jsx)(h,{className:"AddFormPage__BackwardButton",onClick:function(){return e.goBack()},children:Object(u.jsx)(l,{})}),Object(u.jsx)(R,{children:"\uce74\ub4dc \ucd94\uac00"})]}),Object(u.jsx)(y,{companyColor:r.color,companyName:r.name,cardNumber:s,ownerName:d,expirationDate:o}),Object(u.jsx)(at,{setIsModalOpen:O}),Object(u.jsx)(rt,{isOpen:b,setIsModalOpen:O})]})},it=function(){return Object(u.jsx)(Be,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:se,children:Object(u.jsx)(ot,{})}),Object(u.jsx)(i.a,{path:oe,children:Object(u.jsx)(Le,{})})]})})};function ut(){return Object(u.jsx)(De,{children:Object(u.jsx)("div",{className:"App",children:Object(u.jsx)(o.a,{children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{exact:!0,path:[re,ce],children:Object(u.jsx)(Re,{})}),Object(u.jsx)(i.a,{path:se,children:Object(u.jsx)(it,{})})]})})})})}n(52);s.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(ut,{})}),document.getElementById("root"))}},[[53,1,2]]]);
//# sourceMappingURL=main.4987a03a.chunk.js.map