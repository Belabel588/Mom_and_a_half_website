import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../context/LanguageContext'

export function IssueStart() {
  const [ref, isVisible] = useRevealOnScroll()
  const { t } = useLanguage()

  return (
    <section>
      <div id="issue-section-start" ref={ref} className={isVisible ? 'is-visible' : ''}>
        <h2 className="issue-section-header">{t.issueStart.header}</h2>

        <p className="issue-section-intro-header">{t.issueStart.intro}</p>

        <ul className="issue-section-list">
          {t.issueStart.items.map(line => (
            <li className="issue-section-list-item" key={line}>{line}</li>
          ))}
        </ul>

        <p className="issue-section-outro">
          {t.issueStart.outro.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>
      </div>
    </section>
  )
}
