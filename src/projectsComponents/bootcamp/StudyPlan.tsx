export default function StudyPlan() {
	return (
		<div className="mxd-section padding-pre-grid">
			<div className="mxd-container grid-container">
				<div className="mxd-block">
					<div className="container-fluid px-0">
						<div className="row gx-0">
							<div className="col-12 col-xl-5 mxd-grid-item no-margin">
								<div className="mxd-block__name">
									<h2 className="reveal-type anim-uni-in-up">
										Plan de estudio
									</h2>
								</div>
							</div>

							<div className="col-12 col-xl-6 mxd-grid-item no-margin">
								<div className="mxd-block__content">
									<div className="mxd-block__paragraph">
										<p className="anim-uni-in-up">
											<span>Duración: </span>
											10 semanas.
										</p>
										<p className="anim-uni-in-up">
											<span>Cantidad de horas: </span>
											240 horas.
											<br />
											(incluye los mini-talleres de habilidades blandas) en
											línea.
										</p>
										<p className="anim-uni-in-up">
											<span>Cantidad de módulos: </span>
											10.
											<br />
											(incluye trabajos en línea y exámenes de cada módulo).
										</p>
										<p className="anim-uni-in-up">
											<span>Asistencia en línea.</span>
											<br />
											<span>Apta para principiantes.</span>
										</p>

										<div className="mxd-paragraph__controls anim-uni-in-up">
											<a
												className="btn btn-anim btn-default btn-outline slide-right-up"
												href="#"
											>
												<span className="btn-caption">Descargar programa</span>
												<i className="ph-bold ph-arrow-up-right"></i>
											</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
