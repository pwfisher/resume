(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3967:function(e,t,a){Promise.resolve().then(a.bind(a,4117))},4117:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return O}});var n,s=a(7437),i=a(6691),r=a.n(i),o=a(1192),d=a.n(o),l=a(6350),c=a.n(l);let h=e=>{let{person:t}=e,{links:a,name:n,title:i}=t;return(0,s.jsxs)("header",{className:c().body,children:[(0,s.jsx)("h1",{className:c().name,children:n.split(" ").map(e=>(0,s.jsx)("span",{children:e},e))}),(0,s.jsx)("p",{className:c().title,children:i}),(0,s.jsx)("ul",{className:c().links,children:a.map((e,t)=>{let{id:a,text:n,url:i}=e;return(0,s.jsx)("li",{children:(0,s.jsx)("a",{className:c().link,href:i,children:"string"==typeof n?n:i},a)},t)})})]})};var u=a(2265),p=a(5340),m=a.n(p);let g=e=>{let{person:t}=e,{contact:{email:a,phone:n},location:i}=t;return(0,u.useEffect)(()=>{let{body:e}=m(),t=()=>{var t,a;let n=document.querySelector(".".concat(e));if(!n)return;let s=document.createNodeIterator(n,NodeFilter.SHOW_TEXT);for(;t=s.nextNode();){let{textContent:e}=t;if(!e)return;/·at·/.test(e)&&(a=e.replace(/·at·/g,"@")),/([\d-]·){11}/.test(e)&&(a=e.replace(/([\d-])·/g,"$1")),a&&(t.nodeValue=a,a=null)}};return window.addEventListener("beforeprint",t),()=>window.removeEventListener("beforeprint",t)}),(0,s.jsxs)("ul",{className:m().body,children:[(0,s.jsxs)("li",{children:[(0,s.jsx)("h4",{children:"Location"}),(0,s.jsx)("span",{children:i})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("h4",{children:"Email"}),(0,s.jsx)("span",{children:a.replace("@","\xb7at\xb7")})]}),(0,s.jsxs)("li",{children:[(0,s.jsx)("h4",{children:"Phone"}),(0,s.jsx)("span",{children:n.replace(/(.)/g,"$1\xb7").slice(0,-1)})]})]})};var b=a(1023),f=a.n(b),x=a(6362),_=a.n(x),y=a(7472),S=a.n(y);let v=e=>{let{children:t,truncateAt:a,uniqueId:i}=e,r="SeeMore:".concat(i),o="".concat(r,":wrap"),{state:d,setState:l}=function(e){let{initialState:t,storage:a=null!==(n=globalThis.localStorage)&&void 0!==n?n:globalThis.sessionStorage,storageKey:s}=e,i=(0,u.useMemo)(()=>{let e=null==a?void 0:a.getItem(s);return e?JSON.parse(e):t},[t,a,s]),[r,o]=(0,u.useState)(i);return(0,u.useEffect)(()=>{null==a||a.setItem(s,JSON.stringify(r))},[r,a,s]),{state:r,setState:o}}({initialState:{isExpanded:!1},storage:globalThis.sessionStorage,storageKey:r}),{isExpanded:c}=d,h=e=>l({isExpanded:e}),[p,m]=(0,u.useState)(!1),[g,b]=(0,u.useState)(231.5),f=(0,u.useRef)(null),x=()=>h(!c),_=()=>{if(!f.current)return;let e=f.current.scrollHeight>a;e!==p&&m(e);let t=e&&!c,n=t?a-31.5:f.current.scrollHeight;n!==g&&b(n)};return(0,u.useEffect)(()=>(window.addEventListener("resize",_),screen.orientation.addEventListener("change",_),()=>{window.removeEventListener("resize",_),screen.orientation.removeEventListener("change",_)})),(0,u.useEffect)(_,[p,c,a,g,f]),(0,s.jsxs)("div",{className:S().body,children:[(0,s.jsx)("div",{className:S().wrap,id:o,ref:f,style:{maxHeight:g},children:t}),p?(0,s.jsx)("footer",{className:S().footer,onClick:x,children:(0,s.jsx)("button",{"aria-expanded":c?"true":"false","aria-controls":o,className:S().button,onClick:x,children:c?"See less":"See more"})}):null]})},w=e=>{let{paragraphs:t,uniqueId:a}=e;return(0,s.jsx)("div",{className:_().body,children:(0,s.jsx)(v,{truncateAt:200,uniqueId:a,children:t.map(e=>{let{id:t,text:a}=e;return(0,s.jsx)("p",{className:_().paragraph,children:a},t)})})})},j=e=>{let{job:t}=e,{company:a,dateEnd:n,dateStart:i,duration:r,id:o,location:d,paragraphs:l,title:c}=t;return(0,s.jsxs)("div",{className:f().body,children:[(0,s.jsxs)("header",{className:f().header,children:[(0,s.jsxs)("div",{className:f().left,children:[(0,s.jsx)("h3",{className:f().title,children:c}),(0,s.jsx)("div",{className:f().company,children:a})]}),(0,s.jsxs)("div",{className:f().right,children:[(0,s.jsxs)("div",{className:f().dates,children:[i," - ",n," \xb7 ",r]}),(0,s.jsx)("div",{className:f().location,children:d})]})]}),(0,s.jsx)(w,{paragraphs:l,uniqueId:"Job:".concat(o)})]},o)};var N=a(8081),E=a.n(N),C=a(717),A=a.n(C);let P=e=>{let{children:t}=e;return(0,s.jsx)("h2",{className:A().body,children:t})},k=e=>{let{jobs:t}=e;return(0,s.jsxs)("div",{className:E().body,children:[(0,s.jsx)(P,{children:"Experience"}),[...t].reverse().map(e=>(0,s.jsx)(j,{job:e},e.id))]})};var M=a(4405),I=a.n(M);let J=e=>{let{school:t}=e,{dateEnd:a,dateStart:n,degree:i,id:r,name:o,paragraphs:d}=t;return(0,s.jsxs)("div",{className:I().body,children:[(0,s.jsxs)("header",{className:I().header,children:[(0,s.jsxs)("div",{className:I().left,children:[(0,s.jsx)("h3",{className:I().name,children:o}),i?(0,s.jsx)("div",{className:I().degree,children:i}):null]}),(0,s.jsx)("div",{className:I().right,children:(0,s.jsxs)("div",{className:I().dates,children:[n," - ",a]})})]}),d?(0,s.jsx)(w,{paragraphs:d,uniqueId:"School:".concat(r)}):null]},r)};var T=a(3816),H=a.n(T);let L=e=>{let{schools:t}=e;return(0,s.jsxs)("div",{className:H().body,children:[(0,s.jsx)(P,{children:"Education"}),[...t].reverse().map(e=>(0,s.jsx)(J,{school:e},e.id))]})},{jobs:F,person:G,schools:D}={jobs:[{company:"Dexter Wilson Engineering, Inc.",dateEnd:"2004",dateStart:"2003",duration:"1 yr",id:0,location:"Carlsbad, CA",paragraphs:[{id:0,text:"Designed and analyzed sewer, water and storm drain systems for new and existing developments. Created graphic model of Santa Clarita Valley sewer mains, synthesizing multiple data sets and visualizing results with GIS software. Created master sewerage plan for Agua Dulce. Obtained EIT certification."}],title:"Assistant Engineer"},{company:"VPA, Inc.",dateEnd:"2005",dateStart:"2004",duration:"1 yr",id:1,location:"Calabasas, CA",paragraphs:[{id:0,text:"Project Manager and Technical Lead for company-wide Document Imaging project. Part of an excellent team which succeeded, where previous efforts had failed, to replace paper-based claims processing at a claims processing company."},{id:1,text:"Documented existing processes with simple diagrams and detailed back-up information to aid communication and understanding. Drafted RFP with technical and business requirements. Calculated project ROI. Worked with subject matter experts to design new system and procedures."},{id:2,text:"Managed highly successful implementation of $300,000 system to support 100 concurrent users, input 10,000+ pages daily, scan 4 million pages of existing files and securely store up to 10 million pages."}],title:"Systems Analyst"},{company:"All Access Music Group, Inc.",dateEnd:"Apr 2011",dateStart:"Nov 2007",duration:"3 yrs 6 mos",id:2,location:"Malibu, CA",paragraphs:[{id:0,text:"Full stack LAMP web developer. Lead systems architect. Designed and implemented site features. Specified hardware, configured servers and installed applications. Managed databases. Provided tech support."}],title:"Web Developer",tools:[]},{company:"Yahoo",dateEnd:"Nov 2013",dateStart:"Apr 2011",duration:"2 yrs 8 mos",id:3,location:"Santa Monica, CA",paragraphs:[{id:0,text:"As an engineer for Yahoo Global Media Foundation, I worked on teams building components shared by hundreds of Yahoo media properties, including News, Sports, and Finance."},{id:1,text:"I was the primary author of the list and carousel modules which became ubiquitous on Yahoo Global Media sites in 2012. My carousel batching logic implements an async request queue which is lazy until interaction, then prefetches and intelligently handles rapid-fire requests in LIFO order."},{id:2,text:"Tech stack: AJAX, Apache, Bash, HTML, Hudson, JavaScript, JSON, Linux, NoSQL, PHP, PHPUnit, REST, Scrum, svn, XML, YUI."},{id:3,text:"Our team of 8 engineers led the development of a new version of all media sites using PJAX and ESI to improve client- and server-side performance, respectively. This new version of the Yahoo Publishing Platform was designed from the ground up to support multiple client device types including full capability desktop systems, touch screen tablets and smartphones."},{id:4,text:"I independently conceived and implemented the method by which the entire page is scrollable but each column of content moves independently. I contributed a synthetic scrollbar module which was adopted as a company standard. I enhanced an open source SVG compression utility to achieve a 50-80% reduction in our icon file sizes. github.com/pwfisher/scour.py"},{id:5,text:"Same tech stack as above, plus: Android browser, ESI, Kanban, Mobile Safari, Mustache, PJAX, Sass."},{id:6,text:"Our team built and launched a completely new version of screen.yahoo.com on a NodeJS stack in 6 weeks."},{id:7,text:"I led the effort to create a mobile version of the site, contributed the social media sharing module, and led the sitemap implementation. I advocated for the enhancement of sitemaps with rich metadata using the Schema.org and Yahoo Media RSS taxonomies and initiated discussions between Yahoo, Google, and Microsoft on this industry standard."},{id:8,text:"Tech stack: Express, Git, Github, Mustache, NodeJS, PJAX, Sass, YUI."}],title:"Frontend Engineer"},{company:"Dollar Shave Club",dateEnd:"Apr 2018",dateStart:"Dec 2013",duration:"4 yrs 5 mos",id:4,location:"Venice, CA",paragraphs:[{id:0,text:"Ember. Docker. Angular legacy."}],title:"Principal Engineer, Front End"},{company:"FIGS",dateEnd:"Jun 2022",dateStart:"Jul 2019",duration:"3 yrs",id:5,location:"Santa Monica, CA",paragraphs:[{id:0,text:"Created modular content system for home page and all editorial pages. Built accessible site navigation bar and menus. Owned features end-to-end: creating Typescript React modules, unit tests, sample data, interactive Storybook demos, Contentful CMS data models, API endpoints, and e2e tests. Set front end standards, reviewed code, and assisted junior engineers."}],title:"Senior Frontend Software Engineer",tools:["Apollo","babel","bash","CircleCI","Contentful","CSS","cypress","express","Figma","flexbox","git","GitHub","GraphQL","GTM","HTML","HTTP","JavaScript","jest","lerna","mergify","Netlify","Next.js","node","React","Regex","Shopify","storybook","styled-components","TSConfig","TypeScript","VSCode","webpack","yarn","zsh"]}],person:{contact:{email:"pfisher42@gmail.com",phone:"213-247-4130"},links:[{id:0,text:"linkedin.com/in/pwfisher",url:"https://www.linkedin.com/in/pwfisher"},{id:1,text:"pwfisher.github.io/resume",url:"https://pwfisher.github.io/resume/"},{id:2,text:"github.com/pwfisher/resume",url:"https://github.com/pwfisher/resume"}],location:"Thousand Oaks, CA",name:"Patrick Fisher",title:"Senior Frontend Software Engineer"},schools:[{id:0,dateEnd:"2002",dateStart:"1998",degree:"B.S., Computer Engineering and Computer Science",name:"University of Southern California",paragraphs:[{id:0,text:"Activities and societies: Climbing Club, Study Abroad, Alternative Spring Break, Masters Swimming, Club Water Polo (Edinburgh), Tau Beta Pi, Pi Tau Sigma, Golden Key, Formula SAE, Robotics Lab."},{id:1,text:"Cum Laude. Trustee Scholar, R.C. Byrd Scholar, National Merit Scholar, Engineering Honors Program, Thematic Option Honors General Education, Honors Physics, Merit Research Program. Spring 2001 semester in Edinburgh, Scotland."}]},{id:1,dateEnd:"2007",dateStart:"2005",name:"USC Gould School of Law",paragraphs:[{id:0,text:"Activities and societies: Katrina Legal Aid Project, Club Water Polo, Tae Kwon Do."}]}]};function O(){return(0,s.jsxs)("div",{className:d().body,children:[(0,s.jsx)(h,{person:G}),(0,s.jsxs)("div",{className:d().belowHeader,children:[(0,s.jsx)("aside",{className:d().aside,children:(0,s.jsx)(g,{person:G})}),(0,s.jsxs)("main",{className:d().main,children:[(0,s.jsx)(k,{jobs:F}),(0,s.jsx)(L,{schools:D})]})]}),(0,s.jsxs)("footer",{className:d().footer,children:[(0,s.jsx)("span",{children:"Powered by"}),(0,s.jsx)(r(),{className:d().logo,src:"".concat("/resume","/next.svg"),alt:"Next.js Logo",width:90,height:19,priority:!0})]})]})}},1192:function(e){e.exports={body:"page_body__pK_rb",belowHeader:"page_belowHeader__t4gbF",aside:"page_aside__ebbFG",main:"page_main__GlU4n",footer:"page_footer__sHKi3",logo:"page_logo__7fc9l"}},5340:function(e){e.exports={body:"ContactInfo_body__cThwN"}},6350:function(e){e.exports={body:"Header_body__5Sgbz",name:"Header_name__OglJA",title:"Header_title__a3JC3",links:"Header_links__6uzmh",link:"Header_link__p2PJz"}},1023:function(e){e.exports={body:"Job_body__05lek",title:"Job_title__KCDRY",company:"Job_company__cDrmF",dates:"Job_dates__xJO93",location:"Job_location__he1E_",header:"Job_header__Rov5d",right:"Job_right__R_E8v"}},8081:function(){},6362:function(e){e.exports={paragraph:"Paragraphs_paragraph__C9SmE"}},4405:function(e){e.exports={body:"School_body__wAYXq",name:"School_name___MttA",degree:"School_degree__AkfXe",dates:"School_dates__RbfUg",header:"School_header__e5sx0",right:"School_right__SJwXP"}},3816:function(e){e.exports={body:"Schools_body__sYjEg"}},717:function(e){e.exports={body:"SectionHeader_body__Qp9HD"}},7472:function(e){e.exports={body:"SeeMore_body__MoCIE",wrap:"SeeMore_wrap__coiD3",footer:"SeeMore_footer__lox2m",button:"SeeMore_button__UtLiN"}}},function(e){e.O(0,[986,971,596,744],function(){return e(e.s=3967)}),_N_E=e.O()}]);