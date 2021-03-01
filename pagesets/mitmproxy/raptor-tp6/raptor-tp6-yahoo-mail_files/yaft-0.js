"undefined"!=typeof window&&function(h,v){"use strict";if(void 0===h.YAFT){var T,S,r,o,a=!1,w=!1,i=!1,F=!1,A=(new Date).getTime(),n=!1,e=v.documentElement,C={usePrefixRegex:!0,useNormalizeCoverage:!0,canShowVisualReport:!0,useNativeStartRender:!0,useNativeStartRenderMeaningful:!1,generateHAR:!1,maxWaitTime:3e3,modules:[],modulesExclude:[],modulesAft2Container:[],customReportModules:[],includeOnlyAft2:!1,plugins:[],whiteListedContainerElements:["div","section","ul","ol","li","header"],customStartRender:!1,getAccurateFirstPaint:!1,fpsMinSampleCount:15,fpsMissLimit:18},E=0,P=0,R=0,y=[],N={},Y={},b=0,u={},M=0,s=0,x=0,l=0,d=0,c=!1,g=[];(T=z())&&T.timing&&(A=T.timing.navigationStart,T.now=T.now||T.webkitNow||T.msNow||T.mozNow||void 0,T.now&&(void 0===T.getEntriesByType&&void 0===T.webkitGetEntriesByType||void 0===T.getEntriesByName&&void 0===T.webkitGetEntriesByName||(w=!0),h.requestAnimationFrame&&h.cancelAnimationFrame&&(i=!0))),h.YAFT={data:[],triggerPerf:function(e,t){if(!n&&a){if(n=!0,!w)return t(null,"Nav or resource timing or both are not available"),!1;C.maxWaitTime&&0<C.maxWaitTime?l=setTimeout(function(){p(e,t)},C.maxWaitTime):p(e,t)}},triggerCustomTiming:function(e,t,n){if(!w)return!1;var r,o,i,a,s;YAFT.isInitialized()&&(S||(S=I()),(r=v.querySelector(YAFT.getModuleSelector(e,!1)))&&(o=YAFT.getModuleName(r),r.modName=o,-1===C.modulesExclude.indexOf(o)&&(Y[o]=r,a={modStart:t,modEnd:n},s=(i=r).modName,u[s]||(u[s]=m(i,a)))))},getFinalModulesReport:function(){return u},reset:function(){n=!(a=!0),Y=[],u={}},perfExists:function(){return w},isInitialized:function(){return a},getConfig:function(){return C},updateConfig:function(e){var t;for(t in e)C.hasOwnProperty(t)&&e.hasOwnProperty(t)&&"undefined"!==C[t]&&(C[t]=e[t])},getPerformance:z,init:function(e,t){if(this.reset(),!w)return t(null,"Nav or resource timing or both are not available"),!1;this.getQueryStrings().showaft&&(F=!0),this.updateConfig(e),T.timing.loadEventStart>T.timing.navigationStart?YAFT.triggerPerf("deferred",t):h.addEventListener?(h.addEventListener("load",function(){YAFT.triggerPerf("load",t)},!1),h.addEventListener("unload",function(){YAFT.triggerPerf("unload",t)},!1)):h.attachEvent&&(h.attachEvent("onload",function(){YAFT.triggerPerf("load",t)}),h.attachEvent("onunload",function(){YAFT.triggerPerf("unload",t)}))},AFT2:{start:function(){if(Y={},u={},s=0,!w||!a)return!1;!0===F&&C.canShowVisualReport&&h.YAFT_REPORT&&h.YAFT_REPORT.removeReport&&(h.YAFT_REPORT.removeExtras(),h.YAFT_REPORT.removeReport()),l&&clearTimeout(l),d&&clearTimeout(d);try{T.clearResourceTimings?T.clearResourceTimings():T.webkitClearResourceTimings&&T.webkitClearResourceTimings()}catch(e){}M=T.now(),M+A},setAFT2StartRender:function(){if(!w||!a)return!1;0===s&&(s=T.now())},end:function(e){var t={},n={},r={},o={},i=0;if(!w||!a)return e(null,"Nav or resource timing or both are not available or YAFT is not initialized"),!1;s||(s=T.now()),x=s-M,C.maxWaitTime&&0<C.maxWaitTime&&(d=setTimeout(function(){S||(S=I()),N=L(),i=YAFT.getDomElementsCount(),k(C.modules,C.modulesExclude,C.modulesAft2Container),q(Y,C.includeOnlyAft2),r=YAFT.getFinalModulesReport(),P=V(r),n=W(r),R=n.normTotalCoveragePercentage,b=B(n.aftIntervals),C.generateHAR&&(o=D(N)),t={aft:n.aft,startRender:x,event:"aft2",modulesReport:r,totalCoveragePercentage:P,normTotalCoveragePercentage:R,domElementsCount:i,resources:N,har:o,visuallyComplete:b},e&&e(t),YAFT.data.push(t),!0===F&&C.canShowVisualReport&&h.YAFT_REPORT&&h.YAFT_REPORT.drawReport&&h.YAFT_REPORT.drawReport(t,n.aftIntervals)},C.maxWaitTime))}},FPS:{start:function(e){if(!i)return!1;c=!1,o&&h.cancelAnimationFrame(o),r=e,g.length=0,c=!0,o=h.requestAnimationFrame(t)},stop:function(e,t){var n;return c=!1,i?(o&&h.cancelAnimationFrame(o),r!==e?(t&&t("FPS stop action cannot be different than start action"),!1):((n=f()).action=e,n.avgFps?(t&&t(null,n),YAFT.logToConsole(n),n):(t&&t("FPS is not available"),!1))):(t&&t("FPS is not available for this browser"),!1)}},getDomElementsCount:function(){return v.getElementsByTagName("*").length},getTTFB:function(){return w?T.timing.responseStart-A:0},getPageLoadTime:function(){return w?T.timing.loadEventStart-A:0},getDomContentLoaded:function(){return w?T.timing.domContentLoadedEventStart-A:0},getStartRenderTime:function(){var e,t,n,r,o,i;if(!w)return 0;if(C.customStartRender&&"function"==typeof C.customStartRender)return C.customStartRender();if(e=this.getDomContentLoaded(),(o=h.performance.getEntriesByType("paint"))&&o.length&&0<o.length){if(C.useNativeStartRenderMeaningful)for(i=0;i<o.length;i+=1)if("first-contentful-paint"===o[i].name){t=o[i].startTime;break}if(void 0===t)for(i=0;i<o.length;i+=1)if("first-paint"===o[i].name){t=o[i].startTime;break}}if(void 0===t&&("msFirstPaint"in h.performance.timing?t=h.performance.timing.msFirstPaint-A:"chrome"in h&&"loadTimes"in h.chrome&&h.chrome.loadTimes&&"firstPaintTime"in(n=h.chrome.loadTimes())&&0<n.firstPaintTime&&(r=n.startLoadTime,"requestTime"in n&&0<n.requestTime&&(r=n.requestTime),n.firstPaintTime>=r&&(t=1e3*(n.firstPaintTime-r)))),!0===C.getAccurateFirstPaint&&(void 0===t||t<0||12e4<t)){t=h.performance.timing.responseStart-A;for(var a={},s=v.getElementsByTagName("head")[0].children,u=0;u<s.length;u++){var l=s[u];"SCRIPT"===l.tagName&&l.src&&!l.async&&(a[l.src]=!0),"LINK"===l.tagName&&"stylesheet"===l.rel&&l.href&&(a[l.href]=!0)}for(var d=h.performance.getEntriesByType("resource"),c=!1,g=0;g<d.length;g++)if(c||!a[d[g].name]||"script"!==d[g].initiatorType&&"link"!==d[g].initiatorType)c=!0;else{var m=d[g].responseEnd;(void 0===t||t<m)&&(t=m)}}return void 0===t||t<0||12e4<t&&e<t?e:t},getDomInteractive:function(){return w?T.timing.domInteractive-A:0},getNow:function(){return w?T.now():0},getQueryStrings:function(){var e={},t="",n=h.location.search.slice(1).split("&"),r=0,o=n.length||0;for(r=0;r<o;r+=1)e[(t=n[r].split("="))[0]]=t[1]||"";return e},getViewport:function(){return S},getVersion:function(){return"0.3.16"},logToConsole:function(e){w&&F&&console&&console.log&&console.log(e)},getModuleSelector:function(e,t){for(var n=[],r=t?"^":"",o=t?"*":"",i=0,a=C.whiteListedContainerElements.length;i<a;i++)n.push(C.whiteListedContainerElements[i]+"[id"+r+'="'+e+'"]');return n.push(o+"[data-yaft-module"+r+'="'+e+'"]'),n.join(",")},getModuleName:function(e){return e.id||e.getAttribute("data-yaft-module")||void 0},getElemResourceUrl:function(e){var t,n="",r=[];return"VIDEO"===e.nodeName||(e.src?n=e.src:(t=e.currentStyle||window.getComputedStyle(e,!1))&&t.backgroundImage&&(r=t.backgroundImage.match(/url\((["']{0,1})([^'"]+)\1\)$/))&&3===r.length&&(n=r[2])),n}}}function D(e){var t,n,r,o,i,a=navigator.userAgent,s=navigator.appVersion,u=T.timing,l=u.navigationStart,d=0,c=0,g=0,m=0,f=-1,p=0,h=0;for(o={log:{version:"1.2",creator:{name:"YAFT",version:"0.1.0"},browser:{name:a,version:s},pages:[{startedDateTime:new Date(l).toISOString(),id:"Page_1",title:v.location.href,pageTimings:{onContentLoad:u.domInteractive-l,onLoad:u.loadEventStart-l}}],entries:[],comment:""}},i=0;i<e.length;i+=1)t=e[i],n=new Date(Math.round(l+t.start)),d=Math.round(t.dnsDuration),c=Math.round(t.tcpDuration),f=Math.round(t.sslDuration),g=Math.round(t.responseStart-t.requestStart),m=Math.round(t.responseDuration),p=Math.round(t.duration)-d-c-g-m,h=Math.round(t.duration),p<0&&(h-=p,p=0),r={pageref:"Page_1",startedDateTime:n.toISOString(),time:h,request:{method:"GET",url:t.url,httpVersion:"HTTP/1.1",cookies:[],headers:[],queryString:[],headersSize:-1,bodySize:-1},response:{status:"200",statusText:"OK",httpVersion:"HTTP/1.0",cookies:[],headers:[],content:{size:-1,compression:0,mimeType:""},redirectURL:"",headersSize:-1,bodySize:-1},cache:{},timings:{blocked:-1,dns:d,connect:c,send:g,ssl:f,wait:p,receive:m}},o.log.entries.push(r);return o}function L(){var e,t,n,r,o=[],i=0,a=[];for(o.push((r=T.timing,{url:v.location.href,start:0,duration:r.responseEnd-r.navigationStart,durationFromNStart:r.responseEnd-r.navigationStart,redirectStart:0===r.redirectStart?0:r.redirectStart-r.navigationStart,redirectDuration:r.redirectEnd-r.redirectStart,appCacheStart:0,appCacheDuration:0,dnsStart:r.domainLookupStart-r.navigationStart,dnsDuration:r.domainLookupEnd-r.domainLookupStart,tcpStart:r.connectStart-r.navigationStart,tcpDuration:r.connectEnd-r.connectStart,sslStart:0<r.secureConnectionStart?r.secureConnectionStart-r.connectStart:0,sslDuration:0<r.secureConnectionStart?r.connectEnd-r.secureConnectionStart:-1,requestStart:r.requestStart-r.navigationStart,requestDuration:r.responseStart-r.requestStart,responseStart:r.responseStart-r.navigationStart,responseDuration:r.responseEnd-r.responseStart})),a=T.getEntriesByType("resource"),e=0;e<a.length;e+=1)"document"!==a[e].name&&o.push(O(a[e]));if((n=document.getElementsByTagName("iframe"))&&n.length){for(t=0;t<n.length;t+=1)try{for(a=n[t].contentWindow.performance.getEntriesByType("resource"),i=n[t].contentWindow.performance.timing.navigationStart-T.timing.navigationStart,e=0;e<a.length;e+=1)"document"!==a[e].name&&o.push(O(a[e],i))}catch(e){}o.sort(function(e,t){return e.start-t.start})}return o}function O(e,t){return t&&0<t||(t=0),{url:e.name,start:e.startTime+t,duration:e.duration,durationFromNStart:0<e.duration?e.duration+e.startTime+t:e.startTime+t,redirectStart:e.redirectStart+t,redirectDuration:e.redirectEnd-e.redirectStart,appCacheStart:0,appCacheDuration:0,dnsStart:e.domainLookupStart+t,dnsDuration:e.domainLookupEnd-e.domainLookupStart,tcpStart:e.connectStart+t,tcpDuration:e.connectEnd-e.connectStart,sslStart:0<e.secureConnectionStart?e.secureConnectionStart-e.connectStart:0,sslDuration:0<e.secureConnectionStart?e.connectEnd-e.secureConnectionStart:-1,requestStart:e.requestStart+t,requestDuration:e.responseStart-e.requestStart,responseStart:e.responseStart+t,responseDuration:0===e.responseStart?0:e.responseEnd-e.responseStart}}function I(){return{win:h,doc:v,docElem:e,viewportWidth:e.clientWidth<h.innerWidth?h.innerWidth:e.clientWidth,viewportHeight:e.clientHeight<h.innerHeight?h.innerHeight:e.clientHeight,getScrollXY:function(){return{x:h.scrollX||h.pageXOffset,y:h.scrollY||h.pageYOffset}},getViewportArea:function(){return this.viewportWidth*this.viewportHeight},getElementBounds:function(e){var t,n=e,r=this.getScrollXY();return(t=function e(t){var n,r={};for(n in t)"object"==typeof t[n]&&null!==t[n]?r[n]=e(t[n]):r[n]=t[n];return r}(n.getBoundingClientRect())).top=t.top+r.y,t.bottom=t.bottom+r.y,t.left=t.left+r.x,t.right=t.right+r.x,t},isInViewport:function(e){var t=this.getElementBounds(e);return t.top<this.viewportHeight&&t.left<this.viewportWidth&&0<=t.bottom&&0<=t.right&&this.isVisible(e)},isVisible:function(e){var t=!0,n=e;if(t=t&&0<n.offsetWidth&&0<n.offsetHeight)for(;"BODY"!==n.tagName&&t;)t=t&&"hidden"!==h.getComputedStyle(n).visibility,n=n.parentElement;return t},getElementCoverage:function(e){var t=this.getElementBounds(e);return(t.right<0?0:t.right>this.viewportWidth?0<=t.left?this.viewportWidth-t.left:this.viewportWidth:t.left<0&&0<t.right?t.right:t.width)*(t.bottom<0?0:t.bottom>this.viewportHeight?0<=t.top?this.viewportHeight-t.top:this.viewportHeight:t.top<0&&0<t.bottom?t.bottom:t.height)},getElementPercentage:function(e){var t=100*this.getElementCoverage(e)/this.getViewportArea();return 0<Math.round(t)?t:0}}}function k(e,t,n){var r,o,i,a,s,u="",l=!1,d=[];for(e=e||[],t&&!n?d=t:!t&&n?d=n:t&&n&&(d=t.concat(n)),d&&d.length?d.length:0,r=0,s=e.length;r<s;r+=1)for(i=e[r],o=(a=v.querySelectorAll(YAFT.getModuleSelector(i,C.usePrefixRegex))).length-1;0<=o;o--)u=YAFT.getModuleName(a[o]),l=!1,-1!==d.indexOf(u)&&(l=!0),l||Y[u]||(a[o].modName=u,Y[u]=a[o]);return Y}function q(e,t){var n,r;for(r in e)e.hasOwnProperty(r)&&(u[r]||(n=m(e[r]),t?n.isAft2Module&&(u[r]=n):u[r]=n));return u}function m(e,t){var n,r,o,i,a=!1,s=function(e,t){for(var n=!1;t.parentNode;){if(t.parentNode.id&&-1!==e.indexOf(t.parentNode.id)){n=!0;break}t=t.parentNode}return n}(C.modulesAft2Container,e),u=C.customReportModules&&-1!==C.customReportModules.indexOf(e.modName),l=[],d=T.now(),c=s?d-M:d,g=M?x:C.useNativeStartRender?E||YAFT.getStartRenderTime():w?T.timing.domContentLoadedEventStart-A:0,m=u?c:g,f=e.querySelectorAll("div, img, a, video, span, ul, li, figure"),p=f.length;if(t)a=!0,g=t.modStart?t.modStart:g,m=t.modEnd?t.modEnd:m,M&&(M<g?g-=M:g=0,M<m?m-=M:m=0);else if(0<M&&!s)m=g=0;else if(u)a=!0;else{if((o=YAFT.getElemResourceUrl(e))&&(i=T.getEntriesByName(o))&&i.length&&0<i.length&&S.isInViewport(e)&&l.push(O(i[0])),f&&0<p)for(n=0;n<p;n+=1)r=f[n],(o=YAFT.getElemResourceUrl(r))&&(i=T.getEntriesByName(o))&&i.length&&0<i.length&&S.isInViewport(r)&&l.push(O(i[0]));if(0<(p=l.length))for(n=0;n<p;n+=1)0<M&&s&&(l[n].start-=M,l[n].durationFromNStart-=M,l[n].start<=0&&(l[n].start=g),l[n].durationFromNStart<=0&&(l[n].durationFromNStart=m)),l[n].start>g&&(g=l[n].start),l[n].durationFromNStart>m&&(m=l[n].durationFromNStart)}return{isCustom:a,isAft2Module:s,start:g,loadTime:m,name:e.modName,resources:l,inViewPort:S.isInViewport(e),coverageArea:S.getElementCoverage(e),coveragePercentage:S.getElementPercentage(e)}}function V(e){var t,n=0,r=0;for(t in e)e.hasOwnProperty(t)&&(n=e[t].coveragePercentage,e[t].inViewPort&&0<Math.round(n)&&(r+=n));return r}function B(e){var t,n=e.length;for(t=0;t<n;t+=1)if(C.useNormalizeCoverage){if(Math.round(e[t])===Math.round(R))return 100*t}else if(Math.round(e[t])===Math.round(P))return 100*t;return 0}function W(e){var t,n,r=0,o=T.now()-M,i=Math.floor(o/100),a=new Array(i),s=0;for(t=0;t<i;t+=1)a[t]=0;for(n in t=0,e)e.hasOwnProperty(n)&&e[n].inViewPort&&0<Math.round(e[n].coveragePercentage)&&(C.useNormalizeCoverage&&(e[n].normCoveragePercentage=e[n].coveragePercentage/P*100,s+=e[n].normCoveragePercentage),0<=e[n].loadTime&&(a[t=Math.round(e[n].loadTime/100)]+=C.useNormalizeCoverage?e[n].normCoveragePercentage:e[n].coveragePercentage));for(C.useNormalizeCoverage?r+=s-a[0]:r+=P-a[0],t=1;t<i;t+=1)a[t]=a[t-1]+a[t],C.useNormalizeCoverage?r+=s-a[t]:r+=P-a[t];return{aft:r,aftIntervals:a,normTotalCoveragePercentage:s}}function f(){var e,t,n,r,o,i,a=0,s=g.length,u={median:NaN,worse:NaN,avgFps:NaN,stdev:NaN,miss:NaN,sample:NaN};return 0===s||s<=C.fpsMinSampleCount||(u.sample=s,t=(g[s-1]-g[0])/(s-1),u.avgFps=Math.round(1e3/t),60<u.avgFps&&(u.avgFps=60),(e=g.map(function(e,t){if(0===t)return NaN;var n=e-g[t-1];return n>C.fpsMissLimit&&a++,n})).shift(),u.miss=a,u.stdev=(r=t,i=(o=e.map(function(e){var t=e-r;return t*t})).reduce(function(e,t){return e+t},0)/o.length,Math.sqrt(i)),e.sort(function(e,t){return e-t}),u.worse=e[e.length-1],n=Math.floor(e.length/2),e.length%2?u.median=e[n]:u.median=(e[n-1]+e[n])/2),u}function t(){g.push(T.now()),c&&g.length<300&&(o=h.requestAnimationFrame(t))}function p(e,t){var n,r,o,i,a,s=YAFT.getPageLoadTime(),u=YAFT.getDomContentLoaded(),l=YAFT.getDomElementsCount(),d=YAFT.getTTFB(),c=YAFT.getDomInteractive(),g={},m=[],f=[];if(E=YAFT.getStartRenderTime(),(N=L())&&N.length&&0<N.length){if(C.plugins)for(a=0;a<C.plugins.length;a+=1)window["yaft_"+C.plugins[a].name]&&window["yaft_"+C.plugins[a].name].execute?C.plugins[a].isPre?(m.push(C.plugins[a]),YAFT.logToConsole("YAFT plugin "+C.plugins[a].name+" will be executed before the callback")):(f.push(C.plugins[a]),YAFT.logToConsole("YAFT plugin "+C.plugins[a].name+" will be executed after the callback")):YAFT.logToConsole("YAFT plugin "+C.plugins[a].name+" not found or it does not have execute method");var p;for(S||(S=I()),k(C.modules,C.modulesExclude,C.modulesAft2Container),q(Y),o=YAFT.getFinalModulesReport(),P=V(o),r=W(o),R=r.normTotalCoveragePercentage,(p=N.slice(0)).sort(function(e,t){return t.duration-e.duration}),i=function(e){var t={},n=0,r=0,o=YAFT.getPageLoadTime(),i=0,a=0;for(t.count=e.length,n=0;n<t.count;n+=1)e[n].start<=o&&(i+=1),e[n].duration<=0&&(r+=1,e[n].start<=o&&(a+=1));return t.cached=r,t.nonCached=t.count-r,t.onloadCount=i,t.onloadCached=a,t.onloadNonCached=i-a,t}(y=p),b=B(r.aftIntervals),C.generateHAR&&(g=D(N)),n={aft:r.aft,pageLoadTime:s,startRender:E,domInteractive:c,domContentLoaded:u,ttfb:d,event:e,modulesReport:o,totalCoveragePercentage:P,normTotalCoveragePercentage:R,domElementsCount:l,resources:N,har:g,costlyResources:y,httpRequests:i,visuallyComplete:b},a=0;a<m.length;a+=1)try{window["yaft_"+m[a].name].execute(m[a].config,n)}catch(e){YAFT.logToConsole("YAFT plugin "+m[a].name+" failed to execute"),YAFT.logToConsole(e)}for(t&&(YAFT.logToConsole(n),YAFT.logToConsole(r.aftIntervals),t(n)),YAFT.data.push(n),a=0;a<f.length;a+=1)try{window["yaft_"+f[a].name].execute(f[a].config,n)}catch(e){YAFT.logToConsole("YAFT plugin "+f[a].name+" failed to execute"),YAFT.logToConsole(e)}!0===F&&C.canShowVisualReport&&h.YAFT_REPORT&&h.YAFT_REPORT.drawReport&&h.YAFT_REPORT.drawReport(n,r.aftIntervals)}else t(null,"No timings available")}function z(){return h.performance||h.webkitPerformance||h.msPerformance||h.mozPerformance||h.Performance}}(window,document),"undefined"!=typeof module&&module.exports&&("undefined"!=typeof window?module.exports=window.YAFT:module.exports=!1);