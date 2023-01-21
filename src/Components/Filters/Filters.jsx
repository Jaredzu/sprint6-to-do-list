import React from 'react'
import { FilterButton, FilterButtonContainer, FiltersComponets, ItemsLeft } from './FiltersComponets'


const Filters = () => {
  return (
    <div className='filtersSection'>
      <FiltersComponets>
        <ItemsLeft />
        <FilterButtonContainer>
          <FilterButton action={() => { }} active="All" filter='All' />
          <FilterButton action={() => { }} active="All" filter='Active' />
          <FilterButton action={() => { }} active="All" filter='Completed' />
        </FilterButtonContainer>

        <button className='filter-button-gray'>
          Clear Completed
        </button>
      </FiltersComponets>
    </div>
  )
}

export default Filters
