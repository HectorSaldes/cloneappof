"use strict";(self.webpackChunkof_vue=self.webpackChunkof_vue||[]).push([[82444],{991451:function(t,e,r){r.d(e,{Z:function(){return f}});var n=r(601915),i=r(569558),o=r(494689),s=r(512299),a=r(490494),l=r(828415),c=r(633284),p=r(20451),u=r(572345);function d(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var b=(0,p.y2)({ariaLabel:(0,p.pi)(s.N0,"Close"),content:(0,p.pi)(s.N0,"&times;"),disabled:(0,p.pi)(s.U5,!1),textVariant:(0,p.pi)(s.N0)},o.gi),f=(0,n.l7)({name:o.gi,functional:!0,props:b,render:function t(e,r){var n=r.props,o=r.data,s=r.slots,p=r.scopedSlots,b=s(),f=p||{},h={staticClass:"close",class:d({},"text-".concat(n.textVariant),n.textVariant),attrs:{type:"button",disabled:n.disabled,"aria-label":n.ariaLabel?String(n.ariaLabel):null},on:{click:function t(e){n.disabled&&(0,c.cO)(e)&&(0,l.p7)(e)}}};return(0,u.Q)(a.Pq,f,b)||(h.domProps={innerHTML:n.content}),e("button",(0,i.b)(o,h),(0,u.O)(a.Pq,{},f,b))}})},15193:function(t,e,r){r.d(e,{T:function(){return x}});var n=r(601915),i=r(569558),o=r(494689),s=r(763663),a=r(512299),l=r(11572),c=r(926410),p=r(828415),u=r(633284),d=r(967040),b=r(20451),f=r(986578),h=r(867347);function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=(0,d.CE)(h.NQ,["event","routerTag"]);delete v.href.default,delete v.to.default;var w=(0,b.y2)((0,d.GE)(y(y({},v),{},{block:(0,b.pi)(a.U5,!1),disabled:(0,b.pi)(a.U5,!1),pill:(0,b.pi)(a.U5,!1),pressed:(0,b.pi)(a.U5,null),size:(0,b.pi)(a.N0),squared:(0,b.pi)(a.U5,!1),tag:(0,b.pi)(a.N0,"button"),type:(0,b.pi)(a.N0,"button"),variant:(0,b.pi)(a.N0,"secondary")})),o.MZ),j=function t(e){"focusin"===e.type?(0,c.cn)(e.target,"focus"):"focusout"===e.type&&(0,c.IV)(e.target,"focus")},m=function t(e){return(0,f.u$)(e)||(0,c.YR)(e.tag,"a")},P=function t(e){return(0,u.jn)(e.pressed)},D=function t(e){return!(m(e)||e.tag&&!(0,c.YR)(e.tag,"button"))},C=function t(e){return!m(e)&&!D(e)},k=function t(e){var r;return["btn-".concat(e.variant||"secondary"),(r={},g(r,"btn-".concat(e.size),e.size),g(r,"btn-block",e.block),g(r,"rounded-pill",e.pill),g(r,"rounded-0",e.squared&&!e.pill),g(r,"disabled",e.disabled),g(r,"active",e.pressed),r)]},N=function t(e){return m(e)?(0,b.uj)(v,e):{}},B=function t(e,r){var n=D(e),i=m(e),o=P(e),s=C(e),a=i&&"#"===e.href,l=r.attrs&&r.attrs.role?r.attrs.role:null,c=r.attrs?r.attrs.tabindex:null;return(s||a)&&(c="0"),{type:n&&!i?e.type:null,disabled:n?e.disabled:null,role:s||a?"button":l,"aria-disabled":s?String(e.disabled):null,"aria-pressed":o?String(e.pressed):null,autocomplete:o?"off":null,tabindex:e.disabled&&!n?"-1":c}},x=(0,n.l7)({name:o.MZ,functional:!0,props:w,render:function t(e,r){var n=r.props,o=r.data,a=r.listeners,c=r.children,d=P(n),b=m(n),f=C(n),O=b&&"#"===n.href,g={keydown:function t(e){if(!n.disabled&&(f||O)){var r=e.keyCode;if(r===s.m5||r===s.K2&&f){var i=e.currentTarget||e.target;(0,p.p7)(e,{propagation:!1}),i.click()}}},click:function t(e){n.disabled&&(0,u.cO)(e)?(0,p.p7)(e):d&&a&&a["update:pressed"]&&(0,l.zo)(a["update:pressed"]).forEach((function(t){(0,u.mf)(t)&&t(!n.pressed)}))}};d&&(g.focusin=j,g.focusout=j);var v={staticClass:"btn",class:k(n),props:N(n),attrs:B(n,o),on:g};return e(b?h.we:n.tag,(0,i.b)(y(y({},o),{},{props:void 0}),v),c)}})},88824:function(t,e,r){r.d(e,{kH:function(){return pt}});var n=r(601915),i=r(494689),o=r(512299),s=r(490494),a=r(11572),l=r(318735),c=r(20451),p=r(446595),u=r(301190),d=r(373727),b=r(418280),f=r(15193),h=r(967040);function O(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){g(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function g(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var v=(0,c.y2)((0,h.GE)(y(y(y({},d.N),u.N),{},{block:(0,c.pi)(o.U5,!1),html:(0,c.pi)(o.N0),lazy:(0,c.pi)(o.U5,!1),menuClass:(0,c.pi)(o.wA),noCaret:(0,c.pi)(o.U5,!1),role:(0,c.pi)(o.N0,"menu"),size:(0,c.pi)(o.N0),split:(0,c.pi)(o.U5,!1),splitButtonType:(0,c.pi)(o.N0,"button",(function(t){return(0,a.kI)(["button","submit","reset"],t)})),splitClass:(0,c.pi)(o.wA),splitHref:(0,c.pi)(o.N0),splitTo:(0,c.pi)(o.ZW),splitVariant:(0,c.pi)(o.N0),text:(0,c.pi)(o.N0),toggleAttrs:(0,c.pi)(o.aR,{}),toggleClass:(0,c.pi)(o.wA),toggleTag:(0,c.pi)(o.N0,"button"),toggleText:(0,c.pi)(o.N0,"Toggle dropdown"),variant:(0,c.pi)(o.N0,"secondary")})),i.Jy),w=(0,n.l7)({name:i.Jy,mixins:[d.t,u.e,b.Z],props:v,computed:{dropdownClasses:function t(){var e=this.block,r=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":r||!e,"d-flex":e&&r}]},menuClasses:function t(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function t(){var e=this.split;return[this.toggleClass,{"dropdown-toggle-split":e,"dropdown-toggle-no-caret":this.noCaret&&!e}]}},render:function t(e){var r=this.visible,n=this.variant,i=this.size,o=this.block,a=this.disabled,c=this.split,u=this.role,d=this.hide,b=this.toggle,h={variant:n,size:i,block:o,disabled:a},O=this.normalizeSlot(s.j1),g=this.hasNormalizedSlot(s.j1)?{}:(0,l.U)(this.html,this.text),v=e();if(c){var w=this.splitTo,j=this.splitHref,m=this.splitButtonType,P=y(y({},h),{},{variant:this.splitVariant||n});w?P.to=w:j?P.href=j:m&&(P.type=m),v=e(f.T,{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:P,domProps:g,on:{click:this.onSplitClick},ref:"button"},O),O=[e("span",{class:["sr-only"]},[this.toggleText])],g={}}var D=["menu","listbox","tree","grid","dialog"],C=e(f.T,{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:y(y({},this.toggleAttrs),{},{id:this.safeId("_BV_toggle_"),"aria-haspopup":D.includes(u)?u:"false","aria-expanded":(0,p.BB)(r)}),props:y(y({},h),{},{tag:this.toggleTag,block:o&&!c}),domProps:g,on:{mousedown:this.onMousedown,click:b,keydown:b},ref:"toggle"},O),k=e("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:u,tabindex:"-1","aria-labelledby":this.safeId(c?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||r?this.normalizeSlot(s.Pq,{hide:d}):e()]);return e("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[v,C,k])}}),j=r(763294),m=r(926410),P=r(228492),D=r(867347);function C(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function k(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?C(Object(r),!0).forEach((function(e){N(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function N(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var B=(0,h.CE)(D.NQ,["event","routerTag"]),x=(0,c.y2)((0,h.GE)(k(k({},B),{},{linkClass:(0,c.pi)(o.wA),variant:(0,c.pi)(o.N0)})),i.tW),E=(0,n.l7)({name:i.tW,mixins:[P.D,b.Z],inject:{getBvDropdown:{default:function t(){return function(){return null}}}},inheritAttrs:!1,props:x,computed:{bvDropdown:function t(){return this.getBvDropdown()},computedAttrs:function t(){return k(k({},this.bvAttrs),{},{role:"menuitem"})}},methods:{closeDropdown:function t(){var e=this;(0,m.bz)((function(){e.bvDropdown&&e.bvDropdown.hide(!0)}))},onClick:function t(e){this.$emit(j.PZ,e),this.closeDropdown()}},render:function t(e){var r=this.linkClass,n=this.variant,i=this.active,o=this.disabled,s=this.onClick,a=this.bvAttrs;return e("li",{class:a.class,style:a.style,attrs:{role:"presentation"}},[e(D.we,{staticClass:"dropdown-item",class:[r,N({},"text-".concat(n),n&&!(i||o))],props:(0,c.uj)(B,this.$props),attrs:this.computedAttrs,on:{click:s},ref:"item"},this.normalizeSlot())])}});function S(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function _(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?S(Object(r),!0).forEach((function(e){A(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):S(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function A(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var T=(0,c.y2)({active:(0,c.pi)(o.U5,!1),activeClass:(0,c.pi)(o.N0,"active"),buttonClass:(0,c.pi)(o.wA),disabled:(0,c.pi)(o.U5,!1),variant:(0,c.pi)(o.N0)},i.V_),z=(0,n.l7)({name:i.V_,mixins:[P.D,b.Z],inject:{getBvDropdown:{default:function t(){return function(){return null}}}},inheritAttrs:!1,props:T,computed:{bvDropdown:function t(){return this.getBvDropdown()},computedAttrs:function t(){return _(_({},this.bvAttrs),{},{role:"menuitem",type:"button",disabled:this.disabled})}},methods:{closeDropdown:function t(){this.bvDropdown&&this.bvDropdown.hide(!0)},onClick:function t(e){this.$emit(j.PZ,e),this.closeDropdown()}},render:function t(e){var r,n=this.active,i=this.variant,o=this.bvAttrs;return e("li",{class:o.class,style:o.style,attrs:{role:"presentation"}},[e("button",{staticClass:"dropdown-item",class:[this.buttonClass,(r={},A(r,this.activeClass,n),A(r,"text-".concat(i),i&&!(n||this.disabled)),r)],attrs:this.computedAttrs,on:{click:this.onClick},ref:"button"},this.normalizeSlot())])}}),V=r(569558);function U(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function I(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?U(Object(r),!0).forEach((function(e){Z(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):U(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function Z(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var q=(0,c.y2)({id:(0,c.pi)(o.N0),tag:(0,c.pi)(o.N0,"header"),variant:(0,c.pi)(o.N0)},i.JP),H=(0,n.l7)({name:i.JP,functional:!0,props:q,render:function t(e,r){var n=r.props,i=r.data,o=r.children,s=n.tag,a=n.variant;return e("li",(0,V.b)((0,h.CE)(i,["attrs"]),{attrs:{role:"presentation"}}),[e(s,{staticClass:"dropdown-header",class:Z({},"text-".concat(a),a),attrs:I(I({},i.attrs||{}),{},{id:n.id||null,role:(0,m.YR)(s,"header")?null:"heading"}),ref:"header"},o)])}});function G(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Y(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?G(Object(r),!0).forEach((function(e){R(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function R(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var J=(0,c.y2)({tag:(0,c.pi)(o.N0,"hr")},i.Yy),K=(0,n.l7)({name:i.Yy,functional:!0,props:J,render:function t(e,r){var n=r.props,i=r.data;return e("li",(0,V.b)((0,h.CE)(i,["attrs"]),{attrs:{role:"presentation"}}),[e(n.tag,{staticClass:"dropdown-divider",attrs:Y(Y({},i.attrs||{}),{},{role:"separator","aria-orientation":"horizontal"}),ref:"divider"})])}}),L=r(654909);function M(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function Q(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?M(Object(r),!0).forEach((function(e){$(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):M(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function $(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var W=(0,c.y2)((0,h.GE)(Q(Q({},L.N),{},{disabled:(0,c.pi)(o.U5,!1),formClass:(0,c.pi)(o.wA)})),i.n5),F=(0,n.l7)({name:i.n5,functional:!0,props:W,render:function t(e,r){var n=r.props,i=r.data,o=r.listeners,s=r.children;return e("li",(0,V.b)((0,h.CE)(i,["attrs","on"]),{attrs:{role:"presentation"}}),[e(L.e,{staticClass:"b-dropdown-form",class:[n.formClass,{disabled:n.disabled}],props:n,attrs:Q(Q({},i.attrs||{}),{},{disabled:n.disabled,tabindex:n.disabled?null:"-1"}),on:o,ref:"form"},s)])}});function X(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var tt=(0,c.y2)({tag:(0,c.pi)(o.N0,"p"),textClass:(0,c.pi)(o.wA),variant:(0,c.pi)(o.N0)},i.KV),et=(0,n.l7)({name:i.KV,functional:!0,props:tt,render:function t(e,r){var n=r.props,i=r.data,o=r.children,s=n.tag,a=n.textClass,l=n.variant;return e("li",(0,V.b)((0,h.CE)(i,["attrs"]),{attrs:{role:"presentation"}}),[e(s,{staticClass:"b-dropdown-text",class:[a,X({},"text-".concat(l),l)],props:n,attrs:i.attrs||{},ref:"text"},o)])}}),rt=r(968265),nt=r(572345);function it(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function ot(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?it(Object(r),!0).forEach((function(e){st(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):it(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function st(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var at=(0,c.y2)({ariaDescribedby:(0,c.pi)(o.N0),header:(0,c.pi)(o.N0),headerClasses:(0,c.pi)(o.wA),headerTag:(0,c.pi)(o.N0,"header"),headerVariant:(0,c.pi)(o.N0),id:(0,c.pi)(o.N0)},i.qk),lt=(0,n.l7)({name:i.qk,functional:!0,props:at,render:function t(e,r){var n=r.props,i=r.data,o=r.slots,a=r.scopedSlots,l=n.id,c=n.variant,p=n.header,u=n.headerTag,d=o(),b=a||{},f={},O=l?"_bv_".concat(l,"_group_dd_header"):null,y=e();return((0,nt.Q)(s._0,b,d)||p)&&(y=e(u,{staticClass:"dropdown-header",class:[n.headerClasses,st({},"text-".concat(c),c)],attrs:{id:O,role:(0,m.YR)(u,"header")?null:"heading"}},(0,nt.O)(s._0,f,b,d)||p)),e("li",(0,V.b)((0,h.CE)(i,["attrs"]),{attrs:{role:"presentation"}}),[y,e("ul",{staticClass:"list-unstyled",attrs:ot(ot({},i.attrs||{}),{},{id:l,role:"group","aria-describedby":[O,n.ariaDescribedBy].filter(rt.y).join(" ").trim()||null})},(0,nt.O)(s.Pq,f,b,d))])}}),ct,pt=(0,r(186043).Hr)({components:{BDropdown:w,BDd:w,BDropdownItem:E,BDdItem:E,BDropdownItemButton:z,BDropdownItemBtn:z,BDdItemButton:z,BDdItemBtn:z,BDropdownHeader:H,BDdHeader:H,BDropdownDivider:K,BDdDivider:K,BDropdownForm:F,BDdForm:F,BDropdownText:et,BDdText:et,BDropdownGroup:lt,BDdGroup:lt}})}}]);