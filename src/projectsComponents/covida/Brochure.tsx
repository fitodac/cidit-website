export default function Brochure() {
	return (
		<div className="mxd-section overflow-hidden padding-pre-title">
			<div className="mxd-container grid-container">
				<div className="mxd-block">
					<div className="mxd-stats-cards">
						<div className="container-fluid px-0">
							<div className="mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
								<div className="mxd-stats-cards__inner bg-base-tint radius-m padding-4 bg-[url(/projects/img/covida/brochure-bg.jpg)] bg-no-repeat bg-cover">
									<div className="flex justify-end">
										<div className="mxd-counter [&_*]:text-white! md:w-1/2 lg:w-1/3">
											<h3 className="text-6xl!">
												Inteligencia artificial en favor de la humanidad
											</h3>

											<p className="t-140 t-bright">
												Desarrollamos nuevos procesos de IA que permitieron
												priorizar medicamentos potencialmente efectivos contra
												el SARS-CoV-2.
											</p>
											<p className="t-140 t-bright">
												Las metodologías que implementamos se resumen en cuatro
												partes.
											</p>
											<div className="mt-5">
												<a
													href="/contacto"
													className="text-bright text-2xl! leading-9! inline-flex hover:underline!"
												>
													Si está interesad@ en el Protocolo Ensayo Clínico
													puede ponerse en contacto con nosotros
												</a>
											</div>
										</div>
									</div>

									<div className="mxd-stats-cards__btngroup">
										<a
											className="btn btn-anim btn-default btn-outline slide-right-up border-white! bg-white/20!"
											href="contact.html"
										>
											<span className="btn-caption text-white!">
												Descargar Brochure
											</span>
											<i className="ph-bold ph-arrow-up-right text-white!" />
										</a>
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
