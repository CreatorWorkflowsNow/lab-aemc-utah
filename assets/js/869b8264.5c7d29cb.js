"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[3040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),u=c(n),m=i,g=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(g,s(s({ref:t},p),{},{components:n})):o.createElement(g,s({ref:t},p))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=m;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,s[1]=r;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(7462),i=(n(7294),n(3905));const a={title:"Optional Setup Tasks"},s="App Engine Studio Optional Setup Tasks to Consider",r={unversionedId:"Additional-Content/optional-setup-tasks",id:"Additional-Content/optional-setup-tasks",title:"Optional Setup Tasks",description:"This part of the lab is for information purposes only. No activity required.",source:"@site/docs/99-Additional-Content/9000-optional-setup-tasks.md",sourceDirName:"99-Additional-Content",slug:"/Additional-Content/optional-setup-tasks",permalink:"/lab-aemc-utah-v3/docs/Additional-Content/optional-setup-tasks",draft:!1,tags:[],version:"current",sidebarPosition:9e3,frontMatter:{title:"Optional Setup Tasks"},sidebar:"mySidebar",previous:{title:"How to Install AES",permalink:"/lab-aemc-utah-v3/docs/Additional-Content/how-to-install"},next:{title:"Personas & Roles",permalink:"/lab-aemc-utah-v3/docs/Additional-Content/personas-and-roles"}},l={},c=[{value:"Connect spokes in Dev Environment",id:"connect-spokes-in-dev-environment",level:2},{value:"Review Flow Designer access settings from App Engine Studio in Dev Environment",id:"review-flow-designer-access-settings-from-app-engine-studio-in-dev-environment",level:2},{value:"Review Service Catalog access settings in Dev Environment",id:"review-service-catalog-access-settings-in-dev-environment",level:2},{value:"Configure Instance Scan cadence in Health Center",id:"configure-instance-scan-cadence-in-health-center",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,o.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"app-engine-studio-optional-setup-tasks-to-consider"},"App Engine Studio Optional Setup Tasks to Consider"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This part of the lab is for information purposes only. No activity required.")),(0,i.kt)("p",null,"As part of your App Engine Studio setup, you will want to potentially explore and configure the following:"),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"connect-spokes-in-dev-environment"},"Connect spokes in Dev Environment"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This step is not required as part of the initial App Engine Studio setup.")),(0,i.kt)("p",null,"A spoke is a scoped application that contains Flow Designer or Integration Hub actions or Subflows."),(0,i.kt)("p",null,"System Administrators can connect IntegrationHub spokes to App Engine Studio, allowing developers to integrate custom applications with third-party systems. For example \u2013 connecting the Slack spoke allows developers to post a message containing Incident details to a specific Slack channel each time a high-priority Incident is created."),(0,i.kt)("p",null,"Many Integration Hub spokes are available, but not all need to be connected to App Engine Studio. Review some of the common spokes below and install them based on organizational needs."),(0,i.kt)("table",{class:"myTable"},(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Integration Hub Spoke"),(0,i.kt)("th",null,"Installing this spoke provides developers"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"Microsoft Teams"),(0,i.kt)("td",null,"Actions to support cross-functional communications and collaborations in Microsoft Teams.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Slack"),(0,i.kt)("td",null,"Actions to automate the management of Slack channels, users, and software subscriptions.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Jira"),(0,i.kt)("td",null,"Actions to automate tasks in Jira for managing users, issues, projects, and software development lifecycle.",(0,i.kt)("br",null),"Synchronize data in ServiceNow with Jira to increase collaboration between ServiceNow users and DevOps teams.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Gmail"),(0,i.kt)("td",null,"Actions to automate email and label management in Google Gmail.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Azure AD"),(0,i.kt)("td",null,"Actions to automate Microsoft Azure Active Directory tasks for user management, authentication, and group membership.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"Twitter"),(0,i.kt)("td",null,"Actions to automate posting messages and media content to a corporate Twitter news feed.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"MS 365 Excel"),(0,i.kt)("td",null,"Actions to automate worksheet, table, and cell management in Microsoft Excel.")))),(0,i.kt)("p",null,"As your organization\u2019s citizen development program matures and scales, additional spokes can be installed and connected based on application demand and use cases."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For more information on integrations with third-party systems, see ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.servicenow.com/csh?topicname=integrationhub.html&version=latest"},"Product Documentation: Integration Hub")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"review-flow-designer-access-settings-from-app-engine-studio-in-dev-environment"},"Review Flow Designer access settings from App Engine Studio in Dev Environment"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This step is not required as part of the initial App Engine Studio setup.")),(0,i.kt)("p",null,"Review and update App Engine Studio developer access settings to Flow Designer Resources and update as necessary."),(0,i.kt)("p",null,"Developers can leverage Flow Designer capabilities while creating logic and automation for custom applications."),(0,i.kt)("p",null,"Consider restricting developer access to Flow Designer Resources using content filtering for Flow Designer. This allows administrators to manage access to Flow Designer resources and specify which features App Engine Studio users can leverage while building applications."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"relative",src:n(1495).Z,width:"1211",height:"540"})),(0,i.kt)("p",null,"Flow Designer access from App Engine Studio can be updated later to provide developers with the editing capabilities that best suit their experience and needs."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For more information on Flow Designer resources, see ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.servicenow.com/csh?topicname=content-filtering-flow-designer.html&version=latest"},"Product Documentation: Content Filtering for Flow Designer")))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"review-service-catalog-access-settings-in-dev-environment"},"Review Service Catalog access settings in Dev Environment"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This step is not required as part of the initial App Engine Studio setup.")),(0,i.kt)("p",null,"Review App Engine Studio developer access to the Catalog Builder tool\u2019s catalog item templates and catalogs/categories and update access as necessary."),(0,i.kt)("p",null,"By default, App Engine Studio developers can leverage catalog templates to quickly create record producers or catalog items. Developers can also publish catalog items to any catalog. If you wish to limit access to templates or restrict publishing access to catalogs or categories, update the access accordingly in Catalog Builder."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"relative",src:n(8058).Z,width:"1210",height:"535"})),(0,i.kt)("p",null,"Catalog access from App Engine Studio can be updated at a later point to modify developer access to App Engine Studio catalogs, categories, and catalog templates."),(0,i.kt)("p",null,"For more information on creating or editing catalog items, see ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.servicenow.com/csh?topicname=catalog-builder.html&version=latest"},"Product Documentation: Catalog Builder"))),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"configure-instance-scan-cadence-in-health-center"},"Configure Instance Scan cadence in Health Center"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This step is not required as part of the initial App Engine Studio setup.")),(0,i.kt)("p",null,"Deploy custom applications with confidence by setting up Instance Scan definitions to monitor instance health throughout the deployment process. Instance scans interrogate your instance for configurations and health issues, allowing administrators an opportunity to address best practices and avoid similar configuration issues in the future."),(0,i.kt)("p",null,"Instance Scan definitions are executed automatically when App Engine Studio applications are promoted to the ",(0,i.kt)("strong",{parentName:"p"},"Testing")," instance. Instance Scan results will be logged in the Notes section of the Deployment Request record."),(0,i.kt)("p",null,"The App Engine Studio application does not ship with any out-of-box Instance Scan definitions (however, a few Instance Scan definitions are installed with the Deployment Pipeline plugin to run basic performance checks)."),(0,i.kt)("p",null,"Work with professional ServiceNow developers to configure Instance Scan definitions and enforce best practices in your environments."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"relative",src:n(5001).Z,width:"1216",height:"553"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enable and configure Instance Scan properties in your production instance if you plan to clone!")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For more information on managing instance health scans, see ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://docs.servicenow.com/csh?topicname=hs-landing-page.html&version=latest"},"Product Documentation: Instance Scan")))))}d.isMDXComponent=!0},1495:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023-07-07-16-49-07-09101c2b5649f0492583747085e47cd4.png"},8058:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023-07-07-16-53-48-d365b2b90fcbe4583e32edca8c6db6d9.png"},5001:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/2023-07-07-16-56-31-572e076a4b1f5959bcca2a7da074d1a3.png"}}]);