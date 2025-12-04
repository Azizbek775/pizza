import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/image/logo.svg'
import { useStore } from '../../context/StoreContext'
import { useTranslation } from '../../context/LanguageContext'
import LanguageSwitcher from './LanguageSwitcher'

const Header = () => {
  const { cartCount } = useStore()
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  return (
    <header className='sticky top-0 z-20 bg-white/80 backdrop-blur'>
      <nav className='container py-3'>
        <div className='flex flex-wrap items-center justify-between gap-3'>
          <Link to='/' className='flex items-center gap-2'>
            <img src={logo} alt="" className='h-10 w-auto' />
          </Link>
          <div className='hidden md:flex items-center gap-6 ml-auto'>
            <LanguageSwitcher />
            <button className='h-10 rounded-3xl bg-gray-200 px-6 text-sm font-semibold text-gray-700'>
              {t('buttons.requestCall')}
            </button>
            <a
              className='text-[18px] font-extrabold text-yellow-400 md:text-[26px] md:leading-none'
              href='tel:84993918449'
            >
              8 499 391-84-49
            </a>
          </div>
          <div className='flex items-center gap-3 flex-shrink-0 md:hidden'>
            <div>
              <LanguageSwitcher />
            </div>
            <button className='md:hidden w-10 h-10 border rounded' onClick={() => setOpen(!open)} aria-label='menu'>☰</button>
          </div>
        </div>

        <div className='mt-4 hidden md:flex items-center justify-between gap-6'>
          <ul className="flex flex-wrap gap-4 font-semibold text-[15px]">
            <li><Link to={'/'}>{t('nav.home')}</Link></li>
            <li><Link to={'/pizza'}>{t('nav.pizza')}</Link></li>
            <li><Link to={'/pasta'}>{t('nav.pasta')}</Link></li>
            <li><Link to={'/soups'}>{t('nav.soups')}</Link></li>
            <li><Link to={'/salads'}>{t('nav.salads')}</Link></li>
            <li><Link to={'/drinks'}>{t('nav.drinks')}</Link></li>
            <li><Link to={'/dessert'}>{t('nav.dessert')}</Link></li>
            <li><Link to={'/antipasti'}>{t('nav.antipasti')}</Link></li>
            <li><Link to={'/promotions'}>{t('nav.promotions')}</Link></li>
            <li><Link to={'/contact'}>{t('nav.contact')}</Link></li>
          </ul>
          <div className='flex items-center gap-4'>
            <Link to='/favorites' className='text-sm font-semibold text-gray-700 hover:text-gray-900'>
              {t('nav.favorites')}
            </Link>
            <Link
              to='/cart'
              className='relative flex items-center gap-3 rounded-[999px] bg-yellow-300 px-6 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-yellow-400'
            >
              {t('nav.cart')}
              <span className='h-5 border-l border-yellow-200' />
              <span className='text-sm'>{cartCount}</span>
            </Link>
          </div>
        </div>

        {open && (
          <div className='md:hidden mt-3 border rounded-lg p-3'>
            <ul className='grid gap-2 font-semibold text-[16px]'>
              <li><Link to='/' onClick={() => setOpen(false)}>{t('nav.home')}</Link></li>
              <li><Link to='/pizza' onClick={() => setOpen(false)}>{t('nav.pizza')}</Link></li>
              <li><Link to='/pasta' onClick={() => setOpen(false)}>{t('nav.pasta')}</Link></li>
              <li><Link to='/soups' onClick={() => setOpen(false)}>{t('nav.soups')}</Link></li>
              <li><Link to='/salads' onClick={() => setOpen(false)}>{t('nav.salads')}</Link></li>
              <li><Link to='/drinks' onClick={() => setOpen(false)}>{t('nav.drinks')}</Link></li>
              <li><Link to='/dessert' onClick={() => setOpen(false)}>{t('nav.dessert')}</Link></li>
              <li><Link to='/antipasti' onClick={() => setOpen(false)}>{t('nav.antipasti')}</Link></li>
              <li><Link to='/promotions' onClick={() => setOpen(false)}>{t('nav.promotions')}</Link></li>
              <li><Link to='/contact' onClick={() => setOpen(false)}>{t('nav.contact')}</Link></li>
              <li><Link to='/favorites' onClick={() => setOpen(false)}>{t('nav.favorites')}</Link></li>
              <li><Link to='/cart' onClick={() => setOpen(false)}>{`${t('nav.cart')} (${cartCount})`}</Link></li>
            </ul>
            <div className='mt-3 flex items-center justify-between'>
              <a href='tel:84993918449' className='font-semibold text-yellow-400'>8 499 391-84-49</a>
              <button className='text-sm font-semibold text-gray-600' onClick={() => setOpen(false)}>
                {t('buttons.requestCall')}
              </button>
            </div>
          </div>
        )}

      </nav>

    </header>
  )
}

export default Header