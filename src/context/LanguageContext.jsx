import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { fallbackLanguage, supportedLanguages, translations } from '../i18n/translations'

const LanguageContext = createContext(null)

const resolveTranslation = (lang, key) => {
  if (!key) return undefined
  const segments = key.split('.')
  let current = translations[lang]
  for (const segment of segments) {
    if (current && Object.prototype.hasOwnProperty.call(current, segment)) {
      current = current[segment]
    } else {
      current = undefined
      break
    }
  }
  return typeof current === 'string' ? current : undefined
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('language') : null
    const match = supportedLanguages.find((l) => l.code === saved)
    return match ? match.code : fallbackLanguage
  })

  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  const value = useMemo(() => {
    const t = (key, fallback) => resolveTranslation(language, key) ?? fallback ?? key
    return {
      language,
      setLanguage,
      t,
      languages: supportedLanguages,
    }
  }, [language])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export const useTranslation = () => {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error('useTranslation must be used within LanguageProvider')
  }
  return ctx
}

