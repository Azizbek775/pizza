import store from '../assets/image/store.png'
import { useTranslation } from '../context/LanguageContext'

const contactItems = [
  { id: 1, icon: store, textKey: 'contact.cards.delivery' },
  { id: 2, icon: store, textKey: 'contact.cards.payment' },
  { id: 3, icon: store, textKey: 'contact.cards.schedule' },
  { id: 4, icon: store, textKey: 'contact.cards.pickup' },
]

const Contact = () => {
  const { t } = useTranslation()
  return (
    <section className='mt-16 bg-blue-50 py-16'>
      <div className='container'>
        <h2 className='text-center text-3xl font-extrabold text-yellow-400'>{t('contact.title')}</h2>
        <div className='mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {contactItems.map(item => (
            <div key={item.id} className='rounded-2xl bg-white p-4 text-center shadow-sm'>
              <div className='mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-yellow-50'>
                <img src={item.icon} alt='icon' className='h-8 w-8 object-contain' />
              </div>
              <p className='mt-4 text-sm font-semibold text-gray-700'>{t(item.textKey)}</p>
            </div>
          ))}
        </div>

        <div className='mt-10 overflow-hidden rounded-3xl shadow-lg'>
          <iframe
            title='Roma Pizza location'
            className='h-[320px] w-full'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15187.59732419911!2d69.23283547427707!3d41.29107991582349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b75a96124ff%3A0x7d69fec345a05250!2sRoma%20Pizza%20%7C%20Muqimiy!5e0!3m2!1sru!2s!4v1754643272099!5m2!1sru!2s"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
