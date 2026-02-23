import { staticPath } from "../../utils/staticPath";

export default function Hero() {
	return (
		<div className="mxd-section">
			<div className="mxd-hero-06">
				<div className="mxd-hero-06__wrap loading-wrap">
					<div className="mxd-hero-06__top">
						<div className="mxd-hero-06__content">
							<div className="mxd-hero-06__video">
								<video
									className="video"
									preload="auto"
									autoPlay
									loop
									muted
									poster={staticPath("projects/video/1920x1080_video-03.webp")}
								>
									<source
										type="video/mp4"
										src={staticPath("projects/img/proteia/proteia-hero.mp4")}
									/>
								</video>
								<div className="hero-06-video__cover"></div>
							</div>
							<div className="mxd-hero-06__data">
								<div className="mxd-hero-06__list"></div>
								<div className="mxd-hero-06__headline">
									<div className="hero-06-headline__descr">
										<p className="loading__item">
											Es un proyecto de investigación que aplica inteligencia
											artificial para identificar complejos proteicos en
											organismos recién secuenciados, proporcionando un mejor
											entenidimiento de los procesos biológicos a nivel celular.
										</p>
									</div>
									<div className="hero-06-headline__content">
										<h1 className="hero-06-headline__title">
											Inteligencia Artificial para la Identificación de
											Complejos Proteicos
										</h1>
										<div className="mxd-hero-06__marquee loading__item">
											<div className="marquee marquee-right--gsap permanent-desktop">
												<div className="marquee__toright">
													<div className="marquee__item one-line item-regular text">
														<p className="marquee__text">
															Inteligencia Artificial para la Identificación de
															Complejos Proteicos
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

					<div className="mxd-hero-06__bottom loading__fade">
						<div className="mxd-hero-06__mark">
							<div className="mxd-hero__mark">
								<span className="mark-icon"></span>
								<span className="mark-text">
									Un puente entre la biología y la tecnología
								</span>
							</div>
						</div>
						<div className="mxd-hero-06__more">
							<a
								className="btn btn-line-medium btn-anim btn-anim-medium slide-down"
								href="#projects"
							>
								<span className="btn-caption">Conocer más</span>
								<i className="ph-bold ph-arrow-elbow-right-down"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
