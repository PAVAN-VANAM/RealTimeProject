import React from "react";

const LandPage = () => {
  return (
    <>
      <html>
        <head>
          <meta charset="UTF-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>e-learning</title>
          <meta name="title" content="e-learning" />
          <meta
            name="description"
            content="This is an education html template made by codewithsadee"
          />
          <link rel="shortcut icon" href=".favicon.svg" type="image/svg+xml" />
          <link rel="stylesheet" href="font.css" />
          <link rel="stylesheet" href="style.css" />
          <link rel="preload" as="image" href="hero-banner.png" />
          <link rel="preload" as="image" href="hero-bg.png" />
        </head>

        <body>
          <header class="header" data-header>
            <div class="container">
              <a href="#" class="logo">
                <img src="logo.png" width="145" height="27" alt="" />
              </a>

              <nav class="navbar" data-navbar>
                <div class="navbar-top">
                  <a href="#" class="logo">
                    <img src="logo.png" width="145" height="27" alt="" />
                  </a>

                  <button
                    class="nav-close-btn"
                    aria-label="close menu"
                    data-nav-toggler
                  >
                    <ion-icon
                      name="close-outline"
                      aria-hidden="true"
                    ></ion-icon>
                  </button>
                </div>

                <ul class="navbar-list">
                  <li class="navbar-item">
                    <a href="#" class="navbar-link title-sm" data-nav-link>
                      Home
                    </a>
                  </li>
                  <li class="navbar-item">
                    <a href="#" class="navbar-link title-sm" data-nav-link>
                      Courses
                    </a>
                  </li>
                  <li class="navbar-item">
                    <a href="#" class="navbar-link title-sm" data-nav-link>
                      Blog
                    </a>
                  </li>
                  <li class="navbar-item">
                    <a href="#" class="navbar-link title-sm" data-nav-link>
                      Contacts
                    </a>
                  </li>
                </ul>
              </nav>

              <a href="#" class="btn btn-secondary">
                Login
              </a>
              <button
                class="nav-open-btn"
                aria-label="open menu"
                data-nav-toggler
              >
                <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
              </button>

              <div class="overlay" data-overlay data-nav-toggler></div>
            </div>
          </header>

          <main>
            <article>
              <section
                class="section hero has-bg-image"
                aria-labelledby="hero-label"
                style={{ backgroundImage: `url("hero-bg.png")` }}
              >
                <div class="container">
                  <div class="hero-content">
                    <h1 class="headline-lg" id="hero-label">
                      e-learning <span class="span">ACE engineering </span>{" "}
                      college
                    </h1>
                    <p class="title-md has-before">
                      It is long established fact that reader distracted by the
                      readable content.
                    </p>
                    <div class="btn-group">
                      <a href="#" class="btn btn-primary">
                        Get Started Now
                      </a>
                    </div>
                  </div>
                  <figure class="hero-banner">
                    <img
                      src="img.png"
                      width="590"
                      height="620"
                      alt="hero banner"
                      class="w-100"
                    />
                  </figure>
                </div>
              </section>

              <section
                class="section category has-bg-image"
                aria-labelledby="category-label"
                style={{ backgroundImage: `url("category-bg.png")` }}
              >
                <div class="container">
                  <p
                    class="title-sm text-center section-subtitle"
                    id="category-label"
                  >
                    Course Categories
                  </p>
                  <h2 class="headline-md text-center section-title">
                    Browse Top <span class="span has-after">Categories</span>
                  </h2>

                  <ul class="grid-list">
                    <li>
                      <div class="card category-card">
                        <div class="card-icon">
                          <img
                            src="database.png"
                            width="72"
                            height="72"
                            loading="lazy"
                            alt="Data Science icon"
                          />
                        </div>
                        <div>
                          <h3 class="title-lg">Data Base</h3>
                        </div>
                        <a
                          href="#"
                          class="layer-link"
                          aria-label="Data Science Category"
                        ></a>
                      </div>
                    </li>
                    <li>
                      <div class="card category-card">
                        <div class="card-icon">
                          <img
                            src="os.png"
                            width="72"
                            height="72"
                            loading="lazy"
                            alt="UI/UX Design icon"
                          />
                        </div>
                        <div>
                          <h3 class="title-lg">Operating System</h3>
                        </div>
                        <a
                          href="#"
                          class="layer-link"
                          aria-label="UI/UX Design Category"
                        ></a>
                      </div>
                    </li>
                    <li>
                      <div class="card category-card">
                        <div class="card-icon">
                          <img
                            src="bussiness.png"
                            width="72"
                            height="72"
                            loading="lazy"
                            alt="Modern Physics icon"
                          />
                        </div>
                        <div>
                          <h3 class="title-lg">
                            Business Economics and Financial Analysis
                          </h3>
                        </div>
                        <a
                          href="#"
                          class="layer-link"
                          aria-label="Modern Physics Category"
                        ></a>
                      </div>
                    </li>
                    <li>
                      <div class="card category-card">
                        <div class="card-icon">
                          <img
                            src="software.png"
                            width="72"
                            height="72"
                            loading="lazy"
                            alt="Music Production icon"
                          />
                        </div>
                        <div>
                          <h3 class="title-lg">Software engineering </h3>
                        </div>
                        <a
                          href="#"
                          class="layer-link"
                          aria-label="Music Production Category"
                        ></a>
                      </div>
                    </li>
                    <li>
                      <div class="card category-card">
                        <div class="card-icon">
                          <img
                            src="dmaths.png"
                            width="72"
                            height="72"
                            loading="lazy"
                            alt="Data Science icon"
                          />
                        </div>
                        <div>
                          <h3 class="title-lg">Discrete maths</h3>
                        </div>
                        <a
                          href="#"
                          class="layer-link"
                          aria-label="Data Science Category"
                        ></a>
                      </div>
                    </li>
                    <li>
                      <div class="card category-card">
                        <div class="card-icon">
                          <img
                            src="aptitute.png"
                            width="72"
                            height="72"
                            loading="lazy"
                            alt="Finances icon"
                          />
                        </div>
                        <div>
                          <h3 class="title-lg">Aptitude</h3>
                        </div>
                        <a
                          href="#"
                          class="layer-link"
                          aria-label="Finances Category"
                        ></a>
                      </div>
                    </li>
                  </ul>

                  <a href="#" class="btn btn-primary">
                    View All Categories
                  </a>
                </div>
              </section>

              <section class="section about" aria-labelledby="about-label">
                <div class="container">
                  <figure class="about-banner">
                    <img
                      src="sate.png"
                      width="775"
                      height="685"
                      loading="lazy"
                      alt="about banner"
                      class="w-100"
                    />
                  </figure>

                  <div class="about-content">
                    <p class="title-sm section-subtitle" id="about-label">
                      About e-learning
                    </p>
                    <h2 class="headline-md section-title">
                      We Provide The Best Online{" "}
                      <span class="span has-after">Education</span>
                    </h2>
                    <p class="title-sm section-text"></p>

                    <ul class="progress-list">
                      <li>
                        <div class="progress-label-wrapper">
                          <p class="title-sm">Business Studies</p>
                          <p class="title-sm">86%</p>
                        </div>
                        <div class="progress">
                          <div class="progress-fill red"></div>
                        </div>
                      </li>
                      <li>
                        <div class="progress-label-wrapper">
                          <p class="title-sm">Marketing</p>
                          <p class="title-sm">67%</p>
                        </div>
                        <div class="progress">
                          <div class="progress-fill green"></div>
                        </div>
                      </li>
                      <li>
                        <div class="progress-label-wrapper">
                          <p class="title-sm">Design & Development</p>
                          <p class="title-sm">95%</p>
                        </div>
                        <div class="progress">
                          <div class="progress-fill yellow"></div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              <section class="cta" aria-labelledby="cta-label">
                <div class="container">
                  <h2 class="headline-md section-title" id="cta-label">
                    Education Is About Creating Leaders For Tomorrow
                  </h2>
                  <a href="#" class="btn btn-tertiary">
                    Register Today
                  </a>
                </div>
              </section>
            </article>
          </main>

          <footer class="footer" data-footer>
            <div class="container">
              <div class="footer-brand-wrapper">
                <a href="#" class="logo">
                  <img src="logo.png" width="145" height="27" alt="" />
                </a>
              </div>

              <div class="footer-link-wrapper">
                <ul class="footer-link-list">
                  <li>
                    <h3 class="headline-xs">Explore</h3>
                  </li>
                  <li>
                    <a href="#" class="footer-link">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" class="footer-link">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" class="footer-link">
                      Contacts
                    </a>
                  </li>
                </ul>

                <ul class="footer-link-list">
                  <li>
                    <h3 class="headline-xs">Category</h3>
                  </li>
                  <li>
                    <a href="#" class="footer-link">
                      Design
                    </a>
                  </li>
                  <li>
                    <a href="#" class="footer-link">
                      Development
                    </a>
                  </li>
                  <li>
                    <a href="#" class="footer-link">
                      Marketing
                    </a>
                  </li>
                </ul>
              </div>

              <ul class="social-list">
                <li>
                  <a href="#" class="social-link">
                    <ion-icon
                      name="logo-facebook"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" class="social-link">
                    <ion-icon name="logo-twitter" aria-hidden="true"></ion-icon>
                  </a>
                </li>
                <li>
                  <a href="#" class="social-link">
                    <ion-icon
                      name="logo-linkedin"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </body>
      </html>
    </>
  );
};

export default LandPage;
