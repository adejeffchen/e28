var app = new Vue({
    el: '#app',
    data: {
        item: '',
        qty: 0,
        count: 0,
        items: ['a', 'b'],
        emptyList: true,
        isAdmin: true
    },
    methods: {
        addToList: function (event) {
            this.items.push(this.item);
            this.count += 1;
            this.emptyList = false;
        }
    }
});

console.log(app.isAdmin);
