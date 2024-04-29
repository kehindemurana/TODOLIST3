

function TodoItem({task, deleteTask, toggleCompleted }) {
  function handleChange(){
    toggleCompleted(task.id)
  }
  return (
    <div className="todo-item">
      <input
      type="checkbox"
      checked={task.completed}
      onChange={handleChange}/>
      <p>
      <h1>{task.id}</h1>
      </p>
      <button onClick={()=>deleteTask(task.id)}>X</button>
    </div>
  )
}

export default TodoItem
