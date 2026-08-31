import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../context/LanguageContext'

export function About() {
  const [ref, isVisible] = useRevealOnScroll()
  const { t } = useLanguage()

  return (
    <section id="about-section" ref={ref} className={isVisible ? 'is-visible' : ''}>

      <div className="about-section-container">

        <div className="about-section-img-container">
          <img className="about-section-img" src="./images/About-img-1.jpg" alt={t.about.imgAlt} />
        </div>

        <div className="about-section-text">
          <h3 className="about-section-text-header">{t.about.header}</h3>

          {t.about.paragraphs.map(text => (
            <p className="about-section-text-body" key={text}>{text}</p>
          ))}
        </div>
      </div>

    </section>
  )
}
