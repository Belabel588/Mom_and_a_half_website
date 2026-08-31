import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const SUITABLE_FOR = [
  'קושי בהצבת גבולות',
  'התקפי זעם והתפרצויות',
  'התנגדויות ומאבקים ביומיום',
  'קושי בשיתוף פעולה',
  'מריבות ומתחים בבית',
  'התלבטויות סביב הדרך הנכונה להגיב',
  'תחושה שאתם רוצים להבין טוב יותר את הילד שלכם',
  'רצון ליצור בבית יותר תקשורת, חיבור ואווירה נעימה',
]

/* This section carries no photo on purpose — it explains the service itself, so
   the structure (two contrasting cards, then the "who is it for" list) is what
   does the visual work that an image does elsewhere on the page. */
export function Meetings() {
  const [ref, isVisible] = useRevealOnScroll()

  return (
    <section id="meetings-section" ref={ref} className={isVisible ? 'is-visible' : ''}>

      <h2 className="meetings-header">המפגשים</h2>

      <div className="meetings-cards">

        <article className="meetings-card">
          <h3 className="meetings-card-header">איך אני יכולה לעזור?</h3>

          <p className="meetings-card-text">
            בהדרכת ההורים נתחיל מהמקום שבו אתם נמצאים היום.
          </p>
          <p className="meetings-card-text">
            נכיר את המשפחה שלכם, נבין את האתגרים שמעסיקים אתכם וננסה להסתכל יחד על מה
            שקורה בבית — לא רק על ההתנהגות עצמה, אלא גם על הצרכים שמאחוריה.
          </p>
          <p className="meetings-card-text">
            יחד נחשוב על דרכים וכלים מעשיים שיכולים לעזור לכם ביומיום, מתוך התאמה לכם,
            לילד שלכם ולמשפחה שלכם.
          </p>

          <p className="meetings-card-highlight">
            המטרה היא לא להפוך אתכם להורים אחרים — אלא לעזור לכם להרגיש יותר בטוחים
            בדרך שלכם, להבין טוב יותר את הילדים שלכם ולמצוא דרכים שמתאימות לכם באמת.
          </p>
        </article>

        <article className="meetings-card meetings-card-alt">
          <h3 className="meetings-card-header">הגישה שלי</h3>

          <p className="meetings-card-text">
            אני מאמינה שהתנהגות של ילד היא רק חלק מהסיפור. מאחורי התנגדות, התקף זעם,
            קושי בגבולות או התנהגות שמאתגרת אותנו, יש בדרך כלל צורך שמבקש לקבל מקום.
          </p>
          <p className="meetings-card-text">
            לכן אני לא מחפשת רק איך "להפסיק" התנהגות מסוימת, אלא להבין יחד איתכם מה
            קורה מתחת לפני השטח:
          </p>

          <ul className="meetings-questions">
            <li className="meetings-question">מה הילד שלכם מנסה לומר?</li>
            <li className="meetings-question">מה הוא צריך?</li>
            <li className="meetings-question">ומה אתם, כהורים, מביאים איתכם לתוך הסיטואציה?</li>
          </ul>

          <p className="meetings-card-text">
            אני מאמינה בחינוך מתוך הבנה, בתקשורת, בהקשבה וביכולת לראות את הטוב והאור
            שבילד. אני מאמינה שהורים רוצים להיות הורים טובים — לפעמים הם פשוט צריכים
            מקום לעצור, לחשוב, להבין ולקבל כלים.
          </p>
          <p className="meetings-card-text">
            ההדרכה שלי נעשית בגובה העיניים, ללא שיפוטיות ומתוך הקשבה אמיתית למי שאתם,
            למשפחה שלכם ולמה שאתם מביאים איתכם להורות.
          </p>
        </article>

      </div>

      <div className="meetings-suitable">
        <h3 className="meetings-suitable-header">למי ההדרכה מתאימה?</h3>

        <p className="meetings-suitable-intro">
          אני מלווה בעיקר הורים לילדים צעירים — מגיל שנה ועד גיל בית הספר היסודי.
          <br />
          ההדרכה יכולה להתאים לכם אם אתם מתמודדים עם:
        </p>

        <ul className="meetings-suitable-list">
          {SUITABLE_FOR.map(item => (
            <li className="meetings-suitable-item" key={item}>{item}</li>
          ))}
        </ul>

        <p className="meetings-suitable-note">
          וגם אם אין "בעיה גדולה" — אלא פשוט רצון לעצור, להתייעץ ולקבל כלים להורות.
        </p>
      </div>

    </section>
  )
}
