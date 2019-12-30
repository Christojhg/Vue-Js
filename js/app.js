Vue.component('tasks',{
    template: `
    <div>
        <h1>Lista de tareas</h1>
        <h4 v-if="completedTasks">Tareas Completas: {{ completedTasks }}</h4>
        <h4 v-if="incompletedTasks">Tareas incompletas: {{ incompletedTasks }}</h4>
        <ul>
            <li is="task" v-for="task in tasks"></li>
            <li class="form-inline">
                <input v-on:keyup.enter="addTask" v-model="newTask" type="text" class="form-control">
            </li>
        </ul>
    </div>`,
    data: function(){
        return {
            message: "Christopher",
            newTask: "",
            tareas1: [
                "Aprender Laravel",
                "Aprender VueJS",
                "Aprender PHP"
            ],
            tareas2: [
                { title: "Aprender Laravel" },
                { title: "Aprender VueJS" },
                { title: "Aprender PHP" }
            ],
            tareas3: [
                { title: "Aprender Laravel", completed: true },
                { title: "Aprender VueJS", completed: true },
                { title: "Aprender PHP", completed: false }
            ],
            tasks: [
                { title: "Aprender Laravel", completed: true },
                { title: "Aprender VueJS", completed: true },
                { title: "Aprender PHP", completed: false }
            ]
        }
    },
    methods: {
        reverse: function () {
            this.message = this.message.split('').reverse().join('');
        },
        addTask: function () {
            //validacion para no insertar texto vacio
            if (this.newTask.length <= 1) return alert('La tarea no puede estar vacia');
            //
            this.tasks.push({
                title: this.newTask,
                completed: false,
            });
            this.newTask = "";
        },
        taskClasses: function (task) {
            console.log('css changed');
            return ['mano', task.completed ? 'far fa-check-square' : 'fas fa-ban'];
        },
        completeTask: function (task) {
            return task.completed = !task.completed;
        },
    },
    computed: {
        completedTasks: function () {
            return this.tasks.filter(function (task) {
                return task.completed;
            }).length;
        },
        incompletedTasks: function () {
            return this.tasks.filter(function (task) {
                return !task.completed;
            }).length;
        }
    }
});

Vue.component('user',{
    props: ['name','lastName'],
    data:function(){
        return{
            app:{
                name:'Aprendible'
            }
        }
    },
    //para aceptar html introducido sirve slot
    // template:'<h3><slot></slot></h3>'
    template:`<div>
        <h1>{{app.name}}</h1>
        <h2>Nombre : {{ name }} {{ lastName }}</h2>
        <input v-model="name" />
        <input v-model="lastName" />
        <input v-model="app.name" />
    </div>`
});

Vue.component('task',{
    template:`<li>
                <span v-text="task.title"></span>
                <span @click="completeTask(task)" :class="taskClasses(task)"></span>
            </li>`
});

// var app = new Vue({el: '#app'});

var app = new Vue({
    el: '#app',
    data: {
        message: "Christopher",
        newTask: "",
        tareas1: [
            "Aprender Laravel",
            "Aprender VueJS",
            "Aprender PHP"
        ],
        tareas2: [
            { title: "Aprender Laravel" },
            { title: "Aprender VueJS" },
            { title: "Aprender PHP" }
        ],
        tareas3: [
            { title: "Aprender Laravel", completed: true },
            { title: "Aprender VueJS", completed: true },
            { title: "Aprender PHP", completed: false }
        ],
        tasks: [
            { title: "Aprender Laravel", completed: true },
            { title: "Aprender VueJS", completed: true },
            { title: "Aprender PHP", completed: false }
        ]
    },
    methods: {
        reverse: function () {
            this.message = this.message.split('').reverse().join('');
        },
        addTask: function () {
            //validacion para no insertar texto vacio
            if (this.newTask.length <= 1) return alert('La tarea no puede estar vacia');
            //
            this.tasks.push({
                title: this.newTask,
                completed: false,
            });
            this.newTask = "";
        },
        taskClasses: function (task) {
            console.log('css changed');
            return ['mano', task.completed ? 'far fa-check-square' : 'fas fa-ban'];
        },
        completeTask: function (task) {
            return task.completed = !task.completed;
        },
    },
    computed: {
        completedTasks:function(){
            return this.tasks.filter(function(task){
                return task.completed;
            }).length;
        },
        incompletedTasks: function () {
            return this.tasks.filter(function (task) {
                return ! task.completed;
            }).length;
        },
        reverseTask: function () {
            return this.newTask.split('').reverse().join('');
        }
    }
});