import React from 'react'
import Logo from '../../assets/image/logo.svg'
import Icon from '../../assets/image/icon.svg'
import { useTranslation } from '../../context/LanguageContext'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className='mt-20 border-t'>
      <div className='container py-8'>
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <img src={Logo} alt="" className='h-10 w-auto' />
          <h1 className='text-center text-lg font-bold md:text-left md:text-xl'>{t('footer.question')}</h1>
        </div>

        <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-3'>
          <div className='space-y-2 text-center font-semibold md:text-left'>
            <p>{t('footer.nutrition')}</p>
            <p>{t('footer.legal')}</p>
          </div>
          <div className='md:col-span-2'>
            <div className='grid grid-cols-3 gap-3'>
              {Array.from({ length: 6 }).map((_, idx) => (
                <button key={idx} className='rounded-[13px] border px-4 py-2'>
                  <img src={Icon} alt='' className='mx-auto' />
                </button>
              ))}
            </div>
            <div className='mt-4 flex flex-col gap-3 sm:flex-row'>
              <button className='flex-1 rounded-[13px] border px-6 py-2 sm:flex-none'>
                <img src={Icon} alt='' className='mx-auto' />
              </button>
              <button className='flex-1 rounded-[13px] border px-6 py-2 sm:flex-none'>
                <img src={Icon} alt='' className='mx-auto' />
              </button>
              <button className='rounded-[13px] border px-6 py-2 text-[16px] font-semibold'>{t('buttons.writeUs') ?? t('footer.writeUs')}</button>
            </div>
          </div>
        </div>

        <div className='mt-8 grid grid-cols-2 gap-4 text-gray-600 md:grid-cols-4'>
          <p>YouTube</p>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>VK</p>
        </div>

        <div className='mt-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between'>
          <p className='text-center text-gray-600 md:text-left'>{t('footer.address')}</p>
          <button className='w-full rounded-3xl bg-gray-200 py-3 px-6 font-semibold md:w-auto'>{t('footer.callRequest')}</button>
          <a className='w-full text-center text-2xl font-bold text-yellow-300 md:w-auto' href='tel:84993918449'>8 499 391-84-49</a>
        </div>

        <p className='mt-6 text-center text-sm text-gray-500'>{t('footer.rights')}</p>
      </div>
    </footer>
  )
}

export default Footer