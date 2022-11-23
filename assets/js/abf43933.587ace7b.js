"use strict";(self.webpackChunkgrants=self.webpackChunkgrants||[]).push([[9176],{55315:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));a(16758);const i={},l="SubsCrypt",o={unversionedId:"Applications/SubsCrypt",id:"Applications/SubsCrypt",title:"SubsCrypt",description:"Team Name:* OxyDev",source:"@site/docs/Applications/SubsCrypt.md",sourceDirName:"Applications",slug:"/Applications/SubsCrypt",permalink:"/Grants-Program/Applications/SubsCrypt",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar",previous:{title:"SubIdentity",permalink:"/Grants-Program/Applications/SubIdentity"},next:{title:"Subsembly - Support for GRANDPA",permalink:"/Grants-Program/Applications/Subsembly-GRANDPA"}},s={},d=[{value:"Project Overview \ud83d\udcc4",id:"project-overview-",level:2},{value:"Overview",id:"overview",level:3},{value:"Project Details",id:"project-details",level:3},{value:"Ecosystem Fit",id:"ecosystem-fit",level:3},{value:"Team \ud83d\udc65",id:"team-",level:2},{value:"Team members",id:"team-members",level:3},{value:"Contact",id:"contact",level:3},{value:"Team&#39;s experience",id:"teams-experience",level:3},{value:"Team Code Repos",id:"team-code-repos",level:3},{value:"Team LinkedIn Profiles",id:"team-linkedin-profiles",level:3},{value:"Development Roadmap \ud83d\udd29",id:"development-roadmap-",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Milestone 1 \u2014 Smart Contract",id:"milestone-1--smart-contract",level:3},{value:"Milestone 2 \u2014 UI",id:"milestone-2--ui",level:3},{value:"Milestone 3 \u2014 Back-end libraries",id:"milestone-3--back-end-libraries",level:3},{value:"Future Plans",id:"future-plans",level:2},{value:"Works currently Done",id:"works-currently-done",level:2}],p={toc:d};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"subscrypt"},"SubsCrypt"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Team Name:")," OxyDev"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Payment Address:")," 0x7a72002A872010924a4093D24712B49E5B89452c")),(0,r.kt)("h2",{id:"project-overview-"},"Project Overview \ud83d\udcc4"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SubsCrypt")," is a BaaS(Blockchain as a service) for developers to facilitate the integration of their subscription methods on the PolkaDot blockchain using a smart contract. A dashboard panel for admins to gather useful business data of their subscribed users(by protecting users' privacy) and a dashboard panel for users to manage all their subscriptions in one place."),(0,r.kt)("h3",{id:"overview"},"Overview"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"SubsCrypt")," focuses on solving a traditional problem on both the user and the developer side. Developers will no more be worried about the privacy of and maintaining the customers' database and payment mechanism. Using ",(0,r.kt)("strong",{parentName:"p"},"SubsCrypt"),", they can integrate Web3 in their service to benefit from blockchain in a developer-friendly way(minimum time and expertise resource). Users will also enjoy the privacy that they can preserve and the all-in-one platform to manage their subscriptions in different services. By making all these procedures easy, we can help small online businesses to enjoy the benefits of ",(0,r.kt)("strong",{parentName:"p"},"Web3")," and to only focus on their service, which will hopefully lead to mass-adoption of ",(0,r.kt)("strong",{parentName:"p"},"Web3")),(0,r.kt)("p",null,"We have been developing on different web3 technologies, but none could satisfy our customization requirements. By using Substrate, we can customize our parachain so it can fit our needs(we are also willing to continue our project to be a PolkaDot parachain)"),(0,r.kt)("p",null,"Assume a scenario that Alice is a user of a service that provides monthly subscription for milk delivery(called Milkryption). Milkryption has a monthly and yearly subscryption method and they use ",(0,r.kt)("strong",{parentName:"p"},"SubsCrypt")," on their website (first they submit their method on our contract in our website, then they can use our API), so if Alice ever has used our service so far, she will only need to connect his wallet and subscript to the Milkryption using a trigger contract method(she will send some encrypted data that is encrypted with her key and also service provider key and then she will share that key with the service provider to have access to her data in the contract) but if that's her first time to ever use ",(0,r.kt)("strong",{parentName:"p"},"SubsCrypt"),", she has to also sign-up in the contract. Alice now can anytime request for a refund of remaining days of her service directly from the contract. Alice will hopefully use our service in several websites and now she can go to our website and manage his subscriptions(refunding or renewing) in one place. "),(0,r.kt)("p",null,"In our country, we have a lot of restrictions and censorship. We are suffering from Iran's government's Strict policies and getting banned from universal communities and worldwide payment (e.g., PayPal and visa card) all because we are Iranian.\nTwo months ago, our team started this idea to resolve these limits and connect our people worldwide. We will now announce our project as a service on blockchain to spread this type of freedom to the world.\nBesides, this, we have experience in developing different backend services and Dapps, and we came to the conclusion that our platform can help developers to migrate from web2 to web3 and also help users by enhancing their user experience to use web3 websites(they only need to use a wallet for registration, and our login procedure can be handled without wallet)"),(0,r.kt)("h3",{id:"project-details"},"Project Details"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Mockups/designs of any UI components\nOne of the most important aspects of our service is UI/UX, and we are all aware of the difficulties of web3 usage for the majority of people, so we will provide a UI component that can be integrated into the websites and also a webpage that has an invoice to pay( developers can choose whichever method that suits them better). We are also planning to design a user/developer dashboard that will retrieve necessary data from the blockchain")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"An overview of the technology stack to be used",(0,r.kt)("br",{parentName:"p"}),"\n","As we explained, we want to provide a service that will fit into different stacks with minimum effort so that we will implement our side of this service with the following stack:"))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"User/developer Dashboard (Front) => Vue.js and RPC API to contract"),(0,r.kt)("li",{parentName:"ul"},"Smart Contract => Rust and Ink on edgeware"),(0,r.kt)("li",{parentName:"ul"},"UI integration components => ES6 and purejs library"),(0,r.kt)("li",{parentName:"ul"},"Backend high-level API to connect to smart contract => Django, node.js for this milestone")),(0,r.kt)("h3",{id:"ecosystem-fit"},"Ecosystem Fit"),(0,r.kt)("p",null,"As we have been searching for similar ideas in the blockchain ecosystem, we found EIP1337 that has a similar idea, but the implementation is low level, and it does not help either developers or users have a smooth subscription platform."),(0,r.kt)("h2",{id:"team-"},"Team \ud83d\udc65"),(0,r.kt)("h3",{id:"team-members"},"Team members"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Name of team leader\nSaber Zafarpoor (Product manager & Blockchain Designer)\nHadi Esna (CTO & Blockchain Designer)"),(0,r.kt)("li",{parentName:"ul"},"Names of team members\nAhmad Salimi(Software Engineer)\nAlireza Ilami(Data Analyst)\nSepehr Kianian(Front-End developer & Blockchain developer)\nAmir Sadra Abdolahi(Front-End developer & Blockchain developer)\nYasaman Shad(Graphic Designer & UX)\n...(we will hire blockchain researchers and UI developers to enhance the quality)")),(0,r.kt)("h3",{id:"contact"},"Contact"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Name:")," Saber Zafarpoor"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Contact Email:")," ",(0,r.kt)("a",{parentName:"li",href:"mailto:szafarpoor@ce.sharif.edu"},"szafarpoor@ce.sharif.edu")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://oxydev.ir"},"https://oxydev.ir"))),(0,r.kt)("h3",{id:"teams-experience"},"Team's experience"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"OxyDev")," consists of young enthusiast students/developers who graduated or undergraduates at #1 university of Iran (Sharif University of Technology) trying to make web3 easier to use and integrate into real-world services. We have developed several Defi projects in Tron and Ethereum Ecosystem and expanded our team to make venturous leaps to play our roles in making a more user-friendly world in the next generation of Web(Web3). We have done several projects of web2 that make our team aware of the pros and cons of web2. "),(0,r.kt)("h3",{id:"team-code-repos"},"Team Code Repos"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/oxydev"},"https://github.com/oxydev")),(0,r.kt)("li",{parentName:"ul"},"Our previous projects can not be publicly announced(NDA)")),(0,r.kt)("h3",{id:"team-linkedin-profiles"},"Team LinkedIn Profiles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/szafarpoor/"},"https://www.linkedin.com/in/szafarpoor/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/ahmadsalimi/"},"https://www.linkedin.com/in/ahmadsalimi/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/hadiesnaashari/"},"https://www.linkedin.com/in/hadiesnaashari/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linkedin.com/in/alirezailami/"},"https://www.linkedin.com/in/alirezailami/"))),(0,r.kt)("h2",{id:"development-roadmap-"},"Development Roadmap \ud83d\udd29"),(0,r.kt)("p",null,"We will divide our project into four milestones. For the first milestone, we will implement our smart contract can be deployed to a substrate chain using ink! Which is a smart contract substrate pallet. The second and third milestones will be implemented in parallel. The last milestone will be connecting the components to work seamlessly together."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"There will be three ways to connect to our smart contract:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Using a Polkadot{.js} wallet to interact with the contract(state of the contract can be modified in this scenario)"),(0,r.kt)("li",{parentName:"ol"},"Using our RestAPI backend or third party library to retrieve data from the contract (state of the contract can not be modified in this scenario)"),(0,r.kt)("li",{parentName:"ol"},"Using any customized client to interact with the contract")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Auth mechanism :"),"\nWe have designed a secure and user-friendly auth mechanism that users and providers can easily use it."),(0,r.kt)("p",null,"Users have to choose a pair of token and passphrase, which we recommend having a common token(more than 16 chars) in every provider that they subscribe but have a different passphrase(can be small). Users will submit sha256(token+passphrase) to the contract, and whenever they want to authenticate themselves, they have to provide these token and passphrase in a view function( which is not a transaction, so it's not on-chain and free).\nThey also have to once set their sha256(token+passphrase) for using the SubsCrypt dashboard without a wallet.\nThe authentication with a wallet is checked by the blockchain address sender."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"First milestone"),": we will design(it is almost done right now) and implement our smart contract, and we will also design XD files of UI, and we will write our white-paper in this milestone(including the test unit)."),(0,r.kt)("p",null,"The main functions that will be deployed on the chain in this milestone are as follow:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Params"),(0,r.kt)("th",{parentName:"tr",align:null},"Returns"),(0,r.kt)("th",{parentName:"tr",align:null},"State mutability"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"addPlan"),(0,r.kt)("td",{parentName:"tr",align:null},"This function is for providers to add their plans; each plan has duration, price, max refund percent that they are willing to lock in contract and withdraw after that the subscription period has finished."),(0,r.kt)("td",{parentName:"tr",align:null},"list of durations, list of prices, list of max refund percent"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"change state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"editPlan"),(0,r.kt)("td",{parentName:"tr",align:null},"This function is for providers to edit their plan. (Old subscriptions are not affected by this change)"),(0,r.kt)("td",{parentName:"tr",align:null},"index of their plan, new duration, new max refund percent, new price"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"change state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"changeDisable"),(0,r.kt)("td",{parentName:"tr",align:null},"This function is for providers to edit their plan that changes the active or deactivate status of their plan(so people can or can't subscribe in that plan)"),(0,r.kt)("td",{parentName:"tr",align:null},"plan index"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"change state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"subscribe"),(0,r.kt)("td",{parentName:"tr",align:null},"This payable function is for users to subscribe to their desired service and plan; they have to provide a hash of their password (the auth mechanism will be explained thoroughly in Auth Section) and provider address and plan index and some metadata that is encrypted by the public key of the provider(users can trust providers to share their data with but nobody else can know that data)"),(0,r.kt)("td",{parentName:"tr",align:null},"provider address, plan index, the hash of pass, An optional encrypted metadata"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"change state(payable)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"refund"),(0,r.kt)("td",{parentName:"tr",align:null},"This function is for users to refund their subscribe anytime they want and instantly withdraw the rest of their money(maximum amount of refund is indicated by max refund percent that provider had set for that plan)"),(0,r.kt)("td",{parentName:"tr",align:null},"provider address, plan index"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"change state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"withdraw"),(0,r.kt)("td",{parentName:"tr",align:null},"This function is for providers to withdraw the amount that is now ready to withdraw(this is the money that we lock in the contract when a user subscribes to a plan according to max refund percent, and when their plan is finished, that money can be withdrawn). We used an optimized LinkedList solution, which is really cheap to execute and fast."),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"amount of money you are paid"),(0,r.kt)("td",{parentName:"tr",align:null},"change state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"checkSubscription"),(0,r.kt)("td",{parentName:"tr",align:null},"This function is for users or anyone to check that if a user has an active subscription in a specific plan of a provider"),(0,r.kt)("td",{parentName:"tr",align:null},"address of the user, address of provider, plan index"),(0,r.kt)("td",{parentName:"tr",align:null},"return boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"checkAuth"),(0,r.kt)("td",{parentName:"tr",align:null},"This function is used to check if the given combination of token and passphrase can authenticate a specific user for a provider(the auth mechanism will be explained thoroughly in Auth Section)"),(0,r.kt)("td",{parentName:"tr",align:null},"address of the user, address of provider, token, passphrase"),(0,r.kt)("td",{parentName:"tr",align:null},"return boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retrieveWholeDataWithPassword"),(0,r.kt)("td",{parentName:"tr",align:null},"This function is used to get every subscription record of a user with their token and passphrase, which first have to be set in setSubsCryptPass function(this token and passphrase is only worked to login in SubsCrypt website to have a whole review of your account)"),(0,r.kt)("td",{parentName:"tr",align:null},"address of the user, token, passphrase"),(0,r.kt)("td",{parentName:"tr",align:null},"return whole records of a user"),(0,r.kt)("td",{parentName:"tr",align:null},"view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retrieveWholeDataWithWallet"),(0,r.kt)("td",{parentName:"tr",align:null},"This function is the same as the above function with a slight difference that it is used with user wallet to trigger the contract directly"),(0,r.kt)("td",{parentName:"tr",align:null},"None"),(0,r.kt)("td",{parentName:"tr",align:null},"return whole records of a user"),(0,r.kt)("td",{parentName:"tr",align:null},"view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retrieveDataWithPassword"),(0,r.kt)("td",{parentName:"tr",align:null},"This function is used to get every subscription record of a user only related to a specific provider with their token and passphrase is set once they subscribe to their chosen plan of that provider"),(0,r.kt)("td",{parentName:"tr",align:null},"address of the user, address of provider, token, passphrase"),(0,r.kt)("td",{parentName:"tr",align:null},"return whole records of a user"),(0,r.kt)("td",{parentName:"tr",align:null},"view")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"retrieveDataWithWallet"),(0,r.kt)("td",{parentName:"tr",align:null},"This function is the same as the above function with a slight difference that it is used with user wallet to directly trigger the contract"),(0,r.kt)("td",{parentName:"tr",align:null},"address of provider"),(0,r.kt)("td",{parentName:"tr",align:null},"return whole records of a user-related to that provider"),(0,r.kt)("td",{parentName:"tr",align:null},"view")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Second milestone"),": we will implement the UI Dashboard(Vue.js) and UI modules(ES6 and pure js) regarding our XD design in the previous milestone."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Third milestone"),": Implementing our RestAPI backend in Node.js to provide an API layer to interact with our contract(it is optional to use this API), we will also implement our third-party libraries for Django and node.js to interact with our backend and implement the required functionality to make the integration for developers easier(including test unit)."),(0,r.kt)("h3",{id:"overview-1"},"Overview"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Estimated Duration:")," 9 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Full-time equivalent (FTE):")," 5"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Total Costs:")," 30K Dai")),(0,r.kt)("h3",{id:"milestone-1--smart-contract"},"Milestone 1 \u2014 Smart Contract"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 3 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 8K Dai")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"0a."),(0,r.kt)("td",{parentName:"tr",align:null},"License"),(0,r.kt)("td",{parentName:"tr",align:null},"Apache 2.0")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Contract Implementation"),(0,r.kt)("td",{parentName:"tr",align:null},"we will implement the contract and deploy it to a test net.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Contract code"),(0,r.kt)("td",{parentName:"tr",align:null},"implementation of contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"High-level API"),(0,r.kt)("td",{parentName:"tr",align:null},"we will provide an API of contract")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.3"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"full documentation of API that explains how to connect to and use it.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.4"),(0,r.kt)("td",{parentName:"tr",align:null},"Testing Guide"),(0,r.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (100%) to ensure functionality and robustness. In the guide, we will describe how to run these tests")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Article"),(0,r.kt)("td",{parentName:"tr",align:null},"We will write an article or tutorial that explains the work done in this milestone as part of the grant.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Design Front-End component"),(0,r.kt)("td",{parentName:"tr",align:null},"design UI and UX of front-end component with adobe xd.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"4."),(0,r.kt)("td",{parentName:"tr",align:null},"white-paper"),(0,r.kt)("td",{parentName:"tr",align:null},"full description of roadmap and technical specification of this project")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"5."),(0,r.kt)("td",{parentName:"tr",align:null},"Polkadot Standards Proposals (PSPs)"),(0,r.kt)("td",{parentName:"tr",align:null},"we will pull request a PSP in this milestone containing our implementations")))),(0,r.kt)("h3",{id:"milestone-2--ui"},"Milestone 2 \u2014 UI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 5 weeks"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  2"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 10K Dai")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"UI Dashboard"),(0,r.kt)("td",{parentName:"tr",align:null},"A dashboard to manage user's subscriptions and also refund them")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"UI Dashboard for users"),(0,r.kt)("td",{parentName:"tr",align:null},"A dashboard to manage user's subscriptions and also refund them")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"UI Dashboard for admins"),(0,r.kt)("td",{parentName:"tr",align:null},"A dashboard to manage user's customers and create a coupon or see related charts, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"ES6 Module for developers"),(0,r.kt)("td",{parentName:"tr",align:null},"Developers can use this module to integrate our service into their websites")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Implementation of ES6 Module for developers"),(0,r.kt)("td",{parentName:"tr",align:null},"we will write an ES6 Standard module")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Documentation of ES6 Module"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide both inline documentation of the code and a basic tutorial that explains how a developer can integrate our module into their projects")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"3."),(0,r.kt)("td",{parentName:"tr",align:null},"Unit Test"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide unit tests to cover our ES6 Module")))),(0,r.kt)("h3",{id:"milestone-3--back-end-libraries"},"Milestone 3 \u2014 Back-end libraries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Estimated Duration:")," 6 weeks(parallel with milestone 2)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FTE:"),"  3"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Costs:")," 12K Dai")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Number"),(0,r.kt)("th",{parentName:"tr",align:null},"Deliverable"),(0,r.kt)("th",{parentName:"tr",align:null},"Specification"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1."),(0,r.kt)("td",{parentName:"tr",align:null},"Backend RestAPI"),(0,r.kt)("td",{parentName:"tr",align:null},"we will provide a RestAPI to facilitate the connection to blockchain. it will be used to check the subscription or retrieve any data from the contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Backend RestAPI Implementation"),(0,r.kt)("td",{parentName:"tr",align:null},"we will provide a RestAPI to facilitate the connection to blockchain. it will be used to check the subscription or retrieve any data from the contract.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Backend RestAPI Documntaion"),(0,r.kt)("td",{parentName:"tr",align:null},"A fully comprehensive documentation to use our RestAPI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"1.3"),(0,r.kt)("td",{parentName:"tr",align:null},"Backend RestAPI Unit test"),(0,r.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (100%) to ensure functionality and robustness.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2."),(0,r.kt)("td",{parentName:"tr",align:null},"Third Party libraries"),(0,r.kt)("td",{parentName:"tr",align:null},"We will provide some library to make integration of our service easier in different backend stacks by connecting to our Backend RestAPI")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.1"),(0,r.kt)("td",{parentName:"tr",align:null},"Node.js Library"),(0,r.kt)("td",{parentName:"tr",align:null},"A high-level library to use our service in Node.js")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.2"),(0,r.kt)("td",{parentName:"tr",align:null},"Node.js Library documentation"),(0,r.kt)("td",{parentName:"tr",align:null},"A fully comprehensive documentation to use our library")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"2.3"),(0,r.kt)("td",{parentName:"tr",align:null},"Node.js Library Unit test"),(0,r.kt)("td",{parentName:"tr",align:null},"The code will have unit-test coverage (100%) to ensure functionality and robustness")))),(0,r.kt)("h2",{id:"future-plans"},"Future Plans"),(0,r.kt)("p",null,"when we finish this project successfully, then we will try to make our substrate pallet to become a standalone blockchain, and if everything goes well, we will try to be a PolkaDot parachain."),(0,r.kt)("h2",{id:"works-currently-done"},"Works currently Done"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Design and implementation of smart contract in solidity(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/oxydev/SubsCrypt-solidity"},"Repo Link"),")"),(0,r.kt)("li",{parentName:"ul"},"Mockup design of our Website DashBoard and Pop-Up Component")),(0,r.kt)("img",{src:"https://raw.githubusercontent.com/oxydev/oxydev.ir/master/img/modal.png",width:"35%",alt:"Modal Component"})," ",(0,r.kt)("img",{src:"https://raw.githubusercontent.com/oxydev/oxydev.ir/master/img/Dashboard.png",width:"45%",alt:"UI dashboard"}))}u.isMDXComponent=!0}}]);