import { createContext, useState } from 'react'
import { DEFAULT_FILTERS } from '../constants'

export const FiltersContext = createContext()

export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState(DEFAULT_FILTERS)

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}
    >
      {children}
    </FiltersContext.Provider>
  )
}
