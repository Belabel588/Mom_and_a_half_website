export function Contact() {
  return (
    <section id="contact-section">

      <div className="contact-section-texts">

        <div className="contact-section-form">

          <div className="contact-section-textbox">
            <h3 className="contact-section-header">
              צרו קשר
            </h3>

            <p className="contact-section-text">
              יש לכם שאלה, התלבטות או פשוט רוצים לדבר?
              <br />
              השאירו פרטים ואחזור אליכם בהקדם.
            </p>
          </div>

          <div className="contact-field">
            <label htmlFor="firstName">שם פרטי</label>
            <input id="firstName" type="text" />
          </div>

          <div className="contact-field">
            <label htmlFor="lastName">שם משפחה</label>
            <input id="lastName" type="text" />
          </div>

          <div className="contact-field">
            <label htmlFor="email">אימייל</label>
            <input id="email" type="email" />
          </div>

          <div className="contact-field">
            <label htmlFor="phone">טלפון</label>
            <input id="phone" type="tel" />
          </div>

          <div className="contact-field">
            <label htmlFor="message">הודעה</label>
            <textarea id="message" rows="5" />
          </div>

          <div className="contact-button-wrapper">
            <button className="contact-submit-button">
              שליחה
            </button>
          </div>

        </div>

      </div>

    </section>
  )
}
