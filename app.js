new Vue({
    el: '#app',
    data: {
        name: 'Ishan',
        designation:'designer'
    },
    methods: {
        greet: function(time){
            return 'Good ' + time + ', ' + this.name;
        }
    }
});
