import React from 'react'
import closeIcon from '../images/icon-cross.svg'

import checkIcon from '../images/icon-check.svg'


const Task = ({ todo }) => {
  return (
    <div className='todosContainer'>
      <div className='task'>
        {
          todo.completed ? (
            <div className="taskCompleted">
              <img src={checkIcon} alt="task completed" />
            </div>
          ) : (
            <i className='fa-regular fa-circle'></i>
          )
        }
        <p className={(todo.completed && 'todoItemCheck')} >{todo.title}</p>
      </div>
      <img className='deleteBtn' src={closeIcon} alt='Close Icon' />
    </div>
  )
}

export default Task
