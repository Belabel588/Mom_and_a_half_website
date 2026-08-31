import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

/* ⚠️ PLACEHOLDER CONTENT — REPLACE BEFORE THE SITE GOES LIVE.
   These are written as visible templates, not as realistic invented reviews, on
   purpose: a fabricated recommendation presented as a genuine one would mislead
   visitors. Swap each `quote` for a real parent's words and each `author` for
   how they want to be credited (first name, "אמא לשניים", city — whatever they
   agreed to). Add or remove entries freely; the grid adapts to any count. */
const TESTIMONIALS = [
  {
    quote: 'כאן תופיע המלצה אמיתית של הורה שליוויתי — מה העסיק אותו לפני שהגיע, ומה השתנה בבית אחרי המפגשים.',
    author: 'שם ההורה',
  },
  {
    quote: 'כאן תופיע המלצה נוספת — למשל על תחושת הביטחון שההורה קיבל, או על כלי מסוים שעזר לו ביומיום.',
    author: 'שם ההורה',
  },
  {
    quote: 'כאן תופיע המלצה שלישית — משפט קצר ואישי עובד הכי טוב, כזה שהורה אחר יוכל להזדהות איתו.',
    author: 'שם ההורה',
  },
]

export function Testimonials() {
  const [ref, isVisible] = useRevealOnScroll()

  return (
    <section id="testimonials-section" ref={ref} className={isVisible ? 'is-visible' : ''}>

      <h2 className="testimonials-header">מילים טובות</h2>

      <p className="testimonials-intro">
        הורים שליוויתי מספרים על הדרך שעשינו יחד.
      </p>

      <ul className="testimonials-list">
        {TESTIMONIALS.map(testimonial => (
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
