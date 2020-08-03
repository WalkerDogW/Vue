var vm = new Vue({
    el: '#example',
    data: {
        isActive: false,
        hasError: false,
        hidden: true
    }

})

var vm = new Vue({
    el: '#example2',
    data: {
        classObject: {
            active: true,
            'text-danger': false
        }
    }

})

var vm = new Vue({
    el: '#example3',

    data: {
        isActive: true,
        error: null
    },
    computed: {
        classObject: function () {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            }
        }
    }

})





var vm = new Vue({
    el: '#example4',
    data: {
        activeClass: 'active',
        errorClass: 'text-danger'
    }
})



Vue.component('my-component', {
    template: '<p class="foo bar">Hi</p>'
})

var vm = new Vue({
    el: '#example5',
    data: {
        isActive: true,
        errorClass: 'text-danger'
    }
})


var vm = new Vue({
    el: '#example6',
    data: {
        activeColor: 'red',
        fontSize: 30
    }
})

var vm = new Vue({
    el: '#example7',
    data: {
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    }
})