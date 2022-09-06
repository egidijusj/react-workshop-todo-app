const todos = [
  'List of Todos',
  'Toggling a todo between active/completed',
  'A counter for active/completed todos',
  'Deleting a todo',
  'Adding a new todo',
  'Form validation'
];

const renderApp = todos => {
  const app = document.createElement('div')
  app.setAttribute('id', 'app')
  document.body.appendChild(app)

  const title = document.createElement('h1')
  title.innerText = 'Todo List'
  app.appendChild(title)

  const todosList = document.createElement('ul')
  app.appendChild(todosList)

  todos.forEach(todo => {
    renderTodo(todosList, todo)
  })
}
const renderTodo = (parent, todo) => {
  const todoContainer = document.createElement('li')
  parent.appendChild(todoContainer)

  const label = document.createElement('h3')
  label.innerText = todo
  todoContainer.appendChild(label)

  label.addEventListener('click', () => {
    if (label.classList.contains('completed')) {
      label.classList.remove('completed')
    } else {
      label.classList.add('completed')
    }
  })
}

document.getElementById('app').remove()
renderApp(todos)
