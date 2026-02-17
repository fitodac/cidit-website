const projects = [
	{
		headline: "GuaraIA",
		subHeadline: "Integrando el idioma guaraní en el ámbito digital",
		link: "/proyectos/guarania",
		image: "/assets/img/projects/guarania.webp",
	},
	{
		headline: "ProteIA",
		subHeadline:
			"Inteligencia artificial para la identificación de complejos proteicos",
		link: "/proyectos/proteia",
		image: "/assets/img/projects/proteia.webp",
	},
	{
		headline: "Cofar",
		subHeadline:
			"Modelos interpretables de Machine Learning para la predicción de efectos secundarios en terapias combinadas",
		link: "/proyectos/cofar",
		image: "/assets/img/projects/cofar.webp",
	},
	{
		headline: "Bootcamp",
		subHeadline: "Creando oportunidades globales para jóvenes de 18 a 29 años",
		link: "/proyectos/bootcamp",
		image: "/assets/img/projects/bootcamp.webp",
	},
	{
		headline: "Covida",
		subHeadline: "Inteligencia artificial en favor de la humanidad",
		link: "/proyectos/covida",
		image: "/assets/img/projects/covida.webp",
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
									<div className="swiper-slide select-none" key={idx}>
										<div
											className={`slide-wrap ${idx === 0 ? "active" : ""}`}
											data-slide={idx}
										></div>
										<div className="container container-1230">
											<div className="row justify-content-center">
												<div className="col-xl-8">
													<div className="port-showcase-slider-item">
														<div className="port-showcase-slider-content">
															<a href={e.link}>
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
								<span>Anterior</span>
							</button>

							<div className="flex-1 flex items-center justify-center gap-3 text-white text-[0.7rem]">
								<svg
									className="w-5 h-8"
									viewBox="0 0 24 40"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<rect
										x="1.5"
										y="1.5"
										width="21"
										height="37"
										rx="10.5"
										stroke="currentColor"
										strokeWidth="2"
									/>
									<circle
										cx="12"
										cy="12"
										r="3"
										fill="currentColor"
										className="origin-center animate-[mouseWheel_1.2s_ease-in-out_infinite]"
									/>
								</svg>
								<span className="uppercase tracking-wide">
									scrolea para avanzar
								</span>
							</div>

							<button className="tp-showcase__button-next swiper-next d-inline-flex align-items-center">
								<span>Siguiente</span>
								<i className="fas fa-chevron-right"></i>
							</button>
						</div>
						<div className="tp-slider-dot d-none d-md-block"></div>
					</div>
				</div>
			</div>

			<div id="canvas-slider" className="canvas-slider">
				{projects.map((e, idx) => (
					<div className="slider-img" data-slide={idx} key={idx}>
						<img
							className="slide-img h-full! object-cover!"
							src={e.image}
							alt={e.headline}
						/>
					</div>
				))}
			</div>
		</>
	);
}
