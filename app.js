const app = new Vue({
    el: '#app',
    data: {
        title: 'Vue Skeleton ToDo',
        newTodo: '',
        todos: [],
    },
    methods: {
        addToDo() {
            if (!(this.newTodo === '')) {
                console.log(`ToDo with "${this.newTodo}" as content submitted`);
                this.todos.push({
                    value: this.newTodo,
                    done: false,
                });
                this.newTodo = '';
            }
        },
        removeTodo(todo) {
            const todoIndex = this.todos.indexOf(todo);
            this.todos.splice(todoIndex, 1);
        },
        allDone() {
            this.todos.forEach(todo => {
                todo.done = true;
            });
        },
    },
});
