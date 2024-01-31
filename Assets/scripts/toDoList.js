new Vue({
    el: '#app',
    data() {
      return {
        todoList: [],
        new_todo: '',
        showComplete: false,
      };
    },
    mounted() {
      this.getTodos();
    },
    watch: {
      todoList: {
        handler: function(updatedList) {
          localStorage.setItem('todo_list', JSON.stringify(updatedList));
        },
        deep: true,
      },
    },
    computed: {
      pending() {
        return this.todoList.filter(item => !item.done);
      },
      completed() {
        return this.todoList.filter(item => item.done);
      },
      completedPercentage() {
        if (this.todoList.length === 0) return '0%';
        return Math.floor((this.completed.length / this.todoList.length) * 100) + '%';
      },
      today() {
        const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        const day = weekdays[today.getDay()];
  
        return {
          day: day,
          date: `${mm}-${dd}-${yyyy}`,
        };
      },
    },
    methods: {
      getTodos() {
        if (localStorage.getItem('todo_list')) {
          this.todoList = JSON.parse(localStorage.getItem('todo_list'));
        }
      },
      addItem() {
        if (this.new_todo) {
          this.todoList.unshift({
            id: Date.now(),
            title: this.new_todo,
            done: false,
          });
          this.new_todo = '';
        }
      },
      deleteItem(item) {
        this.todoList.splice(this.todoList.indexOf(item), 1);
      },
      toggleShowComplete() {
        this.showComplete = !this.showComplete;
      },
      clearAll() {
        this.todoList = [];
      },
    },
  });
  