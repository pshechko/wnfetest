var siteTitle = 'ShoppingList';

var headerApp = new Vue({
    el: '#app-header',
    data: {
        title: siteTitle
    }
});


var app = new Vue({
    el: '#app',
    data: {
        price: null,
        quantity: null,
        description: null,
        selectedIndex: null,
        items: [
            { 
                name: 'Bread' 
            },
            { 
                name: 'Milk' 
            },
            { 
                name: 'Beer' 
            }
          ]
    },
    methods: {
        showDetails: function(index, event){
            if (event) event.preventDefault();
            this.selectedIndex = index;
            this.price = this.items[index].price;
            this.quantity = this.items[index].quantity;
            this.description = this.items[index].description;
        },
        priceChange: function(){
            this.items[this.selectedIndex].price = this.price;
        },
        quantityChange: function(){
            this.items[this.selectedIndex].quantity = this.quantity;
        },
        descriptionChange: function(){
            this.items[this.selectedIndex].description = this.description;
        },
        removeItem: function(index, event){
            if (event) event.preventDefault();
            this.items.splice(index, 1);
            if(index === this.selectedIndex)
                this.selectedIndex = null;
        },
        addItem: function(event){
            if (event) event.preventDefault();
            this.items.push({});
        }
    }
  })