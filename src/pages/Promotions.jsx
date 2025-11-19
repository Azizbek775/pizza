import React from 'react'
import cake from '../assets/image/tort-.png'
import minicake from '../assets/image/mini-tort.png'
import { useTranslation } from '../context/LanguageContext'

const Promotions = () => {
  const { t } = useTranslation()
  return (
    <section className='mt-16'>
      <div className='container'>
        <h1 className='text-center text-3xl font-extrabold leading-tight sm:text-4xl'>
          {t('promotions.titlePrefix')}{' '}
          <span className='text-yellow-300'>{t('promotions.titleHighlight')}</span>
        </h1>
        <div className='mt-10 flex flex-col gap-6 lg:flex-row'>
          <img src={cake} alt='' className='w-full rounded-3xl object-cover lg:w-1/2' />
          <div className='grid flex-1 grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2'>
            {Array.from({ length: 4 }).map((_, idx) => (
              <img key={idx} src={minicake} alt='' className='h-full w-full rounded-2xl object-cover' />
            ))}
          </div>
        </div>
        <button className='mx-auto mt-10 block rounded-3xl bg-yellow-300 px-8 py-3 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-yellow-400'>
          {t('buttons.viewAllPromotions')}
        </button>
      </div>
    </section>
  )
}

export default Promotions