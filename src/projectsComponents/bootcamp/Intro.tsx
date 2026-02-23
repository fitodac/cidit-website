import { staticPath } from "../../utils/staticPath";

export default function Cards() {
	return (
		<div className="mxd-section padding-grid-pre-mtext overflow-hidden -mt-80!">
			<div className="mxd-container grid-container">
				<div className="mxd-block">
					<div className="mxd-stats-cards">
						<div className="container-fluid px-0">
							<div className="row gx-0">
								<div className="col-12 col-xl-7 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-right">
									<div className="mxd-stats-cards__inner radius-m padding-4 bg-yellow-500">
										<div className="w-120 flex flex-col gap-15 relative z-10">
											<h3 className="text-5xl! leading-none!">
												Finalidad del proyecto
											</h3>
											<p className="t-140 t-bright">
												Promover el desarrollo de capacidades digitales y
												laborales en jóvenes, impulsando la empleabilidad y la
												inclusión social mediante programas de formación
												tecnológica, con enfoque territorial y acompañamiento
												integral.
											</p>
										</div>

										<div className="parallax-img-small w-2/3 right-0 inset-y-0 absolute justify-end flex outline!">
											<video
												src={staticPath(
													"projects/img/bootcamp/project-goal.mp4"
												)}
												poster={staticPath(
													"projects/img/bootcamp/project-goal.avif"
												)}
												loop
												muted
												autoPlay
												className="h-full! object-cover object-left mask-l-from-80% mask-l-to-100%"
											/>
										</div>
									</div>
								</div>

								<div className="col-12 col-xl-5 mxd-stats-cards__item mxd-grid-item anim-uni-scale-in-left">
									<div className="mxd-stats-cards__inner radius-m padding-4 bg-[#f9b4bd]">
										<div className="w-3/5 flex flex-col gap-15 relative z-10">
											<h3 className="text-5xl! leading-none!">
												¿Cuál es el enfoque con los beneficiarios?
											</h3>
											<p className="mxd-counter__descr t-140 t-bright">
												Los beneficiarios son jóvenes que se encuentran en
												situación de vulnerabilidad social, con interés en
												adquirir habilidades digitales que les permitan mejorar
												sus oportunidades laborales y de desarrollo personal.
											</p>
										</div>

										<div className="parallax-img-small w-2/3 right-0 inset-y-0 absolute justify-end flex outline!">
											<video
												src={staticPath("projects/img/bootcamp/benefits.mp4")}
												poster={staticPath(
													"projects/img/bootcamp/benefits.avif"
												)}
												loop
												muted
												autoPlay
												className="h-full! object-cover object-left mask-l-from-80% mask-l-to-100%"
											/>
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
