(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3967:function(e,t,s){Promise.resolve().then(s.bind(s,8320))},8320:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return q}});var n,a=s(7437),i=s(6691),r=s.n(i),o=s(1192),l=s.n(o),d=s(6350),c=s.n(d);let u=e=>{let{person:t}=e,{links:s,name:n,title:i}=t;return(0,a.jsxs)("header",{className:c().body,children:[(0,a.jsx)("h1",{className:c().name,children:n.split(" ").map(e=>(0,a.jsx)("span",{children:e},e))}),(0,a.jsx)("p",{className:c().title,children:i}),(0,a.jsx)("ul",{className:c().links,children:s.map((e,t)=>{let{id:s,text:n,url:i}=e;return(0,a.jsx)("li",{children:(0,a.jsx)("a",{className:c().link,href:i,children:"string"==typeof n?n:i},s)},t)})})]})};var h=s(2265),m=s(5340),p=s.n(m);let b=e=>{let{person:t}=e,{contact:{email:s,phone:n},location:i}=t;return(0,h.useEffect)(()=>{let{body:e}=p(),t=()=>{var t,s;let n=document.querySelector(".".concat(e));if(!n)return;let a=document.createNodeIterator(n,NodeFilter.SHOW_TEXT);for(;t=a.nextNode();){let{textContent:e}=t;if(!e)return;/·at·/.test(e)&&(s=e.replace(/·at·/g,"@")),/([\d-]·){11}/.test(e)&&(s=e.replace(/([\d-])·/g,"$1")),s&&(t.nodeValue=s,s=null)}};return window.addEventListener("beforeprint",t),()=>window.removeEventListener("beforeprint",t)}),(0,a.jsxs)("ul",{className:p().body,children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("h4",{children:"Location"}),(0,a.jsx)("span",{children:i})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("h4",{children:"Email"}),(0,a.jsx)("span",{children:s.replace("@","\xb7at\xb7")})]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("h4",{children:"Phone"}),(0,a.jsx)("span",{children:n.replace(/(.)/g,"$1\xb7").slice(0,-1)})]})]})};var x=s(1023),_=s.n(x),S=s(6153),g=s.n(S),f=s(7472),y=s.n(f);let j=e=>{let{children:t,truncateAt:s,uniqueId:i}=e,r="SeeMore:".concat(i),o="".concat(r,":wrap"),{state:l,setState:d}=function(e){let{initialState:t,storage:s=null!==(n=globalThis.localStorage)&&void 0!==n?n:globalThis.sessionStorage,storageKey:a}=e,i=(0,h.useMemo)(()=>{let e=null==s?void 0:s.getItem(a);return e?JSON.parse(e):t},[t,s,a]),[r,o]=(0,h.useState)(i);return(0,h.useEffect)(()=>{null==s||s.setItem(a,JSON.stringify(r))},[r,s,a]),{state:r,setState:o}}({initialState:{isExpanded:!1},storage:globalThis.sessionStorage,storageKey:r}),{isExpanded:c}=l,u=e=>d({isExpanded:e}),[m,p]=(0,h.useState)(!1),[b,x]=(0,h.useState)(231.5),_=(0,h.useRef)(null),S=()=>u(!c),g=()=>{if(!_.current)return;let e=_.current.scrollHeight>s;e!==m&&p(e);let t=e&&!c,n=t?s-31.5:_.current.scrollHeight;n!==b&&x(n)};return(0,h.useEffect)(()=>(window.addEventListener("resize",g),screen.orientation.addEventListener("change",g),()=>{window.removeEventListener("resize",g),screen.orientation.removeEventListener("change",g)})),(0,h.useEffect)(g,[m,c,s,b,_]),(0,a.jsxs)("div",{className:y().body,children:[(0,a.jsx)("div",{className:y().wrap,id:o,ref:_,style:{maxHeight:b},children:t}),m?(0,a.jsx)("footer",{className:y().footer,onClick:S,children:(0,a.jsx)("button",{"aria-expanded":c?"true":"false","aria-controls":o,className:y().button,onClick:S,children:c?"See less":"See more"})}):null]})},v=e=>{let{bullets:t,uniqueId:s}=e;return(0,a.jsx)("div",{className:g().body,children:(0,a.jsx)(j,{truncateAt:270,uniqueId:s,children:(0,a.jsx)("ul",{className:g().bullets,children:t.map(e=>{let{id:t,text:s}=e;return(0,a.jsx)("li",{className:g().bullet,children:s},t)})})})})},N=e=>{let{job:t}=e,{company:s,dateEnd:n,dateStart:i,duration:r,id:o,location:l,bullets:d,title:c,tools:u}=t;return(0,a.jsxs)("div",{className:_().body,children:[(0,a.jsxs)("header",{className:_().header,children:[(0,a.jsxs)("div",{className:_().left,children:[(0,a.jsx)("h3",{className:_().title,children:c}),(0,a.jsx)("div",{className:_().company,children:s})]}),(0,a.jsxs)("div",{className:_().right,children:[(0,a.jsxs)("div",{className:_().dates,children:[i," - ",n," \xb7 ",r]}),(0,a.jsx)("div",{className:_().location,children:l})]})]}),(0,a.jsx)(v,{bullets:d,uniqueId:"Job:".concat(o)}),u?(0,a.jsxs)("ul",{className:_().tools,children:[(0,a.jsx)("li",{className:_().tool,children:(0,a.jsx)("b",{children:"Tools:"})},"Tools"),u.map(e=>(0,a.jsx)("li",{className:_().tool,children:e},e))]}):null]},o)};var w=s(8081),E=s.n(w),k=s(717),A=s.n(k);let C=e=>{let{children:t}=e;return(0,a.jsx)("h2",{className:A().body,children:t})},L=e=>{let{jobs:t}=e;return(0,a.jsxs)("div",{className:E().body,children:[(0,a.jsx)(C,{children:"Experience"}),[...t].reverse().map(e=>(0,a.jsx)(N,{job:e},e.id))]})};var M=s(4405),J=s.n(M);let P=e=>{let{school:t}=e,{dateEnd:s,dateStart:n,degree:i,id:r,name:o,bullets:l}=t;return(0,a.jsxs)("div",{className:J().body,children:[(0,a.jsxs)("header",{className:J().header,children:[(0,a.jsxs)("div",{className:J().left,children:[(0,a.jsx)("h3",{className:J().name,children:o}),i?(0,a.jsx)("div",{className:J().degree,children:i}):null]}),(0,a.jsx)("div",{className:J().right,children:(0,a.jsxs)("div",{className:J().dates,children:[n," - ",s]})})]}),l?(0,a.jsx)(v,{bullets:l,uniqueId:"School:".concat(r)}):null]},r)};var H=s(3816),T=s.n(H);let R=e=>{let{schools:t}=e;return(0,a.jsxs)("div",{className:T().body,children:[(0,a.jsx)(C,{children:"Education"}),[...t].reverse().map(e=>(0,a.jsx)(P,{school:e},e.id))]})};var D=s(8226),G=s.n(D);let I=e=>{let{person:t}=e,{skills:s}=t;return(0,a.jsxs)("div",{className:G().body,children:[(0,a.jsx)("h4",{className:"force rerender 02",children:"Skills"}),(0,a.jsx)("ul",{className:G().skills,children:s.map(e=>(0,a.jsx)("li",{className:G().skill,children:e},e))})]})},{jobs:F,person:O,schools:Q}={jobs:[{bullets:[{id:0,text:"Designed systems architecture as a full stack LAMP web developer."},{id:1,text:"Designed and implemented numerous essential site features such as the deloyment system."},{id:2,text:"Specified hardware, configured servers, and installed Linux applications."},{id:3,text:"Managed MySQL and MSSQL databases."},{id:4,text:"Provided tech support to coworkers."}],company:"All Access Music Group, Inc.",dateEnd:"Apr 2011",dateStart:"Nov 2007",duration:"3 yrs 6 mos",id:2,location:"Malibu, CA",title:"Web Developer",tools:["Apache","JavaScript","jQuery","Linux","MSSQL","MySQL","PHP","Regular Expressions (regex)","Shell","SQL","Subversion","VMware"]},{bullets:[{id:0,text:"Built list and carousel modules shared across all Yahoo media—powering home pages and more for News, Sports, Finance, etc. in dozens of languages, for hundreds of sites."},{id:1,text:"Made carousel batching logic with async request queue which is lazy until interaction, then prefetches and intelligently handles rapid-fire requests in LIFO order."},{id:2,text:"Independently conceived and implemented method by which entire page is scrollable but each column of content moves independently."},{id:3,text:"Contributed synthetic scrollbar module which was adopted as company-wide standard."},{id:4,text:"Led effort to create mobile version of new (node + express) screen.yahoo.com and contributed social media sharing module."},{id:5,text:"Led the screen.yahoo.com sitemap implementation, advocating for enhancement with rich metadata using the Schema.org and Yahoo Media RSS taxonomies."}],company:"Yahoo",dateEnd:"Nov 2013",dateStart:"Apr 2011",duration:"2 yrs 8 mos",id:3,location:"Santa Monica, CA",title:"Frontend Engineer",tools:["AJAX","Apache","Express","Git","GitHub","Hudson","JavaScript","JSON","Kanban","Linux","Mustache","NodeJS","NoSQL","PHP","PHPUnit","PJAX","REST","Sass","Scrum","Shell (bash)","Subversion","XML","YUI"]},{bullets:[{id:0,text:"Selected Ember and was a primary contributor to the effort to replace the legacy Angular home page and checkout funnel with a high-performance SPA."},{id:1,text:"Built Docker container for Ember application. This clean deliverable to devops enabled faster development cycles, better cooperation and CI/CD automation, and fewer environment-related bugs."},{id:2,text:"Implemented many A/B tested features in the acquisition funnel with measurable impact on our key metric: customer conversion rate."}],company:"Dollar Shave Club",dateEnd:"Apr 2018",dateStart:"Dec 2013",duration:"4 yrs 5 mos",id:4,location:"Venice, CA",title:"Principal Engineer, Front End",tools:["Angular","Docker","Ember","JavaScript","Jenkins","npm","Rails (erb)"]},{bullets:[{id:0,text:"Created modular content system for home page and all editorial pages."},{id:1,text:"Built accessible site navigation bar and menus."},{id:2,text:"Owned features end-to-end: created Typescript React modules, unit tests, sample data, interactive Storybook demos, Contentful CMS data models, API endpoints, and e2e tests."},{id:3,text:"Set front end standards, reviewed code, and assisted junior engineers."}],company:"FIGS",dateEnd:"Jun 2022",dateStart:"Jul 2019",duration:"3 yrs",id:5,location:"Santa Monica, CA",title:"Senior Frontend Software Engineer",tools:["Apollo","babel","CircleCI","Contentful","cypress","express","Figma","git","GitHub","GraphQL","GTM","JavaScript","jest","lerna","mergify","Netlify","Next.js","node","React","Regex","Shell","Shopify","storybook","styled-components","TSConfig","TypeScript","VSCode","webpack","yarn"]}],person:{contact:{email:"pfisher42@gmail.com",phone:"213-247-4130"},links:[{id:0,text:"linkedin.com/in/pwfisher",url:"https://www.linkedin.com/in/pwfisher"},{id:1,text:"pwfisher.github.io/resume",url:"https://pwfisher.github.io/resume/"},{id:2,text:"github.com/pwfisher/resume",url:"https://github.com/pwfisher/resume"}],location:"Thousand Oaks, CA",name:"Patrick Fisher",skills:["Accessibilty (a11y)","CSS","Contentful","Git/GitHub","GraphQL","HTML","JavaScript","Node.js","Next.js","React","Regular Expressions (regex)","Responsive design","Single Page Applications (SPA)","SCSS/SASS","Shell","Storybook","SQL","Test-Driven Development (TDD)","TypeScript"],title:"Senior Frontend Software Engineer"},schools:[{id:0,dateEnd:"2002",dateStart:"1998",degree:"B.S., Computer Engineering and Computer Science",name:"University of Southern California",bullets:[{id:0,text:"Activities and societies: Climbing Club, Study Abroad, Alternative Spring Break, Masters Swimming, Club Water Polo (Edinburgh), Tau Beta Pi, Pi Tau Sigma, Golden Key, Formula SAE, Robotics Lab."},{id:1,text:"Cum Laude. Trustee Scholar, R.C. Byrd Scholar, National Merit Scholar, Engineering Honors Program, Thematic Option Honors General Education, Honors Physics, Merit Research Program. Spring 2001 semester in Edinburgh, Scotland."}]},{id:1,dateEnd:"2007",dateStart:"2005",name:"USC Gould School of Law",bullets:[{id:0,text:"Activities and societies: Katrina Legal Aid Project, Club Water Polo, Tae Kwon Do."}]}]};function q(){return(0,a.jsxs)("div",{className:l().body,children:[(0,a.jsx)(u,{person:O}),(0,a.jsxs)("div",{className:l().belowHeader,children:[(0,a.jsxs)("aside",{className:l().aside,children:[(0,a.jsx)(b,{person:O}),(0,a.jsx)(I,{person:O})]}),(0,a.jsxs)("main",{className:l().main,children:[(0,a.jsx)(L,{jobs:F}),(0,a.jsx)(R,{schools:Q})]})]}),(0,a.jsxs)("footer",{className:l().footer,children:[(0,a.jsx)("span",{children:"Powered by"}),(0,a.jsx)(r(),{className:l().logo,src:"".concat("/resume","/next.svg"),alt:"Next.js Logo",width:90,height:19,priority:!0})]})]})}},1192:function(e){e.exports={body:"page_body__pK_rb",belowHeader:"page_belowHeader__t4gbF",aside:"page_aside__ebbFG",main:"page_main__GlU4n",footer:"page_footer__sHKi3",logo:"page_logo__7fc9l"}},6153:function(e){e.exports={bullets:"bullets_bullets__kOtrm",bullet:"bullets_bullet__gPw49"}},5340:function(e){e.exports={body:"ContactInfo_body__cThwN"}},6350:function(e){e.exports={body:"Header_body__5Sgbz",name:"Header_name__OglJA",title:"Header_title__a3JC3",links:"Header_links__6uzmh",link:"Header_link__p2PJz"}},1023:function(e){e.exports={body:"Job_body__05lek",title:"Job_title__KCDRY",company:"Job_company__cDrmF",dates:"Job_dates__xJO93",location:"Job_location__he1E_",tools:"Job_tools__CrMhn",tool:"Job_tool__goOG8",header:"Job_header__Rov5d",right:"Job_right__R_E8v"}},8081:function(){},4405:function(e){e.exports={body:"School_body__wAYXq",name:"School_name___MttA",degree:"School_degree__AkfXe",dates:"School_dates__RbfUg",header:"School_header__e5sx0",right:"School_right__SJwXP"}},3816:function(e){e.exports={body:"Schools_body__sYjEg"}},717:function(e){e.exports={body:"SectionHeader_body__Qp9HD"}},7472:function(e){e.exports={body:"SeeMore_body__MoCIE",wrap:"SeeMore_wrap__coiD3",footer:"SeeMore_footer__lox2m",button:"SeeMore_button__UtLiN"}},8226:function(e){e.exports={body:"Skills_body__e31hM",skills:"Skills_skills__Wsh4s",skill:"Skills_skill__JqE2A"}}},function(e){e.O(0,[986,971,596,744],function(){return e(e.s=3967)}),_N_E=e.O()}]);