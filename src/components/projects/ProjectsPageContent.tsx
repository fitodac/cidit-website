const projects = [
	{
		headline: "GuaraIA",
		subHeadline: "Integrando el idioma guaraní en el ámbito digital",
	},
	{
		headline: "ProteIA",
		subHeadline:
			"Inteligencia artificial para la identificación de complejos proteicos",
	},
	{
		headline: "Cofar",
		subHeadline:
			"Modelos interpretables de Machine Learning para la predicción de efectos secundarios en terapias combinadas",
	},
	{
		headline: "Bootcamp",
		subHeadline: "Creando oportunidades globales para jóvenes de 18 a 29 años",
	},
	{
		headline: "Covida",
		subHeadline: "Inteligencia artificial en favor de la humanidad",
	},
];

export default function ProjectsPageContent() {
	return (
		<>
			<div id="port-showcase-slider-main">
				<div className="port-showcase-slider-spaces p-relative">
					<div
						className="port-showcase-slider-wrap tp-slider-parallax fix"
						id="showcase-slider-holder"
						data-pattern-img="/assets/img/webgl/1.webp"
					>
						<div
							className="swiper-container parallax-slider-active-2 p-relative"
							id="showcase-slider"
						>
							<div className="swiper-wrapper" id="trigger-slides">
								{projects.map((e, idx) => (
									<div className="swiper-slide" key={idx}>
										<div
											className={`slide-wrap ${idx === 0 ? "active" : ""}`}
											data-slide={idx}
										></div>
										<div className="container container-1230">
											<div className="row justify-content-center">
												<div className="col-xl-8">
													<div className="port-showcase-slider-item">
														<div className="port-showcase-slider-content">
															<a href="project-details.html">
																<h4 className="port-showcase-slider-title">
																	<span>{e.headline}</span>
																</h4>
															</a>
															<span className="port-showcase-slider-subtitle">
																<span>{e.subHeadline}</span>
															</span>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
						<div className="tp-showcase-arrow-box d-flex justify-content-between">
							<button className="tp-showcase__button-prev swiper-prev d-inline-flex align-items-center">
								<i className="fas fa-chevron-left"></i>
								<span>Next</span>
							</button>
							<button className="tp-showcase__button-next swiper-next d-inline-flex align-items-center">
								<span>Prev</span>
								<i className="fas fa-chevron-right"></i>
							</button>
						</div>
						<div className="tp-slider-dot d-none d-md-block"></div>
					</div>
				</div>
			</div>

			<div id="canvas-slider" className="canvas-slider">
				<div className="slider-img" data-slide="0">
					<img
						className="slide-img"
						src="/assets/img/webgl/webgl-1.jpg"
						alt=""
					/>
				</div>
				<div className="slider-img" data-slide="1">
					<img
						className="slide-img"
						src="/assets/img/webgl/webgl-2.jpg"
						alt=""
					/>
				</div>
				<div className="slider-img" data-slide="2">
					<img
						className="slide-img"
						src="/assets/img/webgl/webgl-3.jpg"
						alt=""
					/>
				</div>
				<div className="slider-img" data-slide="3">
					<img
						className="slide-img"
						src="assets/img/webgl/webgl-4.jpg"
						alt=""
					/>
				</div>
				<div className="slider-img" data-slide="4">
					<img
						className="slide-img"
						src="assets/img/webgl/webgl-5.jpg"
						alt=""
					/>
				</div>
				<div className="slider-img" data-slide="5">
					<img
						className="slide-img"
						src="assets/img/webgl/webgl-6.jpg"
						alt=""
					/>
				</div>
			</div>
		</>
	);
}
