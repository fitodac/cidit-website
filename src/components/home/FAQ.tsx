export default function FAQ() {
  return (
    <div className="ma-faq-ptb p-relative pt-120 pb-120">
      <div className="container container-1510">
        <div className="row">
          <div className="col-xl-6">
            <div className="tp-faq-title-box p-relative mb-40">
              <span className="tp-section-subtitle tp-split-title">
                // Our Faq
              </span>
              <h3 className="tp-section-title fs-62 tl-unbounded tp-split-title">
                Questions <br /> And Answers
              </h3>
            </div>
            <div className="ma-faq-thumb">
              <img
                className="tp_fade_anim"
                data-delay=".5"
                data-fade-from="top"
                data-ease="bounce"
                src="/assets/img/modern-agency/faq/faq-1.jpg"
                alt=""
              />
              <div className="ma-faq-thumb-2">
                <span>
                  We’re Here <br />
                  to Answer Your <br />
                  Questions
                </span>
              </div>
              <div className="ma-faq-thumb-shape">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="46"
                  viewBox="0 0 64 46"
                  fill="none"
                >
                  <path
                    d="M61.166 28.5242C59.4609 26.4406 48.8265 11.9806 43.7375 16.3693C38.8859 20.5533 47.5845 35.3906 38.8206 37.6098C31.3109 39.5113 21.8555 29.6116 17.2246 24.9861C14.1313 21.8964 12.0867 18.1108 9.44743 14.7305C9.25516 14.4843 7.68489 12.38 8.41239 12.6837"
                    stroke="#010103"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                  <path
                    d="M14.7778 12.2487C12.7833 11.2317 5.83018 5.51905 5.74129 10.1937C5.6938 12.6907 5.82422 14.4388 4.85382 16.7631"
                    stroke="#010103"
                    strokeWidth="2"
                    strokeLinecap="round"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="tp-faq-accordion-wrap">
              <div className="accordions" id="accordionExample">
                <div
                  className="accordion-items active mb-20 tp_fade_anim"
                  data-delay=".3"
                >
                  <div className="accordion-header">
                    <button
                      className="accordion-buttons"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                    >
                      What services does your agency offer?
                      <span className="tp-accordion-icon">
                        <svg
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.06445L8 8.06445L15 1.06445"
                            stroke="black"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        From branding to web development, their team delivered a
                        seamless experience. The attention to detail,
                        responsiveness,
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-items mb-20 tp_fade_anim"
                  data-delay=".3"
                >
                  <div className="accordion-header">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo"
                    >
                      Do you provide custom website solutions?
                      <span className="tp-accordion-icon">
                        <svg
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.06445L8 8.06445L15 1.06445"
                            stroke="black"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        From branding to web development, their team delivered a
                        seamless experience. The attention to detail,
                        responsiveness,
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-items mb-20 tp_fade_anim"
                  data-delay=".3"
                >
                  <div className="accordion-header">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree"
                    >
                      Can you redesign my existing website?
                      <span className="tp-accordion-icon">
                        <svg
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.06445L8 8.06445L15 1.06445"
                            stroke="black"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        From branding to web development, their team delivered a
                        seamless experience. The attention to detail,
                        responsiveness,
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-items mb-20 tp_fade_anim"
                  data-delay=".3"
                >
                  <div className="accordion-header">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFour"
                      aria-expanded="false"
                      aria-controls="collapseFour"
                    >
                      Do you offer digital marketing solutions?
                      <span className="tp-accordion-icon">
                        <svg
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.06445L8 8.06445L15 1.06445"
                            stroke="black"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        From branding to web development, their team delivered a
                        seamless experience. The attention to detail,
                        responsiveness,
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="accordion-items mb-20 tp_fade_anim"
                  data-delay=".3"
                >
                  <div className="accordion-header">
                    <button
                      className="accordion-buttons collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseFive"
                      aria-expanded="false"
                      aria-controls="collapseFive"
                    >
                      Is there a consultation fee?
                      <span className="tp-accordion-icon">
                        <svg
                          width="16"
                          height="10"
                          viewBox="0 0 16 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1 1.06445L8 8.06445L15 1.06445"
                            stroke="black"
                            strokeWidth="1.5"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body">
                      <p>
                        From branding to web development, their team delivered a
                        seamless experience. The attention to detail,
                        responsiveness,
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
