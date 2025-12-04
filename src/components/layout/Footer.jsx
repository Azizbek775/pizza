import React from 'react'
import Logo from '../../assets/image/logo.svg'
import Icon from '../../assets/image/icon.svg'
import { useTranslation } from '../../context/LanguageContext'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <footer className='mt-16 border-t bg-white'>
      <div className='container py-10'>
        {/* Top row: logo + question */}
        <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
          <img src={Logo} alt='' className='h-10 w-auto' />
          <h2 className='text-center text-lg font-bold md:text-left md:text-xl'>
            {t('footer.question')}
          </h2>
        </div>

        {/* Middle row: links + messengers */}
        <div className='mt-8 grid gap-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]'>
          <div className='space-y-2 text-center text-sm font-semibold md:text-left'>
            <button className='block w-full text-gray-700 hover:text-gray-900 md:w-auto'>
              {t('footer.nutrition')}
            </button>
            <button className='block w-full text-gray-700 hover:text-gray-900 md:w-auto'>
              {t('footer.legal')}
            </button>
          </div>

          <div className='space-y-4'>
            <div className='grid grid-cols-3 gap-3 sm:grid-cols-6'>
              {Array.from({ length: 6 }).map((_, idx) => (
                <button
                  key={idx}
                  className='flex items-center justify-center rounded-[13px] border bg-white px-4 py-2 shadow-sm hover:bg-gray-50'
                >
                  <img src={Icon} alt='' className='h-5 w-5' />
                </button>
              ))}
            </div>

            <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
              <button className='flex-1 rounded-[13px] border bg-white px-6 py-3 text-sm font-semibold hover:bg-gray-50'>
                {t('buttons.writeUs') ?? t('footer.writeUs')}
              </button>
              <button className='flex-1 rounded-[13px] border bg-white px-6 py-3 text-sm font-semibold hover:bg-gray-50'>
                {t('footer.callRequest')}
              </button>
            </div>
          </div>
        </div>

        {/* Social row */}
        <div className='mt-8 flex flex-wrap items-center gap-4 text-sm text-gray-600'>
          <span className='font-semibold'>Мы в соцсетях:</span>
          <div className='flex flex-wrap gap-4'>
            <span>YouTube</span>
            <span>Facebook</span>
            <span>Instagram</span>
            <span>VK</span>
          </div>
        </div>

        {/* Bottom row: address + call + phone */}
        <div className='mt-8 flex flex-col gap-3 border-t pt-4 md:flex-row md:items-center md:justify-between'>
          <p className='text-center text-sm text-gray-600 md:text-left'>{t('footer.address')}</p>
          <div className='flex flex-col gap-3 sm:flex-row sm:items-center'>
            <button className='w-full rounded-3xl bg-gray-200 px-6 py-3 text-sm font-semibold md:w-auto'>
              {t('footer.callRequest')}
            </button>
            <a
              className='w-full text-center text-2xl font-extrabold text-yellow-400 md:w-auto'
              href='tel:84993918449'
            >
              8 499 391-84-49
            </a>
          </div>
        </div>

        <p className='mt-6 text-center text-xs text-gray-500 md:text-sm'>{t('footer.rights')}</p>
      </div>
    </footer>
  )
}

export default Footer