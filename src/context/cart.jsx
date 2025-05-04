import { createContext, useState } from 'react'

export const CartContext = createContext()

export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = product => {
    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity += 1
      return setCart(newCart)
    }

    setCart(prev => ([
      ...prev,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const removeFromCart = product => {
    if (!cart.includes(product)) console.log('error jajaja')

    const productInCartIndex = cart.findIndex(item => item.id === product.id)

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart)
      newCart[productInCartIndex].quantity -= 1
      return setCart(newCart.filter(item => item.quantity !== 0))
    }
  }

  const removeProduct = product => {
    setCart(prev => prev.filter(item => item.id !== product.id))
  }

  const clearCart = () => {
    setCart([])
  }

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0)

  const totalPrice = cart.reduce((total, item) => total + item.price, 0)

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
