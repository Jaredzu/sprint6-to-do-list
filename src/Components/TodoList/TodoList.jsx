import React from 'react'
import Filters from '../Filters/Filters'

const TodoList = ({ children }) => {
  return (
    <div className='newTask'>
      {children}
      <Filters />
    </div>
  )
}

export default TodoList
