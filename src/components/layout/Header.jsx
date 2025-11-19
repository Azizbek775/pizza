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
        <div className='flex items-center justify-between gap-3'>
          <Link to='/' className='flex items-center gap-2'>
            <img src={logo} alt="" className='h-10 w-auto' />
          </Link>
          <div className='hidden md:flex items-center gap-4'>
            <LanguageSwitcher />
            <button className='h-10 rounded-3xl bg-gray-200 px-5 text-sm font-semibold text-gray-700'>{t('buttons.requestCall')}</button>
            <a className='text-lg md:text-2xl font-bold text-amber-300' href='tel:84993915275'>8 499 391-52-75</a>
          </div>
          <div className='flex items-center gap-3'>
            <div className='md:hidden'>
              <LanguageSwitcher />
            </div>
            <Link to='/favorites' className='relative rounded px-3 py-2 hover:bg-gray-100' aria-label={t('nav.favorites')}>❤</Link>
            <Link to='/cart' className='relative rounded bg-yellow-300 px-4 py-2 font-semibold text-white'>
              {t('nav.cart')}
              <span className='ml-2 bg-white text-yellow-500 rounded px-2 py-0.5 text-xs align-middle'>{cartCount}</span>
            </Link>
            <button className='md:hidden w-10 h-10 border rounded' onClick={() => setOpen(!open)} aria-label='menu'>☰</button>
          </div>
        </div>

        <div className='mt-4 hidden md:block'>
          <ul className="flex flex-wrap gap-4 font-semibold text-[16px]">
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
              <a href='tel:84993915275' className='font-semibold text-amber-400'>8 499 391-52-75</a>
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