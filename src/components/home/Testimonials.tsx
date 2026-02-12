export default function Testimonials() {
	return (
		<div className="ma-testimonial-ptb py-31!">
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-8">
						<div className="ma-testimonial-title-box text-center mb-70">
							<h3 className="tp-section-title text-5xl! tl-unbounded">
								Qué opinan nuestros estudiantes...
							</h3>
						</div>
					</div>
				</div>
				<div className="ma-testimonial-wrap p-relative">
					<div className="swiper tp-testimonial-active">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="ma-testimonial-item">
									<div className="row align-items-center">
										<div className="col-lg-4">
											<div className="ma-testimonial-thumb">
												<img
													src="/assets/img/modern-agency/testimonial/testimonial-1.jpg"
													alt=""
												/>
												<span className="ma-testimonial-quote">
													<svg
														width="28"
														height="26"
														viewBox="0 0 28 26"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M27.332 13.2984V0H15.1352V25.3333L27.332 13.2984Z"
															fill="currentcolor"
														></path>
														<path
															d="M8.47649 14.1197V0H0.665365V20.7215L8.47649 14.1197Z"
															fill="currentcolor"
														></path>
													</svg>
												</span>
											</div>
										</div>
										<div className="col-lg-8">
											<div className="ma-testimonial-wrap">
												<div className="ma-testimonial-content">
													<p>
														Partnering this agency has a transformative
														experience for our business. From the very first
														consultation their showcased an exceptional
														understanding of our brand vision
													</p>
												</div>
												<div className="ma-testimonial-dsc">
													<h4 className="ma-testimonial-dsc-title">
														Dianne Russell
													</h4>
													<span>Brand Manager</span>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="ma-testimonial-arrow d-flex justify-content-end">
						<div className="tp-testimonial-slider-arrow">
							<button className="tp-testimonial-prev">
								<span>
									<svg
										width="28"
										height="10"
										viewBox="0 0 28 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M28 8.99951L2.70855 9.00449L14.4118 1.00781"
											stroke="currentcolor"
											strokeWidth="1.5"
										></path>
									</svg>
								</span>
							</button>
							<button className="tp-testimonial-next">
								<span>
									<svg
										width="28"
										height="10"
										viewBox="0 0 28 10"
										fill="none"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M0 8.99951L25.2915 9.00449L13.5882 1.00781"
											stroke="currentcolor"
											strokeWidth="1.5"
										></path>
									</svg>
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
