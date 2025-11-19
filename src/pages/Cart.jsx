import React from 'react'
import { useStore } from '../context/StoreContext'
import { useTranslation } from '../context/LanguageContext'

const Cart = () => {
  const { cartItems, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = useStore()
  const { t } = useTranslation()

  const parsePrice = (priceStr) => {
    const digits = String(priceStr).replace(/[^0-9]/g, '')
    const val = parseInt(digits || '0', 10)
    return Number.isNaN(val) ? 0 : val
  }

  const getItemPrice = (item) => item.priceValue ?? parsePrice(item.price)

  const total = cartItems.reduce((sum, item) => sum + getItemPrice(item) * (item.quantity || 1), 0)

  if (!cartItems.length) {
    return (
      <section className="container py-12">
        <h2 className="text-2xl font-bold">{t('cart.emptyTitle')}</h2>
        <p className="mt-2 text-gray-500">{t('cart.emptySubtitle')}</p>
      </section>
    )
  }

  return (
    <section className="container py-12">
      <h2 className="mb-6 text-2xl font-bold">{t('cart.title')}</h2>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          {cartItems.map((item) => {
            const priceLabel = item.priceKey ? t(item.priceKey, item.price) : item.price
            return (
              <div key={item.id} className="flex flex-col gap-4 rounded-xl border p-4 sm:flex-row sm:items-center">
                <img src={item.image} alt={item.name} className="h-20 w-20 rounded-lg object-contain" />
                <div className="flex-1">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{priceLabel}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="h-9 w-9 rounded border" onClick={() => decrementQuantity(item.id)}>-</button>
                  <span className="w-8 text-center">{item.quantity || 1}</span>
                  <button className="h-9 w-9 rounded border" onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <button className="text-sm font-semibold text-red-500" onClick={() => removeFromCart(item.id)}>
                  {t('buttons.delete')}
                </button>
              </div>
            )
          })}
        </div>
        <aside className="h-fit rounded-xl border p-4 shadow-sm">
          <div className="flex items-center justify-between text-lg font-semibold">
            <span>{t('cart.total')}</span>
            <span>{total} ₽</span>
          </div>
          <button onClick={clearCart} className="mt-4 w-full rounded-lg bg-gray-200 py-2 font-semibold">
            {t('buttons.clear')}
          </button>
          <button className="mt-2 w-full rounded-lg bg-yellow-300 py-2 font-semibold text-white hover:bg-yellow-400">
            {t('buttons.checkout')}
          </button>
        </aside>
      </div>
    </section>
  )
}

export default Cart

