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

  const deleteTodo = todo => {
    const updatedTodos = todos.filter(t => t !== todo)
    updateTodos(updatedTodos)
  }

  const addTodo = label => {
    updateTodos([...todos, { label, completed: false }])
  }

  return (
    <div>
      <TodosList
        todos={todos}
        toggleTodoStatus={toggleTodoStatus}
        deleteTodo={deleteTodo}
      />
      <Stats todos={todos} />
      <AddTodo addTodo={addTodo} todos={todos} />
    </div>
  )
}

const TodosList = ({ todos, toggleTodoStatus, deleteTodo }) => {
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
            <button onClick={() => deleteTodo(todo)}>✗</button>
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

const AddTodo = ({ addTodo, todos }) => {
  const [isFormVisible, setFormVisibility] = React.useState(false)
  const [label, setLabel] = React.useState('')
  const [error, setError] = React.useState(null)
  const [dirty, setDirty] = React.useState(false)

  React.useEffect(() => {
    if (label === '' && dirty) {
      setError('A todo must have a name!')
    } else if (todos.find(t => t.label === label)) {
      setError('Todo with this name already exists!')
    } else {
      setError(null)
    }
    setDirty(true)
  }, [label])

  return (
    <form
      onSubmit={e => {
        e.preventDefault()
        addTodo(label)
        setLabel('')
        setFormVisibility(false)
      }}
    >
      {!isFormVisible ? (
        <button type="button" onClick={() => setFormVisibility(!isFormVisible)}>
          Add
        </button>
      ) : (
        <>
          <input
            placeholder="New Todo"
            autoFocus={true}
            onChange={e => setLabel(e.target.value)}
            value={label}
          />

          {error && <aside role="alert">{error}</aside>}

          <button type="submit">Confirm</button>
        </>
      )}
    </form>
  )
}

ReactDOM.render(<TodoApp />, document.getElementById('app'))
