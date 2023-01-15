import React from 'react'
import { FiltersComponets, ItemsLeft } from './FiltersComponets'

const Filters = () => {
  return (
    <div className='filtersSection'>
      <FiltersComponets>
        <ItemsLeft />
      </FiltersComponets>
    </div>
  )
}

export default Filters
