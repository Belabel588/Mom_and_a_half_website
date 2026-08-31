import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const MAYBE_LINES = [
  'אולי הילד שלכם מתקשה לקבל גבולות, וכל בקשה הופכת למאבק.',
  'אולי יש בבית הרבה התנגדויות, ויכוחים או התקפי זעם.',
  'אולי אתם מרגישים שאתם חוזרים שוב ושוב לאותן סיטואציות ולא בטוחים איך נכון להגיב.',
  'אולי אתם יודעים מה לא עובד — אבל עדיין לא מצאתם את הדרך שמתאימה לכם.',
  'ואולי אתם פשוט רוצים להבין טוב יותר את הילד שלכם, את עצמכם כהורים ואת מה שקורה ביניכם בבית.',
]

export function IssueStart() {
  const [ref, isVisible] = useRevealOnScroll()

  return (
    <section>
      <div id="issue-section-start" ref={ref} className={isVisible ? 'is-visible' : ''}>
        <h2 className="issue-section-header">אולי הגעתם לכאן כי...</h2>

        <p className="issue-section-intro-header">
          אתם אוהבים את הילדים שלכם ורוצים להיות ההורים הכי טובים שאתם יכולים להיות —
          אבל היומיום לפעמים מרגיש מורכב ומתיש.
        </p>

        <ul className="issue-section-list">
          {MAYBE_LINES.map(line => (
            <li className="issue-section-list-item" key={line}>{line}</li>
          ))}
        </ul>

        <p className="issue-section-outro">
          אם מצאתם את עצמכם באחת מהשורות האלה — אתם ממש לא לבד.
          <br />
          אפשר להבין, אפשר ללמוד ואפשר למצוא דרכים חדשות להתמודד.
        </p>
      </div>
    </section>
  )
}
