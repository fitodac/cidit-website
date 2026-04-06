import { staticPath } from "../../utils/staticPath";

export default function SocialInnovation() {
	return (
		<div
			className="hr-about-ptb hr-spacing-plr pt-30 lg:pt-120 pb-40 lg:pb-120 z-index-1"
			data-bg-color="#fff"
			id="innovacion-social"
		>
			<div className="row">
				<div className="col-xxl-5 col-lg-6">
					<div className="hr-about-thumb fix tp-clip-anim mb-30 lg:mb-0">
						<img
							className="w-100 tp-anim-img"
							data-animate="true"
							data-speed=".8"
							src={staticPath("assets/img/projects/social-innovation.jpg")}
							alt=""
						/>
					</div>
				</div>
 
				<div className="col-xxl-7 px-4 lg:px-0">
					<div className="hr-about-right flex items-cnter h-full!">
						<div className="row align-items-end">
							<div className="col-lg-10">
								<div className="hr-about-content-wrap">
									<div className="hr-about-title-box">
										<span
											className="tp-section-subtitle tp_fade_anim"
											data-delay=".3"
										>
											Proyectos de investigación basados en
										</span>
										<h4 className="tp-section-title tl-spacegro text-case-int tp-split-title text-center lg:text-start">
											<span className="p-relative text-3xl lg:text-7xl!">
												Innovación Social
												<svg
													className="hr-title-shape w-full max-w-[208px]"
													width="208"
													height="22"
													viewBox="0 0 208 22"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M1 19C30.575 6.92602 113.18 -9.97754 207 19"
														stroke="#C9F31D"
														stroke-width="5"
													/>
												</svg>
											</span>
										</h4>
									</div>
									<div
										className="hr-about-content tp_fade_anim"
										data-delay=".5"
									>
										<p className="mb-20 lg:mb-30">
											En el CIDIT, transformamos el futuro a traves de proyectos
											basados en Inteligencia Artificial.
										</p>
										<p className="mb-30 lg:mb-40">
											Desarrollamos soluciones tecnologicas diseñadas para
											mejorar la calidad de vida y abrir oportunidades para los
											sectores más vulnerables, construyendo un camino hacia la
											equidad digital y social.
										</p>
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
