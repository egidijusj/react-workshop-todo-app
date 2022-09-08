/* global React, ReactDOM */

const initialTodos = [
  { label: 'List of Todos', completed: false },
  { label: 'Toggling a todo between active/completed', completed: false },
  { label: 'A counter for active/completed todos', completed: false },
  { label: 'Deleting a todo', completed: false },
  { label: 'Adding a new todo', completed: false },
  { label: 'Form validation', completed: false },
];

const TodoApp = () => {
  const [todos, updateTodos] = React.useState(initialTodos)

  const toggleTodoStatus = (updatedTodo, completed) => {
    const updatedTodos = todos.map(t =>
      t === updatedTodo ? { ...updatedTodo, completed } : t,
    )
    updateTodos(updatedTodos)
  }

  return (
    <div>
      <TodosList todos={todos} toggleTodoStatus={toggleTodoStatus} />
      <Stats todos={todos} />
    </div>
  )
}

const TodosList = ({ todos, toggleTodoStatus }) => {
  return (
    <div>
      <h1>Todos List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.label}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={e => toggleTodoStatus(todo, e.target.checked)}
            />
            <h3 className={todo.completed ? 'completed' : ''}>{todo.label}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Stats = ({ todos }) => {
  return (
    <aside>
      Completed: <strong>{todos.filter(t => t.completed).length}</strong>{' '}
      Pending: <strong>{todos.filter(t => !t.completed).length}</strong>
    </aside>
  )
}

ReactDOM.render(<TodoApp />, document.getElementById('app'))
