function checkWidth(){if($(document).innerWidth()<992){var e=".js-toggle-block",t=".js-toggle-list",s=".js_tech_class";$(document).on("click touch",t,function(){$(s).removeClass("col-6 col-lg-3").addClass("row"),$(e).removeClass("active-list"),$(t).addClass("active-list"),$(".card__sale").remove(),$('<div class="mb-2 card__sale">Sale 25%</div>').insertAfter(".button_card"),$(".wrap").addClass("row no-gutters"),$(".card__img").addClass("col-5"),$(".card__info").addClass("col-7").removeClass("mt-2"),$(".third_col").addClass("col-7 ml-auto"),$('<hr class="card__tech-hr m-0">').insertAfter(".wrap"),$(".card__send-review").removeClass("d-none"),$(".swap_price").swap(".swap_tech_price"),$(".swap_review").swap(".swap_tech_review"),$(".sidebar__img_list").removeClass("js-toggle-list"),$(".sidebar__img_cells").addClass("js-toggle-block").removeClass("active-list")}),$(document).on("click touch",e,function(){$(s).removeClass("row").addClass("col-6 col-lg-3"),$(t).removeClass("active-list"),$(e).addClass("active-list"),$(".card__sale").remove(),$('<div class="mb-2 card__sale">Sale 25%</div>').prependTo(".card"),$(".wrap").removeClass("row no-gutters"),$(".card__img").removeClass("col-5"),$(".card__info").removeClass("col-7").addClass("mt-2"),$(".third_col").removeClass("col-7 ml-auto"),$(".card__tech-hr").remove(),$(".card__send-review").addClass("d-none"),$(".swap_tech_price").swap(".swap_price"),$(".swap_tech_review").swap(".swap_review"),$(".sidebar__img_cells").removeClass("js-toggle-block"),$(".sidebar__img_list").addClass("js-toggle-list").removeClass("active-list")})}else{e=".js-toggle-block",t=".js-toggle-list",s=".js_tech_class";$(document).on("click touch",t,function(){$(s).removeClass("col-6 col-lg-3").addClass("col-12"),$(e).removeClass("active-list"),$(t).addClass("active-list"),$(".card__sale").remove(),$('<div class="mb-2 card__sale">Sale 25%</div>').prependTo(".third_col"),$(".wrap").addClass("row"),$(".card__img").addClass("row col-2"),$(".card__info").addClass("col-7"),$(".third_col").addClass("col-3"),$('<hr class="card__tech-hr m-0">').insertAfter(".wrap"),$(".card__send-review").removeClass("d-none"),$(".product-info").removeClass("d-none"),$(".button_card").removeClass("d-lg-none w-100").addClass("px-4"),$(".swap_price").swap(".swap_tech_price"),$("s").addClass("d-block m-0"),$(".swap_review").swap(".swap_tech_review"),$(".sidebar__img_list").removeClass("js-toggle-list"),$(".sidebar__img_cells").addClass("js-toggle-block").removeClass("active-list")}),$(document).on("click touch",e,function(){$(s).removeClass("col-12").addClass("col-6 col-lg-3"),$(t).removeClass("active-list"),$(e).addClass("active-list"),$(".card__sale").remove(),$('<div class="mb-2 card__sale">Sale 25%</div>').prependTo(".card"),$(".wrap").removeClass("row"),$(".card__img").removeClass("row col-2"),$(".card__info").removeClass("col-7"),$(".third_col").removeClass("col-3"),$(".card__tech-hr").remove(),$(".card__send-review").addClass("d-none"),$(".product-info").addClass("d-none"),$(".button_card").addClass("d-lg-none"),$(".swap_tech_price").swap(".swap_price"),$("s").removeClass("d-block m-0"),$(".swap_tech_review").swap(".swap_review"),$(".sidebar__img_cells").removeClass("js-toggle-block"),$(".sidebar__img_list").addClass("js-toggle-list").removeClass("active-list")})}}!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ssm=t()}(this,function(){"use strict";function e(e,t){e.forEach(function(e){return e(t)})}var t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},s=function(){function e(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,s,n){return s&&e(t.prototype,s),n&&e(t,n),t}}(),n=[],i=function(){},o=function(){function o(e){if(t(this,o),this.id=e.id||Math.random().toString(36).substr(2,9),this.query=e.query||"all",this.options=Object.assign({},{onEnter:[],onLeave:[],onResize:[],onFirstRun:[]},e),"function"==typeof this.options.onEnter&&(this.options.onEnter=[this.options.onEnter]),"function"==typeof this.options.onLeave&&(this.options.onLeave=[this.options.onLeave]),"function"==typeof this.options.onResize&&(this.options.onResize=[this.options.onResize]),"function"==typeof this.options.onFirstRun&&(this.options.onFirstRun=[this.options.onFirstRun]),!1===this.testConfigOptions("once"))return this.valid=!1,!1;this.valid=!0,this.active=!1,this.init()}return s(o,[{key:"init",value:function(){var e=this;this.test=window.matchMedia(this.query),this.test.matches&&this.testConfigOptions("match")&&this.enterState(),this.listener=function(t){var s=!1;t.matches?e.testConfigOptions("match")&&(e.enterState(),s=!0):(e.leaveState(),s=!0),s&&i()},this.test.addListener(this.listener)}},{key:"enterState",value:function(){e(this.options.onFirstRun,this.eventData("firstRun")),e(this.options.onEnter,this.eventData("enter")),this.options.onFirstRun=[],this.active=!0}},{key:"leaveState",value:function(){e(this.options.onLeave,this.eventData("leave")),this.active=!1}},{key:"resizeState",value:function(){this.testConfigOptions("resize")&&e(this.options.onResize,this.eventData("resize"))}},{key:"destroy",value:function(){this.test.removeListener(this.listener)}},{key:"attachCallback",value:function(e,t,s){switch(e){case"enter":this.options.onEnter.push(t);break;case"leave":this.options.onLeave.push(t);break;case"resize":this.options.onResize.push(t)}"enter"===e&&s&&this.active&&t(this.eventData(e))}},{key:"testConfigOptions",value:function(e){var t=this,s=!0;return n.forEach(function(n){void 0!==t.options[n.name]&&n.when===e&&!1===n.test.bind(t)()&&(s=!1)}),s}},{key:"eventData",value:function(e){return{eventType:e,state:this}}}],[{key:"addConfigOption",value:function(e){n.push(e)}},{key:"getConfigOptions",value:function(){return n}},{key:"removeConfigOption",value:function(e){n.forEach(function(t,s){t.name===e&&n.splice(s,1)})}},{key:"setStateChangeMethod",value:function(e){if("function"!=typeof e)throw new Error("Not a function");i=e}}]),o}();return new(function(){function e(){t(this,e),this.states=[],this.resizeTimer=null,this.configOptions=[],window.addEventListener("resize",function(e){var t=this,s=void 0;return function(){for(var n=arguments.length,i=Array(n),o=0;o<n;o++)i[o]=arguments[o];s&&window.cancelAnimationFrame(s),s=window.requestAnimationFrame(function(){s=null,e.apply(t,i)})}}(this.resizeBrowser.bind(this)),!0)}return s(e,[{key:"addState",value:function(e){var t=new o(e);return t.valid&&this.states.push(t),t}},{key:"addStates",value:function(e){var t=this;e.forEach(function(e){return t.addState(e)})}},{key:"getState",value:function(e){return this.states.filter(function(t){return t.id===e})[0]||!1}},{key:"isActive",value:function(e){return(this.getState(e)||{}).active||!1}},{key:"getStates",value:function(e){var t=this;return void 0===e?this.states:e.map(function(e){return t.getState(e)})}},{key:"removeState",value:function(e){var t=this;this.states.forEach(function(s,n){s.id===e&&(s.destroy(),t.states.splice(n,1))})}},{key:"removeStates",value:function(e){var t=this;e.forEach(function(e){return t.removeState(e)})}},{key:"removeAllStates",value:function(){this.states.forEach(function(e){return e.destroy()}),this.states=[]}},{key:"addConfigOption",value:function(e){var t=e.name,s=void 0===t?"":t,n=e.test,i=void 0===n?null:n,a=e.when,r=void 0===a?"resize":a;""!==s&&null!==i&&o.addConfigOption({name:s,test:i,when:r})}},{key:"removeConfigOption",value:function(e){o.removeConfigOption(e)}},{key:"getConfigOptions",value:function(e){var t=o.getConfigOptions();return"string"==typeof e?t.filter(function(t){return t.name===e}):t}},{key:"resizeBrowser",value:function(){var e,t;(e=this.states,t="active",!0,e.filter(function(e){return e[t]&&!0===e[t]})).forEach(function(e){e.resizeState()})}},{key:"stateChange",value:function(e){o.setStateChangeMethod(e)}}]),e}())}),jQuery.fn.swap=function(e){e=jQuery(e)[0];var t=this[0],s=t.cloneNode(!0),n=e.cloneNode(!0);return t.parentNode.replaceChild(n,t),e.parentNode.replaceChild(s,e),this[0]=s,this.pushStack(this)},checkWidth(),$(window).resize(function(){checkWidth()}),$(function(){$(document).on("click",".js_selected_price",function(){$(".js_selected_price").addClass("selected_color"),$(".js_selected_none").removeClass("selected_color")}),$(document).on("click",".js_selected_none",function(){$(".js_selected_none").addClass("selected_color"),$(".js_selected_price").removeClass("selected_color"),$(".js_selected_brand").removeClass("selected_color")}),$(document).on("click",".js_selected_brand",function(){$(".js_selected_brand").addClass("selected_color"),$(".js_selected_none").removeClass("selected_color")}),$(function(){var e=".js_selected_quantity_first",t=".js_selected_quantity_second",s=".js_selected_quantity_third";$(document).on("click",e,function(){$(e).addClass("selected_quantity"),$(t).removeClass("selected_quantity"),$(s).removeClass("selected_quantity")}),$(document).on("click",t,function(){$(t).addClass("selected_quantity"),$(e).removeClass("selected_quantity"),$(s).removeClass("selected_quantity")}),$(document).on("click",s,function(){$(s).addClass("selected_quantity"),$(t).removeClass("selected_quantity"),$(e).removeClass("selected_quantity")})})});