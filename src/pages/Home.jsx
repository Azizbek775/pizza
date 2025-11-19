import yellow from '../assets/image/yellow-img.png'
import black from '../assets/image/black-img.png'
import minipizza from '../assets/image/mini-piza.png'
import Pizza from './Pizza'
import Promotions from './Promotions'
import Contact from './Contact'
import Antipasti from './Antipasti'
import { useTranslation } from '../context/LanguageContext'

const newProducts = [
  { id: 1, image: minipizza, nameKey: 'home.items.carbonara.name', priceKey: 'home.items.carbonara.price' },
  { id: 2, image: minipizza, nameKey: 'home.items.quattro.name', priceKey: 'home.items.quattro.price' },
  { id: 3, image: minipizza, nameKey: 'home.items.pepperoni.name', priceKey: 'home.items.pepperoni.price' },
  { id: 4, image: minipizza, nameKey: 'home.items.veggie.name', priceKey: 'home.items.veggie.price' },
]

const Home = () => {
  const { t } = useTranslation()

  return (
    <section>
      <div className='container'>
        <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row lg:justify-center">
          <img src={yellow} alt="yellow banner" className='w-full max-w-[540px] rounded-2xl object-cover' />
          <img src={black} alt="black banner" className='w-full max-w-[540px] rounded-2xl object-cover' />
        </div>
        <div className='mt-12'>
          <h2 className='mb-9 text-2xl font-bold'>{t('home.featuredTitle')}</h2>
          <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
            {newProducts.map(item => (
              <div key={item.id} className='flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/[0.03]'>
                <img src={item.image} alt={t(item.nameKey)} className='h-20 w-20 object-contain' />
                <div>
                  <h3 className='text-lg font-semibold leading-tight'>{t(item.nameKey)}</h3>
                  <p className='mt-2 text-sm font-bold text-yellow-400'>{t(item.priceKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Pizza />
      <Antipasti />
      <Promotions />
      <Contact />
    </section>
  )
}

export default Home
