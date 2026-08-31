import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../context/LanguageContext'

export function Issue() {
  const [ref, isVisible] = useRevealOnScroll()
  const { t } = useLanguage()

  return (
    <section id="issue-section" ref={ref} className={isVisible ? 'is-visible' : ''}>

      <div className="issue-section-img">
        <img className="issue-img" src="./images/issue-section-img-1.jpg" alt={t.issue.imgAlt} />
      </div>

      <div className="issue-section-texts">

        <div className="issue-section-textbox">
          <h3 className="issue-section-textbox-header">{t.issue.header}</h3>

          <p className="issue-section-text">
            {t.issue.paragraphs.map((text, i) => (
              <span key={text}>
                {i > 0 && <br />}
                {text}
              </span>
            ))}
          </p>
        </div>

        <div className="issue-section-textbox-2">
          <h3 className="issue-section-text-2">{t.issue.highlight}</h3>
        </div>
      </div>

    </section>
  )
}
