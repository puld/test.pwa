(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{146:function(t,n,e){"use strict";e(43);var r={data:function(){return{title:null}},watch:{$route:function(t){this.title=t.name}}},o=e(34),component=Object(o.a)(r,(function(){var t=this.$createElement,n=this._self._c||t;return n("v-app",[n("v-main",[n("nuxt")],1)],1)}),[],!1,null,null,null);n.a=component.exports},147:function(t,n,e){t.exports=e(148)},197:function(t,n,e){"use strict";e.r(n);e(18);var r=e(3),o=e(29),c=(e(13),e(28),function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.e(0).then(e.t.bind(null,199,3));case 3:return n=t.sent,t.abrupt("return",n.default);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",[]);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}()),f=function(){var t=Object(r.a)(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.e(0).then(e.t.bind(null,199,3));case 3:return r=t.sent,t.abrupt("return",r.default[n]);case 7:return t.prev=7,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",void 0);case 11:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(n){return t.apply(this,arguments)}}();n.default=function(){return new o.a.Store({state:{songs:{},song:{}},getters:{songs:function(t){return t.songs},song:function(t){return t.song}},mutations:{setSongs:function(t,n){t.songs=n},setSong:function(t,n){t.song=n}},actions:{fetchSongs:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.commit,n.t0=e,n.next=4,c();case 4:n.t1=n.sent,(0,n.t0)("setSongs",n.t1);case 6:case"end":return n.stop()}}),n)})))()},fetchSong:function(t,n){return Object(r.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.commit,e.t0=r,e.next=4,f(n);case 4:e.t1=e.sent,(0,e.t0)("setSong",e.t1);case 6:case"end":return e.stop()}}),e)})))()}}})}}},[[147,6,2,7]]]);