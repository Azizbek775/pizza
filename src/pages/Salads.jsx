import { saladsData } from '../assets/data'
import ProductCard from '../components/layout/ui/ProductCard'
import { useTranslation } from '../context/LanguageContext'

const Salads = () => {
  const { t } = useTranslation()
  return (
    <section className="py-10">
      <div className="container">
        <h1 className="mb-8 text-3xl font-extrabold leading-tight text-yellow-400">{t('categories.salads')}</h1>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {saladsData.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Salads