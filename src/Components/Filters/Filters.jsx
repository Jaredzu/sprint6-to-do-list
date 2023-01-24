import React from 'react'
import { FilterButton, FilterButtonContainer, FiltersComponets, ItemsLeft } from './FiltersComponets'
import config from '../../config'

const Filters = ({
  items,
  activeFilter,
  setActiveFilter,
  clearCompleted
}) => {
  return (
    <div className='filtersSection'>
      <FiltersComponets>
        <ItemsLeft items={items} />
        <FilterButtonContainer>
          <FilterButton action={setActiveFilter} active={activeFilter} filter={config.all} />
          <FilterButton action={setActiveFilter} active={activeFilter} filter={config.active} />
          <FilterButton action={setActiveFilter} active={activeFilter} filter={config.completed} />
        </FilterButtonContainer>

        <button onClick={clearCompleted} className='filter-button-gray'>
          Clear Completed
        </button>
      </FiltersComponets>
    </div>
  )
}

export default Filters
