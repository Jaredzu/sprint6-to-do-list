import React from 'react'

const FiltersComponets = ({ children }) => {
  return <div>{children}</div>
}

const ItemsLeft = ({ items = 0 }) => {
  return <p className='itemsLeft'> {items} Items Left</p>
}



export { FiltersComponets, ItemsLeft }
