import{_ as u}from"./entry.52LgVzzU.js";import{o as v,H as C,I as e,G as Z,q as t,l as a,L as r,M as b,N as H,Z as T,X as y,Y as L,J as S,R as k,a4 as U}from"./swiper-vue.UttmE1BI.js";import{M as m}from"./materialize.3je50MNH.js";import{n as w}from"./nuxt.config.uLOwrjQG.js";import{$ as g}from"./jquery.Her6RiSf.js";const A={name:"MenuIcon"},I={width:"31",height:"31",viewBox:"0 0 31 31",fill:"none",xmlns:"http://www.w3.org/2000/svg"},N=e("path",{d:"M26.75 13.166H4.25",stroke:"#056839","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),B=e("path",{d:"M26.75 8.16602H4.25",stroke:"#056839","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),R=e("path",{d:"M26.75 18.166H4.25",stroke:"#056839","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),D=e("path",{d:"M26.75 23.166H4.25",stroke:"#056839","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),O=[N,B,R,D];function j(n,o,_,p,c,l){return v(),C("svg",I,O)}const V=u(A,[["render",j]]),q={name:"ArrowDownicon"},F={width:"25",height:"25",viewBox:"0 0 25 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"},P=e("path",{d:"M7.89014 10.9893L12.8901 14.9893L17.8901 10.9893",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),G=[P];function E(n,o,_,p,c,l){return v(),C("svg",F,G)}const $=u(q,[["render",E]]),M=""+new URL("novus-agro.ETqHuR0r.png",import.meta.url).href,Y=""+new URL("novus-agro-white.gA6lE20d.png",import.meta.url).href,X={name:"NavbarComponent",components:{ArrowDownIcon:$,MenuIcon:V},mounted(){const n=document.querySelectorAll(".sidenav");m.Sidenav.init(n);const o=document.querySelectorAll(".scrollspy");m.ScrollSpy.init(o);const _=document.querySelectorAll(".dropdown-trigger");m.Dropdown.init(_,{hover:!0});const p=document.querySelectorAll(".collapsible");m.Collapsible.init(p)},methods:{scrollToTop(){window.scrollTo(0,0)}}},i=n=>(b("data-v-ca2d39d3"),n=n(),H(),n),J={id:"nav-wrapper"},z={class:"main-nav"},K={class:"container full-height"},Q={class:"nav-wrapper"},W=i(()=>e("img",{src:M,alt:"novus-agro",class:"logo colored-img"},null,-1)),e2=i(()=>e("img",{src:Y,alt:"novus-agro",class:"logo white-img"},null,-1)),o2={id:"nav-mobile-2",class:"dn-mobile ul-nav"},t2={href:"#","data-target":"slide-out",class:"sidenav-trigger sec-color right"},s2={id:"nav-mobile",class:"right hide-on-med-and-down"},l2=i(()=>e("span",null,"Home",-1)),a2=i(()=>e("span",null,"Company",-1)),n2={id:"company-dropdown",class:"dropdown-content"},i2=i(()=>e("span",null,"Our Services",-1)),d2=i(()=>e("span",null,"GrainPoint",-1)),r2=i(()=>e("span",null,"Careers",-1)),c2=i(()=>e("span",null,"Media",-1)),_2={id:"media-dropdown",class:"dropdown-content"},p2=i(()=>e("span",null,"Contact Us",-1)),u2={id:"slide-out",class:"sidenav"},v2={class:"sidenav-logo"},C2=i(()=>e("img",{src:M,alt:"Novus Agro",class:"logo"},null,-1)),h2={class:"sidenav-flex"},m2=i(()=>e("span",null,"Home",-1)),f2={class:"collapsible"},g2={class:"collapsible-header"},w2={class:"flex-div"},b2=i(()=>e("span",null,"Company",-1)),H2={class:"collapsible-body"},k2={id:"company-dropdown-2"},V2=i(()=>e("span",null,"Our Services",-1)),$2=i(()=>e("span",null,"GrainPoint",-1)),M2=i(()=>e("span",null,"Careers",-1)),x2={class:"collapsible"},Z2={class:"collapsible-header"},T2={class:"flex-div"},y2=i(()=>e("span",null,"Media",-1)),L2={class:"collapsible-body"},S2={id:"media-dropdown-2"},U2=i(()=>e("span",null,"Contact Us",-1));function A2(n,o,_,p,c,l){const s=Z("router-link"),f=V,h=$;return v(),C("div",J,[e("nav",z,[e("div",K,[e("div",Q,[t(s,{to:"/",class:"brand-logo",onClick:o[0]||(o[0]=d=>l.scrollToTop())},{default:a(()=>[W,e2]),_:1}),e("ul",o2,[e("li",null,[e("a",t2,[t(f)])])]),e("ul",s2,[e("li",null,[t(s,{to:"/",onClick:o[1]||(o[1]=d=>l.scrollToTop())},{default:a(()=>[l2]),_:1})]),e("li",null,[e("a",{href:"#!",class:"dropdown-trigger flex-div","data-target":"company-dropdown",onClick:o[2]||(o[2]=d=>l.scrollToTop())},[a2,t(h)]),e("ul",n2,[e("li",null,[t(s,{to:"/about"},{default:a(()=>[r("About Us")]),_:1})]),e("li",null,[t(s,{to:"/team"},{default:a(()=>[r("Our Team")]),_:1})])])]),e("li",null,[t(s,{to:"/services",onClick:o[3]||(o[3]=d=>l.scrollToTop())},{default:a(()=>[i2]),_:1})]),e("li",null,[t(s,{to:"/grainpoint",onClick:o[4]||(o[4]=d=>l.scrollToTop())},{default:a(()=>[d2]),_:1})]),e("li",null,[t(s,{to:"/careers",onClick:o[5]||(o[5]=d=>l.scrollToTop())},{default:a(()=>[r2]),_:1})]),e("li",null,[e("a",{href:"#!",class:"dropdown-trigger flex-div","data-target":"media-dropdown",onClick:o[6]||(o[6]=d=>l.scrollToTop())},[c2,t(h)]),e("ul",_2,[e("li",null,[t(s,{to:"/gallery"},{default:a(()=>[r("Gallery")]),_:1})]),e("li",null,[t(s,{to:"/blog"},{default:a(()=>[r("Blog")]),_:1})])])]),e("li",null,[t(s,{to:"/contact",onClick:o[7]||(o[7]=d=>l.scrollToTop())},{default:a(()=>[p2]),_:1})])])])])]),e("ul",u2,[e("div",v2,[t(s,{to:"/",class:"sidenav-close",onClick:o[8]||(o[8]=d=>l.scrollToTop())},{default:a(()=>[C2]),_:1})]),e("ul",h2,[e("li",null,[t(s,{to:"/",class:"sidenav-close",onClick:o[9]||(o[9]=d=>l.scrollToTop())},{default:a(()=>[m2]),_:1})]),e("li",null,[e("ul",f2,[e("li",null,[e("div",g2,[e("a",w2,[b2,t(h)])]),e("div",H2,[e("ul",k2,[e("li",null,[t(s,{to:"/about",class:"sidenav-close"},{default:a(()=>[r("About Us")]),_:1})]),e("li",null,[t(s,{to:"/team",class:"sidenav-close"},{default:a(()=>[r("Our Team")]),_:1})])])])])])]),e("li",null,[t(s,{to:"/services",class:"sidenav-close",onClick:o[10]||(o[10]=d=>l.scrollToTop())},{default:a(()=>[V2]),_:1})]),e("li",null,[t(s,{to:"/grainpoint",class:"sidenav-close",onClick:o[11]||(o[11]=d=>l.scrollToTop())},{default:a(()=>[$2]),_:1})]),e("li",null,[t(s,{to:"/careers",class:"sidenav-close",onClick:o[12]||(o[12]=d=>l.scrollToTop())},{default:a(()=>[M2]),_:1})]),e("li",null,[e("ul",x2,[e("li",null,[e("div",Z2,[e("a",T2,[y2,t(h)])]),e("div",L2,[e("ul",S2,[e("li",null,[t(s,{to:"/gallery",class:"sidenav-close"},{default:a(()=>[r("Gallery")]),_:1})]),e("li",null,[t(s,{to:"/blog",class:"sidenav-close"},{default:a(()=>[r("Blog")]),_:1})])])])])])]),e("li",null,[t(s,{to:"/contact",class:"sidenav-close",onClick:o[13]||(o[13]=d=>l.scrollToTop())},{default:a(()=>[U2]),_:1})])])])])}const I2=u(X,[["render",A2],["__scopeId","data-v-ca2d39d3"]]),N2="data:image/svg+xml,%3csvg%20width='19'%20height='16'%20viewBox='0%200%2019%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.25514%208.9765C8.76943%208.9765%208.28516%208.82916%207.88003%208.5345L4.62375%206.12383C4.38924%205.9505%204.35294%205.63516%204.54099%205.4205C4.73048%205.2065%205.07317%205.1725%205.30696%205.34516L8.56033%207.75316C8.96909%208.0505%209.54483%208.0505%209.9565%207.7505L13.1772%205.3465C13.411%205.17116%2013.7537%205.2045%2013.9439%205.41916C14.1334%205.63316%2014.0978%205.94783%2013.8648%206.1225L10.6382%208.5305C10.2302%208.82783%209.74231%208.9765%209.25514%208.9765Z'%20fill='%23056839'/%3e%3cmask%20id='mask0_50_467'%20style='mask-type:alpha'%20maskUnits='userSpaceOnUse'%20x='1'%20y='1'%20width='17'%20height='14'%3e%3cpath%20d='M1.43011%201.3335H17.0398V14.3335H1.43011V1.3335Z'%20fill='white'/%3e%3c/mask%3e%3cg%20mask='url(%23mask0_50_467)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.66932%2013.3335H12.799C12.8005%2013.3322%2012.8063%2013.3335%2012.8106%2013.3335C13.639%2013.3335%2014.3738%2013.0615%2014.9372%2012.5448C15.5913%2011.9468%2015.9507%2011.0875%2015.9507%2010.1255V5.54683C15.9507%203.68483%2014.625%202.3335%2012.799%202.3335H5.67077C3.84479%202.3335%202.51905%203.68483%202.51905%205.54683V10.1255C2.51905%2011.0875%202.87916%2011.9468%203.5326%2012.5448C4.096%2013.0615%204.83148%2013.3335%205.65916%2013.3335H5.66932ZM5.65698%2014.3335C4.5367%2014.3335%203.53623%2013.9602%202.76372%2013.2535C1.90337%2012.4655%201.42999%2011.3548%201.42999%2010.1255V5.54683C1.42999%203.14483%203.25307%201.3335%205.67077%201.3335H12.799C15.2167%201.3335%2017.0398%203.14483%2017.0398%205.54683V10.1255C17.0398%2011.3548%2016.5664%2012.4655%2015.7061%2013.2535C14.9343%2013.9595%2013.9331%2014.3335%2012.8106%2014.3335H12.799H5.67077H5.65698Z'%20fill='%23056839'/%3e%3c/g%3e%3c/svg%3e",B2="data:image/svg+xml,%3csvg%20width='17'%20height='16'%20viewBox='0%200%2017%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M5.14354%201.33386C5.8882%201.34386%206.41887%201.90186%207.0902%202.60786C7.2562%202.78186%207.43554%202.97186%207.6362%203.17186C8.60887%204.14519%208.3322%204.93919%208.10887%205.57652C7.8662%206.27186%207.6562%206.87186%208.91354%208.12919C10.1709%209.38652%2010.7702%209.17652%2011.4649%208.93186C12.1029%208.70919%2012.8949%208.43052%2013.8695%209.40386C14.0675%209.60186%2014.2542%209.77919%2014.4275%209.94386C15.1362%2010.6185%2015.6962%2011.1512%2015.7056%2011.8979C15.7129%2012.5339%2015.3262%2013.1832%2014.3715%2014.1379L13.9489%2013.8512L14.3069%2014.1999C14.0955%2014.4165%2013.5335%2014.9939%2012.4329%2015.0005H12.4129C10.7515%2015.0005%208.58554%2013.6779%205.97487%2011.0679C3.35354%208.44719%202.02887%206.27452%202.03881%204.60986C2.04487%203.50986%202.62154%202.94652%202.8382%202.73519L2.8567%202.71499L2.90154%202.66986C3.8582%201.71319%204.51554%201.31986%205.14354%201.33386ZM5.13087%202.33386H5.12554C4.82616%202.33386%204.37151%202.63386%203.73742%203.24979L3.61009%203.37483L3.61154%203.37452C3.61234%203.37452%203.60066%203.387%203.58211%203.40592L3.53754%203.45052C3.3762%203.60719%203.0422%203.93319%203.03884%204.61519C3.03354%205.56919%203.66087%207.34052%206.68154%2010.3605C9.68754%2013.3659%2011.4562%2014.0005%2012.4129%2014.0005H12.4269C13.1089%2013.9965%2013.4342%2013.6625%2013.5909%2013.5019C13.6382%2013.4532%2013.6769%2013.4165%2013.7042%2013.3945C14.3689%2012.7259%2014.7089%2012.2292%2014.7056%2011.9099C14.7015%2011.5845%2014.2969%2011.2005%2013.7375%2010.6679C13.5595%2010.4992%2013.3662%2010.3145%2013.1622%2010.1105C12.6329%209.58319%2012.3722%209.67319%2011.7955%209.87586C10.9989%2010.1552%209.90754%2010.5379%208.20687%208.83586C6.50554%207.13519%206.88687%206.04386%207.16487%205.24652C7.3662%204.67052%207.4582%204.40852%206.92954%203.87919C6.72287%203.67252%206.53687%203.47652%206.36554%203.29652C5.8362%202.74052%205.4542%202.33852%205.13087%202.33386ZM10.8696%203.70552C12.2569%203.97486%2013.3283%205.04552%2013.5983%206.43352C13.6509%206.70552%2013.4743%206.96752%2013.2036%207.02019C13.1709%207.02619%2013.1389%207.02952%2013.1069%207.02952C12.8723%207.02952%2012.6636%206.86419%2012.6169%206.62552C12.4249%205.63886%2011.6643%204.87819%2010.6789%204.68686C10.4076%204.63419%2010.2309%204.37219%2010.2836%204.10086C10.3363%203.82952%2010.6029%203.65219%2010.8696%203.70552ZM10.8297%201.33766C13.5483%201.63966%2015.6597%203.74832%2015.9643%206.46632C15.995%206.74099%2015.7977%206.98832%2015.5237%207.01899C15.505%207.02099%2015.4857%207.02232%2015.467%207.02232C15.2157%207.02232%2014.9997%206.83366%2014.971%206.57832C14.7183%204.32766%2012.9703%202.58099%2010.719%202.33099C10.445%202.30032%2010.247%202.05366%2010.2777%201.77899C10.3077%201.50499%2010.5523%201.30299%2010.8297%201.33766Z'%20fill='%23056839'/%3e%3c/svg%3e",R2=""+new URL("twitter.e0sYXE_b.svg",import.meta.url).href,D2="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_345_150)'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M3.45515%201.40418C4.02692%201.1817%204.68165%201.02978%205.63979%200.986145C6.59995%200.941793%206.90697%200.931641%209.35118%200.931641C11.7954%200.931641%2012.1022%200.942513%2013.0618%200.986145C14.0193%201.02906%2014.6736%201.1817%2015.2465%201.40418C15.8376%201.63393%2016.34%201.94137%2016.8401%202.44227C17.3403%202.94318%2017.6479%203.4448%2017.8783%204.03657C18.1008%204.60832%2018.2527%205.26294%2018.2963%206.22112C18.3399%207.18074%2018.3501%207.48753%2018.3501%209.93164C18.3501%2012.3758%2018.3399%2012.6818%2018.2963%2013.6422C18.2534%2014.6003%2018.1008%2015.2546%2017.8783%2015.8267C17.6479%2016.4185%2017.3411%2016.9209%2016.8401%2017.421C16.3392%2017.9211%2015.8376%2018.2287%2015.2458%2018.4591C14.6736%2018.6816%2014.0193%2018.8335%2013.0611%2018.8771C12.1015%2018.9215%2011.7947%2018.9316%209.35046%2018.9316C6.90625%2018.9316%206.59995%2018.9208%205.63979%2018.8771C4.68165%2018.8335%204.028%2018.6816%203.45515%2018.4591C2.863%2018.2287%202.36164%2017.9209%201.86079%2017.421C1.35994%2016.9211%201.05241%2016.4185%200.822652%2015.8267C0.600163%2015.2546%200.448238%2014.6003%200.404604%2013.6422C0.36025%2012.6825%200.350098%2012.3758%200.350098%209.93164C0.350098%207.48753%200.36025%207.18074%200.404604%206.22112C0.448238%205.26302%200.600163%204.60868%200.822652%204.03657C1.05241%203.44444%201.35987%202.94238%201.86079%202.44227C2.36171%201.94216%202.863%201.63393%203.45515%201.40418ZM9.34955%206.43164C7.41675%206.43164%205.8501%207.99874%205.8501%209.93164C5.8501%2011.8645%207.41675%2013.4316%209.34955%2013.4316C11.2827%2013.4316%2012.8501%2011.8642%2012.8501%209.93164C12.8501%207.99905%2011.2827%206.43164%209.34955%206.43164ZM3.8501%209.93164C3.8501%206.89457%206.31178%204.43164%209.34955%204.43164C12.387%204.43164%2014.8501%206.89425%2014.8501%209.93164C14.8501%2012.969%2012.387%2015.4316%209.34955%2015.4316C6.31178%2015.4316%203.8501%2012.9687%203.8501%209.93164Z'%20fill='%23056839'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_345_150'%3e%3crect%20width='18'%20height='18'%20fill='%20'%20transform='translate(0.350098%200.931641)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",O2="data:image/svg+xml,%3csvg%20width='19'%20height='19'%20viewBox='0%200%2019%2019'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_345_167)'%3e%3cmask%20id='path-1-inside-1_345_167'%20fill='white'%3e%3cpath%20d='M18.3455%2018.9318V18.9311H18.35V12.3296C18.35%209.10006%2017.6548%206.6123%2013.8793%206.6123C12.0643%206.6123%2010.8463%207.60831%2010.349%208.55256H10.2965V6.9138H6.7168V18.9311H10.4443V12.9806C10.4443%2011.4138%2010.7413%209.89881%2012.6815%209.89881C14.5933%209.89881%2014.6218%2011.6868%2014.6218%2013.0811V18.9318H18.3455Z'/%3e%3c/mask%3e%3cpath%20d='M18.3455%2018.9318V18.9311H18.35V12.3296C18.35%209.10006%2017.6548%206.6123%2013.8793%206.6123C12.0643%206.6123%2010.8463%207.60831%2010.349%208.55256H10.2965V6.9138H6.7168V18.9311H10.4443V12.9806C10.4443%2011.4138%2010.7413%209.89881%2012.6815%209.89881C14.5933%209.89881%2014.6218%2011.6868%2014.6218%2013.0811V18.9318H18.3455Z'%20fill='%23056839'/%3e%3cpath%20d='M18.3455%2018.9318V40.2651H39.6789V18.9318H18.3455ZM18.3455%2018.9311V-2.40227H-2.98779V18.9311H18.3455ZM18.35%2018.9311V40.2644H39.6834V18.9311H18.35ZM10.349%208.55256V29.8859H23.2253L29.225%2018.4928L10.349%208.55256ZM10.2965%208.55256H-11.0368V29.8859H10.2965V8.55256ZM10.2965%206.9138H31.6299V-14.4195H10.2965V6.9138ZM6.7168%206.9138V-14.4195H-14.6165V6.9138H6.7168ZM6.7168%2018.9311H-14.6165V40.2644H6.7168V18.9311ZM10.4443%2018.9311V40.2644H31.7776V18.9311H10.4443ZM14.6218%2018.9318H-6.71154V40.2651H14.6218V18.9318ZM39.6789%2018.9318V18.9311H-2.98779V18.9318H39.6789ZM18.3455%2040.2644H18.35V-2.40227H18.3455V40.2644ZM39.6834%2018.9311V12.3296H-2.98329V18.9311H39.6834ZM39.6834%2012.3296C39.6834%2010.2496%2039.6969%203.42641%2035.5836%20-3.10664C30.0465%20-11.901%2021.0338%20-14.721%2013.8793%20-14.721V27.9456C12.5542%2027.9456%209.98754%2027.7349%207.00331%2026.3147C3.78576%2024.7835%201.20995%2022.3781%20-0.522597%2019.6264C-2.09655%2017.1265%20-2.62192%2014.9135%20-2.81112%2013.8662C-3.00126%2012.8136%20-2.98329%2012.1763%20-2.98329%2012.3296H39.6834ZM13.8793%20-14.721C3.79033%20-14.721%20-4.50834%20-9.01879%20-8.52694%20-1.38769L29.225%2018.4928C26.2009%2024.2354%2020.3383%2027.9456%2013.8793%2027.9456V-14.721ZM10.349%20-12.7808H10.2965V29.8859H10.349V-12.7808ZM31.6299%208.55256V6.9138H-11.0368V8.55256H31.6299ZM10.2965%20-14.4195H6.7168V28.2471H10.2965V-14.4195ZM-14.6165%206.9138V18.9311H28.0501V6.9138H-14.6165ZM6.7168%2040.2644H10.4443V-2.40227H6.7168V40.2644ZM31.7776%2018.9311V12.9806H-10.889V18.9311H31.7776ZM31.7776%2012.9806C31.7776%2013.17%2031.7762%2014.0262%2031.5848%2015.2189C31.3992%2016.3747%2030.9205%2018.6072%2029.5176%2021.1519C27.9912%2023.9205%2025.4967%2026.8025%2021.8482%2028.8229C18.3229%2030.7751%2014.9698%2031.2321%2012.6815%2031.2321V-11.4345C9.42319%20-11.4345%205.30535%20-10.7881%201.17862%20-8.50286C-3.07123%20-6.14945%20-6.00377%20-2.7908%20-7.84691%200.552392C-10.9796%206.23455%20-10.889%2011.807%20-10.889%2012.9806H31.7776ZM12.6815%2031.2321C9.75445%2031.2321%205.60835%2030.503%201.5854%2027.6965C-2.39188%2024.9219%20-4.45881%2021.3648%20-5.46544%2018.8235C-6.39789%2016.4695%20-6.60134%2014.5633%20-6.66097%2013.8969C-6.7242%2013.1903%20-6.71154%2012.6755%20-6.71154%2013.0811H35.9551C35.9551%2012.7895%2035.9642%2011.5283%2035.8359%2010.0943C35.7112%208.70056%2035.3811%206.08601%2034.2026%203.1107C32.9499%20-0.0518951%2030.5174%20-4.14315%2025.9971%20-7.29657C21.4311%20-10.4819%2016.5645%20-11.4345%2012.6815%20-11.4345V31.2321ZM-6.71154%2013.0811V18.9318H35.9551V13.0811H-6.71154ZM14.6218%2040.2651H18.3455V-2.40152H14.6218V40.2651Z'%20fill='%23056839'%20mask='url(%23path-1-inside-1_345_167)'/%3e%3cpath%20d='M0.647095%206.91455H4.37909V18.9318H0.647095V6.91455Z'%20fill='%23056839'/%3e%3cpath%20d='M2.5116%200.931641C1.31835%200.931641%200.350098%201.89989%200.350098%203.09314C0.350098%204.28639%201.31835%205.27489%202.5116%205.27489C3.70485%205.27489%204.6731%204.28639%204.6731%203.09314C4.67235%201.89989%203.7041%200.931641%202.5116%200.931641V0.931641Z'%20fill='%23056839'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_345_167'%3e%3crect%20width='18'%20height='18'%20fill='white'%20transform='translate(0.350098%200.931641)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",j2={name:"FooterComponent",data(){return{theformdata:{email:""},currentYear:new Date().getFullYear(),baseURL:w.runtimeConfig.public.baseURL,webURL:w.runtimeConfig.public.webURL,errors:{}}},methods:{async submitForm(){const n=this.theformdata;await $fetch(`${this.baseURL}save-newsletter`,{method:"POST",headers:{"Content-Type":"application/json"},body:n}).then(o=>{alert("successful"),this.theformdata={}}).catch(o=>{this.errors=o})}}},x=n=>(b("data-v-6ae63bad"),n=n(),H(),n),q2={id:"footer"},F2={class:"row"},P2={class:"container"},G2={class:"footer-grid-wrapper"},E2=k('<div class="footer-block" data-v-6ae63bad><div class="footer-block-title" data-v-6ae63bad>Office Address</div><ul class="footer-block-list" data-v-6ae63bad><li data-v-6ae63bad> No 5a Craig Street, <br data-v-6ae63bad> Ogudu GRA, <br data-v-6ae63bad> Lagos, <br data-v-6ae63bad> Nigeria. </li></ul></div><div class="footer-block" data-v-6ae63bad><div class="footer-block-title" data-v-6ae63bad>For Enquiry</div><ul class="footer-block-list" data-v-6ae63bad><li data-v-6ae63bad><a href="mailto:info@novusagro.com" class="footer-link flex-div" data-v-6ae63bad><img src="'+N2+'" alt="mail-icon" class="footer-link-icon" data-v-6ae63bad><span data-v-6ae63bad>info@novusagro.com</span></a></li><li data-v-6ae63bad><a href="tel:+2348139466737" class="footer-link flex-div" data-v-6ae63bad><img src="'+B2+'" alt="phone-icon" class="footer-link-icon" data-v-6ae63bad><span data-v-6ae63bad>+234 8139466737</span></a></li></ul></div>',2),Y2={class:"footer-block"},X2=x(()=>e("div",{class:"footer-block-title"},"Sign up for the newsletter",-1)),J2={class:"input-field flex-div"},z2=x(()=>e("button",{id:"subscribe-btn"},"Subscribe",-1)),K2={class:"footer-copyright-social flex-div justify-content-btw"},Q2={class:"footer-copyright"},W2=k('<div class="flex-div footer-social" data-v-6ae63bad><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" class="footer-link flex-div sec-color" data-v-6ae63bad><img src="'+R2+'" alt="twitter" class="social-link-icon" data-v-6ae63bad><span data-v-6ae63bad>Twitter</span></a><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" class="footer-link flex-div sec-color" data-v-6ae63bad><img src="'+D2+'" alt="instagram" class="social-link-icon" data-v-6ae63bad><span data-v-6ae63bad>Instagram</span></a><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" class="footer-link flex-div sec-color" data-v-6ae63bad><img src="'+O2+'" alt="linkedin" class="social-link-icon" data-v-6ae63bad><span data-v-6ae63bad>Linkedin</span></a></div>',1);function e0(n,o,_,p,c,l){return v(),C("footer",q2,[e("div",F2,[e("div",P2,[e("div",G2,[E2,e("div",Y2,[X2,e("form",{onSubmit:o[1]||(o[1]=T((...s)=>l.submitForm&&l.submitForm(...s),["prevent"])),class:"footer-newsletter-form"},[e("div",J2,[y(e("input",{type:"email","onUpdate:modelValue":o[0]||(o[0]=s=>c.theformdata.email=s),id:"newsletter-inp"},null,512),[[L,c.theformdata.email]]),z2])],32)])]),e("div",K2,[e("div",Q2," © Copyright "+S(c.currentYear)+" - NovusAgro Nigeria Limited ",1),W2])])])])}const o0=u(j2,[["render",e0],["__scopeId","data-v-6ae63bad"]]),t0={name:"DefaultLayout",mounted(){g(window).scroll(function(){g("nav.main-nav").toggleClass("scrolled-nav",g(this).scrollTop()>50)})}},s0={id:"app-wrapper"},l0={id:"main-contents-wrapper"};function a0(n,o,_,p,c,l){const s=I2,f=o0;return v(),C("div",s0,[t(s),e("main",l0,[U(n.$slots,"default")]),t(f)])}const _0=u(t0,[["render",a0]]);export{_0 as default};
