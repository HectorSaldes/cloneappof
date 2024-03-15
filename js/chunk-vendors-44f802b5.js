"use strict";(self.webpackChunkof_vue=self.webpackChunkof_vue||[]).push([[70934],{227777:function(t,e,n){function r(){var t=window.navigator.userAgent,e=t.indexOf("MSIE "),n;if(e>0)return parseInt(t.substring(e+5,t.indexOf(".",e)),10);if(t.indexOf("Trident/")>0){var r=t.indexOf("rv:");return parseInt(t.substring(r+3,t.indexOf(".",r)),10)}var o=t.indexOf("Edge/");return o>0?parseInt(t.substring(o+5,t.indexOf(".",o)),10):-1}n.d(e,{do:function(){return a}});var o=void 0;function i(){i.init||(i.init=!0,o=-1!==r())}var a={render:function t(){var e=this,n=e.$createElement,r;return(e._self._c||n)("div",{staticClass:"resize-observer",attrs:{tabindex:"-1"}})},staticRenderFns:[],_scopeId:"data-v-b329ee4c",name:"resize-observer",methods:{compareAndNotify:function t(){this._w===this.$el.offsetWidth&&this._h===this.$el.offsetHeight||(this._w=this.$el.offsetWidth,this._h=this.$el.offsetHeight,this.$emit("notify"))},addResizeHandlers:function t(){this._resizeObject.contentDocument.defaultView.addEventListener("resize",this.compareAndNotify),this.compareAndNotify()},removeResizeHandlers:function t(){this._resizeObject&&this._resizeObject.onload&&(!o&&this._resizeObject.contentDocument&&this._resizeObject.contentDocument.defaultView.removeEventListener("resize",this.compareAndNotify),delete this._resizeObject.onload)}},mounted:function t(){var e=this;i(),this.$nextTick((function(){e._w=e.$el.offsetWidth,e._h=e.$el.offsetHeight}));var n=document.createElement("object");this._resizeObject=n,n.setAttribute("aria-hidden","true"),n.setAttribute("tabindex",-1),n.onload=this.addResizeHandlers,n.type="text/html",o&&this.$el.appendChild(n),n.data="about:blank",o||this.$el.appendChild(n)},beforeDestroy:function t(){this.removeResizeHandlers()}};function s(t){t.component("resize-observer",a),t.component("ResizeObserver",a)}var u={version:"0.4.5",install:s},c=null;"undefined"!=typeof window?c=window.Vue:void 0!==n.g&&(c=n.g.Vue),c&&c.use(u);var f=null},434573:function(t,e,n){var r="undefined"!=typeof window,o=r&&navigator.connection,i=r&&(!o||-1===(o.effectiveType||"").indexOf("2g")&&!o.saveData),a=r&&window.IntersectionObserver,s={};function u(t){if(r){var e=document.createElement("link");return e.relList&&e.relList.supports&&e.relList.supports(t)}}function c(t){return new Promise((function(e,n){var r=document.createElement("link");r.rel="prefetch",r.href=t,r.addEventListener("load",e),r.addEventListener("error",n),document.head.appendChild(r)}))}function f(t){return new Promise((function(e,n){var r=new XMLHttpRequest;r.open("GET",t,r.withCredentials=!0),r.addEventListener("load",(function(){200===r.status?e():n()})),r.send()}))}function h(t){return self.fetch?fetch(t,{credentials:"include"}):f(t)}var p=u("prefetch")?c:f;function l(t,e){if(i&&!s[t])return(e?h:p)(t).then((function(){s[t]=!0}))}function d(t,e){void 0===e&&(e={});var n=e.componentName;void 0===n&&(n="RouterLink");var o=e.prefetch;void 0===o&&(o=!0);var s=a&&new window.IntersectionObserver((function(t){t.forEach((function(t){t.isIntersecting&&t.target._linkPrefetch()}))})),u=r&&window.requestIdleCallback||function(t,e){var n=e.timeout;void 0===n&&(n=1);var r=Date.now();return setTimeout((function(){t({didTimeout:!1,timeRemaining:function t(){return Math.max(0,50-(Date.now()-r))}})}),n)},c;var f={name:n,extends:t.component("RouterLink")||t.component("router-link"),props:{prefetch:{type:Boolean,default:o},prefetchFiles:{type:Array},timeout:{type:Number,default:2e3}},mounted:function t(){this.prefetch&&s&&i&&u(this.observe,{timeout:this.timeout})},beforeDestroy:function t(){this.unobserve()},methods:{observe:function t(){s.observe(this.$el),this.$el._linkPrefetch=this.linkPrefetch,this._linkObserved=!0},unobserve:function t(){this._linkObserved&&s.unobserve(this.$el)},getComponents:function t(){return this.$router.getMatchedComponents(this.to).filter((function(t){return"function"==typeof t&&void 0===t.cid}))},linkPrefetch:function t(){var e,n=this.$router.resolve(this.to).route;if(!n.meta.__prefetched){if(n.meta.__prefetched=!0,!1!==n.meta.prefetch)for(var r,o=0,i=this.getComponents();o<i.length;o+=1){var a=i[o];this.$emit("prefetch",this.to),a()}"function"==typeof n.meta.prefetch&&n.meta.prefetch(n);var s=(this.prefetchFiles||[]).concat(n.meta.prefetchFiles||[]);if(s.length>0)for(var u=0,c=s;u<c.length;u+=1){var f;l(c[u])}this.unobserve()}}}};t.component(f.name,f)}e.ZP=d},578345:function(t,e,n){
/*!
  * vue-router v3.6.5
  * (c) 2022 Evan You
  * @license MIT
  */
function r(t,e){if(!t)throw new Error("[vue-router] "+e)}function o(t,e){t||"undefined"!=typeof console&&console.warn("[vue-router] "+e)}function i(t,e){for(var n in e)t[n]=e[n];return t}n.d(e,{ZP:function(){return Ae}});var a=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},u=/%2C/g,c=function(t){return encodeURIComponent(t).replace(a,s).replace(u,",")};function f(t){try{return decodeURIComponent(t)}catch(e){0}return t}function h(t,e,n){void 0===e&&(e={});var r=n||l,o;try{o=r(t||"")}catch(s){o={}}for(var i in e){var a=e[i];o[i]=Array.isArray(a)?a.map(p):p(a)}return o}var p=function(t){return null==t||"object"==typeof t?t:String(t)};function l(t){var e={};return(t=t.trim().replace(/^(\?|#|&)/,""))?(t.split("&").forEach((function(t){var n=t.replace(/\+/g," ").split("="),r=f(n.shift()),o=n.length>0?f(n.join("=")):null;void 0===e[r]?e[r]=o:Array.isArray(e[r])?e[r].push(o):e[r]=[e[r],o]})),e):e}function d(t){var e=t?Object.keys(t).map((function(e){var n=t[e];if(void 0===n)return"";if(null===n)return c(e);if(Array.isArray(n)){var r=[];return n.forEach((function(t){void 0!==t&&(null===t?r.push(c(e)):r.push(c(e)+"="+c(t)))})),r.join("&")}return c(e)+"="+c(n)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var v=/\/?$/;function y(t,e,n,r){var o=r&&r.options.stringifyQuery,i=e.query||{};try{i=m(i)}catch(s){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:w(e,o),matched:t?b(t):[]};return n&&(a.redirectedFrom=w(n,o)),Object.freeze(a)}function m(t){if(Array.isArray(t))return t.map(m);if(t&&"object"==typeof t){var e={};for(var n in t)e[n]=m(t[n]);return e}return t}var g=y(null,{path:"/"});function b(t){for(var e=[];t;)e.unshift(t),t=t.parent;return e}function w(t,e){var n=t.path,r=t.query;void 0===r&&(r={});var o=t.hash,i;return void 0===o&&(o=""),(n||"/")+(e||d)(r)+o}function x(t,e,n){return e===g?t===e:!!e&&(t.path&&e.path?t.path.replace(v,"")===e.path.replace(v,"")&&(n||t.hash===e.hash&&k(t.query,e.query)):!(!t.name||!e.name)&&(t.name===e.name&&(n||t.hash===e.hash&&k(t.query,e.query)&&k(t.params,e.params))))}function k(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var n=Object.keys(t).sort(),r=Object.keys(e).sort();return n.length===r.length&&n.every((function(n,o){var i=t[n],a;if(r[o]!==n)return!1;var s=e[n];return null==i||null==s?i===s:"object"==typeof i&&"object"==typeof s?k(i,s):String(i)===String(s)}))}function R(t,e){return 0===t.path.replace(v,"/").indexOf(e.path.replace(v,"/"))&&(!e.hash||t.hash===e.hash)&&E(t.query,e.query)}function E(t,e){for(var n in e)if(!(n in t))return!1;return!0}function _(t){for(var e=0;e<t.matched.length;e++){var n=t.matched[e];for(var r in n.instances){var o=n.instances[r],i=n.enteredCbs[r];if(o&&i){delete n.enteredCbs[r];for(var a=0;a<i.length;a++)o._isBeingDestroyed||i[a](o)}}}}var O={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function t(e,n){var r=n.props,o=n.children,a=n.parent,s=n.data;s.routerView=!0;for(var u=a.$createElement,c=r.name,f=a.$route,h=a._routerViewCache||(a._routerViewCache={}),p=0,l=!1;a&&a._routerRoot!==a;){var d=a.$vnode?a.$vnode.data:{};d.routerView&&p++,d.keepAlive&&a._directInactive&&a._inactive&&(l=!0),a=a.$parent}if(s.routerViewDepth=p,l){var v=h[c],y=v&&v.component;return y?(v.configProps&&C(y,s,v.route,v.configProps),u(y,s,o)):u()}var m=f.matched[p],g=m&&m.components[c];if(!m||!g)return h[c]=null,u();h[c]={component:g},s.registerRouteInstance=function(t,e){var n=m.instances[c];(e&&n!==t||!e&&n===t)&&(m.instances[c]=e)},(s.hook||(s.hook={})).prepatch=function(t,e){m.instances[c]=e.componentInstance},s.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[c]&&(m.instances[c]=t.componentInstance),_(f)};var b=m.props&&m.props[c];return b&&(i(h[c],{route:f,configProps:b}),C(g,s,f,b)),u(g,s,o)}};function C(t,e,n,r){var o=e.props=A(n,r);if(o){o=e.props=i({},o);var a=e.attrs=e.attrs||{};for(var s in o)t.props&&s in t.props||(a[s]=o[s],delete o[s])}}function A(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0}}function $(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var o=e.split("/");n&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var s=i[a];".."===s?o.pop():"."!==s&&o.push(s)}return""!==o[0]&&o.unshift(""),o.join("/")}function j(t){var e="",n="",r=t.indexOf("#");r>=0&&(e=t.slice(r),t=t.slice(0,r));var o=t.indexOf("?");return o>=0&&(n=t.slice(o+1),t=t.slice(0,o)),{path:t,query:n,hash:e}}function L(t){return t.replace(/\/(?:\s*\/)+/g,"/")}var P=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},T=Z,S=M,z=N,q=B,I=Y,H=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(t,e){for(var n=[],r=0,o=0,i="",a=e&&e.delimiter||"/",s;null!=(s=H.exec(t));){var u=s[0],c=s[1],f=s.index;if(i+=t.slice(o,f),o=f+u.length,c)i+=c[1];else{var h=t[o],p=s[2],l=s[3],d=s[4],v=s[5],y=s[6],m=s[7];i&&(n.push(i),i="");var g=null!=p&&null!=h&&h!==p,b="+"===y||"*"===y,w="?"===y||"*"===y,x=s[2]||a,k=d||v;n.push({name:l||r++,prefix:p||"",delimiter:x,optional:w,repeat:b,partial:g,asterisk:!!m,pattern:k?F(k):m?".*":"[^"+D(x)+"]+?"})}}return o<t.length&&(i+=t.substr(o)),i&&n.push(i),n}function N(t,e){return B(M(t,e),e)}function U(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function V(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function B(t,e){for(var n=new Array(t.length),r=0;r<t.length;r++)"object"==typeof t[r]&&(n[r]=new RegExp("^(?:"+t[r].pattern+")$",W(e)));return function(e,r){for(var o="",i=e||{},a,s=(r||{}).pretty?U:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var f=i[c.name],h;if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(P(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var p=0;p<f.length;p++){if(h=s(f[p]),!n[u].test(h))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(h)+"`");o+=(0===p?c.prefix:c.delimiter)+h}}else{if(h=c.asterisk?V(f):s(f),!n[u].test(h))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+h+'"');o+=c.prefix+h}}else o+=c}return o}}function D(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function F(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function K(t,e){return t.keys=e,t}function W(t){return t&&t.sensitive?"":"i"}function J(t,e){var n=t.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)e.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return K(t,e)}function X(t,e,n){for(var r=[],o=0;o<t.length;o++)r.push(Z(t[o],e,n).source);var i;return K(new RegExp("(?:"+r.join("|")+")",W(n)),e)}function Q(t,e,n){return Y(M(t,n),e,n)}function Y(t,e,n){P(e)||(n=e||n,e=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,i="",a=0;a<t.length;a++){var s=t[a];if("string"==typeof s)i+=D(s);else{var u=D(s.prefix),c="(?:"+s.pattern+")";e.push(s),s.repeat&&(c+="(?:"+u+c+")*"),i+=c=s.optional?s.partial?u+"("+c+")?":"(?:"+u+"("+c+"))?":u+"("+c+")"}}var f=D(n.delimiter||"/"),h=i.slice(-f.length)===f;return r||(i=(h?i.slice(0,-f.length):i)+"(?:"+f+"(?=$))?"),i+=o?"$":r&&h?"":"(?="+f+"|$)",K(new RegExp("^"+i,W(n)),e)}function Z(t,e,n){return P(e)||(n=e||n,e=[]),n=n||{},t instanceof RegExp?J(t,e):P(t)?X(t,e,n):Q(t,e,n)}T.parse=S,T.compile=z,T.tokensToFunction=q,T.tokensToRegExp=I;var G=Object.create(null);function tt(t,e,n){e=e||{};try{var r=G[t]||(G[t]=T.compile(t));return"string"==typeof e.pathMatch&&(e[0]=e.pathMatch),r(e,{pretty:!0})}catch(o){return""}finally{delete e[0]}}function et(t,e,n,r){var o="string"==typeof t?{path:t}:t;if(o._normalized)return o;if(o.name){var a=(o=i({},t)).params;return a&&"object"==typeof a&&(o.params=i({},a)),o}if(!o.path&&o.params&&e){(o=i({},o))._normalized=!0;var s=i(i({},e.params),o.params);if(e.name)o.name=e.name,o.params=s;else if(e.matched.length){var u=e.matched[e.matched.length-1].path;o.path=tt(u,s,"path "+e.path)}else 0;return o}var c=j(o.path||""),f=e&&e.path||"/",p=c.path?$(c.path,f,n||o.append):f,l=h(c.query,o.query,r&&r.options.parseQuery),d=o.hash||c.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:p,query:l,hash:d}}var nt,rt,ot=function(){},it,at,st,ut={name:"RouterLink",props:{to:{type:[String,Object],required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:[String,Array],default:"click"}},render:function t(e){var n=this,r=this.$router,o=this.$route,a=r.resolve(this.to,o,this.append),s=a.location,u=a.route,c=a.href,f={},h=r.options.linkActiveClass,p=r.options.linkExactActiveClass,l=null==h?"router-link-active":h,d=null==p?"router-link-exact-active":p,v=null==this.activeClass?l:this.activeClass,m=null==this.exactActiveClass?d:this.exactActiveClass,g=u.redirectedFrom?y(null,et(u.redirectedFrom),null,r):u;f[m]=x(o,g,this.exactPath),f[v]=this.exact||this.exactPath?f[m]:R(o,g);var b=f[m]?this.ariaCurrentValue:null,w=function(t){ft(t)&&(n.replace?r.replace(s,ot):r.push(s,ot))},k={click:ft};Array.isArray(this.event)?this.event.forEach((function(t){k[t]=w})):k[this.event]=w;var E={class:f},_=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:u,navigate:w,isActive:f[v],isExactActive:f[m]});if(_){if(1===_.length)return _[0];if(_.length>1||!_.length)return 0===_.length?e():e("span",{},_)}if("a"===this.tag)E.on=k,E.attrs={href:c,"aria-current":b};else{var O=ht(this.$slots.default);if(O){O.isStatic=!1;var C=O.data=i({},O.data);for(var A in C.on=C.on||{},C.on){var $=C.on[A];A in k&&(C.on[A]=Array.isArray($)?$:[$])}for(var j in k)j in C.on?C.on[j].push(k[j]):C.on[j]=w;var L=O.data.attrs=i({},O.data.attrs);L.href=c,L["aria-current"]=b}else E.on=k}return e(this.tag,E,this.$slots.default)}},ct;function ft(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||t.defaultPrevented||void 0!==t.button&&0!==t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function ht(t){if(t)for(var e,n=0;n<t.length;n++){if("a"===(e=t[n]).tag)return e;if(e.children&&(e=ht(e.children)))return e}}function pt(t){if(!pt.installed||ct!==t){pt.installed=!0,ct=t;var e=function(t){return void 0!==t},n=function(t,n){var r=t.$options._parentVnode;e(r)&&e(r=r.data)&&e(r=r.registerRouteInstance)&&r(t,n)};t.mixin({beforeCreate:function r(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function t(){n(this)}}),Object.defineProperty(t.prototype,"$router",{get:function t(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function t(){return this._routerRoot._route}}),t.component("RouterView",O),t.component("RouterLink",ut);var r=t.config.optionMergeStrategies;r.beforeRouteEnter=r.beforeRouteLeave=r.beforeRouteUpdate=r.created}}var lt="undefined"!=typeof window;function dt(t,e,n,r,o){var i=e||[],a=n||Object.create(null),s=r||Object.create(null),u,c;t.forEach((function(t){vt(i,a,s,t,o)}));for(var f=0,h=i.length;f<h;f++)"*"===i[f]&&(i.push(i.splice(f,1)[0]),h--,f--);return{pathList:i,pathMap:a,nameMap:s}}function vt(t,e,n,r,o,i){var a=r.path,s=r.name;var u=r.pathToRegexpOptions||{},c=mt(a,o,u.strict);"boolean"==typeof r.caseSensitive&&(u.sensitive=r.caseSensitive);var f={path:c,regex:yt(c,u),components:r.components||{default:r.component},alias:r.alias?"string"==typeof r.alias?[r.alias]:r.alias:[],instances:{},enteredCbs:{},name:s,parent:o,matchAs:i,redirect:r.redirect,beforeEnter:r.beforeEnter,meta:r.meta||{},props:null==r.props?{}:r.components?r.props:{default:r.props}};if(r.children&&r.children.forEach((function(r){var o=i?L(i+"/"+r.path):void 0;vt(t,e,n,r,f,o)})),e[f.path]||(t.push(f.path),e[f.path]=f),void 0!==r.alias)for(var h=Array.isArray(r.alias)?r.alias:[r.alias],p=0;p<h.length;++p){var l;0;var d={path:h[p],children:r.children};vt(t,e,n,d,o,f.path||"/")}s&&(n[s]||(n[s]=f))}function yt(t,e){var n,r;return T(t,[],e)}function mt(t,e,n){return n||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:L(e.path+"/"+t)}function gt(t,e){var n=dt(t),r=n.pathList,o=n.pathMap,i=n.nameMap;function a(t){dt(t,r,o,i)}function s(t,e){var n="object"!=typeof t?i[t]:void 0;dt([e||t],r,o,i,n),n&&n.alias.length&&dt(n.alias.map((function(t){return{path:t,children:[e]}})),r,o,i,n)}function u(){return r.map((function(t){return o[t]}))}function c(t,n,a){var s=et(t,n,!1,e),u=s.name;if(u){var c=i[u];if(!c)return p(null,s);var f=c.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!=typeof s.params&&(s.params={}),n&&"object"==typeof n.params)for(var h in n.params)!(h in s.params)&&f.indexOf(h)>-1&&(s.params[h]=n.params[h]);return s.path=tt(c.path,s.params,'named route "'+u+'"'),p(c,s,a)}if(s.path){s.params={};for(var l=0;l<r.length;l++){var d=r[l],v=o[d];if(bt(v.regex,s.path,s.params))return p(v,s,a)}}return p(null,s)}function f(t,n){var r=t.redirect,o="function"==typeof r?r(y(t,n,null,e)):r;if("string"==typeof o&&(o={path:o}),!o||"object"!=typeof o)return p(null,n);var a=o,s=a.name,u=a.path,f=n.query,h=n.hash,l=n.params;if(f=a.hasOwnProperty("query")?a.query:f,h=a.hasOwnProperty("hash")?a.hash:h,l=a.hasOwnProperty("params")?a.params:l,s){var d=i[s];return c({_normalized:!0,name:s,query:f,hash:h,params:l},void 0,n)}if(u){var v=wt(u,t),m;return c({_normalized:!0,path:tt(v,l,'redirect route with path "'+v+'"'),query:f,hash:h},void 0,n)}return p(null,n)}function h(t,e,n){var r,o=c({_normalized:!0,path:tt(n,e.params,'aliased route with path "'+n+'"')});if(o){var i=o.matched,a=i[i.length-1];return e.params=o.params,p(a,e)}return p(null,e)}function p(t,n,r){return t&&t.redirect?f(t,r||n):t&&t.matchAs?h(t,n,t.matchAs):y(t,n,r,e)}return{match:c,addRoute:s,getRoutes:u,addRoutes:a}}function bt(t,e,n){var r=e.match(t);if(!r)return!1;if(!n)return!0;for(var o=1,i=r.length;o<i;++o){var a=t.keys[o-1];a&&(n[a.name||"pathMatch"]="string"==typeof r[o]?f(r[o]):r[o])}return!0}function wt(t,e){return $(t,e.parent?e.parent.path:"/",!0)}var xt=lt&&window.performance&&window.performance.now?window.performance:Date;function kt(){return xt.now().toFixed(3)}var Rt=kt();function Et(){return Rt}function _t(t){return Rt=t}var Ot=Object.create(null);function Ct(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),n=i({},window.history.state);return n.key=Et(),window.history.replaceState(n,"",e),window.addEventListener("popstate",jt),function(){window.removeEventListener("popstate",jt)}}function At(t,e,n,r){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=Lt(),a=o.call(t,e,n,r?i:null);a&&("function"==typeof a.then?a.then((function(t){Ht(t,i)})).catch((function(t){0})):Ht(a,i))}))}}function $t(){var t=Et();t&&(Ot[t]={x:window.pageXOffset,y:window.pageYOffset})}function jt(t){$t(),t.state&&t.state.key&&_t(t.state.key)}function Lt(){var t=Et();if(t)return Ot[t]}function Pt(t,e){var n,r=document.documentElement.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-r.left-e.x,y:o.top-r.top-e.y}}function Tt(t){return qt(t.x)||qt(t.y)}function St(t){return{x:qt(t.x)?t.x:window.pageXOffset,y:qt(t.y)?t.y:window.pageYOffset}}function zt(t){return{x:qt(t.x)?t.x:0,y:qt(t.y)?t.y:0}}function qt(t){return"number"==typeof t}var It=/^#\d/;function Ht(t,e){var n="object"==typeof t;if(n&&"string"==typeof t.selector){var r=It.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(r){var o=t.offset&&"object"==typeof t.offset?t.offset:{};e=Pt(r,o=zt(o))}else Tt(t)&&(e=St(t))}else n&&Tt(t)&&(e=St(t));e&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:e.x,top:e.y,behavior:t.behavior}):window.scrollTo(e.x,e.y))}var Mt=lt&&((-1===(Nt=window.navigator.userAgent).indexOf("Android 2.")&&-1===Nt.indexOf("Android 4.0")||-1===Nt.indexOf("Mobile Safari")||-1!==Nt.indexOf("Chrome")||-1!==Nt.indexOf("Windows Phone"))&&window.history&&"function"==typeof window.history.pushState),Nt;function Ut(t,e){$t();var n=window.history;try{if(e){var r=i({},n.state);r.key=Et(),n.replaceState(r,"",t)}else n.pushState({key:_t(kt())},"",t)}catch(o){window.location[e?"replace":"assign"](t)}}function Vt(t){Ut(t,!0)}var Bt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Dt(t,e){return Jt(t,e,Bt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Qt(e)+'" via a navigation guard.')}function Ft(t,e){var n=Jt(t,e,Bt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return n.name="NavigationDuplicated",n}function Kt(t,e){return Jt(t,e,Bt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Wt(t,e){return Jt(t,e,Bt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Jt(t,e,n,r){var o=new Error(r);return o._isRouter=!0,o.from=t,o.to=e,o.type=n,o}var Xt=["params","query","hash"];function Qt(t){if("string"==typeof t)return t;if("path"in t)return t.path;var e={};return Xt.forEach((function(n){n in t&&(e[n]=t[n])})),JSON.stringify(e,null,2)}function Yt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Zt(t,e){return Yt(t)&&t._isRouter&&(null==e||t.type===e)}function Gt(t,e,n){var r=function(o){o>=t.length?n():t[o]?e(t[o],(function(){r(o+1)})):r(o+1)};r(0)}function te(t){return function(e,n,r){var o=!1,i=0,a=null;ee(t,(function(t,e,n,s){if("function"==typeof t&&void 0===t.cid){o=!0,i++;var u=ie((function(e){oe(e)&&(e=e.default),t.resolved="function"==typeof e?e:ct.extend(e),n.components[s]=e,--i<=0&&r()})),c=ie((function(t){var e="Failed to resolve async component "+s+": "+t;a||(a=Yt(t)?t:new Error(e),r(a))})),f;try{f=t(u,c)}catch(p){c(p)}if(f)if("function"==typeof f.then)f.then(u,c);else{var h=f.component;h&&"function"==typeof h.then&&h.then(u,c)}}})),o||r()}}function ee(t,e){return ne(t.map((function(t){return Object.keys(t.components).map((function(n){return e(t.components[n],t.instances[n],t,n)}))})))}function ne(t){return Array.prototype.concat.apply([],t)}var re="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag;function oe(t){return t.__esModule||re&&"Module"===t[Symbol.toStringTag]}function ie(t){var e=!1;return function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];if(!e)return e=!0,t.apply(this,n)}}var ae=function t(e,n){this.router=e,this.base=se(n),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function se(t){if(!t)if(lt){var e=document.querySelector("base");t=(t=e&&e.getAttribute("href")||"/").replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function ue(t,e){var n,r=Math.max(t.length,e.length);for(n=0;n<r&&t[n]===e[n];n++);return{updated:e.slice(0,n),activated:e.slice(n),deactivated:t.slice(n)}}function ce(t,e,n,r){var o=ee(t,(function(t,r,o,i){var a=fe(t,e);if(a)return Array.isArray(a)?a.map((function(t){return n(t,r,o,i)})):n(a,r,o,i)}));return ne(r?o.reverse():o)}function fe(t,e){return"function"!=typeof t&&(t=ct.extend(t)),t.options[e]}function he(t){return ce(t,"beforeRouteLeave",le,!0)}function pe(t){return ce(t,"beforeRouteUpdate",le)}function le(t,e){if(e)return function n(){return t.apply(e,arguments)}}function de(t){return ce(t,"beforeRouteEnter",(function(t,e,n,r){return ve(t,n,r)}))}function ve(t,e,n){return function r(o,i,a){return t(o,i,(function(t){"function"==typeof t&&(e.enteredCbs[n]||(e.enteredCbs[n]=[]),e.enteredCbs[n].push(t)),a(t)}))}}ae.prototype.listen=function t(e){this.cb=e},ae.prototype.onReady=function t(e,n){this.ready?e():(this.readyCbs.push(e),n&&this.readyErrorCbs.push(n))},ae.prototype.onError=function t(e){this.errorCbs.push(e)},ae.prototype.transitionTo=function t(e,n,r){var o=this,i;try{i=this.router.match(e,this.current)}catch(s){throw this.errorCbs.forEach((function(t){t(s)})),s}var a=this.current;this.confirmTransition(i,(function(){o.updateRoute(i),n&&n(i),o.ensureURL(),o.router.afterHooks.forEach((function(t){t&&t(i,a)})),o.ready||(o.ready=!0,o.readyCbs.forEach((function(t){t(i)})))}),(function(t){r&&r(t),t&&!o.ready&&(Zt(t,Bt.redirected)&&a===g||(o.ready=!0,o.readyErrorCbs.forEach((function(e){e(t)}))))}))},ae.prototype.confirmTransition=function t(e,n,r){var o=this,i=this.current;this.pending=e;var a=function(t){!Zt(t)&&Yt(t)&&(o.errorCbs.length?o.errorCbs.forEach((function(e){e(t)})):console.error(t)),r&&r(t)},s=e.matched.length-1,u=i.matched.length-1;if(x(e,i)&&s===u&&e.matched[s]===i.matched[u])return this.ensureURL(),e.hash&&At(this.router,i,e,!1),a(Ft(i,e));var c=ue(this.current.matched,e.matched),f=c.updated,h=c.deactivated,p=c.activated,l=[].concat(he(h),this.router.beforeHooks,pe(f),p.map((function(t){return t.beforeEnter})),te(p)),d=function(t,n){if(o.pending!==e)return a(Kt(i,e));try{t(e,i,(function(t){!1===t?(o.ensureURL(!0),a(Wt(i,e))):Yt(t)?(o.ensureURL(!0),a(t)):"string"==typeof t||"object"==typeof t&&("string"==typeof t.path||"string"==typeof t.name)?(a(Dt(i,e)),"object"==typeof t&&t.replace?o.replace(t):o.push(t)):n(t)}))}catch(r){a(r)}};Gt(l,d,(function(){var t,r;Gt(de(p).concat(o.router.resolveHooks),d,(function(){if(o.pending!==e)return a(Kt(i,e));o.pending=null,n(e),o.router.app&&o.router.app.$nextTick((function(){_(e)}))}))}))},ae.prototype.updateRoute=function t(e){this.current=e,this.cb&&this.cb(e)},ae.prototype.setupListeners=function t(){},ae.prototype.teardown=function t(){this.listeners.forEach((function(t){t()})),this.listeners=[],this.current=g,this.pending=null};var ye=function(t){function e(e,n){t.call(this,e,n),this._startLocation=me(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function t(){var e=this;if(!(this.listeners.length>0)){var n=this.router,r=n.options.scrollBehavior,o=Mt&&r;o&&this.listeners.push(Ct());var i=function(){var t=e.current,r=me(e.base);e.current===g&&r===e._startLocation||e.transitionTo(r,(function(e){o&&At(n,e,t,!0)}))};window.addEventListener("popstate",i),this.listeners.push((function(){window.removeEventListener("popstate",i)}))}},e.prototype.go=function t(e){window.history.go(e)},e.prototype.push=function t(e,n,r){var o=this,i,a=this.current;this.transitionTo(e,(function(t){Ut(L(o.base+t.fullPath)),At(o.router,t,a,!1),n&&n(t)}),r)},e.prototype.replace=function t(e,n,r){var o=this,i,a=this.current;this.transitionTo(e,(function(t){Vt(L(o.base+t.fullPath)),At(o.router,t,a,!1),n&&n(t)}),r)},e.prototype.ensureURL=function t(e){if(me(this.base)!==this.current.fullPath){var n=L(this.base+this.current.fullPath);e?Ut(n):Vt(n)}},e.prototype.getCurrentLocation=function t(){return me(this.base)},e}(ae);function me(t){var e=window.location.pathname,n=e.toLowerCase(),r=t.toLowerCase();return!t||n!==r&&0!==n.indexOf(L(r+"/"))||(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var ge=function(t){function e(e,n,r){t.call(this,e,n),r&&be(this.base)||we()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function t(){var e=this;if(!(this.listeners.length>0)){var n,r=this.router.options.scrollBehavior,o=Mt&&r;o&&this.listeners.push(Ct());var i=function(){var t=e.current;we()&&e.transitionTo(xe(),(function(n){o&&At(e.router,n,t,!0),Mt||Ee(n.fullPath)}))},a=Mt?"popstate":"hashchange";window.addEventListener(a,i),this.listeners.push((function(){window.removeEventListener(a,i)}))}},e.prototype.push=function t(e,n,r){var o=this,i,a=this.current;this.transitionTo(e,(function(t){Re(t.fullPath),At(o.router,t,a,!1),n&&n(t)}),r)},e.prototype.replace=function t(e,n,r){var o=this,i,a=this.current;this.transitionTo(e,(function(t){Ee(t.fullPath),At(o.router,t,a,!1),n&&n(t)}),r)},e.prototype.go=function t(e){window.history.go(e)},e.prototype.ensureURL=function t(e){var n=this.current.fullPath;xe()!==n&&(e?Re(n):Ee(n))},e.prototype.getCurrentLocation=function t(){return xe()},e}(ae);function be(t){var e=me(t);if(!/^\/#/.test(e))return window.location.replace(L(t+"/#"+e)),!0}function we(){var t=xe();return"/"===t.charAt(0)||(Ee("/"+t),!1)}function xe(){var t=window.location.href,e=t.indexOf("#");return e<0?"":t=t.slice(e+1)}function ke(t){var e=window.location.href,n=e.indexOf("#"),r;return(n>=0?e.slice(0,n):e)+"#"+t}function Re(t){Mt?Ut(ke(t)):window.location.hash=t}function Ee(t){Mt?Vt(ke(t)):window.location.replace(ke(t))}var _e=function(t){function e(e,n){t.call(this,e,n),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function t(e,n,r){var o=this;this.transitionTo(e,(function(t){o.stack=o.stack.slice(0,o.index+1).concat(t),o.index++,n&&n(t)}),r)},e.prototype.replace=function t(e,n,r){var o=this;this.transitionTo(e,(function(t){o.stack=o.stack.slice(0,o.index).concat(t),n&&n(t)}),r)},e.prototype.go=function t(e){var n=this,r=this.index+e;if(!(r<0||r>=this.stack.length)){var o=this.stack[r];this.confirmTransition(o,(function(){var t=n.current;n.index=r,n.updateRoute(o),n.router.afterHooks.forEach((function(e){e&&e(o,t)}))}),(function(t){Zt(t,Bt.duplicated)&&(n.index=r)}))}},e.prototype.getCurrentLocation=function t(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},e.prototype.ensureURL=function t(){},e}(ae),Oe=function t(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=gt(e.routes||[],this);var n=e.mode||"hash";switch(this.fallback="history"===n&&!Mt&&!1!==e.fallback,this.fallback&&(n="hash"),lt||(n="abstract"),this.mode=n,n){case"history":this.history=new ye(this,e.base);break;case"hash":this.history=new ge(this,e.base,this.fallback);break;case"abstract":this.history=new _e(this,e.base)}},Ce={currentRoute:{configurable:!0}};Oe.prototype.match=function t(e,n,r){return this.matcher.match(e,n,r)},Ce.currentRoute.get=function(){return this.history&&this.history.current},Oe.prototype.init=function t(e){var n=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var t=n.apps.indexOf(e);t>-1&&n.apps.splice(t,1),n.app===e&&(n.app=n.apps[0]||null),n.app||n.history.teardown()})),!this.app){this.app=e;var r=this.history;if(r instanceof ye||r instanceof ge){var o=function(t){var e=r.current,o=n.options.scrollBehavior,i;Mt&&o&&"fullPath"in t&&At(n,t,e,!1)},i=function(t){r.setupListeners(),o(t)};r.transitionTo(r.getCurrentLocation(),i,i)}r.listen((function(t){n.apps.forEach((function(e){e._route=t}))}))}},Oe.prototype.beforeEach=function t(e){return $e(this.beforeHooks,e)},Oe.prototype.beforeResolve=function t(e){return $e(this.resolveHooks,e)},Oe.prototype.afterEach=function t(e){return $e(this.afterHooks,e)},Oe.prototype.onReady=function t(e,n){this.history.onReady(e,n)},Oe.prototype.onError=function t(e){this.history.onError(e)},Oe.prototype.push=function t(e,n,r){var o=this;if(!n&&!r&&"undefined"!=typeof Promise)return new Promise((function(t,n){o.history.push(e,t,n)}));this.history.push(e,n,r)},Oe.prototype.replace=function t(e,n,r){var o=this;if(!n&&!r&&"undefined"!=typeof Promise)return new Promise((function(t,n){o.history.replace(e,t,n)}));this.history.replace(e,n,r)},Oe.prototype.go=function t(e){this.history.go(e)},Oe.prototype.back=function t(){this.go(-1)},Oe.prototype.forward=function t(){this.go(1)},Oe.prototype.getMatchedComponents=function t(e){var n=e?e.matched?e:this.resolve(e).route:this.currentRoute;return n?[].concat.apply([],n.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},Oe.prototype.resolve=function t(e,n,r){var o=et(e,n=n||this.history.current,r,this),i=this.match(o,n),a=i.redirectedFrom||i.fullPath,s,u;return{location:o,route:i,href:je(this.history.base,a,this.mode),normalizedTo:o,resolved:i}},Oe.prototype.getRoutes=function t(){return this.matcher.getRoutes()},Oe.prototype.addRoute=function t(e,n){this.matcher.addRoute(e,n),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Oe.prototype.addRoutes=function t(e){this.matcher.addRoutes(e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(Oe.prototype,Ce);var Ae=Oe;function $e(t,e){return t.push(e),function(){var n=t.indexOf(e);n>-1&&t.splice(n,1)}}function je(t,e,n){var r="hash"===n?"#"+e:e;return t?L(t+"/"+r):r}Oe.install=pt,Oe.version="3.6.5",Oe.isNavigationFailure=Zt,Oe.NavigationFailureType=Bt,Oe.START_LOCATION=g,lt&&window.Vue&&window.Vue.use(Oe);var Le="3.6.5"}}]);