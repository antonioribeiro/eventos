(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{Y9pt:function(t,e,r){"use strict";r.r(e);var a=r("jx1L"),s=r("wGpl"),n=r("CtO9"),i={name:"sectors",uri:"sectors"},o={mixins:[a.a,s.a,n.a],data:function(){return{service:i}}},c=r("KHd+"),l=Object(c.a)(o,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t._m(0),t._v(" "),r("div",{staticClass:"row"},[r("div",{staticClass:"col-12 col-lg-4"},[t.can("sectors:read")||t.can("sectors:modify")?r("app-table-panel",{attrs:{title:"Setores ("+t.pagination.total+")","add-button":{uri:"/sectors/create",disabled:t.cannot("sectors:modify")},"per-page":t.perPage,"filter-text":t.filterText},on:{"input-filter-text":function(e){t.filterText=e.target.value},"set-per-page":function(e){t.perPage=e}}},[r("app-table",{attrs:{pagination:t.pagination,columns:["#","Nome","Cor",""]},on:{"goto-page":function(e){return t.gotoPage(e)}}},t._l(t.sectors.data.rows,function(e){return r("tr",{class:{"cursor-pointer":!0,"bg-primary-lighter text-white":t.isCurrent(e,t.selected)},on:{click:function(r){return t.select(e)}}},[r("td",{staticClass:"align-middle"},[t._v(t._s(e.id))]),t._v(" "),r("td",{staticClass:"align-middle"},[r("app-sector-badge",{key:"sector.id",staticClass:"mt-2 p-4",attrs:{sector:e,"font-size":"1.2em",uppercase:"true",padding:"1"}})],1),t._v(" "),r("td",{staticClass:"align-middle"},[t._v(t._s(e.color))]),t._v(" "),r("td",{staticClass:"align-middle text-right"},[r("router-link",{staticClass:"btn btn-danger btn-sm ml-1 pull-right",attrs:{to:"/sectors/"+e.id+"/update",tag:"button",disabled:t.cannot("sectors:modify"),title:"Editar Função"}},[r("i",{staticClass:"fa fa-edit"})])],1)])}),0)],1):t._e()],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"py-2 text-center"},[e("h2",[this._v("Setores")])])}],!1,null,null,null);e.default=l.exports},wGpl:function(t,e,r){"use strict";var a=r("L2JU");function s(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),a.forEach(function(e){n(t,e,r[e])})}return t}function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}e.a={methods:s({},Object(a.mapActions)("sectors",["clearForm"])),computed:s({},Object(a.mapState)({sectors:function(t){return t.sectors}}))}}}]);