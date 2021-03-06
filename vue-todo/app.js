// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
    el: '#myapp',
    router,
    components: { App }
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
