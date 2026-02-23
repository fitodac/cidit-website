import { staticPath } from "../../utils/staticPath";

export default function Cards() {
	return (
		<div className="mxd-section padding-grid-pre-mtext overflow-hidden mt-50!">
			<div className="mxd-container grid-container">
				{/* Block - Statistics Cards Start */}
				<div className="mxd-block">
					<div className="mxd-stats-cards">
						<div className="container-fluid px-0">
							<div className="row gx-0">
								{/* item */}
								<div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
									<div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
										<div className="mxd-counter w-130">
											<p className="t-140 t-bright">
												El proyecto CoFar utiliza modelos de Machine Learning
												(IA) para predecir los efectos secundarios de terapias
												combinadas, mejorando la seguridad en los tratamientos.
												La plataforma funciona mediante Ingreso de Datos,
												Análisis de Interacciones e Interpretación y
												Recomendaciones.
											</p>
										</div>

										<div className="mxd-stats-cards__btngroup">
											<a
												className="btn btn-anim btn-default btn-outline slide-right-up"
												href={staticPath("/proyectos/cofar")}
											>
												<span className="btn-caption">
													Descargar reporte técnico
												</span>
												<i className="ph-bold ph-arrow-up-right"></i>
											</a>
										</div>

										<div className="mxd-stats-cards__image mxd-stats-cards-image-3">
											<img
												src={staticPath("projects/img/cofar/robot-hand.avif")}
												alt="Illustration"
											/>
										</div>
									</div>
								</div>
								{/* item */}
								<div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
									<div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4">
										<div className="mxd-counter">
											<p className="mxd-counter__descr t-140 t-bright">
												Si eres un profesional de la salud o estás interesado en
												colaboraciones para la identificación de riesgos, puedes
												ponerte en contacto con nosotros.
											</p>
										</div>
										<div className="mxd-stats-cards__btngroup">
											<a
												className="btn btn-anim btn-default btn-outline slide-right-up"
												href={staticPath("/proyectos/cofar")}
											>
												<span className="btn-caption">Quiero sumarme</span>
												<i className="ph-bold ph-arrow-up-right"></i>
											</a>
										</div>
										<div className="mxd-stats-cards__image mxd-stats-cards-image-4">
											<img
												src={staticPath(
													"projects/img/illustrations/800x800_card-image-04.webp"
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
