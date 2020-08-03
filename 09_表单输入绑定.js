Vue.config.devtools = true

var example1 = new Vue({
    el: '#ex1',
    data: {
        message: ""
    }
})

var example2 = new Vue({
    el: '#ex2',
    data: {
        message: ""
    }
})

var example3 = new Vue({
    el: '#ex3',
    data: {
        checked: ""
    }
})


var example4 = new Vue({
    el: '#ex4',
    data: {
        checkedNames: []
    }
})


var example5 = new Vue({
    el: '#ex5',
    data: {
        picked: ''
    }
})


var example6 = new Vue({
    el: '#ex6',
    data: {
        selected: ''
    }
})

var example7 = new Vue({
    el: '#ex7',
    data: {
        selected: []
    }
})


var example8 = new Vue({
    el: '#ex8',
    data: {
        selected: 'A',
        options: [
            { text: 'One', value: 'A' },
            { text: 'Two', value: 'B' },
            { text: 'Three', value: 'C' }
        ]
    }
})


var example9 = new Vue({
    el: '#ex9',
    data: {
        picked: '',
        toggle: false,
        selected: ''
    }
})


var example10 = new Vue({
    el: '#ex10',
    data: {
        toggle: '',
        pick:'',
        a:'sdfsd'
    },
    methods:{
        test2() {
            console.log(example10.pick === example10.a)
        }
    }
})


var example11 = new Vue({
    el: '#ex11',
    data: {
        selected:''
    }
})

