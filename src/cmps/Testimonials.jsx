import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../context/LanguageContext'

/* The quotes are real messages parents sent Sarit, and live in
   src/i18n/content.js (testimonials.items, in both languages). Long ones are
   trimmed but not reworded. Two things still need her input: whether each
   writer is happy for their words to be public, and how they want to be
   credited — the authors are currently described by context, not named.
   Add or remove entries freely; the grid adapts to any count. */
export function Testimonials() {
  const [ref, isVisible] = useRevealOnScroll()
  const { t } = useLanguage()

  return (
    <section id="testimonials-section" ref={ref} className={isVisible ? 'is-visible' : ''}>

      <h2 className="testimonials-header">{t.testimonials.header}</h2>

      <p className="testimonials-intro">{t.testimonials.intro}</p>

      <ul className="testimonials-list">
        {t.testimonials.items.map(testimonial => (
          <li className="testimonial-card" key={testimonial.quote}>
            <blockquote className="testimonial-quote">
              {testimonial.quote}
            </blockquote>

            <p className="testimonial-author">{testimonial.author}</p>
          </li>
        ))}
      </ul>

    </section>
  )
}
