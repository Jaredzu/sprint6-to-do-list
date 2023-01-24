import React from 'react'

const FiltersComponets = ({ children }) => {
  return <div className='filtersComponents'>{children}</div>
}

const ItemsLeft = ({ items = 0 }) => {
  return <p className='itemsLeft'> {items} Items Left</p>
}

const FilterButtonContainer = ({ children }) => {
  return (
    <div> {children} </div>
  )
}

const FilterButton = ({ action, active, filter }) => {

  const handleClick = () => {
    action(filter)
  }

  return (
    <button onClick={handleClick} className={(active === filter) ? 'filter-button-blue' : 'filter-button-gray'}>
      {filter}
    </button>
  )
}

export { FiltersComponets, ItemsLeft, FilterButtonContainer, FilterButton }
