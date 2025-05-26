import { createContext, useReducer } from 'react'

export const CartContext = createContext()

const INITIAL_STATE = []

const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action

  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        return newState
      }

      return [
        ...state,
        {
          ...actionPayload,
          quantity: 1
        }
      ]
    }

    case 'REMOVE_PRODUCT': {
      const { id } = actionPayload
      return state.filter(item => item.id !== id)
    }

    case 'REMOVE_FROMCART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity -= 1
        return newState.filter(item => item.quantity !== 0)
      }

      return state
    }

    case 'CLEAR_CART': {
      return INITIAL_STATE
    }
  }

  return state
}

export function CartProvider ({ children }) {
  const [cart, dispatch] = useReducer(reducer, INITIAL_STATE)

  const addToCart = product => dispatch({
    type: 'ADD_TO_CART',
    payload: product
  })

  const removeFromCart = product => dispatch({
    type: 'REMOVE_FROMCART',
    payload: product
  })

  const removeProduct = product => dispatch({
    type: 'REMOVE_PRODUCT',
    payload: product
  })

  const clearCart = () => dispatch({ type: 'CLEAR_CART' })

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)

  const totalPrice = Number(
    cart.reduce((total, item) => total + (item.price * item.quantity), 0)
      .toFixed(2)
  )

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      removeProduct,
      clearCart,
      totalQuantity,
      totalPrice
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
