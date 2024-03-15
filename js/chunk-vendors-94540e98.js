"use strict";(self.webpackChunkof_vue=self.webpackChunkof_vue||[]).push([[47701],{91858:function(t,e,i){i.d(e,{y:function(){return P}});var n=i(601915),o=i(494689),r=i(763294),s=i(512299),a=i(633284),l=i(20451),c=i(130051),h=i(928981),u=i(228112),p=i(193319),d=i(926410),f=i(893954),v=i(817100),m={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left",TOPLEFT:"top",TOPRIGHT:"top",RIGHTTOP:"right",RIGHTBOTTOM:"right",BOTTOMLEFT:"bottom",BOTTOMRIGHT:"bottom",LEFTTOP:"left",LEFTBOTTOM:"left"},g={AUTO:0,TOPLEFT:-1,TOP:0,TOPRIGHT:1,RIGHTTOP:-1,RIGHT:0,RIGHTBOTTOM:1,BOTTOMLEFT:-1,BOTTOM:0,BOTTOMRIGHT:1,LEFTTOP:-1,LEFT:0,LEFTBOTTOM:1},b={arrowPadding:(0,l.pi)(s.fE,6),boundary:(0,l.pi)([u.mv,s.N0],"scrollParent"),boundaryPadding:(0,l.pi)(s.fE,5),fallbackPlacement:(0,l.pi)(s.Mu,"flip"),offset:(0,l.pi)(s.fE,0),placement:(0,l.pi)(s.N0,"top"),target:(0,l.pi)([u.mv,u.t_])},T=(0,n.l7)({name:o.X$,mixins:[p.S],props:b,data:function t(){return{noFade:!1,localShow:!0,attachment:this.getAttachment(this.placement)}},computed:{templateType:function t(){return"unknown"},popperConfig:function t(){var e=this,i=this.placement;return{placement:this.getAttachment(i),modifiers:{offset:{offset:this.getOffset(i)},flip:{behavior:this.fallbackPlacement},arrow:{element:".arrow"},preventOverflow:{padding:this.boundaryPadding,boundariesElement:this.boundary}},onCreate:function t(i){i.originalPlacement!==i.placement&&e.popperPlacementChange(i)},onUpdate:function t(i){e.popperPlacementChange(i)}}}},created:function t(){var e=this;this.$_popper=null,this.localShow=!0,this.$on(r.l0,(function(t){e.popperCreate(t)}));var i=function t(){e.$nextTick((function(){(0,d.bz)((function(){e.$destroy()}))}))};this.bvParent.$once(r.DJ,i),this.$once(r.v6,i)},beforeMount:function t(){this.attachment=this.getAttachment(this.placement)},updated:function t(){this.updatePopper()},beforeDestroy:function t(){this.destroyPopper()},destroyed:function t(){var e=this.$el;e&&e.parentNode&&e.parentNode.removeChild(e)},methods:{hide:function t(){this.localShow=!1},getAttachment:function t(e){return m[String(e).toUpperCase()]||"auto"},getOffset:function t(e){if(!this.offset){var i=this.$refs.arrow||(0,d.Ys)(".arrow",this.$el),n=(0,f.f_)((0,d.yD)(i).width,0)+(0,f.f_)(this.arrowPadding,0);switch(g[String(e).toUpperCase()]||0){case 1:return"+50%p - ".concat(n,"px");case-1:return"-50%p + ".concat(n,"px");default:return 0}}return this.offset},popperCreate:function t(e){this.destroyPopper(),this.$_popper=new h.Z(this.target,e,this.popperConfig)},destroyPopper:function t(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function t(){this.$_popper&&this.$_popper.scheduleUpdate()},popperPlacementChange:function t(e){this.attachment=this.getAttachment(e.placement)},renderTemplate:function t(e){return e("div")}},render:function t(e){var i=this,n=this.noFade;return e(v.N,{props:{appear:!0,noFade:n},on:{beforeEnter:function t(e){return i.$emit(r.l0,e)},afterEnter:function t(e){return i.$emit(r.AS,e)},beforeLeave:function t(e){return i.$emit(r.yM,e)},afterLeave:function t(e){return i.$emit(r.v6,e)}}},[this.localShow?this.renderTemplate(e):e()])}});function $(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function y(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?$(Object(i),!0).forEach((function(e){O(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):$(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function O(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var w={html:(0,l.pi)(s.U5,!1),id:(0,l.pi)(s.N0)},P=(0,n.l7)({name:o.Op,extends:T,mixins:[c.o],props:w,data:function t(){return{title:"",content:"",variant:null,customClass:null,interactive:!0}},computed:{templateType:function t(){return"tooltip"},templateClasses:function t(){var e,i=this.variant,n=this.attachment,o=this.templateType;return[(e={noninteractive:!this.interactive},O(e,"b-".concat(o,"-").concat(i),i),O(e,"bs-".concat(o,"-").concat(n),n),e),this.customClass]},templateAttributes:function t(){var e=this.id;return y(y({},this.bvParent.bvParent.$attrs),{},{id:e,role:"tooltip",tabindex:"-1"},this.scopedStyleAttrs)},templateListeners:function t(){var e=this;return{mouseenter:function t(i){e.$emit(r.MQ,i)},mouseleave:function t(i){e.$emit(r.lm,i)},focusin:function t(i){e.$emit(r.kT,i)},focusout:function t(i){e.$emit(r.iV,i)}}}},methods:{renderTemplate:function t(e){var i=this.title,n=(0,a.mf)(i)?i({}):i,o=this.html&&!(0,a.mf)(i)?{innerHTML:i}:{};return e("div",{staticClass:"tooltip b-tooltip",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[e("div",{staticClass:"arrow",ref:"arrow"}),e("div",{staticClass:"tooltip-inner",domProps:o},[n])])}}})},40960:function(t,e,i){i.d(e,{j:function(){return L}});var n=i(601915),o=i(494689),r=i(763294),s=i(193319),a=i(11572),l=i(999022),c=i(926410),h=i(828415),u=i(613597),p=i(968265),d=i(633284),f=i(903058),v=i(121578),m=i(184941),g=i(893954),b=i(967040),T=i(877147),$=i(137130),y=i(455789),O=i(498596),w=i(91858);function P(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function _(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?P(Object(i),!0).forEach((function(e){S(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):P(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function S(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var E=".modal-content",C=(0,h.J3)(o.zB,r.v6),D,j=[E,".b-sidebar"].join(", "),I="dropdown",k=".dropdown-menu.show",H="data-original-title",A={title:"",content:"",variant:null,customClass:null,triggers:"",placement:"auto",fallbackPlacement:"flip",target:null,container:null,noFade:!1,boundary:"scrollParent",boundaryPadding:5,offset:0,delay:0,arrowPadding:6,interactive:!0,disabled:!1,id:null,html:!1},L=(0,n.l7)({name:o.lS,mixins:[O.E,s.S],data:function t(){return _(_({},A),{},{activeTrigger:{hover:!1,click:!1,focus:!1},localShow:!1})},computed:{templateType:function t(){return"tooltip"},computedId:function t(){return this.id||"__bv_".concat(this.templateType,"_").concat(this[n.X$],"__")},computedDelay:function t(){var e={show:0,hide:0};return(0,d.PO)(this.delay)?(e.show=(0,v.nP)((0,g.Z3)(this.delay.show,0),0),e.hide=(0,v.nP)((0,g.Z3)(this.delay.hide,0),0)):((0,d.hj)(this.delay)||(0,d.HD)(this.delay))&&(e.show=e.hide=(0,v.nP)((0,g.Z3)(this.delay,0),0)),e},computedTriggers:function t(){return(0,a.zo)(this.triggers).filter(p.y).join(" ").trim().toLowerCase().split(/\s+/).sort()},isWithActiveTrigger:function t(){for(var e in this.activeTrigger)if(this.activeTrigger[e])return!0;return!1},computedTemplateData:function t(){var e,i,n,o,r,s;return{title:this.title,content:this.content,variant:this.variant,customClass:this.customClass,noFade:this.noFade,interactive:this.interactive}}},watch:{computedTriggers:function t(e,i){var n=this;(0,f.W)(e,i)||this.$nextTick((function(){n.unListen(),i.forEach((function(t){(0,a.kI)(e,t)||n.activeTrigger[t]&&(n.activeTrigger[t]=!1)})),n.listen()}))},computedTemplateData:function t(){this.handleTemplateUpdate()},title:function t(e,i){e===i||e||this.hide()},disabled:function t(e){e?this.disable():this.enable()}},created:function t(){var e=this;this.$_tip=null,this.$_hoverTimeout=null,this.$_hoverState="",this.$_visibleInterval=null,this.$_enabled=!this.disabled,this.$_noop=m.Z.bind(this),this.bvParent&&this.bvParent.$once(r.vl,(function(){e.$nextTick((function(){(0,c.bz)((function(){e.$destroy()}))}))})),this.$nextTick((function(){var t=e.getTarget();t&&(0,c.r3)(document.body,t)?(e.scopeId=(0,u.P)(e.bvParent),e.listen()):(0,T.ZK)((0,d.HD)(e.target)?'Unable to find target element by ID "#'.concat(e.target,'" in document.'):"The provided target is no valid HTML element.",e.templateType)}))},updated:function t(){this.$nextTick(this.handleTemplateUpdate)},deactivated:function t(){this.forceHide()},beforeDestroy:function t(){this.unListen(),this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.clearVisibilityInterval(),this.destroyTemplate(),this.$_noop=null},methods:{getTemplate:function t(){return w.y},updateData:function t(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=!1;(0,b.XP)(A).forEach((function(t){(0,d.o8)(i[t])||e[t]===i[t]||(e[t]=i[t],"title"===t&&(n=!0))})),n&&this.localShow&&this.fixTitle()},createTemplateAndShow:function t(){var e=this.getContainer(),i=this.getTemplate(),n=this.$_tip=(0,y.H)(this,i,{propsData:{id:this.computedId,html:this.html,placement:this.placement,fallbackPlacement:this.fallbackPlacement,target:this.getPlacementTarget(),boundary:this.getBoundary(),offset:(0,g.Z3)(this.offset,0),arrowPadding:(0,g.Z3)(this.arrowPadding,0),boundaryPadding:(0,g.Z3)(this.boundaryPadding,0)}});this.handleTemplateUpdate(),n.$once(r.l0,this.onTemplateShow),n.$once(r.AS,this.onTemplateShown),n.$once(r.yM,this.onTemplateHide),n.$once(r.v6,this.onTemplateHidden),n.$once(r.DJ,this.destroyTemplate),n.$on(r.kT,this.handleEvent),n.$on(r.iV,this.handleEvent),n.$on(r.MQ,this.handleEvent),n.$on(r.lm,this.handleEvent),n.$mount(e.appendChild(document.createElement("div")))},hideTemplate:function t(){this.$_tip&&this.$_tip.hide(),this.clearActiveTriggers(),this.$_hoverState=""},destroyTemplate:function t(){this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.$_hoverState="",this.clearActiveTriggers(),this.localPlacementTarget=null;try{this.$_tip.$destroy()}catch(e){}this.$_tip=null,this.removeAriaDescribedby(),this.restoreTitle(),this.localShow=!1},getTemplateElement:function t(){return this.$_tip?this.$_tip.$el:null},handleTemplateUpdate:function t(){var e=this,i=this.$_tip,n;i&&["title","content","variant","customClass","noFade","interactive"].forEach((function(t){i[t]!==e[t]&&(i[t]=e[t])}))},show:function t(){var e=this.getTarget();if(e&&(0,c.r3)(document.body,e)&&(0,c.pn)(e)&&!this.dropdownOpen()&&(!(0,d.Jp)(this.title)&&""!==this.title||!(0,d.Jp)(this.content)&&""!==this.content)&&!this.$_tip&&!this.localShow){this.localShow=!0;var i=this.buildEvent(r.l0,{cancelable:!0});this.emitEvent(i),i.defaultPrevented?this.destroyTemplate():(this.fixTitle(),this.addAriaDescribedby(),this.createTemplateAndShow())}},hide:function t(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],i;if(this.getTemplateElement()&&this.localShow){var n=this.buildEvent(r.yM,{cancelable:!e});this.emitEvent(n),n.defaultPrevented||this.hideTemplate()}else this.restoreTitle()},forceHide:function t(){var e;this.getTemplateElement()&&this.localShow&&(this.setWhileOpenListeners(!1),this.clearHoverTimeout(),this.$_hoverState="",this.clearActiveTriggers(),this.$_tip&&(this.$_tip.noFade=!0),this.hide(!0))},enable:function t(){this.$_enabled=!0,this.emitEvent(this.buildEvent(r.VU))},disable:function t(){this.$_enabled=!1,this.emitEvent(this.buildEvent(r.gi))},onTemplateShow:function t(){this.setWhileOpenListeners(!0)},onTemplateShown:function t(){var e=this.$_hoverState;this.$_hoverState="","out"===e&&this.leave(null),this.emitEvent(this.buildEvent(r.AS))},onTemplateHide:function t(){this.setWhileOpenListeners(!1)},onTemplateHidden:function t(){this.destroyTemplate(),this.emitEvent(this.buildEvent(r.v6))},getTarget:function t(){var e=this.target;return(0,d.HD)(e)?e=(0,c.FO)(e.replace(/^#/,"")):(0,d.mf)(e)?e=e():e&&(e=e.$el||e),(0,c.kK)(e)?e:null},getPlacementTarget:function t(){return this.getTarget()},getTargetId:function t(){var e=this.getTarget();return e&&e.id?e.id:null},getContainer:function t(){var e=!!this.container&&(this.container.$el||this.container),i=document.body,n=this.getTarget();return!1===e?(0,c.oq)(j,n)||i:(0,d.HD)(e)&&(0,c.FO)(e.replace(/^#/,""))||i},getBoundary:function t(){return this.boundary?this.boundary.$el||this.boundary:"scrollParent"},isInModal:function t(){var e=this.getTarget();return e&&(0,c.oq)(E,e)},isDropdown:function t(){var e=this.getTarget();return e&&(0,c.pv)(e,I)},dropdownOpen:function t(){var e=this.getTarget();return this.isDropdown()&&e&&(0,c.Ys)(k,e)},clearHoverTimeout:function t(){clearTimeout(this.$_hoverTimeout),this.$_hoverTimeout=null},clearVisibilityInterval:function t(){clearInterval(this.$_visibleInterval),this.$_visibleInterval=null},clearActiveTriggers:function t(){for(var e in this.activeTrigger)this.activeTrigger[e]=!1},addAriaDescribedby:function t(){var e=this.getTarget(),i=(0,c.UK)(e,"aria-describedby")||"";i=i.split(/\s+/).concat(this.computedId).join(" ").trim(),(0,c.fi)(e,"aria-describedby",i)},removeAriaDescribedby:function t(){var e=this,i=this.getTarget(),n=(0,c.UK)(i,"aria-describedby")||"";(n=n.split(/\s+/).filter((function(t){return t!==e.computedId})).join(" ").trim())?(0,c.fi)(i,"aria-describedby",n):(0,c.uV)(i,"aria-describedby")},fixTitle:function t(){var e=this.getTarget();if((0,c.B$)(e,"title")){var i=(0,c.UK)(e,"title");(0,c.fi)(e,"title",""),i&&(0,c.fi)(e,H,i)}},restoreTitle:function t(){var e=this.getTarget();if((0,c.B$)(e,H)){var i=(0,c.UK)(e,H);(0,c.uV)(e,H),i&&(0,c.fi)(e,"title",i)}},buildEvent:function t(e){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new $.n(e,_({cancelable:!1,target:this.getTarget(),relatedTarget:this.getTemplateElement()||null,componentId:this.computedId,vueTarget:this},i))},emitEvent:function t(e){var i=e.type;this.emitOnRoot((0,h.J3)(this.templateType,i),e),this.$emit(i,e)},listen:function t(){var e=this,i=this.getTarget();i&&(this.setRootListener(!0),this.computedTriggers.forEach((function(t){"click"===t?(0,h.XO)(i,"click",e.handleEvent,r.IJ):"focus"===t?((0,h.XO)(i,"focusin",e.handleEvent,r.IJ),(0,h.XO)(i,"focusout",e.handleEvent,r.IJ)):"blur"===t?(0,h.XO)(i,"focusout",e.handleEvent,r.IJ):"hover"===t&&((0,h.XO)(i,"mouseenter",e.handleEvent,r.IJ),(0,h.XO)(i,"mouseleave",e.handleEvent,r.IJ))}),this))},unListen:function t(){var e=this,i=["click","focusin","focusout","mouseenter","mouseleave"],n=this.getTarget();this.setRootListener(!1),i.forEach((function(t){n&&(0,h.QY)(n,t,e.handleEvent,r.IJ)}),this)},setRootListener:function t(e){var i=e?"listenOnRoot":"listenOffRoot",n=this.templateType;this[i]((0,h.gA)(n,r.yM),this.doHide),this[i]((0,h.gA)(n,r.l0),this.doShow),this[i]((0,h.gA)(n,r.MH),this.doDisable),this[i]((0,h.gA)(n,r.wV),this.doEnable)},setWhileOpenListeners:function t(e){this.setModalListener(e),this.setDropdownListener(e),this.visibleCheck(e),this.setOnTouchStartListener(e)},visibleCheck:function t(e){var i=this;this.clearVisibilityInterval();var n=this.getTarget();e&&(this.$_visibleInterval=setInterval((function(){var t;!i.getTemplateElement()||!i.localShow||n.parentNode&&(0,c.pn)(n)||i.forceHide()}),100))},setModalListener:function t(e){this.isInModal()&&this[e?"listenOnRoot":"listenOffRoot"](C,this.forceHide)},setOnTouchStartListener:function t(e){var i=this;"ontouchstart"in document.documentElement&&(0,a.Dp)(document.body.children).forEach((function(t){(0,h.tU)(e,t,"mouseover",i.$_noop)}))},setDropdownListener:function t(e){var i=this.getTarget();if(i&&this.bvEventRoot&&this.isDropdown){var n=(0,l.qE)(i);n&&n[e?"$on":"$off"](r.AS,this.forceHide)}},handleEvent:function t(e){var i=this.getTarget();if(i&&!(0,c.pK)(i)&&this.$_enabled&&!this.dropdownOpen()){var n=e.type,o=this.computedTriggers;if("click"===n&&(0,a.kI)(o,"click"))this.click(e);else if("mouseenter"===n&&(0,a.kI)(o,"hover"))this.enter(e);else if("focusin"===n&&(0,a.kI)(o,"focus"))this.enter(e);else if("focusout"===n&&((0,a.kI)(o,"focus")||(0,a.kI)(o,"blur"))||"mouseleave"===n&&(0,a.kI)(o,"hover")){var r=this.getTemplateElement(),s=e.target,l=e.relatedTarget;if(r&&(0,c.r3)(r,s)&&(0,c.r3)(i,l)||r&&(0,c.r3)(i,s)&&(0,c.r3)(r,l)||r&&(0,c.r3)(r,s)&&(0,c.r3)(r,l)||(0,c.r3)(i,s)&&(0,c.r3)(i,l))return;this.leave(e)}}},doHide:function t(e){e&&this.getTargetId()!==e&&this.computedId!==e||this.forceHide()},doShow:function t(e){e&&this.getTargetId()!==e&&this.computedId!==e||this.show()},doDisable:function t(e){e&&this.getTargetId()!==e&&this.computedId!==e||this.disable()},doEnable:function t(e){e&&this.getTargetId()!==e&&this.computedId!==e||this.enable()},click:function t(e){this.$_enabled&&!this.dropdownOpen()&&((0,c.KS)(e.currentTarget),this.activeTrigger.click=!this.activeTrigger.click,this.isWithActiveTrigger?this.enter(null):this.leave(null))},toggle:function t(){this.$_enabled&&!this.dropdownOpen()&&(this.localShow?this.leave(null):this.enter(null))},enter:function t(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;i&&(this.activeTrigger["focusin"===i.type?"focus":"hover"]=!0),this.localShow||"in"===this.$_hoverState?this.$_hoverState="in":(this.clearHoverTimeout(),this.$_hoverState="in",this.computedDelay.show?(this.fixTitle(),this.$_hoverTimeout=setTimeout((function(){"in"===e.$_hoverState?e.show():e.localShow||e.restoreTitle()}),this.computedDelay.show)):this.show())},leave:function t(){var e=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;i&&(this.activeTrigger["focusout"===i.type?"focus":"hover"]=!1,"focusout"===i.type&&(0,a.kI)(this.computedTriggers,"blur")&&(this.activeTrigger.click=!1,this.activeTrigger.hover=!1)),this.isWithActiveTrigger||(this.clearHoverTimeout(),this.$_hoverState="out",this.computedDelay.hide?this.$_hoverTimeout=setTimeout((function(){"out"===e.$_hoverState&&e.hide()}),this.computedDelay.hide):this.hide())}}})},418365:function(t,e,i){i.d(e,{N:function(){return _},T:function(){return S}});var n=i(601915),o=i(494689),r=i(763294),s=i(512299),a=i(228112),l=i(193319),c=i(613597),h=i(633284),u=i(967040),p=i(20451),d=i(455789),f=i(418280),v=i(40960),m,g;function b(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function T(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?b(Object(i),!0).forEach((function(e){$(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function $(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var y="disabled",O=r.j7+y,w="show",P=r.j7+w,_=(0,p.y2)(($(m={boundary:(0,p.pi)([a.mv,s.aR,s.N0],"scrollParent"),boundaryPadding:(0,p.pi)(s.fE,50),container:(0,p.pi)([a.mv,s.aR,s.N0]),customClass:(0,p.pi)(s.N0),delay:(0,p.pi)(s.$k,50)},y,(0,p.pi)(s.U5,!1)),$(m,"fallbackPlacement",(0,p.pi)(s.Mu,"flip")),$(m,"id",(0,p.pi)(s.N0)),$(m,"noFade",(0,p.pi)(s.U5,!1)),$(m,"noninteractive",(0,p.pi)(s.U5,!1)),$(m,"offset",(0,p.pi)(s.fE,0)),$(m,"placement",(0,p.pi)(s.N0,"top")),$(m,w,(0,p.pi)(s.U5,!1)),$(m,"target",(0,p.pi)([a.mv,a.t_,s.Sx,s.aR,s.N0],void 0,!0)),$(m,"title",(0,p.pi)(s.N0)),$(m,"triggers",(0,p.pi)(s.Mu,"hover focus")),$(m,"variant",(0,p.pi)(s.N0)),m),o.qv),S=(0,n.l7)({name:o.qv,mixins:[f.Z,l.S],inheritAttrs:!1,props:_,data:function t(){return{localShow:this[w],localTitle:"",localContent:""}},computed:{templateData:function t(){return T({title:this.localTitle,content:this.localContent,interactive:!this.noninteractive},(0,u.ei)(this.$props,["boundary","boundaryPadding","container","customClass","delay","fallbackPlacement","id","noFade","offset","placement","target","target","triggers","variant",y]))},templateTitleContent:function t(){var e,i;return{title:this.title,content:this.content}}},watch:(g={},$(g,w,(function(t,e){t!==e&&t!==this.localShow&&this.$_toolpop&&(t?this.$_toolpop.show():this.$_toolpop.forceHide())})),$(g,y,(function(t){t?this.doDisable():this.doEnable()})),$(g,"localShow",(function t(e){this.$emit(P,e)})),$(g,"templateData",(function t(){var e=this;this.$nextTick((function(){e.$_toolpop&&e.$_toolpop.updateData(e.templateData)}))})),$(g,"templateTitleContent",(function t(){this.$nextTick(this.updateContent)})),g),created:function t(){this.$_toolpop=null},updated:function t(){this.$nextTick(this.updateContent)},beforeDestroy:function t(){this.$off(r.oJ,this.doOpen),this.$off(r.Cc,this.doClose),this.$off(r.MH,this.doDisable),this.$off(r.wV,this.doEnable),this.$_toolpop&&(this.$_toolpop.$destroy(),this.$_toolpop=null)},mounted:function t(){var e=this;this.$nextTick((function(){var t=e.getComponent();e.updateContent();var i=(0,c.P)(e)||(0,c.P)(e.bvParent),n=e.$_toolpop=(0,d.H)(e,t,{_scopeId:i||void 0});n.updateData(e.templateData),n.$on(r.l0,e.onShow),n.$on(r.AS,e.onShown),n.$on(r.yM,e.onHide),n.$on(r.v6,e.onHidden),n.$on(r.gi,e.onDisabled),n.$on(r.VU,e.onEnabled),e[y]&&e.doDisable(),e.$on(r.oJ,e.doOpen),e.$on(r.Cc,e.doClose),e.$on(r.MH,e.doDisable),e.$on(r.wV,e.doEnable),e.localShow&&n.show()}))},methods:{getComponent:function t(){return v.j},updateContent:function t(){this.setTitle(this.normalizeSlot()||this.title)},setTitle:function t(e){e=(0,h.Jp)(e)?"":e,this.localTitle!==e&&(this.localTitle=e)},setContent:function t(e){e=(0,h.Jp)(e)?"":e,this.localContent!==e&&(this.localContent=e)},onShow:function t(e){this.$emit(r.l0,e),e&&(this.localShow=!e.defaultPrevented)},onShown:function t(e){this.localShow=!0,this.$emit(r.AS,e)},onHide:function t(e){this.$emit(r.yM,e)},onHidden:function t(e){this.$emit(r.v6,e),this.localShow=!1},onDisabled:function t(e){e&&e.type===r.gi&&(this.$emit(O,!0),this.$emit(r.gi,e))},onEnabled:function t(e){e&&e.type===r.VU&&(this.$emit(O,!1),this.$emit(r.VU,e))},doOpen:function t(){!this.localShow&&this.$_toolpop&&this.$_toolpop.show()},doClose:function t(){this.localShow&&this.$_toolpop&&this.$_toolpop.hide()},doDisable:function t(){this.$_toolpop&&this.$_toolpop.disable()},doEnable:function t(){this.$_toolpop&&this.$_toolpop.enable()}},render:function t(e){return e()}})},817100:function(t,e,i){i.d(e,{N:function(){return v}});var n=i(601915),o=i(569558),r=i(494689),s=i(512299),a=i(633284),l=i(20451);function c(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function h(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?c(Object(i),!0).forEach((function(e){u(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):c(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function u(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var p={name:"",enterClass:"",enterActiveClass:"",enterToClass:"show",leaveClass:"show",leaveActiveClass:"",leaveToClass:""},d=h(h({},p),{},{enterActiveClass:"fade",leaveActiveClass:"fade"}),f={appear:(0,l.pi)(s.U5,!1),mode:(0,l.pi)(s.N0),noFade:(0,l.pi)(s.U5,!1),transProps:(0,l.pi)(s.aR)},v=(0,n.l7)({name:r.X_,functional:!0,props:f,render:function t(e,i){var n=i.children,r=i.data,s=i.props,l=s.transProps;(0,a.PO)(l)||(l=s.noFade?p:d,s.appear&&(l=h(h({},l),{},{appear:!0,appearClass:l.enterClass,appearActiveClass:l.enterActiveClass,appearToClass:l.enterToClass}))),l=h(h({mode:s.mode},l),{},{css:!0});var c=h({},r);return delete c.props,e("transition",(0,o.b)(c,{props:l}),n)}})},495207:function(t,e,i){i.d(e,{$:function(){return $}});var n=i(601915),o=i(720144),r=i(494689),s=i(243935),a=i(512299),l=i(228112),c=i(11572),h=i(926410),u=i(968265),p=i(633284),d=i(418280),f=i(20451),v=i(455789),m=(0,n.l7)({abstract:!0,name:r.eO,props:{nodes:(0,f.pi)(a.Vh)},data:function t(e){return{updatedNodes:e.nodes}},destroyed:function t(){(0,h.ZF)(this.$el)},render:function t(e){var i=this.updatedNodes,n=(0,p.mf)(i)?i({}):i;return(n=(0,c.zo)(n).filter(u.y))&&n.length>0&&!n[0].text?n[0]:e()}}),g={container:(0,f.pi)([l.mv,a.N0],"body"),disabled:(0,f.pi)(a.U5,!1),tag:(0,f.pi)(a.N0,"div")},b=(0,n.l7)({name:r.H3,mixins:[d.Z],props:g,watch:{disabled:{immediate:!0,handler:function t(e){e?this.unmountTarget():this.$nextTick(this.mountTarget)}}},created:function t(){this.$_defaultFn=null,this.$_target=null},beforeMount:function t(){this.mountTarget()},updated:function t(){this.updateTarget()},beforeDestroy:function t(){this.unmountTarget(),this.$_defaultFn=null},methods:{getContainer:function t(){if(s.Qg){var e=this.container;return(0,p.HD)(e)?(0,h.Ys)(e):e}return null},mountTarget:function t(){if(!this.$_target){var e=this.getContainer();if(e){var i=document.createElement("div");e.appendChild(i),this.$_target=(0,v.H)(this,m,{el:i,propsData:{nodes:(0,c.zo)(this.normalizeSlot())}})}}},updateTarget:function t(){if(s.Qg&&this.$_target){var e=this.$scopedSlots.default;this.disabled||(e&&this.$_defaultFn!==e?this.$_target.updatedNodes=e:e||(this.$_target.updatedNodes=this.$slots.default)),this.$_defaultFn=e}},unmountTarget:function t(){this.$_target&&this.$_target.$destroy(),this.$_target=null}},render:function t(e){if(this.disabled){var i=(0,c.zo)(this.normalizeSlot()).filter(u.y);if(i.length>0&&!i[0].text)return i[0]}return e()}}),T=(0,n.l7)({name:r.H3,mixins:[d.Z],props:g,render:function t(e){if(this.disabled){var i=(0,c.zo)(this.normalizeSlot()).filter(u.y);if(i.length>0)return i[0]}return e(o.default.Teleport,{to:this.container},this.normalizeSlot())}}),$=n.$B?T:b}}]);