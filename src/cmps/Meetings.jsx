import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../context/LanguageContext'

/* This section carries no photo on purpose — it explains the service itself, so
   the structure (two contrasting cards, then the "who is it for" list) is what
   does the visual work that an image does elsewhere on the page. */
export function Meetings() {
  const [ref, isVisible] = useRevealOnScroll()
  const { t } = useLanguage()
  const m = t.meetings

  return (
    <section id="meetings-section" ref={ref} className={isVisible ? 'is-visible' : ''}>

      <h2 className="meetings-header">{m.header}</h2>

      <div className="meetings-cards">

        <article className="meetings-card">
          <h3 className="meetings-card-header">{m.helpHeader}</h3>

          {m.helpParagraphs.map(text => (
            <p className="meetings-card-text" key={text}>{text}</p>
          ))}

          <p className="meetings-card-highlight">{m.helpHighlight}</p>
        </article>

        <article className="meetings-card meetings-card-alt">
          <h3 className="meetings-card-header">{m.approachHeader}</h3>

          {m.approachIntro.map(text => (
            <p className="meetings-card-text" key={text}>{text}</p>
          ))}

          <ul className="meetings-questions">
            {m.approachQuestions.map(q => (
              <li className="meetings-question" key={q}>{q}</li>
            ))}
          </ul>

          {m.approachOutro.map(text => (
            <p className="meetings-card-text" key={text}>{text}</p>
          ))}
        </article>

      </div>

      <div className="meetings-suitable">
        <h3 className="meetings-suitable-header">{m.suitableHeader}</h3>

        <p className="meetings-suitable-intro">
          {m.suitableIntro.map((line, i) => (
            <span key={line}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </p>

        <ul className="meetings-suitable-list">
          {m.suitableItems.map(item => (
            <li className="meetings-suitable-item" key={item}>{item}</li>
          ))}
        </ul>

        <p className="meetings-suitable-note">{m.suitableNote}</p>
      </div>

    </section>
  )
}
