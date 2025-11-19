import { useMemo } from 'react'
import { useStore } from '../context/StoreContext'
import { allProducts } from '../assets/data'
import { useTranslation } from '../context/LanguageContext'

const Favorites = () => {
  const { favoriteIds, addToCart, toggleFavorite, isFavorite } = useStore()
  const { t } = useTranslation()

  const catalog = useMemo(() => allProducts, [])
  const favorites = catalog.filter((product) => favoriteIds.includes(product.id))

  if (!favorites.length) {
    return (
      <section className="container py-12">
        <h2 className="text-2xl font-bold">{t('favorites.emptyTitle')}</h2>
        <p className="mt-2 text-gray-500">{t('favorites.emptySubtitle')}</p>
      </section>
    )
  }

  return (
    <section className="container py-12">
      <h2 className="mb-6 text-2xl font-bold">{t('favorites.title')}</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {favorites.map((product) => {
          const name = product.nameKey ? t(product.nameKey, product.name) : product.name
          const priceLabel = product.priceKey ? t(product.priceKey, product.price) : product.price

          return (
            <div key={product.id} className="rounded-2xl border bg-white p-4 shadow-sm">
              <img src={product.image} alt={name} className="h-40 w-full rounded-xl object-contain" />
              <h3 className="mt-4 text-lg font-semibold">{name}</h3>
              <p className="text-sm text-gray-500">{priceLabel}</p>
              <div className="mt-4 flex items-center gap-2">
                <button
                  className="flex-1 rounded-lg bg-yellow-300 py-2 text-sm font-semibold text-white"
                  onClick={() =>
                    addToCart({
                      ...product,
                      name,
                      price: priceLabel,
                    })
                  }
                >
                  {t('buttons.addToCart')}
                </button>
                <button
                  className="h-10 w-10 rounded-lg bg-gray-100 text-lg"
                  onClick={() => toggleFavorite(product.id)}
                  aria-label={t('nav.favorites')}
                >
                  {isFavorite(product.id) ? '❤' : '♡'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Favorites
