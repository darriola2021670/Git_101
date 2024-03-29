new Vue({
    el: '#app',
    data() {
      return {
        todoList: [
          { "id": 0, "title": "Ir a Codepen y obtener inspiración", "done": false },
          { "id": 1, "title": "Elegir un proyecto", "done": false },
          { "id": 4, "title": "Crear un nuevo pen", "done": true }
        ],
        new_todo: '',
        showComplete: false,
      };
    },
    computed: {},
    mounted() {
      this.getTodos();
    },
    watch: {
      todoList: {
        handler: function (updatedList) {
          localStorage.setItem('todo_list', JSON.stringify(updatedList));
        },
        deep: true
      }
    },
    computed: {
      pending: function () {
        return this.todoList.filter(function (item) {
          return !item.done;
        })
      },
      completed: function () {
        return this.todoList.filter(function (item) {
          return item.done;
        });
      },
      completedPercentage: function () {
        return (Math.floor((this.completed.length / this.todoList.length) * 100)) + "%";
      },
      today: function () {
        var weekday = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
  
        if (dd < 10) {
          dd = '0' + dd
        }
  
        if (mm < 10) {
          mm = '0' + mm
        }
  
        today = {
          day: weekday[today.getDay()],
          date: mm + '-' + dd + '-' + yyyy,
        }
  
        return (today);
      }
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
            id: this.todoList.length,
            title: this.new_todo,
            done: false,
          });
        }
        this.new_todo = '';
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
  