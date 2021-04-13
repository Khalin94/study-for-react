const todoList = [
    {taskName : '빨래하기', finished : false},
    {taskName : '공부하기', finished : true}
]

const todos = todoList.map(todo => `<div>${todo.taskName}</div>`);
console.log(`todos : `, todos);

const todos2 = todoList.map(todo => `<TodoTask />`)
console.log(`todos2 : `, todos2);

const todos3 = todoList.map(todo => `<TodoTask taskName=${todo.taskName} />`);
console.log(`todos3 : `, todos3);