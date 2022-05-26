"use strict";(self.webpackChunkpedulibencana=self.webpackChunkpedulibencana||[]).push([[101],{5816:(e,t,r)=>{r.d(t,{BL:()=>f,Ct:()=>h,DH:()=>g,F2:()=>i,I:()=>a,MS:()=>k,N7:()=>y,Pj:()=>d,XM:()=>w,YP:()=>m,bw:()=>v,cW:()=>j,d7:()=>s,ij:()=>b,iv:()=>O,k5:()=>l,mv:()=>p,r5:()=>Z,t$:()=>o,ut:()=>c,wX:()=>x,we:()=>n,xs:()=>P,zV:()=>u});var n="top",a="bottom",i="right",o="left",s="auto",p=[n,a,i,o],f="start",c="end",u="clippingParents",d="viewport",l="popper",m="reference",v=p.reduce((function(e,t){return e.concat([t+"-"+f,t+"-"+c])}),[]),h=[].concat(p,[s]).reduce((function(e,t){return e.concat([t,t+"-"+f,t+"-"+c])}),[]),y="beforeRead",b="read",Z="afterRead",w="beforeMain",g="main",x="afterMain",O="beforeWrite",j="write",k="afterWrite",P=[y,b,Z,w,g,x,O,j,k]},5642:(e,t,r)=>{r.r(t),r.d(t,{afterMain:()=>n.wX,afterRead:()=>n.r5,afterWrite:()=>n.MS,applyStyles:()=>a.Z,arrow:()=>i.Z,auto:()=>n.d7,basePlacements:()=>n.mv,beforeMain:()=>n.XM,beforeRead:()=>n.N7,beforeWrite:()=>n.iv,bottom:()=>n.I,clippingParents:()=>n.zV,computeStyles:()=>o.Z,createPopper:()=>v.fi,createPopperBase:()=>l.fi,createPopperLite:()=>y,detectOverflow:()=>m.Z,end:()=>n.ut,eventListeners:()=>s.Z,flip:()=>p.Z,hide:()=>f.Z,left:()=>n.t$,main:()=>n.DH,modifierPhases:()=>n.xs,offset:()=>c.Z,placements:()=>n.Ct,popper:()=>n.k5,popperGenerator:()=>l.kZ,popperOffsets:()=>u.Z,preventOverflow:()=>d.Z,read:()=>n.ij,reference:()=>n.YP,right:()=>n.F2,start:()=>n.BL,top:()=>n.we,variationPlacements:()=>n.bw,viewport:()=>n.Pj,write:()=>n.cW});var n=r(5816),a=r(908),i=r(2155),o=r(7959),s=r(518),p=r(2678),f=r(5282),c=r(2299),u=r(6949),d=r(1455),l=r(1734),m=r(5831),v=r(5353),h=[s.Z,u.Z,o.Z,a.Z],y=(0,l.kZ)({defaultModifiers:h})},908:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(1177),a=r(449);const i={name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var r=t.styles[e]||{},i=t.attributes[e]||{},o=t.elements[e];(0,a.Re)(o)&&(0,n.Z)(o)&&(Object.assign(o.style,r),Object.keys(i).forEach((function(e){var t=i[e];!1===t?o.removeAttribute(e):o.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,r={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,r.popper),t.styles=r,t.elements.arrow&&Object.assign(t.elements.arrow.style,r.arrow),function(){Object.keys(t.elements).forEach((function(e){var i=t.elements[e],o=t.attributes[e]||{},s=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:r[e]).reduce((function(e,t){return e[t]="",e}),{});(0,a.Re)(i)&&(0,n.Z)(i)&&(Object.assign(i.style,s),Object.keys(o).forEach((function(e){i.removeAttribute(e)})))}))}},requires:["computeStyles"]}},2155:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(6411),a=r(3222),i=r(1027),o=r(7315),s=r(2874),p=r(2834),f=r(1706),c=r(5250),u=r(5816);const d={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,r=e.state,i=e.name,d=e.options,l=r.elements.arrow,m=r.modifiersData.popperOffsets,v=(0,n.Z)(r.placement),h=(0,s.Z)(v),y=[u.t$,u.F2].indexOf(v)>=0?"height":"width";if(l&&m){var b=function(e,t){return e="function"==typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,(0,f.Z)("number"!=typeof e?e:(0,c.Z)(e,u.mv))}(d.padding,r),Z=(0,a.Z)(l),w="y"===h?u.we:u.t$,g="y"===h?u.I:u.F2,x=r.rects.reference[y]+r.rects.reference[h]-m[h]-r.rects.popper[y],O=m[h]-r.rects.reference[h],j=(0,o.Z)(l),k=j?"y"===h?j.clientHeight||0:j.clientWidth||0:0,P=x/2-O/2,D=b[w],A=k-Z[y]-b[g],E=k/2-Z[y]/2+P,B=(0,p.u)(D,E,A),F=h;r.modifiersData[i]=((t={})[F]=B,t.centerOffset=B-E,t)}},effect:function(e){var t=e.state,r=e.options.element,n=void 0===r?"[data-popper-arrow]":r;null!=n&&("string"!=typeof n||(n=t.elements.popper.querySelector(n)))&&(0,i.Z)(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]}},7959:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(5816),a=r(7315),i=r(7987),o=r(7211),s=r(6373),p=r(6411),f=r(2705),c=r(9496),u={top:"auto",right:"auto",bottom:"auto",left:"auto"};function d(e){var t,r=e.popper,p=e.popperRect,f=e.placement,d=e.variation,l=e.offsets,m=e.position,v=e.gpuAcceleration,h=e.adaptive,y=e.roundOffsets,b=e.isFixed,Z=l.x,w=void 0===Z?0:Z,g=l.y,x=void 0===g?0:g,O="function"==typeof y?y({x:w,y:x}):{x:w,y:x};w=O.x,x=O.y;var j=l.hasOwnProperty("x"),k=l.hasOwnProperty("y"),P=n.t$,D=n.we,A=window;if(h){var E=(0,a.Z)(r),B="clientHeight",F="clientWidth";E===(0,i.Z)(r)&&(E=(0,o.Z)(r),"static"!==(0,s.Z)(E).position&&"absolute"===m&&(B="scrollHeight",F="scrollWidth")),(f===n.we||(f===n.t$||f===n.F2)&&d===n.ut)&&(D=n.I,x-=(b&&E===A&&A.visualViewport?A.visualViewport.height:E[B])-p.height,x*=v?1:-1),f!==n.t$&&(f!==n.we&&f!==n.I||d!==n.ut)||(P=n.F2,w-=(b&&E===A&&A.visualViewport?A.visualViewport.width:E[F])-p.width,w*=v?1:-1)}var I,M=Object.assign({position:m},h&&u),V=!0===y?function(e){var t=e.x,r=e.y,n=window.devicePixelRatio||1;return{x:(0,c.NM)(t*n)/n||0,y:(0,c.NM)(r*n)/n||0}}({x:w,y:x}):{x:w,y:x};return w=V.x,x=V.y,v?Object.assign({},M,((I={})[D]=k?"0":"",I[P]=j?"0":"",I.transform=(A.devicePixelRatio||1)<=1?"translate("+w+"px, "+x+"px)":"translate3d("+w+"px, "+x+"px, 0)",I)):Object.assign({},M,((t={})[D]=k?x+"px":"",t[P]=j?w+"px":"",t.transform="",t))}const l={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,r=e.options,n=r.gpuAcceleration,a=void 0===n||n,i=r.adaptive,o=void 0===i||i,s=r.roundOffsets,c=void 0===s||s,u={placement:(0,p.Z)(t.placement),variation:(0,f.Z)(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:a,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,d(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:o,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,d(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}}},518:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(7987),a={passive:!0};const i={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,r=e.instance,i=e.options,o=i.scroll,s=void 0===o||o,p=i.resize,f=void 0===p||p,c=(0,n.Z)(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return s&&u.forEach((function(e){e.addEventListener("scroll",r.update,a)})),f&&c.addEventListener("resize",r.update,a),function(){s&&u.forEach((function(e){e.removeEventListener("scroll",r.update,a)})),f&&c.removeEventListener("resize",r.update,a)}},data:{}}},2678:(e,t,r)=>{r.d(t,{Z:()=>u});var n={left:"right",right:"left",bottom:"top",top:"bottom"};function a(e){return e.replace(/left|right|bottom|top/g,(function(e){return n[e]}))}var i=r(6411),o={start:"end",end:"start"};function s(e){return e.replace(/start|end/g,(function(e){return o[e]}))}var p=r(5831),f=r(2705),c=r(5816);const u={name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var o=r.mainAxis,u=void 0===o||o,d=r.altAxis,l=void 0===d||d,m=r.fallbackPlacements,v=r.padding,h=r.boundary,y=r.rootBoundary,b=r.altBoundary,Z=r.flipVariations,w=void 0===Z||Z,g=r.allowedAutoPlacements,x=t.options.placement,O=(0,i.Z)(x),j=m||(O!==x&&w?function(e){if((0,i.Z)(e)===c.d7)return[];var t=a(e);return[s(e),t,s(t)]}(x):[a(x)]),k=[x].concat(j).reduce((function(e,r){return e.concat((0,i.Z)(r)===c.d7?function(e,t){void 0===t&&(t={});var r=t,n=r.placement,a=r.boundary,o=r.rootBoundary,s=r.padding,u=r.flipVariations,d=r.allowedAutoPlacements,l=void 0===d?c.Ct:d,m=(0,f.Z)(n),v=m?u?c.bw:c.bw.filter((function(e){return(0,f.Z)(e)===m})):c.mv,h=v.filter((function(e){return l.indexOf(e)>=0}));0===h.length&&(h=v);var y=h.reduce((function(t,r){return t[r]=(0,p.Z)(e,{placement:r,boundary:a,rootBoundary:o,padding:s})[(0,i.Z)(r)],t}),{});return Object.keys(y).sort((function(e,t){return y[e]-y[t]}))}(t,{placement:r,boundary:h,rootBoundary:y,padding:v,flipVariations:w,allowedAutoPlacements:g}):r)}),[]),P=t.rects.reference,D=t.rects.popper,A=new Map,E=!0,B=k[0],F=0;F<k.length;F++){var I=k[F],M=(0,i.Z)(I),V=(0,f.Z)(I)===c.BL,$=[c.we,c.I].indexOf(M)>=0,L=$?"width":"height",q=(0,p.Z)(t,{placement:I,boundary:h,rootBoundary:y,altBoundary:b,padding:v}),R=$?V?c.F2:c.t$:V?c.I:c.we;P[L]>D[L]&&(R=a(R));var W=a(R),C=[];if(u&&C.push(q[M]<=0),l&&C.push(q[R]<=0,q[W]<=0),C.every((function(e){return e}))){B=I,E=!1;break}A.set(I,C)}if(E)for(var S=function(e){var t=k.find((function(t){var r=A.get(t);if(r)return r.slice(0,e).every((function(e){return e}))}));if(t)return B=t,"break"},z=w?3:1;z>0&&"break"!==S(z);z--);t.placement!==B&&(t.modifiersData[n]._skip=!0,t.placement=B,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}}},5282:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(5816),a=r(5831);function i(e,t,r){return void 0===r&&(r={x:0,y:0}),{top:e.top-t.height-r.y,right:e.right-t.width+r.x,bottom:e.bottom-t.height+r.y,left:e.left-t.width-r.x}}function o(e){return[n.we,n.F2,n.I,n.t$].some((function(t){return e[t]>=0}))}const s={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,r=e.name,n=t.rects.reference,s=t.rects.popper,p=t.modifiersData.preventOverflow,f=(0,a.Z)(t,{elementContext:"reference"}),c=(0,a.Z)(t,{altBoundary:!0}),u=i(f,n),d=i(c,s,p),l=o(u),m=o(d);t.modifiersData[r]={referenceClippingOffsets:u,popperEscapeOffsets:d,isReferenceHidden:l,hasPopperEscaped:m},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":m})}}},2299:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(6411),a=r(5816);const i={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,r=e.options,i=e.name,o=r.offset,s=void 0===o?[0,0]:o,p=a.Ct.reduce((function(e,r){return e[r]=function(e,t,r){var i=(0,n.Z)(e),o=[a.t$,a.we].indexOf(i)>=0?-1:1,s="function"==typeof r?r(Object.assign({},t,{placement:e})):r,p=s[0],f=s[1];return p=p||0,f=(f||0)*o,[a.t$,a.F2].indexOf(i)>=0?{x:f,y:p}:{x:p,y:f}}(r,t.rects,s),e}),{}),f=p[t.placement],c=f.x,u=f.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[i]=p}}},6949:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(8654);const a={name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,r=e.name;t.modifiersData[r]=(0,n.Z)({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}}},1455:(e,t,r)=>{r.d(t,{Z:()=>l});var n=r(5816),a=r(6411),i=r(2874),o=r(2834),s=r(3222),p=r(7315),f=r(5831),c=r(2705),u=r(7366),d=r(9496);const l={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,r=e.options,l=e.name,m=r.mainAxis,v=void 0===m||m,h=r.altAxis,y=void 0!==h&&h,b=r.boundary,Z=r.rootBoundary,w=r.altBoundary,g=r.padding,x=r.tether,O=void 0===x||x,j=r.tetherOffset,k=void 0===j?0:j,P=(0,f.Z)(t,{boundary:b,rootBoundary:Z,padding:g,altBoundary:w}),D=(0,a.Z)(t.placement),A=(0,c.Z)(t.placement),E=!A,B=(0,i.Z)(D),F="x"===B?"y":"x",I=t.modifiersData.popperOffsets,M=t.rects.reference,V=t.rects.popper,$="function"==typeof k?k(Object.assign({},t.rects,{placement:t.placement})):k,L="number"==typeof $?{mainAxis:$,altAxis:$}:Object.assign({mainAxis:0,altAxis:0},$),q=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,R={x:0,y:0};if(I){if(v){var W,C="y"===B?n.we:n.t$,S="y"===B?n.I:n.F2,z="y"===B?"height":"width",H=I[B],N=H+P[C],X=H-P[S],Y=O?-V[z]/2:0,_=A===n.BL?M[z]:V[z],G=A===n.BL?-V[z]:-M[z],K=t.elements.arrow,T=O&&K?(0,s.Z)(K):{width:0,height:0},J=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:(0,u.Z)(),Q=J[C],U=J[S],ee=(0,o.u)(0,M[z],T[z]),te=E?M[z]/2-Y-ee-Q-L.mainAxis:_-ee-Q-L.mainAxis,re=E?-M[z]/2+Y+ee+U+L.mainAxis:G+ee+U+L.mainAxis,ne=t.elements.arrow&&(0,p.Z)(t.elements.arrow),ae=ne?"y"===B?ne.clientTop||0:ne.clientLeft||0:0,ie=null!=(W=null==q?void 0:q[B])?W:0,oe=H+te-ie-ae,se=H+re-ie,pe=(0,o.u)(O?(0,d.VV)(N,oe):N,H,O?(0,d.Fp)(X,se):X);I[B]=pe,R[B]=pe-H}if(y){var fe,ce="x"===B?n.we:n.t$,ue="x"===B?n.I:n.F2,de=I[F],le="y"===F?"height":"width",me=de+P[ce],ve=de-P[ue],he=-1!==[n.we,n.t$].indexOf(D),ye=null!=(fe=null==q?void 0:q[F])?fe:0,be=he?me:de-M[le]-V[le]-ye+L.altAxis,Ze=he?de+M[le]+V[le]-ye-L.altAxis:ve,we=O&&he?(0,o.q)(be,de,Ze):(0,o.u)(O?be:me,de,O?Ze:ve);I[F]=we,R[F]=we-de}t.modifiersData[l]=R}},requiresIfExists:["offset"]}},5353:(e,t,r)=>{r.d(t,{fi:()=>m});var n=r(1734),a=r(518),i=r(6949),o=r(7959),s=r(908),p=r(2299),f=r(2678),c=r(1455),u=r(2155),d=r(5282),l=[a.Z,i.Z,o.Z,s.Z,p.Z,f.Z,c.Z,u.Z,d.Z],m=(0,n.kZ)({defaultModifiers:l})},8654:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(6411),a=r(2705),i=r(2874),o=r(5816);function s(e){var t,r=e.reference,s=e.element,p=e.placement,f=p?(0,n.Z)(p):null,c=p?(0,a.Z)(p):null,u=r.x+r.width/2-s.width/2,d=r.y+r.height/2-s.height/2;switch(f){case o.we:t={x:u,y:r.y-s.height};break;case o.I:t={x:u,y:r.y+r.height};break;case o.F2:t={x:r.x+r.width,y:d};break;case o.t$:t={x:r.x-s.width,y:d};break;default:t={x:r.x,y:r.y}}var l=f?(0,i.Z)(f):null;if(null!=l){var m="y"===l?"height":"width";switch(c){case o.BL:t[l]=t[l]-(r[m]/2-s[m]/2);break;case o.ut:t[l]=t[l]+(r[m]/2-s[m]/2)}}return t}},1838:(e,t,r)=>{function n(e){var t;return function(){return t||(t=new Promise((function(r){Promise.resolve().then((function(){t=void 0,r(e())}))}))),t}}r.d(t,{Z:()=>n})},5831:(e,t,r)=>{r.d(t,{Z:()=>d});var n=r(6576),a=r(7211),i=r(8995),o=r(8654),s=r(7700),p=r(5816),f=r(449),c=r(1706),u=r(5250);function d(e,t){void 0===t&&(t={});var r=t,d=r.placement,l=void 0===d?e.placement:d,m=r.boundary,v=void 0===m?p.zV:m,h=r.rootBoundary,y=void 0===h?p.Pj:h,b=r.elementContext,Z=void 0===b?p.k5:b,w=r.altBoundary,g=void 0!==w&&w,x=r.padding,O=void 0===x?0:x,j=(0,c.Z)("number"!=typeof O?O:(0,u.Z)(O,p.mv)),k=Z===p.k5?p.YP:p.k5,P=e.rects.popper,D=e.elements[g?k:Z],A=(0,n.Z)((0,f.kK)(D)?D:D.contextElement||(0,a.Z)(e.elements.popper),v,y),E=(0,i.Z)(e.elements.reference),B=(0,o.Z)({reference:E,element:P,strategy:"absolute",placement:l}),F=(0,s.Z)(Object.assign({},P,B)),I=Z===p.k5?F:E,M={top:A.top-I.top+j.top,bottom:I.bottom-A.bottom+j.bottom,left:A.left-I.left+j.left,right:I.right-A.right+j.right},V=e.modifiersData.offset;if(Z===p.k5&&V){var $=V[l];Object.keys(M).forEach((function(e){var t=[p.F2,p.I].indexOf(e)>=0?1:-1,r=[p.we,p.I].indexOf(e)>=0?"y":"x";M[e]+=$[r]*t}))}return M}},5250:(e,t,r)=>{function n(e,t){return t.reduce((function(t,r){return t[r]=e,t}),{})}r.d(t,{Z:()=>n})},6411:(e,t,r)=>{function n(e){return e.split("-")[0]}r.d(t,{Z:()=>n})},7366:(e,t,r)=>{function n(){return{top:0,right:0,bottom:0,left:0}}r.d(t,{Z:()=>n})},2874:(e,t,r)=>{function n(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}r.d(t,{Z:()=>n})},2705:(e,t,r)=>{function n(e){return e.split("-")[1]}r.d(t,{Z:()=>n})},9496:(e,t,r)=>{r.d(t,{Fp:()=>n,NM:()=>i,VV:()=>a});var n=Math.max,a=Math.min,i=Math.round},8859:(e,t,r)=>{function n(e){var t=e.reduce((function(e,t){var r=e[t.name];return e[t.name]=r?Object.assign({},r,t,{options:Object.assign({},r.options,t.options),data:Object.assign({},r.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}r.d(t,{Z:()=>n})},1706:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7366);function a(e){return Object.assign({},(0,n.Z)(),e)}},8178:(e,t,r)=>{r.d(t,{Z:()=>i});var n=r(5816);function a(e){var t=new Map,r=new Set,n=[];function a(e){r.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!r.has(e)){var n=t.get(e);n&&a(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){r.has(e.name)||a(e)})),n}function i(e){var t=a(e);return n.xs.reduce((function(e,r){return e.concat(t.filter((function(e){return e.phase===r})))}),[])}},7700:(e,t,r)=>{function n(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}r.d(t,{Z:()=>n})},2834:(e,t,r)=>{r.d(t,{q:()=>i,u:()=>a});var n=r(9496);function a(e,t,r){return(0,n.Fp)(e,(0,n.VV)(t,r))}function i(e,t,r){var n=a(e,t,r);return n>r?r:n}}}]);