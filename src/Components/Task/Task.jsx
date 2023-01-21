import React from 'react'
import closeIcon from '../images/icon-cross.svg'

import checkIcon from '../images/icon-check.svg'


const Task = ({ todo, handleSetComplete, handleDelete }) => {
  return (
    <div className='todosContainer'>
      <div className='task'>
        {
          todo.completed ? (
            <div onClick={() => handleSetComplete(todo.id)} className="taskCompleted">
              <img src={checkIcon} alt="task completed" />
            </div>
          ) : (
            <i onClick={() => handleSetComplete(todo.id)} className='fa-regular fa-circle'></i>
          )
        }
        <p className={(todo.completed && 'todoItemCheck')} >{todo.title}</p>
      </div>
      <img onClick={() => handleDelete(todo.id)} className='deleteBtn' src={closeIcon} alt='Close Icon' />
    </div>
  )
}

export default Task
