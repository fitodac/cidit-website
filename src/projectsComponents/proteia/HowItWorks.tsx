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
											<h2 className="leading-none! permanent-light text-5xl! md:text-7xl! lg:text-8xl!">
												Predicción del Interactoma
											</h2>
											<p className="text-white leading-normal! text-balanced text-3xl! sm:text-4xl!">
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
											<h2 className="leading-none! permanent-light text-5xl! md:text-7xl! lg:text-8xl!">
												Identificación de complejos
											</h2>
											<p className="text-white leading-normal! text-balanced text-3xl! sm:text-4xl!">
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
											<h2 className="leading-none! permanent-light text-5xl! md:text-7xl! lg:text-8xl!">
												Análisis funcional
											</h2>
											<p className="text-white leading-normal! text-balanced text-3xl! sm:text-4xl!">
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
