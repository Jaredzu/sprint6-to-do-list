import React from 'react'
import Task from '../Task/Task'

const TodoList = ({ todos,
  handleSetComplete,
  handleDelete,
}) => {
  return (
    <div className='newTask'>
      {todos.map(todo => {
        return (
          <Task key={todo.id}
            todo={todo}
            handleSetComplete={handleSetComplete}
            handleDelete={handleDelete} />
        )
      })}
    </div>
  )
}

export default TodoList
