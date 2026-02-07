
export default function Header() {
  return (
  <div
    id="header-sticky"
    className="tp-header-area tp-header-ptb tp-header-blur sticky-white-bg header-transparent"
  >
    <div className="w-full px-6!">
      <div className="flex justify-between gap-10 md:gap-20 md:justify-center">
        <div className="flex items-center">
          <div className="tp-header-logo">
            <a href="/">
              <img
                data-width="150"
                src="/assets/img/logo-white.svg"
                alt=""
                className="main-logo"
              />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex">
          <div className="tp-header-box text-center">
            <div className="tp-header-menu tp-header-dropdown dropdown-white-bg">
              <nav className="tp-mobile-menu-active">
                <ul>
                  {/* <li className="has-dropdown">
                    <a className="tp-btn-anim" href="index-digital-agency.html"
                      >Home</a
                    >
                    <div
                      className="tp-megamenu-wrapper tp-home-image mega-menu megamenu-white-bg"
                    >
                      <div className="tp-home-menu">
                        <div
                          className="row row-cols-1 row-cols-xl-4 row-cols-xxl-5"
                        >
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="index-digital-agency.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-1.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Digital Agency
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="index-digital-marketing.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-6.jpg.png"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Digital Marketing
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="index-creative-agency.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-2.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Creative Agency
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="index-startup-agency.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-5.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Startup Agency
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="index-corporate-agency.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-7.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Corporate Agency
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="index-personal-portfolio.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-11.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Personal Portfolio
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="index-business-consulting.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-8.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Business Consulting
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="index-design-studio.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-4.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Design Studio
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="index-hr-consulting.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-9.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Hr Consulting
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="index-lawyer-agency.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-10.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Lawyer Agency
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="index-modern-agency.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-3.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Modern Agency
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="portfolio-webgl-showcase.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-13.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Portfolio Webgl
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="portfolio-creative-thumb-slider.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-14.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Portfolio Creative Thumb
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="portfolio-interactive-with-hover.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-15.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Portfolio Interactive
                                </h4>
                              </a>
                            </div>
                          </div>
                          <div className="col">
                            <div className="tp-home-menu-item mb-40">
                              <a href="index-shop.html">
                                <div className="tp-home-menu-item-thumb">
                                  <img
                                    
                                    src="/assets/img/menu-img/img-12.jpg"
                                    alt=""
                                  />
                                </div>
                                <h4 className="tp-home-menu-item-title">
                                  Shop Modern
                                </h4>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="has-dropdown">
                    <a href="#">Pages</a>
                    <div
                      className="tp-megamenu-wrapper mega-menu container-1000 megamenu-white-bg"
                    >
                      <div className="row gx-0">
                        <div className="col-xl-3">
                          <div className="tp-megamenu-list">
                            <ul>
                              <li><a href="about.html">About</a></li>
                              <li><a href="about-us.html">About Us</a></li>
                              <li><a href="about-me.html">About Me</a></li>
                              <li><a href="career.html">Career</a></li>
                              <li>
                                <a href="career-details.html">Career Details</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-3">
                          <div className="tp-megamenu-list">
                            <ul>
                              <li><a href="service.html">Service</a></li>
                              <li>
                                <a href="service-2.html">Service Two</a>
                              </li>
                              <li>
                                <a href="service-3.html">Service Three</a>
                              </li>
                              <li>
                                <a href="service-details.html"
                                  >Service Details</a
                                >
                              </li>
                              <li>
                                <a href="job-application-form.html"
                                  >Job Application</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-3">
                          <div className="tp-megamenu-list">
                            <ul>
                              <li><a href="team.html">Team</a></li>
                              <li>
                                <a href="team-details.html">Team Details</a>
                              </li>
                              <li><a href="pricing.html">Pricing</a></li>
                              <li><a href="faq.html">Faq</a></li>
                              <li><a href="404.html">404 error</a></li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-3">
                          <div className="tp-megamenu-list-thumb">
                            <img
                              
                              src="/assets/img/menu-img/menu-sidebar.png.jpeg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="has-dropdown">
                    <a href="project-single.html">Portfolio</a>
                    <div
                      className="tp-megamenu-wrapper mega-menu container-1000 megamenu-white-bg"
                    >
                      <div className="row gx-0">
                        <div className="col-xl-4">
                          <div className="tp-megamenu-list">
                            <ul>
                              <li>
                                <a href="project-two-colum.html"
                                  >Project Two Colum</a
                                >
                              </li>
                              <li>
                                <a href="project-three-colum.html"
                                  >Project Three Colum</a
                                >
                              </li>
                              <li>
                                <a href="project-full.html">Project Full Page</a
                                >
                              </li>
                              <li>
                                <a href="project-nogap.html">Project Grid 3</a>
                              </li>
                              <li>
                                <a href="project-mesonary.html"
                                  >Project mesonary</a
                                >
                              </li>
                              <li>
                                <a href="project-single.html">Project Metro</a>
                              </li>
                              <li>
                                <a href="project-list.html">Project Pinterest</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="tp-megamenu-list">
                            <ul>
                              <li>
                                <a href="project-slider.html">Project Slider</a>
                              </li>
                              <li>
                                <a href="portfolio-webgl-showcase.html"
                                  >Portfolio Webgl</a
                                >
                              </li>
                              <li>
                                <a href="portfolio-creative-skew-slider.html"
                                  >Portfolio Skew Slider</a
                                >
                              </li>
                              <li>
                                <a href="portfolio-creative-thumb-slider.html"
                                  >Portfolio Thumb Slider</a
                                >
                              </li>
                              <li>
                                <a href="portfolio-interactive-with-hover.html"
                                  >Portfolio Interactive</a
                                >
                              </li>
                              <li>
                                <a href="project-details.html"
                                  >Project Details</a
                                >
                              </li>
                              <li>
                                <a href="project-details-2.html"
                                  >Project Details Two</a
                                >
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className="col-xl-4">
                          <div className="tp-megamenu-list-thumb">
                            <img
                              
                              src="/assets/img/menu-img/menu-sidebar-2.png.jpeg"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="has-dropdown">
                    <a href="shop.html">Shop</a>
                    <ul className="tp-submenu submenu">
                      <li><a href="index-shop.html">Shop Modern</a></li>
                      <li><a href="shop.html">Shop Sidebar</a></li>
                      <li><a href="product-details.html">Shop Details</a></li>
                      <li><a href="cart.html">Cart</a></li>
                      <li><a href="checkout.html">Checkout</a></li>
                      <li><a href="login.html">Login</a></li>
                      <li><a href="register.html">Register</a></li>
                    </ul>
                  </li>
                  <li className="has-dropdown">
                    <a href="blog.html">Blog</a>
                    <ul className="tp-submenu submenu">
                      <li><a href="blog.html">Blog</a></li>
                      <li><a href="blog-2.html">Blog Two</a></li>
                      <li><a href="blog-sidebar.html">Blog Sidebar</a></li>
                      <li><a href="blog-sidebar-2.html">Blog Standard</a></li>
                      <li><a href="blog-details.html">Blog Details</a></li>
                      <li>
                        <a href="blog-details-2.html">Blog Details Full Width</a
                        >
                      </li>
                    </ul>
                  </li> */}
                  <li>
                    <a href="/">Inicio</a>
                  </li>
                  <li>
                    <a href="cursos">Cursos</a>
                  </li>
                  <li>
                    <a href="proyectos">Proyectos</a>
                  </li>
                  <li>
                    <a href="publicaciones">Publicaciones</a>
                  </li>
                  <li>
                    <a href="nosotros">Nosotros</a>
                  </li>
                  <li>
                    <a href="contacto">Contacto</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        
        
        <div className="col-xl-3 col-lg-6 col-6 lg:hidden">
          <div className="tp-header-right d-flex align-items-center justify-content-end">
            <div className="tp-header-14-bar-wrap">
              <button className="tp-header-8-bar tp-offcanvas-open-btn inline-flex">
                <span>Menu</span>
                <span>
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H14V1.5H0V0Z" fill="currentcolor" />
                    <path d="M0 6H24V7.5H0V6Z" fill="currentcolor" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}
