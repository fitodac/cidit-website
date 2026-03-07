import { staticPath } from "../../utils/staticPath";

export default function OtherProjects() {
	return (
		<>
			<div className="service-details-style mt-21!">
				<div className="container">
					<div className="pb-28!">
						<div className="row">
							<div className="col-lg-6 order-lg-2">
								<div className="service-details-content mr-50 mb-30">
									<h2 className="service-details-title mb-20">
										Cursos y Servicios <br />
										en el Sector Vial
									</h2>
									<p className="mb-25">
										CIDIT tiene como propósito impulsar la infraestructura vial
										a través de la formación especializada y el soporte técnico
										empresarial. Nos enfocamos en transferir conocimiento
										práctico y actualizar las competencias de profesionales y
										organismos, asegurando la excelencia técnica en el sector
										transporte.
									</p>
								</div>
							</div>
							<div className="col-lg-6 order-lg-1">
								<div className="service-details-thumb tp-clip-anim mb-30 text-lg-end">
									<img
										className="w-100 tp-anim-img"
										data-animate="true"
										data-speed=".8"
										src={staticPath("assets/img/projects/sector-vial.avif")}
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="pb-39!">
						<div className="row">
							<div className="col-lg-6">
								<div className="service-details-content mr-50 mb-30">
									<h2 className="service-details-title mb-20">
										DJ Code <br />
										Formación en Tecnología
									</h2>
									<p className="mb-25">
										En el entorno actual, aprender lenguajes ya no es
										suficiente. El verdadero reto es aplicar ese conocimiento
										para alcanzar objetivos reales.
									</p>
									<p className="mb-25">
										En DJ CODE, no solo enseñamos código; construimos las
										capacidades estratégicas que tu organización necesita. Vos
										definís el objetivo, nosotros diseñamos la currícula exacta.
									</p>
									<p className="mb-25">
										Con el acompañamiento de nuestros mentores, garantizamos que
										el aprendizaje se traduzca en una práctica efectiva y
										resultados tangibles.
									</p>
									<div
										className="ds-team-btn pt-40 tp_fade_anim"
										data-delay=".6"
									>
										<a
											className="tp-btn-green btn-h-60 tp-btn-anim"
											href={staticPath("projects/djcode")}
										>
											<div className="tp-btn-text">Ver proyecto</div>
											<span>
												<svg
													width="21"
													height="8"
													viewBox="0 0 21 8"
													fill="none"
												>
													<path
														d="M0 6.99626L19 7L10.208 1"
														stroke="currentColor"
													></path>
												</svg>
											</span>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-6">
								<div
									className="service-details-thumb tp-clip-anim mb-30 text-lg-end not-hide-cursor"
									data-cursor="Ver<br>Proyecto"
								>
									<a href="proyectos/djcode" className="d-block cursor-hide">
										<img
											className="w-100 tp-anim-img"
											data-animate="true"
											data-speed=".8"
											src={staticPath("assets/img/projects/djcode-2.avif")}
											alt=""
										/>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
