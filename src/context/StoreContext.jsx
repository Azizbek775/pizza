import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const StoreContext = createContext(null)

export const useStore = () => {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore must be used within StoreProvider')
  return ctx
}

export const StoreProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const raw = localStorage.getItem('cartItems')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })
  const [favoriteIds, setFavoriteIds] = useState(() => {
    try {
      const raw = localStorage.getItem('favoriteIds')
      return raw ? JSON.parse(raw) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds))
  }, [favoriteIds])

  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((p) => p.id === product.id)
      if (existing) {
        return prev.map((p) => (p.id === product.id ? { ...p, quantity: (p.quantity || 1) + 1 } : p))
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCartItems((prev) => prev.filter((p) => p.id !== productId))
  }

  const incrementQuantity = (productId) => {
    setCartItems((prev) => prev.map((p) => (p.id === productId ? { ...p, quantity: (p.quantity || 1) + 1 } : p)))
  }

  const decrementQuantity = (productId) => {
    setCartItems((prev) => prev.map((p) => (p.id === productId ? { ...p, quantity: Math.max(1, (p.quantity || 1) - 1) } : p)))
  }

  const clearCart = () => setCartItems([])

  const toggleFavorite = (productId) => {
    setFavoriteIds((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const isFavorite = (productId) => favoriteIds.includes(productId)

  const cartCount = useMemo(() => cartItems.reduce((sum, item) => sum + (item.quantity || 1), 0), [cartItems])

  const value = {
    cartItems,
    favoriteIds,
    addToCart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    toggleFavorite,
    isFavorite,
    cartCount,
  }

  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
}

export default StoreContext



