(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77ac1404"],{"333d":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"pagination-container",class:{hidden:e.hidden}},[a("el-pagination",e._b({attrs:{background:e.background,"current-page":e.currentPage,"page-size":e.pageSize,layout:e.layout,"page-sizes":e.pageSizes,total:e.total},on:{"update:currentPage":function(t){e.currentPage=t},"update:current-page":function(t){e.currentPage=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}},"el-pagination",e.$attrs,!1))],1)},i=[];a("a9e3");Math.easeInOutQuad=function(e,t,a,n){return e/=n/2,e<1?a/2*e*e+t:(e--,-a/2*(e*(e-2)-1)+t)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}();function l(e){document.documentElement.scrollTop=e,document.body.parentNode.scrollTop=e,document.body.scrollTop=e}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(e,t,a){var n=r(),i=e-n,s=20,c=0;t="undefined"===typeof t?500:t;var u=function e(){c+=s;var r=Math.easeInOutQuad(c,n,i,t);l(r),c<t?o(e):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(e){this.$emit("update:page",e)}},pageSize:{get:function(){return this.limit},set:function(e){this.$emit("update:limit",e)}}},methods:{handleSizeChange:function(e){this.$emit("pagination",{page:this.currentPage,limit:e}),this.autoScroll&&s(0,800)},handleCurrentChange:function(e){this.$emit("pagination",{page:e,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},u=c,p=(a("abc3"),a("2877")),d=Object(p["a"])(u,n,i,!1,null,"6977430e",null);t["a"]=d.exports},"47c3":function(e,t,a){},8062:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("div",{staticClass:"filter-container"},[a("div",{staticClass:"filter-title"},[e._v("计划列表")]),a("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:e.handleAdd}},[e._v("新建计划")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.listLoading,expression:"listLoading"}],attrs:{data:e.list,fit:"",stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"计划ID",width:"105"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.id)+" ")]}}])}),a("el-table-column",{attrs:{label:"投放应用",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.app_name)+" ")]}}])}),a("el-table-column",{attrs:{label:"计划名称",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",[e._v(e._s(t.row.plan_name))])]}}])}),a("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"监测链接（点击复制）",align:"center",width:"200px"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("span",{on:{click:function(a){return e.handleCopy(t.$index,t.row)}}},[e._v(e._s(t.row.click_monitor_link))])]}}])}),a("el-table-column",{attrs:{label:"渠道",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.channel_name)+" ")]}}])},[e._v("> ")]),a("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(" "+e._s(t.row.add_time)+" ")]}}])},[e._v("> ")]),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(a){return e.handleDelete(t.row)}}},[e._v("删除")])]}}])})],1),a("pagination",{directives:[{name:"show",rawName:"v-show",value:e.total>0,expression:"total>0"}],attrs:{total:e.total,page:e.listQuery.page,limit:e.listQuery.pageSize},on:{"update:page":function(t){return e.$set(e.listQuery,"page",t)},"update:limit":function(t){return e.$set(e.listQuery,"pageSize",t)},pagination:e.getList}}),a("add-form",{ref:"dialogForm",on:{father:function(t){return e.getList()}}})],1)},i=[],o=(a("a9e3"),a("c7a8")),l=a("333d"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-dialog",{attrs:{title:"新建计划",visible:e.dialogVisible,width:"644px","lock-scroll":!1},on:{"update:visible":function(t){e.dialogVisible=t},close:e.close}},[a("el-form",{ref:"dataForm",staticStyle:{"margin-left":"20px","margin-right":"80px"},attrs:{model:e.temp,"label-position":"right","label-width":"110px",rules:e.rules}},[a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:14}},[a("el-form-item",{attrs:{label:"投放应用"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},on:{change:e.handleChange},model:{value:e.app_os,callback:function(t){e.app_os=t},expression:"app_os"}},e._l(e.optionsOne,(function(e){return a("el-option",{key:e.app_os,attrs:{label:e.app_platform,value:e.app_os}})})),1)],1)],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{attrs:{label:"","label-width":"0",prop:"app_id"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择应用"},model:{value:e.temp.app_id,callback:function(t){e.$set(e.temp,"app_id",t)},expression:"temp.app_id"}},e._l(e.optionsTwo,(function(e){return a("el-option",{key:e.app_id,attrs:{label:e.app_name,value:e.app_id}})})),1)],1)],1)],1),a("el-form-item",{attrs:{label:"投放渠道",prop:"channel_id"}},[a("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择投放渠道"},model:{value:e.temp.channel_id,callback:function(t){e.$set(e.temp,"channel_id",t)},expression:"temp.channel_id"}},e._l(e.optionsThree,(function(e){return a("el-option",{key:e.id,attrs:{label:e.channel_name,value:e.id}})})),1)],1),a("el-form-item",{attrs:{label:"计划名称",prop:"plan_name"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入计划名称"},model:{value:e.temp.plan_name,callback:function(t){e.$set(e.temp,"plan_name",t)},expression:"temp.plan_name"}})],1),a("el-form-item",{attrs:{label:"批量创建",prop:"advertisingName"}},[a("el-radio-group",{staticStyle:{width:"100%"},on:{change:e.handleRadio},model:{value:e.planNumber,callback:function(t){e.planNumber=t},expression:"planNumber"}},[a("el-radio",{attrs:{label:1}},[e._v("单条计划")]),a("el-radio",{attrs:{label:2}},[e._v("多条计划")])],1)],1),2==e.planNumber?a("el-form-item",{attrs:{label:"",prop:"plan_count"}},[a("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入计划数量"},model:{value:e.temp.plan_count,callback:function(t){e.$set(e.temp,"plan_count",t)},expression:"temp.plan_count"}})],1):e._e()],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:e.close}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.handleAdd}},[e._v("确 定")])],1)],1)},s=[],c=(a("159b"),{data:function(){return{dialogVisible:!1,temp:{},app_os:"",optionsOne:[],optionsTwo:[],optionsThree:[],planNumber:1,options:[{value:"1",label:"Android"},{value:"2",label:"IOS"},{value:"3",label:"H5"},{value:"4",label:"小程序"},{value:"5",label:"Unity"}],rules:{app_id:[{required:!0,message:"请选择应用",trigger:"change"}],channel_id:[{required:!0,message:"请选择投放渠道",trigger:"change"}],plan_name:[{required:!0,message:"请输入计划名称",trigger:"change"}],plan_count:[{required:!0,message:"请输入计划数量",trigger:"change"}]}}},created:function(){},methods:{handleOpen:function(){var e=this;this.dialogVisible=!0,this.init(),this.$nextTick((function(){e.$refs["dataForm"].clearValidate()}))},init:function(){var e=this;Object(o["c"])().then((function(t){e.optionsOne=t.data.apps,e.app_os=t.data.apps[0].app_os,e.optionsTwo=t.data.apps[0].data,e.optionsThree=t.data.channels}))},handleChange:function(e){var t=this;this.$set(this.temp,"app_id",""),this.optionsOne.forEach((function(a){a.app_os==e&&(t.optionsTwo=a.data)}))},handleRadio:function(e){},handleAdd:function(){var e=this;this.$refs["dataForm"].validate((function(t){t&&Object(o["b"])(e.temp).then((function(t){200==t.code?(e.$notify({type:"success",message:"新增成功!",duration:2e3}),e.$emit("father"),e.close()):e.$message.error(t.msg)}))}))},close:function(){this.temp=this.$options.data().temp,this.dialogVisible=!1}}}),u=c,p=(a("d5ce"),a("2877")),d=Object(p["a"])(u,r,s,!1,null,"18e7b7e4",null),f=d.exports,m={components:{Pagination:l["a"],addForm:f},filters:{statusFilter:function(e){var t={1:"Android ",2:"iOS",3:"H5",4:"小程序",5:"Unity"};return t[e]}},data:function(){return{list:[],listLoading:!1,listQuery:{page:1,pageSize:10},total:0,copyData:""}},created:function(){this.getList()},methods:{getList:function(){var e=this;this.listLoading=!0,Object(o["a"])(this.listQuery).then((function(t){e.list=t.data.plans,e.total=Number(t.data.total),0===e.list.length&&e.total>0&&(e.listQuery.page=e.listQuery.page-1,e.getList()),e.listLoading=!1}))},handleDelete:function(e){var t=this;this.$confirm("确认删除该应用, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a={plan_id:e.id};Object(o["d"])(a).then((function(e){200==e.code?(t.getList(),t.$notify({type:"success",message:"删除成功!",duration:2e3})):t.$message.error(e.msg)}))}))},handleAdd:function(){this.$refs.dialogForm.handleOpen()},handleCopy:function(e,t){this.copyData=t.click_monitor_link,this.copy(this.copyData)},copy:function(e){var t=e,a=document.createElement("input");a.value=t,document.body.appendChild(a),a.select(),document.execCommand("Copy"),this.$message({message:"复制成功",type:"success"}),a.remove()}}},h=m,g=Object(p["a"])(h,n,i,!1,null,null,null);t["default"]=g.exports},a9e3:function(e,t,a){"use strict";var n=a("83ab"),i=a("da84"),o=a("94ca"),l=a("6eeb"),r=a("5135"),s=a("c6b6"),c=a("7156"),u=a("c04e"),p=a("d039"),d=a("7c73"),f=a("241c").f,m=a("06cf").f,h=a("9bf2").f,g=a("58a8").trim,b="Number",_=i[b],v=_.prototype,y=s(d(v))==b,w=function(e){var t,a,n,i,o,l,r,s,c=u(e,!1);if("string"==typeof c&&c.length>2)if(c=g(c),t=c.charCodeAt(0),43===t||45===t){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(o=c.slice(2),l=o.length,r=0;r<l;r++)if(s=o.charCodeAt(r),s<48||s>i)return NaN;return parseInt(o,n)}return+c};if(o(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var S,k=function(e){var t=arguments.length<1?0:e,a=this;return a instanceof k&&(y?p((function(){v.valueOf.call(a)})):s(a)!=b)?c(new _(w(t)),a,k):w(t)},N=n?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;N.length>$;$++)r(_,S=N[$])&&!r(k,S)&&h(k,S,m(_,S));k.prototype=v,v.constructor=k,l(i,b,k)}},abc3:function(e,t,a){"use strict";a("b684")},b684:function(e,t,a){},c7a8:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return r}));var n=a("b775");function i(e){return Object(n["a"])({url:"/plan/list",method:"post",data:e})}function o(e){return Object(n["a"])({url:"/plan/add",method:"post",data:e})}function l(e){return Object(n["a"])({url:"/plan/addInit",method:"post",data:e})}function r(e){return Object(n["a"])({url:"/plan/del",method:"post",data:e})}},d5ce:function(e,t,a){"use strict";a("47c3")}}]);