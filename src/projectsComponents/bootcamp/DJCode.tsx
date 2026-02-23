import { staticPath } from "../../utils/staticPath";

export default function DJCode() {
	return (
		<div className="mxd-section overflow-hidden">
			<div className="mxd-container">
				<div className="mxd-block">
					<div className="mxd-promo">
						<div className="mxd-promo__inner anim-zoom-out-container bg-purple-950!">
							<img
								src={staticPath("projects/img/bootcamp/djcode.avif")}
								alt="Ilustración DJ Code"
								className="parallax-img-small w-350! h-full! absolute right-0 object-cover mask-l-from-60% -mask-l-to-50% "
							/>

							<div className="mxd-promo__content gap-10! lg:w-1/2! lg:my-61!">
								<h3 className="anim-uni-in-up reveal-type text-8xl! text-white">
									DJ Code
								</h3>

								<div className="space-y-7! [&>*]:text-white! [&>*]:text-3xl!">
									<p className="anim-uni-in-up text-6xl! leading-relaxed">
										Nacimos aprendiendo a hacer bootcamp para jóvenes con
										vulnerabilidad de distintos espacios territoriales en el
										Paraguay desde el año 2023, implementando un proyecto
										denominado ATN/JF-19666-PR, Desarrollo de jóvenes talentos
										para la transformación digital: creación de oportunidades
										globales de empleo, cuya finalidad fue formar a jóvenes a
										través de un bootcamp en la programación en el lenguaje
										Python y facilitar su inserción laboral en el campo de la
										tecnología.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
