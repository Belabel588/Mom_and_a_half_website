import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '../context/LanguageContext'

const STORAGE_KEY = 'mah-a11y'

/* Each toggle maps to a data-attribute on <html>; the styling for all of them
   lives in _accessibility.scss. Keeping the state here and the appearance there
   means a new option is one entry in this object plus one CSS rule. */
const DEFAULTS = {
  textStep: 0,      // 0–3, drives the root font-size
  contrast: false,
  links: false,
  readableFont: false,
  stopMotion: false,
}

const MAX_TEXT_STEP = 3
const TEXT_STEP_PERCENT = 12.5

function readSaved() {
  if (typeof window === 'undefined') return DEFAULTS
  try {
    const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '{}')
    return { ...DEFAULTS, ...saved }
  } catch {
    return DEFAULTS
  }
}

export function AccessibilityMenu() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [settings, setSettings] = useState(readSaved)
  const panelRef = useRef(null)
  const buttonRef = useRef(null)

  // Push the settings onto <html> so plain CSS can react to them.
  useEffect(() => {
    const root = document.documentElement

    root.style.fontSize = settings.textStep
      ? `${100 + settings.textStep * TEXT_STEP_PERCENT}%`
      : ''

    // Flag for CSS that needs to react to scaling itself — some fluid clamp()
    // sizes are governed by their vw term, which no root font-size can move.
    root.toggleAttribute('data-a11y-text', settings.textStep > 0)
    root.toggleAttribute('data-a11y-contrast', settings.contrast)
    root.toggleAttribute('data-a11y-links', settings.links)
    root.toggleAttribute('data-a11y-font', settings.readableFont)
    root.toggleAttribute('data-a11y-motion', settings.stopMotion)

    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings))
  }, [settings])

  // Escape closes the panel and returns focus to the button that opened it.
  useEffect(() => {
    if (!isOpen) return

    function handleKeyDown(ev) {
      if (ev.key === 'Escape') {
        setIsOpen(false)
        buttonRef.current?.focus()
      }
    }
    function handleClickAway(ev) {
      if (panelRef.current?.contains(ev.target)) return
      if (buttonRef.current?.contains(ev.target)) return
      setIsOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('mousedown', handleClickAway)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('mousedown', handleClickAway)
    }
  }, [isOpen])

  function set(key, value) {
    setSettings(prev => ({ ...prev, [key]: value }))
  }

  const toggles = [
    { key: 'contrast', label: t.a11y.highContrast, icon: '◐' },
    { key: 'links', label: t.a11y.highlightLinks, icon: '🔗' },
    { key: 'readableFont', label: t.a11y.readableFont, icon: 'Aa' },
    { key: 'stopMotion', label: t.a11y.stopMotion, icon: '⏸' },
  ]

  return (
    <>
      <button className="a11y-button"
        ref={buttonRef}
        onClick={() => setIsOpen(open => !open)}
        aria-expanded={isOpen}
        aria-controls="a11y-panel"
        aria-label={isOpen ? t.a11y.close : t.a11y.open}
        title={isOpen ? t.a11y.close : t.a11y.open}>
        {/* The standard accessibility figure, drawn inline so it needs no asset
            and inherits the button's colour. */}
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <circle cx="12" cy="4" r="2" />
          <path d="M21 8.5c0 .6-.5 1-1.1.9L15 8.7V13l2.2 7.3c.2.6-.2 1.2-.8 1.4-.6.2-1.2-.2-1.4-.8L13 14.6h-2l-2 6.3c-.2.6-.8 1-1.4.8-.6-.2-1-.8-.8-1.4L9 13V8.7l-4.9.7C3.5 9.5 3 9.1 3 8.5S3.4 7.4 4 7.3L9.6 6.5h4.8L20 7.3c.6.1 1 .6 1 1.2z" />
        </svg>
      </button>

      {isOpen && (
        <div className="a11y-panel" id="a11y-panel" ref={panelRef} role="dialog"
          aria-modal="false" aria-label={t.a11y.title}>

          <h2 className="a11y-panel-title">{t.a11y.title}</h2>

          <div className="a11y-text-size">
            <button className="a11y-step"
              onClick={() => set('textStep', Math.max(0, settings.textStep - 1))}
              disabled={settings.textStep === 0}
              aria-label={t.a11y.smallerText}>A−</button>

            <span className="a11y-step-readout" aria-live="polite">
              {100 + settings.textStep * TEXT_STEP_PERCENT}%
            </span>

            <button className="a11y-step"
              onClick={() => set('textStep', Math.min(MAX_TEXT_STEP, settings.textStep + 1))}
              disabled={settings.textStep === MAX_TEXT_STEP}
              aria-label={t.a11y.biggerText}>A+</button>
          </div>

          {toggles.map(toggle => (
            <button className={`a11y-toggle ${settings[toggle.key] ? 'is-on' : ''}`}
              key={toggle.key}
              onClick={() => set(toggle.key, !settings[toggle.key])}
              aria-pressed={settings[toggle.key]}>
              <span className="a11y-toggle-icon" aria-hidden="true">{toggle.icon}</span>
              <span className="a11y-toggle-label">{toggle.label}</span>
              <span className="a11y-toggle-state">
                {settings[toggle.key] ? t.a11y.on : t.a11y.off}
              </span>
            </button>
          ))}

          <button className="a11y-reset" onClick={() => setSettings(DEFAULTS)}>
            {t.a11y.reset}
          </button>
        </div>
      )}
    </>
  )
}
