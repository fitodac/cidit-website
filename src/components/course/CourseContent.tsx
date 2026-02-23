import InscriptionForm from "./InscriptionForm";
import { staticPath } from "../../utils/staticPath";

export default function CourseContent({ title }: { title: string }) {
	return (
		<>
			<div className="tp-blog-sidebar-area postbox-details-without-ptb mt-21!">
				<div className="container container-1510">
					<div className="row">
						<div className="col-xl-12">
							<div className="postbox-wrapper">
								<article className="postbox-details-item item-border text-md-center">
									<div className="postbox-details-info-wrap flex flex-col items-center">
										<p className="font-medium">Cursos 2026</p>

										<h4 className="postbox-title fs-70 mb-40 max-w-5xl">
											{title}
										</h4>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="postbox-area">
				<div className="container">
					<div className="flex justify-center">
						<div className="w-full max-w-3xl">
							<div className="postbox-wrapper mb-105">
								<div className="postbox-content">
									<h3 className="postbox-title fs-28 mb-15">
										Objetivo del curso
									</h3>
									<p className="">
										Formarte en el análisis, administración y ejecución de
										contratos públicos bajo el modelo FIDIC, incorporando
										herramientas prácticas aplicables al contexto local y
										exigencias internacionales.
									</p>

									<div className="h-20"></div>

									<h3 className="postbox-title fs-28 mb-15">
										Temas principales
									</h3>
									<div className="postbox-details-list">
										<ul>
											<li>Administración contractual de obras públicas</li>
											<li>Introducción y aplicación del modelo FIDIC</li>
											<li>
												Licitaciones y exigencias de organismos multilaterales
											</li>
											<li>Análisis de costos, cronogramas y modificaciones</li>
											<li>Salvaguardas técnicas, sociales y ambientales</li>
											<li>Estrategias para la resolución de conflictos</li>
										</ul>
									</div>
								</div>

								<div className="h-20"></div>

								<div className="postbox-details-author">
									<div className="sidebar-widget-author d-flex align-items-start">
										<div className="sidebar-widget-author-img">
											<img
												src={staticPath("assets/img/inner-image/blog/details/avatar-1.jpg")}
												alt=""
											/>
										</div>
										<div className="postbox-details-content">
											<div className="sidebar-widget-author-content">
												<h4 className="sidebar-widget-author-name">
													Mg. Ing. Mauricio Guglielmi
												</h4>
												<p>
													Especialista en contratos y seguimiento de obras
													internacionales.
													<br />
													Jefe de seguimiento de contratos del FFFIR – Ciudad
													Autónoma de Buenos Aires.
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="h-20"></div>

								<div className="grid gap-8 md:grid-cols-2">
									<div className="postbox-details-author">
										<div className="sidebar-widget-author space-y-10">
											<p className="text-black text-2xl! font-bold!">Fecha</p>

											<p className="text-black text-xl! font-semibold! m-0!">
												Inicio
											</p>
											<p className="text-sm! font-medium!">
												17 de Junio de 2026
											</p>
											<p className="text-black text-xl! font-semibold! m-0!">
												Finalización
											</p>
											<p className="text-sm! font-medium!">
												29 de Julio de 2026
											</p>
										</div>
									</div>

									<div className="postbox-details-author">
										<div className="sidebar-widget-author space-y-10">
											<p className="text-black text-2xl! font-bold!">
												Horarios
											</p>

											<p className="text-black text-xl! font-semibold! m-0!">
												Martes y jueves
											</p>
											<p className="text-sm! font-medium!">18:00 a 19:30</p>

											<p className="text-black text-xl! font-semibold! m-0!">
												Duración total
											</p>
											<p className="text-sm! font-medium!">
												30 horas (5 semanas)
											</p>
										</div>
									</div>

									<div className="postbox-details-author">
										<div className="sidebar-widget-author space-y-10">
											<p className="text-black text-2xl! font-bold!">
												Modalidad
											</p>
											<p className="text-sm! font-medium!">
												100% online (Zoom + Moodle)
											</p>
										</div>
									</div>

									<div className="postbox-details-author">
										<div className="sidebar-widget-author space-y-10">
											<p className="text-black text-2xl! font-bold!">
												Certificación
											</p>
											<p className="text-sm! font-medium!">
												Certificación técnica con aval de CIDIT
											</p>
										</div>
									</div>
								</div>

								<div className="h-30"></div>

								<h3 className="postbox-title fs-28 mb-25 text-center">
									Inversión
								</h3>

								<div className="postbox-details-meta">
									<div className="postbox-author-box">
										<div className="postbox-author-info-wrap flex gap-20 justify-center">
											<div className="postbox-author-info text-start">
												<span>Público general</span>
												<p className="text-black text-3xl! font-bold!">
													Gg. 2.600.000
												</p>
											</div>
											<div className="postbox-author-info text-start">
												<span>Servicios CAVIALPA / CAPACO</span>
												<p className="text-black text-3xl! font-bold!">
													Gs. 2.400.000
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className="h-30"></div>

								<div className="flex gap-10 items-center justify-center [&_p]:text-black!">
									<p>¿Necesitás más información?</p>
									<p className="text-2xl! font-bold!">0981 966 144</p>
								</div>

								<div className="h-10"></div>

								<div className="flex justify-center ">
									<a
										// href="/inscripciones"
										href="#inscription-form"
										className="popup-with-form tp-btn-green tp-btn-anim"
									>
										<span className="tp-btn-text">Quiero suscribirme</span>
										<span>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="21"
												height="8"
												viewBox="0 0 21 8"
												fill="none"
											>
												<path
													d="M0 6.99626L19 7L10.208 1"
													stroke="currentColor"
												/>
											</svg>
										</span>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<InscriptionForm {...{ title }} />
		</>
	);
}
