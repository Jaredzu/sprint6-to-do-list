import React from 'react'

const TodoInput = () => {
  return (
    <div className='todoInputContainer'>
      <div className='circle'>
        <i className='fa-regular fa-circle'></i>{' '}
      </div>
      <input className='inputTodo' type='text' placeholder="What's next..." />
    </div>
  )
}

export default TodoInput
