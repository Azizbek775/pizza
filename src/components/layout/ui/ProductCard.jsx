import React from 'react'
import { useStore } from '../../../context/StoreContext'
import { useTranslation } from '../../../context/LanguageContext'

const ProductCard = ({ product }) => {
  const { addToCart, toggleFavorite, isFavorite } = useStore()
  const { t } = useTranslation()

  const favorite = isFavorite(product.id)

  const name = product.nameKey ? t(product.nameKey, product.name) : product.name
  const description = product.descriptionKey ? t(product.descriptionKey, product.description) : product.description
  const priceLabel = product.priceKey ? t(product.priceKey, product.price) : product.price

  const handleAddToCart = () => {
    addToCart({
      ...product,
      name,
      description,
      price: priceLabel,
    })
  }

  return (
    <div className="flex h-full flex-col rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/[0.03]">
      <div className="relative overflow-hidden rounded-xl bg-gray-50">
        <img src={product.image} alt={name} className="w-full object-contain" loading="lazy" />
        <button
          onClick={() => toggleFavorite(product.id)}
          aria-label="favorite"
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full shadow transition ${
            favorite ? 'bg-red-500 text-white' : 'bg-white text-gray-500'
          }`}
        >
          {favorite ? '❤' : '♡'}
        </button>
      </div>
      <h3 className="mt-4 text-lg font-extrabold text-gray-800">{name}</h3>
      <p className="mt-2 flex-1 text-sm text-gray-500">{description}</p>
      <div className="mt-4 flex items-center justify-between gap-3">
        <h3 className="text-xl font-bold text-gray-900">{priceLabel}</h3>
        <button
          onClick={handleAddToCart}
          className="flex-1 rounded-lg bg-yellow-300 py-2 text-center text-sm font-semibold text-white hover:bg-yellow-400"
        >
          {t('buttons.addToCart')}
        </button>
      </div>
    </div>
  )
}

export default ProductCard