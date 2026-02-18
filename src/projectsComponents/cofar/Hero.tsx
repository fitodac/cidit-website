export default function Hero() {
	return (
		<div className="mxd-section padding-stacked-section">
			<div className="mxd-container grid-container">
				{/* Block - Services/Features Stacking Cards Start */}
				<div className="mxd-block mxd-grid-item no-margin">
					<div className="content__block">
						<div className="stack-wrapper in-content-stack">
							<div className="stack-offset"></div>
							<div className="services-stack">
								{/* services stack single item */}
								<div className="stack-item">
									<div className="mxd-services-stack__inner justify-between bg-base-opp">
										<div />

										<div className="mxd-services-stack__info width-60">
											<div className="mxd-services-stack__title width-60">
												<h3 className="opposite">¿Qué es CoFar?</h3>
											</div>

											<p className="t-small-mobile t-opposite">
												Es un proyecto que utiliza modelos interpretables de
												machine learning para predecir los efectos secundarios
												de la combinación de distintos fármacos, apoyando la
												toma de decisiones médicas.
											</p>
										</div>
										<div className="services-stack__image">
											<img
												className="service-img service-img-s"
												src="/projects/img/services/800x800_ser-01.webp"
												alt="Service/Feature Image"
											/>
											<img
												className="service-img service-img-m"
												src="/projects/img/services/1000x1000_ser-01.webp"
												alt="Service/Feature Image"
											/>
										</div>
									</div>
								</div>

								{/* services stack single item */}
								<div className="stack-item">
									<div className="mxd-services-stack__inner justify-between bg-accent">
										<div />

										<div className="flex justify-end">
											<div className="mxd-services-stack__info width-60">
												<div className="mxd-services-stack__title">
													<h3 className="opposite">¿Qué hacemos?</h3>
												</div>

												<p className="t-small-mobile t-opposite">
													CoFar proporciona indicios sobre posibles
													interacciones adversas entre medicamentos, mejorando
													la seguridad en los tratamientos médicos.
												</p>

												<p className="t-small-mobile t-opposite">
													Está diseñado para ser una herramienta de referencia
													para profesionales de la salud, ayudándoles a
													identificar riesgos antes de recetar combinaciones de
													fármacos.
												</p>
											</div>
										</div>

										<div className="services-stack__image">
											<img
												className="service-img service-img-s"
												src="/projects/img/services/800x800_ser-02.webp"
												alt="Service/Feature Image"
											/>
											<img
												className="service-img service-img-m"
												src="/projects/img/services/1000x1000_ser-02.webp"
												alt="Service/Feature Image"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Block - Services/Features Stacking Cards End */}
			</div>
		</div>
	);
}
