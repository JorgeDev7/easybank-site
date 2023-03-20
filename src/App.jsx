// REACT
import { useState } from 'react';

// JS BOOTSTRAP
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';

// Images
import imgs from './assets/images';
const {
  logo,
  iconHam,
  iconClose,
  imgMockups,
  iconOnline,
  iconBudgeting,
  iconOnBoarding,
  iconApi,
  imgCurrency,
  imgRestaurant,
  imgPlane,
  imgConfetti,
  bgIntroDesktop,
} = imgs;

function App() {

  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open);
  }

  if (open) {
    document.querySelector('body').classList.add('ov-h');
  } else {
    document.querySelector('body').classList.remove('ov-h');
  }

  return (
    <>
      <header className="header py-4">
        <div className="container-xl px-5 d-flex align-items-center justify-content-between">
          <a href="/">
            <img
              src={logo}
              alt="logo easybank"
              loading='lazy'
            />
          </a>

          <nav className='header__navegacion d-flex flex-column ' role='navigation' aria-current="page">
            <img
              className='header__icon-ham d-lg-none'
              src={open ? iconClose : iconHam}
              alt="icon hamburger"
              onClick={handleOpen}
              loading='lazy'
            />

            <div className={`overlay ${open ? 'd-block' : 'd-none'} d-lg-flex`}>
              <ul className="header__nav-list me-auto mb-2 mb-lg-0 d-flex flex-column justify-content-start flex-lg-row  gap-lg-5 align-items-lg-start justify-content-lg-center list-unstyled">
                <li className="header__nav-item">
                  <a className="header__nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" aria-current="page" href="#">About</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" aria-current="page" href="#">Contact</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" aria-current="page" href="#">Blog</a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" aria-current="page" href="#">Careers</a>
                </li>
              </ul>
            </div>
          </nav>

          <button className='d-none d-lg-block header__btn' type='button'>Request Invite</button>
        </div>
      </header>

      <div className="hero">
        <img
          src={bgIntroDesktop}
          alt="bg intro image desktop"
          className='d-none d-lg-block hero__img-bg'
        />
        <div className="hero__container container-xl d-flex flex-column flex-lg-row-reverse align-items-center justify-content-center">
          <div className="hero__img">
            <img
              src={imgMockups}
              alt="Mockup hero img"
              loading='lazy'
            />
          </div>
          <div className="hero__content d-flex flex-column gap-5 justify-content-center align-items-center align-items-lg-start">
            <h1 className="hero__title">Next generation digital banking</h1>
            <p className="hero__text">Take your financial life online. Your Easybank account will be a one-stop-shop
              for spending, saving, budgeting, investing, and much more.</p>
            <button className='hero__btn' type='button'>Request Invite</button>
          </div>
        </div>
      </div>

      <main className="main">
        <div className="container-xl">
          <div className="main__head">
            <h2 className="main__title">Why choose Easybank?</h2>
            <p className="main__text">We leverage Open Banking to turn your bank account into your financial hub. Control
              your finances like never before.</p>
          </div>
          <div className="row mt-lg-5">
            <div className="col-md-3">
              <section className="section d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-4 text-center text-lg-start">
                <img
                  className='section__img'
                  src={iconOnline}
                  alt="online banking"
                  loading='lazy'
                />
                <h3 className='section__title'>Online Banking</h3>
                <p className="section__text">Our modern web and mobile applications allow you to keep track of your finances
                  wherever you are in the world.</p>
              </section>
            </div>
            <div className="col-md-3">
              <section className="section d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-4 text-center text-lg-start">
                <img
                  className='section__img'
                  src={iconBudgeting}
                  alt="simple budgeting"
                  loading='lazy'
                />
                <h3 className='section__title'>Simple Budgeting</h3>
                <p className="section__text">See exactly where your money goes each month. Receive notifications when you’re
                  close to hitting your limits.</p>
              </section>
            </div>
            <div className="col-md-3">
              <section className="section d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-4 text-center text-lg-start">
                <img
                  className='section__img'
                  src={iconOnBoarding}
                  alt="fast onboarding"
                  loading='lazy'
                />
                <h3 className='section__title'>Fast Onboarding</h3>
                <p className="section__text">We don’t do branches. Open your account in minutes online and start taking control
                  of your finances right away.</p>
              </section>
            </div>
            <div className="col-md-3">
              <section className="section d-flex flex-column justify-content-center align-items-center align-items-lg-start gap-4 text-center text-lg-start">
                <img
                  className='section__img'
                  src={iconApi}
                  alt="open api"
                  loading='lazy'
                />
                <h3 className='section__title'>Open API</h3>
                <p className="section__text">Manage your savings, investments, pension, and much more from one account. Tracking
                  your money has never been easier.</p>
              </section>
            </div>
          </div>
        </div>
      </main>

      <section className="articles">
        <div className="container-xl">
          <h2 className='articles__heading'>Latest Articles</h2>

          <div className="row">
            <div className="col-md-4 col-lg-3">
              <div className="articles__card card">
                <div className="articles__mask">
                  <img
                    className='articles__img'
                    src={imgCurrency}
                    alt="img money currency" />
                </div>
                <div className="articles__body p-5">
                  <h3 className="articles__subtitle">By Claire Robinson</h3>
                  <h2 className="articles__title">Receive money in any currency with no fees</h2>
                  <p className="articles__text">The world is getting smaller and we’re becoming more mobile. So why should you be
                    forced to only receive money in a single …</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="articles__card card">
                <div className="articles__mask">
                  <img
                    className='articles__img'
                    src={imgRestaurant}
                    alt="img restaurant" />
                </div>
                <div className="articles__body p-5">
                  <h3 className="articles__subtitle">By Wilson Hutton</h3>
                  <h2 className="articles__title">Treat yourself without worrying about money</h2>
                  <p className="articles__text">Our simple budgeting feature allows you to separate out your spending and set
                    realistic limits each month. That means you …</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="articles__card card">
                <div className="articles__mask">
                  <img
                    className='articles__img'
                    src={imgPlane}
                    alt="img plane" />
                </div>

                <div className="articles__body p-5">
                  <h3 className="articles__subtitle">By Wilson Hutton</h3>
                  <h2 className="articles__title">Take your Easybank card wherever you go</h2>
                  <p className="articles__text">We want you to enjoy your travels. This is why we don’t charge any fees on purchases
                    while you’re abroad. We’ll even show you …</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="articles__card card">
                <div className="articles__mask">
                  <img
                    className='articles__img'
                    src={imgConfetti}
                    alt="img confetti" />
                </div>

                <div className="articles__body p-5">
                  <h3 className="articles__subtitle">By Claire Robinson</h3>
                  <h2 className="articles__title">Our invite-only Beta accounts are now live!</h2>
                  <p className="articles__text">After a lot of hard work by the whole team, we’re excited to launch our closed beta.
                    It’s easy to request an invite through the site ...</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container-xl footer__grid">
          <div className="footer__logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="139" height="20"><defs><linearGradient id="a" x1="72.195%" x2="17.503%" y1="0%" y2="100%"><stop offset="0%" stopColor="#33D35E" /><stop offset="100%" stopColor="#2AB6D9" /></linearGradient></defs><g fill="none" fillRule="evenodd"><path fill="hsl(220, 16%, 96%)" fillRule="nonzero" d="M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z" /><g fill="url(#a)"><path d="M10.802 0L0 19.704h5.986L16.789 0z" /><path opacity=".5" d="M18.171 0L7.368 19.704h5.986L24.157 0z" /><path opacity=".15" d="M25.539 0L14.737 19.704h5.986L31.525 0z" /></g></g></svg>
          </div>
          <div className="footer__social d-flex align-items-center gap-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="hsl(220, 16%, 96%)" className="bi bi-facebook" viewBox="0 0 16 16">
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="hsl(220, 16%, 96%)" className="bi bi-youtube" viewBox="0 0 16 16">
              <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="hsl(220, 16%, 96%)" className="bi bi-twitter" viewBox="0 0 16 16">
              <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="hsl(220, 16%, 96%)" className="bi bi-pinterest" viewBox="0 0 16 16">
              <path d="M8 0a8 8 0 0 0-2.915 15.452c-.07-.633-.134-1.606.027-2.297.146-.625.938-3.977.938-3.977s-.239-.479-.239-1.187c0-1.113.645-1.943 1.448-1.943.682 0 1.012.512 1.012 1.127 0 .686-.437 1.712-.663 2.663-.188.796.4 1.446 1.185 1.446 1.422 0 2.515-1.5 2.515-3.664 0-1.915-1.377-3.254-3.342-3.254-2.276 0-3.612 1.707-3.612 3.471 0 .688.265 1.425.595 1.826a.24.24 0 0 1 .056.23c-.061.252-.196.796-.222.907-.035.146-.116.177-.268.107-1-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.286-4.84 2.775 0 4.932 1.977 4.932 4.62 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.919l-.498 1.902c-.181.695-.669 1.566-.995 2.097A8 8 0 1 0 8 0z" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="hsl(220, 16%, 96%)" className="bi bi-instagram" viewBox="0 0 16 16">
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
            </svg>
          </div>
          <div className="footer__lists">
            <ul className="footer__list list-unstyled text-center text-lg-start">
              <li className="footer__item">About Us</li>
              <li className="footer__item">Contact</li>
              <li className="footer__item">Blog</li>
            </ul>
            <ul className="footer__list list-unstyled text-center text-lg-start">
              <li className="footer__item">Careers</li>
              <li className="footer__item">Support</li>
              <li className="footer__item">Privacy Policy</li>
            </ul>
          </div>
          <button type='button' className="footer__btn">Request Invite</button>
          <p className="footer__copy">© Easybank. All Rights Reserved</p>
        </div>
      </footer>
    </>
  )
}

export default App
