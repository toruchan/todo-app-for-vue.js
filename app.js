new Vue({
    el: '#myapp',
    data: {
        newtodo: "",
        todos: []
    },
    methods: {
        addTodo: function(event){
            event.preventDefault();
            if (this.newtodo == "") return;
            this.todos.push({
                item: this.newtodo
            });
            this.newtodo = "";
        },
        deleteTodo: function(todo){
            var index = this.todos.indexOf(todo);
            this.todos.splice(index,1)
        },
        deleteAll: function(todos){
            todos.clear();
        }
    }
})
