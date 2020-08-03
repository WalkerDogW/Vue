// 我们的数据对象
var data = { a: 1 }

// 该对象被加入到一个 Vue 实例中
var vm = new Vue({
    data: data
})

// 获得这个实例上的 property
// 返回源数据中对应的字段
console.log(vm.a == data.a)// => true

// 设置 property 也会影响到原始数据
vm.a = 2
console.log(data.a)// => 2

// ……反之亦然
data.a = 3
console.log(vm.a)// => 3


//Object.freeze()，这会阻止修改现有的 property，控制台会报错
var obj = {
    foo: 'bar'
}
Object.freeze(obj)
new Vue({
    el: '#app',
    data: obj
})


// Vue实例 取值$    
var data = { a: 1 }
var vm = new Vue({
    el: '#example',
    data: data
})
console.log(vm.$data === data) // => true
console.log(vm.$el === document.getElementById('example')) // => true
// $watch 是一个实例方法
vm.$watch('a', function (newValue, oldValue) {
    // 这个回调将在 `vm.a` 改变后调用
})


// created 钩子可以用来在一个实例被创建之后执行代码：
new Vue({
    data: {
        a: 1
    },
    created: function () {
        // `this` 指向 vm 实例
        console.log('a is: ' + this.a)
    }
})