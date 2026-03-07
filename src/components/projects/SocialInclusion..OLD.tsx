import { staticPath } from "../../utils/staticPath";

export default function SocialInnovation() {
	return (
		<>
			<div
				className="hr-about-ptb hr-spacing-plr pt-120 pb-120 z-index-1"
				data-bg-color="#fff"
				id="innovacion-social"
			>
				<div className="row">
					<div className="col-xxl-5 col-lg-6">
						<div className="hr-about-thumb fix tp-clip-anim">
							<img
								className="w-100 tp-anim-img"
								data-animate="true"
								data-speed=".8"
								src={staticPath("assets/img/projects/social-inclusion.jpg")}
								alt=""
							/>
						</div>
					</div>
					<div className="col-xxl-7">
						<div className="hr-about-right flex items-cnter h-full!">
							<div className="row align-items-end">
								<div className="col-lg-10">
									<div className="hr-about-content-wrap">
										<div className="hr-about-title-box">
											<span
												className="tp-section-subtitle tp_fade_anim"
												data-delay=".3"
											>
												Nuestros proyectos basados en la
											</span>
											<h4 className="tp-section-title tl-spacegro text-case-int tp-split-title">
												<span className="p-relative text-7xl!">
													Inclusión Social
													<svg
														className="hr-title-shape"
														width="208"
														height="22"
														viewBox="0 0 208 22"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path
															d="M1 19C30.575 6.92602 113.18 -9.97754 207 19"
															stroke="#C9F31D"
															stroke-width="5"
														/>
													</svg>
												</span>
											</h4>
										</div>
										<div
											className="hr-about-content tp_fade_anim"
											data-delay=".5"
										>
											<p className="mb-30">
												En el CIDIT, transformamos el futuro a traves de
												proyectos basados en Inteligencia Artificial.
											</p>
											<p className="mb-40">
												Desarrollamos soluciones tecnologicas diseñadas para
												mejorar la calidad de vida y abrir oportunidades para
												los sectores más vulnerables, construyendo un camino
												hacia la equidad digital y social.
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div
				className="tp-about-banner-ptb not-hide-cursor"
				data-cursor="Ver<br>Proyecto"
			>
				<div className="sa-banner-wrapper p-relative">
					<a href={staticPath("projects/djcode")} className="cursor-hide">
						<img
							data-speed=".8"
							src="assets/img/projects/djcode.webp"
							alt="DJ Code portada"
						/>
					</a>
				</div>
			</div>

			<div className="service-details-style mt-31!">
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

					<div className="pb-45">
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
