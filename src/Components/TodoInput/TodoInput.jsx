import React, { useState } from 'react'


const TodoInput = ({ addNewTodo }) => {

  const [title, setTitle] = useState('')
  /*   console.log("nuevo valor: ", title);*/

  const handleNewTodo = (event) => {
    if (event.key === 'Enter' && event.target.value !== "") {
      addNewTodo(title)
      setTitle('')
    }

  }

  return (
    <div className='todoInputContainer'>
      <div className='circle'>
        <i className='fa-regular fa-circle'></i>{' '}
      </div>
      <input className='inputTodo'
        type='text'
        placeholder="What's next..."
        onChange={event => setTitle(event.target.value)}
        value={title}
        onKeyDown={event => handleNewTodo(event)}
      />
    </div>
  )
}

export default TodoInput
