(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-de47c2b0"],{2882:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAYAAAABtRhCAAACT0lEQVRIieWWPWgUQRiGn2iInjYxphL8A+NPmhCJTRqFIMQyjahYCIqFdtqKjQQtYgpBQdBgpUkTS8XGlCKBkMJTk0JRUJDcnT+BkzNR+eRdGTZztzN7ksYX9nZvd773mdlv5tthtdVivE0dm0Oxa4BTwGXgB3AVuAf8DAmulEt/DEJ1CJgG7gLbgV26ntaz4B5nyYwngadAr6dtr55Nqm1uYDswArwAhgI6NqS2I4oNBrYC54B54CLQFgBL1KaYeXm0ZgEHgVngJtAZAUqrUx6z8lwB3A080tHdBCitbsfXGH+XxWvdWAa+NcpBE3pbKZd2uiM0nQG2AJeAxSYBj4EDwFn934EnhwM6DwN7gQfAr0iQ5e2IDlujX92HaeBJ4BVwHPgAnAD6gZkA0EfgNLBfo7M1OaFO1wWatgH3nYX+DOiT2SdP+0WlwNIyBnQA17UmjybzpBEw0UG9ktsyMbM9MqsBS8AdgYZVW5M1eKHe+k1maVaePgNXgBsC7VNsUedjwDW9nbqqlEstocW7XSNLFvJLwaxoP1cKGsJiR5iWlayNwJeYoJgRprWcngyhygvMrWaAhdUeYcxn658AcykBvokIruZkvcMBDqr+haiWA2beh13gnFPhi4Em6wPaFB3fOTw5tJ70AOeBhQyzdQ2eLcijJ/3mfJPGauUtoMsp1L4YX2xNMV3yWEo3WGs/hcIGXy+/A0+AcWCrCnYysoK2he7+56HujSt2pWG1GrXVt0I96tkMz+hzNJVlELvVn3I+xDbF3+u6LwT2nwj4DcNDgdL49eEwAAAAAElFTkSuQmCC"},"2df2":function(t,e,a){"use strict";a("cae6")},"333d":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pagination-container",class:{hidden:t.hidden}},[a("el-pagination",t._b({attrs:{background:t.background,"current-page":t.currentPage,"page-size":t.pageSize,layout:t.layout,"page-sizes":t.pageSizes,total:t.total},on:{"update:currentPage":function(e){t.currentPage=e},"update:current-page":function(e){t.currentPage=e},"update:pageSize":function(e){t.pageSize=e},"update:page-size":function(e){t.pageSize=e},"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}},"el-pagination",t.$attrs,!1))],1)},i=[];a("a9e3");Math.easeInOutQuad=function(t,e,a,n){return t/=n/2,t<1?a/2*t*t+e:(t--,-a/2*(t*(t-2)-1)+e)};var r=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(t){window.setTimeout(t,1e3/60)}}();function o(t){document.documentElement.scrollTop=t,document.body.parentNode.scrollTop=t,document.body.scrollTop=t}function s(){return document.documentElement.scrollTop||document.body.parentNode.scrollTop||document.body.scrollTop}function l(t,e,a){var n=s(),i=t-n,l=20,c=0;e="undefined"===typeof e?500:e;var u=function t(){c+=l;var s=Math.easeInOutQuad(c,n,i,e);o(s),c<e?r(t):a&&"function"===typeof a&&a()};u()}var c={name:"Pagination",props:{total:{required:!0,type:Number},page:{type:Number,default:1},limit:{type:Number,default:20},pageSizes:{type:Array,default:function(){return[10,20,30,50]}},layout:{type:String,default:"total, sizes, prev, pager, next, jumper"},background:{type:Boolean,default:!0},autoScroll:{type:Boolean,default:!0},hidden:{type:Boolean,default:!1}},computed:{currentPage:{get:function(){return this.page},set:function(t){this.$emit("update:page",t)}},pageSize:{get:function(){return this.limit},set:function(t){this.$emit("update:limit",t)}}},methods:{handleSizeChange:function(t){this.$emit("pagination",{page:this.currentPage,limit:t}),this.autoScroll&&l(0,800)},handleCurrentChange:function(t){this.$emit("pagination",{page:t,limit:this.pageSize}),this.autoScroll&&l(0,800)}}},u=c,d=(a("abc3"),a("2877")),g=Object(d["a"])(u,n,i,!1,null,"6977430e",null);e["a"]=g.exports},3374:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[t._m(0),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.hardwareList,fit:"",stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"配置项"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"配置值"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.num)+" ")]}}])})],1),a("div",{staticClass:"warn-content"},[t.coresData<4||t.memData<4?a("img",{attrs:{src:t.warnImg}}):t._e(),t.coresData<4||t.memData<4?a("div",{staticClass:"warn-text"},[t._v("您的系统配置过低，可能无法运行Spark，推荐系统配置4核4G")]):t._e()]),t._m(1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.softwareList,fit:"",stripe:"","highlight-current-row":""}},[a("el-table-column",{attrs:{align:"center",label:"环境"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),a("el-table-column",{attrs:{align:"center",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"item-right"},[1==e.row.id?a("div",{staticClass:"item-text",class:1==e.row.num?" installed":""},[t._v(t._s(1==e.row.num?"已安装":"未安装"))]):a("div",{staticClass:"item-text",class:1==e.row.num?" installed":""},[t._v(t._s(1==e.row.num?"已启动":"未启动"))]),0==e.row.num&&1==e.row.id?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleInstall(e.row)}}},[e.row.installLoading?a("i",{staticClass:"el-icon-loading"}):t._e(),t._v(" "+t._s(e.row.installLoading?"正在安装":"点击安装")+" ")]):t._e(),0==e.row.num&&1!=e.row.id?a("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(a){return t.handleInstall(e.row)}}},[e.row.installLoading?a("i",{staticClass:"el-icon-loading"}):t._e(),t._v(" "+t._s(e.row.installLoading?"正在启动":"点击启动")+" ")]):t._e()],1)]}}])})],1)],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-container"},[a("div",{staticClass:"filter-title"},[t._v("硬件概况")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filter-container"},[a("div",{staticClass:"filter-title"},[t._v("软件概况")])])}],r=(a("d81d"),a("b775"));function o(t){return Object(r["a"])({url:"/sysin/kafkaAndSpark",method:"get",params:t})}function s(t){return Object(r["a"])({url:"/sysin/startKafkaAndSpark",method:"post",data:t})}var l=a("333d"),c={components:{Pagination:l["a"]},filters:{statusFilter:function(t){var e={1:"Android ",2:"iOS",4:"小程序"};return e[t]}},data:function(){return{hardware:a("f180"),software:a("2882"),warnImg:a("57bd"),list:[],coresData:0,memData:0,hardwareList:[{id:1,name:"物理CPU"},{id:2,name:"内存"},{id:3,name:"逻辑vCPU"}],softwareList:[{id:1,name:"kafka-php扩展",installLoading:!1},{id:2,name:"zooKeeper",installLoading:!1},{id:3,name:"kafka",installLoading:!1},{id:4,name:"spark",installLoading:!1}],listLoading:!1,listQuery:{page:1,pageSize:10},total:10}},created:function(){this.getList()},methods:{getList:function(){var t=this;this.listLoading=!0;var e=this;o().then((function(a){if(200==a.code){var n=a.data||{};e.hardwareList=e.hardwareList.map((function(t){return 1==t.id?(t.num=n.cores+"核",e.coresData=n.cores||0):2==t.id?(t.num=n.mem+"G",e.memData=n.mem||0):3==t.id&&(t.num=n.vcpu+"核",e.vcpuData=n.vcpu||0),t})),e.softwareList=e.softwareList.map((function(t){return 1==t.id?t.num=n["php-kafka"]:2==t.id?t.num=n.zookeeper:3==t.id?t.num=n.kafka:4==t.id&&(t.num=n.spark),t}))}t.listLoading=!1}))},handleInstall:function(t){var e=this,a=this;t.installLoading=!0;var n={};1==t.id?n.soft="php-kafka":2==t.id?n.soft="zookeeper":3==t.id?n.soft="kafka":4==t.id&&(n.soft="spark"),s(n).then((function(n){200==n.code?(t.installLoading=!1,e.$notify({type:"success",message:"安装完成!",duration:2e3}),a.getList()):(t.installLoading=!1,e.$message.error(n.msg))}))}}},u=c,d=(a("2df2"),a("2877")),g=Object(d["a"])(u,n,i,!1,null,"70ec5406",null);e["default"]=g.exports},"57bd":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAgCAYAAAABtRhCAAACFUlEQVRIie3WPWyNYRQH8F+1TRRBhAEJBsKiWCRiIEhExEpiQOjKgFId0Gh9RRdUKrFYNIhBbBIhhgoDg8FXIgwmH2GgBCFPem5y3dz73vdyDaL/5bzvec5z/s/5eM77GsE/j4YUwI9zucOYifNYjHvYjJd5Nja0DctRNWQsHW4Ay9AYcqBw6LyohXA9luABJuB+vG/4G4SjcTSe2/EZu+L9SKzXlXA7ZuEaboTuFq6GfkdewjxNMwXPMBbz8bhobS4eYgiz8boiUQ1Nsz9qdraELOEJ+jEeB3L4qhrhvIjgI+ZEBM1YHin9ismRgXFoxaM/ifA4mnC4KF0bcT1kwhv0hN2xahFmEa7AOrzAySL9mBKZcArPw37l7xAm/Yl43hfXIAtfwk7sqxhIpYVNWIS7uFiFrIDLGMTCGHm5CVOqulMvYWfIPEh2u0N2+zXlmYRp03RciRPXgju4hGkxkaoSTg3DVJO9FYg+lchSdMT+9iDOJOyO+9QXXVcOF7A6vhTlUOjqNJkOZRG2RrHfljMsQgsmVhnYPXE/t2BBJcLe+M4lsvcZzk5H5/Zl2HxAV/jvLUe4BqvwFGcyHCW8KpGV0B+zNg2CtaWEXSE7Yj5moRMzii56JXzDnlg7WLApDO+hIJoUhvVCY9SypaFtuOZN4XgwZue7OhM2R9ffLCgKhFvjb2xpka4e+I7b2FZHnyP4r4CfRehtm2BWdHEAAAAASUVORK5CYII="},a9e3:function(t,e,a){"use strict";var n=a("83ab"),i=a("da84"),r=a("94ca"),o=a("6eeb"),s=a("5135"),l=a("c6b6"),c=a("7156"),u=a("c04e"),d=a("d039"),g=a("7c73"),A=a("241c").f,f=a("06cf").f,m=a("9bf2").f,p=a("58a8").trim,h="Number",w=i[h],v=w.prototype,b=l(g(v))==h,k=function(t){var e,a,n,i,r,o,s,l,c=u(t,!1);if("string"==typeof c&&c.length>2)if(c=p(c),e=c.charCodeAt(0),43===e||45===e){if(a=c.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+c}for(r=c.slice(2),o=r.length,s=0;s<o;s++)if(l=r.charCodeAt(s),l<48||l>i)return NaN;return parseInt(r,n)}return+c};if(r(h,!w(" 0o1")||!w("0b1")||w("+0x1"))){for(var E,I=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof I&&(b?d((function(){v.valueOf.call(a)})):l(a)!=h)?c(new w(k(e)),a,I):k(e)},B=n?A(w):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;B.length>C;C++)s(w,E=B[C])&&!s(I,E)&&m(I,E,f(w,E));I.prototype=v,v.constructor=I,o(i,h,I)}},abc3:function(t,e,a){"use strict";a("b684")},b684:function(t,e,a){},cae6:function(t,e,a){},f180:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAoCAYAAACxbNkLAAABcUlEQVRoge2ZP0vDQBiHn1wDtuK/VhRcXAQRiuigS9HJD+MsiOA3cLGLi59Bv4WrH0JxEURwcdBBlAuXEK93IjS07xvyQIZek/T38L40d5ek21smwjFwCmwASeykKfAKDIEL4Nv/+VanMxuKdAJcAT1hMhYb+Aj4Au78L0MVagEvTkYy78AK8FHOaAKBdxXIWOaAPX8wJHQ4mTyVcODfJCQ0cpJg/iWkqUID38EX2gRWJ5tpLLpAv3wDX0hTdXJ+tV3thTT9IeREhdbcNEcb6+4YEdLYbjlFlUxoUCFBoVpVaBHYnl6esem7Z1IhNHCzbK0Y51AIaW63nKztTPmDcrKi2AVeG3gD2sqFPoEl4xZJ2mUsM8B+CiwAtwICVcH8X7s+Kgkt8BohSaShzTrNNC0nnUZIOtKFkshxHrugqZB0UuH5biLjW7EL7FyuebBKxtRx6vMoIEdVPFihy3q4ZAztW/B74BnYcftzGnkCzoDrH8F9IZ70gpv4AAAAAElFTkSuQmCC"}}]);