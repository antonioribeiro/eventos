(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{Aqzt:function(t,e,n){"use strict";var i=n("L2JU");function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){r(t,e,n[e])})}return t}function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={methods:a({},Object(i.mapActions)("topics",["clearForm"])),computed:a({},Object(i.mapState)({topics:function(t){return t.topics}}))}},f56Z:function(t,e,n){"use strict";n.r(e);var i=n("jx1L"),a=n("Aqzt"),r=n("CtO9"),s={name:"topics",uri:"topics"},o={mixins:[i.a,a.a,r.a],data:function(){return{service:s}}},c=n("KHd+"),l=Object(c.a)(o,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-lg-4"},[t.can("topics:read")||t.can("topics:modify")?n("app-table-panel",{attrs:{title:"Interesses ("+t.pagination.total+")","add-button":{uri:"/topics/create",disabled:t.cannot("topics:modify")},"per-page":t.perPage,"filter-text":t.filterText},on:{"input-filter-text":function(e){t.filterText=e.target.value},"set-per-page":function(e){t.perPage=e}}},[n("app-table",{attrs:{pagination:t.pagination,columns:["#","Nome",""]},on:{"goto-page":function(e){return t.gotoPage(e)}}},t._l(t.topics.data.rows,function(e){return n("tr",{class:{"cursor-pointer":!0,"bg-primary-lighter text-white":t.isCurrent(e,t.selected)},on:{click:function(n){return t.select(e)}}},[n("td",{staticClass:"align-middle"},[t._v(t._s(e.id))]),t._v(" "),n("td",{staticClass:"align-middle"},[t._v(t._s(e.name))]),t._v(" "),n("td",{staticClass:"align-middle text-right"},[n("router-link",{staticClass:"btn btn-danger btn-sm ml-1 pull-right",attrs:{to:"/topics/"+e.id+"/update",tag:"button",disabled:t.cannot("topics:modify"),title:"Editar Interesse"}},[n("i",{staticClass:"fa fa-edit"})])],1)])}),0)],1):t._e()],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-2 text-center"},[e("h2",[this._v("Interesses")])])}],!1,null,null,null);e.default=l.exports}}]);