webpackJsonp([18],{"8nzx":function(t,e,i){"use strict";e.a={data:function(){return{loading:{environment:!1,table:!1}}},computed:{filterText:{get:function(){return this.$store.state[this.service.name].data.filter.text},set:function(t){return this.$store.dispatch(this.service.name+"/mutateSetQueryFilterText",t)}},emptyForm:function(){return this.$store.state[this.service.name].emptyForm},form:function(){return this.$store.state[this.service.name].form},selected:function(){return this.$store.state[this.service.name].selected},environment:function(){return this.$store.state.environment},pagination:function(){return this.$store.state[this.service.name].data.links?this.$store.state[this.service.name].data.links.pagination:{}},perPage:{get:function(){return this.pagination.per_page},set:function(t){this.$store.dispatch(this.service.name+"/setPerPage",t)}}},methods:{load:function(){return this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page),this.$store.dispatch(this.service.name+"/load")},select:function(t){return this.$store.dispatch(this.service.name+"/select",t)},save:function(t){return this.$store.dispatch(this.service.name+"/save",t)},mutateSetErrors:function(t){this.$store.commit(this.service.name+"/mutateSetErrors",t)},mutateFormData:function(t){this.$store.commit(this.service.name+"/mutateFormData",t)},mutateSetFormField:function(t){this.$store.commit(this.service.name+"/mutateSetFormField",t)},mutateSetService:function(t){this.$store.commit(this.service.name+"/mutateSetService",t)},isLoading:function(){return this.loading.environment||this.loading.table},boot:function(){var t=this;this.mutateSetService(this.service),!this.service.hasOwnProperty("performLoad")||this.service.performLoad?this.load().then(function(){t.fillFormWhenEditing()}):this.fillFormWhenEditing(),this.$store.dispatch(this.service.name+"/subscribeToTableEvents")},fillFormWhenEditing:function(){var t=this,e="update"===this.mode?_.find(this.rows,function(e){return e.id===t.$route.params.id}):this.form?clone(this.emptyForm):{};this.mutateFormData(e),this.mutateSetErrors({}),this.fillAdditionalFormFields()},fillAdditionalFormFields:function(){},back:function(){this.$router.back()},saveModel:function(){var t=this;this.save(this.mode).then(function(){t.back(),t.clearForm()})},can:function(t){return t&&!1},cannot:function(t){return!can(t)},gotoPage:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;(i=i||this.pagination).current_page!==t&&(t<1||t>i.last_page||this.$store.dispatch((e||this.service.name)+"/setCurrentPage",t))},isCurrent:function(t,e){return t.id===e.id},setPerPage:function(){this.$store.commit(this.service.name+"/mutateSetPerPage",this.environment.user.per_page)},getDataUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)},getUpdateStoreUrl:function(){return buildApiUrl(this.service.uri,this.$store.state)}},mounted:function(){this.boot()}}},AE2E:function(t,e,i){"use strict";var s=i("NYxO"),n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};e.a={methods:n({},Object(s.mapActions)("contactTypes",["clearForm"])),computed:n({},Object(s.mapState)({contactTypes:function(t){return t.contactTypes}}))}},BXc5:function(t,e,i){var s=i("F5BO");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);i("rjj0")("7eaa566a",s,!0,{})},EPwk:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("8nzx"),n=i("AE2E"),r={name:"contactTypes",uri:"contact-types",performLoad:!1};e.default={props:["mode"],mixins:[s.a,n.a],data:function(){return{service:r}}}},F5BO:function(t,e,i){(t.exports=i("FZ+f")(!1)).push([t.i,"",""])},pxpb:function(t,e,i){var s=i("VU/8")(i("EPwk"),i("xHfw"),!1,function(t){i("BXc5")},null,null);t.exports=s.exports},xHfw:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"py-2 text-center"},[i("h2",[t._v(t._s("create"===this.mode?"Novo ":"Editar ")+"Tipo de Contato")]),t._v(" "),i("h2",[t._v(" "+t._s(t.form.fields.name?t.form.fields.name:""))])]),t._v(" "),i("div",{staticClass:"row justify-content-center"},[i("div",{staticClass:"col-8"},[i("form",[i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 mb-3"},[i("app-input",{attrs:{name:"name",label:"Nome",required:!0,form:t.form},model:{value:t.form.fields.name,callback:function(e){t.$set(t.form.fields,"name",e)},expression:"form.fields.name"}}),t._v(" "),i("app-input",{attrs:{name:"code",label:"Código",required:!0,form:t.form},model:{value:t.form.fields.code,callback:function(e){t.$set(t.form.fields,"code",e)},expression:"form.fields.code"}})],1)]),t._v(" "),i("div",{staticClass:"row"},[i("div",{staticClass:"col-12 text-right mb-3"},[i("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"submit"},on:{click:function(e){e.preventDefault(),t.saveModel()}}},[t._v("gravar")]),t._v(" "),i("router-link",{staticClass:"btn btn-success",attrs:{to:"/contact-types",tag:"button"}},[t._v("\n                            cancelar\n                        ")])],1)])])])])])},staticRenderFns:[]}}});