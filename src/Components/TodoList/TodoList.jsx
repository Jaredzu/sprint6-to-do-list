import React from 'react'
import Filters from '../Filters/Filters'
import Task from '../Task/Task'

const TodoList = ({ todos }) => {
  return (
    <div className='newTask'>
      {todos.map(todo => {
        return (
          <Task key={todo.id} todo={todo} />
        )
      })}
      <Filters />
    </div>
  )
}

export default TodoList
