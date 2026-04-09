import { staticPath } from "../../utils/staticPath";

export default function Python() {
	return (
		<div id="python-section" className="mxd-section padding-stacked-section">
			<style>{`
				@media (max-width: 1023px) {
					#python-section .pin-spacer {
						padding: 0 !important;
						height: auto !important;
						min-height: 0 !important;
						position: relative !important;
						inset: auto !important;
						display: block !important;
					}
					#python-section .stack-wrapper {
						position: relative !important;
						transform: none !important;
						inset: auto !important;
						width: 100% !important;
						height: auto !important;
						padding: 0 !important;
					}
					#python-section .services-stack {
						height: auto !important;
						min-height: 0 !important;
						display: flex !important;
						flex-direction: column !important;
						gap: 1.5rem !important;
					}
					#python-section .stack-item {
						position: relative !important;
						transform: none !important;
						top: auto !important;
						left: auto !important;
						opacity: 1 !important;
						height: auto !important;
						margin: 0 !important;
						padding: 0 !important;
					}
					#python-section .stack-offset {
						display: none !important;
					}
					#python-section .mxd-services-stack__inner {
						height: auto !important;
						min-height: 550px !important;
						padding-bottom: 2.6rem !important;
					}
				}
			`}</style>
			<div className="mxd-container grid-container">
				<div className="mxd-block mxd-grid-item no-margin">
					<div className="content__block">
						<div className="stack-wrapper in-content-stack">
							<div className="stack-offset"></div>

							<div className="services-stack">
								<div className="stack-item">
									<div className="mxd-services-stack__inner justify-between bg-linear-to-r! from-black! to-stone-700!">
										<div className="mxd-services-stack__controls">
											<div
												className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
												aria-label="Services Page Link"
											>
												<i className="ph ph-arrow-up-right"></i>
											</div>
										</div>

										<div className="mxd-services-stack__title width-60 relative z-20">
											<h3 className="opposite text-5xl! lg:text-[6rem]!">
												¿Qué es Python?
											</h3>
										</div>

										<div className="mxd-services-stack__info width-60 relative z-20">
											<p className="t-small-mobile t-opposite text-balance">
												Python es un lenguaje de programación de alto nivel,
												conocido por su legibilidad y versatilidad. Se utiliza
												en una amplia gama de aplicaciones, incluyendo
												desarrollo web, análisis de datos, inteligencia
												artificial, aprendizaje automático y automatización.
											</p>
											<p className="t-small-mobile t-opposite mt-8! text-balance">
												Python es considerado un lenguaje fácil de aprender para
												principiantes debido a su sintaxis clara y concisa, que
												se asemeja al lenguaje natural.
											</p>
										</div>

										<div className="parallax-img-small w-80! h-full! absolute right-20 bottom-0 z-10 [&>div]:flex! [&>div]:items-center! xl:w-200! xl:h-full!">
											<img
												src={staticPath(
													"projects/img/bootcamp/python-logo.avif"
												)}
												alt="Python logo"
												className="w-full translate-y-1/2"
											/>
										</div>
									</div>
								</div>

								<div className="stack-item">
									<div className="mxd-services-stack__inner justify-between bg-[#724EA0]!">
										<div className="mxd-services-stack__controls">
											<div
												className="btn btn-round btn-round-large btn-base slide-right-up anim-no-delay"
												aria-label="Services Page Link"
											>
												<i className="ph ph-arrow-up-right"></i>
											</div>
										</div>

										<div className="mxd-services-stack__title w-300! relative z-20">
											<h3 className="opposite text-5xl! lg:text-[6rem]!">
												Porqué tomar el curso de Python
											</h3>
										</div>

										<div className="mxd-services-stack__info width-60 relative z-20">
											<p className="t-small-mobile t-opposite text-balance">
												Python se utiliza en una amplia gama de campos, desde
												desarrollo web y ciencia de datos hasta inteligencia
												artificial, lo que lo convierte en una habilidad valiosa
												para diversos roles profesionales, es un lenguaje muy
												versátil y existe una gran demanda en el mercado laboral
												actual.
											</p>
										</div>

										<div></div>

										<img
											src={staticPath("projects/img/bootcamp/kM9pQ3wL.avif")}
											alt="Service/Feature Image"
											className="w-auto! h-250! object-cover right-0 bottom-0 absolute mask-l-from-50%"
										/>
									</div>
								</div>

								<div className="stack-item">
									<div className="mxd-services-stack__inner radius-dark justify-between bg-base-tint">
										<div className="mxd-services-stack__controls">
											<a
												className="btn btn-round btn-round-large btn-opposite slide-right-up anim-no-delay"
												href="services.html"
												aria-label="Services Page Link"
											>
												<i className="ph ph-arrow-up-right"></i>
											</a>
										</div>
										<div className="mxd-services-stack__title width-60 relative z-20">
											<h3 className="text-5xl! lg:text-[6rem]!">
												Para que se usa Python
											</h3>
										</div>
										<div className="mxd-services-stack__info width-60 relative z-20">
											<p className="t-small-mobile text-balance">
												Python es un lenguaje de programación versátil con una
												amplia gama de aplicaciones.
											</p>
											<p className="t-small-mobile mt-8! text-balance">
												Se utiliza comúnmente en desarrollo web, ciencia de
												datos, automatización, aprendisaje automático y
												desarrollo de software.
											</p>
											<p className="t-small-mobile mt-8! text-balance">
												Además, Python es popular para tareas como análisis de
												datos, creación de interfaces gráficas de usuario (GUI)
												y desarrollo de juegos.
											</p>
										</div>

										<div className="services-stack__image">
											{/* <img
												className="service-img service-img-s"
												src={staticPath(
													"projects/img/services/800x800_ser-03.webp"
												)}
												alt="Service/Feature Image"
											/> */}
											<img
												className="service-img- service-img-m-- w-80! h-auto! absolute right-0 top-0 lg:w-200!"
												src={staticPath(
													"projects/img/services/1000x1000_ser-03.webp"
												)}
												alt="Service/Feature Image"
											/>
										</div>
									</div>
								</div>

								<div className="stack-item">
									<div className="mxd-services-stack__inner justify-between bg-[#EC653B]!">
										<div className="mxd-services-stack__controls">
											<a
												className="btn btn-round btn-round-large btn-additional slide-right-up anim-no-delay"
												href="services.html"
												aria-label="Services Page Link"
											>
												<i className="ph ph-arrow-up-right"></i>
											</a>
										</div>
										<div className="mxd-services-stack__title width-40 relative z-20 lg:width-60">
											<h3 className="opposite text-5xl! lg:text-[6rem]!">
												Cuáles son las características de Python
											</h3>
										</div>
										<div className="mxd-services-stack__info width-201 max-lg:columns-1 columns-2 gap-15 relative z-20">
											<p className="t-small-mobile t-opposite- text-balance">
												Es un lenguaje conocido por su sintaxis clara y legible,
												lo que facilita el aprendizaje y uso. Es un lenguaje
												interpretado, lo que significa que el código se ejecuta
												línea por línea.
											</p>
											<p className="t-small-mobile t-opposite- mt-8! text-balance">
												Es multiplataforma, permitiendo su ejecución en
												diferentes sistemas operativos. Python es también un
												lenguaje orientado a objetos y soporta múltiples
												paradigmas de programación, incluyendo la programación
												funcional y la imperativa.
												<br />
												Ideal para ciencia de datos y machine learning, Código
												abierto y gratuito e integración con otros lenguajes.
											</p>
										</div>

										<img
											src={staticPath("projects/img/bootcamp/py-bg-4.avif")}
											alt="Service/Feature Image"
											className="w-auto! h-270! object-cover -right-60 -top-30 absolute mix-blend-lighten drop-shadow-[0_0_20px_rgba(255,223,5,0.7)]"
										/>
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
