import { useRevealOnScroll } from '../hooks/useRevealOnScroll'
import { useLanguage } from '../context/LanguageContext'

/* ⚠️ The quotes are PLACEHOLDERS and live in src/i18n/content.js (testimonials
   .items, in both languages). They are written as visible templates, not as
   realistic invented reviews, on purpose: a fabricated recommendation presented
   as a genuine one would mislead visitors. Swap each quote for a real parent's
   words and each author for how they agreed to be credited. Add or remove
   entries freely — the grid adapts to any count. */
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
