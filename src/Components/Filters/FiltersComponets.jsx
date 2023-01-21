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
  return (
    <button className={(active.toLowerCase().includes(filter.toLowerCase())) ? 'filter-button-blue' : 'filter-button-gray'}>
      {filter}
    </button>
  )
}

export { FiltersComponets, ItemsLeft, FilterButtonContainer, FilterButton }
