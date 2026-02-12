export default function About() {
	return (
		<>
			<section className="ma-about-ptb pt-120 pb-100">
				<div className="container container-1510">
					<div className="row">
						<div className="col-xl-4">
							<div className="ma-about-title-box tp_fade_anim" data-delay=".3">
								<span className="tp-section-subtitle">// Quienes Somos</span>
							</div>
						</div>
						<div className="col-xl-8">
							<div className="ma-about-title-box [&_p]:text-lg!">
								{/* 
							<h4
                className="tp-section-title fs-52 tl-unbounded fw-500 text-capitalize mb-30 tp-text-revel tp_fade_anim"
                data-delay=".4"
              >
                world is constantly <br />
                evolving, we are at the <br />
                forefront of shaping.
              </h4> 
							*/}
								<div className="tp_fade_anim space-y-10!" data-delay=".5">
									<p>
										El CIDIT nace en el año 2014, cómo el primer Centro
										Tecnológico en Ingeniería, utilizando el modelo de la
										innovación de la Triple Hélice la (academia, sector privado
										y gobiernos) con la finalidad de ser un articulador entre la
										investigación y el sector de la producción, impulsando la
										innovación, la transferencia de conocimiento y tecnología,
										así como mejorar las competencias y promover el desarrollo
										socioeconómico del Paraguay.
									</p>
									<p>
										La creación del CIDIT responde a la necesidad de contar con
										una instancia que a nivel país articule la oferta y la
										demanda de ciencias y tecnologías (I+D+i) para el sector de
										ingeniería que desde su visión estratégica incorpore actores
										para crear sinergias entre las empresas, el sector público y
										la academia con la finalidad apoyar los procesos de
										desarrollo tecnológico, investigación e innovación.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="sa-about-ptb bg-gray-100/80 pt-150 pb-150">
				<div className="container container-1630">
					<div className="row">
						<div className="col-lg-5 lg:pl-21!">
							<div className="sa-about-counter tp_fade_anim" data-delay=".5">
								<h3
									className="sa-about-counter-title purecounter"
									data-purecounter-duration="1"
									data-purecounter-end="10"
								>
									0
								</h3>
								<span className="text-xl!">Años</span>
							</div>

							<div
								className="sa-about-left d-flex tp_fade_anim"
								data-delay=".6"
							>
								<div className="sa-about-left-shape">
									<img
										data-speed=".9"
										src="assets/img/startup-agancy/about/about-shape-2.png"
										alt=""
									/>
								</div>
								<div className="sa-about-left-thumb">
									<img
										data-speed="1.1"
										src="assets/img/startup-agancy/about/about-thumb-1.jpg"
										alt=""
									/>
								</div>
							</div>
						</div>

						<div className="col-lg-7">
							<div className="sa-about-right d-flex justify-content-between">
								<div className="sa-about-right-text flex-1">
									<h3 className="tp-section-title fs-42 tl-unbounded fw-500 tp-text-revel pb-5!">
										Qué hacemos
									</h3>

									<div className="tp_fade_anim" data-delay=".5">
										<p>
											Identificamos necesidades sobre las cuales diseñamos e
											implementamos proyectos de investigación, agregamos valor
											en iniciativas que aporten nuevas ideas creativas y de
											innovación.
										</p>
									</div>
									<div className="tp_fade_anim" data-delay=".7">
										<p>
											Realizamos asesorías técnicas especializadas, formamos a
											técnicos y actualizamos a profesionales en distintas áreas
											de la ingeniería vial.
										</p>
									</div>
									<div className="tp_fade_anim" data-delay=".9">
										<p>
											Promovemos la formación de jóvenes en tecnología digital y
											su inclusión laboral. Todos estos emprendimientos lo
											realizamos bajo un enfoque de soluciones útiles y de alto
											impacto.
										</p>
									</div>
								</div>
								<div className="tp-clip-anim lg:w-96!" data-speed="1.1">
									<img
										className="tp-anim-img"
										data-animate="true"
										src="assets/img/startup-agancy/about/about-thumb-2.jpg"
										alt=""
									/>
								</div>
							</div>
						</div>
					</div>

					<div className="row lg:mt-27!">
						<div className="col-lg-5 lg:pl-21!">
							<div className="sa-about-right d-flex justify-content-between">
								<div className="sa-about-right-text pt-28!">
									<h3 className="tp-section-title fs-42 tl-unbounded fw-500 tp-text-revel pb-5!">
										Misión
									</h3>

									<div className="tp_fade_anim" data-delay=".5">
										<p>
											Nuestra misión es generar conocimiento y transferir nuevas
											tecnologías para mejorar la calidad de vida de los
											habitantes del Paraguay, a través de la investigación
											aplicada, proyectos de innovación, la formación de
											capacidades en distintos ámbitos. Generamos soluciones a
											través de ideas concretas, que impactan en las personas de
											forma sostenible.
										</p>
									</div>
								</div>
							</div>
						</div>

						<div className="col-lg-7">
							<div className="sa-about-left tp_fade_anim" data-delay=".6">
								<img
									data-speed="1.1"
									src="/assets/img/inner-image/service/thumb-2.jpg"
									alt=""
									className="w-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
