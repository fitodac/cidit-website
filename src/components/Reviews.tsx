const reviews = [
	{
		picture: "/assets/img/modern-agency/testimonial/testimonial-1.jpg",
		name: "Diego Rubén González",
		position: "Ingeniero",
		review:
			"Me llevé una visión estratégica muy sólida para gestionar contratos y proyectos viales; el curso fue claro, ordenado y realmente útil para aplicar en obra.",
	},
	{
		picture: "/assets/img/modern-agency/testimonial/testimonial-2.jpg",
		name: "Israel Cabrera",
		position: null,
		review:
			"Fue súper práctico y actualizado: entendí todo el proceso de cantera a obra, con docentes que aportan experiencia real. Lo apliqué de inmediato y mejoré decisiones en planta.",
	},
];

export default function Reviews() {
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
								{reviews.map((e, idx) => (
									<div className="ma-testimonial-item" key={idx}>
										<div className="row align-items-center">
											<div className="col-lg-4">
												<div className="ma-testimonial-thumb">
													<img src={e.picture} alt={e.name} />
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
														<p>{e.review}</p>
													</div>
													<div className="ma-testimonial-dsc">
														<h4 className="ma-testimonial-dsc-title">
															{e.name}
														</h4>
														{e.position && <span>{e.position}</span>}
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
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
