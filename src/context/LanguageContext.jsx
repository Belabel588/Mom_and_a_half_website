import { createContext, useContext, useEffect, useState } from 'react'
import { CONTENT, LANGUAGES } from '../i18n/content'

const STORAGE_KEY = 'mah-lang'
const LanguageContext = createContext(null)

function readInitialLanguage() {
  if (typeof window === 'undefined') return 'he'

  const saved = window.localStorage.getItem(STORAGE_KEY)
  if (LANGUAGES.includes(saved)) return saved

  /* Always Hebrew unless the visitor has previously chosen otherwise.
     Deliberately NOT sniffing navigator.language: the static HTML declares
     lang="he" with a Hebrew title, description and structured data, and
     Googlebot commonly reports an English locale — auto-switching would serve
     it English body copy that contradicts its own head, which is the opposite
     of what the Hebrew search ranking needs. English stays opt-in. */
  return 'he'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(readInitialLanguage)

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang)

    /* lang goes on <html> for screen readers and search engines. `dir` does
       NOT: the stylesheets set `direction` per section against an LTR root, and
       flipping the root reverses the header nav and swaps the About and Issue
       photos to the wrong sides. The data-lang hook drives those per-section
       direction rules instead — see _lang.scss. */
    document.documentElement.lang = lang
    document.documentElement.setAttribute('data-lang', lang)
  }, [lang])

  const value = {
    lang,
    t: CONTENT[lang],
    isHebrew: lang === 'he',
    toggleLanguage: () => setLang(current => (current === 'he' ? 'en' : 'he')),
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) throw new Error('useLanguage must be used inside a LanguageProvider')
  return context
}
