import { staticPath } from "../../utils/staticPath";

export default function HowItWorks() {
	return (
		<div className="mxd-section padding-stacked-section">
			<div className="mxd-container grid-container">
				<div className="mxd-block mxd-grid-item no-margin">
					<div className="content__block loading__fade">
						<div className="stack-wrapper">
							<div className="stack-offset"></div>
							<div className="projects-stack">
								<div className="stack-item">
									<div className="mxd-projects-stack__inner justify-between">
										<div className="mxd-projects-stack__image bg-black">
											<img
												src={staticPath(
													"projects/img/proteia/prediccion-del-interactoma.avif"
												)}
												alt="Ilustración sobre predicción del interactoma"
												className="mask-l-from-20% mask-l-to-80%"
											/>
										</div>

										<div className="mxd-projects-stack__title no-margin flex flex-col gap-10 xl:w-1/3">
											<h2 className="text-8xl! leading-none! permanent-light">
												Predicción del Interactoma
											</h2>
											<p className="text-white text-4xl! leading-normal! text-balanced">
												A partir de información de organismos modelo, inferimos
												las interacciones proteína-proteína en nuevos
												organismos, salud, energía y agricultura, facilitando la
												investigación y desarrollo en estas áreas.
											</p>
										</div>
									</div>
								</div>

								<div className="stack-item">
									<div className="mxd-projects-stack__inner justify-between">
										<div className="mxd-projects-stack__image bg-black">
											<img
												src={staticPath(
													"projects/img/proteia/identificacion-de-complejos.avif"
												)}
												alt="Ilustración sobre identificación de complejos"
												className="mask-l-from-20% mask-l-to-80%"
											/>
										</div>

										<div className="mxd-projects-stack__title no-margin flex flex-col gap-10 xl:w-1/3">
											<h2 className="text-8xl! leading-none! permanent-light">
												Identificación de complejos
											</h2>
											<p className="text-white text-4xl! leading-normal! text-balanced">
												Utilizamos algoritmos avanzados para agrupar las
												proteínas en complejos, revelando sus funciones
												potenciales.
											</p>
										</div>
									</div>
								</div>

								<div className="stack-item">
									<div className="mxd-projects-stack__inner justify-between">
										<div className="mxd-projects-stack__image bg-black">
											<img
												src={staticPath(
													"projects/img/proteia/analisis-funcional.avif"
												)}
												alt="Ilustración sobre análisis funcional"
												className="mask-l-from-20% mask-l-to-80%"
											/>
										</div>

										<div className="mxd-projects-stack__title no-margin flex flex-col gap-10 xl:w-1/3">
											<h2 className="text-8xl! leading-none! permanent-light">
												Análisis funcional
											</h2>
											<p className="text-white text-4xl! leading-normal! text-balanced">
												Validamos los complejos detectados con S2F,
												proporcionando un contexto biológico que puede ser
												crucial para futuras investigaciones.
											</p>
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
