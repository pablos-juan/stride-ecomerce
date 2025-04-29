import { useContext } from 'react'
import { FiltersContext } from '../context/filters'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

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

  return { filterProducts, filters, setFilters }
}
