let app = new Vue({
    el: '#app',
    data: {
        todos: '',
        typeChoice: 'all',
        todoList: [],
        choice: false
    },
    methods: {
        addTodoList: function (todos) {
            let regu = /^[ ]+$/;
            let result = regu.test(todos);

            if ( todos == "" ){
                alert('請輸入內容哦');
            }
            else if(result){
                alert('不可輸入空值哦');
            }
            else {
                this.todoList.push({ name: todos, finish: false,changeAble: false });
                this.todos = '';
            }
        },
        delTodoList: function (del) {
            this.todoList.splice(this.todoList.indexOf(del), 1);
        },
        delTodoList_choice: function () {
            window.console.log('total ' + this.todoList.length); // here
            for (let i = (this.todoList.length - 1); i >= 0; i--) {
                if (this.todoList[i].finish == true) {
                    this.todoList.splice(i, 1);
                }
            }
            this.choice = false;
        },
        changeTypeChoice: function (choice) {
            this.typeChoice = choice;
        },
        choiceAll: function (choice) {
            for (let i = 0; i < this.todoList.length; i++) {
                this.todoList[i].finish = choice;
            }
        },
        changeChangeAble:function(choice){
            choice.changeAble = !choice.changeAble;
        }

    }
})