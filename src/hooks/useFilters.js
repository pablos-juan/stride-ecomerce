import { useContext } from 'react'
import { FiltersContext } from '../context/filters'
import { ALFABETIC_SORT, DEFAULT_FILTERS, MAX_PRICE_FIRST_SORT, MIN_PRICE_FIRST_SORT } from '../constants'

export function useFilters () {
  const { filters, setFilters } = useContext(FiltersContext)

  const resetFilters = () => {
    setFilters(DEFAULT_FILTERS)
  }

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price <= filters.range &&
        (
          filters.category === 'all' ||
          product.category === filters.category
        )
      )
    })
  }

  const sorters = {
    [ALFABETIC_SORT]: (a, b) => a.title.localeCompare(b.title),
    [MIN_PRICE_FIRST_SORT]: (a, b) => a.price - b.price,
    [MAX_PRICE_FIRST_SORT]: (a, b) => b.price - a.price
  }

  const orderProducts = (products, sortType) => {
    if (!sortType) return products
    return [...products].sort(sorters[sortType])
  }

  return { filterProducts, filters, setFilters, resetFilters, orderProducts }
}
