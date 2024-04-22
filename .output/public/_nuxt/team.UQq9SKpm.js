import{_ as v}from"./TopHeader.fFNtFnRd.js";import{n as r}from"./nuxt.config.uLOwrjQG.js";import{_ as l}from"./entry.52LgVzzU.js";import{o as a,H as n,I as e,U as b,V as g,W as f,J as i,q as _}from"./swiper-vue.UttmE1BI.js";import{M as h}from"./materialize.3je50MNH.js";import{_ as L}from"./close.7vCpsDSr.js";const U={name:"TeamMembersSection",data(){return{baseURL:r.runtimeConfig.public.baseURL,webURL:r.runtimeConfig.public.webURL}},props:{teams:{type:[Object,Array],required:!0}},methods:{getPhoto(t){return this.webURL+t}}},R={id:"team-members"},w={class:"row"},M=e("div",{class:"container"},[e("h2",{class:"section-title center"},"Team Members")],-1),x={class:"team-members-wrapper"},y=["data-target"],T=["src","alt"],k={class:"team-member-details"},C={class:"team-member-name"},q={class:"team-member-role"};function P(t,u,o,p,c,d){return a(),n("section",R,[e("div",w,[M,e("div",x,[o.teams.length>0?(a(!0),n(b,{key:0},g(o.teams,(s,m)=>(a(),n("div",{key:m,class:"team-members-block modal-trigger","data-target":s.name,"data-aos":"fade-up"},[e("img",{src:d.getPhoto(s.photo),alt:s.name,class:"team-member-picture"},null,8,T),e("div",k,[e("div",C,i(s.name),1),e("div",q,i(s.position),1)])],8,y))),128)):f("",!0)])])])}const S=l(U,[["render",P]]),A={name:"TeamMembersModals",mounted(){const t=document.querySelectorAll(".modal");h.Modal.init(t)},updated(){const t=document.querySelectorAll(".modal");h.Modal.init(t)},data(){return{baseURL:r.runtimeConfig.public.baseURL,webURL:r.runtimeConfig.public.webURL}},props:{teams:{type:[Object,Array],required:!0}},methods:{getPhoto(t){return this.webURL+t}}},O=["id"],V=e("img",{src:L,alt:"close",class:"modal-close"},null,-1),j={class:"modal-content"},B={class:"member-modal-wrapper"},N={class:"member-img-side"},D=["src","alt"],H={class:"member-txt-side"},I={class:"container"},E={class:"member-role"},F={class:"member-name"},J={class:"member-desc"};function W(t,u,o,p,c,d){return o.teams.length>0?(a(!0),n(b,{key:0},g(o.teams,(s,m)=>(a(),n("div",{key:m,id:s.name,class:"modal team-modal"},[V,e("div",j,[e("div",B,[e("div",N,[e("img",{src:d.getPhoto(s.photo),alt:s.name,class:"member-img"},null,8,D)]),e("div",H,[e("div",I,[e("div",E,i(s.position),1),e("div",F,i(s.name),1),e("div",J,i(s.experience),1)])])])])],8,O))),128)):f("",!0)}const z=l(A,[["render",W]]),G={name:"TeamPage",data(){return{errors:{},teams:{},baseURL:r.runtimeConfig.public.baseURL,webURL:r.runtimeConfig.public.webURL}},methods:{async getTeamMember(){await $fetch(`${this.baseURL}people-management`).then(t=>{this.teams=t.response.data}).catch(t=>{this.errors=t})}},mounted(){this.getTeamMember()}},K={id:"team-page"};function Q(t,u,o,p,c,d){const s=v,m=S,$=z;return a(),n("div",K,[_(s,{title:"Our Team",description:"Our team is made up of individuals with a wealth of experience and first-class expertise in their various fields",backgroundImg:"team-banner.jpg"}),_(m,{teams:c.teams},null,8,["teams"]),_($,{teams:c.teams},null,8,["teams"])])}const oe=l(G,[["render",Q]]);export{oe as default};