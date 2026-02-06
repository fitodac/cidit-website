export default function Footer() {
  return (
    <footer className="tp-footer-7-area pt-110" data-bg-color="#010103">
      <div className="tp-footer-7-main-wrap pb-80">
        <div className="container container-1510">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div
                className="tp-footer-widget mb-40 tp-footer-3-col-1 tp_fade_anim"
                data-delay=".3"
              >
                <div className="tp-footer-widget-info mb-30">
                  <h4 className="tp-footer-widget-title ff-unbounded fs-20 fw-500 mb-30">
                    Address
                  </h4>
                  <span>
                    <a className="tp-line-black" href="#">
                      4517 Washington Ave. Manchester, <br />
                      Kentucky 39495
                    </a>
                  </span>
                  <p>
                    Mail :
                    <a className="tp-line-white" href="mailto:support@gmail.com">
                      support@gmail.com
                    </a>
                  </p>
                  <p>
                    Ph :
                    <a className="tp-line-white" href="tel:012345678">
                      +452-(239) 555-010
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="tp-footer-widget mb-40 tp-footer-3-col-2 tp_fade_anim"
                data-delay=".4"
              >
                <h4 className="tp-footer-widget-title ff-unbounded fs-20 fw-500 mb-30">
                  quick links
                </h4>
                <div className="tp-footer-widget-menu">
                  <ul>
                    <li>
                      <a className="tp-hover-line-white border-up" href="#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a className="tp-hover-line-white border-up" href="#">
                        About Us
                      </a>
                    </li>
                    <li>
                      <a className="tp-hover-line-white border-up" href="#">
                        Services
                      </a>
                    </li>
                    <li>
                      <a className="tp-hover-line-white border-up" href="#">
                        Case Studies
                      </a>
                    </li>
                    <li>
                      <a className="tp-hover-line-white border-up" href="#">
                        Blog
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="tp-footer-widget mb-40 tp-footer-3-col-3 tp_fade_anim"
                data-delay=".5"
              >
                <h4 className="tp-footer-widget-title ff-unbounded fs-20 fw-500 mb-30">
                  Support
                </h4>
                <div className="tp-footer-widget-menu">
                  <ul>
                    <li>
                      <a className="tp-hover-line-white border-up" href="#">
                        Help Centre
                      </a>
                    </li>
                    <li>
                      <a className="tp-hover-line-white border-up" href="#">
                        Privacy policy
                      </a>
                    </li>
                    <li>
                      <a className="tp-hover-line-white border-up" href="#">
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a className="tp-hover-line-white border-up" href="#">
                        Community
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 tp_fade_anim" data-delay=".6">
              <div className="tp-footer-widget mb-40 tp-footer-3-col-4">
                <h4 className="tp-footer-widget-title ff-unbounded fs-20 fw-500 mb-40">
                  Join our newsletter
                </h4>
                <div className="tp-footer-widget-input p-relative">
                  <input type="text" placeholder="Your Email Id" />
                  <div className="tp-footer-widget-input-remember">
                    <input id="remember" type="checkbox" />
                    <label htmlFor="remember">
                      your email is safe with us, we don't spam
                    </label>
                  </div>
                  <button className="tp-btn-green input-hover">
                    Submit Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-footer-7-bottom-wrap">
        <div className="container container-1510">
          <div className="tp-footer-7-bottom">
            <div className="row align-items-center">
              <div className="col-md-8">
                <div
                  className="tp-footer-7-logo mb-40 tp_fade_anim"
                  data-delay=".3"
                  data-fade-from="bottom"
                  data-ease="bounce"
                >
                  <a href="index-digital-agency.html">
                    <img
                      src="/assets/img/others/footer-7-logo.png"
                      alt=""
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div
                  className="ds-footer-btn z-index-1 text-md-end mb-40 tp_fade_anim"
                  data-delay=".5"
                  data-fade-from="bottom"
                  data-ease="bounce"
                >
                  <a className="tp-btn-circle shadow-circle" href="contact-us.html">
                    <span>
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 16 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1 13L13 2L3.85071 3.35308"
                          stroke="currentcolor"
                          strokeWidth="1.5"
                        ></path>
                      </svg>
                    </span>
                    let’s talk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tp-footer-3-copyright-area">
        <div className="container container-1510">
          <div className="ds-copyright-wrap">
            <div className="row">
              <div className="col-xl-12">
                <div className="tp-footer-3-copyright-text text-center">
                  <p>
                    2025 <a className="tp-line-black" href="#">Themepure</a> © All rights
                    reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
