(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74aeca77"],{"84f25":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("section",{staticClass:"add-btn"},[t.canManage?a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:t.handleAdd}},[t._v("\n            "+t._s(t.$t("group.btn.add"))+"\n        ")]):t._e()],1),a("section",{staticClass:"content"},[a("div",{staticClass:"table"},[a("a-table",{attrs:{columns:t.columns,"data-source":t.groupdata,pagination:t.pagination,loading:t.loading,"row-key":function(t){return t.id}},on:{change:t.handleTableChange},scopedSlots:t._u([{key:"name",fn:function(e,n){return[a("div",[a("a",{attrs:{href:"javascript:;"},on:{click:function(e){return t.toListConfigItem(n)}}},[t._v(t._s(e))])])]}},{key:"operation",fn:function(e,n){return[t.canManage?a("a",{attrs:{type:"primary"},on:{click:function(e){return t.handleEdit(n)}}},[t._v(t._s(t.$t("group.table.operation.edit")))]):t._e(),t.canManage?a("a-divider",{attrs:{type:"vertical"}}):t._e(),t.canManage?a("a-popconfirm",{attrs:{title:t.$t("group.table.operation.delete.tips")},on:{confirm:function(e){return t.handleDelete(n.id)}}},[a("a",{attrs:{href:"javascript:;",type:"primary"}},[t._v(t._s(t.$t("group.table.operation.delete")))])]):t._e(),t.canManage?a("a-divider",{attrs:{type:"vertical"}}):t._e(),a("a",{attrs:{type:"primary"},on:{click:function(e){return t.toListConfigItem(n)}}},[t._v(t._s(t.$t("group.table.operation.configitem"))+" \n                    ")])]}}])},[t._l(t.columns,(function(e,n){return a("template",{slot:e.scopedSlots.title},[a("span",{key:n},[t._v(t._s(t.$t(e.scopedSlots.title)))])])}))],2)],1)]),a("groupdialog",{attrs:{dialog:t.dialog,formdata:t.formdata},on:{update:t.getAllList}})],1)},r=[],o=(a("1c01"),a("58b2"),a("8e6e"),a("f3e2"),a("d25f"),a("ac6a"),a("456d"),a("7f7f"),a("bd86")),i=(a("96cf"),a("3b8d")),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"envdialog"},[a("a-modal",{attrs:{title:t.dialog.title,visible:t.dialog.show,"confirm-loading":t.dialog.loading},on:{ok:t.handleOk,cancel:t.handleCancel}},[a("a-form",{attrs:{form:t.form,"label-col":t.labelCol,"wrapper-col":t.wrapperCol}},[a("a-form-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{label:"id"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["id",{initialValue:t.formdata.id}],expression:"['id',{initialValue:formdata.id}]"}]})],1),a("a-form-item",{attrs:{label:t.$t("group.table.columns.name")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["name",{rules:[{required:!0,message:t.$t("group.modal.name.message")}],initialValue:t.formdata.name}],expression:"[\n                        'name',{\n                        rules: [{ required: true, message: $t('group.modal.name.message')}],\n                        initialValue: formdata.name}]"}],attrs:{placeholder:t.$t("group.modal.name.placeholder")}})],1),a("a-form-item",{attrs:{label:t.$t("group.table.columns.memo")}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["memo",{initialValue:t.formdata.memo}],expression:"['memo', {initialValue: formdata.memo}]"}],attrs:{type:"textarea"}})],1)],1)],1)],1)},c=[];function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function u(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var d={data:function(){return{form:this.$form.createForm(this),labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}}}},props:{dialog:Object,formdata:Object},methods:{handleOk:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.preventDefault(),this.form.validateFields((function(t){if(!t){a.dialog.loading=!0;var e="add"===a.dialog.option?"addGroup":"updateGroup";a.$api.group[e](u({versionId:a.$route.query.versionId},a.form.getFieldsValue())).then((function(t){0===t.status&&(a.dialog.show=!1,a.$message.success("操作成功！"),a.form.resetFields(),a.$emit("update"))})).finally((function(){a.dialog.loading=!1}))}}));case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleCancel:function(t){this.dialog.show=!1}}},p=d,m=a("2877"),g=Object(m["a"])(p,s,c,!1,null,null,null),f=g.exports;function h(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function b(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?h(Object(a),!0).forEach((function(e){Object(o["a"])(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):h(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}var v=[{dataIndex:"id",width:"5%",scopedSlots:{title:"group.table.columns.id"}},{dataIndex:"name",width:"25%",scopedSlots:{customRender:"name",title:"group.table.columns.name"}},{dataIndex:"memo",ellipsis:!0,scopedSlots:{title:"group.table.columns.memo"}},{dataIndex:"operation",width:250,scopedSlots:{customRender:"operation",title:"group.table.columns.operation"}}],w={name:"listVersion",components:{groupdialog:f},created:function(){this.getAllList()},data:function(){return{groupdata:[],columns:v,pagination:{total:0,current:1,pageSize:10,sortBy:"id desc",hideOnSinglePage:!0,showTotal:function(t,e){return"显示 ".concat(e[0]," ~ ").concat(e[1]," 条记录，共 ").concat(t," 条记录")}},dialog:{show:!1,title:"",label:"",option:""},formdata:{name:"",memo:""},loading:!1,canManage:!1}},methods:{getAllList:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.loading=!0,this.$api.group.getGroupList({versionId:this.$route.query.versionId,pageNo:this.pagination.current,pageSize:this.pagination.pageSize}).then((function(t){e.loading=!1,e.groupdata=t.data.dataList,e.pagination.total=t.data.total,e.canManage=t.ext.canManage}));case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),handleTableChange:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.pagination.pageSize=e.pageSize,this.pagination.current=e.current,t.next=4,this.getAllList();case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),toListConfigItem:function(t){this.$store.dispatch("setRccInfo",b(b({},this.$store.getters.rccInfo),{},{groupId:t.id,groupName:t.name})),this.$router.push({path:"/configitem",query:{groupId:t.id}})},handleDelete:function(){var t=Object(i["a"])(regeneratorRuntime.mark((function t(e){var a=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$api.group.deleteGroup(e).then((function(t){0===t.status&&(a.$message.success("success"),a.getAllList())}));case 1:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),handleEdit:function(t){this.dialog={show:!0,title:this.$t("group.btn.edit"),option:"edit"},this.formdata=b({},t)},handleAdd:function(){this.dialog={show:!0,title:this.$t("group.btn.add"),option:"add"},this.formdata={}}}},O=w,y=Object(m["a"])(O,n,r,!1,null,null,null);e["default"]=y.exports}}]);