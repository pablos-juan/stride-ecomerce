import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import { DEFAULT_FILTERS } from '../constants'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS)
  }

  const filterProducts = (products) => {
    return products.slice(0, 10).filter(product => {
      return (
        product.price <= filters.range &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  return { filterProducts, filters, setFilters, resetFilters }
}
