(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{CtO9:function(t,e,s){"use strict";e.a={methods:{can:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}(function(){return can.apply(this,arguments)}),cannot:function(){return!this.can.apply(this,arguments)}}}},WPQR:function(t,e,s){"use strict";var n=s("L2JU");function i(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){a(t,e,s[e])})}return t}function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}e.a={data:function(){return{people_current:{id:"null"}}},methods:i({},Object(n.mapActions)("people",["clearForm"]),{makePhotoUrl:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t||(t=this.people.form.fields.photoUrl),t||(t=this.people.selected.photoUrl);var e=this.people_current.id!=this.people.selected.id;return this.people_current.id=this.people.selected.id,flush_image_cache(t,e)}}),computed:i({},Object(n.mapState)({people:function(t){return t.people},personInstitutions:function(t){return t.personInstitutions},contacts:function(t){return t.contacts},addresses:function(t){return t.addresses},personCategories:function(t){return t.personCategories},personTopics:function(t){return t.personTopics},advisors:function(t){return t.advisors},advisorContacts:function(t){return t.advisorContacts}}))}},ayS1:function(t,e,s){"use strict";s.r(e);var n=s("jx1L"),i=s("WPQR"),a=s("CtO9"),o=s("L2JU");function r(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var l={name:"people",uri:"people"},c={mixins:[n.a,i.a,a.a],data:function(){return{service:l}},methods:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{},n=Object.keys(s);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(s).filter(function(t){return Object.getOwnPropertyDescriptor(s,t).enumerable}))),n.forEach(function(e){r(t,e,s[e])})}return t}({},Object(o.mapActions)(l.name,["selectPerson","selectPersonInstitution","selectAddress","selectContact","selectAdvisor","selectAdvisorContacts"]),{peopleGotoPage:function(t){this.gotoPage(t,"people",this.people.data.links.pagination)},personInstitutionsGotoPage:function(t){this.gotoPage(t,"personInstitutions",this.personInstitutions.data.links.pagination)},personTopicsGotoPage:function(t){this.gotoPage(t,"personTopics",this.personTopics.data.links.pagination)},addressesGotoPage:function(t){this.gotoPage(t,"addresses",this.addresses.data.links.pagination)},contactsGotoPage:function(t){this.gotoPage(t,"contacts",this.contacts.data.links.pagination)},advisorContactsGotoPage:function(t){this.gotoPage(t,"advisorContacts",this.contacts.data.links.pagination)},personCategoriesGotoPage:function(t){this.gotoPage(t,"personCategories",this.personCategories.data.links.pagination)},advisorsGotoPage:function(t){this.gotoPage(t,"advisors",this.advisors.data.links.pagination)},confirmDeletePersonCategory:function(t){var e=this;confirm("Deseja realmente desassociar "+t.name+"?",this).then(function(s){s&&e.deletePersonCategory(t)})},deletePersonCategory:function(t){return this.$store.dispatch("personCategories/unCategorize",t)},confirmDeletePersonTopic:function(t){var e=this;confirm("Deseja realmente desassociar "+t.topic.name+"?",this).then(function(s){s&&e.deletePersonTopic(t)})},deletePersonTopic:function(t){return this.$store.dispatch("personTopics/unTopicize",t)}}),computed:{peopleFilterText:{get:function(){return this.$store.state.people.data.filter.text},set:function(t){return this.$store.dispatch(this.service.name+"/mutateSetQueryFilterText",t)}},peoplePerPage:{get:function(){return this.$store.state.people.data.links.pagination.per_page},set:function(t){return this.$store.dispatch("people/setPerPage",t)}},personInstitutionsFilterText:{get:function(){return this.$store.state.personInstitutions.data.filter.text},set:function(t){return this.$store.dispatch("personInstitutions/mutateSetQueryFilterText",t)}},personInstitutionsPerPage:{get:function(){return this.$store.state.personInstitutions.data.links.pagination.per_page},set:function(t){return this.$store.dispatch("personInstitutions/setPerPage",t)}},personTopicsFilterText:{get:function(){return this.$store.state.personTopics.data.filter.text},set:function(t){return this.$store.dispatch("personTopics/mutateSetQueryFilterText",t)}},personTopicsPerPage:{get:function(){return this.$store.state.personTopics.data.links.pagination.per_page},set:function(t){return this.$store.dispatch("personTopics/setPerPage",t)}},addressesFilterText:{get:function(){return this.$store.state.addresses.data.filter.text},set:function(t){return this.$store.dispatch("addresses/mutateSetQueryFilterText",t)}},addressesPerPage:{get:function(){return this.$store.state.addresses.data.links.pagination.per_page},set:function(t){return this.$store.dispatch("addresses/setPerPage",t)}},contactsFilterText:{get:function(){return this.$store.state.contacts.data.filter.text},set:function(t){return this.$store.dispatch("contacts/mutateSetQueryFilterText",t)}},contactsPerPage:{get:function(){return this.$store.state.contacts.data.links.pagination.per_page},set:function(t){return this.$store.dispatch("contacts/setPerPage",t)}},personCategoriesFilterText:{get:function(){return this.$store.state.personCategories.data.filter.text},set:function(t){return this.$store.dispatch("personCategories/mutateSetQueryFilterText",t)}},personCategoriesPerPage:{get:function(){return this.$store.state.personCategories.data.links.pagination.per_page},set:function(t){return this.$store.dispatch("personCategories/setPerPage",t)}},advisorsFilterText:{get:function(){return this.$store.state.advisors.data.filter.text},set:function(t){return this.$store.dispatch("advisors/mutateSetQueryFilterText",t)}},advisorsPerPage:{get:function(){return this.$store.state.advisors.data.links.pagination.per_page},set:function(t){return this.$store.dispatch("advisors/setPerPage",t)}},advisorContactsFilterText:{get:function(){return this.$store.state.advisorContacts.data.filter.text},set:function(t){return this.$store.dispatch("advisorContacts/mutateSetQueryFilterText",t)}},advisorContactsPerPage:{get:function(){return this.$store.state.advisorContacts.data.links.pagination.per_page},set:function(t){return this.$store.dispatch("advisorContacts/setPerPage",t)}},hasNoPhotoCheckbox:{get:function(){return this.$store.state.people.data.filter.checkboxes.hasNoPhoto},set:function(t){this.$store.dispatch("people/mutateFilterCheckbox",{field:"hasNoPhoto",value:t})}}}},d=s("KHd+"),p=Object(d.a)(c,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"py-2 text-center"},[t._m(0),t._v(" "),t.selected.id&&t.personInstitutions.data.links?s("div",{staticClass:"row bg-primary text-white"},[s("div",{staticClass:"col-12 mt-2"},[s("div",{staticClass:"row justify-content-center align-items-center"},[s("div",{staticClass:"col-8"},[s("h1",{staticClass:"display-4 mb-0"},[t._v(t._s(t.selected.name))])]),t._v(" "),s("div",{staticClass:"col-4"},[s("img",{staticClass:"img-thumbnail rounded mx-auto d-block mb-2",attrs:{src:t.makePhotoUrl(t.selected.photoUrl),width:"200",height:"200"}})])])])]):t._e()]),t._v(" "),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-lg-4"},[(t.can("people:read")||t.can("people:modify"))&&t.people.data.links?s("app-table-panel",{attrs:{title:"Pessoas ("+t.pagination.total+")","add-button":{uri:"/people/create",disabled:t.cannot("people:modify"),dusk:"create-people-button"},"per-page":t.peoplePerPage,"filter-text":t.peopleFilterText},on:{"set-per-page":function(e){t.peoplePerPage=e},"input-filter-text":function(e){t.peopleFilterText=e.target.value}}},[s("template",{slot:"selects"},[s("app-institution-filter-for-person",{attrs:{name:"institution_id",label:"Instituição",required:!0,form:t.form,options:t.environment.tables.institutions}}),t._v(" "),s("app-role-filter-for-person",{attrs:{name:"role_id",label:"Função",required:!0,form:t.form,options:t.environment.tables.roles}})],1),t._v(" "),s("template",{slot:"checkboxes"},[s("app-input",{attrs:{name:"hasNoPhotoCheckbox",label:"sem foto",type:"checkbox",required:!0,form:t.form,inline:"true"},model:{value:t.hasNoPhotoCheckbox,callback:function(e){t.hasNoPhotoCheckbox=e},expression:"hasNoPhotoCheckbox"}})],1),t._v(" "),s("app-table",{attrs:{pagination:t.people.data.links.pagination,columns:["#","Tratamento","Nome","Nome público",""]},on:{"goto-page":function(e){return t.peopleGotoPage(e)}}},t._l(t.people.data.rows,function(e){return s("tr",{class:{"cursor-pointer":!0,"bg-primary text-white":t.isCurrent(e,t.selected)},on:{click:function(s){return t.selectPerson(e)}}},[s("td",{staticClass:"align-middle"},[t._v(t._s(e.id))]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v(t._s(e.title))]),t._v(" "),s("td",{staticClass:"align-middle",attrs:{dusk:"dusk-da-pessoa"}},[t._v("\n                            "+t._s(e.name)+"\n                        ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v(t._s(e.nickname))]),t._v(" "),s("td",{staticClass:"align-middle text-right"},[s("router-link",{staticClass:"btn btn-danger btn-sm ml-1 pull-right",attrs:{to:"/people/"+e.id+"/update",tag:"button",disabled:t.cannot("people:modify"),title:"Editar Pessoa"}},[s("i",{staticClass:"fa fa-edit"})])],1)])}),0)],2):t._e()],1),t._v(" "),s("div",{staticClass:"col-12 col-lg-8"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[(t.can("people:read")||t.can("people:modify"))&&t.selected.id&&t.personCategories.data.links?s("app-table-panel",{attrs:{title:"Categorias: "+t.personCategories.data.links.pagination.total,"add-button":{uri:"/people/"+t.people.selected.id+"/categories/create",disabled:t.cannot("people:modify"),dusk:"add-category"},"per-page":t.personCategoriesPerPage,"filter-text":t.personCategoriesFilterText},on:{"set-per-page":function(e){t.personCategoriesPerPage=e},"input-filter-text":function(e){t.personCategoriesFilterText=e.target.value}}},[s("app-table",{attrs:{pagination:t.personCategories.data.links.pagination,columns:["#","Nome",""]},on:{"goto-page":function(e){return t.personCategoriesGotoPage(e)}}},t._l(t.personCategories.data.rows,function(e){return s("tr",{staticClass:"cursor-pointer",class:{"cursor-pointer":!0,"bg-primary text-white":t.isCurrent(e,t.personCategories.selected)}},[s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.id)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.name)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle text-right"},[s("div",{staticClass:"btn btn-danger btn-sm mr-1 pull-right",attrs:{title:"Excluir Categoria"},on:{click:function(s){return t.confirmDeletePersonCategory(e)}}},[s("i",{staticClass:"fa fa-trash"})])])])}),0)],1):t._e()],1),t._v(" "),s("div",{staticClass:"col-12"},[(t.can("people:read")||t.can("people:modify"))&&t.selected.id&&t.personTopics.data.links?s("app-table-panel",{attrs:{title:"Interesses: "+t.personTopics.data.links.pagination.total,"add-button":{uri:"/people/"+t.people.selected.id+"/person-topics/create",disabled:t.cannot("people:modify")},"per-page":t.personTopicsPerPage,"filter-text":t.personTopicsFilterText},on:{"set-per-page":function(e){t.personTopicsPerPage=e},"input-filter-text":function(e){t.personTopicsFilterText=e.target.value}}},[s("app-table",{attrs:{pagination:t.personTopics.data.links.pagination,columns:["#","Nome",""]},on:{"goto-page":function(e){return t.personTopicsGotoPage(e)}}},t._l(t.personTopics.data.rows,function(e){return s("tr",{staticClass:"cursor-pointer",class:{"cursor-pointer":!0,"bg-primary text-white":t.isCurrent(e,t.personTopics.selected)}},[s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.id)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.topic.name)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle text-right"},[s("div",{staticClass:"btn btn-danger btn-sm mr-1 pull-right",attrs:{title:"Excluir Interesse"},on:{click:function(s){return t.confirmDeletePersonTopic(e)}}},[s("i",{staticClass:"fa fa-trash"})])])])}),0)],1):t._e()],1),t._v(" "),s("div",{staticClass:"col-12"},[(t.can("people:read")||t.can("people:modify"))&&t.selected.id&&t.personInstitutions.data.links?s("app-table-panel",{attrs:{title:"Funções: "+t.personInstitutions.data.links.pagination.total,"add-button":{uri:"/people/"+t.personInstitutions.person.id+"/person-institutions/create",disabled:t.cannot("people:modify"),dusk:"add-function"},"per-page":t.personInstitutionsPerPage,"filter-text":t.personInstitutionsFilterText},on:{"set-per-page":function(e){t.personInstitutionsPerPage=e},"input-filter-text":function(e){t.personInstitutionsFilterText=e.target.value}}},[s("app-table",{attrs:{pagination:t.personInstitutions.data.links.pagination,columns:["#","Tratamento","Instituição","Função","Status",""]},on:{"goto-page":function(e){return t.personInstitutionsGotoPage(e)}}},t._l(t.personInstitutions.data.rows,function(e){return s("tr",{staticClass:"cursor-pointer",class:{"cursor-pointer":!0,"bg-primary text-white":t.isCurrent(e,t.personInstitutions.selected)},on:{click:function(s){return t.selectPersonInstitution(e)}}},[s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.id)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle",attrs:{dusk:"role-click"}},[t._v("\n                                    "+t._s(e.title)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.institution.name)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.role.name)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[s("h6",{staticClass:"m-0"},[s("app-active-badge",{attrs:{value:e.is_active,labels:["ativo","inativo"]}})],1)]),t._v(" "),null==e.advised_id?s("td",{staticClass:"align-middle text-right"},[s("router-link",{staticClass:"btn btn-danger btn-sm ml-1 pull-right",attrs:{to:"/people/"+t.personInstitutions.person.id+"/person-institutions/"+e.id+"/update",tag:"button",disabled:t.cannot("people:modify"),title:"Editar Função"}},[s("i",{staticClass:"fa fa-edit"})])],1):t._e()])}),0)],1):t._e()],1),t._v(" "),s("div",{staticClass:"col-12"},[(t.can("people:read")||t.can("people:modify"))&&t.personInstitutions.selected.id&&t.contacts.data.links?s("app-table-panel",{attrs:{title:"Contatos: "+t.contacts.data.links.pagination.total,"add-button":{uri:"/people/"+t.personInstitutions.person.id+"/person-institutions/"+t.contacts.personInstitution.id+"/contacts/create",disabled:t.cannot("people:modify"),dusk:"add-contact"},"per-page":t.contactsPerPage,"filter-text":t.contactsFilterText},on:{"set-per-page":function(e){t.contactsPerPage=e},"input-filter-text":function(e){t.contactsFilterText=e.target.value}}},[s("app-table",{attrs:{pagination:t.contacts.data.links.pagination,columns:["#","Tipo","Contato","Status",""]},on:{"goto-page":function(e){return t.contactsGotoPage(e)}}},t._l(t.contacts.data.rows,function(e){return s("tr",{staticClass:"cursor-pointer",class:{"cursor-pointer":!0,"bg-primary text-white":t.isCurrent(e,t.contacts.selected)},on:{click:function(s){return t.selectContact(e)}}},[s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.id)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.contact_type.name)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.contact)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[s("h6",{staticClass:"m-0"},[s("app-active-badge",{attrs:{value:e.is_active,labels:["ativo","inativo"]}})],1)]),t._v(" "),s("td",{staticClass:"align-middle text-right"},[s("router-link",{staticClass:"btn btn-danger btn-sm ml-1 pull-right",attrs:{to:"/people/"+t.personInstitutions.person.id+"/person-institutions/"+t.contacts.personInstitution.id+"/contacts/"+e.id+"/update",tag:"button",disabled:t.cannot("people:modify"),title:"Editar Contato"}},[s("i",{staticClass:"fa fa-edit"})])],1)])}),0)],1):t._e()],1),t._v(" "),s("div",{staticClass:"col-12"},[(t.can("people:read")||t.can("people:modify"))&&t.personInstitutions.selected.id&&t.addresses.data.links?s("app-table-panel",{attrs:{title:"Endereços: "+t.addresses.data.links.pagination.total,"add-button":{uri:"/people/"+t.personInstitutions.person.id+"/person-institutions/"+t.addresses.personInstitution.id+"/addresses/create",disabled:t.cannot("people:modify")},"per-page":t.addressesPerPage,"filter-text":t.addressesFilterText},on:{"set-per-page":function(e){t.addressesPerPage=e},"input-filter-text":function(e){t.addressesFilterText=e.target.value}}},[s("app-table",{attrs:{pagination:t.addresses.data.links.pagination,columns:["#","Rua","Numero","Complemento","Bairro","Cidade",""],rows:t.addresses.data.rows},on:{"goto-page":function(e){return t.addressesGotoPage(e)}}},t._l(t.addresses.data.rows,function(e){return s("tr",{staticClass:"cursor-pointer",class:{"cursor-pointer":!0,"bg-primary text-white":t.isCurrent(e,t.addresses.selected)},on:{click:function(s){return t.selectAddress(e)}}},[s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.id)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.street)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.number)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.complement)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.neighbourhood)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.zipcode)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.city)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.state)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle text-right"},[s("router-link",{staticClass:"btn btn-danger btn-sm ml-1 pull-right",attrs:{to:"/people/"+t.personInstitutions.person.id+"/person-institutions/"+t.addresses.personInstitution.id+"/addresses/"+e.id+"/update",tag:"button",disabled:t.cannot("people:modify"),title:"Editar Endereço"}},[s("i",{staticClass:"fa fa-edit"})])],1)])}),0)],1):t._e()],1),t._v(" "),s("div",{staticClass:"col-12"},[(t.can("people:read")||t.can("people:modify"))&&t.personInstitutions.selected.id&&t.advisors.data.links?s("app-table-panel",{attrs:{title:"Assessores: "+t.advisors.data.links.pagination.total,"add-button":{uri:"/people/"+t.personInstitutions.person.id+"/person-institutions/"+t.advisors.personInstitution.id+"/advisors/create",disabled:t.cannot("people:modify")},"per-page":t.advisorsPerPage,"filter-text":t.advisorsFilterText},on:{"set-per-page":function(e){t.advisorsPerPage=e},"input-filter-text":function(e){t.advisorsFilterText=e.target.value}}},[s("app-table",{attrs:{pagination:t.advisors.data.links.pagination,columns:["#","Tratamento","Nome","Nome Público",""]},on:{"goto-page":function(e){return t.advisorsGotoPage(e)}}},t._l(t.advisors.data.rows,function(e){return s("tr",{staticClass:"cursor-pointer",class:{"cursor-pointer":!0,"bg-primary text-white":t.isCurrent(e,t.advisors.selected)},on:{click:function(s){return t.selectAdvisor(e)}}},[s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.id)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.person.title)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.person.name)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.person.nickname)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[s("router-link",{staticClass:"btn btn-danger btn-sm ml-1 pull-right",attrs:{to:"/people/"+t.personInstitutions.person.id+"/person-institutions/"+t.advisors.personInstitution.id+"/advisors/"+e.id+"/update",tag:"button",disabled:t.cannot("people:modify"),title:"Editar Assessor"}},[s("i",{staticClass:"fa fa-edit"})])],1)])}),0)],1):t._e()],1),t._v(" "),s("div",{staticClass:"col-12"},[(t.can("people:read")||t.can("people:modify"))&&t.advisors.selected.id&&t.advisorContacts.data.links?s("app-table-panel",{attrs:{title:"Contatos de "+t.advisors.selected.person.name+": "+t.advisorContacts.data.links.pagination.total,"add-button":{uri:"/people/"+t.advisors.person.id+"/person-institutions/"+t.personInstitutions.selected.id+"/advisors/"+t.advisorContacts.personInstitution.id+"/contacts/create",disabled:t.cannot("people:modify")},"per-page":t.advisorContactsPerPage,"filter-text":t.advisorContactsFilterText},on:{"set-per-page":function(e){t.advisorContactsPerPage=e},"input-filter-text":function(e){t.advisorContactsFilterText=e.target.value}}},[s("app-table",{attrs:{pagination:t.advisorContacts.data.links.pagination,columns:["#","Tipo","Contato",""]},on:{"goto-page":function(e){return t.advisorContactsGotoPage(e)}}},t._l(t.advisorContacts.data.rows,function(e){return s("tr",{staticClass:"cursor-pointer",class:{"cursor-pointer":!0,"bg-primary text-white":t.isCurrent(e,t.advisorContacts.selected)},on:{click:function(s){return t.selectAdvisorContacts(e)}}},[s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.id)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.contact_type.name)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle"},[t._v("\n                                    "+t._s(e.contact)+"\n                                ")]),t._v(" "),s("td",{staticClass:"align-middle text-right"},[s("router-link",{staticClass:"btn btn-danger btn-sm ml-1 pull-right",attrs:{to:"/people/"+t.advisors.person.id+"/person-institutions/"+t.personInstitutions.selected.id+"/advisors/"+t.advisorContacts.personInstitution.id+"/contacts/"+e.id+"/update",tag:"button",disabled:t.cannot("people:modify"),title:"Editar Contato do Assessor"}},[s("i",{staticClass:"fa fa-edit"})])],1)])}),0)],1):t._e()],1)])])])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[e("h2",[this._v("Pessoas")])])])}],!1,null,null,null);e.default=p.exports}}]);