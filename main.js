const dataObj = {
    counter: 0
}
const component = {
    data: function () {
        return {
            counter: 0
        }
    },
    methods: {
        add: function () {
            this.counter++
        }
    }
    ,
    template: `
    <div style="border:1px solid black;padding: 10px;margin-top: 10px;">
        <h1>Counter:{{counter}}</h1>
        <button class="btn btn-success" @click=" add">Увеличить на 1</button>
    </div>
    `
}

new Vue({
    el: '#app',
    components: {
        'my-counter': component
    }
})
new Vue({
    el: '#app2',
    components: {
        myCounter: component
    }
})
