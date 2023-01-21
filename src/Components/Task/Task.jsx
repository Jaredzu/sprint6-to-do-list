import React from 'react'
import closeIcon from '../images/icon-cross.svg'


const Task = () => {
  return (
    <div className='todosContainer'>
      <div className='task'>
        <i className='fa-regular fa-circle'></i>
        <p className='todoItem'>Todo item Example</p>
      </div>
      <img className='deleteBtn' src={closeIcon} alt='Close Icon' />
    </div>
  )
}

export default Task
