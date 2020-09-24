var app = new Vue({
    el: '#app',
    data: {
        item: '',
        qty: null,
        count: 0,
        items: [],
        emptyList: true,
        isAdmin: true
    },
    methods: {
        addToList: function (event) {
            this.items.push({ item: this.item, qty: this.qty });
            this.count += this.qty;
            this.emptyList = false;
            this.qty = null;
            this.item = "";
        }
    }
});

console.log(app.isAdmin);
