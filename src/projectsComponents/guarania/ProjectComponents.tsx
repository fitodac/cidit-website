import { staticPath } from "../../utils/staticPath";

export default function ProjectComponents() {
	return (
		<div className="mxd-section padding-grid-pre-mtext overflow-hidden -mt-120!">
			<div className="mxd-container grid-container">
				{/* Block - Statistics Cards Start */}
				<div className="mxd-block">
					<div className="mxd-stats-cards">
						<div className="container-fluid px-0">
							<div className="row gx-0">
								{/* item */}
								<div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right h-140!">
									<div className="mxd-stats-cards__inner align-end radius-m padding-4 bg-gn-primary-400!">
										<div className="mxd-counter align-end">
											<p className="mxd-counter__descr opposite text-white text-4xl! leading-snug!">
												Diagnósticos para identificaciones de casos de uso y
												áreas prioritarias
											</p>
										</div>
										<div className="mxd-stats-cards__btngroup">
											<a
												className="btn btn-anim btn-default btn-outline opposite slide-right-up"
												href="#"
											>
												<span className="btn-caption">Concé más</span>
												<i className="ph-bold ph-arrow-up-right"></i>
											</a>
										</div>
										<img
											src={staticPath("/projects/img/guarania/card-1-bg.jpg")}
											alt="Illustration"
											className="absolute bottom-0 inset-x-0 object-cover h-4/5! mask-t-from-0"
										/>
									</div>
								</div>
								{/* item */}
								<div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left h-140!">
									<div className="mxd-stats-cards__inner align-end bg-base-tint radius-m padding-4">
										<div className="mxd-stats-cards__btngroup"></div>
										<div className="mxd-counter align-end">
											<p className="mxd-counter__descr text-4xl! leading-snug!">
												Desarrollo de herramientas tecnológicas basadas en IA
												para procesamiento de lenguaje guaraní-paraguayo.
											</p>
										</div>
										<img
											src={staticPath("/projects/img/guarania/card-2-bg.avif")}
											alt="Illustration"
											className="w-200! h-auto -left-40 top-1/2 absolute -mt-50!"
										/>
									</div>
								</div>
								{/* item */}
								<div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right h-140!">
									<div className="mxd-stats-cards__inner bg-[#7bafd1] radius-m padding-4">
										<div className="mxd-counter">
											<p className="mxd-counter__descr text-white text-4xl! leading-snug!">
												Implementación del uso de las herramientas IA a través
												de pruebas piloto en las comunidades.
											</p>
										</div>

										<div className="mxd-stats-cards__image mxd-stats-cards-image-3 w-2/3! h-full!">
											<img
												src={staticPath("/projects/img/guarania/women.avif")}
												alt="Illustration"
												className="w-full h-full! object-contain object-bottom-right"
											/>
										</div>
									</div>
								</div>
								{/* item */}
								<div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left h-140!">
									<div className="mxd-stats-cards__inner radius-m padding-4 bg-gn-primary-400!">
										<div className="mxd-counter">
											<p className="mxd-counter__descr text-white text-4xl! leading-snug!">
												Estrategia de innovación abierta y capacitaciones para
												el desarrollo de productos y/o servicios.
											</p>
										</div>
										<div className="mxd-stats-cards__btngroup">
											<a
												className="btn btn-anim btn-default btn-outline opposite slide-right-up"
												href="#"
											>
												<span className="btn-caption">Quiero sumarme</span>
												<i className="ph-bold ph-arrow-up-right"></i>
											</a>
										</div>

										<div className="mxd-stats-cards__image mxd-stats-cards-image-4">
											<img
												src={staticPath(
													"/projects/img/illustrations/800x800_card-image-04.webp",
												)}
												alt="Illustration"
											/>
										</div>
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
