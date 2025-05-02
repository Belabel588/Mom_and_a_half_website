export function AppHeader() {


  // const handleScroll = (event) => {
  //   event.preventDefault();
  //   const targetId = event.currentTarget.getAttribute("href").substring(1);
  //   const targetElement = document.getElementById(targetId);
  //   if (targetElement) {
  //     window.scrollTo({
  //       top: targetElement.offsetTop,
  //       behavior: "smooth"
  //     });
  //   }
  // };

  return (
    <header>
      <div id="web-main-header">




        <div>
          <nav className="app-header-main-nav">
            <a className="app-header-main-link" href="#">צור קשר</a>
            <a className="app-header-main-link" href="#">המפגשים</a>
            <a className="app-header-main-link" href="#">המלצות</a>
          </nav>
        </div>


        <div className="main-header-logo">
          <img className="main-header-logo-img"
            src="./images/logo-pink-nobcg.png"
            alt="mom and a half logo" />
        </div>


        <div>
          <nav className="app-header-main-nav">
            <a className="app-header-main-link" href="#issue-section-start">מתמודדים</a>
            <a className="app-header-main-link" href="#">אני מאמין</a>
            <a className="app-header-main-link" href="#about-section">קצת עליי</a>
          </nav>



        </div>



      </div>
    </header>
  )
}