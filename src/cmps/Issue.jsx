import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

export function Issue() {
  const [ref, isVisible] = useRevealOnScroll()

  return (
    <section id="issue-section" ref={ref} className={isVisible ? 'is-visible' : ''}>

      <div className="issue-section-img">
        <img className="issue-img" src="./images/issue-section-img-1.jpg" alt="Sarit 'Mom and a half' reading book with a smile" />
      </div>

      <div className="issue-section-texts">

        <div className="issue-section-textbox">
          <h3 className="issue-section-textbox-header">למה בחרתי לעסוק בהדרכת הורים?</h3>

          <p className="issue-section-text">
            כי ילדים ובני אדם תמיד עניינו אותי. אני מרגישה שיש בי רצון ויכולת להבין
            אנשים לעומק, לראות את מה שנמצא מתחת לפני השטח ולהקשיב גם למה שלא תמיד נאמר
            במילים.
            <br />
            אבל מעבר למקצוע וללימודים, יש משהו בעבודה עם משפחות שנוגע בי באופן עמוק.
            חשוב לי לעשות טוב בתוך בית.
            <br />
            אני מאמינה שכאשר הורים מקבלים יותר הבנה, ביטחון וכלים — משהו יכול להשתנות
            באווירה בבית. וכשילד גדל בבית שבו יש תקשורת, הקשבה, גבולות וקבלה — יש לו
            יותר מקום לצמוח ולפרוח.
          </p>
        </div>

        <div className="issue-section-textbox-2">
          <h3 className="issue-section-text-2">
            לראות ילדים שמחים, שמרגישים שרואים אותם ושהם גדלים בתוך אווירה מאפשרת
            וטובה — זה משהו שנמצא ממש בלב שלי.
          </h3>
        </div>
      </div>

    </section>
  )
}
