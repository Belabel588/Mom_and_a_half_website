import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export function About() {
  const [ref, isVisible] = useRevealOnScroll()

  return (
    <section id="about-section" ref={ref} className={isVisible ? 'is-visible' : ''}>

      <div className="about-section-container">

        <div className="about-section-img-container">
          <img className="about-section-img" src="./images/About-img-1.jpg" alt="Sarit 'Mom And A Half' smiling with a whit wall background" />
        </div>

        <div className="about-section-text">
          <h3 className="about-section-text-header">נעים מאוד, אני שרית</h3>

          <p className="about-section-text-body">
            היי, אני שרית חלפון, נשואה לאייל ואמא לאורי (27) ותומר (21).
          </p>

          <p className="about-section-text-body">
            אני בעלת תואר ראשון בחינוך ותואר שני בייעוץ חינוכי. במהלך השנים המשכתי
            להעמיק ולהתמקצע בתחום המשפחה וההורות במסגרת לימודי תעודה בייעוץ משפחתי
            וזוגי באוניברסיטת בר-אילן, וכן בהנחיית מעגלי אימהות לאחר לידה.
          </p>

          <p className="about-section-text-body">
            כבר 12 שנים שאני עובדת כיועצת חינוכית בבית ספר. במקביל, במשך 7 שנים אני
            מלווה ומדריכה הורים במסגרת המשחקייה המודרכת של עיריית תל אביב, ומנחה אחת
            לשבוע מעגלי אימהות. בשלוש השנים האחרונות אני גם מלווה הורים באופן עצמאי.
          </p>

          <p className="about-section-text-body">
            לאורך השנים פגשתי ילדים, הורים ומשפחות במגוון רחב של מצבים — ובעיקר למדתי
            שוב ושוב עד כמה הקשבה, הבנה וקשר יכולים ליצור שינוי.
          </p>
        </div>
      </div>

    </section>
  )
}
