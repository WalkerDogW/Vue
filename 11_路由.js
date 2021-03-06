/*
  * 申明三个模板( html 片段 )
  */
var user = { template: '<p>用户管理页面的内容</p>' };
var second = { template: '<p>产品管理页面的内容</p>' };
var order = { template: '<p>订单管理页面的内容</p>' };
/*
* 定义路由
*/
var routes = [
    { path: '/', redirect: '/user' }, // 这个表示会默认渲染 /user，没有这个就是空白
    { path: '/user', component: user },
    { path: '/product', component: second },
    { path: '/order', component: order }
];
/*
* 创建VueRouter实例
*/
var router = new VueRouter({
    routes: routes
});
/*
* 给vue对象绑定路由
*/
new Vue({
    el: "#app",
    router
})