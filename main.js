//vue1
const vue1 = new Vue({
    data: {
        title_2: 'Title',

        name: 'Vue!',

        number: 11,

        isOk: true,

        string: 'my name is who',

        url: 'http://google.com',

        link: '<a href="http://google.com">Google [data:link:v-html]</a>',

        counter: 0,
        counter_2: 0,
        title: 'Счётчик ',

        x: 0,
        y: 0,

        string_input_value: '123',

        isActive: false,
        string_color: 'blue',

        string_color_2: 'blue',
        height: 100,

        key_type: 'a',

        people: [
            {name: 'People1'},
            {name: 'People2'},
            {name: 'People3'},
            {name: 'People4'}
        ],

        persons: {
            name: 'Max',
            age: 10
        }
    },
    computed: {
        getClass: function () {
            return {
                'red': this.isActive,
                'green': !this.isActive
            }
        },
        circleClasses: function () {
            return {
                'background-color': this.string_color_2,
                'height': this.height + 'px'
            }
        },
        result: function () {
            return this.counter_2 >= 3 ? 'Counter больше 3' : 'Counter меньше 3'
        }
    },
    watch: {
        counter_2() {
            console.log('lol');
        }
    },
    methods: {
        sayHello: function () {
            return 'Hello'
        },
        onOver: function (event) {
            event.target.style.background = 'red';
        },
        add: function (num, str, event) {
            this.counter += num;
            this.title = str.toString();
            if (num === 5) {
                event.target.style.color = "red"
            } else if (num === 10) {
                event.target.style.color = "blue"
            }
        },
        google: function (event) {
            event.preventDefault();
        },
        handle: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        alertValue: function (event) {
            alert(event.target.value)
        },
        update: function () {
            this.title_2 = 'updated';
            this.$refs.heading.style.color = "red";

        },
        // changeName: function (event) {
        //     this.name = event.target.value
        // },
    }
});
vue1.$mount('#app')

// Vue2
new Vue({
    el: '#app2',
    data: {
        title_2: 'Hello'
    },
    methods: {
        update: function () {
            vue1.title_2 = "Updated 2"
        }
    },
    template: `
            <div><h2>{{title_2}}</h2>
                <button class="btn btn-primary" type="button" @click="update">Update1</button>
            </div>`
})
