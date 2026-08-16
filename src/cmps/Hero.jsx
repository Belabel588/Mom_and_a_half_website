import { useEffect, useState } from 'react'

export function Hero() {






  return (
    <section className="hero-section">


      {/* The headline lives inside the image wrapper so its percentage offsets are
          measured against the photo, not the section, which is taller on phones. */}
      <div className="hero-img-div">
        <picture>
          <source
            media="(max-width: 900px), (max-width: 1024px) and (orientation: portrait)"
            srcSet="./images/Hero-img-11-mobile.jpg" />
          <img className="hero-img" src="./images/Hero-img-11.jpg" alt="Sarit 'Mom and a half' on the couch working and smiling" />
        </picture>

        <div className="hero-section-text">
          <p>זוכרים איך היה לכם ברור איזה הורים אתם רוצים להיות?</p>
        </div>
      </div>

    </section>
  )
}