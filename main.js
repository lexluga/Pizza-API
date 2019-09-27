new Vue({ 
    el: '#app',

    data: {

    results:{
        toppings: []
        },
   
    },
    
   mounted() {
        axios.get("https://pizza.jptreen.com/api/pizzas")
        .then(response => {
            this.results = response.data.data.map((result) => 
            { 
                return { 
                description: result.attributes.description , name: result.attributes.name, 
                toppings: result.attributes.toppings
                } 
            })
        })
        .catch(errors => {(console.log(errors))});
    
    },

    computed: {
        chunkedResults() {
            return _.chunk(this.results, 3)
        }
    },
    
});