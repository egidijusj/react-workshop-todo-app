/* global React, ReactDOM */

const todos = [
  'List of Todos',
  'Toggling a todo between active/completed',
  'A counter for active/completed todos',
  'Deleting a todo',
  'Adding a new todo',
  'Form validation'
];

const TodoApp = () => {
  return (
    <div>
      <h1>Todos List</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo}>
            <h3>{todo}</h3>
          </li>
        ))}
      </ul>
    </div>
  )
}

ReactDOM.render(<TodoApp />, document.getElementById('app'))
