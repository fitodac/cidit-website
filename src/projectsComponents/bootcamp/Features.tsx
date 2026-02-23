import { staticPath } from "../../utils/staticPath";

export default function Features() {
	return (
		<div className="mxd-section padding-grid-pre-mtext overflow-hidden">
			<div className="mxd-container grid-container">
				<div className="mxd-block">
					<div className="mxd-section-title pre-grid">
						<div className="container-fluid p-0">
							<div className="row g-0">
								<div className="col-12 col-xl-10 mxd-grid-item no-margin">
									<div className="mxd-section-title__hrtitle">
										<h3 className="reveal-type anim-uni-in-up text-[#3BB877]!">
											Cual es nuestra propuesta de valor
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Block - Statistics Cards Start */}
				<div className="mxd-block">
					<div className="mxd-stats-cards">
						<div className="container-fluid px-0">
							<div className="row gx-0">
								<div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left h-150!">
									<div className="mxd-stats-cards__inner radius-l padding-4">
										<div className="mxd-counter">
											<p className="mxd-counter__descr t-140 t-bright text-balance">
												Nos adaptamos a las necesidades de las empresas y
												diseñamos soluciones para satisfacer esas demandas.
											</p>
										</div>

										<img
											src={staticPath("projects/img/bootcamp/feature-1.avif")}
											alt="Illustration"
											className="parallax-img-small w-190! h-full! right-0 bottom-0 absolute object-cover object-top-left"
										/>
									</div>
								</div>

								{/* item */}
								<div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right h-150!">
									<div className="mxd-stats-cards__inner bg-base-tint radius-l padding-4">
										<div className="mxd-counter w-130">
											<p className="t-140 t-bright text-balance">
												Nuestro capital humano está compuesto por jóvenes
												comprometidos y versátiles a distintos contextos.
											</p>
										</div>

										<img
											src={staticPath("projects/img/bootcamp/feature-2.avif")}
											alt="Illustration"
											className="parallax-img-small w-130! h-full! right-0 bottom-0 absolute object-top-left"
										/>
									</div>
								</div>

								{/* item */}
								<div className="col-12 col-xl-4 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right h-200!">
									<div className="mxd-stats-cards__inner bg-base-tint radius-l padding-4">
										<div className="mxd-counter w-90">
											<p className="t-140 t-bright text-balance">
												Contamos con mentores jóvenes (egresados de nuestras
												experiencias) que acompañan, asesoran y ayudan a los
												bootcampers en su experiencia.
											</p>
										</div>

										<img
											src={staticPath("projects/img/bootcamp/feature-3.avif")}
											alt="Illustration"
											className="parallax-img-small- w-100! h-full! right-0 bottom-0 absolute object-cover object-top-left"
										/>
									</div>
								</div>

								{/* item */}
								<div className="col-12 col-xl-4 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right h-200!">
									<div className="mxd-stats-cards__inner bg-base-tint radius-l padding-4">
										<div className="mxd-counter w-101">
											<p className="t-140 t-bright text-balance">
												Tenemos un equipo de seguimiento por cada experiencia
												bootcamp para evitar y disminuír la deserción.
											</p>
										</div>

										<img
											src={staticPath("projects/img/bootcamp/feature-4.avif")}
											alt="Illustration"
											className="parallax-img-small- w-80! h-full! right-0 bottom-0 absolute object-cover object-top-left"
										/>
									</div>
								</div>

								{/* item */}
								<div className="col-12 col-xl-4 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right h-200!">
									<div className="mxd-stats-cards__inner bg-base-tint radius-l padding-4">
										<div className="mxd-counter w-101">
											<p className="t-140 t-bright text-balance">
												Visibilizamos a los egresados y los vinculamos con
												potenciales empleadores.
											</p>
										</div>

										<img
											src={staticPath("projects/img/bootcamp/feature-5.avif")}
											alt="Illustration"
											className="parallax-img-small- w-100! h-full! right-0 bottom-0 absolute object-cover object-top-left"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Block - Statistics Cards End */}
			</div>
		</div>
	);
}
