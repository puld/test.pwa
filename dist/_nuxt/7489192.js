(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{201:function(t,e,n){"use strict";n.r(e);n(18);var r=n(3),o={fetch:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.store,r=t.params,n.dispatch("fetchSong",r.id);case 2:case"end":return e.stop()}}),e)})))()},computed:{song:function(){return this.$store.getters.song}}},c=n(34),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-app-bar",{attrs:{app:"",color:"green"}},[n("v-btn",{attrs:{icon:"",to:"/"}},[n("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.song.n+". "+t.song.title))])],1),t._v(" "),n("v-list",{attrs:{dense:""}},[n("v-list-item-group",{attrs:{color:"primary"}},t._l(t.song.body,(function(e,i){return n("v-list-item",{key:i},[n("v-subheader",[t._v(t._s("verse"==e.type?"Куплет":"Припев"))]),t._v(" "),"verse"==e.type||null==e.repeatId?n("v-list-item-content",[t._v("\n\t\t\t\t\t"+t._s(e.content)+"\n\t\t\t\t")]):t._e()],1)})),1)],1),t._v("\n\t"+t._s(t.song.text)+"\n")],1)}),[],!1,null,null,null);e.default=component.exports}}]);