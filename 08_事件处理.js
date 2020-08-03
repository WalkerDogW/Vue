var example1 = new Vue({
    el: '#example-1',
    data: {
        counter: 0
    }
})


var example2 = new Vue({
    el: '#example-2',
    data: {
        name: 'Vue.js'
    },
    // 在 `methods` 对象中定义方法
    methods: {
        greet: function (event) {
            // `this` 在方法里指向当前 Vue 实例
            alert('Hello ' + this.name + '!')
            // `event` 是原生 DOM 事件
            if (event) {
                alert(event.target.tagName)
            }
        }
    }
})

// 也可以用 JavaScript 直接调用方法
//example2.greet() // => 'Hello Vue.js!'



var example3 = new Vue({
    el: '#example-3',
    methods: {
        say: function (message) {
            alert(message)
        }
    }
})


var example4 = new Vue({
    el: '#example-4',
    methods: {
        warn: function (message, event) {
            // 现在我们可以访问原生事件对象
            if (event) {
                event.preventDefault()
            }
            alert(message)
        }
    }
})


var example5 = new Vue({
    el: '#example-5',
    methods: {
        test1() {
            console.log('test1')
        },
        test2() {
            console.log('test2')
        }
    }
})



var example6 = new Vue({
    el: '#example-6',
    methods: {
        test2() {
            console.log('test2')
        }
    }
})


var example7 = new Vue({
    el: '#example-7',
    methods: {
        test1() {
            console.log('test1')
        },
        test2() {
            console.log('test2')
        }
    }
})

var example8 = new Vue({
    el: '#example-8',
    methods: {
        test1() {
            console.log('test1')
        },
        test2() {
            console.log('test2')
        }
    }
})


var example9 = new Vue({
    el: '#example-9',
    methods:{
        submit(){
            console.log('submit')
        }
    }
})


var example10 = new Vue({
    el: '#example-10',
    methods: {
        test1() {
            console.log('test1')
        },
        test2() {
            console.log('test2')
        }
    }
})