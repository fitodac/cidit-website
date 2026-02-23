import { staticPath } from "../../utils/staticPath";

export default function HowItWorks() {
	return (
		<div className="mxd-section padding-blog">
			<div className="mxd-container grid-container">
				{/* Block - Section Title Start */}
				<div className="mxd-block">
					<div className="mxd-section-title pre-grid">
						<div className="container-fluid p-0">
							<div className="row g-0">
								<div className="col-12 col-xl-5 mxd-grid-item no-margin">
									<div className="mxd-section-title__hrtitle">
										<h2 className="reveal-type anim-uni-in-up">
											Cómo funciona
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Block - Section Title End */}

				{/* Block - Blog Preview Cards Start */}
				<div className="mxd-block">
					<div className="mxd-blog-preview">
						<div className="container-fluid p-0">
							<div className="row g-0">
								<div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
									<div className="h-140 relative rounded-[5rem] overflow-hidden">
										<img
											src={staticPath("/projects/img/cofar/data-entry.avif")}
											alt="Blog Preview Image"
											className="parallax-img-small size-full! object-cover"
										/>
									</div>

									<div className="mxd-blog-preview__data mt-6!">
										<p className="anim-uni-in-up">
											<span>Ingreso</span> de datos
										</p>
									</div>

									<div className="px-16! mt-6">
										<p className="text-3xl! leading-tight!">
											El usuario especifica los fármacos a evaluar
										</p>
									</div>
								</div>

								<div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
									<div className="h-140 relative rounded-[5rem] overflow-hidden">
										<img
											src={staticPath("/projects/img/cofar/analysis.jpg")}
											alt="Blog Preview Image"
											className="parallax-img-small size-full! object-cover"
										/>
									</div>

									<div className="mxd-blog-preview__data mt-6!">
										<p className="anim-uni-in-up">
											<span>Análisis</span> de interacciones
										</p>
									</div>

									<div className="px-16! mt-6">
										<p className="text-3xl! leading-tight!">
											El modelo de IA revisa patrones de interacciones
											aconocidos y proporciona predicciones sobre posibles
											efectos adversos
										</p>
									</div>
								</div>

								<div className="col-12 col-xl-4 mxd-blog-preview__item mxd-grid-item animate-card-3">
									<div className="h-140 relative rounded-[5rem] overflow-hidden">
										<img
											src={staticPath("/projects/img/cofar/recommendations.avif")}
											alt="Blog Preview Image"
											className="parallax-img-small size-full! object-cover"
										/>
									</div>

									<div className="mxd-blog-preview__data mt-6!">
										<p className="anim-uni-in-up">
											<span>Interpretación</span> y <span>Recomendaciones</span>
										</p>
									</div>

									<div className="px-16! mt-6">
										<p className="text-3xl! leading-tight!">
											La plataforma ofrece resultados que ayudan a los médicos a
											evaluar los riesgos y tomar decisiones informadas
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Block - Blog Preview Cards End */}
			</div>
		</div>
	);
}
