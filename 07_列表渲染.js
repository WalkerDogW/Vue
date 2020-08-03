var ex1 = new Vue({
    el: '#v1',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})

var vm = new Vue({
    el: '#app',
    data: {
        name: '',
        newId: 3,
        list: [
            { id: 1, name: '李斯' },
            { id: 2, name: '吕不韦' },
            { id: 3, name: '嬴政' }
        ]
    },
    methods: {
        add() {
            //注意这里是unshift
            this.list.unshift({ id: ++this.newId, name: this.name })
            this.name = ''
        }
    }
});

var ex2 = new Vue({
    el: '#v2',
    data: {
        parentMessage: 'Parent',
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})



var ex3 = new Vue({
    el: '#v3',
    data: {
        object: {
            title: 'How to  do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    }
})



var ex4 = new Vue({
    el: '#v4',
    data: {
        object: {
            title: 'How to  do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    }
})

var ex5 = new Vue({
    el: '#v5',
    data: {
        object: {
            title: 'How to  do lists in Vue',
            author: 'Jane Doe',
            publishedAt: '2016-04-10'
        }
    }
})


var ex6 = new Vue({
    el: '#v6',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})
ex6.items.push({ message: "Baz" })


var ex7 = new Vue({
    el: '#v7',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})
ex7.items = ex7.items.filter(function (item) {
    return item.message.match(/Foo/)
})



var ex8 = new Vue({
    el: '#v8',
    data: {
        numbers: [1, 2, 3, 4, 5]
    },
    computed: {
        evenNumbers: function () {
            return this.numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
})


var ex9 = new Vue({
    el: '#v9',
    data: {
        sets: [[1, 2, 3, 4, 5], [6, 7, 8, 9, 10]]
    },
    methods: {
        even: function (numbers) {
            return numbers.filter(function (number) {
                return number % 2 === 0
            })
        }
    }
})

var ex10 = new Vue({
    el: '#v10'
})


var ex11 = new Vue({
    el: '#v11',
    data: {
        items: [
            { message: 'Foo' },
            { message: 'Bar' }
        ]
    }
})


var ex11 = Vue.component('todo-item', {
    template: '\
      <li>\
        {{ title }}\
        <button v-on:click="$emit(\'remove\')">Remove</button>\
      </li>\
    ',
    props: ['title']
})

new Vue({
    el: '#todo-list-example',
    data: {
        newTodoText: '',
        todos: [
            {
                id: 1,
                title: 'Do the dishes',
            },
            {
                id: 2,
                title: 'Take out the trash',
            },
            {
                id: 3,
                title: 'Mow the lawn'
            }
        ],
        nextTodoId: 4
    },
    methods: {
        addNewTodo: function () {
            this.todos.push({
                id: this.nextTodoId++,
                title: this.newTodoText
            })
            this.newTodoText = ''
        }
    }
})

