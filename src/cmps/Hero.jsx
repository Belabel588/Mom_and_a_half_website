export function Hero() {

  return (
    <>
      {/* The headline lives inside the image wrapper so its percentage offsets are
          measured against the photo, not the section, which is taller on phones. */}
      <section className="hero-section">

        <div className="hero-img-div">
          {/* The frame clips the photo; the headline panel is a sibling of it,
              not a child, so that in portrait the panel can sit in the band
              below the cropped photo without being clipped away with it. */}
          <div className="hero-img-frame">
            <picture>
              <source
                media="(max-width: 900px), (max-width: 1024px) and (orientation: portrait)"
                srcSet="./images/Hero-img-11-mobile.jpg" />
              <img className="hero-img" src="./images/Hero-img-11.jpg" alt="Sarit 'Mom and a half' on the couch working and smiling" />
            </picture>
          </div>

          {/* An h1 rather than a <p>: this is the page's main heading, and the
              document had no h1 at all before. Split into two spans so the
              promise carries the weight and the follow-up sits under it. */}
          <div className="hero-section-text">
            <h1 className="hero-title">
              <span className="hero-title-main">אתם רוצים להיות הורים טובים.</span>
              <span className="hero-title-sub">לפעמים פשוט צריך כלים.</span>
            </h1>
          </div>
        </div>

      </section>

      {/* The sub-headline sits in its own band under the photo rather than on it:
          it is far longer than the headline and would not stay readable inside the
          narrow overlay box the headline uses. */}
      <div className="hero-lead">
        <p className="hero-lead-text">
          הדרכת הורים בגובה העיניים, מתוך הקשבה, הבנה וללא שיפוטיות — כדי להבין טוב יותר
          את הילדים שלכם, את מה שקורה בבית ואת הדרך שמתאימה למשפחה שלכם.
        </p>
      </div>
    </>
  )
}
