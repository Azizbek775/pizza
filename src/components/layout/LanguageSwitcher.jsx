import { useTranslation } from '../../context/LanguageContext'

const LanguageSwitcher = () => {
  const { language, setLanguage, languages } = useTranslation()

  return (
    <div className="flex items-center gap-1 rounded-full bg-gray-100 px-1 py-0.5 text-xs font-semibold">
      {languages.map((item) => {
        const isActive = item.code === language
        return (
          <button
            key={item.code}
            type="button"
            onClick={() => setLanguage(item.code)}
            className={`px-2 py-1 rounded-full transition-colors ${
              isActive ? 'bg-yellow-300 text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
            aria-pressed={isActive}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

export default LanguageSwitcher

