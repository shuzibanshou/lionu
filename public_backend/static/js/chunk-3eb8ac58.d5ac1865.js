(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3eb8ac58"],{"2c04":function(t,e,n){},"333d":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[n("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];n("a9e3");Math.easeInOutQuad=function(t,e,n,a){return t/=a/2,t<1?n/2*t*t+e:(t--,-n/2*(t*(t-2)-1)+e)};var o=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function l(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function r(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function s(t,e,n){var a=r(),i=t-a,s=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=s;var r=Math.easeInOutQuad(c,a,i,e);l(r),c<e?o(t):n&&"function"===typeof n&&n()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&s(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&s(0,800)}}},u=c,p=(n("abc3"),n("2877")),d=Object(p["a"])(u,a,i,!1,null,"6977430e",null);e["a"]=d.exports},"79af":function(t,e,n){"use strict";n("2c04")},8062:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("div",{staticClass:"filter-title"},[t._v("计划列表")]),n("el-button",{attrs:{type:"primary",icon:"el-icon-plus"},on:{click:t.handleAdd}},[t._v("新建计划")])],1),n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,fit:"",stripe:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"计划ID",width:"105"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),n("el-table-column",{attrs:{label:"投放应用",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.app_name)+" ")]}}])}),n("el-table-column",{attrs:{label:"计划名称",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.plan_name))])]}}])}),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"监测链接（点击复制）",align:"center",width:"200px"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{on:{click:function(n){return t.handleCopy(e.$index,e.row)}}},[t._v(t._s(e.row.click_monitor_link))])]}}])}),n("el-table-column",{attrs:{label:"渠道",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.channel_name)+" ")]}}])},[t._v("> ")]),n("el-table-column",{attrs:{label:"创建时间",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.add_time)+" ")]}}])},[t._v("> ")]),n("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"primary",plain:"",size:"mini"},on:{click:function(n){return t.handleDelete(e.row)}}},[t._v("删除")])]}}])})],1),n("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.listQuery.page,limit:t.listQuery.pageSize},on:{"update:page":function(e){return t.$set(t.listQuery,"page",e)},"update:limit":function(e){return t.$set(t.listQuery,"pageSize",e)},pagination:t.getList}}),n("add-form",{ref:"dialogForm",on:{father:function(e){return t.getList()}}})],1)},i=[],o=(n("a9e3"),n("c7a8")),l=n("333d"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-dialog",{attrs:{title:"新建计划",visible:t.dialogVisible,width:"644px","lock-scroll":!1},on:{"update:visible":function(e){t.dialogVisible=e},close:t.close}},[n("el-form",{ref:"dataForm",staticStyle:{"margin-left":"20px","margin-right":"80px"},attrs:{model:t.temp,"label-position":"right","label-width":"110px",rules:t.rules}},[n("el-row",{attrs:{gutter:20}},[n("el-col",{attrs:{span:14}},[n("el-form-item",{attrs:{label:"投放应用"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择"},on:{change:t.handleChange},model:{value:t.app_os,callback:function(e){t.app_os=e},expression:"app_os"}},t._l(t.optionsOne,(function(t){return n("el-option",{key:t.app_os,attrs:{label:t.app_platform,value:t.app_os}})})),1)],1)],1),n("el-col",{attrs:{span:10}},[n("el-form-item",{attrs:{label:"","label-width":"0",prop:"app_id"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择应用"},model:{value:t.temp.app_id,callback:function(e){t.$set(t.temp,"app_id",e)},expression:"temp.app_id"}},t._l(t.optionsTwo,(function(t){return n("el-option",{key:t.app_id,attrs:{label:t.app_name,value:t.app_id}})})),1)],1)],1)],1),n("el-form-item",{attrs:{label:"投放渠道",prop:"channel_id"}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"请选择投放渠道"},model:{value:t.temp.channel_id,callback:function(e){t.$set(t.temp,"channel_id",e)},expression:"temp.channel_id"}},t._l(t.optionsThree,(function(t){return n("el-option",{key:t.id,attrs:{label:t.channel_name,value:t.id}})})),1)],1),n("el-form-item",{attrs:{label:"计划名称",prop:"plan_name"}},[n("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入计划名称"},model:{value:t.temp.plan_name,callback:function(e){t.$set(t.temp,"plan_name",e)},expression:"temp.plan_name"}})],1),n("el-form-item",{attrs:{label:"批量创建",prop:"advertisingName"}},[n("el-radio-group",{staticStyle:{width:"100%"},on:{change:t.handleRadio},model:{value:t.planNumber,callback:function(e){t.planNumber=e},expression:"planNumber"}},[n("el-radio",{attrs:{label:1}},[t._v("单条计划")]),n("el-radio",{attrs:{label:2}},[t._v("多条计划")])],1)],1),2==t.planNumber?n("el-form-item",{attrs:{label:"",prop:"plan_count"}},[n("el-input",{staticStyle:{width:"100%"},attrs:{placeholder:"请输入计划数量"},model:{value:t.temp.plan_count,callback:function(e){t.$set(t.temp,"plan_count",e)},expression:"temp.plan_count"}})],1):t._e()],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{attrs:{type:"primary",plain:""},on:{click:t.close}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:t.handleAdd}},[t._v("确 定")])],1)],1)},s=[],c=(n("4160"),n("159b"),{data:function(){return{dialogVisible:!1,temp:{},app_os:"",optionsOne:[],optionsTwo:[],optionsThree:[],planNumber:1,options:[{value:"1",label:"Android"},{value:"2",label:"IOS"}],rules:{app_id:[{required:!0,message:"请选择应用",trigger:"change"}],channel_id:[{required:!0,message:"请选择投放渠道",trigger:"change"}],plan_name:[{required:!0,message:"请输入计划名称",trigger:"change"}],plan_count:[{required:!0,message:"请输入计划数量",trigger:"change"}]}}},created:function(){},methods:{handleOpen:function(){var t=this;this.dialogVisible=!0,this.init(),this.$nextTick((function(){t.$refs["dataForm"].clearValidate()}))},init:function(){var t=this;Object(o["c"])().then((function(e){t.optionsOne=e.data.apps,t.app_os=e.data.apps[0].app_os,t.optionsTwo=e.data.apps[0].data,t.optionsThree=e.data.channels}))},handleChange:function(t){var e=this;this.$set(this.temp,"app_id",""),this.optionsOne.forEach((function(n){n.app_os==t&&(e.optionsTwo=n.data)}))},handleRadio:function(t){},handleAdd:function(){var t=this;this.$refs["dataForm"].validate((function(e){e&&Object(o["b"])(t.temp).then((function(e){200==e.code?(t.$notify({type:"success",message:"新增成功!",duration:2e3}),t.$emit("father"),t.close()):t.$message.error(e.msg)}))}))},close:function(){this.temp=this.$options.data().temp,this.dialogVisible=!1}}}),u=c,p=(n("79af"),n("2877")),d=Object(p["a"])(u,r,s,!1,null,"31cf98d8",null),f=d.exports,m={components:{Pagination:l["a"],addForm:f},filters:{statusFilter:function(t){var e={1:"Android ",2:"iOS",3:"H5",4:"小程序",5:"Unity"};return e[t]}},data:function(){return{list:[],listLoading:!1,listQuery:{page:1,pageSize:10},total:0,copyData:""}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0,Object(o["a"])(this.listQuery).then((function(e){t.list=e.data.plans,t.total=Number(e.data.total),0===t.list.length&&t.total>0&&(t.listQuery.page=t.listQuery.page-1,t.getList()),t.listLoading=!1}))},handleDelete:function(t){var e=this;this.$confirm("确认删除该应用, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var n={plan_id:t.id};Object(o["d"])(n).then((function(t){200==t.code?(e.getList(),e.$notify({type:"success",message:"删除成功!",duration:2e3})):e.$message.error(t.msg)}))}))},handleAdd:function(){this.$refs.dialogForm.handleOpen()},handleCopy:function(t,e){this.copyData=e.click_monitor_link,this.copy(this.copyData)},copy:function(t){var e=t,n=document.createElement("input");n.value=e,document.body.appendChild(n),n.select(),document.execCommand("Copy"),this.$message({message:"复制成功",type:"success"}),n.remove()}}},h=m,g=Object(p["a"])(h,a,i,!1,null,null,null);e["default"]=g.exports},a9e3:function(t,e,n){"use strict";var a=n("83ab"),i=n("da84"),o=n("94ca"),l=n("6eeb"),r=n("5135"),s=n("c6b6"),c=n("7156"),u=n("c04e"),p=n("d039"),d=n("7c73"),f=n("241c").f,m=n("06cf").f,h=n("9bf2").f,g=n("58a8").trim,b="Number",_=i[b],y=_.prototype,v=s(d(y))==b,w=function(t){var e,n,a,i,o,l,r,s,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=g(c),e=c.charCodeAt(0),43===e||45===e){if(n=c.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+c}for(o=c.slice(2),l=o.length,r=0;r<l;r++)if(s=o.charCodeAt(r),s<48||s>i)return NaN;return parseInt(o,a)}return+c};if(o(b,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var S,k=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof k&&(v?p((function(){y.valueOf.call(n)})):s(n)!=b)?c(new _(w(e)),n,k):w(e)},N=a?f(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),$=0;N.length>$;$++)r(_,S=N[$])&&!r(k,S)&&h(k,S,m(_,S));k.prototype=y,y.constructor=k,l(i,b,k)}},abc3:function(t,e,n){"use strict";n("b684")},b684:function(t,e,n){},c7a8:function(t,e,n){"use strict";n.d(e,"a",(function(){return i})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return l})),n.d(e,"d",(function(){return r}));var a=n("b775");function i(t){return Object(a["a"])({url:"/plan/list",method:"post",data:t})}function o(t){return Object(a["a"])({url:"/plan/add",method:"post",data:t})}function l(t){return Object(a["a"])({url:"/plan/addInit",method:"post",data:t})}function r(t){return Object(a["a"])({url:"/plan/del",method:"post",data:t})}}}]);