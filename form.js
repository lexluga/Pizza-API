new Vue({

el: '#app',

data: {

    type: '',

        attributes: {
            description: '',
            name: '',
            toppings: [] 
        
    }
},

methods: {

    addPizza () {
        axios.post("https://pizza.jptreen.com/api/pizzas", {

            type: this.type,
            description: this.description,
            name: this.name,
            toppings: this.toppings.push({ topping: ''}),

            headers: {'Content-type': 'application/vnd.api+json',}
     
        }).then(response => {})
        .catch(errors => {(console.log(errors))});
    
    }
},

});