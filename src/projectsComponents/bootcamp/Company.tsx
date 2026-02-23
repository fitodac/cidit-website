import { staticPath } from "../../utils/staticPath";

export default function Company() {
	return (
		<div className="mxd-section padding-grid-pre-mtext">
			<div className="mxd-container grid-container">
				<div className="mxd-block">
					<div className="mxd-section-title pre-grid">
						<div className="container-fluid p-0">
							<img
								src={staticPath("/projects/img/bootcamp/shape-2.svg")}
								alt="Shape"
								className="mxd-move w-101! h-auto -top-50 -left-50 absolute xl:w-240! xl:-left-100 xl:-top-70"
							/>

							<div className="row g-0">
								<div className="col-12 col-xl-10 mxd-grid-item no-margin">
									<div className="mxd-section-title__hrtitle">
										<h3 className="reveal-type anim-uni-in-up">
											Qué podemos hacer con tu empresa y/o organización
										</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Block - Statistics Cards Start */}
				<div className="mxd-block">
					<div className="mxd-stats-cards">
						<div className="container-fluid px-0">
							<div className="row gx-0">
								{/* item */}
								<div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
									<div className="mxd-stats-cards__inner radius-l padding-4 bg-[#EC653B]">
										<p className="t-140 text-white">
											Desarrollar las habilidades y conocimiento de los
											colaboradores de las entidades en tecnología digital a
											través de la metodología de aprendizaje intensivo
											(bootcamp), basadas en las necesidades específicas de
											estas, preparando a las personas y organizaciones para el
											futuro digital, donde la adaptación y la innovación son
											clave para el éxito.
										</p>

										<img
											src={staticPath("/projects/img/bootcamp/shape-1.svg")}
											alt="Illustration"
											className="w-1/2 -right-70 -bottom-40 absolute -rotate-22"
										/>
									</div>
								</div>

								{/* item */}
								<div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
									<div className="mxd-stats-cards__inner radius-l padding-4 bg-[#5a9bc5]">
										<div className="mxd-counter w-130">
											<p className="t-140 text-white">
												Asimismo tenemos un programa de bootcamp en Python
												preparado para formar a jóvenes en 10 semanas,
												incluyendo mini-talleres de habilidades blandas para
												preparar a los jóvenes en la inclusión laboral,
												visiblizar a los egresados en la plataforma de empleos{" "}
												<a
													href="https://bolsa.ciditpy.org/"
													target="_blank"
													className="font-bold!"
												>
													bolsa.ciditpy.org
												</a>{" "}
												y vincularlos con las empresas del medio.
											</p>
										</div>

										<img
											src={staticPath("/projects/img/bootcamp/company-dev.avif")}
											alt="Illustration"
											className="parallax-img-small w-151! h-full! right-0 bottom-0 absolute object-cover"
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Block - Statistics Cards End */}
			</div>
		</div>
	);
}
